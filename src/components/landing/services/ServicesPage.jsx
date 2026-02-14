import React, { useState } from "react";
import {
  FaRoad,
  FaNetworkWired,
  FaCogs,
  FaCloud,
  FaServer,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaChartLine,
  FaSync,
  FaShieldAlt,
  FaUsers,
  FaCalendarCheck,
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaCog,
  FaWrench,
  FaTools,
  FaPlug,
  FaDesktop,
  FaLaptopCode,
  FaRobot,
  FaLayerGroup,
  FaProjectDiagram,
  FaMicrochip,
} from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";

const ServicesPage = () => {
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
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8 border border-white/20">
                <FaProjectDiagram className="h-4 w-4 sm:h-5 sm:w-5" />
                Implementation Consulting Services
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-white via-green-200 to-green-200 bg-clip-text text-transparent">
                  Industrial Implementation
                </span>
                <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 text-gray-300">
                  & Integration
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                Comprehensive consulting, integration, and development services
                to transform your industrial operations with seamless technology
                implementation.
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
                <div
                  onClick={() => scrollToSection("implementation-consulting")}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <FaRoad className="h-4 w-4 sm:h-5 sm:w-5" />
                  Implementation Consulting
                </div>
                <div
                  onClick={() => scrollToSection("system-integration")}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <FaNetworkWired className="h-4 w-4 sm:h-5 sm:w-5" />
                  System Integration
                </div>
                <div
                  onClick={() => scrollToSection("technical-services")}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <FaCogs className="h-4 w-4 sm:h-5 sm:w-5" />
                  Technical Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-1 sm:mb-2">
                99.8%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">
                Project Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-1 sm:mb-2">
                200+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">
                Certified Engineers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">
                Technical Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Consulting Section */}
      <section
        id="implementation-consulting"
        className="py-16 sm:py-20 bg-white scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                <FaRoad className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Implementation Consulting
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  Strategic roadmap and planning
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
              <div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                  Our implementation consulting services provide strategic
                  guidance and comprehensive roadmaps to ensure successful
                  digital transformation. We help you navigate the complexities
                  of industrial automation with expert planning, risk
                  assessment, and ROI analysis.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
                      Strategic Assessment
                    </h3>
                    <ul className="space-y-1 sm:space-y-2">
                      <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        Current state analysis
                      </li>
                      <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        Gap identification
                      </li>
                      <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        ROI calculation
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                    <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
                      Roadmap Development
                    </h3>
                    <ul className="space-y-1 sm:space-y-2">
                      <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        Phased implementation plan
                      </li>
                      <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        Technology selection
                      </li>
                      <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        Timeline and milestones
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Our Approach
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 bg-green-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                          Discovery & Analysis
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Comprehensive assessment of your current operations,
                          challenges, and objectives
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 bg-green-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                          Strategy Development
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Creation of tailored implementation strategy with
                          clear milestones and KPIs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 bg-green-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                          Execution Planning
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Detailed project plan with resource allocation and
                          risk mitigation strategies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 lg:mt-0">
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Consulting Deliverables
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        "Comprehensive Implementation Roadmap",
                        "Technology Stack Recommendation",
                        "ROI Analysis and Business Case",
                        "Risk Assessment and Mitigation Plan",
                        "Resource Planning and Budgeting",
                        "Change Management Strategy",
                        "Performance Metrics and KPIs",
                        "Post-Implementation Support Plan",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 sm:gap-3"
                        >
                          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Consulting Timeline
                    </h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <div className="text-xs text-gray-500">
                          Initial Assessment
                        </div>
                        <div className="font-bold text-gray-900 text-sm sm:text-base">
                          1-2 weeks
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">
                          Strategy Development
                        </div>
                        <div className="font-bold text-gray-900 text-sm sm:text-base">
                          2-3 weeks
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={250}
                  duration={15}
                  borderWidth={3}
                  className="rounded-xl sm:rounded-2xl"
                  colorFrom="#16a34a"
                  colorTo="#22c55e"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration Section */}
      <section
        id="system-integration"
        className="py-16 sm:py-20 bg-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                <FaNetworkWired className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
                  System Integration
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  Seamless connectivity solutions
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Integration Capabilities
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        "Legacy System Integration",
                        "Multi-vendor Equipment Connectivity",
                        "Real-time Data Exchange",
                        "Protocol Conversion (OPC UA, Modbus, etc.)",
                        "Cloud-to-Edge Integration",
                        "API Development and Management",
                        "Data Validation and Quality Assurance",
                        "Security and Compliance Integration",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 sm:gap-3"
                        >
                          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                      Integration Timeline
                    </h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <div className="text-xs text-gray-500">
                          Small Integration
                        </div>
                        <div className="font-bold text-gray-900 text-sm sm:text-base">
                          4-6 weeks
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">
                          Enterprise Integration
                        </div>
                        <div className="font-bold text-gray-900 text-sm sm:text-base">
                          8-12 weeks
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={250}
                  duration={15}
                  borderWidth={3}
                  className="rounded-xl sm:rounded-2xl"
                  colorFrom="#16a34a"
                  colorTo="#22c55e"
                />
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                  We provide comprehensive system integration services that
                  connect your disparate systems, machines, and data sources
                  into a cohesive, intelligent ecosystem. Our integration
                  solutions ensure seamless data flow and interoperability
                  across your entire operation.
                </p>

                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Integration Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-2 sm:mb-4">
                        <FaPlug className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Hardware Integration
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Connecting PLCs, sensors, controllers, and industrial
                        equipment
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-2 sm:mb-4">
                        <FaDesktop className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Software Integration
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Connecting SCADA, MES, ERP, and other software systems
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-2 sm:mb-4">
                        <FaCloud className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Cloud Integration
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Connecting on-premise systems with cloud platforms and
                        services
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-2 sm:mb-4">
                        <FaShieldAlt className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Security Integration
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Implementing security protocols and compliance standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services Section */}
      <section
        id="technical-services"
        className="py-16 sm:py-20 bg-white scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
                <FaCogs className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Technical Services
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">
                  Expert engineering and implementation services
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
              <div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                  Our technical services team provides specialized engineering
                  expertise to design, develop, and implement industrial
                  automation solutions. From PLC programming to cloud
                  infrastructure setup, we deliver end-to-end technical services
                  for your industrial needs.
                </p>

                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Core Technical Services
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                        <FaMicrochip className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                          PLC Programming
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Custom PLC programming for Siemens, Allen-Bradley,
                          Schneider, and other platforms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                        <FaCloud className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                          Cloud Infrastructure
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Design and implementation of cloud architecture for
                          industrial applications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                        <FaDesktop className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                          SCADA Configuration
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          SCADA system design, configuration, and HMI
                          development
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                        <FaDatabase className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                          Data Integration
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Real-time data integration, ETL processes, and data
                          warehousing solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 lg:mt-0">
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Technical Capabilities
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        "Multi-platform PLC Programming",
                        "Cloud-native Application Development",
                        "Real-time Database Configuration",
                        "Network Architecture Design",
                        "Cybersecurity Implementation",
                        "System Testing and Validation",
                        "Performance Optimization",
                        "Documentation and Training",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 sm:gap-3"
                        >
                          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">
                        Certified Engineers
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-gray-900">
                        200+
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">
                        Response Time
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-gray-900">
                        2-4 hours
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={250}
                  duration={15}
                  borderWidth={3}
                  className="rounded-xl sm:rounded-2xl"
                  colorFrom="#16a34a"
                  colorTo="#22c55e"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Services Section */}
      <section
        id="software-services"
        className="py-16 sm:py-20 bg-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white mb-4 sm:mb-6">
                <FaCode className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Software Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Custom software development and integration solutions for
                industrial applications
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {/* Custom Development */}
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-5 md:p-6">
                <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-2 sm:mb-3 md:mb-4">
                  <FaLaptopCode className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Custom Development
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Tailored software solutions for unique industrial requirements
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Web and Desktop Applications
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Real-time Dashboards
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Analytics Platforms
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Reporting Systems
                  </li>
                </ul>
              </div>

              {/* IoT Applications */}
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-5 md:p-6">
                <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-2 sm:mb-3 md:mb-4">
                  <FaRobot className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  IoT Applications
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Internet of Things solutions for industrial monitoring and
                  control
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Device Management
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Edge Computing
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Data Streaming
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Predictive Analytics
                  </li>
                </ul>
              </div>

              {/* ERP Integration */}
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-5 md:p-6">
                <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-2 sm:mb-3 md:mb-4">
                  <FaLayerGroup className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  ERP Integration
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Seamless integration with enterprise resource planning systems
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    SAP Integration
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Oracle Integration
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Microsoft Dynamics
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Custom ERP Solutions
                  </li>
                </ul>
              </div>

              {/* Mobile Applications */}
              <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-5 md:p-6">
                <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-2 sm:mb-3 md:mb-4">
                  <FaMobileAlt className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Mobile Applications
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  Mobile solutions for field operations and management
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    iOS and Android Apps
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Field Service Applications
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Maintenance Management
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    Real-time Alerts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Delivery Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Our Service Delivery Process
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                A structured approach to ensure successful project delivery and
                customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {[
                {
                  step: "Discovery",
                  description:
                    "Understand requirements and define project scope",
                  icon: <FaLightbulb className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  step: "Planning",
                  description: "Develop detailed project plan and architecture",
                  icon: <FaRoad className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  step: "Execution",
                  description:
                    "Implement solution with regular progress updates",
                  icon: <FaCogs className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  step: "Testing",
                  description: "Rigorous testing and quality assurance",
                  icon: <FaTools className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  step: "Deployment",
                  description: "Production deployment and go-live support",
                  icon: <FaRocket className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mx-auto">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {phase.step}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 px-2">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 mb-4 sm:mb-6 md:mb-8">
              <FaProjectDiagram className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-white" />
            </div>

            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-4">
              Start Your Implementation Journey
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4">
              Partner with our expert team to transform your industrial
              operations with comprehensive consulting, integration, and
              development services.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto px-4">
              <div className="text-center">
                <div className="text-sm sm:text-base md:text-lg lg:text-base font-bold text-green-400 mb-1">
                  Free Assessment
                </div>
                <div className="text-xs text-gray-400">
                  Comprehensive analysis
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm sm:text-base md:text-lg lg:text-base font-bold text-green-400 mb-1">
                  Fixed Pricing
                </div>
                <div className="text-xs text-gray-400">Transparent costs</div>
              </div>
              <div className="text-center">
                <div className="text-sm sm:text-base md:text-lg lg:text-base font-bold text-green-400 mb-1">
                  Expert Team
                </div>
                <div className="text-xs text-gray-400">Certified engineers</div>
              </div>
              <div className="text-center">
                <div className="text-sm sm:text-base md:text-lg lg:text-base font-bold text-green-400 mb-1">
                  24/7 Support
                </div>
                <div className="text-xs text-gray-400">Always available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
