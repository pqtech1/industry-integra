// components/pages/process/pages/Throughput.jsx
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
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  Factory,
  Package,
  Settings,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  BarChart3,
  Download,
  Filter,
  Calendar,
  Target,
  Zap,
  Users,
  Truck,
  Activity,
  Eye,
  FileText,
  Bell,
  Search,
  ChevronRight,
  Info,
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

export default function Throughput() {
  const [timeRange, setTimeRange] = useState("week");
  const [viewType, setViewType] = useState("overview");
  const [showPredictions, setShowPredictions] = useState(true);

  // Throughput Stats
  const throughputStats = [
    {
      title: "Current Throughput",
      value: "1,248",
      unit: "units/hour",
      change: "+5.2%",
      target: "1,200",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      trend: "up",
    },
    {
      title: "OEE (Overall Equipment Effectiveness)",
      value: "89.2%",
      change: "+2.1%",
      target: "90%",
      icon: Factory,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "up",
    },
    {
      title: "Cycle Time",
      value: "42.8",
      unit: "seconds",
      change: "-1.5s",
      target: "40s",
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      trend: "down",
    },
    {
      title: "Quality Rate",
      value: "98.7%",
      change: "+0.8%",
      target: "99%",
      icon: Package,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "up",
    },
  ];

  // Hourly Throughput Data
  const hourlyThroughput = [
    { hour: "06:00", throughput: 1150, target: 1200, efficiency: 95.8 },
    { hour: "07:00", throughput: 1210, target: 1200, efficiency: 100.8 },
    { hour: "08:00", throughput: 1248, target: 1200, efficiency: 104.0 },
    { hour: "09:00", throughput: 1225, target: 1200, efficiency: 102.1 },
    { hour: "10:00", throughput: 1185, target: 1200, efficiency: 98.8 },
    { hour: "11:00", throughput: 1160, target: 1200, efficiency: 96.7 },
    { hour: "12:00", throughput: 1100, target: 1200, efficiency: 91.7 },
    { hour: "13:00", throughput: 1235, target: 1200, efficiency: 102.9 },
    { hour: "14:00", throughput: 1255, target: 1200, efficiency: 104.6 },
    { hour: "15:00", throughput: 1190, target: 1200, efficiency: 99.2 },
    { hour: "16:00", throughput: 1175, target: 1200, efficiency: 97.9 },
    { hour: "17:00", throughput: 1130, target: 1200, efficiency: 94.2 },
  ];

  // Production Lines Throughput
  const productionLines = [
    {
      line: "Line A",
      throughput: 345,
      target: 320,
      efficiency: 107.8,
      status: "optimal",
      color: "#10b981",
    },
    {
      line: "Line B",
      throughput: 312,
      target: 300,
      efficiency: 104.0,
      status: "good",
      color: "#3b82f6",
    },
    {
      line: "Line C",
      throughput: 285,
      target: 300,
      efficiency: 95.0,
      status: "warning",
      color: "#f59e0b",
    },
    {
      line: "Line D",
      throughput: 267,
      target: 280,
      efficiency: 95.4,
      status: "warning",
      color: "#f59e0b",
    },
    {
      line: "Line E",
      throughput: 239,
      target: 250,
      efficiency: 95.6,
      status: "warning",
      color: "#f59e0b",
    },
    {
      line: "Line F",
      throughput: 198,
      target: 220,
      efficiency: 90.0,
      status: "critical",
      color: "#ef4444",
    },
  ];

  // Daily Throughput Trend
  const dailyTrend = [
    { day: "Mon", throughput: 27850, target: 28000, efficiency: 99.5 },
    { day: "Tue", throughput: 28420, target: 28000, efficiency: 101.5 },
    { day: "Wed", throughput: 27560, target: 28000, efficiency: 98.4 },
    { day: "Thu", throughput: 29130, target: 28000, efficiency: 104.0 },
    { day: "Fri", throughput: 26980, target: 28000, efficiency: 96.4 },
    { day: "Sat", throughput: 18950, target: 20000, efficiency: 94.8 },
    { day: "Sun", throughput: 14520, target: 15000, efficiency: 96.8 },
  ];

  // Bottleneck Analysis
  const bottlenecks = [
    {
      process: "Assembly",
      waitTime: "25min",
      capacity: "85%",
      impact: "High",
      priority: 1,
    },
    {
      process: "Quality Check",
      waitTime: "18min",
      capacity: "92%",
      impact: "Medium",
      priority: 2,
    },
    {
      process: "Packaging",
      waitTime: "12min",
      capacity: "78%",
      impact: "Medium",
      priority: 3,
    },
    {
      process: "Material Supply",
      waitTime: "8min",
      capacity: "65%",
      impact: "Low",
      priority: 4,
    },
    {
      process: "Testing",
      waitTime: "5min",
      capacity: "88%",
      impact: "Low",
      priority: 5,
    },
  ];

  // Production Orders
  const productionOrders = [
    {
      order: "PO-001234",
      product: "Model X-100",
      quantity: 5000,
      completed: 4250,
      dueDate: "2024-01-20",
      status: "in-progress",
    },
    {
      order: "PO-001235",
      product: "Model Y-200",
      quantity: 3000,
      completed: 3000,
      dueDate: "2024-01-19",
      status: "completed",
    },
    {
      order: "PO-001236",
      product: "Model Z-300",
      quantity: 8000,
      completed: 5200,
      dueDate: "2024-01-22",
      status: "in-progress",
    },
    {
      order: "PO-001237",
      product: "Model A-400",
      quantity: 2000,
      completed: 1500,
      dueDate: "2024-01-21",
      status: "delayed",
    },
    {
      order: "PO-001238",
      product: "Model B-500",
      quantity: 4500,
      completed: 4500,
      dueDate: "2024-01-18",
      status: "completed",
    },
  ];

  // Throughput Predictions
  const throughputPredictions = [
    { hour: "18:00", actual: 1090, predicted: 1120 },
    { hour: "19:00", actual: 980, predicted: 1010 },
    { hour: "20:00", actual: 850, predicted: 890 },
    { hour: "21:00", actual: 720, predicted: 750 },
    { hour: "22:00", actual: 610, predicted: 640 },
    { hour: "23:00", actual: 480, predicted: 510 },
  ];

  // Downtime Analysis
  const downtimeAnalysis = [
    {
      reason: "Scheduled Maintenance",
      duration: "2h 30m",
      frequency: "Weekly",
      impact: "Medium",
    },
    {
      reason: "Equipment Failure",
      duration: "1h 15m",
      frequency: "Monthly",
      impact: "High",
    },
    {
      reason: "Material Shortage",
      duration: "45m",
      frequency: "Occasional",
      impact: "Medium",
    },
    {
      reason: "Quality Issues",
      duration: "30m",
      frequency: "Daily",
      impact: "Low",
    },
    {
      reason: "Shift Change",
      duration: "20m",
      frequency: "Daily",
      impact: "Low",
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
              {entry.name.includes("Throughput")
                ? " units"
                : entry.name.includes("Efficiency")
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
      case "optimal":
      case "completed":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "good":
      case "in-progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "warning":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "critical":
      case "delayed":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Get impact color
  const getImpactColor = (impact) => {
    switch (impact) {
      case "High":
        return "text-rose-600";
      case "Medium":
        return "text-amber-600";
      case "Low":
        return "text-emerald-600";
      default:
        return "text-gray-600";
    }
  };

  // Calculate efficiency percentage
  const calculateEfficiency = (actual, target) => {
    return ((actual / target) * 100).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Throughput Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Production throughput monitoring and optimization
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="week" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="overview" onValueChange={setViewType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="View Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="lines">Production Lines</SelectItem>
              <SelectItem value="bottlenecks">Bottlenecks</SelectItem>
              <SelectItem value="predictions">Predictions</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Throughput Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {throughputStats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.trend === "up";
          const efficiency = stat.unit
            ? calculateEfficiency(
                parseFloat(stat.value),
                parseFloat(stat.target)
              )
            : parseFloat(stat.value.replace("%", ""));

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
                      <p className="text-xs text-gray-500">
                        Target: {stat.target}
                        {stat.unit ? ` ${stat.unit}` : ""}
                      </p>
                      <Badge
                        variant="outline"
                        className={
                          efficiency >= 100
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : efficiency >= 95
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : efficiency >= 90
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-rose-50 text-rose-700 border-rose-200"
                        }
                      >
                        {efficiency}%
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hourly Throughput Chart */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle>Hourly Throughput Analysis</CardTitle>
                  <CardDescription>
                    Real-time throughput performance
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Throughput</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm">Target</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={hourlyThroughput}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="hour" stroke="#6b7280" />
                  <YAxis
                    yAxisId="left"
                    stroke="#6b7280"
                    label={{
                      value: "Units",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#6b7280"
                    domain={[85, 110]}
                    label={{
                      value: "Efficiency %",
                      angle: 90,
                      position: "insideRight",
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="throughput"
                    fill="#3b82f6"
                    name="Throughput (units)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="target"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Target"
                    dot={false}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="efficiency"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    name="Efficiency %"
                    dot={{ r: 3 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter className="border-t">
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Average Throughput</span>
                  <span className="font-semibold">1,182 units/hour</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Peak Throughput</span>
                  <span className="font-semibold text-emerald-600">
                    1,255 units @ 14:00
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Production Lines Performance */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-blue-600" />
                Production Lines Performance
              </CardTitle>
              <CardDescription>
                Throughput and efficiency by production line
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {productionLines.map((line, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: line.color }}
                        ></div>
                        <div>
                          <span className="font-medium">{line.line}</span>
                          <div className="text-sm text-gray-500">
                            Target: {line.target} units/hour
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">
                            {line.throughput}
                          </span>
                          <Badge
                            variant="secondary"
                            className={getStatusColor(line.status)}
                          >
                            {line.efficiency}%
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">
                          {line.throughput > line.target ? "+" : ""}
                          {line.throughput - line.target} units
                        </div>
                      </div>
                    </div>
                    <Progress
                      value={(line.throughput / line.target) * 100}
                      className="h-2"
                      indicatorClassName={
                        line.efficiency >= 100
                          ? "bg-emerald-500"
                          : line.efficiency >= 95
                          ? "bg-blue-500"
                          : line.efficiency >= 90
                          ? "bg-amber-500"
                          : "bg-rose-500"
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Bottlenecks & Orders */}
        <div className="space-y-6">
          {/* Bottleneck Analysis */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Bottleneck Analysis
              </CardTitle>
              <CardDescription>
                Process constraints affecting throughput
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bottlenecks.map((bottleneck, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              bottleneck.priority === 1
                                ? "bg-rose-500"
                                : bottleneck.priority === 2
                                ? "bg-amber-500"
                                : "bg-blue-500"
                            }`}
                          ></div>
                          <span className="font-medium">
                            {bottleneck.process}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Wait Time: {bottleneck.waitTime}
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-semibold ${getImpactColor(
                            bottleneck.impact
                          )}`}
                        >
                          {bottleneck.impact}
                        </div>
                        <div className="text-sm text-gray-500">
                          Capacity: {bottleneck.capacity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Optimize Processes
              </Button>
            </CardFooter>
          </Card>

          {/* Production Orders */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-purple-600" />
                Active Production Orders
              </CardTitle>
              <CardDescription>
                Current order status and completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {productionOrders.map((order, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-100 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{order.order}</div>
                        <div className="text-sm text-gray-500">
                          {order.product}
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(order.status)}
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>
                          {order.completed}/{order.quantity}
                        </span>
                      </div>
                      <Progress
                        value={(order.completed / order.quantity) * 100}
                        className="h-2"
                        indicatorClassName={
                          order.status === "completed"
                            ? "bg-emerald-500"
                            : order.status === "delayed"
                            ? "bg-rose-500"
                            : "bg-blue-500"
                        }
                      />
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Due: {order.dueDate}</span>
                        <span>
                          {((order.completed / order.quantity) * 100).toFixed(
                            1
                          )}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Throughput Predictions & Downtime */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Throughput Predictions */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Throughput Predictions
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Switch
                  id="predictions"
                  checked={showPredictions}
                  onCheckedChange={setShowPredictions}
                />
                <Label htmlFor="predictions" className="text-sm">
                  Show Predictions
                </Label>
              </div>
            </div>
            <CardDescription>AI-powered throughput forecasting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[...hourlyThroughput, ...throughputPredictions]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="hour" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="throughput"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.1}
                    name="Actual Throughput"
                  />
                  {showPredictions && (
                    <Area
                      type="monotone"
                      dataKey="predicted"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.1}
                      strokeDasharray="5 5"
                      name="Predicted Throughput"
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Predicted Peak</div>
                <div className="text-lg font-bold text-emerald-600">
                  1,120 units
                </div>
                <div className="text-xs text-gray-500">@ 18:00</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Confidence Level</div>
                <div className="text-lg font-bold text-blue-600">92.5%</div>
                <div className="text-xs text-gray-500">High accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downtime Analysis */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-600" />
              Downtime Analysis
            </CardTitle>
            <CardDescription>
              Production stoppages and their impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {downtimeAnalysis.map((downtime, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-100 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{downtime.reason}</div>
                      <div className="text-sm text-gray-500">
                        Frequency: {downtime.frequency}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">
                        {downtime.duration}
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          downtime.impact === "High"
                            ? "bg-rose-50 text-rose-700 border-rose-200"
                            : downtime.impact === "Medium"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }
                      >
                        {downtime.impact}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Estimated throughput loss:{" "}
                    {downtime.impact === "High"
                      ? "1,200 units"
                      : downtime.impact === "Medium"
                      ? "600 units"
                      : "200 units"}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium">Total Downtime Today:</span> 4h
                  20m
                  <span className="ml-2 text-amber-700">(-2,800 units)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Throughput Trend */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            Weekly Throughput Trend
          </CardTitle>
          <CardDescription>
            Daily throughput performance and efficiency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis yAxisId="left" stroke="#6b7280" />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#6b7280"
                  domain={[85, 110]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  yAxisId="left"
                  dataKey="throughput"
                  fill="#8b5cf6"
                  name="Throughput (units)"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="target"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                  dot={false}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Efficiency %"
                  dot={{ r: 4 }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-600">Weekly Total</div>
              <div className="text-lg font-bold">173,410 units</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Avg Daily</div>
              <div className="text-lg font-bold">24,773 units</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Peak Day</div>
              <div className="text-lg font-bold text-emerald-600">
                Thu (+4.0%)
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Weekly Efficiency</div>
              <div className="text-lg font-bold">98.8%</div>
            </div>
          </div>
        </CardFooter>
      </Card>

      {/* Optimization Actions */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-600" />
            Throughput Optimization Actions
          </CardTitle>
          <CardDescription>
            Recommended actions to improve throughput
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Settings className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Process Optimization</h4>
                  <p className="text-sm text-gray-500">
                    Reduce cycle time by 15%
                  </p>
                </div>
              </div>
              <Button size="sm" className="w-full">
                Implement
              </Button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <RefreshCw className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Reduce Downtime</h4>
                  <p className="text-sm text-gray-500">
                    Preventive maintenance
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Schedule
              </Button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Staff Training</h4>
                  <p className="text-sm text-gray-500">
                    Improve operator efficiency
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Plan Training
              </Button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Truck className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Material Flow</h4>
                  <p className="text-sm text-gray-500">Optimize supply chain</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Review Supply
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Last updated:</span> Today at 15:45 UTC
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Set Alerts
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Performance Report
          </Button>
          <Button size="sm">
            <Activity className="mr-2 h-4 w-4" />
            Live Monitoring
          </Button>
        </div>
      </div>
    </div>
  );
}
