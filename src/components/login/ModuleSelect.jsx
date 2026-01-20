// components/ModuleSelect.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GitBranch,
  Zap,
  Building2,
  Factory,
  Shield,
  ArrowRight,
  BarChart3,
  LogOut,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function ModuleSelect() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const modules = [
    {
      id: "process",
      title: "Process",
      description:
        "Monitor and control industrial processes with real-time analytics",
      icon: GitBranch,
      color: "from-blue-500 to-cyan-500",
      stats: { active: "24", efficiency: "92.5%" },
      path: "/process/dashboard",
    },
    {
      id: "energy",
      title: "Energy",
      description: "Optimize energy consumption and manage power distribution",
      icon: Zap,
      color: "from-amber-500 to-yellow-500",
      stats: { consumption: "2.4 MW", saved: "450 kWh" },
      path: "/energy/dashboard",
    },
    {
      id: "building",
      title: "Building",
      description: "Control HVAC, lighting, security, and building systems",
      icon: Building2,
      color: "from-purple-500 to-pink-500",
      stats: { efficiency: "88%", occupancy: "72%" },
      path: "/building/dashboard",
    },
    {
      id: "factory",
      title: "Factory",
      description: "Manage production lines, equipment, and factory operations",
      icon: Factory,
      color: "from-green-500 to-emerald-500",
      stats: { production: "1,240/hr", oee: "86.4%" },
      path: "/factory/dashboard",
    },
  ];

  const handleModuleClick = (moduleId) => {
    localStorage.setItem("selectedModule", moduleId);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="plant-master-logo.png"
                  alt="Industry Integra Logo"
                  className="w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-red-600 text-white hover:bg-red-700">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Card */}
        <Card className="mb-8 border-none bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Welcome, {user?.name || "Master Administrator"}
                  </h2>
                  <p className="text-white/90">
                    License: {user?.licenseNumber}
                  </p>
                  <p className="text-white/80">
                    Select a module to access its dashboard
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Total Systems", value: "156" },
                  { label: "Active Alerts", value: "3" },
                  { label: "Uptime", value: "99.8%" },
                  { label: "Energy Saved", value: "2.4M kWh" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modules Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Select Module
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Choose a module to access its specialized dashboard
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.id}
                  to={module.path}
                  className="no-underline"
                  onClick={() => handleModuleClick(module.id)}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-full hover:scale-[1.02]">
                    <CardHeader className="pb-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {module.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {module.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {Object.entries(module.stats).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 rounded-lg p-3">
                            <div className="text-sm text-gray-500 capitalize">
                              {key}
                            </div>
                            <div className="text-lg font-bold text-gray-900">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                        Access Dashboard
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto py-4"
                onClick={() => navigate("/login")}
              >
                <div className="text-left">
                  <div className="font-medium">Switch Account</div>
                  <div className="text-sm text-gray-500">
                    Login with different credentials
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="h-auto py-4">
                <div className="text-left">
                  <div className="font-medium">System Overview</div>
                  <div className="text-sm text-gray-500">
                    View all modules status
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="h-auto py-4">
                <div className="text-left">
                  <div className="font-medium">Generate Report</div>
                  <div className="text-sm text-gray-500">
                    Create system performance report
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-8 py-4 bg-white border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              © {new Date().getFullYear()} PlantMaster Pro • Positive Quadrant
              Technologies LLP
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <span>Version 2.4.1</span>
              <span>•</span>
              <span>Last Updated: Today 10:30 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
