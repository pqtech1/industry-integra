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
  MessageSquare,
  Zap,
  Shield,
  Network,
  ChevronRight,
  Target,
  Cable,
  Radio,
  Wifi,
  Server,
  HardDrive,
  Gauge,
  Layers,
  Repeat,
} from "lucide-react";

import AIIconDashboard from "../../sections/AIIconDashboard";

const AiProcessAutomation = () => {
  const steps = [
    {
      title: "Data Collection",
      description:
        "AI gathers data from multiple sources in real-time, eliminating manual tracking and entry errors.",
      icon: <Database className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Workflow Analysis",
      description:
        "Processes are analyzed automatically to identify bottlenecks and inefficiencies.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Smart Automation",
      description:
        "Tasks are automatically executed by AI with optimized efficiency and minimal human intervention.",
      icon: <Cpu className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Insights",
      description:
        "AI predicts potential delays, errors, or resource shortages before they happen.",
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Continuous Optimization",
      description:
        "Workflows are constantly optimized based on performance metrics and AI recommendations.",
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Scalable Growth",
      description:
        "AI scales operations automatically as business grows, ensuring consistent efficiency.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: "Save Time",
      description:
        "Automate repetitive tasks to free up your team's time for high-value activities.",
      icon: <Clock className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Reduce Costs",
      description:
        "Minimize errors and optimize resource allocation to significantly lower operational costs.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Improve Accuracy",
      description:
        "AI eliminates human errors in critical processes ensuring consistent results.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Boost Productivity",
      description:
        "Streamline workflows and accelerate business operations with intelligent automation.",
      icon: <Users className="h-8 w-8 text-green-600" />,
    },
  ];

  const aiTechStack = [
    {
      tech: "Large Language Models (LLMs)",
      what: "Understand and generate natural language; reason over complex data",
      where: "NL Query Interface, Report Generation, AI Copilot",
      icon: <Brain className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "RAG (Retrieval-Augmented Generation)",
      what: "Ground AI answers in real factory data and documents",
      where: "Plant Copilot, SOP Assistant, Root Cause Explainer",
      icon: <Database className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Agentic AI",
      what: "Autonomous AI agents that plan, act, and loop without human intervention",
      where: "Maintenance Agent, Energy Optimizer, Alert Responder",
      icon: <Zap className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Time-Series ML",
      what: "Predict future values from historical sensor and KPI data",
      where:
        "Predictive Maintenance, Energy Forecasting, Throughput Prediction",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Computer Vision (CV)",
      what: "Analyze images and video from cameras for quality and safety",
      where: "Visual Quality Inspection, PPE Compliance, Safety Monitoring",
      icon: <Eye className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Multi-Agent Systems",
      what: "Multiple specialized AI agents collaborating on complex problems",
      where: "Factory-wide Orchestration Layer",
      icon: <Network className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Anomaly Detection",
      what: "Identify unusual patterns in real-time sensor streams",
      where: "All dashboards — real-time alert intelligence",
      icon: <Shield className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "NLP / Text Analytics",
      what: "Extract insight from unstructured text — logs, reports, manuals",
      where: "Failure Log Analysis, Compliance Parsing, Workforce Notes",
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
    },
  ];

  const agentTypes = [
    {
      agent: "Maintenance Agent",
      description:
        "Monitors machine health, schedules maintenance, procures parts, notifies technicians, and tracks completion — fully autonomously.",
      icon: <RefreshCcw className="h-7 w-7 text-green-600" />,
    },
    {
      agent: "Energy Optimization Agent",
      description:
        "Monitors energy, prices, and production needs every 15 minutes — controlling loads, batteries, and schedules to minimize cost and carbon.",
      icon: <Zap className="h-7 w-7 text-green-600" />,
    },
    {
      agent: "Quality Guardian Agent",
      description:
        "Monitors quality KPIs in real-time and autonomously responds to deviations — alerting, adjusting, and escalating before defective products ship.",
      icon: <Shield className="h-7 w-7 text-green-600" />,
    },
    {
      agent: "Factory Brain (Supervisor)",
      description:
        "Orchestrates all agents across the factory — resolving conflicts between recommendations and ensuring coordinated, optimal factory-wide performance.",
      icon: <Brain className="h-7 w-7 text-green-600" />,
    },
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "Month 1–3",
      features:
        "Anomaly Detection, Alert Correlation, Energy Forecasting, NL Query Interface",
      impact: "Immediate noise reduction; faster insights for managers",
    },
    {
      phase: "Phase 2",
      title: "Prediction",
      timeline: "Month 3–6",
      features:
        "Predictive Maintenance, Quality Defect Prediction, Throughput Forecasting, Computer Vision Inspection",
      impact: "Proactive operations; 20–30% downtime reduction",
    },
    {
      phase: "Phase 3",
      title: "Copilot",
      timeline: "Month 6–9",
      features:
        "Plant Copilot (RAG), NL-to-SQL Full Implementation, Auto-generated Reports, Maintenance AI Assistant",
      impact: "Every operator and manager works 40% faster",
    },
    {
      phase: "Phase 4",
      title: "Agents",
      timeline: "Month 9–15",
      features: "Maintenance Agent, Energy Agent, Quality Guardian Agent",
      impact: "First truly autonomous operations; 35% energy savings",
    },
    {
      phase: "Phase 5",
      title: "Autonomous",
      timeline: "Month 15–24",
      features:
        "Multi-Agent Orchestration (Factory Brain), Digital Twin, RL-based Scheduling, Full Agentic Operations",
      impact: "Self-optimizing factory; competitive moat achieved",
    },
  ];

  const protocolCategories = [
    {
      name: "OPC Standards",
      protocols: [
        "OPC DA (Data Access)",
        "OPC UA (Unified Architecture)",
        "OPC HDA (Historical Data Access)",
        "OPC AE (Alarms & Events)",
      ],
    },
    {
      name: "Fieldbus Protocols",
      protocols: [
        "Modbus RTU",
        "Modbus TCP/IP",
        "PROFIBUS DP",
        "PROFIBUS PA",
        "FOUNDATION Fieldbus H1",
        "FOUNDATION Fieldbus HSE",
      ],
    },
    {
      name: "Industrial Ethernet",
      protocols: ["PROFINET", "EtherNet/IP", "EtherCAT"],
    },
    {
      name: "Legacy / Serial Communication",
      protocols: ["RS-232", "RS-485"],
    },
    {
      name: "Device Communication",
      protocols: ["HART Protocol", "WirelessHART"],
    },
    {
      name: "Distributed Control System Protocols",
      protocols: [
        "Honeywell Experion Protocols",
        "Yokogawa CENTUM Communication",
        "Emerson DeltaV Communication",
      ],
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
                AI Process Automation
              </Badge>

              <h1 className="text-black">
                Automate Your Business Processes with AI
              </h1>

              <p className="text-lg">
                Transform manual workflows into intelligent automated systems.
                Reduce operational costs, eliminate human errors, and increase
                productivity using advanced AI-driven automation.
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
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Smart Workflow Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Real-time Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Scalable Infrastructure</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-3xl blur-3xl opacity-20" />
              <img
                src="ai-solutions/ai-process-automation.webp"
                alt="AI Process Automation"
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
                alt="Why use AI for Process Automation"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2>Why Implement AI in Your Process Automation?</h2>

              <p className="text-lg">
                Traditional systems are reactive — they show you what happened.
                AI-driven process automation goes further by enabling
                intelligent decision-making, predicting outcomes, and optimizing
                workflows in real time.
              </p>

              <div className="space-y-4">
                {[
                  "Automates repetitive tasks across departments—finance, HR, supply chain, and operations—reducing manual errors and saving hours.",
                  "Provides predictive insights, enabling teams to anticipate bottlenecks, prevent downtime, and optimize resource allocation.",
                  "Integrates seamlessly with existing software systems, eliminating data silos and improving workflow efficiency.",
                  "Scales processes automatically as business grows, without hiring additional staff.",
                  "Enables real-time monitoring of workflows, providing actionable metrics to continuously improve performance.",
                  "Reduces operational costs by eliminating redundancies and optimizing task allocation.",
                  "Ensures compliance with company policies and industry regulations through automated auditing and reporting.",
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

      {/* ==================== PROCESS AUTOMATION PROTOCOLS ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium border-0 mb-4">
              Industrial Protocols
            </Badge>
            <h2>Process Automation Protocols</h2>
            <p className="text-lg text-gray-600 mt-4">
              Oil & Gas, Chemical, Pharma, Steel, Cement, Food Processing
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These protocols are widely used in continuous process industries
              to ensure reliable and efficient communication between control
              systems and field devices.
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
              Comprehensive protocol support for seamless integration with
              existing DCS, PLC, and field instrumentation systems.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== HOW AI TRANSFORMS ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2>How AI Transforms Your Processes</h2>
            <p className="text-lg text-gray-600 mt-4">
              From manual workflows to intelligent, automated systems — see how
              AI revolutionizes your operations step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300"
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
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2>Key Benefits of AI Process Automation</h2>
            <p className="text-lg text-gray-600 mt-4">
              Implementing AI in your workflows delivers tangible results for
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300"
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

      {/* ==================== AI TECHNOLOGY STACK ==================== */}
      <section className="relative w-full bg-[#050505] py-20 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative mx-auto px-6 lg:px-8">
          {/* Header with Badge */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-bold tracking-widest uppercase">
              The Engine Room
            </span>

            <h2 className="text-white">
              AI Technology <span className="text-green-400">Stack</span>
            </h2>

            <p className="text-gray-400 max-w-xl text-lg leading-relaxed mt-4">
              A hyper-connected ecosystem of proprietary models, engineered to
              transform complex operational data into decisive action.
            </p>
          </div>

          {/* Bento-Inspired Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiTechStack.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-2 hover:border-green-500/40 overflow-hidden"
              >
                {/* Background Icon Watermark */}
                <div
                  className="absolute -bottom-8 -right-8 text-white/[0.03] group-hover:text-green-500/[0.05] transition-colors duration-500 pointer-events-none"
                  style={{
                    fontSize: "18rem",
                    transform: "rotate(-15deg)",
                  }}
                >
                  {React.cloneElement(item.icon, {
                    className: "w-full h-full",
                    strokeWidth: 1,
                  })}
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Icon */}
                  <div className="mb-6 self-start inline-flex p-3 rounded-2xl bg-gradient-to-br from-green-500/20 to-transparent text-green-400 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold mb-3 group-hover:text-green-300 transition-colors">
                    {item.tech}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {item.what}
                  </p>

                  {/* Footer */}
                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-green-500 font-bold">
                      Deployment
                    </span>
                    <p className="text-sm text-gray-300 mt-2 font-medium">
                      {item.where}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner Light */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="w-1 h-1 bg-green-400 rounded-full shadow-[0_0_8px_#34d399]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AGENTIC AI ==================== */}
      <section className="relative w-full bg-[#030303] py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT CONTENT: The Philosophy */}
            <div className="space-y-10 lg:sticky lg:top-24">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-widest uppercase mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Agentic AI
                </div>
                <h2 className="text-white">
                  Autonomous Agents{" "}
                  <span className="text-green-400">That Act</span>
                </h2>
                <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg">
                  Moving beyond "Chat." Our agents perceive environments,
                  execute high-stakes actions, and self-correct in real-time.
                </p>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Goals",
                    icon: <Target className="w-4 h-4" />,
                    desc: "Target-driven logic",
                  },
                  {
                    label: "Tools",
                    icon: <Zap className="w-4 h-4" />,
                    desc: "Direct ERP/SCADA APIs",
                  },
                  {
                    label: "Memory",
                    icon: <Database className="w-4 h-4" />,
                    desc: "Contextual persistence",
                  },
                  {
                    label: "Planning",
                    icon: <Cpu className="w-4 h-4" />,
                    desc: "Multi-step recursion",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all"
                  >
                    <div className="mt-1 text-green-500 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT: The Agents */}
            <div className="relative flex flex-col gap-4">
              <div className="absolute -inset-10 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

              {agentTypes.map((agent, index) => (
                <div
                  key={index}
                  className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:bg-white/[0.07] hover:translate-x-2"
                >
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-5">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-2 bg-green-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 shadow-xl text-green-400 group-hover:text-white transition-colors">
                        {agent.icon}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-bold group-hover:text-green-400 transition-colors">
                          {agent.agent}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-green-500 transform group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                        {agent.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AI TOOLS & TECHNOLOGIES ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2>AI Tools & Technologies in Process Automation</h2>
            <p className="text-lg text-gray-600 mt-4">
              Modern AI-powered process automation uses a combination of RPA,
              ML, and analytics tools to optimize workflows and drive
              efficiency.
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
              We leverage modern AI frameworks, advanced LLM ecosystems, and
              scalable machine learning tools to deliver intelligent,
              future-ready automation solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl">
              Delivering Intelligent Automation with Modern AI
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IMPLEMENTATION ROADMAP ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2>AI Implementation Roadmap</h2>
            <p className="text-lg text-gray-600 mt-4">
              A phased approach that delivers value from day one — building
              toward a fully autonomous, self-optimizing operation.
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

                  <div className="mt-auto pt-4 border-t border-gray-100">
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
            <h3 className="text-white font-bold mb-4">The Ultimate Vision</h3>
            <p className="text-green-100 max-w-3xl mx-auto text-lg leading-relaxed">
              A factory at full AI capability is a self-aware, self-optimizing
              operation where AI agents continuously monitor, predict, and act
              across every system — while your teams focus on strategy,
              innovation, and growth rather than firefighting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiProcessAutomation;
