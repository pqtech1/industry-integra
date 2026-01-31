import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Shield,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import { Meteors } from "@/components/ui/meteors";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer navigation links
  const footerLinks = {
    Platform: [
      { name: "Production Monitoring", href: "/platform/production" },
      { name: "OEE & KPI Systems", href: "/platform/oee" },
      { name: "Energy Management", href: "/platform/energy" },
      { name: "Quality & Traceability", href: "/platform/quality" },
      { name: "Maintenance Management", href: "/platform/maintenance" },
    ],
    Solutions: [
      {
        name: "Predictive Maintenance",
        href: "/solutions/predictive-maintenance",
      },
      { name: "Smart Factory", href: "/solutions/smart-factory" },
      { name: "Plant Digitization", href: "/solutions/digitization" },
      { name: "Energy Optimization", href: "/solutions/energy-opt" },
      { name: "Remote Monitoring", href: "/solutions/remote-monitoring" },
    ],
    Services: [
      { name: "PLC Programming", href: "/services/plc-programming" },
      { name: "System Integration", href: "/services/integration" },
      { name: "Cloud Infrastructure", href: "/services/cloud" },
      { name: "Custom Development", href: "/services/development" },
      { name: "24/7 Support", href: "/support" },
    ],
    Company: [
      { name: "About Us", href: "/company/about" },
      { name: "Careers", href: "/company/careers" },
      { name: "Partners", href: "/company/partners" },
      { name: "Press & News", href: "/company/press" },
      { name: "Contact", href: "/contact" },
    ],
  };

  // Trust & compliance badges
  const complianceBadges = [
    {
      name: "ISO 27001",
      color: "bg-blue-900/30 text-blue-300 border border-blue-800/50",
    },
    {
      name: "GDPR Compliant",
      color: "bg-green-900/30 text-green-300 border border-green-800/50",
    },
    {
      name: "SOC 2 Type II",
      color: "bg-purple-900/30 text-purple-300 border border-purple-800/50",
    },
    {
      name: "Industry 4.0",
      color: "bg-orange-900/30 text-orange-300 border border-orange-800/50",
    },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-gray-900 min-h-[600px]">
      {/* Multiple Meteors with different properties */}
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={15} color="#10B981" speed="slow" />
        <Meteors
          number={10}
          color="#3B82F6"
          speed="medium"
          className="opacity-60"
        />
        <Meteors
          number={5}
          color="#8B5CF6"
          speed="fast"
          className="opacity-40"
        />
      </div>

      {/* Globe Background - Positioned at Bottom Right */}
      <div className="absolute bottom-0 right-0 w-full h-full max-w-[800px] max-h-[800px] opacity-10 lg:opacity-15 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-full translate-y-1/4 translate-x-1/4">
          <Globe className="w-full h-full" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8">
          {/* Top Section with Newsletter */}
          <div className="border-b border-gray-900 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="">
                  Ready to transform your manufacturing operations?
                </h2>
                <p className="text-gray-400 mb-6">
                  Join 1,000+ manufacturers who trust INTEGRA 360 for their
                  digital transformation.
                </p>

                <div className="flex flex-wrap gap-3">
                  {complianceBadges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${badge.color}`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
                {/* Meteor inside the newsletter card for effect */}
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                  <Meteors number={3} color="#10B981" speed="slow" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-white font-bold">Stay Updated</h4>
                  <p className="text-gray-300 mb-6">
                    Get the latest insights on Industry 4.0, manufacturing
                    trends, and platform updates.
                  </p>

                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Enter your work email"
                      className="flex-1 bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm"
                    />
                    <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap shadow-lg">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 mt-3">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe
                    anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Links & Info */}
          <div className="py-12 grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link to="/" className="inline-flex items-center gap-3 mb-6">
                <div className="h-15 w-15 flex items-center justify-center">
                  <div className="h-15 w-15 flex items-center justify-center">
                   <img src="logo.png" alt="logo" className="w-15 h-15"/>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    Industry <span className="text-green-500">INTEGRA</span> 360
                  </div>
                  <div className="text-sm text-gray-400">
                    Industrial Intelligence Platform
                  </div>
                </div>
              </Link>

              <p className="text-gray-400 mb-8">
                Transforming manufacturing through AI-powered insights,
                real-time monitoring, and predictive analytics for the modern
                industrial enterprise.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all hover:scale-105"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all hover:scale-105"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all hover:scale-105"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1 group"
                      >
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-900 pt-8 pb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-green-600 group-hover:border-green-600 transition-all">
                  <Phone className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Sales Inquiries</div>
                  <div className="font-semibold group-hover:text-green-400 transition-colors">
                    +91 7219623991
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-green-600 group-hover:border-green-600 transition-all">
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-semibold group-hover:text-green-400 transition-colors">
                    info@positivequadrant.in
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-green-600 group-hover:border-green-600 transition-all">
                  <MapPin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Headquarters</div>
                  <div className="font-semibold group-hover:text-green-400 transition-colors">
                    Ambernath - Thane, Mumbai, Maharashtra
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-900 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                © {currentYear} Industry INTEGRA 360. All rights reserved.
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-white transition-colors hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-500 hover:text-white transition-colors hover:underline"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-gray-500 hover:text-white transition-colors hover:underline"
                >
                  Cookie Policy
                </Link>
                <Link
                  to="/security"
                  className="text-gray-500 hover:text-white transition-colors hover:underline flex items-center gap-1"
                >
                  <Shield className="h-4 w-4" />
                  Security
                </Link>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
