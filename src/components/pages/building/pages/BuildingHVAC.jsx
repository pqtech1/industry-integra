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
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Snowflake,
  Zap,
  Settings,
  Fan,
  Filter,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Power,
  Clock,
  Calendar,
  MapPin,
  Home,
  Building,
  DoorOpen,
  Users,
  Target,
  TrendingUp,
  TrendingDown,
  Eye,
  BarChart3,
  Download,
  Plus,
  ChevronRight,
  Activity,
  Bell,
  History,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  DollarSign,
  ThermometerSun,
  Battery,
  Cloud,
  Wifi,
  Lock,
  Unlock,
  Timer,
  CalendarDays,
  RotateCcw,
  PowerOff,
  Maximize2,
  Minimize2,
  Volume2,
  ChevronUp,
  ChevronDown,
  Droplet,
  Moon,
  Sunrise,
  Sunset,
  Flame,
  WindIcon,
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
  ComposedChart,
} from "recharts";

// HVAC Metrics
const hvacMetrics = [
  {
    title: "Total Energy",
    value: "1,240 kWh",
    change: "-8%",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "System Efficiency",
    value: "92%",
    change: "+3%",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Avg Temperature",
    value: "72°F",
    change: "-1°F",
    icon: Thermometer,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Air Quality",
    value: "Excellent",
    change: "Stable",
    icon: Wind,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Humidity",
    value: "45%",
    change: "-2%",
    icon: Droplets,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Operating Cost",
    value: "$1,240",
    change: "-12%",
    icon: DollarSign,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

// Zone Temperature Data
const zoneTemperatures = [
  {
    zone: "Executive Floor",
    current: 72,
    target: 72,
    humidity: 45,
    occupancy: 85,
    status: "optimal",
    type: "office",
  },
  {
    zone: "Open Workspace",
    current: 71,
    target: 72,
    humidity: 48,
    occupancy: 92,
    status: "optimal",
    type: "office",
  },
  {
    zone: "Meeting Rooms",
    current: 70,
    target: 70,
    humidity: 50,
    occupancy: 65,
    status: "optimal",
    type: "conference",
  },
  {
    zone: "Server Room",
    current: 68,
    target: 68,
    humidity: 35,
    occupancy: 0,
    status: "critical",
    type: "technical",
  },
  {
    zone: "Cafeteria",
    current: 74,
    target: 72,
    humidity: 55,
    occupancy: 85,
    status: "warning",
    type: "common",
  },
  {
    zone: "Lobby",
    current: 73,
    target: 72,
    humidity: 50,
    occupancy: 45,
    status: "good",
    type: "common",
  },
  {
    zone: "Parking Garage",
    current: 65,
    target: 65,
    humidity: 60,
    occupancy: 15,
    status: "fair",
    type: "utility",
  },
];

// HVAC Units Data
const hvacUnits = [
  {
    id: "HVAC-01",
    location: "Floor 3 North",
    type: "Chiller",
    status: "active",
    efficiency: 88,
    load: 75,
    temp: 68,
  },
  {
    id: "HVAC-02",
    location: "Floor 3 South",
    type: "AHU",
    status: "active",
    efficiency: 92,
    load: 68,
    temp: 70,
  },
  {
    id: "HVAC-03",
    location: "Floor 2",
    type: "Heat Pump",
    status: "maintenance",
    efficiency: 78,
    load: 82,
    temp: 72,
  },
  {
    id: "HVAC-04",
    location: "Roof Top",
    type: "RTU",
    status: "active",
    efficiency: 85,
    load: 60,
    temp: 69,
  },
  {
    id: "HVAC-05",
    location: "Basement",
    type: "Boiler",
    status: "warning",
    efficiency: 65,
    load: 90,
    temp: 74,
  },
  {
    id: "HVAC-06",
    location: "Server Room",
    type: "CRAC",
    status: "critical",
    efficiency: 95,
    load: 95,
    temp: 68,
  },
];

// Temperature History
const temperatureHistory = [
  { time: "00:00", temp: 68, humidity: 48, setpoint: 70 },
  { time: "02:00", temp: 67, humidity: 50, setpoint: 70 },
  { time: "04:00", temp: 66, humidity: 52, setpoint: 70 },
  { time: "06:00", temp: 67, humidity: 50, setpoint: 70 },
  { time: "08:00", temp: 69, humidity: 48, setpoint: 72 },
  { time: "10:00", temp: 71, humidity: 46, setpoint: 72 },
  { time: "12:00", temp: 73, humidity: 44, setpoint: 72 },
  { time: "14:00", temp: 74, humidity: 43, setpoint: 72 },
  { time: "16:00", temp: 73, humidity: 45, setpoint: 72 },
  { time: "18:00", temp: 72, humidity: 47, setpoint: 72 },
  { time: "20:00", temp: 71, humidity: 49, setpoint: 70 },
  { time: "22:00", temp: 69, humidity: 51, setpoint: 70 },
];

// HVAC Alerts
const hvacAlerts = [
  {
    id: 1,
    type: "critical",
    title: "HVAC-06 Overheating",
    location: "Server Room",
    value: "75°F",
    time: "5 min ago",
  },
  {
    id: 2,
    type: "warning",
    title: "Low Efficiency",
    location: "Basement Boiler",
    value: "65%",
    time: "30 min ago",
  },
  {
    id: 3,
    type: "info",
    title: "Filter Replacement Due",
    location: "Floor 3 AHU",
    value: "In 2 days",
    time: "2 hours ago",
  },
  {
    id: 4,
    type: "warning",
    title: "High Humidity",
    location: "Cafeteria",
    value: "58%",
    time: "3 hours ago",
  },
  {
    id: 5,
    type: "info",
    title: "Energy Saving Mode Active",
    location: "All Zones",
    value: "Active",
    time: "5 hours ago",
  },
];

// Energy Consumption by Zone
const zoneEnergy = [
  { zone: "Executive Floor", consumption: 320, occupancy: 85, efficiency: 88 },
  { zone: "Open Workspace", consumption: 450, occupancy: 92, efficiency: 92 },
  { zone: "Meeting Rooms", consumption: 180, occupancy: 65, efficiency: 85 },
  { zone: "Server Room", consumption: 520, occupancy: 0, efficiency: 95 },
  { zone: "Cafeteria", consumption: 280, occupancy: 85, efficiency: 72 },
  { zone: "Lobby", consumption: 150, occupancy: 45, efficiency: 80 },
];

// Schedule Data
const scheduleData = [
  { time: "00:00 - 06:00", mode: "Night Setback", temp: 65, status: "active" },
  {
    time: "06:00 - 08:00",
    mode: "Morning Warm-up",
    temp: 68,
    status: "upcoming",
  },
  { time: "08:00 - 18:00", mode: "Occupied", temp: 72, status: "current" },
  {
    time: "18:00 - 20:00",
    mode: "Evening Setback",
    temp: 70,
    status: "upcoming",
  },
  {
    time: "20:00 - 00:00",
    mode: "Night Setback",
    temp: 65,
    status: "upcoming",
  },
];

// Status Badge Component
const StatusBadge = ({ status }) => {
  const config = {
    optimal: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Optimal",
      Icon: CheckCircle2,
    },
    good: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Good",
      Icon: CheckCircle2,
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
    active: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Active",
      Icon: Activity,
    },
    maintenance: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Maintenance",
      Icon: Settings,
    },
    fair: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Fair",
      Icon: AlertTriangle,
    },
  };

  const badgeConfig = config[status] || config.good;
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

// Temperature Gauge Component
const TemperatureGauge = ({ current, target, size = "medium" }) => {
  const diff = Math.abs(current - target);
  const percentage = Math.min((diff / 10) * 100, 100);

  const getGaugeColor = () => {
    if (diff <= 1) return "bg-emerald-500";
    if (diff <= 2) return "bg-blue-500";
    if (diff <= 3) return "bg-amber-500";
    return "bg-red-500";
  };

  const sizeClass =
    size === "large"
      ? "h-32 w-32"
      : size === "small"
      ? "h-16 w-16"
      : "h-20 w-20";
  const textSize =
    size === "large" ? "text-3xl" : size === "small" ? "text-lg" : "text-xl";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`${textSize} font-bold text-gray-900`}>
              {current}°F
            </div>
            <div className="text-xs text-gray-600">Target: {target}°F</div>
          </div>
        </div>
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${percentage} 283`}
            className={getGaugeColor()}
          />
        </svg>
      </div>
    </div>
  );
};

// Custom Tooltip
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
              {entry.name === "temp" || entry.name === "setpoint" ? "°F" : "%"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function BuildingHVAC() {
  const [autoMode, setAutoMode] = useState(true);
  const [nightSetback, setNightSetback] = useState(true);
  const [occupancyControl, setOccupancyControl] = useState(true);
  const [systemMode, setSystemMode] = useState("cooling");
  const [fanSpeed, setFanSpeed] = useState([60]);
  const [temperature, setTemperature] = useState([72]);
  const [selectedZone, setSelectedZone] = useState("all");
  const [timeRange, setTimeRange] = useState("today");

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            Building HVAC Control
          </h1>
          <p className="text-gray-600 mt-2">
            Monitor and control heating, ventilation, and air conditioning
            systems
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-md transition-all">
            <Plus className="h-4 w-4" />
            New Schedule
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {hvacMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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

      {/* Main Control Panel & Temperature Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Control Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              HVAC Control Panel
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Auto Mode
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Automatically adjust based on occupancy
                      </p>
                    </div>
                    <Switch
                      checked={autoMode}
                      onCheckedChange={setAutoMode}
                      className="data-[state=checked]:bg-emerald-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Night Setback
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Reduce temperature during unoccupied hours
                      </p>
                    </div>
                    <Switch
                      checked={nightSetback}
                      onCheckedChange={setNightSetback}
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Occupancy Control
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Adjust based on room occupancy
                      </p>
                    </div>
                    <Switch
                      checked={occupancyControl}
                      onCheckedChange={setOccupancyControl}
                      className="data-[state=checked]:bg-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold text-gray-900 mb-3 block">
                      System Mode
                    </Label>
                    <Select value={systemMode} onValueChange={setSystemMode}>
                      <SelectTrigger className="w-full shadow-sm">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="cooling" className="text-blue-600">
                          <div className="flex items-center gap-2">
                            <Snowflake className="h-4 w-4" />
                            Cooling
                          </div>
                        </SelectItem>
                        <SelectItem value="heating" className="text-orange-600">
                          <div className="flex items-center gap-2">
                            <Flame className="h-4 w-4" />
                            Heating
                          </div>
                        </SelectItem>
                        <SelectItem value="auto">
                          <div className="flex items-center gap-2">
                            <RefreshCw className="h-4 w-4" />
                            Auto
                          </div>
                        </SelectItem>
                        <SelectItem
                          value="ventilation"
                          className="text-cyan-600"
                        >
                          <div className="flex items-center gap-2">
                            <Wind className="h-4 w-4" />
                            Ventilation Only
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label className="font-semibold text-gray-900">
                        Temperature
                      </Label>
                      <span className="font-bold text-orange-600">
                        {temperature[0]}°F
                      </span>
                    </div>
                    <Slider
                      value={temperature}
                      onValueChange={setTemperature}
                      min={60}
                      max={80}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>60°F</span>
                      <span>70°F</span>
                      <span>80°F</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Fan Speed
                    </Label>
                    <span className="font-bold text-cyan-600">
                      {fanSpeed[0]}%
                    </span>
                  </div>
                  <Slider
                    value={fanSpeed}
                    onValueChange={setFanSpeed}
                    min={0}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Zone Selection
                    </Label>
                  </div>
                  <Select value={selectedZone} onValueChange={setSelectedZone}>
                    <SelectTrigger className="w-full shadow-sm">
                      <SelectValue placeholder="Select zone" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="all">All Zones</SelectItem>
                      <SelectItem value="executive">Executive Floor</SelectItem>
                      <SelectItem value="workspace">Open Workspace</SelectItem>
                      <SelectItem value="meeting">Meeting Rooms</SelectItem>
                      <SelectItem value="server">Server Room</SelectItem>
                      <SelectItem value="cafeteria">Cafeteria</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1 h-11 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Apply Changes
                </Button>
                <Button variant="outline" className="flex-1 h-11">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset to Default
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Temperature Overview */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Temperature Overview
              </h2>
              <p className="text-gray-600 text-sm">
                Building-wide temperature distribution
              </p>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
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

          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={temperatureHistory}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="temp"
                  name="Temperature"
                  fill="url(#tempGradient)"
                  stroke="#f59e0b"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="setpoint"
                  name="Set Point"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <defs>
                  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-lg font-bold text-blue-700">72°F</div>
              <div className="text-xs text-blue-600">Current Avg</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="text-lg font-bold text-emerald-700">±1°F</div>
              <div className="text-xs text-emerald-600">Variance</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-xl border border-orange-100">
              <div className="text-lg font-bold text-orange-700">74°F</div>
              <div className="text-xs text-orange-600">Peak Today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Zone Temperatures & HVAC Units */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Zone Temperatures */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Zone Temperatures
              </h2>
              <p className="text-gray-600 text-sm">
                Real-time temperature by zone
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md"
            >
              <Eye className="h-3.5 w-3.5" />
              View Details
            </Button>
          </div>

          <div className="space-y-4">
            {zoneTemperatures.map((zone, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      zone.status === "optimal"
                        ? "bg-emerald-100"
                        : zone.status === "good"
                        ? "bg-blue-100"
                        : zone.status === "warning"
                        ? "bg-amber-100"
                        : "bg-red-100"
                    }`}
                  >
                    <MapPin
                      className={`h-5 w-5 ${
                        zone.status === "optimal"
                          ? "text-emerald-600"
                          : zone.status === "good"
                          ? "text-blue-600"
                          : zone.status === "warning"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{zone.zone}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      <span>{zone.occupancy}% occupancy</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <span className="font-bold text-gray-900">
                        {zone.current}°F
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Target: {zone.target}°F
                    </div>
                  </div>
                  <div className="text-center">
                    <Droplets className="h-4 w-4 text-cyan-500 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">
                      {zone.humidity}%
                    </div>
                  </div>
                  <StatusBadge status={zone.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HVAC Units Status */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                HVAC Units Status
              </h2>
              <p className="text-gray-600 text-sm">
                Equipment performance and status
              </p>
            </div>
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
              2 Need Attention
            </Badge>
          </div>

          <div className="space-y-4">
            {hvacUnits.map((unit, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      unit.status === "active"
                        ? "bg-blue-100"
                        : unit.status === "maintenance"
                        ? "bg-amber-100"
                        : unit.status === "warning"
                        ? "bg-amber-100"
                        : "bg-red-100"
                    }`}
                  >
                    {unit.type === "Chiller" || unit.type === "CRAC" ? (
                      <Snowflake
                        className={`h-5 w-5 ${
                          unit.status === "active"
                            ? "text-blue-600"
                            : unit.status === "maintenance"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : unit.type === "Boiler" ? (
                      <Flame
                        className={`h-5 w-5 ${
                          unit.status === "active"
                            ? "text-orange-600"
                            : unit.status === "maintenance"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : (
                      <Fan
                        className={`h-5 w-5 ${
                          unit.status === "active"
                            ? "text-cyan-600"
                            : unit.status === "maintenance"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{unit.id}</div>
                    <div className="text-sm text-gray-500">{unit.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Efficiency</div>
                      <div
                        className={`font-bold ${
                          unit.efficiency >= 90
                            ? "text-emerald-600"
                            : unit.efficiency >= 80
                            ? "text-blue-600"
                            : unit.efficiency >= 70
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {unit.efficiency}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Load</div>
                      <div className="font-bold text-gray-900">
                        {unit.load}%
                      </div>
                    </div>
                    <StatusBadge status={unit.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Energy Consumption & Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Energy Consumption by Zone */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Energy Consumption by Zone
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={zoneEnergy}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="zone" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip
                  formatter={(value) => [`${value} kWh`, "Consumption"]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="consumption"
                  name="Energy Consumption"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-lg font-bold text-blue-700">1,900 kWh</div>
              <div className="text-xs text-blue-600">Daily Total</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="text-lg font-bold text-emerald-700">86%</div>
              <div className="text-xs text-emerald-600">Avg Efficiency</div>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="text-lg font-bold text-amber-700">520 kWh</div>
              <div className="text-xs text-amber-600">Peak Zone</div>
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Daily Schedule
              </h2>
              <p className="text-gray-600 text-sm">
                Temperature setpoints throughout the day
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              Edit Schedule
            </Button>
          </div>

          <div className="space-y-3">
            {scheduleData.map((schedule, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl border ${
                  schedule.status === "current"
                    ? "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200"
                    : schedule.status === "active"
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      schedule.status === "current"
                        ? "bg-blue-100"
                        : schedule.status === "active"
                        ? "bg-emerald-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {schedule.mode.includes("Night") ? (
                      <Moon className="h-5 w-5 text-gray-600" />
                    ) : schedule.mode.includes("Morning") ? (
                      <Sunrise className="h-5 w-5 text-orange-600" />
                    ) : schedule.mode.includes("Evening") ? (
                      <Sunset className="h-5 w-5 text-purple-600" />
                    ) : (
                      <Sun className="h-5 w-5 text-amber-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {schedule.time}
                    </div>
                    <div className="text-sm text-gray-500">{schedule.mode}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <span className="font-bold text-gray-900">
                        {schedule.temp}°F
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Set Point</div>
                  </div>
                  <Badge
                    className={
                      schedule.status === "current"
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                        : schedule.status === "active"
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    {schedule.status === "current"
                      ? "Active Now"
                      : schedule.status === "active"
                      ? "Active"
                      : "Upcoming"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-amber-100">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-amber-900">
                    Schedule Override Active
                  </div>
                  <div className="text-xs text-amber-700">
                    Manual control until 18:00
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-amber-200 text-amber-700 hover:bg-amber-100"
              >
                Clear Override
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* HVAC Alerts */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              HVAC Alerts & Notifications
            </h2>
            <p className="text-gray-600 text-sm">
              Real-time system notifications
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
              1 Critical
            </Badge>
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
              2 Warnings
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hvacAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border ${
                alert.type === "critical"
                  ? "border-red-200 bg-red-50 hover:bg-red-100"
                  : alert.type === "warning"
                  ? "border-amber-200 bg-amber-50 hover:bg-amber-100"
                  : "border-blue-200 bg-blue-50 hover:bg-blue-100"
              } transition-colors`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-1.5 rounded-full mt-0.5 ${
                    alert.type === "critical"
                      ? "bg-red-100"
                      : alert.type === "warning"
                      ? "bg-amber-100"
                      : "bg-blue-100"
                  }`}
                >
                  <AlertCircle
                    className={`h-4 w-4 ${
                      alert.type === "critical"
                        ? "text-red-600"
                        : alert.type === "warning"
                        ? "text-amber-600"
                        : "text-blue-600"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    {alert.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {alert.location}
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/50">
                    <Badge
                      variant="outline"
                      className={
                        alert.type === "critical"
                          ? "border-red-200 text-red-700 bg-red-100"
                          : alert.type === "warning"
                          ? "border-amber-200 text-amber-700 bg-amber-100"
                          : "border-blue-200 text-blue-700 bg-blue-100"
                      }
                    >
                      {alert.value}
                    </Badge>
                    <div className="text-xs text-gray-500">{alert.time}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="p-4 rounded-xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-emerald-100">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  All Systems Normal
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  No pending maintenance required
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    Optimal
                  </Badge>
                  <span className="text-xs text-gray-500">
                    Last checked: 15 min ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
