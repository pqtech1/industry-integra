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
    <section className=" bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
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
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((serviceGroup, index) => {
            const colors = colorClasses[serviceGroup.color];

            return (
              <div key={index} className="">
                {/* Category Header */}
                <div className="flex justify-between">
                  {/* Left Side: Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${colors.iconBg} flex items-center justify-center`}
                    >
                      {serviceGroup.category === "Professional Services" && (
                        <Users className="h-5 w-5" />
                      )}
                      {serviceGroup.category === "Technical Services" && (
                        <Settings className="h-5 w-5" />
                      )}
                      {serviceGroup.category === "Software Services" && (
                        <Code className="h-5 w-5" />
                      )}
                      {serviceGroup.category === "AI & Analytics" && (
                        <Brain className="h-5 w-5" />
                      )}
                      {serviceGroup.category === "Smart Factory" && (
                        <Factory className="h-5 w-5" />
                      )}
                      {serviceGroup.category === "Commissioning & Support" && (
                        <Shield className="h-5 w-5" />
                      )}
                    </div>

                    <h3
                      className={`text-xl mt-4 font-bold leading-none ${colors.text}`}
                    >
                      {serviceGroup.category}
                    </h3>
                  </div>

                  {/* Right Side: View More */}
                  <Link
                    to={`/services/${serviceGroup.category
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/\s+/g, "-")}`}
                    className={`flex items-center gap-1 text-sm font-medium ${colors.button} hover:underline`}
                  >
                    View More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Services Grid - Always 4 columns */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {serviceGroup.items.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className={`border ${colors.border} hover:shadow-md transition-shadow duration-300 h-full`}
                    >
                      <CardContent className="p-5 h-full flex flex-col">
                        {/* Service Icon */}
                        <div
                          className={`p-3 rounded-lg ${colors.iconBg} inline-flex mb-4`}
                        >
                          {service.icon}
                        </div>

                        {/* Service Title */}
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h4>

                        {/* Service Description */}
                        <p className="text-sm text-gray-600 flex-grow">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div
            className={`bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border ${colorClasses.blue.border}`}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to Transform Your Operations?
                </h3>
                <p className="text-gray-700">
                  Our comprehensive service portfolio covers every aspect of
                  industrial digital transformation, from initial consultation
                  to ongoing support and maintenance.
                </p>
              </div>
              <div className="md:w-1/3">
                <a
                  href="https://positivequadrant.in/contact-us"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
