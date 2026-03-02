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
  Zap,
  Sun,
  Battery,
  Wind,
  Gauge,
  LineChart,
  Brain,
  Cloud,
  AlertTriangle,
  Target,
  Award,
  ChevronRight,
  Calendar,
} from "lucide-react";

import AIIconDashboard from "../../sections/AIIconDashboard";

const AiEnergyAutomation = () => {
  const steps = [
    {
      title: "Real-Time Monitoring",
      description:
        "AI aggregates data from smart meters, sensors, and IoT devices across your entire energy infrastructure in real time, capturing consumption patterns at millisecond resolution.",
      icon: <Database className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Consumption Analysis",
      description:
        "Advanced algorithms analyze usage patterns to detect inefficiencies, anomalies, and hidden waste using unsupervised anomaly detection models.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Intelligent Control",
      description:
        "AI automatically adjusts HVAC, lighting, machinery, and renewable sources for optimal performance using reinforcement learning agents.",
      icon: <Cpu className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Forecasting",
      description:
        "Forecasts energy demand, equipment failures, peak pricing, and weather impact before they occur using TimeGPT and N-BEATS models.",
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Dynamic Optimization",
      description:
        "Continuously fine-tunes energy strategies based on real-time data, market prices, and weather conditions with RL-based load balancing.",
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Scalable Integration",
      description:
        "Seamlessly scales across multiple sites, integrates renewables, batteries, and microgrids as your needs grow with multi-site orchestration.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: "Reduce Energy Costs",
      description:
        "Optimize consumption and avoid peak charges to significantly lower utility bills. Target 25-35% reduction in peak demand charges.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Prevent Downtime",
      description:
        "Predictive maintenance stops equipment failures and unplanned outages before they happen with ML-based anomaly detection.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Boost Efficiency",
      description:
        "Intelligent automation maximizes energy use across all operations and assets through continuous optimization loops.",
      icon: <Clock className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Achieve Sustainability",
      description:
        "Automatically balance renewables, reduce carbon emissions, and meet ESG targets with dynamic emission factor tracking.",
      icon: <Users className="h-8 w-8 text-green-600" />,
    },
  ];

  const aiEnergyTechStack = [
    {
      tech: "Reinforcement Learning (RL)",
      what: "Learn optimal control policies through trial and reward",
      where: "Energy Load Balancing, Peak Demand Shaving, Battery Optimization",
      icon: <Brain className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Time-Series Forecasting",
      what: "Predict future consumption and generation patterns",
      where:
        "Energy Demand Forecasting, Solar Generation Prediction, Price Forecasting",
      icon: <LineChart className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Anomaly Detection",
      what: "Identify unusual patterns in power quality and consumption",
      where:
        "Power Quality Monitoring, Equipment Fault Detection, Energy Waste Identification",
      icon: <AlertTriangle className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Computer Vision",
      what: "Analyze thermal imaging and equipment status",
      where:
        "Thermal Leak Detection, Solar Panel Inspection, Safety Monitoring",
      icon: <Activity className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Multi-Agent Systems",
      what: "Coordinate multiple energy assets autonomously",
      where:
        "Microgrid Management, Multi-Site Energy Orchestration, VPP Operations",
      icon: <Users className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Weather ML Models",
      what: "Integrate hyperlocal weather forecasts into energy planning",
      where:
        "Renewable Generation Forecasting, HVAC Pre-conditioning, Storm Impact Prediction",
      icon: <Cloud className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Optimization Engines",
      what: "Solve complex energy allocation problems in real-time",
      where: "Battery Dispatch, Load Shifting, Demand Response Optimization",
      icon: <Target className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "NLP / Analytics",
      what: "Extract insights from utility bills and energy reports",
      where:
        "Utility Bill Validation, ESG Report Generation, Compliance Documentation",
      icon: <Database className="h-6 w-6 text-green-600" />,
    },
  ];

  const energySources = [
    {
      name: "Solar PV",
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      aiApplication:
        "Generation forecasting, panel cleaning optimization, performance degradation detection",
    },
    {
      name: "Wind Turbines",
      icon: <Wind className="h-8 w-8 text-blue-500" />,
      aiApplication:
        "Yaw optimization, predictive maintenance, wake effect modeling",
    },
    {
      name: "Battery Storage",
      icon: <Battery className="h-8 w-8 text-green-600" />,
      aiApplication:
        "Charge/discharge optimization, state-of-health monitoring, arbitrage trading",
    },
    {
      name: "Grid Connection",
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      aiApplication: "Peak shaving, demand response, power quality improvement",
    },
  ];

  const agenticEnergyAgents = [
    {
      agent: "Energy Optimization Agent",
      description:
        "Monitors energy consumption, real-time prices, and production needs every 15 minutes — controlling loads, batteries, and schedules to minimize cost and carbon autonomously.",
      icon: <Zap className="h-7 w-7 text-green-600" />,
    },
    {
      agent: "Battery Storage Agent",
      description:
        "Decides when to charge (cheapest rates + excess solar) and when to discharge (peak prices, demand response) while monitoring battery health for longevity.",
      icon: <Battery className="h-7 w-7 text-green-600" />,
    },
    {
      agent: "HVAC Optimization Agent",
      description:
        "Predicts zone occupancy and thermal behavior to optimize setpoints, pre-cool/heat spaces, and detect equipment faults before energy waste occurs.",
      icon: <Activity className="h-7 w-7 text-green-600" />,
    },
    {
      agent: "Demand Response Agent",
      description:
        "Participates in demand response events automatically, shedding non-critical loads and dispatching battery storage to maximize grid service revenue.",
      icon: <Target className="h-7 w-7 text-green-600" />,
    },
  ];

  const forecastingModels = [
    {
      model: "Nixtla TimeGPT",
      application: "Zero-shot energy forecasting, consumption prediction",
      accuracy: "State-of-the-art, no training required",
    },
    {
      model: "Facebook Prophet",
      application: "Seasonality-aware forecasting, weekly/daily patterns",
      accuracy: "Interpretable, business-friendly outputs",
    },
    {
      model: "N-BEATS / N-HiTS",
      application: "Multi-horizon production forecasting",
      accuracy: "Neural forecasting architecture",
    },
    {
      model: "LSTM Networks",
      application: "Custom consumption pattern learning",
      accuracy: "High accuracy with historical data",
    },
  ];

  const carbonFeatures = [
    "Dynamic grid emission factor via Electricity Maps API",
    "Scope 1/2/3 decomposition for GHG Protocol compliance",
    "Real-time carbon intensity tracking",
    "Automated ESG report generation",
    "What-if scenario planning for emissions reduction",
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "Month 1–3",
      features:
        "Smart Meter Integration, Anomaly Detection, Basic Monitoring, Alert Correlation",
      impact: "Immediate visibility, 10-15% waste reduction",
      color: "bg-green-50 border-green-200",
      badge: "bg-green-100 text-green-700",
    },
    {
      phase: "Phase 2",
      title: "Forecasting",
      timeline: "Month 3–6",
      features:
        "Demand Forecasting, Price Prediction, Renewable Generation Forecasting, Weather Integration",
      impact: "Proactive planning, 15-20% cost optimization",
      color: "bg-green-50 border-green-300",
      badge: "bg-green-200 text-green-800",
    },
    {
      phase: "Phase 3",
      title: "Optimization",
      timeline: "Month 6–9",
      features:
        "RL-based Load Balancing, Battery Dispatch, HVAC Optimization, Peak Shaving",
      impact: "25-35% peak demand reduction",
      color: "bg-green-50 border-green-400",
      badge: "bg-green-300 text-green-900",
    },
    {
      phase: "Phase 4",
      title: "Autonomous",
      timeline: "Month 9–15",
      features:
        "Multi-Agent Coordination, VPP Integration, Carbon Tracking, Predictive Maintenance",
      impact: "Fully autonomous energy management",
      color: "bg-green-50 border-green-500",
      badge: "bg-green-500 text-white",
    },
    {
      phase: "Phase 5",
      title: "Ecosystem",
      timeline: "Month 15–24",
      features:
        "Multi-Site Orchestration, Energy Trading, Grid Services, Circular Economy",
      impact: "Energy-positive operations",
      color: "bg-green-600 border-green-600",
      badge: "bg-white text-green-700",
      dark: true,
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
                systems. Reduce costs by 25-35%, eliminate waste, ensure
                reliability, and achieve your sustainability goals using
                advanced AI-driven energy automation with reinforcement
                learning.
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
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" /> RL Load Balancing
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" /> Predictive
                  Analytics
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" /> Carbon
                  Intelligence
                </div>
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
                Traditional energy management systems are reactive — they show
                you what happened. AI-powered energy automation turns your
                infrastructure into a predictive, self-optimizing smart grid
                that actively reduces costs and carbon.
              </p>

              <div className="space-y-6">
                {[
                  "Automates monitoring and control of energy systems across buildings, factories, and renewable installations using reinforcement learning agents that continuously optimize.",
                  "Provides predictive demand forecasting with TimeGPT and weather ML models, enabling proactive load management and peak shaving.",
                  "Integrates seamlessly with existing BMS, SCADA, smart meters, and IoT platforms through standard protocols and APIs.",
                  "Scales effortlessly to manage expanding renewable assets and multi-site operations with multi-agent orchestration.",
                  "Delivers real-time dashboards and instant alerts with AI-powered anomaly detection for immediate action on power quality issues.",
                  "Reduces energy consumption by 25-35% through intelligent load balancing and automated demand response participation.",
                  "Ensures compliance with energy regulations, ESG reporting, and carbon reduction goals using dynamic emission factor tracking.",
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

      {/* ==================== ENERGY SOURCES & AI ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI-Powered Energy Assets
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Intelligent automation for every energy source in your portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {energySources.map((source, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-white rounded-2xl shadow-sm mb-4">
                    {source.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">
                    {source.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {source.aiApplication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== KEY BENEFITS ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Key Benefits of AI Energy Automation
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Implementing AI in your energy operations delivers measurable
              results with proven ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300"
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

      {/* ==================== AGENTIC ENERGY AGENTS ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-4">
                  Agentic AI for Energy
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Autonomous Energy Agents That Optimize 24/7
                </h2>
              </div>

              <p className="text-lg text-gray-700">
                Reinforcement Learning agents continuously monitor, decide, and
                act to optimize your energy ecosystem — responding to price
                signals, weather changes, and demand patterns in real-time
                without human intervention.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: "Real-time decisions",
                    desc: "Agents optimize every 15 minutes based on live data",
                  },
                  {
                    label: "Multi-objective optimization",
                    desc: "Balance cost, carbon, and reliability simultaneously",
                  },
                  {
                    label: "Continuous learning",
                    desc: "Agents improve strategies over time through experience",
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
              {agenticEnergyAgents.map((agent, index) => (
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

      {/* ==================== AI TECHNOLOGY STACK ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI Technology Stack for Energy
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              A comprehensive suite of AI technologies working together — each
              layer purpose-built to tackle specific energy challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiEnergyTechStack.map((item, index) => (
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

      {/* ==================== FORECASTING MODELS ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                State-of-the-Art{" "}
                <span className="text-green-600">Forecasting</span> Models
              </h2>
              <p className="text-lg text-gray-700">
                Predict energy consumption, renewable generation, and market
                prices with unprecedented accuracy using foundation models and
                neural forecasting.
              </p>
              <div className="space-y-4">
                {forecastingModels.map((model, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <LineChart className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-black">
                        {model.model}
                      </span>
                      <p className="text-sm text-gray-600">
                        {model.application} — {model.accuracy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-black mb-4">
                Forecast Accuracy
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Hourly Consumption</span>
                    <span className="font-semibold">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "98.5%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Solar Generation</span>
                    <span className="font-semibold">96.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "96.2%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Peak Demand</span>
                    <span className="font-semibold">94.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "94.8%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Price Forecasting</span>
                    <span className="font-semibold">93.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "93.5%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CARBON INTELLIGENCE ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium mb-4">
              Carbon Intelligence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI-Powered Sustainability
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Go beyond simple kWh x factor calculations with dynamic carbon
              tracking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-black mb-6">
                Dynamic Emission Tracking
              </h3>
              <ul className="space-y-4">
                {carbonFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-600 rounded-3xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Real-World Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">35%</div>
                  <p className="text-green-100">
                    Average carbon reduction achieved
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-green-100">
                    GHG Protocol compliant reporting
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <p className="text-green-100">
                    Hourly emission factor tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AI TOOLS & TECHNOLOGIES ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI Tools & Technologies in Energy Automation
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Modern AI-powered energy automation combines reinforcement
              learning, predictive analytics, and optimization engines to
              deliver intelligent energy management.
            </p>
          </div>

          <div className="mb-12">
            <AIIconDashboard />
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-12 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Powered by the Latest AI Innovations
            </h3>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              We use Stable-Baselines3 for reinforcement learning, Nixtla
              TimeGPT for forecasting, and custom optimization engines to
              deliver future-ready energy automation solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl shadow-md">
              Delivering Intelligent Energy Automation with RL
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IMPLEMENTATION ROADMAP ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Energy AI Implementation Roadmap
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              A phased approach that delivers value from day one — building
              toward a fully autonomous, carbon-positive energy operation.
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
              The Ultimate Energy Vision
            </h3>
            <p className="text-green-100 max-w-3xl mx-auto text-lg leading-relaxed">
              A facility at full AI capability is a self-aware, self-optimizing
              energy ecosystem where AI agents continuously balance loads, trade
              excess power, participate in grid services, and drive toward
              carbon neutrality — while your team focuses on core business
              growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiEnergyAutomation;
