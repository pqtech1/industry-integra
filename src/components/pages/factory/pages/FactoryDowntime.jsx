import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Cpu,
  Download,
  Eye,
  Factory,
  Filter,
  HardDrive,
  HelpCircle,
  History,
  Layers,
  LineChart,
  Package,
  Pause,
  Play,
  RefreshCw,
  Search,
  Settings,
  Shield,
  Sliders,
  Target,
  Thermometer,
  TrendingDown,
  TrendingUp,
  DollarSign ,
  Trash2,
  Truck,
  Users,
  Wrench,
  XCircle,
  Zap,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  FileText,
  FilterX,
  Info,
  MessageSquare,
  PieChart,
  AlertCircle,
  Lightbulb,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from "lucide-react";
import {
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
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
  Scatter,
  ReferenceLine,
} from "recharts";

// Components
const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  color,
  trend,
  subtitle,
}) => (
  <div className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-xs font-medium text-gray-600 mb-1">{title}</p>
          <h3 className="text-xl font-bold text-gray-900">{value}</h3>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div
          className={`p-2 rounded-lg ${color.bg} group-hover:scale-110 transition-transform`}
        >
          <Icon className={`h-5 w-5 ${color.text}`} />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        {trend === "up" ? (
          <TrendingDown className="h-3.5 w-3.5 text-red-500" />
        ) : (
          <TrendingUp className="h-3.5 w-3.5 text-green-500" />
        )}
        <span
          className={`text-xs font-medium ${trend === "up" ? "text-red-600" : "text-green-600"}`}
        >
          {change}
        </span>
        <span className="text-gray-500 text-xs ml-auto">vs last week</span>
      </div>
    </div>
  </div>
);

const DowntimeCard = ({
  id,
  machine,
  reason,
  category,
  duration,
  impact,
  startTime,
  endTime,
  status,
  assignedTo,
  resolution,
}) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "maintenance":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          border: "border-blue-200",
        };
      case "breakdown":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          border: "border-red-200",
        };
      case "setup":
        return {
          bg: "bg-amber-100",
          text: "text-amber-700",
          border: "border-amber-200",
        };
      case "material":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          border: "border-green-200",
        };
      case "quality":
        return {
          bg: "bg-purple-100",
          text: "text-purple-700",
          border: "border-purple-200",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-200",
        };
    }
  };

  const colors = getCategoryColor(category);

  return (
    <div
      className={`bg-white rounded-lg border ${colors.border} p-4 hover:shadow-md transition-all duration-200 cursor-pointer`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors.bg}`}>
            <Cpu className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{machine}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs font-medium ${colors.text}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              <span className="text-xs text-gray-500">•</span>
              <span
                className={`text-xs font-medium ${
                  status === "resolved"
                    ? "text-green-600"
                    : status === "in-progress"
                      ? "text-blue-600"
                      : "text-red-600"
                }`}
              >
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

      <div className="mb-3">
        <p className="text-sm text-gray-700">{reason}</p>
        {resolution && (
          <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-600">
            <span className="font-medium">Resolution:</span> {resolution}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-gray-500" />
          <div>
            <div className="text-gray-600">Started</div>
            <div className="font-medium text-gray-900">{startTime}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUpIcon className="h-3.5 w-3.5 text-gray-500" />
          <div>
            <div className="text-gray-600">Impact</div>
            <div className="font-medium text-gray-900">{impact}</div>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          {assignedTo ? (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-3 w-3 text-blue-600" />
              </div>
              <span className="text-xs text-gray-700">{assignedTo}</span>
            </div>
          ) : (
            <span className="text-xs text-gray-500">Unassigned</span>
          )}
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
            View Details →
          </button>
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
              {entry.dataKey === "hours"
                ? " hours"
                : entry.dataKey === "cost"
                  ? " units"
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
const downtimeData = [
  { day: "Mon", hours: 8.5, incidents: 4, cost: 4200 },
  { day: "Tue", hours: 6.2, incidents: 3, cost: 3100 },
  { day: "Wed", hours: 12.8, incidents: 6, cost: 6400 },
  { day: "Thu", hours: 4.5, incidents: 2, cost: 2250 },
  { day: "Fri", hours: 9.1, incidents: 5, cost: 4550 },
  { day: "Sat", hours: 3.2, incidents: 1, cost: 1600 },
  { day: "Sun", hours: 7.4, incidents: 3, cost: 3700 },
];

const downtimeByCategory = [
  {
    category: "Planned Maintenance",
    hours: 45,
    percentage: 35,
    color: "#3b82f6",
  },
  {
    category: "Unplanned Breakdown",
    hours: 28,
    percentage: 22,
    color: "#ef4444",
  },
  { category: "Changeover/Setup", hours: 22, percentage: 17, color: "#f59e0b" },
  {
    category: "Material Shortage",
    hours: 18,
    percentage: 14,
    color: "#10b981",
  },
  { category: "Quality Issues", hours: 12, percentage: 9, color: "#8b5cf6" },
  { category: "Operator Error", hours: 5, percentage: 4, color: "#ec4899" },
];

const machinesDowntime = [
  {
    machine: "CNC Router #5",
    downtime: 14.5,
    incidents: 8,
    avgDuration: "1.8h",
    category: "breakdown",
  },
  {
    machine: "Assembly Line B",
    downtime: 12.2,
    incidents: 6,
    avgDuration: "2.0h",
    category: "maintenance",
  },
  {
    machine: "Injection Molder",
    downtime: 9.8,
    incidents: 4,
    avgDuration: "2.5h",
    category: "setup",
  },
  {
    machine: "Robotic Arm #3",
    downtime: 8.5,
    incidents: 5,
    avgDuration: "1.7h",
    category: "quality",
  },
  {
    machine: "Packaging Unit",
    downtime: 6.3,
    incidents: 3,
    avgDuration: "2.1h",
    category: "material",
  },
  {
    machine: "Quality Scanner",
    downtime: 5.1,
    incidents: 2,
    avgDuration: "2.6h",
    category: "breakdown",
  },
];

const recentDowntime = [
  {
    id: 1,
    machine: "CNC Router #5",
    reason: "Spindle motor overheating - thermal protection triggered",
    category: "breakdown",
    duration: "2h 15m",
    impact: "320 units",
    startTime: "10:30 AM",
    endTime: "12:45 PM",
    status: "resolved",
    assignedTo: "John Maintenance",
    resolution: "Motor cooling system cleaned and calibrated",
  },
  {
    id: 2,
    machine: "Assembly Line B",
    reason: "Scheduled preventive maintenance",
    category: "maintenance",
    duration: "1h 45m",
    impact: "180 units",
    startTime: "02:00 PM",
    endTime: "03:45 PM",
    status: "resolved",
    assignedTo: "Sarah Tech",
    resolution: "Completed as per schedule",
  },
  {
    id: 3,
    machine: "Injection Molder",
    reason: "Material changeover for new product batch",
    category: "setup",
    duration: "45m",
    impact: "90 units",
    startTime: "08:00 AM",
    endTime: "08:45 AM",
    status: "resolved",
    assignedTo: "Mike Operator",
    resolution: "Setup completed successfully",
  },
  {
    id: 4,
    machine: "Robotic Arm #3",
    reason: "Calibration required after welding inconsistency detected",
    category: "quality",
    duration: "1h 30m",
    impact: "210 units",
    startTime: "04:15 PM",
    endTime: "05:45 PM",
    status: "in-progress",
    assignedTo: "Alex Quality",
    resolution: null,
  },
  {
    id: 5,
    machine: "Packaging Unit",
    reason: "Label printer jam - requires cleaning and recalibration",
    category: "breakdown",
    duration: "55m",
    impact: "110 units",
    startTime: "11:20 AM",
    endTime: "12:15 PM",
    status: "resolved",
    assignedTo: "James Engineer",
    resolution: "Printer cleaned and recalibrated",
  },
  {
    id: 6,
    machine: "Quality Scanner",
    reason: "Raw material delivery delay from supplier",
    category: "material",
    duration: "2h 30m",
    impact: "500 units",
    startTime: "09:00 AM",
    endTime: "11:30 AM",
    status: "resolved",
    assignedTo: "Logistics Team",
    resolution: "Material delivered and production resumed",
  },
];

const preventionStrategies = [
  {
    strategy: "Predictive Maintenance",
    effectiveness: 85,
    implementation: 75,
    impact: "High",
  },
  {
    strategy: "Spare Parts Inventory",
    effectiveness: 90,
    implementation: 60,
    impact: "Medium",
  },
  {
    strategy: "Operator Training",
    effectiveness: 70,
    implementation: 85,
    impact: "High",
  },
  {
    strategy: "Process Automation",
    effectiveness: 95,
    implementation: 40,
    impact: "Very High",
  },
];

const FactoryDowntime = () => {
  const [time, setTime] = useState(new Date());
  const [filter, setFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [timeRange, setTimeRange] = useState("week");
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [expandedStrategies, setExpandedStrategies] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredDowntime = recentDowntime.filter((item) => {
    const matchesStatus = filter === "all" || item.status === filter;
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.machine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reason.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesCategory && matchesSearch;
  });

  const statCards = [
    {
      title: "Total Downtime",
      value: "42.5h",
      change: "-8.2%",
      icon: Clock,
      color: { bg: "bg-red-100", text: "text-red-600" },
      trend: "down",
      subtitle: "This week",
    },
    {
      title: "Downtime Cost",
      value: "$21,250",
      change: "-12.5%",
      icon: DollarSign,
      color: { bg: "bg-amber-100", text: "text-amber-600" },
      trend: "down",
      subtitle: "Lost production",
    },
    {
      title: "Avg Resolution Time",
      value: "1.8h",
      change: "-0.3h",
      icon: Target,
      color: { bg: "bg-blue-100", text: "text-blue-600" },
      trend: "up",
      subtitle: "Per incident",
    },
    {
      title: "MTBF",
      value: "142h",
      change: "+18h",
      icon: Shield,
      color: { bg: "bg-green-100", text: "text-green-600" },
      trend: "up",
      subtitle: "Mean Time Between Failure",
    },
    {
      title: "MTTR",
      value: "2.1h",
      change: "-0.4h",
      icon: Wrench,
      color: { bg: "bg-purple-100", text: "text-purple-600" },
      trend: "down",
      subtitle: "Mean Time To Repair",
    },
    {
      title: "Availability",
      value: "94.7%",
      change: "+1.2%",
      icon: CheckCircle,
      color: { bg: "bg-emerald-100", text: "text-emerald-600" },
      trend: "up",
      subtitle: "Overall",
    },
  ];

  const totalDowntimeHours = downtimeByCategory.reduce(
    (sum, item) => sum + item.hours,
    0,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
              <Pause className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Downtime Analytics
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Track, analyze, and reduce production downtime
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

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {statCards.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Downtime Trend Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Downtime Trend
              </h3>
              <p className="text-sm text-gray-600">
                Weekly downtime hours and incidents
              </p>
            </div>
            <select
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={downtimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" fontSize={11} stroke="#666" />
                <YAxis yAxisId="left" fontSize={11} stroke="#666" />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  fontSize={11}
                  stroke="#666"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  yAxisId="left"
                  dataKey="hours"
                  name="Downtime Hours"
                  fill="#ef4444"
                  radius={[2, 2, 0, 0]}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="incidents"
                  name="Incidents"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Downtime by Category */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Downtime by Category
              </h3>
              <p className="text-sm text-gray-600">
                Breakdown of {totalDowntimeHours} total hours
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">
                {totalDowntimeHours}h
              </div>
              <div className="text-xs text-red-600">Total downtime</div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={downtimeByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percentage }) =>
                    `${category}: ${percentage}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="hours"
                >
                  {downtimeByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Downtime Incidents & Machine Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Recent Downtime Incidents */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Recent Downtime Incidents
                  </h3>
                  <p className="text-sm text-gray-600">
                    {filteredDowntime.length} incidents found •{" "}
                    {
                      filteredDowntime.filter((d) => d.status === "active")
                        .length
                    }{" "}
                    active
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search incidents..."
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
                    <option value="active">Active</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>

                  <select
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="breakdown">Breakdown</option>
                    <option value="setup">Setup</option>
                    <option value="material">Material</option>
                    <option value="quality">Quality</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
              {filteredDowntime.length === 0 ? (
                <div className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No incidents found
                  </h3>
                  <p className="text-gray-600">
                    All systems are running smoothly
                  </p>
                </div>
              ) : (
                filteredDowntime.map((incident) => (
                  <div
                    key={incident.id}
                    className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedMachine(incident)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            incident.category === "breakdown"
                              ? "bg-red-100"
                              : incident.category === "maintenance"
                                ? "bg-blue-100"
                                : incident.category === "setup"
                                  ? "bg-amber-100"
                                  : "bg-gray-100"
                          }`}
                        >
                          {incident.category === "breakdown" ? (
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                          ) : incident.category === "maintenance" ? (
                            <Wrench className="h-5 w-5 text-blue-600" />
                          ) : (
                            <Settings className="h-5 w-5 text-gray-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">
                              {incident.machine}
                            </h4>
                            <span
                              className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                                incident.status === "resolved"
                                  ? "bg-green-100 text-green-800"
                                  : incident.status === "in-progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {incident.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {incident.reason}
                          </p>

                          <div className="flex flex-wrap gap-4 text-xs">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span className="text-gray-700">
                                {incident.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Package className="h-3 w-3 text-gray-400" />
                              <span className="text-gray-700">
                                Impact: {incident.impact}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 text-gray-400" />
                              <span className="text-gray-700">
                                {incident.startTime} - {incident.endTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div
                          className={`px-2 py-1 rounded-md text-xs font-medium ${
                            incident.category === "breakdown"
                              ? "bg-red-100 text-red-800"
                              : incident.category === "maintenance"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {incident.category.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Machine Downtime Analysis */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Top Machines by Downtime
            </h3>
            <div className="space-y-3">
              {machinesDowntime.map((machine, index) => (
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
                    <span className="text-sm font-bold text-gray-900">
                      {machine.downtime}h
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        machine.category === "breakdown"
                          ? "bg-red-500"
                          : machine.category === "maintenance"
                            ? "bg-blue-500"
                            : machine.category === "setup"
                              ? "bg-amber-500"
                              : "bg-green-500"
                      }`}
                      style={{ width: `${(machine.downtime / 15) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>{machine.incidents} incidents</span>
                    <span>Avg: {machine.avgDuration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention Strategies */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              <h3 className="text-lg font-bold text-gray-900">
                Prevention Strategies
              </h3>
            </div>

            <div className="space-y-3">
              {preventionStrategies.map((strategy, index) => {
                const isExpanded = expandedStrategies[index];
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedStrategies((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      className="w-full p-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <div className="font-medium text-gray-900 text-left">
                          {strategy.strategy}
                        </div>
                        <div className="text-xs text-gray-500">
                          Impact: {strategy.impact}
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-3 bg-gray-50 border-t border-gray-200">
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">
                                Effectiveness
                              </span>
                              <span className="font-medium text-gray-900">
                                {strategy.effectiveness}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="h-2 rounded-full bg-green-500"
                                style={{ width: `${strategy.effectiveness}%` }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">
                                Implementation
                              </span>
                              <span className="font-medium text-gray-900">
                                {strategy.implementation}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="h-2 rounded-full bg-blue-500"
                                style={{ width: `${strategy.implementation}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Root Cause Analysis & Cost Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Root Cause Analysis */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-bold text-gray-900">
              Root Cause Analysis
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">
                Most Common Issues
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    Spindle motor overheating
                  </span>
                  <span className="text-sm font-medium text-gray-900">42%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    Material feed jams
                  </span>
                  <span className="text-sm font-medium text-gray-900">28%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    Sensor calibration drift
                  </span>
                  <span className="text-sm font-medium text-gray-900">18%</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-green-50 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">
                Recommended Actions
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Implement predictive maintenance schedule</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Upgrade cooling systems on CNC machines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Enhanced operator training program</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Automated sensor calibration system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cost Impact Analysis */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-5 w-5 text-green-500" />
            <h3 className="text-lg font-bold text-gray-900">
              Cost Impact Analysis
            </h3>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Direct Costs</div>
                <div className="text-lg font-bold text-gray-900 mt-1">
                  $15,800
                </div>
                <div className="text-xs text-gray-500">Labor & parts</div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Lost Production</div>
                <div className="text-lg font-bold text-gray-900 mt-1">
                  $5,450
                </div>
                <div className="text-xs text-gray-500">Revenue impact</div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">
                ROI Opportunities
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    Predictive Maintenance
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    28% ROI
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    Spare Parts Inventory
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    15% ROI
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    Operator Training
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    42% ROI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                Downtime reduced by 8.2% this week
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Target: &lt;5% downtime
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-md transition-shadow text-sm font-medium">
              Schedule Maintenance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryDowntime;
