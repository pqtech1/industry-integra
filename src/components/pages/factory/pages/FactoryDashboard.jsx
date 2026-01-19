import React, { useState, useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  DollarSign,
  Download,
  Eye,
  Factory,
  Filter,
  HardDrive,
  Layers,
  LineChart,
  Package,
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
  Zap,
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

// Components
const StatCard = ({ title, value, change, icon: Icon, color, trend }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-xs font-medium text-gray-600 mb-1">{title}</p>
        <h3 className="text-lg font-bold text-gray-900">{value}</h3>
      </div>
      <div className={`p-2 rounded-lg ${color.bg}`}>
        <Icon className={`h-5 w-5 ${color.text}`} />
      </div>
    </div>
    <div className="flex items-center gap-1 mt-2">
      {trend === "up" ? (
        <TrendingUp className="h-3 w-3 text-green-500" />
      ) : (
        <TrendingDown className="h-3 w-3 text-red-500" />
      )}
      <span
        className={`text-xs font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}
      >
        {change}
      </span>
      <span className="text-gray-500 text-xs ml-auto">vs yesterday</span>
    </div>
  </div>
);

const MachineStatus = ({
  name,
  status,
  efficiency,
  temperature,
  lastMaintenance,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "running":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          dot: "bg-green-500",
        };
      case "idle":
        return { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" };
      case "maintenance":
        return {
          bg: "bg-amber-100",
          text: "text-amber-700",
          dot: "bg-amber-500",
        };
      case "error":
        return { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700", dot: "bg-gray-500" };
    }
  };

  const colors = getStatusColor(status);

  return (
    <div className="bg-white p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-sm cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-md ${colors.bg}`}>
            <Cpu className={`h-4 w-4 ${colors.text}`} />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
            <div className="flex items-center gap-1 mt-0.5">
              <div className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
              <span className={`text-xs font-medium ${colors.text}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-base font-bold text-gray-900">{efficiency}%</div>
          <div className="text-[10px] text-gray-500">Efficiency</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs mt-2">
        <div className="flex items-center gap-1">
          <Thermometer className="h-3 w-3 text-amber-500" />
          <span className="text-gray-600">Temp:</span>
          <span className="font-medium text-gray-900">{temperature}°C</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3 text-blue-500" />
          <span className="text-gray-600">Maint:</span>
          <span className="font-medium text-gray-900">{lastMaintenance}</span>
        </div>
      </div>
    </div>
  );
};

const EfficiencyGauge = ({ value, label, size = "medium" }) => {
  const getColor = (val) => {
    if (val >= 90) return "text-green-500";
    if (val >= 75) return "text-blue-500";
    if (val >= 60) return "text-amber-500";
    return "text-red-500";
  };

  const sizeClass = size === "large" ? "h-28 w-28" : "h-16 w-16";
  const textSize = size === "large" ? "text-2xl" : "text-lg";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`${textSize} font-bold text-gray-900`}>
              {value}%
            </div>
            <div className="text-[10px] text-gray-600">{label}</div>
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
            strokeDasharray={`${(value / 100) * 283} 283`}
            className={getColor(value)}
          />
        </svg>
      </div>
    </div>
  );
};

const AlertCard = ({ type, title, message, time, priority }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-red-200 bg-red-50";
      case "medium":
        return "border-amber-200 bg-amber-50";
      case "low":
        return "border-blue-200 bg-blue-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <div
      className={`p-3 rounded-lg border ${getPriorityColor(priority)} hover:shadow-sm transition-shadow cursor-pointer`}
    >
      <div className="flex items-start gap-2">
        <div
          className={`p-1.5 rounded-md ${
            type === "error"
              ? "bg-red-100"
              : type === "warning"
                ? "bg-amber-100"
                : type === "info"
                  ? "bg-blue-100"
                  : "bg-gray-100"
          }`}
        >
          <AlertTriangle
            className={`h-4 w-4 ${
              type === "error"
                ? "text-red-600"
                : type === "warning"
                  ? "text-amber-600"
                  : type === "info"
                    ? "text-blue-600"
                    : "text-gray-600"
            }`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-semibold text-gray-900 truncate">
              {title}
            </h4>
            <span className="text-[10px] text-gray-500 shrink-0 ml-2">
              {time}
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{message}</p>
        </div>
      </div>
    </div>
  );
};

// Production Data for Charts
const productionData = [
  { time: "00:00", production: 120, target: 150, efficiency: 80 },
  { time: "04:00", production: 145, target: 150, efficiency: 97 },
  { time: "08:00", production: 160, target: 150, efficiency: 107 },
  { time: "12:00", production: 155, target: 150, efficiency: 103 },
  { time: "16:00", production: 140, target: 150, efficiency: 93 },
  { time: "20:00", production: 130, target: 150, efficiency: 87 },
];

const machinePerformanceData = [
  { name: "CNC #1", availability: 95, performance: 92, quality: 96 },
  { name: "Assembly A", availability: 88, performance: 85, quality: 90 },
  { name: "Molder", availability: 92, performance: 88, quality: 94 },
  { name: "Robot #3", availability: 96, performance: 90, quality: 92 },
  { name: "Packaging", availability: 90, performance: 87, quality: 95 },
  { name: "Scanner", availability: 85, performance: 82, quality: 88 },
];

const downtimeData = [
  { reason: "Maintenance", hours: 45, color: "#3b82f6" },
  { reason: "Breakdown", hours: 28, color: "#ef4444" },
  { reason: "Setup", hours: 22, color: "#f59e0b" },
  { reason: "Material Wait", hours: 18, color: "#10b981" },
  { reason: "Quality Check", hours: 12, color: "#8b5cf6" },
];

const energyConsumptionData = [
  { hour: "00:00", consumption: 1.2, cost: 120 },
  { hour: "04:00", consumption: 1.8, cost: 180 },
  { hour: "08:00", consumption: 2.5, cost: 250 },
  { hour: "12:00", consumption: 2.8, cost: 280 },
  { hour: "16:00", consumption: 2.4, cost: 240 },
  { hour: "20:00", consumption: 1.6, cost: 160 },
];

const FactoryDashboard = () => {
  const [time, setTime] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const statCards = [
    {
      title: "Total Production",
      value: "12,450",
      change: "+8.5%",
      icon: Package,
      color: { bg: "bg-blue-100", text: "text-blue-600" },
      trend: "up",
    },
    {
      title: "OEE Rate",
      value: "87.2%",
      change: "+2.3%",
      icon: BarChart3,
      color: { bg: "bg-green-100", text: "text-green-600" },
      trend: "up",
    },
    {
      title: "Energy Consumption",
      value: "1.45MW",
      change: "-3.2%",
      icon: Zap,
      color: { bg: "bg-amber-100", text: "text-amber-600" },
      trend: "down",
    },
    {
      title: "Active Machines",
      value: "24/28",
      change: "+2",
      icon: Cpu,
      color: { bg: "bg-purple-100", text: "text-purple-600" },
      trend: "up",
    },
    {
      title: "Production Cost",
      value: "$12.4K",
      change: "-1.8%",
      icon: DollarSign,
      color: { bg: "bg-cyan-100", text: "text-cyan-600" },
      trend: "down",
    },
    {
      title: "Quality Yield",
      value: "98.7%",
      change: "+0.5%",
      icon: Shield,
      color: { bg: "bg-emerald-100", text: "text-emerald-600" },
      trend: "up",
    },
  ];

  const machines = [
    {
      name: "CNC Machine #1",
      status: "running",
      efficiency: 94,
      temperature: 42,
      lastMaintenance: "3 days",
    },
    {
      name: "Assembly Line A",
      status: "running",
      efficiency: 89,
      temperature: 38,
      lastMaintenance: "5 days",
    },
    {
      name: "Injection Molder",
      status: "maintenance",
      efficiency: 0,
      temperature: 25,
      lastMaintenance: "Now",
    },
    {
      name: "Robotic Arm #3",
      status: "idle",
      efficiency: 0,
      temperature: 28,
      lastMaintenance: "1 day",
    },
    {
      name: "Packaging Unit",
      status: "running",
      efficiency: 92,
      temperature: 35,
      lastMaintenance: "2 days",
    },
    {
      name: "Quality Scanner",
      status: "error",
      efficiency: 45,
      temperature: 31,
      lastMaintenance: "7 days",
    },
  ];

  const alerts = [
    {
      type: "warning",
      title: "Temperature Alert",
      message: "Machine #5 running 5°C above optimal",
      time: "10 min ago",
      priority: "medium",
    },
    {
      type: "error",
      title: "Production Halt",
      message: "Assembly Line B stopped due to sensor error",
      time: "25 min ago",
      priority: "high",
    },
    {
      type: "info",
      title: "Maintenance Due",
      message: "Scheduled maintenance for CNC Machine #3",
      time: "1 hour ago",
      priority: "low",
    },
    {
      type: "warning",
      title: "Low Efficiency",
      message: "Packaging unit running at 72% efficiency",
      time: "2 hours ago",
      priority: "medium",
    },
  ];

  const efficiencyMetrics = [
    { label: "Overall OEE", value: 87, color: "text-green-500" },
    { label: "Availability", value: 92, color: "text-blue-500" },
    { label: "Performance", value: 89, color: "text-amber-500" },
    { label: "Quality", value: 95, color: "text-emerald-500" },
  ];

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
                <span className="text-gray-600">{entry.dataKey}:</span>
              </div>
              <span className="font-semibold text-gray-900">
                {entry.value}
                {entry.dataKey === "consumption"
                  ? " MW"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-600 to-slate-500 rounded-lg">
              <Factory className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Factory Automation Dashboard
              </h1>
              <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                Real-time monitoring and control panel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="flex items-center gap-1.5 text-gray-600">
                <Clock className="h-3.5 w-3.5" />
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
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                <Bell className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-1.5 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                <Settings className="h-4 w-4 text-gray-600" />
              </button>
            </div>
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
        {/* Production Trend Chart */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Production Trend
              </h3>
              <p className="text-xs text-gray-600">Last 24 hours</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-xs text-gray-600">Production</span>
              </div>
              <div className="flex items-center gap-1 ml-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-600">Target</span>
              </div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" fontSize={10} stroke="#666" />
                <YAxis fontSize={10} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line
                  type="monotone"
                  dataKey="production"
                  name="Production"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  name="Target"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Energy Consumption Chart */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Energy Consumption
              </h3>
              <p className="text-xs text-gray-600">Power usage vs cost</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">1.45 MW</div>
              <div className="text-xs text-green-600">-3.2% vs yesterday</div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={energyConsumptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" fontSize={10} stroke="#666" />
                <YAxis fontSize={10} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  dataKey="consumption"
                  name="Consumption (MW)"
                  fill="#f59e0b"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="cost"
                  name="Cost ($)"
                  fill="#8b5cf6"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Machines & Alerts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Machine Status */}
        <div className="lg:col-span-2">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Machine Status
                </h3>
                <p className="text-xs text-gray-600">
                  Real-time monitoring of production units
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                  <Filter className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                  <RefreshCw className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {machines.map((machine, index) => (
                <MachineStatus key={index} {...machine} />
              ))}
            </div>
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-base font-bold text-gray-900">
                System Alerts
              </h3>
              <p className="text-xs text-gray-600">Recent notifications</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-600">4 Active</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <AlertCard key={index} {...alert} />
            ))}
          </div>

          <button className="w-full mt-4 py-2 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-1.5">
            <Eye className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              View All Alerts
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Downtime Analysis */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Downtime Analysis
              </h3>
              <p className="text-xs text-gray-600">Hours lost by category</p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={downtimeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="hours"
                >
                  {downtimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Machine Performance Radar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Machine Performance
              </h3>
              <p className="text-xs text-gray-600">Key metrics comparison</p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={machinePerformanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" fontSize={10} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} fontSize={10} />
                <Radar
                  name="Availability"
                  dataKey="availability"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Performance"
                  dataKey="performance"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Quality"
                  dataKey="quality"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Efficiency Gauges */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Efficiency Metrics
              </h3>
              <p className="text-xs text-gray-600">
                Overall Equipment Effectiveness
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {efficiencyMetrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center">
                <EfficiencyGauge
                  value={metric.value}
                  // label={metric.label}
                  size="medium"
                />
                <div className="text-xs text-gray-600 mt-2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <button className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all flex items-center justify-center gap-2 group">
          <div className="p-2 rounded-md bg-blue-100 group-hover:scale-110 transition-transform">
            <Play className="h-5 w-5 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Start All</span>
        </button>

        <button className="p-3 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-all flex items-center justify-center gap-2 group">
          <div className="p-2 rounded-md bg-amber-100 group-hover:scale-110 transition-transform">
            <Power className="h-5 w-5 text-amber-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">
            Emergency Stop
          </span>
        </button>

        <button className="p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center justify-center gap-2 group">
          <div className="p-2 rounded-md bg-emerald-100 group-hover:scale-110 transition-transform">
            <Sliders className="h-5 w-5 text-emerald-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Optimize</span>
        </button>

        <button className="p-3 rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-all flex items-center justify-center gap-2 group">
          <div className="p-2 rounded-md bg-purple-100 group-hover:scale-110 transition-transform">
            <Download className="h-5 w-5 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">
            Generate Report
          </span>
        </button>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
            <span>All systems operational • 99.7% uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm transition-colors ${
                autoRefresh
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${autoRefresh ? "animate-spin" : ""}`}
              />
              Auto-refresh: {autoRefresh ? "ON" : "OFF"}
            </button>
            <button className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm rounded-md hover:shadow-md transition-shadow">
              Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryDashboard;
