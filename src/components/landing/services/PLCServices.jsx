import React from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Activity,
  Building2,
  BarChart3,
  Bell,
  Users,
  Target,
  Zap,
  Settings,
  Layers,
  Shield,
  CheckCircle2,
} from "lucide-react";

const PLCServices = () => {
  const services = [
    "PLC System Design",
    "PLC Programming and Configuration",
    "HMI (Human-Machine Interface) Development",
    "PLC Integration with SCADA Systems",
    "PLC Troubleshooting and Maintenance",
    "CPLC System Upgrades and Migration",
    "Custom PLC Solutions for Specialized Applications",
  ];

  const capabilities = [
    { icon: Activity, title: "Fault Surveillance", bg: "bg-orange-500" },
    { icon: Building2, title: "Site Management", bg: "bg-blue-500" },
    { icon: BarChart3, title: "Analytics and BI", bg: "bg-purple-500" },
    { icon: Bell, title: "Alarms Management", bg: "bg-yellow-500" },
    { icon: Users, title: "Tenant Management", bg: "bg-emerald-500" },
    { icon: Target, title: "Operational Excellence", bg: "bg-indigo-500" },
    { icon: Zap, title: "Energy Efficiency", bg: "bg-green-600" },
  ];

  const plcBrands = [
    {
      brand: "Siemens",
      logo: "services/plcs/brand-logo/Siemens-Logo.wine.svg",
      items: [
        "SIMATIC S7-1200 / S7-1500 — Mid-range industrial PLCs",
        "SIMATIC S7-300 / S7-400 — Traditional workhorse PLCs",
        "SIMATIC ET200 — Distributed I/O & compact modules",
      ],
    },
    {
      brand: "Rockwell Automation (Allen-Bradley)",
      logo: "services/plcs/brand-logo/rockwell-automation.svg",
      items: [
        "ControlLogix — High-performance modular PLCs",
        "CompactLogix — Mid-range controller",
        "MicroLogix / Micro800 — Small footprint PLCs",
      ],
    },
    {
      brand: "Schneider Electric",
      logo: "services/plcs/brand-logo/Schneider_Electric-Logo.wine.svg",
      items: [
        "Modicon M340 / M580 — Industrial process controllers",
        "Modicon Nano / Quantum — Scalable automation",
      ],
    },
    {
      brand: "ABB",
      logo: "services/plcs/brand-logo/ABB_Group-Logo.wine.svg",
      items: ["AC500 — Modular automation PLCs", "Freelance DCS hybrid system"],
    },
    {
      brand: "Mitsubishi Electric",
      logo: "services/plcs/brand-logo/Mitsubishi_Electric-Logo.wine.svg",
      items: ["MELSEC-FX / MELSEC-Q Series — Widely used in Asian factories"],
    },
    {
      brand: "Omron",
      logo: "services/plcs/brand-logo/Omron-Logo.wine.svg",
      items: ["CJ / CP / NX Series — Factory automation controllers"],
    },
    {
      brand: "Yokogawa",
      logo: "services/plcs/brand-logo/Yokogawa_Electric-Logo.wine.svg",
      items: ["DCS and PLC hybrids for process plants"],
    },
    {
      brand: "Honeywell",
      logo: "services/plcs/brand-logo/Honeywell-Logo.wine.svg",
      items: ["DCS and PLC hybrid systems for industrial process plants"],
    },
  ];

  const comprehensiveServices = [
    {
      title: "Turnkey Implementation",
      description:
        "Delivering complete, ready-to-use solutions from concept to deployment.",
      icon: <Settings className="w-6 h-6 text-white" />,
    },
    {
      title: "Engineering & Design",
      description:
        "Providing innovative engineering expertise to solve complex challenges.",
      icon: <Layers className="w-6 h-6 text-white" />,
    },
    {
      title: "Managed Services",
      description:
        "Ensuring smooth operations with proactive management and strategic support.",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <>
      {/* ================= BANNER ================= */}
      <div className="w-full">
        <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] overflow-hidden">
          {/* Background */}
          <img
            src="services/plcs/plc-banner-bg.webp"
            alt="PLC Programming Services"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center">
            <div>
              <h1 className="text-white">PLC Programming Services</h1>
              <p className="text-gray-200 text-xl">
                Reliable, scalable and industrial-grade PLC solutions tailored
                for automation and control systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <div className="w-full">
        {/* TOP INTRO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="text-black fw-bold">
            Elevate Your Industrial Automation with{" "}
            <br className="hidden md:block" />
            Expert <span className="text-green-600">PLC Programming</span>{" "}
            Services
          </h2>
          <p className="max-w-3xl mx-auto">
            Welcome to{" "}
            <span className="font-semibold text-green-600">
              Industry INTEGRA 360
            </span>
            , your trusted partner for PLC Programming services that drive
            efficiency, precision, and innovation in industrial automation. We
            specialize in Programmable Logic Controller (PLC) programming to
            ensure seamless control and automation of your industrial processes.
          </p>
        </section>

        {/* BOTTOM CONTENT SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="order-2 md:order-1">
              <h2 className="">PLC Programming</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Even with the best hardware and controllers, system performance,
                accuracy, and reliability depend entirely on how the control
                logic is programmed. Following PLC programming best practices
                ensures efficient and stable automation.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                At{" "}
                <span className="font-semibold text-green-600">
                  Industry INTEGRA 360
                </span>
                , our engineers have experience with major PLC brands and
                communication protocols, delivering tailored solutions across
                various industries.
              </p>
              <a href="https://www.positivequadrant.in/contact-us" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow-md transition-all duration-300">
                Get A Quote →
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px]">
                <img
                  src="services/plcs/plc-services-hero.webp"
                  alt="PLC Services"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Full Width */}
        <section className="w-full">
          <div className="grid md:grid-cols-2 min-h-[500px]">
            {/* LEFT IMAGE */}
            <div className="relative h-[300px] md:h-auto">
              <img
                src="services/plcs/plc-services.webp"
                alt="PLC Industrial Automation"
                className="w-full h-full object-cover"
              />
              {/* Optional soft overlay for better look */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="bg-gray-100 flex items-center">
              <div className="px-6 sm:px-10 md:px-16 py-12 w-full">
                <h2 className="">PLC Programming Services</h2>
                <ul className="space-y-5">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                    >
                      <ChevronRight className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* core capabilities */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-black text-center mb-12">
            Core Functional Capabilities We Provides are:
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border-2 border-green-500 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-4 animate-heartbeat`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <p className="font-medium">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* plc we support */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-gray-900">
              Global PLC Brands & Industrial Control Platforms We Support
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {plcBrands.map((brand, index) => (
              <div
                key={index}
                className="group flex bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-green-300"
              >
                {/* LEFT ROTATED LOGO */}
                <div className="w-28 bg-gray-50 flex items-center justify-center relative">
                  <img
                    src={brand.logo}
                    alt={brand.brand}
                    className="h-20 object-contain rotate-[-90deg]"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {brand.brand}
                  </h3>

                  <ul className="space-y-2">
                    {brand.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="w-2 h-2 mt-2 bg-green-600 rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our comprehensive solution */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-[40px] overflow-hidden"
            style={{
              backgroundImage:
                "url('services/plcs/electronic-circuit-board-with-processor-wires.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 p-10 md:p-16">
              {/* Heading */}
              <h2 className="text-white mb-12 text-3xl md:text-4xl font-bold">
                Comprehensive Services to Power{" "}
                <span className="text-green-400">Your Success</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column */}
                <div className="space-y-10">
                  {comprehensiveServices.map((service, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Content */}
                <div className="max-w-lg">
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    We deliver end-to-end solutions designed to meet your
                    business goals.
                    <br />
                    <br />
                    From implementation to ongoing management, our expertise
                    ensures efficiency and reliability.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 font-semibold text-sm text-white">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
                      <span>
                        End-To-End Project Delivery With Precision And Quality
                      </span>
                    </li>

                    <li className="flex items-start gap-3 font-semibold text-sm text-white">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
                      <span>
                        Flexible Support Tailored To Your Operational Needs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PLCServices;
