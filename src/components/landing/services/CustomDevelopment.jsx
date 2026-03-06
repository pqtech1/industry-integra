import React from "react";
import {
  Code2,
  Cpu,
  Workflow,
  Layers,
  Box,
  Settings2,
  Terminal,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  Zap,
  Globe,
  Database,
  Cloud,
  GitBranch,
  Container,
  Lock,
  Gauge,
  Network,
  Radio,
  Server,
  Microchip,
  Wifi,
  HardDrive,
  Braces,
  FileCode,
  AppWindow,
  Cctv,
  GanttChartSquare,
} from "lucide-react";

const CustomDevelopment = () => {
  const technologies = [
    // Languages
    { name: "Python", category: "language" },
    { name: "Go", category: "language" },
    { name: "Rust", category: "language" },
    { name: "C++", category: "language" },
    { name: "C#", category: "language" },
    { name: "Java", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "TypeScript", category: "language" },

    // Frameworks
    { name: "Node.js", category: "framework" },
    { name: "React", category: "framework" },
    { name: "Next.js", category: "framework" },
    { name: ".NET Core", category: "framework" },
    { name: "Spring Boot", category: "framework" },
    { name: "Flask", category: "framework" },
    { name: "FastAPI", category: "framework" },
    { name: "Django", category: "framework" },

    // IoT Protocols
    { name: "MQTT", category: "protocol" },
    { name: "CoAP", category: "protocol" },
    { name: "AMQP", category: "protocol" },
    { name: "OPC UA", category: "protocol" },
    { name: "Modbus", category: "protocol" },
    { name: "Profibus", category: "protocol" },
    { name: "EtherNet/IP", category: "protocol" },

    // Cloud & Infrastructure
    { name: "Docker", category: "infra" },
    { name: "Kubernetes", category: "infra" },
    { name: "AWS IoT", category: "cloud" },
    { name: "Azure IoT", category: "cloud" },
    { name: "Google Cloud IoT", category: "cloud" },
    { name: "Kafka", category: "infra" },
    { name: "RabbitMQ", category: "infra" },

    // Databases
    { name: "PostgreSQL", category: "database" },
    { name: "InfluxDB", category: "database" },
    { name: "TimescaleDB", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },

    // Edge & Hardware
    { name: "Raspberry Pi", category: "hardware" },
    { name: "Arduino", category: "hardware" },
    { name: "ESP32", category: "hardware" },
    { name: "PLC", category: "hardware" },
    { name: "RTOS", category: "firmware" },
    { name: "FreeRTOS", category: "firmware" },
    { name: "Zephyr", category: "firmware" },

    // AI/ML
    { name: "TensorFlow", category: "ai" },
    { name: "PyTorch", category: "ai" },
    { name: "scikit-learn", category: "ai" },
    { name: "OpenCV", category: "ai" },

    // Monitoring
    { name: "Grafana", category: "monitoring" },
    { name: "Prometheus", category: "monitoring" },
    { name: "Telegraf", category: "monitoring" },
  ];

  // Group technologies by category for display
  const categories = {
    language: "Languages",
    framework: "Frameworks",
    protocol: "IoT Protocols",
    cloud: "Cloud Platforms",
    infra: "Infrastructure",
    database: "Databases",
    hardware: "Edge Hardware",
    firmware: "Firmware",
    ai: "AI/ML",
    monitoring: "Monitoring",
  };

  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION: The Engineering Vision */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <img
            src="services/all-services/cd.avif"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80";
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Settings2 size={14} /> Tailored IIoT Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Architecting the <br />
            <span className="text-green-600">Future of Industry 4.0</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            From low-level firmware to enterprise-grade cloud orchestrations,
            Industry INTEGRA 360 builds the custom digital nervous systems that
            power modern manufacturing.
          </p>
        </div>
      </section>

      {/* 2. THE STACK: Three Pillars of Custom Dev */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Edge & Firmware */}
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-green-600 transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Edge & Firmware
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Custom driver development for legacy machinery and optimized
              firmware for low-power IoT sensors.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                Embedded C / C++ Development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                PLC Logic & Gateway Scripting
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                Real-time OS (RTOS) Optimization
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                ARM/RISC-V Architecture
              </li>
            </ul>
          </div>

          {/* Middleware & Pipelines */}
          <div className="p-6 rounded-xl bg-green-600 text-white transform scale-105 shadow-xl">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Workflow size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Data Orchestration</h3>
            <p className="text-green-50 text-sm mb-4">
              Building high-throughput middleware that cleanses, validates, and
              routes industrial data at scale.
            </p>
            <div className="bg-black/20 rounded-lg p-3">
              <div className="flex justify-between items-center text-xs font-bold uppercase mb-1">
                <span>Throughput</span>
                <span>99.9% Uptime</span>
              </div>
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-4/5 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enterprise Solutions */}
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-green-600 transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Layers className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Cloud & Dashboards
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Bespoke web applications and digital twins designed for executive
              decision-making.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                React / Next.js Visualization
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                Microservices Architecture
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                Secure Multi-tenant API Layers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                Real-time Dashboarding
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. PROCESS: How we build (Visual Logic) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Agile Development for Industrial Scenarios
              </h2>
              <p className="text-gray-600 mb-8">
                We don't just "code"—we engineer. Our process accounts for the
                harsh realities of the factory floor, from intermittent
                connectivity to legacy protocol constraints.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Discovery & Site Audit",
                    desc: "Understanding your physical infrastructure before writing a single line of code.",
                    icon: <Lightbulb size={20} />,
                  },
                  {
                    title: "Rapid Prototyping (MVP)",
                    desc: "Quick deployment of core functionality to prove ROI on the shop floor.",
                    icon: <Zap size={20} />,
                  },
                  {
                    title: "Rigorous Testing",
                    desc: "Stress testing under extreme data loads and environmental conditions.",
                    icon: <ShieldCheck size={20} />,
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="services/all-services/cd.avif"
                  alt="Custom Development"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              {/* Floating Code Snippet */}
              <div className="absolute -bottom-4 -left-4 bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-800 hidden lg:block">
                <pre className="text-xs font-mono text-green-400">
                  <code>{`
  MQTT_Publish(TOPIC_OEE, {
    machine_id: "CNC_01",
    status: "ACTIVE",
    utilization: 0.94
  });
                  `}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK - PILL STYLE WITH HASHTAGS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Engineering DNA
          </h2>
          <p className="text-gray-600">
            Comprehensive technology stack for end-to-end IIoT solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-green-600 hover:text-green-600 hover:bg-green-50 transition-all"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tech Stack by Category */}
        <div className="space-y-10">
          {Object.entries(groupedTechnologies).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {categories[category] || category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-green-50 transition-all cursor-default"
                  >
                    <span className="text-green-600 mr-1">#</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a Unique Problem?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Standard software often fails in non-standard environments. If you
            have legacy machines, complex data requirements, or niche
            operational needs, Industry INTEGRA 360 can build the bridge.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2 group">
            Request a Custom Solution
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CustomDevelopment;
