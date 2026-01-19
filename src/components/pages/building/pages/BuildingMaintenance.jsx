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
  Wrench,
  Settings,
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
  Filter,
  Search,
  FileText,
  Printer,
  Share,
  Star,
  Heart,
  ThumbsUp,
  MessageSquare,
  Phone,
  Mail,
  User,
  Users as UsersIcon,

  ClipboardCheck,
  ClipboardList,
  HardHat,
  Shield,
  ShieldAlert,
  Award,
  Trophy,
  Zap,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Lightbulb,
  DoorOpen,
  Layers,
  Package,
  Truck,
  Box,
  Palette,
  Sparkles,
  Home as HomeIcon,
  Building as BuildingIcon,
  Factory,
  Warehouse,
  School,
  Hotel,
  Hospital,
  Store,
  ShoppingCart,
  CreditCard,
  Receipt,
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

// Maintenance Metrics
const maintenanceMetrics = [
  {
    title: "Open Work Orders",
    value: "24",
    change: "-12%",
    icon: ClipboardList,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Completed Today",
    value: "18",
    change: "+8%",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Pending Approval",
    value: "6",
    change: "-4%",
    icon: Clock,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Preventive Tasks",
    value: "42",
    change: "+15%",
    icon: Target,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Avg Response Time",
    value: "2.4h",
    change: "-18%",
    icon: Timer,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "SLA Compliance",
    value: "94%",
    change: "+3%",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

// Work Orders Data
const workOrders = [
  {
    id: "WO-2024-001",
    title: "HVAC Filter Replacement",
    location: "Floor 3 - North Wing",
    priority: "high",
    status: "in-progress",
    assignee: "John D.",
    due: "Today",
    type: "preventive",
  },
  {
    id: "WO-2024-002",
    title: "Elevator Inspection",
    location: "Main Elevator #2",
    priority: "medium",
    status: "pending",
    assignee: "Sarah M.",
    due: "Tomorrow",
    type: "safety",
  },
  {
    id: "WO-2024-003",
    title: "Lighting Fixture Repair",
    location: "Lobby - Main Entrance",
    priority: "high",
    status: "assigned",
    assignee: "Mike R.",
    due: "Today",
    type: "corrective",
  },
  {
    id: "WO-2024-004",
    title: "Fire System Check",
    location: "Building-wide",
    priority: "critical",
    status: "completed",
    assignee: "Team A",
    due: "Yesterday",
    type: "safety",
  },
  {
    id: "WO-2024-005",
    title: "Plumbing Leak",
    location: "Floor 2 - Restroom",
    priority: "high",
    status: "in-progress",
    assignee: "Robert K.",
    due: "Today",
    type: "emergency",
  },
  {
    id: "WO-2024-006",
    title: "Generator Maintenance",
    location: "Basement",
    priority: "medium",
    status: "scheduled",
    assignee: "Team B",
    due: "Next Week",
    type: "preventive",
  },
  {
    id: "WO-2024-007",
    title: "Window Cleaning",
    location: "Executive Floor",
    priority: "low",
    status: "pending",
    assignee: "External",
    due: "2 Weeks",
    type: "cleaning",
  },
];

// Maintenance Teams
const maintenanceTeams = [
  {
    id: "MT-01",
    name: "HVAC Team",
    lead: "John D.",
    members: 4,
    active: 3,
    efficiency: 92,
    status: "active",
  },
  {
    id: "MT-02",
    name: "Electrical Team",
    lead: "Sarah M.",
    members: 5,
    active: 4,
    efficiency: 88,
    status: "active",
  },
  {
    id: "MT-03",
    name: "Plumbing Team",
    lead: "Mike R.",
    members: 3,
    active: 2,
    efficiency: 95,
    status: "active",
  },
  {
    id: "MT-04",
    name: "General Maintenance",
    lead: "Robert K.",
    members: 6,
    active: 5,
    efficiency: 85,
    status: "active",
  },
  {
    id: "MT-05",
    name: "Safety & Compliance",
    lead: "Lisa T.",
    members: 2,
    active: 1,
    efficiency: 98,
    status: "on-call",
  },
  {
    id: "MT-06",
    name: "Grounds & Exterior",
    lead: "David P.",
    members: 4,
    active: 3,
    efficiency: 90,
    status: "available",
  },
];

// Maintenance History
const maintenanceHistory = [
  { date: "Jan 1", completed: 18, preventive: 12, emergency: 3, cost: 4500 },
  { date: "Jan 2", completed: 22, preventive: 15, emergency: 4, cost: 5200 },
  { date: "Jan 3", completed: 16, preventive: 10, emergency: 2, cost: 3800 },
  { date: "Jan 4", completed: 24, preventive: 18, emergency: 3, cost: 6100 },
  { date: "Jan 5", completed: 20, preventive: 14, emergency: 5, cost: 5500 },
  { date: "Jan 6", completed: 15, preventive: 10, emergency: 2, cost: 4200 },
  { date: "Jan 7", completed: 28, preventive: 22, emergency: 3, cost: 7200 },
];

// Maintenance Alerts
const maintenanceAlerts = [
  {
    id: 1,
    type: "critical",
    title: "Elevator Safety Check Overdue",
    location: "Elevator #3",
    value: "2 days overdue",
    time: "1 hour ago",
  },
  {
    id: 2,
    type: "warning",
    title: "Fire Extinguisher Expiry",
    location: "Floor 4 - Kitchen",
    value: "Expires in 7 days",
    time: "3 hours ago",
  },
  {
    id: 3,
    type: "info",
    title: "Quarterly HVAC Service Due",
    location: "All Units",
    value: "Due next week",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "warning",
    title: "Generator Fuel Low",
    location: "Emergency Generator",
    value: "35% remaining",
    time: "2 days ago",
  },
  {
    id: 5,
    type: "info",
    title: "Annual Building Inspection",
    location: "Complete Building",
    value: "Scheduled",
    time: "3 days ago",
  },
];

// Asset Health Status
const assetHealth = [
  {
    asset: "HVAC Systems",
    condition: 88,
    age: 4.5,
    lastService: "2 weeks ago",
    status: "good",
  },
  {
    asset: "Electrical Systems",
    condition: 92,
    age: 3.2,
    lastService: "1 month ago",
    status: "excellent",
  },
  {
    asset: "Plumbing Systems",
    condition: 75,
    age: 6.8,
    lastService: "3 months ago",
    status: "fair",
  },
  {
    asset: "Elevators",
    condition: 95,
    age: 2.5,
    lastService: "2 weeks ago",
    status: "excellent",
  },
  {
    asset: "Fire Safety Systems",
    condition: 98,
    age: 1.8,
    lastService: "1 week ago",
    status: "excellent",
  },
  {
    asset: "Lighting Systems",
    condition: 82,
    age: 5.1,
    lastService: "2 months ago",
    status: "good",
  },
];

// Preventive Schedule
const preventiveSchedule = [
  {
    task: "HVAC Filter Replacement",
    frequency: "Monthly",
    last: "Jan 1",
    next: "Feb 1",
    status: "scheduled",
  },
  {
    task: "Elevator Safety Check",
    frequency: "Quarterly",
    last: "Dec 15",
    next: "Mar 15",
    status: "upcoming",
  },
  {
    task: "Fire System Test",
    frequency: "Monthly",
    last: "Jan 5",
    next: "Feb 5",
    status: "scheduled",
  },
  {
    task: "Generator Test Run",
    frequency: "Weekly",
    last: "Jan 22",
    next: "Jan 29",
    status: "pending",
  },
  {
    task: "Emergency Lighting Check",
    frequency: "Monthly",
    last: "Jan 10",
    next: "Feb 10",
    status: "scheduled",
  },
  {
    task: "Water Heater Flush",
    frequency: "Annual",
    last: "Mar 2023",
    next: "Mar 2024",
    status: "upcoming",
  },
];

// Status Badge Component
const StatusBadge = ({ status }) => {
  const config = {
    completed: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Completed",
      Icon: CheckCircle2,
    },
    "in-progress": {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "In Progress",
      Icon: Activity,
    },
    scheduled: {
      color: "bg-cyan-100 text-cyan-800 hover:bg-cyan-100",
      label: "Scheduled",
      Icon: Calendar,
    },
    assigned: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Assigned",
      Icon: User,
    },
    pending: {
      color: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      label: "Pending",
      Icon: Clock,
    },
    overdue: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Overdue",
      Icon: AlertTriangle,
    },
    critical: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Critical",
      Icon: AlertCircle,
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
    good: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Good",
      Icon: CheckCircle2,
    },
    excellent: {
      color: "bg-green-100 text-green-800 hover:bg-green-100",
      label: "Excellent",
      Icon: Award,
    },
    fair: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Fair",
      Icon: AlertTriangle,
    },
    active: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Active",
      Icon: Activity,
    },
    "on-call": {
      color: "bg-purple-100 text-purple-800 hover:bg-purple-100",
      label: "On Call",
      Icon: Phone,
    },
    available: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Available",
      Icon: CheckCircle2,
    },
  };

  const badgeConfig = config[status] || config.pending;
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

// Info icon component (since it's not imported)
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

// Health Gauge Component
const HealthGauge = ({ value, label, size = "medium" }) => {
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
            <div className="text-xs text-gray-600">Health</div>
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
              {entry.value} {entry.name === "cost" ? "$" : ""}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function BuildingMaintenance() {
  const [autoDispatch, setAutoDispatch] = useState(true);
  const [preventiveMode, setPreventiveMode] = useState(true);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedView, setSelectedView] = useState("overview");
  const [timeRange, setTimeRange] = useState("week");

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-600 via-gray-500 to-zinc-500 bg-clip-text text-transparent">
            Building Maintenance Management
          </h1>
          <p className="text-gray-600 mt-2">
            Track, manage, and optimize building maintenance operations
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
          <Button className="gap-2 text-white shadow-sm bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 hover:shadow-md transition-all cursor-pointer">
            <Plus className="h-4 w-4" />
            New Work Order
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {maintenanceMetrics.map((metric, index) => {
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
                  <span className="text-xs text-gray-500">vs last week</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Work Orders & Maintenance Teams */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Work Orders */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Active Work Orders
                </h2>
                <p className="text-gray-600 text-sm">
                  Track and manage maintenance requests
                </p>
              </div>
              <div className="flex gap-2">
                <Select
                  value={priorityFilter}
                  onValueChange={setPriorityFilter}
                >
                  <SelectTrigger className="w-32 shadow-sm cursor-pointer">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-32 shadow-sm cursor-pointer">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {workOrders.map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        order.priority === "critical"
                          ? "bg-red-100"
                          : order.priority === "high"
                          ? "bg-orange-100"
                          : order.priority === "medium"
                          ? "bg-amber-100"
                          : "bg-blue-100"
                      }`}
                    >
                      <Wrench
                        className={`h-5 w-5 ${
                          order.priority === "critical"
                            ? "text-red-600"
                            : order.priority === "high"
                            ? "text-orange-600"
                            : order.priority === "medium"
                            ? "text-amber-600"
                            : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">
                          {order.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {order.id}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{order.location}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-600">
                            {order.assignee}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-600">
                            Due: {order.due}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <StatusBadge status={order.priority} />
                    <StatusBadge status={order.status} />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-1 text-xs cursor-pointer"
                    >
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-600">
                Showing {workOrders.length} of 42 total work orders
              </div>
              <Button variant="outline" className="gap-2 cursor-pointer">
                <ChevronRight className="h-4 w-4" />
                View All Work Orders
              </Button>
            </div>
          </div>
        </div>

        {/* Maintenance Teams */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Maintenance Teams
              </h2>
              <p className="text-gray-600 text-sm">
                Team performance and availability
              </p>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 cursor-pointer">
              All Active
            </Badge>
          </div>

          <div className="space-y-4">
            {maintenanceTeams.map((team, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      team.status === "active"
                        ? "bg-blue-100"
                        : team.status === "on-call"
                        ? "bg-purple-100"
                        : "bg-emerald-100"
                    }`}
                  >
                    <UsersIcon
                      className={`h-5 w-5 ${
                        team.status === "active"
                          ? "text-blue-600"
                          : team.status === "on-call"
                          ? "text-purple-600"
                          : "text-emerald-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{team.name}</div>
                    <div className="text-sm text-gray-500">
                      Lead: {team.lead}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Active</div>
                      <div className="font-bold text-gray-900">
                        {team.active}/{team.members}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Efficiency</div>
                      <div
                        className={`font-bold ${
                          team.efficiency >= 90
                            ? "text-emerald-600"
                            : team.efficiency >= 80
                            ? "text-blue-600"
                            : team.efficiency >= 70
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {team.efficiency}%
                      </div>
                    </div>
                    <StatusBadge status={team.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-blue-900">
                  Total Team Capacity
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  24/32 (75%)
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-700">Available Today</div>
                <div className="text-xs text-blue-600">18 technicians</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Analytics & Asset Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Maintenance Analytics */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Maintenance Analytics
              </h2>
              <p className="text-gray-600 text-sm">
                Weekly maintenance performance
              </p>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32 shadow-sm cursor-pointer">
                <SelectValue placeholder="Time range" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={maintenanceHistory}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="completed"
                  name="Completed Tasks"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="preventive"
                  name="Preventive"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="cost"
                  name="Cost ($)"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100 cursor-pointer">
              <div className="text-lg font-bold text-blue-700">163</div>
              <div className="text-xs text-blue-600">Weekly Total</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100 cursor-pointer">
              <div className="text-lg font-bold text-emerald-700">101</div>
              <div className="text-xs text-emerald-600">Preventive Tasks</div>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-xl border border-red-100 cursor-pointer">
              <div className="text-lg font-bold text-red-700">22</div>
              <div className="text-xs text-red-600">Emergency Calls</div>
            </div>
          </div>
        </div>

        {/* Asset Health Status */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Asset Health Status
              </h2>
              <p className="text-gray-600 text-sm">
                Building systems condition overview
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              Generate Report
            </Button>
          </div>

          <div className="space-y-4">
            {assetHealth.map((asset, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      asset.status === "excellent"
                        ? "bg-emerald-100"
                        : asset.status === "good"
                        ? "bg-blue-100"
                        : asset.status === "fair"
                        ? "bg-amber-100"
                        : "bg-red-100"
                    }`}
                  >
                    {asset.asset.includes("HVAC") ? (
                      <Thermometer
                        className={`h-5 w-5 ${
                          asset.status === "excellent"
                            ? "text-emerald-600"
                            : asset.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    ) : asset.asset.includes("Electrical") ? (
                      <Zap
                        className={`h-5 w-5 ${
                          asset.status === "excellent"
                            ? "text-emerald-600"
                            : asset.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    ) : asset.asset.includes("Plumbing") ? (
                      <Droplets
                        className={`h-5 w-5 ${
                          asset.status === "excellent"
                            ? "text-emerald-600"
                            : asset.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    ) : asset.asset.includes("Elevators") ? (
                      <ArrowUpRight
                        className={`h-5 w-5 ${
                          asset.status === "excellent"
                            ? "text-emerald-600"
                            : asset.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    ) : asset.asset.includes("Fire") ? (
                      <Shield
                        className={`h-5 w-5 ${
                          asset.status === "excellent"
                            ? "text-emerald-600"
                            : asset.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    ) : (
                      <Lightbulb
                        className={`h-5 w-5 ${
                          asset.status === "excellent"
                            ? "text-emerald-600"
                            : asset.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {asset.asset}
                    </div>
                    <div className="text-sm text-gray-500">
                      Age: {asset.age} years
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Condition</div>
                    <div
                      className={`font-bold ${
                        asset.condition >= 90
                          ? "text-emerald-600"
                          : asset.condition >= 75
                          ? "text-blue-600"
                          : "text-amber-600"
                      }`}
                    >
                      {asset.condition}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Last Service</div>
                    <div className="font-bold text-gray-900">
                      {asset.lastService}
                    </div>
                  </div>
                  <StatusBadge status={asset.status} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-emerald-100">
                  <Award className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-emerald-900">
                    Overall Asset Health
                  </div>
                  <div className="text-xs text-emerald-700">
                    88.3% - Excellent Condition
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-emerald-900">+5.2%</div>
                <div className="text-xs text-emerald-700">vs last quarter</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Control & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Maintenance Control Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Maintenance Control Panel
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Auto Dispatch
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Automatically assign work orders
                      </p>
                    </div>
                    <Switch
                      checked={autoDispatch}
                      onCheckedChange={setAutoDispatch}
                      className="data-[state=checked]:bg-emerald-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Preventive Mode
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Schedule preventive maintenance
                      </p>
                    </div>
                    <Switch
                      checked={preventiveMode}
                      onCheckedChange={setPreventiveMode}
                      className="data-[state=checked]:bg-blue-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-semibold text-gray-900">
                        Emergency Mode
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">
                        Prioritize emergency work orders
                      </p>
                    </div>
                    <Switch
                      checked={emergencyMode}
                      onCheckedChange={setEmergencyMode}
                      className="data-[state=checked]:bg-red-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <Label className="font-semibold text-gray-900 mb-3 block">
                      Dashboard View
                    </Label>
                    <Select
                      value={selectedView}
                      onValueChange={setSelectedView}
                    >
                      <SelectTrigger className="w-full shadow-sm cursor-pointer">
                        <SelectValue placeholder="Select view" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="overview">Overview</SelectItem>
                        <SelectItem value="analytics">Analytics</SelectItem>
                        <SelectItem value="workorders">Work Orders</SelectItem>
                        <SelectItem value="teams">Team View</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-3 gap-4">
                <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:from-blue-100 hover:to-cyan-100 cursor-pointer">
                  <ClipboardList className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">
                    Quick Dispatch
                  </span>
                  <span className="text-xs text-gray-600">
                    Assign new work order
                  </span>
                </Button>

                <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 hover:from-emerald-100 hover:to-green-100 cursor-pointer">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                  <span className="font-semibold text-gray-900">Schedule</span>
                  <span className="text-xs text-gray-600">
                    Preventive maintenance
                  </span>
                </Button>

                <Button className="h-24 flex-col gap-2 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:from-amber-100 hover:to-orange-100 cursor-pointer">
                  <FileText className="h-6 w-6 text-amber-600" />
                  <span className="font-semibold text-gray-900">Reports</span>
                  <span className="text-xs text-gray-600">
                    Generate reports
                  </span>
                </Button>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="text-white flex-1 h-11 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 shadow-lg cursor-pointer">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-11 cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset to Default
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Alerts */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Maintenance Alerts
              </h2>
              <p className="text-gray-600 text-sm">
                Critical notifications and reminders
              </p>
            </div>
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100 cursor-pointer">
              2 Critical
            </Badge>
          </div>

          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {maintenanceAlerts.map((alert) => (
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
                  <div className="flex justify-between items-start">
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
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/50">
                    <div className="text-sm text-gray-500">
                      {alert.type === "critical"
                        ? "Critical Alert"
                        : alert.type === "warning"
                        ? "Warning"
                        : "Information"}
                    </div>
                    <div className="text-xs text-gray-500">{alert.time}</div>
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
                      All Safety Checks Complete
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Monthly safety inspections passed
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 cursor-pointer">
                        Verified
                      </Badge>
                      <span className="text-xs text-gray-500">
                        Updated: Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Preventive Schedule */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Preventive Maintenance Schedule
            </h2>
            <p className="text-gray-600 text-sm">
              Scheduled preventive maintenance tasks
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 shadow-sm hover:shadow-md cursor-pointer"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            View Calendar
          </Button>
        </div>

        <div className="space-y-3">
          {preventiveSchedule.map((task, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-xl border ${
                task.status === "scheduled"
                  ? "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200"
                  : task.status === "pending"
                  ? "bg-amber-50 border-amber-200"
                  : "bg-gray-50 border-gray-200"
              } cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-lg ${
                    task.status === "scheduled"
                      ? "bg-blue-100"
                      : task.status === "pending"
                      ? "bg-amber-100"
                      : "bg-gray-100"
                  }`}
                >
                  <ClipboardCheck
                    className={`h-5 w-5 ${
                      task.status === "scheduled"
                        ? "text-blue-600"
                        : task.status === "pending"
                        ? "text-amber-600"
                        : "text-gray-600"
                    }`}
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{task.task}</div>
                  <div className="text-sm text-gray-500">
                    {task.frequency} • Last: {task.last}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="font-bold text-gray-900">{task.next}</span>
                  </div>
                  <div className="text-xs text-gray-500">Next Due</div>
                </div>
                <Badge
                  className={
                    task.status === "scheduled"
                      ? "bg-blue-100 text-blue-700 hover:bg-blue-100 cursor-pointer"
                      : task.status === "pending"
                      ? "bg-amber-100 text-amber-700 hover:bg-amber-100 cursor-pointer"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  }
                >
                  {task.status === "scheduled"
                    ? "Scheduled"
                    : task.status === "pending"
                    ? "Pending"
                    : "Upcoming"}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-full bg-purple-100">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-purple-900">
                  Preventive Coverage
                </div>
                <div className="text-xs text-purple-700">
                  92% of assets covered by preventive maintenance
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-purple-900">92%</div>
              <div className="text-xs text-purple-700">Coverage Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
