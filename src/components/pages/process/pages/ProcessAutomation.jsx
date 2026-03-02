// components/pages/process/pages/ProcessAutomation.jsx
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
  Activity,
  AlertCircle,
  Calendar,
  Clock,
  Cpu,
  Database,
  Download,
  Eye,
  Factory,
  Gauge,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Target,
  CheckCircle,
  XCircle,
  Thermometer,
  Droplets,
  GaugeCircle,
  Shield,
  Battery,
  Package,
  Wrench,
  AlertTriangle,
  TrendingUp as TrendingUpIcon,
  DollarSign,
  Layers,
  RefreshCw,
  Truck,
  Brain,
  CircuitBoard,
  Wind,
  Filter,
  Hash,
  Percent,
  ThermometerSnowflake,
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

// Calculate OEE
const calculateOEE = (availability, performance, quality) => {
  return ((availability * performance * quality) / 10000).toFixed(1);
};

// Render Gauge Component
const renderGauge = (value, min, max, optimal, color) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="relative">
      <Progress value={percentage} className="h-2" />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{min}</span>
        <span className="font-medium" style={{ color }}>
          {value}
        </span>
        <span>{max}</span>
      </div>
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium"
        style={{ color }}
      >
        Optimal: {optimal}
      </div>
    </div>
  );
};

export default function ProcessAutomation() {
  const [timeRange, setTimeRange] = useState("week");
  const [viewMode, setViewMode] = useState("overview");

  // Use the custom hook with 1-second refresh interval
  const { data, loading, error, lastUpdated, refetch } =
    useRealtimeSnapshot(1000);

  // Process automation data from API
  const automationData = useMemo(() => {
    if (!data) return null;

    // Get data from all relevant tables
    const automation = data["automation_2026_02"] || {};
    const overview = data["overview_2026_02"] || {};
    const quality = data["quality_2026_02"] || {};
    const throughput = data["throughput_2026_02"] || {};
    const timeMetrics = data["time_metrics_2026_02"] || {};
    const resources = data["resources_2026_02"] || {};
    const compliance = data["compliance_2026_02"] || {};
    const costRoi = data["cost_roi_2026_02"] || {};
    const failures = data["failures_2026_02"] || {};
    const slaRecovery = data["sla_recovery_2026_02"] || {};

    // Calculate OEE components
    const availability = overview.availability || resources.availability || 89;
    const performance = overview.performance || resources.performance || 92;
    const qualityRate = overview.quality || automation.quality || 92;
    const oeeScore = calculateOEE(availability, performance, qualityRate);

    // 1. Overall Equipment Effectiveness (OEE) Data
    const oeeData = [
      {
        parameter: "Availability",
        value: availability,
        target: 98,
        unit: "%",
        color: "#3b82f6",
      },
      {
        parameter: "Performance",
        value: performance,
        target: 95,
        unit: "%",
        color: "#10b981",
      },
      {
        parameter: "Quality",
        value: qualityRate,
        target: 99,
        unit: "%",
        color: "#8b5cf6",
      },
      {
        parameter: "OEE Score",
        value: parseFloat(oeeScore),
        target: 90,
        unit: "%",
        color: "#f59e0b",
      },
    ];

    // 2. Production Metrics (hourly simulation based on actual data)
    const currentHour = new Date().getHours();
    const productionMetrics = Array.from({ length: 7 }, (_, i) => {
      const hour =
        ((currentHour - 6 + i * 4) % 24).toString().padStart(2, "0") + ":00";
      const baseOutput = automation.output || throughput.actual || 1200;
      const variation = Math.sin(i * 0.8) * 100 + (Math.random() * 50 - 25);

      return {
        hour,
        output: Math.max(0, Math.round(baseOutput + variation)),
        scrap:
          automation.scrap_units ||
          quality.scrap_units ||
          Math.round(baseOutput * 0.02),
        rejects:
          quality.rework_units ||
          automation.rework_units ||
          Math.round(baseOutput * 0.01),
      };
    });

    // 3. Quality Control Metrics
    const qualityData = [
      {
        parameter: "First Pass Yield",
        value: (
          ((quality.good_first_pass || 635) / (quality.total_started || 988)) *
          100
        ).toFixed(1),
        trend: "+1.2%",
        color: "#10b981",
      },
      {
        parameter: "Scrap Rate",
        value: (
          ((quality.scrap_units || 14) / (quality.total_units || 974)) *
          100
        ).toFixed(1),
        trend: "-0.3%",
        color: "#ef4444",
      },
      {
        parameter: "Rework Rate",
        value: (
          ((quality.rework_units || 7) / (quality.total_units || 974)) *
          100
        ).toFixed(1),
        trend: "-0.8%",
        color: "#f59e0b",
      },
      {
        parameter: "PPM (Defects)",
        value: quality.dpmo ? (quality.dpmo / 1000).toFixed(0) : 48254,
        trend: "-150",
        color: "#3b82f6",
      },
      {
        parameter: "Sigma Level",
        value: quality.dpmo
          ? (6 - Math.log10(quality.dpmo / 1000000)).toFixed(1)
          : 4.2,
        trend: "+0.1",
        color: "#06b6d4",
      },
    ];

    // 4. Process Parameters (from various readings)
    const processParameters = [
      {
        name: "Temperature",
        value: automation.temperature_readings?.avg_temp || 27,
        unit: "°C",
        min: 20,
        max: 35,
        optimal: 27,
        color: "#ef4444",
      },
      {
        name: "Pressure",
        value: automation.pressure_readings?.avg_pressure || 23,
        unit: "psi",
        min: 15,
        max: 30,
        optimal: 23,
        color: "#3b82f6",
      },
      {
        name: "Flow Rate",
        value: automation.flow_readings?.avg_flow || 208,
        unit: "L/min",
        min: 150,
        max: 250,
        optimal: 200,
        color: "#10b981",
      },
      {
        name: "pH Level",
        value: automation.ph_readings?.avg_ph || 7,
        unit: "pH",
        min: 6,
        max: 8,
        optimal: 7,
        color: "#8b5cf6",
      },
      {
        name: "Viscosity",
        value: automation.viscosity_readings?.avg_viscosity || 87,
        unit: "cP",
        min: 70,
        max: 100,
        optimal: 85,
        color: "#f59e0b",
      },
      {
        name: "Humidity",
        value: automation.humidity_readings?.avg_humidity || 73,
        unit: "%RH",
        min: 60,
        max: 85,
        optimal: 75,
        color: "#06b6d4",
      },
    ];

    // 5. Equipment Performance (from failures data)
    const equipmentPerformance = [
      {
        equipment: "Mixer A",
        uptime: (resources.availability || 99) - 0.5,
        efficiency: (resources.performance || 73) + 22,
        mttr: failures.repair_times?.avg_repair_hours * 60 || 45,
        mtbf: failures.failures
          ? timeMetrics.total_operating_time / failures.failures
          : 1200,
      },
      {
        equipment: "Reactor B",
        uptime: (resources.availability || 99) - 2.2,
        efficiency: (resources.performance || 73) + 19,
        mttr: failures.repair_times?.avg_repair_hours * 55 || 120,
        mtbf: failures.failures
          ? timeMetrics.total_operating_time / (failures.failures * 1.2)
          : 850,
      },
      {
        equipment: "Extruder C",
        uptime: (resources.availability || 99) + 0.2,
        efficiency: (resources.performance || 73) + 25,
        mttr: failures.repair_times?.avg_repair_hours * 40 || 30,
        mtbf: failures.failures
          ? timeMetrics.total_operating_time / (failures.failures * 0.8)
          : 1500,
      },
      {
        equipment: "Packager D",
        uptime: (resources.availability || 99) - 1.7,
        efficiency: (resources.performance || 73) + 21,
        mttr: failures.repair_times?.avg_repair_hours * 75 || 60,
        mtbf: failures.failures
          ? timeMetrics.total_operating_time / (failures.failures * 1.1)
          : 920,
      },
      {
        equipment: "QC Scanner",
        uptime: (resources.availability || 99) + 0.8,
        efficiency: (resources.performance || 73) + 25,
        mttr: failures.repair_times?.avg_repair_hours * 20 || 15,
        mtbf: failures.failures
          ? timeMetrics.total_operating_time / (failures.failures * 0.6)
          : 2000,
      },
    ];

    // 6. Energy Consumption
    const energyData = [
      {
        parameter: "Total Consumption",
        value: automation.actual_energy || 4208,
        unit: "kWh",
        cost: (automation.actual_energy || 4208) * 0.12,
        color: "#f59e0b",
      },
      {
        parameter: "Peak Demand",
        value: (automation.actual_energy || 4208) * 0.25,
        unit: "kW",
        cost: (automation.actual_energy || 4208) * 0.25 * 0.15,
        color: "#ef4444",
      },
      {
        parameter: "Power Factor",
        value: 0.92,
        unit: "",
        cost: 0,
        color: "#10b981",
      },
      {
        parameter: "Energy Intensity",
        value: (
          (automation.actual_energy || 4208) / (automation.output || 1367)
        ).toFixed(2),
        unit: "kWh/unit",
        cost: (
          ((automation.actual_energy || 4208) / (automation.output || 1367)) *
          0.12
        ).toFixed(2),
        color: "#3b82f6",
      },
      {
        parameter: "Renewable %",
        value: 28,
        unit: "%",
        cost: 0,
        color: "#84cc16",
      },
      {
        parameter: "CO2 Emissions",
        value: ((automation.actual_energy || 4208) * 0.0004).toFixed(1),
        unit: "tons",
        cost: (automation.actual_energy || 4208) * 0.0004 * 25,
        color: "#64748b",
      },
    ];

    // 7. Maintenance Metrics
    const maintenanceData = [
      {
        type: "Preventive",
        count: compliance.audits_data?.internal_audits || 3,
        duration: 45,
        cost: (compliance.audits_data?.internal_audits || 3) * 1600,
        color: "#10b981",
      },
      {
        type: "Corrective",
        count: failures.number_of_repairs || 6,
        duration: failures.repair_times?.avg_repair_hours * 60 || 120,
        cost: (failures.number_of_repairs || 6) * 1200,
        color: "#f59e0b",
      },
      {
        type: "Predictive",
        count: Math.round((compliance.audits_data?.internal_audits || 3) * 0.5),
        duration: 30,
        cost:
          Math.round((compliance.audits_data?.internal_audits || 3) * 0.5) *
          1200,
        color: "#3b82f6",
      },
      {
        type: "Emergency",
        count: failures.critical_failures || 0,
        duration: failures.repair_times?.max_repair_hours * 60 || 240,
        cost: (failures.critical_failures || 0) * 2400,
        color: "#ef4444",
      },
    ];

    // 8. Safety Metrics
    const safetyMetrics = [
      {
        parameter: "TRIR",
        value: (failures.human_error_failures || 3) * 0.3,
        target: 1.0,
        trend: "-0.1",
        color: "#10b981",
      },
      {
        parameter: "Near Misses",
        value: timeMetrics.number_of_incidents || 1,
        target: 15,
        trend: "-3",
        color: "#f59e0b",
      },
      {
        parameter: "Safety Audits",
        value: compliance.audits_data?.internal_audits || 3,
        target: 5,
        trend: "+2%",
        color: "#8b5cf6",
      },
      {
        parameter: "Training Hours",
        value: compliance.employees_trained * 8 || 2450,
        target: 2400,
        trend: "+50",
        color: "#06b6d4",
      },
    ];

    // 9. Inventory & Materials
    const inventoryData = [
      {
        material: "Raw Material A",
        current: resources.input_material || 471,
        min: 300,
        max: 600,
        leadTime: 3,
        color: "#3b82f6",
      },
      {
        material: "Chemical B",
        current: resources.required_materials || 1497,
        min: 1000,
        max: 2000,
        leadTime: 7,
        color: "#10b981",
      },
      {
        material: "Packaging C",
        current: resources.output_material || 638,
        min: 400,
        max: 800,
        leadTime: 2,
        color: "#f59e0b",
      },
      {
        material: "Spare Parts",
        current: 68,
        min: 40,
        max: 90,
        leadTime: 5,
        color: "#8b5cf6",
      },
      {
        material: "Finished Goods",
        current: resources.units_produced || 460,
        min: 300,
        max: 600,
        leadTime: 0,
        color: "#84cc16",
      },
    ];

    // 10. Environmental Parameters
    const environmentalData = [
      {
        parameter: "Water Usage",
        value: 24500,
        unit: "L/day",
        target: 25000,
        color: "#3b82f6",
      },
      {
        parameter: "Waste Generated",
        value: automation.scrap_units * 10 || 1200,
        unit: "kg/day",
        target: 1500,
        color: "#ef4444",
      },
      {
        parameter: "Recycling Rate",
        value: 85,
        unit: "%",
        target: 80,
        color: "#10b981",
      },
      {
        parameter: "Air Quality",
        value: 95,
        unit: "AQI",
        target: 100,
        color: "#84cc16",
      },
      {
        parameter: "Noise Level",
        value: 68,
        unit: "dB",
        target: 75,
        color: "#f59e0b",
      },
    ];

    // 11. Digital & Automation Metrics
    const digitalMetrics = [
      {
        parameter: "IoT Devices",
        value: 142,
        unit: "",
        trend: "+8",
        color: "#3b82f6",
      },
      {
        parameter: "Automation Level",
        value: 78,
        unit: "%",
        trend: "+3%",
        color: "#8b5cf6",
      },
      {
        parameter: "System Uptime",
        value: slaRecovery.energy_supply_metrics?.uptime_percentage || 92,
        unit: "%",
        trend: "+0.02%",
        color: "#f59e0b",
      },
      {
        parameter: "Response Time",
        value:
          slaRecovery.response_times?.avg_response_minutes * 60 * 1000 || 120,
        unit: "ms",
        trend: "-15ms",
        color: "#06b6d4",
      },
    ];

    // 12. Financial KPIs
    const financialKPIs = [
      {
        parameter: "Cost per Unit",
        value: (
          automation.total_costs / automation.total_units || 12.45
        ).toFixed(2),
        unit: "$",
        target: 12.0,
        trend: "-0.15",
        color: "#10b981",
      },
      {
        parameter: "ROI",
        value: (
          (automation.net_profit / automation.investment_cost) * 100 || 24.8
        ).toFixed(1),
        unit: "%",
        target: 20,
        trend: "+2.3%",
        color: "#3b82f6",
      },
      {
        parameter: "Productivity",
        value: (automation.output / automation.input_hours || 145).toFixed(1),
        unit: "units/hr",
        target: 140,
        trend: "+3.5%",
        color: "#f59e0b",
      },
      {
        parameter: "Labor Cost",
        value: (
          (automation.labor_expenses / automation.total_costs) * 100 || 28
        ).toFixed(1),
        unit: "%",
        target: 30,
        trend: "-0.8%",
        color: "#8b5cf6",
      },
      {
        parameter: "Maintenance Cost",
        value: (
          (automation.maintenance_expenses / automation.total_costs) * 100 ||
          4.2
        ).toFixed(1),
        unit: "%",
        target: 5,
        trend: "-0.3%",
        color: "#ef4444",
      },
    ];

    // Summary stats for bottom cards
    const summaryStats = {
      totalProduction: automation.output || overview.total_units || 12450,
      energySaved:
        automation.baseline_energy - automation.actual_energy || 2400,
      qualityRate: overview.quality || 98.2,
      costReduction:
        (automation.previous_cost - automation.current_cost) / 1000 || 124,
    };

    return {
      oeeData,
      productionMetrics,
      qualityData,
      processParameters,
      equipmentPerformance,
      energyData,
      maintenanceData,
      safetyMetrics,
      inventoryData,
      environmentalData,
      digitalMetrics,
      financialKPIs,
      summaryStats,
      rawData: {
        automation,
        overview,
        quality,
        throughput,
        timeMetrics,
        resources,
        compliance,
        costRoi,
        failures,
        slaRecovery,
      },
    };
  }, [data]);

  // Custom Tooltip Component
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
          Failed to load automation data: {error}
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
            Process Automation Dashboard
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Live monitoring and analytics of automated processes
            {lastUpdated && (
              <Badge variant="outline" className="ml-2">
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                Live
              </Badge>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="overview" onValueChange={setViewMode}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="View Mode" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="detailed">Detailed</SelectItem>
            </SelectContent>
          </Select>
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
            Export
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

      {automationData && (
        <>
          {/* Tabs for Different Views */}
          <Tabs defaultValue="overall" className="w-full">
            <TabsList className="grid grid-cols-6 lg:grid-cols-12">
              <TabsTrigger value="overall">Overall OEE</TabsTrigger>
              <TabsTrigger value="production">Production</TabsTrigger>
              <TabsTrigger value="quality">Quality</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="energy">Energy</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="environment">Environment</TabsTrigger>
              <TabsTrigger value="digital">Digital</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
            </TabsList>

            {/* Overall OEE Tab */}
            <TabsContent value="overall" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* OEE Components Card */}
                <Card className="lg:col-span-2 shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gauge className="h-5 w-5 text-emerald-600" />
                      Overall Equipment Effectiveness (OEE)
                    </CardTitle>
                    <CardDescription>
                      Availability × Performance × Quality ={" "}
                      {automationData.oeeData[3].value}%
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {automationData.oeeData.map((item, index) => (
                        <div
                          key={index}
                          className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                        >
                          <p className="text-sm font-medium text-gray-500 mb-2">
                            {item.parameter}
                          </p>
                          <div
                            className="text-3xl font-bold mb-2"
                            style={{ color: item.color }}
                          >
                            {item.value}
                            {item.unit}
                          </div>
                          <div className="text-sm text-gray-500">
                            Target: {item.target}
                            {item.unit}
                          </div>
                          <Progress
                            value={(item.value / item.target) * 100}
                            className="h-2 mt-3"
                            indicatorClassName="bg-current"
                            style={{ "--progress-primary": item.color }}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* OEE Trend Chart */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle>Production Trend</CardTitle>
                    <CardDescription>
                      Current: {automationData.rawData.automation.output || 0}{" "}
                      units
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={automationData.productionMetrics}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="hour" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                          type="monotone"
                          dataKey="output"
                          stroke="#10b981"
                          strokeWidth={3}
                          dot={{ r: 4 }}
                          name="Production Output"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Production Tab */}
            <TabsContent value="production" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Factory className="h-5 w-5 text-blue-600" />
                      Production Metrics
                    </CardTitle>
                    <CardDescription>
                      Total Output:{" "}
                      {automationData.rawData.automation.output || 0} units
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={automationData.productionMetrics}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="hour" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar
                          dataKey="output"
                          fill="#3b82f6"
                          name="Output (units)"
                        />
                        <Bar
                          dataKey="scrap"
                          fill="#ef4444"
                          name="Scrap (units)"
                        />
                        <Bar
                          dataKey="rejects"
                          fill="#f59e0b"
                          name="Rejects (units)"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle>Equipment Performance</CardTitle>
                    <CardDescription>
                      Based on current MTBF and uptime data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {automationData.equipmentPerformance.map((eq, index) => (
                        <div
                          key={index}
                          className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{eq.equipment}</span>
                            <Badge
                              variant={eq.uptime > 97 ? "default" : "secondary"}
                            >
                              {eq.uptime.toFixed(1)}% Uptime
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div>
                              <div className="text-gray-500">Efficiency</div>
                              <div className="font-semibold text-emerald-600">
                                {eq.efficiency.toFixed(1)}%
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500">MTTR</div>
                              <div className="font-semibold text-amber-600">
                                {eq.mttr.toFixed(0)} min
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500">MTBF</div>
                              <div className="font-semibold text-blue-600">
                                {eq.mtbf.toFixed(0)} hrs
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Quality Tab */}
            <TabsContent value="quality" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {automationData.qualityData.map((item, index) => (
                  <Card key={index} className="shadow-xl border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: item.color + "20" }}
                          >
                            <CheckCircle
                              className="h-5 w-5"
                              style={{ color: item.color }}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {item.parameter}
                            </p>
                            <div className="flex items-center gap-1">
                              {item.trend.startsWith("+") ? (
                                <TrendingUp className="h-3 w-3 text-emerald-600" />
                              ) : (
                                <TrendingDown className="h-3 w-3 text-rose-600" />
                              )}
                              <span
                                className={`text-xs ${
                                  item.trend.startsWith("+")
                                    ? "text-emerald-600"
                                    : "text-rose-600"
                                }`}
                              >
                                {item.trend}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: item.color }}
                      >
                        {item.value}
                        {item.parameter.includes("Sigma") ? "σ" : ""}
                      </div>
                      <Progress
                        value={parseFloat(item.value)}
                        className="h-2"
                        indicatorClassName="bg-current"
                        style={{ "--progress-primary": item.color }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Process Parameters Tab */}
            <TabsContent value="process" className="space-y-6">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-rose-600" />
                    Process Parameters Monitoring
                  </CardTitle>
                  <CardDescription>
                    Real-time process variable tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {automationData.processParameters.map((param, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-100 rounded-xl bg-gradient-to-br from-gray-50 to-white"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div
                              className="p-2 rounded-lg"
                              style={{ backgroundColor: param.color + "20" }}
                            >
                              {param.name === "Temperature" && (
                                <Thermometer
                                  className="h-5 w-5"
                                  style={{ color: param.color }}
                                />
                              )}
                              {param.name === "Pressure" && (
                                <GaugeCircle
                                  className="h-5 w-5"
                                  style={{ color: param.color }}
                                />
                              )}
                              {param.name === "Flow Rate" && (
                                <Droplets
                                  className="h-5 w-5"
                                  style={{ color: param.color }}
                                />
                              )}
                              {param.name === "pH Level" && (
                                <Hash
                                  className="h-5 w-5"
                                  style={{ color: param.color }}
                                />
                              )}
                              {param.name === "Viscosity" && (
                                <Filter
                                  className="h-5 w-5"
                                  style={{ color: param.color }}
                                />
                              )}
                              {param.name === "Humidity" && (
                                <ThermometerSnowflake
                                  className="h-5 w-5"
                                  style={{ color: param.color }}
                                />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {param.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                Optimal: {param.optimal}
                                {param.unit}
                              </p>
                            </div>
                          </div>
                          <div
                            className="text-2xl font-bold"
                            style={{ color: param.color }}
                          >
                            {param.value}
                            {param.unit}
                          </div>
                        </div>
                        {renderGauge(
                          param.value,
                          param.min,
                          param.max,
                          param.optimal,
                          param.color,
                        )}
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Min: {param.min}</span>
                          <span>Current: {param.value}</span>
                          <span>Max: {param.max}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Energy Tab */}
            <TabsContent value="energy" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-amber-600" />
                      Energy Consumption Analytics
                    </CardTitle>
                    <CardDescription>
                      Total: {automationData.energyData[0].value} kWh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {automationData.energyData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <div>
                              <p className="font-medium">{item.parameter}</p>
                              <p className="text-sm text-gray-500">
                                {item.unit}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className="text-xl font-bold"
                              style={{ color: item.color }}
                            >
                              {item.value} {item.unit}
                            </div>
                            {item.cost > 0 && (
                              <div className="text-sm text-gray-500">
                                Cost: $
                                {typeof item.cost === "number"
                                  ? item.cost.toFixed(2)
                                  : item.cost}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle>Energy Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={automationData.energyData.slice(0, 4)}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {automationData.energyData
                            .slice(0, 4)
                            .map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Maintenance Tab */}
            <TabsContent value="maintenance" className="space-y-6">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-blue-600" />
                    Maintenance Performance Metrics
                  </CardTitle>
                  <CardDescription>
                    Total maintenance events:{" "}
                    {automationData.maintenanceData.reduce(
                      (sum, item) => sum + item.count,
                      0,
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                    {automationData.maintenanceData.map((item, index) => (
                      <div
                        key={index}
                        className="text-center p-4 rounded-xl border"
                        style={{
                          borderColor: item.color + "40",
                          backgroundColor: item.color + "10",
                        }}
                      >
                        <div
                          className="text-lg font-bold mb-1"
                          style={{ color: item.color }}
                        >
                          {item.count}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {item.type}
                        </div>
                        <div className="text-xs text-gray-500">
                          Avg: {item.duration} min | ${item.cost}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={automationData.equipmentPerformance}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="equipment" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar
                          dataKey="efficiency"
                          fill="#10b981"
                          name="Efficiency %"
                        />
                        <Bar dataKey="uptime" fill="#3b82f6" name="Uptime %" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {automationData.safetyMetrics.map((item, index) => (
                  <Card key={index} className="shadow-xl border-0">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield
                          className="h-4 w-4"
                          style={{ color: item.color }}
                        />
                        <span className="font-medium text-sm">
                          {item.parameter}
                        </span>
                      </div>
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: item.color }}
                      >
                        {item.value}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">
                          Target: {item.target}
                        </span>
                        <span
                          className={`font-medium ${
                            item.trend.startsWith("+")
                              ? "text-emerald-600"
                              : "text-rose-600"
                          }`}
                        >
                          {item.trend}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Financial Tab */}
            <TabsContent value="financial" className="space-y-6">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                    Financial Performance Indicators
                  </CardTitle>
                  <CardDescription>
                    Net Profit: $
                    {automationData.rawData.automation.net_profit?.toLocaleString() ||
                      0}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {automationData.financialKPIs.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-100 rounded-xl bg-gradient-to-br from-gray-50 to-white"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-gray-900">
                            {item.parameter}
                          </span>
                          <div
                            className={`p-1 rounded ${
                              item.trend.startsWith("+")
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            <span className="text-xs font-medium">
                              {item.trend}
                            </span>
                          </div>
                        </div>
                        <div
                          className="text-2xl font-bold mb-2"
                          style={{ color: item.color }}
                        >
                          {item.value}
                          {item.unit}
                        </div>
                        <div className="text-sm text-gray-500">
                          Target: {item.target}
                          {item.unit}
                        </div>
                        <Progress
                          value={(parseFloat(item.value) / item.target) * 100}
                          className="h-1.5 mt-2"
                          indicatorClassName="bg-current"
                          style={{ "--progress-primary": item.color }}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Summary Cards at Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-700">
                      Total Production
                    </p>
                    <p className="text-2xl font-bold text-blue-900">
                      {formatNumber(
                        automationData.summaryStats.totalProduction,
                      )}
                    </p>
                    <p className="text-xs text-blue-600">Units today</p>
                  </div>
                  <Package className="h-10 w-10 text-blue-600 opacity-70" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-700">
                      Energy Saved
                    </p>
                    <p className="text-2xl font-bold text-emerald-900">
                      {formatNumber(automationData.summaryStats.energySaved)}
                    </p>
                    <p className="text-xs text-emerald-600">kWh this month</p>
                  </div>
                  <Battery className="h-10 w-10 text-emerald-600 opacity-70" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-700">
                      Quality Rate
                    </p>
                    <p className="text-2xl font-bold text-purple-900">
                      {automationData.summaryStats.qualityRate}%
                    </p>
                    <p className="text-xs text-purple-600">First pass yield</p>
                  </div>
                  <CheckCircle className="h-10 w-10 text-purple-600 opacity-70" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-700">
                      Cost Reduction
                    </p>
                    <p className="text-2xl font-bold text-amber-900">
                      ${formatNumber(automationData.summaryStats.costReduction)}
                      K
                    </p>
                    <p className="text-xs text-amber-600">This quarter</p>
                  </div>
                  <TrendingDown className="h-10 w-10 text-amber-600 opacity-70" />
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
