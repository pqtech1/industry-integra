import React, { useState, useEffect, useCallback } from "react";
import {
  FaServer,
  FaNetworkWired,
  FaCloud,
  FaChartBar,
  FaShieldAlt,
  FaDatabase,
  FaCogs,
  FaBrain,
  FaIndustry,
  FaMobileAlt,
  FaPlug,
  FaSync,
  FaLock,
  FaExpandArrowsAlt,
  FaRobot,
  FaEye,
  FaExchangeAlt,
  FaTools,
  FaBolt,
  FaCog,
  FaTachometerAlt,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiInfluxdb,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiApachespark,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";

// Performance optimization: Memoize components
const PerformanceOptimizedCard = React.memo(({ children, className = "" }) => (
  <div
    className={`bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </div>
));

PerformanceOptimizedCard.displayName = "PerformanceOptimizedCard";

const PlatformArchitecture = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  // Performance optimization: Throttle scroll events
  useEffect(() => {
    let scrollTimer;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  // Architecture layers data
  const architectureLayers = [
    {
      id: "edge",
      name: "Edge Layer",
      icon: <FaIndustry className="h-8 w-8" />,
      description: "Physical devices and sensors at the factory floor",
      color: "green",
      components: [
        {
          name: "PLC Controllers",
          icon: <FaCogs className="h-5 w-5" />,
          vendors: ["Siemens", "Allen-Bradley", "Schneider", "Mitsubishi"],
          protocols: ["Modbus TCP", "Profibus", "Ethernet/IP", "OPC UA"],
          capacity: "Real-time control",
          latency: "< 10ms response",
        },
        {
          name: "IoT Sensors",
          icon: <FaPlug className="h-5 w-5" />,
          types: ["Temperature", "Pressure", "Vibration", "Flow"],
          protocols: ["MQTT", "CoAP", "BLE 5.0", "LoRaWAN"],
          sampling: "1ms - 1sec intervals",
          accuracy: "±0.1% full scale",
        },
        {
          name: "Smart Meters",
          icon: <FaBolt className="h-5 w-5" />,
          metrics: ["Energy", "Water", "Gas", "Air Quality"],
          standards: ["IEC 62056", "ANSI C12", "DLMS/COSEM"],
          precision: "Class 0.5 accuracy",
          integration: "15-min interval data",
        },
        {
          name: "Vision Systems",
          icon: <FaEye className="h-5 w-5" />,
          capabilities: ["Quality Inspection", "OCR", "Defect Detection"],
          interfaces: ["GigE Vision", "USB3 Vision", "Camera Link"],
          resolution: "4K @ 60fps",
          processing: "Real-time AI inference",
        },
      ],
      metrics: {
        devices: "10K+",
        latency: "< 10ms",
        uptime: "99.99%",
        bandwidth: "1Gbps",
      },
    },
    {
      id: "gateway",
      name: "Gateway Layer",
      icon: <FaNetworkWired className="h-8 w-8" />,
      description: "Local aggregation and protocol translation",
      color: "blue",
      components: [
        {
          name: "Industrial Gateways",
          icon: <FaExchangeAlt className="h-5 w-5" />,
          features: ["Multi-protocol", "Edge Computing", "Data Buffering"],
          capacity: "100K data points/sec",
          protocols: ["OPC UA", "MQTT", "REST API"],
          redundancy: "Dual power supply",
        },
        {
          name: "Protocol Converters",
          icon: <FaSync className="h-5 w-5" />,
          conversions: ["OPC UA ↔ MQTT", "Modbus → REST", "Profibus → TCP"],
          throughput: "50K messages/sec",
          latency: "< 5ms",
          reliability: "99.95% uptime",
        },
        {
          name: "Edge Analytics",
          icon: <FaBrain className="h-5 w-5" />,
          capabilities: ["Anomaly Detection", "Data Filtering", "Aggregation"],
          models: ["Pre-trained", "Custom", "Real-time"],
          processing: "Local ML inference",
          storage: "On-device buffer",
        },
        {
          name: "Local Storage",
          icon: <FaDatabase className="h-5 w-5" />,
          storage: ["TSDB", "Event Logs", "Buffers"],
          retention: "30-90 days",
          capacity: "1-10TB",
          backup: "RAID configuration",
        },
      ],
      metrics: {
        throughput: "1M+ msg/sec",
        processing: "Real-time",
        availability: "99.95%",
        storage: "10TB edge",
      },
    },
    {
      id: "platform",
      name: "Platform Layer",
      icon: <FaCloud className="h-8 w-8" />,
      description: "Core processing, storage, and intelligence",
      color: "purple",
      components: [
        {
          name: "Data Ingestion",
          icon: <SiApachekafka className="h-6 w-6" />,
          technology: "Apache Kafka",
          capacity: "10M+ events/sec",
          features: ["Stream Processing", "Exactly-once", "Schema Registry"],
          scalability: "Auto-scaling clusters",
        },
        {
          name: "Time Series DB",
          icon: <SiInfluxdb className="h-6 w-6" />,
          technology: "InfluxDB Cluster",
          storage: "PB-scale",
          features: ["High Compression", "Downsampling", "Continuous Queries"],
          retention: "Years of history",
        },
        {
          name: "AI/ML Engine",
          icon: <SiTensorflow className="h-6 w-6" />,
          frameworks: ["TensorFlow", "PyTorch", "Scikit-learn"],
          capabilities: ["AutoML", "Model Serving", "A/B Testing"],
          models: "1000+ trained models",
          inference: "< 100ms latency",
        },
        {
          name: "Digital Twin",
          icon: <FaRobot className="h-5 w-5" />,
          technology: "Unity + Three.js",
          features: ["3D Visualization", "Simulation", "What-if Analysis"],
          fidelity: "Millimeter accuracy",
          realtime: "Live synchronization",
        },
      ],
      metrics: {
        ingestion: "10M+ events/sec",
        storage: "PB-scale",
        inference: "< 100ms",
        users: "10K+ concurrent",
      },
    },
    {
      id: "applications",
      name: "Applications Layer",
      icon: <FaChartBar className="h-8 w-8" />,
      description: "Business applications and user interfaces",
      color: "orange",
      components: [
        {
          name: "Production Monitoring",
          icon: <FaIndustry className="h-5 w-5" />,
          modules: [
            "Real-time OEE",
            "Production Planning",
            "Quality Dashboard",
          ],
          users: ["Operations", "Production Managers"],
          metrics: ["OEE", "Throughput", "Yield"],
          updates: "Real-time",
        },
        {
          name: "Energy Management",
          icon: <FaPlug className="h-5 w-5" />,
          modules: [
            "Consumption Analytics",
            "Cost Allocation",
            "Carbon Footprint",
          ],
          users: ["Facility Managers", "Sustainability"],
          savings: "15-35% typical",
          reporting: "ISO 50001 compliant",
        },
        {
          name: "Predictive Maintenance",
          icon: <FaTools className="h-5 w-5" />,
          modules: ["Failure Prediction", "Work Orders", "Spare Parts"],
          users: ["Maintenance", "Reliability Engineers"],
          accuracy: "92%+ prediction",
          impact: "40% downtime reduction",
        },
        {
          name: "Mobile Applications",
          icon: <FaMobileAlt className="h-5 w-5" />,
          platforms: ["iOS", "Android", "PWA"],
          features: ["Push Notifications", "Offline Mode", "AR Support"],
          users: ["Field Technicians", "Managers"],
          updates: "Live sync",
        },
      ],
      metrics: {
        concurrent: "10K+ users",
        response: "< 2s",
        availability: "99.9% SLA",
        alerts: "Real-time",
      },
    },
  ];

  // Security features - all cards with same structure
  const securityFeatures = [
    {
      title: "Zero Trust Architecture",
      description: "Verify every request, never trust by default",
      icon: <FaLock className="h-6 w-6" />,
      features: [
        "Identity-based access control",
        "Micro-segmentation",
        "Least privilege principle",
        "Continuous verification",
      ],
      compliance: ["NIST 800-207", "CISA Zero Trust"],
    },
    {
      title: "End-to-End Encryption",
      description: "Military-grade encryption at every layer",
      icon: <FaShieldAlt className="h-6 w-6" />,
      features: [
        "AES-256 encryption",
        "TLS 1.3 for transit",
        "Quantum-safe algorithms",
        "HSM integration",
      ],
      compliance: ["FIPS 140-2", "Common Criteria"],
    },
    {
      title: "Compliance Frameworks",
      description: "Enterprise compliance certifications",
      icon: <FaShieldAlt className="h-6 w-6" />,
      features: [
        "ISO 27001 certified",
        "IEC 62443 compliant",
        "GDPR ready",
        "SOC 2 Type II",
      ],
      compliance: ["ISO", "IEC", "GDPR", "SOC"],
    },
    {
      title: "Audit & Monitoring",
      description: "Comprehensive security observability",
      icon: <FaEye className="h-6 w-6" />,
      features: [
        "SIEM integration",
        "Real-time threat detection",
        "Forensic readiness",
        "Compliance reporting",
      ],
      compliance: ["ISO 27035", "NIST SP 800-61"],
    },
  ];

  // Deployment options
  const deploymentOptions = [
    {
      name: "Public Cloud",
      provider: "AWS, Azure, GCP",
      icon: <FaCloud className="h-8 w-8" />,
      benefits: [
        "Global Scale Infrastructure",
        "Fully Managed Services",
        "Pay-as-you-go Pricing",
        "99.99% SLA Guarantee",
      ],
      bestFor: "Global enterprises needing maximum scalability",
      regions: "50+ global regions",
    },
    {
      name: "Private Cloud",
      provider: "On-premise / Colocation",
      icon: <FaServer className="h-8 w-8" />,
      benefits: [
        "Complete Data Sovereignty",
        "Custom Network Configuration",
        "Fixed Cost Model",
        "Air-gapped Deployment",
      ],
      bestFor: "Regulated industries and defense contractors",
      regions: "Your data centers",
    },
    {
      name: "Hybrid Deployment",
      provider: "Edge + Cloud Integration",
      icon: <FaNetworkWired className="h-8 w-8" />,
      benefits: [
        "Flexible Data Routing",
        "Ultra-low Latency Edge",
        "Disaster Recovery Ready",
        "Cost Optimization",
      ],
      bestFor: "Manufacturing with multiple global sites",
      regions: "Global edge + cloud",
    },
  ];

  // Color mapping for white theme
  const colorClasses = {
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      iconBg: "bg-green-100 text-green-600",
      gradient: "from-green-50 to-green-100",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-600",
      gradient: "from-blue-50 to-blue-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      iconBg: "bg-purple-100 text-purple-600",
      gradient: "from-purple-50 to-purple-100",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
      iconBg: "bg-orange-100 text-orange-600",
      gradient: "from-orange-50 to-orange-100",
    },
  };

  // Performance optimization: Memoize layer components
  const LayerComponent = useCallback(({ layer, index }) => {
    const colors = colorClasses[layer.color];
    const isEven = index % 2 === 0;

    return (
      <BlurFade key={layer.id} delay={0.3 + index * 0.1} inView>
        <div className="relative">
          {/* Layer Header */}
          <div
            className={`flex items-center gap-4 mb-6 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
          >
            <div
              className={`p-4 rounded-2xl ${colors.iconBg} shadow-lg border ${colors.border}`}
            >
              {layer.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {layer.name}
                </h3>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
                >
                  Layer {index + 1}
                </div>
              </div>
              <p className="text-gray-600 mt-2">{layer.description}</p>
            </div>
          </div>

          {/* Layer Content */}
          <div
            className={`rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.gradient} p-6 shadow-sm`}
          >
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(layer.metrics).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>
                </div>
              ))}
            </div>

            {/* Components */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {layer.components.map((component, compIndex) => (
                <PerformanceOptimizedCard key={compIndex}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${colors.iconBg}`}>
                      {component.icon}
                    </div>
                    <h4 className="font-bold text-gray-900">
                      {component.name}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {/* Render all available data */}
                    {component.vendors && (
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">
                          VENDORS
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {component.vendors.map((vendor, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {vendor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {component.protocols && (
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">
                          PROTOCOLS
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {component.protocols.map((protocol, i) => (
                            <span
                              key={i}
                              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                            >
                              {protocol}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {component.types && (
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">
                          TYPES
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {component.types.map((type, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {component.features && (
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">
                          FEATURES
                        </div>
                        <div className="space-y-1">
                          {component.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional fields */}
                    {component.capacity && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Capacity: </span>
                        {component.capacity}
                      </div>
                    )}

                    {component.latency && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Latency: </span>
                        {component.latency}
                      </div>
                    )}

                    {component.accuracy && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Accuracy: </span>
                        {component.accuracy}
                      </div>
                    )}
                  </div>
                </PerformanceOptimizedCard>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-gray-50/90 to-white/90" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6 border border-green-200">
                  <FaServer className="h-4 w-4" />
                  Platform Architecture
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 bg-clip-text text-transparent">
                  Enterprise-Grade Industrial Platform
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  A scalable, secure, and production-ready architecture built
                  for mission-critical manufacturing operations at global scale.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <BlurFade delay={0.2} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Four-Layer Industrial Architecture
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  From edge sensors to business applications, every layer is
                  optimized for performance, reliability, and scalability.
                </p>
              </div>
            </BlurFade>

            {/* Architecture Layers */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 via-purple-400 to-orange-400 hidden lg:block" />

              {/* Architecture Layers */}
              <div className="space-y-12 lg:space-y-16">
                {architectureLayers.map((layer, index) => (
                  <LayerComponent key={layer.id} layer={layer} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section - White Background */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={0.6} inView>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4 border border-green-200">
                  <FaShieldAlt className="h-4 w-4" />
                  Security & Compliance
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Enterprise-Grade Security
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Built with security-first principles and comprehensive
                  compliance for regulated industries.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <BlurFade key={index} delay={0.7 + index * 0.1} inView>
                  <div className="relative group h-full">
                    <BorderBeam
                      size={300}
                      duration={15}
                      borderWidth={2}
                      className="rounded-xl"
                      colorFrom="#10b981"
                      colorTo="#3b82f6"
                    />

                    <div className="bg-white rounded-xl border border-gray-200 p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-green-100 text-green-600 flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 flex-grow">
                        {feature.features.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="text-xs font-medium text-gray-500 mb-2">
                          COMPLIANCE
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {feature.compliance.map((item, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={0.8} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Flexible Deployment Options
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Choose the deployment model that best fits your security,
                  compliance, and scalability requirements.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-6">
              {deploymentOptions.map((option, index) => (
                <BlurFade key={index} delay={0.9 + index * 0.1} inView>
                  <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:border-green-300 hover:shadow-lg transition-all duration-300 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {option.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {option.provider}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6 flex-grow">
                      <h4 className="font-semibold text-gray-900">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {option.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium text-gray-900">
                          Best for:
                        </span>{" "}
                        {option.bestFor}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-gray-900">
                          Regions:
                        </span>{" "}
                        {option.regions}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={1} inView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Modern Technology Stack
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Built with industry-leading technologies for scalability,
                  reliability, and performance.
                </p>
              </div>
            </BlurFade>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  icon: <SiApachekafka className="h-8 w-8" />,
                  name: "Apache Kafka",
                  use: "Stream Processing",
                },
                {
                  icon: <SiInfluxdb className="h-8 w-8" />,
                  name: "InfluxDB",
                  use: "Time Series",
                },
                {
                  icon: <SiTensorflow className="h-8 w-8" />,
                  name: "TensorFlow",
                  use: "AI/ML",
                },
                {
                  icon: <SiDocker className="h-8 w-8" />,
                  name: "Docker",
                  use: "Containerization",
                },
                {
                  icon: <SiKubernetes className="h-8 w-8" />,
                  name: "Kubernetes",
                  use: "Orchestration",
                },
                {
                  icon: <SiApachespark className="h-8 w-8" />,
                  name: "Apache Spark",
                  use: "Big Data",
                },
              ].map((tech, index) => (
                <BlurFade key={index} delay={1.1 + index * 0.1} inView>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:border-green-300 hover:shadow-md transition-all shadow-sm">
                    <div className="text-gray-700 mb-3 flex justify-center">
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-gray-600">{tech.use}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 opacity-70" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <BlurFade delay={1.2} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-700 text-sm font-medium mb-6 border border-gray-300 shadow-sm">
                <FaExpandArrowsAlt className="h-4 w-4" />
                Enterprise Ready
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Scale Your Operations?
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Schedule a personalized architecture review with our solutions
                architects and see how our platform can transform your
                manufacturing operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-green-200 transition-all hover:scale-105">
                  Request Architecture Review
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all">
                  Download Technical Whitepaper
                </button>
              </div>

              <p className="text-gray-500 text-sm mt-6">
                Get detailed specifications, benchmarks, and case studies
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
};

export default React.memo(PlatformArchitecture);
