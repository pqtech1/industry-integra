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

const AiEnergyAutomation = () => {
  const steps = [
    {
      title: "Real-Time Monitoring",
      description:
        "AI aggregates data from smart meters, sensors, and IoT devices across your entire energy infrastructure in real time.",
      icon: <Database className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Consumption Analysis",
      description:
        "Advanced algorithms analyze usage patterns to detect inefficiencies, anomalies, and hidden waste.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Intelligent Control",
      description:
        "AI automatically adjusts HVAC, lighting, machinery, and renewable sources for optimal performance.",
      icon: <Cpu className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Forecasting",
      description:
        "Forecasts energy demand, equipment failures, peak pricing, and weather impact before they occur.",
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Dynamic Optimization",
      description:
        "Continuously fine-tunes energy strategies based on real-time data, market prices, and weather conditions.",
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Scalable Integration",
      description:
        "Seamlessly scales across multiple sites, integrates renewables, batteries, and microgrids as your needs grow.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: "Reduce Energy Costs",
      description:
        "Optimize consumption and avoid peak charges to significantly lower utility bills.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Prevent Downtime",
      description:
        "Predictive maintenance stops equipment failures and unplanned outages before they happen.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Boost Efficiency",
      description:
        "Intelligent automation maximizes energy use across all operations and assets.",
      icon: <Clock className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Achieve Sustainability",
      description:
        "Automatically balance renewables, reduce carbon emissions, and meet ESG targets.",
      icon: <Users className="h-8 w-8 text-green-600" />,
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
                AI Energy Automation
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black">
                Automate Your Energy{" "}
                <span className="text-green-600">Management</span> with AI
              </h1>

              <p className="text-lg text-gray-700 max-w-xl">
                Transform manual energy tracking into intelligent automated
                systems. Reduce costs, eliminate waste, ensure reliability, and
                achieve your sustainability goals using advanced AI-driven
                energy automation.
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
                <div>✔ Real-Time Energy Monitoring</div>
                <div>✔ Predictive Optimization</div>
                <div>✔ Renewable Integration</div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-3xl blur-3xl opacity-20" />
              <img
                src="ai-solutions/ai-energy-automation.webp"
                alt="AI Energy Automation"
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
                alt="Why use AI for Energy Automation"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Why Implement AI in Your Energy Automation?
              </h2>

              <p className="text-lg text-gray-700 max-w-lg">
                AI-powered energy automation goes far beyond traditional systems
                by enabling real-time optimization, predictive maintenance, and
                intelligent renewable integration.
              </p>

              <div className="space-y-6">
                {[
                  "Automates monitoring and control of energy systems across buildings, factories, and renewable installations.",
                  "Provides predictive demand forecasting and maintenance alerts to prevent costly downtime.",
                  "Integrates seamlessly with existing BMS, SCADA, smart meters, and IoT platforms.",
                  "Scales effortlessly to manage expanding renewable assets and multi-site operations.",
                  "Delivers real-time dashboards and instant alerts for immediate action.",
                  "Reduces energy consumption by identifying and eliminating waste in real time.",
                  "Ensures compliance with energy regulations, ESG reporting, and carbon reduction goals.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 max-w-md">
                AI turns your energy infrastructure into a smart,
                self-optimizing system that continuously reduces costs and
                carbon emissions.
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
              How AI Transforms Your Energy Management
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              From manual monitoring to intelligent, self-optimizing energy
              systems — see how AI revolutionizes your operations step by step.
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
              Key Benefits of AI Energy Automation
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Implementing AI in your energy operations delivers measurable
              results.
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
              AI Tools & Technologies in Energy Automation
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Modern AI-powered energy automation combines IoT, machine
              learning, predictive analytics, and optimization engines to
              deliver intelligent energy management.
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
              We use advanced forecasting models, real-time optimization
              algorithms, and scalable AI frameworks to deliver future-ready
              energy automation solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl shadow-md">
              Delivering Intelligent Energy Automation
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiEnergyAutomation;
