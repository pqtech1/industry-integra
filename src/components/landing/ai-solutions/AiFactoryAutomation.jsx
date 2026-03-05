import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Check,
  Database,
  Activity,
  Cpu,
  BarChart2,
  RefreshCcw,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Brain,
  Eye,
  Zap,
  Shield,
  Gauge,
  LineChart,
  AlertTriangle,
  Target,
  Award,
  Bot,
  Network,
  Layers,
  Settings,
  Wrench,
  Package,
  Truck,
  Factory,
  Cog,
  Thermometer,
  Vibrate,
  Radio,
  ChevronRight,
  Calendar,

  Cable,
  Wifi,
  Server,
  Cctv,
  Cpu as CpuIcon,
} from "lucide-react";

import AIIconDashboard from "../../sections/AIIconDashboard";

const AiFactoryAutomation = () => {
  const steps = [
    {
      title: "Real-Time Data Acquisition",
      description:
        "AI collects massive streams of data from sensors, PLCs, machines, robots, and IoT devices across the factory floor in real time at millisecond resolution.",
      icon: <Database className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Process Intelligence",
      description:
        "Machine learning analyzes production patterns, detects anomalies, identifies bottlenecks, and uncovers hidden inefficiencies using XGBoost and LightGBM models.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Autonomous Execution",
      description:
        "AI dynamically controls robots, CNC machines, conveyors, AGVs/AMRs, and process parameters for optimal throughput with reinforcement learning agents.",
      icon: <Cpu className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Maintenance",
      description:
        "AI forecasts equipment failures, tool wear, and quality drift — scheduling maintenance before breakdowns occur using Amazon Chronos and LSTM models.",
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Self-Optimizing Production",
      description:
        "Closed-loop AI continuously refines schedules, parameters, energy use, and material flow based on live data and demand signals with multi-agent orchestration.",
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Scalable Smart Factory",
      description:
        "AI scales seamlessly across production lines, plants, or global networks — integrating new machines, cobots, and digital twins with edge deployment.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: "Minimize Downtime",
      description:
        "Predictive maintenance reduces unplanned stops by 30–50%, keeping lines running longer and more reliably with Remaining Useful Life (RUL) scoring.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Cut Operational Costs",
      description:
        "Optimize energy, raw materials, labor allocation, and maintenance — achieving 10–30% overall cost reduction through intelligent automation.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Improve Quality & Yield",
      description:
        "AI-powered vision and analytics catch defects early with 99.5% accuracy, reduce scrap, and increase first-pass yield by 20-30%.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Increase Throughput",
      description:
        "Intelligent scheduling, real-time adjustments, and bottleneck elimination boost overall equipment effectiveness (OEE) by 15-25%.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const factorySystems = [
    {
      system: "Predictive Maintenance",
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      aiApplication:
        "RUL prediction, anomaly detection, remaining useful life scoring with Amazon Chronos",
      impact: "30-40% reduction in unplanned downtime",
    },
    {
      system: "Quality Inspection",
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      aiApplication:
        "Visual defect detection with YOLOv11, real-time pass/fail classification",
      impact: "99.5% defect detection accuracy",
    },
    {
      system: "Production Scheduling",
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      aiApplication:
        "RL-based scheduling, changeover optimization, bottleneck prediction",
      impact: "20% increase in throughput",
    },
    {
      system: "OEE Intelligence",
      icon: <Gauge className="h-8 w-8 text-orange-600" />,
      aiApplication:
        "Root cause analysis, loss classification, pareto ranking of loss causes",
      impact: "15-25% OEE improvement",
    },
    {
      system: "Robot Control",
      icon: <Bot className="h-8 w-8 text-red-600" />,
      aiApplication:
        "Dynamic path optimization, collaborative robot coordination",
      impact: "30% faster cycle times",
    },
    {
      system: "Supply Chain Integration",
      icon: <Package className="h-8 w-8 text-amber-600" />,
      aiApplication:
        "Demand forecasting, inventory optimization, material flow prediction",
      impact: "25% inventory reduction",
    },
  ];

  const aiFactoryTechStack = [
    {
      tech: "Time-Series ML",
      what: "Predict future values from historical sensor data",
      where:
        "Predictive Maintenance, Throughput Prediction, Energy Forecasting",
      icon: <LineChart className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Computer Vision",
      what: "Real-time visual inspection and defect detection",
      where: "Quality Control, Safety Monitoring, Assembly Verification",
      icon: <Eye className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Reinforcement Learning",
      what: "Learn optimal control policies through trial and reward",
      where: "Production Scheduling, Robot Path Optimization, Energy Balancing",
      icon: <Brain className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Anomaly Detection",
      what: "Identify unusual patterns in sensor streams and machine behavior",
      where:
        "Machine Health Monitoring, Quality Drift Detection, Safety Incidents",
      icon: <AlertTriangle className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Agentic AI",
      what: "Autonomous agents that plan, act, and learn without human intervention",
      where: "Maintenance Agent, Quality Guardian, Production Optimizer",
      icon: <Bot className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Multi-Agent Systems",
      what: "Multiple specialized AI agents collaborating on complex problems",
      where: "Factory-wide Orchestration, Cross-Line Optimization",
      icon: <Network className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Digital Twin",
      what: "Virtual replica of factory for simulation and what-if analysis",
      where: "Capacity Planning, Changeover Optimization, Training Simulation",
      icon: <Factory className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "NLP / Text Analytics",
      what: "Extract insights from maintenance logs and operator notes",
      where: "Root Cause Analysis, Failure Log Analysis, SOP Assistant",
      icon: <Database className="h-6 w-6 text-green-600" />,
    },
  ];

  const agenticFactoryAgents = [
    {
      agent: "Maintenance Agent",
      description:
        "Monitors RUL scores and sensor anomalies, schedules maintenance, procures parts, assigns technicians, and tracks completion — fully autonomous end-to-end.",
      icon: <Wrench className="h-7 w-7 text-green-600" />,
      tools: ["SCADA Historian", "ERP API", "Workforce DB", "RAG Copilot"],
    },
    {
      agent: "Quality Guardian",
      description:
        "Monitors FPY, PPM, and Cpk in real-time, triggers parameter adjustments, quarantines suspect batches, and auto-generates 8D reports.",
      icon: <Target className="h-7 w-7 text-green-600" />,
      tools: ["Vision API", "SPC Monitor", "MES API", "Quality DB"],
    },
    {
      agent: "Production Optimizer",
      description:
        "Balances line speeds, schedules changeovers, predicts bottlenecks, and recommends optimal production sequences in real-time.",
      icon: <Cog className="h-7 w-7 text-green-600" />,
      tools: [
        "MES Scheduler",
        "OR-Tools",
        "Forecasting API",
        "Line Controller",
      ],
    },
    {
      agent: "Factory Brain",
      description:
        "Orchestrates all agents across the factory — resolving conflicts, coordinating actions, and ensuring optimal factory-wide performance.",
      icon: <Brain className="h-7 w-7 text-green-600" />,
      tools: ["LangGraph", "Multi-Agent Orchestrator", "All Agent APIs"],
    },
  ];

  const predictiveModels = [
    {
      model: "Amazon Chronos",
      application: "Remaining Useful Life (RUL) prediction",
      accuracy: "95% accuracy on failure prediction",
    },
    {
      model: "LSTM / Transformer",
      application: "Custom deep learning for SCADA patterns",
      accuracy: "96% with 6+ months of labeled data",
    },
    {
      model: "XGBoost / LightGBM",
      application: "Root cause classification from alarm logs",
      accuracy: "92% classification accuracy with SHAP explanations",
    },
    {
      model: "Meta Prophet + Isolation Forest",
      application: "Early-stage anomaly flagging at the edge",
      accuracy: "98% recall on edge anomalies",
    },
  ];

  const qualityMetrics = [
    {
      metric: "First Pass Yield (FPY)",
      aiBenefit: "20-30% improvement through early defect prediction",
    },
    {
      metric: "Defect Rate (PPM)",
      aiBenefit: "50% reduction with real-time vision inspection",
    },
    {
      metric: "Process Capability (Cpk)",
      aiBenefit: "Predict drift 4 hours before out-of-control",
    },
    {
      metric: "Scrap Reduction",
      aiBenefit: "40% less material waste",
    },
  ];

  const oeeComponents = [
    {
      component: "Availability",
      aiApplication: "Predictive maintenance reduces unplanned downtime by 40%",
      icon: <Clock className="h-5 w-5 text-green-600" />,
    },
    {
      component: "Performance",
      aiApplication:
        "Bottleneck prediction and cycle time optimization increase speed by 20%",
      icon: <Gauge className="h-5 w-5 text-green-600" />,
    },
    {
      component: "Quality",
      aiApplication:
        "AI vision catches defects before they reach final QC, improving yield by 25%",
      icon: <Target className="h-5 w-5 text-green-600" />,
    },
  ];

  const alertIntelligence = [
    "Alert Correlation - Groups 50+ alarms into 1 root-cause alert",
    "Dynamic Priority - Re-prioritizes based on production impact",
    "False Positive Suppression - Filters alarms operators consistently dismiss",
    "Alert Prediction - Warns 5-15 minutes before critical alarms fire",
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "Month 1–3",
      features:
        "SCADA Integration, Anomaly Detection, Alert Correlation, Basic Monitoring",
      impact: "Immediate visibility, 30% noise reduction",
    },
    {
      phase: "Phase 2",
      title: "Prediction",
      timeline: "Month 3–6",
      features:
        "Predictive Maintenance, Quality Defect Prediction, Throughput Forecasting, Vision Inspection",
      impact: "30-40% downtime reduction",
    },
    {
      phase: "Phase 3",
      title: "Copilot",
      timeline: "Month 6–9",
      features:
        "Plant Copilot (RAG), NL-to-SQL, Auto-generated Reports, Maintenance Assistant",
      impact: "40% faster operator response",
    },
    {
      phase: "Phase 4",
      title: "Agents",
      timeline: "Month 9–15",
      features: "Maintenance Agent, Quality Guardian, Production Optimizer",
      impact: "First autonomous operations",
    },
    {
      phase: "Phase 5",
      title: "Autonomous",
      timeline: "Month 15–24",
      features:
        "Multi-Agent Orchestration (Factory Brain), Digital Twin, RL-based Scheduling",
      impact: "Self-optimizing factory",
    },
  ];

  const factoryKPIs = [
    {
      category: "OEE & Productivity",
      metrics: [
        "OEE (Overall Equipment Effectiveness) - %",
        "Throughput - units/hour",
        "Cycle Time - seconds",
        "Changeover Time - minutes",
      ],
    },
    {
      category: "Maintenance",
      metrics: [
        "MTBF (Mean Time Between Failures) - hours",
        "MTTR (Mean Time To Repair) - minutes",
        "RUL (Remaining Useful Life) - days",
        "Maintenance Cost Avoided - $",
      ],
    },
    {
      category: "Quality",
      metrics: [
        "First Pass Yield (FPY) - %",
        "Defect Rate (PPM) - parts per million",
        "Process Capability (Cpk)",
        "Scrap Rate - %",
      ],
    },
    {
      category: "Cost & Efficiency",
      metrics: [
        "Cost per Unit - $",
        "Energy per Unit - kWh",
        "Labor Productivity - units/worker",
        "Inventory Turnover - ratio",
      ],
    },
  ];

  const protocolCategories = [
    {
      name: "Industrial Ethernet Protocols",
      protocols: [
        "PROFINET",
        "EtherNet/IP",
        "EtherCAT",
        "POWERLINK",
        "SERCOS III",
      ],
    },
    {
      name: "Machine-Level Protocols",
      protocols: [
        "CC-Link",
        "CC-Link IE",
        "Mechatrolink",
        "DeviceNet",
        "ControlNet",
      ],
    },
    {
      name: "PLC Communication",
      protocols: [
        "Siemens S7 Protocol",
        "Mitsubishi MELSEC Communication",
        "Omron FINS Protocol",
      ],
    },
    {
      name: "Robotics Integration",
      protocols: [
        "FANUC Ethernet Protocol",
        "ABB Robot Communication",
        "KUKA Robot Interface",
      ],
    },
    {
      name: "Vision System Communication",
      protocols: ["GigE Vision", "GenICam"],
    },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium border-0">
                AI Factory Automation
              </Badge>

              <h1>Automate Your Factory Operations with AI</h1>

              <p className="text-lg">
                Transform traditional production lines into intelligent,
                predictive, and self-optimizing smart factories. Minimize
                downtime by 40%, reduce costs by 30%, improve quality, and
                maximize throughput using advanced AI-driven industrial
                automation with agentic AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-gray-300 hover:bg-gray-100"
                >
                  <Sparkles className="mr-2 h-4 w-4 text-green-600" />
                  View Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm pt-6">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" /> Predictive
                  Maintenance
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" /> Agentic AI
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" /> Zero-Defect
                  Quality
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-3xl blur-3xl opacity-20" />
              <img
                src="ai-solutions/ai-factory-automation.webp"
                alt="AI Factory Automation"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY AI ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-green-600 rounded-3xl blur-3xl opacity-20" />
              <img
                src="ai-solutions/why-use-ai.webp"
                alt="Why use AI for Factory Automation"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2>Why Implement AI in Your Factory Automation?</h2>

              <p className="text-lg">
                Traditional SCADA/MES systems are reactive — they show you what
                happened. AI-powered factory automation makes your operations
                predictive and prescriptive: it tells you what will happen and
                what you should do about it.
              </p>

              <div className="space-y-4">
                {[
                  "Predicts machine failures hours or days in advance using Amazon Chronos time-series models — reducing unplanned downtime by 40%.",
                  "Dynamically adjusts production parameters, speeds, sequences, and robot paths in real-time with reinforcement learning agents.",
                  "Integrates seamlessly with MES, ERP, SCADA, PLCs, robots, cobots, AGVs, and thousands of industrial IoT sensors via standard protocols.",
                  "Scales across discrete, batch, or continuous processes — from single lines to multi-site global operations using multi-agent orchestration.",
                  "Enables 100% automated inline quality inspection using YOLOv11 computer vision — catching defects instantly with 99.5% accuracy.",
                  "Optimizes energy consumption, raw material usage, and waste — lowering OPEX by 30% while supporting sustainability goals.",
                  "Provides real-time OEE dashboards, anomaly alerts, root-cause analysis with SHAP explanations, and AI-recommended actions via Plant Copilot.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FACTORY AUTOMATION PROTOCOLS ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium border-0 mb-4">
              Factory Automation Protocols
            </Badge>
            <h2>Factory Automation Protocols</h2>
            <p className="text-lg text-gray-600 mt-4">
              Discrete Manufacturing – Automotive, Electronics, FMCG, Textile
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These protocols are optimized for high-speed machine automation in
              discrete manufacturing environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protocolCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-green-600 font-semibold mb-4 pb-2 border-b border-gray-100">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.protocols.map((protocol, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                      <span className="text-gray-700 text-sm">{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Comprehensive protocol support for PLCs, robotics, vision systems,
              and machine-level communication.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FACTORY SYSTEMS & AI ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>AI-Powered Factory Systems</h2>
            <p className="text-lg text-gray-600 mt-4">
              Intelligent automation for every critical system on the factory
              floor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factorySystems.map((system, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-xl">
                    {system.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-600 mb-2">
                      {system.system}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {system.aiApplication}
                    </p>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      {system.impact}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW AI TRANSFORMS ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>How AI Transforms Your Factory Floor</h2>
            <p className="text-lg text-gray-600 mt-4">
              From rigid automation to adaptive, predictive, and self-optimizing
              smart manufacturing — see how AI revolutionizes production step by
              step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {step.icon}
                  <h3 className="text-green-600 font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== KEY BENEFITS ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2>Key Benefits of AI Factory Automation</h2>
            <p className="text-lg text-gray-600 mt-4">
              Implementing AI on the factory floor delivers measurable gains in
              uptime, cost, quality, and productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-green-600 font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OEE INTELLIGENCE ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-4 border-0">
                OEE Intelligence
              </Badge>
              <h2>
                Know Exactly Why Your OEE{" "}
                <span className="text-green-600">Isn't 100%</span>
              </h2>
              <p className="text-lg text-gray-600">
                AI doesn't just measure OEE — it tells you why it's low and
                prescribes the fix using automated root cause analysis and
                pareto ranking of loss causes.
              </p>
              <div className="space-y-4">
                {oeeComponents.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl"
                  >
                    <div className="p-2 bg-green-100 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-black">{item.component}</h4>
                      <p className="text-sm text-gray-600">
                        {item.aiApplication}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-green-600 font-bold mb-6">
                Root Cause Analysis Example
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl">
                  <p className="text-sm font-medium text-green-800 mb-2">
                    AI Detected:
                  </p>
                  <p className="text-gray-600">
                    Line 3 OEE dropped from 85% to 72%
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm font-medium text-gray-800 mb-2">
                    Root Cause Analysis:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>45-min unplanned downtime on Machine M-07</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        Temperature sensor fluctuations detected 3 days prior
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Similar pattern occurred 3 times this week</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-green-600 rounded-xl text-white">
                  <p className="text-sm font-medium mb-2">AI Recommendation:</p>
                  <p>
                    Schedule predictive maintenance for M-07 within 48 hours.
                    Parts needed: temperature sensor kit #TS-789.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PREDICTIVE MAINTENANCE ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Predictive Maintenance{" "}
                <span className="text-green-600">Engine</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Continuously ingest real-time PLC tag data: vibration,
                temperature, pressure, cycle times, and error codes. Output
                Remaining Useful Life (RUL) scores updated every few minutes.
              </p>
              <div className="space-y-4">
                {predictiveModels.map((model, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-green-600">
                        {model.model}
                      </h4>
                      <Badge className="bg-green-100 text-green-700 border-0">
                        {model.accuracy}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{model.application}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-white font-bold mb-6">RUL Score Example</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Machine M-07 - Main Spindle</span>
                    <span className="font-bold">12 days remaining</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-3">
                    <div
                      className="bg-yellow-400 h-3 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Machine L-03 - Conveyor Motor</span>
                    <span className="font-bold">45 days remaining</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-3">
                    <div
                      className="bg-green-400 h-3 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Robot Arm #5 - Servo Drive</span>
                    <span className="font-bold">8 days remaining</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-3">
                    <div
                      className="bg-red-400 h-3 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-green-500">
                <p className="text-sm text-green-100">
                  Automatically creates maintenance work orders when RUL drops
                  below threshold
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== QUALITY INTELLIGENCE ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>AI-Powered Quality Control</h2>
            <p className="text-lg text-gray-600 mt-4">
              Catch defects before they happen, not after
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-green-600 mb-2">
                  {metric.metric}
                </h3>
                <p className="text-sm text-gray-600">{metric.aiBenefit}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-green-600 font-bold mb-4">
                Computer Vision Inspection
              </h3>
              <p className="text-gray-600 mb-6">
                YOLOv11 running at 60+ FPS on edge GPUs
              </p>
              <div className="space-y-3">
                {[
                  "Surface defect detection - scratches, dents, cracks",
                  "Assembly verification - missing components, misalignments",
                  "Label inspection - placement, OCR verification",
                  "Color consistency checking",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-white font-bold mb-4">Defect Prevention</h3>
              <p className="text-green-100 mb-6">
                AI monitors process parameters in real-time to predict defects
                before they occur
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Temperature deviation detected</span>
                    <span className="font-bold">+2.3°C</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Pressure variance</span>
                    <span className="font-bold">-1.5 PSI</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div
                      className="bg-red-400 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/20 rounded-xl">
                <p className="text-sm">
                  ⚠️ Defect probability: 78% - Adjust parameters immediately
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AGENTIC AI ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-4 border-0">
                  Agentic AI for Manufacturing
                </Badge>
                <h2>Autonomous Factory Agents That Act — Not Just Advise</h2>
              </div>

              <p className="text-lg text-gray-600">
                Agentic AI goes beyond answering questions. Agents perceive
                their environment, make decisions, execute actions, observe
                results, and loop — autonomously achieving goals without human
                intervention for each step.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: "Goals",
                    desc: "Each agent is assigned specific operational goals to achieve",
                  },
                  {
                    label: "Tools",
                    desc: "Agents use real tools — SCADA, ERP APIs, scheduling engines",
                  },
                  {
                    label: "Memory",
                    desc: "Agents remember what they've done and what they've seen",
                  },
                  {
                    label: "Planning",
                    desc: "Multi-step sequences are planned and self-corrected automatically",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-black">
                        {item.label}:{" "}
                      </span>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Agent Cards */}
            <div className="grid grid-cols-1 gap-5">
              {agenticFactoryAgents.map((agent, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-green-50 rounded-xl p-3">
                    {agent.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-green-600 font-bold text-lg mb-1">
                      {agent.agent}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">
                      {agent.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {agent.tools.map((tool, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs bg-white"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AI TECHNOLOGY STACK ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>AI Technology Stack for Manufacturing</h2>
            <p className="text-lg text-gray-600 mt-4">
              A comprehensive suite of AI technologies working together — each
              layer purpose-built to tackle specific factory challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFactoryTechStack.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-green-600 font-bold text-sm leading-tight">
                    {item.tech}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.what}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-medium">Used in:</p>
                  <p className="text-xs text-gray-600 mt-1">{item.where}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FACTORY KPI DASHBOARD ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>Comprehensive Factory KPIs</h2>
            <p className="text-lg text-gray-600 mt-4">
              AI continuously tracks and optimizes across four key performance
              dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {factoryKPIs.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-green-600 font-bold mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.metrics.map((metric, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ALERT INTELLIGENCE ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2>
                AI Alert <span className="text-green-600">Intelligence</span>
              </h2>
              <p className="text-lg text-gray-600">
                Transform alarm floods into prioritized, actionable
                notifications. AI correlates related alarms, dynamically
                prioritizes based on impact, and suppresses false positives
                automatically.
              </p>
              <ul className="space-y-3">
                {alertIntelligence.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-green-600 font-bold mb-4">Before AI</h3>
              <div className="space-y-2 mb-6">
                {[
                  "Alarm: Temp high",
                  "Alarm: Pressure low",
                  "Alarm: Flow rate",
                  "Alarm: Vibration",
                ].map((alarm, i) => (
                  <div
                    key={i}
                    className="bg-red-50 text-red-700 p-3 rounded-lg text-sm"
                  >
                    {alarm}
                  </div>
                ))}
              </div>
              <h3 className="text-green-600 font-bold mb-4">
                After AI Correlation
              </h3>
              <div className="bg-green-600 text-white p-4 rounded-lg">
                <p className="font-bold">Root Cause: Pump bearing failure</p>
                <p className="text-sm mt-1 text-green-100">
                  3 correlated alarms grouped • High priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AI TOOLS & TECHNOLOGIES ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>AI Tools & Technologies in Factory Automation</h2>
            <p className="text-lg text-gray-600 mt-4">
              Modern AI-powered factory automation combines industrial IoT, edge
              computing, computer vision, digital twins, predictive analytics,
              reinforcement learning, and real-time optimization engines.
            </p>
          </div>

          <div className="mb-12">
            <AIIconDashboard />
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-12 text-center">
            <h3 className="text-gray-900 font-semibold mb-6">
              Powered by the Latest AI Innovations
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We leverage Amazon Chronos for time-series forecasting, YOLOv11
              for vision inspection, LangGraph for multi-agent orchestration,
              and reinforcement learning for production optimization to deliver
              future-ready factory automation solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl">
              Delivering Intelligent Factory Automation with Agentic AI
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IMPLEMENTATION ROADMAP ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>Factory AI Implementation Roadmap</h2>
            <p className="text-lg text-gray-600 mt-4">
              A phased approach that delivers value from day one — building
              toward a fully autonomous, self-optimizing smart factory.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">
                      {item.phase}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="text-green-600 font-bold">{item.title}</h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.features}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-green-600">
                      Impact
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision statement */}
          <div className="mt-12 bg-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-white font-bold mb-4">
              The Ultimate Factory Vision
            </h3>
            <p className="text-green-100 max-w-3xl mx-auto text-lg leading-relaxed">
              A factory at full AI capability is a self-aware, self-optimizing
              operation where AI agents continuously monitor, predict, and act
              across every system — while human managers focus on strategy,
              innovation, and growth rather than firefighting. This is the
              competitive moat that defines Industry 4.0 leadership.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiFactoryAutomation;
