// components/pages/process/pages/ProcessSLARecovery.jsx
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

export default function ProcessSLARecovery() {
  const [timeRange, setTimeRange] = useState("month");
  const [slaType, setSlaType] = useState("all");
  const [showBreachDetails, setShowBreachDetails] = useState(false);

  // SLA Overview Stats
  const slaStats = [
    {
      title: "Overall SLA Compliance",
      value: "98.2%",
      change: "+0.8%",
      icon: Shield,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Across all SLAs",
    },
    {
      title: "Critical SLA Breaches",
      value: "3",
      change: "-2",
      icon: AlertTriangle,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      description: "This month",
    },
    {
      title: "Avg. Response Time",
      value: "12.4m",
      change: "-2.1m",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Mean time to respond",
    },
    {
      title: "Recovery Success Rate",
      value: "96.8%",
      change: "+1.2%",
      icon: CheckCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Incident recovery",
    },
  ];

  // SLA Performance by Category
  const slaCategories = [
    {
      category: "Response Time",
      compliance: 98.5,
      breaches: 2,
      target: 99,
      color: "#3b82f6",
    },
    {
      category: "Resolution Time",
      compliance: 97.8,
      breaches: 4,
      target: 98,
      color: "#10b981",
    },
    {
      category: "Uptime",
      compliance: 99.95,
      breaches: 0,
      target: 99.9,
      color: "#f59e0b",
    },
    {
      category: "Quality",
      compliance: 96.2,
      breaches: 8,
      target: 97,
      color: "#8b5cf6",
    },
    {
      category: "Throughput",
      compliance: 95.8,
      breaches: 10,
      target: 96,
      color: "#ef4444",
    },
  ];

  // SLA Trend Analysis
  const slaTrend = [
    { week: "W1", compliance: 97.2, breaches: 5, response: 14.8 },
    { week: "W2", compliance: 97.8, breaches: 4, response: 13.5 },
    { week: "W3", compliance: 98.1, breaches: 3, response: 12.8 },
    { week: "W4", compliance: 98.4, breaches: 2, response: 11.9 },
    { week: "W5", compliance: 98.6, breaches: 2, response: 11.2 },
    { week: "W6", compliance: 98.8, breaches: 1, response: 10.8 },
  ];

  // Incident Recovery Analysis
  const incidentRecovery = [
    {
      incident: "Server Downtime",
      severity: "critical",
      reported: "2024-01-15 08:30",
      resolved: "2024-01-15 10:15",
      duration: "1h 45m",
      sla: "breached",
      assigned: "IT Team",
    },
    {
      incident: "Database Slowdown",
      severity: "high",
      reported: "2024-01-14 14:20",
      resolved: "2024-01-14 15:45",
      duration: "1h 25m",
      sla: "met",
      assigned: "DBA Team",
    },
    {
      incident: "Network Latency",
      severity: "medium",
      reported: "2024-01-13 11:45",
      resolved: "2024-01-13 13:30",
      duration: "1h 45m",
      sla: "met",
      assigned: "Network Team",
    },
    {
      incident: "Application Crash",
      severity: "critical",
      reported: "2024-01-12 16:30",
      resolved: "2024-01-12 18:15",
      duration: "1h 45m",
      sla: "breached",
      assigned: "Dev Team",
    },
    {
      incident: "Security Alert",
      severity: "high",
      reported: "2024-01-11 09:15",
      resolved: "2024-01-11 10:30",
      duration: "1h 15m",
      sla: "met",
      assigned: "Security Team",
    },
    {
      incident: "Data Sync Failure",
      severity: "medium",
      reported: "2024-01-10 13:45",
      resolved: "2024-01-10 15:00",
      duration: "1h 15m",
      sla: "met",
      assigned: "Ops Team",
    },
  ];

  // Service Level Agreements
  const serviceLevels = [
    {
      service: "Production Line",
      sla: "99.5% Uptime",
      compliance: 99.7,
      breaches: 1,
      color: "#3b82f6",
    },
    {
      service: "Quality Control",
      sla: "98% Accuracy",
      compliance: 97.8,
      breaches: 3,
      color: "#10b981",
    },
    {
      service: "Maintenance",
      sla: "4h Response Time",
      compliance: 98.2,
      breaches: 2,
      color: "#f59e0b",
    },
    {
      service: "Safety Systems",
      sla: "99.9% Availability",
      compliance: 99.95,
      breaches: 0,
      color: "#8b5cf6",
    },
    {
      service: "Energy Supply",
      sla: "99.8% Reliability",
      compliance: 99.85,
      breaches: 1,
      color: "#ef4444",
    },
  ];

  // Recovery Time Analysis
  const recoveryTime = [
    {
      severity: "Critical",
      avgTime: "2h 15m",
      target: "1h",
      compliance: 65,
      breaches: 8,
    },
    {
      severity: "High",
      avgTime: "3h 45m",
      target: "4h",
      compliance: 92,
      breaches: 3,
    },
    {
      severity: "Medium",
      avgTime: "8h 20m",
      target: "8h",
      compliance: 96,
      breaches: 2,
    },
    {
      severity: "Low",
      avgTime: "24h 15m",
      target: "24h",
      compliance: 99,
      breaches: 1,
    },
  ];

  // SLA Breach Analysis
  const breachAnalysis = [
    {
      cause: "Equipment Failure",
      count: 12,
      percentage: 32,
      avgImpact: "4.2h",
      color: "#ef4444",
    },
    {
      cause: "Human Error",
      count: 8,
      percentage: 22,
      avgImpact: "2.8h",
      color: "#f59e0b",
    },
    {
      cause: "Software Bug",
      count: 6,
      percentage: 16,
      avgImpact: "3.5h",
      color: "#3b82f6",
    },
    {
      cause: "Network Issue",
      count: 5,
      percentage: 14,
      avgImpact: "1.8h",
      color: "#10b981",
    },
    {
      cause: "Power Outage",
      count: 3,
      percentage: 8,
      avgImpact: "5.2h",
      color: "#8b5cf6",
    },
    {
      cause: "Supplier Delay",
      count: 3,
      percentage: 8,
      avgImpact: "6.5h",
      color: "#06b6d4",
    },
  ];

  // SLA Performance Metrics
  const performanceMetrics = [
    {
      metric: "MTTR",
      value: "2.8h",
      target: "2.5h",
      compliance: 89,
      trend: "-0.3h",
    },
    {
      metric: "MTBF",
      value: "450h",
      target: "500h",
      compliance: 90,
      trend: "+25h",
    },
    {
      metric: "Availability",
      value: "99.85%",
      target: "99.9%",
      compliance: 99.5,
      trend: "+0.05%",
    },
    {
      metric: "Service Quality",
      value: "97.2%",
      target: "98%",
      compliance: 99.2,
      trend: "+0.8%",
    },
  ];

  // Escalation Status
  const escalations = [
    {
      id: "ESC-001",
      incident: "Server Downtime",
      level: "L3",
      time: "45m",
      status: "resolved",
      assigned: "Senior Engineer",
    },
    {
      id: "ESC-002",
      incident: "Data Corruption",
      level: "L2",
      time: "2h 15m",
      status: "in-progress",
      assigned: "DBA Team",
    },
    {
      id: "ESC-003",
      incident: "Network Outage",
      level: "L3",
      time: "1h 30m",
      status: "pending",
      assigned: "Network Architect",
    },
    {
      id: "ESC-004",
      incident: "Security Breach",
      level: "L4",
      time: "3h 45m",
      status: "resolved",
      assigned: "CISO Team",
    },
  ];

  // Breach Details Data
  const breachDetails = [
    {
      id: "BR-001",
      sla: "Response Time",
      service: "Production Line",
      time: "2024-01-15 08:30",
      duration: "25m",
      impact: "High",
      action: "Automated Recovery",
    },
    {
      id: "BR-002",
      sla: "Resolution Time",
      service: "Quality Control",
      time: "2024-01-14 14:20",
      duration: "1h 15m",
      impact: "Medium",
      action: "Manual Intervention",
    },
    {
      id: "BR-003",
      sla: "Uptime",
      service: "Maintenance",
      time: "2024-01-13 11:45",
      duration: "45m",
      impact: "Critical",
      action: "System Reboot",
    },
    {
      id: "BR-004",
      sla: "Quality",
      service: "Safety Systems",
      time: "2024-01-12 16:30",
      duration: "2h 30m",
      impact: "High",
      action: "Component Replacement",
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

  // Format time
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Process SLA & Recovery Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Service Level Agreement compliance and incident recovery tracking
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="month" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all" onValueChange={setSlaType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="SLA Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All SLAs</SelectItem>
              <SelectItem value="response">Response Time</SelectItem>
              <SelectItem value="resolution">Resolution Time</SelectItem>
              <SelectItem value="uptime">Uptime</SelectItem>
              <SelectItem value="quality">Quality</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export SLA Report
          </Button>
        </div>
      </div>

      {/* SLA Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {slaStats.map((stat, index) => {
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
                <LineChart data={slaTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" stroke="#6b7280" />
                  <YAxis yAxisId="left" stroke="#6b7280" domain={[96, 100]} />
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
                {serviceLevels.map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">{service.service}</span>
                        <div className="text-sm text-gray-500">
                          {service.sla}
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-xl font-bold ${
                            service.compliance >=
                            service.sla.match(/\d+\.?\d*/)[0]
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
                          service.sla.match(/\d+\.?\d*/)[0]
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
              <CardDescription>Performance across SLA types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={slaCategories}>
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
                {slaCategories.map((category, index) => (
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
                {recoveryTime.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className={getSeverityColor(
                            item.severity.toLowerCase()
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
                <SelectContent>
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
                  <TableHead className="font-semibold">SLA Status</TableHead>
                  <TableHead className="font-semibold">Assigned To</TableHead>
                  <TableHead className="font-semibold text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incidentRecovery.map((incident) => (
                  <TableRow
                    key={incident.incident}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell>
                      <div className="font-medium">{incident.incident}</div>
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
                        <span className="text-sm">{incident.reported}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-gray-500" />
                        <span className="text-sm">{incident.resolved}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-gray-500" />
                        <span className="font-medium">{incident.duration}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(incident.sla)}
                      >
                        {incident.sla === "met" ? "SLA Met" : "SLA Breached"}
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
                                    incident.severity
                                  )}
                                >
                                  {incident.severity}
                                </Badge>
                              </div>
                              <div>
                                <Label>SLA Status</Label>
                                <Badge
                                  variant="secondary"
                                  className={getStatusColor(incident.sla)}
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
                                  {incident.reported}
                                </div>
                              </div>
                              <div>
                                <Label>Resolved At</Label>
                                <div className="text-sm font-medium">
                                  {incident.resolved}
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
                            <div>
                              <Label>Recovery Actions</Label>
                              <div className="mt-2 p-3 bg-gray-50 rounded-md">
                                <div className="text-sm">
                                  {incident.severity === "critical"
                                    ? "Emergency response team deployed. System restored from backup."
                                    : incident.severity === "high"
                                    ? "Automated recovery procedures initiated. Manual verification completed."
                                    : "Standard recovery procedures followed. No additional action required."}
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="border-t flex justify-between">
          <div className="text-sm text-gray-500">
            Showing {incidentRecovery.length} incidents
          </div>
          <Button variant="outline">View All Incidents</Button>
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
                      {breachDetails.map((breach) => (
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
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {breachAnalysis.map((breach, index) => (
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
                      metric.compliance >= 95 ? "bg-emerald-500" : "bg-rose-500"
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
                {escalations.map((escalation) => (
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
          <Button variant="outline" size="sm">
            Manage Escalations
          </Button>
        </CardFooter>
      </Card>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Last updated:</span> Today at 14:30 UTC
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
    </div>
  );
}
