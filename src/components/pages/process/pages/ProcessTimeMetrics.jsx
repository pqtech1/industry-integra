// components/pages/process/pages/TimeMetrics.jsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Scatter,
  ReferenceLine,
} from "recharts";
import {
  Clock,
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  CheckCircle,
  Zap,
  Calendar,
  Timer,
  RefreshCw,
  Activity,
  BarChart3,
  Download,
  Filter,
  Settings,
  Eye,
  FileText,
  Bell,
  Search,
  ChevronRight,
  Info,
  Users,
  Wrench,
  Play,
  Pause,
  StopCircle,
  Hourglass,
  Gauge,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";

export default function TimeMetrics() {
  const [timeRange, setTimeRange] = useState("day");
  const [metricType, setMetricType] = useState("all");
  const [showBenchmarks, setShowBenchmarks] = useState(true);

  // Time Metrics Stats
  const timeStats = [
    {
      title: "Mean Time Between Failures",
      value: "450.2",
      unit: "hours",
      change: "+12.5%",
      target: "500h",
      icon: Clock,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Increased reliability",
    },
    {
      title: "Mean Time To Repair",
      value: "2.8",
      unit: "hours",
      change: "-0.3h",
      target: "2.5h",
      icon: Wrench,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Faster repairs",
    },
    {
      title: "Mean Time To Respond",
      value: "18.5",
      unit: "minutes",
      change: "-2.3m",
      target: "15m",
      icon: Timer,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Improved response",
    },
    {
      title: "Production Cycle Time",
      value: "42.3",
      unit: "seconds",
      change: "-1.8s",
      target: "40s",
      icon: RefreshCw,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      description: "Cycle optimization",
    },
  ];

  // MTBF Trend Analysis
  const mtbfTrend = [
    { month: "Jan", mtbf: 380, failures: 8, availability: 98.2 },
    { month: "Feb", mtbf: 395, failures: 7, availability: 98.5 },
    { month: "Mar", mtbf: 410, failures: 6, availability: 98.8 },
    { month: "Apr", mtbf: 425, failures: 5, availability: 99.1 },
    { month: "May", mtbf: 438, failures: 4, availability: 99.3 },
    { month: "Jun", mtbf: 450, failures: 3, availability: 99.5 },
  ];

  // MTTR Analysis by Equipment
  const mttrByEquipment = [
    {
      equipment: "CNC Machine A",
      mttr: 3.2,
      target: 2.5,
      frequency: 2,
      severity: "medium",
    },
    {
      equipment: "Robotic Arm B",
      mttr: 1.8,
      target: 1.5,
      frequency: 4,
      severity: "low",
    },
    {
      equipment: "Assembly Line C",
      mttr: 4.5,
      target: 3.0,
      frequency: 1,
      severity: "high",
    },
    {
      equipment: "Quality Scanner",
      mttr: 2.1,
      target: 1.8,
      frequency: 3,
      severity: "low",
    },
    {
      equipment: "Packaging System",
      mttr: 3.8,
      target: 3.0,
      frequency: 2,
      severity: "medium",
    },
    {
      equipment: "Material Handler",
      mttr: 5.2,
      target: 4.0,
      frequency: 1,
      severity: "high",
    },
  ];

  // Response Time Analysis
  const responseTimeData = [
    { hour: "06:00", response: 22.5, target: 20, incidents: 2 },
    { hour: "08:00", response: 18.3, target: 20, incidents: 3 },
    { hour: "10:00", response: 15.8, target: 20, incidents: 4 },
    { hour: "12:00", response: 21.2, target: 20, incidents: 1 },
    { hour: "14:00", response: 16.7, target: 20, incidents: 5 },
    { hour: "16:00", response: 19.4, target: 20, incidents: 2 },
    { hour: "18:00", response: 24.1, target: 20, incidents: 1 },
    { hour: "20:00", response: 27.8, target: 20, incidents: 0 },
  ];

  // Cycle Time Analysis
  const cycleTimeData = [
    { product: "Model X-100", cycle: 38.5, target: 35, efficiency: 110.0 },
    { product: "Model Y-200", cycle: 42.8, target: 40, efficiency: 107.0 },
    { product: "Model Z-300", cycle: 56.2, target: 50, efficiency: 112.4 },
    { product: "Model A-400", cycle: 31.7, target: 30, efficiency: 105.7 },
    { product: "Model B-500", cycle: 48.3, target: 45, efficiency: 107.3 },
    { product: "Model C-600", cycle: 39.1, target: 38, efficiency: 102.9 },
  ];

  // Time-Based Performance Metrics
  const performanceMetrics = [
    {
      metric: "Uptime",
      value: "99.85%",
      target: "99.9%",
      trend: "+0.05%",
      status: "good",
    },
    {
      metric: "Downtime",
      value: "1.08%",
      target: "0.9%",
      trend: "-0.02%",
      status: "warning",
    },
    {
      metric: "Schedule Adherence",
      value: "95.2%",
      target: "97%",
      trend: "+0.8%",
      status: "warning",
    },
    {
      metric: "Changeover Time",
      value: "32min",
      target: "30min",
      trend: "-2min",
      status: "good",
    },
  ];

  // Historical Time Analysis
  const historicalData = [
    { period: "Q1 2023", mtbf: 385, mttr: 3.5, response: 25.2, cycle: 45.8 },
    { period: "Q2 2023", mtbf: 410, mttr: 3.2, response: 22.8, cycle: 43.2 },
    { period: "Q3 2023", mtbf: 425, mttr: 3.0, response: 20.5, cycle: 41.5 },
    { period: "Q4 2023", mtbf: 438, mttr: 2.8, response: 18.5, cycle: 40.2 },
    { period: "Q1 2024", mtbf: 450, mttr: 2.5, response: 16.8, cycle: 38.5 },
  ];

  // Time-Based Alerts
  const timeAlerts = [
    {
      id: "ALT-001",
      metric: "MTTR",
      equipment: "Assembly Line C",
      value: "4.5h",
      threshold: "3.0h",
      status: "critical",
    },
    {
      id: "ALT-002",
      metric: "Response Time",
      equipment: "All Systems",
      value: "24.1m",
      threshold: "20m",
      status: "warning",
    },
    {
      id: "ALT-003",
      metric: "Cycle Time",
      equipment: "Model Z-300",
      value: "56.2s",
      threshold: "50s",
      status: "warning",
    },
    {
      id: "ALT-004",
      metric: "MTBF",
      equipment: "Material Handler",
      value: "380h",
      threshold: "400h",
      status: "info",
    },
  ];

  // Shift Performance
  const shiftPerformance = [
    { shift: "Morning (6-14)", avgCycle: 40.2, efficiency: 98.5, incidents: 3 },
    {
      shift: "Afternoon (14-22)",
      avgCycle: 42.8,
      efficiency: 96.2,
      incidents: 5,
    },
    { shift: "Night (22-6)", avgCycle: 45.3, efficiency: 94.8, incidents: 2 },
  ];

  // Time Improvement Initiatives
  const improvementInitiatives = [
    {
      initiative: "Predictive Maintenance",
      target: "Increase MTBF by 15%",
      progress: 65,
      eta: "2024-03-15",
    },
    {
      initiative: "Response Team Training",
      target: "Reduce MTTR by 20%",
      progress: 45,
      eta: "2024-02-28",
    },
    {
      initiative: "Process Optimization",
      target: "Reduce Cycle Time by 10%",
      progress: 80,
      eta: "2024-01-31",
    },
    {
      initiative: "Automated Monitoring",
      target: "Improve Response Time by 30%",
      progress: 30,
      eta: "2024-04-30",
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
              {entry.name}: {entry.value}
              {entry.name.includes("MTBF")
                ? " hours"
                : entry.name.includes("MTTR")
                ? " hours"
                : entry.name.includes("Response")
                ? " minutes"
                : entry.name.includes("Cycle")
                ? " seconds"
                : entry.name.includes("Availability")
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
      case "good":
      case "low":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "warning":
      case "medium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "critical":
      case "high":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
      case "info":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Format time
  const formatTime = (value, unit) => {
    if (unit === "hours" && value >= 24) {
      const days = Math.floor(value / 24);
      const hours = Math.floor(value % 24);
      return `${days}d ${hours}h`;
    }
    return `${value}${
      unit === "minutes" ? "m" : unit === "seconds" ? "s" : "h"
    }`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Time Metrics & Analysis
          </h1>
          <p className="text-gray-500 mt-1">
            Time-based performance metrics and reliability analysis
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="day" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all" onValueChange={setMetricType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Metric Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Metrics</SelectItem>
              <SelectItem value="mtbf">MTBF</SelectItem>
              <SelectItem value="mttr">MTTR</SelectItem>
              <SelectItem value="response">Response Time</SelectItem>
              <SelectItem value="cycle">Cycle Time</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Metrics
          </Button>
        </div>
      </div>

      {/* Time Metrics Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {timeStats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = !stat.change.startsWith("-");
          const valueNum = parseFloat(stat.value);
          const targetNum = parseFloat(stat.target);

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
                        {stat.unit ? ` ${stat.unit}` : ""}
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
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-gray-500 truncate">
                        {stat.description}
                      </p>
                      <Badge
                        variant="outline"
                        className={
                          valueNum >= targetNum
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }
                      >
                        Target: {stat.target}
                      </Badge>
                    </div>
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
          {/* MTBF Trend Analysis */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle>MTBF Trend Analysis</CardTitle>
                  <CardDescription>
                    Mean Time Between Failures trend and availability
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">MTBF (hours)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm">Availability %</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={mtbfTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis yAxisId="left" stroke="#6b7280" />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#6b7280"
                    domain={[97, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="failures"
                    fill="#ef4444"
                    name="Failures"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="mtbf"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="MTBF (hours)"
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="availability"
                    stroke="#10b981"
                    strokeWidth={2}
                    name="Availability %"
                    dot={{ r: 3 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter className="border-t">
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Current MTBF</span>
                  <span className="font-semibold">450.2 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Quarterly Improvement</span>
                  <span className="font-semibold text-emerald-600">+18.3%</span>
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Response Time Analysis */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-blue-600" />
                Response Time Analysis
              </CardTitle>
              <CardDescription>
                Hourly response time performance vs incidents
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="hour" stroke="#6b7280" />
                  <YAxis
                    yAxisId="left"
                    stroke="#6b7280"
                    label={{
                      value: "Minutes",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {showBenchmarks && (
                    <ReferenceLine
                      yAxisId="left"
                      y={20}
                      stroke="#10b981"
                      strokeDasharray="3 3"
                      strokeWidth={2}
                    />
                  )}
                  <Bar
                    yAxisId="right"
                    dataKey="incidents"
                    fill="#f59e0b"
                    name="Incidents"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="response"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="Response Time (min)"
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  {showBenchmarks && (
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="target"
                      stroke="#10b981"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Target (20min)"
                      dot={false}
                    />
                  )}
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter className="border-t flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Switch
                  id="benchmarks"
                  checked={showBenchmarks}
                  onCheckedChange={setShowBenchmarks}
                />
                <Label htmlFor="benchmarks" className="text-sm">
                  Show Targets
                </Label>
              </div>
              <div className="text-sm text-gray-600">
                Avg Response: 20.5 minutes
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column - MTTR & Cycle Time */}
        <div className="space-y-6">
          {/* MTTR by Equipment */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-amber-600" />
                MTTR by Equipment
              </CardTitle>
              <CardDescription>Mean Time To Repair analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mttrByEquipment.map((equipment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">
                          {equipment.equipment}
                        </span>
                        <div className="text-sm text-gray-500">
                          Frequency: {equipment.frequency}/month
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-lg font-bold ${
                              equipment.mttr > equipment.target
                                ? "text-rose-600"
                                : "text-emerald-600"
                            }`}
                          >
                            {equipment.mttr}h
                          </span>
                          <Badge
                            variant="secondary"
                            className={getStatusColor(equipment.severity)}
                          >
                            {equipment.severity}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">
                          Target: {equipment.target}h
                        </div>
                      </div>
                    </div>
                    <Progress
                      value={(equipment.mttr / equipment.target) * 100}
                      className="h-2"
                      indicatorClassName={
                        equipment.mttr > equipment.target
                          ? "bg-rose-500"
                          : "bg-emerald-500"
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cycle Time Analysis */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-purple-600" />
                Cycle Time Analysis
              </CardTitle>
              <CardDescription>
                Production cycle times by product
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cycleTimeData.map((product, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-100 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{product.product}</div>
                        <div className="text-sm text-gray-500">
                          Target: {product.target}s
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-lg font-bold ${
                            product.cycle > product.target
                              ? "text-rose-600"
                              : "text-emerald-600"
                          }`}
                        >
                          {product.cycle}s
                        </div>
                        <div className="text-sm">
                          <Badge
                            variant="outline"
                            className={
                              product.efficiency >= 110
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : product.efficiency >= 105
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-amber-50 text-amber-700 border-amber-200"
                            }
                          >
                            {product.efficiency}%
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>
                        Variance: {product.cycle > product.target ? "+" : ""}
                        {(product.cycle - product.target).toFixed(1)}s
                      </span>
                      <span>
                        {((product.target / product.cycle) * 100).toFixed(1)}%
                        of target
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Performance Metrics & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Time-Based Performance Metrics */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Performance Metrics
            </CardTitle>
            <CardDescription>
              Key time-based performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {performanceMetrics.map((metric, index) => (
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
                        ) : metric.trend.startsWith("-") ? (
                          <TrendingDown className="h-3 w-3 text-rose-600" />
                        ) : null}
                        <span
                          className={`text-xs ${
                            metric.trend.startsWith("+")
                              ? "text-emerald-600"
                              : metric.trend.startsWith("-")
                              ? "text-rose-600"
                              : "text-gray-600"
                          }`}
                        >
                          {metric.trend}
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={getStatusColor(metric.status)}
                    >
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-2xl font-bold ${
                        metric.status === "good"
                          ? "text-emerald-600"
                          : metric.status === "warning"
                          ? "text-amber-600"
                          : "text-gray-600"
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Target: {metric.target}
                    </div>
                  </div>
                  <Progress
                    value={parseFloat(metric.value)}
                    className="h-1.5 mt-3"
                    indicatorClassName={
                      metric.status === "good"
                        ? "bg-emerald-500"
                        : metric.status === "warning"
                        ? "bg-amber-500"
                        : "bg-gray-500"
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time-Based Alerts */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Active Time Alerts
            </CardTitle>
            <CardDescription>
              Metrics exceeding threshold limits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {timeAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          alert.status === "critical"
                            ? "bg-rose-100"
                            : alert.status === "warning"
                            ? "bg-amber-100"
                            : "bg-blue-100"
                        }`}
                      >
                        {alert.status === "critical" ? (
                          <AlertTriangle className="h-4 w-4 text-rose-600" />
                        ) : alert.status === "warning" ? (
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                        ) : (
                          <Info className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{alert.metric}</div>
                        <div className="text-sm text-gray-500">
                          {alert.equipment}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${
                          alert.status === "critical"
                            ? "text-rose-600"
                            : alert.status === "warning"
                            ? "text-amber-600"
                            : "text-blue-600"
                        }`}
                      >
                        {alert.value}
                      </div>
                      <div className="text-sm text-gray-500">
                        Threshold: {alert.threshold}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-gray-500">ID: {alert.id}</span>
                    <Button size="sm" variant="ghost">
                      <Eye className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Bell className="mr-2 h-4 w-4" />
              Configure Alert Thresholds
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Historical Analysis & Improvement Initiatives */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Historical Time Analysis */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              Historical Analysis
            </CardTitle>
            <CardDescription>
              Quarterly time metrics performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="period" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="mtbf"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="MTBF (hours)"
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mttr"
                    stroke="#ef4444"
                    strokeWidth={2}
                    name="MTTR (hours)"
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="response"
                    stroke="#10b981"
                    strokeWidth={2}
                    name="Response (min)"
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cycle"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="Cycle (seconds)"
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-600">MTBF Trend</div>
                <div className="text-lg font-bold text-emerald-600">+16.9%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">MTTR Trend</div>
                <div className="text-lg font-bold text-rose-600">-28.6%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Response Trend</div>
                <div className="text-lg font-bold text-emerald-600">-33.3%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Cycle Trend</div>
                <div className="text-lg font-bold text-emerald-600">-15.9%</div>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Improvement Initiatives */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-emerald-600" />
              Improvement Initiatives
            </CardTitle>
            <CardDescription>
              Active time metric improvement projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {improvementInitiatives.map((initiative, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{initiative.initiative}</div>
                      <div className="text-sm text-gray-500">
                        {initiative.target}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">
                        {initiative.progress}%
                      </div>
                      <div className="text-xs text-gray-500">
                        ETA: {initiative.eta}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Progress
                      value={initiative.progress}
                      className="h-2"
                      indicatorClassName={
                        initiative.progress >= 80
                          ? "bg-emerald-500"
                          : initiative.progress >= 50
                          ? "bg-blue-500"
                          : "bg-amber-500"
                      }
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Started</span>
                      <span>Completion: {initiative.eta}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Zap className="mr-2 h-4 w-4" />
              Launch New Initiative
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Shift Performance Table */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Shift Performance Analysis
          </CardTitle>
          <CardDescription>Time metrics performance by shift</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Shift</TableHead>
                  <TableHead className="font-semibold">
                    Avg Cycle Time
                  </TableHead>
                  <TableHead className="font-semibold">Efficiency</TableHead>
                  <TableHead className="font-semibold">Incidents</TableHead>
                  <TableHead className="font-semibold">Response Time</TableHead>
                  <TableHead className="font-semibold">MTTR</TableHead>
                  <TableHead className="font-semibold text-right">
                    Performance
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shiftPerformance.map((shift, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="font-medium">{shift.shift}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>{shift.avgCycle}s</span>
                        <Badge
                          variant="outline"
                          className={
                            shift.avgCycle <= 41
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : shift.avgCycle <= 43
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }
                        >
                          {shift.avgCycle <= 41
                            ? "Optimal"
                            : shift.avgCycle <= 43
                            ? "Good"
                            : "Needs Attention"}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={shift.efficiency}
                          className="w-20 h-2"
                          indicatorClassName={
                            shift.efficiency >= 98
                              ? "bg-emerald-500"
                              : shift.efficiency >= 96
                              ? "bg-blue-500"
                              : "bg-amber-500"
                          }
                        />
                        <span>{shift.efficiency}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          shift.incidents <= 2
                            ? "bg-emerald-100 text-emerald-800"
                            : shift.incidents <= 4
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                        }
                      >
                        {shift.incidents}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Timer className="h-3 w-3 text-gray-500" />
                        <span>
                          {shift.shift === "Morning (6-14)"
                            ? "18.2m"
                            : shift.shift === "Afternoon (14-22)"
                            ? "21.5m"
                            : "24.8m"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Wrench className="h-3 w-3 text-gray-500" />
                        <span>
                          {shift.shift === "Morning (6-14)"
                            ? "2.5h"
                            : shift.shift === "Afternoon (14-22)"
                            ? "2.9h"
                            : "3.2h"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant="outline"
                        className={
                          shift.efficiency >= 98
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : shift.efficiency >= 96
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }
                      >
                        {shift.efficiency >= 98
                          ? "Excellent"
                          : shift.efficiency >= 96
                          ? "Good"
                          : "Fair"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="border-t flex justify-between">
          <div className="text-sm text-gray-500">
            Showing performance across {shiftPerformance.length} shifts
          </div>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Shift Optimization
          </Button>
        </CardFooter>
      </Card>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Last updated:</span> Today at 16:30 UTC
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Configure Metrics
          </Button>
          <Button size="sm">
            <Activity className="mr-2 h-4 w-4" />
            Real-time Monitoring
          </Button>
        </div>
      </div>
    </div>
  );
}
