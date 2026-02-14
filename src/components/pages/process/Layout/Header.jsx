// components/pages/process/Layout/Header.jsx
import React, { useEffect, useState } from "react";
import {
  Search,
  HelpCircle,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Menu,
  GitBranch,
  Shield,
  X,
  Loader2,
  Power,
  PowerOff,
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
import toast from "react-hot-toast";
import api from "../../../../api/api";

const Header = ({ onMenuClick, mobileSidebarOpen }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionInProgress, setActionInProgress] = useState(null); // 'start' or 'stop'

  const checkEngineStatus = async () => {
    try {
      const res = await api.get("/engine/status");
      setIsRunning(res.data.running);
    } catch (error) {
      console.error("Failed to check engine status:", error);
      setIsRunning(false);
    }
  };

  useEffect(() => {
    // Initial status check
    checkEngineStatus();

    // Poll for status every 3 seconds
    const interval = setInterval(() => checkEngineStatus(), 3000);

    return () => clearInterval(interval);
  }, []);

  const handleStartEngine = async () => {
    try {
      setActionInProgress("start");
      setIsLoading(true);

      const response = await api.post("/engine/start");

      if (response.data.status === "started") {
        toast.success("Engine is running");
        await checkEngineStatus();
      }
    } catch (error) {
      console.error("Failed to start engine:", error);
      toast.error("Failed to start engine");
    } finally {
      setActionInProgress(null);
      setIsLoading(false);
    }
  };

  const handleStopEngine = async () => {
    try {
      setActionInProgress("stop");
      setIsLoading(true);

      const response = await api.post("/engine/stop");

      if (response.data.status === "stopped") {
        toast.success("Engine stopped successfully");
        await checkEngineStatus();
      }
    } catch (error) {
      console.error("Failed to stop engine:", error);
      toast.error("Failed to stop engine");
    } finally {
      setActionInProgress(null);
      setIsLoading(false);
    }
  };

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
              <div className="hidden lg:flex items-center gap-2">
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

                {/* Engine Control Buttons */}
                <div className="flex items-center gap-2 ml-2 border-l border-gray-200 pl-2">
                  {!isRunning ? (
                    <Button
                      onClick={handleStartEngine}
                      disabled={isLoading}
                      className="bg-green-600 hover:bg-green-700 text-white min-w-[120px] cursor-pointer"
                      size="sm"
                    >
                      {actionInProgress === "start" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Starting...
                        </>
                      ) : (
                        <>
                          <Power className="mr-2 h-4 w-4" />
                          Start Engine
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      onClick={handleStopEngine}
                      disabled={isLoading}
                      className="bg-red-600 hover:bg-red-700 text-white min-w-[120px] cursor-pointer"
                      size="sm"
                    >
                      {actionInProgress === "stop" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Stopping...
                        </>
                      ) : (
                        <>
                          <PowerOff className="mr-2 h-4 w-4" />
                          Stop Engine
                        </>
                      )}
                    </Button>
                  )}

                  {/* Status Indicator */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-pointer bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                        {/* Animated Dot */}
                        <span className="relative flex h-3 w-3">
                          <span
                            className={`absolute inline-flex h-full w-full rounded-full ${
                              isRunning
                                ? "bg-green-400 animate-ping"
                                : "bg-gray-400"
                            } opacity-75`}
                          ></span>
                          <span
                            className={`relative inline-flex rounded-full h-3 w-3 ${
                              isRunning ? "bg-green-600" : "bg-gray-600"
                            }`}
                          ></span>
                        </span>

                        {/* Text Badge */}
                        <span
                          className={`text-xs font-medium ${
                            isRunning ? "text-green-700" : "text-gray-700"
                          }`}
                        >
                          {isRunning ? "Engine Running" : "Engine Stopped"}
                        </span>

                        {isLoading && (
                          <Loader2 className="h-3 w-3 animate-spin text-gray-500 ml-1" />
                        )}
                      </div>
                    </TooltipTrigger>

                    <TooltipContent>
                      {isRunning
                        ? "Desktop EXE is currently active"
                        : "Desktop EXE is not running"}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-2 px-2 hover:bg-gray-100 cursor-pointer"
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
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700 cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700 cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Account Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700 cursor-pointer">
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Security</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700 cursor-pointer">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Help & Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-green-50 focus:text-green-700 cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Preferences</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
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
