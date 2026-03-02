// components/pages/process/pages/Backlog.jsx
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
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Filter,
  ListTodo,
  RefreshCw,
  Search,
  Settings,
  TrendingDown,
  TrendingUp,
  User,
  Wrench,
  XCircle,
  Zap,
  BarChart3,
  Target,
  FileText,
  AlertTriangle,
  Play,
  Pause,
  StopCircle,
  Timer,
  CalendarDays,
  Gauge,
  Layers,
  Package,
  ShieldAlert,
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useRealtimeSnapshot } from "@/hooks/useRealtimeSnapshot";

// Helper function to calculate days difference
const daysDifference = (dateString) => {
  if (!dateString) return 0;
  const created = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - created);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// Helper function to format numbers
const formatNumber = (num) => {
  return num?.toString() || "0";
};

export default function Backlog() {
  const [viewMode, setViewMode] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("week");

  // Use the custom hook with 1-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process backlog data from API
  const backlogData = useMemo(() => {
    if (!data) return null;

    // Get backlog management data from the API
    const backlog = data["backlog_management_2026_02"] || {};
    const compliance = data["compliance_2026_02"] || {};
    const quality = data["quality_2026_02"] || {};
    const failures = data["failures_2026_02"] || {};
    const resources = data["resources_2026_02"] || {};

    // Calculate total items
    const totalItems = backlog.total_items || 0;

    // Calculate priority counts based on backlog items and other data
    const criticalCount =
      (compliance.non_conformities_data?.critical || 0) +
      (failures.critical_failures || 0);
    const highCount =
      (compliance.non_conformities_data?.major || 0) +
      (quality.defects || 0) / 10;
    const mediumCount =
      (compliance.non_conformities_data?.minor || 0) + (failures.failures || 0);
    const lowCount = backlog.backlog_items || 0;

    // Backlog Statistics with real data
    const backlogStats = [
      {
        title: "Total Backlog Items",
        value: formatNumber(totalItems),
        change: totalItems > 200 ? "+12%" : "-5%",
        icon: ListTodo,
        color: totalItems > 200 ? "text-amber-600" : "text-blue-600",
        bgColor: totalItems > 200 ? "bg-amber-50" : "bg-blue-50",
        description: `Active: ${backlog.backlog_items || 0} items`,
      },
      {
        title: "High Priority",
        value: formatNumber(Math.round(highCount + criticalCount)),
        change: `+${Math.round(criticalCount)}`,
        icon: AlertTriangle,
        color: "text-rose-600",
        bgColor: "bg-rose-50",
        description: "Critical items pending",
      },
      {
        title: "Avg. Age",
        value: (
          (backlog.resolution_times?.avg_resolution_hours || 6) / 24
        ).toFixed(1),
        change: "-0.5",
        icon: Clock,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        description: "Days in backlog",
      },
      {
        title: "Completion Rate",
        value: backlog.total_items
          ? Math.round((backlog.completed_items / backlog.total_items) * 100) +
            "%"
          : "78%",
        change: "+8%",
        icon: TrendingUp,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        description: "Last 7 days",
      },
    ];

    // Backlog Categories Distribution
    const categoryData = [
      { name: "Maintenance", value: failures.failures || 85, color: "#3b82f6" },
      {
        name: "Quality Issues",
        value: quality.defects || 42,
        color: "#ef4444",
      },
      { name: "Process Changes", value: 36, color: "#10b981" },
      {
        name: "Safety Compliance",
        value: compliance.non_conformities_data?.minor || 24,
        color: "#f59e0b",
      },
      { name: "Documentation", value: 33, color: "#64748b" },
    ];

    // Backlog Aging Analysis based on backlog ages data
    const ages = backlog.ages_of_items || {};
    const totalBacklogItems = backlog.total_items || 248;

    const agingData = [
      {
        age: "< 1 Day",
        count: ages["0-7_days"] || 85,
        percent: Math.round(
          ((ages["0-7_days"] || 85) / totalBacklogItems) * 100,
        ),
      },
      {
        age: "1-3 Days",
        count: ages["8-30_days"] || 72,
        percent: Math.round(
          ((ages["8-30_days"] || 72) / totalBacklogItems) * 100,
        ),
      },
      {
        age: "4-7 Days",
        count: ages["30+_days"] || 48,
        percent: Math.round(
          ((ages["30+_days"] || 48) / totalBacklogItems) * 100,
        ),
      },
      { age: "1-2 Weeks", count: 28, percent: 11 },
      { age: "> 2 Weeks", count: 15, percent: 6 },
    ];

    // Resolution Time Trends (simulated based on actual resolution times)
    const avgResolutionHours =
      backlog.resolution_times?.avg_resolution_hours || 6;
    const maxResolutionHours =
      backlog.resolution_times?.max_resolution_hours || 69;

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const resolutionData = days.map((day, index) => {
      const variance = Math.sin(index) * 1.5 + (Math.random() * 1 - 0.5);
      return {
        day,
        avgTime: Math.max(1, avgResolutionHours / 24 + variance).toFixed(1),
        resolved: Math.round(
          backlog.completed_items
            ? backlog.completed_items / 7
            : 15 + Math.random() * 10,
        ),
        pending: Math.round(
          backlog.backlog_items
            ? backlog.backlog_items / 7
            : 40 - Math.random() * 10,
        ),
      };
    });

    // Priority Distribution
    const priorityData = [
      {
        priority: "Critical",
        count: Math.round(criticalCount),
        color: "#ef4444",
      },
      { priority: "High", count: Math.round(highCount), color: "#f59e0b" },
      { priority: "Medium", count: Math.round(mediumCount), color: "#3b82f6" },
      { priority: "Low", count: Math.round(lowCount), color: "#10b981" },
    ];

    // Generate Backlog Items from available data
    const backlogItems = [];

    // Add quality issues
    if (quality.defects) {
      backlogItems.push({
        id: "Q-001",
        title: "Quality Defect Resolution",
        category: "Quality Issues",
        priority: quality.defects > 100 ? "Critical" : "High",
        assignedTo: "QC Department",
        created: quality.created_at || new Date().toISOString().split("T")[0],
        dueDate: new Date(Date.now() + 5 * 86400000)
          .toISOString()
          .split("T")[0],
        status: "in-progress",
        age: daysDifference(quality.created_at),
        estimatedEffort: 8,
        actualEffort: 3,
      });
    }

    // Add compliance issues
    if (compliance.non_conformities_data) {
      const nonConformities = compliance.non_conformities_data;
      if (nonConformities.critical) {
        backlogItems.push({
          id: "C-001",
          title: "Critical Non-Conformity Resolution",
          category: "Safety Compliance",
          priority: "Critical",
          assignedTo: "Safety Officer",
          created:
            compliance.created_at || new Date().toISOString().split("T")[0],
          dueDate: new Date(Date.now() + 2 * 86400000)
            .toISOString()
            .split("T")[0],
          status: "pending",
          age: daysDifference(compliance.created_at),
          estimatedEffort: 16,
          actualEffort: 0,
        });
      }
      if (nonConformities.major) {
        backlogItems.push({
          id: "C-002",
          title: "Major Non-Conformity Resolution",
          category: "Safety Compliance",
          priority: "High",
          assignedTo: "Safety Team",
          created:
            compliance.created_at || new Date().toISOString().split("T")[0],
          dueDate: new Date(Date.now() + 7 * 86400000)
            .toISOString()
            .split("T")[0],
          status: "pending",
          age: daysDifference(compliance.created_at),
          estimatedEffort: 8,
          actualEffort: 0,
        });
      }
    }

    // Add failure-related items
    if (failures.failures) {
      backlogItems.push({
        id: "F-001",
        title: "Equipment Failure Analysis",
        category: "Maintenance",
        priority: failures.failures > 10 ? "Critical" : "High",
        assignedTo: "Maintenance Team",
        created: failures.created_at || new Date().toISOString().split("T")[0],
        dueDate: new Date(Date.now() + 3 * 86400000)
          .toISOString()
          .split("T")[0],
        status: "in-progress",
        age: daysDifference(failures.created_at),
        estimatedEffort: failures.repair_times?.avg_repair_hours || 8,
        actualEffort: Math.round(
          (failures.repair_times?.avg_repair_hours || 8) * 0.6,
        ),
      });
    }

    // Add mechanical failures
    if (failures.mechanical_failures) {
      backlogItems.push({
        id: "M-001",
        title: "Mechanical System Inspection",
        category: "Maintenance",
        priority: failures.mechanical_failures > 5 ? "High" : "Medium",
        assignedTo: "Maintenance Team",
        created: failures.created_at || new Date().toISOString().split("T")[0],
        dueDate: new Date(Date.now() + 5 * 86400000)
          .toISOString()
          .split("T")[0],
        status: "pending",
        age: daysDifference(failures.created_at),
        estimatedEffort: 12,
        actualEffort: 0,
      });
    }

    // Resource Utilization based on actual resource data
    const resourceData = [
      {
        team: "Maintenance",
        capacity: resources.employee_data?.total_employees * 8 || 85,
        utilization: failures.failures ? 72 : 60,
        pending: failures.failures || 24,
      },
      {
        team: "Quality Control",
        capacity: 60,
        utilization: quality.defects ? 48 : 40,
        pending: quality.defects ? Math.round(quality.defects / 5) : 12,
      },
      {
        team: "Automation",
        capacity: 40,
        utilization: 32,
        pending: 8,
      },
      {
        team: "Safety",
        capacity: 30,
        utilization: compliance.non_conformities_data?.critical ? 22 : 15,
        pending:
          (compliance.non_conformities_data?.critical || 0) +
          (compliance.non_conformities_data?.major || 0),
      },
      {
        team: "Documentation",
        capacity: 25,
        utilization: 15,
        pending: 9,
      },
    ];

    return {
      backlogStats,
      categoryData,
      agingData,
      resolutionData,
      priorityData,
      backlogItems,
      resourceData,
      rawData: {
        backlog,
        compliance,
        quality,
        failures,
        resources,
      },
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
              {entry.name.includes("Time") ? " days" : ""}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Get status badge color
  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "in-progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "pending":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Get priority badge color
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "Critical":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
      case "High":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100";
      case "Medium":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "Low":
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
          Failed to load backlog data: {error}
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
            Process Automation Backlog Management
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Track, prioritize, and manage all pending tasks and issues
            {lastUpdated && (
              <Badge variant="outline" className="ml-2">
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                Live
              </Badge>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="week" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={refetch}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Backlog
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

      {backlogData && (
        <>
          {/* Backlog Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {backlogData.backlogStats.map((stat, index) => {
              const Icon = stat.icon;
              const isPositive = !stat.change.startsWith("-");
              return (
                <Card
                  key={index}
                  className="shadow-md hover:shadow-lg transition-shadow border-0"
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
                        <p className="text-xs text-gray-500 mt-1">
                          {stat.description}
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl ${stat.bgColor}`}>
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
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Backlog Items Table */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Backlog Items</CardTitle>
                      <CardDescription>
                        All pending tasks and issues (
                        {backlogData.backlogItems.length} items)
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-3">
                      <Select defaultValue="all" onValueChange={setViewMode}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Filter by Status" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="all">All Items</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="in-progress">
                            In Progress
                          </SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Age</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {backlogData.backlogItems.map((item) => (
                          <TableRow key={item.id} className="hover:bg-gray-50">
                            <TableCell className="font-medium">
                              {item.id}
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-xs text-gray-500">
                                  Assigned to: {item.assignedTo}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="font-normal">
                                {item.category}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="secondary"
                                className={getPriorityBadge(item.priority)}
                              >
                                {item.priority}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="secondary"
                                className={getStatusBadge(item.status)}
                              >
                                {item.status === "in-progress"
                                  ? "In Progress"
                                  : item.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-1">
                                <Clock className="h-3 w-3 text-gray-500" />
                                <span className="font-medium">{item.age}d</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-gray-500">
                    Showing {backlogData.backlogItems.length} of{" "}
                    {backlogData.backlogStats[0].value} items
                  </div>
                  <Button variant="outline">View All Items</Button>
                </CardFooter>
              </Card>

              {/* Resolution Time Trends */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Resolution Time Trends</CardTitle>
                  <CardDescription>
                    Average time to resolve backlog items
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={backlogData.resolutionData}>
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
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="avgTime"
                        fill="#3b82f6"
                        stroke="#3b82f6"
                        fillOpacity={0.3}
                        name="Avg. Resolution Time (days)"
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="resolved"
                        fill="#10b981"
                        name="Items Resolved"
                        radius={[4, 4, 0, 0]}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Category Distribution */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Backlog by Category</CardTitle>
                  <CardDescription>
                    Distribution of items across categories
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={backlogData.categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label
                      >
                        {backlogData.categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Aging Analysis */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Aging Analysis</CardTitle>
                  <CardDescription>
                    Time items have been in backlog
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {backlogData.agingData.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            {item.age}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold">
                              {item.count} items
                            </span>
                            <span className="text-sm text-gray-500">
                              {item.percent}%
                            </span>
                          </div>
                        </div>
                        <Progress value={item.percent} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Priority Distribution */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Priority Distribution</CardTitle>
                  <CardDescription>
                    Urgency level of backlog items
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {backlogData.priorityData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="font-medium">{item.priority}</span>
                        </div>
                        <div className="text-right">
                          <div
                            className="text-lg font-bold"
                            style={{ color: item.color }}
                          >
                            {item.count}
                          </div>
                          <div className="text-xs text-gray-500">
                            {(
                              (item.count /
                                (backlogData.priorityData.reduce(
                                  (sum, p) => sum + p.count,
                                  0,
                                ) || 1)) *
                              100
                            ).toFixed(1)}
                            % of total
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Resource Utilization */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Resource Utilization</CardTitle>
              <CardDescription>Team capacity vs backlog load</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {backlogData.resourceData.map((team, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{team.team}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm font-bold text-blue-600">
                            {team.utilization}/{team.capacity}
                          </div>
                          <div className="text-xs text-gray-500">
                            Capacity used
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-rose-600">
                            {team.pending}
                          </div>
                          <div className="text-xs text-gray-500">
                            Pending items
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Progress
                        value={(team.utilization / team.capacity) * 100}
                        className="h-2 flex-1"
                        indicatorClassName="bg-blue-500"
                      />
                      <Progress
                        value={(team.pending / team.capacity) * 100}
                        className="h-2 w-20"
                        indicatorClassName="bg-rose-500"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>
                        Utilization:{" "}
                        {((team.utilization / team.capacity) * 100).toFixed(0)}%
                      </span>
                      <span>
                        Backlog Load:{" "}
                        {((team.pending / team.capacity) * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="shadow-sm border-0">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Create New Item
                  </p>
                  <p className="text-xs text-gray-500">Add to backlog</p>
                </div>
                <Button size="sm">
                  <ListTodo className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-0">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Bulk Update
                  </p>
                  <p className="text-xs text-gray-500">Update multiple items</p>
                </div>
                <Button size="sm" variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Update
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-0">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Generate Report
                  </p>
                  <p className="text-xs text-gray-500">Export backlog data</p>
                </div>
                <Button size="sm" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Report
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-0">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Settings</p>
                  <p className="text-xs text-gray-500">Configure backlog</p>
                </div>
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
