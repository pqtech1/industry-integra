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
  Download,
  Eye,
  Factory,
  Filter,
  Gauge,
  HardDrive,
  Layers,
  LineChart,
  Package,
  Play,
  RefreshCw,
  Settings,
  Shield,
  Sliders,
  Target,
  Thermometer,
  TrendingDown,
  TrendingUp,
  Users,
  Wifi,
  Zap,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  FileText,
  FilterX,
  Info,
  List,
  Maximize2,
  Minimize2,
  Pause,
  PieChart,
  RotateCcw,
  Search,
  Star,
  Timer,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Trophy,
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
  PieChart as RechartsPieChart,
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
const PerformanceCard = ({
  title,
  value,
  target,
  change,
  icon: Icon,
  color,
  trend,
  unit = "",
  subtitle,
}) => {
  const isPositive = change.includes("+");
  const isAtTarget = parseFloat(value) >= parseFloat(target);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
      <div className="bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1">{title}</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-xl font-bold text-gray-900">
                {value}
                {unit}
              </h3>
              
            </div>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
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
          
        </div>
      </div>
    </div>
  );
};

const OEECard = ({
  machine,
  oee,
  availability,
  performance,
  quality,
  utilization,
  status,
  trend,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          dot: "bg-green-500",
        };
      case "good":
        return { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" };
      case "average":
        return {
          bg: "bg-amber-100",
          text: "text-amber-700",
          dot: "bg-amber-500",
        };
      case "poor":
        return { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700", dot: "bg-gray-500" };
    }
  };

  const colors = getStatusColor(status);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors.bg}`}>
            <Cpu className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{machine}</h4>
            <div className="flex items-center gap-2 mt-1">
              <div className={`h-2 w-2 rounded-full ${colors.dot}`} />
              <span className={`text-xs font-medium ${colors.text}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{oee}%</div>
          <div className="text-xs text-gray-500">OEE</div>
        </div>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-xs">
          <span className="text-gray-600">Availability</span>
          <span className="font-medium text-gray-900">{availability}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-blue-500"
            style={{ width: `${availability}%` }}
          />
        </div>

        <div className="flex justify-between text-xs">
          <span className="text-gray-600">Performance</span>
          <span className="font-medium text-gray-900">{performance}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-green-500"
            style={{ width: `${performance}%` }}
          />
        </div>

        <div className="flex justify-between text-xs">
          <span className="text-gray-600">Quality</span>
          <span className="font-medium text-gray-900">{quality}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-purple-500"
            style={{ width: `${quality}%` }}
          />
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1 text-gray-600">
            <Activity className="h-3 w-3" />
            <span>Utilization: {utilization}%</span>
          </div>
          <div className="flex items-center gap-1">
            {trend === "up" ? (
              <TrendingUpIcon className="h-3 w-3 text-green-500" />
            ) : (
              <TrendingDownIcon className="h-3 w-3 text-red-500" />
            )}
            <span
              className={`font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}
            >
              {trend === "up" ? "Improving" : "Declining"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PerformanceGauge = ({ value, label, max = 100, size = "medium" }) => {
  const percentage = (value / max) * 100;

  const getColor = (val) => {
    if (val >= 90) return "text-green-500";
    if (val >= 80) return "text-blue-500";
    if (val >= 70) return "text-amber-500";
    return "text-red-500";
  };

  const getBarColor = (val) => {
    if (val >= 90) return "bg-green-500";
    if (val >= 80) return "bg-blue-500";
    if (val >= 70) return "bg-amber-500";
    return "bg-red-500";
  };

  const sizeClass = size === "large" ? "h-28 w-28" : "h-20 w-20";
  const textSize = size === "large" ? "text-2xl" : "text-xl";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className={`${textSize} font-bold text-gray-900 ${getColor(percentage)}`}
            >
              {value}%
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
            <span className="font-semibold text-gray-900">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Data
const performanceData = [
  { day: "Mon", oee: 82, production: 1200, efficiency: 85, quality: 95 },
  { day: "Tue", oee: 85, production: 1250, efficiency: 88, quality: 96 },
  { day: "Wed", oee: 88, production: 1300, efficiency: 90, quality: 97 },
  { day: "Thu", oee: 87, production: 1280, efficiency: 89, quality: 96 },
  { day: "Fri", oee: 90, production: 1350, efficiency: 92, quality: 98 },
  { day: "Sat", oee: 78, production: 1150, efficiency: 82, quality: 94 },
  { day: "Sun", oee: 75, production: 1100, efficiency: 80, quality: 92 },
];

const oeeData = [
  {
    machine: "CNC Router #1",
    oee: 92,
    availability: 95,
    performance: 96,
    quality: 98,
    utilization: 88,
    status: "excellent",
    trend: "up",
  },
  {
    machine: "Assembly Robot #3",
    oee: 87,
    availability: 90,
    performance: 92,
    quality: 96,
    utilization: 85,
    status: "good",
    trend: "up",
  },
  {
    machine: "Injection Molder",
    oee: 68,
    availability: 75,
    performance: 82,
    quality: 88,
    utilization: 72,
    status: "poor",
    trend: "down",
  },
  {
    machine: "Packaging Unit #2",
    oee: 85,
    availability: 88,
    performance: 90,
    quality: 95,
    utilization: 82,
    status: "good",
    trend: "up",
  },
  {
    machine: "Quality Scanner",
    oee: 78,
    availability: 85,
    performance: 88,
    quality: 92,
    utilization: 78,
    status: "average",
    trend: "up",
  },
  {
    machine: "Welding Robot #5",
    oee: 90,
    availability: 92,
    performance: 95,
    quality: 97,
    utilization: 90,
    status: "excellent",
    trend: "up",
  },
];

const shiftPerformance = [
  {
    shift: "A (06:00-14:00)",
    oee: 88,
    production: 1450,
    efficiency: 90,
    quality: 97,
    downtime: 2.5,
  },
  {
    shift: "B (14:00-22:00)",
    oee: 85,
    production: 1380,
    efficiency: 88,
    quality: 96,
    downtime: 3.2,
  },
  {
    shift: "C (22:00-06:00)",
    oee: 82,
    production: 1250,
    efficiency: 85,
    quality: 95,
    downtime: 4.1,
  },
];

const productivityData = [
  { metric: "Units per Hour", value: 152, target: 140, trend: "up" },
  { metric: "Cycle Time", value: 42, target: 45, trend: "down" },
  { metric: "Setup Time", value: 18, target: 15, trend: "up" },
  { metric: "First Pass Yield", value: 96.5, target: 95, trend: "up" },
];

const performanceCards = [
  {
    title: "Overall OEE",
    value: "87.2",

    change: "+2.3%",
    icon: Gauge,
    color: { bg: "bg-blue-100", text: "text-blue-600" },
    trend: "up",
    unit: "%",
    subtitle: "Overall Equipment Effectiveness",
  },
  {
    title: "Production Rate",
    value: "1450",

    change: "+3.6%",
    icon: Package,
    color: { bg: "bg-green-100", text: "text-green-600" },
    trend: "up",
    unit: " units/hr",
    subtitle: "Current hourly rate",
  },
  {
    title: "Quality Yield",
    value: "98.7",

    change: "+0.7%",
    icon: Shield,
    color: { bg: "bg-emerald-100", text: "text-emerald-600" },
    trend: "up",
    unit: "%",
    subtitle: "First pass yield",
  },

  {
    title: "Energy Efficiency",
    value: "84.5",

    change: "-0.5%",
    icon: Zap,
    color: { bg: "bg-purple-100", text: "text-purple-600" },
    trend: "down",
    unit: "%",
    subtitle: "Power per unit",
  },
  {
    title: "Operator Efficiency",
    value: "92.3",

    change: "+2.3%",
    icon: Users,
    color: { bg: "bg-cyan-100", text: "text-cyan-600" },
    trend: "up",
    unit: "%",
    subtitle: "Operator performance",
  },
];

const FactoryPerformance = () => {
  const [time, setTime] = useState(new Date());
  const [timeRange, setTimeRange] = useState("week");
  const [selectedMachine, setSelectedMachine] = useState(oeeData[0]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [viewMode, setViewMode] = useState("overview");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateOverallOEE = () => {
    const totalOEE = oeeData.reduce((sum, machine) => sum + machine.oee, 0);
    return (totalOEE / oeeData.length).toFixed(1);
  };

  const calculateAverage = (data, key) => {
    const total = data.reduce((sum, item) => sum + item[key], 0);
    return (total / data.length).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-600 to-green-500 rounded-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Performance Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Comprehensive OEE tracking and performance analytics
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

      {/* Performance Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {performanceCards.map((card, index) => (
          <PerformanceCard key={index} {...card} />
        ))}
      </div>

      {/* OEE Overview & Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* OEE Trend Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                OEE Performance Trend
              </h3>
              <p className="text-sm text-gray-600">
                Weekly Overall Equipment Effectiveness
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
              <ComposedChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" domain={[0, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line
                  type="monotone"
                  dataKey="oee"
                  name="OEE %"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  name="Efficiency %"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Line
                  type="monotone"
                  dataKey="quality"
                  name="Quality %"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="3 3"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* OEE Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">OEE Breakdown</h3>
              <p className="text-sm text-gray-600">
                Overall Equipment Effectiveness components
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">
                {calculateOverallOEE()}%
              </div>
              <div className="text-xs text-green-600">Overall OEE</div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" domain={[0, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  dataKey="availability"
                  name="Availability"
                  fill="#3b82f6"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="performance"
                  name="Performance"
                  fill="#10b981"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="quality"
                  name="Quality"
                  fill="#8b5cf6"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Machine OEE & Productivity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Machine OEE Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Machine OEE Performance
                </h3>
                <p className="text-sm text-gray-600">
                  Individual machine OEE scores and trends
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
              {oeeData.map((machine, index) => (
                <OEECard
                  key={index}
                  {...machine}
                  onClick={() => setSelectedMachine(machine)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Productivity Metrics & Shift Performance */}
        <div className="space-y-6">
          {/* Productivity Metrics */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Productivity Metrics
            </h3>
            <div className="space-y-4">
              {productivityData.map((metric, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">
                      {metric.metric}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        {metric.value}
                        {metric.metric.includes("Time")
                          ? "s"
                          : metric.metric.includes("Yield")
                            ? "%"
                            : ""}
                      </span>
                      {metric.trend === "up" ? (
                        <TrendingUpIcon className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDownIcon className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${
                        metric.trend === "up" ? "bg-green-500" : "bg-red-500"
                      }`}
                      style={{
                        width: `${(metric.value / (metric.target * 1.2)) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>
                      Target: {metric.target}
                      {metric.metric.includes("Time")
                        ? "s"
                        : metric.metric.includes("Yield")
                          ? "%"
                          : ""}
                    </span>
                    <span>
                      {metric.trend === "up" ? "Above target" : "Below target"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shift Performance */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Timer className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-bold text-gray-900">
                Shift Performance
              </h3>
            </div>

            <div className="space-y-3">
              {shiftPerformance.map((shift, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">
                      {shift.shift}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {shift.oee}% OEE
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-gray-600">Production</div>
                      <div className="font-medium text-gray-900">
                        {shift.production} units
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600">Downtime</div>
                      <div className="font-medium text-gray-900">
                        {shift.downtime}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Analysis & Improvement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Performance Analysis */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Performance Analysis
              </h3>
              <p className="text-sm text-gray-600">
                Key performance indicators and insights
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <PerformanceGauge
              value={calculateAverage(oeeData, "availability")}
              label="Availability"
              size="large"
            />
            <PerformanceGauge
              value={calculateAverage(oeeData, "performance")}
              label="Performance"
              size="large"
            />
            <PerformanceGauge
              value={calculateAverage(oeeData, "quality")}
              label="Quality"
              size="large"
            />
            <PerformanceGauge
              value={calculateAverage(oeeData, "utilization")}
              label="Utilization"
              size="large"
            />
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">
              Top Performance Issues
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Injection Molder - Low OEE
                </span>
                <span className="font-medium text-red-600">68% (Poor)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Quality Scanner - High Downtime
                </span>
                <span className="font-medium text-amber-600">22% downtime</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Assembly Robot - Setup Time
                </span>
                <span className="font-medium text-blue-600">
                  18% above target
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Improvement Opportunities */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Improvement Opportunities
              </h3>
              <p className="text-sm text-gray-600">
                Areas for performance enhancement
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-medium text-gray-900">
                Priority List
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Reduce Setup Time
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Implement SMED (Single-Minute Exchange of Die) techniques to
                reduce changeover time by 40%
              </p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Impact: High</span>
                <span className="text-blue-600 font-medium">
                  Estimated OEE Gain: +5%
                </span>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-green-100 rounded-lg">
                  <Shield className="h-4 w-4 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Improve Quality Control
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Implement automated quality inspection system to reduce defects
                by 25%
              </p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Impact: Medium</span>
                <span className="text-green-600 font-medium">
                  Estimated OEE Gain: +3%
                </span>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-amber-100 rounded-lg">
                  <Activity className="h-4 w-4 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Preventive Maintenance
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Schedule predictive maintenance to reduce unplanned downtime by
                30%
              </p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Impact: High</span>
                <span className="text-amber-600 font-medium">
                  Estimated OEE Gain: +4%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benchmarking & Comparison */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Performance Benchmarking
            </h3>
            <p className="text-sm text-gray-600">
              Compare against industry standards and targets
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-900">Current OEE</span>
              <span className="text-lg font-bold text-gray-900">
                {calculateOverallOEE()}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: `${calculateOverallOEE()}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>World Class: 85%</span>
              <span>Industry Avg: 75%</span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-900">
                Quality Benchmark
              </span>
              <span className="text-lg font-bold text-gray-900">98.7%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: "98.7%" }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Target: 98%</span>
              <span>Industry Best: 99%</span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-900">Efficiency Gap</span>
              <span className="text-lg font-bold text-gray-900">-2.3%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-amber-500"
                style={{ width: "85%" }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Current: 84.5%</span>
              <span>Target: 85%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                Overall OEE: {calculateOverallOEE()}% (Target: 85%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {
                  oeeData.filter(
                    (m) => m.status === "excellent" || m.status === "good",
                  ).length
                }
                /{oeeData.length} machines performing well
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

            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:shadow-md transition-shadow text-sm font-medium">
              <Download className="inline-block h-4 w-4 mr-2" />
              Export Performance Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryPerformance;
