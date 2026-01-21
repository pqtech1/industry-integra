// components/pages/process/pages/Dashboard.jsx
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
} from "recharts";
import {
  Activity,
  AlertCircle,
  Calendar,
  Clock,
  Cpu,
  Database,
  Download,
  Eye,
  Factory,
  Gauge,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Target,
  CheckCircle,
  XCircle,
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

export default function ProcessDashboard() {
  const [timeRange, setTimeRange] = useState("week");

  // Performance Data for Line Chart
  const performanceData = [
    { day: "Mon", oee: 88, throughput: 2400, downtime: 2.5 },
    { day: "Tue", oee: 92, throughput: 2650, downtime: 1.8 },
    { day: "Wed", oee: 91, throughput: 2580, downtime: 2.1 },
    { day: "Thu", oee: 94, throughput: 2780, downtime: 1.2 },
    { day: "Fri", oee: 89, throughput: 2420, downtime: 2.8 },
    { day: "Sat", oee: 86, throughput: 2250, downtime: 3.5 },
    { day: "Sun", oee: 82, throughput: 2100, downtime: 4.2 },
  ];

  // Production Data for Bar Chart
  const productionData = [
    { line: "Line A", output: 2450, target: 2500, efficiency: 98 },
    { line: "Line B", output: 1870, target: 2000, efficiency: 93.5 },
    { line: "Line C", output: 3120, target: 3000, efficiency: 104 },
    { line: "Line D", output: 1560, target: 1800, efficiency: 86.7 },
    { line: "Line E", output: 2890, target: 2800, efficiency: 103.2 },
  ];

  // Equipment Status for Pie Chart
  const equipmentData = [
    { name: "Running", value: 75, color: "#10b981" },
    { name: "Idle", value: 15, color: "#f59e0b" },
    { name: "Maintenance", value: 8, color: "#ef4444" },
    { name: "Offline", value: 2, color: "#6b7280" },
  ];

  // Energy Consumption for Area Chart
  const energyData = [
    { hour: "00:00", consumption: 1.2, cost: 240 },
    { hour: "04:00", consumption: 0.8, cost: 160 },
    { hour: "08:00", consumption: 2.4, cost: 480 },
    { hour: "12:00", consumption: 3.2, cost: 640 },
    { hour: "16:00", consumption: 2.8, cost: 560 },
    { hour: "20:00", consumption: 1.5, cost: 300 },
    { hour: "24:00", consumption: 0.9, cost: 180 },
  ];

  // Quality Metrics for Radar Chart
  const qualityData = [
    { metric: "Accuracy", value: 95 },
    { metric: "Precision", value: 92 },
    { metric: "Reliability", value: 98 },
    { metric: "Speed", value: 88 },
    { metric: "Yield", value: 96 },
    { metric: "Consistency", value: 90 },
  ];

  // Stats Data with attractive colors
  const stats = [
    {
      title: "Overall OEE",
      value: "92.5%",
      change: "+2.3%",
      icon: Gauge,
      color: "text-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      borderColor: "border-emerald-100",
      trend: "up",
    },
    {
      title: "Production Output",
      value: "12.8K",
      change: "+5.2%",
      icon: Factory,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      trend: "up",
    },
    {
      title: "Avg Cycle Time",
      value: "4.2m",
      change: "-0.5m",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      trend: "down",
    },
    {
      title: "Energy Efficiency",
      value: "88.4%",
      change: "+3.1%",
      icon: Zap,
      color: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      borderColor: "border-amber-100",
      trend: "up",
    },
  ];

  // Alerts Data
  const alerts = [
    {
      id: 1,
      severity: "high",
      title: "Temperature Alert",
      message: "Reactor R-102 exceeded 250°C",
      time: "10 min ago",
      resolved: false,
    },
    {
      id: 2,
      severity: "medium",
      title: "Pressure Deviation",
      message: "Line B pressure 15% above normal",
      time: "25 min ago",
      resolved: false,
    },
    {
      id: 3,
      severity: "low",
      title: "Maintenance Due",
      message: "Conveyor belt inspection scheduled",
      time: "2 hours ago",
      resolved: true,
    },
  ];

  // KPI Cards Data
  const kpis = [
    {
      label: "Quality Rate",
      value: "98.2%",
      target: "99%",
      progress: 98,
      status: "excellent",
      icon: CheckCircle,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      label: "Scrap Rate",
      value: "1.2%",
      target: "1.0%",
      progress: 88,
      status: "good",
      icon: AlertCircle,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      label: "Downtime",
      value: "2.3%",
      target: "2.0%",
      progress: 85,
      status: "good",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Throughput",
      value: "2450/hr",
      target: "2500/hr",
      progress: 98,
      status: "excellent",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  // Recent Activities
  const activities = [
    {
      time: "10:30 AM",
      action: "Batch #2456 completed successfully",
      user: "Operator A",
      status: "success",
      icon: CheckCircle,
    },
    {
      time: "09:45 AM",
      action: "Material loaded in Hopper 3",
      user: "Operator B",
      status: "info",
      icon: Database,
    },
    {
      time: "08:15 AM",
      action: "System calibration completed",
      user: "Tech Support",
      status: "success",
      icon: Target,
    },
    {
      time: "Yesterday",
      action: "Emergency stop triggered - Line C",
      user: "System",
      status: "error",
      icon: XCircle,
    },
  ];

  // Custom Tooltip for Charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col gap-4">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Process Automation Dashboard
          </h1>
          <p className="text-sm text-gray-500 sm:text-base">
            Real-time monitoring and analytics of production processes
          </p>
        </div>

        {/* All Controls in one line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Live Mode - Left side */}
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <Switch id="live-mode" defaultChecked />
            <Label htmlFor="live-mode" className="text-sm whitespace-nowrap">
              Live Mode
            </Label>
          </div>

          {/* Time Range & Export - Right side */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            <Select defaultValue="week" onValueChange={setTimeRange}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" className="whitespace-nowrap">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow duration-300 border-0"
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {stat.title}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <h3
                        className={`text-2xl lg:text-3xl font-bold ${stat.color}`}
                      >
                        {stat.value}
                      </h3>
                      <span
                        className={`flex items-center text-sm font-medium ${
                          stat.trend === "up"
                            ? "text-emerald-600"
                            : "text-rose-600"
                        }`}
                      >
                        {stat.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress
                    value={parseFloat(stat.value)}
                    className="h-2"
                    indicatorClassName={
                      stat.trend === "up" ? "bg-emerald-500" : "bg-rose-500"
                    }
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <Card className="lg:col-span-2 shadow-lg border-0">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <LineChartIcon className="h-5 w-5 text-blue-600" />
                  Performance Trends
                </CardTitle>
                <CardDescription>
                  OEE, Throughput & Downtime over time
                </CardDescription>
              </div>
              <Badge variant="outline" className="font-normal">
                {timeRange === "week" ? "Last 7 days" : "Current " + timeRange}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="oee"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  name="OEE %"
                />
                <Line
                  type="monotone"
                  dataKey="throughput"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Throughput"
                />
                <Line
                  type="monotone"
                  dataKey="downtime"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Downtime %"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Equipment Status */}
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-purple-600" />
                  Equipment Status
                </CardTitle>
                <CardDescription>Current machine states</CardDescription>
              </div>
              <Badge variant="secondary" className="font-normal">
                {equipmentData[0].value}% Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="h-80">
            <div className="h-full flex flex-col">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={equipmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {equipmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {equipmentData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="ml-auto text-sm font-bold">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Production Output */}
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Production Lines
                </CardTitle>
                <CardDescription>Output vs Target by line</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="line" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="output"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  name="Actual Output"
                />
                <Bar
                  dataKey="target"
                  fill="#93c5fd"
                  radius={[4, 4, 0, 0]}
                  name="Target"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Energy Consumption */}
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-600" />
                  Energy Consumption
                </CardTitle>
                <CardDescription>24-hour energy usage pattern</CardDescription>
              </div>
              <Badge variant="outline" className="font-normal">
                2.4 MW Total
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="consumption"
                  fill="#fbbf24"
                  stroke="#f59e0b"
                  fillOpacity={0.3}
                  name="Consumption (MW)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quality Metrics */}
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Target className="h-5 w-5 text-emerald-600" />
                  Quality Metrics
                </CardTitle>
                <CardDescription>
                  Performance across key metrics
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={qualityData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis />
                <Radar
                  name="Quality"
                  dataKey="value"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KPI Cards */}
        <Card className="lg:col-span-2 shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">
              Key Performance Indicators
            </CardTitle>
            <CardDescription>Target achievement across metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kpis.map((kpi, index) => {
                const Icon = kpi.icon;
                return (
                  <div key={index} className={`p-4 rounded-xl ${kpi.bgColor}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon className={`h-5 w-5 ${kpi.color}`} />
                        <span className="font-medium text-gray-900">
                          {kpi.label}
                        </span>
                      </div>
                      <Badge
                        variant={
                          kpi.status === "excellent" ? "default" : "secondary"
                        }
                        className={
                          kpi.status === "excellent"
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                            : ""
                        }
                      >
                        {kpi.status}
                      </Badge>
                    </div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className={`text-2xl font-bold ${kpi.color}`}>
                        {kpi.value}
                      </span>
                      <span className="text-sm text-gray-500">
                        Target: {kpi.target}
                      </span>
                    </div>
                    <Progress value={kpi.progress} className="h-2" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">
              Recent Activities
            </CardTitle>
            <CardDescription>Latest system events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                const statusColors = {
                  success: "text-emerald-600 bg-emerald-50",
                  info: "text-blue-600 bg-blue-50",
                  error: "text-rose-600 bg-rose-50",
                };
                return (
                  <div
                    key={index}
                    className="flex gap-3 pb-3 border-b last:border-0 last:pb-0"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        statusColors[activity.status]
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">
                          By {activity.user}
                        </span>
                        <span className="text-xs text-gray-400">
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              <Eye className="mr-2 h-4 w-4" />
              View All Activities
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick Stats Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Connected Devices</p>
              <p className="text-xl font-bold text-gray-900">42</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Cpu className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-emerald-600 font-medium">
            <TrendingUp className="inline h-3 w-3 mr-1" />
            +3 from last week
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Operators</p>
              <p className="text-xl font-bold text-gray-900">8</p>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            All stations occupied
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Data Points</p>
              <p className="text-xl font-bold text-gray-900">245.6K</p>
            </div>
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Database className="h-5 w-5 text-emerald-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">Today</div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">System Uptime</p>
              <p className="text-xl font-bold text-gray-900">99.8%</p>
            </div>
            <div className="p-2 bg-amber-100 rounded-lg">
              <Activity className="h-5 w-5 text-amber-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-emerald-600 font-medium">
            No downtime today
          </div>
        </div>
      </div>
    </div>
  );
}
