// components/pages/process/Layout/Sidebar.jsx
import React, { useState } from "react";
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

const quickStats = [
  { label: "OEE", value: "92.5%", color: "text-green-600" },
  { label: "Uptime", value: "99.8%", color: "text-blue-600" },
  { label: "Active", value: "24", color: "text-purple-600" },
];

export default function ProcessSidebar() {
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
          <div>
            <div className="flex items-center justify-between">
              <img src="/plant-master-logo.png" alt="PlantMaster" />
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
                                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-l-4 border-green-600"
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
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                        isActive
                          ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-l-4 border-green-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-green-700"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                );
              })}
            </nav>

            {/* Help Section - Only show when expanded */}
            {!collapsed && (
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
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
