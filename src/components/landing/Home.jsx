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
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
      <section className="relative  py-15 ">
        {/* dotted background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cfd6cf_1px,transparent_1px)] [background-size:16px_16px] opacity-100"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Industry 4.0 Ready Platform
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-semibold text-green-900 leading-tight">
            Transform Your Manufacturing with{" "}
            <span className=" px-2 rounded-md whitespace-nowrap">
              <WordRotate
                words={[
                  "Real-Time Control",
                  "Live System Insight",
                  "Smarter Operations",
                  "Connected Systems",
                ]}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600  max-w-xl mx-auto">
            Industry{" "}
            <span className="font-semibold text-green-700">INTEGRA 360</span> is
            a unified Industry 4.0 platform that brings together process
            monitoring, energy management, quality tracking, and asset
            performance into one connected manufacturing ecosystem.
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-5 text-lg shadow-md">
              <a
                href="https://positivequadrant.in/contact-us"
                className="flex items-center gap-2"
              >
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Industry 4.0 Platform ✦ Built for Smart Manufacturing
          </p>
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
