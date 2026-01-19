// components/pages/factory/Layout/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Factory,
  Gauge,
  Package,
  Clock,
  Wrench,
  Bot,
  AlertTriangle,
  LineChart,
  Shield,
  Users,
  Cpu,
  ChevronRight,
  HelpCircle,
  Zap,
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
  { icon: Home, label: "Overview", path: "/factory/dashboard" },
  { icon: Gauge, label: "Performance", path: "/factory/performance" },
  { icon: Package, label: "Production", path: "/factory/production" },
  { icon: Clock, label: "Downtime", path: "/factory/downtime" },
  { icon: LineChart, label: "Quality", path: "/factory/quality" },
  { icon: Wrench, label: "Maintenance", path: "/factory/maintenance" },
  { icon: Bot, label: "Automation", path: "/factory/automation" },
  { icon: AlertTriangle, label: "Alerts", path: "/factory/alerts" },
  { icon: Shield, label: "Safety", path: "/factory/safety" },
  { icon: Users, label: "Workforce", path: "/factory/workforce" },
  { icon: Cpu, label: "Machines", path: "/factory/machines" },
  { icon: Zap, label: "Energy", path: "/factory/energy" },
];

const factoryStats = [
  { label: "OEE", value: "94.2%", color: "text-green-600" },
  { label: "Output", value: "2.4K", color: "text-blue-600" },
  { label: "Uptime", value: "98.7%", color: "text-purple-600" },
];

export default function FactorySidebar() {
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
                <img src="../plant-master-logo.png" alt="Industry Integra Logo" />
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
                            `flex items-center justify-center p-3 transition-all ${
                              isActive
                                ? "bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 border-l-4 border-orange-600"
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
                          ? "bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 border-l-4 border-orange-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-orange-700"
                      }`
                    }
                  >
                    <div
                      className={`p-1.5 rounded-lg ${
                        item.path.includes("/factory/")
                          ? "bg-orange-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" />
                  </NavLink>
                );
              })}
            </nav>

            {/* Production Section - Only show when expanded */}
            {!collapsed && (
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg border border-gray-200">
                    <Package className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Production Target
                    </p>
                    <p className="text-xs text-gray-500">
                      Today: 85% of 3,000 units
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
