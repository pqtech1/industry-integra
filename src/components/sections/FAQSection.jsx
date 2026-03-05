import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question:
        "What makes INTEGRA 360 different from other industrial IoT platforms?",
      answer:
        "INTEGRA 360 offers a unified platform that combines real-time production monitoring, energy management, quality control, and predictive maintenance into a single intelligent system. Unlike piecemeal solutions, our platform provides seamless integration, AI-driven insights, and end-to-end traceability with 99.9% data accuracy.",
    },
    {
      question: "Does the platform work with legacy equipment and systems?",
      answer:
        "Yes, INTEGRA 360 is designed for hybrid environments. We provide connectivity solutions for legacy PLCs, SCADA systems, and traditional manufacturing equipment through various protocols (OPC UA/DA, Modbus, MQTT). Our system integration services ensure smooth connectivity between old and new systems.",
    },
    {
      question: "What are the data security measures in place?",
      answer:
        "We implement enterprise-grade security including end-to-end encryption, role-based access control, audit logging, and compliance with industry standards (ISO 27001, IEC 62443). Data can be hosted on-premise, in private cloud, or our secure cloud infrastructure with regular security audits.",
    },
    {
      question: "How accurate are the predictive maintenance algorithms?",
      answer:
        "Our AI models achieve 92-96% accuracy in predicting equipment failures. Models are trained on industry-specific data and continuously improve with more operational data. We provide confidence scores for each prediction to help prioritize maintenance actions.",
    },
    {
      question: "Can the platform integrate with our existing ERP/MES systems?",
      answer:
        "Yes, INTEGRA 360 offers pre-built connectors for major ERP systems (SAP, Oracle, Microsoft Dynamics) and MES platforms. We also provide API-based integration for custom systems and support real-time data synchronization between platforms.",
    },
    {
      question: "What is the typical ROI for implementing INTEGRA 360?",
      answer:
        "Most customers achieve ROI within 12-18 months through: 15-35% reduction in energy costs, 20-40% reduction in unplanned downtime, 10-25% improvement in OEE, and 30-50% reduction in quality defects. We provide ROI calculators and business case development support.",
    },
    {
      question: "How long does it take to implement the platform?",
      answer:
        "Implementation timelines vary based on factory size and complexity. Standard implementations take 4-8 weeks, while comprehensive digital transformations can take 3-6 months. We offer phased implementation starting with high-impact areas to deliver quick ROI.",
    },
    {
      question: "What support options are available?",
      answer:
        "We offer 24/7 technical support with guaranteed response times (1 hour for critical issues). Support includes remote troubleshooting, on-site assistance if needed, regular system health checks, software updates, and performance optimization services.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about INTEGRA 360 platform and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-green-200 transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-green-100 flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-600" />
                    </div>
                    <span className="text-base font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <div className="pl-7">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4" />
            Still Have Questions?
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experts are ready to answer any specific questions about your
            manufacturing operations.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
