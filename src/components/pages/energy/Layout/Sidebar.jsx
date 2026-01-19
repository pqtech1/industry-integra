// components/pages/energy/Layout/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Zap,
  DollarSign,
  TrendingUp,
  BarChart3,
  Gauge,
  Activity,
  Sun,
  CloudRain,
  Bot,
  Bell,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  { icon: Home, label: "Overview", path: "/energy/dashboard" },
  { icon: Zap, label: "Consumption", path: "/energy/consumption" },
  { icon: DollarSign, label: "Cost", path: "/energy/cost" },
  { icon: TrendingUp, label: "Demand", path: "/energy/demand" },
  { icon: BarChart3, label: "Load Profile", path: "/energy/load-profile" },
  { icon: Gauge, label: "Efficiency", path: "/energy/efficiency" },
  { icon: Activity, label: "Power Quality", path: "/energy/power-quality" },
  { icon: Sun, label: "Renewables", path: "/energy/renewables" },
  { icon: CloudRain, label: "Emissions", path: "/energy/emissions" },
  { icon: Bot, label: "Automation", path: "/energy/automation" },
  { icon: Bell, label: "Alerts", path: "/energy/alerts" },
];

const quickStats = [
  { label: "Today's Usage", value: "45.2 MWh", color: "text-blue-600" },
  { label: "Cost Saved", value: "$2.8K", color: "text-green-600" },
  { label: "Carbon Saved", value: "12.5t", color: "text-emerald-600" },
];

export default function EnergySidebar() {
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider>
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-white border-r border-gray-200 h-[calc(100vh-4rem)] sticky top-16 transition-all duration-300 hidden lg:block`}
      >
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="plant-master-logo.png" alt="Industry Integra Logo" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setCollapsed(!collapsed)}
              >
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    collapsed ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                if (collapsed) {
                  return (
                    <Tooltip key={item.path}>
                      <TooltipTrigger asChild>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `flex items-center justify-center p-3 rounded-lg transition-all ${
                              isActive
                                ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-l-4 border-emerald-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`
                          }
                        >
                          <Icon className="h-5 w-5" />
                        </NavLink>
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.label}</TooltipContent>
                    </Tooltip>
                  );
                }
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 transition-all group ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-l-4 border-emerald-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-emerald-700"
                      }`
                    }
                  >
                    <div
                      className={`p-1.5 rounded-lg ${
                        item.path.includes("/energy/")
                          ? "bg-emerald-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
                  </NavLink>
                );
              })}
            </nav>

            {/* Help Section - Only show when expanded */}
            {!collapsed && (
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg border border-gray-200">
                    <HelpCircle className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Energy Support
                    </p>
                    <p className="text-xs text-gray-500">
                      24/7 monitoring assistance
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white border-gray-300 hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-700"
                >
                  Contact Energy Team
                </Button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
