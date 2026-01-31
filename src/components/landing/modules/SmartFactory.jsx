import React from "react";
import {
  FaIndustry,
  FaRobot,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaSync,
  FaExclamationTriangle,
  FaBolt,
  FaLeaf,
  FaWarehouse,
  FaMicroscope,
  FaClipboardCheck,
  FaRocket,
  FaUsers,
  FaCar,
  FaMicrochip,
  FaTshirt,
  FaBoxOpen,
  FaTools,
  FaPallet,
  FaCog,
  FaWrench,
  FaArrowRight,
  FaPlane,
  FaMedkit,
  FaChair,
  FaCubes,
  FaHammer,
  FaSun,
  FaServer,
  FaTachometerAlt,
  FaBox,
  FaBatteryFull,
  FaPeopleCarry,
  FaDollarSign,
  FaChartBar,
  FaCaretRight,
  FaCaretLeft,
} from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SmartFactory = () => {
  // Factory KPIs We Cover
  const factoryKPIs = [
    {
      icon: <FaTachometerAlt className="h-6 w-6" />,
      title: "Factory Overview",
      description: "Centralized dashboard with real-time production status",
      metrics: ["Production status", "Line efficiency"],
      color: "green-600",
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: "OEE Monitoring",
      description: "Track Overall Equipment Effectiveness across all machines",
      metrics: ["Availability", "Performance", "Quality"],
      color: "green-600",
    },
    {
      icon: <FaIndustry className="h-6 w-6" />,
      title: "Production Analytics",
      description: "Real-time production data and trend analysis",
      metrics: ["Output rates", "Cycle times", "Yield"],
      color: "green-600",
    },
    {
      icon: <FaCogs className="h-6 w-6" />,
      title: "Machine Performance",
      description: "Monitor individual machine health and efficiency",
      metrics: ["Uptime", "Throughput", "Health score"],
      color: "green-600",
    },
    {
      icon: <FaExclamationTriangle className="h-6 w-6" />,
      title: "Downtime Analysis",
      description: "Track and analyze production stoppages",
      metrics: ["Downtime causes", "MTBF", "MTTR"],
      color: "green-600",
    },
    {
      icon: <FaMicroscope className="h-6 w-6" />,
      title: "Quality Metrics",
      description: "Real-time quality monitoring and defect tracking",
      metrics: ["Defect rate", "First-pass yield", "Rework"],
      color: "green-600",
    },
    {
      icon: <FaTools className="h-6 w-6" />,
      title: "Maintenance Scheduling",
      description: "Predictive and preventive maintenance planning",
      metrics: ["Maintenance alerts", "Work orders", "Spare parts"],
      color: "green-600",
    },
    {
      icon: <FaBolt className="h-6 w-6" />,
      title: "Energy Management",
      description: "Monitor and optimize energy consumption",
      metrics: ["kW consumption", "Energy cost", "Carbon footprint"],
      color: "green-600",
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: "Workforce Productivity",
      description: "Track operator efficiency and skill utilization",
      metrics: ["Labor efficiency", "Skill matrix", "Training needs"],
      color: "green-600",
    },
    {
      icon: <FaWarehouse className="h-6 w-6" />,
      title: "Inventory Control",
      description: "Real-time inventory tracking and optimization",
      metrics: ["Stock levels", "Turnover rate", "WIP"],
      color: "green-600",
    },
    {
      icon: <FaShieldAlt className="h-6 w-6" />,
      title: "Safety Compliance",
      description: "Monitor safety protocols and compliance",
      metrics: ["Incident rate", "Safety audits", "Near misses"],
      color: "green-600",
    },
    {
      icon: <FaDollarSign className="h-6 w-6" />,
      title: "Cost Analytics",
      description: "Track production costs and profitability",
      metrics: ["Cost per unit", "Scrap cost", "Labor cost"],
      color: "green-600",
    },
  ];

  // Industry Applications
  const industryApplications = [
    {
      title: "Automotive Manufacturing",
      icon: <FaCar className="h-8 w-8" />,
      description:
        "Assembly line optimization, robotics integration, quality control, and supply chain synchronization",
      features: [
        "Robotic welding automation",
        "Assembly line balancing",
        "Paint shop optimization",
        "Quality inspection automation",
        "Parts traceability",
        "Supply chain integration",
      ],
      technologies: ["Robotics", "Vision Systems", "AGVs", "PLC Integration"],
      metrics: ["30% faster assembly", "40% quality improvement"],
      color: "green-600",
    },
    {
      title: "Electronics Production",
      icon: <FaMicrochip className="h-8 w-8" />,
      description:
        "PCB assembly automation, component placement, testing automation, and yield optimization",
      features: [
        "SMT line automation",
        "Auto-insertion systems",
        "AOI inspection",
        "Burn-in testing",
        "ESD protection",
        "Yield management",
      ],
      technologies: ["SMT Machines", "AOI Systems", "Test Rigs", "IoT Sensors"],
      metrics: ["50% yield improvement", "60% testing time reduction"],
      color: "green-600",
    },
    {
      title: "Textile Manufacturing",
      icon: <FaTshirt className="h-8 w-8" />,
      description:
        "Automated weaving, cutting, stitching, and quality inspection across production lines",
      features: [
        "Auto-loom monitoring",
        "Digital cutting systems",
        "Sewing automation",
        "Fabric inspection",
        "Color matching",
        "Pattern optimization",
      ],
      technologies: [
        "CAD/CAM",
        "Vision Inspection",
        "Robotic Handling",
        "ERP Integration",
      ],
      metrics: ["35% material savings", "45% production increase"],
      color: "green-600",
    },
    {
      title: "Consumer Goods",
      icon: <FaBoxOpen className="h-8 w-8" />,
      description:
        "Packaging automation, filling lines, labeling, and quality assurance for FMCG products",
      features: [
        "High-speed filling",
        "Packaging automation",
        "Label verification",
        "Checkweighing",
        "Carton forming",
        "Palletizing robots",
      ],
      technologies: [
        "Filling Machines",
        "Vision Systems",
        "Checkweighers",
        "Robotic Palletizers",
      ],
      metrics: ["60% line efficiency", "30% packaging cost reduction"],
      color: "green-600",
    },
    {
      title: "Heavy Machinery",
      icon: <FaHammer className="h-8 w-8" />,
      description:
        "CNC machine monitoring, assembly optimization, tool management, and production scheduling",
      features: [
        "CNC machine monitoring",
        "Tool wear prediction",
        "Assembly optimization",
        "Quality control",
        "Preventive maintenance",
        "Production scheduling",
      ],
      technologies: [
        "CNC Controllers",
        "IoT Sensors",
        "Tool Management",
        "MES Integration",
      ],
      metrics: ["25% OEE improvement", "40% maintenance cost reduction"],
      color: "green-600",
    },
    {
      title: "Packaging Industry",
      icon: <FaBox className="h-8 w-8" />,
      description:
        "Automated packaging lines, palletizing, labeling, and logistics integration",
      features: [
        "High-speed packaging",
        "Robotic palletizing",
        "Label application",
        "Case forming",
        "Inkjet printing",
        "Logistics integration",
      ],
      technologies: [
        "Form-Fill-Seal",
        "Robotic Arms",
        "Vision Inspection",
        "WMS Integration",
      ],
      metrics: ["50% labor reduction", "70% speed improvement"],
      color: "green-600",
    },
  ];

  // Additional Industries
  const additionalIndustries = [
    { name: "Aerospace Components", icon: <FaPlane className="h-6 w-6" /> },
    { name: "Medical Devices", icon: <FaMedkit className="h-6 w-6" /> },
    { name: "Furniture Manufacturing", icon: <FaChair className="h-6 w-6" /> },
    { name: "Plastic Injection", icon: <FaCubes className="h-6 w-6" /> },
    { name: "Metal Fabrication", icon: <FaIndustry className="h-6 w-6" /> },
    { name: "Renewable Energy", icon: <FaSun className="h-6 w-6" /> },
  ];

  // Problems We Solve
  const problems = [
    {
      title: "Low OEE (40-60%)",
      description:
        "Inefficient equipment utilization due to poor visibility and manual processes",
      impact: "Millions in lost production capacity",
      icon: <FaChartLine className="h-8 w-8" />,
      color: "green-600",
    },
    {
      title: "Frequent Downtime",
      description:
        "Unexpected breakdowns halting production and causing delivery delays",
      impact: "15-20% production loss on average",
      icon: <FaExclamationTriangle className="h-8 w-8" />,
      color: "green-600",
    },
    {
      title: "Quality Issues",
      description:
        "High defect rates and rework costs due to manual inspection",
      impact: "5-8% scrap and rework costs",
      icon: <FaMicroscope className="h-8 w-8" />,
      color: "green-600",
    },
    {
      title: "Energy Waste",
      description: "Unoptimized consumption during production and idle times",
      impact: "25-30% higher energy costs",
      icon: <FaBolt className="h-8 w-8" />,
      color: "green-600",
    },
  ];

  // Benefits of Automation
  const benefits = [
    {
      title: "85%+ OEE Improvement",
      description:
        "Maximize equipment utilization and efficiency through real-time monitoring",
      icon: <FaTachometerAlt className="h-8 w-8" />,
      details: [
        "Real-time monitoring",
        "Performance analytics",
        "Efficiency optimization",
      ],
    },
    {
      title: "70% Downtime Reduction",
      description:
        "Predictive maintenance prevents breakdowns before they occur",
      icon: <FaTools className="h-8 w-8" />,
      details: [
        "Predictive algorithms",
        "Condition monitoring",
        "Automated alerts",
      ],
    },
    {
      title: "40% Quality Improvement",
      description:
        "Real-time quality monitoring and automated defect detection",
      icon: <FaMicroscope className="h-8 w-8" />,
      details: [
        "Inline inspection",
        "Statistical control",
        "Root cause analysis",
      ],
    },
    {
      title: "35% Energy Savings",
      description:
        "Optimize energy consumption across all production operations",
      icon: <FaBolt className="h-8 w-8" />,
      details: ["Smart scheduling", "Peak shaving", "Equipment optimization"],
    },
    {
      title: "50% Inventory Reduction",
      description:
        "Just-in-time inventory optimization and smart warehouse management",
      icon: <FaWarehouse className="h-8 w-8" />,
      details: [
        "Real-time tracking",
        "Demand forecasting",
        "Automated replenishment",
      ],
    },
    {
      title: "Enhanced Safety",
      description:
        "Real-time safety monitoring and automated compliance management",
      icon: <FaShieldAlt className="h-8 w-8" />,
      details: [
        "Safety monitoring",
        "Compliance automation",
        "Incident prevention",
      ],
    },
  ];

  // Smart Factory Features
  const smartFactoryFeatures = [
    {
      title: "Digital Twin Simulation",
      description:
        "Create virtual replicas of production lines for simulation and optimization",
      capabilities: [
        "What-if analysis",
        "Layout optimization",
        "Bottleneck identification",
      ],
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Machine learning algorithms for predictive maintenance and quality control",
      capabilities: [
        "Anomaly detection",
        "Pattern recognition",
        "Predictive modeling",
      ],
    },
    {
      title: "IoT Integration",
      description:
        "Connect all machines, sensors, and devices for unified monitoring",
      capabilities: [
        "Real-time data",
        "Device management",
        "Protocol conversion",
      ],
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports and insights automatically",
      capabilities: [
        "Custom dashboards",
        "KPI tracking",
        "Performance reports",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('modules/factory-bg.webp')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Optional soft gradient for premium SaaS look */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/40 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md text-white text-lg font-medium mb-8 border border-white/20">
                <FaIndustry className="h-5 w-5" />
                Factory Automation Platform
              </div>

              <h1 className="text-white">
                Intelligent Factory
                <span className="block mt-4 text-green-300">Automation</span>
              </h1>

              <h2 className="text-gray-200 text-base mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
                Transform your manufacturing facility with AI-powered automation
                that drives efficiency, quality, and productivity to new levels.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-lg border-2 border-green-600">
                  <Link
                    to="/factory-automation/demo"
                    className="flex items-center gap-3"
                  >
                    <FaRocket className="h-5 w-5" />
                    Schedule Automation Demo
                  </Link>
                </Button>

                <Button className="bg-transparent hover:bg-white/10 text-white px-8 py-6 text-lg font-semibold rounded-lg border-2 border-white">
                  <Link
                    to="/contact/automation-expert"
                    className="flex items-center gap-3"
                  >
                    <FaUsers className="h-5 w-5" />
                    Talk to Automation Expert
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2>Smart Factory Management</h2>
                <p>
                  Factory Automation creates intelligent, connected production
                  environments where machines, systems, and people collaborate
                  seamlessly.
                </p>
                <p className="mb-8">
                  Our{" "}
                  <span className="font-bold text-green-600">
                    Industry INTEGRA 360
                  </span>{" "}
                  enables real-time monitoring, predictive maintenance,
                  production optimization, and end-to-end visibility across your
                  entire manufacturing operation.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <span>Real-time production monitoring and control</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <span>Predictive maintenance and quality control</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <span>End-to-end visibility and optimization</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 md:p-8 border border-gray-300 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-600 to-green-700 mb-4">
                      <FaIndustry className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <h3>Industry INTEGRA 360</h3>
                    <p className="text-gray-600">
                      Complete Factory Automation Platform
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-300 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        85%+
                      </div>
                      <div className="text-sm text-gray-600">
                        OEE Improvement
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-300 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        70%
                      </div>
                      <div className="text-sm text-gray-600">
                        Downtime Reduction
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-300 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        40%
                      </div>
                      <div className="text-sm text-gray-600">
                        Quality Improvement
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-300 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        35%
                      </div>
                      <div className="text-sm text-gray-600">
                        Energy Savings
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={350}
                  duration={15}
                  borderWidth={3}
                  className="rounded-2xl"
                  colorFrom="#059669"
                  colorTo="#16a34a"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2>Industry INTEGRA 360 Factory KPIs We Cover</h2>
              <p>
                Comprehensive monitoring and optimization of every aspect of
                your factory operations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {factoryKPIs.map((kpi, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-green-600"
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-green-100 text-green-600 mb-4`}
                  >
                    {kpi.icon}
                  </div>
                  <h3 className="mb-2">{kpi.title}</h3>
                  <p className="text-sm mb-4">{kpi.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {kpi.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2>Industry Applications</h2>
              <p>
                Tailored automation solutions for every manufacturing sector
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {industryApplications.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-300 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-green-100 text-green-600">
                      {industry.icon}
                    </div>
                    <div>
                      <h3>{industry.title}</h3>
                      <p className="text-sm">{industry.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4>Key Features:</h4>
                    <div className="space-y-2 mt-3">
                      {industry.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded border border-green-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2">Metrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded border border-green-200"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="mb-6 md:mb-8">Also Used In:</h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {additionalIndustries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 md:px-6 md:py-4 border border-gray-300"
                  >
                    {industry.icon}
                    <span className="font-medium text-gray-900">
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2>The Problem We Solve</h2>
              <p>
                Traditional factories operate with disconnected machines, manual
                data collection, and limited visibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-300 shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-green-100 text-green-600 flex-shrink-0">
                      {problem.icon}
                    </div>
                    <div>
                      <h3>{problem.title}</h3>
                      <div className="mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium inline-block">
                        Impact: {problem.impact}
                      </div>
                    </div>
                  </div>
                  <p>{problem.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-300 shadow-lg">
              <p className="text-lg mb-6 text-center">
                Without real-time monitoring and predictive analytics, factories
                struggle to optimize production, maintain quality standards, and
                respond quickly to market demands, resulting in lost revenue and
                competitive disadvantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Dashboard Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2>Industry INTEGRA 360 Factory Automation Dashboard</h2>
              <p>
                Complete factory visibility with real-time monitoring,
                predictive analytics, and intelligent control
              </p>
            </div>

            {/* Top Text Content */}
            <div className="max-w-4xl mx-auto mb-12 md:mb-16">
              <h3 className="mb-6 md:mb-8 text-center">
                Factory Automation Dashboard – Complete Overview
              </h3>

              <div className="space-y-4 md:space-y-6">
                {smartFactoryFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-green-50 rounded-xl p-6 border border-green-300"
                  >
                    <h4 className="mb-3">{feature.title}</h4>
                    <p className="mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.capabilities.map((capability, i) => (
                        <span
                          key={i}
                          className="text-sm bg-white text-green-700 px-3 py-1 rounded-lg border border-green-300"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Width Dashboard */}
            <div className="relative w-full">
              <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-green-900 rounded-2xl p-4 md:p-6 lg:p-10 shadow-2xl border border-white/10">
                {/* Dashboard Title */}
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-white mb-3">
                    Live Factory Automation Dashboard
                  </h3>
                  <p className="text-gray-400">
                    Real-time production analytics, machine status, and
                    intelligent automation controls
                  </p>
                </div>

                {/* Dashboard Image */}
                <div className="bg-gray-50 rounded-2xl border-2 border-gray-800 p-3 md:p-4">
                  <div className="h-[400px] md:h-[500px] lg:h-[600px] overflow-y-auto rounded-lg">
                    <img
                      src="dashboards/factory-dashboard.png"
                      alt="Factory Automation Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                {/* Caption */}
                <div className="mt-4 md:mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    Unified dashboard delivering real-time operational insights
                    across the factory floor
                  </p>
                </div>
              </div>

              {/* Glow */}
              <BorderBeam
                size={420}
                duration={18}
                borderWidth={3}
                className="rounded-2xl"
                colorFrom="#059669"
                colorTo="#16a34a"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits vs Consequences */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="mb-8">Benefits with Industry INTEGRA 360</h2>
                <div className="space-y-4 md:space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-6 border border-green-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="mb-2">{benefit.title}</h3>
                          <p className="mb-3">{benefit.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {benefit.details.map((detail, i) => (
                              <span
                                key={i}
                                className="text-xs bg-white text-green-700 px-2 py-1 rounded border border-green-300"
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8">Consequences Without Automation</h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                    <h3 className="text-red-600 mb-4">✗ Low OEE (40-60%)</h3>
                    <p>
                      Inefficient equipment utilization and production
                      bottlenecks
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                    <h3 className="text-red-600 mb-4">✗ Frequent Downtime</h3>
                    <p>
                      Unexpected breakdowns halting production and causing
                      delays
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                    <h3 className="text-red-600 mb-4">✗ Quality Issues</h3>
                    <p>
                      High defect rates and rework costs affecting profitability
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                    <h3 className="text-red-600 mb-4">✗ Energy Waste</h3>
                    <p>Unoptimized consumption increasing operational costs</p>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-6 border border-gray-300">
                    <h3 className="text-red-600 mb-4">✗ Competitive Decline</h3>
                    <p>
                      Falling behind Industry 4.0 competitors in efficiency and
                      innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Metrics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-8">Smart Factory Metrics</h2>
            <p className="mb-8 md:mb-12 max-w-3xl mx-auto">
              Track and optimize these key performance indicators with our
              automation platform
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-300">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                  85-95%
                </div>
                <div className="font-semibold mb-2">Target OEE</div>
                <p className="text-sm">World-class manufacturing efficiency</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-300">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                  99%
                </div>
                <div className="font-semibold mb-2">Schedule Adherence</div>
                <p className="text-sm">On-time production completion</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-300">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                  98%+
                </div>
                <div className="font-semibold mb-2">Quality Yield</div>
                <p className="text-sm">First-pass quality rate</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-300">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                  95%
                </div>
                <div className="font-semibold mb-2">Equipment Availability</div>
                <p className="text-sm">Machine uptime and reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 mb-8">
              <FaIndustry className="h-12 w-12 md:h-16 md:w-16 text-white" />
            </div>

            <h1 className="text-white mb-6">Transform Your Factory Today</h1>

            <p className="text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto">
              Join leading manufacturers who have achieved Industry 4.0
              excellence with Industry INTEGRA 360
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold mb-2">450+</div>
                <div className="text-gray-300">Factories Automated</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold mb-2">$1.8B</div>
                <div className="text-gray-300">Client Savings</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold mb-2">99.5%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-6 text-lg font-semibold rounded-lg border-2 border-green-600">
                <Link
                  to="/factory-automation/demo"
                  className="flex items-center gap-3"
                >
                  <FaRocket className="h-5 w-5 md:h-6 md:w-6" />
                  Request Live Demo
                </Link>
              </Button>

              <Button className="bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-lg border-2 border-white">
                <Link
                  to="/contact/roi-analysis"
                  className="flex items-center gap-3"
                >
                  <FaChartLine className="h-5 w-5 md:h-6 md:w-6" />
                  Get Free ROI Analysis
                </Link>
              </Button>
            </div>

            <p className="text-gray-400 mt-6 md:mt-8 text-sm">
              Implementation in 8-12 weeks • 24/7 technical support •
              Industry-leading performance guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartFactory;
