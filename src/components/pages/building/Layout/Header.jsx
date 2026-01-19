// components/pages/building/Layout/Header.jsx
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
  Building2,
  Shield,
  AlertTriangle,
  Thermometer,
  Users,
  Zap,
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

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  // Get current page title from path for Building module
  const getPageTitle = () => {
    const path = location.pathname.split("/").pop();

    switch (path) {
      case "dashboard":
        return "Building Overview";
      case "occupancy":
        return "Occupancy Tracking";
      case "space-utilization":
        return "Space Utilization";
      case "comfort":
        return "Comfort Management";
      case "air-quality":
        return "Air Quality Monitoring";
      case "energy":
        return "Building Energy";
      case "lighting":
        return "Lighting Control";
      case "hvac":
        return "HVAC Systems";
      case "automation":
        return "Building Automation";
      case "maintenance":
        return "Maintenance Management";
      case "safety":
        return "Safety Systems";
      case "access-control":
        return "Access Control";
      default:
        return "Building Dashboard";
    }
  };

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="h-16 px-4 lg:px-6">
          <div className="flex items-center justify-between h-full">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>

              {/* Logo/Brand for mobile */}
              <div className="lg:hidden flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-800 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    BuildingMaster
                  </p>
                  <p className="text-xs text-gray-500">Smart Building</p>
                </div>
              </div>

              {/* Breadcrumb/Title */}
              <div className="hidden lg:flex items-center gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Smart Building</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 rotate-270" />
                  <span className="font-bold text-emerald-600">
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
                  placeholder="Search rooms, sensors, equipment..."
                  className="pl-10 bg-gray-50 border-gray-300 focus:bg-white focus:border-green-600 focus:ring-green-600"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Building Status Indicators */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full">
                    <Users className="h-3 w-3 text-green-600" />
                    <span className="text-xs font-medium text-green-700">
                      245
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full">
                    <Thermometer className="h-3 w-3 text-green-600" />
                    <span className="text-xs font-medium text-green-700">
                      72°F
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-full">
                    <Zap className="h-3 w-3 text-amber-600" />
                    <span className="text-xs font-medium text-amber-700">
                      85%
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
                      className="text-gray-600 hover:text-green-700"
                    >
                      <Thermometer className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Comfort Settings</TooltipContent>
                </Tooltip>

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
                  <TooltipContent>Building Settings</TooltipContent>
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
                  <TooltipContent>Building Support</TooltipContent>
                </Tooltip>

                {/* Safety Alerts */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-gray-600 hover:text-red-600"
                    >
                      <Shield className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Safety Alerts (1)</TooltipContent>
                </Tooltip>

                {/* Maintenance Alerts */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-gray-600 hover:text-amber-600"
                    >
                      <AlertTriangle className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Maintenance (3)</TooltipContent>
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
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications (7)</TooltipContent>
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
                        {user?.name || "Building Manager"}
                      </p>
                      <p className="text-xs text-gray-500">
                        Facilities Department
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
                        Facilities Manager
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <User className="mr-2 h-4 w-4" />
                      <span>Building Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <Building2 className="mr-2 h-4 w-4" />
                      <span>Floor Plans</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Building Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Security Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Facilities Support</span>
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
                  placeholder="Search building data..."
                  className="pl-10 bg-gray-50 border-green-200 focus:border-green-600"
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
