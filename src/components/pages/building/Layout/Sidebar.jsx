// components/pages/building/Layout/Sidebar.jsx
import React, { useState, useEffect } from "react";
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

export default function BuildingSidebar({
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
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Building Management
                      </p>
                      <p className="text-xs text-gray-500">Smart Facilities</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-white" />
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
                            end={item.path === "/building/dashboard"}
                            className={({ isActive }) =>
                              `flex items-center justify-center p-3 rounded-lg transition-all relative ${
                                isActive
                                  ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`
                            }
                            onClick={() => isMobile && onMobileClose()}
                          >
                            <Icon className="h-5 w-5" />
                            {({ isActive }) =>
                              isActive && (
                                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-full"></div>
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
                      end={item.path === "/building/dashboard"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                          isActive
                            ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border-l-4 border-blue-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
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

              {/* Emergency Section */}
              {(!collapsed || isMobile) && (
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

              {/* Help Section */}
              {(!collapsed || isMobile) && (
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-200">
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Facility Support
                      </p>
                      <p className="text-xs text-gray-500">
                        24/7 building operations
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white border-gray-300 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700"
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
