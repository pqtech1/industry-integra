import React from "react";
import {
  FaBolt,
  FaLeaf,
  FaSolarPanel,
  FaWind,
  FaIndustry,
  FaChartLine,
  FaShieldAlt,
  FaCogs,
  FaSync,
  FaExclamationTriangle,
  FaWater,
  FaGasPump,
  FaClipboardCheck,
  FaRobot,
  FaCloud,
  FaDatabase,
  FaRocket,
  FaUsers,
  FaMobileAlt,
  FaBuilding,
  FaHome,
  FaCar,
  FaBatteryFull,
  FaPowerOff,
  FaChartBar,
  FaMoneyBillWave,
  FaGlobe,
} from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnergyManagement = () => {
  // Energy Sector Challenges
  const challenges = [
    {
      icon: <FaChartLine className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Peak Demand Management",
      description: "Managing energy spikes and avoiding peak demand charges",
      color: "gray",
    },
    {
      icon: <FaMoneyBillWave className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Cost Optimization",
      description:
        "Reducing energy expenses while maintaining operational efficiency",
      color: "gray",
    },
    {
      icon: <FaLeaf className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Carbon Footprint Reduction",
      description: "Meeting sustainability goals and regulatory requirements",
      color: "green",
    },
    {
      icon: <FaExclamationTriangle className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Grid Stability",
      description: "Ensuring reliable power supply and grid resilience",
      color: "gray",
    },
  ];

  // Energy Solutions
  const solutions = [
    {
      title: "Real-time Energy Monitoring",
      icon: <FaBolt className="h-5 w-5 md:h-6 md:w-6" />,
      features: [
        "Live energy consumption tracking",
        "Sub-metering across facilities",
        "Peak demand alerts",
        "Energy usage visualization",
      ],
      color: "green",
    },
    {
      title: "Predictive Load Management",
      icon: <FaChartBar className="h-5 w-5 md:h-6 md:w-6" />,
      features: [
        "AI-driven load forecasting",
        "Automated demand response",
        "Peak shaving optimization",
        "Load scheduling algorithms",
      ],
      color: "green",
    },
    {
      title: "Renewable Integration",
      icon: <FaSolarPanel className="h-5 w-5 md:h-6 md:w-6" />,
      features: [
        "Solar production optimization",
        "Wind energy forecasting",
        "Battery storage management",
        "Grid integration analytics",
      ],
      color: "green",
    },
    {
      title: "Carbon Analytics",
      icon: <FaLeaf className="h-5 w-5 md:h-6 md:w-6" />,
      features: [
        "Real-time carbon tracking",
        "Scope 1, 2, 3 emissions",
        "Sustainability reporting",
        "Carbon credit management",
      ],
      color: "green",
    },
  ];

  // Energy Sector Modules
  const sectorModules = [
    {
      sector: "Industrial Energy",
      icon: <FaIndustry className="h-5 w-5 md:h-6 md:w-6" />,
      capabilities: [
        "Process energy optimization",
        "Compressed air management",
        "Steam system efficiency",
        "HVAC optimization",
      ],
      color: "green",
    },
    {
      sector: "Commercial Buildings",
      icon: <FaBuilding className="h-5 w-5 md:h-6 md:w-6" />,
      capabilities: [
        "Building automation integration",
        "Lighting optimization",
        "Occupancy-based controls",
        "Energy benchmarking",
      ],
      color: "green",
    },
    {
      sector: "Utilities & Grid",
      icon: <FaPowerOff className="h-5 w-5 md:h-6 md:w-6" />,
      capabilities: [
        "Smart grid management",
        "Distribution optimization",
        "Outage prediction",
        "Grid balancing",
      ],
      color: "green",
    },
    {
      sector: "Renewable Energy",
      icon: <FaWind className="h-5 w-5 md:h-6 md:w-6" />,
      capabilities: [
        "Solar farm optimization",
        "Wind turbine analytics",
        "Energy storage management",
        "PPA optimization",
      ],
      color: "green",
    },
  ];

  // Technology Integration
  const integrations = [
    {
      system: "Energy Management Systems",
      examples: ["SCADA", "BMS", "EMS", "PLC Networks"],
      icon: <FaCogs className="h-5 w-5 md:h-6 md:w-6" />,
      color: "green",
    },
    {
      system: "Metering & IoT",
      examples: ["Smart Meters", "IoT Sensors", "Sub-meters", "PMUs"],
      icon: <FaBolt className="h-5 w-5 md:h-6 md:w-6" />,
      color: "green",
    },
    {
      system: "Renewable Systems",
      examples: [
        "Solar Inverters",
        "Wind Controllers",
        "Battery BMS",
        "EV Chargers",
      ],
      icon: <FaSolarPanel className="h-5 w-5 md:h-6 md:w-6" />,
      color: "green",
    },
    {
      system: "Analytics & AI",
      examples: [
        "Predictive Analytics",
        "Machine Learning",
        "Digital Twins",
        "Forecasting Models",
      ],
      icon: <FaChartLine className="h-5 w-5 md:h-6 md:w-6" />,
      color: "green",
    },
  ];

  // Energy Sources Management
  const energySources = [
    {
      source: "Electricity",
      icon: <FaBolt className="h-5 w-5 md:h-6 md:w-6" />,
      features: [
        "Grid power",
        "On-site generation",
        "Peak management",
        "Power quality",
      ],
      color: "green",
    },
    {
      source: "Natural Gas",
      icon: <FaGasPump className="h-5 w-5 md:h-6 md:w-6" />,
      features: [
        "Consumption tracking",
        "Leak detection",
        "Efficiency optimization",
        "Cost analysis",
      ],
      color: "green",
    },
    {
      source: "Solar Energy",
      icon: <FaSolarPanel className="h-5 w-5 md:h-6 md:w-6" />,
      features: [
        "Production monitoring",
        "ROI calculation",
        "Maintenance alerts",
        "Grid export",
      ],
      color: "green",
    },
    {
      source: "Water & Steam",
      icon: <FaWater className="h-5 w-5 md:h-6 md:w-6" />,
      features: [
        "Water consumption",
        "Steam efficiency",
        "Leak detection",
        "Recycling tracking",
      ],
      color: "green",
    },
  ];

  // Key Benefits
  const benefits = [
    {
      metric: "15-30%",
      description: "Reduction in energy costs",
      icon: <FaMoneyBillWave className="h-4 w-4 md:h-5 md:w-5" />,
      color: "green",
    },
    {
      metric: "20-40%",
      description: "Reduction in peak demand",
      icon: <FaChartLine className="h-4 w-4 md:h-5 md:w-5" />,
      color: "green",
    },
    {
      metric: "25-50%",
      description: "Reduction in carbon emissions",
      icon: <FaLeaf className="h-4 w-4 md:h-5 md:w-5" />,
      color: "green",
    },
    {
      metric: "ROI < 2 years",
      description: "Typical payback period",
      icon: <FaBolt className="h-4 w-4 md:h-5 md:w-5" />,
      color: "green",
    },
  ];

  // Color mapping - using only green, black, gray
  const colorClasses = {
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      iconBg: "bg-green-100 text-green-600",
      gradient: "from-green-50 to-green-100",
      bullet: "bg-green-500",
    },
    gray: {
      bg: "bg-gray-50",
      text: "text-gray-700",
      border: "border-gray-200",
      iconBg: "bg-gray-100 text-gray-600",
      gradient: "from-gray-50 to-gray-100",
      bullet: "bg-gray-500",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-8 md:py-12 overflow-hidden px-4"
        style={{ backgroundImage: "url('modules/energy-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-900/40 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 text-green-300 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/20 backdrop-blur">
                <FaBolt className="h-3 w-3 md:h-4 md:w-4" />
                Energy Management Solution
              </div>

              <h1 className="mb-4 md:mb-6 text-white">
                Industry-Integra Energy Intelligence
              </h1>

              <p className="mb-4 md:mb-6 text-gray-200">
                AI-driven energy optimization, real-time consumption visibility,
                and sustainability insights—built for enterprise-scale
                operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold rounded-lg shadow-xl">
                  <Link to="/energy/demo" className="flex items-center gap-2">
                    <FaBolt className="h-4 w-4 md:h-5 md:w-5" />
                    Request Energy Demo
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg bg-white text-black hover:bg-gray-900 hover:text-white rounded-lg shadow-xl"
                >
                  <Link
                    to="/contact/energy-expert"
                    className="flex items-center gap-2"
                  >
                    <FaUsers className="h-4 w-4 md:h-5 md:w-5" />
                    Consult Energy Specialist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Challenges */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Modern Energy Management Challenges</h2>
              <p className="text-gray-600">
                Organizations face complex energy challenges that require
                intelligent solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              {challenges.map((challenge, index) => {
                const colors =
                  challenge.color === "green"
                    ? colorClasses.green
                    : colorClasses.gray;
                return (
                  <div key={index} className="relative group">
                    <BorderBeam
                      size={200}
                      duration={12}
                      borderWidth={2}
                      className="rounded-xl"
                      colorFrom="#10b981"
                      colorTo="#6b7280"
                    />

                    <div
                      className={`bg-white rounded-xl border ${colors.border} p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}
                    >
                      <div
                        className={`p-2 md:p-3 rounded-lg ${colors.iconBg} inline-flex mb-3 md:mb-4`}
                      >
                        {challenge.icon}
                      </div>
                      <h3 className="mb-1 md:mb-2">{challenge.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-green-200 shadow-xl">
              <h2 className="mb-4 md:mb-6 text-center">
                Intelligent Energy Management Framework
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  {
                    step: "1",
                    title: "Monitor",
                    description:
                      "Collect real-time energy data from all sources",
                    icon: <FaBolt className="h-5 w-5 md:h-6 md:w-6" />,
                  },
                  {
                    step: "2",
                    title: "Analyze",
                    description: "Apply AI to identify savings opportunities",
                    icon: <FaChartLine className="h-5 w-5 md:h-6 md:w-6" />,
                  },
                  {
                    step: "3",
                    title: "Optimize",
                    description: "Automate energy-saving actions",
                    icon: <FaSync className="h-5 w-5 md:h-6 md:w-6" />,
                  },
                  {
                    step: "4",
                    title: "Sustain",
                    description: "Track and report sustainability metrics",
                    icon: <FaLeaf className="h-5 w-5 md:h-6 md:w-6" />,
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="h-10 w-10 md:h-12 md:w-12 bg-green-600 text-white rounded-full flex items-center justify-center text-base md:text-lg font-bold mx-auto mb-3 md:mb-4">
                      {step.step}
                    </div>
                    <div className="p-2 md:p-3 rounded-lg bg-white/80 inline-flex mb-2 md:mb-3 shadow-sm">
                      {step.icon}
                    </div>
                    <h4 className="mb-1 md:mb-2">{step.title}</h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Solutions */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">
                Comprehensive Energy Intelligence Solutions
              </h2>
              <p className="text-gray-600">
                End-to-end energy management across your entire enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {solutions.map((solution, index) => {
                const colors = colorClasses.green;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl border ${colors.border} p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}
                  >
                    <div
                      className={`p-2 md:p-3 rounded-lg ${colors.iconBg} inline-flex mb-3 md:mb-4`}
                    >
                      {solution.icon}
                    </div>
                    <h3 className="mb-3 md:mb-4">{solution.title}</h3>
                    <ul className="space-y-2 md:space-y-3">
                      {solution.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 md:gap-3 text-gray-700"
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full ${colors.bullet}`}
                          />
                          <span className="text-sm md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Energy Sources Management */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Multi-Source Energy Management</h2>
              <p className="text-gray-600">
                Monitor and optimize all your energy sources in one unified
                platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              {energySources.map((source, index) => {
                const colors = colorClasses.green;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colors.gradient} rounded-xl border ${colors.border} p-4 md:p-6 shadow-xl`}
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div
                        className={`p-1.5 md:p-2 rounded-lg ${colors.iconBg}`}
                      >
                        {source.icon}
                      </div>
                      <h3>{source.source}</h3>
                    </div>
                    <ul className="space-y-1.5 md:space-y-2">
                      {source.features.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-1.5 md:gap-2 text-gray-700"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="text-center mb-6 md:mb-8">
              <h2 className="mb-3 md:mb-4">Energy Automation Dashboard</h2>
              <p className="text-gray-600">
                Real-time visibility and control over your entire energy
                operations
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl border-2 border-gray-800 p-3 md:p-4 shadow-2xl">
              <div className="h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto rounded-lg">
                <img
                  src="dashboards/energy-dashboard.png"
                  alt="Energy Automation Dashboard"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-center text-gray-600 mt-3 md:mt-4 text-sm md:text-base">
                Interactive dashboard delivering real-time insights and control
                across all energy systems.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
              {[
                { label: "Active Meters", value: "48", color: "green" },
                { label: "Today's Usage", value: "12450 kWh", color: "green" },
                { label: "Energy Saved", value: "28.5%", color: "green" },
                { label: "CO₂ Reduced", value: "245 t", color: "green" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-3 md:p-4 border border-gray-200 text-center shadow-lg"
                >
                  <div className="text-lg md:text-xl font-bold text-green-600 mb-0.5 md:mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sector Specific Solutions */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-green-50 to-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Industry-Specific Energy Solutions</h2>
              <p className="text-gray-600">
                Tailored energy management for different sectors and
                applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {sectorModules.map((module, index) => {
                const colors = colorClasses.green;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                  >
                    <div
                      className={`p-2 md:p-3 rounded-lg ${colors.iconBg} inline-flex mb-3 md:mb-4`}
                    >
                      {module.icon}
                    </div>
                    <h3 className="mb-3 md:mb-4">{module.sector}</h3>
                    <ul className="space-y-2 md:space-y-3">
                      {module.capabilities.map((capability, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 md:gap-3 text-gray-700"
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full ${colors.bullet}`}
                          />
                          <span className="text-sm md:text-base">
                            {capability}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Technology */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Seamless Energy System Integration</h2>
              <p className="text-gray-600">
                Connect with your existing energy infrastructure and systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {integrations.map((integration, index) => {
                const colors = colorClasses.green;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colors.gradient} rounded-xl border ${colors.border} p-4 md:p-6 shadow-xl`}
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div
                        className={`p-1.5 md:p-2 rounded-lg ${colors.iconBg}`}
                      >
                        {integration.icon}
                      </div>
                      <h3>{integration.system}</h3>
                    </div>
                    <ul className="space-y-1.5 md:space-y-2">
                      {integration.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-1.5 md:gap-2 text-gray-700"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span className="text-sm md:text-base">
                            {example}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & ROI */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-green-200 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="mb-4 md:mb-6">
                    Proven Energy Savings & Sustainability Impact
                  </h2>
                  <p className="text-gray-600 mb-4 md:mb-6">
                    Industry-Integra delivers measurable results across energy
                    and sustainability metrics:
                  </p>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {benefits.map((benefit, i) => {
                      const colors = colorClasses.green;
                      return (
                        <div
                          key={i}
                          className={`${colors.bg} rounded-lg p-3 md:p-4 border ${colors.border} shadow-sm`}
                        >
                          <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                            <div className={`p-1 rounded ${colors.iconBg}`}>
                              {benefit.icon}
                            </div>
                            <div className="text-lg md:text-xl font-bold text-gray-900">
                              {benefit.metric}
                            </div>
                          </div>
                          <p className="text-xs md:text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <ul className="space-y-2 md:space-y-3">
                    {[
                      "Automated demand response participation",
                      "Real-time energy price optimization",
                      "Predictive maintenance for energy equipment",
                      "Automated sustainability reporting",
                      "Integration with carbon credit markets",
                      "Compliance with energy regulations",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 md:gap-3 text-gray-700"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white text-green-700 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-green-200 shadow-sm">
                    <FaGlobe className="h-3 w-3 md:h-4 md:w-4" />
                    Global Impact Tracking
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-lg mb-4 md:mb-6">
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="text-left">
                        <div className="text-xs md:text-sm text-gray-500">
                          Monthly Savings
                        </div>
                        <div className="font-bold text-gray-900 text-lg md:text-xl">
                          $124,850
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs md:text-sm text-gray-500">
                          Carbon Reduced
                        </div>
                        <div className="font-bold text-green-600 text-lg md:text-xl">
                          245 tCO₂
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                          <span className="text-gray-600">
                            Energy Cost Reduction
                          </span>
                          <span className="font-medium">28%</span>
                        </div>
                        <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: "28%" }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                          <span className="text-gray-600">
                            Renewable Energy Usage
                          </span>
                          <span className="font-medium">42%</span>
                        </div>
                        <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: "42%" }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                          <span className="text-gray-600">
                            Peak Demand Reduction
                          </span>
                          <span className="font-medium">35%</span>
                        </div>
                        <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: "35%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs md:text-sm">
                    Track your energy and sustainability performance in
                    real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Quick Implementation, Rapid ROI</h2>
              <p className="text-gray-600">
                Start seeing energy savings in weeks, not years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  phase: "Assessment",
                  duration: "2 weeks",
                  activities: [
                    "Energy audit",
                    "Meter installation",
                    "Baseline establishment",
                  ],
                  color: "green",
                },
                {
                  phase: "Monitoring",
                  duration: "4 weeks",
                  activities: [
                    "Real-time data collection",
                    "Dashboard setup",
                    "Initial analytics",
                  ],
                  color: "green",
                },
                {
                  phase: "Optimization",
                  duration: "4 weeks",
                  activities: [
                    "AI recommendations",
                    "Automated controls",
                    "Savings validation",
                  ],
                  color: "green",
                },
                {
                  phase: "Expansion",
                  duration: "Ongoing",
                  activities: [
                    "Multi-site rollout",
                    "Advanced features",
                    "Continuous improvement",
                  ],
                  color: "green",
                },
              ].map((phase, index) => {
                const colors = colorClasses.green;
                return (
                  <div key={index} className="relative">
                    <div
                      className={`${colors.bg} rounded-xl border ${colors.border} p-4 md:p-6 h-full shadow-xl`}
                    >
                      <div className="flex items-center justify-between mb-3 md:mb-4">
                        <h3 className="font-semibold text-gray-900">
                          {phase.phase}
                        </h3>
                        <span
                          className={`text-xs md:text-sm px-2 py-1 rounded-full ${colors.text} ${colors.iconBg}`}
                        >
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="space-y-1.5 md:space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600"
                          >
                            <div
                              className={`h-1.5 w-1.5 rounded-full ${colors.bullet}`}
                            />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <div className="w-6 h-0.5 bg-gray-300" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-green-50 via-gray-50 to-green-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-3 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-green-200 shadow-lg">
              <FaBolt className="h-3 w-3 md:h-4 md:w-4" />
              Power Your Energy Transformation
            </div>

            <h2 className="mb-4 md:mb-6">
              Start Saving Energy & Reducing Costs Today
            </h2>

            <p className="text-gray-600 mb-6 md:mb-8">
              Join thousands of organizations worldwide that have transformed
              their energy management with Industry-Integra's intelligent
              platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold rounded-lg shadow-xl">
                <Link to="/energy/demo" className="flex items-center gap-2">
                  <FaBolt className="h-4 w-4 md:h-5 md:w-5" />
                  Schedule Energy Audit & Demo
                </Link>
              </Button>
              <Button
                variant="outline"
                className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg border-2 border-black text-black hover:bg-gray-50 rounded-lg shadow-xl"
              >
                <Link
                  to="/resources/energy-case-studies"
                  className="flex items-center gap-2"
                >
                  <FaChartLine className="h-4 w-4 md:h-5 md:w-5" />
                  View Energy Savings Case Studies
                </Link>
              </Button>
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xs md:text-sm text-gray-500">
                  Energy Saved
                </div>
                <div className="font-bold text-gray-900 text-sm md:text-base">
                  2.4 TWh
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs md:text-sm text-gray-500">
                  Cost Savings
                </div>
                <div className="font-bold text-gray-900 text-sm md:text-base">
                  $480M+
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs md:text-sm text-gray-500">
                  Carbon Reduced
                </div>
                <div className="font-bold text-gray-900 text-sm md:text-base">
                  1.2M tCO₂
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs md:text-sm text-gray-500">
                  Clients Worldwide
                </div>
                <div className="font-bold text-gray-900 text-sm md:text-base">
                  850+
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyManagement;
