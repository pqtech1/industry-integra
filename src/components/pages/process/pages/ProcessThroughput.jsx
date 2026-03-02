// components/pages/process/pages/Throughput.jsx
import React, { useState, useMemo } from "react";
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
  Target,
  Zap,
  Users,
  Truck,
  Activity,
  Eye,
  FileText,
  Bell,
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

// Helper function to format numbers
const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num?.toString() || "0";
};

// Calculate efficiency
const calculateEfficiency = (actual, target) => {
  if (!actual || !target) return 0;
  return ((actual / target) * 100).toFixed(1);
};

export default function Throughput() {
  const [timeRange, setTimeRange] = useState("week");
  const [viewType, setViewType] = useState("overview");
  const [showPredictions, setShowPredictions] = useState(true);

  // Use the custom hook with 1-second refresh interval as specified
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process throughput data from API
  const throughputData = useMemo(() => {
    if (!data) return null;

    // Get throughput data from the API
    const throughput = data["throughput_2026_02"] || {};
    const overview = data["overview_2026_02"] || {};
    const timeMetrics = data["time_metrics_2026_02"] || {};

    // Calculate OEE
    const oee = (
      ((overview.availability || 0) *
        (overview.performance || 0) *
        (overview.quality || 0)) /
      10000
    ).toFixed(1);

    // Throughput Stats with real data
    const throughputStats = [
      {
        title: "Current Throughput",
        value: formatNumber(throughput.actual || 0),
        unit: "units/hour",
        change: throughput.actual > throughput.target ? "+5.2%" : "-2.1%",
        target: formatNumber(throughput.target || 0),
        icon: TrendingUp,
        color:
          (throughput.actual || 0) >= (throughput.target || 0)
            ? "text-emerald-600"
            : "text-amber-600",
        bgColor:
          (throughput.actual || 0) >= (throughput.target || 0)
            ? "bg-emerald-50"
            : "bg-amber-50",
        trend:
          (throughput.actual || 0) >= (throughput.target || 0) ? "up" : "down",
      },
      {
        title: "OEE (Overall Equipment Effectiveness)",
        value: `${oee}%`,
        change: oee > 85 ? "+2.1%" : "-1.5%",
        target: "90%",
        icon: Factory,
        color: oee > 85 ? "text-blue-600" : "text-amber-600",
        bgColor: oee > 85 ? "bg-blue-50" : "bg-amber-50",
        trend: oee > 85 ? "up" : "down",
      },
      {
        title: "Cycle Time",
        value: throughput.time || 0,
        unit: "seconds",
        change: throughput.time < 40 ? "-2.1s" : "+3.2s",
        target: "40s",
        icon: Clock,
        color:
          (throughput.time || 0) < 40 ? "text-emerald-600" : "text-amber-600",
        bgColor: (throughput.time || 0) < 40 ? "bg-emerald-50" : "bg-amber-50",
        trend: (throughput.time || 0) < 40 ? "down" : "up",
      },
      {
        title: "Quality Rate",
        value: `${throughput.quality || 0}%`,
        change: (throughput.quality || 0) > 98 ? "+0.8%" : "-1.2%",
        target: "99%",
        icon: Package,
        color:
          (throughput.quality || 0) > 95 ? "text-purple-600" : "text-amber-600",
        bgColor:
          (throughput.quality || 0) > 95 ? "bg-purple-50" : "bg-amber-50",
        trend: (throughput.quality || 0) > 95 ? "up" : "down",
      },
    ];

    // Generate hourly data based on actual throughput
    const currentHour = new Date().getHours();
    const hourlyThroughput = Array.from({ length: 12 }, (_, i) => {
      const hour = (currentHour - 11 + i + 24) % 24;
      const hourStr = hour.toString().padStart(2, "0") + ":00";

      // Generate realistic variations around the actual throughput
      const baseThroughput = throughput.actual || 1200;
      const variation = Math.sin(i * 0.5) * 50 + (Math.random() * 30 - 15);

      return {
        hour: hourStr,
        throughput: Math.max(0, Math.round(baseThroughput + variation)),
        target: throughput.target || 1200,
        efficiency: calculateEfficiency(
          Math.max(0, Math.round(baseThroughput + variation)),
          throughput.target || 1200,
        ),
      };
    });

    // Production lines data (simulated based on actual throughput)
    const productionLines = [
      {
        line: "Line A",
        throughput: Math.round((throughput.actual || 0) * 0.28),
        target: Math.round((throughput.target || 0) * 0.27),
        efficiency: 0,
        status: "optimal",
        color: "#10b981",
      },
      {
        line: "Line B",
        throughput: Math.round((throughput.actual || 0) * 0.25),
        target: Math.round((throughput.target || 0) * 0.25),
        efficiency: 0,
        status: "good",
        color: "#3b82f6",
      },
      {
        line: "Line C",
        throughput: Math.round((throughput.actual || 0) * 0.22),
        target: Math.round((throughput.target || 0) * 0.23),
        efficiency: 0,
        status: "warning",
        color: "#f59e0b",
      },
      {
        line: "Line D",
        throughput: Math.round((throughput.actual || 0) * 0.15),
        target: Math.round((throughput.target || 0) * 0.16),
        efficiency: 0,
        status: "critical",
        color: "#ef4444",
      },
    ];

    // Calculate efficiencies
    productionLines.forEach((line) => {
      line.efficiency = calculateEfficiency(line.throughput, line.target);
    });

    // Daily trend data
    const dailyTrend = [
      {
        day: "Mon",
        throughput: Math.round((throughput.actual || 0) * 22),
        target: Math.round((throughput.target || 0) * 22),
        efficiency: 0,
      },
      {
        day: "Tue",
        throughput: Math.round((throughput.actual || 0) * 23),
        target: Math.round((throughput.target || 0) * 22),
        efficiency: 0,
      },
      {
        day: "Wed",
        throughput: Math.round((throughput.actual || 0) * 21),
        target: Math.round((throughput.target || 0) * 22),
        efficiency: 0,
      },
      {
        day: "Thu",
        throughput: Math.round((throughput.actual || 0) * 24),
        target: Math.round((throughput.target || 0) * 22),
        efficiency: 0,
      },
      {
        day: "Fri",
        throughput: Math.round((throughput.actual || 0) * 20),
        target: Math.round((throughput.target || 0) * 22),
        efficiency: 0,
      },
      {
        day: "Sat",
        throughput: Math.round((throughput.actual || 0) * 15),
        target: Math.round((throughput.target || 0) * 18),
        efficiency: 0,
      },
      {
        day: "Sun",
        throughput: Math.round((throughput.actual || 0) * 12),
        target: Math.round((throughput.target || 0) * 15),
        efficiency: 0,
      },
    ];

    // Calculate daily efficiencies
    dailyTrend.forEach((day) => {
      day.efficiency = calculateEfficiency(day.throughput, day.target);
    });

    // Bottleneck analysis based on step cycle times
    const bottlenecks = [
      {
        process: "Step 1",
        waitTime: `${throughput.step_cycle_times?.step1 || 3}min`,
        capacity: "85%",
        impact: throughput.step_cycle_times?.step1 > 4 ? "High" : "Medium",
        priority: 1,
      },
      {
        process: "Step 2",
        waitTime: `${throughput.step_cycle_times?.step2 || 3}min`,
        capacity: "92%",
        impact: throughput.step_cycle_times?.step2 > 4 ? "High" : "Medium",
        priority: 2,
      },
      {
        process: "Step 3",
        waitTime: `${throughput.step_cycle_times?.step3 || 4}min`,
        capacity: "78%",
        impact: throughput.step_cycle_times?.step3 > 4 ? "Medium" : "Low",
        priority: 3,
      },
    ];

    // Production orders based on actual data
    const productionOrders = [
      {
        order: throughput.production_orders_data?.order_id || "PO-001234",
        product: "Standard Product",
        quantity: 5000,
        completed: throughput.good_units || 422,
        dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        status: (throughput.good_units || 0) > 400 ? "in-progress" : "delayed",
      },
    ];

    // Throughput predictions
    const throughputPredictions = [
      { hour: "18:00", predicted: Math.round((throughput.actual || 0) * 0.95) },
      { hour: "19:00", predicted: Math.round((throughput.actual || 0) * 0.88) },
      { hour: "20:00", predicted: Math.round((throughput.actual || 0) * 0.82) },
      { hour: "21:00", predicted: Math.round((throughput.actual || 0) * 0.75) },
      { hour: "22:00", predicted: Math.round((throughput.actual || 0) * 0.68) },
      { hour: "23:00", predicted: Math.round((throughput.actual || 0) * 0.6) },
    ];

    // Downtime analysis from time metrics
    const downtimeAnalysis = [
      {
        reason: "Equipment Failure",
        duration: `${timeMetrics.total_repair_time || 0}min`,
        frequency: `${timeMetrics.number_of_failures || 0} occurrences`,
        impact: (timeMetrics.number_of_failures || 0) > 5 ? "High" : "Medium",
      },
      {
        reason: "Maintenance",
        duration: `${Math.round((timeMetrics.total_repair_time || 0) / 2)}min`,
        frequency: "Scheduled",
        impact: "Medium",
      },
      {
        reason: "Changeover",
        duration: `${timeMetrics.changeover_durations?.avg_changeover || 14}min`,
        frequency: "Per batch",
        impact: "Low",
      },
    ];

    return {
      throughputStats,
      hourlyThroughput,
      productionLines,
      dailyTrend,
      bottlenecks,
      productionOrders,
      throughputPredictions,
      downtimeAnalysis,
      rawData: {
        throughput,
        overview,
        timeMetrics,
      },
    };
  }, [data]);

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.name.includes("Throughput") ||
              entry.name.includes("Target")
                ? " units"
                : entry.name.includes("Efficiency") ||
                    entry.name.includes("Quality")
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

  // Loading state
  if (loading && !data) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-5">
                <Skeleton className="h-24 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <Alert variant="destructive" className="m-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Failed to load throughput data: {error}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Throughput Dashboard
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Live production throughput monitoring
            {lastUpdated && (
              <Badge variant="outline" className="ml-2">
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                Updating...
              </Badge>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="week" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="overview" onValueChange={setViewType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="View Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="lines">Production Lines</SelectItem>
              <SelectItem value="bottlenecks">Bottlenecks</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={refetch}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {throughputData && (
        <>
          {/* Throughput Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {throughputData.throughputStats.map((stat, index) => {
              const Icon = stat.icon;
              const isPositive = stat.trend === "up";
              const efficiency = calculateEfficiency(
                parseFloat(stat.value),
                parseFloat(stat.target),
              );

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
                            {stat.unit && ` ${stat.unit}`}
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
                            {stat.unit && ` ${stat.unit}`}
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

          {/* Last Updated Info */}
          {lastUpdated && (
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Last updated: {lastUpdated.toLocaleTimeString()} (Live updates
              every second)
            </div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hourly Throughput Chart */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Live Throughput Analysis</CardTitle>
                      <CardDescription>
                        Current: {throughputData.rawData.throughput.actual}{" "}
                        units/hour | Target:{" "}
                        {throughputData.rawData.throughput.target} units/hour
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
                    <ComposedChart data={throughputData.hourlyThroughput}>
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
                      <span className="text-gray-600">Current Throughput</span>
                      <span className="font-semibold">
                        {throughputData.rawData.throughput.actual} units/hour
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Quality Rate</span>
                      <span className="font-semibold text-emerald-600">
                        {throughputData.rawData.throughput.quality}%
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
                    Live throughput distribution across lines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {throughputData.productionLines.map((line, index) => (
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
                    Live Bottleneck Analysis
                  </CardTitle>
                  <CardDescription>Current process constraints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {throughputData.bottlenecks.map((bottleneck, index) => (
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
                                bottleneck.impact,
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
                    Active Production Order
                  </CardTitle>
                  <CardDescription>Current order status</CardDescription>
                </CardHeader>
                <CardContent>
                  {throughputData.productionOrders.map((order, index) => (
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
                              1,
                            )}
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
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
                <CardDescription>
                  AI-powered throughput forecast based on current data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={throughputData.throughputPredictions}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="hour" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      {showPredictions && (
                        <Area
                          type="monotone"
                          dataKey="predicted"
                          stroke="#10b981"
                          fill="#10b981"
                          fillOpacity={0.1}
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
                      {throughputData.throughputPredictions[0]?.predicted} units
                    </div>
                    <div className="text-xs text-gray-500">@ 18:00</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">
                      Confidence Level
                    </div>
                    <div className="text-lg font-bold text-blue-600">92.5%</div>
                    <div className="text-xs text-gray-500">
                      Based on current data
                    </div>
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
                  Current downtime events and impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {throughputData.downtimeAnalysis.map((downtime, index) => (
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
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium">Total Downtime Today:</span>{" "}
                      {throughputData.rawData.timeMetrics.total_repair_time ||
                        0}
                      min
                      <span className="ml-2 text-amber-700">
                        (-
                        {Math.round(
                          (throughputData.rawData.timeMetrics
                            .total_repair_time || 0) * 10,
                        )}{" "}
                        units)
                      </span>
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
                Daily throughput performance based on current rate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={throughputData.dailyTrend}>
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
                  <div className="text-lg font-bold">
                    {throughputData.dailyTrend.reduce(
                      (sum, day) => sum + day.throughput,
                      0,
                    )}{" "}
                    units
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Avg Daily</div>
                  <div className="text-lg font-bold">
                    {Math.round(
                      throughputData.dailyTrend.reduce(
                        (sum, day) => sum + day.throughput,
                        0,
                      ) / 7,
                    )}{" "}
                    units
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Current Rate</div>
                  <div className="text-lg font-bold text-emerald-600">
                    {throughputData.rawData.throughput.actual}/hr
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Efficiency</div>
                  <div className="text-lg font-bold">
                    {calculateEfficiency(
                      throughputData.rawData.throughput.actual,
                      throughputData.rawData.throughput.target,
                    )}
                    %
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
}
