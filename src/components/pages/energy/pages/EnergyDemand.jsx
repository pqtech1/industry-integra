import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  ScatterChart,
  Scatter,
  ZAxis,
  ReferenceLine,
  ReferenceArea,
  Brush,
} from "recharts";

// Mock data for real-time demand
const realTimeDemand = [
  { time: "00:00", demand: 420, capacity: 800, threshold: 700 },
  { time: "02:00", demand: 380, capacity: 800, threshold: 700 },
  { time: "04:00", demand: 350, capacity: 800, threshold: 700 },
  { time: "06:00", demand: 520, capacity: 800, threshold: 700 },
  { time: "08:00", demand: 680, capacity: 800, threshold: 700 },
  { time: "10:00", demand: 820, capacity: 800, threshold: 700 },
  { time: "12:00", demand: 950, capacity: 800, threshold: 700 },
  { time: "14:00", demand: 920, capacity: 800, threshold: 700 },
  { time: "16:00", demand: 980, capacity: 800, threshold: 700 },
  { time: "18:00", demand: 850, capacity: 800, threshold: 700 },
  { time: "20:00", demand: 720, capacity: 800, threshold: 700 },
  { time: "22:00", demand: 580, capacity: 800, threshold: 700 },
];

// Forecast data
const demandForecast = [
  { hour: "Now", actual: 980, predicted: 975, confidence: 95 },
  { hour: "+1h", actual: null, predicted: 920, confidence: 92 },
  { hour: "+2h", actual: null, predicted: 850, confidence: 89 },
  { hour: "+3h", actual: null, predicted: 780, confidence: 85 },
  { hour: "+4h", actual: null, predicted: 720, confidence: 82 },
  { hour: "+5h", actual: null, predicted: 680, confidence: 80 },
  { hour: "+6h", actual: null, predicted: 650, confidence: 78 },
];

// Load distribution by zone
const zoneDistribution = [
  { zone: "Production", demand: 4200, capacity: 5000, status: "high" },
  { zone: "Office", demand: 2800, capacity: 3500, status: "optimal" },
  { zone: "Warehouse", demand: 3500, capacity: 4000, status: "medium" },
  { zone: "Lab", demand: 1900, capacity: 2500, status: "optimal" },
  { zone: "Common", demand: 1200, capacity: 2000, status: "low" },
];

// Equipment load breakdown
const equipmentLoad = [
  { equipment: "HVAC-1", load: 42, status: "optimal", peak: 85 },
  { equipment: "HVAC-2", load: 38, status: "optimal", peak: 82 },
  { equipment: "Compressors", load: 65, status: "warning", peak: 90 },
  { equipment: "Lighting", load: 28, status: "optimal", peak: 45 },
  { equipment: "Servers", load: 58, status: "warning", peak: 75 },
  { equipment: "Machines", load: 72, status: "critical", peak: 95 },
];

// Demand response events
const demandEvents = [
  {
    time: "09:30",
    action: "Peak Shaving",
    reduction: "120 kW",
    duration: "2h",
    status: "completed",
  },
  {
    time: "12:15",
    action: "Load Shifting",
    reduction: "85 kW",
    duration: "1.5h",
    status: "completed",
  },
  {
    time: "15:45",
    action: "DR Event",
    reduction: "200 kW",
    duration: "3h",
    status: "active",
  },
  {
    time: "18:00",
    action: "Scheduled",
    reduction: "150 kW",
    duration: "2h",
    status: "scheduled",
  },
];

// Historical peak demand
const historicalPeaks = [
  { date: "Mon", peak: 980, avg: 720 },
  { date: "Tue", peak: 1020, avg: 750 },
  { date: "Wed", peak: 990, avg: 730 },
  { date: "Thu", peak: 1100, avg: 780 },
  { date: "Fri", peak: 1050, avg: 760 },
  { date: "Sat", peak: 920, avg: 680 },
  { date: "Sun", peak: 850, avg: 620 },
];

// Demand stats
const demandStats = [
  {
    title: "Current Demand",
    value: "980 kW",
    change: "+12%",
    description: "vs last hour",
    color: "text-blue-600",
    icon: "⚡",
    status: "high",
  },
  {
    title: "Peak Today",
    value: "1,100 kW",
    change: "+8%",
    description: "vs yesterday",
    color: "text-amber-600",
    icon: "📈",
    status: "peak",
  },
  {
    title: "Capacity Usage",
    value: "85%",
    change: "+5%",
    description: "of total capacity",
    color: "text-purple-600",
    icon: "📊",
    status: "warning",
  },
  {
    title: "Demand Response",
    value: "200 kW",
    change: "Active",
    description: "load reduction",
    color: "text-emerald-600",
    icon: "🔄",
    status: "active",
  },
];

// Custom tooltip for demand charts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/95 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-2xl min-w-[220px]">
        <p className="text-white font-semibold text-sm mb-3">{label}</p>
        {payload.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm mb-2"
          >
            <div className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-300">{entry.name}</span>
            </div>
            <span className="font-medium text-white">{entry.value} kW</span>
          </div>
        ))}
        {payload[0]?.payload?.threshold && (
          <div className="pt-2 border-t border-gray-700 mt-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Threshold:</span>
              <span>{payload[0]?.payload?.threshold} kW</span>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Capacity:</span>
              <span>{payload[0]?.payload?.capacity} kW</span>
            </div>
          </div>
        )}
      </div>
    );
  }
  return null;
};

// Status indicator component
const StatusIndicator = ({ status }) => {
  const statusConfig = {
    optimal: { color: "bg-emerald-500", label: "Optimal" },
    warning: { color: "bg-amber-500", label: "Warning" },
    critical: { color: "bg-red-500", label: "Critical" },
    high: { color: "bg-blue-500", label: "High" },
    low: { color: "bg-gray-400", label: "Low" },
  };

  const config = statusConfig[status] || statusConfig.optimal;

  return (
    <div className="flex items-center">
      <div className={`w-2 h-2 rounded-full mr-2 ${config.color}`} />
      <span className="text-sm">{config.label}</span>
    </div>
  );
};

export default function EnergyDemand() {
  const [timeRange, setTimeRange] = useState("realtime");
  const [autoResponse, setAutoResponse] = useState(true);
  const [demandThreshold, setDemandThreshold] = useState([700]);
  const [simulationMode, setSimulationMode] = useState(false);

  // Simulate real-time updates
  const [currentDemand, setCurrentDemand] = useState(980);
  const [demandHistory, setDemandHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 40) - 20; // -20 to +20
      const newDemand = Math.max(
        300,
        Math.min(1100, currentDemand + randomChange)
      );
      setCurrentDemand(newDemand);

      // Update history
      setDemandHistory((prev) => {
        const newHistory = [
          ...prev,
          {
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            demand: newDemand,
          },
        ];
        return newHistory.slice(-10); // Keep last 10 readings
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentDemand]);

  // Calculate demand metrics
  const capacityUsage = Math.round((currentDemand / 1200) * 100);
  const demandStatus =
    currentDemand > 1000
      ? "critical"
      : currentDemand > 900
      ? "warning"
      : "optimal";

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header with Animated Background */}
      <div className="relative overflow-hidden rounded-2xl bg-black p-6 md:p-8 shadow-2xl">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-full translate-y-32 -translate-x-32" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Energy Demand Intelligence
              </h1>
              <p className="text-blue-100 text-lg max-w-2xl">
                Real-time monitoring, forecasting, and automated demand response
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-blue-100 text-sm">Live Update</div>
                <div className="text-white font-bold text-xl">
                  {currentDemand} kW
                </div>
              </div>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg font-semibold">
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                DR Event
              </Button>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {demandStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100 text-sm font-medium">
                    {stat.title}
                  </span>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div
                  className={`text-2xl font-bold text-white mb-1 ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="flex items-center">
                  <Badge
                    className={
                      stat.status === "high"
                        ? "bg-red-500/20 text-red-300 border-red-500/30"
                        : stat.status === "peak"
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                        : stat.status === "warning"
                        ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                        : stat.status === "active"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                    }
                  >
                    {stat.change}
                  </Badge>
                  <span className="text-blue-200 text-sm ml-2">
                    {stat.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Real-time Monitoring */}
        <div className="lg:col-span-2 space-y-6">
          {/* Real-time Demand Chart */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    Real-time Demand Monitoring
                    <div className="ml-3 flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full mr-1 ${
                          demandStatus === "critical"
                            ? "bg-red-500 animate-pulse"
                            : demandStatus === "warning"
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }`}
                      />
                      <span className="text-sm font-normal capitalize">
                        {demandStatus}
                      </span>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Live demand tracking with threshold alerts
                  </CardDescription>
                </div>
                <Tabs
                  defaultValue="realtime"
                  className="w-[300px]"
                  onValueChange={setTimeRange}
                >
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="realtime">Live</TabsTrigger>
                    <TabsTrigger value="hourly">Hourly</TabsTrigger>
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart
                  data={realTimeDemand}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E5E7EB"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="time"
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: "Demand (kW)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <ReferenceLine
                    y={demandThreshold[0]}
                    stroke="#EF4444"
                    strokeDasharray="3 3"
                    label={{ value: "Threshold", position: "insideTopRight" }}
                  />
                  <ReferenceLine
                    y={800}
                    stroke="#10B981"
                    strokeDasharray="3 3"
                    label={{ value: "Capacity", position: "insideTopRight" }}
                  />

                  {/* Warning area */}
                  <ReferenceArea
                    y1={demandThreshold[0]}
                    y2={800}
                    fill="#FEF3C7"
                    fillOpacity={0.3}
                  />

                  {/* Critical area */}
                  <ReferenceArea
                    y1={800}
                    y2={1200}
                    fill="#FEE2E2"
                    fillOpacity={0.3}
                  />

                  <Area
                    type="monotone"
                    dataKey="capacity"
                    stroke="#10B981"
                    strokeWidth={0}
                    fill="#10B981"
                    fillOpacity={0.1}
                    name="Capacity"
                  />
                  <Area
                    type="monotone"
                    dataKey="threshold"
                    stroke="#EF4444"
                    strokeWidth={0}
                    fill="#EF4444"
                    fillOpacity={0.1}
                    name="Threshold"
                  />
                  <Line
                    type="monotone"
                    dataKey="demand"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                    name="Current Demand"
                  />
                  <Brush dataKey="time" height={30} stroke="#8884d8" />
                </ComposedChart>
              </ResponsiveContainer>

              {/* Live Meter */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Live Demand Meter
                    </h4>
                    <p className="text-sm text-gray-600">
                      Updated every 5 seconds
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">
                      {currentDemand} kW
                    </div>
                    <div className="text-sm text-gray-500">Current load</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Capacity Usage</span>
                    <span className="font-semibold">{capacityUsage}%</span>
                  </div>
                  <Progress
                    value={capacityUsage}
                    className="h-3"
                    indicatorClassName={
                      capacityUsage > 90
                        ? "bg-red-500"
                        : capacityUsage > 75
                        ? "bg-amber-500"
                        : "bg-emerald-500"
                    }
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0%</span>
                    <span>Threshold ({demandThreshold[0]} kW)</span>
                    <span>Capacity (1200 kW)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demand Forecast */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="text-xl">
                Demand Forecast & Predictions
              </CardTitle>
              <CardDescription>
                AI-powered demand forecasting with confidence intervals
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                      data={demandForecast}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="hour" stroke="#6B7280" />
                      <YAxis
                        stroke="#6B7280"
                        label={{
                          value: "Demand (kW)",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip />
                      <Bar
                        dataKey="predicted"
                        fill="#8B5CF6"
                        name="Predicted Demand"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="actual"
                        fill="#3B82F6"
                        name="Actual Demand"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-sm text-purple-600 font-medium">
                        Forecast Accuracy
                      </div>
                      <div className="text-2xl font-bold text-purple-800 mt-1">
                        94%
                      </div>
                      <div className="text-sm text-purple-600">
                        Historical accuracy
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                      <div className="text-sm text-blue-600 font-medium">
                        Peak Prediction
                      </div>
                      <div className="text-2xl font-bold text-blue-800 mt-1">
                        1,050 kW
                      </div>
                      <div className="text-sm text-blue-600">
                        Expected at 16:30
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {demandForecast.slice(1, 4).map((forecast, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <div className="font-medium">{forecast.hour}</div>
                          <div className="text-sm text-gray-500">
                            Predicted: {forecast.predicted} kW
                          </div>
                        </div>
                        <Badge
                          className={
                            forecast.confidence > 90
                              ? "bg-emerald-100 text-emerald-800"
                              : forecast.confidence > 80
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                          }
                        >
                          {forecast.confidence}% confidence
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Controls & Status */}
        <div className="space-y-6">
          {/* Demand Control Panel */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800">
              <CardTitle className="text-xl text-white">
                Demand Control Center
              </CardTitle>
              <CardDescription className="text-gray-300">
                Real-time control and automation
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Auto Response */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border">
                  <div className="space-y-1">
                    <Label className="font-semibold text-blue-800">
                      Auto-Demand Response
                    </Label>
                    <p className="text-sm text-blue-600">
                      Automatically reduce load during peaks
                    </p>
                  </div>
                  <Switch
                    checked={autoResponse}
                    onCheckedChange={setAutoResponse}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>

                {/* Threshold Control */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label className="font-semibold">Demand Threshold</Label>
                    <span className="font-semibold text-blue-600">
                      {demandThreshold[0]} kW
                    </span>
                  </div>
                  <Slider
                    value={demandThreshold}
                    onValueChange={setDemandThreshold}
                    min={400}
                    max={900}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Conservative</span>
                    <span>Moderate</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <Label className="font-semibold">
                    Quick Response Actions
                  </Label>
                  {[
                    {
                      action: "Shed Non-critical Load",
                      reduction: "150 kW",
                      time: "Immediate",
                    },
                    {
                      action: "Reduce HVAC Load",
                      reduction: "80 kW",
                      time: "5 min",
                    },
                    {
                      action: "Shift to Backup",
                      reduction: "200 kW",
                      time: "2 min",
                    },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start hover:bg-blue-50"
                    >
                      <div className="flex-1 text-left">
                        <div className="font-medium">{item.action}</div>
                        <div className="text-sm text-gray-500">
                          Reduce {item.reduction} in {item.time}
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Activate
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Execute Optimization
              </Button>
            </CardFooter>
          </Card>

          {/* Zone Load Distribution */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">Zone Load Distribution</CardTitle>
              <CardDescription>
                Real-time load across facility zones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {zoneDistribution.map((zone, index) => {
                  const usage = Math.round((zone.demand / zone.capacity) * 100);
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <div className="font-medium">{zone.zone}</div>
                        <StatusIndicator status={zone.status} />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>
                          {zone.demand.toLocaleString()} kW /{" "}
                          {zone.capacity.toLocaleString()} kW
                        </span>
                        <span className="font-semibold">{usage}%</span>
                      </div>
                      <Progress
                        value={usage}
                        className="h-2"
                        indicatorClassName={
                          zone.status === "high"
                            ? "bg-red-500"
                            : zone.status === "medium"
                            ? "bg-amber-500"
                            : zone.status === "optimal"
                            ? "bg-emerald-500"
                            : "bg-gray-400"
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Equipment Load Monitoring */}
        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
            <CardTitle className="text-xl">Equipment Load Monitoring</CardTitle>
            <CardDescription>
              Individual equipment performance and load
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {equipmentLoad.map((equipment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white transition-all duration-200 border"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        equipment.status === "critical"
                          ? "bg-red-100 text-red-600"
                          : equipment.status === "warning"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      <span className="font-bold text-lg">
                        {equipment.load}%
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{equipment.equipment}</div>
                      <div className="text-sm text-gray-500">
                        Peak: {equipment.peak}%
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <StatusIndicator status={equipment.status} />
                    <div className="text-sm text-gray-500 mt-1">
                      Load factor
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-red-800">
                    Critical Load Alert
                  </h4>
                  <p className="text-sm text-red-600">
                    Machine load exceeds 70% threshold
                  </p>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Take Action
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demand Response Events */}
        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
            <CardTitle className="text-xl">Demand Response Events</CardTitle>
            <CardDescription>
              Active and scheduled load management
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {demandEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white transition-all duration-200 border"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        event.status === "active"
                          ? "bg-emerald-100 text-emerald-600 animate-pulse"
                          : event.status === "completed"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {event.status === "active"
                        ? "▶️"
                        : event.status === "completed"
                        ? "✅"
                        : "⏰"}
                    </div>
                    <div>
                      <div className="font-semibold">{event.action}</div>
                      <div className="text-sm text-gray-500">
                        {event.time} • {event.duration}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-600">
                      {event.reduction}
                    </div>
                    <Badge
                      className={
                        event.status === "active"
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                          : event.status === "completed"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }
                    >
                      {event.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-blue-800">Next DR Event</h4>
                  <p className="text-sm text-blue-600">
                    Scheduled for 18:00 (150 kW reduction)
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
                >
                  Prepare
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Historical Peak Analysis */}
      <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <CardTitle className="text-xl">
                Historical Peak Analysis
              </CardTitle>
              <CardDescription className="text-gray-300">
                Weekly peak demand patterns and trends
              </CardDescription>
            </div>
            <Button
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              View Trends
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={historicalPeaks}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <defs>
                    <linearGradient id="colorPeak" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="peak"
                    stroke="#EF4444"
                    fill="url(#colorPeak)"
                    name="Peak Demand"
                  />
                  <Area
                    type="monotone"
                    dataKey="avg"
                    stroke="#3B82F6"
                    fill="url(#colorAvg)"
                    name="Average Demand"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
                  <div className="text-sm text-red-600 font-medium">
                    Highest Peak
                  </div>
                  <div className="text-2xl font-bold text-red-800 mt-1">
                    1,100 kW
                  </div>
                  <div className="text-sm text-red-600">Thursday at 16:30</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                  <div className="text-sm text-blue-600 font-medium">
                    Weekly Average
                  </div>
                  <div className="text-2xl font-bold text-blue-800 mt-1">
                    720 kW
                  </div>
                  <div className="text-sm text-blue-600">7-day rolling avg</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">
                  Peak Reduction Opportunities
                </h4>
                {[
                  {
                    day: "Thursday",
                    peak: 1100,
                    target: 950,
                    savings: "150 kW",
                  },
                  {
                    day: "Tuesday",
                    peak: 1020,
                    target: 900,
                    savings: "120 kW",
                  },
                  { day: "Friday", peak: 1050, target: 920, savings: "130 kW" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="font-medium">{item.day}</div>
                    <div className="text-sm text-gray-500">
                      Peak: {item.peak} kW
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                      Save {item.savings}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
