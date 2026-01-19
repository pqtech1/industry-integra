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
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart,
  RadialBar,
} from "recharts";

// Renewable metrics
const renewableMetrics = [
  {
    title: "Solar Generation",
    value: "1,240 kW",
    change: "+15%",
    description: "current output",
    color: "text-amber-600",
    icon: "☀️",
    status: "optimal",
  },
  {
    title: "Wind Generation",
    value: "850 kW",
    change: "+8%",
    description: "current output",
    color: "text-blue-600",
    icon: "💨",
    status: "optimal",
  },
  {
    title: "Renewable Share",
    value: "62%",
    change: "+5%",
    description: "of total energy",
    color: "text-emerald-600",
    icon: "🌿",
    status: "good",
  },
  {
    title: "Carbon Avoided",
    value: "8.5 t",
    change: "-12%",
    description: "CO2 reduction today",
    color: "text-green-600",
    icon: "🌍",
    status: "excellent",
  },
];

// Solar generation data
const solarGenerationData = [
  { hour: "06:00", generation: 45, capacity: 1200, irradiance: 150 },
  { hour: "07:00", generation: 120, capacity: 1200, irradiance: 320 },
  { hour: "08:00", generation: 280, capacity: 1200, irradiance: 580 },
  { hour: "09:00", generation: 420, capacity: 1200, irradiance: 780 },
  { hour: "10:00", generation: 580, capacity: 1200, irradiance: 920 },
  { hour: "11:00", generation: 720, capacity: 1200, irradiance: 1050 },
  { hour: "12:00", generation: 850, capacity: 1200, irradiance: 1200 },
  { hour: "13:00", generation: 920, capacity: 1200, irradiance: 1150 },
  { hour: "14:00", generation: 840, capacity: 1200, irradiance: 980 },
  { hour: "15:00", generation: 680, capacity: 1200, irradiance: 820 },
  { hour: "16:00", generation: 450, capacity: 1200, irradiance: 620 },
  { hour: "17:00", generation: 220, capacity: 1200, irradiance: 380 },
  { hour: "18:00", generation: 80, capacity: 1200, irradiance: 180 },
];

// Wind generation data
const windGenerationData = [
  { hour: "00:00", generation: 420, speed: 8.5, capacity: 1000 },
  { hour: "02:00", generation: 380, speed: 7.8, capacity: 1000 },
  { hour: "04:00", generation: 450, speed: 9.2, capacity: 1000 },
  { hour: "06:00", generation: 520, speed: 10.5, capacity: 1000 },
  { hour: "08:00", generation: 580, speed: 11.2, capacity: 1000 },
  { hour: "10:00", generation: 650, speed: 12.0, capacity: 1000 },
  { hour: "12:00", generation: 720, speed: 12.8, capacity: 1000 },
  { hour: "14:00", generation: 680, speed: 12.0, capacity: 1000 },
  { hour: "16:00", generation: 620, speed: 11.0, capacity: 1000 },
  { hour: "18:00", generation: 550, speed: 10.0, capacity: 1000 },
  { hour: "20:00", generation: 480, speed: 9.0, capacity: 1000 },
  { hour: "22:00", generation: 420, speed: 8.5, capacity: 1000 },
];

// Renewable mix breakdown
const renewableMix = [
  { source: "Solar PV", percentage: 45, capacity: 2400, color: "#F59E0B" },
  { source: "Wind Turbines", percentage: 32, capacity: 1800, color: "#3B82F6" },
  { source: "Hydro Power", percentage: 15, capacity: 800, color: "#0EA5E9" },
  { source: "Biomass", percentage: 8, capacity: 400, color: "#10B981" },
];

// Solar farm performance
const solarFarms = [
  {
    farm: "North Campus",
    capacity: 800,
    output: 420,
    efficiency: 85,
    status: "optimal",
  },
  {
    farm: "South Field",
    capacity: 600,
    output: 320,
    efficiency: 80,
    status: "optimal",
  },
  {
    farm: "West Facility",
    capacity: 400,
    output: 180,
    efficiency: 72,
    status: "warning",
  },
  {
    farm: "East Rooftop",
    capacity: 200,
    output: 95,
    efficiency: 78,
    status: "good",
  },
  {
    farm: "Central Array",
    capacity: 400,
    output: 225,
    efficiency: 90,
    status: "excellent",
  },
];

// Wind turbine performance
const windTurbines = [
  {
    turbine: "WT-01",
    capacity: 2.5,
    output: 2.1,
    availability: 96,
    status: "optimal",
  },
  {
    turbine: "WT-02",
    capacity: 2.5,
    output: 2.0,
    availability: 94,
    status: "good",
  },
  {
    turbine: "WT-03",
    capacity: 2.5,
    output: 1.8,
    availability: 85,
    status: "warning",
  },
  {
    turbine: "WT-04",
    capacity: 2.5,
    output: 2.2,
    availability: 98,
    status: "optimal",
  },
  {
    turbine: "WT-05",
    capacity: 2.5,
    output: 1.9,
    availability: 90,
    status: "good",
  },
];

// Renewable projects
const renewableProjects = [
  {
    project: "Solar Expansion Phase 2",
    type: "Solar",
    capacity: "500 kW",
    progress: 65,
    completion: "2024-Q3",
  },
  {
    project: "Wind Farm Upgrade",
    type: "Wind",
    capacity: "1.2 MW",
    progress: 40,
    completion: "2024-Q4",
  },
  {
    project: "Energy Storage System",
    type: "Storage",
    capacity: "2 MWh",
    progress: 85,
    completion: "2024-Q2",
  },
  {
    project: "Hydro Microturbine",
    type: "Hydro",
    capacity: "200 kW",
    progress: 25,
    completion: "2025-Q1",
  },
];

// Environmental impact
const environmentalImpact = [
  {
    metric: "Trees Equivalent",
    value: "42,000",
    description: "carbon sequestration",
  },
  { metric: "Cars Off Road", value: "1,850", description: "emissions avoided" },
  { metric: "Homes Powered", value: "3,200", description: "annual average" },
  { metric: "Water Saved", value: "8.5 ML", description: "vs thermal plants" },
];

// Custom tooltip
const RenewableTooltip = ({ active, payload, label }) => {
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
              {entry.value}{" "}
              {entry.unit ||
                (entry.name.includes("Irradiance") ? "W/m²" : "kW")}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Status indicator
const StatusBadge = ({ status }) => {
  const config = {
    optimal: { color: "bg-emerald-100 text-emerald-800", label: "Optimal" },
    excellent: { color: "bg-green-100 text-green-800", label: "Excellent" },
    good: { color: "bg-blue-100 text-blue-800", label: "Good" },
    warning: { color: "bg-amber-100 text-amber-800", label: "Warning" },
    critical: { color: "bg-red-100 text-red-800", label: "Critical" },
  };

  return (
    <Badge className={`${config[status]?.color} border-0`}>
      {config[status]?.label}
    </Badge>
  );
};

export default function EnergyRenewables() {
  const [timeRange, setTimeRange] = useState("hourly");
  const [renewableSource, setRenewableSource] = useState("all");
  const [storageTarget, setStorageTarget] = useState([75]);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-black p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500  rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-600 rounded-full translate-y-24 -translate-x-24" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Renewable Energy Dashboard
              </h1>
              <p className="text-amber-100 text-lg max-w-2xl">
                Monitor solar, wind, and renewable energy generation with
                environmental impact tracking
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-amber-100 text-sm">Renewable Share</div>
                <div className="text-white font-bold text-xl">62%</div>
              </div>
              <Button className="bg-white text-amber-600 hover:bg-amber-50 shadow-lg font-semibold">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Project
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {renewableMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-100 text-sm font-medium">
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
                      metric.status === "optimal"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : metric.status === "good"
                        ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                        : metric.status === "excellent"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                    }
                  >
                    {metric.change}
                  </Badge>
                  <span className="text-amber-200 text-sm ml-2">
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
        {/* Left Column - Generation Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Solar Generation */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl">
                    Solar Generation Profile
                  </CardTitle>
                  <CardDescription>
                    Daily solar output with solar irradiance
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
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart
                  data={solarGenerationData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorIrradiance"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
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
                      value: "Generation (kW)",
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
                      value: "Irradiance (W/m²)",
                      angle: 90,
                      position: "insideRight",
                      offset: -10,
                    }}
                  />
                  <Tooltip content={<RenewableTooltip />} />
                  <Legend />

                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="capacity"
                    stroke="#E5E7EB"
                    fill="#E5E7EB"
                    fillOpacity={0.1}
                    name="Capacity"
                    strokeWidth={1}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="generation"
                    stroke="#F59E0B"
                    fill="url(#colorSolar)"
                    name="Solar Generation"
                    strokeWidth={3}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="irradiance"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    name="Solar Irradiance"
                    dot={{ r: 3 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>

              {/* Solar Summary */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="text-2xl font-bold text-amber-700">
                    920 kW
                  </div>
                  <div className="text-sm text-amber-600">Peak Generation</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-700">78%</div>
                  <div className="text-sm text-emerald-600">
                    Capacity Factor
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">
                    1,200 W/m²
                  </div>
                  <div className="text-sm text-purple-600">Peak Irradiance</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Renewable Mix */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Renewable Energy Mix</CardTitle>
              <CardDescription>
                Breakdown of renewable sources and capacities
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={renewableMix}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="percentage"
                      >
                        {renewableMix.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Share"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {renewableMix.map((source, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: source.color }}
                          />
                          <span className="font-medium">{source.source}</span>
                        </div>
                        <span className="font-semibold">
                          {source.percentage}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          Capacity: {source.capacity} kW
                        </span>
                        <span className="text-gray-500">
                          Output: {Math.round(source.capacity * 0.7)} kW
                        </span>
                      </div>
                      <Progress
                        value={source.percentage}
                        className="h-2"
                        indicatorClassName="bg-current"
                        style={{ color: source.color }}
                      />
                    </div>
                  ))}

                  <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-emerald-800">
                          Renewable Target
                        </h4>
                        <p className="text-sm text-emerald-600">75% by 2025</p>
                      </div>
                      <Progress
                        value={62}
                        className="w-32 h-3"
                        indicatorClassName="bg-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Controls & Performance */}
        <div className="space-y-6">
          {/* Wind Generation */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Wind Generation</CardTitle>
              <CardDescription>
                Wind turbine output and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={windGenerationData.slice(0, 8)}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="hour" stroke="#6B7280" />
                    <YAxis
                      stroke="#6B7280"
                      label={{
                        value: "Generation (kW)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip />
                    <Bar
                      dataKey="generation"
                      fill="#3B82F6"
                      name="Wind Generation"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-2xl font-bold text-blue-700">
                      12.8 m/s
                    </div>
                    <div className="text-sm text-blue-600">Peak Wind Speed</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-700">
                      72%
                    </div>
                    <div className="text-sm text-emerald-600">
                      Capacity Factor
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Storage Management */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Energy Storage</CardTitle>
              <CardDescription>
                Battery storage and dispatch management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-600 mb-2">
                  {storageTarget[0]}%
                </div>
                <div className="text-sm text-gray-600">
                  Storage Target Level
                </div>
                <Progress
                  value={storageTarget[0]}
                  className="h-3 mt-2"
                  indicatorClassName="bg-emerald-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="font-semibold">Storage Strategy</Label>
                  <Select defaultValue="peak-shaving">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Strategy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="peak-shaving">Peak Shaving</SelectItem>
                      <SelectItem value="self-consumption">
                        Self-Consumption
                      </SelectItem>
                      <SelectItem value="revenue">
                        Revenue Generation
                      </SelectItem>
                      <SelectItem value="backup">Backup Power</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="font-semibold">Storage Level</Label>
                    <span className="font-semibold text-emerald-600">
                      {storageTarget[0]}%
                    </span>
                  </div>
                  <Slider
                    value={storageTarget}
                    onValueChange={setStorageTarget}
                    min={20}
                    max={95}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Min</span>
                    <span>Optimal</span>
                    <span>Max</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Charge: 65%</span>
                    <span className="font-medium text-emerald-600">
                      4.2 MWh
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Discharge Rate: 250 kW
                    </span>
                    <span className="font-medium text-blue-600">Charging</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                Dispatch Storage
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Renewable Controls</CardTitle>
              <CardDescription>
                Quick actions and system controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-semibold">Auto Optimization</Label>
                    <p className="text-sm text-gray-500">
                      Optimize generation based on weather
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-semibold">Grid Export</Label>
                    <p className="text-sm text-gray-500">
                      Sell excess energy to grid
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-semibold">Peak Shaving</Label>
                    <p className="text-sm text-gray-500">
                      Use storage during peaks
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold">Renewable Source</Label>
                <Select
                  value={renewableSource}
                  onValueChange={setRenewableSource}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="solar">Solar Only</SelectItem>
                    <SelectItem value="wind">Wind Only</SelectItem>
                    <SelectItem value="hydro">Hydro Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Performance & Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Solar Farms Performance */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Solar Farms Performance</CardTitle>
            <CardDescription>
              Individual solar farm output and efficiency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {solarFarms.map((farm, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white transition-all duration-200 border"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-bold">
                        {Math.round(farm.output)} kW
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{farm.farm}</div>
                      <div className="text-sm text-gray-500">
                        Capacity: {farm.capacity} kW
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <StatusBadge status={farm.status} />
                    <div className="text-2xl font-bold text-emerald-600 mt-1">
                      {farm.efficiency}%
                    </div>
                    <div className="text-sm text-gray-500">Efficiency</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-amber-800">
                    Overall Solar Performance
                  </h4>
                  <p className="text-sm text-amber-600">
                    Average efficiency: 81%
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-2xl text-amber-600">
                    1,240 kW
                  </div>
                  <div className="text-sm text-amber-600">Total output</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wind Turbines */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Wind Turbines Status</CardTitle>
            <CardDescription>
              Individual turbine performance monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {windTurbines.map((turbine, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{turbine.turbine}</span>
                    <span className="font-semibold">
                      {turbine.output} MW / {turbine.capacity} MW
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Availability: {turbine.availability}%
                    </span>
                    <span className="text-gray-500">
                      Status: <StatusBadge status={turbine.status} />
                    </span>
                  </div>
                  <Progress
                    value={(turbine.output / turbine.capacity) * 100}
                    className="h-2"
                    indicatorClassName={
                      turbine.output / turbine.capacity > 0.85
                        ? "bg-emerald-500"
                        : turbine.output / turbine.capacity > 0.75
                        ? "bg-blue-500"
                        : "bg-amber-500"
                    }
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">850 kW</div>
                <div className="text-sm text-blue-600">Total Wind Output</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-700">92.6%</div>
                <div className="text-sm text-emerald-600">
                  Average Availability
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects & Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Renewable Projects */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Renewable Projects</CardTitle>
            <CardDescription>
              Active and upcoming renewable energy projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {renewableProjects.map((project, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">{project.project}</div>
                      <div className="text-sm text-gray-500">
                        {project.type} • Capacity: {project.capacity} •
                        Completion: {project.completion}
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">
                      {project.progress}%
                    </Badge>
                  </div>
                  <Progress
                    value={project.progress}
                    className="h-2"
                    indicatorClassName={
                      project.progress > 80
                        ? "bg-emerald-500"
                        : project.progress > 50
                        ? "bg-blue-500"
                        : "bg-amber-500"
                    }
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-blue-800">
                    Total Pipeline
                  </h4>
                  <p className="text-sm text-blue-600">
                    3.9 MW additional capacity
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-2xl text-blue-600">54%</div>
                  <div className="text-sm text-blue-600">Overall progress</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Environmental Impact</CardTitle>
            <CardDescription>
              Positive environmental contributions from renewables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {environmentalImpact.map((impact, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200"
                >
                  <div className="text-3xl font-bold text-emerald-800 mb-2">
                    {impact.value}
                  </div>
                  <div className="text-sm font-medium text-emerald-700">
                    {impact.metric}
                  </div>
                  <div className="text-xs text-emerald-600 mt-1">
                    {impact.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h4 className="font-semibold text-green-800">
                    Annual Carbon Reduction
                  </h4>
                  <p className="text-sm text-green-600">
                    Equivalent to {Math.round((8.5 * 365) / 1000)} tons of CO₂
                    annually
                  </p>
                </div>
              </div>
              <Progress value={62} className="h-2 mt-3 bg-green-100">
                <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
              </Progress>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Panel */}
      <div className="p-6 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl shadow-sm border border-amber-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Renewable Energy Summary
            </h3>
            <p className="text-gray-600">
              Total renewable generation: 2,090 kW | Environmental savings:
              $28,500 monthly
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
              Export Report
            </Button>
            <Button className="bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-700 hover:to-emerald-700">
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
              Optimize Generation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Renewable Capacity</div>
            <div className="text-2xl font-bold text-amber-600">5.4 MW</div>
            <div className="text-xs text-gray-500">Installed capacity</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Capacity Factor</div>
            <div className="text-2xl font-bold text-emerald-600">75%</div>
            <div className="text-xs text-gray-500">Average across sources</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Grid Independence</div>
            <div className="text-2xl font-bold text-blue-600">42%</div>
            <div className="text-xs text-gray-500">Self-sufficiency rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
