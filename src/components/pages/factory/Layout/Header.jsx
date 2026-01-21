// components/pages/factory/Layout/Header.jsx
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
  Factory,
  AlertTriangle,
  Wrench,
  LineChart,
  Clock,
  Zap,
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

  // Get current page title from path for Factory module
  const getPageTitle = () => {
    const path = location.pathname.split("/").pop();

    switch (path) {
      case "dashboard":
        return "Factory Overview";
      case "performance":
        return "Performance Metrics";
      case "production":
        return "Production Tracking";
      case "downtime":
        return "Downtime Analysis";
      case "quality":
        return "Quality Control";
      case "maintenance":
        return "Maintenance Schedule";
      case "automation":
        return "Factory Automation";
      case "alerts":
        return "Factory Alerts";
      case "safety":
        return "Safety Monitoring";
      case "workforce":
        return "Workforce Management";
      case "machines":
        return "Machine Monitoring";
      case "energy":
        return "Factory Energy";
      default:
        return "Factory Dashboard";
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
                <div className="w-8 h-8 bg-gradient-to-br from-orange-800 to-amber-600 rounded-lg flex items-center justify-center">
                  <Factory className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    FactoryMaster
                  </p>
                  <p className="text-xs text-gray-500">Smart Factory</p>
                </div>
              </div>

              {/* Breadcrumb/Title */}
              <div className="hidden lg:flex items-center gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Factory className="h-4 w-4 text-orange-600" />
                    <span className="font-medium">Smart Factory</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 rotate-270" />
                  <span className="font-bold text-orange-700">
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
                  placeholder="Search machines, parts, production lines..."
                  className="pl-10 bg-gray-50 border-gray-300 focus:bg-white focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Factory Status Indicators */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full">
                    <LineChart className="h-3 w-3 text-green-600" />
                    <span className="text-xs font-medium text-green-700">
                      94.2%
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full">
                    <Clock className="h-3 w-3 text-blue-600" />
                    <span className="text-xs font-medium text-blue-700">
                      98.7%
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-purple-50 rounded-full">
                    <Zap className="h-3 w-3 text-purple-600" />
                    <span className="text-xs font-medium text-purple-700">
                      3 Active
                    </span>
                  </div>
                </div>
              </div>

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
                      className="text-gray-600 hover:text-orange-700"
                    >
                      <LineChart className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Production Reports</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-600 hover:text-orange-700"
                    >
                      <Settings className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Factory Settings</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-600 hover:text-orange-700"
                    >
                      <HelpCircle className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Factory Support</TooltipContent>
                </Tooltip>

                {/* Maintenance Alerts */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-gray-600 hover:text-amber-600"
                    >
                      <Wrench className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Maintenance (5)</TooltipContent>
                </Tooltip>

                {/* Production Alerts */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-gray-600 hover:text-red-600"
                    >
                      <AlertTriangle className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Production Alerts (2)</TooltipContent>
                </Tooltip>

                {/* Notifications */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-gray-600 hover:text-orange-700"
                    >
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications (8)</TooltipContent>
                </Tooltip>
              </div>

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-2 px-2 hover:bg-gray-100"
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-orange-800 to-amber-600 rounded-lg flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="hidden lg:block text-left">
                      <p className="text-sm font-semibold text-gray-900">
                        {user?.name || "Factory Manager"}
                      </p>
                      <p className="text-xs text-gray-500">
                        Production Department
                      </p>
                    </div>
                    <ChevronDown className="hidden lg:block h-4 w-4 text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-white border border-gray-200"
                  align="end"
                >
                  <DropdownMenuLabel className="font-normal bg-gradient-to-r from-orange-50 to-white">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.name}
                      </p>
                      <p className="text-xs leading-none text-gray-500">
                        Production Manager
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-orange-50 focus:text-orange-700">
                      <User className="mr-2 h-4 w-4" />
                      <span>Factory Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-orange-50 focus:text-orange-700">
                      <LineChart className="mr-2 h-4 w-4" />
                      <span>Production Reports</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-orange-50 focus:text-orange-700">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Factory Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-orange-50 focus:text-orange-700">
                      <Wrench className="mr-2 h-4 w-4" />
                      <span>Maintenance Tools</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-orange-50 focus:text-orange-700">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Production Support</span>
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
                  placeholder="Search factory data..."
                  className="pl-10 bg-gray-50 border-orange-200 focus:border-orange-500"
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
