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

  FaWarehouse,
  FaMicroscope,
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
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnergyManagement = () => {
  // Energy Sector Challenges
  const challenges = [
    {
      icon: <FaChartLine className="h-8 w-8" />,
      title: "Peak Demand Management",
      description: "Managing energy spikes and avoiding peak demand charges",
      color: "red",
    },
    {
      icon: <FaMoneyBillWave className="h-8 w-8" />,
      title: "Cost Optimization",
      description:
        "Reducing energy expenses while maintaining operational efficiency",
      color: "orange",
    },
    {
      icon: <FaLeaf className="h-8 w-8" />,
      title: "Carbon Footprint Reduction",
      description: "Meeting sustainability goals and regulatory requirements",
      color: "green",
    },
    {
      icon: <FaExclamationTriangle className="h-8 w-8" />,
      title: "Grid Stability",
      description: "Ensuring reliable power supply and grid resilience",
      color: "blue",
    },
  ];

  // Energy Solutions
  const solutions = [
    {
      title: "Real-time Energy Monitoring",
      icon: <FaBolt className="h-6 w-6" />,
      features: [
        "Live energy consumption tracking",
        "Sub-metering across facilities",
        "Peak demand alerts",
        "Energy usage visualization",
      ],
      color: "yellow",
    },
    {
      title: "Predictive Load Management",
      icon: <FaChartBar className="h-6 w-6" />,
      features: [
        "AI-driven load forecasting",
        "Automated demand response",
        "Peak shaving optimization",
        "Load scheduling algorithms",
      ],
      color: "blue",
    },
    {
      title: "Renewable Integration",
      icon: <FaSolarPanel className="h-6 w-6" />,
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
      icon: <FaLeaf className="h-6 w-6" />,
      features: [
        "Real-time carbon tracking",
        "Scope 1, 2, 3 emissions",
        "Sustainability reporting",
        "Carbon credit management",
      ],
      color: "purple",
    },
  ];

  // Energy Sector Modules
  const sectorModules = [
    {
      sector: "Industrial Energy",
      icon: <FaIndustry className="h-6 w-6" />,
      capabilities: [
        "Process energy optimization",
        "Compressed air management",
        "Steam system efficiency",
        "HVAC optimization",
      ],
      color: "blue",
    },
    {
      sector: "Commercial Buildings",
      icon: <FaBuilding className="h-6 w-6" />,
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
      icon: <FaPowerOff className="h-6 w-6" />,
      capabilities: [
        "Smart grid management",
        "Distribution optimization",
        "Outage prediction",
        "Grid balancing",
      ],
      color: "orange",
    },
    {
      sector: "Renewable Energy",
      icon: <FaWind className="h-6 w-6" />,
      capabilities: [
        "Solar farm optimization",
        "Wind turbine analytics",
        "Energy storage management",
        "PPA optimization",
      ],
      color: "yellow",
    },
  ];

  // Technology Integration
  const integrations = [
    {
      system: "Energy Management Systems",
      examples: ["SCADA", "BMS", "EMS", "PLC Networks"],
      icon: <FaCogs className="h-6 w-6" />,
      color: "blue",
    },
    {
      system: "Metering & IoT",
      examples: ["Smart Meters", "IoT Sensors", "Sub-meters", "PMUs"],
      icon: <FaBolt className="h-6 w-6" />,
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
      icon: <FaSolarPanel className="h-6 w-6" />,
      color: "yellow",
    },
    {
      system: "Analytics & AI",
      examples: [
        "Predictive Analytics",
        "Machine Learning",
        "Digital Twins",
        "Forecasting Models",
      ],
      icon: <FaChartLine className="h-6 w-6" />,
      color: "purple",
    },
  ];

  // Energy Sources Management
  const energySources = [
    {
      source: "Electricity",
      icon: <FaBolt className="h-6 w-6" />,
      features: [
        "Grid power",
        "On-site generation",
        "Peak management",
        "Power quality",
      ],
      color: "yellow",
    },
    {
      source: "Natural Gas",
      icon: <FaGasPump className="h-6 w-6" />,
      features: [
        "Consumption tracking",
        "Leak detection",
        "Efficiency optimization",
        "Cost analysis",
      ],
      color: "orange",
    },
    {
      source: "Solar Energy",
      icon: <FaSolarPanel className="h-6 w-6" />,
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
      icon: <FaWater className="h-6 w-8" />,
      features: [
        "Water consumption",
        "Steam efficiency",
        "Leak detection",
        "Recycling tracking",
      ],
      color: "blue",
    },
  ];

  // Key Benefits
  const benefits = [
    {
      metric: "15-30%",
      description: "Reduction in energy costs",
      icon: <FaMoneyBillWave className="h-5 w-5" />,
      color: "green",
    },
    {
      metric: "20-40%",
      description: "Reduction in peak demand",
      icon: <FaChartLine className="h-5 w-5" />,
      color: "blue",
    },
    {
      metric: "25-50%",
      description: "Reduction in carbon emissions",
      icon: <FaLeaf className="h-5 w-5" />,
      color: "orange",
    },
    {
      metric: "ROI < 2 years",
      description: "Typical payback period",
      icon: <FaBolt className="h-5 w-5" />,
      color: "purple",
    },
  ];

  // Color mapping
  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-600",
      gradient: "from-blue-50 to-blue-100",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      iconBg: "bg-green-100 text-green-600",
      gradient: "from-green-50 to-green-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      iconBg: "bg-purple-100 text-purple-600",
      gradient: "from-purple-50 to-purple-100",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
      iconBg: "bg-orange-100 text-orange-600",
      gradient: "from-orange-50 to-orange-100",
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      border: "border-yellow-200",
      iconBg: "bg-yellow-100 text-yellow-600",
      gradient: "from-yellow-50 to-yellow-100",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      iconBg: "bg-red-100 text-red-600",
      gradient: "from-red-50 to-red-100",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('modules/energy-bg.webp')" }}
      >
        {/* Dark + brand-tinted overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-900/40 to-black/60" />

        {/* Optional subtle noise / depth (remove if not needed) */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-green-300 text-sm font-medium mb-6 border border-white/20 backdrop-blur">
                  <FaBolt className="h-4 w-4" />
                  Energy Management Solution
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
                  Industry-Integra Energy Intelligence
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                  AI-driven energy optimization, real-time consumption
                  visibility, and sustainability insights—built for
                  enterprise-scale operations.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg shadow-lg">
                    <Link to="/energy/demo" className="flex items-center gap-2">
                      <FaBolt className="h-5 w-5" />
                      Request Energy Demo
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="px-8 py-6 text-lg bg-white text-black hover:bg-slate-950 hover:text-white"
                  >
                    <Link
                      to="/contact/energy-expert"
                      className="flex items-center gap-2"
                    >
                      <FaUsers className="h-5 w-5" />
                      Consult Energy Specialist
                    </Link>
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Energy Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={0.2} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Modern Energy Management Challenges
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Organizations face complex energy challenges that require
                  intelligent solutions.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {challenges.map((challenge, index) => {
                const colors = colorClasses[challenge.color];
                return (
                  <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                    <div className="relative group">
                      <BorderBeam
                        size={250}
                        duration={12}
                        borderWidth={2}
                        className="rounded-xl"
                        colorFrom="#f59e0b"
                        colorTo="#10b981"
                      />

                      <div
                        className={`bg-white rounded-xl border ${colors.border} p-6 shadow-sm hover:shadow-md transition-shadow h-full`}
                      >
                        <div
                          className={`p-3 rounded-lg ${colors.iconBg} inline-flex mb-4`}
                        >
                          {challenge.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                    </div>
                  </BlurFade>
                );
              })}
            </div>

            {/* How Industry-Integra Energy Works */}
            <BlurFade delay={0.4} inView>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-green-200 mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Intelligent Energy Management Framework
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Monitor",
                      description:
                        "Collect real-time energy data from all sources",
                      icon: <FaBolt className="h-6 w-6" />,
                    },
                    {
                      step: "2",
                      title: "Analyze",
                      description: "Apply AI to identify savings opportunities",
                      icon: <FaChartLine className="h-6 w-6" />,
                    },
                    {
                      step: "3",
                      title: "Optimize",
                      description: "Automate energy-saving actions",
                      icon: <FaSync className="h-6 w-6" />,
                    },
                    {
                      step: "4",
                      title: "Sustain",
                      description: "Track and report sustainability metrics",
                      icon: <FaLeaf className="h-6 w-6" />,
                    },
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <div className="p-3 rounded-lg bg-white/80 inline-flex mb-3">
                        {step.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Energy Solutions */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={0.5} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Comprehensive Energy Intelligence Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  End-to-end energy management across your entire enterprise.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => {
                const colors = colorClasses[solution.color];
                return (
                  <BlurFade key={index} delay={0.6 + index * 0.1} inView>
                    <div
                      className={`bg-white rounded-xl border ${colors.border} p-6 shadow-sm hover:shadow-md transition-shadow h-full`}
                    >
                      <div
                        className={`p-3 rounded-lg ${colors.iconBg} inline-flex mb-4`}
                      >
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <ul className="space-y-3">
                        {solution.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <div
                              className={`h-2 w-2 rounded-full ${colors.iconBg}`}
                            />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Energy Sources Management */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={0.7} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Multi-Source Energy Management
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Monitor and optimize all your energy sources in one unified
                  platform.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {energySources.map((source, index) => {
                const colors = colorClasses[source.color];
                return (
                  <BlurFade key={index} delay={0.8 + index * 0.1} inView>
                    <div
                      className={`bg-gradient-to-br ${colors.gradient} rounded-xl border ${colors.border} p-6 shadow-sm`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${colors.iconBg}`}>
                          {source.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {source.source}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {source.features.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BlurFade>
                );
              })}
            </div>

            {/* Energy Automation Dashboard */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Energy Automation Dashboard
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Real-time visibility and control over your entire
                      manufacturing operations
                    </p>
                  </div>

                  {/* Dashboard Container */}
                  <div className="bg-gray-50 rounded-2xl border-2 border-slate-800 p-4">
                    <div className="h-[600px] overflow-y-auto rounded-lg">
                      {/* Dashboard Image Placeholder */}

                      {
                        // Replace this placeholder with your actual dashboard image:
                        <img
                          src="dashboards/energy-dashboard.png"
                          alt="Energy Automation Dashboard"
                          className="w-full h-auto"
                        />
                      }
                    </div>
                  </div>

                  {/* Dashboard Features */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {[
                      { label: "Production Lines", value: "12", color: "blue" },
                      { label: "Active Machines", value: "48", color: "green" },
                      {
                        label: "Today's Output",
                        value: "12,450",
                        color: "purple",
                      },
                      { label: "OEE Score", value: "86.5%", color: "orange" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 border border-gray-200 text-center"
                      >
                        <div
                          className={`text-2xl font-bold text-${item.color}-600 mb-1`}
                        >
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Sector Specific Solutions */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={1.0} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Industry-Specific Energy Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Tailored energy management for different sectors and
                  applications.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectorModules.map((module, index) => {
                const colors = colorClasses[module.color];
                return (
                  <BlurFade key={index} delay={1.1 + index * 0.1} inView>
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                      <div
                        className={`p-3 rounded-lg ${colors.iconBg} inline-flex mb-4`}
                      >
                        {module.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {module.sector}
                      </h3>
                      <ul className="space-y-3">
                        {module.capabilities.map((capability, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <div
                              className={`h-2 w-2 rounded-full ${colors.iconBg}`}
                            />
                            <span className="text-sm">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={1.2} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Seamless Energy System Integration
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Connect with your existing energy infrastructure and systems.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => {
                const colors = colorClasses[integration.color];
                return (
                  <BlurFade key={index} delay={1.3 + index * 0.1} inView>
                    <div
                      className={`bg-gradient-to-br ${colors.gradient} rounded-xl border ${colors.border} p-6 shadow-sm`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${colors.iconBg}`}>
                          {integration.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {integration.system}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {integration.examples.map((example, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                            <span className="text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & ROI */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={1.4} inView>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-green-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Proven Energy Savings & Sustainability Impact
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Industry-Integra delivers measurable results across energy
                      and sustainability metrics:
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {benefits.map((benefit, i) => {
                        const colors = colorClasses[benefit.color];
                        return (
                          <div
                            key={i}
                            className={`${colors.bg} rounded-lg p-4 border ${colors.border}`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`p-1 rounded ${colors.iconBg}`}>
                                {benefit.icon}
                              </div>
                              <div className="text-2xl font-bold text-gray-900">
                                {benefit.metric}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">
                              {benefit.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <ul className="space-y-3">
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
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-green-700 text-sm font-medium mb-6 border border-green-200">
                      <FaGlobe className="h-4 w-4" />
                      Global Impact Tracking
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg mb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-left">
                          <div className="text-sm text-gray-500">
                            Monthly Savings
                          </div>
                          <div className="font-bold text-gray-900 text-2xl">
                            $124,850
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            Carbon Reduced
                          </div>
                          <div className="font-bold text-green-600 text-2xl">
                            245 tCO₂
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">
                              Energy Cost Reduction
                            </span>
                            <span className="font-medium">28%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: "28%" }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">
                              Renewable Energy Usage
                            </span>
                            <span className="font-medium">42%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: "42%" }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">
                              Peak Demand Reduction
                            </span>
                            <span className="font-medium">35%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-500 rounded-full"
                              style={{ width: "35%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm">
                      Track your energy and sustainability performance in
                      real-time
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={1.5} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Quick Implementation, Rapid ROI
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Start seeing energy savings in weeks, not years.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  phase: "Assessment",
                  duration: "2 weeks",
                  activities: [
                    "Energy audit",
                    "Meter installation",
                    "Baseline establishment",
                  ],
                  color: "blue",
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
                  color: "yellow",
                },
                {
                  phase: "Expansion",
                  duration: "Ongoing",
                  activities: [
                    "Multi-site rollout",
                    "Advanced features",
                    "Continuous improvement",
                  ],
                  color: "purple",
                },
              ].map((phase, index) => {
                const colors = colorClasses[phase.color];
                return (
                  <BlurFade key={index} delay={1.6 + index * 0.1} inView>
                    <div className="relative">
                      <div
                        className={`${colors.bg} rounded-xl border ${colors.border} p-6 h-full`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-gray-900">
                            {phase.phase}
                          </h3>
                          <span
                            className={`text-sm px-2 py-1 rounded-full ${colors.text} ${colors.iconBg}`}
                          >
                            {phase.duration}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <div
                                className={`h-1.5 w-1.5 rounded-full ${colors.iconBg}`}
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
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 via-green-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <BlurFade delay={1.7} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6 border border-green-200">
                <FaBolt className="h-4 w-4" />
                Power Your Energy Transformation
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Start Saving Energy & Reducing Costs Today
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join thousands of organizations worldwide that have transformed
                their energy management with Industry-Integra's intelligent
                platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                  <Link to="/energy/demo" className="flex items-center gap-2">
                    <FaBolt className="h-5 w-5" />
                    Schedule Energy Audit & Demo
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg border-2"
                >
                  <Link
                    to="/resources/energy-case-studies"
                    className="flex items-center gap-2"
                  >
                    <FaChartLine className="h-5 w-5" />
                    View Energy Savings Case Studies
                  </Link>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Energy Saved</div>
                  <div className="font-bold text-gray-900">2.4 TWh</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Cost Savings</div>
                  <div className="font-bold text-gray-900">$480M+</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Carbon Reduced</div>
                  <div className="font-bold text-gray-900">1.2M tCO₂</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Clients Worldwide</div>
                  <div className="font-bold text-gray-900">850+</div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
};

export default EnergyManagement;
