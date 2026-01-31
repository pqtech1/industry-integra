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
} from "react-icons/fa";
import {
  SiApachekafka,
  SiInfluxdb,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiApachespark,
} from "react-icons/si";

// Performance optimization: Memoize components
const PerformanceOptimizedCard = React.memo(({ children, className = "" }) => (
  <div
    className={`bg-white border border-gray-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
  >
    {children}
  </div>
));

PerformanceOptimizedCard.displayName = "PerformanceOptimizedCard";

const PlatformArchitecture = () => {
  // Architecture layers data
  const architectureLayers = [
    {
      id: "edge",
      name: "Edge Layer",
      icon: <FaIndustry className="h-6 w-6 md:h-8 md:w-8" />,
      description: "Physical devices and sensors at the factory floor",
      color: "green",
      components: [
        {
          name: "PLC Controllers",
          icon: <FaCogs className="h-4 w-4 md:h-5 md:w-5" />,
          vendors: ["Siemens", "Allen-Bradley", "Schneider", "Mitsubishi"],
          protocols: ["Modbus TCP", "Profibus", "Ethernet/IP", "OPC UA"],
          capacity: "Real-time control",
          latency: "< 10ms response",
        },
        {
          name: "IoT Sensors",
          icon: <FaPlug className="h-4 w-4 md:h-5 md:w-5" />,
          types: ["Temperature", "Pressure", "Vibration", "Flow"],
          protocols: ["MQTT", "CoAP", "BLE 5.0", "LoRaWAN"],
          sampling: "1ms - 1sec intervals",
          accuracy: "±0.1% full scale",
        },
        {
          name: "Smart Meters",
          icon: <FaBolt className="h-4 w-4 md:h-5 md:w-5" />,
          metrics: ["Energy", "Water", "Gas", "Air Quality"],
          standards: ["IEC 62056", "ANSI C12", "DLMS/COSEM"],
          precision: "Class 0.5 accuracy",
          integration: "15-min interval data",
        },
        {
          name: "Vision Systems",
          icon: <FaEye className="h-4 w-4 md:h-5 md:w-5" />,
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
      icon: <FaNetworkWired className="h-6 w-6 md:h-8 md:w-8" />,
      description: "Local aggregation and protocol translation",
      color: "green",
      components: [
        {
          name: "Industrial Gateways",
          icon: <FaExchangeAlt className="h-4 w-4 md:h-5 md:w-5" />,
          features: ["Multi-protocol", "Edge Computing", "Data Buffering"],
          capacity: "100K data points/sec",
          protocols: ["OPC UA", "MQTT", "REST API"],
          redundancy: "Dual power supply",
        },
        {
          name: "Protocol Converters",
          icon: <FaSync className="h-4 w-4 md:h-5 md:w-5" />,
          conversions: ["OPC UA ↔ MQTT", "Modbus → REST", "Profibus → TCP"],
          throughput: "50K messages/sec",
          latency: "< 5ms",
          reliability: "99.95% uptime",
        },
        {
          name: "Edge Analytics",
          icon: <FaBrain className="h-4 w-4 md:h-5 md:w-5" />,
          capabilities: ["Anomaly Detection", "Data Filtering", "Aggregation"],
          models: ["Pre-trained", "Custom", "Real-time"],
          processing: "Local ML inference",
          storage: "On-device buffer",
        },
        {
          name: "Local Storage",
          icon: <FaDatabase className="h-4 w-4 md:h-5 md:w-5" />,
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
      icon: <FaCloud className="h-6 w-6 md:h-8 md:w-8" />,
      description: "Core processing, storage, and intelligence",
      color: "green",
      components: [
        {
          name: "Data Ingestion",
          icon: <SiApachekafka className="h-5 w-5 md:h-6 md:w-6" />,
          technology: "Apache Kafka",
          capacity: "10M+ events/sec",
          features: ["Stream Processing", "Exactly-once", "Schema Registry"],
          scalability: "Auto-scaling clusters",
        },
        {
          name: "Time Series DB",
          icon: <SiInfluxdb className="h-5 w-5 md:h-6 md:w-6" />,
          technology: "InfluxDB Cluster",
          storage: "PB-scale",
          features: ["High Compression", "Downsampling", "Continuous Queries"],
          retention: "Years of history",
        },
        {
          name: "AI/ML Engine",
          icon: <SiTensorflow className="h-5 w-5 md:h-6 md:w-6" />,
          frameworks: ["TensorFlow", "PyTorch", "Scikit-learn"],
          capabilities: ["AutoML", "Model Serving", "A/B Testing"],
          models: "1000+ trained models",
          inference: "< 100ms latency",
        },
        {
          name: "Digital Twin",
          icon: <FaRobot className="h-4 w-4 md:h-5 md:w-5" />,
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
      icon: <FaChartBar className="h-6 w-6 md:h-8 md:w-8" />,
      description: "Business applications and user interfaces",
      color: "green",
      components: [
        {
          name: "Production Monitoring",
          icon: <FaIndustry className="h-4 w-4 md:h-5 md:w-5" />,
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
          icon: <FaPlug className="h-4 w-4 md:h-5 md:w-5" />,
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
          icon: <FaTools className="h-4 w-4 md:h-5 md:w-5" />,
          modules: ["Failure Prediction", "Work Orders", "Spare Parts"],
          users: ["Maintenance", "Reliability Engineers"],
          accuracy: "92%+ prediction",
          impact: "40% downtime reduction",
        },
        {
          name: "Mobile Applications",
          icon: <FaMobileAlt className="h-4 w-4 md:h-5 md:w-5" />,
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

  // Security features
  const securityFeatures = [
    {
      title: "Zero Trust Architecture",
      description: "Verify every request, never trust by default",
      icon: <FaLock className="h-5 w-5 md:h-6 md:w-6" />,
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
      icon: <FaShieldAlt className="h-5 w-5 md:h-6 md:w-6" />,
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
      icon: <FaShieldAlt className="h-5 w-5 md:h-6 md:w-6" />,
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
      icon: <FaEye className="h-5 w-5 md:h-6 md:w-6" />,
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
      icon: <FaCloud className="h-6 w-6 md:h-8 md:w-8" />,
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
      icon: <FaServer className="h-6 w-6 md:h-8 md:w-8" />,
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
      icon: <FaNetworkWired className="h-6 w-6 md:h-8 md:w-8" />,
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

  // Color mapping - using only green, black, gray
  const colorClasses = {
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      iconBg: "bg-green-100 text-green-600",
      gradient: "from-green-50 to-green-100",
      bullet: "bg-green-500",
    },
  };

  // Layer Component
  const LayerComponent = useCallback(({ layer, index }) => {
    const colors = colorClasses.green;

    return (
      <div key={layer.id} className="relative mb-8 md:mb-12">
        {/* Layer Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div
            className={`p-3 md:p-4 rounded-xl ${colors.iconBg} shadow-lg border ${colors.border}`}
          >
            {layer.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 md:gap-3">
              <h3>{layer.name}</h3>
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
              >
                Layer {index + 1}
              </div>
            </div>
            <p className="text-gray-600 mt-1">{layer.description}</p>
          </div>
        </div>

        {/* Layer Content */}
        <div
          className={`rounded-xl border ${colors.border} bg-gradient-to-br ${colors.gradient} p-4 md:p-6 shadow-lg`}
        >
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            {Object.entries(layer.metrics).map(([key, value]) => (
              <div
                key={key}
                className="text-center p-3 md:p-4 bg-white rounded-xl border border-gray-200 shadow-lg"
              >
                <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {value}
                </div>
                <div className="text-xs font-medium text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </div>
              </div>
            ))}
          </div>

          {/* Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {layer.components.map((component, compIndex) => (
              <PerformanceOptimizedCard
                key={compIndex}
                className="h-full flex flex-col"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className={`p-1.5 md:p-2 rounded-lg ${colors.iconBg}`}>
                    {component.icon}
                  </div>
                  <h4>{component.name}</h4>
                </div>

                <div className="space-y-2 md:space-y-3 flex-1">
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
                            className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
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
                            className="text-xs bg-green-50 text-green-700 px-1.5 py-0.5 rounded"
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
                            className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
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
                            className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Additional fields */}
                  {component.capacity && (
                    <div className="text-xs md:text-sm text-gray-600">
                      <span className="font-medium">Capacity: </span>
                      {component.capacity}
                    </div>
                  )}

                  {component.latency && (
                    <div className="text-xs md:text-sm text-gray-600">
                      <span className="font-medium">Latency: </span>
                      {component.latency}
                    </div>
                  )}

                  {component.accuracy && (
                    <div className="text-xs md:text-sm text-gray-600">
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
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('img/platform-architecture-bg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-green-50 text-green-700 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-green-200 shadow-lg">
                <FaServer className="h-3 w-3 md:h-4 md:w-4" />
                Platform Architecture
              </div>

              <h1 className="mb-4 md:mb-6 text-white">
                Enterprise-Grade Industrial Platform
              </h1>

              <p className="mb-6 md:mb-8 text-gray-100">
                A scalable, secure, and production-ready architecture built for
                mission-critical manufacturing operations at global scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Four-Layer Industrial Architecture</h2>
              <p className="text-gray-600">
                From edge sensors to business applications, every layer is
                optimized for performance, reliability, and scalability.
              </p>
            </div>

            {/* Architecture Layers */}
            <div className="space-y-8 md:space-y-12">
              {architectureLayers.map((layer, index) => (
                <LayerComponent key={layer.id} layer={layer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-8 md:py-12 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-medium mb-4 border border-green-200 shadow-lg">
                <FaShieldAlt className="h-3 w-3 md:h-4 md:w-4" />
                Security & Compliance
              </div>

              <h2 className="mb-4">Enterprise-Grade Security</h2>
              <p className="text-gray-600">
                Built with security-first principles and comprehensive
                compliance for regulated industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 h-full flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="p-2 md:p-3 rounded-xl bg-green-100 text-green-600 flex-shrink-0 shadow">
                      {feature.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="mb-1 md:mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3 flex-grow">
                    {feature.features.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 md:gap-3 text-gray-700"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                    <div className="text-xs font-medium text-gray-500 mb-1 md:mb-2">
                      COMPLIANCE
                    </div>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {feature.compliance.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-8 md:py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Flexible Deployment Options</h2>
              <p className="text-gray-600">
                Choose the deployment model that best fits your security,
                compliance, and scalability requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {deploymentOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 h-full hover:border-green-300 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                      {option.icon}
                    </div>
                    <div>
                      <h3>{option.name}</h3>
                      <p className="text-gray-600 text-sm">{option.provider}</p>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 flex-grow">
                    <h4>Key Benefits</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {option.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 md:gap-3 text-gray-700"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 md:pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-1 md:mb-2">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-8 md:py-12 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="mb-4">Modern Technology Stack</h2>
              <p className="text-gray-600">
                Built with industry-leading technologies for scalability,
                reliability, and performance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {[
                {
                  icon: <SiApachekafka className="h-6 w-6 md:h-8 md:w-8" />,
                  name: "Apache Kafka",
                  use: "Stream Processing",
                },
                {
                  icon: <SiInfluxdb className="h-6 w-6 md:h-8 md:w-8" />,
                  name: "InfluxDB",
                  use: "Time Series",
                },
                {
                  icon: <SiTensorflow className="h-6 w-6 md:h-8 md:w-8" />,
                  name: "TensorFlow",
                  use: "AI/ML",
                },
                {
                  icon: <SiDocker className="h-6 w-6 md:h-8 md:w-8" />,
                  name: "Docker",
                  use: "Containerization",
                },
                {
                  icon: <SiKubernetes className="h-6 w-6 md:h-8 md:w-8" />,
                  name: "Kubernetes",
                  use: "Orchestration",
                },
                {
                  icon: <SiApachespark className="h-6 w-6 md:h-8 md:w-8" />,
                  name: "Apache Spark",
                  use: "Big Data",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 text-center hover:border-green-300 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-gray-700 mb-2 md:mb-3 flex justify-center">
                    {tech.icon}
                  </div>
                  <h5 className="mb-1">{tech.name}</h5>
                  <p className="text-xs text-gray-600">{tech.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-green-50 via-gray-50 to-green-50 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 md:px-6 py-1.5 md:py-3 rounded-full bg-white text-gray-700 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-gray-300 shadow-lg">
              <FaExpandArrowsAlt className="h-3 w-3 md:h-4 md:w-4" />
              Enterprise Ready
            </div>

            <h2 className="mb-4 md:mb-6">Ready to Scale Your Operations?</h2>

            <p className="text-gray-600 mb-6 md:mb-8">
              Schedule a personalized architecture review with our solutions
              architects and see how our platform can transform your
              manufacturing operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-4 md:mb-6">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-green-200 transition-all duration-300 hover:scale-105 text-sm md:text-base shadow-xl">
                Request Architecture Review
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm md:text-base shadow-xl">
                Download Technical Whitepaper
              </button>
            </div>

            <p className="text-gray-500 text-sm">
              Get detailed specifications, benchmarks, and case studies
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(PlatformArchitecture);
