// components/pages/process/pages/ProcessCostROI.jsx
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
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart as PieChartIcon,
  Target,
  Clock,
  Calendar,
  Download,
  Filter,
  Search,
  Settings,
  Calculator,
  Building,
  Factory,
  Package,
  Users,
  Zap,
  Battery,
  Cpu,
  Shield,
  AlertCircle,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  DollarSign as DollarIcon,
  Wallet,
  CreditCard,
  LineChart as LineChartIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon2,
  AreaChart as AreaChartIcon,
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

export default function ProcessCostROI() {
  const [timeRange, setTimeRange] = useState("quarter");
  const [currency, setCurrency] = useState("USD");

  // Financial Overview Stats
  const financialStats = [
    {
      title: "Total Process Cost",
      value: "$2.45M",
      change: "-5.2%",
      icon: DollarSign,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      description: "Annual operational cost",
    },
    {
      title: "ROI This Quarter",
      value: "24.8%",
      change: "+3.2%",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Return on investment",
    },
    {
      title: "Cost per Unit",
      value: "$12.45",
      change: "-8%",
      icon: Calculator,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Production efficiency",
    },
    {
      title: "Savings Achieved",
      value: "$245K",
      change: "+15%",
      icon: Wallet,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "This fiscal year",
    },
  ];

  // Cost Breakdown by Category
  const costBreakdown = [
    {
      category: "Raw Materials",
      amount: 845000,
      percentage: 34.5,
      color: "#3b82f6",
    },
    { category: "Labor", amount: 525000, percentage: 21.4, color: "#10b981" },
    { category: "Energy", amount: 320000, percentage: 13.1, color: "#f59e0b" },
    {
      category: "Maintenance",
      amount: 285000,
      percentage: 11.6,
      color: "#8b5cf6",
    },
    {
      category: "Equipment",
      amount: 245000,
      percentage: 10.0,
      color: "#ef4444",
    },
    { category: "Overhead", amount: 230000, percentage: 9.4, color: "#64748b" },
  ];

  // ROI Analysis by Project
  const roiProjects = [
    {
      project: "Automation Upgrade",
      investment: 450000,
      roi: 42,
      payback: 18,
      status: "excellent",
    },
    {
      project: "Energy Efficiency",
      investment: 285000,
      roi: 38,
      payback: 24,
      status: "good",
    },
    {
      project: "Quality System",
      investment: 320000,
      roi: 28,
      payback: 32,
      status: "good",
    },
    {
      project: "Safety Improvements",
      investment: 185000,
      roi: 22,
      payback: 42,
      status: "moderate",
    },
    {
      project: "Training Program",
      investment: 125000,
      roi: 18,
      payback: 48,
      status: "moderate",
    },
  ];

  // Monthly Cost Trend
  const costTrend = [
    {
      month: "Jul",
      total: 215000,
      materials: 85000,
      labor: 55000,
      energy: 32000,
    },
    {
      month: "Aug",
      total: 218000,
      materials: 86000,
      labor: 56000,
      energy: 33000,
    },
    {
      month: "Sep",
      total: 212000,
      materials: 84000,
      labor: 54000,
      energy: 31000,
    },
    {
      month: "Oct",
      total: 208000,
      materials: 82000,
      labor: 52000,
      energy: 30000,
    },
    {
      month: "Nov",
      total: 205000,
      materials: 81000,
      labor: 51000,
      energy: 29000,
    },
    {
      month: "Dec",
      total: 202000,
      materials: 80000,
      labor: 50000,
      energy: 28000,
    },
  ];

  // Cost Saving Initiatives
  const savingsInitiatives = [
    {
      initiative: "Energy Optimization",
      target: 120000,
      achieved: 95000,
      progress: 79,
      status: "on-track",
    },
    {
      initiative: "Waste Reduction",
      target: 85000,
      achieved: 68000,
      progress: 80,
      status: "on-track",
    },
    {
      initiative: "Process Automation",
      target: 200000,
      achieved: 145000,
      progress: 72,
      status: "on-track",
    },
    {
      initiative: "Supplier Negotiation",
      target: 75000,
      achieved: 45000,
      progress: 60,
      status: "delayed",
    },
    {
      initiative: "Preventive Maintenance",
      target: 65000,
      achieved: 52000,
      progress: 80,
      status: "on-track",
    },
  ];

  // Production Line Cost Analysis
  const lineCostAnalysis = [
    {
      line: "Assembly A",
      units: 24500,
      cost: 285000,
      costPerUnit: 11.63,
      efficiency: 94,
    },
    {
      line: "Packaging B",
      units: 18900,
      cost: 185000,
      costPerUnit: 9.79,
      efficiency: 88,
    },
    {
      line: "Testing C",
      units: 12500,
      cost: 145000,
      costPerUnit: 11.6,
      efficiency: 92,
    },
    {
      line: "Material Prep",
      units: 28500,
      cost: 245000,
      costPerUnit: 8.6,
      efficiency: 96,
    },
    {
      line: "Quality Check",
      units: 9500,
      cost: 125000,
      costPerUnit: 13.16,
      efficiency: 85,
    },
  ];

  // Investment Portfolio
  const investments = [
    {
      type: "Equipment",
      total: 1250000,
      annualReturn: 285000,
      roi: 22.8,
      lifecycle: 5,
    },
    {
      type: "Software",
      total: 450000,
      annualReturn: 185000,
      roi: 41.1,
      lifecycle: 3,
    },
    {
      type: "Infrastructure",
      total: 850000,
      annualReturn: 195000,
      roi: 22.9,
      lifecycle: 7,
    },
    {
      type: "Training",
      total: 285000,
      annualReturn: 85000,
      roi: 29.8,
      lifecycle: 2,
    },
    {
      type: "R&D",
      total: 650000,
      annualReturn: 245000,
      roi: 37.7,
      lifecycle: 4,
    },
  ];

  // Budget vs Actual
  const budgetData = [
    { category: "Materials", budget: 900000, actual: 845000, variance: -55000 },
    { category: "Labor", budget: 550000, actual: 525000, variance: -25000 },
    { category: "Energy", budget: 350000, actual: 320000, variance: -30000 },
    {
      category: "Maintenance",
      budget: 300000,
      actual: 285000,
      variance: -15000,
    },
    { category: "Equipment", budget: 250000, actual: 245000, variance: -5000 },
  ];

  // ROI Calculation Parameters
  const roiParameters = [
    {
      parameter: "NPV",
      value: 1450000,
      unit: "$",
      description: "Net Present Value",
    },
    {
      parameter: "IRR",
      value: 28.5,
      unit: "%",
      description: "Internal Rate of Return",
    },
    {
      parameter: "Payback Period",
      value: 2.8,
      unit: "years",
      description: "Investment recovery",
    },
    {
      parameter: "Profit Margin",
      value: 18.2,
      unit: "%",
      description: "Operating margin",
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
              {entry.name}:{" "}
              {entry.value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          ))}
        </div>
      );
    }
    return null;
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

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
      case "on-track":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "good":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "moderate":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "delayed":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
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
            Process Cost & ROI Analysis
          </h1>
          <p className="text-gray-500 mt-1">
            Financial performance, cost optimization, and investment returns
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="quarter" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="ytd">Year to Date</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="USD" onValueChange={setCurrency}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="JPY">JPY</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Financials
          </Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {financialStats.map((stat, index) => {
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
          {/* Cost Trend Chart */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Monthly Cost Trend Analysis</CardTitle>
              <CardDescription>
                Cost evolution over last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={costTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis
                    stroke="#6b7280"
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="total"
                    fill="#3b82f6"
                    stroke="#3b82f6"
                    fillOpacity={0.3}
                    name="Total Cost"
                  />
                  <Area
                    type="monotone"
                    dataKey="materials"
                    fill="#10b981"
                    stroke="#10b981"
                    fillOpacity={0.3}
                    name="Materials"
                  />
                  <Area
                    type="monotone"
                    dataKey="labor"
                    fill="#f59e0b"
                    stroke="#f59e0b"
                    fillOpacity={0.3}
                    name="Labor"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* ROI Projects */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-600" />
                ROI Analysis by Project
              </CardTitle>
              <CardDescription>
                Investment performance across initiatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-4">
                  {roiProjects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {project.project}
                          </h4>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4 text-blue-600" />
                              <span className="text-sm text-gray-600">
                                {formatCurrency(project.investment)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Percent className="h-4 w-4 text-emerald-600" />
                              <span className="text-sm text-gray-600">
                                {project.roi}% ROI
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-amber-600" />
                              <span className="text-sm text-gray-600">
                                {project.payback} months payback
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className={getStatusColor(project.status)}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          Investment: {formatCurrency(project.investment)}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          ROI: {project.roi}%
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Status: {project.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Cost Breakdown & ROI Parameters */}
        <div className="space-y-6">
          {/* Cost Breakdown */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5 text-blue-600" />
                Cost Breakdown
              </CardTitle>
              <CardDescription>
                Annual operational cost distribution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={costBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="amount"
                    >
                      {costBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [formatCurrency(value), "Amount"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {costBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">
                        {formatCurrency(item.amount)}
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

          {/* ROI Parameters */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-purple-600" />
                ROI Parameters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {roiParameters.map((param, index) => (
                  <div
                    key={index}
                    className="text-center p-3 border border-gray-100 rounded-lg"
                  >
                    <div className="text-xs text-gray-500 mb-1">
                      {param.parameter}
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {param.value}
                      {param.unit}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {param.description}
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
        {/* Production Line Cost Analysis */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Factory className="h-5 w-5 text-blue-600" />
              Production Line Cost Analysis
            </CardTitle>
            <CardDescription>
              Cost efficiency by production line
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Production Line</TableHead>
                    <TableHead className="text-right">Units</TableHead>
                    <TableHead className="text-right">Total Cost</TableHead>
                    <TableHead className="text-right">Cost/Unit</TableHead>
                    <TableHead className="text-right">Efficiency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lineCostAnalysis.map((line, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{line.line}</TableCell>
                      <TableCell className="text-right">
                        {line.units.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(line.cost)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <DollarSign className="h-3 w-3 text-gray-500" />
                          <span className="font-semibold">
                            {line.costPerUnit.toFixed(2)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <div className="w-16">
                            <Progress value={line.efficiency} className="h-2" />
                          </div>
                          <span className="font-semibold">
                            {line.efficiency}%
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Cost Saving Initiatives */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-emerald-600" />
              Cost Saving Initiatives
            </CardTitle>
            <CardDescription>
              Progress on cost reduction projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {savingsInitiatives.map((initiative, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-medium">
                        {initiative.initiative}
                      </span>
                      <div className="text-sm text-gray-500">
                        {formatCurrency(initiative.achieved)} of{" "}
                        {formatCurrency(initiative.target)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-emerald-600">
                        {initiative.progress}%
                      </div>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(initiative.status)}
                      >
                        {initiative.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={initiative.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Investment Portfolio */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-purple-600" />
            Investment Portfolio
          </CardTitle>
          <CardDescription>Capital investments and returns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Investment Type</TableHead>
                  <TableHead className="text-right">Total Investment</TableHead>
                  <TableHead className="text-right">Annual Return</TableHead>
                  <TableHead className="text-right">ROI</TableHead>
                  <TableHead className="text-right">Lifecycle</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {investments.map((investment, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {investment.type}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {formatCurrency(investment.total)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-emerald-600 font-semibold">
                        {formatCurrency(investment.annualReturn)}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Percent className="h-3 w-3 text-gray-500" />
                        <span className="font-bold">
                          {investment.roi.toFixed(1)}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Calendar className="h-3 w-3 text-gray-500" />
                        <span>{investment.lifecycle} years</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant="secondary"
                        className={
                          investment.roi > 35
                            ? "bg-emerald-100 text-emerald-800"
                            : investment.roi > 25
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }
                      >
                        {investment.roi > 35
                          ? "Excellent"
                          : investment.roi > 25
                          ? "Good"
                          : "Average"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Financial Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700">
          <Calculator className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Calculate ROI</div>
            <div className="text-xs opacity-90">New investment analysis</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <TrendingDown className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Cost Reduction</div>
            <div className="text-xs opacity-80">
              Identify savings opportunities
            </div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <BarChart3 className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Budget Planning</div>
            <div className="text-xs opacity-80">Create next quarter budget</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 flex flex-col items-center justify-center gap-2"
        >
          <LineChartIcon className="h-6 w-6" />
          <div className="text-center">
            <div className="font-medium">Forecasting</div>
            <div className="text-xs opacity-80">Financial projections</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
