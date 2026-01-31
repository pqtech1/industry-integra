import React, { useState } from "react";
import { Cpu, Zap, Building, Factory, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InteractiveDashboard = () => {
  const [activeTab, setActiveTab] = useState("process");

  const systems = [
    {
      id: "process",
      title: "Process Dashboard",
      icon: <Cpu className="h-5 w-5" />,
      description:
        "Real-time production monitoring with OEE tracking, yield analysis, and quality control metrics across all manufacturing lines.",
      image: "dashboards/process-dashboard.png",
      color: "blue",
    },
    {
      id: "energy",
      title: "Energy Dashboard",
      icon: <Zap className="h-5 w-5" />,
      description:
        "Comprehensive energy consumption monitoring with AI-powered optimization recommendations and cost-saving insights.",
      image: "dashboards/energy-dashboard.png",
      color: "green",
    },
    {
      id: "building",
      title: "Building Dashboard",
      icon: <Building className="h-5 w-5" />,
      description:
        "Smart facility management with environmental monitoring, safety compliance, and occupancy optimization.",
      image: "dashboards/building-dashboard.png",
      color: "purple",
    },
    {
      id: "factory",
      title: "Factory Dashboard",
      icon: <Factory className="h-5 w-5" />,
      description:
        "Complete factory overview with production planning, inventory management, and workforce productivity analytics.",
      image: "dashboards/factory-dashboard.png",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      iconBg: "bg-blue-100 text-blue-600",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      iconBg: "bg-green-100 text-green-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      iconBg: "bg-purple-100 text-purple-600",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-700",
      iconBg: "bg-orange-100 text-orange-600",
    },
  };

  const activeSystem =
    systems.find((system) => system.id === activeTab) || systems[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="">
            Dashboard Gallery
          </h2>
          <p className="">
            A simple gallery showcasing our four main dashboard interfaces.
            Select a dashboard to view its details.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
          {/* Left Column - Dashboard List */}
          <div className="lg:col-span-1 space-y-4">
            {systems.map((system) => {
              const colors = colorClasses[system.color];
              const isActive = activeTab === system.id;

              return (
                <div
                  key={system.id}
                  onClick={() => setActiveTab(system.id)}
                  className={`
                    cursor-pointer transition-all duration-300 rounded-xl p-4 border-2
                    ${isActive ? `${colors.border} ${colors.bg} shadow-md` : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2.5 rounded-lg ${isActive ? colors.iconBg : "bg-gray-100 text-gray-600"}`}
                    >
                      {system.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3
                          className={`text-base font-semibold ${isActive ? colors.text : "text-gray-800"}`}
                        >
                          {system.title}
                        </h3>
                        {isActive && <ChevronRight className="h-4 w-4" />}
                      </div>

                      <p className="line-clamp-2">
                        {system.description}
                      </p>

                      {isActive && (
                        <div className="mt-2 flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-current animate-pulse"></div>
                          <span className="text-xs font-medium text-current">
                            Currently viewing
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Info Box */}
            <Card className="mt-6 border-gray-200">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">Note:</span> These
                  dashboards provide real-time monitoring and analytics for
                  different aspects of industrial operations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="lg:col-span-3">
            <Card className="border-gray-200 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                
                {/* Image Container with MacBook-style border */}
                <div className="p-6 bg-gray-50">
                  {/* MacBook-style top border */}
                  <div className="relative mx-auto max-w-4xl">
                    {/* MacBook top bar with three dots on left */}
                    <div className="h-8 bg-gray-800 rounded-t-2xl flex items-center px-4 relative border-b border-gray-700">
                      {/* Three dots on left */}
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      </div>

                      {/* Title in center */}
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <span className="text-xs text-gray-400 font-medium">
                          {activeSystem.title}
                        </span>
                      </div>

                      {/* Camera on right */}
                      <div className="absolute right-4">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                      </div>
                    </div>

                    {/* Screen area with reduced fixed height and scroll */}
                    <div className="bg-gray-900 border-x-2 border-gray-800 border-b-2 border-gray-800 rounded-b-2xl overflow-hidden">
                      <div
                        className="h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
                        style={{ scrollbarWidth: "thin" }}
                      >
                        {/* Actual Dashboard Image */}
                        <div className="w-full min-h-full">
                          <img
                            src={activeSystem.image}
                            alt={activeSystem.title}
                            className="w-full h-auto max-w-full object-contain bg-gray-900"
                            onError={(e) => {
                              // If image fails to load, show a fallback
                              e.target.onerror = null;
                              e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="monospace" font-size="24">${activeSystem.image.split("/").pop()}</text></svg>`;
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* MacBook bottom chin */}
                    <div className="h-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-b-xl mx-auto w-3/4">
                      <div className="h-3 w-12 bg-gray-700 rounded-b-lg mx-auto"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboard;
