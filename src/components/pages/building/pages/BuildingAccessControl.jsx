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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DoorOpen,
  DoorClosed,
  User,
  Users,
  Shield,
  ShieldAlert,
  Lock,
  Unlock,
  Key,
  Calendar,
  Clock,
  MapPin,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  EyeOff,
  Settings,
  RefreshCw,
  QrCode,
  Smartphone,
  Fingerprint,
  Camera,
  Bell,
  Activity,
  History,
  UserCheck,
  UserX,
  Building,
  Home,
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
} from "recharts";

// Access logs data
const accessLogs = [
  {
    id: 1,
    user: "John Smith",
    badgeId: "EMP-001",
    department: "Engineering",
    accessPoint: "Main Entrance",
    time: "08:45 AM",
    status: "granted",
    method: "Badge",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    badgeId: "EMP-002",
    department: "HR",
    accessPoint: "Server Room",
    time: "09:15 AM",
    status: "denied",
    method: "Biometric",
  },
  {
    id: 3,
    user: "Mike Chen",
    badgeId: "EMP-003",
    department: "IT",
    accessPoint: "Executive Floor",
    time: "10:30 AM",
    status: "granted",
    method: "Mobile",
  },
  {
    id: 4,
    user: "Emma Wilson",
    badgeId: "EMP-004",
    department: "Finance",
    accessPoint: "Parking Garage",
    time: "11:05 AM",
    status: "granted",
    method: "Badge",
  },
  {
    id: 5,
    user: "Alex Rodriguez",
    badgeId: "EMP-005",
    department: "Security",
    accessPoint: "Data Center",
    time: "12:45 PM",
    status: "granted",
    method: "PIN",
  },
  {
    id: 6,
    user: "Visitor - Tech Corp",
    badgeId: "VIS-023",
    department: "Visitor",
    accessPoint: "Reception",
    time: "02:15 PM",
    status: "granted",
    method: "Temporary",
  },
  {
    id: 7,
    user: "David Lee",
    badgeId: "EMP-006",
    department: "Engineering",
    accessPoint: "Lab Access",
    time: "03:30 PM",
    status: "denied",
    method: "Badge",
  },
  {
    id: 8,
    user: "Lisa Brown",
    badgeId: "EMP-007",
    department: "Marketing",
    accessPoint: "Main Building",
    time: "05:00 PM",
    status: "granted",
    method: "Mobile",
  },
];

// Access points status
const accessPoints = [
  {
    id: "AP-001",
    name: "Main Entrance",
    location: "Ground Floor",
    status: "active",
    lastActivity: "2 min ago",
    accessLevel: "All",
    methods: ["Badge", "Mobile", "PIN"],
  },
  {
    id: "AP-002",
    name: "Server Room",
    location: "Basement B1",
    status: "critical",
    lastActivity: "5 min ago",
    accessLevel: "Restricted",
    methods: ["Biometric", "Badge"],
  },
  {
    id: "AP-003",
    name: "Executive Floor",
    location: "Floor 5",
    status: "active",
    lastActivity: "10 min ago",
    accessLevel: "High Security",
    methods: ["Badge", "PIN"],
  },
  {
    id: "AP-004",
    name: "Parking Garage",
    location: "P1 Level",
    status: "warning",
    lastActivity: "15 min ago",
    accessLevel: "General",
    methods: ["Badge", "Mobile"],
  },
  {
    id: "AP-005",
    name: "Data Center",
    location: "Basement B2",
    status: "active",
    lastActivity: "20 min ago",
    accessLevel: "Restricted",
    methods: ["Biometric", "PIN"],
  },
  {
    id: "AP-006",
    name: "Lab Access",
    location: "Floor 3",
    status: "active",
    lastActivity: "25 min ago",
    accessLevel: "Controlled",
    methods: ["Badge", "Mobile"],
  },
];

// User access levels
const userAccess = [
  {
    id: 1,
    name: "John Smith",
    role: "Engineer",
    department: "Engineering",
    accessLevel: "Level 3",
    status: "active",
    lastAccess: "Today 08:45 AM",
    badgeId: "EMP-001",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "HR Manager",
    department: "HR",
    accessLevel: "Level 2",
    status: "active",
    lastAccess: "Today 09:15 AM",
    badgeId: "EMP-002",
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "IT Admin",
    department: "IT",
    accessLevel: "Level 4",
    status: "active",
    lastAccess: "Today 10:30 AM",
    badgeId: "EMP-003",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Finance Director",
    department: "Finance",
    accessLevel: "Level 3",
    status: "inactive",
    lastAccess: "Yesterday",
    badgeId: "EMP-004",
  },
  {
    id: 5,
    name: "Alex Rodriguez",
    role: "Security Head",
    department: "Security",
    accessLevel: "Level 5",
    status: "active",
    lastAccess: "Today 12:45 PM",
    badgeId: "EMP-005",
  },
];

// Access patterns data
const accessPatterns = [
  { hour: "6 AM", entries: 15, exits: 5, denied: 2 },
  { hour: "9 AM", entries: 120, exits: 25, denied: 8 },
  { hour: "12 PM", entries: 45, exits: 60, denied: 3 },
  { hour: "3 PM", entries: 35, exits: 40, denied: 5 },
  { hour: "6 PM", entries: 25, exits: 85, denied: 2 },
  { hour: "9 PM", entries: 8, exits: 12, denied: 1 },
];

// Access methods distribution
const accessMethods = [
  { method: "Badge Access", value: 45, color: "#3b82f6" },
  { method: "Mobile App", value: 25, color: "#8b5cf6" },
  { method: "Biometric", value: 15, color: "#10b981" },
  { method: "PIN Code", value: 10, color: "#f59e0b" },
  { method: "Temporary", value: 5, color: "#ef4444" },
];

// Recent alerts
const recentAlerts = [
  {
    id: 1,
    type: "security",
    title: "Unauthorized Access Attempt",
    location: "Server Room",
    time: "5 min ago",
    severity: "high",
  },
  {
    id: 2,
    type: "system",
    title: "Access Point Offline",
    location: "Parking Garage",
    time: "15 min ago",
    severity: "medium",
  },
  {
    id: 3,
    type: "user",
    title: "Multiple Failed Attempts",
    location: "Executive Floor",
    time: "30 min ago",
    severity: "high",
  },
  {
    id: 4,
    type: "system",
    title: "Camera Motion Detected",
    location: "Main Entrance",
    time: "45 min ago",
    severity: "low",
  },
  {
    id: 5,
    type: "maintenance",
    title: "Scheduled Maintenance",
    location: "All Systems",
    time: "2 hours ago",
    severity: "info",
  },
];

// Building metrics
const buildingMetrics = [
  {
    title: "Active Users",
    value: "142",
    change: "+12",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Access Points",
    value: "24",
    change: "0",
    icon: DoorOpen,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Today Entries",
    value: "248",
    change: "+18%",
    icon: DoorClosed,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Security Score",
    value: "94%",
    change: "+2%",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Active Alerts",
    value: "3",
    change: "-2",
    icon: AlertCircle,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "System Uptime",
    value: "99.8%",
    change: "+0.2%",
    icon: CheckCircle2,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
];

// Status badge component
const StatusBadge = ({ status }) => {
  const config = {
    active: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Active",
      icon: CheckCircle2,
    },
    inactive: {
      color: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      label: "Inactive",
      icon: XCircle,
    },
    warning: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Warning",
      icon: AlertCircle,
    },
    critical: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Critical",
      icon: ShieldAlert,
    },
    granted: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Granted",
      icon: CheckCircle2,
    },
    denied: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Denied",
      icon: XCircle,
    },
    high: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "High",
      icon: AlertCircle,
    },
    medium: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Medium",
      icon: AlertCircle,
    },
    low: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Low",
      icon: Bell,
    },
    info: {
      color: "bg-cyan-100 text-cyan-800 hover:bg-cyan-100",
      label: "Info",
      icon: Bell,
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

// Access point card component
const AccessPointCard = ({ point }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          {point.status === "active" ? (
            <DoorOpen className="h-5 w-5 text-emerald-500" />
          ) : point.status === "critical" ? (
            <ShieldAlert className="h-5 w-5 text-red-500" />
          ) : (
            <DoorClosed className="h-5 w-5 text-amber-500" />
          )}
          <h3 className="font-bold text-gray-900">{point.name}</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-3.5 w-3.5" />
          <span>{point.location}</span>
        </div>
      </div>
      <StatusBadge status={point.status} />
    </div>

    <div className="space-y-3 mt-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Access Level</span>
        <Badge
          variant="outline"
          className={
            point.accessLevel === "Restricted"
              ? "border-red-200 text-red-700 bg-red-50"
              : point.accessLevel === "High Security"
              ? "border-purple-200 text-purple-700 bg-purple-50"
              : "border-blue-200 text-blue-700 bg-blue-50"
          }
        >
          {point.accessLevel}
        </Badge>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Last Activity</span>
        <span className="text-sm font-medium text-gray-900">
          {point.lastActivity}
        </span>
      </div>

      <div>
        <span className="text-sm text-gray-600 mb-1 block">Access Methods</span>
        <div className="flex flex-wrap gap-1.5">
          {point.methods.map((method, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {method}
            </Badge>
          ))}
        </div>
      </div>
    </div>

    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
      <div className="text-xs text-gray-500">ID: {point.id}</div>
      <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
        <Settings className="h-3.5 w-3.5 mr-1" />
        Configure
      </Button>
    </div>
  </div>
);

export default function BuildingAccessControl() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [autoLock, setAutoLock] = useState(true);
  const [emergencyLockdown, setEmergencyLockdown] = useState(false);
  const [accessLogFilter, setAccessLogFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("today");

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Building Access Control
          </h1>
          <p className="text-gray-600 mt-2">
            Secure access management and real-time monitoring
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant={emergencyLockdown ? "destructive" : "outline"}
            onClick={() => setEmergencyLockdown(!emergencyLockdown)}
            className="gap-2 shadow-sm"
          >
            {emergencyLockdown ? (
              <Lock className="h-4 w-4" />
            ) : (
              <Unlock className="h-4 w-4" />
            )}
            {emergencyLockdown ? "Lockdown Active" : "Emergency Lockdown"}
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            <Plus className="h-4 w-4" />
            New Access Rule
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {buildingMetrics.map((metric, index) => {
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
                        ? "text-red-600 border-red-200 bg-red-50"
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
        <TabsList className="grid w-full md:w-auto grid-cols-4 md:flex gap-2 bg-gradient-to-r from-gray-50 to-blue-50 p-1 rounded-xl">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Activity className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="access-logs"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <History className="h-4 w-4 mr-2" />
            Access Logs
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Users className="h-4 w-4 mr-2" />
            User Access
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Access Patterns Chart */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Access Patterns
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Today's entry and exit trends
                    </p>
                  </div>
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-32 shadow-sm">
                      <SelectValue placeholder="Time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={accessPatterns}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="hour" stroke="#666" fontSize={12} />
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
                      <Bar
                        dataKey="entries"
                        name="Entries"
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="exits"
                        name="Exits"
                        fill="#10b981"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="denied"
                        name="Denied"
                        fill="#ef4444"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Access Points Grid */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Access Points
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Status of all building access points
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 shadow-sm"
                  >
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {accessPoints.map((point) => (
                    <AccessPointCard key={point.id} point={point} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Access Methods Distribution */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Access Methods
                </h2>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={accessMethods}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={(entry) => `${entry.method} ${entry.value}%`}
                      >
                        {accessMethods.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, "Usage"]}
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Recent Alerts
                  </h2>
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                    3 Active
                  </Badge>
                </div>
                <ScrollArea className="h-[250px] pr-4">
                  <div className="space-y-4">
                    {recentAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-3 rounded-xl border ${
                          alert.severity === "high"
                            ? "border-red-200 bg-red-50"
                            : alert.severity === "medium"
                            ? "border-amber-200 bg-amber-50"
                            : alert.severity === "low"
                            ? "border-blue-200 bg-blue-50"
                            : "border-cyan-200 bg-cyan-50"
                        }`}
                      >
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-1.5 rounded-full ${
                                alert.severity === "high"
                                  ? "bg-red-100"
                                  : alert.severity === "medium"
                                  ? "bg-amber-100"
                                  : alert.severity === "low"
                                  ? "bg-blue-100"
                                  : "bg-cyan-100"
                              }`}
                            >
                              <AlertCircle
                                className={`h-4 w-4 ${
                                  alert.severity === "high"
                                    ? "text-red-600"
                                    : alert.severity === "medium"
                                    ? "text-amber-600"
                                    : alert.severity === "low"
                                    ? "text-blue-600"
                                    : "text-cyan-600"
                                }`}
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {alert.title}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {alert.location}
                                </div>
                              </div>
                            </div>
                          </div>
                          <StatusBadge status={alert.severity} />
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/50">
                          <div className="text-xs text-gray-500">
                            {alert.type === "security"
                              ? "Security Alert"
                              : alert.type === "system"
                              ? "System Alert"
                              : alert.type === "user"
                              ? "User Alert"
                              : "Maintenance"}
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

        {/* Access Logs Tab */}
        <TabsContent value="access-logs" className="space-y-6">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Access Logs</h2>
                <p className="text-gray-600 text-sm">
                  Real-time access attempt records
                </p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:flex-none">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search logs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-full md:w-64 shadow-sm"
                  />
                </div>
                <Select
                  value={accessLogFilter}
                  onValueChange={setAccessLogFilter}
                >
                  <SelectTrigger className="w-32 shadow-sm">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Logs</SelectItem>
                    <SelectItem value="granted">Granted Only</SelectItem>
                    <SelectItem value="denied">Denied Only</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="gap-2 shadow-sm">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-gray-50 to-blue-50 hover:bg-gray-100">
                    <TableHead className="font-semibold text-gray-900">
                      User
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Badge ID
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Department
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Access Point
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Time
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Status
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      Method
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accessLogs.map((log) => (
                    <TableRow
                      key={log.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-blue-100 text-blue-700">
                              {log.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-gray-900">
                              {log.user}
                            </div>
                            {log.user.includes("Visitor") && (
                              <Badge variant="outline" className="text-xs mt-1">
                                Visitor
                              </Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-gray-900">
                        {log.badgeId}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            log.department === "Engineering"
                              ? "border-blue-200 text-blue-700 bg-blue-50"
                              : log.department === "IT"
                              ? "border-emerald-200 text-emerald-700 bg-emerald-50"
                              : log.department === "Security"
                              ? "border-red-200 text-red-700 bg-red-50"
                              : "border-gray-200 text-gray-700"
                          }
                        >
                          {log.department}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-900">
                        {log.accessPoint}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {log.time}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={log.status} />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          {log.method === "Badge" && (
                            <Key className="h-3.5 w-3.5 text-blue-500" />
                          )}
                          {log.method === "Mobile" && (
                            <Smartphone className="h-3.5 w-3.5 text-purple-500" />
                          )}
                          {log.method === "Biometric" && (
                            <Fingerprint className="h-3.5 w-3.5 text-emerald-500" />
                          )}
                          {log.method === "PIN" && (
                            <Lock className="h-3.5 w-3.5 text-amber-500" />
                          )}
                          {log.method === "Temporary" && (
                            <Clock className="h-3.5 w-3.5 text-red-500" />
                          )}
                          <span className="text-sm">{log.method}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-600">
                Showing {accessLogs.length} records • Updated just now
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="shadow-sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="shadow-sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* User Access Tab */}
        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Access Table */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      User Access Management
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Manage building access permissions
                    </p>
                  </div>
                  <Button className="gap-2 shadow-sm">
                    <Plus className="h-4 w-4" />
                    Add User
                  </Button>
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-gray-50 to-blue-50 hover:bg-gray-100">
                        <TableHead className="font-semibold text-gray-900">
                          User
                        </TableHead>
                        <TableHead className="font-semibold text-gray-900">
                          Role
                        </TableHead>
                        <TableHead className="font-semibold text-gray-900">
                          Department
                        </TableHead>
                        <TableHead className="font-semibold text-gray-900">
                          Access Level
                        </TableHead>
                        <TableHead className="font-semibold text-gray-900">
                          Status
                        </TableHead>
                        <TableHead className="font-semibold text-gray-900">
                          Last Access
                        </TableHead>
                        <TableHead className="font-semibold text-gray-900">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userAccess.map((user) => (
                        <TableRow
                          key={user.id}
                          className="hover:bg-gray-50/50 transition-colors"
                        >
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-blue-100 text-blue-700">
                                  {user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium text-gray-900">
                                  {user.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  ID: {user.badgeId}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-gray-900">
                            {user.role}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="border-gray-200 text-gray-700"
                            >
                              {user.department}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                user.accessLevel === "Level 5"
                                  ? "border-red-200 text-red-700 bg-red-50"
                                  : user.accessLevel === "Level 4"
                                  ? "border-purple-200 text-purple-700 bg-purple-50"
                                  : user.accessLevel === "Level 3"
                                  ? "border-blue-200 text-blue-700 bg-blue-50"
                                  : "border-emerald-200 text-emerald-700 bg-emerald-50"
                              }
                            >
                              {user.accessLevel}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={user.status} />
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {user.lastAccess}
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
            </div>

            {/* Quick Actions & Settings */}
            <div className="space-y-6">
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
                    <UserCheck className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Bulk Access Grant</div>
                      <div className="text-xs text-gray-500">
                        Grant access to multiple users
                      </div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-11 shadow-sm"
                  >
                    <UserX className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Revoke Access</div>
                      <div className="text-xs text-gray-500">
                        Immediately revoke user access
                      </div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-11 shadow-sm"
                  >
                    <QrCode className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Generate Visitor Pass</div>
                      <div className="text-xs text-gray-500">
                        Create temporary access
                      </div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 h-11 shadow-sm"
                  >
                    <Clock className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Schedule Maintenance</div>
                      <div className="text-xs text-gray-500">
                        Plan system maintenance
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Access Statistics */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Access Statistics
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">Active Users</div>
                    <div className="text-lg font-bold text-gray-900">142</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Pending Approvals
                    </div>
                    <div className="text-lg font-bold text-amber-600">8</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Access Requests Today
                    </div>
                    <div className="text-lg font-bold text-blue-600">24</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">Expired Badges</div>
                    <div className="text-lg font-bold text-red-600">12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Security Settings */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Security Settings
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Auto Lock After Hours
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Automatically lock all doors after business hours
                      </p>
                    </div>
                    <Switch
                      checked={autoLock}
                      onCheckedChange={setAutoLock}
                      className="data-[state=checked]:bg-emerald-500"
                    />
                  </div>

                  <Separator />

                  <div>
                    <Label className="font-semibold text-gray-900 mb-3 block">
                      Access Restrictions
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Max Failed Attempts</Label>
                        <Select defaultValue="3">
                          <SelectTrigger className="shadow-sm">
                            <SelectValue placeholder="Select attempts" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 Attempts</SelectItem>
                            <SelectItem value="5">5 Attempts</SelectItem>
                            <SelectItem value="10">10 Attempts</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Lockout Duration</Label>
                        <Select defaultValue="15">
                          <SelectTrigger className="shadow-sm">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 Minutes</SelectItem>
                            <SelectItem value="15">15 Minutes</SelectItem>
                            <SelectItem value="30">30 Minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="font-semibold text-gray-900 mb-3 block">
                      Notification Settings
                    </Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-900">Email Alerts</Label>
                          <p className="text-sm text-gray-500">
                            Receive email notifications for security events
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-900">
                            Push Notifications
                          </Label>
                          <p className="text-sm text-gray-500">
                            Receive push notifications on mobile
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-gray-900">SMS Alerts</Label>
                          <p className="text-sm text-gray-500">
                            Receive SMS for critical alerts
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg">
                    Save Security Settings
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
                          Main System
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
                        <Activity className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-blue-900">
                          Database
                        </div>
                        <div className="text-sm text-blue-700">Syncing</div>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      98%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50 border border-amber-100">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-amber-100">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-medium text-amber-900">
                          Backup System
                        </div>
                        <div className="text-sm text-amber-700">Scheduled</div>
                      </div>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                      Pending
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Emergency Controls */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Emergency Controls
                </h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="h-5 w-5 text-red-600" />
                        <div className="font-semibold text-red-900">
                          Emergency Lockdown
                        </div>
                      </div>
                      <Switch
                        checked={emergencyLockdown}
                        onCheckedChange={setEmergencyLockdown}
                        className="data-[state=checked]:bg-red-500"
                      />
                    </div>
                    <p className="text-sm text-red-700">
                      Activates building-wide lockdown. Use only in emergencies.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full gap-2 shadow-sm">
                    <Bell className="h-4 w-4" />
                    Test Alarm System
                  </Button>
                  <Button variant="outline" className="w-full gap-2 shadow-sm">
                    <RefreshCw className="h-4 w-4" />
                    System Reboot
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
