import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const IiotConnectivity = () => {
  const primaryColor = "bg-green-600 text-white";

  const sections = [
    {
      title: "IoT Messaging Protocols",
      layout: "image-right",
      image: "services/iot/img1.webp",
      items: [
        {
          name: "MQTT",
          desc: "Lightweight publish/subscribe messaging for resource-constrained devices",
        },
        {
          name: "AMQP",
          desc: "Advanced Message Queuing Protocol for reliable enterprise messaging",
        },
        {
          name: "Kafka",
          desc: "Distributed event streaming for high-throughput data pipelines",
        },
        {
          name: "CoAP",
          desc: "Constrained Application Protocol for low-power IoT devices",
        },
        {
          name: "WebSockets",
          desc: "Full-duplex communication for real-time interactions",
        },
      ],
    },
    {
      title: "Edge & Gateway Connectivity",
      layout: "image-left",
      image: "services/iot/img2.webp",
      items: [
        {
          name: "OPC UA Edge Gateway",
          desc: "Secure data aggregation at the edge for industrial automation",
        },
        {
          name: "Modbus IoT Gateway",
          desc: "Bridge legacy devices to cloud with seamless integration",
        },
        {
          name: "Edge Computing Nodes",
          desc: "Local data processing and analytics for reduced latency",
        },
        {
          name: "Industrial Data Loggers",
          desc: "Reliable data collection and buffering for uninterrupted flow",
        },
        {
          name: "Edge IoT Gateway",
          desc: "Convert pneumatic/analog data to digital for cloud-ready data",
        },
      ],
    },
    {
      title: "Wireless Industrial Communication",
      layout: "image-right",
      image: "services/iot/img3.webp",
      items: [
        {
          name: "WiFi Industrial Networks",
          desc: "High-speed wireless connectivity for industrial applications",
        },
        {
          name: "Zigbee",
          desc: "Low-power mesh networking for sensor networks",
        },
        {
          name: "LoRaWAN",
          desc: "Long-range, low-power WAN for remote monitoring",
        },
        {
          name: "NB-IoT",
          desc: "Narrowband IoT for cellular connectivity",
        },
        {
          name: "5G Industrial",
          desc: "Ultra-reliable low-latency for mission-critical operations",
        },
      ],
    },
    {
      title: "IoT Platforms Integration",
      layout: "image-left",
      image: "services/iot/img4.webp",
      items: [
        {
          name: "AWS IoT Core",
          desc: "Scalable cloud services for device management and analytics",
        },
        {
          name: "Azure IoT Hub",
          desc: "Secure bidirectional communication between devices and cloud",
        },
        {
          name: "Google Cloud IoT",
          desc: "AI-powered IoT for intelligent data processing",
        },
        {
          name: "Edge AI Platforms",
          desc: "On-device AI for real-time decision-making",
        },
      ],
    },
    {
      title: "Smart Sensors & Field Devices",
      layout: "image-right",
      image: "services/iot/img5.webp",
      items: [
        {
          name: "Temperature sensors",
          desc: "Precision monitoring for process control",
        },
        {
          name: "Pressure transmitters",
          desc: "Accurate pressure measurement in harsh environments",
        },
        {
          name: "Flow meters",
          desc: "Measure fluid flow for efficiency optimization",
        },
        {
          name: "Vibration sensors",
          desc: "Predictive maintenance through vibration analysis",
        },
        {
          name: "Energy meters",
          desc: "Smart metering for energy management",
        },
        {
          name: "Cameras",
          desc: "Vision systems for quality inspection and OCR",
        },
        {
          name: "Encoders",
          desc: "Precise position and speed feedback for motors",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Width with Image Background */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="services/iot/iiot.avif"
            alt="Smart Factory"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80";
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <Badge className="bg-green-600 text-white border-0 mb-4">
              Industry 4.0 Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industry INTEGRA 360
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Provides modern IIoT connectivity to enable smart factories and
              connected industrial ecosystems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Explore Solutions
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "500+", label: "Connected Factories" },
            { number: "99.9%", label: "Uptime" },
            { number: "50ms", label: "Latency" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-xl p-6 text-center border border-gray-100"
            >
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-20" />

      {/* Alternating Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        {sections.map((section, index) => (
          <section key={index}>
            <div
              className={`flex flex-col ${section.layout === "image-left" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[400px] object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-l-4 border-green-600 pl-4 py-2"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Industry INTEGRA 360?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Scalability
              </h3>
              <p className="text-gray-600">
                Seamlessly scale from edge to cloud with our integrated
                solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600">
                End-to-end encryption and compliance for industrial-grade
                protection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reliability
              </h3>
              <p className="text-gray-600">
                99.99% uptime with redundant systems for mission-critical
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to transform your industrial connectivity?
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of manufacturers who have already modernized their
          operations with our IIoT solutions.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default IiotConnectivity;
