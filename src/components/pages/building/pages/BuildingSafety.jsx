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
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  MapPin,
  Home,
  Building,
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
  Camera,
  Video,
  Mic,
  MicOff,
  DoorOpen,
  DoorClosed,
  Key,
  Fingerprint,
  QrCode,
  Radio,
  Megaphone,
  Siren,
  // Replaced FirstAid with Cross
  Cross,
  Wind,
  Droplets,
  Flame,
  Cloud,
  Battery,
  Settings,
  Users as UsersIcon,
  User,
  UserCheck,
  UserX,
  MessageSquare,
  Phone,
  Mail,
  HardHat,
  Award,
  Trophy,
  Star,
  Heart,
  ThumbsUp,
  FileText,
  // Added PlusCircle for check-in
  PlusCircle,
  // Added AlertOctagon for emergency
  AlertOctagon,
  // Added LockKeyhole for lockdown
  LockKeyhole,
  // Added VolumeX for PA system
  VolumeX,
  // Added FileWarning for reports
  FileWarning,
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

// Safety Metrics
const safetyMetrics = [
  {
    title: "Safety Score",
    value: "94%",
    change: "+2%",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Active Alerts",
    value: "3",
    change: "-1",
    icon: ShieldAlert,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Cameras Online",
    value: "48/50",
    change: "+2",
    icon: Camera,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Access Denied",
    value: "12",
    change: "-4",
    icon: DoorClosed,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Emergency Calls",
    value: "0",
    change: "0",
    icon: Phone,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Fire System",
    value: "100%",
    change: "Stable",
    icon: Flame,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

// Security Zones
const securityZones = [
  {
    zone: "Main Entrance",
    status: "secure",
    cameras: 4,
    access: "controlled",
    alerts: 0,
    lastCheck: "5 min ago",
  },
  {
    zone: "Executive Floor",
    status: "secure",
    cameras: 6,
    access: "restricted",
    alerts: 1,
    lastCheck: "10 min ago",
  },
  {
    zone: "Server Room",
    status: "critical",
    cameras: 3,
    access: "biometric",
    alerts: 2,
    lastCheck: "2 min ago",
  },
  {
    zone: "Parking Garage",
    status: "warning",
    cameras: 8,
    access: "open",
    alerts: 3,
    lastCheck: "15 min ago",
  },
  {
    zone: "Cafeteria",
    status: "secure",
    cameras: 2,
    access: "open",
    alerts: 0,
    lastCheck: "30 min ago",
  },
  {
    zone: "Loading Dock",
    status: "secure",
    cameras: 3,
    access: "controlled",
    alerts: 1,
    lastCheck: "20 min ago",
  },
];

// Safety Incidents
const safetyIncidents = [
  {
    id: "INC-2024-001",
    type: "security",
    title: "Unauthorized Access Attempt",
    location: "Floor 3 - Server Room",
    severity: "high",
    status: "investigating",
    time: "1 hour ago",
  },
  {
    id: "INC-2024-002",
    type: "fire",
    title: "Fire Alarm Test",
    location: "Building-wide",
    severity: "low",
    status: "resolved",
    time: "2 hours ago",
  },
  {
    id: "INC-2024-003",
    type: "safety",
    title: "Emergency Exit Blocked",
    location: "Floor 2 - East Wing",
    severity: "medium",
    status: "in-progress",
    time: "3 hours ago",
  },
  {
    id: "INC-2024-004",
    type: "access",
    title: "Access Card Mismatch",
    location: "Main Entrance",
    severity: "low",
    status: "resolved",
    time: "5 hours ago",
  },
  {
    id: "INC-2024-005",
    type: "camera",
    title: "Camera Offline",
    location: "Parking Level B2",
    severity: "medium",
    status: "pending",
    time: "6 hours ago",
  },
  {
    id: "INC-2024-006",
    type: "environment",
    title: "High CO2 Levels",
    location: "Basement Storage",
    severity: "high",
    status: "monitoring",
    time: "8 hours ago",
  },
];

// Security Cameras
const securityCameras = [
  {
    id: "CAM-01",
    location: "Main Lobby",
    status: "online",
    recording: true,
    battery: 95,
    lastMotion: "2 min ago",
  },
  {
    id: "CAM-02",
    location: "Parking Entrance",
    status: "online",
    recording: true,
    battery: 88,
    lastMotion: "5 min ago",
  },
  {
    id: "CAM-03",
    location: "Server Room",
    status: "offline",
    recording: false,
    battery: 45,
    lastMotion: "2 hours ago",
  },
  {
    id: "CAM-04",
    location: "Floor 3 Corridor",
    status: "online",
    recording: true,
    battery: 92,
    lastMotion: "10 min ago",
  },
  {
    id: "CAM-05",
    location: "Roof Access",
    status: "online",
    recording: true,
    battery: 78,
    lastMotion: "15 min ago",
  },
  {
    id: "CAM-06",
    location: "Loading Dock",
    status: "warning",
    recording: false,
    battery: 32,
    lastMotion: "1 hour ago",
  },
];

// Safety Alerts
const safetyAlerts = [
  {
    id: 1,
    type: "critical",
    title: "Server Room Intrusion",
    location: "Floor 3",
    value: "Unauthorized access",
    time: "5 min ago",
  },
  {
    id: 2,
    type: "warning",
    title: "Fire Extinguisher Expiry",
    location: "Floor 2 Kitchen",
    value: "Expires in 7 days",
    time: "2 hours ago",
  },
  {
    id: 3,
    type: "info",
    title: "Emergency Drill Scheduled",
    location: "All Floors",
    value: "Tomorrow 10 AM",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "warning",
    title: "Camera Offline",
    location: "Parking B2",
    value: "Needs maintenance",
    time: "2 days ago",
  },
  {
    id: 5,
    type: "info",
    title: "Security System Update",
    location: "All Systems",
    value: "Completed",
    time: "3 days ago",
  },
];

// Emergency Systems
const emergencySystems = [
  {
    system: "Fire Alarm",
    status: "operational",
    lastTest: "Jan 15",
    battery: 98,
    coverage: "100%",
  },
  {
    system: "Sprinklers",
    status: "operational",
    lastTest: "Jan 10",
    battery: 95,
    coverage: "95%",
  },
  {
    system: "Emergency Lighting",
    status: "warning",
    lastTest: "Dec 28",
    battery: 65,
    coverage: "85%",
  },
  {
    system: "PA System",
    status: "operational",
    lastTest: "Jan 5",
    battery: 92,
    coverage: "90%",
  },
  {
    system: "Emergency Exits",
    status: "critical",
    lastTest: "Nov 30",
    battery: 40,
    coverage: "70%",
  },
  {
    system: "Medical Kits",
    status: "operational",
    lastTest: "Jan 20",
    battery: 100,
    coverage: "100%",
  },
];

// Access Logs
const accessLogs = [
  {
    time: "08:15",
    user: "John Doe",
    location: "Main Entrance",
    access: "granted",
    method: "card",
  },
  {
    time: "08:30",
    user: "Sarah Smith",
    location: "Executive Floor",
    access: "granted",
    method: "biometric",
  },
  {
    time: "09:45",
    user: "Visitor - TechCorp",
    location: "Lobby",
    access: "granted",
    method: "temporary",
  },
  {
    time: "10:20",
    user: "Unknown",
    location: "Server Room",
    access: "denied",
    method: "card",
  },
  {
    time: "11:05",
    user: "Mike Johnson",
    location: "Parking Garage",
    access: "granted",
    method: "card",
  },
  {
    time: "12:30",
    user: "Emergency Team",
    location: "All Areas",
    access: "granted",
    method: "override",
  },
];

// Status Badge Component
const StatusBadge = ({ status }) => {
  const config = {
    secure: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Secure",
      Icon: ShieldCheck,
    },
    warning: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Warning",
      Icon: AlertTriangle,
    },
    critical: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Critical",
      Icon: ShieldAlert,
    },
    operational: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Operational",
      Icon: CheckCircle2,
    },
    investigating: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Investigating",
      Icon: Eye,
    },
    resolved: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Resolved",
      Icon: CheckCircle2,
    },
    "in-progress": {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "In Progress",
      Icon: Clock,
    },
    pending: {
      color: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      label: "Pending",
      Icon: Clock,
    },
    monitoring: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Monitoring",
      Icon: Eye,
    },
    online: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Online",
      Icon: CheckCircle2,
    },
    offline: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Offline",
      Icon: XCircle,
    },
    high: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "High",
      Icon: AlertCircle,
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
  };

  const badgeConfig = config[status] || config.secure;
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

// Safety Gauge Component
const SafetyGauge = ({ value, label, size = "medium" }) => {
  const getGaugeColor = () => {
    if (value >= 90) return "bg-emerald-500";
    if (value >= 75) return "bg-blue-500";
    if (value >= 60) return "bg-amber-500";
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
            <div className={`${textSize} font-bold text-gray-900`}>
              {value}%
            </div>
            <div className="text-xs text-gray-600">Safety</div>
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
            strokeDasharray={`${(value / 100) * 283} 283`}
            className={getGaugeColor()}
          />
        </svg>
      </div>
      <div className="mt-2 text-center">
        <div className="text-sm font-medium text-gray-900">{label}</div>
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
              {entry.value} {entry.name === "incidents" ? "incidents" : "%"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function BuildingSafety() {
  const [securityMode, setSecurityMode] = useState("normal");
  const [cameraMonitoring, setCameraMonitoring] = useState(true);
  const [accessControl, setAccessControl] = useState(true);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [selectedZone, setSelectedZone] = useState("all");
  const [alertLevel, setAlertLevel] = useState("medium");
  const [timeRange, setTimeRange] = useState("today");

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Building Safety & Security
          </h1>
          <p className="text-gray-600 mt-2">
            Comprehensive safety monitoring and security management
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 hover:shadow-md transition-all cursor-pointer">
            <AlertOctagon className="h-4 w-4" />
            Emergency Override
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {safetyMetrics.map((metric, index) => {
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

      {/* Security Overview & Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Overview */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Security Overview
                </h2>
                <p className="text-gray-600 text-sm">
                  Real-time security status and incidents
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

            <div className="space-y-4">
              {securityZones.map((zone, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        zone.status === "secure"
                          ? "bg-emerald-100"
                          : zone.status === "warning"
                          ? "bg-amber-100"
                          : "bg-red-100"
                      }`}
                    >
                      <Shield
                        className={`h-5 w-5 ${
                          zone.status === "secure"
                            ? "text-emerald-600"
                            : zone.status === "warning"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {zone.zone}
                      </div>
                      <div className="text-sm text-gray-500 mt-1 flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Camera className="h-3 w-3" />
                          <span>{zone.cameras} cameras</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Key className="h-3 w-3" />
                          <span>{zone.access}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-amber-500" />
                      <span className="font-bold text-gray-900">
                        {zone.alerts}
                      </span>
                      <span className="text-xs text-gray-500">alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={zone.status} />
                      <span className="text-xs text-gray-500">
                        {zone.lastCheck}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100 cursor-pointer">
                <div className="text-lg font-bold text-emerald-700">5/6</div>
                <div className="text-xs text-emerald-600">Zones Secure</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl border border-red-100 cursor-pointer">
                <div className="text-lg font-bold text-red-700">1</div>
                <div className="text-xs text-red-600">Critical Zone</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100 cursor-pointer">
                <div className="text-lg font-bold text-amber-700">7</div>
                <div className="text-xs text-amber-600">Total Alerts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Control Panel */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Safety Control Panel
          </h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="font-semibold text-gray-900 mb-3 block">
                  Security Mode
                </Label>
                <Select value={securityMode} onValueChange={setSecurityMode}>
                  <SelectTrigger className="w-full shadow-sm cursor-pointer">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="normal" className="text-emerald-600">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" />
                        Normal
                      </div>
                    </SelectItem>
                    <SelectItem value="elevated" className="text-amber-600">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Elevated
                      </div>
                    </SelectItem>
                    <SelectItem value="high" className="text-red-600">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4" />
                        High Alert
                      </div>
                    </SelectItem>
                    <SelectItem value="lockdown" className="text-gray-600">
                      <div className="flex items-center gap-2">
                        <LockKeyhole className="h-4 w-4" />
                        Lockdown
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-gray-900">
                    Camera Monitoring
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Enable live camera feeds
                  </p>
                </div>
                <Switch
                  checked={cameraMonitoring}
                  onCheckedChange={setCameraMonitoring}
                  className="data-[state=checked]:bg-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-gray-900">
                    Access Control
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Restrict building access
                  </p>
                </div>
                <Switch
                  checked={accessControl}
                  onCheckedChange={setAccessControl}
                  className="data-[state=checked]:bg-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="font-semibold text-gray-900">
                  Alert Level
                </Label>
                <span className="font-bold text-amber-600">{alertLevel}</span>
              </div>
              <Slider
                value={
                  alertLevel === "low"
                    ? [25]
                    : alertLevel === "medium"
                    ? [50]
                    : [75]
                }
                onValueChange={(value) =>
                  setAlertLevel(
                    value[0] <= 33 ? "low" : value[0] <= 66 ? "medium" : "high"
                  )
                }
                min={0}
                max={100}
                step={25}
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-semibold text-gray-900">
                  Emergency Mode
                </Label>
                <p className="text-sm text-gray-500 mt-1">
                  Activate emergency protocols
                </p>
              </div>
              <Switch
                checked={emergencyMode}
                onCheckedChange={setEmergencyMode}
                className="data-[state=checked]:bg-red-500 cursor-pointer"
              />
            </div>

            <Button className="w-full h-11 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-lg cursor-pointer">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Apply Security Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Incidents & Security Cameras */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Safety Incidents */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Safety Incidents
              </h2>
              <p className="text-gray-600 text-sm">
                Track and manage safety incidents
              </p>
            </div>
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 cursor-pointer">
              3 Active
            </Badge>
          </div>

          <div className="space-y-4">
            {safetyIncidents.map((incident, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      incident.type === "security"
                        ? "bg-red-100"
                        : incident.type === "fire"
                        ? "bg-orange-100"
                        : incident.type === "access"
                        ? "bg-blue-100"
                        : "bg-amber-100"
                    }`}
                  >
                    {incident.type === "security" ? (
                      <ShieldAlert className="h-5 w-5 text-red-600" />
                    ) : incident.type === "fire" ? (
                      <Flame className="h-5 w-5 text-orange-600" />
                    ) : incident.type === "access" ? (
                      <Key className="h-5 w-5 text-blue-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {incident.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {incident.id} • {incident.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Severity</div>
                    <StatusBadge status={incident.severity} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Status</div>
                    <StatusBadge status={incident.status} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">{incident.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Cameras */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Security Cameras
              </h2>
              <p className="text-gray-600 text-sm">
                Camera status and monitoring
              </p>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 cursor-pointer">
              48 Online
            </Badge>
          </div>

          <div className="space-y-4">
            {securityCameras.map((camera, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      camera.status === "online"
                        ? "bg-emerald-100"
                        : camera.status === "offline"
                        ? "bg-red-100"
                        : "bg-amber-100"
                    }`}
                  >
                    <Camera
                      className={`h-5 w-5 ${
                        camera.status === "online"
                          ? "text-emerald-600"
                          : camera.status === "offline"
                          ? "text-red-600"
                          : "text-amber-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{camera.id}</div>
                    <div className="text-sm text-gray-500">
                      {camera.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Battery</div>
                      <div
                        className={`font-bold ${
                          camera.battery >= 80
                            ? "text-emerald-600"
                            : camera.battery >= 50
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {camera.battery}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Recording</div>
                      <div
                        className={`font-bold ${
                          camera.recording
                            ? "text-emerald-600"
                            : "text-gray-600"
                        }`}
                      >
                        {camera.recording ? "ON" : "OFF"}
                      </div>
                    </div>
                    <StatusBadge status={camera.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-blue-900">
                  Camera Coverage
                </div>
                <div className="text-2xl font-bold text-blue-900">96%</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-700">48/50 cameras</div>
                <div className="text-xs text-blue-600">
                  2 offline for maintenance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Systems & Access Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Systems */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Emergency Systems Status
              </h2>
              <p className="text-gray-600 text-sm">
                Critical safety system monitoring
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <FileWarning className="h-3.5 w-3.5" />
              Test Report
            </Button>
          </div>

          <div className="space-y-4">
            {emergencySystems.map((system, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      system.status === "operational"
                        ? "bg-emerald-100"
                        : system.status === "warning"
                        ? "bg-amber-100"
                        : "bg-red-100"
                    }`}
                  >
                    {system.system.includes("Fire") ? (
                      <Flame
                        className={`h-5 w-5 ${
                          system.status === "operational"
                            ? "text-emerald-600"
                            : system.status === "warning"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : system.system.includes("Sprinkler") ? (
                      <Droplets
                        className={`h-5 w-5 ${
                          system.status === "operational"
                            ? "text-emerald-600"
                            : system.status === "warning"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : system.system.includes("Lighting") ? (
                      <Zap
                        className={`h-5 w-5 ${
                          system.status === "operational"
                            ? "text-emerald-600"
                            : system.status === "warning"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : system.system.includes("PA") ? (
                      <VolumeX
                        className={`h-5 w-5 ${
                          system.status === "operational"
                            ? "text-emerald-600"
                            : system.status === "warning"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : system.system.includes("Exit") ? (
                      <DoorOpen
                        className={`h-5 w-5 ${
                          system.status === "operational"
                            ? "text-emerald-600"
                            : system.status === "warning"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : (
                      <Cross
                        className={`h-5 w-5 ${
                          system.status === "operational"
                            ? "text-emerald-600"
                            : system.status === "warning"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {system.system}
                    </div>
                    <div className="text-sm text-gray-500">
                      Last test: {system.lastTest}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Battery</div>
                    <div
                      className={`font-bold ${
                        system.battery >= 80
                          ? "text-emerald-600"
                          : system.battery >= 50
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {system.battery}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Coverage</div>
                    <div className="font-bold text-gray-900">
                      {system.coverage}
                    </div>
                  </div>
                  <StatusBadge status={system.status} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-red-100">
                  <AlertOctagon className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-red-900">
                    Emergency Systems Test
                  </div>
                  <div className="text-xs text-red-700">
                    Next scheduled test: Tomorrow 10 AM
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-100 cursor-pointer"
              >
                Schedule Test
              </Button>
            </div>
          </div>
        </div>

        {/* Access Logs */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Access Logs
              </h2>
              <p className="text-gray-600 text-sm">
                Building entry and exit records
              </p>
            </div>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger className="w-40 shadow-sm cursor-pointer">
                <SelectValue placeholder="Filter location" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="entrance">Entrances</SelectItem>
                <SelectItem value="restricted">Restricted Areas</SelectItem>
                <SelectItem value="parking">Parking</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            {accessLogs.map((log, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      log.access === "granted" ? "bg-emerald-100" : "bg-red-100"
                    }`}
                  >
                    {log.method === "card" ? (
                      <Key
                        className={`h-4 w-4 ${
                          log.access === "granted"
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : log.method === "biometric" ? (
                      <Fingerprint
                        className={`h-4 w-4 ${
                          log.access === "granted"
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : log.method === "override" ? (
                      <Shield
                        className={`h-4 w-4 ${
                          log.access === "granted"
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      />
                    ) : (
                      <QrCode
                        className={`h-4 w-4 ${
                          log.access === "granted"
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{log.user}</div>
                    <div className="text-sm text-gray-500">{log.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Time</div>
                    <div className="font-bold text-gray-900">{log.time}</div>
                  </div>
                  <Badge
                    className={
                      log.access === "granted"
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 cursor-pointer"
                        : "bg-red-100 text-red-700 hover:bg-red-100 cursor-pointer"
                    }
                  >
                    {log.access === "granted" ? "Granted" : "Denied"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-emerald-900">
                  Access Compliance
                </div>
                <div className="text-2xl font-bold text-emerald-900">98.5%</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-emerald-700">12 denials today</div>
                <div className="text-xs text-emerald-600">All legitimate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Alerts & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Safety Alerts */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Safety Alerts</h2>
              <p className="text-gray-600 text-sm">
                Critical notifications and warnings
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-100 cursor-pointer">
                1 Critical
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 cursor-pointer">
                2 Warnings
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            {safetyAlerts.map((alert) => (
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
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    All Systems Operational
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Safety systems are functioning normally
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 cursor-pointer">
                      Secure
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
              <h2 className="text-xl font-bold text-gray-900">
                Quick Safety Actions
              </h2>
              <p className="text-gray-600 text-sm">
                Emergency and safety controls
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Settings className="h-3.5 w-3.5" />
              More Options
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 hover:from-red-100 hover:to-orange-100 cursor-pointer">
              <AlertOctagon className="h-6 w-6 text-red-600" />
              <span className="font-semibold text-gray-900">Emergency</span>
              <span className="text-xs text-gray-600">Activate alarm</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:from-blue-100 hover:to-cyan-100 cursor-pointer">
              <LockKeyhole className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-900">Lockdown</span>
              <span className="text-xs text-gray-600">Secure building</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 hover:from-emerald-100 hover:to-green-100 cursor-pointer">
              <VolumeX className="h-6 w-6 text-emerald-600" />
              <span className="font-semibold text-gray-900">Announce</span>
              <span className="text-xs text-gray-600">PA System</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 hover:from-amber-100 hover:to-yellow-100 cursor-pointer">
              <Camera className="h-6 w-6 text-amber-600" />
              <span className="font-semibold text-gray-900">Monitor</span>
              <span className="text-xs text-gray-600">View cameras</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:from-purple-100 hover:to-pink-100 cursor-pointer">
              <Cross className="h-6 w-6 text-purple-600" />
              <span className="font-semibold text-gray-900">Medical</span>
              <span className="text-xs text-gray-600">Emergency kit</span>
            </Button>

            <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 hover:from-gray-100 hover:to-slate-100 cursor-pointer">
              <FileWarning className="h-6 w-6 text-gray-600" />
              <span className="font-semibold text-gray-900">Report</span>
              <span className="text-xs text-gray-600">Incident report</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
