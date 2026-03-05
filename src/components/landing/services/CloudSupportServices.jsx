import React from "react";
import {
  Cpu,
  Cloud,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  Globe,
  Lock,
  BarChart3,
  CheckCircle,
  Award,
  Users,
  BookOpen,
  Mail,
  TrendingUp,
  Clock,
  Database,
  Network,
  HardDrive,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CloudSupportServices = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Multi-Cloud Expertise",
      desc: "Certified professionals helping you design, deploy and optimize workloads across AWS, Azure, GCP and private clouds.",
      highlight: "200+ cloud certifications",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Unified Cloud Management",
      desc: "Single-pane-of-glass visibility and control across all your cloud environments with advanced FinOps capabilities.",
      highlight: ">30% average cost optimization",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Sovereign Cloud Advisory",
      desc: "Strategic guidance on data residency, compliance and governance to ensure your cloud footprint meets local regulations.",
      highlight: "100% compliance with RBI, IRDAI, SEBI, MeitY",
    },
  ];

  const stats = [
    {
      value: "80%",
      line1: "engineering effort",
      line2: "eliminated",
    },
    {
      value: "2-4 weeks",
      line1: "from POC",
      line2: "to Production",
    },
    {
      value: "10x",
      line1: "faster model",
      line2: "deployment",
    },
    {
      value: "99.9%",
      line1: "enterprise",
      line2: "uptime reliability",
    },
    {
      value: "70%",
      line1: "infrastructure",
      line2: "cost savings",
    },
    {
      value: "500+",
      line1: "AI workloads",
      line2: "successfully deployed",
    },
  ];

  const supportServices = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "AWS Support",
      desc: "Certified architects for EC2, S3, RDS, Lambda and enterprise migrations",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Azure Support",
      desc: "Expertise in Azure AD, Virtual Machines, Kubernetes Service and Hybrid solutions",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "GCP Support",
      desc: "BigQuery, Compute Engine, Cloud Run and Anthos implementations",
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: "Private Cloud",
      desc: "VMware, OpenStack, and on-premise infrastructure modernization",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Multi-Cloud Networking",
      desc: "Secure connectivity, load balancing, and service mesh architectures",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Cloud Security",
      desc: "Identity management, encryption, compliance audits, and threat detection",
    },
  ];

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] flex items-center bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="services/cloud/cloud-infra-bg.webp"
              alt="Cloud Infrastructure Background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="container relative z-10 mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative pl-8 border-l border-white/20">
                <div className="absolute top-0 left-[-1px] h-12 w-[2px] bg-green-600" />

                <span className="block text-green-600 font-bold text-sm tracking-widest uppercase mb-6">
                  Industry INTEGRA 360 • Cloud Support
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.15] tracking-tight max-w-2xl">
                  Expert cloud support across{" "}
                  <span className="text-green-600">AWS, Azure, GCP</span> and{" "}
                  <span className="text-green-600">private clouds</span>
                </h1>

                <p className="text-gray-300 text-lg mt-6 max-w-xl">
                  We don't operate our own cloud infrastructure — we help you
                  master the clouds you already use with certified expertise,
                  cost optimization, and sovereign compliance.
                </p>

                <div className="mt-10">
                  <button className="group relative px-8 py-4 rounded-full bg-green-600 text-white font-bold transition-all hover:bg-green-500 hover:shadow-[0_0_20px_rgba(22,163,74,0.4)] overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Our Cloud Support{" "}
                      <ArrowRight className="w-5 h-5" />
                    </span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                  </button>
                </div>
              </div>

              <div className="hidden lg:block relative h-full">
                {/* Space for optional imagery */}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="w-full bg-[#050505] py-20 px-6">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-green-900/20 via-zinc-900 to-black p-8 md:p-16 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group flex flex-col items-center text-center"
                  >
                    {idx !== 0 && (
                      <div className="hidden md:block absolute left-[-1.5rem] top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    )}

                    <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-green-500 transition-transform duration-500 group-hover:scale-110 group-hover:bg-green-500/10 group-hover:border-green-500/20">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 px-4">
                      {item.desc}
                    </p>

                    <div className="mt-auto">
                      <p className="text-green-500 font-bold text-lg leading-tight group-hover:text-green-400 transition-colors">
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-600/10 blur-[100px] rounded-full" />
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
                Sovereign by design.{" "}
                <span className="text-green-600">Engineered to Perform.</span>{" "}
                <span className="text-green-600">Built to Scale.</span>
              </h2>

              <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                From AI to mission-critical enterprise workloads, Industry
                INTEGRA 360 provides expert cloud support across AWS, Azure, GCP
                and private clouds. We help you reduce complexity, improve
                performance, optimize costs, and maintain sovereign compliance —
                all while keeping your data secure and your operations running
                smoothly.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Large Card with Stats */}
              <Card className="lg:col-span-2 rounded-xl shadow-sm border bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <TrendingUp className="text-green-600 w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Faster time to value across your cloud journey
                      </h3>

                      <p className="text-gray-500 text-sm mt-2 max-w-xl">
                        Our certified cloud experts help you accelerate from
                        proof-of-concept to production, ensuring your workloads
                        are optimized for performance, cost, and compliance from
                        day one.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="h-16 w-[2px] bg-green-600"></div>

                        <div>
                          <p className="text-3xl font-bold text-green-600">
                            {stat.value}
                          </p>

                          <p className="text-xs text-gray-500 leading-tight mt-1">
                            {stat.line1}
                          </p>

                          <p className="text-xs text-gray-500 leading-tight">
                            {stat.line2}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Right Cards */}
              <div className="grid gap-6">
                {/* Card 1 */}
                <div className="relative rounded-xl overflow-hidden h-[220px]">
                  <img
                    src="services/cloud/cloud-features1.webp"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                    <p className="text-white text-lg font-medium">
                      Purpose-built for your business needs
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative rounded-xl overflow-hidden h-[220px]">
                  <img
                    src="services/cloud/cloud-features2.webp"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                    <p className="text-white text-lg font-medium">
                      Optimised for performance and savings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Support Services Grid */}
        <section className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Cloud Support
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We support the clouds you already use — no vendor lock-in, just
                expert guidance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportServices.map((service, idx) => (
                <Card
                  key={idx}
                  className="border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      

        {/* CTA Section */}
        <section className="w-full bg-green-700 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to master your cloud strategy?
            </h2>
            <p className="text-green-100 mb-8 text-lg">
              Get expert cloud support from Industry INTEGRA 360 — no
              infrastructure, just intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </button>
              <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                View Support Plans
              </button>
            </div>
          </div>
        </section>

        {/* Footer Note */}
      </div>
    </>
  );
};

export default CloudSupportServices;
