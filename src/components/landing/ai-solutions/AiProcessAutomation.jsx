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

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "Month 1–3",
      features:
        "Anomaly Detection, Alert Correlation, Energy Forecasting, NL Query Interface",
      impact: "Immediate noise reduction; faster insights for managers",
      color: "bg-green-50 border-green-200",
      badge: "bg-green-100 text-green-700",
    },
    {
      phase: "Phase 2",
      title: "Prediction",
      timeline: "Month 3–6",
      features:
        "Predictive Maintenance, Quality Defect Prediction, Throughput Forecasting, Computer Vision Inspection",
      impact: "Proactive operations; 20–30% downtime reduction",
      color: "bg-green-50 border-green-300",
      badge: "bg-green-200 text-green-800",
    },
    {
      phase: "Phase 3",
      title: "Copilot",
      timeline: "Month 6–9",
      features:
        "Plant Copilot (RAG), NL-to-SQL Full Implementation, Auto-generated Reports, Maintenance AI Assistant",
      impact: "Every operator and manager works 40% faster",
      color: "bg-green-50 border-green-400",
      badge: "bg-green-300 text-green-900",
    },
    {
      phase: "Phase 4",
      title: "Agents",
      timeline: "Month 9–15",
      features: "Maintenance Agent, Energy Agent, Quality Guardian Agent",
      impact: "First truly autonomous operations; 35% energy savings",
      color: "bg-green-50 border-green-500",
      badge: "bg-green-500 text-white",
    },
    {
      phase: "Phase 5",
      title: "Autonomous",
      timeline: "Month 15–24",
      features:
        "Multi-Agent Orchestration (Factory Brain), Digital Twin, RL-based Scheduling, Full Agentic Operations",
      impact: "Self-optimizing factory; competitive moat achieved",
      color: "bg-green-600 border-green-600",
      badge: "bg-white text-green-700",
      dark: true,
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

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium">
                AI Process Automation
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black">
                Automate Your Business{" "}
                <span className="text-green-600">Processes</span> with AI
              </h1>

              <p className="text-lg text-gray-700 max-w-xl">
                Transform manual workflows into intelligent automated systems.
                Reduce operational costs, eliminate human errors, and increase
                productivity using advanced AI-driven automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 px-8"
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

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-600 pt-6">
                <div>✔ Smart Workflow Automation</div>
                <div>✔ Real-time Insights</div>
                <div>✔ Scalable Infrastructure</div>
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
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
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
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Why Implement AI in Your Process Automation?
              </h2>

              <p className="text-lg text-gray-700 max-w-lg">
                Traditional systems are reactive — they show you what happened.
                AI-driven process automation goes further by enabling
                intelligent decision-making, predicting outcomes, and optimizing
                workflows in real time.
              </p>

              <div className="space-y-6">
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
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 max-w-md">
                Implementing AI in process automation transforms traditional
                workflows into smart, self-optimizing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW AI TRANSFORMS ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              How AI Transforms Your Processes
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              From manual workflows to intelligent, automated systems — see how
              AI revolutionizes your operations step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {step.icon}
                  <h3 className="text-green-600 font-bold text-xl">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== KEY BENEFITS ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Key Benefits of AI Process Automation
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Implementing AI in your workflows delivers tangible results for
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-green-600 font-bold text-xl">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AI TECHNOLOGY STACK ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI Technology Stack
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              A comprehensive suite of AI technologies working together — each
              layer purpose-built to tackle specific challenges across your
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTechStack.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-green-600 font-bold text-sm leading-tight">
                    {item.tech}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.what}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-medium">Used in:</p>
                  <p className="text-xs text-gray-600 mt-1">{item.where}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AGENTIC AI ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-4">
                  Agentic AI
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Autonomous AI Agents That Act — Not Just Advise
                </h2>
              </div>

              <p className="text-lg text-gray-700">
                Agentic AI goes beyond answering questions. Agents perceive
                their environment, make decisions, execute actions, observe
                results, and loop — autonomously achieving goals without human
                intervention at every step.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: "Goals",
                    desc: "Each agent is assigned specific operational goals to achieve",
                  },
                  {
                    label: "Tools",
                    desc: "Agents use real tools — ERP APIs, SCADA systems, scheduling engines",
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
                      <span className="text-gray-700">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Agent Cards */}
            <div className="grid grid-cols-1 gap-5">
              {agentTypes.map((agent, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-white rounded-xl p-3 shadow-sm">
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="text-green-600 font-bold text-lg mb-1">
                      {agent.agent}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AI TOOLS & TECHNOLOGIES ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI Tools & Technologies in Process Automation
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Modern AI-powered process automation uses a combination of RPA,
              ML, and analytics tools to optimize workflows and drive
              efficiency.
            </p>
          </div>

          <div className="mb-12">
            <AIIconDashboard />
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Powered by the Latest AI Innovations
            </h3>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              We leverage modern AI frameworks, advanced LLM ecosystems, and
              scalable machine learning tools to deliver intelligent,
              future-ready automation solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl shadow-md">
              Delivering Intelligent Automation with Modern AI
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IMPLEMENTATION ROADMAP ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI Implementation Roadmap
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              A phased approach that delivers value from day one — building
              toward a fully autonomous, self-optimizing operation.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-green-200 z-0 mx-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border-2 p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg ${item.color}`}
                >
                  {/* Phase badge + dot */}
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className={`hidden lg:block w-4 h-4 rounded-full border-2 border-white shadow ${item.dark ? "bg-white" : "bg-green-600"} self-center mb-1`}
                    />
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.badge}`}
                    >
                      {item.phase}
                    </span>
                    <span
                      className={`text-xs font-medium ${item.dark ? "text-green-100" : "text-gray-500"}`}
                    >
                      {item.timeline}
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-xl ${item.dark ? "text-white" : "text-black"}`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${item.dark ? "text-green-100" : "text-gray-700"}`}
                  >
                    {item.features}
                  </p>

                  <div
                    className={`mt-auto pt-4 border-t ${item.dark ? "border-green-500" : "border-green-200"}`}
                  >
                    <p
                      className={`text-xs font-semibold ${item.dark ? "text-green-200" : "text-green-700"}`}
                    >
                      Impact
                    </p>
                    <p
                      className={`text-xs mt-1 ${item.dark ? "text-white" : "text-gray-700"}`}
                    >
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision statement */}
          <div className="mt-12 bg-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The Ultimate Vision
            </h3>
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
