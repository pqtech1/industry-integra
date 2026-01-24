// App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Import tracking service and wrapper
import { trackingService } from "./services/trackingService";
import TrackingWrapper from "./components/TrackingWrapper";

import Login from "./components/login/Login";
import ModuleSelect from "./components/login/ModuleSelect";
import ProtectedRoute from "./components/ProtectedRoute";

// Process components
import ProcessLayout from "./components/pages/process/Layout/Layout";
import ProcessDashboard from "./components/pages/process/pages/ProcessDashboard";
import ProcessThroughput from "./components/pages/process/pages/ProcessThroughput";
import ProcessTimeMetrics from "./components/pages/process/pages/ProcessTimeMetrics";
import ProcessBacklog from "./components/pages/process/pages/ProcessBacklog";
import ProcessAutomation from "./components/pages/process/pages/ProcessAutomation";
import ProcessResources from "./components/pages/process/pages/ProcessResources";
import ProcessQuality from "./components/pages/process/pages/ProcessQuality";
import ProcessCompliance from "./components/pages/process/pages/ProcessCompliance";
import ProcessCostROI from "./components/pages/process/pages/ProcessCostROI";
import ProcessFailures from "./components/pages/process/pages/ProcessFailures";
import ProcessSLARecovery from "./components/pages/process/pages/ProcessSLARecovery";

// Energy components
import EnergyLayout from "./components/pages/energy/Layout/Layout";
import EnergyDashboard from "./components/pages/energy/pages/EnergyDashboard";
import EnergyConsumption from "./components/pages/energy/pages/EnergyConsumption";
import EnergyCost from "./components/pages/energy/pages/EnergyCost";
import EnergyDemand from "./components/pages/energy/pages/EnergyDemand";
import EnergyLoadProfile from "./components/pages/energy/pages/EnergyLoadProfile";
import EnergyEfficiency from "./components/pages/energy/pages/EnergyEfficiency";
import EnergyPowerQuality from "./components/pages/energy/pages/EnergyPowerQuality";
import EnergyRenewables from "./components/pages/energy/pages/EnergyRenewables";
import EnergyEmissions from "./components/pages/energy/pages/EnergyEmissions";
import EnergyAutomation from "./components/pages/energy/pages/EnergyAutomation";
import EnergyAlerts from "./components/pages/energy/pages/EnergyAlerts";

// Building components
import BuildingLayout from "./components/pages/building/Layout/Layout";
import BuildingDashboard from "./components/pages/building/pages/BuildingDashboard";
import BuildingOccupancy from "./components/pages/building/pages/BuildingOccupancy";
import BuildingSpaceUtilization from "./components/pages/building/pages/BuildingSpaceUtilization";
import BuildingComfort from "./components/pages/building/pages/BuildingComfort";
import BuildingAirQuality from "./components/pages/building/pages/BuildingAirQuality";
import BuildingEnergy from "./components/pages/building/pages/BuildingEnergy";
import BuildingLighting from "./components/pages/building/pages/BuildingLighting";
import BuildingHVAC from "./components/pages/building/pages/BuildingHVAC";
import BuildingAutomation from "./components/pages/building/pages/BuildingAutomation";
import BuildingMaintenance from "./components/pages/building/pages/BuildingMaintenance";
import BuildingSafety from "./components/pages/building/pages/BuildingSafety";
import BuildingAccessControl from "./components/pages/building/pages/BuildingAccessControl";

// Factory components
import FactoryLayout from "./components/pages/factory/Layout/Layout";
import FactoryDashboard from "./components/pages/factory/pages/FactoryDashboard";
import FactoryPerformance from "./components/pages/factory/pages/FactoryPerformance";
import FactoryProduction from "./components/pages/factory/pages/FactoryProduction";
import FactoryDowntime from "./components/pages/factory/pages/FactoryDowntime";
import FactoryQuality from "./components/pages/factory/pages/FactoryQuality";
import FactoryMaintenance from "./components/pages/factory/pages/FactoryMaintenance";
import FactoryAutomation from "./components/pages/factory/pages/FactoryAutomation";
import FactoryAlerts from "./components/pages/factory/pages/FactoryAlerts";
import FactorySafety from "./components/pages/factory/pages/FactorySafety";
import FactoryWorkforce from "./components/pages/factory/pages/FactoryWorkforce";
import FactoryMachines from "./components/pages/factory/pages/FactoryMachines";
import FactoryEnergy from "./components/pages/factory/pages/FactoryEnergy";

// Unauthorized page
import Unauthorized from "./components/Unauthorized";
import Home from "./components/landing/Landing";

// Component to handle route changes and track all navigation
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track every route change with a small delay to ensure page is loaded
    const timer = setTimeout(() => {
      trackingService.trackPageVisit();

      // Also track module/page specific info for better analytics
      const path = location.pathname;
      const searchParams = new URLSearchParams(location.search);
      const params = {};

      // Convert search params to object (including campaign_id, lead_id, email, etc.)
      searchParams.forEach((value, key) => {
        params[key] = value;
      });

      // Extract module and page info from URL
      const pathParts = path.split("/").filter(Boolean);
      if (pathParts.length > 0) {
        const module = pathParts[0];
        const page = pathParts[1] || "dashboard";

        // Track module navigation with all query parameters
        trackingService.trackEvent("module_navigation", {
          module: module,
          page: page,
          full_path: path,
          ...params,
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

function App() {
  // Initialize tracking on app load
  useEffect(() => {
    // Initialize tracking service
    trackingService.init();

    // Track initial app load with query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    urlParams.forEach((value, key) => {
      params[key] = value;
    });

    trackingService.trackEvent("app_loaded", {
      app_name: "Industry Integra",
      version: "1.0.0",
      ...params,
    });

    // Set up session heartbeat to keep track of active sessions
    const heartbeatInterval = setInterval(() => {
      trackingService.trackEvent("session_heartbeat", {
        active_time: Math.floor(
          (Date.now() - trackingService.sessionStartTime) / 1000,
        ),
      });
    }, 300000); // Every 5 minutes

    // Cleanup on app unmount
    return () => {
      clearInterval(heartbeatInterval);
      trackingService.destroy();
    };
  }, []);

  return (
    <Router basename="/industry-integra">
      <AuthProvider>
        {/* RouteChangeTracker listens to all route changes and triggers tracking */}
        <RouteChangeTracker />

        <Routes>
          {/* Public Routes - Wrapped in TrackingWrapper */}
          <Route
            path="/"
            element={
              <TrackingWrapper>
                <Home />
              </TrackingWrapper>
            }
          />

          <Route
            path="/login"
            element={
              <TrackingWrapper>
                <Login />
              </TrackingWrapper>
            }
          />

          <Route
            path="/unauthorized"
            element={
              <TrackingWrapper>
                <Unauthorized />
              </TrackingWrapper>
            }
          />

          {/* Module Selection Page - Only for Master Admin */}
          <Route
            path="/modules"
            element={
              <ProtectedRoute allowedRoles={["master"]}>
                <TrackingWrapper>
                  <ModuleSelect />
                </TrackingWrapper>
              </ProtectedRoute>
            }
          />

          {/* Process Module Routes */}
          <Route
            path="/process"
            element={
              <ProtectedRoute allowedRoles={["master", "user"]}>
                <TrackingWrapper>
                  <ProcessLayout />
                </TrackingWrapper>
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<ProcessDashboard />} />
            <Route path="throughput" element={<ProcessThroughput />} />
            <Route path="time-metrics" element={<ProcessTimeMetrics />} />
            <Route path="backlog" element={<ProcessBacklog />} />
            <Route path="automation" element={<ProcessAutomation />} />
            <Route path="resources" element={<ProcessResources />} />
            <Route path="quality" element={<ProcessQuality />} />
            <Route path="compliance" element={<ProcessCompliance />} />
            <Route path="cost-roi" element={<ProcessCostROI />} />
            <Route path="failures" element={<ProcessFailures />} />
            <Route path="sla-recovery" element={<ProcessSLARecovery />} />
          </Route>

          {/* Energy Module Routes */}
          <Route
            path="/energy"
            element={
              <ProtectedRoute
                allowedRoles={["master", "user", "energy-manager"]}
              >
                <TrackingWrapper>
                  <EnergyLayout />
                </TrackingWrapper>
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<EnergyDashboard />} />
            <Route path="consumption" element={<EnergyConsumption />} />
            <Route path="cost" element={<EnergyCost />} />
            <Route path="demand" element={<EnergyDemand />} />
            <Route path="load-profile" element={<EnergyLoadProfile />} />
            <Route path="efficiency" element={<EnergyEfficiency />} />
            <Route path="power-quality" element={<EnergyPowerQuality />} />
            <Route path="renewables" element={<EnergyRenewables />} />
            <Route path="emissions" element={<EnergyEmissions />} />
            <Route path="automation" element={<EnergyAutomation />} />
            <Route path="alerts" element={<EnergyAlerts />} />
          </Route>

          {/* Building Module Routes */}
          <Route
            path="/building"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "master",
                  "user",
                  "facilities-manager",
                  "building-admin",
                ]}
              >
                <TrackingWrapper>
                  <BuildingLayout />
                </TrackingWrapper>
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<BuildingDashboard />} />
            <Route path="occupancy" element={<BuildingOccupancy />} />
            <Route
              path="space-utilization"
              element={<BuildingSpaceUtilization />}
            />
            <Route path="comfort" element={<BuildingComfort />} />
            <Route path="air-quality" element={<BuildingAirQuality />} />
            <Route path="energy" element={<BuildingEnergy />} />
            <Route path="lighting" element={<BuildingLighting />} />
            <Route path="hvac" element={<BuildingHVAC />} />
            <Route path="automation" element={<BuildingAutomation />} />
            <Route path="maintenance" element={<BuildingMaintenance />} />
            <Route path="safety" element={<BuildingSafety />} />
            <Route path="access-control" element={<BuildingAccessControl />} />
          </Route>

          {/* Factory Module Routes */}
          <Route
            path="/factory"
            element={
              <ProtectedRoute
                allowedRoles={[
                  "master",
                  "user",
                  "production-manager",
                  "factory-admin",
                ]}
              >
                <TrackingWrapper>
                  <FactoryLayout />
                </TrackingWrapper>
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FactoryDashboard />} />
            <Route path="performance" element={<FactoryPerformance />} />
            <Route path="production" element={<FactoryProduction />} />
            <Route path="downtime" element={<FactoryDowntime />} />
            <Route path="quality" element={<FactoryQuality />} />
            <Route path="maintenance" element={<FactoryMaintenance />} />
            <Route path="automation" element={<FactoryAutomation />} />
            <Route path="alerts" element={<FactoryAlerts />} />
            <Route path="safety" element={<FactorySafety />} />
            <Route path="workforce" element={<FactoryWorkforce />} />
            <Route path="machines" element={<FactoryMachines />} />
            <Route path="energy" element={<FactoryEnergy />} />
          </Route>

          {/* Catch-all route - redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
