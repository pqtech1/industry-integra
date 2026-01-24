import React, { useState } from "react";
import {
  Building,
  Factory,
  Cpu,
  Zap,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Users,
  TrendingUp,
  Shield,
  Leaf,
  Clock,
  BarChart3,
  Target,
  Smartphone,
  Mail,
  MapPin,
  Phone,
  Globe,
  Download,
  Eye,
  Calendar,
  Building2,
  Cog,
  Package,
  BatteryCharging,
  Home,

  Contact,
 
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Landing = () => {
  const [activeTab, setActiveTab] = useState("building");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Chart data for building automation
  const buildingData = [
    { name: "Mon", energy: 4200, comfort: 85, occupancy: 65 },
    { name: "Tue", energy: 3800, comfort: 88, occupancy: 70 },
    { name: "Wed", energy: 3500, comfort: 90, occupancy: 75 },
    { name: "Thu", energy: 3200, comfort: 92, occupancy: 80 },
    { name: "Fri", energy: 3100, comfort: 94, occupancy: 85 },
    { name: "Sat", energy: 2900, comfort: 90, occupancy: 45 },
    { name: "Sun", energy: 2800, comfort: 88, occupancy: 30 },
  ];

  const processData = [
    { name: "Jan", efficiency: 85, quality: 92, uptime: 94 },
    { name: "Feb", efficiency: 88, quality: 94, uptime: 96 },
    { name: "Mar", efficiency: 90, quality: 95, uptime: 97 },
    { name: "Apr", efficiency: 92, quality: 96, uptime: 98 },
    { name: "May", efficiency: 94, quality: 97, uptime: 99 },
    { name: "Jun", efficiency: 95, quality: 98, uptime: 99 },
  ];

  const COLORS = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"];

  const modules = [
    {
      id: "building",
      title: "Building Automation",
      icon: <Building className="w-6 h-6" />,
      description:
        "Transform buildings into intelligent ecosystems optimizing comfort, security, and efficiency.",
      features: [
        "HVAC Control",
        "Lighting Automation",
        "Security Systems",
        "Access Control",
        "Space Utilization",
      ],
      stats: { energy: "40%", comfort: "95%", efficiency: "85%" },
      color: "emerald",
    },
    {
      id: "process",
      title: "Process Automation",
      icon: <Cog className="w-6 h-6" />,
      description:
        "Achieve precision and consistency in industrial processes with intelligent control.",
      features: [
        "PLC Integration",
        "SCADA Systems",
        "Quality Control",
        "Batch Processing",
        "Safety Protocols",
      ],
      stats: { efficiency: "45%", quality: "99.5%", uptime: "99%" },
      color: "blue",
    },
    {
      id: "factory",
      title: "Factory Automation",
      icon: <Factory className="w-6 h-6" />,
      description:
        "Create smart, connected production facilities with real-time monitoring.",
      features: [
        "OEE Monitoring",
        "Predictive Maintenance",
        "Inventory Control",
        "Production Analytics",
        "IoT Integration",
      ],
      stats: { oee: "85%", downtime: "-70%", quality: "+40%" },
      color: "purple",
    },
    {
      id: "energy",
      title: "Energy Automation",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Optimize energy consumption and achieve sustainability goals.",
      features: [
        "Consumption Analytics",
        "Peak Load Management",
        "Renewable Integration",
        "Cost Optimization",
        "Emissions Tracking",
      ],
      stats: { cost: "-35%", efficiency: "92%", renewable: "+65%" },
      color: "amber",
    },
  ];

  const faqs = [
    {
      question: "What is Industry INTEGRA 360?",
      answer:
        "Industry INTEGRA 360 is a comprehensive automation platform designed to manage buildings, processes, factories, and energy systems from a single intelligent interface.",
    },
    {
      question: "What industries benefit from Industry INTEGRA 360?",
      answer:
        "Industrial plants, smart buildings, factories, energy-intensive facilities, healthcare, education, hospitality, retail, and more.",
    },
    {
      question:
        "What are the key benefits of implementing Industry INTEGRA 360?",
      answer:
        "Up to 40% energy savings, 45% process efficiency improvement, 85%+ OEE improvement, enhanced safety compliance, and reduced operational costs.",
    },
    {
      question: "Is Industry INTEGRA 360 scalable?",
      answer:
        "Yes, it is modular and scalable from single buildings to entire industrial complexes with thousands of connected devices.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide 24/7 support, regular updates, training sessions, and dedicated account managers for enterprise clients.",
    },
  ];

  const features = [
    {
      icon: <TrendingUp />,
      title: "Real-time Monitoring",
      description: "Live data from all connected systems",
    },
    {
      icon: <Shield />,
      title: "Enhanced Security",
      description: "Integrated access control and surveillance",
    },
    {
      icon: <Leaf />,
      title: "Sustainability",
      description: "Carbon emissions tracking and optimization",
    },
    {
      icon: <Clock />,
      title: "Predictive Maintenance",
      description: "AI-driven failure prediction",
    },
    {
      icon: <BarChart3 />,
      title: "Advanced Analytics",
      description: "Deep insights and actionable intelligence",
    },
    {
      icon: <Target />,
      title: "Optimization",
      description: "Continuous process improvement",
    },
  ];

  const stats = [
    {
      value: "40%",
      label: "Energy Savings",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      value: "45%",
      label: "Process Efficiency",
      icon: <Cog className="w-4 h-4" />,
    },
    {
      value: "85%",
      label: "OEE Improvement",
      icon: <Factory className="w-4 h-4" />,
    },
    {
      value: "99.5%",
      label: "Quality Consistency",
      icon: <CheckCircle className="w-4 h-4" />,
    },
  ];

  const activeModule = modules.find((m) => m.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Industry</div>
                  <div className="text-xs text-emerald-600 font-semibold">
                    INTEGRA 360
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Modules
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Benefits
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Industries
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </a>
              <button
                onClick={() => setShowDemoModal(true)}
                className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                Try Demo
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Modules
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Benefits
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Industries
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Contact
                </a>
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-900 transition-all"
                >
                  Try Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span className="text-white font-bold text-2xl">I</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      Industry <span className="text-emerald-600">INTEGRA</span>{" "}
                      360
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      Master Every Process, Power Every Plant
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                End-to-End Industrial Automation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
                  One Unified Control Platform
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Industry INTEGRA 360 is a comprehensive automation platform
                designed to manage buildings, processes, factories, and energy
                systems from a single intelligent interface. Achieve complete
                operational transparency through one integrated ecosystem.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowBrochureModal(true)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg"
                >
                  Schedule a Consultation
                </button>
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-xl hover:bg-slate-50 transition-all duration-300"
                >
                  View Demo
                </button>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-slate-500 font-medium">
                  Designed for:
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                    Industrial Plants
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    Smart Buildings
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                    Factories
                  </span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">
                    Energy Facilities
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-1 shadow-2xl">
                <div className="bg-slate-900 rounded-2xl overflow-hidden">
                  <div className="p-4 bg-slate-800 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="text-slate-300 text-sm">
                      dashboard.integra360.tech
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-slate-800 rounded-xl p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-emerald-400">{stat.icon}</div>
                          </div>
                          <div className="text-slate-400 text-sm mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="h-48 bg-slate-800 rounded-xl p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={buildingData}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#374151"
                          />
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#1f2937",
                              border: "none",
                            }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Line
                            type="monotone"
                            dataKey="energy"
                            stroke="#10b981"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="comfort"
                            stroke="#3b82f6"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Core Modules
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Four Intelligent Modules Powering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Industry INTEGRA 360
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Industry INTEGRA 360 is built as a modular automation platform,
              combining four specialized systems into one unified solution. Each
              module addresses a critical aspect of industrial operations.
            </p>
          </div>

          {/* Module Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveTab(module.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === module.id
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <div
                    className={`${activeTab === module.id ? "text-white" : `text-${module.color}-600`}`}
                  >
                    {module.icon}
                  </div>
                  <span className="font-medium">{module.title}</span>
                </button>
              ))}
            </div>

            {/* Active Module Content */}
            {activeModule && (
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className={`p-3 rounded-xl bg-${activeModule.color}-100 text-${activeModule.color}-600`}
                        >
                          {activeModule.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {activeModule.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 mb-6">
                        {activeModule.description} Our Industry INTEGRA 360
                        transforms disconnected systems into a cohesive,
                        responsive ecosystem that anticipates needs and
                        optimizes performance.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <span className="text-slate-700">
                            Real-time monitoring and control
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <span className="text-slate-700">
                            Predictive analytics and optimization
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <span className="text-slate-700">
                            Automated workflows and scheduling
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Industry Applications */}
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 mb-4">
                        Industry Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeModule.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-sm border border-slate-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(activeModule.stats).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
                          >
                            <div className="text-3xl font-bold text-slate-900 mb-2">
                              {value}
                            </div>
                            <div className="text-sm text-slate-600 capitalize">
                              {key.replace("_", " ")} Improvement
                            </div>
                          </div>
                        ),
                      )}
                    </div>

                    {/* Chart */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          {activeTab === "building" && (
                            <AreaChart data={buildingData}>
                              <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#e5e7eb"
                              />
                              <XAxis dataKey="name" stroke="#6b7280" />
                              <YAxis stroke="#6b7280" />
                              <Tooltip />
                              <Area
                                type="monotone"
                                dataKey="energy"
                                fill="#10b981"
                                fillOpacity={0.3}
                                stroke="#10b981"
                              />
                              <Area
                                type="monotone"
                                dataKey="comfort"
                                fill="#3b82f6"
                                fillOpacity={0.3}
                                stroke="#3b82f6"
                              />
                            </AreaChart>
                          )}
                          {activeTab === "process" && (
                            <LineChart data={processData}>
                              <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#e5e7eb"
                              />
                              <XAxis dataKey="name" stroke="#6b7280" />
                              <YAxis stroke="#6b7280" />
                              <Tooltip />
                              <Line
                                type="monotone"
                                dataKey="efficiency"
                                stroke="#3b82f6"
                                strokeWidth={2}
                              />
                              <Line
                                type="monotone"
                                dataKey="quality"
                                stroke="#10b981"
                                strokeWidth={2}
                              />
                            </LineChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Industry INTEGRA 360
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Experience the power of unified industrial automation with our
              comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-emerald-100 text-emerald-600 mb-6">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                <AlertCircle className="w-4 h-4 mr-2" />
                The Problem We Solve
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Modern industries suffer from disconnected systems
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-slate-600">
                    25-40% energy waste due to inefficient operations and manual
                    controls
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-slate-600">
                    Fragmented systems operating in isolation, preventing
                    holistic optimization
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-slate-600">
                    Escalating operational costs and safety vulnerabilities
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Our Solution
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Unified automation platform for complete control
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    Single intelligent interface for all building, process,
                    factory, and energy systems
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    Real-time monitoring and predictive analytics for proactive
                    optimization
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    40% energy savings and 45% process efficiency improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to common questions about Industry INTEGRA 360
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join leading industries that have optimized their operations with
              Industry INTEGRA 360
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowDemoModal(true)}
                className="px-8 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-slate-100 transition-all"
              >
                Request Demo
              </button>
              <button
                onClick={() => setShowBrochureModal(true)}
                className="px-8 py-3 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Industry</div>
                  <div className="text-sm text-emerald-300 font-semibold">
                    INTEGRA 360
                  </div>
                </div>
              </div>
              <p className="text-slate-400">
                Master Every Process, Power Every Plant, From Factory Floor To
                Smart Operations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Modules</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Building Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Process Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Factory Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Energy Automation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>info@integra360.tech</span>
                </li>
                <li className="flex items-center space-x-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>123 Industrial Blvd, Suite 400</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>
              © {new Date().getFullYear()} Industry INTEGRA 360. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Brochure Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Get Complete Brochure
              </h3>
              <button
                onClick={() => setShowBrochureModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-900 transition-all"
              >
                Download Brochure
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                Or email us at{" "}
                <a
                  href="mailto:info@integra360.tech"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  info@integra360.tech
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Request Demo Access
              </h3>
              <button
                onClick={() => setShowDemoModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <Eye className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <p className="text-slate-700">
                      Get full access to our demo environment with sample data
                    </p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-900 transition-all"
                  >
                    Get Demo Credentials
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6 text-white">
                  <h4 className="font-semibold text-lg mb-4">Demo Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>Full dashboard access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>Sample data from all modules</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>Interactive controls</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>Real-time analytics</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-slate-600 mb-4">
                    Access the live demo application directly:
                  </p>
                  <a
                    href="https://demo.integra360.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Open Demo Application
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
