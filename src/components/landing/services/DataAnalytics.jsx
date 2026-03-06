import React from "react";
import {
  Database,
  BarChart,
  Settings,
  Cpu,
  Zap,
  Globe,
  ShieldCheck,
  TrendingUp,
  Activity,
  Server,
  Code2,
  LineChart,
  ArrowUpRight,
  AlertCircle,
  Target,
  Layers,
  BarChart3,
  ArrowRight,
  MousePointer2,
} from "lucide-react";

const DataAnalytics = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1: THE DATA CORE (Historians & Databases) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">
              The Foundation
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industrial Historians & Database Core
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl">
              High-fidelity data retention is the backbone of Industry 4.0.
              Industry INTEGRA 360 integrates industry-leading Historians and
              Relational/NoSQL databases to ensure zero data loss from the shop
              floor to the top floor.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 border-l-4 border-green-600 bg-gray-50">
                <h4 className="font-bold text-gray-900">Historians</h4>
                <p className="text-xs text-gray-600 mt-1">
                  OSIsoft PI, Wonderware, Ignition, AVEVA, Canary
                </p>
              </div>
              <div className="p-4 border-l-4 border-gray-300 bg-gray-50">
                <h4 className="font-bold text-gray-900">Time-Series</h4>
                <p className="text-xs text-gray-600 mt-1">
                  InfluxDB, MongoDB, SQLite, Timescale
                </p>
              </div>
              <div className="p-4 border-l-4 border-gray-300 bg-gray-50">
                <h4 className="font-bold text-gray-900">Relational</h4>
                <p className="text-xs text-gray-600 mt-1">
                  PostgreSQL, MS SQL, Oracle, MySQL
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="services/da/data-anaytics-hero.avif"
                alt="Data Analytics Hero"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Server size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase font-bold">
                  Total Capacity
                </p>
                <p className="text-xl font-black text-gray-900">
                  Petabyte Scale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ENTERPRISE CONNECTIVITY (ERP/MES) */}
      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-900/20 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 text-green-500 text-xs font-bold uppercase tracking-widest mb-4">
              <Zap size={14} /> IT / OT Convergence
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Unified Enterprise{" "}
              <span className="text-green-600">Integration</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bridging the gap between the factory floor and the boardroom with
              mission-critical synchronization and real-time data orchestration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* ERP Column */}
            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-green-600/50 transition-all">
              <div className="absolute top-4 right-4 text-gray-600 group-hover:text-green-600 transition-colors">
                <ArrowUpRight size={20} />
              </div>
              <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center mb-4 border border-green-600/20">
                <Globe className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">ERP Systems</h4>
              <ul className="space-y-3">
                {[
                  { name: "SAP S/4HANA", sub: "Enterprise Core" },
                  { name: "Oracle ERP Cloud", sub: "Business Logic" },
                  { name: "MS Dynamics 365", sub: "CRM & ERP" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    <div>
                      <span className="text-white block font-medium text-sm">
                        {item.name}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-gray-500">
                        {item.sub}
                      </span>
                    </div>
                    <ShieldCheck size={16} className="text-green-600" />
                  </li>
                ))}
              </ul>
            </div>

            {/* MES/Operations */}
            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-green-600/50 transition-all overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-600/10 rounded-full blur-3xl group-hover:bg-green-600/20 transition-all" />

              <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center mb-4 border border-green-600/20">
                <Settings className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Execution (MES)
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Optimizing shop-floor operations with granular control and
                visibility.
              </p>
              <div className="space-y-2">
                {[
                  "Production Management",
                  "Inventory Tracking",
                  "OEE Monitoring",
                  "Quality Control",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800">
                <div className="bg-gray-800/40 rounded-lg p-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-bold uppercase">
                    System Status
                  </span>
                  <span className="text-xs text-green-600 font-bold px-2 py-0.5 bg-green-600/10 rounded">
                    OPTIMIZED
                  </span>
                </div>
              </div>
            </div>

            {/* Data Interfaces */}
            <div className="group relative bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-green-600/50 transition-all">
              <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center mb-4 border border-green-600/20">
                <Code2 className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Protocol Layer
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Robust API architecture for seamless data exchange across
                ecosystems.
              </p>

              <div className="grid grid-cols-2 gap-2">
                {["REST", "GraphQL", "OData", "JSON", "XML", "CSV"].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-xs text-center font-medium text-gray-300 hover:text-green-600 hover:border-green-600/30 transition-all"
                    >
                      {tech}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SMART ANALYTICS (The Visual Layer) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-sm mb-2">
                <span className="w-8 h-[2px] bg-green-600"></span>
                Intelligence Layer
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Smart Manufacturing <br />
                <span className="text-green-600">Analytics Ecosystem</span>
              </h3>
            </div>
            <p className="text-gray-600 lg:max-w-xs text-sm">
              Transforming raw machine data into high-level business
              intelligence through AI-driven insights and real-time processing.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {/* 1. Predictive Maintenance & AI - The Giant Card */}
            <div className="md:col-span-6 lg:col-span-8 group relative overflow-hidden rounded-2xl bg-gray-900 p-6 sm:p-8 text-white">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-600 rounded-xl">
                      <Cpu size={24} className="text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/10">
                      AI Enabled
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    Predictive Maintenance
                  </h4>
                  <p className="text-gray-400 max-w-md mb-6">
                    Advanced{" "}
                    <span className="text-white font-semibold">
                      Vibration Analysis
                    </span>{" "}
                    and Anomaly Detection algorithms that predict component
                    failure 150+ hours in advance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        label: "Anomaly Detection",
                        icon: <AlertCircle size={14} />,
                      },
                      {
                        label: "Root Cause Analysis",
                        icon: <Target size={14} />,
                      },
                      {
                        label: "Asset Reliability",
                        icon: <Layers size={14} />,
                      },
                      {
                        label: "Machine Learning Models",
                        icon: <TrendingUp size={14} />,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors"
                      >
                        <span className="text-green-600">{item.icon}</span>
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 text-[8rem] font-black text-white/[0.03] pointer-events-none select-none">
                AI
              </div>
            </div>

            {/* 2. Production Monitoring - The Stats Card */}
            <div className="md:col-span-3 lg:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between group hover:border-green-600/50 transition-all">
              <div>
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-4 text-green-600 group-hover:scale-110 transition-transform">
                  <BarChart3 size={20} />
                </div>
                <h4 className="text-xl font-bold mb-1 text-gray-900">
                  Real-time OEE
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Live monitoring of Machine Utilization, Availability, and
                  Performance metrics.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-100">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Efficiency
                  </span>
                  <span className="text-2xl font-black text-gray-900">
                    82.4%
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-600 w-[82%] h-full rounded-full"></div>
                </div>
                <div className="mt-3 flex gap-1">
                  <div className="h-1 flex-1 bg-green-600 rounded-full"></div>
                  <div className="h-1 flex-1 bg-green-600 rounded-full"></div>
                  <div className="h-1 flex-1 bg-green-600 rounded-full"></div>
                  <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* 3. Quality Analytics - The Wide Card */}
            <div className="md:col-span-3 lg:col-span-4 bg-green-600 p-6 rounded-2xl text-white group relative overflow-hidden">
              <div className="relative z-10">
                <Activity
                  className="mb-4 text-white group-hover:rotate-12 transition-transform"
                  size={32}
                />
                <h4 className="text-xl font-bold mb-3">
                  Quality & Defect Monitoring
                </h4>
                <ul className="space-y-2 text-green-50/90 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>{" "}
                    Statistical Process Control
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div> Defect
                    Trend Analysis
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-[-20%] right-[-10%] opacity-10">
                <BarChart3 size={160} />
              </div>
            </div>

            {/* 4. Energy Management - Dark Glass */}
            <div className="md:col-span-6 lg:col-span-8 bg-gray-900 p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-gray-900">
                      <Zap size={16} fill="currentColor" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      Sustainability & Energy
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-bold mb-1">
                        Power Quality
                      </p>
                      <p className="text-white font-semibold text-sm">
                        Real-time Analytics
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-bold mb-1">
                        Carbon Footprint
                      </p>
                      <p className="text-white font-semibold text-sm">
                        Live Tracking
                      </p>
                    </div>
                    <div className="col-span-2">
                      <button className="flex items-center gap-2 text-green-600 font-bold text-sm group-hover:gap-4 transition-all">
                        OPTIMIZE CONSUMPTION <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 font-bold uppercase mb-3 tracking-widest">
                      Energy Load Distribution
                    </p>
                    <div className="relative w-24 h-24 mx-auto border-[10px] border-green-600/20 rounded-full flex items-center justify-center">
                      <div className="absolute inset-0 border-[10px] border-green-600 rounded-full border-t-transparent -rotate-45"></div>
                      <span className="text-white font-black text-lg">18%</span>
                    </div>
                    <p className="text-xs text-green-600 mt-3">
                      ↓ 4.2% since last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW IMAGE SECTION */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-green-600/10 blur-[120px] rounded-full -z-10" />

        <div className="relative group">
          <div className="bg-gray-900 rounded-2xl p-2 shadow-xl border border-gray-800 transition-transform duration-700 group-hover:scale-[1.01] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-600/20 border border-green-600/40" />
              </div>
              <div className="mx-auto bg-white/5 px-3 py-1 rounded-md text-xs text-gray-500 flex items-center gap-2">
                <ShieldCheck size={12} className="text-green-600" />
                SECURE_ENCRYPTED_CHANNEL: analytics.industry-integra360.ai
              </div>
            </div>

            <div className="relative bg-black rounded-xl overflow-hidden border border-gray-800">
              <img
                src="services/da/analytics.png"
                alt="Industry INTEGRA 360 Analytics Dashboard"
                className="w-full h-auto opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-gray-800 p-3 rounded-xl hidden md:block">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-ping" />
                  <span className="text-xs font-bold text-white tracking-widest uppercase">
                    Live Plant Status
                  </span>
                </div>
                <div className="text-xl font-black text-green-600">
                  98.2%{" "}
                  <span className="text-xs text-gray-400 font-normal">OEE</span>
                </div>
              </div>

              <div className="absolute bottom-10 left-1/4 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                <MousePointer2
                  className="text-white fill-green-600"
                  size={24}
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] grid grid-cols-3 gap-0.5 p-0.5 bg-white rounded-xl shadow-lg border border-gray-200 z-30">
            <div className="flex items-center justify-center gap-2 py-3 border-r border-gray-200">
              <Activity className="text-green-600" size={16} />
              <span className="text-xs font-bold text-gray-900 hidden sm:inline">
                REAL-TIME SYNC
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 py-3 border-r border-gray-200">
              <Zap className="text-green-600" size={16} />
              <span className="text-xs font-bold text-gray-900 hidden sm:inline">
                AI PREDICTIVE
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 py-3">
              <ShieldCheck className="text-green-600" size={16} />
              <span className="text-xs font-bold text-gray-900 hidden sm:inline">
                ENTERPRISE GRADE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className="bg-green-600 py-12 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to turn your data into a competitive advantage?
          </h3>
          <button className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
            Get Technical Consultation
          </button>
         
        </div>
      </footer>
    </div>
  );
};

export default DataAnalytics;
