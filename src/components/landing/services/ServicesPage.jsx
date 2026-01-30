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
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  // Demo Request Handler
  const handleDemoRequest = () => {
    alert(
      "Thank you for your interest! Our consulting team will contact you within 24 hours to schedule a consultation.",
    );
  };

  // Free Assessment Handler
  const handleAssessmentRequest = () => {
    alert(
      "Great! Our team will reach out to schedule your free assessment and discuss your specific requirements.",
    );
  };

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
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-lg font-medium mb-8 border border-white/20">
                <FaProjectDiagram className="h-5 w-5" />
                Implementation Consulting Services
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Industrial Implementation
                <span className="block text-4xl md:text-6xl mt-4">
                  & Integration
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Comprehensive consulting, integration, and development services
                to transform your industrial operations with seamless technology
                implementation.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  onClick={() => scrollToSection("implementation-consulting")}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaRoad className="h-5 w-5" />
                  Implementation Consulting
                </button>
                <button
                  onClick={() => scrollToSection("system-integration")}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaNetworkWired className="h-5 w-5" />
                  System Integration
                </button>
                <button
                  onClick={() => scrollToSection("technical-services")}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FaCogs className="h-5 w-5" />
                  Technical Services
                </button>
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
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                99.8%
              </div>
              <div className="text-gray-600">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                200+
              </div>
              <div className="text-gray-600">Certified Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Consulting Section */}
      <section
        id="implementation-consulting"
        className="py-20 bg-white scroll-mt-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <FaRoad className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Implementation Consulting
                </h2>
                <p className="text-xl text-gray-600">
                  Strategic roadmap and planning
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-gray-700 text-lg mb-8">
                  Our implementation consulting services provide strategic
                  guidance and comprehensive roadmaps to ensure successful
                  digital transformation. We help you navigate the complexities
                  of industrial automation with expert planning, risk
                  assessment, and ROI analysis.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Strategic Assessment
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="h-4 w-4 text-green-500" />
                        Current state analysis
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="h-4 w-4 text-green-500" />
                        Gap identification
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="h-4 w-4 text-green-500" />
                        ROI calculation
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Roadmap Development
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="h-4 w-4 text-green-500" />
                        Phased implementation plan
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="h-4 w-4 text-green-500" />
                        Technology selection
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="h-4 w-4 text-green-500" />
                        Timeline and milestones
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Approach
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Discovery & Analysis
                        </h4>
                        <p className="text-gray-600">
                          Comprehensive assessment of your current operations,
                          challenges, and objectives
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Strategy Development
                        </h4>
                        <p className="text-gray-600">
                          Creation of tailored implementation strategy with
                          clear milestones and KPIs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Execution Planning
                        </h4>
                        <p className="text-gray-600">
                          Detailed project plan with resource allocation and
                          risk mitigation strategies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4"
                  onClick={handleAssessmentRequest}
                >
                  <div className="flex items-center gap-3">
                    <FaCalendarCheck className="h-5 w-5" />
                    Request Free Assessment
                  </div>
                </Button>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Consulting Deliverables
                    </h3>
                    <div className="space-y-4">
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
                        <div key={index} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Consulting Timeline
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">
                          Initial Assessment
                        </div>
                        <div className="font-bold text-gray-900">1-2 weeks</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          Strategy Development
                        </div>
                        <div className="font-bold text-gray-900">2-3 weeks</div>
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={350}
                  duration={15}
                  borderWidth={3}
                  className="rounded-2xl"
                  colorFrom="#3b82f6"
                  colorTo="#1d4ed8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration Section */}
      <section
        id="system-integration"
        className="py-20 bg-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <FaNetworkWired className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  System Integration
                </h2>
                <p className="text-xl text-gray-600">
                  Seamless connectivity solutions
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Integration Capabilities
                    </h3>
                    <div className="space-y-4">
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
                        <div key={index} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Integration Timeline
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">
                          Small Integration
                        </div>
                        <div className="font-bold text-gray-900">4-6 weeks</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          Enterprise Integration
                        </div>
                        <div className="font-bold text-gray-900">
                          8-12 weeks
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
                  colorFrom="#10b981"
                  colorTo="#059669"
                />
              </div>

              <div>
                <p className="text-gray-700 text-lg mb-8">
                  We provide comprehensive system integration services that
                  connect your disparate systems, machines, and data sources
                  into a cohesive, intelligent ecosystem. Our integration
                  solutions ensure seamless data flow and interoperability
                  across your entire operation.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Integration Services
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="p-3 rounded-lg bg-blue-100 text-blue-600 inline-flex mb-4">
                        <FaPlug className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Hardware Integration
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Connecting PLCs, sensors, controllers, and industrial
                        equipment
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-4">
                        <FaDesktop className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Software Integration
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Connecting SCADA, MES, ERP, and other software systems
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="p-3 rounded-lg bg-purple-100 text-purple-600 inline-flex mb-4">
                        <FaCloud className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Cloud Integration
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Connecting on-premise systems with cloud platforms and
                        services
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="p-3 rounded-lg bg-orange-100 text-orange-600 inline-flex mb-4">
                        <FaShieldAlt className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Security Integration
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Implementing security protocols and compliance standards
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4"
                  onClick={handleDemoRequest}
                >
                  <div className="flex items-center gap-3">
                    <FaCalendarCheck className="h-5 w-5" />
                    Discuss Integration Needs
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services Section */}
      <section id="technical-services" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <FaCogs className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Technical Services
                </h2>
                <p className="text-xl text-gray-600">
                  Expert engineering and implementation services
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-gray-700 text-lg mb-8">
                  Our technical services team provides specialized engineering
                  expertise to design, develop, and implement industrial
                  automation solutions. From PLC programming to cloud
                  infrastructure setup, we deliver end-to-end technical services
                  for your industrial needs.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Core Technical Services
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                        <FaMicrochip className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          PLC Programming
                        </h4>
                        <p className="text-gray-600">
                          Custom PLC programming for Siemens, Allen-Bradley,
                          Schneider, and other platforms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                        <FaCloud className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Cloud Infrastructure
                        </h4>
                        <p className="text-gray-600">
                          Design and implementation of cloud architecture for
                          industrial applications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-purple-100 text-purple-600 flex-shrink-0">
                        <FaDesktop className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          SCADA Configuration
                        </h4>
                        <p className="text-gray-600">
                          SCADA system design, configuration, and HMI
                          development
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-orange-100 text-orange-600 flex-shrink-0">
                        <FaDatabase className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Data Integration
                        </h4>
                        <p className="text-gray-600">
                          Real-time data integration, ETL processes, and data
                          warehousing solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4"
                  onClick={handleDemoRequest}
                >
                  <div className="flex items-center gap-3">
                    <FaCalendarCheck className="h-5 w-5" />
                    Request Technical Consultation
                  </div>
                </Button>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Technical Capabilities
                    </h3>
                    <div className="space-y-4">
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
                        <div key={index} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-purple-500" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-sm text-gray-500 mb-1">
                        Certified Engineers
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        200+
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-sm text-gray-500 mb-1">
                        Response Time
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        2-4 hours
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={350}
                  duration={15}
                  borderWidth={3}
                  className="rounded-2xl"
                  colorFrom="#8b5cf6"
                  colorTo="#ec4899"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Services Section */}
      <section id="software-services" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white mb-6">
                <FaCode className="h-8 w-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Software Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom software development and integration solutions for
                industrial applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Custom Development */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="p-4 rounded-lg bg-blue-100 text-blue-600 inline-flex mb-4">
                  <FaLaptopCode className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Custom Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Tailored software solutions for unique industrial requirements
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Web and Desktop Applications
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Real-time Dashboards
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Analytics Platforms
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Reporting Systems
                  </li>
                </ul>
              </div>

              {/* IoT Applications */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="p-4 rounded-lg bg-green-100 text-green-600 inline-flex mb-4">
                  <FaRobot className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  IoT Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Internet of Things solutions for industrial monitoring and
                  control
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Device Management
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Edge Computing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Data Streaming
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Predictive Analytics
                  </li>
                </ul>
              </div>

              {/* ERP Integration */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="p-4 rounded-lg bg-purple-100 text-purple-600 inline-flex mb-4">
                  <FaLayerGroup className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ERP Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration with enterprise resource planning systems
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    SAP Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Oracle Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Microsoft Dynamics
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Custom ERP Solutions
                  </li>
                </ul>
              </div>

              {/* Mobile Applications */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="p-4 rounded-lg bg-orange-100 text-orange-600 inline-flex mb-4">
                  <FaMobileAlt className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mobile Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Mobile solutions for field operations and management
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    iOS and Android Apps
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Field Service Applications
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Maintenance Management
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="h-4 w-4 text-green-500" />
                    Real-time Alerts
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-6 text-lg"
                onClick={handleDemoRequest}
              >
                <div className="flex items-center gap-3">
                  <FaCalendarCheck className="h-6 w-6" />
                  Discuss Software Development Needs
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Delivery Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Service Delivery Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach to ensure successful project delivery and
                customer satisfaction
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 hidden lg:block" />

              <div className="space-y-12 lg:space-y-0">
                {[
                  {
                    step: "Discovery",
                    description:
                      "Understand requirements and define project scope",
                    icon: <FaLightbulb className="h-6 w-6" />,
                    color: "blue",
                  },
                  {
                    step: "Planning",
                    description:
                      "Develop detailed project plan and architecture",
                    icon: <FaRoad className="h-6 w-6" />,
                    color: "green",
                  },
                  {
                    step: "Execution",
                    description:
                      "Implement solution with regular progress updates",
                    icon: <FaCogs className="h-6 w-6" />,
                    color: "purple",
                  },
                  {
                    step: "Testing",
                    description: "Rigorous testing and quality assurance",
                    icon: <FaTools className="h-6 w-6" />,
                    color: "orange",
                  },
                  {
                    step: "Deployment",
                    description: "Production deployment and go-live support",
                    icon: <FaRocket className="h-6 w-6" />,
                    color: "pink",
                  },
                ].map((phase, index) => (
                  <div
                    key={index}
                    className={`lg:flex lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    <div
                      className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}
                    >
                      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`p-3 rounded-lg bg-${phase.color}-100 text-${phase.color}-600`}
                          >
                            {phase.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {phase.step}
                            </h3>
                            <div className="text-sm text-gray-500">
                              Phase {index + 1}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>

                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`h-10 w-10 rounded-full bg-${phase.color}-500 text-white flex items-center justify-center text-lg font-bold`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <div className="lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
              <FaProjectDiagram className="h-16 w-16 text-white" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your Implementation Journey
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Partner with our expert team to transform your industrial
              operations with comprehensive consulting, integration, and
              development services.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-7 text-lg font-semibold rounded-lg"
                onClick={handleAssessmentRequest}
              >
                <div className="flex items-center gap-3">
                  <FaCalendarCheck className="h-6 w-6" />
                  Request Free Assessment
                </div>
              </Button>

              <Button
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-12 py-7 text-lg font-semibold rounded-lg"
                onClick={handleDemoRequest}
              >
                <div className="flex items-center gap-3">
                  <FaUsers className="h-6 w-6" />
                  Schedule Consultation
                </div>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Free Assessment</div>
                <div className="text-gray-400 text-sm">
                  Comprehensive analysis
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Fixed Pricing</div>
                <div className="text-gray-400 text-sm">Transparent costs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Expert Team</div>
                <div className="text-gray-400 text-sm">Certified engineers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7 Support</div>
                <div className="text-gray-400 text-sm">Always available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
