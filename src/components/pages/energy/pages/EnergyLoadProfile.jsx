import React, { useState } from "react";
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
  ComposedChart,
  ScatterChart,
  Scatter,
  ZAxis,
  ReferenceLine,
  ReferenceArea,
  Brush,
} from "recharts";

// Load profile data by hour
const hourlyLoadData = [
  { hour: "00:00", load: 420, base: 400, peak: 450, cost: 65 },
  { hour: "01:00", load: 380, base: 400, peak: 450, cost: 62 },
  { hour: "02:00", load: 350, base: 400, peak: 450, cost: 58 },
  { hour: "03:00", load: 320, base: 400, peak: 450, cost: 55 },
  { hour: "04:00", load: 340, base: 400, peak: 450, cost: 57 },
  { hour: "05:00", load: 420, base: 400, peak: 450, cost: 65 },
  { hour: "06:00", load: 520, base: 400, peak: 550, cost: 75 },
  { hour: "07:00", load: 680, base: 400, peak: 700, cost: 92 },
  { hour: "08:00", load: 820, base: 400, peak: 850, cost: 112 },
  { hour: "09:00", load: 950, base: 400, peak: 1000, cost: 135 },
  { hour: "10:00", load: 920, base: 400, peak: 950, cost: 128 },
  { hour: "11:00", load: 980, base: 400, peak: 1050, cost: 140 },
  { hour: "12:00", load: 850, base: 400, peak: 900, cost: 118 },
  { hour: "13:00", load: 720, base: 400, peak: 750, cost: 98 },
  { hour: "14:00", load: 850, base: 400, peak: 900, cost: 118 },
  { hour: "15:00", load: 920, base: 400, peak: 950, cost: 128 },
  { hour: "16:00", load: 980, base: 400, peak: 1050, cost: 140 },
  { hour: "17:00", load: 920, base: 400, peak: 950, cost: 128 },
  { hour: "18:00", load: 850, base: 400, peak: 900, cost: 118 },
  { hour: "19:00", load: 720, base: 400, peak: 750, cost: 98 },
  { hour: "20:00", load: 580, base: 400, peak: 600, cost: 82 },
  { hour: "21:00", load: 520, base: 400, peak: 550, cost: 75 },
  { hour: "22:00", load: 450, base: 400, peak: 500, cost: 68 },
  { hour: "23:00", load: 400, base: 400, peak: 450, cost: 65 },
];

// Daily load patterns
const dailyLoadPatterns = [
  { day: "Mon", avg: 720, peak: 980, offpeak: 520 },
  { day: "Tue", avg: 750, peak: 1020, offpeak: 550 },
  { day: "Wed", avg: 730, peak: 990, offpeak: 530 },
  { day: "Thu", avg: 780, peak: 1100, offpeak: 580 },
  { day: "Fri", avg: 760, peak: 1050, offpeak: 560 },
  { day: "Sat", avg: 680, peak: 920, offpeak: 480 },
  { day: "Sun", avg: 620, peak: 850, offpeak: 420 },
];

// Load factor analysis
const loadFactorData = [
  { time: "Night", load: 380, capacity: 1200, factor: 32 },
  { time: "Morning", load: 680, capacity: 1200, factor: 57 },
  { time: "Afternoon", load: 920, capacity: 1200, factor: 77 },
  { time: "Evening", load: 850, capacity: 1200, factor: 71 },
  { time: "Peak", load: 1050, capacity: 1200, factor: 88 },
];

// Peak demand analysis
const peakAnalysis = [
  {
    peak: "Morning Peak (08:00-10:00)",
    duration: "2h",
    avgLoad: 890,
    occurrences: 22,
  },
  {
    peak: "Afternoon Peak (14:00-16:00)",
    duration: "2h",
    avgLoad: 950,
    occurrences: 18,
  },
  {
    peak: "Evening Peak (18:00-20:00)",
    duration: "2h",
    avgLoad: 785,
    occurrences: 15,
  },
];

// Load shedding opportunities
const sheddingOpportunities = [
  {
    equipment: "Non-critical HVAC",
    reduction: "120 kW",
    duration: "2h",
    priority: "high",
  },
  {
    equipment: "Office Lighting",
    reduction: "85 kW",
    duration: "1h",
    priority: "medium",
  },
  {
    equipment: "Parking Lot Lights",
    reduction: "45 kW",
    duration: "3h",
    priority: "low",
  },
  {
    equipment: "Water Heaters",
    reduction: "65 kW",
    duration: "1.5h",
    priority: "medium",
  },
];

// Load profile metrics
const profileMetrics = [
  {
    title: "Current Load",
    value: "980 kW",
    change: "+12%",
    description: "vs last hour",
    color: "text-blue-600",
    icon: "⚡",
  },
  {
    title: "Peak Today",
    value: "1,100 kW",
    change: "+8%",
    description: "vs yesterday",
    color: "text-amber-600",
    icon: "📈",
  },
  {
    title: "Load Factor",
    value: "78%",
    change: "+5%",
    description: "utilization rate",
    color: "text-emerald-600",
    icon: "📊",
  },
  {
    title: "Base Load",
    value: "400 kW",
    change: "-2%",
    description: "minimum demand",
    color: "text-purple-600",
    icon: "📉",
  },
];

// Load forecast
const loadForecast = [
  { time: "Now", actual: 980, forecast: 975, confidence: 95 },
  { time: "+30m", actual: null, forecast: 920, confidence: 92 },
  { time: "+1h", actual: null, forecast: 850, confidence: 89 },
  { time: "+2h", actual: null, forecast: 780, confidence: 85 },
  { time: "+3h", actual: null, forecast: 720, confidence: 82 },
];

// Custom tooltip
const LoadTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xl">
        <p className="text-gray-900 font-semibold text-sm mb-3">{label}</p>
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
              <span className="text-gray-600">{entry.name}</span>
            </div>
            <span className="font-medium text-gray-900">
              {entry.name.includes("Cost")
                ? `$${entry.value}`
                : `${entry.value} kW`}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Status indicator
const PriorityBadge = ({ priority }) => {
  const config = {
    high: { color: "bg-red-100 text-red-800", label: "High" },
    medium: { color: "bg-amber-100 text-amber-800", label: "Medium" },
    low: { color: "bg-blue-100 text-blue-800", label: "Low" },
  };

  return (
    <Badge className={`${config[priority]?.color} border-0`}>
      {config[priority]?.label}
    </Badge>
  );
};

export default function EnergyLoadProfile() {
  const [timeRange, setTimeRange] = useState("hourly");
  const [peakThreshold, setPeakThreshold] = useState([900]);
  const [autoShedding, setAutoShedding] = useState(true);
  const [viewMode, setViewMode] = useState("load");

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-black p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Energy Load Profile Analysis
              </h1>
              <p className="text-blue-100 text-lg max-w-2xl">
                Advanced load pattern analysis, peak forecasting, and demand
                optimization
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-blue-100 text-sm">Live Load</div>
                <div className="text-white font-bold text-xl">980 kW</div>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg font-semibold">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Analyze Patterns
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {profileMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100 text-sm font-medium">
                    {metric.title}
                  </span>
                  <span className="text-2xl">{metric.icon}</span>
                </div>
                <div
                  className={`text-2xl font-bold text-white mb-1 ${metric.color}`}
                >
                  {metric.value}
                </div>
                <div className="flex items-center">
                  <Badge
                    className={
                      metric.change.startsWith("+")
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                    }
                  >
                    {metric.change}
                  </Badge>
                  <span className="text-blue-200 text-sm ml-2">
                    {metric.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Load Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Load Profile Chart */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl">
                    24-Hour Load Profile
                  </CardTitle>
                  <CardDescription>
                    Detailed load analysis with cost implications
                  </CardDescription>
                </div>
                <Tabs
                  defaultValue="hourly"
                  className="w-[300px]"
                  onValueChange={setTimeRange}
                >
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="hourly">Hourly</TabsTrigger>
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart
                  data={hourlyLoadData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="hour"
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: "Load (kW)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10,
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: "Cost ($)",
                      angle: 90,
                      position: "insideRight",
                      offset: -10,
                    }}
                  />
                  <Tooltip content={<LoadTooltip />} />
                  <Legend />
                  {/* FIX: Specify yAxisId for ReferenceLine */}
                  <ReferenceLine
                    y={peakThreshold[0]}
                    stroke="#EF4444"
                    strokeDasharray="3 3"
                    label={{
                      value: "Peak Threshold",
                      position: "insideTopRight",
                    }}
                    yAxisId="left"
                  />

                  {/* Peak threshold area - FIXED with yAxisId */}
                  <ReferenceArea
                    y1={peakThreshold[0]}
                    y2={1200}
                    fill="#FEE2E2"
                    fillOpacity={0.3}
                    yAxisId="left"
                  />

                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="peak"
                    stroke="#EF4444"
                    fill="#FEE2E2"
                    fillOpacity={0.1}
                    name="Peak Capacity"
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="base"
                    stroke="#10B981"
                    fill="#D1FAE5"
                    fillOpacity={0.1}
                    name="Base Load"
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="load"
                    stroke="#3B82F6"
                    fill="url(#colorLoad)"
                    name="Actual Load"
                    strokeWidth={2}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="cost"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    name="Hourly Cost"
                    dot={{ r: 3 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>

              {/* Load Summary */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">890 kW</div>
                  <div className="text-sm text-blue-600">Average Load</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="text-2xl font-bold text-amber-700">
                    1,100 kW
                  </div>
                  <div className="text-sm text-amber-600">Peak Load</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-700">78%</div>
                  <div className="text-sm text-emerald-600">Load Factor</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Load Factor Analysis */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Load Factor Analysis</CardTitle>
              <CardDescription>
                Utilization efficiency across time periods
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                      data={loadFactorData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="time" stroke="#6B7280" />
                      <YAxis
                        stroke="#6B7280"
                        label={{
                          value: "Load (kW)",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip />
                      <Bar
                        dataKey="load"
                        fill="#3B82F6"
                        name="Average Load"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="capacity"
                        fill="#E5E7EB"
                        name="Capacity"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {loadFactorData.map((period, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{period.time}</span>
                        <span className="font-semibold">{period.factor}%</span>
                      </div>
                      <Progress
                        value={period.factor}
                        className="h-2"
                        indicatorClassName={
                          period.factor > 85
                            ? "bg-red-500"
                            : period.factor > 70
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{period.load} kW load</span>
                        <span>{period.capacity} kW capacity</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Controls & Analysis */}
        <div className="space-y-6">
          {/* Peak Analysis */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Peak Demand Analysis</CardTitle>
              <CardDescription>
                Identify and manage peak periods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {peakAnalysis.map((peak, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">{peak.peak}</div>
                        <div className="text-sm text-gray-500">
                          Duration: {peak.duration}
                        </div>
                      </div>
                      <Badge className="bg-red-100 text-red-800">
                        {peak.avgLoad} kW
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {peak.occurrences} occurrences
                      </span>
                      <span className="font-medium text-amber-600">
                        Manage Peak
                      </span>
                    </div>
                  </div>
                ))}

                <div className="space-y-3 mt-4">
                  <div className="flex justify-between">
                    <Label className="font-semibold">Peak Threshold</Label>
                    <span className="font-semibold text-blue-600">
                      {peakThreshold[0]} kW
                    </span>
                  </div>
                  <Slider
                    value={peakThreshold}
                    onValueChange={setPeakThreshold}
                    min={600}
                    max={1100}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Load Forecasting */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Load Forecasting</CardTitle>
              <CardDescription>AI-powered load predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {loadForecast.map((forecast, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="font-medium">{forecast.time}</div>
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        {forecast.actual
                          ? `${forecast.actual} kW`
                          : `${forecast.forecast} kW`}
                      </div>
                      {!forecast.actual && (
                        <div className="text-sm text-gray-500">
                          {forecast.confidence}% confidence
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      Next Peak Prediction
                    </h4>
                    <p className="text-sm text-blue-600">
                      Expected at 16:30 (1,050 kW)
                    </p>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800">
                    ⚠️ Alert
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Load Control */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Load Control Settings</CardTitle>
              <CardDescription>
                Configure automated load management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-semibold">Auto Load Shedding</Label>
                  <p className="text-sm text-gray-500">
                    Automatically reduce load during peaks
                  </p>
                </div>
                <Switch
                  checked={autoShedding}
                  onCheckedChange={setAutoShedding}
                />
              </div>

              <div className="space-y-2">
                <Label className="font-semibold">View Mode</Label>
                <Select defaultValue="load" onValueChange={setViewMode}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select view" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="load">Load Profile</SelectItem>
                    <SelectItem value="cost">Cost Analysis</SelectItem>
                    <SelectItem value="efficiency">Efficiency View</SelectItem>
                    <SelectItem value="forecast">Forecast View</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold">Load Alerts</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Peak Threshold Alert</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Rapid Increase Alert</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Low Load Alert</span>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Load Shedding Opportunities */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">
              Load Shedding Opportunities
            </CardTitle>
            <CardDescription>
              Identify potential load reduction areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sheddingOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white transition-all duration-200 border"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-bold">
                        {opportunity.reduction.split(" ")[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {opportunity.equipment}
                      </div>
                      <div className="text-sm text-gray-500">
                        Duration: {opportunity.duration}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <PriorityBadge priority={opportunity.priority} />
                    <div className="text-sm text-gray-500 mt-1">
                      Potential savings
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-emerald-800">
                    Total Reduction Potential
                  </h4>
                  <p className="text-sm text-emerald-600">
                    315 kW across all opportunities
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-2xl text-emerald-600">
                    $4,200
                  </div>
                  <div className="text-sm text-emerald-600">
                    Monthly savings
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Patterns */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Weekly Load Patterns</CardTitle>
            <CardDescription>Daily average load analysis</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={dailyLoadPatterns}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="day" stroke="#6B7280" />
                    <YAxis
                      stroke="#6B7280"
                      label={{
                        value: "Load (kW)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip />
                    <Bar
                      dataKey="peak"
                      fill="#EF4444"
                      name="Peak Load"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="avg"
                      fill="#3B82F6"
                      name="Average Load"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="offpeak"
                      fill="#10B981"
                      name="Off-peak Load"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="text-sm text-blue-600 font-medium">
                      Highest Peak
                    </div>
                    <div className="text-2xl font-bold text-blue-800 mt-1">
                      1,100 kW
                    </div>
                    <div className="text-sm text-blue-600">Thursday</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
                    <div className="text-sm text-emerald-600 font-medium">
                      Weekly Average
                    </div>
                    <div className="text-2xl font-bold text-emerald-800 mt-1">
                      720 kW
                    </div>
                    <div className="text-sm text-emerald-600">7-day avg</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Pattern Insights
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">
                        Thursday is consistently the highest
                      </span>
                      <Badge className="bg-red-100 text-red-800">Peak</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">
                        Weekends show 20% lower load
                      </span>
                      <Badge className="bg-emerald-100 text-emerald-800">
                        Low
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">
                        Monday morning shows rapid increase
                      </span>
                      <Badge className="bg-amber-100 text-amber-800">
                        Alert
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Panel */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl shadow-sm border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Load Profile Optimization
            </h3>
            <p className="text-gray-600">
              Implement load shifting, peak shaving, and demand response
              strategies
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Export Profile
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
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
              Optimize Now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Load Shifting Potential</div>
            <div className="text-2xl font-bold text-emerald-600">220 kW</div>
            <div className="text-xs text-gray-500">Shift to off-peak hours</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Peak Reduction</div>
            <div className="text-2xl font-bold text-blue-600">15%</div>
            <div className="text-xs text-gray-500">Target achievable</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Monthly Savings</div>
            <div className="text-2xl font-bold text-purple-600">$8,500</div>
            <div className="text-xs text-gray-500">With optimizations</div>
          </div>
        </div>
      </div>
    </div>
  );
}
