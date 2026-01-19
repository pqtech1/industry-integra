import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Calendar,
  CalendarDays,
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
  Plus,
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
  Info,
  List,
  MapPin,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  RotateCcw,
  Search,
  Target,
  
  Trash2,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
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
const MaintenanceCard = ({
  id,
  title,
  machine,
  type,
  schedule,
  duration,
  status,
  priority,
  assignedTo,
  cost,
  location,
  progress,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          border: "border-blue-200",
          icon: Calendar,
        };
      case "in-progress":
        return {
          bg: "bg-amber-100",
          text: "text-amber-700",
          border: "border-amber-200",
          icon: Clock,
        };
      case "completed":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          border: "border-green-200",
          icon: CheckCircle,
        };
      case "overdue":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          border: "border-red-200",
          icon: AlertTriangle,
        };
      case "cancelled":
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-200",
          icon: XCircle,
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-200",
          icon: Wrench,
        };
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-amber-100 text-amber-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const statusConfig = getStatusColor(status);
  const StatusIcon = statusConfig.icon;

  return (
    <div
      className={`bg-white rounded-xl border ${statusConfig.border} p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${statusConfig.bg}`}>
            <StatusIcon className={`h-5 w-5 ${statusConfig.text}`} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <Cpu className="h-3 w-3 text-gray-500" />
              <span className="text-sm text-gray-600">{machine}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className={`text-xs font-medium ${statusConfig.text}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{duration}</div>
          <div className="text-xs text-gray-500">Duration</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium text-gray-900">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              status === "completed"
                ? "bg-green-500"
                : status === "in-progress"
                  ? "bg-amber-500"
                  : "bg-blue-500"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-gray-500" />
          <div>
            <div className="text-gray-600">Schedule</div>
            <div className="font-medium text-gray-900">{schedule}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Users className="h-3.5 w-3.5 text-gray-500" />
          <div>
            <div className="text-gray-600">Assigned</div>
            <div className="font-medium text-gray-900">{assignedTo}</div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${getPriorityColor(priority)}`}
            >
              {priority.toUpperCase()}
            </span>
            {cost && (
              <span className="text-xs font-medium text-gray-900">${cost}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-gray-400" />
            <span className="text-xs text-gray-600">{location}</span>
            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
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
              {entry.dataKey === "downtime"
                ? " hours"
                : entry.dataKey === "cost"
                  ? "$"
                  : ""}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Data
const maintenanceTasks = [
  {
    id: 1,
    title: "CNC Spindle Calibration",
    machine: "CNC Router #1",
    type: "preventive",
    schedule: "Today, 2:00 PM",
    duration: "2h",
    status: "scheduled",
    priority: "high",
    assignedTo: "John Tech",
    cost: 850,
    location: "Line A",
    progress: 0,
  },
  {
    id: 2,
    title: "Robot Arm Inspection",
    machine: "Assembly Robot #3",
    type: "routine",
    schedule: "Tomorrow, 10:00 AM",
    duration: "1.5h",
    status: "scheduled",
    priority: "medium",
    assignedTo: "Sarah Eng",
    cost: 420,
    location: "Line B",
    progress: 0,
  },
  {
    id: 3,
    title: "Hydraulic System Overhaul",
    machine: "Injection Molder",
    type: "corrective",
    schedule: "In Progress",
    duration: "6h",
    status: "in-progress",
    priority: "high",
    assignedTo: "Mike Maint",
    cost: 1200,
    location: "Molding Area",
    progress: 65,
  },
  {
    id: 4,
    title: "Conveyor Belt Replacement",
    machine: "Packaging Unit #2",
    type: "corrective",
    schedule: "Nov 25, 9:00 AM",
    duration: "3h",
    status: "scheduled",
    priority: "medium",
    assignedTo: "Alex Repair",
    cost: 750,
    location: "Packaging",
    progress: 0,
  },
  {
    id: 5,
    title: "Scanner Calibration",
    machine: "Quality Scanner",
    type: "preventive",
    schedule: "Completed",
    duration: "45m",
    status: "completed",
    priority: "low",
    assignedTo: "James QC",
    cost: 300,
    location: "QC Station",
    progress: 100,
  },
  {
    id: 6,
    title: "Cooling System Maintenance",
    machine: "Welding Robot #5",
    type: "preventive",
    schedule: "Overdue",
    duration: "1.5h",
    status: "overdue",
    priority: "high",
    assignedTo: "Team A",
    cost: 580,
    location: "Welding",
    progress: 0,
  },
  {
    id: 7,
    title: "Software Update",
    machine: "CNC Lathe #2",
    type: "predictive",
    schedule: "Nov 26, 11:00 AM",
    duration: "1h",
    status: "scheduled",
    priority: "low",
    assignedTo: "IT Support",
    cost: 0,
    location: "Line C",
    progress: 0,
  },
  {
    id: 8,
    title: "Safety System Check",
    machine: "Assembly Conveyor",
    type: "safety",
    schedule: "Nov 27, 3:00 PM",
    duration: "2h",
    status: "scheduled",
    priority: "medium",
    assignedTo: "Safety Team",
    cost: 250,
    location: "Assembly",
    progress: 0,
  },
];

const maintenanceData = [
  { month: "Jan", preventive: 12, corrective: 8, downtime: 45, cost: 18500 },
  { month: "Feb", preventive: 10, corrective: 6, downtime: 38, cost: 15200 },
  { month: "Mar", preventive: 15, corrective: 4, downtime: 32, cost: 12800 },
  { month: "Apr", preventive: 14, corrective: 5, downtime: 35, cost: 14200 },
  { month: "May", preventive: 18, corrective: 3, downtime: 28, cost: 11200 },
  { month: "Jun", preventive: 20, corrective: 2, downtime: 24, cost: 9600 },
  { month: "Jul", preventive: 16, corrective: 4, downtime: 30, cost: 12000 },
];

const machineMaintenance = [
  {
    machine: "CNC Router #1",
    preventive: 8,
    corrective: 3,
    lastMaintenance: "3 days",
    nextDue: "7 days",
    status: "optimal",
  },
  {
    machine: "Assembly Robot #3",
    preventive: 6,
    corrective: 2,
    lastMaintenance: "5 days",
    nextDue: "12 days",
    status: "optimal",
  },
  {
    machine: "Injection Molder",
    preventive: 4,
    corrective: 5,
    lastMaintenance: "Now",
    nextDue: "30 days",
    status: "warning",
  },
  {
    machine: "Packaging Unit #2",
    preventive: 7,
    corrective: 1,
    lastMaintenance: "1 day",
    nextDue: "15 days",
    status: "optimal",
  },
  {
    machine: "Quality Scanner",
    preventive: 5,
    corrective: 4,
    lastMaintenance: "7 days",
    nextDue: "3 days",
    status: "critical",
  },
  {
    machine: "Welding Robot #5",
    preventive: 9,
    corrective: 2,
    lastMaintenance: "2 days",
    nextDue: "10 days",
    status: "optimal",
  },
];

const partsInventory = [
  {
    part: "Spindle Motor",
    category: "Electrical",
    quantity: 3,
    minLevel: 2,
    status: "adequate",
    cost: 850,
  },
  {
    part: "Hydraulic Pump",
    category: "Mechanical",
    quantity: 1,
    minLevel: 2,
    status: "low",
    cost: 1200,
  },
  {
    part: "Belt Conveyor",
    category: "Mechanical",
    quantity: 5,
    minLevel: 3,
    status: "adequate",
    cost: 350,
  },
  {
    part: "Sensor Array",
    category: "Electronic",
    quantity: 8,
    minLevel: 4,
    status: "adequate",
    cost: 120,
  },
  {
    part: "Cooling Fan",
    category: "Electrical",
    quantity: 2,
    minLevel: 3,
    status: "critical",
    cost: 85,
  },
  {
    part: "Control Board",
    category: "Electronic",
    quantity: 4,
    minLevel: 2,
    status: "adequate",
    cost: 450,
  },
];

const teamPerformance = [
  {
    team: "Maintenance A",
    completed: 24,
    onTime: 92,
    efficiency: 88,
    avgTime: "1.8h",
  },
  {
    team: "Maintenance B",
    completed: 18,
    onTime: 85,
    efficiency: 82,
    avgTime: "2.1h",
  },
  {
    team: "Technical C",
    completed: 15,
    onTime: 87,
    efficiency: 85,
    avgTime: "1.9h",
  },
  {
    team: "Emergency",
    completed: 8,
    onTime: 75,
    efficiency: 78,
    avgTime: "3.2h",
  },
];

const FactoryMaintenance = () => {
  const [time, setTime] = useState(new Date());
  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTask, setSelectedTask] = useState(maintenanceTasks[0]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredTasks = maintenanceTasks.filter((task) => {
    const matchesStatus = filter === "all" || task.status === filter;
    const matchesType = typeFilter === "all" || task.type === typeFilter;
    const matchesSearch =
      searchQuery === "" ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.machine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignedTo.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesType && matchesSearch;
  });

  const stats = {
    total: maintenanceTasks.length,
    inProgress: maintenanceTasks.filter((t) => t.status === "in-progress")
      .length,
    overdue: maintenanceTasks.filter((t) => t.status === "overdue").length,
    completed: maintenanceTasks.filter((t) => t.status === "completed").length,
    highPriority: maintenanceTasks.filter((t) => t.priority === "high").length,
    totalCost: maintenanceTasks.reduce((sum, t) => sum + t.cost, 0),
  };

  const calculateMTBF = () => {
    const runningMachines = 8;
    const totalDowntime = maintenanceData.reduce(
      (sum, m) => sum + m.downtime,
      0,
    );
    return Math.round((runningMachines * 720) / (totalDowntime / 24));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Maintenance Management
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Schedule, track, and optimize maintenance operations
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Total Tasks</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {stats.total}
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-blue-100">
              <List className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="text-xs text-blue-600 font-medium mt-2">
            {stats.inProgress} in progress
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Overdue</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {stats.overdue}
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
          </div>
          <div className="text-xs text-red-600 font-medium mt-2">
            Needs attention
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">High Priority</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {stats.highPriority}
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-amber-100">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
          </div>
          <div className="text-xs text-amber-600 font-medium mt-2">
            Critical tasks
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Total Cost</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                ${(stats.totalCost / 1000).toFixed(1)}K
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-green-100">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="text-xs text-green-600 font-medium mt-2">
            -12% vs last month
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">MTBF</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {calculateMTBF()}h
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-purple-100">
              <Shield className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <div className="text-xs text-green-600 font-medium mt-2">
            Mean Time Between Failure
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">On-time Rate</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">94%</h3>
            </div>
            <div className="p-2 rounded-lg bg-emerald-100">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-xs text-green-600 font-medium mt-2">
            +3% improvement
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
              Showing {filteredTasks.length} of {maintenanceTasks.length} tasks
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks..."
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
              <option value="scheduled">Scheduled</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="overdue">Overdue</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="preventive">Preventive</option>
              <option value="corrective">Corrective</option>
              <option value="predictive">Predictive</option>
              <option value="routine">Routine</option>
              <option value="safety">Safety</option>
            </select>

            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-1">
              <Plus className="h-4 w-4" />
              New Task
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Maintenance Tasks Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTasks.map((task) => (
              <MaintenanceCard
                key={task.id}
                {...task}
                onClick={() => setSelectedTask(task)}
              />
            ))}
          </div>
        </div>

        {/* Selected Task Details & Actions */}
        <div className="space-y-6">
          {/* Selected Task Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Task Details</h3>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <Maximize2 className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {selectedTask.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Cpu className="h-3 w-3 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {selectedTask.machine}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Status</div>
                  <div
                    className={`text-lg font-bold ${
                      selectedTask.status === "completed"
                        ? "text-green-600"
                        : selectedTask.status === "overdue"
                          ? "text-red-600"
                          : selectedTask.status === "in-progress"
                            ? "text-amber-600"
                            : "text-blue-600"
                    }`}
                  >
                    {selectedTask.status.charAt(0).toUpperCase() +
                      selectedTask.status.slice(1)}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Priority</div>
                  <div
                    className={`text-lg font-bold ${
                      selectedTask.priority === "high"
                        ? "text-red-600"
                        : selectedTask.priority === "medium"
                          ? "text-amber-600"
                          : "text-blue-600"
                    }`}
                  >
                    {selectedTask.priority.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Schedule</span>
                  <span className="font-medium text-gray-900">
                    {selectedTask.schedule}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-medium text-gray-900">
                    {selectedTask.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Assigned To</span>
                  <span className="font-medium text-gray-900">
                    {selectedTask.assignedTo}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Location</span>
                  <span className="font-medium text-gray-900">
                    {selectedTask.location}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Estimated Cost</span>
                  <span className="font-medium text-gray-900">
                    ${selectedTask.cost}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Task Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Play className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  Start Task
                </span>
              </button>

              <button className="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">
                  Complete
                </span>
              </button>

              <button className="p-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-gray-900">
                  Reschedule
                </span>
              </button>

              <button className="p-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-gray-900">
                  Cancel
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Charts & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Maintenance Trends */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Maintenance Trends
              </h3>
              <p className="text-sm text-gray-600">
                Monthly preventive vs corrective maintenance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-xs text-gray-600">Preventive</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-600">Corrective</span>
              </div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={maintenanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  dataKey="preventive"
                  name="Preventive Tasks"
                  fill="#3b82f6"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="corrective"
                  name="Corrective Tasks"
                  fill="#10b981"
                  radius={[2, 2, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="downtime"
                  name="Downtime (hours)"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Parts Inventory */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Parts Inventory
              </h3>
              <p className="text-sm text-gray-600">
                Critical spare parts status
              </p>
            </div>
            <button className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-lg hover:bg-blue-200 transition-colors">
              <Plus className="inline-block h-4 w-4 mr-1" />
              Order Parts
            </button>
          </div>

          <div className="space-y-3">
            {partsInventory.map((part, index) => (
              <div
                key={index}
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">
                      {part.part}
                    </span>
                    <span className="text-xs text-gray-500">
                      {part.category}
                    </span>
                  </div>
                  <div
                    className={`text-sm font-bold ${
                      part.status === "adequate"
                        ? "text-green-600"
                        : part.status === "low"
                          ? "text-amber-600"
                          : "text-red-600"
                    }`}
                  >
                    {part.quantity} units
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Min: {part.minLevel} units</span>
                  <span>Cost: ${part.cost}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div
                    className={`h-1.5 rounded-full ${
                      part.status === "adequate"
                        ? "bg-green-500"
                        : part.status === "low"
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{
                      width: `${(part.quantity / (part.minLevel * 2)) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Machine Maintenance & Team Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Machine Maintenance Status */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Machine Maintenance Status
              </h3>
              <p className="text-sm text-gray-600">
                Maintenance history and upcoming schedules
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {machineMaintenance.map((machine, index) => (
              <div
                key={index}
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">
                      {machine.machine}
                    </span>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      machine.status === "optimal"
                        ? "bg-green-100 text-green-800"
                        : machine.status === "warning"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {machine.status.toUpperCase()}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-gray-600 mb-1">Maintenance</div>
                    <div className="flex gap-2">
                      <span className="font-medium text-blue-600">
                        P: {machine.preventive}
                      </span>
                      <span className="font-medium text-green-600">
                        C: {machine.corrective}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Schedule</div>
                    <div className="font-medium text-gray-900">
                      Due in {machine.nextDue}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Team Performance
              </h3>
              <p className="text-sm text-gray-600">Maintenance team metrics</p>
            </div>
          </div>

          <div className="space-y-4">
            {teamPerformance.map((team, index) => (
              <div
                key={index}
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">
                      {team.team}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    {team.completed}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">
                      {team.onTime}%
                    </div>
                    <div className="text-xs text-gray-500">On Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">
                      {team.efficiency}%
                    </div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">
                      {team.avgTime}
                    </div>
                    <div className="text-xs text-gray-500">Avg Time</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                  <div
                    className="h-1.5 rounded-full bg-blue-500"
                    style={{ width: `${team.efficiency}%` }}
                  />
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
                {stats.completed} tasks completed this week
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">On-time rate: 94%</span>
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
              Export Maintenance Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryMaintenance;
