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
  Wind,
  Thermometer,
  Droplets,
  Cloud,
  Leaf,
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
  EyeOff,
  TrendingUp,
  TrendingDown,
  Activity,
  Shield,
  Users,
  Building,
  Calendar,
  Clock,
  Search,
  History,
  Bell,
  AlertTriangle,
  Zap,
  Sun,
  CloudRain,
  Snowflake,
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Air quality data by floor
const floorAirQuality = [
  {
    floor: "Ground Floor",
    aqi: 45,
    status: "excellent",
    temp: 22.5,
    humidity: 48,
    co2: 450,
    pm25: 12,
    voc: 120,
    occupancy: 85,
  },
  {
    floor: "Floor 1",
    aqi: 68,
    status: "good",
    temp: 23.2,
    humidity: 52,
    co2: 520,
    pm25: 18,
    voc: 150,
    occupancy: 92,
  },
  {
    floor: "Floor 2",
    aqi: 85,
    status: "moderate",
    temp: 24.1,
    humidity: 55,
    co2: 680,
    pm25: 25,
    voc: 180,
    occupancy: 78,
  },
  {
    floor: "Floor 3",
    aqi: 110,
    status: "poor",
    temp: 25.3,
    humidity: 58,
    co2: 850,
    pm25: 35,
    voc: 220,
    occupancy: 65,
  },
  {
    floor: "Floor 4",
    aqi: 155,
    status: "unhealthy",
    temp: 26.0,
    humidity: 60,
    co2: 950,
    pm25: 45,
    voc: 280,
    occupancy: 45,
  },
  {
    floor: "Floor 5",
    aqi: 45,
    status: "excellent",
    temp: 22.8,
    humidity: 46,
    co2: 420,
    pm25: 10,
    voc: 110,
    occupancy: 30,
  },
];

// Real-time air quality readings
const realTimeReadings = [
  {
    parameter: "PM2.5",
    value: 18,
    unit: "µg/m³",
    status: "good",
    trend: "down",
    icon: Cloud,
  },
  {
    parameter: "PM10",
    value: 32,
    unit: "µg/m³",
    status: "moderate",
    trend: "stable",
    icon: Cloud,
  },
  {
    parameter: "CO₂",
    value: 520,
    unit: "ppm",
    status: "good",
    trend: "down",
    icon: Wind,
  },
  {
    parameter: "VOC",
    value: 150,
    unit: "ppb",
    status: "good",
    trend: "up",
    icon: AlertCircle,
  },
  {
    parameter: "Temperature",
    value: 23.2,
    unit: "°C",
    status: "optimal",
    trend: "stable",
    icon: Thermometer,
  },
  {
    parameter: "Humidity",
    value: 52,
    unit: "%",
    status: "optimal",
    trend: "stable",
    icon: Droplets,
  },
  {
    parameter: "Air Pressure",
    value: 1013,
    unit: "hPa",
    status: "optimal",
    trend: "stable",
    icon: Wind,
  },
  {
    parameter: "Ozone",
    value: 28,
    unit: "ppb",
    status: "excellent",
    trend: "down",
    icon: CloudRain,
  },
];

// Historical air quality data
const historicalData = [
  { time: "6 AM", aqi: 35, pm25: 8, co2: 380, temp: 21.0 },
  { time: "9 AM", aqi: 45, pm25: 12, co2: 450, temp: 22.5 },
  { time: "12 PM", aqi: 68, pm25: 18, co2: 580, temp: 24.0 },
  { time: "3 PM", aqi: 85, pm25: 25, co2: 720, temp: 25.2 },
  { time: "6 PM", aqi: 72, pm25: 20, co2: 650, temp: 23.8 },
  { time: "9 PM", aqi: 48, pm25: 15, co2: 480, temp: 22.0 },
];

// Zone-specific air quality
const zoneAirQuality = [
  {
    zone: "Open Workspace",
    aqi: 68,
    status: "good",
    devices: 8,
    lastUpdate: "2 min ago",
  },
  {
    zone: "Meeting Rooms",
    aqi: 85,
    status: "moderate",
    devices: 4,
    lastUpdate: "5 min ago",
  },
  {
    zone: "Cafeteria",
    aqi: 110,
    status: "poor",
    devices: 6,
    lastUpdate: "10 min ago",
  },
  {
    zone: "Server Room",
    aqi: 45,
    status: "excellent",
    devices: 3,
    lastUpdate: "15 min ago",
  },
  {
    zone: "Parking Garage",
    aqi: 155,
    status: "unhealthy",
    devices: 5,
    lastUpdate: "20 min ago",
  },
  {
    zone: "Lobby",
    aqi: 72,
    status: "good",
    devices: 4,
    lastUpdate: "25 min ago",
  },
];

// Air quality alerts
const airQualityAlerts = [
  {
    id: 1,
    type: "critical",
    title: "High PM2.5 Levels",
    location: "Parking Garage",
    value: "45 µg/m³",
    time: "5 min ago",
  },
  {
    id: 2,
    type: "warning",
    title: "Elevated CO₂",
    location: "Meeting Room A",
    value: "850 ppm",
    time: "15 min ago",
  },
  {
    id: 3,
    type: "info",
    title: "Humidity High",
    location: "Floor 3",
    value: "65%",
    time: "30 min ago",
  },
  {
    id: 4,
    type: "warning",
    title: "VOC Levels Rising",
    location: "Cafeteria",
    value: "280 ppb",
    time: "45 min ago",
  },
  {
    id: 5,
    type: "info",
    title: "Filter Maintenance",
    location: "HVAC System 1",
    value: "Due Soon",
    time: "2 hours ago",
  },
];

// Air quality metrics
const airQualityMetrics = [
  {
    title: "Overall AQI",
    value: "68",
    change: "-12",
    icon: Leaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "PM2.5 Level",
    value: "18 µg/m³",
    change: "-8%",
    icon: Cloud,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "CO₂ Level",
    value: "520 ppm",
    change: "-15%",
    icon: Wind,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Temperature",
    value: "23.2°C",
    change: "+1.2°C",
    icon: Thermometer,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Humidity",
    value: "52%",
    change: "-3%",
    icon: Droplets,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Air Exchanges",
    value: "4.2/h",
    change: "+0.5",
    icon: RefreshCw,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

// Air quality parameter distribution
const parameterDistribution = [
  { parameter: "PM2.5", value: 25, color: "#3b82f6", icon: Cloud },
  { parameter: "CO₂", value: 30, color: "#10b981", icon: Wind },
  { parameter: "VOC", value: 20, color: "#f59e0b", icon: AlertCircle },
  { parameter: "Temperature", value: 15, color: "#ef4444", icon: Thermometer },
  { parameter: "Humidity", value: 10, color: "#0ea5e9", icon: Droplets },
];

// Status badge component
const StatusBadge = ({ status }) => {
  const config = {
    excellent: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Excellent",
      icon: CheckCircle2,
    },
    good: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Good",
      icon: CheckCircle2,
    },
    moderate: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Moderate",
      icon: AlertTriangle,
    },
    poor: {
      color: "bg-orange-100 text-orange-800 hover:bg-orange-100",
      label: "Poor",
      icon: AlertCircle,
    },
    unhealthy: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Unhealthy",
      icon: XCircle,
    },
    hazardous: {
      color: "bg-purple-100 text-purple-800 hover:bg-purple-100",
      label: "Hazardous",
      icon: XCircle,
    },
    critical: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Critical",
      icon: AlertCircle,
    },
    warning: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Warning",
      icon: AlertTriangle,
    },
    info: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Info",
      icon: Bell,
    },
    optimal: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Optimal",
      icon: CheckCircle2,
    },
  };

  const Icon = config[status]?.icon;

  return (
    <Badge
      variant="secondary"
      className={`${config[status]?.color} gap-1.5 px-3 py-1`}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-medium">{config[status]?.label}</span>
    </Badge>
  );
};

// AQI gauge component
const AQIGauge = ({ aqi, size = "medium" }) => {
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return "bg-emerald-500";
    if (aqi <= 100) return "bg-blue-500";
    if (aqi <= 150) return "bg-amber-500";
    if (aqi <= 200) return "bg-orange-500";
    if (aqi <= 300) return "bg-red-500";
    return "bg-purple-500";
  };

  const getAQITextColor = (aqi) => {
    if (aqi <= 50) return "text-emerald-600";
    if (aqi <= 100) return "text-blue-600";
    if (aqi <= 150) return "text-amber-600";
    if (aqi <= 200) return "text-orange-600";
    if (aqi <= 300) return "text-red-600";
    return "text-purple-600";
  };

  const getAQILabel = (aqi) => {
    if (aqi <= 50) return "Excellent";
    if (aqi <= 100) return "Good";
    if (aqi <= 150) return "Moderate";
    if (aqi <= 200) return "Poor";
    if (aqi <= 300) return "Unhealthy";
    return "Hazardous";
  };

  const sizeClass = size === "large" ? "h-32 w-32" : "h-20 w-20";
  const textSize = size === "large" ? "text-3xl" : "text-xl";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`${textSize} font-bold ${getAQITextColor(aqi)}`}>
              {aqi}
            </div>
            <div className="text-xs text-gray-600">AQI</div>
          </div>
        </div>
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(aqi / 300) * 283} 283`}
            className={getAQIColor(aqi)}
          />
        </svg>
      </div>
      <div className="mt-2 text-center">
        <div className="text-sm font-medium text-gray-900">
          {getAQILabel(aqi)}
        </div>
        <div className="text-xs text-gray-500">Air Quality</div>
      </div>
    </div>
  );
};

// Floor air quality card component
const FloorCard = ({ floor }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-bold text-gray-900">{floor.floor}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Users className="h-3.5 w-3.5 text-gray-500" />
          <span className="text-sm text-gray-600">
            {floor.occupancy}% occupancy
          </span>
        </div>
      </div>
      <StatusBadge status={floor.status} />
    </div>

    <div className="flex justify-center my-6">
      <AQIGauge aqi={floor.aqi} size="medium" />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Thermometer className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-600">Temp</span>
          </div>
          <span className="text-sm font-bold text-gray-900">
            {floor.temp}°C
          </span>
        </div>
        <Progress
          value={(floor.temp - 20) * 10}
          className="h-1.5"
          indicatorClassName={
            floor.temp > 25
              ? "bg-gradient-to-r from-red-500 to-orange-500"
              : floor.temp > 23
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
            {floor.humidity}%
          </span>
        </div>
        <Progress
          value={floor.humidity}
          className="h-1.5"
          indicatorClassName={
            floor.humidity > 60
              ? "bg-gradient-to-r from-red-500 to-pink-500"
              : floor.humidity > 50
              ? "bg-gradient-to-r from-orange-500 to-red-500"
              : "bg-gradient-to-r from-emerald-500 to-green-500"
          }
        />
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Wind className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-600">CO₂</span>
          </div>
          <span className="text-sm font-bold text-gray-900">
            {floor.co2} ppm
          </span>
        </div>
        <Progress
          value={Math.min(floor.co2 / 10, 100)}
          className="h-1.5"
          indicatorClassName={
            floor.co2 > 800
              ? "bg-gradient-to-r from-red-500 to-orange-500"
              : floor.co2 > 600
              ? "bg-gradient-to-r from-amber-500 to-yellow-500"
              : "bg-gradient-to-r from-emerald-500 to-green-500"
          }
        />
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Cloud className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-600">PM2.5</span>
          </div>
          <span className="text-sm font-bold text-gray-900">
            {floor.pm25} µg/m³
          </span>
        </div>
        <Progress
          value={Math.min(floor.pm25 * 2, 100)}
          className="h-1.5"
          indicatorClassName={
            floor.pm25 > 35
              ? "bg-gradient-to-r from-red-500 to-orange-500"
              : floor.pm25 > 25
              ? "bg-gradient-to-r from-amber-500 to-yellow-500"
              : "bg-gradient-to-r from-blue-500 to-cyan-500"
          }
        />
      </div>
    </div>

    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
      <div className="text-xs text-gray-500">Last updated: 2 min ago</div>
      <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
        <Eye className="h-3.5 w-3.5 mr-1" />
        Details
      </Button>
    </div>
  </div>
);

// Real-time reading card component
const ReadingCard = ({ reading }) => {
  const Icon = reading.icon;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gray-100">
            <Icon className="h-4 w-4 text-gray-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">
            {reading.parameter}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {reading.trend === "up" ? (
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
          ) : reading.trend === "down" ? (
            <TrendingDown className="h-3.5 w-3.5 text-red-500" />
          ) : (
            <Activity className="h-3.5 w-3.5 text-blue-500" />
          )}
        </div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-gray-900">{reading.value}</div>
        <div className="text-sm text-gray-600">{reading.unit}</div>
      </div>

      <div className="flex justify-center mt-3">
        <StatusBadge status={reading.status} />
      </div>
    </div>
  );
};

export default function BuildingAirQuality() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [selectedFloor, setSelectedFloor] = useState("all");
  const [autoPurification, setAutoPurification] = useState(true);
  const [ventilationMode, setVentilationMode] = useState("auto");
  const [airQualityThreshold, setAirQualityThreshold] = useState([100]);
  const [temperatureSetpoint, setTemperatureSetpoint] = useState([22]);

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">
            Building Air Quality
          </h1>
          <p className="text-gray-600 mt-2">
            Real-time monitoring and control of indoor air quality
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 shadow-sm">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
            <Plus className="h-4 w-4" />
            New Alert Rule
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {airQualityMetrics.map((metric, index) => {
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

      {/* Main Content Tabs */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full md:w-auto grid-cols-4 md:flex gap-2 bg-gradient-to-r from-emerald-50 to-blue-50 p-1 rounded-xl">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Activity className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="floors"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Building className="h-4 w-4 mr-2" />
            Floors
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </TabsTrigger>
          <TabsTrigger
            value="control"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Settings className="h-4 w-4 mr-2" />
            Control
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overall AQI Gauge */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Overall Air Quality Index
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Building-wide air quality assessment
                    </p>
                  </div>
                  <Select
                    value={selectedFloor}
                    onValueChange={setSelectedFloor}
                  >
                    <SelectTrigger className="w-32 shadow-sm">
                      <SelectValue placeholder="Select floor" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="all">All Floors</SelectItem>
                      <SelectItem value="ground">Ground Floor</SelectItem>
                      <SelectItem value="floor1">Floor 1</SelectItem>
                      <SelectItem value="floor2">Floor 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <AQIGauge aqi={68} size="large" />
                  </div>

                  <div className="flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                          <span className="text-sm text-gray-700">
                            Excellent (0-50)
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          2 floors
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <span className="text-sm text-gray-700">
                            Good (51-100)
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          2 floors
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                          <span className="text-sm text-gray-700">
                            Moderate (101-150)
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          1 floor
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                          <span className="text-sm text-gray-700">
                            Poor (151-200)
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          1 floor
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <span className="text-sm text-gray-700">
                            Unhealthy (201-300)
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          0 floors
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical Trends */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Air Quality Trends
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Historical data for the past 24 hours
                    </p>
                  </div>
                  <Select defaultValue="24h">
                    <SelectTrigger className="w-32 shadow-sm">
                      <SelectValue placeholder="Time range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="24h">24 Hours</SelectItem>
                      <SelectItem value="7d">7 Days</SelectItem>
                      <SelectItem value="30d">30 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={historicalData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="aqiGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3b82f6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="pm25Gradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#10b981"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#10b981"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="time" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="aqi"
                        name="AQI"
                        stroke="#3b82f6"
                        fill="url(#aqiGradient)"
                        strokeWidth={2}
                      />
                      <Area
                        type="monotone"
                        dataKey="pm25"
                        name="PM2.5 (µg/m³)"
                        stroke="#10b981"
                        fill="url(#pm25Gradient)"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="co2"
                        name="CO₂ (ppm)"
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Real-time Readings */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Real-time Readings
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {realTimeReadings.map((reading, index) => (
                    <ReadingCard key={index} reading={reading} />
                  ))}
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Recent Alerts
                  </h2>
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                    2 Active
                  </Badge>
                </div>
                <ScrollArea className="h-[250px] pr-4">
                  <div className="space-y-4">
                    {airQualityAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-3 rounded-xl border ${
                          alert.type === "critical"
                            ? "border-red-200 bg-red-50"
                            : alert.type === "warning"
                            ? "border-amber-200 bg-amber-50"
                            : "border-blue-200 bg-blue-50"
                        }`}
                      >
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-1.5 rounded-full ${
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
                            <div>
                              <div className="font-semibold text-gray-900">
                                {alert.title}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                <div className="flex items-center gap-1">
                                  <Building className="h-3 w-3" />
                                  {alert.location}
                                </div>
                              </div>
                            </div>
                          </div>
                          <StatusBadge status={alert.type} />
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/50">
                          <div className="text-sm font-medium text-gray-900">
                            {alert.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {alert.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Floors Tab */}
        <TabsContent value="floors" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorAirQuality.map((floor, index) => (
              <FloorCard key={index} floor={floor} />
            ))}
          </div>

          {/* Zone Air Quality Table */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Zone Air Quality
                </h2>
                <p className="text-gray-600 text-sm">
                  Detailed air quality by building zones
                </p>
              </div>
              <Button variant="outline" className="gap-2 shadow-sm">
                <Filter className="h-4 w-4" />
                Filter Zones
              </Button>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-emerald-50 to-blue-50 hover:bg-gray-100">
                    <TableHead className="font-semibold text-gray-900">
                      Zone
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      AQI
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Status
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Devices
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Last Update
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {zoneAirQuality.map((zone, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-900">
                        {zone.zone}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              zone.aqi <= 50
                                ? "bg-emerald-500"
                                : zone.aqi <= 100
                                ? "bg-blue-500"
                                : zone.aqi <= 150
                                ? "bg-amber-500"
                                : zone.aqi <= 200
                                ? "bg-orange-500"
                                : "bg-red-500"
                            }`}
                          />
                          <span className="font-bold text-gray-900">
                            {zone.aqi}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={zone.status} />
                      </TableCell>
                      <TableCell className="text-gray-900">
                        {zone.devices} sensors
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {zone.lastUpdate}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1.5">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                          >
                            <Eye className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                          >
                            <Settings className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Parameter Distribution */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Parameter Distribution
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={parameterDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={(entry) =>
                            `${entry.parameter} ${entry.value}%`
                          }
                        >
                          {parameterDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Impact"]}
                          contentStyle={{
                            borderRadius: "12px",
                            border: "none",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    {parameterDistribution.map((param, index) => {
                      const Icon = param.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-full bg-white">
                              <Icon className="h-4 w-4 text-gray-600" />
                            </div>
                            <span className="font-medium text-gray-900">
                              {param.parameter}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-gray-900">
                              {param.value}%
                            </span>
                            <div className="text-xs text-gray-500">
                              Impact factor
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Correlation Analysis */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Correlation Analysis
                </h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      outerRadius={90}
                      width={500}
                      height={300}
                      data={floorAirQuality}
                    >
                      <PolarGrid />
                      <PolarAngleAxis dataKey="floor" />
                      <PolarRadiusAxis angle={30} domain={[0, 200]} />
                      <Radar
                        name="AQI"
                        dataKey="aqi"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.3}
                      />
                      <Radar
                        name="CO₂"
                        dataKey="co2"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.3}
                      />
                      <Radar
                        name="PM2.5"
                        dataKey="pm25"
                        stroke="#ef4444"
                        fill="#ef4444"
                        fillOpacity={0.3}
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Right Column - Statistics */}
            <div className="space-y-6">
              {/* Air Quality Statistics */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Air Quality Statistics
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                    <div>
                      <div className="text-sm font-medium text-emerald-900">
                        Best AQI Today
                      </div>
                      <div className="text-lg font-bold text-emerald-900">
                        45
                      </div>
                    </div>
                    <div className="text-sm text-emerald-700">Server Room</div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-red-50 border border-red-100">
                    <div>
                      <div className="text-sm font-medium text-red-900">
                        Worst AQI Today
                      </div>
                      <div className="text-lg font-bold text-red-900">155</div>
                    </div>
                    <div className="text-sm text-red-700">Parking Garage</div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <div>
                      <div className="text-sm font-medium text-blue-900">
                        Avg AQI Today
                      </div>
                      <div className="text-lg font-bold text-blue-900">68</div>
                    </div>
                    <div className="text-sm text-blue-700">
                      Building Average
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-amber-50 border border-amber-100">
                    <div>
                      <div className="text-sm font-medium text-amber-900">
                        Peak Hours
                      </div>
                      <div className="text-lg font-bold text-amber-900">
                        2-4 PM
                      </div>
                    </div>
                    <div className="text-sm text-amber-700">
                      Highest Pollution
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Recommendations
                </h2>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
                    <div className="flex items-start gap-3">
                      <Leaf className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-emerald-900">
                          Increase Ventilation
                        </div>
                        <p className="text-sm text-emerald-700 mt-1">
                          Open windows in zones with high CO₂ levels
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Wind className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-900">
                          Activate Air Purifiers
                        </div>
                        <p className="text-sm text-blue-700 mt-1">
                          Zones with PM2.5 above 25 µg/m³
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-amber-900">
                          Schedule Maintenance
                        </div>
                        <p className="text-sm text-amber-700 mt-1">
                          HVAC filters due for replacement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Control Tab */}
        <TabsContent value="control" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Control Settings */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Air Quality Control
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Auto Purification
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Automatically activate purifiers when AQI is poor
                      </p>
                    </div>
                    <Switch
                      checked={autoPurification}
                      onCheckedChange={setAutoPurification}
                      className="data-[state=checked]:bg-emerald-500"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label className="font-semibold text-gray-900">
                        Air Quality Threshold
                      </Label>
                      <span className="font-bold text-blue-600">
                        {airQualityThreshold[0]} AQI
                      </span>
                    </div>
                    <Slider
                      value={airQualityThreshold}
                      onValueChange={setAirQualityThreshold}
                      min={50}
                      max={200}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Sensitive</span>
                      <span>Standard</span>
                      <span>Tolerant</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label className="font-semibold text-gray-900">
                        Temperature Setpoint
                      </Label>
                      <span className="font-bold text-orange-600">
                        {temperatureSetpoint[0]}°C
                      </span>
                    </div>
                    <Slider
                      value={temperatureSetpoint}
                      onValueChange={setTemperatureSetpoint}
                      min={18}
                      max={26}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Cool</span>
                      <span>Comfort</span>
                      <span>Warm</span>
                    </div>
                  </div>

                  <div>
                    <Label className="font-semibold text-gray-900 mb-3 block">
                      Ventilation Mode
                    </Label>
                    <Select
                      value={ventilationMode}
                      onValueChange={setVentilationMode}
                    >
                      <SelectTrigger className="w-full shadow-sm">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="auto" className="text-emerald-600">
                          Auto (Smart Control)
                        </SelectItem>
                        <SelectItem value="energy">Energy Saver</SelectItem>
                        <SelectItem
                          value="performance"
                          className="text-blue-600"
                        >
                          Performance
                        </SelectItem>
                        <SelectItem value="manual">Manual Control</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div>
                    <Label className="font-semibold text-gray-900 mb-3 block">
                      Zone Controls
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Parking Garage</Label>
                        <Select defaultValue="purge">
                          <SelectTrigger className="shadow-sm">
                            <SelectValue placeholder="Select action" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="purge">Purge Mode</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="off">Off</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Meeting Rooms</Label>
                        <Select defaultValue="boost">
                          <SelectTrigger className="shadow-sm">
                            <SelectValue placeholder="Select action" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="boost">Boost Mode</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="eco">Eco Mode</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full h-11 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg">
                    Save Control Settings
                  </Button>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="space-y-6">
              {/* System Status */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  System Status
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-emerald-100">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-emerald-900">
                          HVAC System
                        </div>
                        <div className="text-sm text-emerald-700">
                          Operational
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                      100%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-blue-100">
                        <Wind className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-blue-900">
                          Air Purifiers
                        </div>
                        <div className="text-sm text-blue-700">3/5 Active</div>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      60%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50 border border-amber-100">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-amber-100">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-medium text-amber-900">
                          Sensor Network
                        </div>
                        <div className="text-sm text-amber-700">
                          1 Sensor Offline
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                      95%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-cyan-50 border border-cyan-100">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-cyan-100">
                        <RefreshCw className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <div className="font-medium text-cyan-900">
                          Ventilation
                        </div>
                        <div className="text-sm text-cyan-700">4.2 ACH</div>
                      </div>
                    </div>
                    <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">
                      Optimal
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-11 shadow-sm"
                  >
                    <Wind className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Purge All Zones</div>
                      <div className="text-xs text-gray-500">
                        Maximum ventilation
                      </div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-11 shadow-sm"
                  >
                    <Cloud className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Filter Check</div>
                      <div className="text-xs text-gray-500">
                        Check filter status
                      </div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-11 shadow-sm"
                  >
                    <Bell className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Test Alerts</div>
                      <div className="text-xs text-gray-500">
                        Test notification system
                      </div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-11 shadow-sm"
                  >
                    <Download className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Export Data</div>
                      <div className="text-xs text-gray-500">
                        Download reports
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
