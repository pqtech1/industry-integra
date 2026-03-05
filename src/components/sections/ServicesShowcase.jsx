import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Plug,
  Cpu,
  Cloud,
  Monitor,
  Database,
  Code,
  Globe,
  Layers,
  Smartphone,
  Factory,
  Zap,
  Brain,
  LineChart,
  AlertTriangle,
  CheckCircle,
  Wrench,
  Settings,
  Clock,
  Shield,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesShowcase = () => {
  const services = [
    {
      category: "Professional Services",
      color: "blue",
      image: "services/all-services/professional-services.avif",
      items: [
        {
          title: "End-to-end Implementation",
          description:
            "From consultation to implementation, our experts ensure seamless integration.",
          icon: <Workflow className="h-5 w-5" />,
        },
        {
          title: "Implementation Consulting",
          description:
            "Strategic roadmap and planning for successful digital transformation.",
          icon: <Target className="h-5 w-5" />,
        },
        {
          title: "System Integration",
          description:
            "Seamless connectivity solutions for legacy and modern systems.",
          icon: <Plug className="h-5 w-5" />,
        },
        {
          title: "Project Management",
          description:
            "Complete project lifecycle management ensuring on-time delivery.",
          icon: <Users className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Technical Services",
      color: "green",
      image: "services/all-services/technical-services.avif",
      items: [
        {
          title: "PLC Programming",
          description:
            "Custom PLC programming for automation and control systems.",
          icon: <Cpu className="h-5 w-5" />,
        },
        {
          title: "Cloud Infrastructure",
          description:
            "Secure and scalable cloud solutions for industrial data.",
          icon: <Cloud className="h-5 w-5" />,
        },
        {
          title: "SCADA Configuration",
          description: "Supervisory Control and Data Acquisition system setup.",
          icon: <Monitor className="h-5 w-5" />,
        },
        {
          title: "Data Integration",
          description:
            "Real-time data collection, processing, and visualization.",
          icon: <Database className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Software Services",
      color: "purple",
      image: "services/all-services/software-services.avif",
      items: [
        {
          title: "Custom Development",
          description:
            "Tailored software solutions for specific industrial needs.",
          icon: <Code className="h-5 w-5" />,
        },
        {
          title: "IoT Applications",
          description: "Internet of Things solutions for smart manufacturing.",
          icon: <Globe className="h-5 w-5" />,
        },
        {
          title: "ERP Integration",
          description: "Integration with Enterprise Resource Planning systems.",
          icon: <Layers className="h-5 w-5" />,
        },
        {
          title: "Mobile Applications",
          description: "Mobile solutions for remote monitoring and control.",
          icon: <Smartphone className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "AI & Analytics",
      color: "indigo",
      image: "services/all-services/ai-analytics.webp",
      items: [
        {
          title: "Predictive Analytics",
          description:
            "Machine learning models for predictive maintenance and quality control.",
          icon: <Brain className="h-5 w-5" />,
        },
        {
          title: "Performance Optimization",
          description:
            "AI-driven insights to optimize production efficiency and reduce waste.",
          icon: <LineChart className="h-5 w-5" />,
        },
        {
          title: "Anomaly Detection",
          description:
            "Real-time detection of deviations and potential issues in operations.",
          icon: <AlertTriangle className="h-5 w-5" />,
        },
        {
          title: "Digital Twin",
          description:
            "Virtual replica of physical assets for simulation and optimization.",
          icon: <Factory className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Smart Factory",
      color: "orange",
      image: "services/all-services/smart-factory.avif",
      items: [
        {
          title: "Plant Digitization",
          description:
            "Complete digital transformation of manufacturing facilities.",
          icon: <Factory className="h-5 w-5" />,
        },
        {
          title: "Remote Monitoring",
          description: "24/7 remote monitoring and control capabilities.",
          icon: <Monitor className="h-5 w-5" />,
        },
        {
          title: "Industry 4.0",
          description:
            "Advanced manufacturing technologies and smart solutions.",
          icon: <Zap className="h-5 w-5" />,
        },
        {
          title: "Automation Solutions",
          description:
            "Robotic process automation and smart manufacturing systems.",
          icon: <Cpu className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Commissioning & Support",
      color: "red",
      image: "services/all-services/commissioning-support.avif",
      items: [
        {
          title: "Factory Acceptance Testing",
          description: "Comprehensive testing before system installation.",
          icon: <CheckCircle className="h-5 w-5" />,
        },
        {
          title: "Site Installation",
          description: "Professional installation and setup at your facility.",
          icon: <Wrench className="h-5 w-5" />,
        },
        {
          title: "Technical Support",
          description: "24/7 support for critical industrial systems.",
          icon: <Clock className="h-5 w-5" />,
        },
        {
          title: "System Maintenance",
          description: "Regular maintenance and optimization services.",
          icon: <Settings className="h-5 w-5" />,
        },
      ],
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-600",
      button: "text-blue-600 hover:text-blue-800",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      iconBg: "bg-green-100 text-green-600",
      button: "text-green-600 hover:text-green-800",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      iconBg: "bg-purple-100 text-purple-600",
      button: "text-purple-600 hover:text-purple-800",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
      iconBg: "bg-indigo-100 text-indigo-600",
      button: "text-indigo-600 hover:text-indigo-800",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
      iconBg: "bg-orange-100 text-orange-600",
      button: "text-orange-600 hover:text-orange-800",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      iconBg: "bg-red-100 text-red-600",
      button: "text-red-600 hover:text-red-800",
    },
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-green-600 text-sm font-medium mb-4">
            <Wrench className="h-4 w-4" />
            Our Services
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Industrial Solutions
          </h2>
          <p className="text-lg text-gray-600">
            End-to-end services for digital transformation and manufacturing
            excellence
          </p>

          {/* View All Services Link in Header */}
          <div className="mt-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-blue-500 font-medium rounded-lg hover:underline transition-colors"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Alternating Services Sections */}
        <div className="space-y-24">
          {services.map((serviceGroup, index) => {
            const colors = colorClasses[serviceGroup.color];
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-stretch ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Image Section - Touching edges */}
                  <div
                    className={`relative h-full min-h-[500px] ${
                      isEven
                        ? "lg:-ml-6 xl:-ml-12"
                        : "lg:-mr-6 xl:-mr-12 lg:col-start-2"
                    }`}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-none lg:rounded-l-2xl shadow-xl">
                      <img
                        src={serviceGroup.image}
                        alt={serviceGroup.category}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/800x600?text=Service+Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                      {/* Category Title Overlay - FIXED PADDING */}
                      <div className="absolute bottom-6 left-6 lg:left-12 xl:left-16 right-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-3 rounded-lg bg-white/20 backdrop-blur-sm ${colors.iconBg} bg-opacity-90`}
                          >
                            {serviceGroup.category ===
                              "Professional Services" && (
                              <Users className="h-6 w-6" />
                            )}
                            {serviceGroup.category === "Technical Services" && (
                              <Settings className="h-6 w-6" />
                            )}
                            {serviceGroup.category === "Software Services" && (
                              <Code className="h-6 w-6" />
                            )}
                            {serviceGroup.category === "AI & Analytics" && (
                              <Brain className="h-6 w-6" />
                            )}
                            {serviceGroup.category === "Smart Factory" && (
                              <Factory className="h-6 w-6" />
                            )}
                            {serviceGroup.category ===
                              "Commissioning & Support" && (
                              <Shield className="h-6 w-6" />
                            )}
                          </div>
                          <h3
                            className={`text-2xl font-bold text-white drop-shadow-lg`}
                          >
                            {serviceGroup.category}
                          </h3>
                        </div>

                        {/* Quick Stats or Tagline */}
                        <p className="text-white/90 text-sm mt-2 max-w-md drop-shadow-lg lg:pl-14">
                          {serviceGroup.items.length} specialized solutions for
                          your business
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`py-8 ${
                      isEven ? "lg:pl-8" : "lg:pr-8 lg:col-start-1"
                    }`}
                  >
                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {serviceGroup.items.map((service, serviceIndex) => (
                        <Card
                          key={serviceIndex}
                          className={`border ${colors.border} hover:shadow-lg transition-all duration-300 h-full group hover:scale-[1.02] cursor-pointer`}
                        >
                          <CardContent className="p-5 h-full flex flex-col">
                            <div
                              className={`p-2.5 rounded-lg ${colors.iconBg} inline-flex mb-3 w-fit group-hover:scale-110 transition-transform`}
                            >
                              {service.icon}
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-base">
                              {service.title}
                            </h4>
                            <p className="text-sm text-gray-600 flex-grow">
                              {service.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary CTA */}
      </div>
    </section>
  );
};

export default ServicesShowcase;
