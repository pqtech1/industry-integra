import React, { useState, useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Battery,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Cpu,
  Download,
  Eye,
  Factory,
  Filter,
  HardDrive,
  Layers,
  LineChart,
  Package,
  Pause,
  Play,
  Power,
  RefreshCw,
  Settings,
  Shield,
  Sliders,
  Thermometer,
  TrendingDown,
  TrendingUp,
  Users,
  Wifi,
  Wrench,
  Zap,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  FileText,
  FilterX,
  Gauge,
  Hexagon,
  Info,
  Maximize2,
  Minimize2,
  Monitor,
  Network,
  RotateCcw,
  Server,
  Tag,
  Target,
  
  Trash2,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Volume2,
  XCircle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
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
  ComposedChart,
  Scatter,
  ReferenceLine,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

// Components
const MachineCard = ({
  id,
  name,
  type,
  status,
  efficiency,
  temperature,
  pressure,
  power,
  utilization,
  lastMaintenance,
  nextMaintenance,
  alerts,
  location,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "running":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          dot: "bg-green-500",
          icon: Play,
        };
      case "idle":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          dot: "bg-blue-500",
          icon: Pause,
        };
      case "maintenance":
        return {
          bg: "bg-amber-100",
          text: "text-amber-700",
          dot: "bg-amber-500",
          icon: Wrench,
        };
      case "error":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          dot: "bg-red-500",
          icon: AlertTriangle,
        };
      case "offline":
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          dot: "bg-gray-500",
          icon: Power,
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          dot: "bg-gray-500",
          icon: Cpu,
        };
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "cnc":
        return { icon: Cpu, color: "text-blue-600", bg: "bg-blue-100" };
      case "assembly":
        return { icon: Layers, color: "text-green-600", bg: "bg-green-100" };
      case "molding":
        return {
          icon: HardDrive,
          color: "text-purple-600",
          bg: "bg-purple-100",
        };
      case "robotic":
        return { icon: Hexagon, color: "text-amber-600", bg: "bg-amber-100" };
      case "packaging":
        return { icon: Package, color: "text-cyan-600", bg: "bg-cyan-100" };
      case "inspection":
        return { icon: Eye, color: "text-emerald-600", bg: "bg-emerald-100" };
      default:
        return { icon: Cpu, color: "text-gray-600", bg: "bg-gray-100" };
    }
  };

  const statusConfig = getStatusColor(status);
  const typeConfig = getTypeIcon(type);
  const StatusIcon = statusConfig.icon;
  const TypeIcon = typeConfig.icon;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${typeConfig.bg}`}>
            <TypeIcon className={`h-5 w-5 ${typeConfig.color}`} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {name}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <div className={`h-2 w-2 rounded-full ${statusConfig.dot}`} />
              <span className={`text-xs font-medium ${statusConfig.text}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
              {alerts > 0 && (
                <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                  {alerts} alert{alerts > 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">{efficiency}%</div>
          <div className="text-xs text-gray-500">Efficiency</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
          <Thermometer className="h-4 w-4 text-amber-500" />
          <div className="text-xs">
            <div className="text-gray-600">Temp</div>
            <div className="font-semibold text-gray-900">{temperature}°C</div>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
          <Activity className="h-4 w-4 text-blue-500" />
          <div className="text-xs">
            <div className="text-gray-600">Pressure</div>
            <div className="font-semibold text-gray-900">{pressure} bar</div>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
          <Zap className="h-4 w-4 text-purple-500" />
          <div className="text-xs">
            <div className="text-gray-600">Power</div>
            <div className="font-semibold text-gray-900">{power} kW</div>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
          <Gauge className="h-4 w-4 text-green-500" />
          <div className="text-xs">
            <div className="text-gray-600">Utilization</div>
            <div className="font-semibold text-gray-900">{utilization}%</div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-200">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1 text-gray-600">
            <Calendar className="h-3 w-3" />
            <span>Maint: {nextMaintenance}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">{location}</span>
            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PerformanceGauge = ({
  value,
  label,
  max = 100,
  unit = "%",
  size = "medium",
}) => {
  const percentage = (value / max) * 100;

  const getColor = (val) => {
    if (val >= 90) return "text-green-500";
    if (val >= 75) return "text-blue-500";
    if (val >= 60) return "text-amber-500";
    return "text-red-500";
  };

  const sizeClass = size === "large" ? "h-24 w-24" : "h-20 w-20";
  const textSize = size === "large" ? "text-2xl" : "text-xl";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className={`${textSize} font-bold text-gray-900 ${getColor(percentage)}`}
            >
              {value}
              {unit}
            </div>
            <div className="text-xs text-gray-600">{label}</div>
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
            stroke="#f3f4f6"
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
            className={getColor(percentage)}
          />
        </svg>
      </div>
    </div>
  );
};

const MaintenanceCard = ({
  machine,
  type,
  schedule,
  duration,
  assignedTo,
  status,
  priority,
}) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div
      className={`p-3 border rounded-lg ${getPriorityColor(priority)} hover:shadow-sm transition-shadow cursor-pointer`}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <Wrench className="h-4 w-4" />
          <span className="font-medium text-gray-900">{machine}</span>
        </div>
        <span className="text-xs font-medium px-2 py-1 bg-white rounded-full">
          {type}
        </span>
      </div>
      <div className="text-sm text-gray-700 mb-2">{schedule}</div>
      <div className="flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <Clock className="h-3 w-3" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          <span>{assignedTo}</span>
        </div>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm mb-1"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-600">{entry.name}:</span>
            </div>
            <span className="font-semibold text-gray-900">
              {entry.value}
              {entry.dataKey === "temperature"
                ? "°C"
                : entry.dataKey === "pressure"
                  ? " bar"
                  : "%"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Data
const machinesData = [
  {
    id: 1,
    name: "CNC Router #1",
    type: "cnc",
    status: "running",
    efficiency: 94,
    temperature: 42,
    pressure: 85,
    power: 45,
    utilization: 88,
    lastMaintenance: "3 days",
    nextMaintenance: "7 days",
    alerts: 0,
    location: "Line A",
  },
  {
    id: 2,
    name: "Assembly Robot #3",
    type: "robotic",
    status: "running",
    efficiency: 89,
    temperature: 38,
    pressure: 72,
    power: 28,
    utilization: 92,
    lastMaintenance: "5 days",
    nextMaintenance: "12 days",
    alerts: 1,
    location: "Line B",
  },
  {
    id: 3,
    name: "Injection Molder",
    type: "molding",
    status: "maintenance",
    efficiency: 0,
    temperature: 25,
    pressure: 0,
    power: 5,
    utilization: 0,
    lastMaintenance: "Now",
    nextMaintenance: "30 days",
    alerts: 2,
    location: "Molding Area",
  },
  {
    id: 4,
    name: "Packaging Unit #2",
    type: "packaging",
    status: "idle",
    efficiency: 0,
    temperature: 28,
    pressure: 55,
    power: 15,
    utilization: 65,
    lastMaintenance: "1 day",
    nextMaintenance: "15 days",
    alerts: 0,
    location: "Packaging",
  },
  {
    id: 5,
    name: "Quality Scanner",
    type: "inspection",
    status: "error",
    efficiency: 45,
    temperature: 31,
    pressure: 0,
    power: 8,
    utilization: 72,
    lastMaintenance: "7 days",
    nextMaintenance: "3 days",
    alerts: 3,
    location: "QC Station",
  },
  {
    id: 6,
    name: "Welding Robot #5",
    type: "robotic",
    status: "running",
    efficiency: 92,
    temperature: 45,
    pressure: 95,
    power: 35,
    utilization: 85,
    lastMaintenance: "2 days",
    nextMaintenance: "10 days",
    alerts: 0,
    location: "Welding",
  },
  {
    id: 7,
    name: "CNC Lathe #2",
    type: "cnc",
    status: "running",
    efficiency: 87,
    temperature: 39,
    pressure: 78,
    power: 38,
    utilization: 90,
    lastMaintenance: "4 days",
    nextMaintenance: "14 days",
    alerts: 1,
    location: "Line C",
  },
  {
    id: 8,
    name: "Assembly Conveyor",
    type: "assembly",
    status: "running",
    efficiency: 91,
    temperature: 32,
    pressure: 60,
    power: 22,
    utilization: 95,
    lastMaintenance: "6 days",
    nextMaintenance: "20 days",
    alerts: 0,
    location: "Assembly",
  },
];

const performanceData = [
  { hour: "06:00", efficiency: 85, utilization: 78, temperature: 38 },
  { hour: "08:00", efficiency: 88, utilization: 85, temperature: 42 },
  { hour: "10:00", efficiency: 92, utilization: 92, temperature: 45 },
  { hour: "12:00", efficiency: 90, utilization: 88, temperature: 43 },
  { hour: "14:00", efficiency: 87, utilization: 82, temperature: 41 },
  { hour: "16:00", efficiency: 89, utilization: 86, temperature: 44 },
  { hour: "18:00", efficiency: 84, utilization: 76, temperature: 39 },
];

const machineTypesData = [
  {
    type: "CNC Machines",
    count: 8,
    efficiency: 88,
    utilization: 85,
    alerts: 3,
  },
  {
    type: "Robotic Arms",
    count: 6,
    efficiency: 91,
    utilization: 88,
    alerts: 1,
  },
  {
    type: "Assembly Lines",
    count: 4,
    efficiency: 89,
    utilization: 90,
    alerts: 0,
  },
  {
    type: "Molding Presses",
    count: 3,
    efficiency: 85,
    utilization: 82,
    alerts: 2,
  },
  {
    type: "Packaging Units",
    count: 5,
    efficiency: 87,
    utilization: 78,
    alerts: 1,
  },
  { type: "Inspection", count: 3, efficiency: 84, utilization: 75, alerts: 3 },
];

const maintenanceSchedule = [
  {
    machine: "CNC Router #1",
    type: "Preventive",
    schedule: "Today, 2:00 PM",
    duration: "2h",
    assignedTo: "John Tech",
    status: "scheduled",
    priority: "medium",
  },
  {
    machine: "Welding Robot #5",
    type: "Calibration",
    schedule: "Tomorrow, 10:00 AM",
    duration: "1.5h",
    assignedTo: "Sarah Eng",
    status: "scheduled",
    priority: "high",
  },
  {
    machine: "Assembly Conveyor",
    type: "Routine Check",
    schedule: "Nov 25, 9:00 AM",
    duration: "45m",
    assignedTo: "Mike Maint",
    status: "scheduled",
    priority: "low",
  },
  {
    machine: "Quality Scanner",
    type: "Repair",
    schedule: "In Progress",
    duration: "3h",
    assignedTo: "Alex Repair",
    status: "in-progress",
    priority: "high",
  },
  {
    machine: "Injection Molder",
    type: "Overhaul",
    schedule: "Nov 28, 8:00 AM",
    duration: "6h",
    assignedTo: "Team B",
    status: "scheduled",
    priority: "medium",
  },
];

const alertData = [
  {
    id: 1,
    machine: "Quality Scanner",
    type: "error",
    message: "Calibration sensor failure",
    time: "15 min ago",
    priority: "high",
  },
  {
    id: 2,
    machine: "Injection Molder",
    type: "warning",
    message: "Temperature fluctuation detected",
    time: "1 hour ago",
    priority: "medium",
  },
  {
    id: 3,
    machine: "CNC Lathe #2",
    type: "warning",
    message: "Lubrication level low",
    time: "2 hours ago",
    priority: "low",
  },
  {
    id: 4,
    machine: "Assembly Robot #3",
    type: "info",
    message: "Preventive maintenance due",
    time: "1 day ago",
    priority: "low",
  },
];

const FactoryMachines = () => {
  const [time, setTime] = useState(new Date());
  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMachine, setSelectedMachine] = useState(machinesData[0]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredMachines = machinesData.filter((machine) => {
    const matchesStatus = filter === "all" || machine.status === filter;
    const matchesType = typeFilter === "all" || machine.type === typeFilter;
    const matchesSearch =
      searchQuery === "" ||
      machine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesType && matchesSearch;
  });

  const stats = {
    total: machinesData.length,
    running: machinesData.filter((m) => m.status === "running").length,
    efficiency: Math.round(
      machinesData.reduce((sum, m) => sum + m.efficiency, 0) /
        machinesData.length,
    ),
    alerts: machinesData.reduce((sum, m) => sum + m.alerts, 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Machines Monitoring
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Real-time monitoring and control of production machinery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {time.toLocaleDateString()}
              </div>
            </div>
            <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">
                Total Machines
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {stats.total}
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-blue-100">
              <Cpu className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="text-xs text-green-600 font-medium mt-2">
            +2 this month
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Running Now</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {stats.running}
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-green-100">
              <Play className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="text-xs text-green-600 font-medium mt-2">
            {Math.round((stats.running / stats.total) * 100)}% operational
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">
                Avg Efficiency
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {stats.efficiency}%
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-amber-100">
              <Activity className="h-5 w-5 text-amber-600" />
            </div>
          </div>
          <div className="text-xs text-green-600 font-medium mt-2">
            +3.2% vs last week
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Active Alerts</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {stats.alerts}
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
          </div>
          <div className="text-xs text-red-600 font-medium mt-2">
            {stats.alerts > 0 ? "Attention needed" : "All clear"}
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            <div className="text-sm font-medium text-gray-700">
              Showing {filteredMachines.length} of {machinesData.length}{" "}
              machines
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search machines..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="running">Running</option>
              <option value="idle">Idle</option>
              <option value="maintenance">Maintenance</option>
              <option value="error">Error</option>
              <option value="offline">Offline</option>
            </select>

            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="cnc">CNC Machines</option>
              <option value="robotic">Robotic Arms</option>
              <option value="assembly">Assembly Lines</option>
              <option value="molding">Molding Presses</option>
              <option value="packaging">Packaging Units</option>
              <option value="inspection">Inspection</option>
            </select>

            <button
              onClick={() => {
                setFilter("all");
                setTypeFilter("all");
                setSearchQuery("");
              }}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-1"
            >
              <FilterX className="h-4 w-4" />
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Machines Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMachines.map((machine) => (
              <MachineCard
                key={machine.id}
                {...machine}
                onClick={() => setSelectedMachine(machine)}
              />
            ))}
          </div>
        </div>

        {/* Selected Machine Details & Controls */}
        <div className="space-y-6">
          {/* Selected Machine Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                Machine Details
              </h3>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <Maximize2 className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {selectedMachine.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Tag className="h-3 w-3 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      ID: MACH-{selectedMachine.id.toString().padStart(3, "0")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Status</div>
                  <div
                    className={`text-lg font-bold ${
                      selectedMachine.status === "running"
                        ? "text-green-600"
                        : selectedMachine.status === "error"
                          ? "text-red-600"
                          : "text-amber-600"
                    }`}
                  >
                    {selectedMachine.status.charAt(0).toUpperCase() +
                      selectedMachine.status.slice(1)}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="text-lg font-bold text-gray-900">
                    {selectedMachine.location}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h5 className="font-medium text-gray-900 mb-3">
                  Performance Metrics
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  <PerformanceGauge
                    value={selectedMachine.efficiency}
                    label="Efficiency"
                    size="small"
                  />
                  <PerformanceGauge
                    value={selectedMachine.utilization}
                    label="Utilization"
                    size="small"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Play className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">Start</span>
              </button>

              <button className="p-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Power className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-gray-900">Stop</span>
              </button>

              <button className="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <RotateCcw className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">Reset</span>
              </button>

              <button className="p-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Wrench className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-gray-900">
                  Maintenance
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Charts & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Performance Trends */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Performance Trends
              </h3>
              <p className="text-sm text-gray-600">
                Today's efficiency and utilization
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-xs text-gray-600">Efficiency</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-600">Utilization</span>
              </div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  name="Efficiency %"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="utilization"
                  name="Utilization %"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Maintenance Schedule
              </h3>
              <p className="text-sm text-gray-600">
                Upcoming and in-progress maintenance
              </p>
            </div>
            <button className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-lg hover:bg-blue-200 transition-colors">
              <Plus className="inline-block h-4 w-4 mr-1" />
              Schedule
            </button>
          </div>

          <div className="space-y-3">
            {maintenanceSchedule.map((item, index) => (
              <MaintenanceCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Machine Types & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Machine Types Overview */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Machine Types Overview
              </h3>
              <p className="text-sm text-gray-600">
                Performance by machine category
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {machineTypesData.map((type, index) => (
              <div
                key={index}
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">
                      {type.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({type.count} units)
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">
                        {type.efficiency}%
                      </div>
                      <div className="text-xs text-gray-500">Eff</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">
                        {type.utilization}%
                      </div>
                      <div className="text-xs text-gray-500">Util</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Efficiency</span>
                      <span className="font-medium">{type.efficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-blue-500"
                        style={{ width: `${type.efficiency}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Utilization</span>
                      <span className="font-medium">{type.utilization}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-green-500"
                        style={{ width: `${type.utilization}%` }}
                      />
                    </div>
                  </div>
                </div>
                {type.alerts > 0 && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <AlertTriangle className="h-3 w-3" />
                    <span>
                      {type.alerts} active alert{type.alerts > 1 ? "s" : ""}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Recent Alerts</h3>
              <p className="text-sm text-gray-600">
                Machine notifications and warnings
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Bell className="h-4 w-4 text-amber-500" />
                <span className="text-xs text-gray-600">
                  {alertData.length} active
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {alertData.map((alert) => (
              <div
                key={alert.id}
                className="p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      alert.priority === "high"
                        ? "bg-red-100"
                        : alert.priority === "medium"
                          ? "bg-amber-100"
                          : "bg-blue-100"
                    }`}
                  >
                    <AlertTriangle
                      className={`h-4 w-4 ${
                        alert.priority === "high"
                          ? "text-red-600"
                          : alert.priority === "medium"
                            ? "text-amber-600"
                            : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-900">
                        {alert.machine}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {alert.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {alert.message}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          alert.priority === "high"
                            ? "bg-red-100 text-red-800"
                            : alert.priority === "medium"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {alert.priority} priority
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          alert.type === "error"
                            ? "bg-red-100 text-red-800"
                            : alert.type === "warning"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {alert.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                {stats.running}/{stats.total} machines operational
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Overall efficiency: {stats.efficiency}%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                autoRefresh
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <RefreshCw
                className={`h-4 w-4 ${autoRefresh ? "animate-spin" : ""}`}
              />
              <span className="text-sm font-medium">
                Auto-refresh: {autoRefresh ? "ON" : "OFF"}
              </span>
            </button>

            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-md transition-shadow text-sm font-medium">
              <Download className="inline-block h-4 w-4 mr-2" />
              Export Machine Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryMachines;
