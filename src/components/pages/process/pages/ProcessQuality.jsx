// components/pages/process/pages/ProcessQuality.jsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import {
  Award,
  CheckCircle,
  Target,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart as PieChartIcon,
  Filter,
  Download,
  Search,
  Settings,
  AlertCircle,
  XCircle,
  Clock,
  Calendar,
  Eye,
  FileText,
  Shield,
  Zap,
  Factory,
  Package,
  Users,
  Thermometer,
  Gauge,
  Bell,
  Star,
  CheckSquare,
  AlertTriangle,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Percent,
  Hash,
  LineChart as LineChartIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProcessQuality() {
  const [timeRange, setTimeRange] = useState("month");
  const [qualityMetric, setQualityMetric] = useState("overall");

  // Quality Overview Stats
  const qualityStats = [
    {
      title: "Overall Quality Rate",
      value: "98.4%",
      change: "+0.8%",
      icon: Award,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "First pass yield",
    },
    {
      title: "Defect Rate",
      value: "1.2%",
      change: "-0.3%",
      icon: AlertCircle,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      description: "Of total production",
    },
    {
      title: "Sigma Level",
      value: "4.2σ",
      change: "+0.1",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Process capability",
    },
    {
      title: "Customer Returns",
      value: "0.8%",
      change: "-0.2%",
      icon: Package,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Return rate",
    },
  ];

  // Quality Metrics by Category
  const qualityMetrics = [
    {
      metric: "First Pass Yield",
      value: 96.8,
      target: 97,
      trend: "+0.5%",
      color: "#10b981",
    },
    {
      metric: "Scrap Rate",
      value: 1.5,
      target: 1.2,
      trend: "-0.2%",
      color: "#ef4444",
    },
    {
      metric: "Rework Rate",
      value: 2.3,
      target: 2.0,
      trend: "-0.3%",
      color: "#f59e0b",
    },
    {
      metric: "PPM (Defects)",
      value: 1250,
      target: 1000,
      trend: "-150",
      color: "#3b82f6",
    },
    {
      metric: "OEE Quality",
      value: 98.5,
      target: 99,
      trend: "+0.2%",
      color: "#8b5cf6",
    },
    {
      metric: "Cpk Value",
      value: 1.42,
      target: 1.33,
      trend: "+0.05",
      color: "#06b6d4",
    },
  ];

  // Quality Trend Data
  const qualityTrend = [
    { week: "W1", fpy: 96.2, defects: 1.8, rework: 2.8 },
    { week: "W2", fpy: 96.8, defects: 1.6, rework: 2.5 },
    { week: "W3", fpy: 97.2, defects: 1.4, rework: 2.2 },
    { week: "W4", fpy: 97.8, defects: 1.2, rework: 1.9 },
    { week: "W5", fpy: 98.2, defects: 1.0, rework: 1.6 },
    { week: "W6", fpy: 98.4, defects: 0.9, rework: 1.4 },
  ];

  // Defect Analysis by Type
  const defectTypes = [
    { type: "Dimensional", count: 42, percentage: 28, color: "#ef4444" },
    { type: "Surface Finish", count: 36, percentage: 24, color: "#f59e0b" },
    { type: "Material", count: 24, percentage: 16, color: "#3b82f6" },
    { type: "Assembly", count: 21, percentage: 14, color: "#10b981" },
    { type: "Electrical", count: 18, percentage: 12, color: "#8b5cf6" },
    { type: "Packaging", count: 9, percentage: 6, color: "#06b6d4" },
  ];

  // Quality Control Checkpoints
  const qcCheckpoints = [
    {
      checkpoint: "Raw Material Inspection",
      pass: 98.5,
      fail: 1.5,
      color: "#3b82f6",
    },
    { checkpoint: "In-Process QC", pass: 97.2, fail: 2.8, color: "#10b981" },
    { checkpoint: "Final Inspection", pass: 99.1, fail: 0.9, color: "#f59e0b" },
    { checkpoint: "Packaging QC", pass: 98.8, fail: 1.2, color: "#8b5cf6" },
    { checkpoint: "Shipping Audit", pass: 99.5, fail: 0.5, color: "#ef4444" },
  ];

  // Quality Issues Data
  const qualityIssues = [
    {
      id: "QI-001",
      product: "Valve Assembly A",
      defect: "Surface scratch > 0.5mm",
      severity: "Major",
      detected: "2024-01-15 10:30",
      quantity: 24,
      station: "Final Inspection",
      status: "contained",
      action: "Rework required",
      assignedTo: "QC Team A",
    },
    {
      id: "QI-002",
      product: "Pump Housing B",
      defect: "Diameter out of tolerance",
      severity: "Critical",
      detected: "2024-01-14 14:15",
      quantity: 8,
      station: "Machining QC",
      status: "investigating",
      action: "Hold production",
      assignedTo: "Quality Engineer",
    },
    {
      id: "QI-003",
      product: "Control Panel C",
      defect: "Loose connection",
      severity: "Minor",
      detected: "2024-01-13 09:45",
      quantity: 42,
      station: "Assembly Line",
      status: "resolved",
      action: "Re-torque connections",
      assignedTo: "Assembly Team",
    },
    {
      id: "QI-004",
      product: "Gear Set D",
      defect: "Material hardness low",
      severity: "Major",
      detected: "2024-01-12 16:20",
      quantity: 15,
      station: "Raw Material QC",
      status: "pending",
      action: "Return to supplier",
      assignedTo: "Supplier Quality",
    },
    {
      id: "QI-005",
      product: "Sensor Module E",
      defect: "Calibration drift",
      severity: "Minor",
      detected: "2024-01-11 11:30",
      quantity: 32,
      station: "Testing Station",
      status: "resolved",
      action: "Recalibration",
      assignedTo: "Calibration Team",
    },
    {
      id: "QI-006",
      product: "Hydraulic Cylinder",
      defect: "Seal leakage",
      severity: "Critical",
      detected: "2024-01-10 13:45",
      quantity: 6,
      station: "Pressure Test",
      status: "investigating",
      action: "Root cause analysis",
      assignedTo: "Quality Manager",
    },
  ];

  // Process Capability Analysis
  const processCapability = [
    { process: "Machining", cpk: 1.68, ppk: 1.62, sigma: 5.2, yield: 99.8 },
    { process: "Assembly", cpk: 1.42, ppk: 1.38, sigma: 4.3, yield: 99.3 },
    { process: "Welding", cpk: 1.85, ppk: 1.79, sigma: 5.5, yield: 99.9 },
    { process: "Painting", cpk: 1.28, ppk: 1.22, sigma: 3.9, yield: 99.0 },
    { process: "Testing", cpk: 1.95, ppk: 1.9, sigma: 5.8, yield: 99.9 },
  ];

  // Customer Quality Metrics
  const customerMetrics = [
    {
      metric: "Customer Complaints",
      value: 8,
      target: 10,
      trend: "-2",
      color: "#ef4444",
    },
    {
      metric: "On-Time Delivery",
      value: 98.2,
      target: 97,
      trend: "+1.2%",
      color: "#10b981",
    },
    {
      metric: "Customer Satisfaction",
      value: 4.8,
      target: 4.5,
      trend: "+0.3",
      color: "#f59e0b",
    },
    {
      metric: "Return Rate",
      value: 0.8,
      target: 1.2,
      trend: "-0.4%",
      color: "#3b82f6",
    },
  ];

  // SPC Control Charts Data
  const spcData = [
    { sample: 1, value: 24.8, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 2, value: 24.6, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 3, value: 24.9, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 4, value: 24.7, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 5, value: 25.1, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 6, value: 24.5, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 7, value: 24.8, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 8, value: 24.6, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 9, value: 24.9, ucl: 25.5, lcl: 23.5, target: 24.5 },
    { sample: 10, value: 25.2, ucl: 25.5, lcl: 23.5, target: 24.5 },
  ];

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}:{" "}
              {typeof entry.value === "number" && entry.value < 10
                ? entry.value.toFixed(1)
                : entry.value}
              {entry.name.includes("FPY") || entry.name.includes("Rate")
                ? "%"
                : ""}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "resolved":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "contained":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "investigating":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "pending":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Get severity color
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "Major":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100";
      case "Minor":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Format percentage
  const formatPercent = (value) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Process Quality Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Comprehensive quality metrics, defect analysis, and process
            capability
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="month" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="overall" onValueChange={setQualityMetric}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Quality Metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overall">Overall Quality</SelectItem>
              <SelectItem value="defects">Defect Analysis</SelectItem>
              <SelectItem value="process">Process Capability</SelectItem>
              <SelectItem value="customer">Customer Quality</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Quality Report
          </Button>
        </div>
      </div>

      {/* Quality Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {qualityStats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = !stat.change.startsWith("-");
          return (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow border-0"
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-500 mb-1 truncate">
                      {stat.title}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <h3
                        className={`text-2xl lg:text-3xl font-bold ${stat.color} truncate`}
                      >
                        {stat.value}
                      </h3>
                      <span
                        className={`flex items-center text-sm font-medium whitespace-nowrap ${
                          isPositive ? "text-emerald-600" : "text-rose-600"
                        }`}
                      >
                        {isPositive ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 truncate">
                      {stat.description}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-xl flex-shrink-0 ${stat.bgColor}`}
                  >
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quality Trend Chart */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Quality Performance Trend</CardTitle>
              <CardDescription>
                Weekly quality metrics evolution
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={qualityTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" domain={[94, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="fpy"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="First Pass Yield %"
                  />
                  <Line
                    type="monotone"
                    dataKey="defects"
                    stroke="#ef4444"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Defect Rate %"
                  />
                  <Line
                    type="monotone"
                    dataKey="rework"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="Rework Rate %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quality Metrics Grid */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Quality Metrics Dashboard
              </CardTitle>
              <CardDescription>
                Key quality indicators vs targets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {qualityMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {metric.metric}
                        </h4>
                        <div className="flex items-center gap-1 mt-1">
                          {metric.trend.startsWith("+") ? (
                            <TrendingUp className="h-3 w-3 text-emerald-600" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-rose-600" />
                          )}
                          <span
                            className={`text-xs ${
                              metric.trend.startsWith("+")
                                ? "text-emerald-600"
                                : "text-rose-600"
                            }`}
                          >
                            {metric.trend}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className="text-xl font-bold"
                          style={{ color: metric.color }}
                        >
                          {typeof metric.value === "number" &&
                          metric.value < 100
                            ? metric.value.toFixed(1)
                            : metric.value}
                          {metric.metric.includes("PPM") ? "" : "%"}
                        </div>
                        <div className="text-xs text-gray-500">
                          Target: {metric.target}
                          {metric.metric.includes("PPM") ? "" : "%"}
                        </div>
                      </div>
                    </div>
                    <Progress
                      value={(metric.value / metric.target) * 100}
                      className="h-2"
                      indicatorClassName="bg-current"
                      style={{ "--progress-primary": metric.color }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Defect Analysis */}
        <div className="space-y-6">
          {/* Defect Types */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-rose-600" />
                Defect Analysis
              </CardTitle>
              <CardDescription>Breakdown by defect type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={defectTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="count"
                    >
                      {defectTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, "Defects"]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {defectTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: type.color }}
                      ></div>
                      <span className="text-sm">{type.type}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">{type.count}</div>
                      <div className="text-xs text-gray-500">
                        {type.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quality Control Checkpoints */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <CheckSquare className="h-5 w-5 text-emerald-600" />
                QC Checkpoints
              </CardTitle>
              <CardDescription>
                Pass/fail rates by inspection stage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {qcCheckpoints.map((checkpoint, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        {checkpoint.checkpoint}
                      </span>
                      <span className="text-sm text-gray-500">
                        {checkpoint.pass}%
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <Progress
                        value={checkpoint.pass}
                        className="h-2 flex-1"
                        indicatorClassName="bg-emerald-500"
                      />
                      <Progress
                        value={checkpoint.fail}
                        className="h-2 w-16"
                        indicatorClassName="bg-rose-500"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Pass: {checkpoint.pass}%</span>
                      <span>Fail: {checkpoint.fail}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quality Issues Table */}
      <Card className="shadow-lg border-0 overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Quality Issues & Defects</CardTitle>
              <CardDescription>
                Recent quality incidents and resolutions
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="major">Major</SelectItem>
                  <SelectItem value="minor">Minor</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-[100px] font-semibold">ID</TableHead>
                  <TableHead className="font-semibold">Product</TableHead>
                  <TableHead className="font-semibold">Defect</TableHead>
                  <TableHead className="font-semibold">Severity</TableHead>
                  <TableHead className="font-semibold">Detected At</TableHead>
                  <TableHead className="font-semibold text-right">
                    Quantity
                  </TableHead>
                  <TableHead className="font-semibold">Station</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {qualityIssues.map((issue) => (
                  <TableRow
                    key={issue.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="font-mono font-semibold">
                      {issue.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{issue.product}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px]">
                      <div className="truncate" title={issue.defect}>
                        {issue.defect}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={getSeverityColor(issue.severity)}
                      >
                        {issue.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-gray-500" />
                        <span className="text-sm">{issue.detected}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-semibold">{issue.quantity}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-normal">
                        {issue.station}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(issue.status)}
                      >
                        {issue.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>
                              Quality Issue Details - {issue.id}
                            </DialogTitle>
                            <DialogDescription>
                              Complete information about this quality incident
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Product</Label>
                                <div className="text-sm font-medium">
                                  {issue.product}
                                </div>
                              </div>
                              <div>
                                <Label>Defect</Label>
                                <div className="text-sm font-medium">
                                  {issue.defect}
                                </div>
                              </div>
                              <div>
                                <Label>Severity</Label>
                                <Badge
                                  variant="secondary"
                                  className={getSeverityColor(issue.severity)}
                                >
                                  {issue.severity}
                                </Badge>
                              </div>
                              <div>
                                <Label>Status</Label>
                                <Badge
                                  variant="secondary"
                                  className={getStatusColor(issue.status)}
                                >
                                  {issue.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Detected At</Label>
                                <div className="text-sm font-medium">
                                  {issue.detected}
                                </div>
                              </div>
                              <div>
                                <Label>Quantity Affected</Label>
                                <div className="text-sm font-medium">
                                  {issue.quantity} units
                                </div>
                              </div>
                              <div>
                                <Label>Detection Station</Label>
                                <div className="text-sm font-medium">
                                  {issue.station}
                                </div>
                              </div>
                              <div>
                                <Label>Assigned To</Label>
                                <div className="text-sm font-medium">
                                  {issue.assignedTo}
                                </div>
                              </div>
                            </div>
                            <div>
                              <Label>Required Action</Label>
                              <div className="text-sm p-3 bg-gray-50 rounded-lg mt-1">
                                {issue.action}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="border-t flex justify-between">
          <div className="text-sm text-gray-500">
            Showing {qualityIssues.length} quality issues
          </div>
          <Button variant="outline">View All Issues</Button>
        </CardFooter>
      </Card>

      {/* Process Capability & Customer Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Process Capability */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-blue-600" />
              Process Capability Analysis
            </CardTitle>
            <CardDescription>Cpk, Ppk, Sigma levels by process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Process</TableHead>
                    <TableHead className="text-right">Cpk</TableHead>
                    <TableHead className="text-right">Ppk</TableHead>
                    <TableHead className="text-right">Sigma</TableHead>
                    <TableHead className="text-right">Yield</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {processCapability.map((process, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {process.process}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="font-semibold text-blue-600">
                          {process.cpk.toFixed(2)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="font-semibold text-purple-600">
                          {process.ppk.toFixed(2)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="font-semibold text-emerald-600">
                          {process.sigma.toFixed(1)}σ
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="font-semibold">
                          {process.yield.toFixed(1)}%
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant="secondary"
                          className={
                            process.cpk >= 1.67
                              ? "bg-emerald-100 text-emerald-800"
                              : process.cpk >= 1.33
                              ? "bg-blue-100 text-blue-800"
                              : process.cpk >= 1.0
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }
                        >
                          {process.cpk >= 1.67
                            ? "Excellent"
                            : process.cpk >= 1.33
                            ? "Good"
                            : process.cpk >= 1.0
                            ? "Marginal"
                            : "Poor"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Customer Quality Metrics */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              Customer Quality Metrics
            </CardTitle>
            <CardDescription>
              Customer-facing quality indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {customerMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-100 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {metric.metric}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        {metric.trend.startsWith("+") ? (
                          <TrendingUp className="h-3 w-3 text-emerald-600" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-rose-600" />
                        )}
                        <span
                          className={`text-xs ${
                            metric.trend.startsWith("+")
                              ? "text-emerald-600"
                              : "text-rose-600"
                          }`}
                        >
                          {metric.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-2xl font-bold ${
                        metric.metric === "Customer Complaints"
                          ? "text-rose-600"
                          : "text-emerald-600"
                      }`}
                    >
                      {typeof metric.value === "number" && metric.value < 10
                        ? metric.value.toFixed(1)
                        : metric.value}
                      {metric.metric.includes("Satisfaction")
                        ? "/5"
                        : metric.metric.includes("Delivery") ||
                          metric.metric.includes("Return")
                        ? "%"
                        : ""}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Target: {metric.target}
                    </div>
                  </div>
                  <Progress
                    value={(metric.value / metric.target) * 100}
                    className="h-1.5 mt-3"
                    indicatorClassName={
                      metric.metric === "Customer Complaints"
                        ? "bg-rose-500"
                        : "bg-emerald-500"
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SPC Control Chart */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChartIcon className="h-5 w-5 text-blue-600" />
            Statistical Process Control (SPC) Chart
          </CardTitle>
          <CardDescription>
            Process variation monitoring (Sample data)
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={spcData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="sample" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Measured Value"
              />
              <Line
                type="monotone"
                dataKey="ucl"
                stroke="#ef4444"
                strokeWidth={1}
                strokeDasharray="5 5"
                name="UCL"
              />
              <Line
                type="monotone"
                dataKey="lcl"
                stroke="#ef4444"
                strokeWidth={1}
                strokeDasharray="5 5"
                name="LCL"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#10b981"
                strokeWidth={1}
                name="Target"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <CheckCircle className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Record Inspection</div>
            <div className="text-xs opacity-90">New QC inspection</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <AlertTriangle className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Report Defect</div>
            <div className="text-xs opacity-80">Document quality issue</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <Target className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Quality Audit</div>
            <div className="text-xs opacity-80">Schedule audit</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <Settings className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Quality Settings</div>
            <div className="text-xs opacity-80">
              Configure quality parameters
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
