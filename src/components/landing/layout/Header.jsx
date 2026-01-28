import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  ChevronDown,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Link to="/" className="flex items-center">
          <div className="flex h-15 w-15 items-center justify-center">
            <img src="logo.png" alt="Industry INTEGRA Logo" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">
              Industry <span className="text-green-600">INTEGRA</span> 360
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {/* Platform Dropdown - Two Columns */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium text-gray-700 hover:text-green-700 data-[state=open]:text-green-700 transition-colors duration-200">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-2xl rounded-lg p-0">
                  <div className="grid w-[800px] grid-cols-2">
                    {/* Left Column */}
                    <div className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center transition-transform hover:scale-105">
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
                            <Link
                              to="/platform/overview"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 group transition-all duration-200 hover:shadow-sm"
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
                            </Link>
                            <Link
                              to="/platform/architecture"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 group transition-all duration-200 hover:shadow-sm"
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="p-8">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
                        Core Modules
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <Link
                            to="/modules/production"
                            className="block p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <Monitor className="h-5 w-5 text-green-600 transition-transform group-hover:scale-110" />
                              <span className="text-sm font-medium text-gray-900">
                                Production Monitoring
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">
                              Real-time OEE and productivity tracking
                            </p>
                          </Link>
                          <Link
                            to="/modules/energy"
                            className="block p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <Zap className="h-5 w-5 text-green-600 transition-transform group-hover:scale-110" />
                              <span className="text-sm font-medium text-gray-900">
                                Energy Management
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">
                              Optimize energy consumption and costs
                            </p>
                          </Link>
                        </div>
                        <div className="space-y-4">
                          <Link
                            to="/modules/oee"
                            className="block p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-purple-200 hover:bg-purple-50"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <BarChart3 className="h-5 w-5 text-purple-600 transition-transform group-hover:scale-110" />
                              <span className="text-sm font-medium text-gray-900">
                                OEE & KPI Systems
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">
                              Performance metrics and analytics
                            </p>
                          </Link>
                          <Link
                            to="/modules/quality"
                            className="block p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white border border-gray-100 hover:border-red-200 hover:bg-red-50"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <Shield className="h-5 w-5 text-red-600 transition-transform group-hover:scale-110" />
                              <span className="text-sm font-medium text-gray-900">
                                Quality & Traceability
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">
                              Full traceability and compliance
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t">
                        <Link
                          to="/platform/all-modules"
                          className="text-sm font-medium text-green-600 hover:text-green-800 inline-flex items-center gap-1 group transition-all"
                        >
                          View all platform modules
                          <ChevronDown className="h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown - Two Columns */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium text-gray-700 hover:text-green-700 data-[state=open]:text-green-700 transition-colors duration-200">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-2xl rounded-lg p-0">
                  <div className="grid w-[800px] grid-cols-2">
                    {/* Left Column */}
                    <div className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center transition-transform hover:scale-105">
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
                        <Link
                          to="/solutions/predictive-maintenance"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-200 hover:shadow-sm"
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
                        </Link>
                        <Link
                          to="/solutions/energy-optimization"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-200 hover:shadow-sm"
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
                        </Link>
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
                              <Link
                                key={industry}
                                to={`/industries/${industry.toLowerCase()}`}
                                className="block text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                              >
                                {industry}
                              </Link>
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
                              <Link
                                key={usecase}
                                to={`/solutions/${usecase.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                              >
                                {usecase}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t">
                        <Link
                          to="/solutions/all"
                          className="text-sm font-medium text-green-600 hover:text-green-800 inline-flex items-center gap-1 group transition-all"
                        >
                          Explore all solutions
                          <ChevronDown className="h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services Dropdown - Two Columns */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium text-gray-700 hover:text-green-700 data-[state=open]:text-green-700 transition-colors duration-200">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-2xl rounded-lg p-0">
                  <div className="grid w-[800px] grid-cols-2">
                    {/* Left Column */}
                    <div className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center transition-transform hover:scale-105">
                            <Wrench className="h-5 w-5 text-purple-600" />
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
                        <Link
                          to="/services/consulting"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-200 hover:shadow-sm"
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
                        </Link>
                        <Link
                          to="/services/integration"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-200 hover:shadow-sm"
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
                        </Link>
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
                              "PLC Programming",
                              "Cloud Infrastructure",
                              "SCADA Configuration",
                              "Data Integration",
                            ].map((service) => (
                              <Link
                                key={service}
                                to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                              >
                                {service}
                              </Link>
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
                              <Link
                                key={service}
                                to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all duration-200"
                              >
                                {service}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t">
                        <Link
                          to="/services/all"
                          className="text-sm font-medium text-green-600 hover:text-green-800 inline-flex items-center gap-1 group transition-all"
                        >
                          View all services
                          <ChevronDown className="h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links */}
              <NavigationMenuItem>
                <Link to="/support">
                  <NavigationMenuLink className="inline-flex h-9 items-center justify-center px-4 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors duration-200">
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/resources">
                  <NavigationMenuLink className="inline-flex h-9 items-center justify-center px-4 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors duration-200">
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/company">
                  <NavigationMenuLink className="inline-flex h-9 items-center justify-center px-4 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors duration-200">
                    Company
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right Side: Contact & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Animated Demo Button */}
          <Button className="relative bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 shadow-lg hover:shadow-xl text-white transition-all duration-300 group overflow-hidden animate-gradient-x">
            <Link
              to="/request-demo"
              className="flex items-center gap-2 relative z-10"
            >
              <span className="group-hover:scale-105 transition-transform duration-300">
                Request Demo
              </span>
              <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet>
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
              className="w-[320px] sm:w-[380px] p-0 border-0 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-800">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        Industry INTEGRA 360
                      </div>
                      <div className="text-xs text-gray-500">
                        Industrial Platform
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  <nav className="space-y-1">
                    <div className="pb-4">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Platform
                      </h3>
                      <div className="space-y-2 ml-2">
                        <Link
                          to="/platform/overview"
                          className="block py-2 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                        >
                          Overview
                        </Link>
                        <Link
                          to="/modules/production"
                          className="block py-2 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                        >
                          Production Monitoring
                        </Link>
                        <Link
                          to="/modules/oee"
                          className="block py-2 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                        >
                          OEE & KPI
                        </Link>
                        <Link
                          to="/modules/energy"
                          className="block py-2 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                        >
                          Energy Management
                        </Link>
                      </div>
                    </div>

                    <div className="py-4 border-t">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Solutions
                      </h3>
                      <div className="space-y-2 ml-2">
                        <Link
                          to="/solutions/predictive-maintenance"
                          className="block py-2 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                        >
                          Predictive Maintenance
                        </Link>
                        <Link
                          to="/solutions/smart-factory"
                          className="block py-2 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                        >
                          Smart Factory
                        </Link>
                        <Link
                          to="/industries/automotive"
                          className="block py-2 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                        >
                          Automotive
                        </Link>
                        <Link
                          to="/industries/pharma"
                          className="block py-2 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                        >
                          Pharmaceutical
                        </Link>
                      </div>
                    </div>

                    <div className="py-4 border-t">
                      <Link
                        to="/support"
                        className="block py-3 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                      >
                        Support
                      </Link>
                      <Link
                        to="/resources"
                        className="block py-3 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                      >
                        Resources
                      </Link>
                      <Link
                        to="/company"
                        className="block py-3 text-sm font-medium text-gray-900 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-all"
                      >
                        Company
                      </Link>
                    </div>
                  </nav>
                </div>

                <div className="p-6 bg-gray-50/50">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                    <Link
                      to="/request-demo"
                      className="flex items-center justify-center gap-2 w-full relative z-10"
                    >
                      Request Demo
                    </Link>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Need immediate help?{" "}
                    <Link
                      to="/contact"
                      className="text-green-600 hover:underline transition-colors"
                    >
                      Contact support
                    </Link>
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
