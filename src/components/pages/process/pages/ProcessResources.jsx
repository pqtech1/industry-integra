// components/pages/process/pages/ProcessResources.jsx
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
  Users,
  Cpu,
  Factory,
  Package,
  Zap,
  Wrench,
  Truck,
  Building,
  DollarSign,
  Clock,
  Calendar,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart as PieChartIcon,
  Download,
  Filter,
  Search,
  Settings,
  Eye,
  AlertCircle,
  CheckCircle,
  Target,
  Gauge,
  Shield,
  Thermometer,
  Database,
  Bell,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Users as UsersIcon,
  Cpu as CpuIcon,
  Factory as FactoryIcon,
  Package as PackageIcon,
  Zap as ZapIcon,
  Wrench as WrenchIcon,
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

export default function ProcessResources() {
  const [timeRange, setTimeRange] = useState("month");
  const [resourceType, setResourceType] = useState("all");

  // Resource Overview Stats
  const resourceStats = [
    {
      title: "Human Resources",
      value: "245",
      change: "+8%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Total workforce",
    },
    {
      title: "Equipment Utilization",
      value: "84.5%",
      change: "+2.3%",
      icon: Factory,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Average across plant",
    },
    {
      title: "Energy Consumption",
      value: "2.4 MW",
      change: "-5.2%",
      icon: Zap,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      description: "Current load",
    },
    {
      title: "Material Availability",
      value: "92.8%",
      change: "+1.8%",
      icon: Package,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "On-hand materials",
    },
  ];

  // Resource Utilization by Department
  const utilizationData = [
    { department: "Production", human: 85, equipment: 92, materials: 88 },
    { department: "Quality", human: 78, equipment: 85, materials: 82 },
    { department: "Maintenance", human: 92, equipment: 88, materials: 85 },
    { department: "Logistics", human: 82, equipment: 75, materials: 90 },
    { department: "Engineering", human: 88, equipment: 80, materials: 78 },
  ];

  // Equipment Resource Analysis
  const equipmentData = [
    {
      equipment: "CNC Machines",
      total: 24,
      active: 20,
      utilization: 83.3,
      status: "good",
    },
    {
      equipment: "Assembly Lines",
      total: 12,
      active: 10,
      utilization: 83.3,
      status: "good",
    },
    {
      equipment: "Robotic Arms",
      total: 18,
      active: 15,
      utilization: 83.3,
      status: "good",
    },
    {
      equipment: "Testing Equipment",
      total: 8,
      active: 6,
      utilization: 75.0,
      status: "fair",
    },
    {
      equipment: "Packaging Machines",
      total: 10,
      active: 9,
      utilization: 90.0,
      status: "excellent",
    },
    {
      equipment: "Material Handling",
      total: 15,
      active: 12,
      utilization: 80.0,
      status: "good",
    },
  ];

  // Human Resource Allocation
  const humanResources = [
    {
      role: "Operators",
      total: 85,
      assigned: 80,
      available: 5,
      utilization: 94.1,
    },
    {
      role: "Technicians",
      total: 45,
      assigned: 42,
      available: 3,
      utilization: 93.3,
    },
    {
      role: "Engineers",
      total: 32,
      assigned: 30,
      available: 2,
      utilization: 93.8,
    },
    {
      role: "Supervisors",
      total: 18,
      assigned: 16,
      available: 2,
      utilization: 88.9,
    },
    {
      role: "Quality Staff",
      total: 25,
      assigned: 22,
      available: 3,
      utilization: 88.0,
    },
    {
      role: "Maintenance",
      total: 40,
      assigned: 36,
      available: 4,
      utilization: 90.0,
    },
  ];

  // Material Inventory Status
  const materialInventory = [
    {
      material: "Steel Sheets",
      current: 8500,
      min: 5000,
      max: 10000,
      leadTime: 5,
      status: "optimal",
    },
    {
      material: "Electronic Components",
      current: 12500,
      min: 8000,
      max: 15000,
      leadTime: 7,
      status: "optimal",
    },
    {
      material: "Plastic Resin",
      current: 4200,
      min: 3000,
      max: 6000,
      leadTime: 3,
      status: "low",
    },
    {
      material: "Bearings",
      current: 1800,
      min: 1500,
      max: 2500,
      leadTime: 10,
      status: "critical",
    },
    {
      material: "Packaging Material",
      current: 9200,
      min: 5000,
      max: 12000,
      leadTime: 2,
      status: "optimal",
    },
    {
      material: "Lubricants",
      current: 320,
      min: 250,
      max: 500,
      leadTime: 5,
      status: "optimal",
    },
  ];

  // Energy Consumption Analysis
  const energyData = [
    { hour: "00:00", consumption: 1.2, cost: 240, efficiency: 88 },
    { hour: "04:00", consumption: 0.9, cost: 180, efficiency: 92 },
    { hour: "08:00", consumption: 2.8, cost: 560, efficiency: 85 },
    { hour: "12:00", consumption: 3.2, cost: 640, efficiency: 82 },
    { hour: "16:00", consumption: 2.5, cost: 500, efficiency: 86 },
    { hour: "20:00", consumption: 1.5, cost: 300, efficiency: 90 },
  ];

  // Resource Cost Breakdown
  const costBreakdown = [
    { resource: "Labor", cost: 1250000, percentage: 42.5, color: "#3b82f6" },
    {
      resource: "Raw Materials",
      cost: 850000,
      percentage: 28.8,
      color: "#10b981",
    },
    { resource: "Energy", cost: 320000, percentage: 10.9, color: "#f59e0b" },
    {
      resource: "Maintenance",
      cost: 285000,
      percentage: 9.7,
      color: "#8b5cf6",
    },
    { resource: "Equipment", cost: 245000, percentage: 8.3, color: "#ef4444" },
  ];

  // Resource Requests & Alerts
  const resourceAlerts = [
    {
      id: "RA-001",
      type: "material",
      severity: "critical",
      message: "Steel inventory below minimum threshold",
      resource: "Steel Sheets",
      requested: "2024-01-15",
      status: "pending",
      assignedTo: "Procurement Team",
    },
    {
      id: "RA-002",
      type: "equipment",
      severity: "high",
      message: "CNC Machine #3 requires maintenance",
      resource: "CNC Machines",
      requested: "2024-01-14",
      status: "in-progress",
      assignedTo: "Maintenance Dept",
    },
    {
      id: "RA-003",
      type: "human",
      severity: "medium",
      message: "Additional operators needed for Line B",
      resource: "Operators",
      requested: "2024-01-13",
      status: "pending",
      assignedTo: "HR Department",
    },
    {
      id: "RA-004",
      type: "energy",
      severity: "low",
      message: "Peak hour optimization required",
      resource: "Energy Consumption",
      requested: "2024-01-12",
      status: "resolved",
      assignedTo: "Energy Manager",
    },
  ];

  // Resource Efficiency Metrics
  const efficiencyMetrics = [
    {
      metric: "Overall Efficiency",
      value: 84.5,
      target: 85,
      trend: "+1.2%",
      color: "#10b981",
    },
    {
      metric: "Labor Productivity",
      value: 92.8,
      target: 90,
      trend: "+2.8%",
      color: "#3b82f6",
    },
    {
      metric: "Equipment OEE",
      value: 82.4,
      target: 85,
      trend: "+0.8%",
      color: "#f59e0b",
    },
    {
      metric: "Material Yield",
      value: 95.2,
      target: 96,
      trend: "+0.5%",
      color: "#8b5cf6",
    },
    {
      metric: "Energy Efficiency",
      value: 88.6,
      target: 90,
      trend: "+1.5%",
      color: "#06b6d4",
    },
  ];

  // Resource Forecasting
  const forecastData = [
    { month: "Jan", labor: 85, equipment: 82, materials: 88 },
    { month: "Feb", labor: 86, equipment: 83, materials: 89 },
    { month: "Mar", labor: 87, equipment: 84, materials: 90 },
    { month: "Apr", labor: 88, equipment: 85, materials: 91 },
    { month: "May", labor: 89, equipment: 86, materials: 92 },
    { month: "Jun", labor: 90, equipment: 87, materials: 93 },
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
      case "excellent":
      case "optimal":
      case "resolved":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "good":
      case "in-progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "fair":
      case "pending":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "low":
      case "critical":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Get alert severity color
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

  // Get resource type color
  const getResourceTypeColor = (type) => {
    switch (type) {
      case "material":
        return "border-l-4 border-emerald-500";
      case "equipment":
        return "border-l-4 border-blue-500";
      case "human":
        return "border-l-4 border-purple-500";
      case "energy":
        return "border-l-4 border-amber-500";
      default:
        return "border-l-4 border-gray-500";
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            Process Resources Management
          </h1>
          <p className="text-gray-500 mt-1">
            Monitor and optimize human, equipment, material, and energy
            resources
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
          <Select defaultValue="all" onValueChange={setResourceType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Resource Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Resources</SelectItem>
              <SelectItem value="human">Human</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="material">Material</SelectItem>
              <SelectItem value="energy">Energy</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Resource Report
          </Button>
        </div>
      </div>

      {/* Resource Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {resourceStats.map((stat, index) => {
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
        {/* Left Column - Charts & Utilization */}
        <div className="lg:col-span-2 space-y-6">
          {/* Resource Utilization Trend */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Resource Utilization Trend</CardTitle>
              <CardDescription>
                Department-wise resource utilization rates
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={utilizationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="department" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" domain={[70, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="human"
                    fill="#3b82f6"
                    name="Human Resources %"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="equipment"
                    fill="#10b981"
                    name="Equipment %"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="materials"
                    fill="#f59e0b"
                    name="Materials %"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Equipment Resource Analysis */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-blue-600" />
                Equipment Resource Analysis
              </CardTitle>
              <CardDescription>
                Equipment status and utilization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-4">
                  {equipmentData.map((equipment, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {equipment.equipment}
                          </h4>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <Cpu className="h-4 w-4 text-blue-600" />
                              <span className="text-sm text-gray-600">
                                {equipment.active}/{equipment.total} Active
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Gauge className="h-4 w-4 text-emerald-600" />
                              <span className="text-sm text-gray-600">
                                {equipment.utilization}% Utilization
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className={getStatusColor(equipment.status)}
                        >
                          {equipment.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          Active: {equipment.active}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Total: {equipment.total}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Utilization: {equipment.utilization}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Resource Efficiency & Alerts */}
        <div className="space-y-6">
          {/* Resource Efficiency Metrics */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-600" />
                Resource Efficiency Metrics
              </CardTitle>
              <CardDescription>Performance against targets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {efficiencyMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <span className="text-sm font-medium">
                          {metric.metric}
                        </span>
                        <div className="flex items-center gap-1">
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
                          className="text-lg font-bold"
                          style={{ color: metric.color }}
                        >
                          {metric.value}%
                        </div>
                        <div className="text-xs text-gray-500">
                          Target: {metric.target}%
                        </div>
                      </div>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resource Alerts */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-rose-600" />
                Resource Alerts
              </CardTitle>
              <CardDescription>
                Active resource requests and issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {resourceAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 border rounded-lg ${getResourceTypeColor(
                        alert.type
                      )}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{alert.resource}</p>
                          <p className="text-sm text-gray-500 truncate">
                            {alert.message}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className={getSeverityColor(alert.severity)}
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-gray-500" />
                          <span>{alert.requested}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className={getStatusColor(alert.status)}
                        >
                          {alert.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Human Resources & Material Inventory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Human Resource Allocation */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Human Resource Allocation
            </CardTitle>
            <CardDescription>
              Staff allocation and utilization by role
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {humanResources.map((resource, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-medium">{resource.role}</span>
                      <div className="text-sm text-gray-500">
                        {resource.assigned} assigned, {resource.available}{" "}
                        available
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">
                        {resource.utilization}%
                      </div>
                      <div className="text-sm text-gray-500">Utilization</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Progress
                      value={(resource.assigned / resource.total) * 100}
                      className="h-2 flex-1"
                      indicatorClassName="bg-blue-500"
                    />
                    <div className="w-16 text-right text-sm text-gray-600">
                      {resource.assigned}/{resource.total}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Material Inventory Status */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-emerald-600" />
              Material Inventory Status
            </CardTitle>
            <CardDescription>
              Current stock levels and reorder status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Material</TableHead>
                    <TableHead className="text-right">Current</TableHead>
                    <TableHead className="text-right">Min/Max</TableHead>
                    <TableHead className="text-right">Lead Time</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {materialInventory.map((material, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {material.material}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="font-semibold">
                          {material.current.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="text-sm text-gray-600">
                          {material.min} / {material.max}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span>{material.leadTime} days</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant="secondary"
                          className={getStatusColor(material.status)}
                        >
                          {material.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Energy Analysis & Cost Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Energy Consumption Analysis */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-600" />
              Energy Consumption Analysis
            </CardTitle>
            <CardDescription>24-hour energy usage pattern</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" stroke="#6b7280" />
                <YAxis
                  yAxisId="left"
                  stroke="#6b7280"
                  label={{ value: "MW", angle: -90, position: "insideLeft" }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#6b7280"
                  label={{
                    value: "Efficiency %",
                    angle: 90,
                    position: "insideRight",
                  }}
                  domain={[80, 95]}
                />
                <Tooltip
                  formatter={(value, name) => [
                    name === "efficiency" ? `${value}%` : `${value} MW`,
                    name === "efficiency" ? "Efficiency" : "Consumption",
                  ]}
                />
                <Legend />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="consumption"
                  fill="#fbbf24"
                  stroke="#f59e0b"
                  fillOpacity={0.3}
                  name="Consumption"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Efficiency"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Resource Cost Breakdown */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-purple-600" />
              Resource Cost Breakdown
            </CardTitle>
            <CardDescription>
              Monthly resource cost distribution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="cost"
                  >
                    {costBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [formatCurrency(value), "Cost"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {costBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">{item.resource}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">
                      {formatCurrency(item.cost)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.percentage.toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700">
          <Users className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Allocate Resources</div>
            <div className="text-xs opacity-90">Assign staff & equipment</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <Package className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Order Materials</div>
            <div className="text-xs opacity-80">Request materials</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <Zap className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Energy Report</div>
            <div className="text-xs opacity-80">
              Energy consumption analysis
            </div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <Settings className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Resource Settings</div>
            <div className="text-xs opacity-80">
              Configure resource parameters
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
