// components/pages/building/Layout/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  LayoutGrid,
  Thermometer,
  Wind,
  Zap,
  Sun,
  Snowflake,
  Bot,
  Wrench,
  Shield,
  Key,
  ChevronRight,
  HelpCircle,
  Building2,
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
  { icon: Home, label: "Overview", path: "/building/dashboard" },
  { icon: Users, label: "Occupancy", path: "/building/occupancy" },
  {
    icon: LayoutGrid,
    label: "Space Utilization",
    path: "/building/space-utilization",
  },
  { icon: Thermometer, label: "Comfort", path: "/building/comfort" },
  { icon: Wind, label: "Air Quality", path: "/building/air-quality" },
  { icon: Zap, label: "Energy", path: "/building/energy" },
  { icon: Sun, label: "Lighting", path: "/building/lighting" },
  { icon: Snowflake, label: "HVAC", path: "/building/hvac" },
  { icon: Bot, label: "Automation", path: "/building/automation" },
  { icon: Wrench, label: "Maintenance", path: "/building/maintenance" },
  { icon: Shield, label: "Safety", path: "/building/safety" },
  { icon: Key, label: "Access Control", path: "/building/access-control" },
];

const buildingStats = [
  { label: "Occupancy", value: "78%", color: "text-blue-600" },
  { label: "Comfort", value: "92%", color: "text-green-600" },
  { label: "Energy", value: "85%", color: "text-amber-600" },
];

export default function BuildingSidebar() {
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
                <img src="/plant-master-logo.png" alt="Industry Integra Logo" />
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
                                ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-emerald-600 border-l-4 text-emerald-500"
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
                          ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-emerald-600 border-l-4 text-emerald-500 font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                      }`
                    }
                  >
                    <div
                      className={`p-1.5 rounded-lg ${
                        item.path.includes("/building/")
                          ? "bg-blue-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                  </NavLink>
                );
              })}
            </nav>

            {/* Emergency Section - Only show when expanded */}
            {!collapsed && (
              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg border border-red-200">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Emergency Contacts
                    </p>
                    <p className="text-xs text-gray-500">
                      Building security & maintenance
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white border-red-300 text-red-700 hover:bg-red-50 hover:border-red-500"
                >
                  Emergency Help
                </Button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
