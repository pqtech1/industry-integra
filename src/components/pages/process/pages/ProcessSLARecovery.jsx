// components/pages/process/pages/ProcessSLARecovery.jsx
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
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  Target,
  Shield,
  Zap,
  Users,
  BarChart3,
  Download,
  Filter,
  Search,
  Settings,
  Eye,
  FileText,
  Calendar,
  Timer,
  Bell,
  Activity,
  AlertCircle,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Clock as ClockIcon,
  Shield as ShieldIcon,
  Target as TargetIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
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

// Format time
const formatTime = (minutes) => {
  if (!minutes) return "0m";
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

// Calculate compliance percentage
const calculateCompliance = (compliant, total) => {
  if (!total || total === 0) return 100;
  return ((compliant / total) * 100).toFixed(1);
};

export default function ProcessSLARecovery() {
  const [timeRange, setTimeRange] = useState("month");
  const [slaType, setSlaType] = useState("all");
  const [showBreachDetails, setShowBreachDetails] = useState(false);

  // Use the custom hook with 1-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process SLA and recovery data from API
  const slaRecoveryData = useMemo(() => {
    if (!data) return null;

    // Get SLA and recovery data from all relevant tables
    const slaRecovery = data["sla_recovery_2026_02"] || {};
    const failures = data["failures_2026_02"] || {};
    const timeMetrics = data["time_metrics_2026_02"] || {};
    const overview = data["overview_2026_02"] || {};
    const quality = data["quality_2026_02"] || {};
    const throughput = data["throughput_2026_02"] || {};
    const resources = data["resources_2026_02"] || {};
    const compliance = data["compliance_2026_02"] || {};

    // Calculate SLA statistics
    const slaInstances = slaRecovery.sla_instances || 283;
    const slaBreaches = slaRecovery.sla_breaches || 9;
    const compliantInstances = slaRecovery.compliant_instances || 274;
    const overallCompliance = calculateCompliance(
      compliantInstances,
      slaInstances,
    );

    const avgResponseTime =
      slaRecovery.response_times?.avg_response_minutes || 39;
    const maxResponseTime =
      slaRecovery.response_times?.max_response_minutes || 53;

    const successfulRecoveries = slaRecovery.successful_recoveries || 4;
    const recoveries = slaRecovery.recoveries || 9;
    const recoverySuccessRate = recoveries
      ? ((successfulRecoveries / recoveries) * 100).toFixed(1)
      : 96.8;

    const energyUptime =
      slaRecovery.energy_supply_metrics?.uptime_percentage || 92;
    const productionEfficiency =
      slaRecovery.production_line_metrics?.efficiency || 92;
    const defectRate = slaRecovery.quality_control_metrics?.defect_rate || 6;

    // SLA Overview Stats
    const slaStats = [
      {
        title: "Overall SLA Compliance",
        value: overallCompliance + "%",
        change: overallCompliance > 98 ? "+0.8%" : "-1.2%",
        icon: Shield,
        color: overallCompliance > 98 ? "text-emerald-600" : "text-amber-600",
        bgColor: overallCompliance > 98 ? "bg-emerald-50" : "bg-amber-50",
        description: "Across all SLAs",
      },
      {
        title: "Critical SLA Breaches",
        value: slaBreaches.toString(),
        change: slaBreaches < 5 ? "-2" : "+1",
        icon: AlertTriangle,
        color: slaBreaches < 5 ? "text-amber-600" : "text-rose-600",
        bgColor: slaBreaches < 5 ? "bg-amber-50" : "bg-rose-50",
        description: "This month",
      },
      {
        title: "Avg. Response Time",
        value: avgResponseTime + "m",
        change: avgResponseTime < 40 ? "-2.1m" : "+1.5m",
        icon: Clock,
        color: avgResponseTime < 40 ? "text-blue-600" : "text-amber-600",
        bgColor: avgResponseTime < 40 ? "bg-blue-50" : "bg-amber-50",
        description: "Mean time to respond",
      },
      {
        title: "Recovery Success Rate",
        value: recoverySuccessRate + "%",
        change: recoverySuccessRate > 95 ? "+1.2%" : "-0.8%",
        icon: CheckCircle,
        color: recoverySuccessRate > 95 ? "text-purple-600" : "text-amber-600",
        bgColor: recoverySuccessRate > 95 ? "bg-purple-50" : "bg-amber-50",
        description: "Incident recovery",
      },
    ];

    // SLA Performance by Category
    const slaCategories = [
      {
        category: "Response Time",
        compliance: avgResponseTime < 40 ? 98.5 : 92.0,
        breaches: avgResponseTime > 40 ? 2 : 0,
        target: 99,
        color: "#3b82f6",
      },
      {
        category: "Resolution Time",
        compliance: failures.repair_times?.avg_repair_hours
          ? (24 / failures.repair_times?.avg_repair_hours) * 100
          : 97.8,
        breaches: failures.repair_times?.max_repair_hours > 24 ? 4 : 2,
        target: 98,
        color: "#10b981",
      },
      {
        category: "Uptime",
        compliance: energyUptime,
        breaches: 100 - energyUptime > 1 ? 1 : 0,
        target: 99.9,
        color: "#f59e0b",
      },
      {
        category: "Quality",
        compliance: 100 - defectRate,
        breaches: defectRate > 5 ? 8 : 3,
        target: 97,
        color: "#8b5cf6",
      },
      {
        category: "Throughput",
        compliance: productionEfficiency,
        breaches: productionEfficiency < 90 ? 10 : 5,
        target: 96,
        color: "#ef4444",
      },
    ];

    // SLA Trend Analysis (simulated based on actual data)
    const weeks = ["W1", "W2", "W3", "W4", "W5", "W6"];
    const slaTrend = weeks.map((week, index) => {
      const baseCompliance = parseFloat(overallCompliance);
      const baseResponse = avgResponseTime;
      return {
        week,
        compliance: Math.min(100, baseCompliance - 2 + index * 0.4),
        breaches: Math.max(0, Math.round(slaBreaches - index * 0.5)),
        response: Math.max(5, baseResponse - index * 0.8),
      };
    });

    // Incident Recovery Analysis
    const incidentRecovery = [];

    // Add failure incidents
    if (failures.failures && failures.failures > 0) {
      incidentRecovery.push({
        incident: "Equipment Failure",
        severity: failures.critical_failures > 0 ? "critical" : "high",
        reported: failures.created_at || new Date().toISOString(),
        resolved: failures.resolved ? new Date().toISOString() : null,
        duration: formatTime(
          failures.repair_times?.avg_repair_hours * 60 || 105,
        ),
        sla: failures.repair_times?.avg_repair_hours > 4 ? "breached" : "met",
        assigned: "Maintenance Team",
      });
    }

    // Add recovery incidents
    if (slaRecovery.recoveries && slaRecovery.recoveries > 0) {
      incidentRecovery.push({
        incident: "System Recovery",
        severity: slaRecovery.recoveries > 5 ? "critical" : "high",
        reported: slaRecovery.created_at || new Date().toISOString(),
        resolved:
          slaRecovery.recoveries > slaRecovery.successful_recoveries
            ? null
            : new Date().toISOString(),
        duration: formatTime(120),
        sla:
          slaRecovery.successful_recoveries > slaRecovery.recoveries * 0.9
            ? "met"
            : "breached",
        assigned: "Ops Team",
      });
    }

    // Add maintenance incidents
    if (slaRecovery.maintenance_metrics?.preventive_maintenance > 0) {
      incidentRecovery.push({
        incident: "Preventive Maintenance",
        severity: "medium",
        reported: new Date(Date.now() - 7 * 86400000).toISOString(),
        resolved: new Date().toISOString(),
        duration: formatTime(240),
        sla: "met",
        assigned: "Maintenance Team",
      });
    }

    // Service Level Agreements
    const serviceLevels = [
      {
        service: "Production Line",
        sla: "99.5% Uptime",
        compliance: productionEfficiency,
        breaches: productionEfficiency < 95 ? 1 : 0,
        color: "#3b82f6",
      },
      {
        service: "Quality Control",
        sla: "98% Accuracy",
        compliance: 100 - defectRate,
        breaches: defectRate > 2 ? 3 : 1,
        color: "#10b981",
      },
      {
        service: "Maintenance",
        sla: "4h Response Time",
        compliance: failures.repair_times?.avg_repair_hours
          ? (4 / failures.repair_times?.avg_repair_hours) * 100
          : 98.2,
        breaches: failures.repair_times?.avg_repair_hours > 4 ? 2 : 0,
        color: "#f59e0b",
      },
      {
        service: "Safety Systems",
        sla: "99.9% Availability",
        compliance: energyUptime,
        breaches: 100 - energyUptime > 0.1 ? 0 : 1,
        color: "#8b5cf6",
      },
      {
        service: "Energy Supply",
        sla: "99.8% Reliability",
        compliance: energyUptime,
        breaches: 100 - energyUptime > 0.2 ? 1 : 0,
        color: "#ef4444",
      },
    ];

    // Recovery Time Analysis
    const recoveryTime = [
      {
        severity: "Critical",
        avgTime: formatTime(
          failures.repair_times?.max_repair_hours * 60 || 135,
        ),
        target: "1h",
        compliance: failures.repair_times?.max_repair_hours < 1 ? 98 : 65,
        breaches: failures.critical_failures || 8,
      },
      {
        severity: "High",
        avgTime: formatTime(
          failures.repair_times?.avg_repair_hours * 60 || 225,
        ),
        target: "4h",
        compliance: failures.repair_times?.avg_repair_hours < 4 ? 95 : 92,
        breaches: failures.failures ? Math.round(failures.failures * 0.3) : 3,
      },
      {
        severity: "Medium",
        avgTime: formatTime(500),
        target: "8h",
        compliance: 96,
        breaches: 2,
      },
      {
        severity: "Low",
        avgTime: formatTime(1455),
        target: "24h",
        compliance: 99,
        breaches: 1,
      },
    ];

    // SLA Breach Analysis
    const breachAnalysis = [
      {
        cause: "Equipment Failure",
        count: failures.failures || 12,
        percentage: 0,
        avgImpact: formatTime(
          failures.repair_times?.avg_repair_hours * 60 || 252,
        ),
        color: "#ef4444",
      },
      {
        cause: "Human Error",
        count: failures.human_error_failures || 8,
        percentage: 0,
        avgImpact: formatTime(168),
        color: "#f59e0b",
      },
      {
        cause: "Software Bug",
        count: failures.software_failures || 6,
        percentage: 0,
        avgImpact: formatTime(210),
        color: "#3b82f6",
      },
      {
        cause: "Network Issue",
        count: 5,
        percentage: 0,
        avgImpact: formatTime(108),
        color: "#10b981",
      },
      {
        cause: "Power Outage",
        count: failures.environmental_failures || 3,
        percentage: 0,
        avgImpact: formatTime(312),
        color: "#8b5cf6",
      },
      {
        cause: "Supplier Delay",
        count: 3,
        percentage: 0,
        avgImpact: formatTime(390),
        color: "#06b6d4",
      },
    ];

    // Calculate breach percentages
    const totalBreaches = breachAnalysis.reduce(
      (sum, cause) => sum + cause.count,
      0,
    );
    breachAnalysis.forEach((cause) => {
      cause.percentage = totalBreaches
        ? Math.round((cause.count / totalBreaches) * 100)
        : 0;
    });

    // SLA Performance Metrics
    const performanceMetrics = [
      {
        metric: "MTTR",
        value: formatTime(
          timeMetrics.total_repair_time / (timeMetrics.number_of_repairs || 1),
        ),
        target: "2.5h",
        compliance: 89,
        trend: "-0.3h",
      },
      {
        metric: "MTBF",
        value:
          Math.round(
            timeMetrics.total_operating_time / (failures.failures || 1),
          ) + "h",
        target: "500h",
        compliance: 90,
        trend: "+25h",
      },
      {
        metric: "Availability",
        value: energyUptime + "%",
        target: "99.9%",
        compliance: 99.5,
        trend: "+0.05%",
      },
      {
        metric: "Service Quality",
        value: slaRecovery.service_quality_scores + "%" || "97.2%",
        target: "98%",
        compliance: 99.2,
        trend: "+0.8%",
      },
    ];

    // Escalation Status
    const escalations = [
      {
        id: "ESC-001",
        incident: "Critical Failure",
        level: "L3",
        time: "45m",
        status: failures.critical_failures ? "resolved" : "pending",
        assigned: "Senior Engineer",
      },
      {
        id: "ESC-002",
        incident: "SLA Breach",
        level: "L2",
        time: "2h 15m",
        status: slaBreaches > 5 ? "in-progress" : "resolved",
        assigned: "Operations Team",
      },
    ];

    // Breach Details Data
    const breachDetails = [];
    if (slaBreaches > 0) {
      for (let i = 1; i <= Math.min(4, slaBreaches); i++) {
        breachDetails.push({
          id: `BR-00${i}`,
          sla: "Response Time",
          service: "Production Line",
          time:
            new Date(Date.now() - i * 86400000).toISOString().split("T")[0] +
            " 08:30",
          duration: formatTime(25 * i),
          impact: i === 1 ? "Critical" : i === 2 ? "High" : "Medium",
          action: i === 1 ? "Emergency Response" : "Automated Recovery",
        });
      }
    }

    return {
      slaStats,
      slaCategories,
      slaTrend,
      incidentRecovery,
      serviceLevels,
      recoveryTime,
      breachAnalysis,
      performanceMetrics,
      escalations,
      breachDetails,
      rawData: {
        slaRecovery,
        failures,
        timeMetrics,
        overview,
        quality,
        throughput,
        resources,
        compliance,
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
              {entry.name.includes("Compliance") ||
              entry.name.includes("Response")
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
      case "met":
      case "resolved":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "in-progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "pending":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "breached":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Get severity color
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "high":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100";
      case "medium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "low":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
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
          Failed to load SLA and recovery data: {error}
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
            Process SLA & Recovery Dashboard
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Service Level Agreement compliance and incident recovery tracking
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
          <Select defaultValue="all" onValueChange={setSlaType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="SLA Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All SLAs</SelectItem>
              <SelectItem value="response">Response Time</SelectItem>
              <SelectItem value="resolution">Resolution Time</SelectItem>
              <SelectItem value="uptime">Uptime</SelectItem>
              <SelectItem value="quality">Quality</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={refetch}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export SLA Report
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

      {slaRecoveryData && (
        <>
          {/* SLA Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {slaRecoveryData.slaStats.map((stat, index) => {
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
              {/* SLA Trend Analysis */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>SLA Performance Trend</CardTitle>
                  <CardDescription>
                    Weekly compliance and breach analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={slaRecoveryData.slaTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="week" stroke="#6b7280" />
                      <YAxis
                        yAxisId="left"
                        stroke="#6b7280"
                        domain={[96, 100]}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#6b7280"
                        domain={[0, 6]}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="compliance"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        name="SLA Compliance %"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="breaches"
                        stroke="#ef4444"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Breaches"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="response"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        name="Response Time (m)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Service Level Agreements */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Service Level Agreements
                  </CardTitle>
                  <CardDescription>
                    Performance against service level targets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {slaRecoveryData.serviceLevels.map((service, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">
                              {service.service}
                            </span>
                            <div className="text-sm text-gray-500">
                              {service.sla}
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`text-xl font-bold ${
                                service.compliance >=
                                parseFloat(service.sla.match(/\d+\.?\d*/)[0])
                                  ? "text-emerald-600"
                                  : "text-rose-600"
                              }`}
                            >
                              {service.compliance}%
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.breaches} breaches
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={service.compliance}
                            className="h-2 flex-1"
                            indicatorClassName={
                              service.compliance >=
                              parseFloat(service.sla.match(/\d+\.?\d*/)[0])
                                ? "bg-emerald-500"
                                : "bg-rose-500"
                            }
                          />
                          <span className="text-xs text-gray-500">
                            {service.sla.match(/\d+\.?\d*/)[0]}% target
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - SLA Categories & Breach Analysis */}
            <div className="space-y-6">
              {/* SLA Categories Performance */}
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    SLA Categories
                  </CardTitle>
                  <CardDescription>
                    Performance across SLA types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={slaRecoveryData.slaCategories}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="category" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" domain={[94, 100]} />
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Compliance"]}
                        />
                        <Bar
                          dataKey="compliance"
                          fill="#8884d8"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {slaRecoveryData.slaCategories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: category.color }}
                          ></div>
                          <span className="text-sm">{category.category}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold">
                            {category.compliance}%
                          </div>
                          <div className="text-xs text-gray-500">
                            {category.breaches} breaches
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recovery Time Analysis */}
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-purple-600" />
                    Recovery Time Analysis
                  </CardTitle>
                  <CardDescription>
                    Average recovery times by severity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {slaRecoveryData.recoveryTime.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className={getSeverityColor(
                                item.severity.toLowerCase(),
                              )}
                            >
                              {item.severity}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              Avg: {item.avgTime}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold">
                              {item.compliance}%
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={item.compliance}
                            className="h-2 flex-1"
                            indicatorClassName={
                              item.compliance >= 95
                                ? "bg-emerald-500"
                                : item.compliance >= 85
                                  ? "bg-blue-500"
                                  : item.compliance >= 75
                                    ? "bg-amber-500"
                                    : "bg-rose-500"
                            }
                          />
                          <span className="text-xs text-gray-500">
                            Target: {item.target}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Incident Recovery Table */}
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="border-b">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle>Incident Recovery Tracking</CardTitle>
                  <CardDescription>
                    Recent incidents and SLA compliance status
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Severity" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="all">All Severities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
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
                      <TableHead className="font-semibold">Incident</TableHead>
                      <TableHead className="font-semibold">Severity</TableHead>
                      <TableHead className="font-semibold">Reported</TableHead>
                      <TableHead className="font-semibold">Resolved</TableHead>
                      <TableHead className="font-semibold">Duration</TableHead>
                      <TableHead className="font-semibold">
                        SLA Status
                      </TableHead>
                      <TableHead className="font-semibold">
                        Assigned To
                      </TableHead>
                      <TableHead className="font-semibold text-right">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {slaRecoveryData.incidentRecovery.length > 0 ? (
                      slaRecoveryData.incidentRecovery.map(
                        (incident, index) => (
                          <TableRow
                            key={index}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <TableCell>
                              <div className="font-medium">
                                {incident.incident}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="secondary"
                                className={getSeverityColor(incident.severity)}
                              >
                                {incident.severity}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 text-gray-500" />
                                <span className="text-sm">
                                  {new Date(incident.reported).toLocaleString()}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 text-gray-500" />
                                <span className="text-sm">
                                  {incident.resolved
                                    ? new Date(
                                        incident.resolved,
                                      ).toLocaleString()
                                    : "Ongoing"}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-gray-500" />
                                <span className="font-medium">
                                  {incident.duration}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="secondary"
                                className={getStatusColor(incident.sla)}
                              >
                                {incident.sla === "met"
                                  ? "SLA Met"
                                  : "SLA Breached"}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="text-sm">{incident.assigned}</div>
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
                                      Incident Details - {incident.incident}
                                    </DialogTitle>
                                    <DialogDescription>
                                      Complete incident recovery information
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label>Incident</Label>
                                        <div className="text-sm font-medium">
                                          {incident.incident}
                                        </div>
                                      </div>
                                      <div>
                                        <Label>Severity</Label>
                                        <Badge
                                          variant="secondary"
                                          className={getSeverityColor(
                                            incident.severity,
                                          )}
                                        >
                                          {incident.severity}
                                        </Badge>
                                      </div>
                                      <div>
                                        <Label>SLA Status</Label>
                                        <Badge
                                          variant="secondary"
                                          className={getStatusColor(
                                            incident.sla,
                                          )}
                                        >
                                          {incident.sla === "met"
                                            ? "SLA Met"
                                            : "SLA Breached"}
                                        </Badge>
                                      </div>
                                      <div>
                                        <Label>Assigned To</Label>
                                        <div className="text-sm font-medium">
                                          {incident.assigned}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label>Reported At</Label>
                                        <div className="text-sm font-medium">
                                          {new Date(
                                            incident.reported,
                                          ).toLocaleString()}
                                        </div>
                                      </div>
                                      <div>
                                        <Label>Resolved At</Label>
                                        <div className="text-sm font-medium">
                                          {incident.resolved
                                            ? new Date(
                                                incident.resolved,
                                              ).toLocaleString()
                                            : "Pending"}
                                        </div>
                                      </div>
                                      <div>
                                        <Label>Duration</Label>
                                        <div className="text-sm font-medium">
                                          {incident.duration}
                                        </div>
                                      </div>
                                      <div>
                                        <Label>Impact</Label>
                                        <div className="text-sm font-medium text-rose-600">
                                          {incident.sla === "breached"
                                            ? "SLA Breach - Penalty Applied"
                                            : "Within SLA"}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </TableCell>
                          </TableRow>
                        ),
                      )
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={8}
                          className="text-center py-8 text-gray-500"
                        >
                          <CheckCircle className="h-12 w-12 mx-auto mb-2 text-emerald-500" />
                          <p>No incidents recorded</p>
                          <p className="text-sm">
                            All systems operating within SLA
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
                Showing {slaRecoveryData.incidentRecovery.length} incidents
              </div>
            </CardFooter>
          </Card>

          {/* SLA Breach & Performance Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SLA Breach Analysis */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-rose-600" />
                  SLA Breach Analysis
                </CardTitle>
                <CardDescription>Root causes of SLA breaches</CardDescription>
                <div className="flex items-center space-x-2 pt-2">
                  <Switch
                    id="breach-details"
                    checked={showBreachDetails}
                    onCheckedChange={setShowBreachDetails}
                  />
                  <Label htmlFor="breach-details" className="text-sm">
                    Show detailed breach logs
                  </Label>
                </div>
              </CardHeader>
              <CardContent>
                {showBreachDetails ? (
                  <div className="space-y-3">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Breach ID</TableHead>
                            <TableHead>SLA Type</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Action Taken</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {slaRecoveryData.breachDetails.length > 0 ? (
                            slaRecoveryData.breachDetails.map((breach) => (
                              <TableRow key={breach.id}>
                                <TableCell className="font-mono font-semibold">
                                  {breach.id}
                                </TableCell>
                                <TableCell>
                                  <Badge variant="outline" className="text-xs">
                                    {breach.sla}
                                  </Badge>
                                </TableCell>
                                <TableCell className="font-medium">
                                  {breach.service}
                                </TableCell>
                                <TableCell className="text-sm">
                                  {breach.time}
                                </TableCell>
                                <TableCell>
                                  <Badge
                                    variant="secondary"
                                    className={
                                      breach.impact === "Critical"
                                        ? "bg-red-100 text-red-800"
                                        : breach.impact === "High"
                                          ? "bg-orange-100 text-orange-800"
                                          : "bg-amber-100 text-amber-800"
                                    }
                                  >
                                    {breach.duration}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-sm">
                                  {breach.action}
                                </TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell
                                colSpan={6}
                                className="text-center py-4 text-gray-500"
                              >
                                No breach details available
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {slaRecoveryData.breachAnalysis.map((breach, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">{breach.cause}</span>
                            <div className="text-sm text-gray-500">
                              Avg. Impact: {breach.avgImpact}
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className="text-lg font-bold"
                              style={{ color: breach.color }}
                            >
                              {breach.count}
                            </div>
                            <div className="text-sm text-gray-500">
                              {breach.percentage}%
                            </div>
                          </div>
                        </div>
                        <Progress
                          value={breach.percentage}
                          className="h-2"
                          indicatorClassName="bg-rose-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SLA Performance Metrics */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-600" />
                  SLA Performance Metrics
                </CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {slaRecoveryData.performanceMetrics.map((metric, index) => (
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
                            metric.compliance >= 95
                              ? "text-emerald-600"
                              : "text-rose-600"
                          }`}
                        >
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Target: {metric.target}
                        </div>
                      </div>
                      <Progress
                        value={metric.compliance}
                        className="h-1.5 mt-3"
                        indicatorClassName={
                          metric.compliance >= 95
                            ? "bg-emerald-500"
                            : "bg-rose-500"
                        }
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Escalation Status */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-amber-600" />
                Escalation Status
              </CardTitle>
              <CardDescription>Current incident escalations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Escalation ID</TableHead>
                      <TableHead>Incident</TableHead>
                      <TableHead>Escalation Level</TableHead>
                      <TableHead>Time Since Escalation</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {slaRecoveryData.escalations.map((escalation) => (
                      <TableRow key={escalation.id}>
                        <TableCell className="font-mono font-semibold">
                          {escalation.id}
                        </TableCell>
                        <TableCell className="font-medium">
                          {escalation.incident}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              escalation.level === "L4"
                                ? "bg-red-50 text-red-700 border-red-200"
                                : escalation.level === "L3"
                                  ? "bg-orange-50 text-orange-700 border-orange-200"
                                  : "bg-amber-50 text-amber-700 border-amber-200"
                            }
                          >
                            {escalation.level}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Timer className="h-3 w-3 text-gray-500" />
                            <span>{escalation.time}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={getStatusColor(escalation.status)}
                          >
                            {escalation.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{escalation.assigned}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="border-t flex justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs">L4 - Executive</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-xs">L3 - Management</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-xs">L2 - Technical</span>
                </div>
              </div>
             
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
                <Settings className="mr-2 h-4 w-4" />
                Configure Alerts
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
              <Button size="sm">
                <Zap className="mr-2 h-4 w-4" />
                Run Recovery Simulation
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
