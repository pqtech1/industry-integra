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
  Users,
  User,
  Home,
  Building,
  DoorOpen,
  DoorClosed,
  Calendar,
  Clock,
  MapPin,
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
  Zap,
  Thermometer,
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
  Filter,
  Search,
  Users as UsersIcon,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Building2,
  Home as HomeIcon,
  Layers,
  PieChart,
  LineChart,
  AreaChart,
  Settings,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download as DownloadIcon,
  Upload,
  Share,
  MessageSquare,
  Phone,
  Mail,
  Heart,
  Star,
  ThumbsUp,
  Award,
  Trophy,
  Shield,
  ShieldAlert,
  Battery,
  Cloud,
  Sun,
  Moon,
  Sunrise,
  Sunset,
} from "lucide-react";
import {
  LineChart as RechartsLine,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart as RechartsArea,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell,
  ComposedChart,
} from "recharts";

// Occupancy Metrics
const occupancyMetrics = [
  {
    title: "Current Occupancy",
    value: "1,245",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Capacity Used",
    value: "68%",
    change: "+8%",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Peak Today",
    value: "1,520",
    change: "+15%",
    icon: TrendingUp,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Avg Stay Time",
    value: "4.2h",
    change: "-5%",
    icon: Clock,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Visitor Count",
    value: "85",
    change: "+23%",
    icon: UserPlus,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Space Utilization",
    value: "72%",
    change: "+4%",
    icon: Home,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

// Zone Occupancy Data
const zoneOccupancy = [
  {
    zone: "Executive Floor",
    current: 85,
    capacity: 100,
    density: "medium",
    trend: "up",
    visitors: 12,
    type: "office",
  },
  {
    zone: "Open Workspace",
    current: 92,
    capacity: 120,
    density: "high",
    trend: "up",
    visitors: 25,
    type: "office",
  },
  {
    zone: "Meeting Rooms",
    current: 65,
    capacity: 80,
    density: "medium",
    trend: "stable",
    visitors: 18,
    type: "conference",
  },
  {
    zone: "Cafeteria",
    current: 85,
    capacity: 150,
    density: "medium",
    trend: "up",
    visitors: 15,
    type: "common",
  },
  {
    zone: "Lobby",
    current: 45,
    capacity: 60,
    density: "low",
    trend: "stable",
    visitors: 8,
    type: "common",
  },
  {
    zone: "Server Room",
    current: 0,
    capacity: 5,
    density: "low",
    trend: "stable",
    visitors: 0,
    type: "technical",
  },
  {
    zone: "Parking Garage",
    current: 15,
    capacity: 200,
    density: "low",
    trend: "down",
    visitors: 3,
    type: "utility",
  },
];

// Occupancy History
const occupancyHistory = [
  { time: "00:00", occupancy: 35, visitors: 2, capacity: 35 },
  { time: "02:00", occupancy: 25, visitors: 1, capacity: 25 },
  { time: "04:00", occupancy: 20, visitors: 0, capacity: 20 },
  { time: "06:00", occupancy: 45, visitors: 5, capacity: 45 },
  { time: "08:00", occupancy: 650, visitors: 85, capacity: 72 },
  { time: "10:00", occupancy: 1250, visitors: 120, capacity: 92 },
  { time: "12:00", occupancy: 1420, visitors: 145, capacity: 95 },
  { time: "14:00", occupancy: 1380, visitors: 130, capacity: 94 },
  { time: "16:00", occupancy: 1320, visitors: 125, capacity: 93 },
  { time: "18:00", occupancy: 850, visitors: 95, capacity: 82 },
  { time: "20:00", occupancy: 420, visitors: 35, capacity: 65 },
  { time: "22:00", occupancy: 180, visitors: 15, capacity: 45 },
];

// Occupancy Alerts
const occupancyAlerts = [
  {
    id: 1,
    type: "warning",
    title: "High Density Alert",
    location: "Open Workspace",
    value: "92%",
    time: "15 min ago",
  },
  {
    id: 2,
    type: "info",
    title: "Meeting Room Booking",
    location: "Conference Room A",
    value: "Starting soon",
    time: "30 min ago",
  },
  {
    id: 3,
    type: "critical",
    title: "Emergency Exit Blocked",
    location: "Floor 3 - North Exit",
    value: "Needs Clearance",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "warning",
    title: "Low Utilization",
    location: "Parking Garage",
    value: "15%",
    time: "2 hours ago",
  },
  {
    id: 5,
    type: "info",
    title: "Visitor Check-in",
    location: "Main Lobby",
    value: "Group of 8",
    time: "3 hours ago",
  },
];

// Visitor Data
const visitorData = [
  {
    name: "John Smith",
    company: "TechCorp",
    checkin: "08:30",
    checkout: "17:45",
    purpose: "Meeting",
    host: "Sarah M.",
    status: "checked-in",
  },
  {
    name: "Emma Wilson",
    company: "Innovate Inc",
    checkin: "09:15",
    checkout: "16:30",
    purpose: "Client Visit",
    host: "Mike R.",
    status: "checked-in",
  },
  {
    name: "David Chen",
    company: "Global Tech",
    checkin: "10:00",
    purpose: "Interview",
    host: "HR Team",
    status: "checked-in",
  },
  {
    name: "Lisa Taylor",
    company: "Design Studio",
    checkin: "13:45",
    checkout: "15:30",
    purpose: "Workshop",
    host: "Team A",
    status: "checked-out",
  },
  {
    name: "Robert Kim",
    company: "Finance Plus",
    checkin: "11:20",
    purpose: "Business Lunch",
    host: "Executive Team",
    status: "checked-in",
  },
  {
    name: "Sophia Lee",
    company: "Marketing Pro",
    checkin: "14:00",
    purpose: "Presentation",
    host: "Marketing",
    status: "checked-in",
  },
];

// Space Utilization
const spaceUtilization = [
  { space: "Desks", utilized: 285, total: 400, utilization: 71, trend: "up" },
  {
    space: "Meeting Rooms",
    utilized: 18,
    total: 25,
    utilization: 72,
    trend: "stable",
  },
  {
    space: "Parking Spots",
    utilized: 45,
    total: 200,
    utilization: 23,
    trend: "down",
  },
  {
    space: "Break Areas",
    utilized: 65,
    total: 80,
    utilization: 81,
    trend: "up",
  },
  {
    space: "Phone Booths",
    utilized: 8,
    total: 12,
    utilization: 67,
    trend: "stable",
  },
  {
    space: "Collaboration Zones",
    utilized: 35,
    total: 50,
    utilization: 70,
    trend: "up",
  },
];

// Daily Pattern
const dailyPattern = [
  { hour: "8 AM", occupancy: 650, visitors: 85 },
  { hour: "9 AM", occupancy: 980, visitors: 120 },
  { hour: "10 AM", occupancy: 1250, visitors: 145 },
  { hour: "11 AM", occupancy: 1380, visitors: 155 },
  { hour: "12 PM", occupancy: 1420, visitors: 165 },
  { hour: "1 PM", occupancy: 1320, visitors: 150 },
  { hour: "2 PM", occupancy: 1380, visitors: 160 },
  { hour: "3 PM", occupancy: 1340, visitors: 155 },
  { hour: "4 PM", occupancy: 1280, visitors: 140 },
  { hour: "5 PM", occupancy: 950, visitors: 110 },
  { hour: "6 PM", occupancy: 620, visitors: 75 },
];

// Status Badge Component
const StatusBadge = ({ status }) => {
  const config = {
    "checked-in": {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Checked In",
      Icon: UserCheck,
    },
    "checked-out": {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Checked Out",
      Icon: UserX,
    },
    active: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Active",
      Icon: Activity,
    },
    scheduled: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Scheduled",
      Icon: Calendar,
    },
    completed: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Completed",
      Icon: CheckCircle2,
    },
    high: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "High Density",
      Icon: AlertTriangle,
    },
    medium: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Medium",
      Icon: AlertTriangle,
    },
    low: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Low",
      Icon: Info,
    },
    up: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Increasing",
      Icon: TrendingUp,
    },
    down: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Decreasing",
      Icon: TrendingDown,
    },
    stable: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Stable",
      Icon: Minus,
    },
  };

  const badgeConfig = config[status] || config.active;
  const { Icon } = badgeConfig;

  return (
    <Badge
      variant="secondary"
      className={`${badgeConfig.color} gap-1.5 px-3 py-1 cursor-pointer`}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-medium">{badgeConfig.label}</span>
    </Badge>
  );
};

// Minus icon component
const Minus = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

// Info icon component
const Info = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Occupancy Gauge Component
const OccupancyGauge = ({ value, max = 100, label, size = "medium" }) => {
  const percentage = (value / max) * 100;

  const getGaugeColor = () => {
    if (percentage <= 33) return "bg-emerald-500";
    if (percentage <= 66) return "bg-blue-500";
    if (percentage <= 85) return "bg-amber-500";
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
    <div className="flex flex-col items-center cursor-pointer">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`${textSize} font-bold text-gray-900`}>{value}</div>
            <div className="text-xs text-gray-600">of {max}</div>
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
      <div className="mt-2 text-center">
        <div className="text-sm font-medium text-gray-900">{label}</div>
        <div className="text-xs text-gray-500">
          {percentage.toFixed(0)}% capacity
        </div>
      </div>
    </div>
  );
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 cursor-pointer">
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
              {entry.value} {entry.name === "visitors" ? "visitors" : "people"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function BuildingOccupancy() {
  const [autoTracking, setAutoTracking] = useState(true);
  const [densityAlerts, setDensityAlerts] = useState(true);
  const [visitorTracking, setVisitorTracking] = useState(true);
  const [capacityLimit, setCapacityLimit] = useState([80]);
  const [selectedZone, setSelectedZone] = useState("all");
  const [timeRange, setTimeRange] = useState("today");
  const [viewMode, setViewMode] = useState("real-time");

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Building Occupancy & Space Management
          </h1>
          <p className="text-gray-600 mt-2">
            Real-time occupancy tracking and space utilization analytics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <DownloadIcon className="h-4 w-4" />
            Export Data
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-md transition-all cursor-pointer">
            <UserPlus className="h-4 w-4" />
            Check-in Visitor
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {occupancyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
                        ? "text-emerald-600 border-emerald-200 bg-emerald-50 cursor-pointer"
                        : metric.change.startsWith("-")
                        ? "text-blue-600 border-blue-200 bg-blue-50 cursor-pointer"
                        : "text-gray-600 border-gray-200 cursor-pointer"
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

      {/* Real-time Overview & Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Occupancy Overview */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Real-time Occupancy Overview
                </h2>
                <p className="text-gray-600 text-sm">
                  Live building occupancy and patterns
                </p>
              </div>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32 shadow-sm cursor-pointer">
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
                <ComposedChart
                  data={occupancyHistory}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="time" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="occupancy"
                    name="Occupancy"
                    fill="url(#occupancyGradient)"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                  />
                  <Bar
                    dataKey="visitors"
                    name="Visitors"
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    type="monotone"
                    dataKey="capacity"
                    name="Capacity %"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <defs>
                    <linearGradient
                      id="occupancyGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-indigo-50 rounded-xl border border-indigo-100 cursor-pointer">
                <div className="text-lg font-bold text-indigo-700">1,245</div>
                <div className="text-xs text-indigo-600">Current Occupancy</div>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100 cursor-pointer">
                <div className="text-lg font-bold text-emerald-700">1,520</div>
                <div className="text-xs text-emerald-600">Peak Today</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100 cursor-pointer">
                <div className="text-lg font-bold text-blue-700">85</div>
                <div className="text-xs text-blue-600">Active Visitors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Occupancy Control Panel
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-gray-900">
                    Auto Tracking
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Automatically track occupancy
                  </p>
                </div>
                <Switch
                  checked={autoTracking}
                  onCheckedChange={setAutoTracking}
                  className="data-[state=checked]:bg-emerald-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-gray-900">
                    Density Alerts
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Alert on high density areas
                  </p>
                </div>
                <Switch
                  checked={densityAlerts}
                  onCheckedChange={setDensityAlerts}
                  className="data-[state=checked]:bg-amber-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-gray-900">
                    Visitor Tracking
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Track visitor movements
                  </p>
                </div>
                <Switch
                  checked={visitorTracking}
                  onCheckedChange={setVisitorTracking}
                  className="data-[state=checked]:bg-blue-500 cursor-pointer"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="font-semibold text-gray-900">
                  Capacity Limit
                </Label>
                <span className="font-bold text-indigo-600">
                  {capacityLimit[0]}%
                </span>
              </div>
              <Slider
                value={capacityLimit}
                onValueChange={setCapacityLimit}
                min={50}
                max={100}
                step={5}
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <Label className="font-semibold text-gray-900 mb-3 block">
                View Mode
              </Label>
              <Select value={viewMode} onValueChange={setViewMode}>
                <SelectTrigger className="w-full shadow-sm cursor-pointer">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="real-time">Real-time</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="heatmap">Heat Map</SelectItem>
                  <SelectItem value="reports">Reports</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full h-11 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg cursor-pointer">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Apply Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Zone Occupancy & Visitor Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Zone Occupancy */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Zone Occupancy Status
              </h2>
              <p className="text-gray-600 text-sm">
                Real-time occupancy by building zone
              </p>
            </div>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger className="w-40 shadow-sm cursor-pointer">
                <SelectValue placeholder="Filter zones" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">All Zones</SelectItem>
                <SelectItem value="office">Office Areas</SelectItem>
                <SelectItem value="common">Common Areas</SelectItem>
                <SelectItem value="technical">Technical Areas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {zoneOccupancy.map((zone, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      zone.density === "high"
                        ? "bg-red-100"
                        : zone.density === "medium"
                        ? "bg-amber-100"
                        : "bg-blue-100"
                    }`}
                  >
                    <MapPin
                      className={`h-5 w-5 ${
                        zone.density === "high"
                          ? "text-red-600"
                          : zone.density === "medium"
                          ? "text-amber-600"
                          : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{zone.zone}</div>
                    <div className="text-sm text-gray-500">
                      Capacity: {zone.capacity}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-indigo-500" />
                      <span className="font-bold text-gray-900">
                        {zone.current}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Current</div>
                  </div>
                  <div className="text-center">
                    <UserPlus className="h-4 w-4 text-cyan-500 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">
                      {zone.visitors}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <StatusBadge status={zone.density} />
                    <StatusBadge status={zone.trend} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visitor Management */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Visitor Management
              </h2>
              <p className="text-gray-600 text-sm">
                Active and recent visitors
              </p>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 cursor-pointer">
              4 Active
            </Badge>
          </div>

          <div className="space-y-4">
            {visitorData.map((visitor, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      visitor.status === "checked-in"
                        ? "bg-emerald-100"
                        : "bg-blue-100"
                    }`}
                  >
                    <User
                      className={`h-5 w-5 ${
                        visitor.status === "checked-in"
                          ? "text-emerald-600"
                          : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {visitor.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {visitor.company}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Check-in</div>
                      <div className="font-bold text-gray-900">
                        {visitor.checkin}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Purpose</div>
                      <div className="text-sm font-medium text-gray-900">
                        {visitor.purpose}
                      </div>
                    </div>
                    <StatusBadge status={visitor.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-blue-900">
                  Total Visitors Today
                </div>
                <div className="text-2xl font-bold text-blue-900">85</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-700">Avg Stay Time</div>
                <div className="text-xs text-blue-600">4.2 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Space Utilization & Daily Pattern */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Space Utilization */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Space Utilization
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={spaceUtilization}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="space" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip
                  formatter={(value, name) => [
                    `${value} ${name === "utilization" ? "%" : ""}`,
                    name === "utilization" ? "Utilization" : "Spaces",
                  ]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="utilization"
                  name="Utilization %"
                  fill="#8b5cf6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-indigo-50 rounded-xl border border-indigo-100 cursor-pointer">
              <div className="text-lg font-bold text-indigo-700">72%</div>
              <div className="text-xs text-indigo-600">Avg Utilization</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100 cursor-pointer">
              <div className="text-lg font-bold text-emerald-700">285/400</div>
              <div className="text-xs text-emerald-600">Desks Used</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100 cursor-pointer">
              <div className="text-lg font-bold text-blue-700">81%</div>
              <div className="text-xs text-blue-600">Break Areas</div>
            </div>
          </div>
        </div>

        {/* Daily Occupancy Pattern */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Daily Occupancy Pattern
              </h2>
              <p className="text-gray-600 text-sm">
                Typical occupancy throughout the day
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              Compare Days
            </Button>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsArea
                data={dailyPattern}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="occupancy"
                  name="Occupancy"
                  fill="url(#patternGradient)"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  name="Visitors"
                  fill="url(#visitorGradient)"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient
                    id="patternGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="visitorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </RechartsArea>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-amber-100">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-amber-900">
                    Peak Hours
                  </div>
                  <div className="text-xs text-amber-700">
                    11 AM - 2 PM (Highest occupancy)
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-amber-900">1,420</div>
                <div className="text-xs text-amber-700">Peak Count</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Occupancy Alerts & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Occupancy Alerts */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Occupancy Alerts
              </h2>
              <p className="text-gray-600 text-sm">
                Real-time notifications and alerts
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 cursor-pointer">
                2 Warnings
              </Badge>
              <Badge className="bg-red-100 text-red-700 hover:bg-red-100 cursor-pointer">
                1 Critical
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            {occupancyAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-xl border ${
                  alert.type === "critical"
                    ? "border-red-200 bg-red-50 hover:bg-red-100"
                    : alert.type === "warning"
                    ? "border-amber-200 bg-amber-50 hover:bg-amber-100"
                    : "border-blue-200 bg-blue-50 hover:bg-blue-100"
                } transition-colors cursor-pointer`}
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
                            ? "border-red-200 text-red-700 bg-red-100 cursor-pointer"
                            : alert.type === "warning"
                            ? "border-amber-200 text-amber-700 bg-amber-100 cursor-pointer"
                            : "border-blue-200 text-blue-700 bg-blue-100 cursor-pointer"
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

            <div className="p-4 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition-colors cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-emerald-100">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    All Zones Within Capacity
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    No capacity violations detected
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 cursor-pointer">
                      Normal
                    </Badge>
                    <span className="text-xs text-gray-500">
                      Last checked: 5 min ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
              <p className="text-gray-600 text-sm">
                Common occupancy management tasks
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Settings className="h-3.5 w-3.5" />
              More Actions
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 hover:from-indigo-100 hover:to-purple-100 cursor-pointer">
              <UserPlus className="h-6 w-6 text-indigo-600" />
              <span className="font-semibold text-gray-900">Check-in</span>
              <span className="text-xs text-gray-600">New visitor</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:from-blue-100 hover:to-cyan-100 cursor-pointer">
              <DoorOpen className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-900">Open Area</span>
              <span className="text-xs text-gray-600">Unlock zone</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 hover:from-emerald-100 hover:to-green-100 cursor-pointer">
              <BarChart3 className="h-6 w-6 text-emerald-600" />
              <span className="font-semibold text-gray-900">Reports</span>
              <span className="text-xs text-gray-600">Generate reports</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:from-amber-100 hover:to-orange-100 cursor-pointer">
              <Bell className="h-6 w-6 text-amber-600" />
              <span className="font-semibold text-gray-900">Alerts</span>
              <span className="text-xs text-gray-600">Configure alerts</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 hover:from-red-100 hover:to-pink-100 cursor-pointer">
              <ShieldAlert className="h-6 w-6 text-red-600" />
              <span className="font-semibold text-gray-900">Emergency</span>
              <span className="text-xs text-gray-600">Evacuation mode</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:from-purple-100 hover:to-pink-100 cursor-pointer">
              <Eye className="h-6 w-6 text-purple-600" />
              <span className="font-semibold text-gray-900">Monitor</span>
              <span className="text-xs text-gray-600">Live monitoring</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
