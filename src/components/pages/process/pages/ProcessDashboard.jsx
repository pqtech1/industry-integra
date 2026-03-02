// components/pages/process/pages/Dashboard.jsx
import React, { useState, useMemo } from "react";
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
  Clock,
  Cpu,
  Database,
  Download,
  Eye,
  Factory,
  Gauge,
  LineChart as LineChartIcon,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Target,
  CheckCircle,
  XCircle,
  RefreshCw,
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useRealtimeSnapshot } from "@/hooks/useRealtimeSnapshot";

// Helper function to calculate OEE
const calculateOEE = (availability, performance, quality) => {
  return ((availability * performance * quality) / 10000).toFixed(1);
};

// Helper function to format numbers
const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num?.toString() || "0";
};

export default function ProcessDashboard() {
  const [timeRange, setTimeRange] = useState("week");
  const [liveMode, setLiveMode] = useState(true);

  // Use the custom hook with 60-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process data for different visualizations
  const processedData = useMemo(() => {
    if (!data) return null;

    const overview = data["overview_2026_02"] || {};
    const throughput = data["throughput_2026_02"] || {};
    const timeMetrics = data["time_metrics_2026_02"] || {};

    // Calculate OEE
    const oee = calculateOEE(
      overview.availability || 0,
      overview.performance || 0,
      overview.quality || 0,
    );

    // Stats data from real API
    const stats = [
      {
        title: "Overall OEE",
        value: `${oee}%`,
        change: oee > 90 ? "+2.3%" : "-1.2%",
        icon: Gauge,
        color: oee > 85 ? "text-emerald-600" : "text-amber-600",
        bgColor:
          oee > 85
            ? "bg-gradient-to-br from-emerald-50 to-green-50"
            : "bg-gradient-to-br from-amber-50 to-yellow-50",
        borderColor: oee > 85 ? "border-emerald-100" : "border-amber-100",
        trend: oee > 85 ? "up" : "down",
      },
      {
        title: "Production Output",
        value: formatNumber(overview.total_units || 0),
        change: "+5.2%",
        icon: Factory,
        color: "text-blue-600",
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
        borderColor: "border-blue-100",
        trend: "up",
      },
      {
        title: "Avg Cycle Time",
        value: `${overview.ideal_cycle_time || 0}s`,
        change: "-0.5s",
        icon: Clock,
        color: "text-purple-600",
        bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
        borderColor: "border-purple-100",
        trend: "down",
      },
      {
        title: "Energy Efficiency",
        value: `${Math.round((overview.useful_energy_output / overview.total_energy_input) * 100) || 0}%`,
        change: "+3.1%",
        icon: Zap,
        color: "text-amber-600",
        bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
        borderColor: "border-amber-100",
        trend: "up",
      },
    ];

    // Equipment status from device_status_data
    const equipmentData = [
      {
        name: "Running",
        value: overview.device_status_data?.status === "running" ? 75 : 60,
        color: "#10b981",
      },
      { name: "Idle", value: 15, color: "#f59e0b" },
      { name: "Maintenance", value: 8, color: "#ef4444" },
      { name: "Offline", value: 2, color: "#6b7280" },
    ];

    // KPI Cards Data
    const kpis = [
      {
        label: "Quality Rate",
        value: `${overview.quality || 0}%`,
        target: "99%",
        progress: overview.quality || 0,
        status: (overview.quality || 0) > 95 ? "excellent" : "good",
        icon: CheckCircle,
        color:
          (overview.quality || 0) > 95 ? "text-emerald-600" : "text-amber-600",
        bgColor: (overview.quality || 0) > 95 ? "bg-emerald-50" : "bg-amber-50",
      },
      {
        label: "Scrap Rate",
        value: `${100 - (overview.quality || 100)}%`,
        target: "1.0%",
        progress: 100 - (overview.quality || 100),
        status: 100 - (overview.quality || 100) < 5 ? "good" : "warning",
        icon: AlertCircle,
        color:
          100 - (overview.quality || 100) < 5
            ? "text-emerald-600"
            : "text-amber-600",
        bgColor:
          100 - (overview.quality || 100) < 5 ? "bg-emerald-50" : "bg-amber-50",
      },
      {
        label: "Downtime",
        value: `${overview.downtime || 0}%`,
        target: "2.0%",
        progress: 100 - (overview.downtime || 0) * 10,
        status: (overview.downtime || 0) < 5 ? "good" : "warning",
        icon: Clock,
        color:
          (overview.downtime || 0) < 5 ? "text-blue-600" : "text-amber-600",
        bgColor: (overview.downtime || 0) < 5 ? "bg-blue-50" : "bg-amber-50",
      },
      {
        label: "Throughput",
        value: `${throughput.actual || 0}/hr`,
        target: `${throughput.target || 0}/hr`,
        progress: ((throughput.actual || 0) / (throughput.target || 1)) * 100,
        status:
          (throughput.actual || 0) / (throughput.target || 1) > 0.95
            ? "excellent"
            : "good",
        icon: TrendingUp,
        color:
          (throughput.actual || 0) / (throughput.target || 1) > 0.95
            ? "text-purple-600"
            : "text-amber-600",
        bgColor:
          (throughput.actual || 0) / (throughput.target || 1) > 0.95
            ? "bg-purple-50"
            : "bg-amber-50",
      },
    ];

    // Production lines data
    const productionData = [
      {
        line: "Line A",
        output: overview.total_units || 0,
        target: overview.planned_output || 0,
        efficiency:
          ((overview.total_units || 0) / (overview.planned_output || 1)) * 100,
      },
      {
        line: "Line B",
        output: Math.round((overview.total_units || 0) * 0.8),
        target: Math.round((overview.planned_output || 0) * 0.8),
        efficiency: 93.5,
      },
      {
        line: "Line C",
        output: Math.round((overview.total_units || 0) * 1.2),
        target: Math.round((overview.planned_output || 0) * 1.2),
        efficiency: 104,
      },
    ];

    // Quality metrics for radar chart
    const qualityData = [
      { metric: "Availability", value: overview.availability || 0 },
      { metric: "Performance", value: overview.performance || 0 },
      { metric: "Quality", value: overview.quality || 0 },
      { metric: "OEE", value: parseFloat(oee) },
      { metric: "Yield", value: 96 },
      { metric: "Consistency", value: 90 },
    ];

    return {
      stats,
      equipmentData,
      kpis,
      productionData,
      qualityData,
      overview,
      throughput,
      timeMetrics,
      oee,
    };
  }, [data]);

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

  // Show loading skeleton
  if (loading && !data) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-5">
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <Alert variant="destructive" className="m-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load dashboard data: {error}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col gap-4">
        {/* Title Section with Last Updated */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Process Automation Dashboard
            </h1>
            {lastUpdated && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                Last updated: {lastUpdated.toLocaleTimeString()}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={refetch}
                  disabled={loading}
                >
                  <RefreshCw
                    className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                  />
                </Button>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 sm:text-base">
            Real-time monitoring and analytics of production processes
          </p>
        </div>

        {/* All Controls in one line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Live Mode - Left side */}
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <Switch
              id="live-mode"
              checked={liveMode}
              onCheckedChange={setLiveMode}
            />
            <Label htmlFor="live-mode" className="text-sm whitespace-nowrap">
              Live Mode (Updates every minute)
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

      {processedData && (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processedData.stats.map((stat, index) => {
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
            {/* Performance Chart - Using overview data */}
            <Card className="lg:col-span-2 shadow-lg border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <LineChartIcon className="h-5 w-5 text-blue-600" />
                      Real-time Performance
                    </CardTitle>
                    <CardDescription>
                      Current OEE: {processedData.oee}% | Quality:{" "}
                      {processedData.overview.quality}% | Availability:{" "}
                      {processedData.overview.availability}%
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="font-normal">
                    Live Data
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { name: "OEE", value: parseFloat(processedData.oee) },
                      {
                        name: "Quality",
                        value: processedData.overview.quality || 0,
                      },
                      {
                        name: "Performance",
                        value: processedData.overview.performance || 0,
                      },
                      {
                        name: "Availability",
                        value: processedData.overview.availability || 0,
                      },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ r: 6 }}
                      activeDot={{ r: 8 }}
                      name="Percentage"
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
                    <CardDescription>
                      Current:{" "}
                      {processedData.overview.device_status_data?.status ||
                        "unknown"}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-normal">
                    {processedData.overview.device_status_data?.status ===
                    "running"
                      ? "Active"
                      : "Idle"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full flex flex-col">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={processedData.equipmentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {processedData.equipmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {processedData.equipmentData.map((item, index) => (
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
                      Production Overview
                    </CardTitle>
                    <CardDescription>
                      Total Units: {processedData.overview.total_units || 0}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={processedData.productionData}>
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
                      Energy Metrics
                    </CardTitle>
                    <CardDescription>
                      Usage: {processedData.overview.energy_usage_data || 0} kWh
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="font-normal">
                    {processedData.overview.total_energy_input || 0} Total
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      {
                        name: "Used",
                        value: processedData.overview.energy_usage_data || 0,
                      },
                      {
                        name: "Total Input",
                        value: processedData.overview.total_energy_input || 0,
                      },
                      {
                        name: "Useful Output",
                        value: processedData.overview.useful_energy_output || 0,
                      },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      fill="#fbbf24"
                      stroke="#f59e0b"
                      fillOpacity={0.3}
                      name="Energy (kWh)"
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
                      Overall Quality: {processedData.overview.quality}%
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={processedData.qualityData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis domain={[0, 100]} />
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
                <CardDescription>Real-time target achievement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {processedData.kpis.map((kpi, index) => {
                    const Icon = kpi.icon;
                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-xl ${kpi.bgColor}`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Icon className={`h-5 w-5 ${kpi.color}`} />
                            <span className="font-medium text-gray-900">
                              {kpi.label}
                            </span>
                          </div>
                          <Badge
                            variant={
                              kpi.status === "excellent"
                                ? "default"
                                : "secondary"
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

            {/* Throughput Details */}
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">
                  Throughput Analysis
                </CardTitle>
                <CardDescription>Current vs Target</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Actual Throughput</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {processedData.throughput.actual || 0}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">units/hour</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Target Throughput</p>
                    <p className="text-3xl font-bold text-gray-700">
                      {processedData.throughput.target || 0}
                    </p>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span className="font-medium">
                          {Math.round(
                            ((processedData.throughput.actual || 0) /
                              (processedData.throughput.target || 1)) *
                              100,
                          )}
                          %
                        </span>
                      </div>
                      <Progress
                        value={
                          ((processedData.throughput.actual || 0) /
                            (processedData.throughput.target || 1)) *
                          100
                        }
                        className="h-2"
                      />
                    </div>
                  </div>

                  {processedData.throughput.quality && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600">Quality Rate</p>
                      <p className="text-2xl font-bold text-green-600">
                        {processedData.throughput.quality}%
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Machine Status</p>
                  <p className="text-xl font-bold text-gray-900">
                    {processedData.overview.device_status_data?.status || "N/A"}
                  </p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Cpu className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-emerald-600 font-medium">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                Active
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Operator Status</p>
                  <p className="text-xl font-bold text-gray-900">
                    {processedData.overview.operator_status_data?.operator ||
                      "N/A"}
                  </p>
                </div>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">On duty</div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Good Units</p>
                  <p className="text-xl font-bold text-gray-900">
                    {processedData.overview.good_units || 0}
                  </p>
                </div>
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Quality rate: {processedData.overview.quality}%
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Operating Time</p>
                  <p className="text-xl font-bold text-gray-900">
                    {processedData.overview.operating_time || 0} min
                  </p>
                </div>
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Activity className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-emerald-600 font-medium">
                {processedData.overview.availability}% available
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
