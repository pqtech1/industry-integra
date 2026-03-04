import {
  MessageSquare,
  Database,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Layers,
  ArrowUpRight,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  Globe,
  Badge,
  CheckCircle2,
  Sparkles,
  Settings2,
  Monitor,
  Network,
  ShieldAlert,
  DatabaseZap,
  Activity,
  ArrowRight,

} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";



const ScadaServices = () => {

    const benefits = [
      {
        title: "The Intelligence Layer",
        description:
          "Bridge the gap between hardware and strategy. Move beyond simple HMI to a system that translates raw PLC data into actionable insights.",
        icon: <Layers className="w-8 h-8 text-[#5f69b1]" />,
      },
      {
        title: "ERP/MES Integration",
        description:
          "Seamlessly push floor data to your Business Decisions layer (ERP) to optimize supply chains and production schedules in real-time.",
        icon: <Database className="w-8 h-8 text-[#5f69b1]" />,
      },
      {
        title: "Predictive Reliability",
        description:
          "Stop reacting to downtime. Modern SCADA uses historical trending to predict maintenance needs before the power goes out.",
        icon: <TrendingUp className="w-8 h-8 text-[#5f69b1]" />,
      },
      {
        title: "Edge-to-Cloud Security",
        description:
          "Upgrade from legacy air-gapped risks to modern, encrypted architectures that protect your utility infrastructure from cyber threats.",
        icon: <ShieldCheck className="w-8 h-8 text-[#5f69b1]" />,
      },
    ];

    const serviceGroups = [
      {
        groupTitle: "SCADA PLATFORM DEVELOPMENT & CONFIGURATION",
        groupDescription:
          "We design the entire system architecture, ensuring scalability, redundancy, and security.",
        items: [
          {
            title: "Visualization Design",
            description:
              "High-Performance HMI (HPHMI) development focusing on Situational Awareness (following ASM Consortium guidelines).",
          },
          {
            title: "Data Acquisition",
            description:
              "Configuring communication drivers to efficiently poll data from PLCs, RTUs, and industrial controllers (e.g., Modbus, OPC UA, EtherNet/IP).",
          },
          {
            title: "Alarm Management",
            description:
              'Implementation of rationalised, filtered, and prioritised alarm systems to eliminate "alarm floods."',
          },
        ],
      },
      {
        groupTitle: "INTEGRATION & CONNECTIVITY",
        groupDescription:
          "Your SCADA system must talk to everything. We ensure seamless communication across your enterprise.",
        items: [
          {
            title: "OT/IT Bridge",
            description:
              "Integrating SCADA data with business systems (MES, ERP, Cloud Analytics) using secure protocols like MQTT (Sparkplug B).",
          },
          {
            title: "Legacy System Migration",
            description:
              "Upgrading outdated or proprietary SCADA systems to modern, vendor-independent platforms.",
          },
          {
            title: "Mobile & Web Access",
            description:
              "Deployment of secure, responsive interfaces for access via tablets and browsers.",
          },
        ],
      },
    ];

    const platforms = [
      {
        name: "Ignition",
        detail: "IIoT-ready, MQTT & Mobile",
        highlight: true,
      },
      { name: "AVEVA", detail: "Object-oriented Enterprise", highlight: false },
      {
        name: "Siemens WinCC",
        detail: "PLC Ecosystem Native",
        highlight: false,
      },
      {
        name: "GE iFIX",
        detail: "Energy & Utilities Specialist",
        highlight: false,
      },
      {
        name: "FactoryTalk",
        detail: "Allen-Bradley Integration",
        highlight: false,
      },
      {
        name: "Citect",
        detail: "High-Availability Robustness",
        highlight: false,
      },
      {
        name: "VTScada",
        detail: "Real-time Utility Monitoring",
        highlight: false,
      },
      { name: "PcVue", detail: "Critical Infrastructure", highlight: false },
      {
        name: "Rapid SCADA",
        detail: "Open Source Flexibility",
        highlight: false,
      },
    ];

    const platformBenefits = [
      {
        text: "Benefit from unique SCADA testing experience. Seasoned professionals with over 20 years of experience.",
      },
      {
        text: "Achieve highest-level compliance with NERC-CIP standards.",
      },
      {
        text: "Ensure smooth integrations, customized for any and all apps and systems.",
      },
      {
        text: "Cut testing costs up to 80% with AI-powered automation.",
        highlight: true,
      },
    ];

    const solutions = [
      {
        title: "Full SCADA Support",
        desc: "Design, build, and maintain utility processes, including electrical drawing updates and field point databases.",
        icon: <Settings2 className="w-5 h-5" />,
        className: "md:col-span-2 lg:col-span-1",
      },
      {
        title: "Data & Display Engineering",
        desc: "Long-term maintenance, data modeling, and user acceptance testing for high-performance functionality.",
        icon: <Monitor  className="w-5 h-5" />,
        className: "md:col-span-1",
      },
      {
        title: "System Integration",
        desc: "Overseeing custom interfaces, project management, and environmental software testing services.",
        icon: <Network className="w-5 h-5" />,
        className: "md:col-span-1",
      },
      {
        title: "Compliance & Monitoring",
        desc: "Managing NERC CIP compliance issues to ensure 'Gold Standard' audit readiness for utility clients.",
        icon: <ShieldAlert className="w-5 h-5" />,
        className: "md:col-span-1",
      },
      {
        title: "RTU Data Acquisition",
        desc: "Verification of RTUs and data concentrators using hands-on setup and listen-mode system verification.",
        icon: <DatabaseZap className="w-5 h-5" />,
        className: "md:col-span-1 lg:col-span-2",
      },
      {
        title: "Performance Testing",
        desc: "Validating system performance under 'storm conditions' when network and user activity peaks.",
        icon: <Activity className="w-5 h-5" />,
        className: "md:col-span-1",
      },
      {
        title: "Functional Testing",
        desc: "Risk-based approach deploying resources to areas of greatest risk: display conversions and platform config.",
        icon: <Zap className="w-5 h-5" />,
        className: "md:col-span-1",
      },
    ];

   const capabilities = [
     {
       title: "Real-Time Systems",
       content:
         "Ensure sub-second latency and high availability for mission-critical monitoring. We specialize in optimizing data throughput for distributed energy resources.",
     },
     {
       title: "Storm Readiness Testing",
       content:
         "Validate system performance under extreme load conditions. Our stress-testing simulates peak 'storm' events to ensure your SCADA remains responsive when it matters most.",
     },
     {
       title: "CRM & Enterprise Integration",
       content:
         "Bridge the gap between operational technology and customer relations. We integrate SCADA data with CRMs to provide real-time outage updates to your end-users.",
     },
   ];


  return (
    <>
      <div>
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>               
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-8">
                  Complete SCADA Services for Modern Industry
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  End-to-end SCADA solutions from system design and
                  implementation to ongoing support and optimization. Trust our
                  10+ years of industrial automation experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-black text-white rounded-none px-8 py-6 text-lg font-medium transition-all"
                  >
                    Discuss Your Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-200 hover:border-green-600 hover:bg-white rounded-none px-8 py-6 text-lg font-medium transition-all"
                  >
                    View Solutions
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="services/scada/workers-control-room.webp"
                  alt="SCADA control room operator"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-[#5f69b1]" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Systems Deployed</p>
                      <p className="text-2xl font-bold text-slate-900">10+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className=" mb-16">
              <h2 className="">Why Upgrade to a Modern SCADA System?</h2>
              <p className="">
                SCADA is more than just graphics; it’s the{" "}
                <span className="font-semibold text-green-600">
                  intelligence layer
                </span>{" "}
                that sits between your controllers (PLCs) and your business
                decisions (MES/ERP).
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, index) => (
                <Card
                  key={index}
                  className="border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="mb-4 bg-white w-14 h-14 flex items-center justify-center rounded-xl shadow-sm border border-slate-100">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl text-slate-800">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technical Diagram Placeholder/Callout */}
            <div className="mt-16 p-8 bg-black rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Cpu className="w-12 h-12 opacity-80" />
                <div>
                  <h3 className="text-gray-100">
                    Future-Proof Your Infrastructure
                  </h3>
                  <p className="opacity-100 text-gray-300">
                    Transition from legacy hardware to software-defined
                    automation.
                  </p>
                </div>
              </div>
              <div className="h-px w-full md:w-px md:h-12 bg-white/20" />
              <div className="text-center md:text-left">
                <span className="text-green-100 text-sm uppercase tracking-widest opacity-70">
                  Legacy Support
                </span>
                <p className="text-white">
                  Allen-Bradley • Siemens • Ignition • AVEVA and many more...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Main Header */}
            <div className="text-center mb-16">
              <h2 className="">Our End-to-End SCADA Services</h2>
              <p className="">
                We offer a complete suite of services tailored to your
                operational technology (OT) environment, whether you manage a
                single plant or a sprawling, distributed network.
              </p>
            </div>

            {/* Service Groups */}
            <div className="space-y-24 max-w-7xl mx-auto py-12">
              {serviceGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="group/section">
                  {/* Group Label - Now with a vertical accent line */}
                  <div className="relative pl-8 mb-12">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 to-emerald-500 rounded-full" />
                    <h3 className="text-sm font-bold tracking-[0.2em] text-lime-600 uppercase mb-2">
                      {group.groupTitle}
                    </h3>
                    <p className="text-2xl font-medium text-black tracking-tight max-w-2xl">
                      {group.groupDescription}
                    </p>
                  </div>

                  {/* Cards Grid - Using subtle depth and hover interactions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {group.items.map((item, itemIndex) => (
                      <Card
                        key={itemIndex}
                        className="relative group overflow-hidden border-slate-200/60 bg-white hover:bg-slate-50/50 transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 rounded-2xl"
                      >
                        {/* Subtle gradient glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardHeader className="pt-10 px-8 pb-4 relative z-10">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl font-semibold text-slate-900 leading-snug">
                              {item.title}
                            </CardTitle>
                            <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-lime-500 transition-colors duration-300" />
                          </div>
                        </CardHeader>

                        <CardContent className="px-8 pb-10 relative z-10">
                          <p className="text-slate-950 text-[15px] leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </CardContent>

                        {/* Bottom decorative border that expands on hover */}
                        <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-slate-100 group-hover:bg-lime-400 transition-all duration-500 origin-left transform" />
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#0a0c10] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header with "Floating" feel */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                  Enterprise{" "}
                  <span className="font-semibold text-slate-100">
                    Interoperability.
                  </span>
                </h2>
                <p className="text-slate-200 text-lg max-w-xl">
                  We engineer solutions across the world's most trusted SCADA
                  platforms, ensuring your data flows seamlessly from the edge
                  to the boardroom.
                </p>
              </div>
            </div>

            {/* Modern Minimal Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/50 border border-slate-800/50 rounded-3xl overflow-hidden shadow-2xl">
              {platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="group relative bg-[#0d1016] p-10 hover:bg-[#12161f] transition-all duration-500"
                >
                  {/* Subtle Ambient Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <h4 className="text-xl font-medium text-slate-200 group-hover:text-white transition-colors">
                        {platform.name}
                      </h4>
                      {platform.highlight && (
                        <span className="text-[10px] bg-lime-500/20 text-lime-400 px-2 py-0.5 rounded uppercase tracking-tighter border border-lime-500/30">
                          IoT Ready
                        </span>
                      )}
                    </div>

                    <p className="text-slate-200 text-sm leading-relaxed mb-6 group-hover:text-slate-400">
                      {platform.detail}
                    </p>

                    <div className="mt-auto pt-4 flex items-center gap-2 text-[11px] font-bold text-slate-300 group-hover:text-lime-500/70 transition-colors tracking-widest uppercase">
                      <span>Architecture Ready</span>
                      <div className="h-px flex-1 bg-slate-800 group-hover:bg-lime-500/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brand Marquee Placeholder */}
            <div className="mt-16 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200 mb-8">
                Supported Protocols
              </p>
              {/* Brand Marquee / Protocol Section */}
              <div className="mt-20 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300 mb-10">
                  Universal Protocol Interoperability
                </p>

                <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 opacity-70  hover:opacity-100 hover:grayscale-0 transition-all duration-1000 ease-in-out max-w-5xl mx-auto">
                  {/* Messaging & IIoT */}
                  <span className="text-sm font-black italic tracking-tighter">
                    MQTT (SPARKPLUG B)
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    OPC UA / DA
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    REST API / JSON
                  </span>

                  {/* Industrial Ethernet */}
                  <span className="text-sm font-black italic tracking-tighter">
                    ETHERNET/IP
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    PROFINET
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    MODBUS TCP/RTU
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    ETHERCAT
                  </span>

                  {/* Power & Utilities */}
                  <span className="text-sm font-black italic tracking-tighter">
                    DNP3
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    IEC 61850
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    IEC 60870-5
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    SEL FAST MESSAGE
                  </span>

                  {/* Building & Infrastructure */}
                  <span className="text-sm font-black italic tracking-tighter">
                    BACNET
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    SNMP
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    PROFIBUS
                  </span>
                  <span className="text-sm font-black italic tracking-tighter">
                    CC-LINK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Strategic Copy */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-[0.2em] uppercase">
                  How we can help you
                </span>
                <h2 className="">
                  We’ll help save costs <br />
                  <span className="text-black">and increase uptime.</span>
                </h2>
              </div>

              <p>
                SCADA systems raise reliability and cut operating costs for
                utilities, but they need specialized testing with distribution
                automation (DA) devices as well as external and customer-facing
                systems to ensure smooth connectivity and functionality. We’ve
                led numerous utilities partners to a successful rollout.
              </p>

              {/* Optional Interactive Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 text-sm font-medium text-slate-600">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Trusted by global utility leaders
              </div>
            </div>

            {/* Right Side: Interactive Feature List */}
            <div className="relative">
              {/* Decorative Background Element */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-200 rounded-full blur-3xl" />

              <div className="relative space-y-0">
                {platformBenefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-6  transition-all duration-300 group-hover:pl-1">
                      <div className="mt-1">
                        <CheckCircle2
                          className={`w-6 h-6 ${benefit.highlight ? "text-lime-500" : "text-black"} transition-transform group-hover:scale-102`}
                        />
                      </div>
                      <p
                        className={`leading-relaxed ${benefit.highlight ? "text-slate-900 font-semibold" : "text-black"}`}
                      >
                        {benefit.text}
                      </p>
                    </div>
                    {index !== benefits.length - 1 && (
                      <Separator className="bg-slate-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 ">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs font-bold tracking-widest  uppercase">
                  Our Solutions
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Full SCADA services & support, <br />
                  <span className="text-green-600">
                    fully customized for your project.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-black border-l-2 border-green-600/70 pl-6 py-2">
                  We offer a comprehensive, flexible suite of SCADA quality
                  engineering services supporting all application types and
                  system architectures.
                </p>
              </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
              {solutions.map((item, idx) => (
                <Card
                  key={idx}
                  className={`${item.className} group relative overflow-hidden border-none bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-3xl`}
                >
                  <CardHeader className="p-8 pb-3">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <CardTitle className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-600">
                      {item.desc}
                    </p>
                  </CardContent>

                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5f69b1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#050505] text-white overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* LEFT SIDE — Fixed Image */}
            <div className="lg:w-1/2 relative lg:h-screen">
              <div className="lg:sticky lg:top-0 h-full w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
                <img
                  src="services/scada/contact-us-support.webp"
                  alt="Data center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT SIDE — Content */}
            <div className="lg:w-1/2 flex flex-col justify-center p-4 md:p-16 lg:p-15 ">
              {/* Heading Section */}
              <div className="">
                <span className="text-xs font-bold tracking-[0.3em] text-green-600 uppercase">
                  Our Capabilities
                </span>

                <h2 className="text-white">
                  Need additional <br /> support?
                </h2>

                <p className="text-slate-200">
                  Beyond core SCADA, we provide the specialized engineering
                  required for a modern, digitalized grid.
                </p>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full">
                {capabilities.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-slate-300"
                  >
                    <AccordionTrigger className="text-base text-slate-300 font-medium py-6 hover:no-underline hover:text-green-600 transition-colors">
                      {item.title}
                    </AccordionTrigger>

                    <AccordionContent className="text-slate-400 text-base leading-relaxed pb-6">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-green-600 hover:text-black rounded-none px-8 py-6 text-lg font-bold transition-all group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScadaServices;
