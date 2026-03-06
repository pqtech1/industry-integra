import React from "react";
import {
  ArrowLeftRight,
  Database,
  ShieldCheck,
  Zap,
  Settings2,
  RefreshCw,
  BarChart4,
  LayoutGrid,
  Cpu,
  ArrowRight,
  Link2,
  CheckCircle2,
} from "lucide-react";

const ERPIntegration = () => {
  const erpSystems = [
    { name: "SAP S/4HANA", type: "Global Standard" },
    { name: "Emperor ERP", type: "Textile/Manufacturing" },
    { name: "GATI ERP", type: "Logistics/Supply" },
    { name: "Oracle NetSuite", type: "Cloud ERP" },
    { name: "Microsoft Dynamics", type: "Enterprise" },
    { name: "Tally Prime", type: "Accounting Sync" },
    { name: "Epicor", type: "Industrial MES/ERP" },
    { name: "Infor", type: "Specialized Mfg" },
    { name: "Odoo", type: "Open Source" },
    { name: "Custom Legacy", type: "API / SQL Bridge" },
  ];

  const features = [
    {
      title: "Real-time Production Posting",
      desc: "Instantly post finished goods and consumption into ERP modules like SAP PP or Emperor Production.",
      icon: <Zap size={20} />,
    },
    {
      title: "Inventory Integrity",
      desc: "Synchronize raw material stock levels between the physical warehouse and GATI/Tally in real-time.",
      icon: <BarChart4 size={20} />,
    },
    {
      title: "Automated Maintenance Triggers",
      desc: "Machine alarms automatically create Maintenance Work Orders in your ERP system.",
      icon: <Settings2 size={20} />,
    },
    {
      title: "Financial Visibility",
      desc: "True cost-per-part calculation based on live energy and scrap data sent to Finance modules.",
      icon: <CheckCircle2 size={20} />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600/10 border border-green-600/20 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
                <RefreshCw size={14} /> Bi-Directional Sync
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Your Factory Floor, <br />
                <span className="text-green-600">Sync'd with ERP.</span>
              </h1>
              <p className="text-gray-400 text-lg mb-6">
                Industry INTEGRA 360 acts as the high-speed bridge between your
                operational machinery (OT) and your business management (IT).
                Real-time inventory, production costs, and order
                statuses—automated.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2">
                Request Integration Map <ArrowRight size={18} />
              </button>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl">
                {/* Data Flow Visualization */}
                <div className="flex justify-between items-center mb-8">
                  <div className="p-4 bg-green-600 rounded-xl">
                    <Cpu className="text-white" size={28} />
                    <p className="text-xs text-white mt-1 font-medium text-center">
                      Sensors
                    </p>
                  </div>
                  <div className="flex-1 px-2 relative">
                    <div className="h-0.5 w-full bg-gradient-to-r from-green-600 via-gray-400 to-gray-600"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 border border-gray-700 p-1.5 rounded-lg">
                      <Link2 size={16} className="text-gray-300" />
                    </div>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-xl">
                    <Database className="text-gray-200" size={28} />
                    <p className="text-xs text-gray-300 mt-1 font-medium text-center">
                      ERP Cloud
                    </p>
                  </div>
                </div>

                {/* Mock Sync Logs */}
                <div className="space-y-2 font-mono">
                  <div className="flex justify-between items-center bg-gray-800/80 p-2 rounded-lg border border-gray-700">
                    <span className="text-green-500 text-xs">
                      BATCH_ID: 9822 Connected
                    </span>
                    <span className="text-xs text-gray-500">0.04ms</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800/80 p-2 rounded-lg border border-gray-700">
                    <span className="text-blue-400 text-xs">
                      SAP_ORDR: 4409 Updated
                    </span>
                    <span className="text-xs text-gray-500">LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUPPORTED ERP SYSTEMS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Supported Ecosystems
          </h2>
          <p className="text-gray-600">
            Native integration support for global and niche manufacturing ERPs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {erpSystems.map((erp, i) => (
            <div
              key={i}
              className="group p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-green-600 hover:bg-white transition-all text-center"
            >
              <div className="w-10 h-10 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center text-gray-400 group-hover:text-green-600 transition-colors">
                <LayoutGrid size={20} />
              </div>
              <h4 className="font-medium text-gray-900 text-sm">{erp.name}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{erp.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <img
                  src="services/all-services/ERP-Integration.webp"
                  alt="ERP Integration"
                  className="w-full h-full object-cover"
                 
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -top-3 -right-3 bg-green-600 text-white p-4 rounded-lg shadow-lg max-w-[160px]">
                <p className="text-2xl font-bold mb-0.5">0%</p>
                <p className="text-xs font-medium leading-tight">
                  Manual Data Entry Required
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Beyond Simple API Calls. <br />
                <span className="text-green-600">Deep System Sync.</span>
              </h3>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-green-600 border border-gray-100">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECURITY SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-green-600/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={28} className="text-green-600" />
              <h3 className="text-2xl font-bold">Enterprise-Grade Security</h3>
            </div>
            <p className="text-gray-400 mb-6">
              We use bank-grade AES-256 encryption and secure tunnel protocols
              (MQTT-TLS) to ensure that your sensitive business data is
              protected as it travels between your machines and the cloud.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <p className="text-green-600 font-medium text-sm">
                  SOC2 Type II
                </p>
                <p className="text-xs text-gray-500">Compliance Ready</p>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <p className="text-green-600 font-medium text-sm">OAuth 2.0</p>
                <p className="text-xs text-gray-500">Secure Authentication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Ready to Connect Your Infrastructure?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Stop relying on manual spreadsheets. Get a single source of truth
            for your entire manufacturing enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition-all">
              Talk to an Integration Expert
            </button>
            <button className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all">
              View API Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-200">
        <p className="text-sm text-gray-500">Industry INTEGRA 360 © 2026</p>
      </footer>
    </div>
  );
};

export default ERPIntegration;
