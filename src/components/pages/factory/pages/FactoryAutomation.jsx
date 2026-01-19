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
  Battery,
  ChevronRight,
  Grid,
  Home,
  MapPin,
  Maximize2,
  Minimize2,
  Pause,
  RotateCcw,
  Star,
  Target,
  Timer,
  Truck,
  Upload,
  Volume2,
  X,
  ChevronUp,
  ChevronDown,
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
          <TrendingUp className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <TrendingDown className="h-3.5 w-3.5 text-red-500" />
        )}
        <span
          className={`text-xs font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}
        >
          {change}
        </span>
        <span className="text-gray-500 text-xs ml-auto">vs target</span>
      </div>
    </div>
  </div>
);

const MachineCard = ({
  name,
  status,
  efficiency,
  temperature,
  pressure,
  power,
  lastMaintenance,
  type,
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
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors.bg}`}>
            <Cpu className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <div className={`h-2 w-2 rounded-full ${colors.dot}`} />
              <span className={`text-xs font-medium ${colors.text}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{efficiency}%</div>
          <div className="text-xs text-gray-500">Efficiency</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Thermometer className="h-3.5 w-3.5 text-amber-500" />
          <div>
            <div className="text-gray-600">Temp</div>
            <div className="font-medium text-gray-900">{temperature}°C</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="h-3.5 w-3.5 text-blue-500" />
          <div>
            <div className="text-gray-600">Pressure</div>
            <div className="font-medium text-gray-900">{pressure} bar</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="h-3.5 w-3.5 text-purple-500" />
          <div>
            <div className="text-gray-600">Power</div>
            <div className="font-medium text-gray-900">{power} kW</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-cyan-500" />
          <div>
            <div className="text-gray-600">Maint</div>
            <div className="font-medium text-gray-900">{lastMaintenance}</div>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">{type}</span>
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductionGauge = ({ value, label, max = 100, unit = "%" }) => {
  const percentage = (value / max) * 100;

  const getColor = (val) => {
    if (val >= 90) return "text-green-500";
    if (val >= 75) return "text-blue-500";
    if (val >= 60) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className={`text-lg font-bold text-gray-900 ${getColor(percentage)}`}
            >
              {value}
              {unit}
            </div>
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
      <div className="mt-2 text-center">
        <div className="text-xs font-medium text-gray-900">{label}</div>
      </div>
    </div>
  );
};

// Data for charts
const productionData = [
  { time: "06:00", production: 450, target: 500, efficiency: 90 },
  { time: "08:00", production: 520, target: 500, efficiency: 104 },
  { time: "10:00", production: 480, target: 500, efficiency: 96 },
  { time: "12:00", production: 510, target: 500, efficiency: 102 },
  { time: "14:00", production: 490, target: 500, efficiency: 98 },
  { time: "16:00", production: 530, target: 500, efficiency: 106 },
  { time: "18:00", production: 470, target: 500, efficiency: 94 },
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

const energyData = [
  { hour: "00:00", consumption: 1.2, cost: 120 },
  { hour: "04:00", consumption: 1.8, cost: 180 },
  { hour: "08:00", consumption: 2.5, cost: 250 },
  { hour: "12:00", consumption: 2.8, cost: 280 },
  { hour: "16:00", consumption: 2.4, cost: 240 },
  { hour: "20:00", consumption: 1.6, cost: 160 },
];

const qualityMetrics = [
  { metric: "Defect Rate", value: 1.2, target: 2.0, status: "good" },
  { metric: "First Pass Yield", value: 95.8, target: 95.0, status: "good" },
  { metric: "Customer Returns", value: 0.8, target: 1.0, status: "good" },
  { metric: "Rework Rate", value: 2.5, target: 3.0, status: "warning" },
];

const machines = [
  {
    name: "CNC Machine #1",
    status: "running",
    efficiency: 94,
    temperature: 42,
    pressure: 85,
    power: 45,
    lastMaintenance: "3 days",
    type: "Cutting",
  },
  {
    name: "Assembly Line A",
    status: "running",
    efficiency: 89,
    temperature: 38,
    pressure: 72,
    power: 120,
    lastMaintenance: "5 days",
    type: "Assembly",
  },
  {
    name: "Injection Molder",
    status: "maintenance",
    efficiency: 0,
    temperature: 25,
    pressure: 0,
    power: 5,
    lastMaintenance: "Now",
    type: "Molding",
  },
  {
    name: "Robotic Arm #3",
    status: "idle",
    efficiency: 0,
    temperature: 28,
    pressure: 65,
    power: 15,
    lastMaintenance: "1 day",
    type: "Welding",
  },
  {
    name: "Packaging Unit",
    status: "running",
    efficiency: 92,
    temperature: 35,
    pressure: 55,
    power: 25,
    lastMaintenance: "2 days",
    type: "Packaging",
  },
  {
    name: "Quality Scanner",
    status: "error",
    efficiency: 45,
    temperature: 31,
    pressure: 0,
    power: 8,
    lastMaintenance: "7 days",
    type: "Inspection",
  },
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
              <span className="text-gray-600">{entry.name}:</span>
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

const FactoryAutomation = () => {
  const [time, setTime] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [productionMode, setProductionMode] = useState("auto");
  const [selectedView, setSelectedView] = useState("overview");

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
      subtitle: "units today",
    },
    {
      title: "OEE Rate",
      value: "87.2%",
      change: "+2.3%",
      icon: BarChart3,
      color: { bg: "bg-green-100", text: "text-green-600" },
      trend: "up",
      subtitle: "Overall Equipment",
    },
    {
      title: "Energy Consumption",
      value: "1.45MW",
      change: "-3.2%",
      icon: Zap,
      color: { bg: "bg-amber-100", text: "text-amber-600" },
      trend: "down",
      subtitle: "Avg per hour",
    },
    {
      title: "Active Machines",
      value: "24/28",
      change: "+2",
      icon: Cpu,
      color: { bg: "bg-purple-100", text: "text-purple-600" },
      trend: "up",
      subtitle: "Running now",
    },
    {
      title: "Production Cost",
      value: "$12.4K",
      change: "-1.8%",
      icon: DollarSign,
      color: { bg: "bg-cyan-100", text: "text-cyan-600" },
      trend: "down",
      subtitle: "Today",
    },
    {
      title: "Quality Yield",
      value: "98.7%",
      change: "+0.5%",
      icon: Shield,
      color: { bg: "bg-emerald-100", text: "text-emerald-600" },
      trend: "up",
      subtitle: "Pass rate",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-600 to-green-500 rounded-lg">
              <Factory className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Automation System
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Advanced monitoring and control dashboard
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
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="mb-6">
        <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-gray-200 w-fit">
          {["overview", "production", "machines", "analytics"].map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedView === view
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {statCards.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Production Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Production Trend Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Production Trend
              </h3>
              <p className="text-sm text-gray-600">
                Real-time production vs target
              </p>
            </div>
            <div className="flex items-center gap-2">
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
              <ComposedChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  dataKey="production"
                  name="Production"
                  fill="#3b82f6"
                  radius={[2, 2, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  name="Target"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                />
                <ReferenceLine y={500} stroke="#10b981" strokeDasharray="3 3" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Energy Consumption */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Energy Consumption
              </h3>
              <p className="text-sm text-gray-600">
                Power usage and cost analysis
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">1.45 MW</div>
              <div className="text-xs text-green-600">-3.2% vs yesterday</div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Area
                  type="monotone"
                  dataKey="consumption"
                  name="Consumption (MW)"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Machines & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Machine Status Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Machine Status
                </h3>
                <p className="text-sm text-gray-600">
                  Real-time monitoring of all production units
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-lg hover:bg-blue-200 transition-colors">
                  <Filter className="inline-block h-4 w-4 mr-1" />
                  Filter
                </button>
                <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                  <RefreshCw className="inline-block h-4 w-4 mr-1" />
                  Refresh
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {machines.map((machine, index) => (
                <MachineCard key={index} {...machine} />
              ))}
            </div>
          </div>
        </div>

        {/* Performance Gauges */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ProductionGauge value={87.2} label="OEE" />
              <ProductionGauge value={92.5} label="Availability" />
              <ProductionGauge value={88.3} label="Performance" />
              <ProductionGauge value={95.8} label="Quality" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quality Metrics
            </h3>
            <div className="space-y-3">
              {qualityMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{metric.metric}</span>
                    <span
                      className={`font-semibold ${
                        metric.status === "good"
                          ? "text-green-600"
                          : "text-amber-600"
                      }`}
                    >
                      {metric.value}
                      {metric.metric.includes("Rate") ? "%" : ""}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${
                        metric.status === "good"
                          ? "bg-green-500"
                          : "bg-amber-500"
                      }`}
                      style={{
                        width: `${(metric.value / metric.target) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Target: {metric.target}
                    {metric.metric.includes("Rate") ? "%" : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Downtime Analysis */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Downtime Analysis
              </h3>
              <p className="text-sm text-gray-600">Hours lost by category</p>
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
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Machine Performance
              </h3>
              <p className="text-sm text-gray-600">
                Key metrics comparison across machines
              </p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={machinePerformanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} fontSize={10} />
                <Radar
                  name="Availability"
                  dataKey="availability"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.2}
                />
                <Radar
                  name="Performance"
                  dataKey="performance"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.2}
                />
                <Radar
                  name="Quality"
                  dataKey="quality"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.2}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Production Control Panel
            </h3>
            <p className="text-sm text-gray-600">
              Manual override and system controls
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                productionMode === "auto"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              Mode: {productionMode === "auto" ? "Auto" : "Manual"}
            </div>
            <button
              onClick={() =>
                setProductionMode(productionMode === "auto" ? "manual" : "auto")
              }
              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
            >
              {productionMode === "auto"
                ? "Switch to Manual"
                : "Switch to Auto"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="p-4 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 transition-all flex flex-col items-center justify-center gap-2 group">
            <div className="p-3 rounded-lg bg-green-100 group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Start All</span>
          </button>

          <button className="p-4 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 transition-all flex flex-col items-center justify-center gap-2 group">
            <div className="p-3 rounded-lg bg-red-100 group-hover:scale-110 transition-transform">
              <Power className="h-6 w-6 text-red-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">
              Emergency Stop
            </span>
          </button>

          <button className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all flex flex-col items-center justify-center gap-2 group">
            <div className="p-3 rounded-lg bg-blue-100 group-hover:scale-110 transition-transform">
              <Sliders className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Optimize</span>
          </button>

          <button className="p-4 rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-all flex flex-col items-center justify-center gap-2 group">
            <div className="p-3 rounded-lg bg-purple-100 group-hover:scale-110 transition-transform">
              <Download className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">
              Export Data
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                All systems operational
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">99.7% uptime</span>
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
              Generate Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryAutomation;
