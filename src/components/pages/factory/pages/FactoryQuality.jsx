import React, { useState, useEffect } from "react";
import {
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
  Plus,
  RefreshCw,
  Search,
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
  Star,
  Timer,
  DollarSign,
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
const QualityCard = ({
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
             
            </div>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
            {status && (
              <div
                className={`mt-2 px-2 py-1 rounded-full text-xs font-medium inline-block ${
                  status === "excellent"
                    ? "bg-green-100 text-green-800"
                    : status === "good"
                      ? "bg-blue-100 text-blue-800"
                      : status === "warning"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                }`}
              >
                {status === "excellent"
                  ? "Excellent"
                  : status === "good"
                    ? "Good"
                    : status === "warning"
                      ? "Warning"
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

const QualityIssueCard = ({
  id,
  product,
  defect,
  severity,
  quantity,
  line,
  inspector,
  time,
  status,
  action,
}) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" };
      case "major":
        return {
          bg: "bg-amber-100",
          text: "text-amber-700",
          dot: "bg-amber-500",
        };
      case "minor":
        return { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700", dot: "bg-gray-500" };
    }
  };

  const colors = getSeverityColor(severity);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors.bg}`}>
            <AlertTriangle className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{product}</h4>
            <div className="flex items-center gap-2 mt-1">
              <div className={`h-2 w-2 rounded-full ${colors.dot}`} />
              <span className={`text-xs font-medium ${colors.text}`}>
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{quantity}</div>
          <div className="text-xs text-gray-500">Units affected</div>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-sm text-gray-700">{defect}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs mb-3">
        <div className="flex items-center gap-2">
          <Factory className="h-3.5 w-3.5 text-gray-500" />
          <div>
            <div className="text-gray-600">Line</div>
            <div className="font-medium text-gray-900">{line}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Users className="h-3.5 w-3.5 text-gray-500" />
          <div>
            <div className="text-gray-600">Inspector</div>
            <div className="font-medium text-gray-900">{inspector}</div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div className="text-xs">
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="h-3 w-3" />
              <span>{time}</span>
            </div>
            <div className="text-gray-500">Action: {action}</div>
          </div>
          <div className="flex items-center gap-2">
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
            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const QualityGauge = ({ value, label, max = 100, size = "medium" }) => {
  const percentage = (value / max) * 100;

  const getColor = (val) => {
    if (val >= 98) return "text-green-500";
    if (val >= 95) return "text-blue-500";
    if (val >= 90) return "text-amber-500";
    return "text-red-500";
  };

  const getBarColor = (val) => {
    if (val >= 98) return "bg-green-500";
    if (val >= 95) return "bg-blue-500";
    if (val >= 90) return "bg-amber-500";
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
              className={`${textSize} font-bold text-gray-900 ${getColor(value)}`}
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
            className={getColor(value)}
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
const qualityData = [
  { day: "Mon", fpy: 97.2, defect: 2.8, rework: 1.2 },
  { day: "Tue", fpy: 98.1, defect: 1.9, rework: 0.9 },
  { day: "Wed", fpy: 98.8, defect: 1.2, rework: 0.6 },
  { day: "Thu", fpy: 97.5, defect: 2.5, rework: 1.1 },
  { day: "Fri", fpy: 99.2, defect: 0.8, rework: 0.4 },
  { day: "Sat", fpy: 96.8, defect: 3.2, rework: 1.5 },
  { day: "Sun", fpy: 95.4, defect: 4.6, rework: 2.1 },
];

const qualityIssues = [
  // // {
  // //   id: 1,
  // //   product: "Model X-2024 Chassis",
  // //   defect: "Surface scratch on right panel",
  // //   severity: "minor",
  // //   quantity: 12,
  // //   line: "Assembly Line A",
  // //   inspector: "John QC",
  // //   time: "2 hours ago",
  // //   status: "resolved",
  // //   action: "Re-polished",
  // // },
  // // {
  // //   id: 2,
  // //   product: "Component Brackets",
  // //   defect: "Misaligned mounting holes",
  // //   severity: "major",
  // //   quantity: 45,
  // //   line: "CNC Production",
  // //   inspector: "Sarah Inspect",
  // //   time: "4 hours ago",
  // //   status: "in-progress",
  // //   action: "Re-machining",
  // // },
  // // {
  // //   id: 3,
  // //   product: "Frame Assembly",
  // //   defect: "Weld penetration insufficient",
  // //   severity: "critical",
  // //   quantity: 8,
  // //   line: "Welding Station",
  // //   inspector: "Mike Quality",
  // //   time: "6 hours ago",
  // //   status: "open",
  // //   action: "Re-welding required",
  // // },
  // {
  //   id: 4,
  //   product: "Final Assembly Units",
  //   defect: "Loose electrical connections",
  //   severity: "major",
  //   quantity: 23,
  //   line: "Quality Control",
  //   inspector: "Alex Check",
  //   time: "1 day ago",
  //   status: "resolved",
  //   action: "Re-tightened",
  // },
  {
    id: 5,
    product: "Packaged Units",
    defect: "Incorrect labeling",
    severity: "minor",
    quantity: 67,
    line: "Packaging Line",
    inspector: "James Verify",
    time: "2 days ago",
    status: "resolved",
    action: "Relabeled",
  },
  {
    id: 6,
    product: "Painted Components",
    defect: "Paint unevenness",
    severity: "minor",
    quantity: 18,
    line: "Painting Booth",
    inspector: "Emma Audit",
    time: "3 days ago",
    status: "open",
    action: "Re-painting",
  },
];

const defectAnalysis = [
  {
    type: "Surface Defects",
    count: 125,
    percentage: 35,
    cost: 12500,
    color: "#3b82f6",
  },
  {
    type: "Dimensional",
    count: 85,
    percentage: 24,
    cost: 8500,
    color: "#10b981",
  },
  {
    type: "Assembly Errors",
    count: 72,
    percentage: 20,
    cost: 7200,
    color: "#f59e0b",
  },
  {
    type: "Material Issues",
    count: 45,
    percentage: 13,
    cost: 4500,
    color: "#ef4444",
  },
  {
    type: "Electrical",
    count: 28,
    percentage: 8,
    cost: 2800,
    color: "#8b5cf6",
  },
];

const qualityCards = [
  {
    title: "First Pass Yield",
    value: "98.7",
    target: "98",
    change: "+0.7%",
    icon: CheckCircle,
    color: { bg: "bg-green-100", text: "text-green-600" },
    trend: "up",
    unit: "%",
    subtitle: "Initial quality pass rate",
    status: "excellent",
  },
  {
    title: "Defect Rate",
    value: "1.3",
    target: "2",
    change: "-0.7%",
    icon: AlertTriangle,
    color: { bg: "bg-red-100", text: "text-red-600" },
    trend: "down",
    unit: "%",
    subtitle: "Overall defect percentage",
    status: "good",
  },
  {
    title: "Rework Rate",
    value: "0.8",
    target: "1.5",
    change: "-0.7%",
    icon: RotateCcw,
    color: { bg: "bg-amber-100", text: "text-amber-600" },
    trend: "down",
    unit: "%",
    subtitle: "Percentage requiring rework",
    status: "good",
  },
  {
    title: "Customer Returns",
    value: "0.4",
    target: "0.5",
    change: "-0.1%",
    icon: Package,
    color: { bg: "bg-blue-100", text: "text-blue-600" },
    trend: "down",
    unit: "%",
    subtitle: "Returned products rate",
    status: "excellent",
  },
  {
    title: "Inspection Pass",
    value: "99.2",
    target: "99",
    change: "+0.2%",
    icon: Shield,
    color: { bg: "bg-emerald-100", text: "text-emerald-600" },
    trend: "up",
    unit: "%",
    subtitle: "Final inspection pass rate",
    status: "excellent",
  },
  {
    title: "Quality Cost",
    value: "$12.5K",
    target: "$15K",
    change: "-2.5K",
    icon: DollarSign,
    color: { bg: "bg-purple-100", text: "text-purple-600" },
    trend: "down",
    subtitle: "Monthly quality-related costs",
  },
];

const FactoryQuality = () => {
  const [time, setTime] = useState(new Date());
  const [timeRange, setTimeRange] = useState("week");
  const [filter, setFilter] = useState("all");
  const [selectedIssue, setSelectedIssue] = useState(qualityIssues[0]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredIssues = qualityIssues.filter((issue) => {
    const matchesSeverity = filter === "all" || issue.severity === filter;
    const matchesSearch =
      searchQuery === "" ||
      issue.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.defect.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSeverity && matchesSearch;
  });

  const calculateTotalDefects = () => {
    return defectAnalysis.reduce((sum, defect) => sum + defect.count, 0);
  };

  const calculateQualityCost = () => {
    return defectAnalysis.reduce((sum, defect) => sum + defect.cost, 0);
  };

  const totalDefects = calculateTotalDefects();
  const totalCost = calculateQualityCost();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-emerald-600 to-green-500 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Quality Control
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Comprehensive quality monitoring and defect tracking
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

      {/* Quality Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {qualityCards.map((card, index) => (
          <QualityCard key={index} {...card} />
        ))}
      </div>

      {/* Quality Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Quality Trend Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Quality Performance Trend
              </h3>
              <p className="text-sm text-gray-600">
                Weekly quality metrics overview
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
              <ComposedChart data={qualityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" domain={[90, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line
                  type="monotone"
                  dataKey="fpy"
                  name="First Pass Yield %"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="defect"
                  name="Defect Rate %"
                  stroke="#ef4444"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Line
                  type="monotone"
                  dataKey="rework"
                  name="Rework Rate %"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  strokeDasharray="3 3"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Defect Analysis */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Defect Analysis
              </h3>
              <p className="text-sm text-gray-600">Breakdown by defect type</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">
                {totalDefects}
              </div>
              <div className="text-xs text-gray-600">
                Total defects this month
              </div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={defectAnalysis}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, percentage }) => `${type}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {defectAnalysis.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quality Issues & Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Quality Issues Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Quality Issues
                </h3>
                <p className="text-sm text-gray-600">
                  Recent quality issues and defects
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search issues..."
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
                  <option value="all">All Severity</option>
                  <option value="critical">Critical</option>
                  <option value="major">Major</option>
                  <option value="minor">Minor</option>
                </select>

                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  New Issue
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              {filteredIssues.map((issue) => (
                <QualityIssueCard
                  key={issue.id}
                  {...issue}
                  onClick={() => setSelectedIssue(issue)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selected Issue Details & Actions */}
        <div className="space-y-6">
          {/* Selected Issue Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Issue Details</h3>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <Maximize2 className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-3 rounded-lg ${
                    selectedIssue.severity === "critical"
                      ? "bg-red-100"
                      : selectedIssue.severity === "major"
                        ? "bg-amber-100"
                        : "bg-blue-100"
                  }`}
                >
                  <AlertTriangle
                    className={`h-6 w-6 ${
                      selectedIssue.severity === "critical"
                        ? "text-red-600"
                        : selectedIssue.severity === "major"
                          ? "text-amber-600"
                          : "text-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {selectedIssue.product}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-sm font-medium ${
                        selectedIssue.severity === "critical"
                          ? "text-red-600"
                          : selectedIssue.severity === "major"
                            ? "text-amber-600"
                            : "text-blue-600"
                      }`}
                    >
                      {selectedIssue.severity.charAt(0).toUpperCase() +
                        selectedIssue.severity.slice(1)}{" "}
                      Severity
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">{selectedIssue.defect}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Affected Units</span>
                  <span className="font-medium text-gray-900">
                    {selectedIssue.quantity} units
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Production Line</span>
                  <span className="font-medium text-gray-900">
                    {selectedIssue.line}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Inspector</span>
                  <span className="font-medium text-gray-900">
                    {selectedIssue.inspector}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Detected</span>
                  <span className="font-medium text-gray-900">
                    {selectedIssue.time}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status</span>
                  <span
                    className={`font-medium ${
                      selectedIssue.status === "resolved"
                        ? "text-green-600"
                        : selectedIssue.status === "in-progress"
                          ? "text-blue-600"
                          : "text-red-600"
                    }`}
                  >
                    {selectedIssue.status.charAt(0).toUpperCase() +
                      selectedIssue.status.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Action Required</span>
                  <span className="font-medium text-gray-900">
                    {selectedIssue.action}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quality Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  Approve
                </span>
              </button>

              <button className="p-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <RotateCcw className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-gray-900">
                  Rework
                </span>
              </button>

              <button className="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">
                  Report
                </span>
              </button>

              <button className="p-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-gray-900">
                  Reject
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Metrics & Improvement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Quality Metrics */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Quality Metrics
              </h3>
              <p className="text-sm text-gray-600">
                Key quality performance indicators
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <QualityGauge value={98.7} label="First Pass Yield" size="large" />
            <QualityGauge value={99.2} label="Inspection Pass" size="large" />
            <QualityGauge value={1.3} label="Defect Rate" size="large" />
            <QualityGauge value={0.8} label="Rework Rate" size="large" />
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">
              Quality Cost Analysis
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Quality Cost</span>
                <span className="font-medium text-gray-900">
                  ${totalCost.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Cost per Defect</span>
                <span className="font-medium text-gray-900">
                  ${(totalCost / totalDefects).toFixed(0)}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Rework Cost</span>
                <span className="font-medium text-gray-900">$8,200</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Improvement */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Quality Improvement Initiatives
              </h3>
              <p className="text-sm text-gray-600">
                Active quality enhancement programs
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-medium text-gray-900">
                Initiatives
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                  <Target className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Six Sigma Program
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Implement DMAIC methodology to reduce defects by 30% across
                assembly lines
              </p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Status: In Progress</span>
                <span className="text-blue-600 font-medium">
                  Defects reduced by 15%
                </span>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-green-100 rounded-lg">
                  <Eye className="h-4 w-4 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Automated Inspection
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Deploy AI-powered vision systems for automated quality
                inspection
              </p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Status: Planning</span>
                <span className="text-green-600 font-medium">
                  Expected ROI: 45%
                </span>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-amber-100 rounded-lg">
                  <Users className="h-4 w-4 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Operator Training
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Enhanced quality awareness training for production operators
              </p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Status: Active</span>
                <span className="text-amber-600 font-medium">
                  85% completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Standards */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Compliance & Standards
            </h3>
            <p className="text-sm text-gray-600">
              Quality standards and regulatory compliance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-900">ISO 9001:2015</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-xs text-gray-600">Certified since 2020</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div
                className="h-1.5 rounded-full bg-green-500"
                style={{ width: "100%" }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Next audit: Q2 2024
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-900">IATF 16949</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-xs text-gray-600">Automotive standard</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div
                className="h-1.5 rounded-full bg-green-500"
                style={{ width: "100%" }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Valid until Dec 2024
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-900">
                Customer Quality Score
              </span>
              <span className="text-lg font-bold text-gray-900">94.2/100</span>
            </div>
            <div className="text-xs text-gray-600">
              Average customer satisfaction
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div
                className="h-1.5 rounded-full bg-blue-500"
                style={{ width: "94.2%" }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-2">Target: 95/100</div>
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
                First Pass Yield: 98.7% (Target: 98%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {filteredIssues.filter((i) => i.status === "resolved").length}/
                {filteredIssues.length} issues resolved
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

            <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-lg hover:shadow-md transition-shadow text-sm font-medium">
              <Download className="inline-block h-4 w-4 mr-2" />
              Export Quality Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryQuality;
