import React from "react";
import {
  FaIndustry,
  FaChartLine,
  FaCogs,
  FaRobot,
  FaShieldAlt,
  FaCloud,
  FaUsers,
  FaBolt,
  FaDatabase,
  FaEye,
  FaSync,
  FaPlug,
  FaLightbulb,
  FaRocket,
  FaGlobe,
  FaMobileAlt,
  FaLock,
  FaNetworkWired,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatIsIndustryIntegra = () => {
  // Key features
  const keyFeatures = [
    {
      icon: <FaIndustry className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Unified Manufacturing Platform",
      description:
        "Connect all your manufacturing systems - from PLCs and SCADA to ERP and MES - into a single, cohesive platform",
      color: "green",
    },
    {
      icon: <FaChartLine className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Real-Time Analytics",
      description:
        "Transform raw data into actionable insights with AI-powered predictive analytics and live dashboards",
      color: "green",
    },
    {
      icon: <FaCogs className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Process Optimization",
      description:
        "Automatically optimize production workflows, reduce waste, and improve overall equipment effectiveness (OEE)",
      color: "green",
    },
    {
      icon: <FaRobot className="h-8 w-8 md:h-10 md:w-10" />,
      title: "AI-Powered Intelligence",
      description:
        "Machine learning algorithms that learn from your operations to predict failures and optimize performance",
      color: "green",
    },
  ];

  // Platform capabilities
  const capabilities = [
    {
      title: "Production Intelligence",
      icon: <FaIndustry className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "Real-time OEE monitoring across all lines",
        "Automated production scheduling optimization",
        "Predictive quality control analytics",
        "Yield improvement insights and recommendations",
      ],
      color: "green",
    },
    {
      title: "Energy Management",
      icon: <FaBolt className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "Smart energy consumption tracking by machine",
        "Peak load optimization to reduce utility costs",
        "Carbon footprint analysis and reporting",
        "Predictive energy saving recommendations",
      ],
      color: "green",
    },
    {
      title: "Predictive Maintenance",
      icon: <FaCogs className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "AI-driven failure prediction 30 days in advance",
        "Vibration and thermal condition monitoring",
        "Automated maintenance scheduling",
        "Spare parts inventory optimization",
      ],
      color: "green",
    },
    {
      title: "Quality Excellence",
      icon: <FaEye className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "Real-time defect detection using computer vision",
        "Statistical process control with automatic alerts",
        "Root cause analysis for quality issues",
        "Quality trend analytics across shifts and batches",
      ],
      color: "green",
    },
  ];

  // Technology stack
  const technologyStack = [
    {
      category: "Edge Computing",
      technologies: [
        "Industrial IoT Gateways",
        "OPC UA/DA Integration",
        "MQTT Protocol Support",
        "Real-time Edge Analytics",
      ],
      icon: <FaNetworkWired className="h-6 w-6 md:h-8 md:w-8" />,
      color: "green",
    },
    {
      category: "Cloud Platform",
      technologies: [
        "Microservices Architecture",
        "Kubernetes Orchestration",
        "Docker Containerization",
        "Auto-scaling Infrastructure",
      ],
      icon: <FaCloud className="h-6 w-6 md:h-8 md:w-8" />,
      color: "green",
    },
    {
      category: "AI & Analytics",
      technologies: [
        "Machine Learning Models",
        "Digital Twin Technology",
        "Predictive Analytics Engine",
        "Real-time Data Processing",
      ],
      icon: <FaRobot className="h-6 w-6 md:h-8 md:w-8" />,
      color: "green",
    },
    {
      category: "Enterprise Security",
      technologies: [
        "Zero Trust Architecture",
        "End-to-End Encryption",
        "GDPR & ISO Compliance",
        "Comprehensive Audit Logging",
      ],
      icon: <FaLock className="h-6 w-6 md:h-8 md:w-8" />,
      color: "green",
    },
  ];

  // Benefits for different roles
  const roleBenefits = [
    {
      role: "Operations Managers",
      icon: <FaUsers className="h-6 w-6 md:h-8 md:w-8" />,
      benefits: [
        "Real-time production visibility across all facilities",
        "Instant OEE calculations without manual input",
        "Automated shift and performance reporting",
        "Cross-facility performance benchmarking",
      ],
      color: "green",
    },
    {
      role: "Maintenance Teams",
      icon: <FaCogs className="h-6 w-6 md:h-8 md:w-8" />,
      benefits: [
        "Predictive maintenance alerts before failures occur",
        "Complete asset health monitoring dashboard",
        "Maintenance history tracking and analytics",
        "Spare parts optimization and reorder automation",
      ],
      color: "green",
    },
    {
      role: "Quality Assurance",
      icon: <FaEye className="h-6 w-6 md:h-8 md:w-8" />,
      benefits: [
        "Real-time quality monitoring across production lines",
        "Defect trend analysis with predictive alerts",
        "Automated statistical process control (SPC)",
        "Quality compliance tracking and reporting",
      ],
      color: "green",
    },
    {
      role: "Executive Leadership",
      icon: <FaChartLine className="h-6 w-6 md:h-8 md:w-8" />,
      benefits: [
        "Executive dashboards with KPI overview",
        "ROI tracking and performance analytics",
        "Strategic decision support tools",
        "Sustainability and compliance reporting",
      ],
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
    black: {
      bg: "bg-gray-900",
      text: "text-gray-900",
      border: "border-gray-700",
      iconBg: "bg-gray-800 text-white",
      gradient: "from-gray-800 to-gray-900",
      bullet: "bg-gray-700",
    },
  };

  // Comparison: With vs Without Industry-Integra
  const comparisonData = [
    {
      category: "Data Visibility",
      without: "Siloed data across multiple systems",
      with: "Unified view across all operations",
      icon: <FaEye className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      category: "Decision Making",
      without: "Reactive, based on historical data",
      with: "Proactive, with predictive insights",
      icon: <FaChartLine className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      category: "Maintenance Approach",
      without: "Breakdown-based (reactive)",
      with: "Predictive and preventive",
      icon: <FaCogs className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      category: "Energy Management",
      without: "Monthly utility bill analysis",
      with: "Real-time consumption optimization",
      icon: <FaBolt className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      category: "Quality Control",
      without: "Sample-based inspection",
      with: "100% automated inspection",
      icon: <FaCheckCircle className="h-4 w-4 md:h-5 md:w-5" />,
    },
    {
      category: "System Integration",
      without: "Manual data transfers",
      with: "Seamless real-time integration",
      icon: <FaPlug className="h-4 w-4 md:h-5 md:w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 items-center gap-10 rounded-3xl overflow-hidden">
            {/* LEFT CONTENT */}
            <div className="relative p-8 md:p-12 text-white">
              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>

              <div className="relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium mb-6 border border-green-400/40">
                  <FaLightbulb className="h-4 w-4" />
                  Transform Your Manufacturing Operations
                </div>

                <h1 className=" mb-6 text-4xl md:text-5xl font-bold leading-tight">
                  What is
                  <span className="block text-green-600 mt-2">
                    Industry-Integra?
                  </span>
                </h1>

                <p className="text-lg">
                  The complete Industrial IoT platform that unifies your entire
                  manufacturing ecosystem, providing real-time visibility,
                  predictive analytics, and automated optimization across
                  production, maintenance, quality, and energy management.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[320px] md:h-[420px] lg:h-full">
              <img
                src="dashboards/industry-integra-login-screen.webp"
                alt="Industry Integra Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">
                The Complete Industrial Intelligence Platform
              </h2>
              <p className="text-gray-600">
                Unlike traditional point solutions, Industry-Integra provides an
                end-to-end platform that connects, analyzes, and optimizes every
                aspect of your manufacturing operations.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
              {keyFeatures.map((feature, index) => {
                const colors = colorClasses.green;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`p-3 md:p-4 rounded-xl ${colors.iconBg} inline-flex mb-4`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* How It Works */}
            <div className="relative rounded-2xl overflow-hidden p-4 md:p-6 lg:p-8 mb-8 md:mb-12">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('img/how-process-works.webp')" }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/80" />

              {/* Content */}
              <div className="relative z-10 rounded-2xl">
                <h2 className="text-center text-white text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
                  How Industry-Integra Transforms Manufacturing
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    {
                      step: "1",
                      title: "Connect",
                      description:
                        "Seamlessly integrate with existing equipment, sensors, and enterprise systems",
                      icon: <FaPlug className="h-5 w-5 md:h-6 md:w-6" />,
                    },
                    {
                      step: "2",
                      title: "Collect",
                      description:
                        "Gather real-time data from machines, processes, and environmental sensors",
                      icon: <FaDatabase className="h-5 w-5 md:h-6 md:w-6" />,
                    },
                    {
                      step: "3",
                      title: "Analyze",
                      description:
                        "Apply AI and machine learning to transform data into actionable insights",
                      icon: <FaChartLine className="h-5 w-5 md:h-6 md:w-6" />,
                    },
                    {
                      step: "4",
                      title: "Optimize",
                      description:
                        "Automatically implement improvements and continuously refine operations",
                      icon: <FaSync className="h-5 w-5 md:h-6 md:w-6" />,
                    },
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      {/* Step Number Circle */}
                      <div className="h-10 w-10 md:h-12 md:w-12 bg-gradient-to-br from-green-600 to-gray-700 text-white rounded-full flex items-center justify-center text-base md:text-lg font-bold mx-auto mb-3 md:mb-4 shadow-lg">
                        {step.step}
                      </div>

                      {/* Icon Box */}
                      <div className="p-2 md:p-3 rounded-xl bg-gray-300 inline-flex mb-2 md:mb-3 shadow-sm">
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h4 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-200 text-xs md:text-sm">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="mb-4">
                Manufacturing With & Without Industry-Integra
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                See the dramatic transformation that Industry-Integra brings to
                manufacturing operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Without Industry-Integra */}
              <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-300 shadow-lg">
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                  <div className="p-2 md:p-3 rounded-xl bg-gray-100 text-gray-700">
                    <FaExclamationTriangle className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Traditional Manufacturing
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Reactive, disconnected operations
                    </p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {comparisonData.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 pb-3 md:pb-4 last:border-0"
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        {item.icon}
                        <h5 className="font-bold text-gray-900 text-sm md:text-base">
                          {item.category}
                        </h5>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          {item.without}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* With Industry-Integra */}
              <div className="bg-white rounded-2xl p-5 md:p-6 border border-green-200 shadow-lg">
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                  <div className="p-2 md:p-3 rounded-xl bg-green-100 text-green-600">
                    <FaCheckCircle className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Intelligent Manufacturing
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Proactive, connected operations
                    </p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {comparisonData.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 pb-3 md:pb-4 last:border-0"
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        {item.icon}
                        <h5 className="font-bold text-gray-900 text-sm md:text-base">
                          {item.category}
                        </h5>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                        <p className="text-green-700 font-medium text-sm md:text-base">
                          {item.with}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Comprehensive Platform Capabilities</h2>
              <p className="text-gray-600">
                Everything you need to transform manufacturing operations into a
                competitive advantage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => {
                const colors = colorClasses.green;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`p-2 md:p-3 rounded-xl ${colors.iconBg} inline-flex mb-4`}
                    >
                      {capability.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      {capability.title}
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {capability.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0`}
                          />
                          <span className="text-xs md:text-sm">{feature}</span>
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

      {/* Technology Stack */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Advanced Technology Foundation</h2>
              <p className="text-gray-600">
                Built on modern, scalable technologies for enterprise-grade
                performance and security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologyStack.map((tech, index) => {
                const colors = colorClasses.green;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colors.gradient} rounded-xl border ${colors.border} p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 md:p-3 rounded-lg ${colors.iconBg}`}>
                        {tech.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {tech.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {tech.technologies.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span className="text-xs md:text-sm">{item}</span>
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

      {/* Benefits by Role */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Value for Every Manufacturing Role</h2>
              <p className="text-gray-600">
                Delivering targeted benefits across your entire manufacturing
                organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roleBenefits.map((role, index) => {
                const colors = colorClasses.green;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`p-2 md:p-3 rounded-xl ${colors.iconBg} inline-flex mb-4`}
                    >
                      {role.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      {role.role}
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {role.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0`}
                          />
                          <span className="text-xs md:text-sm">{benefit}</span>
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

      {/* Value Proposition */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-green-50 to-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-5 md:p-6 lg:p-8 border border-green-200 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                <div>
                  <h2 className="mb-4">
                    Transform Your Manufacturing Operations
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Industry-Integra delivers measurable results that directly
                    impact your bottom line, transforming traditional
                    manufacturing into intelligent, connected operations.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Increase Overall Equipment Effectiveness (OEE) by 15-25%",
                      "Reduce energy consumption and costs by 20-35%",
                      "Decrease unplanned downtime by 40-60%",
                      "Improve product quality yield by 10-20%",
                      "Optimize maintenance costs by 25-40%",
                      "Accelerate operational decision-making by 60%",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-green-50 text-green-700 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-green-200">
                    <FaMobileAlt className="h-3 w-3 md:h-4 md:w-4" />
                    Cross-Platform Accessibility
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800"
                      alt="Manufacturing Dashboard on Multiple Devices"
                      className="rounded-xl shadow-lg mx-auto mb-3 md:mb-4"
                    />
                  </div>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                    Access real-time insights from anywhere, on any device. Our
                    responsive design ensures your team stays connected to
                    operations 24/7.
                  </p>
                  <div className="flex justify-center gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="text-base md:text-lg lg:text-xl font-bold text-gray-900">
                        99.9%
                      </div>
                      <div className="text-xs text-gray-600">
                        Platform Uptime
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-base md:text-lg lg:text-xl font-bold text-gray-900">
                        &lt; 1s
                      </div>
                      <div className="text-xs text-gray-600">
                        Data Refresh Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-base md:text-lg lg:text-xl font-bold text-gray-900">
                        24/7
                      </div>
                      <div className="text-xs text-gray-600">
                        Global Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-green-50 to-gray-50 text-green-700 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-green-200">
              <FaRocket className="h-3 w-3 md:h-4 md:w-4" />
              Ready to Transform Your Manufacturing?
            </div>

            <h2 className="mb-4 md:mb-6">
              Discover What Industry-Integra Can Do For You
            </h2>

            <p className="text-gray-600 mb-6 md:mb-8">
              Join hundreds of leading manufacturers who have transformed their
              operations, improved efficiency, and increased profitability with
              Industry-Integra's intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
              {/* Demo Link */}
              <a
                href="https://positivequadrant.in/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-6 md:px-8  text-base md:text-lg font-semibold rounded-lg shadow-lg flex items-center justify-center  transition-all duration-300"
              >
                <FaChartLine className="h-5 w-5" />
                Schedule a Personalized Demo
              </a>

              {/* Contact Link */}
              <a
                href="https://positivequadrant.in/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-2 text-base md:text-lg border-2 border-black text-black hover:bg-gray-50 rounded-lg flex items-center justify-center gap-3 transition-all duration-300"
              >
                <FaUsers className="h-5 w-5" />
                Talk to Our Experts
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-base md:text-lg lg:text-xl font-bold text-gray-900">
                  450+
                </div>
                <div className="text-xs text-gray-600">
                  Manufacturing Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg lg:text-xl font-bold text-gray-900">
                  $2.1B
                </div>
                <div className="text-xs text-gray-600">
                  Total Client Savings
                </div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg lg:text-xl font-bold text-gray-900">
                  98.7%
                </div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg lg:text-xl font-bold text-gray-900">
                  15+
                </div>
                <div className="text-xs text-gray-600">Industry Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsIndustryIntegra;
