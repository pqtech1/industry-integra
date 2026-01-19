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
  Users,
  Sun,
  Cloud,
  Leaf,
  Zap,
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
  Home,
  Smartphone,
  Cpu,
  Bell,
  History,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  ThumbsUp,
  Coffee,
  WifiOff,
  VolumeX,
  Music,
  Tv,
  Settings2,
  Heart,
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

// Comfort metrics
const comfortMetrics = [
  {
    title: "Overall Comfort Score",
    value: "8.7/10",
    change: "+0.3",
    icon: ThumbsUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Avg Temperature",
    value: "22.5°C",
    change: "+0.5°C",
    icon: Thermometer,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Humidity Level",
    value: "52%",
    change: "-3%",
    icon: Droplets,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Air Quality Index",
    value: "68",
    change: "-12",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Occupant Satisfaction",
    value: "92%",
    change: "+5%",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Noise Level",
    value: "45 dB",
    change: "-8 dB",
    icon: VolumeX,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

// Zone comfort status
const zoneComfort = [
  {
    zone: "Open Workspace",
    comfort: 8.9,
    status: "excellent",
    temp: 22.5,
    humidity: 48,
    occupancy: 92,
    noise: 48,
    airQuality: 65,
  },
  {
    zone: "Meeting Rooms",
    comfort: 7.8,
    status: "good",
    temp: 23.2,
    humidity: 52,
    occupancy: 65,
    noise: 42,
    airQuality: 72,
  },
  {
    zone: "Executive Floor",
    comfort: 9.2,
    status: "excellent",
    temp: 22.0,
    humidity: 46,
    occupancy: 78,
    noise: 38,
    airQuality: 58,
  },
  {
    zone: "Cafeteria",
    comfort: 6.5,
    status: "fair",
    temp: 24.1,
    humidity: 58,
    occupancy: 85,
    noise: 65,
    airQuality: 85,
  },
  {
    zone: "Server Room",
    comfort: 3.2,
    status: "poor",
    temp: 19.8,
    humidity: 35,
    occupancy: 0,
    noise: 55,
    airQuality: 45,
  },
  {
    zone: "Parking Garage",
    comfort: 5.8,
    status: "fair",
    temp: 18.5,
    humidity: 55,
    occupancy: 15,
    noise: 72,
    airQuality: 110,
  },
];

// Comfort parameters real-time
const comfortParameters = [
  {
    parameter: "Temperature",
    value: 22.5,
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
    parameter: "Air Velocity",
    value: 0.15,
    unit: "m/s",
    status: "optimal",
    trend: "stable",
    icon: Wind,
  },
  {
    parameter: "PM2.5",
    value: 18,
    unit: "µg/m³",
    status: "good",
    trend: "down",
    icon: Cloud,
  },
  {
    parameter: "CO₂ Level",
    value: 520,
    unit: "ppm",
    status: "good",
    trend: "down",
    icon: Leaf,
  },
  {
    parameter: "Noise Level",
    value: 45,
    unit: "dB",
    status: "optimal",
    trend: "down",
    icon: VolumeX,
  },
  {
    parameter: "Light Level",
    value: 450,
    unit: "lux",
    status: "optimal",
    trend: "stable",
    icon: Sun,
  },
  {
    parameter: "VOC",
    value: 150,
    unit: "ppb",
    status: "good",
    trend: "up",
    icon: AlertCircle,
  },
];

// Comfort trends
const comfortTrends = [
  { time: "6 AM", temp: 21.0, comfort: 7.8, occupancy: 15, noise: 38 },
  { time: "9 AM", temp: 22.5, comfort: 8.2, occupancy: 65, noise: 48 },
  { time: "12 PM", temp: 24.0, comfort: 7.5, occupancy: 92, noise: 52 },
  { time: "3 PM", temp: 25.2, comfort: 6.8, occupancy: 88, noise: 58 },
  { time: "6 PM", temp: 23.8, comfort: 8.1, occupancy: 45, noise: 42 },
  { time: "9 PM", temp: 22.0, comfort: 8.9, occupancy: 12, noise: 35 },
];

// Comfort complaints/issues
const comfortIssues = [
  {
    id: 1,
    issue: "Too Warm",
    zone: "Meeting Room A",
    reported: "John Smith",
    time: "30 min ago",
    status: "resolved",
  },
  {
    id: 2,
    issue: "Poor Air Quality",
    zone: "Cafeteria",
    reported: "Sarah Johnson",
    time: "1 hour ago",
    status: "in-progress",
  },
  {
    id: 3,
    issue: "Noisy Environment",
    zone: "Open Workspace",
    reported: "Mike Chen",
    time: "2 hours ago",
    status: "acknowledged",
  },
  {
    id: 4,
    issue: "Low Humidity",
    zone: "Server Room",
    reported: "System Alert",
    time: "3 hours ago",
    status: "resolved",
  },
  {
    id: 5,
    issue: "Dim Lighting",
    zone: "Floor 2 Corridor",
    reported: "Emma Wilson",
    time: "5 hours ago",
    status: "resolved",
  },
  {
    id: 6,
    issue: "Draft",
    zone: "Main Entrance",
    reported: "Alex Rodriguez",
    time: "1 day ago",
    status: "scheduled",
  },
];

// Comfort preferences by zone
const comfortPreferences = [
  {
    zone: "Open Workspace",
    preferredTemp: 22.0,
    actualTemp: 22.5,
    tempDiff: "+0.5°C",
    lighting: "Medium",
    noise: "Quiet",
  },
  {
    zone: "Meeting Rooms",
    preferredTemp: 22.5,
    actualTemp: 23.2,
    tempDiff: "+0.7°C",
    lighting: "Bright",
    noise: "Moderate",
  },
  {
    zone: "Executive Floor",
    preferredTemp: 22.0,
    actualTemp: 22.0,
    tempDiff: "0.0°C",
    lighting: "Medium",
    noise: "Quiet",
  },
  {
    zone: "Cafeteria",
    preferredTemp: 23.0,
    actualTemp: 24.1,
    tempDiff: "+1.1°C",
    lighting: "Bright",
    noise: "Moderate",
  },
  {
    zone: "Library",
    preferredTemp: 21.5,
    actualTemp: 21.8,
    tempDiff: "+0.3°C",
    lighting: "Soft",
    noise: "Silent",
  },
  {
    zone: "Gym",
    preferredTemp: 20.0,
    actualTemp: 20.5,
    tempDiff: "+0.5°C",
    lighting: "Bright",
    noise: "Allowed",
  },
];

// Comfort factor distribution
const comfortFactors = [
  { factor: "Temperature", impact: 35, color: "#ef4444", icon: Thermometer },
  { factor: "Air Quality", impact: 25, color: "#10b981", icon: Leaf },
  { factor: "Lighting", impact: 20, color: "#f59e0b", icon: Sun },
  { factor: "Noise", impact: 15, color: "#3b82f6", icon: VolumeX },
  { factor: "Humidity", impact: 5, color: "#0ea5e9", icon: Droplets },
];

// Status badge component
const StatusBadge = ({ status }) => {
  const config = {
    excellent: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Excellent",
      Icon: CheckCircle2,
    },
    good: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Good",
      Icon: CheckCircle2,
    },
    fair: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Fair",
      Icon: AlertTriangle,
    },
    poor: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Poor",
      Icon: XCircle,
    },
    optimal: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Optimal",
      Icon: CheckCircle2,
    },
    resolved: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Resolved",
      Icon: CheckCircle2,
    },
    "in-progress": {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "In Progress",
      Icon: Activity,
    },
    acknowledged: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Acknowledged",
      Icon: Bell,
    },
    scheduled: {
      color: "bg-purple-100 text-purple-800 hover:bg-purple-100",
      label: "Scheduled",
      Icon: Calendar,
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

// Comfort gauge component
const ComfortGauge = ({ score, size = "medium" }) => {
  const getComfortColor = (score) => {
    if (score >= 8) return "bg-emerald-500";
    if (score >= 6) return "bg-blue-500";
    if (score >= 4) return "bg-amber-500";
    return "bg-red-500";
  };

  const getComfortTextColor = (score) => {
    if (score >= 8) return "text-emerald-600";
    if (score >= 6) return "text-blue-600";
    if (score >= 4) return "text-amber-600";
    return "text-red-600";
  };

  const getComfortLabel = (score) => {
    if (score >= 8) return "Excellent";
    if (score >= 6) return "Good";
    if (score >= 4) return "Fair";
    return "Poor";
  };

  const sizeClass = size === "large" ? "h-32 w-32" : "h-20 w-20";
  const textSize = size === "large" ? "text-3xl" : "text-xl";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className={`${textSize} font-bold ${getComfortTextColor(score)}`}
            >
              {score.toFixed(1)}
            </div>
            <div className="text-xs text-gray-600">/10</div>
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
            strokeDasharray={`${(score / 10) * 283} 283`}
            className={getComfortColor(score)}
          />
        </svg>
      </div>
      <div className="mt-2 text-center">
        <div className="text-sm font-medium text-gray-900">
          {getComfortLabel(score)}
        </div>
        <div className="text-xs text-gray-500">Comfort Level</div>
      </div>
    </div>
  );
};

// Zone comfort card component
const ZoneComfortCard = ({ zone }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-bold text-gray-900">{zone.zone}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Users className="h-3.5 w-3.5 text-gray-500" />
          <span className="text-sm text-gray-600">
            {zone.occupancy}% occupancy
          </span>
        </div>
      </div>
      <StatusBadge status={zone.status} />
    </div>

    <div className="flex justify-center my-6">
      <ComfortGauge score={zone.comfort} size="medium" />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Thermometer className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-600">Temp</span>
          </div>
          <span className="text-sm font-bold text-gray-900">{zone.temp}°C</span>
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
            <VolumeX className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-600">Noise</span>
          </div>
          <span className="text-sm font-bold text-gray-900">
            {zone.noise} dB
          </span>
        </div>
        <Progress
          value={Math.min(zone.noise, 100)}
          className="h-1.5"
          indicatorClassName={
            zone.noise > 65
              ? "bg-gradient-to-r from-red-500 to-orange-500"
              : zone.noise > 50
              ? "bg-gradient-to-r from-amber-500 to-yellow-500"
              : "bg-gradient-to-r from-blue-500 to-cyan-500"
          }
        />
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Leaf className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-600">AQI</span>
          </div>
          <span className="text-sm font-bold text-gray-900">
            {zone.airQuality}
          </span>
        </div>
        <Progress
          value={Math.min(zone.airQuality, 150)}
          className="h-1.5"
          indicatorClassName={
            zone.airQuality > 100
              ? "bg-gradient-to-r from-red-500 to-orange-500"
              : zone.airQuality > 75
              ? "bg-gradient-to-r from-amber-500 to-yellow-500"
              : "bg-gradient-to-r from-emerald-500 to-green-500"
          }
        />
      </div>
    </div>

    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
      <div className="text-xs text-gray-500">Last feedback: 2 hours ago</div>
      <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
        <Eye className="h-3.5 w-3.5 mr-1" />
        Details
      </Button>
    </div>
  </div>
);

// Parameter card component
const ParameterCard = ({ param }) => {
  const Icon = param.icon;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gray-100">
            <Icon className="h-4 w-4 text-gray-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">
            {param.parameter}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {param.trend === "up" ? (
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
          ) : param.trend === "down" ? (
            <TrendingDown className="h-3.5 w-3.5 text-red-500" />
          ) : (
            <Activity className="h-3.5 w-3.5 text-blue-500" />
          )}
        </div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-gray-900">
          {param.value}
          {param.unit}
        </div>
        <div className="text-sm text-gray-600">{param.parameter}</div>
      </div>

      <div className="flex justify-center mt-3">
        <StatusBadge status={param.status} />
      </div>
    </div>
  );
};

export default function BuildingComfort() {
  const [autoComfort, setAutoComfort] = useState(true);
  const [learningMode, setLearningMode] = useState(true);
  const [comfortLevel, setComfortLevel] = useState([75]);
  const [tempSetpoint, setTempSetpoint] = useState([22]);
  const [humiditySetpoint, setHumiditySetpoint] = useState([50]);
  const [lightingSetpoint, setLightingSetpoint] = useState([450]);
  const [noiseThreshold, setNoiseThreshold] = useState([55]);
  const [selectedZone, setSelectedZone] = useState("all");

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
            Building Comfort Intelligence
          </h1>
          <p className="text-gray-600 mt-2">
            Optimizing occupant comfort and environmental conditions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 shadow-sm">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
            <Plus className="h-4 w-4" />
            New Comfort Rule
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {comfortMetrics.map((metric, index) => {
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

      {/* Overall Comfort & Real-time Parameters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Comfort Gauge */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Overall Comfort Score
              </h2>
              <p className="text-gray-600 text-sm">
                Building-wide occupant comfort assessment
              </p>
            </div>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger className="w-32 shadow-sm">
                <SelectValue placeholder="Select zone" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">All Zones</SelectItem>
                <SelectItem value="workspace">Work Areas</SelectItem>
                <SelectItem value="meeting">Meeting Rooms</SelectItem>
                <SelectItem value="common">Common Areas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <ComfortGauge score={8.7} size="large" />
            </div>

            <div className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-700">
                      Excellent (8-10)
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    3 zones
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-700">Good (6-8)</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    1 zone
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-gray-700">Fair (4-6)</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    1 zone
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm text-gray-700">Poor (0-4)</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    1 zone
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-emerald-900">
                  Comfort Trend
                </div>
                <div className="text-lg font-bold text-emerald-900">
                  Improving (+5% this week)
                </div>
              </div>
              <TrendingUp className="h-6 w-6 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Real-time Parameters */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Real-time Comfort Parameters
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {comfortParameters.map((param, index) => (
                <ParameterCard key={index} param={param} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Zone Comfort & Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Zone Comfort Grid */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Zone Comfort Levels
              </h2>
              <p className="text-gray-600 text-sm">
                Comfort assessment by building zones
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 shadow-sm">
              <Filter className="h-3.5 w-3.5" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {zoneComfort.map((zone, index) => (
              <ZoneComfortCard key={index} zone={zone} />
            ))}
          </div>
        </div>

        {/* Comfort Trends */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Comfort Trends
              </h2>
              <p className="text-gray-600 text-sm">
                Daily comfort patterns and correlations
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
              <LineChart
                data={comfortTrends}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <defs>
                  <linearGradient
                    id="comfortGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
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
                  dataKey="comfort"
                  name="Comfort Score"
                  stroke="#3b82f6"
                  fill="url(#comfortGradient)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  name="Temperature (°C)"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="noise"
                  name="Noise Level (dB)"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Comfort Control & Issues */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Comfort Control Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Comfort Control Panel
            </h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-gray-900">
                    Auto Comfort Mode
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Automatically adjust conditions for optimal comfort
                  </p>
                </div>
                <Switch
                  checked={autoComfort}
                  onCheckedChange={setAutoComfort}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-gray-900">
                    Learning Mode
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Learn and adapt to occupant preferences
                  </p>
                </div>
                <Switch
                  checked={learningMode}
                  onCheckedChange={setLearningMode}
                  className="data-[state=checked]:bg-blue-500"
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="font-semibold text-gray-900">
                    Comfort Level Priority
                  </Label>
                  <span className="font-bold text-amber-600">
                    {comfortLevel[0]}%
                  </span>
                </div>
                <Slider
                  value={comfortLevel}
                  onValueChange={setComfortLevel}
                  min={0}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Energy Saver</span>
                  <span>Balanced</span>
                  <span>Max Comfort</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Temperature
                    </Label>
                    <span className="font-bold text-red-600">
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
                      Humidity
                    </Label>
                    <span className="font-bold text-cyan-600">
                      {humiditySetpoint[0]}%
                    </span>
                  </div>
                  <Slider
                    value={humiditySetpoint}
                    onValueChange={setHumiditySetpoint}
                    min={30}
                    max={70}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Lighting
                    </Label>
                    <span className="font-bold text-amber-600">
                      {lightingSetpoint[0]} lux
                    </span>
                  </div>
                  <Slider
                    value={lightingSetpoint}
                    onValueChange={setLightingSetpoint}
                    min={100}
                    max={1000}
                    step={50}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Noise Threshold
                    </Label>
                    <span className="font-bold text-blue-600">
                      {noiseThreshold[0]} dB
                    </span>
                  </div>
                  <Slider
                    value={noiseThreshold}
                    onValueChange={setNoiseThreshold}
                    min={30}
                    max={80}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>

              <Button className="w-full h-11 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg">
                Apply Comfort Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Comfort Issues */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Comfort Issues
              </h2>
              <p className="text-gray-600 text-sm">
                Reported comfort complaints and issues
              </p>
            </div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              3 Active
            </Badge>
          </div>

          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {comfortIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-1.5 rounded-full mt-0.5 ${
                          issue.status === "resolved"
                            ? "bg-emerald-100"
                            : issue.status === "in-progress"
                            ? "bg-blue-100"
                            : "bg-amber-100"
                        }`}
                      >
                        {issue.status === "resolved" ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        ) : issue.status === "in-progress" ? (
                          <Activity className="h-4 w-4 text-blue-600" />
                        ) : (
                          <Bell className="h-4 w-4 text-amber-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {issue.issue}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {issue.zone}
                          </div>
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={issue.status} />
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      Reported by: {issue.reported}
                    </div>
                    <div className="text-xs text-gray-500">{issue.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Comfort Analysis & Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Comfort Factor Analysis */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Comfort Factor Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={comfortFactors}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="impact"
                    label={(entry) => `${entry.factor} ${entry.impact}%`}
                  >
                    {comfortFactors.map((entry, index) => (
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
              {comfortFactors.map((factor, index) => {
                const Icon = factor.icon;
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
                        {factor.factor}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">
                        {factor.impact}%
                      </span>
                      <div className="text-xs text-gray-500">
                        Comfort impact
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Comfort Preferences */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Comfort Preferences
              </h2>
              <p className="text-gray-600 text-sm">
                Zone-specific comfort settings and deviations
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 shadow-sm">
              <Settings2 className="h-3.5 w-3.5" />
              Manage
            </Button>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-amber-50 to-orange-50 hover:bg-gray-100">
                  <TableHead className="font-semibold text-gray-900">
                    Zone
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Preferred Temp
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Actual Temp
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Difference
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Lighting
                  </TableHead>
                  <TableHead className="font-semibold text-gray-900">
                    Noise
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comfortPreferences.map((pref, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <TableCell className="font-medium text-gray-900">
                      {pref.zone}
                    </TableCell>
                    <TableCell className="text-gray-900">
                      {pref.preferredTemp}°C
                    </TableCell>
                    <TableCell className="text-gray-900">
                      {pref.actualTemp}°C
                    </TableCell>
                    <TableCell>
                      <div
                        className={`flex items-center gap-1 ${
                          Math.abs(parseFloat(pref.tempDiff)) > 1
                            ? "text-red-600"
                            : Math.abs(parseFloat(pref.tempDiff)) > 0.5
                            ? "text-amber-600"
                            : "text-emerald-600"
                        }`}
                      >
                        {parseFloat(pref.tempDiff) > 0 ? (
                          <TrendingUp className="h-3.5 w-3.5" />
                        ) : parseFloat(pref.tempDiff) < 0 ? (
                          <TrendingDown className="h-3.5 w-3.5" />
                        ) : (
                          <Activity className="h-3.5 w-3.5" />
                        )}
                        <span className="font-medium">{pref.tempDiff}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          pref.lighting === "Bright"
                            ? "border-amber-200 text-amber-700 bg-amber-50"
                            : pref.lighting === "Medium"
                            ? "border-blue-200 text-blue-700 bg-blue-50"
                            : "border-gray-200 text-gray-700"
                        }
                      >
                        {pref.lighting}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          pref.noise === "Silent"
                            ? "border-emerald-200 text-emerald-700 bg-emerald-50"
                            : pref.noise === "Quiet"
                            ? "border-blue-200 text-blue-700 bg-blue-50"
                            : pref.noise === "Moderate"
                            ? "border-amber-200 text-amber-700 bg-amber-50"
                            : "border-red-200 text-red-700 bg-red-50"
                        }
                      >
                        {pref.noise}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Comfort Recommendations */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Comfort Recommendations
            </h2>
            <p className="text-gray-600 text-sm">
              AI-powered suggestions for improving occupant comfort
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 shadow-sm">
              <Heart className="h-4 w-4" />
              Feedback Survey
            </Button>
            <Button className="gap-2 shadow-sm bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600">
              <CheckCircle2 className="h-4 w-4" />
              Apply All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100">
            <div className="flex items-start gap-3">
              <Thermometer className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <div className="font-semibold text-amber-900">
                  Adjust Temperature
                </div>
                <p className="text-sm text-amber-700 mt-1">
                  Reduce temperature in Cafeteria by 1.1°C to match preferences
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-amber-600">Priority: High</span>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                Apply
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <div className="flex items-start gap-3">
              <VolumeX className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <div className="font-semibold text-blue-900">Noise Control</div>
                <p className="text-sm text-blue-700 mt-1">
                  Install acoustic panels in Open Workspace to reduce noise by
                  15%
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-blue-600">Priority: Medium</span>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                Schedule
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
            <div className="flex items-start gap-3">
              <Leaf className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <div className="font-semibold text-emerald-900">
                  Air Quality
                </div>
                <p className="text-sm text-emerald-700 mt-1">
                  Increase ventilation in Parking Garage during peak hours
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-emerald-600">Priority: Medium</span>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                Configure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
