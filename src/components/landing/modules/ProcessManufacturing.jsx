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
  FaCaretRight,
  FaCaretLeft,
  FaBacteria,
  FaVial,
  FaFire,
  FaWater,
  FaSeedling,
  FaVials,
} from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProcessManufacturing = () => {
  // Process KPIs We Cover
  const processKPIs = [
    {
      icon: <FaTachometerAlt className="h-6 w-6" />,
      title: "Process Overview",
      description: "Complete real-time visualization of all process operations",
      metrics: ["Status monitoring", "Performance indicators"],
      color: "blue",
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: "Throughput Analytics",
      description:
        "Track production rates, bottlenecks, and efficiency metrics",
      metrics: ["Production rates", "Bottleneck analysis", "Efficiency"],
      color: "green",
    },
    {
      icon: <FaSync className="h-6 w-6" />,
      title: "Time Metrics",
      description: "Monitor cycle times, batch durations, and process timing",
      metrics: ["Cycle times", "Batch duration", "Timing analysis"],
      color: "purple",
    },
    {
      icon: <FaExclamationTriangle className="h-6 w-6" />,
      title: "Backlog Management",
      description: "Track pending processes, work in progress, and delays",
      metrics: ["WIP tracking", "Delay analysis", "Queue management"],
      color: "orange",
    },
    {
      icon: <FaCogs className="h-6 w-6" />,
      title: "Automation Levels",
      description:
        "Monitor and optimize automation implementation across processes",
      metrics: ["Automation rate", "Manual intervention", "Auto-optimization"],
      color: "red",
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: "Resource Utilization",
      description: "Track equipment, material, and personnel efficiency",
      metrics: ["Equipment usage", "Material efficiency", "Labor optimization"],
      color: "teal",
    },
    {
      icon: <FaClipboardCheck className="h-6 w-6" />,
      title: "Quality Control",
      description: "Real-time quality monitoring and compliance tracking",
      metrics: ["Quality metrics", "Defect rates", "Compliance status"],
      color: "yellow",
    },
    {
      icon: <FaShieldAlt className="h-6 w-6" />,
      title: "Compliance Tracking",
      description: "Automated regulatory compliance and audit trail management",
      metrics: ["Regulatory checks", "Audit trails", "Safety compliance"],
      color: "indigo",
    },
    {
      icon: <FaDollarSign className="h-6 w-6" />,
      title: "Cost & ROI Analysis",
      description: "Track operational costs and return on investment",
      metrics: ["Cost per unit", "ROI tracking", "Efficiency savings"],
      color: "pink",
    },
    {
      icon: <FaTools className="h-6 w-6" />,
      title: "Failure Analysis",
      description: "Analyze process failures and implement corrective actions",
      metrics: ["Failure rates", "Root cause analysis", "Corrective actions"],
      color: "gray",
    },
    {
      icon: <FaChartBar className="h-6 w-6" />,
      title: "SLA Monitoring",
      description: "Track service level agreements and performance commitments",
      metrics: ["SLA compliance", "Performance metrics", "Commitment tracking"],
      color: "blue",
    },
    {
      icon: <FaArrowRight className="h-6 w-6" />,
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
      icon: <FaFlask className="h-8 w-8" />,
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
      color: "blue",
    },
    {
      title: "Pharmaceutical Production",
      icon: <FaVials className="h-8 w-8" />,
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
      icon: <FaOilCan className="h-8 w-8" />,
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
      color: "orange",
    },
    {
      title: "Food & Beverage",
      icon: <FaUtensils className="h-8 w-8" />,
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
      color: "red",
    },
    {
      title: "Water Treatment",
      icon: <FaTint className="h-8 w-8" />,
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
      color: "teal",
    },
    {
      title: "Manufacturing",
      icon: <FaIndustry className="h-8 w-8" />,
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
      color: "purple",
    },
  ];

  // Additional Industries
  const additionalIndustries = [
    { name: "Mining Operations", icon: <FaMountain className="h-6 w-6" /> },
    { name: "Power Generation", icon: <FaSun className="h-6 w-6" /> },
    { name: "Textile Production", icon: <FaTree className="h-6 w-6" /> },
    { name: "Plastic Manufacturing", icon: <FaServer className="h-6 w-6" /> },
    { name: "Paper & Pulp", icon: <FaLeaf className="h-6 w-6" /> },
    { name: "Automotive Parts", icon: <FaCar className="h-6 w-6" /> },
  ];

  // Problems We Solve
  const problems = [
    {
      title: "Inconsistent Quality",
      description:
        "Manual control leads to variable output affecting customer satisfaction and brand reputation",
      impact: "15-25% quality variation",
      icon: <FaExclamationTriangle className="h-8 w-8" />,
      color: "red",
    },
    {
      title: "Production Bottlenecks",
      description:
        "Manual processes slow operations and create inefficiencies throughout the production chain",
      impact: "20-30% capacity loss",
      icon: <FaSync className="h-8 w-8" />,
      color: "orange",
    },
    {
      title: "Safety Incidents",
      description:
        "Human error in critical processes leads to accidents and regulatory violations",
      impact: "40% higher accident rates",
      icon: <FaShieldAlt className="h-8 w-8" />,
      color: "yellow",
    },
    {
      title: "Material Waste",
      description:
        "Inefficient processes waste resources and increase production costs",
      impact: "15-25% material waste",
      icon: <FaLeaf className="h-8 w-8" />,
      color: "green",
    },
  ];

  // Benefits of Automation
  const benefits = [
    {
      title: "45% Process Efficiency",
      description:
        "Automated optimization increases throughput and reduces cycle times",
      icon: <FaTachometerAlt className="h-8 w-8" />,
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
      icon: <FaClipboardCheck className="h-8 w-8" />,
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
      icon: <FaTools className="h-8 w-8" />,
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
      icon: <FaBolt className="h-8 w-8" />,
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
      icon: <FaShieldAlt className="h-8 w-8" />,
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
      icon: <FaChartLine className="h-8 w-8" />,
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
        className="relative py-24 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('modules/process-bg.webp')", 
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Optional subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-lg font-medium mb-8 border border-white/20">
                <FaCogs className="h-5 w-5" />
                Process Automation Platform
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
                Intelligent Process
                <span className="block text-4xl md:text-6xl mt-4">
                  Automation
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto font-semibold">
                Achieve precision, consistency, and optimization in every
                industrial process
              </p>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Intelligent automation and real-time control for maximum
                efficiency and quality
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-lg shadow-xl">
                  <Link
                    to="/process-automation/demo"
                    className="flex items-center gap-3"
                  >
                    <FaRocket className="h-5 w-5" />
                    Schedule Process Demo
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="px-10 py-6 text-lg border-2 border-white text-white hover:bg-white/10 rounded-lg"
                >
                  <Link
                    to="/contact/process-expert"
                    className="flex items-center gap-3"
                  >
                    <FaUsers className="h-5 w-5" />
                    Talk to Process Expert
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
                  Intelligent Process Control
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Process Automation is the intelligent orchestration of
                  industrial operations through PLC/SCADA integration, real-time
                  monitoring, and adaptive control logic.
                </p>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our{" "}
                  <span className="font-bold text-blue-600">
                    Industry INTEGRA 360
                  </span>{" "}
                  ensures optimal performance, quality consistency, and
                  operational excellence across production cycles with
                  predictive analytics and automated optimization.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      PLC/SCADA integration and real-time monitoring
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Predictive analytics and adaptive control logic
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Quality consistency and operational excellence
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-green-500 mb-4">
                      <FaCogs className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Industry INTEGRA 360
                    </h3>
                    <p className="text-gray-600">
                      Complete Process Automation Platform
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        45%
                      </div>
                      <div className="text-sm text-gray-600">
                        Process Efficiency
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        99.5%
                      </div>
                      <div className="text-sm text-gray-600">
                        Quality Consistency
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        60%
                      </div>
                      <div className="text-sm text-gray-600">
                        Downtime Reduction
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        30%
                      </div>
                      <div className="text-sm text-gray-600">
                        Resource Optimization
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
                Industry INTEGRA 360 Process KPIs We Cover
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive monitoring and control of every aspect of your
                process operations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {processKPIs.map((kpi, index) => (
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

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized automation solutions for process-intensive
                industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {industryApplications.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-xl bg-${industry.color}-100 text-${industry.color}-600`}
                    >
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <div className="space-y-2">
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

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                          >
                            {tech}
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
                Manual process control leads to inconsistent quality, production
                variability, and safety risks
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
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

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <p className="text-gray-700 text-lg mb-6 text-center">
                Without real-time optimization, plants operate below capacity,
                experience unexpected downtime, and struggle with regulatory
                compliance. Human error in critical processes results in batch
                failures, material waste, safety incidents, and significant
                financial losses.
              </p>
              <p className="text-gray-700 text-lg text-center">
                Disconnected systems prevent holistic visibility, making it
                impossible to identify bottlenecks or optimize end-to-end
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry INTEGRA 360 Process Automation Dashboard
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real-time process visualization, predictive analytics, and
                intelligent control to optimize industrial operations at scale.
              </p>
            </div>

            {/* Feature Content */}
            <div className="max-w-5xl mx-auto mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Complete Process Automation Overview
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {processControlFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-2xl p-6 border border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.capabilities.map((capability, i) => (
                        <span
                          key={i}
                          className="text-sm bg-white text-blue-700 px-3 py-1 rounded-lg border border-blue-200"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-16" />

            {/* Full Width Dashboard */}
            <div className="bg-gray-50 rounded-2xl border-2 border-slate-800 p-4">
              <div className="h-[600px] overflow-y-auto rounded-lg">
                {/* Dashboard Image Placeholder */}

                {
                  // Replace this placeholder with your actual dashboard image:
                  <img
                    src="dashboards/process-dashboard.png"
                    alt="Process Automation Dashboard"
                    className="w-full h-auto"
                  />
                }
              </div>

              <p className="text-center text-gray-600 mt-6">
                Interactive dashboard delivering real-time insights, alarms, and
                control across all industrial processes.
              </p>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              {[
                { label: "Active Processes", value: "24", color: "blue" },
                { label: "Automation Rate", value: "92.5%", color: "green" },
                {
                  label: "Quality Compliance",
                  value: "99.8%",
                  color: "purple",
                },
                { label: "Energy Efficiency", value: "87.3%", color: "orange" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl p-5 border border-gray-200 text-center bg-white"
                >
                  <div className={`text-2xl font-bold text-${item.color}-600`}>
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits vs Consequences */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
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
                      ✗ Compliance Failures
                    </h3>
                    <p className="text-gray-700">
                      Manual errors in regulatory documentation leading to
                      penalties
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      ✗ Unplanned Downtime
                    </h3>
                    <p className="text-gray-700">
                      Reactive maintenance causing production halts and delays
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      ✗ Lack of Visibility
                    </h3>
                    <p className="text-gray-700">
                      Inability to identify process bottlenecks and
                      inefficiencies
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      ✗ Competitive Disadvantage
                    </h3>
                    <p className="text-gray-700">
                      Falling behind automated competitors in efficiency and
                      quality
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      ✗ Financial Losses
                    </h3>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advanced Process Control Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-leading technologies for precision control and
                optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  icon: <FaCog className="h-8 w-8" />,
                  color: "blue",
                },
                {
                  title: "SCADA Systems",
                  description:
                    "Supervisory Control and Data Acquisition systems",
                  technologies: ["Ignition", "WinCC", "FactoryTalk", "Citect"],
                  icon: <FaChartLine className="h-8 w-8" />,
                  color: "green",
                },
                {
                  title: "DCS Integration",
                  description: "Distributed Control System compatibility",
                  technologies: ["DeltaV", "PCS7", "Foxboro", "Centum"],
                  icon: <FaServer className="h-8 w-8" />,
                  color: "purple",
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
                  icon: <FaIndustry className="h-8 w-8" />,
                  color: "orange",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div
                    className={`p-3 rounded-lg bg-${tech.color}-100 text-${tech.color}-600 inline-flex mb-4`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {tech.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
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
      <section className="py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-green-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 mb-8">
              <FaCogs className="h-16 w-16 text-white" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Optimize Your Processes Today
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join industry leaders who have achieved operational excellence
              with Industry INTEGRA 360 Process Automation
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold mb-2">320+</div>
                <div className="text-gray-300">Process Plants Automated</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold mb-2">$1.2B</div>
                <div className="text-gray-300">Client Savings</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold mb-2">99.8%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-7 text-lg font-semibold rounded-lg">
                <Link
                  to="/process-automation/demo"
                  className="flex items-center gap-3"
                >
                  <FaRocket className="h-6 w-6" />
                  Request Process Demo
                </Link>
              </Button>

              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-12 py-7 text-lg font-semibold rounded-lg">
                <Link
                  to="/contact/process-analysis"
                  className="flex items-center gap-3"
                >
                  <FaChartLine className="h-6 w-6" />
                  Get Process Assessment
                </Link>
              </Button>
            </div>

            <p className="text-gray-400 mt-8 text-sm">
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
