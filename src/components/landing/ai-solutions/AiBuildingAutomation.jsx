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

const AiBuildingAutomation = () => {
  const steps = [
    {
      title: "Real-Time Data Collection",
      description:
        "AI aggregates data from sensors, smart meters, HVAC, lighting, and occupancy systems across the entire building in real time.",
      icon: <Database className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Intelligent Analysis",
      description:
        "Advanced AI analyzes patterns to detect inefficiencies, anomalies, and opportunities for optimization in HVAC, lighting, and energy use.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Autonomous Control",
      description:
        "AI dynamically adjusts HVAC, lighting, ventilation, blinds, and other systems based on occupancy, weather, and real-time conditions.",
      icon: <Cpu className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Maintenance",
      description:
        "AI forecasts equipment failures, performance degradation, and maintenance needs before issues occur, reducing downtime.",
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Continuous Optimization",
      description:
        "Systems self-improve over time — learning from data, weather patterns, usage trends, and occupant feedback to maximize efficiency.",
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Scalable Smart Building",
      description:
        "AI seamlessly scales across multiple buildings, floors, or campuses while integrating new IoT devices and renewable sources.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: "Lower Energy Costs",
      description:
        "Optimize HVAC, lighting, and overall consumption — achieve 15-30% energy savings through intelligent, demand-based control.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Reliability",
      description:
        "Prevent unexpected breakdowns with early fault detection and proactive maintenance, extending equipment life.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Enhanced Comfort",
      description:
        "Deliver personalized indoor environments — right temperature, lighting, and air quality based on occupancy and preferences.",
      icon: <Users className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Sustainability Goals",
      description:
        "Reduce carbon footprint, meet ESG targets, and support green building certifications through data-driven efficiency.",
      icon: <Clock className="h-8 w-8 text-green-600" />,
    },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-28">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="ai-solutions/ai-building-automation.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-white">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium">
                AI Building Automation
              </Badge>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                Automate Your Building{" "}
                <span className="text-green-400">Operations</span> with AI
              </h1>

              <p className="text-lg max-w-xl text-gray-200">
                Transform traditional building management into intelligent,
                self-optimizing systems. Reduce energy costs, enhance occupant
                comfort, and enable predictive maintenance.
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
                  className="px-8 border-white text-white hover:bg-white hover:text-black"
                >
                  <Sparkles className="mr-2 h-4 w-4 text-green-400" />
                  View Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300 pt-6">
                <div>✔ Intelligent HVAC & Lighting Control</div>
                <div>✔ Predictive Maintenance</div>
                <div>✔ Occupant-Centric Comfort</div>
              </div>
            </div>

            {/* Right side empty or decorative */}
            <div></div>
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
                alt="Why use AI for Building Automation"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Why Implement AI in Your Building Automation?
              </h2>

              <p className="text-lg text-gray-700 max-w-lg">
                AI-powered building automation goes beyond traditional BMS by
                delivering predictive intelligence, real-time optimization,
                personalized comfort, and autonomous decision-making across
                HVAC, lighting, security, and energy systems.
              </p>

              <div className="space-y-6">
                {[
                  "Automates HVAC, lighting, ventilation, and shading based on real occupancy, weather, and usage patterns.",
                  "Predicts equipment failures and performance issues — enabling proactive maintenance and minimizing downtime.",
                  "Integrates seamlessly with existing BMS, IoT sensors, smart meters, access control, and fire systems.",
                  "Scales effortlessly across single buildings, campuses, or global portfolios without proportional staff increase.",
                  "Provides real-time dashboards, anomaly alerts, and actionable insights for facility teams.",
                  "Reduces energy consumption and operational costs through continuous, data-driven optimization.",
                  "Supports ESG compliance, carbon reporting, LEED/BREEAM certification, and net-zero goals.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 max-w-md">
                AI transforms your building into a smart, responsive,
                self-learning environment that continuously improves comfort,
                efficiency, and sustainability.
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
              How AI Transforms Your Building Operations
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              From rule-based control to intelligent, predictive, and adaptive
              building management — see how AI revolutionizes every aspect step
              by step.
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
              Key Benefits of AI Building Automation
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Implementing AI in your building delivers measurable improvements
              in cost, comfort, reliability, and sustainability.
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
              AI Tools & Technologies in Building Automation
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Modern AI-powered building automation combines IoT, machine
              learning, digital twins, predictive analytics, and real-time
              optimization to create truly intelligent, adaptive buildings.
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
              We leverage advanced ML models, digital twin technology, real-time
              anomaly detection, and scalable AI frameworks to deliver
              future-ready building automation solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl shadow-md">
              Delivering Intelligent Building Automation
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiBuildingAutomation;
