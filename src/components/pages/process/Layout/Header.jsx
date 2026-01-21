// components/pages/process/Layout/Header.jsx
import React, { useState } from "react";
import {
  Search,
  Bell,
  HelpCircle,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Menu,
  GitBranch,
  Shield,
  X,
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

const Header = ({ onMenuClick, mobileSidebarOpen }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

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

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="h-16 px-4 lg:px-6">
          <div className="flex items-center justify-between h-full">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={onMenuClick}
                data-menu-button
              >
                {mobileSidebarOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>

              {/* Logo/Brand for mobile */}
              <div className="lg:hidden flex items-center gap-2">
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

              {/* Breadcrumb/Title for desktop */}
              <div className="hidden lg:flex items-center gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <GitBranch className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Process Automation</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 rotate-270" />
                  <span className="font-bold text-green-700">
                    {getPageTitle()}
                  </span>
                </div>
              </div>
            </div>

            {/* Center Section - Search (Desktop) */}
            <div className="hidden lg:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search processes, equipment, metrics..."
                  className="pl-10 bg-gray-50 border-gray-300 focus:bg-white focus:border-green-500"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Mobile Search Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setSearchOpen(!searchOpen)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Search</TooltipContent>
              </Tooltip>

              {/* Desktop Quick Actions */}
              <div className="hidden lg:flex items-center gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-600 hover:text-green-700"
                    >
                      <Settings className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Settings</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-600 hover:text-green-700"
                    >
                      <HelpCircle className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Help & Support</TooltipContent>
                </Tooltip>

                {/* Notifications */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-gray-600 hover:text-green-700"
                    >
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications (3)</TooltipContent>
                </Tooltip>
              </div>

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
                    <div className="hidden lg:block text-left">
                      <p className="text-sm font-semibold text-gray-900">
                        {user?.name || "Process Manager"}
                      </p>
                      <p className="text-xs text-gray-500">
                        Operations Department
                      </p>
                    </div>
                    <ChevronDown className="hidden lg:block h-4 w-4 text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-white border border-gray-200"
                  align="end"
                >
                  <DropdownMenuLabel className="font-normal bg-gradient-to-r from-green-50 to-white">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.name}
                      </p>
                      <p className="text-xs leading-none text-gray-500">
                        Process Manager
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Account Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Security</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Help & Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
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
          {searchOpen && (
            <div className="lg:hidden pb-4 px-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search processes, equipment, metrics..."
                  className="pl-10 bg-gray-50 border-green-200 focus:border-green-500"
                  autoFocus
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
