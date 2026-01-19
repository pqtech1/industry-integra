// components/pages/process/pages/ProcessFailures.jsx
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
  AlertTriangle,
  AlertCircle,
  XCircle,
  CheckCircle,
  Clock,
  Calendar,
  Download,
  Filter,
  Search,
  Settings,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Target,
  Eye,
  FileText,
  Wrench,
  Zap,
  Thermometer,
  Gauge,
  Shield,
  ShieldAlert,
  AlertOctagon,
  Activity,
  Cpu,
  Factory,
  Package,
  Users,
  Timer,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  AlertCircle as AlertCircleIcon,
  XCircle as XCircleIcon,
  CheckCircle as CheckCircleIcon,
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

export default function ProcessFailures() {
  const [timeRange, setTimeRange] = useState("month");
  const [failureType, setFailureType] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");

  // Failure Overview Stats
  const failureStats = [
    {
      title: "Total Failures",
      value: "124",
      change: "-12%",
      icon: AlertTriangle,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      description: "Last 30 days",
    },
    {
      title: "Critical Failures",
      value: "8",
      change: "-3",
      icon: AlertOctagon,
      color: "text-red-700",
      bgColor: "bg-red-50",
      description: "Require immediate action",
    },
    {
      title: "MTTR",
      value: "2.8",
      change: "-0.5",
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      description: "Mean Time To Repair (hours)",
    },
    {
      title: "Failure Rate",
      value: "1.8%",
      change: "-0.4%",
      icon: TrendingDown,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Of total operations",
    },
  ];

  // Failure Types Distribution
  const failureTypes = [
    { type: "Mechanical", count: 42, percentage: 33.9, color: "#ef4444" },
    { type: "Electrical", count: 28, percentage: 22.6, color: "#f59e0b" },
    { type: "Software", count: 18, percentage: 14.5, color: "#3b82f6" },
    { type: "Sensor", count: 16, percentage: 12.9, color: "#10b981" },
    { type: "Human Error", count: 12, percentage: 9.7, color: "#8b5cf6" },
    { type: "Environmental", count: 8, percentage: 6.5, color: "#06b6d4" },
  ];

  // Failure Trend Data
  const failureTrend = [
    { day: "Mon", failures: 8, downtime: 4.2, resolved: 6 },
    { day: "Tue", failures: 5, downtime: 3.8, resolved: 4 },
    { day: "Wed", failures: 7, downtime: 5.1, resolved: 6 },
    { day: "Thu", failures: 4, downtime: 2.5, resolved: 3 },
    { day: "Fri", failures: 9, downtime: 6.3, resolved: 7 },
    { day: "Sat", failures: 3, downtime: 2.1, resolved: 2 },
    { day: "Sun", failures: 2, downtime: 1.5, resolved: 1 },
  ];

  // Failure Impact Analysis
  const impactData = [
    { impact: "Production Loss", cost: 245000, downtime: 42, failures: 24 },
    { impact: "Quality Issues", cost: 125000, downtime: 28, failures: 18 },
    { impact: "Safety Incidents", cost: 85000, downtime: 15, failures: 8 },
    { impact: "Equipment Damage", cost: 185000, downtime: 32, failures: 12 },
    { impact: "Maintenance Cost", cost: 95000, downtime: 24, failures: 16 },
  ];

  // Sample Failures Data (Detailed)
  const failuresData = [
    {
      id: "FAIL-001",
      equipment: "Conveyor Belt A",
      type: "Mechanical",
      severity: "Critical",
      description: "Belt misalignment causing material spillage",
      reported: "2024-01-15 08:30",
      resolved: "2024-01-15 12:45",
      downtime: 4.25,
      cost: 4500,
      status: "resolved",
      assignedTo: "Maintenance Team A",
      rootCause: "Bearing wear and improper tension",
    },
    {
      id: "FAIL-002",
      equipment: "PLC Controller",
      type: "Software",
      severity: "High",
      description: "Program crash during batch processing",
      reported: "2024-01-14 14:20",
      resolved: "2024-01-15 09:15",
      downtime: 18.92,
      cost: 12500,
      status: "resolved",
      assignedTo: "Automation Team",
      rootCause: "Memory leak in control software",
    },
    {
      id: "FAIL-003",
      equipment: "Temperature Sensor R-102",
      type: "Sensor",
      severity: "Medium",
      description: "Inaccurate temperature readings",
      reported: "2024-01-13 11:45",
      resolved: null,
      downtime: 36.5,
      cost: 2800,
      status: "in-progress",
      assignedTo: "Instrumentation Dept",
      rootCause: "Calibration drift",
    },
    {
      id: "FAIL-004",
      equipment: "Mixer Motor",
      type: "Electrical",
      severity: "Critical",
      description: "Motor overheating and automatic shutdown",
      reported: "2024-01-12 16:30",
      resolved: "2024-01-13 08:00",
      downtime: 15.5,
      cost: 8500,
      status: "resolved",
      assignedTo: "Electrical Team",
      rootCause: "Overloaded motor bearings",
    },
    {
      id: "FAIL-005",
      equipment: "Packaging Line B",
      type: "Human Error",
      severity: "Low",
      description: "Incorrect parameter setting by operator",
      reported: "2024-01-11 09:15",
      resolved: "2024-01-11 10:30",
      downtime: 1.25,
      cost: 1200,
      status: "resolved",
      assignedTo: "Production Supervisor",
      rootCause: "Lack of operator training",
    },
    {
      id: "FAIL-006",
      equipment: "Cooling System",
      type: "Environmental",
      severity: "High",
      description: "Coolant leak detected",
      reported: "2024-01-10 13:45",
      resolved: null,
      downtime: 48.2,
      cost: 9500,
      status: "pending",
      assignedTo: "Maintenance Team B",
      rootCause: "Pipe corrosion",
    },
    {
      id: "FAIL-007",
      equipment: "Robotic Arm C",
      type: "Mechanical",
      severity: "Medium",
      description: "Joints showing excessive wear",
      reported: "2024-01-09 10:20",
      resolved: "2024-01-10 14:30",
      downtime: 28.17,
      cost: 6800,
      status: "resolved",
      assignedTo: "Robotics Team",
      rootCause: "Inadequate lubrication",
    },
    {
      id: "FAIL-008",
      equipment: "SCADA System",
      type: "Software",
      severity: "Critical",
      description: "Network connectivity lost",
      reported: "2024-01-08 07:30",
      resolved: "2024-01-08 09:45",
      downtime: 2.25,
      cost: 3200,
      status: "resolved",
      assignedTo: "IT Support",
      rootCause: "Network switch failure",
    },
  ];

  // Equipment Failure Rate
  const equipmentFailureRate = [
    {
      equipment: "Conveyor System",
      failures: 24,
      mttr: 3.2,
      mtbf: 120,
      availability: 97.4,
    },
    {
      equipment: "Mixers",
      failures: 18,
      mttr: 4.5,
      mtbf: 95,
      availability: 95.3,
    },
    {
      equipment: "Reactors",
      failures: 12,
      mttr: 6.8,
      mtbf: 145,
      availability: 95.3,
    },
    {
      equipment: "Packaging Lines",
      failures: 28,
      mttr: 2.4,
      mtbf: 85,
      availability: 96.7,
    },
    {
      equipment: "QC Equipment",
      failures: 8,
      mttr: 1.8,
      mtbf: 210,
      availability: 99.1,
    },
  ];

  // Root Cause Analysis
  const rootCauseData = [
    { cause: "Wear & Tear", count: 42, percentage: 33.9, color: "#ef4444" },
    {
      cause: "Improper Maintenance",
      count: 28,
      percentage: 22.6,
      color: "#f59e0b",
    },
    { cause: "Operator Error", count: 18, percentage: 14.5, color: "#3b82f6" },
    { cause: "Design Flaws", count: 16, percentage: 12.9, color: "#10b981" },
    {
      cause: "Environmental Factors",
      count: 12,
      percentage: 9.7,
      color: "#8b5cf6",
    },
    { cause: "Software Bugs", count: 8, percentage: 6.5, color: "#06b6d4" },
  ];

  // Failure Prediction
  const predictionData = [
    {
      equipment: "Conveyor Belt A",
      probability: 85,
      expected: "3 days",
      risk: "high",
    },
    {
      equipment: "Mixer Motor B",
      probability: 72,
      expected: "7 days",
      risk: "high",
    },
    {
      equipment: "Temperature Sensor",
      probability: 65,
      expected: "14 days",
      risk: "medium",
    },
    {
      equipment: "PLC Controller",
      probability: 45,
      expected: "30 days",
      risk: "medium",
    },
    {
      equipment: "Cooling Pump",
      probability: 38,
      expected: "45 days",
      risk: "low",
    },
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
              {entry.name.includes("Cost")
                ? `$${entry.value.toLocaleString()}`
                : entry.value}
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
      case "in-progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "pending":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Get severity color
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "High":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100";
      case "Medium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "Low":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Get type color
  const getTypeColor = (type) => {
    switch (type) {
      case "Mechanical":
        return "border-l-4 border-rose-500";
      case "Electrical":
        return "border-l-4 border-amber-500";
      case "Software":
        return "border-l-4 border-blue-500";
      case "Sensor":
        return "border-l-4 border-emerald-500";
      case "Human Error":
        return "border-l-4 border-purple-500";
      case "Environmental":
        return "border-l-4 border-cyan-500";
      default:
        return "border-l-4 border-gray-500";
    }
  };

  // Format cost
  const formatCost = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Process Failures & Downtime Analysis
          </h1>
          <p className="text-gray-500 mt-1">
            Track, analyze, and prevent process failures and equipment downtime
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
          <Select defaultValue="all" onValueChange={setFailureType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Failure Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="mechanical">Mechanical</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="sensor">Sensor</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Failure Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {failureStats.map((stat, index) => {
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
                          isPositive ? "text-rose-600" : "text-emerald-600"
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
          {/* Failure Trend Chart */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Failure Trend Analysis</CardTitle>
              <CardDescription>
                Daily failures and downtime trends
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={failureTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#6b7280" />
                  <YAxis yAxisId="left" stroke="#6b7280" />
                  <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="failures"
                    fill="#ef4444"
                    name="Failures"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="downtime"
                    fill="#f59e0b"
                    name="Downtime (hours)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="resolved"
                    stroke="#10b981"
                    strokeWidth={2}
                    name="Resolved"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Failure Impact Analysis */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-rose-600" />
                Failure Impact Analysis
              </CardTitle>
              <CardDescription>
                Cost and downtime impact by failure category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {impactData.map((impact, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">{impact.impact}</span>
                        <div className="text-sm text-gray-500">
                          {impact.failures} failures, {impact.downtime} hours
                          downtime
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-rose-600">
                          {formatCost(impact.cost)}
                        </div>
                        <div className="text-sm text-gray-500">Total cost</div>
                      </div>
                    </div>
                    <Progress
                      value={(impact.cost / 730000) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Failure Types & Root Causes */}
        <div className="space-y-6">
          {/* Failure Types Distribution */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-blue-600" />
                Failure Types Distribution
              </CardTitle>
              <CardDescription>Breakdown by failure category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={failureTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="count"
                    >
                      {failureTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, "Failures"]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {failureTypes.map((type, index) => (
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
                        {type.percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Root Cause Analysis */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-purple-600" />
                Root Cause Analysis
              </CardTitle>
              <CardDescription>Primary causes of failures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {rootCauseData.map((cause, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: cause.color }}
                      ></div>
                      <span className="text-sm font-medium">{cause.cause}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">{cause.count}</div>
                      <div className="text-xs text-gray-500">
                        {cause.percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Failures Table with Modern Design */}
      <Card className="shadow-lg border-0 overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Recent Failures</CardTitle>
              <CardDescription>
                Detailed failure incidents and status
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <Select defaultValue="all" onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
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
                  <TableHead className="font-semibold">Equipment</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Severity</TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                  <TableHead className="font-semibold text-right">
                    Downtime
                  </TableHead>
                  <TableHead className="font-semibold text-right">
                    Cost
                  </TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {failuresData.map((failure) => (
                  <TableRow
                    key={failure.id}
                    className={`hover:bg-gray-50 transition-colors ${getTypeColor(
                      failure.type
                    )}`}
                  >
                    <TableCell className="font-mono font-semibold">
                      {failure.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Factory className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{failure.equipment}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="font-normal border-gray-300"
                      >
                        {failure.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={getSeverityColor(failure.severity)}
                      >
                        {failure.severity}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px]">
                      <div className="truncate" title={failure.description}>
                        {failure.description}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Clock className="h-3 w-3 text-gray-500" />
                        <span className="font-semibold">
                          {failure.downtime?.toFixed(2) || "Ongoing"}
                        </span>
                        <span className="text-xs text-gray-500">hrs</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-semibold text-rose-600">
                        {failure.cost ? formatCost(failure.cost) : "TBD"}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(failure.status)}
                      >
                        {failure.status === "in-progress"
                          ? "In Progress"
                          : failure.status}
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
                              Failure Details - {failure.id}
                            </DialogTitle>
                            <DialogDescription>
                              Complete information about this failure incident
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Equipment</Label>
                                <div className="text-sm font-medium">
                                  {failure.equipment}
                                </div>
                              </div>
                              <div>
                                <Label>Failure Type</Label>
                                <div className="text-sm font-medium">
                                  {failure.type}
                                </div>
                              </div>
                              <div>
                                <Label>Severity</Label>
                                <Badge
                                  variant="secondary"
                                  className={getSeverityColor(failure.severity)}
                                >
                                  {failure.severity}
                                </Badge>
                              </div>
                              <div>
                                <Label>Status</Label>
                                <Badge
                                  variant="secondary"
                                  className={getStatusColor(failure.status)}
                                >
                                  {failure.status}
                                </Badge>
                              </div>
                            </div>
                            <div>
                              <Label>Description</Label>
                              <div className="text-sm p-3 bg-gray-50 rounded-lg mt-1">
                                {failure.description}
                              </div>
                            </div>
                            <div>
                              <Label>Root Cause</Label>
                              <div className="text-sm p-3 bg-gray-50 rounded-lg mt-1">
                                {failure.rootCause}
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Reported</Label>
                                <div className="text-sm font-medium">
                                  {failure.reported}
                                </div>
                              </div>
                              <div>
                                <Label>Resolved</Label>
                                <div className="text-sm font-medium">
                                  {failure.resolved || "Pending"}
                                </div>
                              </div>
                              <div>
                                <Label>Downtime</Label>
                                <div className="text-sm font-medium">
                                  {failure.downtime
                                    ? `${failure.downtime.toFixed(2)} hours`
                                    : "Ongoing"}
                                </div>
                              </div>
                              <div>
                                <Label>Cost Impact</Label>
                                <div className="text-sm font-medium text-rose-600">
                                  {failure.cost
                                    ? formatCost(failure.cost)
                                    : "TBD"}
                                </div>
                              </div>
                            </div>
                            <div>
                              <Label>Assigned To</Label>
                              <div className="text-sm font-medium">
                                {failure.assignedTo}
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
            Showing {failuresData.length} of 124 failures
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Failure Prediction & Equipment Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Equipment Failure Rate */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Equipment Failure Rate
            </CardTitle>
            <CardDescription>
              MTTR, MTBF, and availability metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {equipmentFailureRate.map((eq, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-medium">{eq.equipment}</span>
                      <div className="text-sm text-gray-500">
                        MTTR: {eq.mttr}h | MTBF: {eq.mtbf}h
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{eq.failures}</div>
                      <div className="text-sm text-gray-500">failures</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={eq.availability} className="h-2 flex-1" />
                    <span className="text-sm font-medium">
                      {eq.availability}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Failure Prediction */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-amber-600" />
              Failure Prediction
            </CardTitle>
            <CardDescription>Predictive maintenance alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {predictionData.map((prediction, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{prediction.equipment}</p>
                      <p className="text-sm text-gray-500">
                        Expected in {prediction.expected}
                      </p>
                    </div>
                    <Badge
                      variant={
                        prediction.risk === "high" ? "destructive" : "secondary"
                      }
                    >
                      {prediction.risk} risk
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={prediction.probability} className="h-2" />
                    <span className="text-sm font-bold">
                      {prediction.probability}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700">
          <AlertTriangle className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Report Failure</div>
            <div className="text-xs opacity-90">New incident report</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <Wrench className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Schedule Maintenance</div>
            <div className="text-xs opacity-80">Preventive maintenance</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <FileText className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Generate Report</div>
            <div className="text-xs opacity-80">Failure analysis report</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <Settings className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Settings</div>
            <div className="text-xs opacity-80">Configure failure tracking</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
