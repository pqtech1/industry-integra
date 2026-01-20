// components/pages/process/Layout/Header.jsx
import React, { useState, useEffect } from "react";
import {
  Search,
  Bell,
  HelpCircle,
  Settings,
  User,
  ChevronDown,
  Menu,
  GitBranch,
  Shield,
  X,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = ({
  sidebarCollapsed,
  onToggleDesktopSidebar,
  onToggleMobileSidebar,
  mobileSidebarOpen,
}) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get current page title from path
  const getPageTitle = () => {
    const path = location.pathname.split("/").pop();

    switch (path) {
      case "dashboard":
        return "Overview";
      case "throughput":
        return "Throughput Analytics";
      case "time-metrics":
        return "Time Metrics";
      case "backlog":
        return "Backlog Management";
      case "automation":
        return "Process Automation";
      case "resources":
        return "Resource Utilization";
      case "quality":
        return "Quality Management";
      case "compliance":
        return "Compliance Monitoring";
      case "cost-roi":
        return "Cost & ROI Analysis";
      case "failures":
        return "Failure Analysis";
      case "sla-recovery":
        return "SLA & Recovery";
      default:
        return "Dashboard";
    }
  };

  const handleMenuClick = () => {
    if (isMobile) {
      onToggleMobileSidebar(!mobileSidebarOpen);
    } else {
      onToggleDesktopSidebar(!sidebarCollapsed);
    }
  };

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="h-16 px-4 lg:px-6">
          <div className="flex items-center justify-between h-full">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Hamburger Menu Button - Always visible */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleMenuClick}
                    className="flex-shrink-0"
                  >
                    {isMobile ? (
                      mobileSidebarOpen ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Menu className="h-5 w-5" />
                      )
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isMobile
                    ? mobileSidebarOpen
                      ? "Close menu"
                      : "Open menu"
                    : sidebarCollapsed
                      ? "Expand sidebar"
                      : "Collapse sidebar"}
                </TooltipContent>
              </Tooltip>

              {/* Logo/Brand for mobile */}
              {isMobile && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-800 to-emerald-600 rounded-lg flex items-center justify-center">
                    <GitBranch className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Industry INTEGRA 360
                    </p>
                    <p className="text-xs text-gray-500">Process</p>
                  </div>
                </div>
              )}

              {/* Breadcrumb/Title for desktop */}
              {!isMobile && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-gray-900">
                      Process Automation
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-400 rotate-270" />
                    <span className="font-bold text-green-700">
                      {getPageTitle()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Center Section - Search (Desktop) */}
            {!isMobile && (
              <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search processes, equipment, metrics..."
                    className="pl-10 bg-gray-50 border-gray-300 focus:bg-white focus:border-green-500"
                  />
                </div>
              </div>
            )}

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Mobile Search Button */}
              {isMobile && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSearchOpen(!searchOpen)}
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Search</TooltipContent>
                </Tooltip>
              )}

              {/* Desktop Quick Actions */}
              {!isMobile && (
                <div className="flex items-center gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Settings</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <HelpCircle className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Help & Support</TooltipContent>
                  </Tooltip>

                  {/* Notifications with Badge */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Notifications (3)</TooltipContent>
                  </Tooltip>
                </div>
              )}

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-2 px-2 hover:bg-gray-100"
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-green-800 to-emerald-600 rounded-lg flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    {!isMobile && (
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">
                          {user?.name || "User"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user?.licenseNumber || "License Number"}
                        </p>
                      </div>
                    )}
                    {!isMobile && (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.name}
                      </p>
                      <p className="text-xs leading-none text-gray-500">
                        {user?.licenseNumber}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Account Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Security</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Help & Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Preferences</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600 focus:bg-red-50"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {searchOpen && isMobile && (
            <div className="pb-4 px-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search processes, equipment, metrics..."
                  className="pl-10 bg-gray-50"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </TooltipProvider>
  );
};

export default Header;
