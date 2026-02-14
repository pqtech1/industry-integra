import React, { useState } from "react";
import {
  FaTools,
  FaBolt,
  FaIndustry,
  FaFlask,
  FaBoxOpen,
  FaCar,
  FaPills,
  FaShoppingCart,
  FaRobot,
  FaServer,
  FaEye,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaSync,
  FaLeaf,
  FaUsers,
  FaDatabase,
  FaRocket,
  FaArrowRight,
  FaCalendarCheck,
  FaLightbulb,
  FaCog,
  FaTachometerAlt,
  FaWrench,
  FaExclamationTriangle,
  FaCheckCircle,
  FaPlay,
} from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";

const SolutionsPage = () => {
  // Navigation to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-lg font-medium mb-8 border border-white/20">
                <FaLightbulb className="h-5 w-5 text-green-400" />
                Industrial Intelligence Solutions
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-green-200 bg-clip-text text-transparent">
                Smart Solutions
                <span className="block text-4xl md:text-6xl mt-4 text-gray-300">
                  for Modern Industry
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Transform your operations with AI-powered solutions that deliver
                measurable results across maintenance, energy, and productivity.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div
                  onClick={() => scrollToSection("predictive-maintenance")}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                >
                  <FaTools className="h-5 w-5" />
                  Predictive Maintenance
                </div>
                <div
                  onClick={() => scrollToSection("energy-optimization")}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                >
                  <FaBolt className="h-5 w-5" />
                  Energy Optimization
                </div>
                <div
                  onClick={() => scrollToSection("by-industry")}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                >
                  <FaIndustry className="h-5 w-5" />
                  Industry Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                850+
              </div>
              <div className="text-gray-600">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                $2.5B+
              </div>
              <div className="text-gray-600">Client Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                99.7%
              </div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Maintenance Section */}
      <section
        id="predictive-maintenance"
        className="py-20 bg-white scroll-mt-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                <FaTools className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Predictive Maintenance
                </h2>
                <p className="text-xl text-gray-600">
                  Reduce downtime with AI insights
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-gray-700 text-lg mb-8">
                  Leverage artificial intelligence and machine learning to
                  predict equipment failures before they occur, minimizing
                  unplanned downtime and extending asset lifespan. Our
                  predictive maintenance solution transforms reactive
                  maintenance into proactive asset management.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      50-70%
                    </div>
                    <div className="text-gray-700">Downtime Reduction</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      40-60%
                    </div>
                    <div className="text-gray-700">
                      Maintenance Cost Savings
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      99.5%
                    </div>
                    <div className="text-gray-700">Equipment Availability</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        AI-powered failure prediction algorithms
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Real-time condition monitoring
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Automated maintenance scheduling
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Spare parts inventory optimization
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Root cause analysis and reporting
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Equipment lifecycle tracking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8 border border-green-200">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Technology Stack
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Machine Learning",
                        "IoT Sensors",
                        "Digital Twin",
                        "Advanced Analytics",
                        "Cloud Computing",
                      ].map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200"
                        >
                          <span className="font-medium text-gray-900">
                            {tech}
                          </span>
                          <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Implementation Details
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">
                          Implementation Time
                        </div>
                        <div className="font-bold text-gray-900">4-8 weeks</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Typical ROI</div>
                        <div className="font-bold text-gray-900">
                          3-6 months
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={350}
                  duration={15}
                  borderWidth={3}
                  className="rounded-2xl"
                  colorFrom="#16a34a"
                  colorTo="#22c55e"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Optimization Section */}
      <section
        id="energy-optimization"
        className="py-20 bg-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                <FaBolt className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Energy Optimization
                </h2>
                <p className="text-xl text-gray-600">
                  Cut energy costs by up to 30%
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8 border border-green-200">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Technology Stack
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Smart Meters",
                        "Energy Analytics",
                        "AI Optimization",
                        "IoT Sensors",
                        "Building Management",
                      ].map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200"
                        >
                          <span className="font-medium text-gray-900">
                            {tech}
                          </span>
                          <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Implementation Details
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">
                          Implementation Time
                        </div>
                        <div className="font-bold text-gray-900">3-6 weeks</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Typical ROI</div>
                        <div className="font-bold text-gray-900">
                          2-4 months
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={350}
                  duration={15}
                  borderWidth={3}
                  className="rounded-2xl"
                  colorFrom="#16a34a"
                  colorTo="#22c55e"
                />
              </div>

              <div>
                <p className="text-gray-700 text-lg mb-8">
                  Intelligent energy management system that optimizes
                  consumption, reduces waste, and helps achieve sustainability
                  goals through real-time monitoring and automated control.
                  Transform energy from a fixed cost into a manageable resource.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      25-35%
                    </div>
                    <div className="text-gray-700">Energy Cost Reduction</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      20-30%
                    </div>
                    <div className="text-gray-700">
                      Carbon Emission Reduction
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      35-45%
                    </div>
                    <div className="text-gray-700">Energy Efficiency Gain</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Real-time energy consumption monitoring
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Peak demand management and load shifting
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Equipment-specific energy optimization
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Carbon footprint tracking and reporting
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Automated load balancing algorithms
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Predictive energy consumption analytics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By Industry Section */}
      <section id="by-industry" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white mb-6">
                <FaIndustry className="h-8 w-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                By Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored solutions for specific industry challenges and
                requirements
              </p>
            </div>

            {/* Automotive Industry */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-green-100 text-green-600">
                  <FaCar className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Automotive
                  </h3>
                  <p className="text-gray-600">
                    Complete automation solutions for automotive manufacturing
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Solutions Offered
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Assembly line optimization and balancing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Robotics integration and coordination
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Real-time quality control automation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Supply chain synchronization
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Key Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        35-45%
                      </div>
                      <div className="text-gray-600">Production Increase</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        40-50%
                      </div>
                      <div className="text-gray-600">Quality Improvement</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        25-35%
                      </div>
                      <div className="text-gray-600">
                        Operational Cost Reduction
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Robotics", "AI Vision", "PLC Systems", "MES", "IoT"].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Pharmaceutical Industry */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-green-100 text-green-600">
                  <FaPills className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Pharmaceutical
                  </h3>
                  <p className="text-gray-600">
                    Compliance-focused automation for pharmaceutical
                    manufacturing
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Solutions Offered
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Batch process automation and control
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Regulatory compliance automation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Clean room environmental monitoring
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Quality assurance automation
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Key Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        99.9%
                      </div>
                      <div className="text-gray-600">Compliance Rate</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        40-50%
                      </div>
                      <div className="text-gray-600">Yield Improvement</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        55-65%
                      </div>
                      <div className="text-gray-600">
                        Documentation Efficiency
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["SCADA", "MES", "LIMS", "BMS", "IoT Sensors"].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* FMCG Industry */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-green-100 text-green-600">
                  <FaShoppingCart className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">FMCG</h3>
                  <p className="text-gray-600">
                    High-speed automation solutions for fast-moving consumer
                    goods
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Solutions Offered
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        High-speed packaging automation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Production line optimization
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Real-time quality control
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Inventory and warehouse management
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Key Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        45-55%
                      </div>
                      <div className="text-gray-600">Line Efficiency</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        30-40%
                      </div>
                      <div className="text-gray-600">Waste Reduction</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        35-45%
                      </div>
                      <div className="text-gray-600">Production Speed</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["PLC", "Vision Systems", "WMS", "ERP", "IoT"].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Chemical Industry */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-green-100 text-green-600">
                  <FaFlask className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Chemical</h3>
                  <p className="text-gray-600">
                    Precise process control and safety automation for chemical
                    manufacturing
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Solutions Offered
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Process automation and control
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Safety system integration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Batch tracking and management
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Real-time quality control
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Key Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        99.5%
                      </div>
                      <div className="text-gray-600">Safety Compliance</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        25-35%
                      </div>
                      <div className="text-gray-600">Energy Savings</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        20-30%
                      </div>
                      <div className="text-gray-600">Yield Increase</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["DCS", "SIS", "PLC", "Analytics", "IoT"].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                By Use Case
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world applications and implementation scenarios
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Smart Factory */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <FaRobot className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Smart Factory
                    </h3>
                    <p className="text-gray-600">
                      Transform traditional factories into intelligent
                      facilities
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Real-time production monitoring and control
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Automated quality inspection systems
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Predictive maintenance scheduling
                    </span>
                  </div>
                </div>
              </div>

              {/* Plant Digitization */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <FaServer className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Plant Digitization
                    </h3>
                    <p className="text-gray-600">
                      Complete digital transformation of plant operations
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Digital twin creation and simulation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Asset performance management
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Process optimization algorithms
                    </span>
                  </div>
                </div>
              </div>

              {/* Remote Monitoring */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <FaEye className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Remote Monitoring
                    </h3>
                    <p className="text-gray-600">
                      Monitor and control operations from anywhere
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      24/7 remote equipment monitoring
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Real-time alerts and notifications
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Predictive analytics for maintenance
                    </span>
                  </div>
                </div>
              </div>

              {/* Industry 4.0 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <FaCogs className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Industry 4.0
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive digital transformation for Industry 4.0
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cyber-physical system integration
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Interoperability between systems
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Decentralized decision making
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven 5-step process ensures successful deployment and
                maximum ROI
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description:
                    "Comprehensive analysis of your current operations",
                },
                {
                  step: "2",
                  title: "Planning",
                  description: "Customized solution design and roadmap",
                },
                {
                  step: "3",
                  title: "Deployment",
                  description: "Phased implementation with minimal disruption",
                },
                {
                  step: "4",
                  title: "Training",
                  description: "Comprehensive training for your team",
                },
                {
                  step: "5",
                  title: "Optimization",
                  description: "Continuous monitoring and improvement",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 mb-8">
              <FaLightbulb className="h-16 w-16 text-white" />
            </div>

            <h2 className="text-4xl text-white md:text-6xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Get started with a free consultation and discover how our
              solutions can deliver measurable results for your business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-base font-bold text-green-400 mb-2">
                  Free Assessment
                </div>
                <div className="text-gray-400 text-sm">No cost evaluation</div>
              </div>
              <div className="text-center">
                <div className="text-base font-bold text-green-400 mb-2">
                  ROI Guarantee
                </div>
                <div className="text-gray-400 text-sm">Performance backed</div>
              </div>
              <div className="text-center">
                <div className="text-base font-bold text-green-400 mb-2">
                  24/7 Support
                </div>
                <div className="text-gray-400 text-sm">Always available</div>
              </div>
              <div className="text-center">
                <div className="text-base font-bold text-green-400 mb-2">
                  Expert Team
                </div>
                <div className="text-gray-400 text-sm">
                  Industry specialists
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
