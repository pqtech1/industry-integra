import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Building,
  Thermometer,
  Droplets,
  Users,
  Zap,
  Leaf,
  Sun,
  Shield,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Settings,
  BarChart3,
  Filter,
  Download,
  Plus,
  Eye,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  Calendar,
  MapPin,
  Power,
  Wifi,
  Battery,
  Volume2,
  Lock,
  Unlock,
  Wind,
  Cloud,
  Home,
  Smartphone,
  Cpu,
  Bell,
  History,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle, // Added missing import
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Building automation metrics
const automationMetrics = [
  {
    title: "Automation Coverage",
    value: "87%",
    change: "+5%",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Energy Savings",
    value: "24%",
    change: "+3%",
    icon: Zap,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Active Systems",
    value: "42",
    change: "+2",
    icon: Cpu,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Avg Response Time",
    value: "45s",
    change: "-12s",
    icon: Clock,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "System Uptime",
    value: "99.8%",
    change: "+0.2%",
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Active Alerts",
    value: "3",
    change: "-4",
    icon: AlertCircle,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

// System status
const systemStatus = [
  {
    system: "HVAC Automation",
    status: "optimal",
    uptime: 99.8,
    energy: 45,
    icon: Wind,
  },
  {
    system: "Lighting Control",
    status: "optimal",
    uptime: 99.9,
    energy: 25,
    icon: Sun,
  },
  {
    system: "Security Systems",
    status: "active",
    uptime: 100,
    energy: 8,
    icon: Shield,
  },
  {
    system: "Access Control",
    status: "warning",
    uptime: 95.2,
    energy: 12,
    icon: Lock,
  },
  {
    system: "Energy Management",
    status: "optimal",
    uptime: 99.5,
    energy: 5,
    icon: Zap,
  },
  {
    system: "Fire Safety",
    status: "critical",
    uptime: 88.7,
    energy: 5,
    icon: AlertCircle,
  },
];

// Energy consumption data
const energyConsumption = [
  { time: "00:00", current: 35, automated: 25, savings: 10 },
  { time: "04:00", current: 30, automated: 20, savings: 10 },
  { time: "08:00", current: 120, automated: 85, savings: 35 },
  { time: "12:00", current: 180, automated: 140, savings: 40 },
  { time: "16:00", current: 210, automated: 160, savings: 50 },
  { time: "20:00", current: 160, automated: 120, savings: 40 },
  { time: "22:00", current: 80, automated: 60, savings: 20 },
];

// Environmental optimization
const environmentalData = [
  { time: "6 AM", temp: 21.0, target: 22.0, humidity: 45, targetHumidity: 50 },
  { time: "9 AM", temp: 22.5, target: 22.0, humidity: 48, targetHumidity: 50 },
  { time: "12 PM", temp: 24.0, target: 23.0, humidity: 50, targetHumidity: 50 },
  { time: "3 PM", temp: 25.2, target: 23.0, humidity: 49, targetHumidity: 50 },
  { time: "6 PM", temp: 23.8, target: 22.5, humidity: 47, targetHumidity: 50 },
  { time: "9 PM", temp: 22.0, target: 21.5, humidity: 46, targetHumidity: 50 },
];

// Automation rules
const automationRules = [
  {
    id: "R001",
    name: "Peak Load Management",
    trigger: "Energy > 150kW",
    action: "Shed non-critical loads",
    status: "active",
    savings: 15,
  },
  {
    id: "R002",
    name: "Occupancy Lighting",
    trigger: "Motion detected",
    action: "Turn on lights",
    status: "active",
    savings: 12,
  },
  {
    id: "R003",
    name: "Night Mode",
    trigger: "10 PM - 6 AM",
    action: "Reduce HVAC",
    status: "active",
    savings: 8,
  },
  {
    id: "R004",
    name: "Temperature Optimization",
    trigger: "Temp variance > 2°C",
    action: "Adjust setpoints",
    status: "inactive",
    savings: 10,
  },
  {
    id: "R005",
    name: "Emergency Ventilation",
    trigger: "CO₂ > 800ppm",
    action: "Increase airflow",
    status: "active",
    savings: 5,
  },
  {
    id: "R006",
    name: "Weekend Mode",
    trigger: "Saturday & Sunday",
    action: "Energy saving mode",
    status: "active",
    savings: 20,
  },
];

// Device automation status
const deviceAutomation = [
  {
    device: "HVAC Unit #1",
    type: "HVAC",
    location: "Floor 3",
    automation: 95,
    status: "optimized",
  },
  {
    device: "LED Panel Lights",
    type: "Lighting",
    location: "Open Workspace",
    automation: 92,
    status: "optimized",
  },
  {
    device: "Water Heater",
    type: "Plumbing",
    location: "Floor 2",
    automation: 78,
    status: "partial",
  },
  {
    device: "Security Cameras",
    type: "Security",
    location: "All Floors",
    automation: 85,
    status: "optimized",
  },
  {
    device: "Elevator #3",
    type: "Transport",
    location: "Main Shaft",
    automation: 45,
    status: "basic",
  },
  {
    device: "Coffee Machine",
    type: "Kitchen",
    location: "Break Room",
    automation: 30,
    status: "basic",
  },
  {
    device: "Projector",
    type: "AV",
    location: "Meeting Room A",
    automation: 65,
    status: "partial",
  },
  {
    device: "Server Rack",
    type: "IT",
    location: "Server Room",
    automation: 88,
    status: "optimized",
  },
];

// Recent automation events
const automationEvents = [
  {
    id: 1,
    event: "Peak Load Management",
    system: "Energy Management",
    time: "2 min ago",
    result: "15kW saved",
    status: "success",
  },
  {
    id: 2,
    event: "Occupancy Detection",
    system: "Lighting Control",
    time: "5 min ago",
    result: "Lights adjusted",
    status: "success",
  },
  {
    id: 3,
    event: "Temperature Optimization",
    system: "HVAC Automation",
    time: "15 min ago",
    result: "Setpoint adjusted",
    status: "success",
  },
  {
    id: 4,
    event: "Emergency Ventilation",
    system: "HVAC Automation",
    time: "30 min ago",
    result: "Airflow increased",
    status: "warning",
  },
  {
    id: 5,
    event: "System Maintenance",
    system: "All Systems",
    time: "1 hour ago",
    result: "Completed",
    status: "info",
  },
  {
    id: 6,
    event: "Night Mode Activated",
    system: "Building Automation",
    time: "2 hours ago",
    result: "Energy saving mode",
    status: "success",
  },
];

// Automation savings by system
const savingsBySystem = [
  { system: "HVAC", savings: 35, color: "#3b82f6" },
  { system: "Lighting", savings: 25, color: "#f59e0b" },
  { system: "Equipment", savings: 20, color: "#10b981" },
  { system: "Water", savings: 15, color: "#0ea5e9" },
  { system: "Other", savings: 5, color: "#8b5cf6" },
];

// Status badge component - FIXED VERSION
const StatusBadge = ({ status }) => {
  const config = {
    optimal: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Optimal",
      Icon: CheckCircle2,
    },
    active: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Active",
      Icon: Activity,
    },
    warning: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Warning",
      Icon: AlertTriangle,
    },
    critical: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Critical",
      Icon: XCircle,
    },
    optimized: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Optimized",
      Icon: CheckCircle2,
    },
    partial: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Partial",
      Icon: AlertTriangle,
    },
    basic: {
      color: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      label: "Basic",
      Icon: Settings,
    },
    success: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Success",
      Icon: CheckCircle2,
    },
    info: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Info",
      Icon: Bell,
    },
    inactive: {
      color: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      label: "Inactive",
      Icon: XCircle,
    },
  };

  const badgeConfig = config[status] || config.basic;
  const { Icon } = badgeConfig;

  return (
    <Badge
      variant="secondary"
      className={`${badgeConfig.color} gap-1.5 px-3 py-1`}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-medium">{badgeConfig.label}</span>
    </Badge>
  );
};

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100">
        <p className="text-gray-900 font-bold text-sm mb-3">{label}</p>
        {payload.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm mb-2"
          >
            <div className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-600 font-medium">{entry.name}</span>
            </div>
            <span className="font-bold text-gray-900">
              {entry.value}{" "}
              {entry.name === "temp"
                ? "°C"
                : entry.name === "humidity"
                ? "%"
                : "kWh"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function BuildingAutomation() {
  const [autoMode, setAutoMode] = useState(true);
  const [learningMode, setLearningMode] = useState(true);
  const [optimizationLevel, setOptimizationLevel] = useState([75]);
  const [comfortMode, setComfortMode] = useState(true);
  const [tempSetpoint, setTempSetpoint] = useState([22]);
  const [lightingLevel, setLightingLevel] = useState([75]);

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Building Automation System
          </h1>
          <p className="text-gray-600 mt-2">
            Intelligent building management and optimization
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 shadow-sm">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            <Plus className="h-4 w-4" />
            New Automation
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {automationMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-2xl shadow-lg"
            >
              <div className="bg-white rounded-xl p-4 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-700">
                    {metric.title}
                  </span>
                  <div className={`p-1.5 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`h-4 w-4 ${metric.color}`} />
                  </div>
                </div>
                <div className={`text-xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={
                      metric.change.startsWith("+")
                        ? "text-emerald-600 border-emerald-200 bg-emerald-50"
                        : metric.change.startsWith("-")
                        ? "text-blue-600 border-blue-200 bg-blue-50"
                        : "text-gray-600 border-gray-200"
                    }
                  >
                    <span className="text-xs font-semibold">
                      {metric.change}
                    </span>
                  </Badge>
                  <span className="text-xs text-gray-500">vs yesterday</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* System Status Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Status */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  System Status
                </h2>
                <p className="text-gray-600 text-sm">
                  Real-time status of all building automation systems
                </p>
              </div>
              <StatusBadge status="optimal" />
            </div>

            <div className="space-y-4">
              {systemStatus.map((system, index) => {
                const Icon = system.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-lg ${
                          system.status === "optimal"
                            ? "bg-emerald-100"
                            : system.status === "warning"
                            ? "bg-amber-100"
                            : system.status === "critical"
                            ? "bg-red-100"
                            : "bg-blue-100"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            system.status === "optimal"
                              ? "text-emerald-600"
                              : system.status === "warning"
                              ? "text-amber-600"
                              : system.status === "critical"
                              ? "text-red-600"
                              : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {system.system}
                        </div>
                        <div className="text-sm text-gray-500">
                          {system.energy}% energy load
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {system.uptime}%
                      </div>
                      <StatusBadge status={system.status} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-semibold text-emerald-900">
                    Overall System Health
                  </div>
                  <div className="text-2xl font-bold text-emerald-900">
                    95.2%
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-emerald-700">
                    Optimal Performance
                  </div>
                  <div className="text-xs text-emerald-600">
                    All systems operational
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Controls */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Quick Controls
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="font-semibold text-gray-900">
                    Auto Mode
                  </Label>
                  <p className="text-sm text-gray-500">
                    Automated building control
                  </p>
                </div>
                <Switch
                  checked={autoMode}
                  onCheckedChange={setAutoMode}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="font-semibold text-gray-900">
                    Learning Mode
                  </Label>
                  <p className="text-sm text-gray-500">
                    AI-powered optimization
                  </p>
                </div>
                <Switch
                  checked={learningMode}
                  onCheckedChange={setLearningMode}
                  className="data-[state=checked]:bg-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="font-semibold text-gray-900">
                    Comfort Mode
                  </Label>
                  <p className="text-sm text-gray-500">
                    Prioritize occupant comfort
                  </p>
                </div>
                <Switch
                  checked={comfortMode}
                  onCheckedChange={setComfortMode}
                  className="data-[state=checked]:bg-purple-500"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="font-semibold text-gray-900">
                  Optimization Level
                </Label>
                <span className="font-bold text-blue-600">
                  {optimizationLevel[0]}%
                </span>
              </div>
              <Slider
                value={optimizationLevel}
                onValueChange={setOptimizationLevel}
                min={0}
                max={100}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Minimal</span>
                <span>Balanced</span>
                <span>Aggressive</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="font-semibold text-gray-900">
                  Temperature Setpoint
                </Label>
                <span className="font-bold text-orange-600">
                  {tempSetpoint[0]}°C
                </span>
              </div>
              <Slider
                value={tempSetpoint}
                onValueChange={setTempSetpoint}
                min={18}
                max={26}
                step={0.5}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="font-semibold text-gray-900">
                  Lighting Level
                </Label>
                <span className="font-bold text-amber-600">
                  {lightingLevel[0]}%
                </span>
              </div>
              <Slider
                value={lightingLevel}
                onValueChange={setLightingLevel}
                min={0}
                max={100}
                step={5}
                className="w-full"
              />
            </div>

            <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg">
              Apply All Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Energy Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Energy Consumption Chart */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Energy Consumption
              </h2>
              <p className="text-gray-600 text-sm">
                Automated vs manual consumption comparison
              </p>
            </div>
            <Select defaultValue="today">
              <SelectTrigger className="w-32 shadow-sm">
                <SelectValue placeholder="Time range" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={energyConsumption}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="current"
                  name="Current Consumption"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="automated"
                  name="Automated Target"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-lg font-bold text-blue-700">420 kWh</div>
              <div className="text-xs text-blue-600">Total Saved</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="text-lg font-bold text-emerald-700">24%</div>
              <div className="text-xs text-emerald-600">Savings Rate</div>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="text-lg font-bold text-amber-700">$1,850</div>
              <div className="text-xs text-amber-600">Monthly Savings</div>
            </div>
          </div>
        </div>

        {/* Environmental Optimization */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Environmental Optimization
              </h2>
              <p className="text-gray-600 text-sm">
                Temperature and humidity control
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 shadow-sm">
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Button>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={environmentalData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temp"
                  name="Actual Temperature"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  name="Target Temperature"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="humidity"
                  name="Humidity"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-red-900">
                    Temperature Variance
                  </div>
                  <div className="text-lg font-bold text-red-900">1.2°C</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-red-500" />
              </div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-blue-900">
                    Humidity Control
                  </div>
                  <div className="text-lg font-bold text-blue-900">±2%</div>
                </div>
                <CheckCircle2 className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Automation Rules Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Automation Rules Table */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Automation Rules
                </h2>
                <p className="text-gray-600 text-sm">
                  Configured automation rules and triggers
                </p>
              </div>
              <Button className="gap-2 shadow-sm">
                <Plus className="h-4 w-4" />
                New Rule
              </Button>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-gray-50 to-blue-50 hover:bg-gray-100">
                    <TableHead className="font-semibold text-gray-900">
                      Rule ID
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Name
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Trigger Condition
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Action
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Savings
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {automationRules.map((rule) => (
                    <TableRow
                      key={rule.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-900">
                        {rule.id}
                      </TableCell>
                      <TableCell className="font-medium text-gray-900">
                        {rule.name}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {rule.trigger}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {rule.action}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Zap className="h-3.5 w-3.5 text-amber-500" />
                          <span className="font-bold text-gray-900">
                            {rule.savings}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={rule.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Savings Distribution */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Savings Distribution
          </h2>

          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={savingsBySystem}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="savings"
                  label={(entry) => `${entry.system} ${entry.savings}%`}
                >
                  {savingsBySystem.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, "Savings"]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3 mt-6">
            {savingsBySystem.map((system, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: system.color }}
                  />
                  <span className="font-medium text-gray-900">
                    {system.system}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-gray-900">
                    {system.savings}%
                  </span>
                  <div className="text-xs text-gray-500">
                    $
                    {Math.round(1850 * (system.savings / 100)).toLocaleString()}
                    /mo
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device Automation Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Automation Status */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Device Automation
              </h2>
              <p className="text-gray-600 text-sm">
                Automation coverage by device category
              </p>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-32 shadow-sm">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">All Devices</SelectItem>
                <SelectItem value="optimized">Optimized</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {deviceAutomation.map((device, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      device.status === "optimized"
                        ? "bg-emerald-100"
                        : device.status === "partial"
                        ? "bg-amber-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {device.type === "HVAC" && (
                      <Wind className="h-5 w-5 text-emerald-600" />
                    )}
                    {device.type === "Lighting" && (
                      <Sun className="h-5 w-5 text-amber-600" />
                    )}
                    {device.type === "Plumbing" && (
                      <Droplets className="h-5 w-5 text-blue-600" />
                    )}
                    {device.type === "Security" && (
                      <Shield className="h-5 w-5 text-purple-600" />
                    )}
                    {device.type === "Transport" && (
                      <ArrowUpRight className="h-5 w-5 text-red-600" />
                    )}
                    {device.type === "Kitchen" && (
                      <Home className="h-5 w-5 text-orange-600" />
                    )}
                    {device.type === "AV" && (
                      <Volume2 className="h-5 w-5 text-pink-600" />
                    )}
                    {device.type === "IT" && (
                      <Cpu className="h-5 w-5 text-cyan-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {device.device}
                    </div>
                    <div className="text-sm text-gray-500">
                      {device.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          device.status === "optimized"
                            ? "bg-emerald-500"
                            : device.status === "partial"
                            ? "bg-amber-500"
                            : "bg-gray-400"
                        }`}
                        style={{ width: `${device.automation}%` }}
                      />
                    </div>
                    <span className="font-semibold text-gray-900">
                      {device.automation}%
                    </span>
                  </div>
                  <StatusBadge status={device.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Automation Events */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Automation Events
              </h2>
              <p className="text-gray-600 text-sm">
                Latest automation triggers and results
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 shadow-sm">
              <History className="h-3.5 w-3.5" />
              View All
            </Button>
          </div>

          <ScrollArea className="h-[350px] pr-4">
            <div className="space-y-4">
              {automationEvents.map((event) => (
                <div
                  key={event.id}
                  className={`p-4 rounded-xl border ${
                    event.status === "success"
                      ? "border-emerald-200 bg-emerald-50"
                      : event.status === "warning"
                      ? "border-amber-200 bg-amber-50"
                      : "border-blue-200 bg-blue-50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-1.5 rounded-full mt-0.5 ${
                          event.status === "success"
                            ? "bg-emerald-100"
                            : event.status === "warning"
                            ? "bg-amber-100"
                            : "bg-blue-100"
                        }`}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 ${
                            event.status === "success"
                              ? "text-emerald-600"
                              : event.status === "warning"
                              ? "text-amber-600"
                              : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {event.event}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {event.system}
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={event.status} />
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/50">
                    <div className="text-sm font-medium text-gray-900">
                      {event.result}
                    </div>
                    <div className="text-xs text-gray-500">{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Performance Summary
            </h2>
            <p className="text-gray-600 text-sm">
              Building automation system performance metrics
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 shadow-sm">
              <Calendar className="h-4 w-4" />
              Monthly Report
            </Button>
            <Button variant="outline" className="gap-2 shadow-sm">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="text-sm text-gray-600">Occupant Satisfaction</div>
            <div className="text-2xl font-bold text-emerald-600">92%</div>
            <div className="text-xs text-gray-500">Based on feedback</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="text-sm text-gray-600">Energy Efficiency</div>
            <div className="text-2xl font-bold text-blue-600">87%</div>
            <div className="text-xs text-gray-500">Above industry average</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="text-sm text-gray-600">Maintenance Costs</div>
            <div className="text-2xl font-bold text-amber-600">-18%</div>
            <div className="text-xs text-gray-500">Reduced this quarter</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="text-sm text-gray-600">Sustainability Score</div>
            <div className="text-2xl font-bold text-green-600">A+</div>
            <div className="text-xs text-gray-500">LEED Platinum level</div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="text-sm font-semibold text-blue-900">
                Automation Impact Analysis
              </div>
              <div className="text-lg font-bold text-blue-900">
                $22,200 annual savings
              </div>
              <div className="text-sm text-blue-700">
                Projected based on current performance
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              View Detailed Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
