import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Cpu,
  Monitor,
  BarChart3,
  Zap,
  Shield,
  Cloud,
  Network,
  Database,
  Server,
  Factory,
  Wrench,
  LifeBuoy,
  Rocket,
  BookOpen,
  FileText,
  HelpCircle,
  Users,
  Target,
  PieChart,
  Activity,
  Settings,
  Lock,
  Globe,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle link click - closes mobile menu and navigates
  const handleLinkClick = (path) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Handle hash link click - closes mobile menu
  const handleHashLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Toggle mobile dropdown
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <HashLink
          to="/"
          className="flex items-center cursor-pointer"
          smooth
          onClick={() => handleLinkClick("/")}
        >
          <div className="flex h-15 w-15 items-center justify-center">
            <img src="logo.png" alt="Industry INTEGRA Logo" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg lg:text-2xl font-bold text-gray-900">
              Industry <span className="text-green-600">INTEGRA</span> 360
            </span>
          </div>
        </HashLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Platform Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium text-gray-700 hover:text-green-700 data-[state=open]:text-green-700">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-2xl rounded-lg p-0">
                  <div className="grid w-[800px] grid-cols-2">
                    {/* Left Column - Platform Overview */}
                    <div className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                            <Cpu className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              INTEGRA 360 Platform
                            </h3>
                            <p className="text-sm text-gray-500">
                              Complete industrial IoT solution
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">
                          End-to-end platform for modern manufacturing with
                          real-time monitoring, analytics, and automation.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Platform Overview
                          </h4>
                          <div className="space-y-2">
                            <NavigationMenuLink asChild>
                              <HashLink
                                to="/what-is-industry-integra-360"
                                smooth
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 group transition-all duration-200 hover:shadow-sm"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <div className="h-8 w-8 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                  <Target className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                                    What is INTEGRA 360
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Learn about our platform
                                  </div>
                                </div>
                              </HashLink>
                            </NavigationMenuLink>

                            <NavigationMenuLink asChild>
                              <HashLink
                                to="/platform-architecture"
                                smooth
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 group transition-all duration-200 hover:shadow-sm"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <div className="h-8 w-8 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                  <Server className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                                    Platform Architecture
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Scalable and reliable design
                                  </div>
                                </div>
                              </HashLink>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Core Modules */}
                    <div className="p-8">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
                        Core Modules
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <NavigationMenuLink asChild>
                            <HashLink
                              to="/industry-integra-for-process"
                              smooth
                              className="block p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <Monitor className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-gray-900">
                                  Process Monitoring
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">
                                Real-time process efficiency and production
                                insights
                              </p>
                            </HashLink>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <HashLink
                              to="/industry-integra-for-energy"
                              smooth
                              className="block p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <Zap className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-gray-900">
                                  Energy Management
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">
                                Monitor and optimize energy usage and costs
                              </p>
                            </HashLink>
                          </NavigationMenuLink>
                        </div>

                        <div className="space-y-4">
                          <NavigationMenuLink asChild>
                            <HashLink
                              to="/industry-integra-for-building"
                              smooth
                              className="block p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <BarChart3 className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-gray-900">
                                  Building Management
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">
                                HVAC, utilities, and building performance
                                monitoring
                              </p>
                            </HashLink>
                          </NavigationMenuLink>

                          <NavigationMenuLink asChild>
                            <HashLink
                              to="/industry-integra-for-factory"
                              smooth
                              className="block p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <Shield className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-medium text-gray-900">
                                  Factory Intelligence
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">
                                Quality, traceability, and compliance control
                              </p>
                            </HashLink>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* AI Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium text-gray-700 hover:text-green-700 data-[state=open]:text-green-700">
                  AI Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-2xl rounded-xl p-0 overflow-hidden">
                  <div className="grid w-[950px] grid-cols-3">
                    {/* LEFT SIDE – AI INTRO */}
                    <div className="col-span-1 bg-gradient-to-br from-green-50 to-white p-8 border-r">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-11 w-11 rounded-xl bg-green-100 flex items-center justify-center">
                            <Cpu className="h-5 w-5 text-green-700" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            AI-Powered Automation
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Intelligent automation solutions powered by Artificial
                          Intelligence, real-time analytics, and smart
                          monitoring to optimize industrial operations.
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SIDE – SOLUTION CARDS */}
                    <div className="col-span-2 p-8">
                      <div className="grid grid-cols-2 gap-6">
                        {/* PROCESS AUTOMATION */}
                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/ai-solutions-for-process-automation"
                            smooth
                            className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <img
                              src="modules/process-bg.webp"
                              alt="Process Automation"
                              className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                Process Automation
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                AI-driven production monitoring and
                                optimization.
                              </p>
                            </div>
                          </HashLink>
                        </NavigationMenuLink>

                        {/* BUILDING AUTOMATION */}
                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/ai-solutions-for-building-automation"
                            smooth
                            className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <img
                              src="modules/building-bg.webp"
                              alt="Building Automation"
                              className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                Building Automation
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                Smart HVAC, lighting, and facility intelligence.
                              </p>
                            </div>
                          </HashLink>
                        </NavigationMenuLink>

                        {/* FACTORY AUTOMATION */}
                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/ai-solutions-for-factory-automation"
                            smooth
                            className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <img
                              src="modules/factory-bg.webp"
                              alt="Factory Automation"
                              className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                Factory Intelligence
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                AI-based quality, traceability, and compliance
                                control.
                              </p>
                            </div>
                          </HashLink>
                        </NavigationMenuLink>

                        {/* ENERGY AUTOMATION */}
                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/ai-solutions-for-energy-automation"
                            smooth
                            className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <img
                              src="modules/energy-bg.webp"
                              alt="Energy Automation"
                              className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                Energy Automation
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                Intelligent energy monitoring and cost
                                optimization.
                              </p>
                            </div>
                          </HashLink>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium text-gray-700 hover:text-green-700 data-[state=open]:text-green-700">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-2xl rounded-lg p-0">
                  <div className="grid w-[800px] grid-cols-2">
                    {/* Left Column */}
                    <div className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                            <Factory className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              Industry Solutions
                            </h3>
                            <p className="text-sm text-gray-500">
                              Tailored for your industry needs
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">
                          Specialized solutions designed for specific
                          manufacturing challenges and industries.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/solutions#predictive-maintenance"
                            smooth
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-200 hover:shadow-sm"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <Activity className="h-5 w-5 text-green-600 transition-transform group-hover:scale-110" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                                Predictive Maintenance
                              </div>
                              <div className="text-xs text-gray-500">
                                Reduce downtime with AI insights
                              </div>
                            </div>
                          </HashLink>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/solutions#energy-optimization"
                            smooth
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-200 hover:shadow-sm"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <Zap className="h-5 w-5 text-green-600 transition-transform group-hover:scale-110" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                                Energy Optimization
                              </div>
                              <div className="text-xs text-gray-500">
                                Cut energy costs by up to 30%
                              </div>
                            </div>
                          </HashLink>
                        </NavigationMenuLink>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            By Industry
                          </h4>
                          <div className="space-y-3">
                            {[
                              "Automotive",
                              "Pharmaceutical",
                              "FMCG",
                              "Chemical",
                            ].map((industry) => (
                              <NavigationMenuLink asChild key={industry}>
                                <HashLink
                                  to="/solutions#by-industry"
                                  smooth
                                  className="block text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {industry}
                                </HashLink>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            By Use Case
                          </h4>
                          <div className="space-y-3">
                            {[
                              "Smart Factory",
                              "Plant Digitization",
                              "Remote Monitoring",
                              "Industry 4.0",
                            ].map((usecase) => (
                              <NavigationMenuLink asChild key={usecase}>
                                <HashLink
                                  to="/solutions#use-cases"
                                  smooth
                                  className="block text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {usecase}
                                </HashLink>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t">
                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/solutions"
                            smooth
                            className="text-sm font-medium text-green-600 hover:text-green-800 inline-flex items-center gap-1 group transition-all"
                            onClick={() => setOpenDropdown(null)}
                          >
                            Explore all solutions
                            <ChevronDown className="h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                          </HashLink>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium text-gray-700 hover:text-green-700 data-[state=open]:text-green-700">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-2xl rounded-lg p-0">
                  <div className="grid w-[800px] grid-cols-2">
                    {/* Left Column */}
                    <div className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                            <Wrench className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              Professional Services
                            </h3>
                            <p className="text-sm text-gray-500">
                              End-to-end implementation
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">
                          From consultation to implementation, our experts
                          ensure seamless integration.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/services#implementation-consulting"
                            smooth
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-200 hover:shadow-sm"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <Settings className="h-5 w-5 text-green-600 transition-transform group-hover:scale-110" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                                Implementation Consulting
                              </div>
                              <div className="text-xs text-gray-500">
                                Strategic roadmap and planning
                              </div>
                            </div>
                          </HashLink>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/services#system-integration"
                            smooth
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-200 hover:shadow-sm"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <Network className="h-5 w-5 text-green-600 transition-transform group-hover:scale-110" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                                System Integration
                              </div>
                              <div className="text-xs text-gray-500">
                                Seamless connectivity solutions
                              </div>
                            </div>
                          </HashLink>
                        </NavigationMenuLink>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            Technical Services
                          </h4>

                          <div className="space-y-3">
                            {[
                              {
                                name: "PLC Programming",
                                path: "/plc-programming-services",
                              },
                              {
                                name: "Cloud Infrastructure",
                                path: "/cloud-infrastructure-services",
                              },
                              {
                                name: "SCADA Services",
                                path: "/scada-services",
                              },
                              {
                                name: "Data Integration",
                                path: "/data-integration-services",
                              },
                            ].map((service) => (
                              <NavigationMenuLink asChild key={service.name}>
                                <Link
                                  to={service.path}
                                  className="block text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {service.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            Software Services
                          </h4>
                          <div className="space-y-3">
                            {[
                              "Custom Development",
                              "IoT Applications",
                              "ERP Integration",
                              "Mobile Applications",
                            ].map((service) => (
                              <NavigationMenuLink asChild key={service}>
                                <HashLink
                                  to="/services#software-services"
                                  smooth
                                  className="block text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {service}
                                </HashLink>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t">
                        <NavigationMenuLink asChild>
                          <HashLink
                            to="/services"
                            smooth
                            className="text-sm font-medium text-green-600 hover:text-green-800 inline-flex items-center gap-1 group transition-all"
                            onClick={() => setOpenDropdown(null)}
                          >
                            View all services
                            <ChevronDown className="h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                          </HashLink>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Support Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <HashLink
                    to="/support"
                    smooth
                    className="inline-flex h-9 items-center justify-center px-4 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Support
                  </HashLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/protocols-we-serve"
                    smooth
                    className="inline-flex h-9 items-center justify-center px-4 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Protocols We Serve
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right Side: Contact & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Animated Demo Button */}
          <a
            href="https://positivequadrant.in/contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="relative bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 shadow-lg hover:shadow-xl text-white transition-all duration-300 group overflow-hidden animate-gradient-x">
              Request Demo
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-green-50 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[320px] sm:w-[380px] p-0 border-0 shadow-2xl bg-white overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <img src="logo.png" alt="Industry INTEGRA Logo" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        Industry <span className="text-green-600">INTEGRA</span>{" "}
                        360
                      </div>
                      <div className="text-xs text-gray-500">
                        Industrial Platform
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <nav className="space-y-4">
                    {/* Platform Dropdown */}
                    <div className="border-b pb-4">
                      <button
                        onClick={() => toggleDropdown("platform")}
                        className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-green-600"
                      >
                        <span>Platform</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === "platform" ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === "platform" && (
                        <div className="mt-3 space-y-3 pl-2">
                          <div className="mb-3">
                            <HashLink
                              to="/what-is-industry-integra-360"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              What is INTEGRA 360
                            </HashLink>
                            <HashLink
                              to="/platform-architecture"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Platform Architecture
                            </HashLink>
                          </div>
                          <div className="pt-2 border-t">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                              Core Modules
                            </h4>
                            <HashLink
                              to="/industry-integra-for-process"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Process Monitoring
                            </HashLink>
                            <HashLink
                              to="/industry-integra-for-energy"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Energy Management
                            </HashLink>
                            <HashLink
                              to="/industry-integra-for-building"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Building Management
                            </HashLink>
                            <HashLink
                              to="/industry-integra-for-factory"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Factory Intelligence
                            </HashLink>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* AI Solutions Dropdown */}
                    <div className="border-b pb-4">
                      <button
                        onClick={() => toggleDropdown("ai")}
                        className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-green-600"
                      >
                        <span>AI Solutions</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === "ai" ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === "ai" && (
                        <div className="mt-3 space-y-3 pl-2">
                          <HashLink
                            to="/ai-solutions-for-process-automation"
                            className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            Process Automation
                          </HashLink>
                          <HashLink
                            to="/ai-solutions-for-building-automation"
                            className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            Building Automation
                          </HashLink>
                          <HashLink
                            to="/ai-solutions-for-factory-automation"
                            className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            Factory Intelligence
                          </HashLink>
                          <HashLink
                            to="/ai-solutions-for-energy-automation"
                            className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            Energy Automation
                          </HashLink>
                        </div>
                      )}
                    </div>

                    {/* Solutions Dropdown */}
                    <div className="border-b pb-4">
                      <button
                        onClick={() => toggleDropdown("solutions")}
                        className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-green-600"
                      >
                        <span>Solutions</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === "solutions" ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === "solutions" && (
                        <div className="mt-3 space-y-3 pl-2">
                          <HashLink
                            to="/solutions#predictive-maintenance"
                            className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            Predictive Maintenance
                          </HashLink>
                          <HashLink
                            to="/solutions#energy-optimization"
                            className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            Energy Optimization
                          </HashLink>
                          <div className="pt-2 mt-2 border-t">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                              By Industry
                            </h4>
                            <HashLink
                              to="/solutions#by-industry"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Automotive
                            </HashLink>
                            <HashLink
                              to="/solutions#by-industry"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Pharmaceutical
                            </HashLink>
                            <HashLink
                              to="/solutions#by-industry"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              FMCG
                            </HashLink>
                            <HashLink
                              to="/solutions#by-industry"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Chemical
                            </HashLink>
                          </div>
                          <div className="pt-2">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                              By Use Case
                            </h4>
                            <HashLink
                              to="/solutions#use-cases"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Smart Factory
                            </HashLink>
                            <HashLink
                              to="/solutions#use-cases"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Plant Digitization
                            </HashLink>
                            <HashLink
                              to="/solutions#use-cases"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Remote Monitoring
                            </HashLink>
                            <HashLink
                              to="/solutions#use-cases"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Industry 4.0
                            </HashLink>
                          </div>
                          <HashLink
                            to="/solutions"
                            className="block py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg px-3 transition mt-2"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            Explore all solutions →
                          </HashLink>
                        </div>
                      )}
                    </div>

                    {/* Services Dropdown */}
                    <div className="border-b pb-4">
                      <button
                        onClick={() => toggleDropdown("services")}
                        className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-green-600"
                      >
                        <span>Services</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === "services" ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === "services" && (
                        <div className="mt-3 space-y-3 pl-2">
                          <HashLink
                            to="/services#implementation-consulting"
                            className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            Implementation Consulting
                          </HashLink>
                          <HashLink
                            to="/services#system-integration"
                            className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            System Integration
                          </HashLink>
                          <div className="pt-2 mt-2 border-t">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                              Technical Services
                            </h4>
                            <HashLink
                              to="/services#technical-services"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              PLC Programming
                            </HashLink>
                            <HashLink
                              to="/services#technical-services"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Cloud Infrastructure
                            </HashLink>
                            <HashLink
                              to="/services#technical-services"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              SCADA Services
                            </HashLink>
                            <HashLink
                              to="/services#technical-services"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Data Integration
                            </HashLink>
                          </div>
                          <div className="pt-2">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                              Software Services
                            </h4>
                            <HashLink
                              to="/services#software-services"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Custom Development
                            </HashLink>
                            <HashLink
                              to="/services#software-services"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              IoT Applications
                            </HashLink>
                            <HashLink
                              to="/services#software-services"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              ERP Integration
                            </HashLink>
                            <HashLink
                              to="/services#software-services"
                              className="block py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition"
                              onClick={handleHashLinkClick}
                              smooth
                            >
                              Mobile Applications
                            </HashLink>
                          </div>
                          <HashLink
                            to="/services"
                            className="block py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg px-3 transition mt-2"
                            onClick={handleHashLinkClick}
                            smooth
                          >
                            View all services →
                          </HashLink>
                        </div>
                      )}
                    </div>

                    {/* Support Link */}
                    <div className="border-b pb-4">
                      <HashLink
                        to="/support"
                        className="block font-medium text-gray-900 hover:text-green-600 transition"
                        onClick={handleHashLinkClick}
                        smooth
                      >
                        Support
                      </HashLink>
                    </div>
                  </nav>
                </div>

                <div className="p-6 bg-gray-50/50 border-t">
                  <a
                    href="https://positivequadrant.in/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 shadow-lg hover:shadow-xl text-white transition-all duration-300 group overflow-hidden animate-gradient-x">
                      Request Demo
                    </Button>
                  </a>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Need immediate help?{" "}
                    <HashLink
                      to="/contact"
                      className="text-green-600 hover:underline transition-colors"
                      onClick={handleHashLinkClick}
                      smooth
                    >
                      Contact support
                    </HashLink>
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
