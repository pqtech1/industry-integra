// components/pages/process/pages/Backlog.jsx
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

export default function Backlog() {
  const [viewMode, setViewMode] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("week");

  // Backlog Statistics
  const backlogStats = [
    {
      title: "Total Backlog Items",
      value: "248",
      change: "+12%",
      icon: ListTodo,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Across all categories",
    },
    {
      title: "High Priority",
      value: "42",
      change: "+5",
      icon: AlertTriangle,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      description: "Critical items pending",
    },
    {
      title: "Avg. Age",
      value: "3.2",
      change: "-0.5",
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      description: "Days in backlog",
    },
    {
      title: "Completion Rate",
      value: "78%",
      change: "+8%",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Last 7 days",
    },
  ];

  // Backlog Categories Distribution
  const categoryData = [
    { name: "Maintenance", value: 85, color: "#3b82f6" },
    { name: "Quality Issues", value: 42, color: "#ef4444" },
    { name: "Process Changes", value: 36, color: "#10b981" },
    { name: "Equipment Upgrades", value: 28, color: "#8b5cf6" },
    { name: "Safety Compliance", value: 24, color: "#f59e0b" },
    { name: "Documentation", value: 33, color: "#64748b" },
  ];

  // Backlog Aging Analysis
  const agingData = [
    { age: "< 1 Day", count: 85, percent: 34 },
    { age: "1-3 Days", count: 72, percent: 29 },
    { age: "4-7 Days", count: 48, percent: 19 },
    { age: "1-2 Weeks", count: 28, percent: 11 },
    { age: "> 2 Weeks", count: 15, percent: 6 },
  ];

  // Resolution Time Trends
  const resolutionData = [
    { day: "Mon", avgTime: 2.5, resolved: 18, pending: 42 },
    { day: "Tue", avgTime: 3.2, resolved: 22, pending: 38 },
    { day: "Wed", avgTime: 2.8, resolved: 25, pending: 35 },
    { day: "Thu", avgTime: 3.5, resolved: 20, pending: 40 },
    { day: "Fri", avgTime: 4.1, resolved: 15, pending: 45 },
    { day: "Sat", avgTime: 5.2, resolved: 8, pending: 52 },
    { day: "Sun", avgTime: 6.1, resolved: 5, pending: 55 },
  ];

  // Priority Distribution
  const priorityData = [
    { priority: "Critical", count: 24, color: "#ef4444" },
    { priority: "High", count: 42, color: "#f59e0b" },
    { priority: "Medium", count: 85, color: "#3b82f6" },
    { priority: "Low", count: 97, color: "#10b981" },
  ];

  // Sample Backlog Items Data
  const backlogItems = [
    {
      id: "BLG-001",
      title: "Conveyor Belt Alignment",
      category: "Maintenance",
      priority: "Critical",
      assignedTo: "Maintenance Team",
      created: "2024-01-15",
      dueDate: "2024-01-20",
      status: "pending",
      age: 5,
      estimatedEffort: 8,
      actualEffort: 0,
    },
    {
      id: "BLG-002",
      title: "Temperature Calibration - Reactor A",
      category: "Quality Issues",
      priority: "High",
      assignedTo: "QC Department",
      created: "2024-01-14",
      dueDate: "2024-01-18",
      status: "in-progress",
      age: 4,
      estimatedEffort: 4,
      actualEffort: 2,
    },
    {
      id: "BLG-003",
      title: "PLC Programming Update",
      category: "Process Changes",
      priority: "Medium",
      assignedTo: "Automation Team",
      created: "2024-01-12",
      dueDate: "2024-01-25",
      status: "pending",
      age: 6,
      estimatedEffort: 12,
      actualEffort: 0,
    },
    {
      id: "BLG-004",
      title: "Safety Valve Inspection",
      category: "Safety Compliance",
      priority: "Critical",
      assignedTo: "Safety Officer",
      created: "2024-01-10",
      dueDate: "2024-01-17",
      status: "completed",
      age: 8,
      estimatedEffort: 6,
      actualEffort: 5,
    },
    {
      id: "BLG-005",
      title: "Batch Documentation Update",
      category: "Documentation",
      priority: "Low",
      assignedTo: "Documentation Team",
      created: "2024-01-08",
      dueDate: "2024-01-30",
      status: "pending",
      age: 10,
      estimatedEffort: 8,
      actualEffort: 0,
    },
    {
      id: "BLG-006",
      title: "Motor Bearing Replacement",
      category: "Maintenance",
      priority: "High",
      assignedTo: "Maintenance Team",
      created: "2024-01-13",
      dueDate: "2024-01-22",
      status: "in-progress",
      age: 5,
      estimatedEffort: 16,
      actualEffort: 8,
    },
    {
      id: "BLG-007",
      title: "Quality Control SOP Update",
      category: "Quality Issues",
      priority: "Medium",
      assignedTo: "QC Manager",
      created: "2024-01-11",
      dueDate: "2024-01-28",
      status: "pending",
      age: 7,
      estimatedEffort: 10,
      actualEffort: 0,
    },
    {
      id: "BLG-008",
      title: "Emergency Stop System Test",
      category: "Safety Compliance",
      priority: "Critical",
      assignedTo: "Safety Team",
      created: "2024-01-09",
      dueDate: "2024-01-16",
      status: "completed",
      age: 9,
      estimatedEffort: 4,
      actualEffort: 3,
    },
  ];

  // Resource Utilization
  const resourceData = [
    { team: "Maintenance", capacity: 85, utilization: 72, pending: 24 },
    { team: "Quality Control", capacity: 60, utilization: 48, pending: 12 },
    { team: "Automation", capacity: 40, utilization: 32, pending: 8 },
    { team: "Safety", capacity: 30, utilization: 22, pending: 6 },
    { team: "Documentation", capacity: 25, utilization: 15, pending: 9 },
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Process Automation Backlog Management
          </h1>
          <p className="text-gray-500 mt-1">
            Track, prioritize, and manage all pending tasks and issues
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
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Backlog
          </Button>
        </div>
      </div>

      {/* Backlog Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {backlogStats.map((stat, index) => {
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
                    All pending tasks and issues
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
                      <SelectItem value="in-progress">In Progress</SelectItem>
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
                    {backlogItems.map((item) => (
                      <TableRow key={item.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{item.id}</TableCell>
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
                Showing {backlogItems.length} of 248 items
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
                <AreaChart data={resolutionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="avgTime"
                    fill="#3b82f6"
                    stroke="#3b82f6"
                    fillOpacity={0.3}
                    name="Avg. Resolution Time (days)"
                  />
                  <Line
                    type="monotone"
                    dataKey="resolved"
                    stroke="#10b981"
                    strokeWidth={2}
                    name="Items Resolved"
                  />
                </AreaChart>
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
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                
              </div>
            </CardContent>
          </Card>

          {/* Aging Analysis */}
          <Card className="shadow-lg border-0">
            <CardHeader>
             
              <CardDescription>Time items have been in backlog</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agingData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{item.age}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{item.count} items</span>
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
              <CardDescription>Urgency level of backlog items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {priorityData.map((item, index) => (
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
                        {((item.count / 248) * 100).toFixed(1)}% of total
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
            {resourceData.map((team, index) => (
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
                      <div className="text-xs text-gray-500">Capacity used</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-rose-600">
                        {team.pending}
                      </div>
                      <div className="text-xs text-gray-500">Pending items</div>
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
              <p className="text-sm font-medium text-gray-700">Bulk Update</p>
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
    </div>
  );
}
