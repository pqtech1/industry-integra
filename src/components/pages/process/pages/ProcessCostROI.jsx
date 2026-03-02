// components/pages/process/pages/ProcessCostROI.jsx
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

// Format currency
const formatCurrency = (amount) => {
  if (!amount) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function ProcessCostROI() {
  const [timeRange, setTimeRange] = useState("quarter");
  const [currency, setCurrency] = useState("USD");

  // Use the custom hook with 1-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process cost and ROI data from API
  const costRoiData = useMemo(() => {
    if (!data) return null;

    // Get cost and ROI data from all relevant tables
    const costRoi = data["cost_roi_2026_02"] || {};
    const automation = data["automation_2026_02"] || {};
    const overview = data["overview_2026_02"] || {};
    const resources = data["resources_2026_02"] || {};
    const quality = data["quality_2026_02"] || {};
    const failures = data["failures_2026_02"] || {};
    const slaRecovery = data["sla_recovery_2026_02"] || {};

    // Calculate total cost from all sources
    const totalCost = costRoi.total_cost || automation.total_costs || 256451;

    // Calculate quarterly savings
    const quarterlySavings = costRoi.savings_data
      ? costRoi.savings_data.labor_savings + costRoi.savings_data.energy_savings
      : 245000;

    // Calculate ROI
    const investmentCost = automation.investment_cost || 127239;
    const netProfit = automation.net_profit || 36996;
    const quarterlyRoi = investmentCost
      ? ((netProfit * 4) / investmentCost) * 100
      : 24.8;

    // Calculate cost per unit
    const totalUnits = automation.total_units || overview.total_units || 1176;
    const costPerUnit = totalUnits ? totalCost / totalUnits : 12.45;

    // Financial Overview Stats
    const financialStats = [
      {
        title: "Total Process Cost",
        value: formatCurrency(totalCost),
        change: totalCost < 250000 ? "-5.2%" : "+2.1%",
        icon: DollarSign,
        color: totalCost < 250000 ? "text-emerald-600" : "text-rose-600",
        bgColor: totalCost < 250000 ? "bg-emerald-50" : "bg-rose-50",
        description: "Annual operational cost",
      },
      {
        title: "ROI This Quarter",
        value: quarterlyRoi.toFixed(1) + "%",
        change: quarterlyRoi > 25 ? "+3.2%" : "-1.5%",
        icon: TrendingUp,
        color: quarterlyRoi > 25 ? "text-emerald-600" : "text-amber-600",
        bgColor: quarterlyRoi > 25 ? "bg-emerald-50" : "bg-amber-50",
        description: "Return on investment",
      },
      {
        title: "Cost per Unit",
        value: formatCurrency(costPerUnit),
        change: costPerUnit < 13 ? "-8%" : "+3%",
        icon: Calculator,
        color: costPerUnit < 13 ? "text-blue-600" : "text-amber-600",
        bgColor: costPerUnit < 13 ? "bg-blue-50" : "bg-amber-50",
        description: "Production efficiency",
      },
      {
        title: "Savings Achieved",
        value: formatCurrency(quarterlySavings),
        change: quarterlySavings > 200000 ? "+15%" : "+5%",
        icon: Wallet,
        color: quarterlySavings > 200000 ? "text-purple-600" : "text-blue-600",
        bgColor: quarterlySavings > 200000 ? "bg-purple-50" : "bg-blue-50",
        description: "This fiscal year",
      },
    ];

    // Cost Breakdown by Category
    const costBreakdown = [
      {
        category: "Raw Materials",
        amount:
          costRoi.raw_material_costs || automation.total_costs * 0.34 || 845000,
        percentage: 0,
        color: "#3b82f6",
      },
      {
        category: "Labor",
        amount: costRoi.labor_costs || automation.labor_expenses || 525000,
        percentage: 0,
        color: "#10b981",
      },
      {
        category: "Energy",
        amount: costRoi.energy_costs || 320000,
        percentage: 0,
        color: "#f59e0b",
      },
      {
        category: "Maintenance",
        amount:
          costRoi.maintenance_costs ||
          automation.maintenance_expenses ||
          285000,
        percentage: 0,
        color: "#8b5cf6",
      },
      {
        category: "Equipment",
        amount: costRoi.equipment_costs || 245000,
        percentage: 0,
        color: "#ef4444",
      },
      {
        category: "Overhead",
        amount: costRoi.overhead_costs || 230000,
        percentage: 0,
        color: "#64748b",
      },
    ];

    // Calculate percentages
    const totalBreakdown = costBreakdown.reduce(
      (sum, item) => sum + item.amount,
      0,
    );
    costBreakdown.forEach((item) => {
      item.percentage = ((item.amount / totalBreakdown) * 100).toFixed(1);
    });

    // ROI Analysis by Project (based on actual data)
    const roiProjects = [
      {
        project: "Automation Upgrade",
        investment: automation.investment_cost || 127239,
        roi: (
          ((automation.net_profit || 36996) /
            (automation.investment_cost || 127239)) *
          100 *
          4
        ).toFixed(1),
        payback: Math.round(
          ((automation.investment_cost || 127239) /
            ((automation.net_profit || 36996) * 4)) *
            12,
        ),
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
        investment: quality.defects ? 320000 : 300000,
        roi: quality.defects < 100 ? 32 : 28,
        payback: quality.defects < 100 ? 28 : 32,
        status: "good",
      },
      {
        project: "Safety Improvements",
        investment: slaRecovery.safety_systems_metrics?.incidents
          ? 185000
          : 165000,
        roi: slaRecovery.safety_systems_metrics?.incidents < 5 ? 24 : 22,
        payback: slaRecovery.safety_systems_metrics?.incidents < 5 ? 38 : 42,
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

    // Monthly Cost Trend (simulated based on actual data)
    const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const baseMonthlyCost = totalCost / 12;
    const costTrend = months.map((month, index) => {
      const variation = Math.sin(index) * 0.05 + (Math.random() * 0.03 - 0.015);
      const monthlyTotal = baseMonthlyCost * (0.95 + variation);
      return {
        month,
        total: monthlyTotal,
        materials: monthlyTotal * (costBreakdown[0].percentage / 100),
        labor: monthlyTotal * (costBreakdown[1].percentage / 100),
        energy: monthlyTotal * (costBreakdown[2].percentage / 100),
      };
    });

    // Cost Saving Initiatives (based on actual savings data)
    const savingsInitiatives = [
      {
        initiative: "Energy Optimization",
        target: costRoi.energy_costs ? costRoi.energy_costs * 0.3 : 120000,
        achieved:
          (automation.baseline_energy - automation.actual_energy) * 0.1 ||
          95000,
        progress: 0,
        status: "on-track",
      },
      {
        initiative: "Waste Reduction",
        target: automation.scrap_units ? automation.scrap_units * 100 : 85000,
        achieved: automation.scrap_units
          ? (automation.scrap_units - automation.rework_units) * 100
          : 68000,
        progress: 0,
        status: "on-track",
      },
      {
        initiative: "Process Automation",
        target: (automation.net_profit || 36996) * 5,
        achieved: automation.net_profit ? automation.net_profit * 4 : 145000,
        progress: 0,
        status: "on-track",
      },
      {
        initiative: "Supplier Negotiation",
        target: costRoi.raw_material_costs
          ? costRoi.raw_material_costs * 0.1
          : 75000,
        achieved: 45000,
        progress: 60,
        status: "delayed",
      },
      {
        initiative: "Preventive Maintenance",
        target: failures.repair_times?.avg_repair_hours * 5000 || 65000,
        achieved: failures.number_of_repairs
          ? failures.number_of_repairs * 5000
          : 52000,
        progress: 0,
        status: "on-track",
      },
    ];

    // Calculate progress percentages
    savingsInitiatives.forEach((initiative) => {
      initiative.progress = Math.round(
        (initiative.achieved / initiative.target) * 100,
      );
    });

    // Production Line Cost Analysis (based on actual production data)
    const totalProduction = automation.output || overview.total_units || 1367;
    const lineCostAnalysis = [
      {
        line: "Assembly A",
        units: Math.round(totalProduction * 0.35),
        cost: totalCost * 0.3,
        costPerUnit: 0,
        efficiency: overview.performance || 92,
      },
      {
        line: "Packaging B",
        units: Math.round(totalProduction * 0.25),
        cost: totalCost * 0.22,
        costPerUnit: 0,
        efficiency: resources.performance || 88,
      },
      {
        line: "Testing C",
        units: Math.round(totalProduction * 0.15),
        cost: totalCost * 0.18,
        costPerUnit: 0,
        efficiency: quality.performance || 92,
      },
      {
        line: "Material Prep",
        units: Math.round(totalProduction * 0.15),
        cost: totalCost * 0.15,
        costPerUnit: 0,
        efficiency: resources.performance || 96,
      },
      {
        line: "Quality Check",
        units: Math.round(totalProduction * 0.1),
        cost: totalCost * 0.15,
        costPerUnit: 0,
        efficiency: quality.performance || 85,
      },
    ];

    // Calculate cost per unit
    lineCostAnalysis.forEach((line) => {
      line.costPerUnit = line.cost / line.units;
    });

    // Investment Portfolio
    const investments = [
      {
        type: "Equipment",
        total: automation.investment_cost || 127239,
        annualReturn: automation.net_profit
          ? automation.net_profit * 4
          : 285000,
        roi: 0,
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
        total: 125000,
        annualReturn: 85000,
        roi: 68,
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

    // Calculate ROI for equipment
    investments[0].roi = (
      (investments[0].annualReturn / investments[0].total) *
      100
    ).toFixed(1);

    // Budget vs Actual
    const budgetData = [
      {
        category: "Materials",
        budget: costBreakdown[0].amount * 1.1,
        actual: costBreakdown[0].amount,
        variance: costBreakdown[0].amount * 0.1,
      },
      {
        category: "Labor",
        budget: costBreakdown[1].amount * 1.08,
        actual: costBreakdown[1].amount,
        variance: costBreakdown[1].amount * 0.08,
      },
      {
        category: "Energy",
        budget: costBreakdown[2].amount * 1.05,
        actual: costBreakdown[2].amount,
        variance: costBreakdown[2].amount * 0.05,
      },
      {
        category: "Maintenance",
        budget: costBreakdown[3].amount * 1.12,
        actual: costBreakdown[3].amount,
        variance: costBreakdown[3].amount * 0.12,
      },
      {
        category: "Equipment",
        budget: costBreakdown[4].amount * 1.07,
        actual: costBreakdown[4].amount,
        variance: costBreakdown[4].amount * 0.07,
      },
    ];

    budgetData.forEach((item) => {
      item.variance = item.budget - item.actual;
    });

    // ROI Calculation Parameters
    const roiParameters = [
      {
        parameter: "NPV",
        value: formatCurrency(
          automation.net_profit ? automation.net_profit * 10 : 1450000,
        ),
        unit: "",
        description: "Net Present Value",
      },
      {
        parameter: "IRR",
        value: quarterlyRoi.toFixed(1),
        unit: "%",
        description: "Internal Rate of Return",
      },
      {
        parameter: "Payback Period",
        value:
          (
            (automation.investment_cost / (automation.net_profit * 4)) *
            12
          ).toFixed(1) || 2.8,
        unit: " years",
        description: "Investment recovery",
      },
      {
        parameter: "Profit Margin",
        value:
          ((automation.net_profit / automation.total_costs) * 100).toFixed(1) ||
          18.2,
        unit: "%",
        description: "Operating margin",
      },
    ];

    return {
      financialStats,
      costBreakdown,
      roiProjects,
      costTrend,
      savingsInitiatives,
      lineCostAnalysis,
      investments,
      budgetData,
      roiParameters,
      rawData: {
        costRoi,
        automation,
        overview,
        resources,
        quality,
        failures,
        slaRecovery,
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
              {entry.name}: {formatCurrency(entry.value)}
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
          Failed to load cost and ROI data: {error}
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
            Process Cost & ROI Analysis
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Financial performance, cost optimization, and investment returns
            {lastUpdated && (
              <Badge variant="outline" className="ml-2">
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                Live
              </Badge>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="quarter" onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="USD" onValueChange={setCurrency}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={refetch}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Financials
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

      {costRoiData && (
        <>
          {/* Financial Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {costRoiData.financialStats.map((stat, index) => {
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
                    <AreaChart data={costRoiData.costTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis
                        stroke="#6b7280"
                        tickFormatter={(value) =>
                          `$${(value / 1000).toFixed(0)}K`
                        }
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
                      {costRoiData.roiProjects.map((project, index) => (
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
                          data={costRoiData.costBreakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="amount"
                        >
                          {costRoiData.costBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [
                            formatCurrency(value),
                            "Amount",
                          ]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {costRoiData.costBreakdown.map((item, index) => (
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
                            {item.percentage}%
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
                    {costRoiData.roiParameters.map((param, index) => (
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
                      {costRoiData.lineCostAnalysis.map((line, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {line.line}
                          </TableCell>
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
                                <Progress
                                  value={line.efficiency}
                                  className="h-2"
                                />
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
                  {costRoiData.savingsInitiatives.map((initiative, index) => (
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
                      <TableHead className="text-right">
                        Total Investment
                      </TableHead>
                      <TableHead className="text-right">
                        Annual Return
                      </TableHead>
                      <TableHead className="text-right">ROI</TableHead>
                      <TableHead className="text-right">Lifecycle</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {costRoiData.investments.map((investment, index) => (
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
                            <span className="font-bold">{investment.roi}%</span>
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
                <div className="text-xs opacity-90">
                  New investment analysis
                </div>
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
                <div className="text-xs opacity-80">
                  Create next quarter budget
                </div>
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
        </>
      )}
    </div>
  );
}
