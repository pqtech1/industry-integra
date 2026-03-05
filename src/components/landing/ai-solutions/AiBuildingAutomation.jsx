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
  Wind,
  Thermometer,
  Sun,
  Shield,
  Home,
  Building2,
  Layers,
  Zap,
  Gauge,
  LineChart,
  Brain,
  Eye,
  Calendar,
  Target,
  Award,
  Cloud,
  Droplets,
  ChevronRight,
  Fan,
  Lightbulb,
  Lock,
  AlertTriangle,
  Camera,
  Wifi,
  Radio,
  Cable,
  Bluetooth,

  Waves,
} from "lucide-react";

import AIIconDashboard from "../../sections/AIIconDashboard";

const AiBuildingAutomation = () => {
  const steps = [
    {
      title: "Real-Time Data Collection",
      description:
        "AI aggregates data from sensors, smart meters, HVAC, lighting, and occupancy systems across the entire building in real time at millisecond resolution.",
      icon: <Database className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Intelligent Analysis",
      description:
        "Advanced AI analyzes patterns to detect inefficiencies, anomalies, and opportunities for optimization in HVAC, lighting, and energy use using unsupervised learning.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Autonomous Control",
      description:
        "AI dynamically adjusts HVAC, lighting, ventilation, blinds, and other systems based on occupancy, weather, and real-time conditions using Model Predictive Control.",
      icon: <Cpu className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Maintenance",
      description:
        "AI forecasts equipment failures, performance degradation, and maintenance needs before issues occur using time-series anomaly detection, reducing downtime by 30-40%.",
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Continuous Optimization",
      description:
        "Systems self-improve over time — learning from data, weather patterns, usage trends, and occupant feedback to maximize efficiency through reinforcement learning.",
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Scalable Smart Building",
      description:
        "AI seamlessly scales across multiple buildings, floors, or campuses while integrating new IoT devices and renewable sources with multi-agent orchestration.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: "Lower Energy Costs",
      description:
        "Optimize HVAC, lighting, and overall consumption — achieve 25-35% energy savings through intelligent, demand-based control and peak load shaving.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Reliability",
      description:
        "Prevent unexpected breakdowns with early fault detection and proactive maintenance, extending equipment life by 20-30% through AI-driven diagnostics.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Enhanced Comfort",
      description:
        "Deliver personalized indoor environments — right temperature, lighting, and air quality based on occupancy patterns and individual preferences.",
      icon: <Users className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Sustainability Goals",
      description:
        "Reduce carbon footprint by 35%, meet ESG targets, and support green building certifications (LEED, BREEAM) through data-driven efficiency.",
      icon: <Clock className="h-8 w-8 text-green-600" />,
    },
  ];

  const buildingSystems = [
    {
      system: "HVAC Optimization",
      icon: <Wind className="h-8 w-8 text-green-600" />,
      aiApplication:
        "Model Predictive Control, zone prediction, fault detection, pre-cooling optimization",
      savings: "30-40% HVAC energy reduction",
    },
    {
      system: "Smart Lighting",
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      aiApplication:
        "Occupancy detection via computer vision, daylight harvesting, predictive scheduling",
      savings: "40-50% lighting energy savings",
    },
    {
      system: "Access & Security",
      icon: <Lock className="h-8 w-8 text-blue-500" />,
      aiApplication:
        "Anomaly detection in access patterns, facial recognition, predictive threat analysis",
      savings: "60% faster incident response",
    },
    {
      system: "Indoor Air Quality",
      icon: <Droplets className="h-8 w-8 text-cyan-500" />,
      aiApplication:
        "IAQ prediction, ventilation optimization, CO2-based demand control",
      savings: "30% improvement in air quality",
    },
  ];

  const aiBuildingTechStack = [
    {
      tech: "Model Predictive Control (MPC)",
      what: "Optimize HVAC control over rolling horizon using learned thermal models",
      where: "HVAC Optimization, Pre-cooling, Zone Temperature Control",
      icon: <Brain className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Computer Vision",
      what: "Detect real occupancy, not just motion, using edge cameras",
      where: "Lighting Control, Space Utilization, Safety Monitoring",
      icon: <Eye className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Time-Series ML",
      what: "Predict occupancy, energy demand, and equipment failures",
      where: "Occupancy Forecasting, Energy Prediction, Predictive Maintenance",
      icon: <LineChart className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Fault Detection & Diagnostics",
      what: "Detect HVAC faults before they cause failures or energy waste",
      where: "Stuck valves, refrigerant leaks, coil fouling, sensor drift",
      icon: <Gauge className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Reinforcement Learning",
      what: "Learn optimal control policies through trial and reward",
      where: "Multi-zone temperature balancing, demand response",
      icon: <RefreshCcw className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Digital Twin",
      what: "Virtual replica of building for simulation and optimization",
      where: "What-if analysis, retrofit planning, compliance simulation",
      icon: <Building2 className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "Anomaly Detection",
      what: "Identify unusual patterns in energy, occupancy, and equipment",
      where: "Energy waste, equipment degradation, security threats",
      icon: <Activity className="h-6 w-6 text-green-600" />,
    },
    {
      tech: "NLP / Voice Control",
      what: "Natural language interface for building management",
      where: "Occupant requests, facility manager queries, automated responses",
      icon: <Database className="h-6 w-6 text-green-600" />,
    },
  ];

  const buildingZones = [
    {
      zone: "Office Spaces",
      metrics: [
        "Occupancy-based HVAC",
        "Task tuning lighting",
        "Personal comfort profiles",
      ],
    },
    {
      zone: "Conference Rooms",
      metrics: [
        "Booking-integrated preconditioning",
        "AV system monitoring",
        "Real-time utilization tracking",
      ],
    },
    {
      zone: "Common Areas",
      metrics: [
        "Foot traffic optimization",
        "Cleaning schedule optimization",
        "Security monitoring",
      ],
    },
    {
      zone: "Data Centers",
      metrics: ["Precision cooling", "IT load forecasting", "PUE optimization"],
    },
  ];

  const hvacFaults = [
    "Stuck dampers/valves - 25% energy waste",
    "Refrigerant leaks - 20% efficiency loss",
    "Coil fouling - 15% heat transfer reduction",
    "Sensor drift - False comfort complaints",
    "Filter clogging - Increased fan energy",
  ];

  const occupancyModels = [
    {
      model: "MobileNetV3 (Edge CV)",
      application: "Real-time occupancy detection from ceiling cameras",
      benefit: "No cloud dependency, privacy-preserving",
    },
    {
      model: "LSTM Networks",
      application: "30-min ahead occupancy prediction",
      benefit: "Enables pre-conditioning before shifts",
    },
    {
      model: "Transformer Models",
      application: "Weekly occupancy pattern learning",
      benefit: "Adapts to holidays and events",
    },
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "Month 1–3",
      features:
        "Sensor Integration, Basic Monitoring, Alert Correlation, Energy Benchmarking",
      impact: "Immediate visibility, 10-15% energy reduction",
    },
    {
      phase: "Phase 2",
      title: "Prediction",
      timeline: "Month 3–6",
      features:
        "Occupancy Forecasting, HVAC Fault Detection, Predictive Maintenance Alerts",
      impact: "20-30% maintenance cost reduction",
    },
    {
      phase: "Phase 3",
      title: "Optimization",
      timeline: "Month 6–9",
      features:
        "MPC-based HVAC Control, Smart Lighting Automation, Demand Response",
      impact: "25-35% peak demand reduction",
    },
    {
      phase: "Phase 4",
      title: "Autonomous",
      timeline: "Month 9–15",
      features:
        "Multi-Zone Coordination, Comfort Personalization, Renewable Integration",
      impact: "Fully autonomous building operations",
    },
    {
      phase: "Phase 5",
      title: "Ecosystem",
      timeline: "Month 15–24",
      features:
        "Digital Twin, Portfolio Optimization, Grid Interactive Building",
      impact: "Net-zero ready operations",
    },
  ];

  const buildingKPIs = [
    {
      category: "Energy Performance",
      metrics: [
        "EUI (Energy Use Intensity) - kWh/m²/year",
        "Peak Demand - kW",
        "HVAC Efficiency - kW/ton",
        "Lighting Power Density - W/m²",
      ],
    },
    {
      category: "Occupant Comfort",
      metrics: [
        "PMV (Predicted Mean Vote)",
        "PPD (Predicted Percentage Dissatisfied)",
        "Indoor Air Quality Index",
        "Thermal Comfort Compliance %",
      ],
    },
    {
      category: "Equipment Health",
      metrics: [
        "RUL (Remaining Useful Life) - days",
        "Fault Detection Count",
        "MTBF (Mean Time Between Failures)",
        "Maintenance Cost Avoided",
      ],
    },
    {
      category: "Sustainability",
      metrics: [
        "Carbon Intensity - kgCO₂/m²",
        "Renewable Fraction - %",
        "LEED/BREEAM Points",
        "Grid Interaction Score",
      ],
    },
  ];

  const protocolCategories = [
    {
      name: "Building Control Protocols",
      protocols: ["BACnet", "BACnet/IP", "BACnet MSTP"],
    },
    {
      name: "Building Device Networks",
      protocols: ["KNX", "LonWorks"],
    },
    {
      name: "HVAC Communication",
      protocols: ["Modbus (HVAC Controllers)", "OPC UA"],
    },
    {
      name: "Lighting Automation",
      protocols: ["DALI", "KNX Lighting Control"],
    },
    {
      name: "IoT / Smart Building Protocols",
      protocols: ["Zigbee", "Z-Wave", "MQTT", "Thread"],
    },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24">
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
              <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium border-0">
                AI Building Automation
              </Badge>

              <h1 className="text-white">
                Automate Your Building Operations with AI
              </h1>

              <p className="text-lg max-w-xl text-gray-200">
                Transform traditional building management into intelligent,
                self-optimizing systems. Reduce energy costs by 25-35%, enhance
                occupant comfort, and enable predictive maintenance with Model
                Predictive Control.
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
                  className="px-8 border-white text-white hover:bg-white hover:text-black"
                >
                  <Sparkles className="mr-2 h-4 w-4 text-green-400" />
                  View Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300 pt-6">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" /> MPC HVAC Control
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" /> Predictive
                  Maintenance
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" /> Occupancy
                  Intelligence
                </div>
              </div>
            </div>

            {/* Right side empty or decorative */}
            <div></div>
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
                alt="Why use AI for Building Automation"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2>Why Implement AI in Your Building Automation?</h2>

              <p className="text-lg">
                AI-powered building automation goes beyond traditional BMS by
                delivering predictive intelligence, real-time optimization,
                personalized comfort, and autonomous decision-making across
                HVAC, lighting, security, and energy systems.
              </p>

              <div className="space-y-4">
                {[
                  "Automates HVAC, lighting, ventilation, and shading based on real occupancy, weather, and usage patterns using Model Predictive Control (MPC).",
                  "Predicts equipment failures and performance issues with 90% accuracy — enabling proactive maintenance and extending equipment life by 20-30%.",
                  "Integrates seamlessly with existing BMS, IoT sensors, smart meters, access control, and fire systems through standard BACnet/Modbus protocols.",
                  "Scales effortlessly across single buildings, campuses, or global portfolios using multi-agent orchestration without proportional staff increase.",
                  "Provides real-time dashboards, anomaly alerts, and actionable insights for facility teams with AI-powered root cause analysis.",
                  "Reduces energy consumption by 25-35% through continuous, data-driven optimization and peak load shaving.",
                  "Supports ESG compliance, carbon reporting, LEED/BREEAM certification, and net-zero goals with automated sustainability tracking.",
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

      {/* ==================== BUILDING AUTOMATION PROTOCOLS ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium border-0 mb-4">
              Building Automation Protocols
            </Badge>
            <h2>Building Automation Protocols</h2>
            <p className="text-lg text-gray-600 mt-4">
              Smart Buildings, HVAC, Lighting, Security
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These protocols enable seamless integration with building
              management systems (BMS) for comprehensive control and monitoring.
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
              existing BMS, HVAC, lighting, and IoT systems.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== BUILDING SYSTEMS & AI ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>AI-Powered Building Systems</h2>
            <p className="text-lg text-gray-600 mt-4">
              Intelligent automation for every critical system in your facility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildingSystems.map((system, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-green-50 rounded-2xl mb-4">
                    {system.icon}
                  </div>
                  <h3 className="text-green-600 font-bold mb-2">
                    {system.system}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {system.aiApplication}
                  </p>
                  <Badge className="bg-green-100 text-green-700 border-0">
                    {system.savings}
                  </Badge>
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
            <h2>How AI Transforms Your Building Operations</h2>
            <p className="text-lg text-gray-600 mt-4">
              From rule-based control to intelligent, predictive, and adaptive
              building management — see how AI revolutionizes every aspect step
              by step.
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
            <h2>Key Benefits of AI Building Automation</h2>
            <p className="text-lg text-gray-600 mt-4">
              Implementing AI in your building delivers measurable improvements
              in cost, comfort, reliability, and sustainability.
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

      {/* ==================== HVAC FAULT DETECTION ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-4 border-0">
                Fault Detection & Diagnostics
              </Badge>
              <h2>
                Catch HVAC Issues{" "}
                <span className="text-green-600">Before They Fail</span>
              </h2>
              <p className="text-lg text-gray-600">
                AI-powered FDD continuously monitors equipment performance,
                detecting developing faults weeks before they cause failures or
                energy waste.
              </p>
              <ul className="space-y-3">
                {hvacFaults.map((fault, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{fault}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-green-50 rounded-2xl p-6 mt-4">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-black">Impact</p>
                    <p className="text-gray-600">
                      90% fault detection accuracy, 30% reduction in energy
                      waste
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-green-600 font-bold mb-6">
                Common Faults Detected
              </h3>
              <div className="space-y-4">
                {[
                  { fault: "Stuck Damper", detection: "95%", severity: "High" },
                  {
                    fault: "Refrigerant Leak",
                    detection: "92%",
                    severity: "Critical",
                  },
                  {
                    fault: "Coil Fouling",
                    detection: "88%",
                    severity: "Medium",
                  },
                  { fault: "Sensor Drift", detection: "96%", severity: "Low" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                  >
                    <span className="font-medium text-black">{item.fault}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-green-600">
                        {item.detection} accuracy
                      </span>
                      <Badge
                        className={
                          item.severity === "Critical"
                            ? "bg-red-100 text-red-700 border-0"
                            : item.severity === "High"
                              ? "bg-orange-100 text-orange-700 border-0"
                              : "bg-yellow-100 text-yellow-700 border-0"
                        }
                      >
                        {item.severity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OCCUPANCY INTELLIGENCE ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>True Occupancy Intelligence</h2>
            <p className="text-lg text-gray-600 mt-4">
              Beyond motion sensors — AI-powered computer vision detects real
              occupancy for precise, privacy-preserving control
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {occupancyModels.map((model, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-green-600 font-bold mb-2">{model.model}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {model.application}
                </p>
                <p className="text-xs text-gray-500">{model.benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-600 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <p className="text-green-100">Occupancy detection accuracy</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">&lt;50ms</div>
                <p className="text-green-100">Edge inference latency</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30%</div>
                <p className="text-green-100">Additional energy savings</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-green-100">
                  Privacy preserved (no video stored)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BUILDING KPI DASHBOARD ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>Comprehensive Building KPIs</h2>
            <p className="text-lg text-gray-600 mt-4">
              AI continuously tracks and optimizes across four key performance
              dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildingKPIs.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
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

      {/* ==================== AI TECHNOLOGY STACK ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>AI Technology Stack for Buildings</h2>
            <p className="text-lg text-gray-600 mt-4">
              A comprehensive suite of AI technologies working together — each
              layer purpose-built to tackle specific building challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiBuildingTechStack.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-md transition-all duration-300"
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

      {/* ==================== ZONE OPTIMIZATION ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Zone-Level <span className="text-green-600">Optimization</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                AI treats each zone individually, learning unique usage patterns
                and thermal behaviors to deliver personalized comfort while
                minimizing energy consumption.
              </p>
              <div className="space-y-4">
                {buildingZones.map((zone, index) => (
                  <div key={index} className="bg-white rounded-xl p-4">
                    <h4 className="font-bold text-green-600 mb-2">
                      {zone.zone}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {zone.metrics.map((metric, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-50">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-white font-bold mb-6">
                Zone Control Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Thermometer className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">±0.5°C</p>
                    <p className="text-green-100">Temperature precision</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">15min</p>
                    <p className="text-green-100">
                      Response time to occupancy changes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">40%</p>
                    <p className="text-green-100">Zone-level energy savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AI TOOLS & TECHNOLOGIES ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>AI Tools & Technologies in Building Automation</h2>
            <p className="text-lg text-gray-600 mt-4">
              Modern AI-powered building automation combines IoT, machine
              learning, digital twins, predictive analytics, and real-time
              optimization to create truly intelligent, adaptive buildings.
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
              We leverage Model Predictive Control, computer vision with
              MobileNetV3, time-series forecasting with N-BEATS, and digital
              twin technology to deliver future-ready building automation
              solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl">
              Delivering Intelligent Building Automation with AI
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IMPLEMENTATION ROADMAP ==================== */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>Building AI Implementation Roadmap</h2>
            <p className="text-lg text-gray-600 mt-4">
              A phased approach that delivers value from day one — building
              toward a fully autonomous, net-zero ready building operation.
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
            <h3 className="text-white font-bold mb-4">
              The Ultimate Building Vision
            </h3>
            <p className="text-green-100 max-w-3xl mx-auto text-lg leading-relaxed">
              A building at full AI capability is a living, breathing ecosystem
              that anticipates occupant needs, optimizes every watt of energy,
              predicts and prevents equipment failures, and continuously
              improves toward net-zero — while facility teams focus on strategic
              initiatives rather than firefighting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiBuildingAutomation;
