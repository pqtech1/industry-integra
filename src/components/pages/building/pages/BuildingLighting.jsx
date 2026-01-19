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
  Sun,
  Moon,
  Zap,
  Settings,
  Power,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
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
  Lightbulb,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  VenetianMask,
  Palette,
  Sparkles,
  Flashlight,
  LightbulbOff,
  SunDim,
  Sunrise,
  Sunset,
  CloudSun,
  CloudMoon,
  Thermometer,
  Droplets,
  Wind,
  Filter,
  Layers,
  PanelTop,
  PanelBottom,
  // Valid lamp icons that exist in lucide-react
  LampWallUp,
  LampWallDown,
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

// Lighting Metrics
const lightingMetrics = [
  {
    title: "Total Energy",
    value: "420 kWh",
    change: "-15%",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Lighting Efficiency",
    value: "94%",
    change: "+4%",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Active Lights",
    value: "1,245",
    change: "-8%",
    icon: Lightbulb,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Avg Brightness",
    value: "75%",
    change: "+5%",
    icon: Sun,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Occupancy Rate",
    value: "68%",
    change: "+12%",
    icon: Users,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Cost Savings",
    value: "$850",
    change: "-18%",
    icon: DollarSign,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

// Zone Lighting Data
const zoneLighting = [
  {
    zone: "Executive Floor",
    brightness: 80,
    occupancy: 85,
    status: "optimal",
    lights: 45,
    type: "office",
  },
  {
    zone: "Open Workspace",
    brightness: 75,
    occupancy: 92,
    status: "optimal",
    lights: 120,
    type: "office",
  },
  {
    zone: "Meeting Rooms",
    brightness: 70,
    occupancy: 65,
    status: "optimal",
    lights: 35,
    type: "conference",
  },
  {
    zone: "Cafeteria",
    brightness: 85,
    occupancy: 85,
    status: "warning",
    lights: 40,
    type: "common",
  },
  {
    zone: "Lobby",
    brightness: 90,
    occupancy: 45,
    status: "good",
    lights: 25,
    type: "common",
  },
  {
    zone: "Parking Garage",
    brightness: 60,
    occupancy: 15,
    status: "fair",
    lights: 80,
    type: "utility",
  },
  {
    zone: "Server Room",
    brightness: 40,
    occupancy: 0,
    status: "critical",
    lights: 15,
    type: "technical",
  },
];

// Lighting Groups
const lightingGroups = [
  {
    id: "LG-01",
    name: "Perimeter Lighting",
    location: "All Floors",
    status: "active",
    brightness: 75,
    schedule: "auto",
    lights: 85,
  },
  {
    id: "LG-02",
    name: "Task Lighting",
    location: "Workspaces",
    status: "active",
    brightness: 80,
    schedule: "manual",
    lights: 45,
  },
  {
    id: "LG-03",
    name: "Ambient Lighting",
    location: "Common Areas",
    status: "active",
    brightness: 70,
    schedule: "auto",
    lights: 60,
  },
  {
    id: "LG-04",
    name: "Emergency Lighting",
    location: "All Areas",
    status: "standby",
    brightness: 100,
    schedule: "always",
    lights: 25,
  },
  {
    id: "LG-05",
    name: "Exterior Lighting",
    location: "Building Exterior",
    status: "maintenance",
    brightness: 65,
    schedule: "dusk-dawn",
    lights: 40,
  },
  {
    id: "LG-06",
    name: "Decorative Lighting",
    location: "Lobby & Reception",
    status: "active",
    brightness: 85,
    schedule: "business",
    lights: 20,
  },
];

// Lighting History
const lightingHistory = [
  { time: "00:00", brightness: 30, consumption: 15, occupancy: 8 },
  { time: "02:00", brightness: 25, consumption: 12, occupancy: 5 },
  { time: "04:00", brightness: 20, consumption: 10, occupancy: 3 },
  { time: "06:00", brightness: 40, consumption: 20, occupancy: 15 },
  { time: "08:00", brightness: 75, consumption: 45, occupancy: 85 },
  { time: "10:00", brightness: 80, consumption: 48, occupancy: 92 },
  { time: "12:00", brightness: 78, consumption: 46, occupancy: 90 },
  { time: "14:00", brightness: 76, consumption: 44, occupancy: 88 },
  { time: "16:00", brightness: 74, consumption: 42, occupancy: 86 },
  { time: "18:00", brightness: 65, consumption: 35, occupancy: 65 },
  { time: "20:00", brightness: 45, consumption: 25, occupancy: 30 },
  { time: "22:00", brightness: 35, consumption: 18, occupancy: 15 },
];

// Lighting Alerts
const lightingAlerts = [
  {
    id: 1,
    type: "warning",
    title: "High Brightness Level",
    location: "Cafeteria",
    value: "85%",
    time: "10 min ago",
  },
  {
    id: 2,
    type: "info",
    title: "Scheduled Dimming",
    location: "Perimeter Lighting",
    value: "Activated",
    time: "30 min ago",
  },
  {
    id: 3,
    type: "critical",
    title: "Emergency Light Test Failed",
    location: "Floor 3 Stairwell",
    value: "Check Required",
    time: "2 hours ago",
  },
  {
    id: 4,
    type: "warning",
    title: "Occupancy Sensor Fault",
    location: "Meeting Room B",
    value: "Needs Calibration",
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
const energyByZone = [
  { zone: "Executive Floor", consumption: 85, efficiency: 92, occupancy: 85 },
  { zone: "Open Workspace", consumption: 145, efficiency: 94, occupancy: 92 },
  { zone: "Meeting Rooms", consumption: 65, efficiency: 88, occupancy: 65 },
  { zone: "Cafeteria", consumption: 95, efficiency: 78, occupancy: 85 },
  { zone: "Lobby", consumption: 75, efficiency: 85, occupancy: 45 },
  { zone: "Parking Garage", consumption: 120, efficiency: 82, occupancy: 15 },
];

// Schedule Data
const scheduleData = [
  {
    time: "00:00 - 06:00",
    mode: "Night Mode",
    brightness: 25,
    status: "active",
  },
  {
    time: "06:00 - 08:00",
    mode: "Morning Wake-up",
    brightness: 60,
    status: "upcoming",
  },
  {
    time: "08:00 - 18:00",
    mode: "Business Hours",
    brightness: 75,
    status: "current",
  },
  {
    time: "18:00 - 20:00",
    mode: "Evening Dim",
    brightness: 50,
    status: "upcoming",
  },
  {
    time: "20:00 - 00:00",
    mode: "Night Mode",
    brightness: 25,
    status: "upcoming",
  },
];

// Color Temperature Presets
const colorPresets = [
  {
    name: "Cool White",
    temp: "6500K",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Daylight",
    temp: "5000K",
    color: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    name: "Neutral",
    temp: "4000K",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    name: "Warm White",
    temp: "3000K",
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    name: "Soft Warm",
    temp: "2700K",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
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
    standby: {
      color: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      label: "Standby",
      Icon: PowerOff,
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

// Brightness Gauge Component
const BrightnessGauge = ({ value, size = "medium" }) => {
  const percentage = value;

  const getGaugeColor = () => {
    if (value <= 33) return "bg-amber-500";
    if (value <= 66) return "bg-blue-500";
    return "bg-emerald-500";
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
              {value}%
            </div>
            <div className="text-xs text-gray-600">Brightness</div>
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
            strokeDasharray={`${(percentage / 100) * 283} 283`}
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
              {entry.value} {entry.name === "consumption" ? "kWh" : "%"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function BuildingLighting() {
  const [autoMode, setAutoMode] = useState(true);
  const [occupancySensing, setOccupancySensing] = useState(true);
  const [daylightHarvesting, setDaylightHarvesting] = useState(true);
  const [masterBrightness, setMasterBrightness] = useState([75]);
  const [colorTemperature, setColorTemperature] = useState([4000]);
  const [selectedZone, setSelectedZone] = useState("all");
  const [timeRange, setTimeRange] = useState("today");
  const [activePreset, setActivePreset] = useState("Neutral");

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Building Lighting Control
          </h1>
          <p className="text-gray-600 mt-2">
            Intelligent lighting management and energy optimization
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
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 hover:shadow-md transition-all">
            <Plus className="h-4 w-4" />
            New Scene
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {lightingMetrics.map((metric, index) => {
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

      {/* Main Control Panel & Lighting Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Control Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Lighting Control Panel
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
                        Occupancy Sensing
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Turn off lights in unoccupied areas
                      </p>
                    </div>
                    <Switch
                      checked={occupancySensing}
                      onCheckedChange={setOccupancySensing}
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Daylight Harvesting
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Adjust based on natural light
                      </p>
                    </div>
                    <Switch
                      checked={daylightHarvesting}
                      onCheckedChange={setDaylightHarvesting}
                      className="data-[state=checked]:bg-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold text-gray-900 mb-3 block">
                      Color Temperature Presets
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {colorPresets.map((preset) => (
                        <Button
                          key={preset.name}
                          variant={
                            activePreset === preset.name ? "default" : "outline"
                          }
                          className={`gap-2 ${
                            activePreset === preset.name ? preset.color : ""
                          }`}
                          onClick={() => setActivePreset(preset.name)}
                        >
                          <Sun className={`h-3.5 w-3.5 ${preset.iconColor}`} />
                          {preset.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label className="font-semibold text-gray-900">
                        Master Brightness
                      </Label>
                      <span className="font-bold text-amber-600">
                        {masterBrightness[0]}%
                      </span>
                    </div>
                    <Slider
                      value={masterBrightness}
                      onValueChange={setMasterBrightness}
                      min={0}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Color Temperature
                    </Label>
                    <span className="font-bold text-orange-600">
                      {colorTemperature[0]}K
                    </span>
                  </div>
                  <Slider
                    value={colorTemperature}
                    onValueChange={setColorTemperature}
                    min={2700}
                    max={6500}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Warm</span>
                    <span>Neutral</span>
                    <span>Cool</span>
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
                      <SelectItem value="cafeteria">Cafeteria</SelectItem>
                      <SelectItem value="lobby">Lobby</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1 h-11 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Apply Lighting Settings
                </Button>
                <Button variant="outline" className="flex-1 h-11">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset to Default
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Lighting Overview */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Lighting Overview
              </h2>
              <p className="text-gray-600 text-sm">
                Building-wide lighting distribution
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
              <ComposedChart
                data={lightingHistory}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="brightness"
                  name="Brightness %"
                  fill="url(#brightnessGradient)"
                  stroke="#f59e0b"
                  strokeWidth={2}
                />
                <Bar
                  dataKey="consumption"
                  name="Energy (kWh)"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="occupancy"
                  name="Occupancy %"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <defs>
                  <linearGradient
                    id="brightnessGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="text-lg font-bold text-amber-700">75%</div>
              <div className="text-xs text-amber-600">Avg Brightness</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-lg font-bold text-blue-700">420 kWh</div>
              <div className="text-xs text-blue-600">Daily Energy</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="text-lg font-bold text-emerald-700">68%</div>
              <div className="text-xs text-emerald-600">Avg Occupancy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Zone Lighting & Lighting Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Zone Lighting Status */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Zone Lighting Status
              </h2>
              <p className="text-gray-600 text-sm">
                Real-time lighting by zone
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
            {zoneLighting.map((zone, index) => (
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
                      <Lightbulb className="h-3 w-3" />
                      <span>{zone.lights} lights</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-amber-500" />
                      <span className="font-bold text-gray-900">
                        {zone.brightness}%
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Brightness</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-4 w-4 text-cyan-500 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">
                      {zone.occupancy}%
                    </div>
                  </div>
                  <StatusBadge status={zone.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lighting Groups */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Lighting Groups
              </h2>
              <p className="text-gray-600 text-sm">Grouped lighting controls</p>
            </div>
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
              1 Maintenance
            </Badge>
          </div>

          <div className="space-y-4">
            {lightingGroups.map((group, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      group.status === "active"
                        ? "bg-blue-100"
                        : group.status === "standby"
                        ? "bg-gray-100"
                        : group.status === "maintenance"
                        ? "bg-amber-100"
                        : "bg-red-100"
                    }`}
                  >
                    <LampCeiling
                      className={`h-5 w-5 ${
                        group.status === "active"
                          ? "text-blue-600"
                          : group.status === "standby"
                          ? "text-gray-600"
                          : group.status === "maintenance"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {group.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {group.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Brightness</div>
                      <div className="font-bold text-gray-900">
                        {group.brightness}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Lights</div>
                      <div className="font-bold text-gray-900">
                        {group.lights}
                      </div>
                    </div>
                    <StatusBadge status={group.status} />
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
                data={energyByZone}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="zone" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip
                  formatter={(value, name) => [
                    `${value} ${name === "consumption" ? "kWh" : "%"}`,
                    name === "consumption" ? "Energy" : "Efficiency",
                  ]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="consumption"
                  name="Energy (kWh)"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  name="Efficiency %"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-lg font-bold text-blue-700">585 kWh</div>
              <div className="text-xs text-blue-600">Daily Total</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="text-lg font-bold text-emerald-700">86.5%</div>
              <div className="text-xs text-emerald-600">Avg Efficiency</div>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="text-lg font-bold text-amber-700">145 kWh</div>
              <div className="text-xs text-amber-600">Peak Zone</div>
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Daily Lighting Schedule
              </h2>
              <p className="text-gray-600 text-sm">
                Lighting levels throughout the day
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
                    ? "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"
                    : schedule.status === "active"
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      schedule.status === "current"
                        ? "bg-amber-100"
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
                      <Sun className="h-4 w-4 text-amber-500" />
                      <span className="font-bold text-gray-900">
                        {schedule.brightness}%
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Brightness Level
                    </div>
                  </div>
                  <Badge
                    className={
                      schedule.status === "current"
                        ? "bg-amber-100 text-amber-700 hover:bg-amber-100"
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

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-blue-100">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-900">
                    Daylight Harvesting Active
                  </div>
                  <div className="text-xs text-blue-700">
                    Natural light reducing energy usage by 23%
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-blue-900">
                  23% Savings
                </div>
                <div className="text-xs text-blue-700">vs scheduled</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lighting Alerts & Scenes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lighting Alerts */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Lighting Alerts
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

          <div className="space-y-4">
            {lightingAlerts.map((alert) => (
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
          </div>
        </div>

        {/* Quick Scenes */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Quick Lighting Scenes
              </h2>
              <p className="text-gray-600 text-sm">
                Preset lighting configurations
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md"
            >
              <Palette className="h-3.5 w-3.5" />
              Create Scene
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:from-blue-100 hover:to-cyan-100">
              <Sun className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-900">Focus Mode</span>
              <span className="text-xs text-gray-600">
                85% brightness, 5000K
              </span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 hover:from-emerald-100 hover:to-green-100">
              <Users className="h-6 w-6 text-emerald-600" />
              <span className="font-semibold text-gray-900">Meeting Mode</span>
              <span className="text-xs text-gray-600">
                70% brightness, 4000K
              </span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:from-amber-100 hover:to-orange-100">
              <CloudSun className="h-6 w-6 text-amber-600" />
              <span className="font-semibold text-gray-900">Presentation</span>
              <span className="text-xs text-gray-600">
                60% brightness, 3000K
              </span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:from-purple-100 hover:to-pink-100">
              <Moon className="h-6 w-6 text-purple-600" />
              <span className="font-semibold text-gray-900">Evening</span>
              <span className="text-xs text-gray-600">
                40% brightness, 2700K
              </span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 hover:from-gray-100 hover:to-slate-100">
              <PowerOff className="h-6 w-6 text-gray-600" />
              <span className="font-semibold text-gray-900">Energy Save</span>
              <span className="text-xs text-gray-600">
                50% brightness, auto
              </span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 hover:from-cyan-100 hover:to-blue-100">
              <Sparkles className="h-6 w-6 text-cyan-600" />
              <span className="font-semibold text-gray-900">All On</span>
              <span className="text-xs text-gray-600">
                100% brightness, 6500K
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
