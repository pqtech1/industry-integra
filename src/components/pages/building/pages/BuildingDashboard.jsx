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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Settings,
  BarChart3,
  Clock,
  Eye,
  CheckCircle2,
  RefreshCw,
  Download,
  Plus,
  ChevronRight,
  Wifi,
  Battery,
  Power,
  Volume2,
  TrendingUp,
  TrendingDown,
  Activity,
  Cloud,
  Cpu,
  Smartphone,
  Tv,
  Music,
  Coffee,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  ComposedChart,
} from "recharts";

// Building zones with colorful data
const buildingZones = [
  {
    id: "Z1",
    name: "Executive Floor",
    type: "Office",
    temp: 22.5,
    humidity: 45,
    occupancy: 78,
    energy: 45,
    status: "optimal",
    devices: 24,
    icon: Building,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "Z2",
    name: "Open Workspace",
    type: "Office",
    temp: 23.2,
    humidity: 48,
    occupancy: 92,
    energy: 65,
    status: "active",
    devices: 42,
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "Z3",
    name: "Server Room",
    type: "Technical",
    temp: 19.8,
    humidity: 35,
    occupancy: 0,
    energy: 85,
    status: "critical",
    devices: 18,
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "Z4",
    name: "Lobby & Reception",
    type: "Common",
    temp: 21.5,
    humidity: 50,
    occupancy: 35,
    energy: 28,
    status: "optimal",
    devices: 16,
    icon: Building,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "Z5",
    name: "Meeting Rooms",
    type: "Conference",
    temp: 22.0,
    humidity: 46,
    occupancy: 40,
    energy: 32,
    status: "active",
    devices: 22,
    icon: Users,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "Z6",
    name: "Parking Garage",
    type: "Facility",
    temp: 18.5,
    humidity: 55,
    occupancy: 15,
    energy: 18,
    status: "warning",
    devices: 12,
    icon: Building,
    color: "from-gray-500 to-slate-500",
  },
];

// System status with colors
const systemStatus = [
  {
    system: "HVAC",
    status: "optimal",
    uptime: 99.8,
    consumption: 45,
    icon: Thermometer,
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    system: "Lighting",
    status: "optimal",
    uptime: 99.9,
    consumption: 25,
    icon: Sun,
    color: "bg-gradient-to-r from-amber-500 to-yellow-500",
  },
  {
    system: "Security",
    status: "active",
    uptime: 100,
    consumption: 8,
    icon: Shield,
    color: "bg-gradient-to-r from-emerald-500 to-green-500",
  },
  {
    system: "Elevators",
    status: "warning",
    uptime: 95.2,
    consumption: 12,
    icon: ChevronRight,
    color: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    system: "Plumbing",
    status: "optimal",
    uptime: 99.5,
    consumption: 5,
    icon: Droplets,
    color: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    system: "Fire Safety",
    status: "critical",
    uptime: 88.7,
    consumption: 5,
    icon: AlertCircle,
    color: "bg-gradient-to-r from-red-500 to-pink-500",
  },
];

// Energy consumption data
const energyData = [
  { time: "00:00", hvac: 35, lighting: 15, equipment: 25, total: 75 },
  { time: "04:00", hvac: 30, lighting: 10, equipment: 20, total: 60 },
  { time: "08:00", hvac: 65, lighting: 45, equipment: 85, total: 195 },
  { time: "12:00", hvac: 75, lighting: 40, equipment: 90, total: 205 },
  { time: "16:00", hvac: 70, lighting: 50, equipment: 95, total: 215 },
  { time: "20:00", hvac: 45, lighting: 35, equipment: 45, total: 125 },
  { time: "22:00", hvac: 35, lighting: 20, equipment: 25, total: 80 },
];

// Environmental data
const environmentalData = [
  { hour: "6 AM", temp: 18.5, humidity: 45, co2: 450 },
  { hour: "9 AM", temp: 21.0, humidity: 48, co2: 650 },
  { hour: "12 PM", temp: 23.5, humidity: 50, co2: 850 },
  { hour: "3 PM", temp: 24.0, humidity: 49, co2: 900 },
  { hour: "6 PM", temp: 22.5, humidity: 47, co2: 750 },
  { hour: "9 PM", temp: 21.0, humidity: 46, co2: 550 },
];

// Building metrics with gradients
const buildingMetrics = [
  {
    title: "Total Energy",
    value: "2,450 kWh",
    change: "-12%",
    icon: Zap,
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "CO₂ Levels",
    value: "650 ppm",
    change: "-8%",
    icon: Leaf,
    gradient: "from-emerald-500 via-green-500 to-emerald-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "Avg Temperature",
    value: "22.5°C",
    change: "+1.2°C",
    icon: Thermometer,
    gradient: "from-orange-500 via-amber-500 to-orange-600",
    changeColor: "text-red-600",
  },
  {
    title: "Occupancy",
    value: "78%",
    change: "+15%",
    icon: Users,
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "Water Usage",
    value: "45 m³",
    change: "-5%",
    icon: Droplets,
    gradient: "from-cyan-500 via-blue-500 to-cyan-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "System Uptime",
    value: "99.2%",
    change: "+0.8%",
    icon: CheckCircle2,
    gradient: "from-green-500 via-emerald-500 to-green-600",
    changeColor: "text-emerald-600",
  },
];

// Energy distribution for pie chart
const energyDistribution = [
  {
    name: "HVAC",
    value: 45,
    color: "#0ea5e9",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Lighting",
    value: 25,
    color: "#f59e0b",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    name: "Equipment",
    value: 20,
    color: "#10b981",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    name: "Elevators",
    value: 5,
    color: "#ef4444",
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Other",
    value: 5,
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-500",
  },
];

// Device consumption table data
const deviceConsumption = [
  {
    device: "HVAC Unit #1",
    type: "HVAC",
    location: "Floor 3",
    power: 8.5,
    status: "Active",
    trend: "up",
  },
  {
    device: "LED Panel Lights",
    type: "Lighting",
    location: "Open Workspace",
    power: 4.2,
    status: "Active",
    trend: "stable",
  },
  {
    device: "Server Rack",
    type: "IT",
    location: "Server Room",
    power: 12.8,
    status: "Critical",
    trend: "up",
  },
  {
    device: "Water Heater",
    type: "Plumbing",
    location: "Floor 2",
    power: 5.5,
    status: "Active",
    trend: "down",
  },
  {
    device: "Elevator #3",
    type: "Transport",
    location: "Main Shaft",
    power: 7.2,
    status: "Warning",
    trend: "stable",
  },
  {
    device: "Security Cameras",
    type: "Security",
    location: "All Floors",
    power: 2.8,
    status: "Active",
    trend: "stable",
  },
  {
    device: "Coffee Machine",
    type: "Kitchen",
    location: "Break Room",
    power: 1.5,
    status: "Idle",
    trend: "down",
  },
  {
    device: "Projector",
    type: "AV",
    location: "Meeting Room A",
    power: 0.8,
    status: "Off",
    trend: "stable",
  },
];

// Weekly consumption trend
const weeklyConsumption = [
  { day: "Mon", energy: 2450, budget: 2200, savings: 250 },
  { day: "Tue", energy: 2380, budget: 2200, savings: 180 },
  { day: "Wed", energy: 2510, budget: 2200, savings: 310 },
  { day: "Thu", energy: 2320, budget: 2200, savings: 120 },
  { day: "Fri", energy: 2150, budget: 2200, savings: -50 },
  { day: "Sat", energy: 1850, budget: 1800, savings: 50 },
  { day: "Sun", energy: 1750, budget: 1800, savings: -50 },
];

// Room efficiency data
const roomEfficiency = [
  {
    room: "Conference A",
    efficiency: 92,
    temp: 22.5,
    occupancy: 65,
    usage: "High",
  },
  {
    room: "Executive Office",
    efficiency: 88,
    temp: 23.0,
    occupancy: 90,
    usage: "High",
  },
  {
    room: "Open Workspace",
    efficiency: 85,
    temp: 22.8,
    occupancy: 78,
    usage: "Medium",
  },
  {
    room: "Break Room",
    efficiency: 76,
    temp: 21.5,
    occupancy: 45,
    usage: "Medium",
  },
  {
    room: "Server Room",
    efficiency: 95,
    temp: 19.8,
    occupancy: 0,
    usage: "Critical",
  },
  {
    room: "Parking Garage",
    efficiency: 68,
    temp: 18.5,
    occupancy: 15,
    usage: "Low",
  },
];

// Status badge component
const StatusBadge = ({ status }) => {
  const config = {
    optimal: {
      color: "bg-gradient-to-r from-emerald-500 to-green-500 text-white",
      label: "Optimal",
      icon: CheckCircle2,
    },
    active: {
      color: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
      label: "Active",
      icon: Activity,
    },
    warning: {
      color: "bg-gradient-to-r from-amber-500 to-yellow-500 text-white",
      label: "Warning",
      icon: AlertCircle,
    },
    critical: {
      color: "bg-gradient-to-r from-red-500 to-orange-500 text-white",
      label: "Critical",
      icon: AlertCircle,
    },
    idle: {
      color: "bg-gradient-to-r from-gray-500 to-slate-500 text-white",
      label: "Idle",
      icon: Clock,
    },
    off: {
      color: "bg-gradient-to-r from-slate-500 to-gray-500 text-white",
      label: "Off",
      icon: Power,
    },
  };

  const Icon = config[status]?.icon;

  return (
    <Badge
      className={`${config[status]?.color} border-0 shadow-sm gap-1.5 px-3 py-1`}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-semibold">{config[status]?.label}</span>
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

// Zone card component with gradients
const ZoneCard = ({ zone }) => {
  const Icon = zone.icon;

  return (
    <div
      className={`bg-gradient-to-br ${zone.color} p-0.5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      <div className="bg-white rounded-2xl p-4 h-full">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Icon className="h-4 w-4 text-gray-600" />
              <h3 className="font-bold text-gray-900 text-sm">{zone.name}</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                {zone.type}
              </span>
              <span className="text-xs text-gray-500">ID: {zone.id}</span>
            </div>
          </div>
          <StatusBadge status={zone.status} />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Thermometer className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-600">Temp</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {zone.temp}°C
              </span>
            </div>
            <Progress
              value={(zone.temp - 18) * 12.5}
              className="h-1.5"
              indicatorClassName={
                zone.temp > 24
                  ? "bg-gradient-to-r from-red-500 to-orange-500"
                  : zone.temp > 22
                  ? "bg-gradient-to-r from-orange-500 to-amber-500"
                  : "bg-gradient-to-r from-blue-500 to-cyan-500"
              }
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Droplets className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-600">Humidity</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {zone.humidity}%
              </span>
            </div>
            <Progress
              value={zone.humidity}
              className="h-1.5"
              indicatorClassName={
                zone.humidity > 60
                  ? "bg-gradient-to-r from-red-500 to-pink-500"
                  : zone.humidity > 50
                  ? "bg-gradient-to-r from-orange-500 to-red-500"
                  : "bg-gradient-to-r from-emerald-500 to-green-500"
              }
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-600">Occupancy</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {zone.occupancy}%
              </span>
            </div>
            <Progress
              value={zone.occupancy}
              className="h-1.5"
              indicatorClassName="bg-gradient-to-r from-purple-500 to-violet-500"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-600">Energy</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {zone.energy} kWh
              </span>
            </div>
            <Progress
              value={Math.min(zone.energy, 100)}
              className="h-1.5"
              indicatorClassName="bg-gradient-to-r from-blue-600 to-cyan-500"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            {zone.devices} devices connected
          </div>
          <Button
            size="sm"
            variant="outline"
            className="h-7 px-3 text-xs font-medium shadow-sm"
          >
            Control
            <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function BuildingDashboard() {
  const [selectedZone, setSelectedZone] = useState("all");
  const [comfortMode, setComfortMode] = useState(true);
  const [energyMode, setEnergyMode] = useState("balanced");
  const [tempSetting, setTempSetting] = useState([22]);
  const [lightingLevel, setLightingLevel] = useState([75]);

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Building Intelligence Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Real-time monitoring and control of all building systems
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 shadow-sm hover:shadow">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button className="gap-2 shadow-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            <Plus className="h-4 w-4" />
            New Automation
          </Button>
        </div>
      </div>

      {/* Metrics Grid with Gradients */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {buildingMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${metric.gradient} p-0.5 rounded-2xl shadow-lg`}
            >
              <div className="bg-white rounded-xl p-4 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-700">
                    {metric.title}
                  </span>
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-white/20 to-transparent">
                    <Icon className={`h-4 w-4 ${metric.changeColor}`} />
                  </div>
                </div>
                <div className={`text-xl font-bold ${metric.changeColor} mb-2`}>
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

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Building Zones Grid */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Building Zones
                </h2>
                <p className="text-gray-600 text-sm">
                  Real-time status of all building areas
                </p>
              </div>
              <Select value={selectedZone} onValueChange={setSelectedZone}>
                <SelectTrigger className="w-40 shadow-sm">
                  <SelectValue placeholder="Filter zones" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Zones</SelectItem>
                  <SelectItem value="office">Office Areas</SelectItem>
                  <SelectItem value="technical">Technical Areas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {buildingZones.map((zone) => (
                <ZoneCard key={zone.id} zone={zone} />
              ))}
            </div>
          </div>

          {/* Energy Analytics */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Energy Analytics
                </h2>
                <p className="text-gray-600 text-sm">
                  Consumption patterns and trends
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="shadow-sm">
                  Daily
                </Button>
                <Button variant="outline" size="sm" className="shadow-sm">
                  Weekly
                </Button>
                <Button variant="default" size="sm" className="shadow-sm">
                  Monthly
                </Button>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={energyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="time" stroke="#666" fontSize={12} />
                  <YAxis
                    stroke="#666"
                    fontSize={12}
                    label={{ value: "kWh", angle: -90, position: "insideLeft" }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="hvac"
                    name="HVAC"
                    fill="url(#hvacGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="lighting"
                    name="Lighting"
                    fill="url(#lightingGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="equipment"
                    name="Equipment"
                    fill="url(#equipmentGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    type="monotone"
                    dataKey="total"
                    name="Total"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <defs>
                    <linearGradient
                      id="hvacGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="lightingGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="equipmentGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Device Consumption Table */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Device Consumption
                </h2>
                <p className="text-gray-600 text-sm">
                  Real-time power usage by device
                </p>
              </div>
              <Button variant="outline" className="gap-2 shadow-sm">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100 hover:bg-gray-100">
                    <TableHead className="font-semibold text-gray-900">
                      Device
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Type
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Location
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Power (kW)
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Status
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Trend
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deviceConsumption.map((device, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-900">
                        <div className="flex items-center gap-2">
                          {device.type === "HVAC" && (
                            <Thermometer className="h-4 w-4 text-blue-500" />
                          )}
                          {device.type === "Lighting" && (
                            <Sun className="h-4 w-4 text-amber-500" />
                          )}
                          {device.type === "IT" && (
                            <Cpu className="h-4 w-4 text-emerald-500" />
                          )}
                          {device.device}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            device.type === "HVAC"
                              ? "border-blue-200 text-blue-700 bg-blue-50"
                              : device.type === "Lighting"
                              ? "border-amber-200 text-amber-700 bg-amber-50"
                              : "border-gray-200 text-gray-700"
                          }
                        >
                          {device.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {device.location}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">
                            {device.power} kW
                          </span>
                          {device.power > 8 && (
                            <Activity className="h-3 w-3 text-red-500 animate-pulse" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={device.status.toLowerCase()} />
                      </TableCell>
                      <TableCell>
                        {device.trend === "up" ? (
                          <div className="flex items-center text-emerald-600">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">↑</span>
                          </div>
                        ) : device.trend === "down" ? (
                          <div className="flex items-center text-red-600">
                            <TrendingDown className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">↓</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-gray-600">
                            <Activity className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">→</span>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* System Health */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              System Health
            </h2>
            <div className="space-y-4">
              {systemStatus.map((system, index) => {
                const Icon = system.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${system.color} shadow-md`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {system.system}
                        </div>
                        <div className="text-sm text-gray-500">
                          {system.consumption}% load
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
                  <div className="text-sm font-semibold text-emerald-700">
                    Overall Health
                  </div>
                  <div className="text-2xl font-bold text-emerald-900">
                    95.2%
                  </div>
                </div>
                <div className="h-16 w-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      innerRadius={20}
                      outerRadius={30}
                      data={[{ value: 95.2, fill: "#10b981" }]}
                      startAngle={180}
                      endAngle={180 + 95.2 * 1.8}
                    >
                      <RadialBar background dataKey="value" cornerRadius={10} />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Distribution */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Energy Distribution
            </h2>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={energyDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={(entry) => `${entry.name} ${entry.value}%`}
                  >
                    {energyDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Share"]}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {energyDistribution.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {item.value}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {Math.round(2450 * (item.value / 100)).toLocaleString()} kWh
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Controls */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Quick Controls
            </h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-semibold text-gray-900">
                      Comfort Mode
                    </Label>
                    <p className="text-sm text-gray-500 mt-1">
                      Optimize for occupant comfort
                    </p>
                  </div>
                  <Switch
                    checked={comfortMode}
                    onCheckedChange={setComfortMode}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Temperature
                    </Label>
                    <span className="font-bold text-blue-600">
                      {tempSetting[0]}°C
                    </span>
                  </div>
                  <Slider
                    value={tempSetting}
                    onValueChange={setTempSetting}
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

                <div>
                  <Label className="font-semibold text-gray-900 mb-2 block">
                    Energy Mode
                  </Label>
                  <Select value={energyMode} onValueChange={setEnergyMode}>
                    <SelectTrigger className="w-full shadow-sm">
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy" className="text-emerald-600">
                        Economy (Max Savings)
                      </SelectItem>
                      <SelectItem value="balanced">
                        Balanced (Default)
                      </SelectItem>
                      <SelectItem value="performance" className="text-blue-600">
                        Performance (Max Comfort)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg">
                Apply All Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Monitoring */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Environmental Monitoring
            </h2>
            <p className="text-gray-600 text-sm">
              Temperature, humidity, and air quality trends
            </p>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
              <AlertCircle className="h-3 w-3 mr-1" />
              CO₂ Alert
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Air Quality: Good
            </Badge>
          </div>
        </div>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={environmentalData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="humidityGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="co2Gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
              <XAxis dataKey="hour" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="temp"
                name="Temperature (°C)"
                stroke="#ef4444"
                fill="url(#tempGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="humidity"
                name="Humidity (%)"
                stroke="#3b82f6"
                fill="url(#humidityGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="co2"
                name="CO₂ (ppm)"
                stroke="#10b981"
                fill="url(#co2Gradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
