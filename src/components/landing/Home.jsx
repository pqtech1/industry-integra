import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Shield,
  Cloud,
  Cpu,
  Factory,
  Users,
  TrendingUp,
  Database,
  Globe,
  Play,
  Quote,
  Settings,
  Target,
  AlertCircle,
  Calendar,
  Clock,
  Package,
  Activity,
  BatteryCharging,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { AnimatedList } from "@/components/ui/animated-list";
import { Highlighter } from "@/components/ui/highlighter";
import { LightRays } from "@/components/ui/light-rays";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { WordRotate } from "@/components/ui/word-rotate";

import IndustryBeamSection from "../sections/IndustryBeamSection";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import TailoredSolutionsPage from "../sections/TailoredSolutionsPage";
import InteractiveDashboard from "../sections/InteractiveDashboard";
import ServicesShowcase from "../sections/ServicesShowcase";
import FAQSection from "../sections/FAQSection";
import GetInTouch from "../sections/GetInTouch";

const Homepage = () => {
  // Platform features
  const platformFeatures = [
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Real-Time Production Monitoring",
      description:
        "Track OEE, downtime, and productivity across all manufacturing lines with millisecond precision.",
      stat: "99.9% Data Accuracy",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Intelligent Energy Management",
      description:
        "Reduce energy consumption by up to 35% with AI-driven optimization and predictive load balancing.",
      stat: "35% Cost Reduction",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Predictive Quality Analytics",
      description:
        "Anticipate quality issues before they occur with machine learning models trained on historical data.",
      stat: "90% Defect Prevention",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "End-to-End Traceability",
      description:
        "Full digital thread from raw materials to finished goods with blockchain-enabled security.",
      stat: "100% Traceable",
    },
  ];

  function DashboardItem({ icon, title, value, status = "ok" }) {
    const statusMap = {
      ok: {
        pill: "bg-green-100 text-green-700",
        bg: "from-green-50/80 to-emerald-50/80",
      },
      warn: {
        pill: "bg-yellow-100 text-yellow-700",
        bg: "from-yellow-50/80 to-amber-50/80",
      },
      alert: {
        pill: "bg-red-100 text-red-700",
        bg: "from-red-50/80 to-rose-50/80",
      },
    };

    return (
      <div
        className={`mb-3 rounded-xl border border-gray-200 
      bg-gradient-to-br ${statusMap[status].bg}
      p-4 shadow-sm transition-all`}
      >
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="h-11 w-11 rounded-xl bg-white/70 backdrop-blur flex items-center justify-center text-green-700 shadow">
            {icon}
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">{title}</p>
            <p className="text-xs text-gray-600 mt-0.5">{value}</p>
          </div>

          {/* Status */}
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusMap[status].pill}`}
          >
            {status === "ok"
              ? "Normal"
              : status === "warn"
                ? "Attention"
                : "Critical"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative py-12 lg:py-16 min-h-[85vh] flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 ">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6">
                  <Zap className="h-4 w-4" />
                  Industry 4.0 Ready Platform
                </div>

                <h1 className="">
                  Transform Your Manufacturing with{" "}
                  <span className="text-green-600 whitespace-nowrap">
                    <WordRotate
                      words={[
                        "Real-Time Control",
                        "Live System Insight",
                        "Smarter Operations",
                        "Connected Systems",
                      ]}
                      className="text-green-600"
                    />
                  </span>
                </h1>

                <p className="mb-8">
                  Industry{" "}
                  <Highlighter action="underline" color="#FF9800">
                    INTEGRA 360
                  </Highlighter>{" "}
                  is a unified{" "}
                  <Highlighter action="highlight" color="#E3F2FD">
                    Industry 4.0 platform
                  </Highlighter>{" "}
                  that brings together{" "}
                  <Highlighter action="underline" color="#4CAF50">
                    process monitoring
                  </Highlighter>
                  , energy management, quality tracking, and asset performance
                  into one connected manufacturing ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <a
                      href="https://positivequadrant.in/contact-us"
                      className="flex items-center gap-2"
                    >
                      Request a Demo
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>

                  {/* <Link to="/platform/overview">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 text-lg border-2"
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Watch Platform Tour
                    </Button>
                  </Link> */}
                </div>
              </div>

              {/* Right Dashboard */}
              <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                <div className="w-full max-w-md h-[480px] lg:h-[550px] bg-white rounded-2xl border border-gray-200 shadow-xl flex flex-col overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
                    <div className="flex items-center gap-3">
                      <Factory className="h-8 w-8 text-white" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Plant Status Dashboard
                        </h3>
                        <p className="text-green-100 text-sm">
                          Live Updates • Mumbai Plant
                        </p>
                      </div>
                      <div className="ml-auto h-2 w-2 rounded-full bg-green-300 animate-pulse" />
                    </div>
                  </div>

                  {/* Animated List Area */}
                  <div className="h-[320px] lg:h-[380px] overflow-hidden p-4">
                    <AnimatedList delay={2800}>
                      <DashboardItem
                        icon={<Activity />}
                        title="Production Line A"
                        value="96% OEE • 420 units/hr"
                        status="ok"
                      />
                      <DashboardItem
                        icon={<Cpu />}
                        title="Machine Health"
                        value="12/12 Machines Online"
                        status="ok"
                      />
                      <DashboardItem
                        icon={<BatteryCharging />}
                        title="Energy Consumption"
                        value="−12% vs Yesterday"
                        status="warn"
                      />
                      <DashboardItem
                        icon={<Factory />}
                        title="Quality Metrics"
                        value="First Pass Yield 99.2%"
                        status="ok"
                      />
                      <DashboardItem
                        icon={<Activity />}
                        title="Downtime Analysis"
                        value="Last event: 18 hrs ago"
                        status="ok"
                      />
                    </AnimatedList>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 p-3 bg-gray-50">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        Live Updates
                      </div>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />9
                        Systems Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Bar */}
      <section className="py-6">
        <ScrollVelocityContainer className="text-xl font-bold text-slate-500 md:text-2xl tracking-wide">
          <ScrollVelocityRow baseVelocity={5} direction={1}>
            REAL-TIME DATA • AI INSIGHTS • SMART FACTORY • INDUSTRY 4.0
          </ScrollVelocityRow>

          <ScrollVelocityRow baseVelocity={5} direction={-1}>
            PLC • SCADA • MES • ERP • IIOT • CLOUD • EDGE
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-10 lg:py-12 bg-black overflow-hidden mx-4 lg:mx-5 rounded-2xl">
        <LightRays className="absolute inset-0 z-0" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="mb-4 text-white">
              The Complete Industrial Intelligence Platform
            </h2>
            <p className="text-gray-400">
              Everything you need to optimize manufacturing operations, reduce
              costs, and drive continuous improvement.
            </p>
          </div>

          {/* Cards - Now with same height */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-[1.5px] h-full"
              >
                <BorderBeam
                  size={300}
                  duration={14}
                  borderWidth={1.5}
                  className="rounded-2xl"
                  colorFrom="green"
                  colorTo="grey"
                />

                <MagicCard className="relative rounded-2xl bg-neutral-950 h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">{feature.icon}</div>

                    <h3 className="text-white mb-3">{feature.title}</h3>

                    <p className="text-gray-400 mb-4 flex-1">
                      {feature.description}
                    </p>

                    <div className="text-sm font-medium text-green-400 pt-2">
                      {feature.stat}
                    </div>
                  </div>
                </MagicCard>
              </div>
            ))}
          </div>

          {/* CTA */}
          {/* <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-green-500 text-green-400 hover:bg-green-500/10"
            >
              <Link
                to="/platform/all-modules"
                className="flex items-center gap-2"
              >
                Explore All Platform Features
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Industry Beam Section */}
      <section className="py-10 lg:py-12">
        <IndustryBeamSection />
      </section>

      {/* Tailored Solutions */}
      <section className="py-10 lg:py-12">
        <TailoredSolutionsPage />
      </section>

      {/* Interactive Dashboard */}
      <section className="p-4 py-10 lg:py-12  bg-gray-50">
        <InteractiveDashboard />
      </section>

      {/* Services Showcase */}
      <section className="py-10 lg:py-12">
        <ServicesShowcase />
      </section>

      {/* FAQ Section */}
      <section className="py-10 lg:py-12">
        <FAQSection />
      </section>

      {/* Get in Touch */}
      <section
        className="relative w-full  bg-cover bg-center overflow-hidden py-10 md:py-12"
        style={{ backgroundImage: "url('get-in-touch-bg.webp')" }}
      >
        {/* Dark overlay only */}
        <div className="absolute inset-0 bg-black/70" /> <GetInTouch />
      </section>
    </div>
  );
};

export default Homepage;
