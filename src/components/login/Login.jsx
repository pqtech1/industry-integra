import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cpu,
  Zap,
  Building2,
  Factory,
  GitBranch,
  KeyRound,
  Lock,
  AlertCircle,
  ArrowRight,
  Phone,
  Mail,
  Shield,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));
    const success = login(licenseNumber, password);
    setIsLoading(false);

    if (!success) {
      setError("Invalid license number or password");
    }
  };

  const demoCredentials = [
    {
      type: "Master Admin",
      license: "PM-MASTER-001",
      password: "master123",
      icon: Shield,
    },
    {
      type: "Process Automation",
      license: "PM-PROC-001",
      password: "process123",
      icon: GitBranch,
    },
    {
      type: "Energy Automation",
      license: "PM-ENRG-001",
      password: "energy123",
      icon: Zap,
    },
    {
      type: "Building Automation",
      license: "PM-BLDG-001",
      password: "building123",
      icon: Building2,
    },
    {
      type: "Factory Automation",
      license: "PM-FACT-001",
      password: "factory123",
      icon: Factory,
    },
  ];

  const modules = [
    { icon: GitBranch, label: "Process", color: "text-blue-600" },
    { icon: Zap, label: "Energy", color: "text-yellow-600" },
    { icon: Building2, label: "Building", color: "text-purple-600" },
    { icon: Factory, label: "Factory", color: "text-green-600" },
  ];

  // StatItem Component
  const StatItem = ({ value, label }) => {
    return (
      <div className="text-center">
        <div className="text-3xl font-bold text-green-700">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    );
  };
  const stats = [
    { value: "500+", label: "Industrial Facilities" },
    { value: "68+", label: "Real-time KPIs" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Uptime" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left Side - White Background */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-start bg-white p-8">
        <div className="w-full max-w-2xl">
          {/* Logo/Branding */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="text-left">
                <img
                  src="plant-master-logo.png"
                  alt="Industry Integra 360"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Mudules */}
          <div className="w-full max-w-2xl mb-12 mt-15">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Integrated Modules
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {modules.map((module) => {
                const IconComponent = module.icon;
                let bgColor, borderColor, iconColor, textColor;

                switch (module.color) {
                  case "text-green-600":
                    bgColor = "#dcfce7";
                    borderColor = "#86efac";
                    iconColor = "text-green-700";
                    textColor = "text-green-800";
                    break;
                  case "text-yellow-600":
                    bgColor = "#fef9c3";
                    borderColor = "#fde047";
                    iconColor = "text-yellow-700";
                    textColor = "text-yellow-800";
                    break;
                  case "text-blue-600":
                    bgColor = "#dbeafe";
                    borderColor = "#93c5fd";
                    iconColor = "text-blue-700";
                    textColor = "text-blue-800";
                    break;
                  case "text-purple-600":
                    bgColor = "#f3e8ff";
                    borderColor = "#d8b4fe";
                    iconColor = "text-purple-700";
                    textColor = "text-purple-800";
                    break;
                }

                return (
                  <div
                    key={module.label}
                    className="flex items-center gap-2 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
                    style={{
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      borderWidth: "1px",
                    }}
                  >
                    <IconComponent className={`h-5 w-5 ${iconColor}`} />
                    <span className={`text-sm font-semibold ${textColor}`}>
                      {module.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-12 ">
            <StatItem value="4" label="Integrated Modules" />
            <StatItem value="68+" label="Real-time KPIs" />
            <StatItem value="100%" label="Configurable" />
            <StatItem value="24/7" label="Support" />
          </div>

          {/* Footer Text */}
          <p className="mt-12 text-center text-sm text-gray-500">
            Trusted by 500+ industrial facilities worldwide
          </p>
        </div>
      </div>

      {/* Right Side - Gradient Background */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-4 bg-gradient-to-br from-green-900 via-green-800 to-emerald-700">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="mb-8 text-center lg:hidden">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="plant-master-logo.png"
                alt="Industry Integra 360"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white">Welcome Back</h3>
            <p className="mt-1 text-sm text-white/80">
              Enter your license credentials to continue
            </p>
          </div>

          {/* Desktop Header */}
          <div className="mb-8 text-center hidden lg:block">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-lg text-white/90">
              Sign in to access your Industry INTEGRA 360 dashboard
            </p>
          </div>

          {/* Login Form */}
          <Card className="border-none bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="license" className="text-white">
                    License Number
                  </Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                    <Input
                      id="license"
                      type="text"
                      placeholder="PM-XXXX-XXX"
                      value={licenseNumber}
                      onChange={(e) =>
                        setLicenseNumber(e.target.value.toUpperCase())
                      }
                      className="pl-10 h-12 bg-white/15 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white/50 focus-visible:border-white/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 h-12 bg-white/15 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white/50 focus-visible:border-white/50"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <Alert
                    variant="destructive"
                    className="bg-red-500/20 border-red-500/30"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-white">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="h-12 w-full bg-white text-green-800 font-semibold hover:bg-white/90 hover:text-green-900"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-green-800 border-t-transparent" />
                      Validating...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>

                {/* Demo Credentials */}
                <div className="hidden pt-6 border-t border-white/20">
                  <p className="mb-4 text-sm font-semibold text-center text-white/90">
                    DEMO CREDENTIALS
                  </p>
                  <div className="space-y-3">
                    {demoCredentials.map((cred) => {
                      const Icon = cred.icon;
                      return (
                        <div
                          key={cred.type}
                          className="flex items-center gap-3 p-3 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:bg-white/15 transition-colors"
                          onClick={() => {
                            setLicenseNumber(cred.license);
                            setPassword(cred.password);
                          }}
                        >
                          <div className="p-2 bg-white/20 rounded-lg">
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">
                              {cred.type}
                            </p>
                            <p className="text-xs text-white/70 font-mono">
                              {cred.license} / {cred.password}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-white/50" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="mt-8 space-y-3 text-center">
            <p className="text-sm text-white/80">
              Need help? Contact info@positivequadrant.in
            </p>

            <div className="pt-4 border-t border-white/20">
              <a
                href="https://positivequadrant.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 text-xs text-white hover:text-white transition-colors mb-3"
              >
                <span className="opacity-70 group-hover:opacity-100">🏢</span>
                Designed and Developed by Positive Quadrant Technologies LLP
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-white/80">
                <a
                  href="tel:7219623991"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  7219623991
                </a>
                <span className="hidden sm:inline text-white/50">|</span>
                <a
                  href="mailto:info@positivequadrant.in"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Mail className="h-3 w-3" />
                  info@positivequadrant.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
