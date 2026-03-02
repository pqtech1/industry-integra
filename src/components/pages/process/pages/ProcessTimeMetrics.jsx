// components/pages/process/pages/TimeMetrics.jsx
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
  Info,
  Users,
  Wrench,
  Gauge,
  AlertCircle,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

// Calculate MTBF (Mean Time Between Failures)
const calculateMTBF = (operatingTime, numberOfFailures) => {
  if (!numberOfFailures || numberOfFailures === 0) return operatingTime || 0;
  return ((operatingTime || 0) / numberOfFailures).toFixed(1);
};

// Calculate MTTR (Mean Time To Repair)
const calculateMTTR = (totalRepairTime, numberOfRepairs) => {
  if (!numberOfRepairs || numberOfRepairs === 0) return 0;
  return ((totalRepairTime || 0) / numberOfRepairs).toFixed(1);
};

// Calculate Availability
const calculateAvailability = (operatingTime, totalProductionTime) => {
  if (!totalProductionTime || totalProductionTime === 0) return 0;
  return ((operatingTime / totalProductionTime) * 100).toFixed(1);
};

export default function TimeMetrics() {
  const [timeRange, setTimeRange] = useState("day");
  const [metricType, setMetricType] = useState("all");
  const [showBenchmarks, setShowBenchmarks] = useState(true);

  // Use the custom hook with 1-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process time metrics data from API
  const timeMetricsData = useMemo(() => {
    if (!data) return null;

    // Get time metrics data from the API
    const timeMetrics = data["time_metrics_2026_02"] || {};
    const overview = data["overview_2026_02"] || {};
    const failures = data["failures_2026_02"] || {};
    const slaRecovery = data["sla_recovery_2026_02"] || {};
    const throughput = data["throughput_2026_02"] || {};

    // Calculate key metrics
    const mtbf = calculateMTBF(
      timeMetrics.total_operating_time || timeMetrics.operating_time,
      timeMetrics.number_of_failures || failures.failures,
    );

    const mttr = calculateMTTR(
      timeMetrics.total_repair_time,
      timeMetrics.number_of_repairs,
    );

    const availability = calculateAvailability(
      timeMetrics.operating_time,
      timeMetrics.total_production_time,
    );

    // Time Metrics Stats with real data
    const timeStats = [
      {
        title: "Mean Time Between Failures",
        value: mtbf,
        unit: "hours",
        change: mtbf > 400 ? "+12.5%" : "-5.2%",
        target: "500h",
        icon: Clock,
        color: mtbf > 400 ? "text-emerald-600" : "text-amber-600",
        bgColor: mtbf > 400 ? "bg-emerald-50" : "bg-amber-50",
        description: `${timeMetrics.number_of_failures || 0} failures recorded`,
      },
      {
        title: "Mean Time To Repair",
        value: mttr,
        unit: "hours",
        change: mttr < 3 ? "-0.3h" : "+0.5h",
        target: "2.5h",
        icon: Wrench,
        color: mttr < 3 ? "text-blue-600" : "text-amber-600",
        bgColor: mttr < 3 ? "bg-blue-50" : "bg-amber-50",
        description: `${timeMetrics.number_of_repairs || 0} repairs completed`,
      },
      {
        title: "Mean Time To Respond",
        value:
          timeMetrics.response_times?.avg_response ||
          slaRecovery.response_times?.avg_response_minutes ||
          0,
        unit: "minutes",
        change:
          (timeMetrics.response_times?.avg_response || 0) < 20
            ? "-2.3m"
            : "+3.1m",
        target: "15m",
        icon: Timer,
        color:
          (timeMetrics.response_times?.avg_response || 0) < 20
            ? "text-purple-600"
            : "text-amber-600",
        bgColor:
          (timeMetrics.response_times?.avg_response || 0) < 20
            ? "bg-purple-50"
            : "bg-amber-50",
        description: "Avg response time",
      },
      {
        title: "Production Cycle Time",
        value: throughput.time || overview.ideal_cycle_time || 0,
        unit: "seconds",
        change: (throughput.time || 0) < 40 ? "-1.8s" : "+2.3s",
        target: "40s",
        icon: RefreshCw,
        color: (throughput.time || 0) < 40 ? "text-amber-600" : "text-rose-600",
        bgColor: (throughput.time || 0) < 40 ? "bg-amber-50" : "bg-rose-50",
        description: "Per unit cycle",
      },
    ];

    // MTBF Trend Analysis (simulated based on actual data)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const mtbfTrend = months.map((month, index) => ({
      month,
      mtbf: Math.round(mtbf * (0.85 + index * 0.03)),
      failures: Math.max(
        1,
        Math.round(
          (timeMetrics.number_of_failures || 5) * (1.2 - index * 0.04),
        ),
      ),
      availability: Math.min(
        100,
        Math.round(availability * (0.97 + index * 0.005)),
      ),
    }));

    // MTTR Analysis by Equipment (from failures data)
    const mttrByEquipment = [
      {
        equipment: "CNC Machine A",
        mttr: failures.mechanical_failures ? mttr * 1.2 : mttr,
        target: 2.5,
        frequency: failures.mechanical_failures || 0,
        severity: (failures.mechanical_failures || 0) > 5 ? "high" : "medium",
      },
      {
        equipment: "Robotic Arm B",
        mttr: failures.electrical_failures ? mttr * 0.9 : mttr,
        target: 1.5,
        frequency: failures.electrical_failures || 0,
        severity: (failures.electrical_failures || 0) > 3 ? "medium" : "low",
      },
      {
        equipment: "Assembly Line C",
        mttr: failures.mechanical_failures ? mttr * 1.5 : mttr,
        target: 3.0,
        frequency: failures.mechanical_failures || 0,
        severity: (failures.mechanical_failures || 0) > 4 ? "high" : "medium",
      },
      {
        equipment: "Quality Scanner",
        mttr: failures.software_failures ? mttr * 0.7 : mttr,
        target: 1.8,
        frequency: failures.software_failures || 0,
        severity: "low",
      },
    ];

    // Response Time Analysis (from time metrics)
    const responseTimeData = Array.from({ length: 8 }, (_, i) => {
      const hour = (6 + i * 2).toString().padStart(2, "0") + ":00";
      const baseResponse = timeMetrics.response_times?.avg_response || 20;
      const variation = Math.sin(i) * 5 + (Math.random() * 4 - 2);

      return {
        hour,
        response: Math.max(5, Math.round((baseResponse + variation) * 10) / 10),
        target: 20,
        incidents: Math.max(
          0,
          Math.round(Math.random() * (timeMetrics.number_of_incidents || 3)),
        ),
      };
    });

    // Cycle Time Analysis (from throughput data)
    const cycleTimeData = [
      {
        product: "Standard Product",
        cycle: throughput.time || overview.ideal_cycle_time || 40,
        target: (throughput.time || 40) * 0.9,
        efficiency: 0,
      },
      {
        product: "Premium Product",
        cycle: (throughput.time || 40) * 1.2,
        target: (throughput.time || 40) * 1.1,
        efficiency: 0,
      },
      {
        product: "Custom Order",
        cycle: (throughput.time || 40) * 1.5,
        target: (throughput.time || 40) * 1.3,
        efficiency: 0,
      },
    ];

    // Calculate efficiencies
    cycleTimeData.forEach((product) => {
      product.efficiency = ((product.target / product.cycle) * 100).toFixed(1);
    });

    // Performance Metrics
    const performanceMetrics = [
      {
        metric: "Uptime",
        value: `${availability}%`,
        target: "99.9%",
        trend: availability > 99 ? "+0.05%" : "-0.02%",
        status: availability > 99 ? "good" : "warning",
      },
      {
        metric: "Downtime",
        value: `${(100 - availability).toFixed(2)}%`,
        target: "0.9%",
        trend: 100 - availability < 1 ? "-0.02%" : "+0.03%",
        status: 100 - availability < 1 ? "good" : "warning",
      },
      {
        metric: "Changeover Time",
        value: `${timeMetrics.changeover_durations?.avg_changeover || 0}min`,
        target: "30min",
        trend:
          (timeMetrics.changeover_durations?.avg_changeover || 0) < 30
            ? "-2min"
            : "+3min",
        status:
          (timeMetrics.changeover_durations?.avg_changeover || 0) < 30
            ? "good"
            : "warning",
      },
      {
        metric: "Response Efficiency",
        value: `${Math.round(((timeMetrics.response_times?.avg_response || 20) / 20) * 100)}%`,
        target: "100%",
        trend:
          (timeMetrics.response_times?.avg_response || 20) < 20 ? "+5%" : "-3%",
        status:
          (timeMetrics.response_times?.avg_response || 20) < 20
            ? "good"
            : "warning",
      },
    ];

    // Time-Based Alerts
    const timeAlerts = [];

    if (mttr > 3) {
      timeAlerts.push({
        id: "ALT-001",
        metric: "MTTR",
        equipment: "Multiple Systems",
        value: `${mttr}h`,
        threshold: "3.0h",
        status: "critical",
      });
    }

    if ((timeMetrics.response_times?.avg_response || 0) > 20) {
      timeAlerts.push({
        id: "ALT-002",
        metric: "Response Time",
        equipment: "All Systems",
        value: `${timeMetrics.response_times?.avg_response || 0}m`,
        threshold: "20m",
        status: "warning",
      });
    }

    if ((throughput.time || 0) > 45) {
      timeAlerts.push({
        id: "ALT-003",
        metric: "Cycle Time",
        equipment: "Production Line",
        value: `${throughput.time || 0}s`,
        threshold: "45s",
        status: "warning",
      });
    }

    if (mtbf < 400) {
      timeAlerts.push({
        id: "ALT-004",
        metric: "MTBF",
        equipment: "Critical Equipment",
        value: `${mtbf}h`,
        threshold: "400h",
        status: "info",
      });
    }

    // Shift Performance (simulated based on actual data)
    const shiftPerformance = [
      {
        shift: "Morning (6-14)",
        avgCycle: Math.round((throughput.time || 40) * 0.95),
        efficiency: Math.round(availability * 0.99),
        incidents: Math.max(
          0,
          Math.round((timeMetrics.number_of_incidents || 1) * 0.8),
        ),
      },
      {
        shift: "Afternoon (14-22)",
        avgCycle: Math.round((throughput.time || 40) * 1.05),
        efficiency: Math.round(availability * 0.97),
        incidents: Math.round((timeMetrics.number_of_incidents || 1) * 1.2),
      },
      {
        shift: "Night (22-6)",
        avgCycle: Math.round((throughput.time || 40) * 1.1),
        efficiency: Math.round(availability * 0.95),
        incidents: Math.max(
          0,
          Math.round((timeMetrics.number_of_incidents || 1) * 0.6),
        ),
      },
    ];

    // Historical Data (simulated trend)
    const historicalData = [
      {
        period: "Q1 2024",
        mtbf: Math.round(mtbf * 0.85),
        mttr: parseFloat(mttr) * 1.2,
        response: (timeMetrics.response_times?.avg_response || 20) * 1.3,
        cycle: (throughput.time || 40) * 1.2,
      },
      {
        period: "Q2 2024",
        mtbf: Math.round(mtbf * 0.9),
        mttr: parseFloat(mttr) * 1.1,
        response: (timeMetrics.response_times?.avg_response || 20) * 1.15,
        cycle: (throughput.time || 40) * 1.1,
      },
      {
        period: "Q3 2024",
        mtbf: Math.round(mtbf * 0.95),
        mttr: parseFloat(mttr) * 1.05,
        response: (timeMetrics.response_times?.avg_response || 20) * 1.05,
        cycle: (throughput.time || 40) * 1.05,
      },
      {
        period: "Q4 2024",
        mtbf: Math.round(mtbf),
        mttr: parseFloat(mttr),
        response: timeMetrics.response_times?.avg_response || 20,
        cycle: throughput.time || 40,
      },
    ];

    // Improvement Initiatives
    const improvementInitiatives = [
      {
        initiative: "Predictive Maintenance",
        target: `Increase MTBF by 15% (Current: ${mtbf}h)`,
        progress: Math.min(100, Math.round((mtbf / 500) * 100)),
        eta: "2024-03-15",
      },
      {
        initiative: "Response Team Training",
        target: `Reduce MTTR by 20% (Current: ${mttr}h)`,
        progress: Math.min(100, Math.round((1 - mttr / 3) * 100)),
        eta: "2024-02-28",
      },
      {
        initiative: "Process Optimization",
        target: `Reduce Cycle Time by 10% (Current: ${throughput.time || 40}s)`,
        progress: Math.min(
          100,
          Math.round(((throughput.time || 40) / 45) * 100),
        ),
        eta: "2024-01-31",
      },
    ];

    return {
      timeStats,
      mtbfTrend,
      mttrByEquipment,
      responseTimeData,
      cycleTimeData,
      performanceMetrics,
      timeAlerts,
      historicalData,
      improvementInitiatives,
      shiftPerformance,
      rawData: {
        timeMetrics,
        overview,
        failures,
        slaRecovery,
        throughput,
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
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load time metrics data: {error}
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
            Time Metrics & Analysis
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Live time-based performance metrics and reliability analysis
            {lastUpdated && (
              <Badge variant="outline" className="ml-2">
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                Live
              </Badge>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="day" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all" onValueChange={setMetricType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Metric Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Metrics</SelectItem>
              <SelectItem value="mtbf">MTBF</SelectItem>
              <SelectItem value="mttr">MTTR</SelectItem>
              <SelectItem value="response">Response Time</SelectItem>
              <SelectItem value="cycle">Cycle Time</SelectItem>
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

      {timeMetricsData && (
        <>
          {/* Time Metrics Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeMetricsData.timeStats.map((stat, index) => {
              const Icon = stat.icon;
              const isPositive = !stat.change.startsWith("-");
              const valueNum = parseFloat(stat.value);

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
                              valueNum >= parseFloat(stat.target)
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

          {/* Last Updated Info */}
          {lastUpdated && (
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Last updated: {lastUpdated.toLocaleTimeString()} (Live updates
              every second)
            </div>
          )}

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
                        Mean Time Between Failures:{" "}
                        {timeMetricsData.rawData.timeMetrics
                          .number_of_failures || 0}{" "}
                        failures recorded
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
                    <ComposedChart data={timeMetricsData.mtbfTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis yAxisId="left" stroke="#6b7280" />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#6b7280"
                        domain={[95, 100]}
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
                      <span className="font-semibold">
                        {timeMetricsData.timeStats[0].value} hours
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        Total Operating Time
                      </span>
                      <span className="font-semibold text-emerald-600">
                        {timeMetricsData.rawData.timeMetrics
                          .total_operating_time || 0}{" "}
                        hours
                      </span>
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
                    Current avg response:{" "}
                    {timeMetricsData.rawData.timeMetrics.response_times
                      ?.avg_response || 0}{" "}
                    minutes
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={timeMetricsData.responseTimeData}>
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
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#6b7280"
                      />
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
                    Total Incidents:{" "}
                    {timeMetricsData.rawData.timeMetrics.number_of_incidents ||
                      0}
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
                  <CardDescription>
                    Mean Time To Repair: {timeMetricsData.timeStats[1].value}{" "}
                    hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {timeMetricsData.mttrByEquipment.map((equipment, index) => (
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
                                {equipment.mttr.toFixed(1)}h
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
                    Current cycle:{" "}
                    {timeMetricsData.rawData.throughput.time || 0}s
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {timeMetricsData.cycleTimeData.map((product, index) => (
                      <div
                        key={index}
                        className="p-3 border border-gray-100 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-medium">{product.product}</div>
                            <div className="text-sm text-gray-500">
                              Target: {product.target.toFixed(1)}s
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
                              {product.cycle.toFixed(1)}s
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
                            Variance:{" "}
                            {product.cycle > product.target ? "+" : ""}
                            {(product.cycle - product.target).toFixed(1)}s
                          </span>
                          <span>
                            {((product.target / product.cycle) * 100).toFixed(
                              1,
                            )}
                            % of target
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
                  {timeMetricsData.performanceMetrics.map((metric, index) => (
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
                  {timeMetricsData.timeAlerts.length > 0 ? (
                    timeMetricsData.timeAlerts.map((alert, index) => (
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
                    ))
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      <CheckCircle className="h-12 w-12 mx-auto mb-2 text-emerald-500" />
                      <p>No active alerts</p>
                      <p className="text-sm">All metrics within normal range</p>
                    </div>
                  )}
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
                    <LineChart data={timeMetricsData.historicalData}>
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
                    <div className="text-lg font-bold text-emerald-600">
                      +
                      {Math.round(
                        (timeMetricsData.mtbfTrend[5]?.mtbf /
                          timeMetricsData.mtbfTrend[0]?.mtbf -
                          1) *
                          100,
                      )}
                      %
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">MTTR Trend</div>
                    <div className="text-lg font-bold text-rose-600">
                      -
                      {Math.round(
                        (1 -
                          timeMetricsData.historicalData[3]?.mttr /
                            timeMetricsData.historicalData[0]?.mttr) *
                          100,
                      )}
                      %
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Response Trend</div>
                    <div className="text-lg font-bold text-emerald-600">
                      -
                      {Math.round(
                        (1 -
                          timeMetricsData.historicalData[3]?.response /
                            timeMetricsData.historicalData[0]?.response) *
                          100,
                      )}
                      %
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Cycle Trend</div>
                    <div className="text-lg font-bold text-emerald-600">
                      -
                      {Math.round(
                        (1 -
                          timeMetricsData.historicalData[3]?.cycle /
                            timeMetricsData.historicalData[0]?.cycle) *
                          100,
                      )}
                      %
                    </div>
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
                  {timeMetricsData.improvementInitiatives.map(
                    (initiative, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">
                              {initiative.initiative}
                            </div>
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
                    ),
                  )}
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
              <CardDescription>
                Time metrics performance by shift
              </CardDescription>
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
                      <TableHead className="font-semibold">
                        Efficiency
                      </TableHead>
                      <TableHead className="font-semibold">Incidents</TableHead>
                      <TableHead className="font-semibold">
                        Response Time
                      </TableHead>
                      <TableHead className="font-semibold">MTTR</TableHead>
                      <TableHead className="font-semibold text-right">
                        Performance
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {timeMetricsData.shiftPerformance.map((shift, index) => (
                      <TableRow
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <TableCell className="font-medium">
                          {shift.shift}
                        </TableCell>
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
                                ? (
                                    timeMetricsData.rawData.timeMetrics
                                      .response_times?.avg_response * 0.9
                                  ).toFixed(1)
                                : shift.shift === "Afternoon (14-22)"
                                  ? (
                                      timeMetricsData.rawData.timeMetrics
                                        .response_times?.avg_response * 1.1
                                    ).toFixed(1)
                                  : (
                                      timeMetricsData.rawData.timeMetrics
                                        .response_times?.avg_response * 1.2
                                    ).toFixed(1)}
                              m
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Wrench className="h-3 w-3 text-gray-500" />
                            <span>
                              {shift.shift === "Morning (6-14)"
                                ? (
                                    (timeMetricsData.rawData.timeMetrics
                                      .total_repair_time /
                                      (timeMetricsData.rawData.timeMetrics
                                        .number_of_repairs || 1)) *
                                    0.9
                                  ).toFixed(1)
                                : shift.shift === "Afternoon (14-22)"
                                  ? (
                                      (timeMetricsData.rawData.timeMetrics
                                        .total_repair_time /
                                        (timeMetricsData.rawData.timeMetrics
                                          .number_of_repairs || 1)) *
                                      1.1
                                    ).toFixed(1)
                                  : (
                                      (timeMetricsData.rawData.timeMetrics
                                        .total_repair_time /
                                        (timeMetricsData.rawData.timeMetrics
                                          .number_of_repairs || 1)) *
                                      1.2
                                    ).toFixed(1)}
                              h
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
                Showing performance across{" "}
                {timeMetricsData.shiftPerformance.length} shifts
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
              <span className="font-medium">Last updated:</span>{" "}
              {lastUpdated?.toLocaleString() || "N/A"}
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
        </>
      )}
    </div>
  );
}
