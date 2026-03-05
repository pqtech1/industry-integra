import {
  Network,
  Wifi,
  Radio,
  Cable,
  Server,
  Globe,
  Zap,
  Shield,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Signal,
  Bluetooth,
  Building2,
  ArrowRight,
  Gauge,
  Layers,
  Sparkles,
  Lock,
  Cloud,
  HardDrive,
  Satellite,
  Radar,
  Share2,
  Repeat,
  BluetoothConnected,
  Infinity,
  ScanLine,
  Binary,
  Code2,
  Cctv,
  Thermometer,
  Factory,
  Power,
  Droplets,
  Wind,
  Flame,
  Waves,
  Minimize2,
  Maximize2,
  Search,
  Filter,
  Grid3x3,
  Factory as FactoryIcon,
  Flame as FlameIcon,
  Zap as ZapIcon,
  Building2 as BuildingIcon,
  Cloud as CloudIcon,
  Database,
  Cpu as CpuIcon,
  Thermometer as ThermometerIcon,
  Gauge as GaugeIcon,
  Activity as ActivityIcon,
  Server as ServerIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const IndustrialProtocolWeServe = () => {
  const protocolCategories = [
    {
      name: "OPC Standards",
      icon: <Layers className="w-5 h-5" />,
      protocols: [
        "OPC DA (Data Access)",
        "OPC UA (Unified Architecture)",
        "OPC HDA (Historical Data Access)",
        "OPC AE (Alarms & Events)",
      ],
    },
    {
      name: "Fieldbus Protocols",
      icon: <Cable className="w-5 h-5" />,
      protocols: [
        "Modbus RTU",
        "Modbus TCP/IP",
        "PROFIBUS DP",
        "PROFIBUS PA",
        "FOUNDATION Fieldbus H1",
        "FOUNDATION Fieldbus HSE",
      ],
    },
    {
      name: "Industrial Ethernet",
      icon: <Network className="w-5 h-5" />,
      protocols: [
        "PROFINET",
        "EtherNet/IP",
        "EtherCAT",
        "POWERLINK",
        "SERCOS III",
      ],
    },
    {
      name: "Machine-Level Protocols",
      icon: <Cpu className="w-5 h-5" />,
      protocols: [
        "CC-Link",
        "CC-Link IE",
        "Mechatrolink",
        "DeviceNet",
        "ControlNet",
      ],
    },
    {
      name: "PLC Communication",
      icon: <Server className="w-5 h-5" />,
      protocols: [
        "Siemens S7 Protocol",
        "Mitsubishi MELSEC Communication",
        "Omron FINS Protocol",
      ],
    },
    {
      name: "Robotics Integration",
      icon: <Zap className="w-5 h-5" />,
      protocols: [
        "FANUC Ethernet Protocol",
        "ABB Robot Communication",
        "KUKA Robot Interface",
      ],
    },
    {
      name: "Vision System Communication",
      icon: <Cctv className="w-5 h-5" />,
      protocols: ["GigE Vision", "GenICam"],
    },
    {
      name: "Legacy / Serial Communication",
      icon: <Radio className="w-5 h-5" />,
      protocols: ["RS-232", "RS-485"],
    },
    {
      name: "Device Communication",
      icon: <Bluetooth className="w-5 h-5" />,
      protocols: ["HART Protocol", "WirelessHART"],
    },
    {
      name: "Distributed Control System Protocols",
      icon: <Gauge className="w-5 h-5" />,
      protocols: [
        "Honeywell Experion Protocols",
        "Yokogawa CENTUM Communication",
        "Emerson DeltaV Communication",
      ],
    },
    {
      name: "Power Utility Protocols",
      icon: <ZapIcon className="w-5 h-5" />,
      protocols: ["IEC 61850", "IEC 60870-5-101", "IEC 60870-5-104", "DNP3"],
    },
    {
      name: "Meter Communication",
      icon: <Activity className="w-5 h-5" />,
      protocols: ["DLMS / COSEM", "Modbus Energy Meter Protocol", "M-Bus"],
    },
    {
      name: "Smart Grid Communication",
      icon: <Wifi className="w-5 h-5" />,
      protocols: ["IEEE 2030.5", "MQTT (Energy IoT)"],
    },
    {
      name: "Substation Automation",
      icon: <Power className="w-5 h-5" />,
      protocols: [
        "GOOSE Messaging",
        "MMS (Manufacturing Message Specification)",
      ],
    },
    {
      name: "Building Control Protocols",
      icon: <BuildingIcon className="w-5 h-5" />,
      protocols: ["BACnet", "BACnet/IP", "BACnet MSTP"],
    },
    {
      name: "Building Device Networks",
      icon: <Building2 className="w-5 h-5" />,
      protocols: ["KNX", "LonWorks"],
    },
    {
      name: "HVAC Communication",
      icon: <Thermometer className="w-5 h-5" />,
      protocols: ["Modbus (HVAC Controllers)", "OPC UA"],
    },
    {
      name: "Lighting Automation",
      icon: <Waves className="w-5 h-5" />,
      protocols: ["DALI", "KNX Lighting Control"],
    },
    {
      name: "IoT / Smart Building Protocols",
      icon: <Cloud className="w-5 h-5" />,
      protocols: ["Zigbee", "Z-Wave", "MQTT", "Thread"],
    },
    {
      name: "Messaging Protocols",
      icon: <Share2 className="w-5 h-5" />,
      protocols: ["MQTT", "AMQP", "Apache Kafka", "WebSockets"],
    },
    {
      name: "API Integration",
      icon: <Code2 className="w-5 h-5" />,
      protocols: ["REST APIs", "GraphQL APIs"],
    },
    {
      name: "Cloud Integration",
      icon: <CloudIcon className="w-5 h-5" />,
      protocols: ["Azure IoT Hub", "AWS IoT Core", "Google Cloud IoT"],
    },
    {
      name: "Machine Sources",
      icon: <FactoryIcon className="w-5 h-5" />,
      protocols: ["PLC tags", "RTUs", "SCADA systems", "DCS systems"],
    },
    {
      name: "Sensors",
      icon: <ThermometerIcon className="w-5 h-5" />,
      protocols: [
        "Temperature sensors",
        "Pressure transmitters",
        "Flow meters",
        "Vibration sensors",
        "Energy meters",
      ],
    },
    {
      name: "Databases",
      icon: <Database className="w-5 h-5" />,
      protocols: ["SQL Server", "PostgreSQL", "MySQL", "Oracle"],
    },
    {
      name: "Industrial Historians",
      icon: <HardDrive className="w-5 h-5" />,
      protocols: ["OSIsoft PI", "Wonderware Historian", "Ignition Historian"],
    },
    {
      name: "Enterprise Systems",
      icon: <Globe className="w-5 h-5" />,
      protocols: ["ERP", "MES", "SAP", "Production Management Systems"],
    },
  ];

  const featuredProtocols = [
    {
      name: "OPC UA",
      category: "Interoperability Standard",
      description:
        "Platform-independent communication standard for industrial automation",
      icon: <Layers className="w-6 h-6" />,
      stats: "50,000+ devices",
    },
    {
      name: "MQTT",
      category: "IIoT Messaging",
      description:
        "Lightweight messaging protocol for industrial IoT applications",
      icon: <Cloud className="w-6 h-6" />,
      stats: "35,000+ devices",
    },
    {
      name: "Modbus",
      category: "Legacy & Modern",
      description:
        "Most widely used industrial communication protocol globally",
      icon: <Repeat className="w-6 h-6" />,
      stats: "150,000+ devices",
    },
    {
      name: "IEC 61850",
      category: "Substation Automation",
      description:
        "International standard for substation automation and smart grids",
      icon: <Zap className="w-6 h-6" />,
      stats: "25,000+ substations",
    },
    {
      name: "PROFINET",
      category: "Industrial Ethernet",
      description: "Leading industrial Ethernet standard for automation",
      icon: <Network className="w-6 h-6" />,
      stats: "40,000+ devices",
    },
    {
      name: "BACnet",
      category: "Building Automation",
      description:
        "Data communication protocol for building automation and control networks",
      icon: <Building2 className="w-6 h-6" />,
      stats: "30,000+ buildings",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-green-600/5" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <Badge className="mb-8 bg-green-600/10 text-green-600 hover:bg-green-600/20 border-0 px-5 py-2 text-sm font-medium rounded-full">
              Industry INTEGRA 360
            </Badge>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-slate-900 mb-6">
              Universal Protocol
              <br />
              <span className="font-semibold text-green-600">Connectivity</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Comprehensive protocol support across process, factory, energy,
              building automation, and IIoT. Connect any device, any system,
              anywhere.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-base font-medium transition-all shadow-lg shadow-green-600/25"
              >
                <a href="#protocolsWeServe"> Explore Protocols</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 hover:border-green-600 hover:bg-green-600/5 rounded-full px-8 py-6 text-base font-medium transition-all"
              >
                Integration Guide
              </Button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-16 right-0 hidden lg:block">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-slate-900">200+</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Protocols Supported
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-slate-900">1k+</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Devices Connected
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-slate-900">10+</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-slate-900">12</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Industries Served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Protocols */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-sm font-bold tracking-[0.3em] text-green-600 uppercase mb-4 block">
                Featured
              </span>
              <h2 className="text-4xl sm:text-5xl font-light text-slate-900">
                Core Communication
                <br />
                <span className="font-semibold">Standards</span>
              </h2>
            </div>
            <p className="text-slate-600 max-w-md hidden lg:block">
              The backbone of modern industrial automation, enabling seamless
              data flow across your entire operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProtocols.map((protocol, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-600/10 flex items-center justify-center mb-6 text-green-600">
                    {protocol.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {protocol.name}
                  </h3>
                  <p className="text-sm text-green-600 font-medium mb-4">
                    {protocol.category}
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {protocol.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      {protocol.stats}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-green-600 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" id="protocolsWeServe">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm font-bold tracking-[0.3em] text-green-600 uppercase mb-4 block">
              Comprehensive Library
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6">
              Every Protocol You'll
              <br />
              <span className="font-semibold">Ever Need</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From legacy serial communication to cutting-edge IIoT standards,
              we've got you covered across all industrial domains.
            </p>
          </div>

          {/* Protocol Categories - Original Design Style */}
          <div className="space-y-8">
            {protocolCategories.map((category, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center text-green-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.protocols.map((protocol, pIdx) => (
                    <Badge
                      key={pIdx}
                      variant="outline"
                      className="px-4 py-2 text-sm font-normal bg-slate-50 hover:bg-green-600/5 hover:border-green-600/30 transition-colors rounded-full"
                    >
                      {protocol}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-green-600" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
            Ready to Connect Your
            <br />
            <span className="font-semibold">Industrial Ecosystem?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let our protocol experts help you design a seamless communication
            architecture that works for your specific requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-slate-100 rounded-full px-10 py-7 text-lg font-medium transition-all shadow-xl hover:shadow-2xl"
            >
              <a href="https://positivequadrant.in/">Start Integration</a>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-medium transition-all"
            >
              <a href="#protocolsWeServe">View All Protocols</a>
            </Button>
          </div>

          <p className="text-sm text-white/60 mt-8">
            Over 200+ industrial protocols supported • 100,000+ successful
            integrations • 10+ years of expertise
          </p>
        </div>
      </section>
    </div>
  );
};

export default IndustrialProtocolWeServe;
