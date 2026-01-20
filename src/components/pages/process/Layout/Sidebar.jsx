// components/pages/process/Layout/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  TrendingUp,
  Clock,
  ListTodo,
  HelpCircle,
  ChevronRight,
  Home,
  Workflow,
  Cpu,
  BadgeCheck,
  ShieldCheck,
  DollarSign,
  AlertOctagon,
  LifeBuoy,
  Menu,
  ChevronLeft,
  LogOut,
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
  { icon: Home, label: "Overview", path: "/process/dashboard" },
  { icon: TrendingUp, label: "Throughput", path: "/process/throughput" },
  { icon: Clock, label: "Time Metrics", path: "/process/time-metrics" },
  { icon: ListTodo, label: "Backlog", path: "/process/backlog" },
  { icon: Workflow, label: "Automation", path: "/process/automation" },
  { icon: Cpu, label: "Resources", path: "/process/resources" },
  { icon: BadgeCheck, label: "Quality", path: "/process/quality" },
  { icon: ShieldCheck, label: "Compliance", path: "/process/compliance" },
  { icon: DollarSign, label: "Cost & ROI", path: "/process/cost-roi" },
  { icon: AlertOctagon, label: "Failures", path: "/process/failures" },
  { icon: LifeBuoy, label: "SLA & Recovery", path: "/process/sla-recovery" },
];

export default function ProcessSidebar({ collapsed, onToggleCollapse }) {
  const { logout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <TooltipProvider>
      <aside
        className={`${
          collapsed && !isMobile ? "w-20" : "w-64"
        } bg-white border-r border-gray-200 h-[calc(100vh-4rem)] sticky top-16 transition-all duration-300 flex-shrink-0`}
      >
        <div className="h-full flex flex-col">
          {/* Logo and Toggle Section */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              {!collapsed || isMobile ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-800 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Workflow className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      PlantMaster
                    </p>
                    <p className="text-xs text-gray-500">Process</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-800 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Workflow className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}

              {/* Desktop Collapse Toggle Button */}
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={onToggleCollapse}
                >
                  {collapsed ? (
                    <ChevronRight className="h-4 w-4" />
                  ) : (
                    <ChevronLeft className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                if (collapsed && !isMobile) {
                  // Desktop collapsed state - show icons only with tooltips
                  return (
                    <Tooltip key={item.path}>
                      <TooltipTrigger asChild>
                        <NavLink
                          to={item.path}
                          end={item.path === "/process/dashboard"}
                          className={({ isActive }) =>
                            `flex items-center justify-center p-3 rounded-lg transition-all ${
                              isActive
                                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-l-4 border-green-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`
                          }
                        >
                          <Icon className="h-5 w-5" />
                        </NavLink>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <span className="font-medium">{item.label}</span>
                      </TooltipContent>
                    </Tooltip>
                  );
                }
                // Desktop expanded or mobile state
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/process/dashboard"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                        isActive
                          ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-l-4 border-green-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-green-700"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </NavLink>
                );
              })}
            </nav>

            {/* Help Section - Only show when expanded or on mobile */}
            {(!collapsed || isMobile) && (
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg">
                    <HelpCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Need Help?
                    </p>
                    <p className="text-xs text-gray-500">
                      Contact support team
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white border-gray-300"
                >
                  Get Help
                </Button>
              </div>
            )}

            {/* Logout Button - Collapsed desktop state */}
            {collapsed && !isMobile && (
              <div className="mt-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-full"
                      onClick={logout}
                    >
                      <LogOut className="h-5 w-5 text-gray-600" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">Logout</TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>

          {/* Logout Section - Expanded or mobile state */}
          {(!collapsed || isMobile) && (
            <div className="p-4 border-t border-gray-200">
              <Button
                variant="outline"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </aside>
    </TooltipProvider>
  );
}
