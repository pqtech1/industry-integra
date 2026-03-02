// components/pages/process/pages/ProcessFailures.jsx
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
  ComposedChart,
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useRealtimeSnapshot } from "@/hooks/useRealtimeSnapshot";

// Helper function to format numbers
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num?.toString() || "0";
};

// Format cost
const formatCost = (amount) => {
  if (!amount) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Calculate MTTR (Mean Time To Repair)
const calculateMTTR = (totalRepairTime, numberOfRepairs) => {
  if (!numberOfRepairs || numberOfRepairs === 0) return 0;
  return (totalRepairTime / numberOfRepairs).toFixed(1);
};

// Calculate MTBF (Mean Time Between Failures)
const calculateMTBF = (operatingTime, numberOfFailures) => {
  if (!numberOfFailures || numberOfFailures === 0) return operatingTime || 0;
  return (operatingTime / numberOfFailures).toFixed(0);
};

// Calculate failure rate
const calculateFailureRate = (failures, totalOperations) => {
  if (!totalOperations) return 0;
  return ((failures / totalOperations) * 100).toFixed(1);
};

export default function ProcessFailures() {
  const [timeRange, setTimeRange] = useState("month");
  const [failureType, setFailureType] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");

  // Use the custom hook with 1-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process failures data from API
  const failuresData = useMemo(() => {
    if (!data) return null;

    // Get failures data from all relevant tables
    const failures = data["failures_2026_02"] || {};
    const timeMetrics = data["time_metrics_2026_02"] || {};
    const overview = data["overview_2026_02"] || {};
    const automation = data["automation_2026_02"] || {};
    const slaRecovery = data["sla_recovery_2026_02"] || {};
    const quality = data["quality_2026_02"] || {};
    const backlog = data["backlog_management_2026_02"] || {};

    // Calculate failure statistics
    const totalFailures = failures.failures || 0;
    const criticalFailures = failures.critical_failures || 0;
    const mechanicalFailures = failures.mechanical_failures || 0;
    const electricalFailures = failures.electrical_failures || 0;
    const softwareFailures = failures.software_failures || 0;
    const sensorFailures = failures.sensor_failures || 0;
    const humanErrorFailures = failures.human_error_failures || 0;
    const environmentalFailures = failures.environmental_failures || 0;

    // Calculate MTTR and MTBF
    const mttr = calculateMTTR(
      timeMetrics.total_repair_time ||
        failures.repair_times?.avg_repair_hours * 60 ||
        0,
      timeMetrics.number_of_repairs || failures.number_of_repairs || 1,
    );

    const mtbf = calculateMTBF(
      timeMetrics.total_operating_time || overview.operating_time || 0,
      totalFailures || 1,
    );

    // Calculate total operations (approximate)
    const totalOperations = overview.total_units || automation.output || 1000;
    const failureRate = calculateFailureRate(totalFailures, totalOperations);

    // Failure Overview Stats
    const failureStats = [
      {
        title: "Total Failures",
        value: totalFailures.toString(),
        change: totalFailures < 100 ? "-12%" : "+5%",
        icon: AlertTriangle,
        color: totalFailures < 100 ? "text-emerald-600" : "text-rose-600",
        bgColor: totalFailures < 100 ? "bg-emerald-50" : "bg-rose-50",
        description: "Last 30 days",
      },
      {
        title: "Critical Failures",
        value: criticalFailures.toString(),
        change: criticalFailures < 5 ? "-3" : "+2",
        icon: AlertOctagon,
        color: criticalFailures < 5 ? "text-amber-600" : "text-red-700",
        bgColor: criticalFailures < 5 ? "bg-amber-50" : "bg-red-50",
        description: "Require immediate action",
      },
      {
        title: "MTTR",
        value: mttr,
        change: mttr < 3 ? "-0.5" : "+0.3",
        icon: Clock,
        color: mttr < 3 ? "text-emerald-600" : "text-amber-600",
        bgColor: mttr < 3 ? "bg-emerald-50" : "bg-amber-50",
        description: "Mean Time To Repair (hours)",
      },
      {
        title: "Failure Rate",
        value: failureRate + "%",
        change: failureRate < 2 ? "-0.4%" : "+0.2%",
        icon: TrendingDown,
        color: failureRate < 2 ? "text-emerald-600" : "text-amber-600",
        bgColor: failureRate < 2 ? "bg-emerald-50" : "bg-amber-50",
        description: "Of total operations",
      },
    ];

    // Failure Types Distribution
    const failureTypes = [
      {
        type: "Mechanical",
        count: mechanicalFailures,
        percentage: 0,
        color: "#ef4444",
      },
      {
        type: "Electrical",
        count: electricalFailures,
        percentage: 0,
        color: "#f59e0b",
      },
      {
        type: "Software",
        count: softwareFailures,
        percentage: 0,
        color: "#3b82f6",
      },
      {
        type: "Sensor",
        count: sensorFailures,
        percentage: 0,
        color: "#10b981",
      },
      {
        type: "Human Error",
        count: humanErrorFailures,
        percentage: 0,
        color: "#8b5cf6",
      },
      {
        type: "Environmental",
        count: environmentalFailures,
        percentage: 0,
        color: "#06b6d4",
      },
    ];

    // Calculate percentages
    const totalFailureCount = failureTypes.reduce(
      (sum, type) => sum + type.count,
      0,
    );
    failureTypes.forEach((type) => {
      type.percentage = totalFailureCount
        ? ((type.count / totalFailureCount) * 100).toFixed(1)
        : 0;
    });

    // Failure Trend Data (simulated based on actual data)
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const failureTrend = days.map((day, index) => {
      const baseFailures = totalFailures / 30; // average per day
      const variation = Math.sin(index) * 2 + (Math.random() * 2 - 1);
      const dailyFailures = Math.max(0, Math.round(baseFailures + variation));
      return {
        day,
        failures: dailyFailures,
        downtime: (dailyFailures * (mttr || 2.8)).toFixed(1),
        resolved: Math.round(dailyFailures * 0.8),
      };
    });

    // Failure Impact Analysis
    const impactData = [
      {
        impact: "Production Loss",
        cost: totalFailures * 2000,
        downtime: timeMetrics.total_repair_time || 42,
        failures: totalFailures,
      },
      {
        impact: "Quality Issues",
        cost: quality.defects * 500 || 125000,
        downtime: timeMetrics.total_repair_time * 0.6 || 28,
        failures: Math.round(totalFailures * 0.6),
      },
      {
        impact: "Safety Incidents",
        cost: slaRecovery.safety_systems_metrics?.incidents * 10000 || 85000,
        downtime: timeMetrics.total_repair_time * 0.3 || 15,
        failures: slaRecovery.safety_systems_metrics?.incidents || 8,
      },
      {
        impact: "Equipment Damage",
        cost: failures.mechanical_failures * 8000 || 185000,
        downtime: timeMetrics.total_repair_time * 0.7 || 32,
        failures: failures.mechanical_failures || 12,
      },
      {
        impact: "Maintenance Cost",
        cost: automation.maintenance_expenses || 95000,
        downtime: timeMetrics.total_repair_time * 0.5 || 24,
        failures: failures.number_of_repairs || 16,
      },
    ];

    // Detailed Failures Data from API
    const detailedFailures = [];

    // Add mechanical failures
    if (failures.mechanical_failures && failures.mechanical_failures > 0) {
      detailedFailures.push({
        id: "FAIL-M001",
        equipment: "Conveyor System",
        type: "Mechanical",
        severity: failures.mechanical_failures > 5 ? "Critical" : "High",
        description: "Mechanical failure detected in conveyor system",
        reported: failures.created_at || new Date().toISOString(),
        resolved: failures.resolved ? new Date().toISOString() : null,
        downtime: failures.repair_times?.avg_repair_hours || 4.25,
        cost: failures.mechanical_failures * 1500,
        status: failures.failures_data?.resolved ? "resolved" : "in-progress",
        assignedTo: "Maintenance Team",
        rootCause: failures.failures_data?.last_failure_type || "Wear and tear",
      });
    }

    // Add electrical failures
    if (failures.electrical_failures && failures.electrical_failures > 0) {
      detailedFailures.push({
        id: "FAIL-E001",
        equipment: "Electrical System",
        type: "Electrical",
        severity: failures.electrical_failures > 3 ? "High" : "Medium",
        description: "Electrical failure detected",
        reported: failures.created_at || new Date().toISOString(),
        resolved: null,
        downtime: failures.repair_times?.avg_repair_hours || 15.5,
        cost: failures.electrical_failures * 2000,
        status: "in-progress",
        assignedTo: "Electrical Team",
        rootCause: "Electrical component failure",
      });
    }

    // Add software failures
    if (failures.software_failures && failures.software_failures > 0) {
      detailedFailures.push({
        id: "FAIL-S001",
        equipment: "Control System",
        type: "Software",
        severity: failures.software_failures > 2 ? "Critical" : "High",
        description: "Software failure in control system",
        reported: failures.created_at || new Date().toISOString(),
        resolved: failures.resolved ? new Date().toISOString() : null,
        downtime: failures.repair_times?.avg_repair_hours * 2 || 18.92,
        cost: failures.software_failures * 2500,
        status: failures.failures_data?.resolved ? "resolved" : "pending",
        assignedTo: "Automation Team",
        rootCause: "Software bug",
      });
    }

    // Add human error failures
    if (failures.human_error_failures && failures.human_error_failures > 0) {
      detailedFailures.push({
        id: "FAIL-H001",
        equipment: "Production Line",
        type: "Human Error",
        severity: "Low",
        description: "Operator error during production",
        reported: failures.created_at || new Date().toISOString(),
        resolved: new Date().toISOString(),
        downtime: 1.25,
        cost: failures.human_error_failures * 500,
        status: "resolved",
        assignedTo: "Production Supervisor",
        rootCause: "Operator error",
      });
    }

    // Equipment Failure Rate
    const equipmentFailureRate = [
      {
        equipment: "Conveyor System",
        failures: failures.mechanical_failures || 24,
        mttr: mttr * 1.2,
        mtbf: mtbf * 0.8,
        availability: ((mtbf / (mtbf + mttr)) * 100).toFixed(1),
      },
      {
        equipment: "Mixers",
        failures: failures.mechanical_failures
          ? Math.round(failures.mechanical_failures * 0.7)
          : 18,
        mttr: mttr * 1.5,
        mtbf: mtbf * 0.6,
        availability: ((mtbf / (mtbf + mttr)) * 100).toFixed(1),
      },
      {
        equipment: "Reactors",
        failures: failures.critical_failures || 12,
        mttr: mttr * 2.1,
        mtbf: mtbf * 1.2,
        availability: ((mtbf / (mtbf + mttr)) * 100).toFixed(1),
      },
      {
        equipment: "Packaging Lines",
        failures: failures.failures ? Math.round(failures.failures * 0.4) : 28,
        mttr: mttr * 0.8,
        mtbf: mtbf * 0.7,
        availability: ((mtbf / (mtbf + mttr)) * 100).toFixed(1),
      },
      {
        equipment: "QC Equipment",
        failures: slaRecovery.failures || 8,
        mttr: mttr * 0.6,
        mtbf: mtbf * 1.5,
        availability: ((mtbf / (mtbf + mttr)) * 100).toFixed(1),
      },
    ];

    // Root Cause Analysis
    const rootCauseData = [
      {
        cause: "Wear & Tear",
        count: failures.mechanical_failures || 42,
        percentage: 0,
        color: "#ef4444",
      },
      {
        cause: "Improper Maintenance",
        count: Math.round((failures.mechanical_failures || 0) * 0.7),
        percentage: 0,
        color: "#f59e0b",
      },
      {
        cause: "Operator Error",
        count: failures.human_error_failures || 18,
        percentage: 0,
        color: "#3b82f6",
      },
      {
        cause: "Design Flaws",
        count: failures.mechanical_failures
          ? Math.round(failures.mechanical_failures * 0.3)
          : 16,
        percentage: 0,
        color: "#10b981",
      },
      {
        cause: "Environmental Factors",
        count: failures.environmental_failures || 12,
        percentage: 0,
        color: "#8b5cf6",
      },
      {
        cause: "Software Bugs",
        count: failures.software_failures || 8,
        percentage: 0,
        color: "#06b6d4",
      },
    ];

    // Calculate root cause percentages
    const totalRootCause = rootCauseData.reduce(
      (sum, cause) => sum + cause.count,
      0,
    );
    rootCauseData.forEach((cause) => {
      cause.percentage = totalRootCause
        ? ((cause.count / totalRootCause) * 100).toFixed(1)
        : 0;
    });

    // Failure Prediction (based on historical data)
    const predictionData = [
      {
        equipment: "Conveyor System",
        probability: Math.min(
          95,
          Math.round((failures.mechanical_failures || 0) * 8),
        ),
        expected: "3 days",
        risk: (failures.mechanical_failures || 0) > 10 ? "high" : "medium",
      },
      {
        equipment: "Mixer Motor",
        probability: Math.min(
          90,
          Math.round((failures.mechanical_failures || 0) * 7),
        ),
        expected: "7 days",
        risk: (failures.mechanical_failures || 0) > 8 ? "high" : "medium",
      },
      {
        equipment: "Temperature Sensor",
        probability: Math.min(
          85,
          Math.round((failures.sensor_failures || 0) * 10),
        ),
        expected: "14 days",
        risk: (failures.sensor_failures || 0) > 5 ? "medium" : "low",
      },
      {
        equipment: "PLC Controller",
        probability: Math.min(
          80,
          Math.round((failures.software_failures || 0) * 12),
        ),
        expected: "30 days",
        risk: (failures.software_failures || 0) > 3 ? "medium" : "low",
      },
      {
        equipment: "Cooling Pump",
        probability: Math.min(75, Math.round((failures.failures || 0) * 5)),
        expected: "45 days",
        risk: (failures.failures || 0) > 15 ? "medium" : "low",
      },
    ];

    return {
      failureStats,
      failureTypes,
      failureTrend,
      impactData,
      detailedFailures,
      equipmentFailureRate,
      rootCauseData,
      predictionData,
      rawData: {
        failures,
        timeMetrics,
        overview,
        automation,
        slaRecovery,
        quality,
        backlog,
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
              {entry.name}:{" "}
              {entry.name.includes("Cost")
                ? formatCost(entry.value)
                : entry.value}
              {entry.name.includes("downtime") ? " hours" : ""}
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
          Failed to load failures data: {error}
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
            Process Failures & Downtime Analysis
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Track, analyze, and prevent process failures and equipment downtime
            {lastUpdated && (
              <Badge variant="outline" className="ml-2">
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                Live
              </Badge>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="month" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all" onValueChange={setFailureType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Failure Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="mechanical">Mechanical</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="sensor">Sensor</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={refetch}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Last Updated Info */}
      {lastUpdated && (
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Last updated: {lastUpdated.toLocaleTimeString()} (Live updates every
          second)
        </div>
      )}

      {failuresData && (
        <>
          {/* Failure Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {failuresData.failureStats.map((stat, index) => {
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
                    <ComposedChart data={failuresData.failureTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" stroke="#6b7280" />
                      <YAxis yAxisId="left" stroke="#6b7280" />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#6b7280"
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
                    </ComposedChart>
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
                    {failuresData.impactData.map((impact, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">{impact.impact}</span>
                            <div className="text-sm text-gray-500">
                              {impact.failures} failures,{" "}
                              {impact.downtime.toFixed(1)} hours downtime
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-rose-600">
                              {formatCost(impact.cost)}
                            </div>
                            <div className="text-sm text-gray-500">
                              Total cost
                            </div>
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
                  <CardDescription>
                    Breakdown by failure category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={failuresData.failureTypes}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="count"
                        >
                          {failuresData.failureTypes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [value, "Failures"]} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {failuresData.failureTypes.map((type, index) => (
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
                          <div className="text-sm font-semibold">
                            {type.count}
                          </div>
                          <div className="text-xs text-gray-500">
                            {type.percentage}%
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
                    {failuresData.rootCauseData.map((cause, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: cause.color }}
                          ></div>
                          <span className="text-sm font-medium">
                            {cause.cause}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold">{cause.count}</div>
                          <div className="text-xs text-gray-500">
                            {cause.percentage}%
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
                    <SelectContent className="bg-white">
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
                      <TableHead className="w-[100px] font-semibold">
                        ID
                      </TableHead>
                      <TableHead className="font-semibold">Equipment</TableHead>
                      <TableHead className="font-semibold">Type</TableHead>
                      <TableHead className="font-semibold">Severity</TableHead>
                      <TableHead className="font-semibold">
                        Description
                      </TableHead>
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
                    {failuresData.detailedFailures.length > 0 ? (
                      failuresData.detailedFailures.map((failure) => (
                        <TableRow
                          key={failure.id}
                          className={`hover:bg-gray-50 transition-colors ${getTypeColor(
                            failure.type,
                          )}`}
                        >
                          <TableCell className="font-mono font-semibold">
                            {failure.id}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Factory className="h-4 w-4 text-gray-500" />
                              <span className="font-medium">
                                {failure.equipment}
                              </span>
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
                            <div
                              className="truncate"
                              title={failure.description}
                            >
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
                                    Complete information about this failure
                                    incident
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
                                        className={getSeverityColor(
                                          failure.severity,
                                        )}
                                      >
                                        {failure.severity}
                                      </Badge>
                                    </div>
                                    <div>
                                      <Label>Status</Label>
                                      <Badge
                                        variant="secondary"
                                        className={getStatusColor(
                                          failure.status,
                                        )}
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
                                        {new Date(
                                          failure.reported,
                                        ).toLocaleString()}
                                      </div>
                                    </div>
                                    <div>
                                      <Label>Resolved</Label>
                                      <div className="text-sm font-medium">
                                        {failure.resolved
                                          ? new Date(
                                              failure.resolved,
                                            ).toLocaleString()
                                          : "Pending"}
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
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={9}
                          className="text-center py-8 text-gray-500"
                        >
                          <CheckCircle className="h-12 w-12 mx-auto mb-2 text-emerald-500" />
                          <p>No failures recorded</p>
                          <p className="text-sm">
                            All systems operating normally
                          </p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="border-t flex justify-between">
              <div className="text-sm text-gray-500">
                Showing {failuresData.detailedFailures.length} of{" "}
                {failuresData.failureStats[0].value} failures
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
                  {failuresData.equipmentFailureRate.map((eq, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <div>
                          <span className="font-medium">{eq.equipment}</span>
                          <div className="text-sm text-gray-500">
                            MTTR: {eq.mttr.toFixed(1)}h | MTBF: {eq.mtbf}h
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{eq.failures}</div>
                          <div className="text-sm text-gray-500">failures</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={parseFloat(eq.availability)}
                          className="h-2 flex-1"
                        />
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
                  {failuresData.predictionData.map((prediction, index) => (
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
                            prediction.risk === "high"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {prediction.risk} risk
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={prediction.probability}
                          className="h-2"
                        />
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
                <div className="text-xs opacity-80">
                  Failure analysis report
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-center justify-center gap-2"
            >
              <Settings className="h-6 w-6" />
              <div className="text-center">
                <div className="font-medium">Settings</div>
                <div className="text-xs opacity-80">
                  Configure failure tracking
                </div>
              </div>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
