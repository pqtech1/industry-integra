// src/services/trackingService.js
class TrackingService {
  constructor() {
    this.crmApiUrl = "https://techupgrad.in/crm/api/v1/track-visit";
    this.sessionStartTime = Date.now();
    this.currentPage = null;
    this.visitorId = this.getVisitorId();
    this.isInitialized = false;
    this.basename = "/industry-integra";
  }

  // Generate or retrieve visitor ID
  getVisitorId() {
    let visitorId = localStorage.getItem("visitor_id");
    if (!visitorId) {
      visitorId = "visitor_" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("visitor_id", visitorId);
    }
    return visitorId;
  }

  // Get complete path including basename
  getCompletePath() {
    // Combine basename with current path
    let fullPath = window.location.pathname;

    // If basename is not already in the path (for direct navigation)
    if (this.basename && !fullPath.startsWith(this.basename)) {
      fullPath =
        this.basename + (fullPath.startsWith("/") ? "" : "/") + fullPath;
    }
    return fullPath;
  }

  // Initialize tracking with history monitoring
  init(router) {
    if (this.isInitialized) return;

    // Track initial page
    this.trackPageVisit();

    // Set up SPA route change tracking
    this.setupRouteTracking(router);

    // Track session end
    window.addEventListener("beforeunload", this.trackSessionEnd.bind(this));

    this.isInitialized = true;
  }

  setupRouteTracking(router) {
    // For React Router v6
    if (router && router.listen) {
      // Store the unlisten function
      this.unlisten = router.listen((location) => {
        setTimeout(() => {
          this.trackPageVisit();
        }, 100); // Small delay to ensure component is mounted
      });
    } else {
      // Fallback for manual setup
      this.setupManualRouteTracking();
    }
  }

  setupManualRouteTracking() {
    // For SPA navigation (if using React Router)
    if (window.history.pushState) {
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = (...args) => {
        originalPushState.apply(window.history, args);
        setTimeout(() => {
          this.trackPageVisit();
        }, 100);
      };

      window.history.replaceState = (...args) => {
        originalReplaceState.apply(window.history, args);
        setTimeout(() => {
          this.trackPageVisit();
        }, 100);
      };

      window.addEventListener("popstate", () => {
        setTimeout(() => {
          this.trackPageVisit();
        }, 100);
      });
    }
  }

  // Cleanup on unmount
  destroy() {
    if (this.unlisten) {
      this.unlisten();
    }
    this.isInitialized = false;
  }

  async trackPageVisit() {
    const currentPath = window.location.pathname + window.location.search;
    if (this.currentPage === currentPath) {
      return;
    }

    this.currentPage = currentPath;

    try {
      const currentUrl = new URL(window.location.href);
      const pagePath = this.getCompletePath(); // Get full path including basename
      const queryParams = Object.fromEntries(currentUrl.searchParams.entries());

      const payload = {
        domain: window.location.hostname,
        page_path: pagePath, // Now includes /industry-integra/
        application: "industry-integra",
        visitor_id: this.visitorId,
        ...queryParams, // Includes campaign_id, lead_id, email, source, link_type
        referrer: document.referrer,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      // Add page title if available
      if (document.title) {
        payload.page_title = document.title;
      }

      // Send to CRM API
      const response = await fetch(this.crmApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
      });

      const data = await response.json();
      console.log("Page tracked:", data);
      return data;
    } catch (error) {
      console.error("Tracking error:", error);
      this.queueFailedRequest(payload);
    }
  }

  trackSessionEnd() {
    const sessionDuration = Math.floor(
      (Date.now() - this.sessionStartTime) / 1000,
    );

    // Send final ping with session duration
    const currentUrl = new URL(window.location.href);
    const payload = {
      domain: window.location.hostname,
      page_path: currentUrl.pathname,
      application: "industry-integra",
      visitor_id: this.visitorId,
      session_duration: sessionDuration,
      event_type: "session_end",
      ...Object.fromEntries(new URLSearchParams(window.location.search)),
    };

    // Use sendBeacon for reliable delivery during page unload
    navigator.sendBeacon(this.crmApiUrl, JSON.stringify(payload));
  }

  // Manual tracking for specific events
  trackEvent(eventName, eventData = {}) {
    const payload = {
      domain: window.location.hostname,
      page_path: window.location.pathname,
      application: "industry-integra",
      visitor_id: this.visitorId,
      event_type: eventName,
      ...Object.fromEntries(new URLSearchParams(window.location.search)),
      ...eventData,
    };

    this.sendTrackingRequest(payload);
  }

  async sendTrackingRequest(payload) {
    try {
      await fetch(this.crmApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Event tracking error:", error);
      this.queueFailedRequest(payload);
    }
  }

  queueFailedRequest(payload) {
    // Store failed requests in localStorage for retry
    const failedRequests = JSON.parse(
      localStorage.getItem("failed_tracking_requests") || "[]",
    );
    failedRequests.push({
      payload,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem(
      "failed_tracking_requests",
      JSON.stringify(failedRequests.slice(-20)),
    ); // Keep last 20

    // Try to retry on next page load
    this.retryFailedRequests();
  }

  retryFailedRequests() {
    const failedRequests = JSON.parse(
      localStorage.getItem("failed_tracking_requests") || "[]",
    );
    if (failedRequests.length > 0) {
      // Retry failed requests
      failedRequests.forEach(async (request, index) => {
        try {
          await fetch(this.crmApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(request.payload),
          });
          // Remove successful retry
          failedRequests.splice(index, 1);
        } catch (error) {
          console.error("Retry failed:", error);
        }
      });

      localStorage.setItem(
        "failed_tracking_requests",
        JSON.stringify(failedRequests),
      );
    }
  }
}

// Export singleton instance
export const trackingService = new TrackingService();
