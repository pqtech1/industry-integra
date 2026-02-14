import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Zap,
  Cpu,
  Cloud,
  Shield,
  Users,
  Database,
  Globe,
} from "lucide-react";

const FAQSection = () => {
  const faqCategories = [
    {
      category: "Platform Features",
      color: "blue",
      icon: <Zap className="h-5 w-5" />,
      items: [
        {
          question:
            "What makes INTEGRA 360 different from other industrial IoT platforms?",
          answer:
            "INTEGRA 360 offers a unified platform that combines real-time production monitoring, energy management, quality control, and predictive maintenance into a single intelligent system. Unlike piecemeal solutions, our platform provides seamless integration, AI-driven insights, and end-to-end traceability with 99.9% data accuracy.",
        },
        {
          question: "Does the platform work with legacy equipment and systems?",
          answer:
            "Yes, INTEGRA 360 is designed for hybrid environments. We provide connectivity solutions for legacy PLCs, SCADA systems, and traditional manufacturing equipment through various protocols (OPC UA/DA, Modbus, MQTT, etc.). Our system integration services ensure smooth connectivity between old and new systems.",
        },
        {
          question: "How long does it take to implement the platform?",
          answer:
            "Implementation timelines vary based on factory size and complexity. Standard implementations take 4-8 weeks, while comprehensive digital transformations can take 3-6 months. We offer phased implementation starting with high-impact areas to deliver quick ROI.",
        },
      ],
    },
    {
      category: "Technical & Integration",
      color: "green",
      icon: <Cpu className="h-5 w-5" />,
      items: [
        {
          question: "What are the data security measures in place?",
          answer:
            "We implement enterprise-grade security including end-to-end encryption, role-based access control, audit logging, and compliance with industry standards (ISO 27001, IEC 62443). Data can be hosted on-premise, in private cloud, or our secure cloud infrastructure with regular security audits.",
        },
        {
          question:
            "Can the platform integrate with our existing ERP/MES systems?",
          answer:
            "Yes, INTEGRA 360 offers pre-built connectors for major ERP systems (SAP, Oracle, Microsoft Dynamics) and MES platforms. We also provide API-based integration for custom systems and support real-time data synchronization between platforms.",
        },
        {
          question: "What kind of infrastructure is required?",
          answer:
            "Minimal infrastructure is needed. For cloud deployment, you only need internet connectivity and basic networking. For on-premise deployment, we recommend industrial-grade servers with redundancy. Our technical team provides complete infrastructure planning and setup services.",
        },
      ],
    },
    {
      category: "AI & Analytics",
      color: "purple",
      icon: <Database className="h-5 w-5" />,
      items: [
        {
          question: "How accurate are the predictive maintenance algorithms?",
          answer:
            "Our AI models achieve 92-96% accuracy in predicting equipment failures. Models are trained on industry-specific data and continuously improve with more operational data. We provide confidence scores for each prediction to help prioritize maintenance actions.",
        },
        {
          question: "What data is needed for AI model training?",
          answer:
            "We need historical operational data (minimum 6-12 months), equipment specifications, maintenance records, and failure logs. For new installations without historical data, we start with rule-based alerts and develop AI models as data accumulates.",
        },
        {
          question: "Can we customize the analytics dashboards?",
          answer:
            "Yes, dashboards are fully customizable. Users can create personalized views, KPIs, and reports without coding. Our drag-and-drop interface allows operations managers, maintenance teams, and executives to build dashboards specific to their roles.",
        },
      ],
    },
    {
      category: "Services & Support",
      color: "orange",
      icon: <Users className="h-5 w-5" />,
      items: [
        {
          question: "What services are included in implementation?",
          answer:
            "Our end-to-end implementation includes requirements analysis, system design, hardware installation (if needed), software configuration, data integration, user training, and go-live support. We also provide change management consulting to ensure smooth adoption.",
        },
        {
          question: "Do you offer training for our team?",
          answer:
            "Yes, we provide comprehensive training programs including administrator training, operator training, and advanced analytics workshops. Training is available onsite, online, or at our training centers. We also provide ongoing knowledge transfer and documentation.",
        },
        {
          question: "What support options are available?",
          answer:
            "We offer 24/7 technical support with guaranteed response times (1 hour for critical issues). Support includes remote troubleshooting, on-site assistance if needed, regular system health checks, software updates, and performance optimization services.",
        },
      ],
    },
    {
      category: "Pricing & ROI",
      color: "red",
      icon: <Shield className="h-5 w-5" />,
      items: [
        {
          question: "What is the typical ROI for implementing INTEGRA 360?",
          answer:
            "Most customers achieve ROI within 12-18 months through: 15-35% reduction in energy costs, 20-40% reduction in unplanned downtime, 10-25% improvement in OEE, and 30-50% reduction in quality defects. We provide ROI calculators and business case development support.",
        },
        {
          question: "What are the pricing models available?",
          answer:
            "We offer flexible pricing: subscription-based (monthly/annual per asset/user), project-based for implementations, and hybrid models. Pricing depends on factory size, number of assets, and features required. Contact us for a customized quote.",
        },
        {
          question: "Is there a free trial or pilot program?",
          answer:
            "Yes, we offer a 30-day pilot program for qualified organizations. The pilot includes limited functionality on selected production lines with full support. This allows you to validate benefits before full-scale implementation.",
        },
      ],
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
      iconBg: "bg-green-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      iconBg: "bg-purple-100",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      iconBg: "bg-orange-100",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-600",
      border: "border-red-200",
      iconBg: "bg-red-100",
    },
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Questions Answered
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about INTEGRA 360 platform and
            services
          </p>
        </div>

        {/* FAQ Content - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="">
            {faqCategories.map((category, categoryIndex) => {
              const colors = colorClasses[category.color];

              return (
                <div key={categoryIndex} className="">
                  {/* Category Header */}
                  <div className="flex items-center  gap-3 justify-center">
                    <div
                      className={`p-2 rounded-lg ${colors.iconBg} ${colors.text}`}
                    >
                      {category.icon}
                    </div>
                    <h3 className={`text-lg mt-3 font-semibold ${colors.text}`}>
                      {category.category}
                    </h3>
                  </div>

                  {/* Accordion for this category */}
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`item-${categoryIndex}-${itemIndex}`}
                        className={`border rounded-lg ${colors.border} overflow-hidden`}
                      >
                        <AccordionTrigger
                          className={`
                          px-4 py-3 text-left hover:no-underline 
                          hover:bg-gray-50 transition-colors
                          ${colors.bg}
                        `}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-1.5 rounded ${colors.iconBg} flex-shrink-0 mt-0.5`}
                            >
                              <div className={`h-4 w-4 ${colors.text}`}>?</div>
                            </div>
                            <span className="text-sm md:text-base font-medium text-gray-900">
                              {item.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3 pt-0">
                          <div className="pt-3 pl-9">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>

        {/* Still have questions - Centered and Compact */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium mb-3">
              <Globe className="h-3 w-3" />
              Still Have Questions?
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Can't find what you're looking for?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Our experts are ready to answer any specific questions about your
              manufacturing operations.
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
