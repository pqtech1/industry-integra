import React from "react";
import {
  FaBuilding,
  FaThermometerHalf,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaExclamationTriangle,
  FaBolt,
  FaLeaf,
  FaWater,
  FaDoorOpen,
  FaVideo,
  FaWifi,
  FaCloud,
  FaDatabase,
  FaRocket,
  FaMobileAlt,
  FaTools,
  FaFan,
  FaLightbulb,
  FaPlug,
  FaBell,
  FaSync,
  FaClipboardCheck,
  FaMapMarkerAlt,
  FaIndustry,
  FaHospital,
  FaSchool,
  FaShoppingCart,
  FaWarehouse,
  FaServer,
  FaUniversity,
  FaHotel,
  FaStore,
  FaTachometerAlt,
  FaRobot,
  FaCog,
} from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BuildingAutomation = () => {
  // Building Automation KPIs We Cover
  const buildingKPIs = [
    {
      icon: <FaTachometerAlt className="h-6 w-6" />,
      title: "Overview Dashboard",
      description: "Centralized view of all building systems in real-time",
      metrics: ["100+ data points", "Real-time monitoring"],
      color: "blue",
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: "Occupancy Analytics",
      description: "Track and optimize space usage patterns",
      metrics: ["Occupancy patterns", "Peak usage times"],
      color: "green",
    },
    {
      icon: <FaDoorOpen className="h-6 w-6" />,
      title: "Space Utilization",
      description: "Maximize efficiency of every square foot",
      metrics: ["Utilization rates", "Space allocation"],
      color: "purple",
    },
    {
      icon: <FaThermometerHalf className="h-6 w-6" />,
      title: "Comfort Monitoring",
      description: "Maintain optimal environmental conditions",
      metrics: ["Temperature zones", "Humidity levels"],
      color: "orange",
    },
    {
      icon: <FaLeaf className="h-6 w-6" />,
      title: "Air Quality Index",
      description: "Monitor and improve indoor air quality",
      metrics: ["CO2 levels", "VOC monitoring"],
      color: "teal",
    },
    {
      icon: <FaBolt className="h-6 w-6" />,
      title: "Energy Consumption",
      description: "Track and optimize energy usage across all systems",
      metrics: ["kW consumption", "Peak demand"],
      color: "yellow",
    },
    {
      icon: <FaLightbulb className="h-6 w-6" />,
      title: "Lighting Control",
      description: "Intelligent lighting based on occupancy and daylight",
      metrics: ["Lighting schedules", "Energy savings"],
      color: "indigo",
    },
    {
      icon: <FaFan className="h-6 w-6" />,
      title: "HVAC Performance",
      description: "Optimize heating, ventilation, and air conditioning",
      metrics: ["System efficiency", "Maintenance alerts"],
      color: "red",
    },
    {
      icon: <FaTools className="h-6 w-6" />,
      title: "Maintenance Alerts",
      description: "Predictive maintenance and automated work orders",
      metrics: ["Predictive alerts", "Downtime reduction"],
      color: "pink",
    },
    {
      icon: <FaClipboardCheck className="h-6 w-6" />,
      title: "Safety Compliance",
      description: "Ensure compliance with safety standards and regulations",
      metrics: ["Compliance status", "Audit readiness"],
      color: "gray",
    },
    {
      icon: <FaShieldAlt className="h-6 w-6" />,
      title: "Access Control",
      description: "Secure building access and visitor management",
      metrics: ["Access logs", "Security breaches"],
      color: "blue",
    },
    {
      icon: <FaRobot className="h-6 w-6" />,
      title: "Automation Rules",
      description: "Custom automation scenarios and triggers",
      metrics: ["Automated routines", "Energy optimization"],
      color: "green",
    },
  ];

  // Industry Solutions
  const industrySolutions = [
    {
      title: "Healthcare Facilities",
      icon: <FaHospital className="h-8 w-8" />,
      description:
        "Critical environment control for patient safety, regulatory compliance, and energy optimization",
      features: [
        "Operating room controls",
        "Lab environmental monitoring",
        "Patient room comfort",
        "Pharmacy temperature control",
        "Sterilization room monitoring",
        "Emergency power management",
      ],
      compliance: ["JCI", "FDA", "ASHRAE 170"],
      metrics: ["30% energy savings", "99.9% uptime"],
      color: "red",
    },
    {
      title: "Educational Campuses",
      icon: <FaUniversity className="h-8 w-8" />,
      description:
        "Automated classroom environments, library controls, dormitory management, and campus-wide energy optimization",
      features: [
        "Smart classroom scheduling",
        "Library climate control",
        "Dormitory energy management",
        "Campus-wide security",
        "Sports facility controls",
        "Laboratory monitoring",
      ],
      compliance: ["LEED Schools", "WELL Building"],
      metrics: ["40% cost reduction", "Enhanced learning environment"],
      color: "blue",
    },
    {
      title: "Hospitality & Retail",
      icon: <FaHotel className="h-8 w-8" />,
      description:
        "Smart hotels, malls, and restaurants with automated ambience control, guest comfort optimization, and energy management",
      features: [
        "Guest room automation",
        "Restaurant climate control",
        "Retail store lighting",
        "Spa environmental controls",
        "Conference room scheduling",
        "Parking management",
      ],
      compliance: ["Green Key", "Green Globe"],
      metrics: ["35% energy savings", "25% increased guest satisfaction"],
      color: "green",
    },
    {
      title: "Industrial Complexes",
      icon: <FaIndustry className="h-8 w-8" />,
      description:
        "Warehouses, manufacturing plants, and industrial facilities with integrated security, environmental controls, and operational efficiency",
      features: [
        "Warehouse temperature control",
        "Manufacturing floor monitoring",
        "Clean room controls",
        "Industrial security",
        "Process cooling",
        "Compressed air management",
      ],
      compliance: ["ISO 50001", "OSHA"],
      metrics: ["45% energy reduction", "50% maintenance cost reduction"],
      color: "orange",
    },
  ];

  // Additional Industries
  const additionalIndustries = [
    { name: "Commercial Offices", icon: <FaBuilding className="h-6 w-6" /> },
    { name: "Data Centers", icon: <FaServer className="h-6 w-6" /> },
    { name: "Government Buildings", icon: <FaBuilding className="h-6 w-6" /> },
    {
      name: "Airports & Stations",
      icon: <FaMapMarkerAlt className="h-6 w-6" />,
    },
    { name: "Sports Arenas", icon: <FaBuilding className="h-6 w-6" /> },
    { name: "Shopping Centers", icon: <FaStore className="h-6 w-6" /> },
  ];

  // Problems We Solve
  const problems = [
    {
      title: "Disconnected Systems",
      description:
        "HVAC, lighting, security, and energy management systems operate in isolation, creating inefficiencies and control gaps",
      impact: "25-40% energy waste",
      icon: <FaExclamationTriangle className="h-8 w-8" />,
      color: "red",
    },
    {
      title: "Reactive Maintenance",
      description:
        "Equipment failures happen unexpectedly, leading to emergency repairs and costly downtime",
      impact: "3-5x higher repair costs",
      icon: <FaTools className="h-8 w-8" />,
      color: "orange",
    },
    {
      title: "Inconsistent Comfort",
      description:
        "Manual controls can't adapt to dynamic occupancy patterns and environmental changes",
      impact: "Reduced productivity by 15-20%",
      icon: <FaThermometerHalf className="h-8 w-8" />,
      color: "yellow",
    },
    {
      title: "Security Vulnerabilities",
      description:
        "Disconnected security systems create blind spots and slow emergency response",
      impact: "Increased safety risks",
      icon: <FaShieldAlt className="h-8 w-8" />,
      color: "blue",
    },
  ];

  // Benefits of Automation
  const benefits = [
    {
      title: "40% Energy Savings",
      description:
        "Intelligent automation reduces HVAC and lighting waste through predictive algorithms",
      icon: <FaBolt className="h-8 w-8" />,
      details: ["Smart scheduling", "Peak load shifting", "Demand response"],
    },
    {
      title: "Enhanced Occupant Comfort",
      description:
        "Perfect environment tailored to real-time needs and preferences",
      icon: <FaUsers className="h-8 w-8" />,
      details: ["Personalized zones", "Adaptive learning", "Comfort analytics"],
    },
    {
      title: "Predictive Maintenance",
      description:
        "Identify issues before they cause downtime using AI-powered analytics",
      icon: <FaCogs className="h-8 w-8" />,
      details: ["Anomaly detection", "Lifecycle tracking", "Automated alerts"],
    },
    {
      title: "Reduced Operational Costs",
      description:
        "Automation eliminates manual intervention needs and optimizes resource usage",
      icon: <FaChartLine className="h-8 w-8" />,
      details: ["Labor optimization", "Resource allocation", "Cost analytics"],
    },
    {
      title: "Improved Security",
      description:
        "Integrated access control, surveillance, and emergency response systems",
      icon: <FaShieldAlt className="h-8 w-8" />,
      details: [
        "Unified security",
        "Real-time monitoring",
        "Automated response",
      ],
    },
    {
      title: "Sustainability Compliance",
      description:
        "Meet and exceed green building standards with automated reporting",
      icon: <FaLeaf className="h-8 w-8" />,
      details: [
        "LEED automation",
        "Carbon tracking",
        "Sustainability reporting",
      ],
    },
  ];

  // Dashboard Features
  const dashboardFeatures = [
    {
      title: "Real-time Monitoring",
      description:
        "Live data from all connected systems with customizable views",
      metrics: ["< 1 second updates", "1000+ data points"],
    },
    {
      title: "Advanced Analytics",
      description:
        "AI-powered insights and predictive analytics for optimization",
      metrics: ["Predictive algorithms", "Pattern recognition"],
    },
    {
      title: "Automated Controls",
      description: "Schedule-based and event-driven automation rules",
      metrics: ["100+ automation rules", "Condition-based triggers"],
    },
    {
      title: "Mobile Access",
      description: "Full control and monitoring from any mobile device",
      metrics: ["iOS & Android apps", "Remote access"],
    },
  ];

  // Technology Stack
  const technologyStack = [
    {
      category: "Protocol Support",
      technologies: [
        "BACnet/IP",
        "Modbus TCP/RTU",
        "KNX",
        "LonWorks",
        "MQTT",
        "OPC UA",
      ],
      icon: <FaPlug className="h-6 w-6" />,
    },
    {
      category: "Cloud Platform",
      technologies: [
        "AWS IoT Core",
        "Azure Digital Twins",
        "Edge Computing",
        "Data Analytics",
      ],
      icon: <FaCloud className="h-6 w-6" />,
    },
    {
      category: "Security",
      technologies: [
        "End-to-end Encryption",
        "Zero Trust Architecture",
        "Role-based Access",
        "Audit Logging",
      ],
      icon: <FaShieldAlt className="h-6 w-6" />,
    },
    {
      category: "Integration",
      technologies: [
        "REST API",
        "Webhooks",
        "Custom Integrations",
        "Third-party Systems",
      ],
      icon: <FaSync className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('modules/building-bg.webp')" }}
        />

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Subtle brand gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-green-900/40" />

        {/* Grid texture */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-lg font-medium mb-8 border border-white/20">
                <FaCog className="h-5 w-5" />
                Building Automation Systems (BAS)
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
                Intelligent Building
                <span className="block text-4xl md:text-6xl mt-4">
                  Automation Platform
                </span>
              </h1>

              {/* Value props */}
              <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto font-semibold">
                Transform your buildings into intelligent ecosystems that
                optimize comfort, security, and efficiency
              </p>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Reduce operational costs by up to 40% while enhancing occupant
                experience and sustainability
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-lg shadow-xl">
                  <Link
                    to="/demo/building-automation"
                    className="flex items-center gap-3"
                  >
                    <FaRocket className="h-5 w-5" />
                    Request Live Demo
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="px-10 py-6 text-lg border-2 border-white text-white hover:bg-white/10 rounded-lg"
                >
                  <Link
                    to="/contact/automation-expert"
                    className="flex items-center gap-3"
                  >
                    <FaUsers className="h-5 w-5" />
                    Consult Automation Specialist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Intelligent Building Management
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Building Automation is the centralized, intelligent control of
                  your facility's critical systems—from lighting and HVAC to
                  security and access control.
                </p>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our{" "}
                  <span className="font-bold text-blue-600">
                    Industry INTEGRA 360
                  </span>{" "}
                  transforms disconnected systems into a cohesive, responsive
                  ecosystem that anticipates needs, optimizes performance, and
                  enhances occupant experience while maximizing energy
                  efficiency.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Centralized control of all building systems
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Real-time monitoring and analytics
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Predictive maintenance and automation
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mb-4">
                      <FaBuilding className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Industry INTEGRA 360
                    </h3>
                    <p className="text-gray-600">
                      Complete Building Automation Platform
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        40%
                      </div>
                      <div className="text-sm text-gray-600">
                        Energy Savings
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-600">System Uptime</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        50%
                      </div>
                      <div className="text-sm text-gray-600">
                        Maintenance Cost Reduction
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={350}
                  duration={15}
                  borderWidth={3}
                  className="rounded-2xl"
                  colorFrom="#3b82f6"
                  colorTo="#10b981"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industry INTEGRA 360 Building KPIs We Cover
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive monitoring and control of every aspect of your
                building's performance
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {buildingKPIs.map((kpi, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-${kpi.color}-100 text-${kpi.color}-600 mb-4`}
                  >
                    {kpi.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {kpi.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {kpi.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {kpi.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforming These Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored solutions for every building type and industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {industrySolutions.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-xl bg-${industry.color}-100 text-${industry.color}-600`}
                    >
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600">{industry.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Compliance:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.compliance.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Metrics:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Also Used In:
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {additionalIndustries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-6 py-4 border border-gray-200"
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
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Problem We Solve
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Modern buildings suffer from disconnected systems that lead to
                inefficiencies and increased costs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-${problem.color}-100 text-${problem.color}-600 flex-shrink-0`}
                    >
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {problem.title}
                      </h3>
                      <div className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium inline-block">
                        Impact: {problem.impact}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{problem.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Top Content */}
              <div className="max-w-5xl mx-auto px-6 py-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Industry INTEGRA 360 Building Automation Dashboard
                </h3>

                <p className="text-lg md:text-xl text-gray-600 mb-10">
                  Experience unified control across all your building systems
                  through a single, intelligent automation platform.
                </p>

                {/* Feature Highlights */}
                <div className="flex flex-wrap justify-center gap-3">
                  {dashboardFeatures
                    .flatMap((f) => f.metrics)
                    .map((metric, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-medium
                     bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {metric}
                      </span>
                    ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200" />

              {/* Full Width Dashboard */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
                <div className="relative max-w-7xl mx-auto">
                  {/* Subtle frame */}                

                  <div className="bg-gray-50 rounded-2xl border-2 border-slate-800 p-4">
                    <div className="h-[600px] overflow-y-auto rounded-lg">
                      {/* Dashboard Image Placeholder */}

                      {
                        // Replace this placeholder with your actual dashboard image:
                        <img
                          src="dashboards/building-dashboard.png"
                          alt="Building Automation Dashboard"
                          className="w-full h-auto"
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Benefits with Industry INTEGRA 360
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-6 border border-green-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-700 mb-3">
                            {benefit.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {benefit.details.map((detail, i) => (
                              <span
                                key={i}
                                className="text-xs bg-white text-green-700 px-2 py-1 rounded border border-green-200"
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
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Consequences Without Automation
                </h2>
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      ✗ Escalating Energy Bills
                    </h3>
                    <p className="text-gray-700 mb-4">
                      25-40% higher consumption than necessary due to
                      inefficient systems
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      ✗ Poor Occupant Experience
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Inconsistent temperatures affecting productivity and
                      comfort
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      ✗ Reactive Maintenance Costs
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Emergency repairs costing 3-5x more than preventive
                      maintenance
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      ✗ Security Vulnerabilities
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Disconnected systems creating safety gaps and slow
                      response times
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on industry standards with modern cloud technology for
                maximum compatibility and scalability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologyStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      {tech.icon}
                    </div>
                    <h3 className="font-bold text-gray-900">{tech.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {tech.technologies.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-green-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 mb-8">
              <FaCog className="h-16 w-16 text-white" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Automate Your Building?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join thousands of facilities worldwide that have transformed their
              operations with Industry INTEGRA 360 Building Automation Platform.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-gray-300">Average Energy Savings</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-gray-300">System Uptime</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold mb-2">12-18</div>
                <div className="text-gray-300">Months ROI</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-7 text-lg font-semibold rounded-lg">
                <Link
                  to="/demo/building-automation"
                  className="flex items-center gap-3"
                >
                  <FaRocket className="h-6 w-6" />
                  Schedule Live Demo
                </Link>
              </Button>

              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-12 py-7 text-lg font-semibold rounded-lg">
                <Link
                  to="/contact/roi-analysis"
                  className="flex items-center gap-3"
                >
                  <FaChartLine className="h-6 w-6" />
                  Get Free ROI Analysis
                </Link>
              </Button>
            </div>

            <p className="text-gray-400 mt-8 text-sm">
              Complete implementation in 6-8 weeks • 24/7 support •
              Industry-leading SLA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingAutomation;
