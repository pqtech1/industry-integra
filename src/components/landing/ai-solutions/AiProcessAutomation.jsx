import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Check,
  Database,
  Activity,
  Cpu,
  BarChart2,
  RefreshCcw,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
} from "lucide-react";

import AIIconDashboard from "../../sections/AIIconDashboard";

const AiProcessAutomation = () => {

  const steps = [
    {
      title: "Data Collection",
      description:
        "AI gathers data from multiple sources in real-time, eliminating manual tracking and entry errors.",
      icon: <Database className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Workflow Analysis",
      description:
        "Processes are analyzed automatically to identify bottlenecks and inefficiencies.",
      icon: <Activity className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Smart Automation",
      description:
        "Tasks are automatically executed by AI with optimized efficiency and minimal human intervention.",
      icon: <Cpu className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Predictive Insights",
      description:
        "AI predicts potential delays, errors, or resource shortages before they happen.",
      icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Continuous Optimization",
      description:
        "Workflows are constantly optimized based on performance metrics and AI recommendations.",
      icon: <RefreshCcw className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Scalable Growth",
      description:
        "AI scales operations automatically as business grows, ensuring consistent efficiency.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: "Save Time",
      description:
        "Automate repetitive tasks to free up your team’s time for high-value activities.",
      icon: <Clock className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Reduce Costs",
      description:
        "Minimize errors and optimize resource allocation to significantly lower operational costs.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Improve Accuracy",
      description:
        "AI eliminates human errors in critical processes ensuring consistent results.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Boost Productivity",
      description:
        "Streamline workflows and accelerate business operations with intelligent automation.",
      icon: <Users className="h-8 w-8 text-green-600" />,
    },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Badge className="bg-green-600 text-white px-4 py-1 text-sm font-medium">
                AI Process Automation
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black">
                Automate Your Business{" "}
                <span className="text-green-600">Processes</span> with AI
              </h1>

              <p className="text-lg text-gray-700 max-w-xl">
                Transform manual workflows into intelligent automated systems.
                Reduce operational costs, eliminate human errors, and increase
                productivity using advanced AI-driven automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 px-8"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-gray-300 hover:bg-gray-100"
                >
                  <Sparkles className="mr-2 h-4 w-4 text-green-600" />
                  View Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-600 pt-6">
                <div>✔ Smart Workflow Automation</div>
                <div>✔ Real-time Insights</div>
                <div>✔ Scalable Infrastructure</div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-3xl blur-3xl opacity-20" />
              <img
                src="ai-solutions/ai-process-automation.webp"
                alt="AI Process Automation"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY AI ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-green-600 rounded-3xl blur-3xl opacity-20" />
              <img
                src="ai-solutions/why-use-ai.webp"
                alt="Why use AI for Process Automation"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Why Implement AI in Your Process Automation?
              </h2>

              <p className="text-lg text-gray-700 max-w-lg">
                AI-driven process automation goes beyond traditional automation
                by enabling intelligent decision-making, predicting outcomes,
                and optimizing workflows in real time.
              </p>

              <div className="space-y-6">
                {[
                  "Automates repetitive tasks across departments—finance, HR, supply chain, and operations—reducing manual errors and saving hours.",
                  "Provides predictive insights, enabling teams to anticipate bottlenecks, prevent downtime, and optimize resource allocation.",
                  "Integrates seamlessly with existing software systems, eliminating data silos and improving workflow efficiency.",
                  "Scales processes automatically as business grows, without hiring additional staff.",
                  "Enables real-time monitoring of workflows, providing actionable metrics to continuously improve performance.",
                  "Reduces operational costs by eliminating redundancies and optimizing task allocation.",
                  "Ensures compliance with company policies and industry regulations through automated auditing and reporting.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 max-w-md">
                Implementing AI in process automation transforms traditional
                workflows into smart, self-optimizing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW AI TRANSFORMS ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              How AI Transforms Your Processes
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              From manual workflows to intelligent, automated systems — see how
              AI revolutionizes your operations step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {step.icon}
                  <h3 className="text-green-600 font-bold text-xl">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== KEY BENEFITS ==================== */}
      <section className="w-full bg-white py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Key Benefits of AI Process Automation
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Implementing AI in your workflows delivers tangible results for
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-green-600 font-bold text-xl">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AI TOOLS & TECHNOLOGIES ==================== */}
      <section className="w-full bg-gray-50 py-10 md:py-15 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              AI Tools & Technologies in Process Automation
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Modern AI-powered process automation uses a combination of RPA,
              ML, and analytics tools to optimize workflows and drive
              efficiency.
            </p>
          </div>

          <div className="mb-12">
            <AIIconDashboard />
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Powered by the Latest AI Innovations
            </h3>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              We leverage modern AI frameworks, advanced LLM ecosystems, and
              scalable machine learning tools to deliver intelligent,
              future-ready automation solutions.
            </p>

            <div className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-green-600 text-white font-medium rounded-2xl shadow-md">
              Delivering Intelligent Automation with Modern AI
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiProcessAutomation;
