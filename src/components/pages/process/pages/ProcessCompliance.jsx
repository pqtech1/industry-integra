// components/pages/process/pages/ProcessCompliance.jsx
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
  AlertCircle,
  CheckCircle,
  Clock,
  Download,
  FileCheck,
  FileText,
  Filter,
  Gavel,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Calendar,
  Eye,
  Search,
  Settings,
  AlertTriangle,
  Award,
  Bell,
  BookOpen,
  ClipboardCheck,
  FileWarning,
  ListChecks,
  Lock,
  Scale,
  Thermometer,
  Timer,
  TrendingUp as TrendingUpIcon,
  UserCheck,
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

export default function ProcessCompliance() {
  const [viewMode, setViewMode] = useState("overview");
  const [complianceStandard, setComplianceStandard] = useState("iso9001");

  // Compliance Overview Stats
  const complianceStats = [
    {
      title: "Overall Compliance",
      value: "94.8%",
      change: "+2.3%",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Against all standards",
    },
    {
      title: "Open Non-Conformities",
      value: "12",
      change: "-3",
      icon: ShieldAlert,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      description: "Requiring attention",
    },
    {
      title: "Audits Completed",
      value: "24",
      change: "+4",
      icon: FileCheck,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "This quarter",
    },
    {
      title: "Training Compliance",
      value: "98.2%",
      change: "+1.5%",
      icon: UserCheck,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Staff trained",
    },
  ];

  // Compliance Standards Coverage
  const standardsData = [
    {
      standard: "ISO 9001:2015",
      compliance: 96,
      audits: 8,
      nc: 2,
      color: "#3b82f6",
    },
    {
      standard: "ISO 14001:2015",
      compliance: 92,
      audits: 6,
      nc: 4,
      color: "#10b981",
    },
    {
      standard: "ISO 45001:2018",
      compliance: 94,
      audits: 5,
      nc: 3,
      color: "#f59e0b",
    },
    {
      standard: "IATF 16949",
      compliance: 89,
      audits: 4,
      nc: 5,
      color: "#8b5cf6",
    },
    {
      standard: "OSHA Regulations",
      compliance: 97,
      audits: 7,
      nc: 1,
      color: "#ef4444",
    },
    {
      standard: "FDA 21 CFR",
      compliance: 91,
      audits: 3,
      nc: 4,
      color: "#06b6d4",
    },
  ];

  // Non-Conformities by Department
  const ncData = [
    { department: "Production", minor: 8, major: 2, critical: 0 },
    { department: "Quality", minor: 4, major: 1, critical: 0 },
    { department: "Maintenance", minor: 6, major: 3, critical: 1 },
    { department: "Warehouse", minor: 3, major: 0, critical: 0 },
    { department: "Administration", minor: 2, major: 1, critical: 0 },
    { department: "Safety", minor: 1, major: 0, critical: 0 },
  ];

  // Audit Schedule
  const auditSchedule = [
    {
      id: "AUD-001",
      standard: "ISO 9001",
      department: "Production",
      date: "2024-01-20",
      status: "scheduled",
      auditor: "John Smith",
    },
    {
      id: "AUD-002",
      standard: "ISO 14001",
      department: "Warehouse",
      date: "2024-01-22",
      status: "in-progress",
      auditor: "Sarah Johnson",
    },
    {
      id: "AUD-003",
      standard: "ISO 45001",
      department: "Maintenance",
      date: "2024-01-25",
      status: "scheduled",
      auditor: "Mike Wilson",
    },
    {
      id: "AUD-004",
      standard: "FDA 21 CFR",
      department: "Quality",
      date: "2024-01-28",
      status: "completed",
      auditor: "Emily Davis",
    },
    {
      id: "AUD-005",
      standard: "IATF 16949",
      department: "Production",
      date: "2024-02-01",
      status: "scheduled",
      auditor: "Robert Brown",
    },
  ];

  // Compliance Trend Data
  const complianceTrend = [
    { month: "Jul", iso9001: 92, iso14001: 88, iso45001: 90 },
    { month: "Aug", iso9001: 93, iso14001: 89, iso45001: 91 },
    { month: "Sep", iso9001: 94, iso14001: 90, iso45001: 92 },
    { month: "Oct", iso9001: 95, iso14001: 91, iso45001: 93 },
    { month: "Nov", iso9001: 96, iso14001: 92, iso45001: 94 },
    { month: "Dec", iso9001: 96, iso14001: 92, iso45001: 94 },
  ];

  // Document Control Status
  const documentControl = [
    { type: "SOPs", total: 245, reviewed: 230, expired: 15, color: "#3b82f6" },
    {
      type: "Work Instructions",
      total: 189,
      reviewed: 175,
      expired: 14,
      color: "#10b981",
    },
    { type: "Forms", total: 89, reviewed: 85, expired: 4, color: "#f59e0b" },
    { type: "Policies", total: 42, reviewed: 40, expired: 2, color: "#8b5cf6" },
    {
      type: "Records",
      total: 1245,
      reviewed: 1200,
      expired: 45,
      color: "#ef4444",
    },
  ];

  // Training Compliance
  const trainingData = [
    {
      role: "Operators",
      required: 40,
      completed: 38,
      compliance: 95,
      color: "#3b82f6",
    },
    {
      role: "Supervisors",
      required: 15,
      completed: 14,
      compliance: 93,
      color: "#10b981",
    },
    {
      role: "Maintenance",
      required: 25,
      completed: 24,
      compliance: 96,
      color: "#f59e0b",
    },
    {
      role: "Quality Staff",
      required: 18,
      completed: 17,
      compliance: 94,
      color: "#8b5cf6",
    },
    {
      role: "Management",
      required: 12,
      completed: 12,
      compliance: 100,
      color: "#ef4444",
    },
  ];

  // Risk Assessment Matrix
  const riskMatrix = [
    {
      risk: "Equipment Failure",
      probability: 3,
      impact: 4,
      score: 12,
      status: "high",
    },
    {
      risk: "Chemical Spill",
      probability: 2,
      impact: 5,
      score: 10,
      status: "high",
    },
    {
      risk: "Data Security",
      probability: 3,
      impact: 3,
      score: 9,
      status: "medium",
    },
    {
      risk: "Supply Chain",
      probability: 4,
      impact: 2,
      score: 8,
      status: "medium",
    },
    {
      risk: "Training Gap",
      probability: 3,
      impact: 2,
      score: 6,
      status: "low",
    },
    {
      risk: "Documentation",
      probability: 2,
      impact: 2,
      score: 4,
      status: "low",
    },
  ];

  // Regulatory Requirements
  const regulatoryData = [
    {
      requirement: "Environmental Reporting",
      frequency: "Quarterly",
      nextDue: "2024-03-31",
      status: "on-track",
    },
    {
      requirement: "Safety Inspections",
      frequency: "Monthly",
      nextDue: "2024-01-31",
      status: "pending",
    },
    {
      requirement: "Quality Audits",
      frequency: "Semi-Annual",
      nextDue: "2024-06-30",
      status: "on-track",
    },
    {
      requirement: "Training Records",
      frequency: "Annual",
      nextDue: "2024-12-31",
      status: "completed",
    },
    {
      requirement: "Equipment Calibration",
      frequency: "Monthly",
      nextDue: "2024-01-28",
      status: "pending",
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
              {entry.name}: {entry.value}%
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
      case "completed":
      case "on-track":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "in-progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "pending":
      case "scheduled":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "high":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
      case "medium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "low":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Process Compliance Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Monitor regulatory compliance, audits, and quality standards
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="iso9001" onValueChange={setComplianceStandard}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Standard" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="iso9001">ISO 9001:2015</SelectItem>
              <SelectItem value="iso14001">ISO 14001:2015</SelectItem>
              <SelectItem value="iso45001">ISO 45001:2018</SelectItem>
              <SelectItem value="iatf16949">IATF 16949</SelectItem>
              <SelectItem value="all">All Standards</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Compliance Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {complianceStats.map((stat, index) => {
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

      {/* Main Content with Scrollable Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Standards & Trends */}
        <div className="lg:col-span-2 space-y-6">
          {/* Compliance Standards */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Compliance Standards Coverage
              </CardTitle>
              <CardDescription>
                Performance across different standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {standardsData.map((standard, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {standard.standard}
                          </h4>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <ShieldCheck className="h-4 w-4 text-emerald-600" />
                              <span className="text-sm text-gray-600">
                                {standard.compliance}% Compliance
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FileCheck className="h-4 w-4 text-blue-600" />
                              <span className="text-sm text-gray-600">
                                {standard.audits} Audits
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ShieldAlert className="h-4 w-4 text-rose-600" />
                              <span className="text-sm text-gray-600">
                                {standard.nc} NCs
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-20">
                          <Progress
                            value={standard.compliance}
                            className="h-2"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          Last Audit: {standard.audits} completed
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          NCs: {standard.nc} open
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Status:{" "}
                          {standard.compliance >= 95
                            ? "Excellent"
                            : standard.compliance >= 90
                            ? "Good"
                            : "Needs Improvement"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Compliance Trend Chart */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Compliance Trend Analysis</CardTitle>
              <CardDescription>
                Monthly compliance rate evolution
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={complianceTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" domain={[85, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="iso9001"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="ISO 9001"
                  />
                  <Line
                    type="monotone"
                    dataKey="iso14001"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="ISO 14001"
                  />
                  <Line
                    type="monotone"
                    dataKey="iso45001"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="ISO 45001"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Quick Stats & Actions */}
        <div className="space-y-6">
          {/* Audit Schedule */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Upcoming Audits
              </CardTitle>
              <CardDescription>Next 5 scheduled audits</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {auditSchedule.map((audit) => (
                    <div
                      key={audit.id}
                      className="p-3 border border-gray-100 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{audit.standard}</p>
                          <p className="text-sm text-gray-500">
                            {audit.department}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className={getStatusColor(audit.status)}
                        >
                          {audit.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-gray-500" />
                          <span>{audit.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UserCheck className="h-3 w-3 text-gray-500" />
                          <span>{audit.auditor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Audits
              </Button>
            </CardFooter>
          </Card>

          {/* Document Control */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Document Control Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documentControl.map((doc, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{doc.type}</span>
                      <span className="text-sm text-gray-500">
                        {doc.reviewed}/{doc.total}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress
                        value={(doc.reviewed / doc.total) * 100}
                        className="h-2 flex-1"
                      />
                      <Badge variant="outline" className="text-xs">
                        {doc.expired} expired
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Row - Detailed Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Non-Conformities Table */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-rose-600" />
              Non-Conformities by Department
            </CardTitle>
            <CardDescription>
              Open non-conformities requiring action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead className="text-center">Minor</TableHead>
                    <TableHead className="text-center">Major</TableHead>
                    <TableHead className="text-center">Critical</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ncData.map((dept, index) => {
                    const total = dept.minor + dept.major + dept.critical;
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {dept.department}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            variant="outline"
                            className="bg-amber-50 text-amber-700"
                          >
                            {dept.minor}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            variant="outline"
                            className="bg-orange-50 text-orange-700"
                          >
                            {dept.major}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            variant="outline"
                            className="bg-rose-50 text-rose-700"
                          >
                            {dept.critical}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="font-bold">{total}</div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Training Compliance */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-emerald-600" />
              Training Compliance
            </CardTitle>
            <CardDescription>Staff training completion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trainingData.map((training, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-medium">{training.role}</span>
                      <div className="text-sm text-gray-500">
                        {training.completed}/{training.required} completed
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-xl font-bold"
                        style={{ color: training.color }}
                      >
                        {training.compliance}%
                      </div>
                    </div>
                  </div>
                  <Progress value={training.compliance} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Assessment */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-amber-600" />
            Risk Assessment Matrix
          </CardTitle>
          <CardDescription>
            Identified risks and mitigation status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Risk</TableHead>
                  <TableHead className="text-center">Probability</TableHead>
                  <TableHead className="text-center">Impact</TableHead>
                  <TableHead className="text-center">Risk Score</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {riskMatrix.map((risk, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{risk.risk}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">{risk.probability}/5</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">{risk.impact}/5</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="font-bold">{risk.score}</div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="secondary"
                        className={getStatusColor(risk.status)}
                      >
                        {risk.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">
                        Mitigate
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2">
          <ClipboardCheck className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Schedule Audit</div>
            <div className="text-xs opacity-80">Plan new compliance audit</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <FileText className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Document Review</div>
            <div className="text-xs opacity-80">Review expiring documents</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <AlertCircle className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Report NC</div>
            <div className="text-xs opacity-80">Report non-conformity</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <Settings className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Settings</div>
            <div className="text-xs opacity-80">Configure compliance</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
