// src/services/trackingService.js
class TrackingService {
  constructor() {
    this.crmApiUrl = "https://techupgrad.in/crm/api/v1/track-visit";
    this.sessionStartTime = Date.now();
    this.visitorId = this.getVisitorId();
    this.isInitialized = false;
    this.basename = "/industry-integra";

    // Duplicate prevention
    this.lastTrackedUrl = null;
    this.lastTrackedTime = 0;
    this.trackingCooldown = 2000; // 2 seconds cooldown
    this.isTracking = false;
  }

  getVisitorId() {
    let visitorId = localStorage.getItem("visitor_id");
    if (!visitorId) {
      visitorId = "visitor_" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("visitor_id", visitorId);
    }
    return visitorId;
  }

  getCompletePath() {
    let fullPath = window.location.pathname;

    if (this.basename && !fullPath.startsWith(this.basename)) {
      fullPath =
        this.basename + (fullPath.startsWith("/") ? "" : "/") + fullPath;
    }

    return fullPath;
  }

  async trackPageVisit() {
    const currentUrl = window.location.href;
    const currentTime = Date.now();

    // 1. Prevent multiple simultaneous tracking calls
    if (this.isTracking) {
      console.log("⚠️ Tracking already in progress, skipping...");
      return;
    }

    // 2. Check if this exact URL was recently tracked
    if (
      this.lastTrackedUrl === currentUrl &&
      currentTime - this.lastTrackedTime < this.trackingCooldown
    ) {
      console.log("⏱️ URL tracked recently, skipping:", currentUrl);
      return;
    }

    this.isTracking = true;
    this.lastTrackedUrl = currentUrl;
    this.lastTrackedTime = currentTime;

    try {
      const currentUrlObj = new URL(window.location.href);
      const pagePath = this.getCompletePath();
      const queryParams = Object.fromEntries(
        currentUrlObj.searchParams.entries(),
      );

      const payload = {
        domain: window.location.hostname,
        page_path: pagePath,
        application: "industry-integra",
        visitor_id: this.visitorId,
        ...queryParams,
        referrer: document.referrer,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      if (document.title) {
        payload.page_title = document.title;
      }

      console.log("📊 Tracking page visit:", pagePath);

      const response = await fetch(this.crmApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
      });

      const data = await response.json();
      console.log("✅ Page tracked successfully:", {
        tracking_id: data.data?.tracking_id,
        page_path: data.data?.page_path,
        timestamp: new Date().toLocaleTimeString(),
      });
      return data;
    } catch (error) {
      console.error("❌ Tracking error:", error);
    } finally {
      // Use setTimeout to prevent rapid consecutive calls
      setTimeout(() => {
        this.isTracking = false;
      }, 500);
    }
  }

  init() {
    if (this.isInitialized) return;

    // Track initial page load
    setTimeout(() => {
      this.trackPageVisit();
    }, 1000); // Delay initial tracking

    // Set up history tracking
    this.setupHistoryTracking();

    this.isInitialized = true;
    console.log("🚀 Tracking service initialized");
  }

  setupHistoryTracking() {
    // Override pushState to track SPA navigation
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = (...args) => {
      originalPushState.apply(history, args);
      this.handleRouteChange();
    };

    history.replaceState = (...args) => {
      originalReplaceState.apply(history, args);
      this.handleRouteChange();
    };

    // Listen to popstate (back/forward navigation)
    window.addEventListener("popstate", this.handleRouteChange.bind(this));
  }

  handleRouteChange() {
    // Debounce route changes to prevent multiple tracking
    if (this.routeChangeTimeout) {
      clearTimeout(this.routeChangeTimeout);
    }

    this.routeChangeTimeout = setTimeout(() => {
      this.trackPageVisit();
    }, 300); // 300ms debounce
  }

  destroy() {
    this.isInitialized = false;
    if (this.routeChangeTimeout) {
      clearTimeout(this.routeChangeTimeout);
    }
  }
}

export const trackingService = new TrackingService();
