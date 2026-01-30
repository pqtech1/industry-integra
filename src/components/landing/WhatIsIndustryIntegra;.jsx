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
  FaArrowRight,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatIsIndustryIntegra = () => {
  // Key features
  const keyFeatures = [
    {
      icon: <FaIndustry className="h-10 w-10" />,
      title: "Unified Manufacturing Platform",
      description:
        "Connect all your manufacturing systems - from PLCs and SCADA to ERP and MES - into a single, cohesive platform",
      color: "blue",
    },
    {
      icon: <FaChartLine className="h-10 w-10" />,
      title: "Real-Time Analytics",
      description:
        "Transform raw data into actionable insights with AI-powered predictive analytics and live dashboards",
      color: "green",
    },
    {
      icon: <FaCogs className="h-10 w-10" />,
      title: "Process Optimization",
      description:
        "Automatically optimize production workflows, reduce waste, and improve overall equipment effectiveness (OEE)",
      color: "purple",
    },
    {
      icon: <FaRobot className="h-10 w-10" />,
      title: "AI-Powered Intelligence",
      description:
        "Machine learning algorithms that learn from your operations to predict failures and optimize performance",
      color: "orange",
    },
  ];

  // Platform capabilities
  const capabilities = [
    {
      title: "Production Intelligence",
      icon: <FaIndustry className="h-8 w-8" />,
      features: [
        "Real-time OEE monitoring across all lines",
        "Automated production scheduling optimization",
        "Predictive quality control analytics",
        "Yield improvement insights and recommendations",
      ],
      color: "blue",
    },
    {
      title: "Energy Management",
      icon: <FaBolt className="h-8 w-8" />,
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
      icon: <FaCogs className="h-8 w-8" />,
      features: [
        "AI-driven failure prediction 30 days in advance",
        "Vibration and thermal condition monitoring",
        "Automated maintenance scheduling",
        "Spare parts inventory optimization",
      ],
      color: "purple",
    },
    {
      title: "Quality Excellence",
      icon: <FaEye className="h-8 w-8" />,
      features: [
        "Real-time defect detection using computer vision",
        "Statistical process control with automatic alerts",
        "Root cause analysis for quality issues",
        "Quality trend analytics across shifts and batches",
      ],
      color: "orange",
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
      icon: <FaNetworkWired className="h-8 w-8" />,
      color: "blue",
    },
    {
      category: "Cloud Platform",
      technologies: [
        "Microservices Architecture",
        "Kubernetes Orchestration",
        "Docker Containerization",
        "Auto-scaling Infrastructure",
      ],
      icon: <FaCloud className="h-8 w-8" />,
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
      icon: <FaRobot className="h-8 w-8" />,
      color: "purple",
    },
    {
      category: "Enterprise Security",
      technologies: [
        "Zero Trust Architecture",
        "End-to-End Encryption",
        "GDPR & ISO Compliance",
        "Comprehensive Audit Logging",
      ],
      icon: <FaLock className="h-8 w-8" />,
      color: "orange",
    },
  ];

  // Benefits for different roles
  const roleBenefits = [
    {
      role: "Operations Managers",
      icon: <FaUsers className="h-8 w-8" />,
      benefits: [
        "Real-time production visibility across all facilities",
        "Instant OEE calculations without manual input",
        "Automated shift and performance reporting",
        "Cross-facility performance benchmarking",
      ],
      color: "blue",
    },
    {
      role: "Maintenance Teams",
      icon: <FaCogs className="h-8 w-8" />,
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
      icon: <FaEye className="h-8 w-8" />,
      benefits: [
        "Real-time quality monitoring across production lines",
        "Defect trend analysis with predictive alerts",
        "Automated statistical process control (SPC)",
        "Quality compliance tracking and reporting",
      ],
      color: "purple",
    },
    {
      role: "Executive Leadership",
      icon: <FaChartLine className="h-8 w-8" />,
      benefits: [
        "Executive dashboards with KPI overview",
        "ROI tracking and performance analytics",
        "Strategic decision support tools",
        "Sustainability and compliance reporting",
      ],
      color: "orange",
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
  };

  // Comparison: With vs Without Industry-Integra
  const comparisonData = [
    {
      category: "Data Visibility",
      without: "Siloed data across multiple systems",
      with: "Unified view across all operations",
      icon: <FaEye className="h-5 w-5" />,
    },
    {
      category: "Decision Making",
      without: "Reactive, based on historical data",
      with: "Proactive, with predictive insights",
      icon: <FaChartLine className="h-5 w-5" />,
    },
    {
      category: "Maintenance Approach",
      without: "Breakdown-based (reactive)",
      with: "Predictive and preventive",
      icon: <FaCogs className="h-5 w-5" />,
    },
    {
      category: "Energy Management",
      without: "Monthly utility bill analysis",
      with: "Real-time consumption optimization",
      icon: <FaBolt className="h-5 w-5" />,
    },
    {
      category: "Quality Control",
      without: "Sample-based inspection",
      with: "100% automated inspection",
      icon: <FaCheckCircle className="h-5 w-5" />,
    },
    {
      category: "System Integration",
      without: "Manual data transfers",
      with: "Seamless real-time integration",
      icon: <FaPlug className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2070"
            alt="Modern Manufacturing Facility"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-50 text-green-700 text-lg font-medium mb-8 border border-green-200">
                <FaLightbulb className="h-5 w-5" />
                Transform Your Manufacturing Operations
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900">
                What is
                <span className="block text-4xl md:text-5xl mt-4 text-blue-600">
                  Industry-Integra?
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                The complete Industrial IoT platform that unifies your entire
                manufacturing ecosystem, providing real-time visibility,
                predictive analytics, and automated optimization across
                production, maintenance, quality, and energy management.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-lg">
                  <Link to="/request-demo" className="flex items-center gap-3">
                    <FaRocket className="h-5 w-5" />
                    Request Platform Demo
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="px-10 py-6 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <Link to="/platform/tour" className="flex items-center gap-3">
                    <FaGlobe className="h-5 w-5" />
                    Take Platform Tour
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Complete Industrial Intelligence Platform
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Unlike traditional point solutions, Industry-Integra provides an
                end-to-end platform that connects, analyzes, and optimizes every
                aspect of your manufacturing operations.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {keyFeatures.map((feature, index) => {
                const colors = colorClasses[feature.color];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`p-4 rounded-xl ${colors.iconBg} inline-flex mb-6`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* How It Works */}
            <div className="relative bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 border border-blue-200 mb-20">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2070')] opacity-5 rounded-2xl" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  How Industry-Integra Transforms Manufacturing
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Connect",
                      description:
                        "Seamlessly integrate with existing equipment, sensors, and enterprise systems",
                      icon: <FaPlug className="h-8 w-8" />,
                    },
                    {
                      step: "2",
                      title: "Collect",
                      description:
                        "Gather real-time data from machines, processes, and environmental sensors",
                      icon: <FaDatabase className="h-8 w-8" />,
                    },
                    {
                      step: "3",
                      title: "Analyze",
                      description:
                        "Apply AI and machine learning to transform data into actionable insights",
                      icon: <FaChartLine className="h-8 w-8" />,
                    },
                    {
                      step: "4",
                      title: "Optimize",
                      description:
                        "Automatically implement improvements and continuously refine operations",
                      icon: <FaSync className="h-8 w-8" />,
                    },
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                        {step.step}
                      </div>
                      <div
                        className={`p-4 rounded-xl bg-white inline-flex mb-4 shadow-sm`}
                      >
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Manufacturing With & Without Industry-Integra
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                See the dramatic transformation that Industry-Integra brings to
                manufacturing operations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Without Industry-Integra */}
              <div className="bg-white rounded-2xl p-8 border border-red-200 shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-red-100 text-red-600">
                    <FaExclamationTriangle className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Traditional Manufacturing
                    </h3>
                    <p className="text-gray-600">
                      Reactive, disconnected operations
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {comparisonData.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 pb-6 last:border-0"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {item.icon}
                        <h4 className="font-bold text-gray-900">
                          {item.category}
                        </h4>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                        <p className="text-red-700 font-medium">
                          {item.without}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* With Industry-Integra */}
              <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-green-100 text-green-600">
                    <FaCheckCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Intelligent Manufacturing
                    </h3>
                    <p className="text-gray-600">
                      Proactive, connected operations
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {comparisonData.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 pb-6 last:border-0"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {item.icon}
                        <h4 className="font-bold text-gray-900">
                          {item.category}
                        </h4>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <p className="text-green-700 font-medium">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Platform Capabilities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Everything you need to transform manufacturing operations into a
                competitive advantage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => {
                const colors = colorClasses[capability.color];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`p-4 rounded-xl ${colors.iconBg} inline-flex mb-6`}
                    >
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      {capability.title}
                    </h3>
                    <ul className="space-y-4">
                      {capability.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div
                            className={`h-2 w-2 rounded-full ${colors.iconBg} mt-2 flex-shrink-0`}
                          />
                          <span className="text-sm leading-relaxed">
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

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Technology Foundation
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Built on modern, scalable technologies for enterprise-grade
                performance and security
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologyStack.map((tech, index) => {
                const colors = colorClasses[tech.color];
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colors.gradient} rounded-xl border ${colors.border} p-8 shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-lg ${colors.iconBg}`}>
                        {tech.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {tech.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {tech.technologies.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="h-2 w-2 rounded-full bg-current" />
                          <span className="text-sm">{item}</span>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Value for Every Manufacturing Role
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Delivering targeted benefits across your entire manufacturing
                organization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roleBenefits.map((role, index) => {
                const colors = colorClasses[role.color];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`p-4 rounded-xl ${colors.iconBg} inline-flex mb-6`}
                    >
                      {role.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      {role.role}
                    </h3>
                    <ul className="space-y-4">
                      {role.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div
                            className={`h-2 w-2 rounded-full ${colors.iconBg} mt-2 flex-shrink-0`}
                          />
                          <span className="text-sm leading-relaxed">
                            {benefit}
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

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-blue-200 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Transform Your Manufacturing Operations
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Industry-Integra delivers measurable results that directly
                    impact your bottom line, transforming traditional
                    manufacturing into intelligent, connected operations.
                  </p>
                  <ul className="space-y-4">
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
                        className="flex items-center gap-4 text-gray-700"
                      >
                        <div className="h-3 w-3 rounded-full bg-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-blue-700 text-lg font-medium mb-8 border border-blue-200">
                    <FaMobileAlt className="h-5 w-5" />
                    Cross-Platform Accessibility
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800"
                      alt="Manufacturing Dashboard on Multiple Devices"
                      className="rounded-xl shadow-lg mx-auto mb-6"
                    />
                  </div>
                  <p className="text-gray-600 mb-6">
                    Access real-time insights from anywhere, on any device. Our
                    responsive design ensures your team stays connected to
                    operations 24/7, whether in the control room or on the shop
                    floor.
                  </p>
                  <div className="flex justify-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-600">
                        Platform Uptime
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        &lt; 1s
                      </div>
                      <div className="text-sm text-gray-600">
                        Data Refresh Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 text-lg font-medium mb-8 border border-blue-200">
              <FaRocket className="h-5 w-5" />
              Ready to Transform Your Manufacturing?
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Discover What Industry-Integra Can Do For You
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of leading manufacturers who have transformed their
              operations, improved efficiency, and increased profitability with
              Industry-Integra's intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-lg">
                <Link to="/request-demo" className="flex items-center gap-3">
                  <FaChartLine className="h-6 w-6" />
                  Schedule a Personalized Demo
                </Link>
              </Button>
              <Button
                variant="outline"
                className="px-12 py-6 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  <FaUsers className="h-6 w-6" />
                  Talk to Our Experts
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">450+</div>
                <div className="text-sm text-gray-600">
                  Manufacturing Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$2.1B</div>
                <div className="text-sm text-gray-600">
                  Total Client Savings
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98.7%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Industry Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsIndustryIntegra;
