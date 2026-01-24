import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { trackingService } from "../services/trackingService";

const TrackingWrapper = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize tracking with React Router
    trackingService.init({
      listen: (callback) => {
        // Return cleanup function
        const unsubscribe = () => {};
        return unsubscribe;
      },
    });

    // Track page view on route change
    const timer = setTimeout(() => {
      trackingService.trackPageVisit();
    }, 300);

    // Track specific module/page information
    const pathParts = location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const module = pathParts[0]; // 'process', 'energy', 'building', 'factory'
      const page = pathParts[1] || "dashboard";

      trackingService.trackEvent("page_view", {
        module: module,
        page: page,
        full_path: location.pathname,
        search_params: location.search,
      });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return <>{children}</>;
};

export default TrackingWrapper;
