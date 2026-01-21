// components/pages/factory/Layout/Sidebar.jsx
import React, { useState, useEffect } from "react";
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
  Zap,
  ChevronRight,
  HelpCircle,
  LogOut,
  X,
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

export default function FactorySidebar({
  collapsed,
  onToggleCollapse,
  mobileSidebarOpen,
  onMobileClose,
}) {
  const { logout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle click outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileSidebarOpen &&
        isMobile &&
        !event.target.closest("aside") &&
        !event.target.closest("[data-menu-button]")
      ) {
        onMobileClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileSidebarOpen, isMobile, onMobileClose]);

  return (
    <>
      {/* Mobile Overlay */}
      {mobileSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300"
          onClick={onMobileClose}
        />
      )}

      <TooltipProvider>
        <aside
          className={`
            ${collapsed && !isMobile ? "w-20" : "w-64"}
            ${mobileSidebarOpen && isMobile ? "translate-x-0" : "-translate-x-full"}
            ${!isMobile ? "translate-x-0" : ""}
            bg-white border-r border-gray-200 h-[calc(100vh-4rem)] 
            fixed lg:sticky top-16 left-0 z-40
            transition-all duration-300 flex-shrink-0
            ${isMobile ? "shadow-xl" : ""}
          `}
        >
          <div className="h-full flex flex-col overflow-y-auto">
            {/* Logo Section */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                {!collapsed || isMobile ? (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-800 to-amber-600 rounded-lg flex items-center justify-center">
                      <Factory className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Factory Operations
                      </p>
                      <p className="text-xs text-gray-500">Production Hub</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-800 to-amber-600 rounded-lg flex items-center justify-center">
                      <Factory className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  {/* Mobile close button */}
                  {isMobile && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 lg:hidden"
                      onClick={onMobileClose}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}

                  {/* Desktop collapse toggle */}
                  {!isMobile && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={onToggleCollapse}
                    >
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          collapsed ? "" : "rotate-180"
                        }`}
                      />
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-4">
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  if (collapsed && !isMobile) {
                    return (
                      <Tooltip key={item.path}>
                        <TooltipTrigger asChild>
                          <NavLink
                            to={item.path}
                            end={item.path === "/factory/dashboard"}
                            className={({ isActive }) =>
                              `flex items-center justify-center p-3 rounded-lg transition-all relative ${
                                isActive
                                  ? "bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`
                            }
                            onClick={() => isMobile && onMobileClose()}
                          >
                            <Icon className="h-5 w-5" />
                            {({ isActive }) =>
                              isActive && (
                                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-orange-600 rounded-full"></div>
                              )
                            }
                          </NavLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <span className="font-medium">{item.label}</span>
                        </TooltipContent>
                      </Tooltip>
                    );
                  }
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/factory/dashboard"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                          isActive
                            ? "bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 border-l-4 border-orange-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-orange-700"
                        }`
                      }
                      onClick={() => isMobile && onMobileClose()}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </NavLink>
                  );
                })}
              </nav>

              {/* Production Section */}
              {(!collapsed || isMobile) && (
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

              {/* Help Section */}
              {(!collapsed || isMobile) && (
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-200">
                      <HelpCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Factory Support
                      </p>
                      <p className="text-xs text-gray-500">
                        24/7 technical assistance
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white border-gray-300 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-700"
                  >
                    Get Support
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
              <div className="p-4 border-t border-gray-200 mt-auto">
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
    </>
  );
}
