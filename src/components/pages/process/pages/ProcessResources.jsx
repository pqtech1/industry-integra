// components/pages/process/pages/ProcessResources.jsx
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
  RefreshCw ,
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
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount || 0);
};

export default function ProcessResources() {
  const [timeRange, setTimeRange] = useState("month");
  const [resourceType, setResourceType] = useState("all");

  // Use the custom hook with 1-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process resources data from API
  const resourcesData = useMemo(() => {
    if (!data) return null;

    // Get resources data from all relevant tables
    const resources = data["resources_2026_02"] || {};
    const automation = data["automation_2026_02"] || {};
    const overview = data["overview_2026_02"] || {};
    const quality = data["quality_2026_02"] || {};
    const throughput = data["throughput_2026_02"] || {};
    const timeMetrics = data["time_metrics_2026_02"] || {};
    const compliance = data["compliance_2026_02"] || {};
    const costRoi = data["cost_roi_2026_02"] || {};
    const failures = data["failures_2026_02"] || {};
    const backlog = data["backlog_management_2026_02"] || {};

    // Calculate resource statistics
    const totalEmployees =
      resources.employee_data?.total_employees ||
      compliance.total_employees ||
      245;

    const equipmentUtilization =
      ((resources.performance || 73) +
        (resources.availability || 99) +
        (resources.quality_equipment || 77)) /
      3;

    const energyConsumption =
      automation.actual_energy || resources.energy_usage || 2400;

    const materialAvailability =
      ((resources.input_material || 471) /
        (resources.required_materials || 1497)) *
        100 || 92.8;

    // Resource Overview Stats
    const resourceStats = [
      {
        title: "Human Resources",
        value: formatNumber(totalEmployees),
        change: totalEmployees > 250 ? "+8%" : "+2%",
        icon: Users,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        description: "Total workforce",
      },
      {
        title: "Equipment Utilization",
        value: equipmentUtilization.toFixed(1) + "%",
        change: equipmentUtilization > 85 ? "+2.3%" : "-1.2%",
        icon: Factory,
        color:
          equipmentUtilization > 85 ? "text-emerald-600" : "text-amber-600",
        bgColor: equipmentUtilization > 85 ? "bg-emerald-50" : "bg-amber-50",
        description: "Average across plant",
      },
      {
        title: "Energy Consumption",
        value: (energyConsumption / 1000).toFixed(1) + " MW",
        change: "-5.2%",
        icon: Zap,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        description: "Current load",
      },
      {
        title: "Material Availability",
        value: materialAvailability.toFixed(1) + "%",
        change: materialAvailability > 90 ? "+1.8%" : "-0.5%",
        icon: Package,
        color: materialAvailability > 90 ? "text-purple-600" : "text-amber-600",
        bgColor: materialAvailability > 90 ? "bg-purple-50" : "bg-amber-50",
        description: "On-hand materials",
      },
    ];

    // Resource Utilization by Department
    const utilizationData = [
      {
        department: "Production",
        human: overview.performance || 85,
        equipment: overview.availability || 92,
        materials: overview.quality || 88,
      },
      {
        department: "Quality",
        human: quality.performance || 78,
        equipment: quality.availability || 85,
        materials: quality.quality || 82,
      },
      {
        department: "Maintenance",
        human: timeMetrics.operating_time / 3 || 92,
        equipment: 88,
        materials: 85,
      },
      {
        department: "Logistics",
        human: 82,
        equipment: 75,
        materials: 90,
      },
      {
        department: "Engineering",
        human: 88,
        equipment: 80,
        materials: 78,
      },
    ];

    // Equipment Resource Analysis
    const equipmentData = [
      {
        equipment: "CNC Machines",
        total: 24,
        active: Math.round((24 * (resources.availability || 83)) / 100),
        utilization: resources.availability || 83.3,
        status: (resources.availability || 83) > 85 ? "excellent" : "good",
      },
      {
        equipment: "Assembly Lines",
        total: 12,
        active: Math.round((12 * (overview.availability || 83)) / 100),
        utilization: overview.availability || 83.3,
        status: (overview.availability || 83) > 85 ? "good" : "fair",
      },
      {
        equipment: "Robotic Arms",
        total: 18,
        active: Math.round((18 * (automation.performance || 83)) / 100),
        utilization: automation.performance || 83.3,
        status: (automation.performance || 83) > 85 ? "excellent" : "good",
      },
      {
        equipment: "Testing Equipment",
        total: 8,
        active: Math.round((8 * (quality.performance || 75)) / 100),
        utilization: quality.performance || 75.0,
        status: (quality.performance || 75) > 80 ? "good" : "fair",
      },
      {
        equipment: "Packaging Machines",
        total: 10,
        active: Math.round((10 * (throughput.performance || 90)) / 100),
        utilization: throughput.performance || 90.0,
        status: (throughput.performance || 90) > 90 ? "excellent" : "good",
      },
    ];

    // Human Resource Allocation
    const totalAssigned = resources.labor_hours
      ? Math.round(resources.labor_hours / 8)
      : 80;

    const humanResources = [
      {
        role: "Operators",
        total: Math.round(totalEmployees * 0.35),
        assigned: Math.round(totalAssigned * 0.35),
        available:
          Math.round(totalEmployees * 0.35) - Math.round(totalAssigned * 0.35),
        utilization: (
          (Math.round(totalAssigned * 0.35) / (totalEmployees * 0.35)) *
          100
        ).toFixed(1),
      },
      {
        role: "Technicians",
        total: Math.round(totalEmployees * 0.18),
        assigned: Math.round(totalAssigned * 0.18),
        available:
          Math.round(totalEmployees * 0.18) - Math.round(totalAssigned * 0.18),
        utilization: (
          (Math.round(totalAssigned * 0.18) / (totalEmployees * 0.18)) *
          100
        ).toFixed(1),
      },
      {
        role: "Engineers",
        total: Math.round(totalEmployees * 0.13),
        assigned: Math.round(totalAssigned * 0.13),
        available:
          Math.round(totalEmployees * 0.13) - Math.round(totalAssigned * 0.13),
        utilization: (
          (Math.round(totalAssigned * 0.13) / (totalEmployees * 0.13)) *
          100
        ).toFixed(1),
      },
      {
        role: "Supervisors",
        total: Math.round(totalEmployees * 0.07),
        assigned: Math.round(totalAssigned * 0.07),
        available:
          Math.round(totalEmployees * 0.07) - Math.round(totalAssigned * 0.07),
        utilization: (
          (Math.round(totalAssigned * 0.07) / (totalEmployees * 0.07)) *
          100
        ).toFixed(1),
      },
      {
        role: "Quality Staff",
        total: Math.round(totalEmployees * 0.1),
        assigned: Math.round(totalAssigned * 0.1),
        available:
          Math.round(totalEmployees * 0.1) - Math.round(totalAssigned * 0.1),
        utilization: (
          (Math.round(totalAssigned * 0.1) / (totalEmployees * 0.1)) *
          100
        ).toFixed(1),
      },
      {
        role: "Maintenance",
        total: Math.round(totalEmployees * 0.17),
        assigned: Math.round(totalAssigned * 0.17),
        available:
          Math.round(totalEmployees * 0.17) - Math.round(totalAssigned * 0.17),
        utilization: (
          (Math.round(totalAssigned * 0.17) / (totalEmployees * 0.17)) *
          100
        ).toFixed(1),
      },
    ];

    // Material Inventory Status
    const materialInventory = [
      {
        material: "Raw Materials",
        current: resources.input_material || 8500,
        min: 5000,
        max: resources.input_material ? resources.input_material * 1.2 : 10000,
        leadTime: 5,
        status: (resources.input_material || 8500) > 6000 ? "optimal" : "low",
      },
      {
        material: "Components",
        current: automation.units_produced
          ? automation.units_produced * 15
          : 12500,
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
        status:
          (failures.mechanical_failures || 0) > 5 ? "critical" : "optimal",
      },
      {
        material: "Packaging Material",
        current: 9200,
        min: 5000,
        max: 12000,
        leadTime: 2,
        status: "optimal",
      },
    ];

    // Energy Consumption Analysis
    const currentHour = new Date().getHours();
    const energyData = Array.from({ length: 6 }, (_, i) => {
      const hour =
        ((currentHour - 6 + i * 4) % 24).toString().padStart(2, "0") + ":00";
      const baseConsumption = (automation.actual_energy || 4208) / 1000;
      const variation = Math.sin(i) * 0.5 + (Math.random() * 0.3 - 0.15);

      return {
        hour,
        consumption: Math.max(0.5, baseConsumption * (0.8 + variation * 0.2)),
        cost: Math.max(100, baseConsumption * 200 * (0.8 + variation * 0.2)),
        efficiency: Math.min(98, 85 + Math.random() * 10),
      };
    });

    // Resource Cost Breakdown
    const totalCost = costRoi.total_cost || 256451;
    const costBreakdown = [
      {
        resource: "Labor",
        cost: costRoi.labor_costs || 58598,
        percentage: 0,
        color: "#3b82f6",
      },
      {
        resource: "Raw Materials",
        cost: costRoi.raw_material_costs || 84320,
        percentage: 0,
        color: "#10b981",
      },
      {
        resource: "Energy",
        cost: costRoi.energy_costs || 45684,
        percentage: 0,
        color: "#f59e0b",
      },
      {
        resource: "Maintenance",
        cost: costRoi.maintenance_costs || 25230,
        percentage: 0,
        color: "#8b5cf6",
      },
      {
        resource: "Equipment",
        cost: costRoi.equipment_costs || 21731,
        percentage: 0,
        color: "#ef4444",
      },
    ];

    // Calculate percentages
    costBreakdown.forEach((item) => {
      item.percentage = (item.cost / totalCost) * 100;
    });

    // Resource Alerts
    const resourceAlerts = [];

    // Material alerts
    materialInventory.forEach((material, index) => {
      if (material.status === "critical") {
        resourceAlerts.push({
          id: `RA-00${index + 1}`,
          type: "material",
          severity: "critical",
          message: `${material.material} inventory below minimum threshold`,
          resource: material.material,
          requested: new Date().toISOString().split("T")[0],
          status: "pending",
          assignedTo: "Procurement Team",
        });
      } else if (material.status === "low") {
        resourceAlerts.push({
          id: `RA-00${index + 1}`,
          type: "material",
          severity: "high",
          message: `${material.material} inventory running low`,
          resource: material.material,
          requested: new Date().toISOString().split("T")[0],
          status: "pending",
          assignedTo: "Procurement Team",
        });
      }
    });

    // Equipment alerts
    equipmentData.forEach((equipment, index) => {
      if (equipment.utilization < 70) {
        resourceAlerts.push({
          id: `RA-10${index + 1}`,
          type: "equipment",
          severity: "medium",
          message: `${equipment.equipment} underutilized`,
          resource: equipment.equipment,
          requested: new Date().toISOString().split("T")[0],
          status: "pending",
          assignedTo: "Operations Team",
        });
      }
    });

    // Add failure alerts
    if (failures.failures > 10) {
      resourceAlerts.push({
        id: "RA-200",
        type: "equipment",
        severity: "critical",
        message: "Multiple equipment failures detected",
        resource: "Multiple Systems",
        requested: new Date().toISOString().split("T")[0],
        status: "in-progress",
        assignedTo: "Maintenance Dept",
      });
    }

    // Resource Efficiency Metrics
    const efficiencyMetrics = [
      {
        metric: "Overall Efficiency",
        value: equipmentUtilization,
        target: 85,
        trend: equipmentUtilization > 84 ? "+1.2%" : "-0.8%",
        color: "#10b981",
      },
      {
        metric: "Labor Productivity",
        value:
          ((overview.total_units || 444) / (resources.labor_hours || 74)) *
            10 || 92.8,
        target: 90,
        trend: "+2.8%",
        color: "#3b82f6",
      },
      {
        metric: "Equipment OEE",
        value:
          (overview.availability * overview.performance * overview.quality) /
            10000 || 82.4,
        target: 85,
        trend: "+0.8%",
        color: "#f59e0b",
      },
      {
        metric: "Material Yield",
        value:
          ((automation.good_units || 624) / (automation.total_units || 1176)) *
            100 || 95.2,
        target: 96,
        trend: "+0.5%",
        color: "#8b5cf6",
      },
      {
        metric: "Energy Efficiency",
        value:
          ((automation.useful_energy_output || 2968) /
            (automation.total_energy_input || 3136)) *
            100 || 88.6,
        target: 90,
        trend: "+1.5%",
        color: "#06b6d4",
      },
    ];

    // Resource Forecasting (simulated based on current data)
    const forecastData = [
      {
        month: "Jan",
        labor: efficiencyMetrics[1].value * 0.92,
        equipment: efficiencyMetrics[2].value * 0.9,
        materials: efficiencyMetrics[3].value * 0.93,
      },
      {
        month: "Feb",
        labor: efficiencyMetrics[1].value * 0.94,
        equipment: efficiencyMetrics[2].value * 0.92,
        materials: efficiencyMetrics[3].value * 0.94,
      },
      {
        month: "Mar",
        labor: efficiencyMetrics[1].value * 0.96,
        equipment: efficiencyMetrics[2].value * 0.94,
        materials: efficiencyMetrics[3].value * 0.95,
      },
      {
        month: "Apr",
        labor: efficiencyMetrics[1].value * 0.98,
        equipment: efficiencyMetrics[2].value * 0.96,
        materials: efficiencyMetrics[3].value * 0.96,
      },
      {
        month: "May",
        labor: efficiencyMetrics[1].value * 0.99,
        equipment: efficiencyMetrics[2].value * 0.98,
        materials: efficiencyMetrics[3].value * 0.98,
      },
      {
        month: "Jun",
        labor: efficiencyMetrics[1].value,
        equipment: efficiencyMetrics[2].value,
        materials: efficiencyMetrics[3].value,
      },
    ];

    return {
      resourceStats,
      utilizationData,
      equipmentData,
      humanResources,
      materialInventory,
      energyData,
      costBreakdown,
      resourceAlerts,
      efficiencyMetrics,
      forecastData,
      rawData: {
        resources,
        automation,
        overview,
        quality,
        throughput,
        timeMetrics,
        compliance,
        costRoi,
        failures,
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
              {entry.name}: {entry.value}
              {entry.name.includes("Efficiency") ||
              entry.name.includes("Utilization")
                ? "%"
                : entry.name.includes("Consumption")
                  ? " MW"
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
        return "bg-rose-100 text-rose-800 hover:bg-rose-100";
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
          Failed to load resources data: {error}
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
            Process Resources Management
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Monitor and optimize human, equipment, material, and energy
            resources
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
          <Select defaultValue="all" onValueChange={setResourceType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Resource Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Resources</SelectItem>
              <SelectItem value="human">Human</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="material">Material</SelectItem>
              <SelectItem value="energy">Energy</SelectItem>
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

      {resourcesData && (
        <>
          {/* Resource Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resourcesData.resourceStats.map((stat, index) => {
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
                    <BarChart data={resourcesData.utilizationData}>
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
                      {resourcesData.equipmentData.map((equipment, index) => (
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
                                    {equipment.utilization.toFixed(1)}%
                                    Utilization
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
                              Utilization: {equipment.utilization.toFixed(1)}%
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
                    {resourcesData.efficiencyMetrics.map((metric, index) => (
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
                              {metric.value.toFixed(1)}%
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
                      {resourcesData.resourceAlerts.length > 0 ? (
                        resourcesData.resourceAlerts.map((alert, index) => (
                          <div
                            key={alert.id}
                            className={`p-3 border rounded-lg ${getResourceTypeColor(
                              alert.type,
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
                        ))
                      ) : (
                        <div className="text-center py-6 text-gray-500">
                          <CheckCircle className="h-12 w-12 mx-auto mb-2 text-emerald-500" />
                          <p>No active alerts</p>
                          <p className="text-sm">
                            All resources within normal range
                          </p>
                        </div>
                      )}
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
                  {resourcesData.humanResources.map((resource, index) => (
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
                          <div className="text-sm text-gray-500">
                            Utilization
                          </div>
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
                      {resourcesData.materialInventory.map(
                        (material, index) => (
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
                        ),
                      )}
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
                  <AreaChart data={resourcesData.energyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="hour" stroke="#6b7280" />
                    <YAxis
                      yAxisId="left"
                      stroke="#6b7280"
                      label={{
                        value: "MW",
                        angle: -90,
                        position: "insideLeft",
                      }}
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
                        name === "efficiency"
                          ? `${value.toFixed(1)}%`
                          : `${value.toFixed(2)} MW`,
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
                        data={resourcesData.costBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="cost"
                        label
                      >
                        {resourcesData.costBreakdown.map((entry, index) => (
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
                  {resourcesData.costBreakdown.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
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
                <div className="text-xs opacity-90">
                  Assign staff & equipment
                </div>
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
        </>
      )}
    </div>
  );
}
