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
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Green color palette
const GREEN_COLORS = {
  primary: "#10B981",
  primaryLight: "#34D399",
  primaryDark: "#059669",
  secondary: "#3B82F6",
  accent: "#8B5CF6",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#3B82F6",
  lightGreen: "#D1FAE5",
  lightBlue: "#DBEAFE",
  lightPurple: "#EDE9FE",
  lightYellow: "#FEF3C7",
  lightRed: "#FEE2E2",
  gray: "#9CA3AF",
  grayLight: "#F3F4F6",
};

// Emissions metrics
const emissionsMetrics = [
  {
    title: "Carbon Footprint",
    value: "8,450 t",
    change: "-12%",
    description: "CO2 equivalent",
    icon: "☁️",
    trend: "down",
    color: "text-emerald-600",
  },
  {
    title: "Carbon Intensity",
    value: "0.42 t/MWh",
    change: "-8%",
    description: "per megawatt-hour",
    icon: "📊",
    trend: "down",
    color: "text-blue-600",
  },
  {
    title: "Offset Credits",
    value: "2,150 t",
    change: "+25%",
    description: "carbon removed",
    icon: "🌿",
    trend: "up",
    color: "text-green-600",
  },
  {
    title: "Net Emissions",
    value: "6,300 t",
    change: "-15%",
    description: "after offsets",
    icon: "⚖️",
    trend: "down",
    color: "text-purple-600",
  },
];

// Emissions by source
const emissionsBySource = [
  {
    source: "Natural Gas",
    emissions: 3850,
    percentage: 45,
    color: GREEN_COLORS.danger,
  },
  {
    source: "Grid Electricity",
    emissions: 2850,
    percentage: 34,
    color: GREEN_COLORS.warning,
  },
  {
    source: "Transportation",
    emissions: 1250,
    percentage: 15,
    color: GREEN_COLORS.info,
  },
  {
    source: "Waste Processing",
    emissions: 500,
    percentage: 6,
    color: GREEN_COLORS.success,
  },
];

// Emissions trend data
const emissionsTrend = [
  { month: "Jan", actual: 9200, target: 8500, offset: 800 },
  { month: "Feb", actual: 8800, target: 8300, offset: 900 },
  { month: "Mar", actual: 8600, target: 8100, offset: 1000 },
  { month: "Apr", actual: 8200, target: 7900, offset: 1200 },
  { month: "May", actual: 7900, target: 7700, offset: 1500 },
  { month: "Jun", actual: 7600, target: 7500, offset: 1800 },
  { month: "Jul", actual: 8450, target: 7300, offset: 2150 },
];

// Carbon offset projects
const offsetProjects = [
  {
    project: "Reforestation - Amazon",
    type: "Forestry",
    credits: 850,
    status: "active",
    verified: true,
    impact: "High",
  },
  {
    project: "Wind Farm - Texas",
    type: "Renewable",
    credits: 650,
    status: "active",
    verified: true,
    impact: "Medium",
  },
  {
    project: "Methane Capture - Landfill",
    type: "Waste",
    credits: 420,
    status: "pending",
    verified: false,
    impact: "High",
  },
  {
    project: "Solar Installation - Campus",
    type: "Renewable",
    credits: 230,
    status: "active",
    verified: true,
    impact: "Low",
  },
];

// Scope emissions breakdown
const scopeEmissions = [
  { scope: "Scope 1 - Direct", emissions: 4200, target: 3500 },
  { scope: "Scope 2 - Indirect", emissions: 2850, target: 2500 },
  { scope: "Scope 3 - Value Chain", emissions: 1400, target: 1200 },
];

// Facility emissions comparison
const facilityEmissions = [
  { facility: "Plant A", emissions: 2850, intensity: 0.48, score: 65 },
  { facility: "Plant B", emissions: 1950, intensity: 0.38, score: 78 },
  { facility: "Office Campus", emissions: 850, intensity: 0.28, score: 92 },
  { facility: "Warehouse", emissions: 1250, intensity: 0.52, score: 58 },
  { facility: "R&D Center", emissions: 550, intensity: 0.22, score: 95 },
];

// Carbon reduction initiatives
const reductionInitiatives = [
  {
    initiative: "Renewable Energy Switch",
    reduction: "1,200 t",
    progress: 85,
    deadline: "2024-Q2",
  },
  {
    initiative: "Fleet Electrification",
    reduction: "850 t",
    progress: 45,
    deadline: "2024-Q4",
  },
  {
    initiative: "Process Optimization",
    reduction: "650 t",
    progress: 70,
    deadline: "2024-Q3",
  },
  {
    initiative: "Supplier Engagement",
    reduction: "420 t",
    progress: 30,
    deadline: "2025-Q1",
  },
];

// Environmental impact metrics
const impactMetrics = [
  {
    metric: "Equivalent Cars",
    value: "1,850",
    description: "cars off the road",
    color: "bg-blue-100 text-blue-800",
  },
  {
    metric: "Trees Planted",
    value: "42,000",
    description: "equivalent impact",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    metric: "Ocean Cleanup",
    value: "850 t",
    description: "plastic equivalent",
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    metric: "Forest Preserved",
    value: "1,200",
    description: "acres saved",
    color: "bg-green-100 text-green-800",
  },
];

// Custom tooltip
const EmissionsTooltip = ({ active, payload, label }) => {
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
              {entry.value.toLocaleString()} t
            </span>
          </div>
        ))}
        {payload[0]?.payload?.offset && (
          <div className="pt-2 border-t border-gray-200 mt-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Offset:</span>
              <span className="text-emerald-600">
                {payload[0]?.payload?.offset.toLocaleString()} t
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
  return null;
};

// Status badge component
const StatusBadge = ({ status }) => {
  const config = {
    active: { color: "bg-emerald-100 text-emerald-800", label: "Active" },
    pending: { color: "bg-amber-100 text-amber-800", label: "Pending" },
    completed: { color: "bg-blue-100 text-blue-800", label: "Completed" },
  };

  return (
    <Badge className={`${config[status]?.color} border-0`}>
      {config[status]?.label}
    </Badge>
  );
};

export default function EnergyEmissions() {
  const [timeRange, setTimeRange] = useState("monthly");
  const [scopeView, setScopeView] = useState("all");
  const [targetYear, setTargetYear] = useState("2030");

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header with Green Theme */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-900 via-green-800 to-green-500 p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Carbon Emissions Intelligence
              </h1>
              <p className="text-emerald-100 text-lg max-w-2xl">
                Track, analyze, and optimize your carbon footprint for
                sustainable operations
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-emerald-100 text-sm">Net Zero Target</div>
                <div className="text-white font-bold text-xl">{targetYear}</div>
              </div>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg font-semibold">
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
                Offset Now
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {emissionsMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-100 text-sm font-medium">
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
                      metric.trend === "down"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                    }
                  >
                    {metric.change}
                  </Badge>
                  <span className="text-emerald-200 text-sm ml-2">
                    {metric.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Emissions Trend Chart */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl">
                    Emissions Reduction Trajectory
                  </CardTitle>
                  <CardDescription>
                    Monthly progress towards carbon goals
                  </CardDescription>
                </div>
                <Tabs
                  defaultValue="monthly"
                  className="w-[300px]"
                  onValueChange={setTimeRange}
                >
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart
                  data={emissionsTrend}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <defs>
                    <linearGradient
                      id="colorActual"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorTarget"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="month"
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: "Emissions (t CO₂)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10,
                      fill: "#6B7280",
                    }}
                  />
                  <Tooltip content={<EmissionsTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="actual"
                    stroke="#EF4444"
                    fill="url(#colorActual)"
                    name="Actual Emissions"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#10B981"
                    strokeWidth={3}
                    name="Target"
                    dot={{ r: 5, strokeWidth: 2 }}
                    strokeDasharray="5 5"
                  />
                  <Bar
                    dataKey="offset"
                    fill="#3B82F6"
                    name="Carbon Offset"
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                </ComposedChart>
              </ResponsiveContainer>

              {/* Progress Summary */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-700">
                    -18%
                  </div>
                  <div className="text-sm text-emerald-600">vs. Last Year</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">84%</div>
                  <div className="text-sm text-blue-600">
                    Target Achievement
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">
                    2,150 t
                  </div>
                  <div className="text-sm text-purple-600">Total Offset</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emissions by Source */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-xl border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Emissions by Source</CardTitle>
                <CardDescription>
                  Breakdown of carbon emissions sources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={emissionsBySource}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="emissions"
                      >
                        {emissionsBySource.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value} t CO₂`, "Emissions"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3 mt-6">
                  {emissionsBySource.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: source.color }}
                        />
                        <span className="text-gray-700">{source.source}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">
                          {source.percentage}%
                        </div>
                        <div className="text-sm text-gray-500">
                          {source.emissions.toLocaleString()} t
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Scope Emissions</CardTitle>
                <CardDescription>GHG Protocol scopes analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scopeEmissions.map((scope, index) => {
                    const progress = (scope.emissions / scope.target) * 100;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{scope.scope}</span>
                          <span className="font-semibold">
                            {scope.emissions.toLocaleString()} t
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Actual</span>
                          <span className="text-gray-500">
                            Target: {scope.target.toLocaleString()} t
                          </span>
                        </div>
                        <Progress
                          value={progress > 100 ? 100 : progress}
                          className="h-2"
                          indicatorClassName={
                            progress > 100 ? "bg-red-500" : "bg-emerald-500"
                          }
                        />
                        <div className="text-xs text-gray-500">
                          {progress > 100
                            ? `${(progress - 100).toFixed(1)}% over target`
                            : `${(100 - progress).toFixed(1)}% to target`}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-emerald-800">
                        Scope 3 Challenge
                      </h4>
                      <p className="text-sm text-emerald-600">
                        Engage suppliers for reduction
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Action Plan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Controls & Details */}
        <div className="space-y-6">
          {/* Carbon Offset Projects */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Carbon Offset Portfolio</CardTitle>
              <CardDescription>
                Active offset projects and credits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {offsetProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">{project.project}</div>
                        <div className="text-sm text-gray-500">
                          {project.type}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {project.verified && (
                          <Badge className="bg-emerald-100 text-emerald-800">
                            Verified
                          </Badge>
                        )}
                        <StatusBadge status={project.status} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div>
                        <div className="text-2xl font-bold text-emerald-600">
                          {project.credits} t
                        </div>
                        <div className="text-sm text-gray-500">
                          Carbon credits
                        </div>
                      </div>
                      <Badge
                        className={
                          project.impact === "High"
                            ? "bg-red-100 text-red-800"
                            : project.impact === "Medium"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-blue-100 text-blue-800"
                        }
                      >
                        {project.impact} Impact
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Projects
              </Button>
            </CardFooter>
          </Card>

          {/* Reduction Targets Control */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Reduction Targets</CardTitle>
              <CardDescription>
                Configure emission reduction goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-semibold">Net Zero Target Year</Label>
                  <Select value={targetYear} onValueChange={setTargetYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2030">2030</SelectItem>
                      <SelectItem value="2035">2035</SelectItem>
                      <SelectItem value="2040">2040</SelectItem>
                      <SelectItem value="2050">2050</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="font-semibold">
                      Annual Reduction Target
                    </Label>
                    <span className="font-semibold text-emerald-600">-15%</span>
                  </div>
                  <Slider
                    defaultValue={[15]}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Conservative</span>
                    <span>Moderate</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Scope Focus</Label>
                  <Select value={scopeView} onValueChange={setScopeView}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scope" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Scopes</SelectItem>
                      <SelectItem value="scope1">Scope 1 Only</SelectItem>
                      <SelectItem value="scope2">Scope 2 Only</SelectItem>
                      <SelectItem value="scope3">Scope 3 Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-emerald-600">
                      Current Trajectory
                    </div>
                    <div className="text-xl font-bold text-emerald-800">
                      {targetYear}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-emerald-600">On Track</div>
                    <div className="text-xs text-emerald-500">
                      85% probability
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Facility Performance */}
      <Card className="shadow-xl border-0 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl">
            Facility Emissions Performance
          </CardTitle>
          <CardDescription>
            Comparative analysis across facilities
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={facilityEmissions}>
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis dataKey="facility" stroke="#6B7280" />
                  <PolarRadiusAxis stroke="#6B7280" />
                  <Radar
                    name="Emissions Intensity"
                    dataKey="intensity"
                    stroke="#EF4444"
                    fill="#EF4444"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Efficiency Score"
                    dataKey="score"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.6}
                  />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {facilityEmissions.map((facility, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{facility.facility}</div>
                      <div className="text-sm text-gray-500">
                        {facility.emissions.toLocaleString()} t CO₂
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold ${
                          facility.score >= 90
                            ? "text-emerald-600"
                            : facility.score >= 70
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {facility.score}
                      </div>
                      <div className="text-sm text-gray-500">Score</div>
                    </div>
                  </div>
                  <Progress
                    value={facility.score}
                    className="h-2 mt-2"
                    indicatorClassName={
                      facility.score >= 90
                        ? "bg-emerald-500"
                        : facility.score >= 70
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Section - Initiatives & Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reduction Initiatives */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">Reduction Initiatives</CardTitle>
            <CardDescription>Active carbon reduction projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reductionInitiatives.map((initiative, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">
                        {initiative.initiative}
                      </div>
                      <div className="text-sm text-gray-500">
                        Reduction: {initiative.reduction} • Deadline:{" "}
                        {initiative.deadline}
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">
                      {initiative.progress}%
                    </Badge>
                  </div>
                  <Progress
                    value={initiative.progress}
                    className="h-2"
                    indicatorClassName="bg-emerald-500"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">Environmental Impact</CardTitle>
            <CardDescription>
              Visualizing your carbon footprint impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {impactMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl border ${
                    metric.color.split(" ")[0]
                  } border-current/20`}
                >
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm font-medium">{metric.metric}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Planetary Impact
                  </h4>
                  <p className="text-sm text-gray-600">
                    Your emissions reduction is equivalent to preserving{" "}
                    {Math.round(8450 * 0.15)} acres of rainforest
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance & Reporting */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl shadow-sm border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Compliance & Reporting
            </h3>
            <p className="text-gray-600">
              Generate regulatory reports, sustainability disclosures, and
              carbon accounting documents
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">Generate Report</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Schedule Audit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
