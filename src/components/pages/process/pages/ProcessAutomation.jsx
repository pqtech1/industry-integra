// components/pages/process/pages/ProcessAutomation.jsx
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
  Treemap,
  Sankey,
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
  BarChart2,
  Truck,
  Brain,
  CircuitBoard,
  Wind,
  Filter,
  Cctv,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

export default function ProcessAutomation() {
  const [timeRange, setTimeRange] = useState("week");
  const [viewMode, setViewMode] = useState("overview");

  // 1. Overall Equipment Effectiveness (OEE) Data
  const oeeData = [
    {
      parameter: "Availability",
      value: 95,
      target: 98,
      unit: "%",
      color: "#3b82f6",
    },
    {
      parameter: "Performance",
      value: 92,
      target: 95,
      unit: "%",
      color: "#10b981",
    },
    {
      parameter: "Quality",
      value: 98.5,
      target: 99,
      unit: "%",
      color: "#8b5cf6",
    },
    {
      parameter: "OEE Score",
      value: 86.2,
      target: 90,
      unit: "%",
      color: "#f59e0b",
    },
  ];

  // 2. Production Metrics
  const productionMetrics = [
    { hour: "00:00", output: 1200, scrap: 24, rejects: 12 },
    { hour: "04:00", output: 1350, scrap: 27, rejects: 14 },
    { hour: "08:00", output: 2450, scrap: 49, rejects: 25 },
    { hour: "12:00", output: 2780, scrap: 56, rejects: 28 },
    { hour: "16:00", output: 3120, scrap: 62, rejects: 31 },
    { hour: "20:00", output: 1890, scrap: 38, rejects: 19 },
    { hour: "24:00", output: 1250, scrap: 25, rejects: 13 },
  ];

  // 3. Quality Control Metrics
  const qualityData = [
    {
      parameter: "First Pass Yield",
      value: 96.8,
      trend: "+1.2%",
      color: "#10b981",
    },
    { parameter: "Scrap Rate", value: 1.5, trend: "-0.3%", color: "#ef4444" },
    { parameter: "Rework Rate", value: 2.3, trend: "-0.8%", color: "#f59e0b" },
    {
      parameter: "Customer Rejects",
      value: 0.8,
      trend: "-0.2%",
      color: "#8b5cf6",
    },
    {
      parameter: "PPM (Defects)",
      value: 1200,
      trend: "-150",
      color: "#3b82f6",
    },
    { parameter: "Sigma Level", value: 4.2, trend: "+0.1", color: "#06b6d4" },
  ];

  // 4. Process Parameters
  const processParameters = [
    {
      name: "Temperature",
      value: 185,
      unit: "°C",
      min: 170,
      max: 200,
      optimal: 185,
      color: "#ef4444",
    },
    {
      name: "Pressure",
      value: 45,
      unit: "psi",
      min: 40,
      max: 50,
      optimal: 45,
      color: "#3b82f6",
    },
    {
      name: "Flow Rate",
      value: 12.5,
      unit: "L/min",
      min: 10,
      max: 15,
      optimal: 12.5,
      color: "#10b981",
    },
    {
      name: "pH Level",
      value: 7.2,
      unit: "pH",
      min: 6.5,
      max: 7.5,
      optimal: 7.2,
      color: "#8b5cf6",
    },
    {
      name: "Viscosity",
      value: 320,
      unit: "cP",
      min: 300,
      max: 350,
      optimal: 325,
      color: "#f59e0b",
    },
    {
      name: "Humidity",
      value: 45,
      unit: "%RH",
      min: 40,
      max: 60,
      optimal: 50,
      color: "#06b6d4",
    },
  ];

  // 5. Equipment Performance
  const equipmentPerformance = [
    {
      equipment: "Mixer A",
      uptime: 98.5,
      efficiency: 95.2,
      mttr: 45,
      mtbf: 1200,
    },
    {
      equipment: "Reactor B",
      uptime: 96.8,
      efficiency: 92.4,
      mttr: 120,
      mtbf: 850,
    },
    {
      equipment: "Extruder C",
      uptime: 99.2,
      efficiency: 97.8,
      mttr: 30,
      mtbf: 1500,
    },
    {
      equipment: "Packager D",
      uptime: 97.3,
      efficiency: 94.1,
      mttr: 60,
      mtbf: 920,
    },
    {
      equipment: "QC Scanner",
      uptime: 99.8,
      efficiency: 98.5,
      mttr: 15,
      mtbf: 2000,
    },
  ];

  // 6. Energy Consumption
  const energyData = [
    {
      parameter: "Total Consumption",
      value: 2450,
      unit: "kWh",
      cost: 245,
      color: "#f59e0b",
    },
    {
      parameter: "Peak Demand",
      value: 320,
      unit: "kW",
      cost: 64,
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
      value: 0.85,
      unit: "kWh/unit",
      cost: 0.085,
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
      value: 1.2,
      unit: "tons",
      cost: 24,
      color: "#64748b",
    },
  ];

  // 7. Maintenance Metrics
  const maintenanceData = [
    {
      type: "Preventive",
      count: 24,
      duration: 45,
      cost: 4800,
      color: "#10b981",
    },
    {
      type: "Corrective",
      count: 8,
      duration: 120,
      cost: 9600,
      color: "#f59e0b",
    },
    {
      type: "Predictive",
      count: 12,
      duration: 30,
      cost: 3600,
      color: "#3b82f6",
    },
    {
      type: "Emergency",
      count: 3,
      duration: 240,
      cost: 7200,
      color: "#ef4444",
    },
  ];

  // 8. Safety Metrics
  const safetyMetrics = [
    {
      parameter: "TRIR",
      value: 0.8,
      target: 1.0,
      trend: "-0.1",
      color: "#10b981",
    },
    {
      parameter: "LTIFR",
      value: 0.4,
      target: 0.5,
      trend: "-0.05",
      color: "#3b82f6",
    },
    {
      parameter: "Near Misses",
      value: 12,
      target: 15,
      trend: "-3",
      color: "#f59e0b",
    },
    {
      parameter: "Safety Audits",
      value: 98,
      target: 100,
      trend: "+2%",
      color: "#8b5cf6",
    },
    {
      parameter: "Training Hours",
      value: 2450,
      target: 2400,
      trend: "+50",
      color: "#06b6d4",
    },
  ];

  // 9. Inventory & Materials
  const inventoryData = [
    {
      material: "Raw Material A",
      current: 85,
      min: 50,
      max: 100,
      leadTime: 3,
      color: "#3b82f6",
    },
    {
      material: "Chemical B",
      current: 45,
      min: 30,
      max: 80,
      leadTime: 7,
      color: "#10b981",
    },
    {
      material: "Packaging C",
      current: 92,
      min: 60,
      max: 120,
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
      current: 120,
      min: 80,
      max: 150,
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
      value: 1200,
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
      parameter: "Data Points",
      value: 1245000,
      unit: "",
      trend: "+5.2%",
      color: "#3b82f6",
    },
    {
      parameter: "IoT Devices",
      value: 142,
      unit: "",
      trend: "+8",
      color: "#10b981",
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
      value: 99.95,
      unit: "%",
      trend: "+0.02%",
      color: "#f59e0b",
    },
    {
      parameter: "Response Time",
      value: 120,
      unit: "ms",
      trend: "-15ms",
      color: "#06b6d4",
    },
  ];

  // 12. Financial KPIs
  const financialKPIs = [
    {
      parameter: "Cost per Unit",
      value: 12.45,
      unit: "$",
      target: 12.0,
      trend: "-0.15",
      color: "#10b981",
    },
    {
      parameter: "ROI",
      value: 24.8,
      unit: "%",
      target: 20,
      trend: "+2.3%",
      color: "#3b82f6",
    },
    {
      parameter: "Productivity",
      value: 145,
      unit: "units/hr",
      target: 140,
      trend: "+3.5%",
      color: "#f59e0b",
    },
    {
      parameter: "Labor Cost",
      value: 28,
      unit: "%",
      target: 30,
      trend: "-0.8%",
      color: "#8b5cf6",
    },
    {
      parameter: "Maintenance Cost",
      value: 4.2,
      unit: "%",
      target: 5,
      trend: "-0.3%",
      color: "#ef4444",
    },
  ];

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="overview" onValueChange={setViewMode}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="View Mode" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="detailed">Detailed</SelectItem>
              <SelectItem value="comparative">Comparative</SelectItem>
              <SelectItem value="trends">Trend Analysis</SelectItem>
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
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Tabs for Different Views */}
      <Tabs defaultValue="overall" className="w-full ">
        <TabsList className="grid grid-cols-6 lg:grid-cols-12 ">
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
                  Availability × Performance × Quality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {oeeData.map((item, index) => (
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
                <CardTitle>OEE Trend</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={productionMetrics}>
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
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productionMetrics}>
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
                    <Bar dataKey="scrap" fill="#ef4444" name="Scrap (units)" />
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
                <CardTitle>Production Line Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {equipmentPerformance.map((eq, index) => (
                    <div
                      key={index}
                      className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{eq.equipment}</span>
                        <Badge
                          variant={eq.uptime > 97 ? "default" : "secondary"}
                        >
                          {eq.uptime}% Uptime
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <div className="text-gray-500">Efficiency</div>
                          <div className="font-semibold text-emerald-600">
                            {eq.efficiency}%
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-500">MTTR</div>
                          <div className="font-semibold text-amber-600">
                            {eq.mttr} min
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-500">MTBF</div>
                          <div className="font-semibold text-blue-600">
                            {eq.mtbf} hrs
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
            {qualityData.map((item, index) => (
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
                    {typeof item.value === "number" && item.value < 100
                      ? item.value.toFixed(1)
                      : item.value}
                    {item.parameter.includes("Sigma")
                      ? "σ"
                      : item.parameter.includes("PPM")
                      ? ""
                      : "%"}
                  </div>
                  <Progress
                    value={item.value}
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
                {processParameters.map((param, index) => (
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
                      param.color
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
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {energyData.map((item, index) => (
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
                          <p className="text-sm text-gray-500">{item.unit}</p>
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
                            Cost: ${item.cost}
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
                      data={energyData.slice(0, 4)}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {energyData.slice(0, 4).map((entry, index) => (
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
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                {maintenanceData.map((item, index) => (
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
                  <BarChart data={equipmentPerformance}>
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {safetyMetrics.map((item, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-4 w-4" style={{ color: item.color }} />
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
                    <span className="text-gray-500">Target: {item.target}</span>
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
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {financialKPIs.map((item, index) => (
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
                      value={(item.value / item.target) * 100}
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
                <p className="text-2xl font-bold text-blue-900">12,450</p>
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
                <p className="text-2xl font-bold text-emerald-900">2.4M</p>
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
                <p className="text-2xl font-bold text-purple-900">98.2%</p>
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
                <p className="text-2xl font-bold text-amber-900">$124K</p>
                <p className="text-xs text-amber-600">This quarter</p>
              </div>
              <TrendingDown className="h-10 w-10 text-amber-600 opacity-70" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
