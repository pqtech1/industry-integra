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
  Plus,
  RefreshCw,
  Settings,
  Shield,
  Sliders,
  Target,
  Thermometer,
  TrendingDown,
  TrendingUp,
  Truck,
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
const ProductionCard = ({
  title,
  value,
  target,
  change,
  icon: Icon,
  color,
  trend,
  unit = "",
  subtitle,
  status,
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
              <span className="text-xs text-gray-500">
                / {target}
                {unit} target
              </span>
            </div>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
            {status && (
              <div
                className={`mt-2 px-2 py-1 rounded-full text-xs font-medium inline-block ${
                  status === "on-track"
                    ? "bg-green-100 text-green-800"
                    : status === "behind"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {status === "on-track"
                  ? "On Track"
                  : status === "behind"
                    ? "Behind Schedule"
                    : "Critical"}
              </div>
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
          <span
            className={`text-xs ml-auto ${isAtTarget ? "text-green-600" : "text-red-600"}`}
          >
            {isAtTarget ? "✓ At target" : "✗ Below target"}
          </span>
        </div>
      </div>
    </div>
  );
};

const ProductionLineCard = ({
  line,
  status,
  output,
  target,
  efficiency,
  quality,
  currentJob,
  downtime,
  operators,
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
  const achievement = (output / target) * 100;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors.bg}`}>
            <Factory className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{line}</h4>
            <div className="flex items-center gap-2 mt-1">
              <div className={`h-2 w-2 rounded-full ${colors.dot}`} />
              <span className={`text-xs font-medium ${colors.text}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{output}</div>
          <div className="text-xs text-gray-500">Units today</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Target Achievement</span>
          <span className="font-medium text-gray-900">
            {achievement.toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              achievement >= 100
                ? "bg-green-500"
                : achievement >= 80
                  ? "bg-blue-500"
                  : achievement >= 60
                    ? "bg-amber-500"
                    : "bg-red-500"
            }`}
            style={{ width: `${Math.min(achievement, 100)}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs mb-3">
        <div className="flex items-center gap-2">
          <Gauge className="h-3.5 w-3.5 text-blue-500" />
          <div>
            <div className="text-gray-600">Efficiency</div>
            <div className="font-medium text-gray-900">{efficiency}%</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Shield className="h-3.5 w-3.5 text-green-500" />
          <div>
            <div className="text-gray-600">Quality</div>
            <div className="font-medium text-gray-900">{quality}%</div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div className="text-xs">
            <div className="text-gray-600 truncate">{currentJob}</div>
            <div className="text-gray-500">Downtime: {downtime}</div>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3 text-gray-400" />
            <span className="text-xs text-gray-600">{operators}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductionJobCard = ({
  jobId,
  product,
  quantity,
  completed,
  line,
  status,
  startTime,
  endTime,
  priority,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "in-progress":
        return { bg: "bg-blue-100", text: "text-blue-700" };
      case "completed":
        return { bg: "bg-green-100", text: "text-green-700" };
      case "scheduled":
        return { bg: "bg-amber-100", text: "text-amber-700" };
      case "delayed":
        return { bg: "bg-red-100", text: "text-red-700" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700" };
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

  const colors = getStatusColor(status);
  const progress = (completed / quantity) * 100;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-all duration-200 cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-semibold text-gray-900">{product}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-600">Job #{jobId}</span>
            <span
              className={`px-2 py-0.5 rounded-md text-xs font-medium ${colors.bg} ${colors.text}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <span
              className={`px-2 py-0.5 rounded-md text-xs font-medium ${getPriorityColor(priority)}`}
            >
              {priority.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">
            {completed}/{quantity}
          </div>
          <div className="text-xs text-gray-500">Units</div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium text-gray-900">
            {progress.toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              status === "completed"
                ? "bg-green-500"
                : status === "in-progress"
                  ? "bg-blue-500"
                  : "bg-amber-500"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <Factory className="h-3 w-3" />
          <span>{line}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>
            {startTime} - {endTime}
          </span>
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
              {entry.dataKey === "output" ? " units" : "%"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Data
const productionData = [
  { hour: "06:00", output: 420, target: 500, efficiency: 84 },
  { hour: "08:00", output: 520, target: 500, efficiency: 104 },
  { hour: "10:00", output: 480, target: 500, efficiency: 96 },
  { hour: "12:00", output: 510, target: 500, efficiency: 102 },
  { hour: "14:00", output: 490, target: 500, efficiency: 98 },
  { hour: "16:00", output: 530, target: 500, efficiency: 106 },
  { hour: "18:00", output: 470, target: 500, efficiency: 94 },
];

const productionLines = [
  {
    line: "Assembly Line A",
    status: "running",
    output: 2850,
    target: 3000,
    efficiency: 92,
    quality: 98.5,
    currentJob: "Model X-2024 Chassis",
    downtime: "45m",
    operators: 8,
  },
  {
    line: "CNC Production",
    status: "running",
    output: 1920,
    target: 2000,
    efficiency: 88,
    quality: 97.2,
    currentJob: "Component Brackets",
    downtime: "1.2h",
    operators: 6,
  },
  {
    line: "Packaging Line",
    status: "idle",
    output: 0,
    target: 1500,
    efficiency: 0,
    quality: 0,
    currentJob: "Setup for Batch #237",
    downtime: "2.5h",
    operators: 4,
  },
  {
    line: "Painting Booth",
    status: "maintenance",
    output: 0,
    target: 1200,
    efficiency: 0,
    quality: 0,
    currentJob: "Maintenance in progress",
    downtime: "3h",
    operators: 2,
  },
  {
    line: "Quality Control",
    status: "running",
    output: 3120,
    target: 3000,
    efficiency: 96,
    quality: 99.1,
    currentJob: "Final Inspection",
    downtime: "30m",
    operators: 5,
  },
  {
    line: "Welding Station",
    status: "error",
    output: 850,
    target: 1800,
    efficiency: 45,
    quality: 94.8,
    currentJob: "Frame Assembly",
    downtime: "4.2h",
    operators: 6,
  },
];

const productionJobs = [
  {
    jobId: "PROD-2024-001",
    product: "Model X-2024 Chassis",
    quantity: 500,
    completed: 450,
    line: "Assembly Line A",
    status: "in-progress",
    startTime: "08:00",
    endTime: "16:00",
    priority: "high",
  },
  {
    jobId: "PROD-2024-002",
    product: "Component Brackets",
    quantity: 2000,
    completed: 1920,
    line: "CNC Production",
    status: "in-progress",
    startTime: "06:00",
    endTime: "14:00",
    priority: "medium",
  },
  {
    jobId: "PROD-2024-003",
    product: "Final Assembly Units",
    quantity: 300,
    completed: 300,
    line: "Quality Control",
    status: "completed",
    startTime: "10:00",
    endTime: "15:00",
    priority: "low",
  },
  {
    jobId: "PROD-2024-004",
    product: "Frame Assembly",
    quantity: 1000,
    completed: 850,
    line: "Welding Station",
    status: "delayed",
    startTime: "07:00",
    endTime: "13:00",
    priority: "high",
  },
  {
    jobId: "PROD-2024-005",
    product: "Packaged Units",
    quantity: 1500,
    completed: 0,
    line: "Packaging Line",
    status: "scheduled",
    startTime: "14:00",
    endTime: "18:00",
    priority: "medium",
  },
  {
    jobId: "PROD-2024-006",
    product: "Painted Components",
    quantity: 1200,
    completed: 0,
    line: "Painting Booth",
    status: "scheduled",
    startTime: "09:00",
    endTime: "17:00",
    priority: "low",
  },
];

const productionCards = [
  {
    title: "Total Production",
    value: "8,740",
    target: "10,000",
    change: "+12.5%",
    icon: Package,
    color: { bg: "bg-blue-100", text: "text-blue-600" },
    trend: "up",
    unit: " units",
    subtitle: "Today's output",
    status: "on-track",
  },
  {
    title: "Production Rate",
    value: "1,450",
    target: "1,400",
    change: "+3.6%",
    icon: Activity,
    color: { bg: "bg-green-100", text: "text-green-600" },
    trend: "up",
    unit: " units/hr",
    subtitle: "Current hourly rate",
  },
  {
    title: "OEE Score",
    value: "87.2",
    target: "85",
    change: "+2.3%",
    icon: Gauge,
    color: { bg: "bg-purple-100", text: "text-purple-600" },
    trend: "up",
    unit: "%",
    subtitle: "Overall Equipment Effectiveness",
  },
  {
    title: "Quality Yield",
    value: "98.7",
    target: "98",
    change: "+0.7%",
    icon: Shield,
    color: { bg: "bg-emerald-100", text: "text-emerald-600" },
    trend: "up",
    unit: "%",
    subtitle: "First pass yield",
  },
  {
    title: "Downtime",
    value: "3.2",
    target: "2.5",
    change: "-0.7%",
    icon: AlertTriangle,
    color: { bg: "bg-amber-100", text: "text-amber-600" },
    trend: "down",
    unit: "%",
    subtitle: "Percentage of downtime",
    status: "behind",
  },
  {
    title: "Energy Efficiency",
    value: "84.5",
    target: "85",
    change: "-0.5%",
    icon: Zap,
    color: { bg: "bg-cyan-100", text: "text-cyan-600" },
    trend: "down",
    unit: "%",
    subtitle: "Power per unit",
    status: "behind",
  },
];

const FactoryProduction = () => {
  const [time, setTime] = useState(new Date());
  const [timeRange, setTimeRange] = useState("day");
  const [filter, setFilter] = useState("all");
  const [selectedLine, setSelectedLine] = useState(productionLines[0]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredJobs = productionJobs.filter((job) => {
    const matchesStatus = filter === "all" || job.status === filter;
    const matchesSearch =
      searchQuery === "" ||
      job.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobId.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const calculateTotalOutput = () => {
    return productionLines.reduce((sum, line) => sum + line.output, 0);
  };

  const calculateAverageEfficiency = () => {
    const runningLines = productionLines.filter(
      (line) => line.status === "running",
    );
    if (runningLines.length === 0) return 0;
    const totalEfficiency = runningLines.reduce(
      (sum, line) => sum + line.efficiency,
      0,
    );
    return (totalEfficiency / runningLines.length).toFixed(1);
  };

  const totalOutput = calculateTotalOutput();
  const averageEfficiency = calculateAverageEfficiency();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg">
              <Package className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Production Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Real-time production tracking and output monitoring
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

      {/* Production Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {productionCards.map((card, index) => (
          <ProductionCard key={index} {...card} />
        ))}
      </div>

      {/* Production Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Production Output Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Production Output Trend
              </h3>
              <p className="text-sm text-gray-600">
                Hourly production vs target
              </p>
            </div>
            <select
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  dataKey="output"
                  name="Production Output"
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

        {/* Production Lines Overview */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Production Lines Status
              </h3>
              <p className="text-sm text-gray-600">
                Real-time line performance
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">
                {totalOutput.toLocaleString()} units
              </div>
              <div className="text-xs text-gray-600">Total output today</div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productionLines}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="line"
                  fontSize={10}
                  stroke="#666"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis fontSize={11} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  dataKey="output"
                  name="Output (units)"
                  fill="#3b82f6"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="efficiency"
                  name="Efficiency %"
                  fill="#10b981"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Production Lines & Jobs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Production Lines Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Production Lines
                </h3>
                <p className="text-sm text-gray-600">
                  Real-time monitoring of all production lines
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
              {productionLines.map((line, index) => (
                <ProductionLineCard
                  key={index}
                  {...line}
                  onClick={() => setSelectedLine(line)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Production Jobs */}
        <div className="space-y-6">
          {/* Selected Line Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Line Details</h3>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <Maximize2 className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Factory className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {selectedLine.line}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-sm font-medium ${
                        selectedLine.status === "running"
                          ? "text-green-600"
                          : selectedLine.status === "error"
                            ? "text-red-600"
                            : "text-amber-600"
                      }`}
                    >
                      {selectedLine.status.charAt(0).toUpperCase() +
                        selectedLine.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Output</div>
                  <div className="text-lg font-bold text-gray-900">
                    {selectedLine.output.toLocaleString()} units
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Efficiency</div>
                  <div className="text-lg font-bold text-gray-900">
                    {selectedLine.efficiency}%
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Current Job</span>
                  <span className="font-medium text-gray-900">
                    {selectedLine.currentJob}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Downtime</span>
                  <span className="font-medium text-gray-900">
                    {selectedLine.downtime}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Quality</span>
                  <span className="font-medium text-gray-900">
                    {selectedLine.quality}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Operators</span>
                  <span className="font-medium text-gray-900">
                    {selectedLine.operators}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Production Control */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Production Control
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Play className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  Start All
                </span>
              </button>

              <button className="p-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Pause className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-gray-900">
                  Pause All
                </span>
              </button>

              <button className="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <RotateCcw className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">Reset</span>
              </button>

              <button className="p-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Plus className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-gray-900">
                  New Job
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Production Jobs & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Production Jobs */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Production Jobs
              </h3>
              <p className="text-sm text-gray-600">
                Active and scheduled production jobs
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
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
                <option value="all">All Jobs</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="scheduled">Scheduled</option>
                <option value="delayed">Delayed</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {filteredJobs.map((job, index) => (
              <ProductionJobCard key={index} {...job} />
            ))}
          </div>
        </div>

        {/* Production Analytics */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Production Analytics
              </h3>
              <p className="text-sm text-gray-600">
                Performance metrics and insights
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-900">
                    Total Output
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {totalOutput.toLocaleString()}
                </div>
                <div className="text-xs text-gray-600">
                  Units produced today
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-900">
                    Avg Efficiency
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {averageEfficiency}%
                </div>
                <div className="text-xs text-gray-600">Across active lines</div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h4 className="font-semibold text-gray-900">
                  Production Issues
                </h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">
                    Welding Station downtime
                  </span>
                  <span className="font-medium text-red-600">4.2 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">
                    Painting Booth maintenance
                  </span>
                  <span className="font-medium text-amber-600">3 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Packaging Line idle</span>
                  <span className="font-medium text-blue-600">2.5 hours</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUpIcon className="h-5 w-5 text-emerald-500" />
                <h4 className="font-semibold text-gray-900">Top Performers</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Quality Control Line</span>
                  <span className="font-medium text-emerald-600">
                    104% of target
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Assembly Line A</span>
                  <span className="font-medium text-emerald-600">
                    95% of target
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">CNC Production</span>
                  <span className="font-medium text-emerald-600">
                    96% of target
                  </span>
                </div>
              </div>
            </div>
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
                {productionLines.filter((l) => l.status === "running").length}/
                {productionLines.length} lines active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Daily target: 10,000 units (
                {((totalOutput / 10000) * 100).toFixed(1)}% achieved)
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

            <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:shadow-md transition-shadow text-sm font-medium">
              <Download className="inline-block h-4 w-4 mr-2" />
              Export Production Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryProduction;
