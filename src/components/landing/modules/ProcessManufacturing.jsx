import React from "react";
import {
  FaIndustry,
  FaFlask,
  FaOilCan,
  FaUtensils,
  FaTint,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaSync,
  FaExclamationTriangle,
  FaBolt,
  FaLeaf,
  FaClipboardCheck,
  FaRocket,
  FaUsers,
  FaTachometerAlt,
  FaBox,
  FaTools,
  FaCog,
  FaWrench,
  FaArrowRight,
  FaMountain,
  FaSun,
  FaCar,
  FaServer,
  FaMicrochip,
  FaTree,
  FaDollarSign,
  FaChartBar,
  FaVials,
} from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProcessManufacturing = () => {
  // Process KPIs We Cover
  const processKPIs = [
    {
      icon: <FaTachometerAlt className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Process Overview",
      description: "Complete real-time visualization of all process operations",
      metrics: ["Status monitoring", "Performance indicators"],
      color: "green",
    },
    {
      icon: <FaChartLine className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Throughput Analytics",
      description:
        "Track production rates, bottlenecks, and efficiency metrics",
      metrics: ["Production rates", "Bottleneck analysis", "Efficiency"],
      color: "green",
    },
    {
      icon: <FaSync className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Time Metrics",
      description: "Monitor cycle times, batch durations, and process timing",
      metrics: ["Cycle times", "Batch duration", "Timing analysis"],
      color: "green",
    },
    {
      icon: <FaExclamationTriangle className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Backlog Management",
      description: "Track pending processes, work in progress, and delays",
      metrics: ["WIP tracking", "Delay analysis", "Queue management"],
      color: "green",
    },
    {
      icon: <FaCogs className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Automation Levels",
      description:
        "Monitor and optimize automation implementation across processes",
      metrics: ["Automation rate", "Manual intervention", "Auto-optimization"],
      color: "green",
    },
    {
      icon: <FaUsers className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Resource Utilization",
      description: "Track equipment, material, and personnel efficiency",
      metrics: ["Equipment usage", "Material efficiency", "Labor optimization"],
      color: "green",
    },
    {
      icon: <FaClipboardCheck className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Quality Control",
      description: "Real-time quality monitoring and compliance tracking",
      metrics: ["Quality metrics", "Defect rates", "Compliance status"],
      color: "green",
    },
    {
      icon: <FaShieldAlt className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Compliance Tracking",
      description: "Automated regulatory compliance and audit trail management",
      metrics: ["Regulatory checks", "Audit trails", "Safety compliance"],
      color: "green",
    },
    {
      icon: <FaDollarSign className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Cost & ROI Analysis",
      description: "Track operational costs and return on investment",
      metrics: ["Cost per unit", "ROI tracking", "Efficiency savings"],
      color: "green",
    },
    {
      icon: <FaTools className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Failure Analysis",
      description: "Analyze process failures and implement corrective actions",
      metrics: ["Failure rates", "Root cause analysis", "Corrective actions"],
      color: "green",
    },
    {
      icon: <FaChartBar className="h-5 w-5 md:h-6 md:w-6" />,
      title: "SLA Monitoring",
      description: "Track service level agreements and performance commitments",
      metrics: ["SLA compliance", "Performance metrics", "Commitment tracking"],
      color: "green",
    },
    {
      icon: <FaArrowRight className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Recovery Metrics",
      description: "Monitor process recovery times and efficiency restoration",
      metrics: ["Recovery time", "Efficiency restoration", "Downtime recovery"],
      color: "green",
    },
  ];

  // Industry Applications
  const industryApplications = [
    {
      title: "Chemical Manufacturing",
      icon: <FaFlask className="h-6 w-6 md:h-8 md:w-8" />,
      description:
        "Precise control of reaction parameters, safety interlocks, batch tracking, and quality assurance",
      features: [
        "Reactor temperature control",
        "Pressure monitoring",
        "Chemical dosing automation",
        "Batch recipe management",
        "Safety interlocks",
        "Quality assurance",
      ],
      technologies: ["PLC", "DCS", "SCADA", "SIS", "Batch Control"],
      metrics: ["99.9% precision", "50% safety improvement"],
      color: "green",
    },
    {
      title: "Pharmaceutical Production",
      icon: <FaVials className="h-6 w-6 md:h-8 md:w-8" />,
      description:
        "Batch process control with regulatory compliance tracking, sterility assurance, and quality documentation",
      features: [
        "Clean room monitoring",
        "Sterilization control",
        "Batch documentation",
        "Quality control",
        "Regulatory compliance",
        "Traceability systems",
      ],
      technologies: ["MES", "SCADA", "BMS", "EMS", "LIMS"],
      metrics: ["100% compliance", "40% production increase"],
      color: "green",
    },
    {
      title: "Oil & Gas Refining",
      icon: <FaOilCan className="h-6 w-6 md:h-8 md:w-8" />,
      description:
        "Refinery process optimization, safety system integration, pipeline monitoring, and production scheduling",
      features: [
        "Refinery optimization",
        "Pipeline monitoring",
        "Safety shutdown systems",
        "Production scheduling",
        "Energy management",
        "Emissions control",
      ],
      technologies: ["DCS", "ESD", "F&G", "PLC", "SCADA"],
      metrics: ["25% efficiency gain", "60% safety improvement"],
      color: "green",
    },
    {
      title: "Food & Beverage",
      icon: <FaUtensils className="h-6 w-6 md:h-8 md:w-8" />,
      description:
        "Consistent quality control, recipe management, pasteurization control, and packaging line optimization",
      features: [
        "Recipe management",
        "Pasteurization control",
        "Quality inspection",
        "Packaging optimization",
        "HACCP compliance",
        "Traceability",
      ],
      technologies: [
        "PLC",
        "SCADA",
        "MES",
        "Vision Systems",
        "ERP Integration",
      ],
      metrics: ["99.5% consistency", "35% waste reduction"],
      color: "green",
    },
    {
      title: "Water Treatment",
      icon: <FaTint className="h-6 w-6 md:h-8 md:w-8" />,
      description:
        "Automated chemical dosing, purification monitoring, distribution control, and quality compliance",
      features: [
        "Chemical dosing automation",
        "pH monitoring",
        "Flow control",
        "Quality monitoring",
        "Distribution management",
        "Compliance reporting",
      ],
      technologies: ["PLC", "SCADA", "RTU", "Water Quality Sensors", "GIS"],
      metrics: ["99.9% compliance", "40% chemical savings"],
      color: "green",
    },
    {
      title: "Manufacturing",
      icon: <FaIndustry className="h-6 w-6 md:h-8 md:w-8" />,
      description:
        "Production line optimization, quality assurance, material handling, and process synchronization",
      features: [
        "Line balancing",
        "Quality control",
        "Material handling",
        "Process synchronization",
        "Energy optimization",
        "Maintenance scheduling",
      ],
      technologies: ["PLC", "SCADA", "MES", "ERP", "IoT Sensors"],
      metrics: ["45% efficiency gain", "50% quality improvement"],
      color: "green",
    },
  ];

  // Additional Industries
  const additionalIndustries = [
    {
      name: "Mining Operations",
      icon: <FaMountain className="h-5 w-5 md:h-6 md:w-6" />,
    },
    {
      name: "Power Generation",
      icon: <FaSun className="h-5 w-5 md:h-6 md:w-6" />,
    },
    {
      name: "Textile Production",
      icon: <FaTree className="h-5 w-5 md:h-6 md:w-6" />,
    },
    {
      name: "Plastic Manufacturing",
      icon: <FaServer className="h-5 w-5 md:h-6 md:w-6" />,
    },
    {
      name: "Paper & Pulp",
      icon: <FaLeaf className="h-5 w-5 md:h-6 md:w-6" />,
    },
    {
      name: "Automotive Parts",
      icon: <FaCar className="h-5 w-5 md:h-6 md:w-6" />,
    },
  ];

  // Problems We Solve
  const problems = [
    {
      title: "Inconsistent Quality",
      description:
        "Manual control leads to variable output affecting customer satisfaction and brand reputation",
      impact: "15-25% quality variation",
      icon: <FaExclamationTriangle className="h-6 w-6 md:h-8 md:w-8" />,
      color: "gray",
    },
    {
      title: "Production Bottlenecks",
      description:
        "Manual processes slow operations and create inefficiencies throughout the production chain",
      impact: "20-30% capacity loss",
      icon: <FaSync className="h-6 w-6 md:h-8 md:w-8" />,
      color: "gray",
    },
    {
      title: "Safety Incidents",
      description:
        "Human error in critical processes leads to accidents and regulatory violations",
      impact: "40% higher accident rates",
      icon: <FaShieldAlt className="h-6 w-6 md:h-8 md:w-8" />,
      color: "gray",
    },
    {
      title: "Material Waste",
      description:
        "Inefficient processes waste resources and increase production costs",
      impact: "15-25% material waste",
      icon: <FaLeaf className="h-6 w-6 md:h-8 md:w-8" />,
      color: "green",
    },
  ];

  // Benefits of Automation
  const benefits = [
    {
      title: "45% Process Efficiency",
      description:
        "Automated optimization increases throughput and reduces cycle times",
      icon: <FaTachometerAlt className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Cycle time reduction",
        "Throughput optimization",
        "Bottleneck elimination",
      ],
    },
    {
      title: "99.5% Quality Consistency",
      description:
        "Eliminate variability in production output with precise control",
      icon: <FaClipboardCheck className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Precision control",
        "Quality monitoring",
        "Consistency assurance",
      ],
    },
    {
      title: "60% Downtime Reduction",
      description:
        "Predictive maintenance prevents failures and unplanned stoppages",
      icon: <FaTools className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Predictive analytics",
        "Condition monitoring",
        "Preventive maintenance",
      ],
    },
    {
      title: "30% Resource Optimization",
      description:
        "Minimize material waste and energy consumption through intelligent control",
      icon: <FaBolt className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Material optimization",
        "Energy management",
        "Waste reduction",
      ],
    },
    {
      title: "Enhanced Safety Compliance",
      description:
        "Automated interlocks and safety protocols prevent accidents",
      icon: <FaShieldAlt className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Safety interlocks",
        "Compliance automation",
        "Risk mitigation",
      ],
    },
    {
      title: "Real-time Visibility",
      description:
        "Complete process transparency with real-time monitoring and control",
      icon: <FaChartLine className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Live monitoring",
        "Process transparency",
        "Control accessibility",
      ],
    },
  ];

  // Process Control Features
  const processControlFeatures = [
    {
      title: "PLC/SCADA Integration",
      description:
        "Seamless integration with existing control systems and instrumentation",
      capabilities: [
        "Legacy system integration",
        "Protocol conversion",
        "Data acquisition",
      ],
    },
    {
      title: "Advanced Process Control",
      description: "Model predictive control and optimization algorithms",
      capabilities: [
        "MPC algorithms",
        "Optimization models",
        "Adaptive control",
      ],
    },
    {
      title: "Batch Process Management",
      description:
        "Complete batch tracking, recipe management, and documentation",
      capabilities: [
        "Batch tracking",
        "Recipe control",
        "Documentation automation",
      ],
    },
    {
      title: "Safety Instrumented Systems",
      description:
        "Integrated safety systems with automated emergency response",
      capabilities: [
        "Emergency shutdown",
        "Safety interlocks",
        "Incident response",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-8 md:py-12 overflow-hidden px-4"
        style={{
          backgroundImage: "url('modules/process-bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/20">
                <FaCogs className="h-3 w-3 md:h-4 md:w-4" />
                Process Automation Platform
              </div>

              <h1 className="mb-4 md:mb-6 text-white">
                Intelligent Process
                <span className="block text-green-400 mt-2">Automation</span>
              </h1>

              <p className="mb-4 md:mb-6 text-gray-200">
                Achieve precision, consistency, and optimization in every
                industrial process
              </p>

              <p className="mb-6 md:mb-8 text-gray-300">
                Intelligent automation and real-time control for maximum
                efficiency and quality
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="mb-4 md:mb-6">Intelligent Process Control</h2>
                <p className="text-gray-600 mb-4 md:mb-6">
                  Process Automation is the intelligent orchestration of
                  industrial operations through PLC/SCADA integration, real-time
                  monitoring, and adaptive control logic.
                </p>
                <p className="text-gray-600 mb-6 md:mb-8">
                  Our{" "}
                  <span className="font-bold text-green-600">
                    Industry INTEGRA 360
                  </span>{" "}
                  ensures optimal performance, quality consistency, and
                  operational excellence across production cycles with
                  predictive analytics and automated optimization.
                </p>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">
                      PLC/SCADA integration and real-time monitoring
                    </span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">
                      Predictive analytics and adaptive control logic
                    </span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">
                      Quality consistency and operational excellence
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-200 shadow-xl">
                  <div className="text-center mb-4 md:mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-500 to-gray-600 mb-3 md:mb-4">
                      <FaCogs className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <h3 className="mb-1 md:mb-2">Industry INTEGRA 360</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Complete Process Automation Platform
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200 text-center shadow-sm">
                      <div className="text-lg md:text-xl font-bold text-green-600">
                        45%
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        Process Efficiency
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200 text-center shadow-sm">
                      <div className="text-lg md:text-xl font-bold text-green-600">
                        99.5%
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        Quality Consistency
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200 text-center shadow-sm">
                      <div className="text-lg md:text-xl font-bold text-green-600">
                        60%
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        Downtime Reduction
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200 text-center shadow-sm">
                      <div className="text-lg md:text-xl font-bold text-green-600">
                        30%
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        Resource Optimization
                      </div>
                    </div>
                  </div>
                </div>
                <BorderBeam
                  size={300}
                  duration={15}
                  borderWidth={2}
                  className="rounded-xl md:rounded-2xl"
                  colorFrom="#10b981"
                  colorTo="#6b7280"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-8 md:py-12 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">
                Industry INTEGRA 360 Process KPIs We Cover
              </h2>
              <p className="text-gray-600">
                Comprehensive monitoring and control of every aspect of your
                process operations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {processKPIs.map((kpi, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex p-2 md:p-3 rounded-lg bg-green-100 text-green-600 mb-3 md:mb-4">
                    {kpi.icon}
                  </div>
                  <h3 className="mb-1 md:mb-2">{kpi.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 md:mb-4">
                    {kpi.description}
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {kpi.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded"
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
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Industry Applications</h2>
              <p className="text-gray-600">
                Specialized automation solutions for process-intensive
                industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {industryApplications.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-3 md:p-4 rounded-xl bg-green-100 text-green-600">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 md:mb-2">{industry.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 md:mb-3">
                      Key Features:
                    </h4>
                    <div className="space-y-1 md:space-y-2">
                      {industry.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs md:text-sm text-gray-700"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {industry.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-green-50 text-green-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">
                        Metrics:
                      </h4>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {industry.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded"
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
              <h3 className="mb-4 md:mb-6">Also Used In:</h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {additionalIndustries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 md:px-4 py-2 border border-gray-200 shadow-sm"
                  >
                    {industry.icon}
                    <span className="font-medium text-gray-900 text-sm md:text-base">
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
      <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">The Problem We Solve</h2>
              <p className="text-gray-600">
                Manual process control leads to inconsistent quality, production
                variability, and safety risks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="p-2 md:p-3 rounded-xl bg-gray-100 text-gray-600 flex-shrink-0">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 md:mb-2">{problem.title}</h3>
                      <div className="mt-1 md:mt-2 px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium inline-block">
                        Impact: {problem.impact}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 shadow-xl">
              <p className="text-gray-700 mb-3 md:mb-4 text-center">
                Without real-time optimization, plants operate below capacity,
                experience unexpected downtime, and struggle with regulatory
                compliance.
              </p>
              <p className="text-gray-700 text-center">
                Disconnected systems prevent holistic visibility, making it
                impossible to identify bottlenecks or optimize end-to-end
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Dashboard Section */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="mb-3 md:mb-4">
                Industry INTEGRA 360 Process Automation Dashboard
              </h2>
              <p className="text-gray-600">
                Real-time process visualization, predictive analytics, and
                intelligent control to optimize industrial operations at scale.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-8 md:mb-12">
              <h3 className="mb-4 md:mb-6 text-center">
                Complete Process Automation Overview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {processControlFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-green-50 rounded-xl p-4 md:p-6 border border-green-200 shadow-lg"
                  >
                    <h4 className="mb-1 md:mb-2">{feature.title}</h4>
                    <p className="text-gray-700 mb-2 md:mb-3">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {feature.capabilities.map((capability, i) => (
                        <span
                          key={i}
                          className="text-xs md:text-sm bg-white text-green-700 px-2 md:px-3 py-0.5 md:py-1 rounded-lg border border-green-200"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 mb-6 md:mb-8" />

            <div className="bg-gray-50 rounded-xl md:rounded-2xl border-2 border-gray-800 p-3 md:p-4 shadow-2xl">
              <div className="h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto rounded-lg">
                <img
                  src="dashboards/process-dashboard.png"
                  alt="Process Automation Dashboard"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-center text-gray-600 mt-3 md:mt-4 text-sm md:text-base">
                Interactive dashboard delivering real-time insights, alarms, and
                control across all industrial processes.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
              {[
                { label: "Active Processes", value: "24" },
                { label: "Automation Rate", value: "92.5%" },
                { label: "Quality Compliance", value: "99.8%" },
                { label: "Energy Efficiency", value: "87.3%" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl p-3 md:p-4 border border-gray-200 text-center bg-white shadow-lg"
                >
                  <div className="text-lg md:text-xl font-bold text-green-600">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits vs Consequences */}
      <section className="py-8 md:py-12 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h2 className="mb-4 md:mb-6">
                  Benefits with Industry INTEGRA 360
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-4 md:p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="p-2 md:p-3 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="mb-1 md:mb-2">{benefit.title}</h3>
                          <p className="text-gray-700 mb-2 md:mb-3">
                            {benefit.description}
                          </p>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {benefit.details.map((detail, i) => (
                              <span
                                key={i}
                                className="text-xs bg-white text-green-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-green-200"
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
                <h2 className="mb-4 md:mb-6">
                  Consequences Without Automation
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-300 shadow-lg">
                    <h3 className="mb-2 md:mb-3">✗ Compliance Failures</h3>
                    <p className="text-gray-700">
                      Manual errors in regulatory documentation leading to
                      penalties
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-300 shadow-lg">
                    <h3 className="mb-2 md:mb-3">✗ Unplanned Downtime</h3>
                    <p className="text-gray-700">
                      Reactive maintenance causing production halts and delays
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-300 shadow-lg">
                    <h3 className="mb-2 md:mb-3">✗ Lack of Visibility</h3>
                    <p className="text-gray-700">
                      Inability to identify process bottlenecks and
                      inefficiencies
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-300 shadow-lg">
                    <h3 className="mb-2 md:mb-3">✗ Competitive Disadvantage</h3>
                    <p className="text-gray-700">
                      Falling behind automated competitors in efficiency and
                      quality
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-300 shadow-lg">
                    <h3 className="mb-2 md:mb-3">✗ Financial Losses</h3>
                    <p className="text-gray-700">
                      Material waste, rework costs, and lost production revenue
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Control Technologies */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Advanced Process Control Technologies</h2>
              <p className="text-gray-600">
                Industry-leading technologies for precision control and
                optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  title: "PLC Integration",
                  description:
                    "Seamless integration with Programmable Logic Controllers",
                  technologies: [
                    "Siemens",
                    "Allen-Bradley",
                    "Schneider",
                    "Mitsubishi",
                  ],
                  icon: <FaCog className="h-6 w-6 md:h-8 md:w-8" />,
                },
                {
                  title: "SCADA Systems",
                  description:
                    "Supervisory Control and Data Acquisition systems",
                  technologies: ["Ignition", "WinCC", "FactoryTalk", "Citect"],
                  icon: <FaChartLine className="h-6 w-6 md:h-8 md:w-8" />,
                },
                {
                  title: "DCS Integration",
                  description: "Distributed Control System compatibility",
                  technologies: ["DeltaV", "PCS7", "Foxboro", "Centum"],
                  icon: <FaServer className="h-6 w-6 md:h-8 md:w-8" />,
                },
                {
                  title: "MES Integration",
                  description: "Manufacturing Execution System connectivity",
                  technologies: [
                    "SAP MES",
                    "Siemens Opcenter",
                    "Rockwell MES",
                    "Custom",
                  ],
                  icon: <FaIndustry className="h-6 w-6 md:h-8 md:w-8" />,
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-2 md:p-3 rounded-lg bg-green-100 text-green-600 inline-flex mb-3 md:mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="mb-1 md:mb-2">{tech.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 md:mb-4">
                    {tech.description}
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {tech.technologies.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-4 md:p-6 rounded-xl bg-gradient-to-r from-green-500 to-gray-600 mb-4 md:mb-6">
              <FaCogs className="h-12 w-12 md:h-16 md:w-16 text-white" />
            </div>

            <h2 className="mb-4 md:mb-6 text-white">
              Optimize Your Processes Today
            </h2>

            <p className="text-gray-300 mb-6 md:mb-8">
              Join industry leaders who have achieved operational excellence
              with Industry INTEGRA 360 Process Automation
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="text-center p-3 md:p-4 bg-white/10 rounded-xl">
                <div className="text-lg md:text-xl font-bold mb-1">320+</div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Process Plants Automated
                </div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/10 rounded-xl">
                <div className="text-lg md:text-xl font-bold mb-1">$1.2B</div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Client Savings
                </div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/10 rounded-xl">
                <div className="text-lg md:text-xl font-bold mb-1">99.8%</div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Client Satisfaction
                </div>
              </div>
            </div>

            

            <p className="text-gray-400 mt-4 md:mt-6 text-xs md:text-sm">
              Implementation in 6-10 weeks • 24/7 process support •
              Industry-leading performance guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessManufacturing;
