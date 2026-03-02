// components/pages/process/pages/ProcessQuality.jsx
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
  ComposedChart,
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

// Calculate Sigma Level from DPMO
const calculateSigmaLevel = (dpmo) => {
  if (!dpmo) return 4.2;
  // Approximate conversion from DPMO to Sigma level
  if (dpmo <= 3.4) return 6.0;
  if (dpmo <= 233) return 5.0;
  if (dpmo <= 6210) return 4.0;
  if (dpmo <= 66807) return 3.0;
  return 2.0;
};

// Format percentage
const formatPercent = (value) => {
  return `${value.toFixed(1)}%`;
};

export default function ProcessQuality() {
  const [timeRange, setTimeRange] = useState("month");
  const [qualityMetric, setQualityMetric] = useState("overall");

  // Use the custom hook with 1-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process quality data from API
  const qualityData = useMemo(() => {
    if (!data) return null;

    // Get quality data from all relevant tables
    const quality = data["quality_2026_02"] || {};
    const overview = data["overview_2026_02"] || {};
    const automation = data["automation_2026_02"] || {};
    const throughput = data["throughput_2026_02"] || {};
    const backlog = data["backlog_management_2026_02"] || {};
    const compliance = data["compliance_2026_02"] || {};
    const resources = data["resources_2026_02"] || {};

    // Calculate quality metrics
    const overallQuality = overview.quality || automation.quality || 92;
    const defectRate = (100 - overallQuality).toFixed(1);

    // Calculate DPMO (Defects Per Million Opportunities)
    const dpmo = quality.dpmo || automation.dpmo || 48254;
    const sigmaLevel = calculateSigmaLevel(dpmo);

    // Calculate return rate
    const returnRate = quality.returns
      ? ((quality.returns / (quality.sold_units || 782)) * 100).toFixed(1)
      : 0.8;

    // Quality Overview Stats
    const qualityStats = [
      {
        title: "Overall Quality Rate",
        value: formatPercent(overallQuality),
        change: overallQuality > 95 ? "+0.8%" : "-0.5%",
        icon: Award,
        color: overallQuality > 95 ? "text-emerald-600" : "text-amber-600",
        bgColor: overallQuality > 95 ? "bg-emerald-50" : "bg-amber-50",
        description: "First pass yield",
      },
      {
        title: "Defect Rate",
        value: formatPercent(parseFloat(defectRate)),
        change: defectRate < 5 ? "-0.3%" : "+0.5%",
        icon: AlertCircle,
        color: defectRate < 5 ? "text-emerald-600" : "text-rose-600",
        bgColor: defectRate < 5 ? "bg-emerald-50" : "bg-rose-50",
        description: "Of total production",
      },
      {
        title: "Sigma Level",
        value: sigmaLevel.toFixed(1) + "σ",
        change: sigmaLevel > 4 ? "+0.1" : "-0.1",
        icon: Target,
        color: sigmaLevel > 4 ? "text-blue-600" : "text-amber-600",
        bgColor: sigmaLevel > 4 ? "bg-blue-50" : "bg-amber-50",
        description: "Process capability",
      },
      {
        title: "Customer Returns",
        value: returnRate + "%",
        change: returnRate < 1 ? "-0.2%" : "+0.3%",
        icon: Package,
        color: returnRate < 1 ? "text-purple-600" : "text-rose-600",
        bgColor: returnRate < 1 ? "bg-purple-50" : "bg-rose-50",
        description: "Return rate",
      },
    ];

    // Quality Metrics by Category
    const qualityMetrics = [
      {
        metric: "First Pass Yield",
        value: quality.good_first_pass
          ? (quality.good_first_pass / quality.total_started) * 100
          : overallQuality,
        target: 97,
        trend: overallQuality > 96 ? "+0.5%" : "-0.3%",
        color: "#10b981",
      },
      {
        metric: "Scrap Rate",
        value: quality.scrap_units
          ? (quality.scrap_units / quality.total_units) * 100
          : 1.5,
        target: 1.2,
        trend: "-0.2%",
        color: "#ef4444",
      },
      {
        metric: "Rework Rate",
        value: quality.rework_units
          ? (quality.rework_units / quality.total_units) * 100
          : 2.3,
        target: 2.0,
        trend: "-0.3%",
        color: "#f59e0b",
      },
      {
        metric: "PPM (Defects)",
        value: Math.round(dpmo),
        target: 1000,
        trend: "-150",
        color: "#3b82f6",
      },
      {
        metric: "OEE Quality",
        value: overview.quality || 98.5,
        target: 99,
        trend: "+0.2%",
        color: "#8b5cf6",
      },
      {
        metric: "Cpk Value",
        value: sigmaLevel > 4 ? 1.42 : 1.28,
        target: 1.33,
        trend: sigmaLevel > 4 ? "+0.05" : "-0.02",
        color: "#06b6d4",
      },
    ];

    // Quality Trend Data (simulated based on actual data)
    const weeks = ["W1", "W2", "W3", "W4", "W5", "W6"];
    const qualityTrend = weeks.map((week, index) => {
      const baseFPY = overallQuality;
      const baseDefects = 100 - overallQuality;
      return {
        week,
        fpy: Math.min(100, baseFPY + index * 0.3),
        defects: Math.max(0.5, baseDefects - index * 0.2),
        rework: Math.max(
          0.5,
          (quality.rework_units
            ? (quality.rework_units / quality.total_units) * 100
            : 2.0) -
            index * 0.15,
        ),
      };
    });

    // Defect Analysis by Type (from quality data and other sources)
    const defectTypes = [
      {
        type: "Dimensional",
        count: quality.defects ? Math.round(quality.defects * 0.3) : 42,
        percentage: 28,
        color: "#ef4444",
      },
      {
        type: "Surface Finish",
        count: quality.defects ? Math.round(quality.defects * 0.25) : 36,
        percentage: 24,
        color: "#f59e0b",
      },
      {
        type: "Material",
        count: automation.scrap_units
          ? Math.round(automation.scrap_units * 0.2)
          : 24,
        percentage: 16,
        color: "#3b82f6",
      },
      {
        type: "Assembly",
        count: quality.rework_units
          ? Math.round(quality.rework_units * 0.3)
          : 21,
        percentage: 14,
        color: "#10b981",
      },
      { type: "Electrical", count: 18, percentage: 12, color: "#8b5cf6" },
      { type: "Packaging", count: 9, percentage: 6, color: "#06b6d4" },
    ];

    // Quality Control Checkpoints
    const qcCheckpoints = [
      {
        checkpoint: "Raw Material Inspection",
        pass: quality.good_count
          ? (quality.good_count / quality.total_count) * 100
          : 98.5,
        fail:
          100 -
          (quality.good_count
            ? (quality.good_count / quality.total_count) * 100
            : 98.5),
        color: "#3b82f6",
      },
      {
        checkpoint: "In-Process QC",
        pass: quality.good_first_pass
          ? (quality.good_first_pass / quality.total_started) * 100
          : 97.2,
        fail:
          100 -
          (quality.good_first_pass
            ? (quality.good_first_pass / quality.total_started) * 100
            : 97.2),
        color: "#10b981",
      },
      {
        checkpoint: "Final Inspection",
        pass: quality.good_units
          ? (quality.good_units / quality.total_units) * 100
          : 99.1,
        fail:
          100 -
          (quality.good_units
            ? (quality.good_units / quality.total_units) * 100
            : 99.1),
        color: "#f59e0b",
      },
      {
        checkpoint: "Packaging QC",
        pass: 98.8,
        fail: 1.2,
        color: "#8b5cf6",
      },
      {
        checkpoint: "Shipping Audit",
        pass: 99.5,
        fail: 0.5,
        color: "#ef4444",
      },
    ];

    // Quality Issues Data from API
    const qualityIssues = [];

    // Add quality issues from quality data
    if (quality.defects && quality.defects > 0) {
      qualityIssues.push({
        id: "QI-001",
        product: "Standard Product",
        defect: "Quality defect detected",
        severity: quality.defects > 100 ? "Critical" : "Major",
        detected: quality.created_at || new Date().toISOString(),
        quantity: quality.defects,
        station: "Quality Control",
        status: "investigating",
        action: "Quality review required",
        assignedTo: "QC Team",
      });
    }

    // Add quality issues from automation data
    if (automation.rejected_units && automation.rejected_units > 0) {
      qualityIssues.push({
        id: "QI-002",
        product: "Automated Production",
        defect: "Rejected units from automation",
        severity: automation.rejected_units > 20 ? "Critical" : "Major",
        detected: automation.created_at || new Date().toISOString(),
        quantity: automation.rejected_units,
        station: "Automation QC",
        status: "investigating",
        action: "Process adjustment needed",
        assignedTo: "Automation Team",
      });
    }

    // Add compliance issues
    if (compliance.non_conformities_data) {
      const nc = compliance.non_conformities_data;
      if (nc.critical) {
        qualityIssues.push({
          id: "QI-003",
          product: "Compliance Check",
          defect: "Critical non-conformity",
          severity: "Critical",
          detected: compliance.created_at || new Date().toISOString(),
          quantity: nc.critical,
          station: "Compliance Audit",
          status: "investigating",
          action: "Immediate corrective action",
          assignedTo: "Quality Manager",
        });
      }
    }

    // Add issues from survey scores if low
    if (quality.survey_scores && quality.survey_scores.quality_rating < 2) {
      qualityIssues.push({
        id: "QI-004",
        product: "Customer Feedback",
        defect: "Low quality rating",
        severity: "Major",
        detected: quality.created_at || new Date().toISOString(),
        quantity: 1,
        station: "Customer Survey",
        status: "pending",
        action: "Customer satisfaction review",
        assignedTo: "Customer Service",
      });
    }

    // Process Capability Analysis
    const processCapability = [
      { process: "Machining", cpk: 1.68, ppk: 1.62, sigma: 5.2, yield: 99.8 },
      {
        process: "Assembly",
        cpk: 1.42,
        ppk: 1.38,
        sigma: sigmaLevel,
        yield: overallQuality,
      },
      { process: "Welding", cpk: 1.85, ppk: 1.79, sigma: 5.5, yield: 99.9 },
      { process: "Painting", cpk: 1.28, ppk: 1.22, sigma: 3.9, yield: 99.0 },
      { process: "Testing", cpk: 1.95, ppk: 1.9, sigma: 5.8, yield: 99.9 },
    ];

    // Customer Quality Metrics
    const customerMetrics = [
      {
        metric: "Customer Complaints",
        value: quality.complaints_data
          ? quality.complaints_data.major + quality.complaints_data.minor
          : 8,
        target: 10,
        trend: "-2",
        color: "#ef4444",
      },
      {
        metric: "On-Time Delivery",
        value: quality.on_time_deliveries
          ? (quality.on_time_deliveries / quality.total_deliveries) * 100
          : 98.2,
        target: 97,
        trend: "+1.2%",
        color: "#10b981",
      },
      {
        metric: "Customer Satisfaction",
        value: quality.survey_scores
          ? quality.survey_scores.quality_rating
          : 4.8,
        target: 4.5,
        trend: "+0.3",
        color: "#f59e0b",
      },
      {
        metric: "Return Rate",
        value: quality.returns
          ? (quality.returns / quality.sold_units) * 100
          : 0.8,
        target: 1.2,
        trend: "-0.4%",
        color: "#3b82f6",
      },
    ];

    // SPC Control Charts Data (simulated)
    const spcData = Array.from({ length: 10 }, (_, i) => ({
      sample: i + 1,
      value: 24.5 + Math.sin(i) * 0.3 + (Math.random() * 0.4 - 0.2),
      ucl: 25.5,
      lcl: 23.5,
      target: 24.5,
    }));

    return {
      qualityStats,
      qualityMetrics,
      qualityTrend,
      defectTypes,
      qcCheckpoints,
      qualityIssues,
      processCapability,
      customerMetrics,
      spcData,
      rawData: {
        quality,
        overview,
        automation,
        throughput,
        backlog,
        compliance,
        resources,
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
              {typeof entry.value === "number" && entry.value < 10
                ? entry.value.toFixed(1)
                : entry.value}
              {entry.name.includes("FPY") ||
              entry.name.includes("Rate") ||
              entry.name.includes("Yield")
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
          Failed to load quality data: {error}
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
            Process Quality Dashboard
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Comprehensive quality metrics, defect analysis, and process
            capability
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
          <Select defaultValue="overall" onValueChange={setQualityMetric}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Quality Metric" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="overall">Overall Quality</SelectItem>
              <SelectItem value="defects">Defect Analysis</SelectItem>
              <SelectItem value="process">Process Capability</SelectItem>
              <SelectItem value="customer">Customer Quality</SelectItem>
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

      {qualityData && (
        <>
          {/* Quality Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityData.qualityStats.map((stat, index) => {
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
                    <LineChart data={qualityData.qualityTrend}>
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
                    {qualityData.qualityMetrics.map((metric, index) => (
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
                          data={qualityData.defectTypes}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="count"
                        >
                          {qualityData.defectTypes.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [value, "Defects"]} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {qualityData.defectTypes.map((type, index) => (
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
                    {qualityData.qcCheckpoints.map((checkpoint, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            {checkpoint.checkpoint}
                          </span>
                          <span className="text-sm text-gray-500">
                            {checkpoint.pass.toFixed(1)}%
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
                          <span>Pass: {checkpoint.pass.toFixed(1)}%</span>
                          <span>Fail: {checkpoint.fail.toFixed(1)}%</span>
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
                    <SelectContent className="bg-white">
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
                      <TableHead className="w-[100px] font-semibold">
                        ID
                      </TableHead>
                      <TableHead className="font-semibold">Product</TableHead>
                      <TableHead className="font-semibold">Defect</TableHead>
                      <TableHead className="font-semibold">Severity</TableHead>
                      <TableHead className="font-semibold">
                        Detected At
                      </TableHead>
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
                    {qualityData.qualityIssues.length > 0 ? (
                      qualityData.qualityIssues.map((issue) => (
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
                              <span className="font-medium">
                                {issue.product}
                              </span>
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
                              <span className="text-sm">
                                {new Date(issue.detected).toLocaleDateString()}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="font-semibold">
                              {issue.quantity}
                            </div>
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
                                    Complete information about this quality
                                    incident
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
                                        className={getSeverityColor(
                                          issue.severity,
                                        )}
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
                                        {new Date(
                                          issue.detected,
                                        ).toLocaleString()}
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
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={9}
                          className="text-center py-8 text-gray-500"
                        >
                          <CheckCircle className="h-12 w-12 mx-auto mb-2 text-emerald-500" />
                          <p>No quality issues detected</p>
                          <p className="text-sm">
                            All quality metrics within acceptable range
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
                Showing {qualityData.qualityIssues.length} quality issues
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
                <CardDescription>
                  Cpk, Ppk, Sigma levels by process
                </CardDescription>
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
                      {qualityData.processCapability.map((process, index) => (
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
                  {qualityData.customerMetrics.map((metric, index) => (
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
              <CardDescription>Process variation monitoring</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={qualityData.spcData}>
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
        </>
      )}
    </div>
  );
}
