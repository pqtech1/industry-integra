import React, { useState } from "react";
import {
  FaHeadset,
  FaQuestionCircle,
  FaBook,
  FaVideo,
  FaDownload,
  FaBug,
  FaLightbulb,
  FaUsers,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaCheckCircle,
  FaClock,
  FaRocket,
  FaCog,
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaNetworkWired,
  FaRobot,
  FaIndustry,
  FaBuilding,
  FaCar,
  FaFlask,
} from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState("help-center");
  const [searchQuery, setSearchQuery] = useState("");

  // Support Categories
  const supportCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <FaRocket className="h-8 w-8" />,
      description: "New to Industry INTEGRA? Start here",
      articles: 12,
      color: "blue",
    },
    {
      id: "installation",
      title: "Installation & Setup",
      icon: <FaCog className="h-8 w-8" />,
      description: "Installation guides and configuration",
      articles: 18,
      color: "green",
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: <FaTools className="h-8 w-8" />,
      description: "Common issues and solutions",
      articles: 25,
      color: "orange",
    },
    {
      id: "analytics",
      title: "Analytics & Reports",
      icon: <FaChartLine className="h-8 w-8" />,
      description: "Data analysis and reporting guides",
      articles: 15,
      color: "purple",
    },
    {
      id: "security",
      title: "Security & Compliance",
      icon: <FaShieldAlt className="h-8 w-8" />,
      description: "Security features and compliance",
      articles: 10,
      color: "red",
    },
    {
      id: "mobile",
      title: "Mobile Applications",
      icon: <FaMobileAlt className="h-8 w-8" />,
      description: "Mobile app guides and support",
      articles: 8,
      color: "teal",
    },
  ];

  // Popular Articles
  const popularArticles = [
    {
      title: "How to Set Up Real-time Monitoring",
      category: "Getting Started",
      views: "1.2k",
      readTime: "5 min",
    },
    {
      title: "PLC Integration Troubleshooting Guide",
      category: "Troubleshooting",
      views: "890",
      readTime: "8 min",
    },
    {
      title: "Energy Optimization Dashboard Setup",
      category: "Installation & Setup",
      views: "750",
      readTime: "6 min",
    },
    {
      title: "Predictive Maintenance Configuration",
      category: "Analytics & Reports",
      views: "650",
      readTime: "10 min",
    },
    {
      title: "Mobile App Access Setup",
      category: "Mobile Applications",
      views: "520",
      readTime: "4 min",
    },
  ];

  // Support Plans
  const supportPlans = [
    {
      name: "Basic Support",
      icon: <FaHeadset className="h-8 w-8" />,
      price: "Free",
      features: [
        "Email Support (48-hour response)",
        "Knowledge Base Access",
        "Community Forums",
        "Basic Troubleshooting",
        "Online Documentation",
      ],
      bestFor: "Small businesses and startups",
      color: "gray",
    },
    {
      name: "Professional Support",
      icon: <FaUsers className="h-8 w-8" />,
      price: "$499/month",
      features: [
        "Phone & Email Support (24-hour response)",
        "Dedicated Support Engineer",
        "Priority Ticket Handling",
        "Remote Assistance",
        "Monthly Health Checks",
        "Training Sessions (2/month)",
      ],
      bestFor: "Growing businesses",
      color: "blue",
    },
    {
      name: "Enterprise Support",
      icon: <FaBuilding className="h-8 w-8" />,
      price: "Custom",
      features: [
        "24/7 Phone Support (30-min response)",
        "Dedicated Support Team",
        "On-site Assistance Available",
        "SLA Guarantee (99.9% uptime)",
        "Quarterly Business Reviews",
        "Custom Training Programs",
        "Emergency Response Team",
        "Proactive Monitoring",
      ],
      bestFor: "Large enterprises and critical operations",
      color: "purple",
    },
  ];

  // Industry Support
  const industrySupport = [
    {
      industry: "Manufacturing",
      icon: <FaIndustry className="h-6 w-6" />,
      specialists: 12,
      avgResponse: "2 hours",
    },
    {
      industry: "Automotive",
      icon: <FaCar className="h-6 w-6" />,
      specialists: 8,
      avgResponse: "1.5 hours",
    },
    {
      industry: "Chemical",
      icon: <FaFlask className="h-6 w-6" />,
      specialists: 6,
      avgResponse: "3 hours",
    },
    {
      industry: "Building Automation",
      icon: <FaBuilding className="h-6 w-6" />,
      specialists: 10,
      avgResponse: "2.5 hours",
    },
  ];

  // Resources
  const resources = [
    {
      type: "Documentation",
      icon: <FaBook className="h-6 w-6" />,
      count: "150+",
      description: "Comprehensive product documentation",
    },
    {
      type: "Video Tutorials",
      icon: <FaVideo className="h-6 w-6" />,
      count: "80+",
      description: "Step-by-step video guides",
    },
    {
      type: "API Reference",
      icon: <FaDatabase className="h-6 w-6" />,
      count: "200+",
      description: "Complete API documentation",
    },
    {
      type: "Downloads",
      icon: <FaDownload className="h-6 w-6" />,
      count: "50+",
      description: "Drivers, tools, and utilities",
    },
  ];

  // Contact Methods
  const contactMethods = [
    {
      method: "24/7 Support Hotline",
      details: "+1-800-INDUSTRY",
      icon: <FaPhone className="h-6 w-6" />,
      availability: "24/7",
      response: "Immediate",
    },
    {
      method: "Email Support",
      details: "support@industryintegra.com",
      icon: <FaEnvelope className="h-6 w-6" />,
      availability: "24/7",
      response: "Within 4 hours",
    },
    {
      method: "Live Chat",
      details: "Available on website",
      icon: <FaComments className="h-6 w-6" />,
      availability: "Mon-Fri, 9AM-6PM EST",
      response: "Within 5 minutes",
    },
    {
      method: "Schedule Call",
      details: "Book online appointment",
      icon: <FaCalendarAlt className="h-6 w-6" />,
      availability: "24/7 Booking",
      response: "Scheduled",
    },
  ];

  // Ticket Submission Handler
  const handleSubmitTicket = () => {
    alert(
      "Ticket submission form would open here. Our support team will contact you within the specified response time.",
    );
  };

  // Live Chat Handler
  const handleLiveChat = () => {
    alert(
      "Live chat would initiate here. Connecting you with our support team...",
    );
  };

  // Schedule Call Handler
  const handleScheduleCall = () => {
    alert(
      "Redirecting to scheduling calendar. Please select your preferred time slot.",
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-green-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-lg font-medium mb-8 border border-white/20">
                <FaHeadset className="h-5 w-5" />
                Industry INTEGRA Support
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
                We're Here to Help
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get expert support for Industry INTEGRA 360. Find answers, get
                help, and connect with our support team.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for answers, guides, or articles..."
                    className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-green-500 text-white"
                    onClick={() =>
                      searchQuery && alert(`Searching for: ${searchQuery}`)
                    }
                  >
                    Search
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleSubmitTicket}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaBug className="h-5 w-5" />
                  Submit Support Ticket
                </button>
                <button
                  onClick={handleLiveChat}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaComments className="h-5 w-5" />
                  Start Live Chat
                </button>
                <button
                  onClick={handleScheduleCall}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FaCalendarAlt className="h-5 w-5" />
                  Schedule Support Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                98.5%
              </div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                15 min
              </div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                10k+
              </div>
              <div className="text-gray-600">Articles & Resources</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Navigation Tabs */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("help-center")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === "help-center" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              <div className="flex items-center gap-3">
                <FaQuestionCircle className="h-5 w-5" />
                Help Center
              </div>
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === "contact" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              <div className="flex items-center gap-3">
                <FaHeadset className="h-5 w-5" />
                Contact Support
              </div>
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === "resources" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              <div className="flex items-center gap-3">
                <FaBook className="h-5 w-5" />
                Resources
              </div>
            </button>
            <button
              onClick={() => setActiveTab("plans")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === "plans" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              <div className="flex items-center gap-3">
                <FaUsers className="h-5 w-5" />
                Support Plans
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Help Center */}
      {activeTab === "help-center" && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Help Center
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions and troubleshooting guides
                </p>
              </div>

              {/* Support Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {supportCategories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div
                      className={`p-4 rounded-lg bg-${category.color}-100 text-${category.color}-600 inline-flex mb-4`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {category.articles} articles
                      </span>
                      <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                        Browse →
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Popular Articles */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">
                              {article.category}
                            </span>
                            <span className="text-sm text-gray-500">
                              {article.readTime} read
                            </span>
                            <span className="text-sm text-gray-500">
                              {article.views} views
                            </span>
                          </div>
                        </div>
                        <FaChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Support */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Industry-Specific Support
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {industrySupport.map((industry, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-gray-200 p-6"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                          {industry.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {industry.industry}
                          </h4>
                          <div className="text-sm text-gray-500">
                            {industry.specialists} specialists
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 mb-1">
                          {industry.avgResponse}
                        </div>
                        <div className="text-sm text-gray-500">
                          Average Response
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Support */}
      {activeTab === "contact" && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Contact Support
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Multiple ways to get in touch with our support team
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-6"
                  >
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600 inline-flex mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {method.method}
                    </h3>
                    <p className="text-gray-600 mb-4">{method.details}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Availability:</span>
                        <span className="font-medium">
                          {method.availability}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Response Time:</span>
                        <span className="font-medium text-green-600">
                          {method.response}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Ticket Form */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Submit Support Ticket
                  </h3>
                  <p className="text-gray-600">
                    Get personalized assistance from our support team
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product/Module
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select product...</option>
                      <option>Factory Automation</option>
                      <option>Process Automation</option>
                      <option>Building Automation</option>
                      <option>Energy Management</option>
                      <option>Predictive Maintenance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Low - General Question</option>
                      <option>Medium - Technical Issue</option>
                      <option>High - System Down</option>
                      <option>Critical - Production Stopped</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                      placeholder="Describe your issue in detail..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attachments
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <FaCloud className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Drag & drop files here, or click to browse
                      </p>
                      <p className="text-sm text-gray-500">
                        Maximum file size: 50MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-12 py-4 text-lg"
                    onClick={handleSubmitTicket}
                  >
                    <div className="flex items-center gap-3">
                      <FaBug className="h-5 w-5" />
                      Submit Support Ticket
                    </div>
                  </Button>
                  <p className="text-gray-500 text-sm mt-4">
                    Average response time: 15 minutes for high priority tickets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Resources */}
      {activeTab === "resources" && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Resources
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive resources to help you get the most out of
                  Industry INTEGRA
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="p-4 rounded-full bg-blue-100 text-blue-600 inline-flex mb-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {resource.type}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {resource.count}
                    </div>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                ))}
              </div>

              {/* Resource Categories */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Learning Resources
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaVideo className="h-6 w-6 text-blue-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Video Tutorials
                        </h4>
                        <p className="text-sm text-gray-600">
                          Step-by-step video guides for all features
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaBook className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">User Guides</h4>
                        <p className="text-sm text-gray-600">
                          Detailed product manuals and guides
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaLightbulb className="h-6 w-6 text-orange-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Best Practices
                        </h4>
                        <p className="text-sm text-gray-600">
                          Industry best practices and tips
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Technical Resources
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaDatabase className="h-6 w-6 text-purple-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          API Documentation
                        </h4>
                        <p className="text-sm text-gray-600">
                          Complete API reference and examples
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaDownload className="h-6 w-6 text-red-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">Downloads</h4>
                        <p className="text-sm text-gray-600">
                          Software, drivers, and tools
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaNetworkWired className="h-6 w-6 text-teal-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Integration Guides
                        </h4>
                        <p className="text-sm text-gray-600">
                          System integration documentation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Support Plans */}
      {activeTab === "plans" && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Support Plans
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose the support plan that best fits your business needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {supportPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative ${plan.color === "purple" ? "border-2 border-purple-500" : "border border-gray-200"} rounded-2xl overflow-hidden`}
                  >
                    {plan.color === "purple" && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-bold">
                        RECOMMENDED
                      </div>
                    )}

                    <div className="p-8">
                      <div
                        className={`p-4 rounded-xl bg-${plan.color}-100 text-${plan.color}-600 inline-flex mb-6`}
                      >
                        {plan.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="text-3xl font-bold text-gray-900 mb-4">
                        {plan.price}
                      </div>

                      <div className="mb-8">
                        <div className="text-sm text-gray-500 mb-2">
                          Best for:
                        </div>
                        <p className="text-gray-700">{plan.bestFor}</p>
                      </div>

                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <FaCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full ${plan.color === "gray" ? "bg-gray-600 hover:bg-gray-700" : plan.color === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-purple-600 hover:bg-purple-700"} text-white py-4`}
                        onClick={() =>
                          alert(
                            `Selected ${plan.name} plan. Our sales team will contact you.`,
                          )
                        }
                      >
                        Select Plan
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enterprise SLA */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Enterprise Service Level Agreement
                  </h3>
                  <p className="text-gray-600">
                    Guaranteed performance and support for critical operations
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      99.9%
                    </div>
                    <div className="text-gray-700">Uptime Guarantee</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      30 min
                    </div>
                    <div className="text-gray-700">Emergency Response</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-700">On-call Engineers</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      4 hrs
                    </div>
                    <div className="text-gray-700">On-site Dispatch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Community & Updates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                    <FaUsers className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Community Forum
                    </h3>
                    <p className="text-gray-600">
                      Connect with other Industry INTEGRA users
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                    <span>Ask questions and share knowledge</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                    <span>Access user-contributed solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                    <span>Connect with industry experts</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white py-4">
                  Join Community
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-green-100 text-green-600">
                    <FaRocket className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Product Updates
                    </h3>
                    <p className="text-gray-600">
                      Stay updated with latest features and releases
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                    <span>Monthly feature releases</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                    <span>Security updates and patches</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                    <span>Performance improvements</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 text-white py-4">
                  View Release Notes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-green-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 mb-8">
              <FaHeadset className="h-16 w-16 text-white" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Our support team is ready to help you resolve any issues and get
              you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-7 text-lg font-semibold rounded-lg"
                onClick={handleLiveChat}
              >
                <div className="flex items-center gap-3">
                  <FaComments className="h-6 w-6" />
                  Start Live Chat Now
                </div>
              </Button>

              <Button
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-12 py-7 text-lg font-semibold rounded-lg"
                onClick={handleSubmitTicket}
              >
                <div className="flex items-center gap-3">
                  <FaBug className="h-6 w-6" />
                  Submit Emergency Ticket
                </div>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Global Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">15 min</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">98.5%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">200+</div>
                <div className="text-gray-400 text-sm">Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
