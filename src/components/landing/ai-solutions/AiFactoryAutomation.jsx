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
} from "lucide-react";

import AIIconDashboard from "../../sections/AIIconDashboard";

const AiFactoryAutomation = () => {
  const steps = [
    {
      title: "Real-Time Data Acquisition",
      description:
        "AI collects massive streams of data from sensors, PLCs, machines, robots, and IoT devices across the factory floor in real time.",
      icon: <Database className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Process Intelligence",
      description:
        "Machine learning analyzes production patterns, detects anomalies, identifies bottlenecks, and uncovers hidden inefficiencies.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Autonomous Execution",
      description:
        "AI dynamically controls robots, CNC machines, conveyors, AGVs/AMRs, and process parameters for optimal throughput.",
      icon: <Cpu className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Maintenance",
      description:
        "AI forecasts equipment failures, tool wear, and quality drift — scheduling maintenance before breakdowns occur.",
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Self-Optimizing Production",
      description:
        "Closed-loop AI continuously refines schedules, parameters, energy use, and material flow based on live data and demand signals.",
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Scalable Smart Factory",
      description:
        "AI scales seamlessly across production lines, plants, or global networks — integrating new machines, cobots, and digital twins.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: "Minimize Downtime",
      description:
        "Predictive maintenance reduces unplanned stops by 30–50%, keeping lines running longer and more reliably.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Cut Operational Costs",
      description:
        "Optimize energy, raw materials, labor allocation, and maintenance — achieving 10–30% overall cost reduction.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Improve Quality & Yield",
      description:
        "AI-powered vision and analytics catch defects early, reduce scrap, and increase first-pass yield significantly.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Increase Throughput",
      description:
        "Intelligent scheduling, real-time adjustments, and bottleneck elimination boost overall equipment effectiveness (OEE).",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
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
                AI Factory Automation
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black">
                Automate Your Factory{" "}
                <span className="text-green-600">Operations</span> with AI
              </h1>

              <p className="text-lg text-gray-700 max-w-xl">
                Transform traditional production lines into intelligent,
                predictive, and self-optimizing smart factories. Minimize
                downtime, reduce costs, improve quality & yield, and maximize
                throughput using advanced AI-driven industrial automation.
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
                <div>✔ Predictive Maintenance</div>
                <div>✔ Real-Time Process Optimization</div>
                <div>✔ Zero-Defect Quality Control</div>
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
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
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
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Why Implement AI in Your Factory Automation?
              </h2>

              <p className="text-lg text-gray-700 max-w-lg">
                AI-powered factory automation goes far beyond traditional PLC &
                SCADA systems by delivering predictive intelligence, real-time
                adaptive control, autonomous optimization, and zero-defect
                quality — the foundation of true Industry 4.0 smart
                manufacturing.
              </p>

              <div className="space-y-6">
                {[
                  "Predicts machine failures hours or days in advance — dramatically reducing unplanned downtime and emergency repairs.",
                  "Dynamically adjusts production parameters, speeds, sequences, and robot paths in real time to maximize throughput.",
                  "Integrates seamlessly with MES, ERP, SCADA, PLCs, robots, cobots, AGVs, and thousands of industrial IoT sensors.",
                  "Scales across discrete, batch, or continuous processes — from single lines to multi-site global operations.",
                  "Enables 100% automated inline quality inspection using computer vision and AI analytics — catching defects instantly.",
                  "Optimizes energy consumption, raw material usage, and waste — lowering OPEX while supporting sustainability goals.",
                  "Provides real-time OEE dashboards, anomaly alerts, root-cause analysis, and AI-recommended actions for operators & managers.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 max-w-md">
                AI turns your factory into a connected, intelligent,
                self-improving system that continuously drives higher OEE, lower
                costs, and superior quality.
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
              How AI Transforms Your Factory Floor
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              From rigid automation to adaptive, predictive, and self-optimizing
              smart manufacturing — see how AI revolutionizes production step by
              step.
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
              Key Benefits of AI Factory Automation
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Implementing AI on the factory floor delivers measurable gains in
              uptime, cost, quality, and productivity.
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

      {/* ==================== AI TOOLS & TECHNOLOGIES ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI Tools & Technologies in Factory Automation
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Modern AI-powered factory automation combines industrial IoT, edge
              computing, computer vision, digital twins, predictive analytics,
              reinforcement learning, and real-time optimization engines to
              create truly intelligent factories.
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
              We leverage advanced ML models, digital twin simulations,
              real-time anomaly detection, computer vision, and scalable AI
              frameworks to deliver future-ready factory automation solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl shadow-md">
              Delivering Intelligent Factory Automation
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiFactoryAutomation;
