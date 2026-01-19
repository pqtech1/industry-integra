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
  RadialBarChart,
  RadialBar,
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
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

// Energy efficiency metrics
const efficiencyMetrics = [
  {
    title: "Overall Efficiency",
    value: "87%",
    change: "+3.2%",
    description: "vs last month",
    color: "text-emerald-600",
    icon: "📈",
    trend: "up",
  },
  {
    title: "Energy Intensity",
    value: "0.45 kWh/m²",
    change: "-12%",
    description: "per square meter",
    color: "text-blue-600",
    icon: "📊",
    trend: "down",
  },
  {
    title: "Carbon Efficiency",
    value: "0.25 t/MWh",
    change: "-8%",
    description: "CO2 per MWh",
    color: "text-green-600",
    icon: "🌿",
    trend: "down",
  },
  {
    title: "Cost Efficiency",
    value: "$0.18/kWh",
    change: "-5%",
    description: "operational cost",
    color: "text-purple-600",
    icon: "💰",
    trend: "down",
  },
];

// Building efficiency scores
const buildingEfficiency = [
  {
    building: "Main Office",
    score: 92,
    improvement: "+8%",
    rating: "Excellent",
  },
  { building: "Production A", score: 85, improvement: "+12%", rating: "Good" },
  {
    building: "Production B",
    score: 78,
    improvement: "+5%",
    rating: "Average",
  },
  {
    building: "Warehouse",
    score: 65,
    improvement: "+15%",
    rating: "Needs Work",
  },
  { building: "Lab Complex", score: 88, improvement: "+3%", rating: "Good" },
  { building: "Ancillary", score: 72, improvement: "+10%", rating: "Average" },
];

// Efficiency improvements timeline
const improvementsTimeline = [
  { month: "Jan", efficiency: 78, savings: 2500, projects: 3 },
  { month: "Feb", efficiency: 80, savings: 3200, projects: 4 },
  { month: "Mar", efficiency: 82, savings: 3800, projects: 5 },
  { month: "Apr", efficiency: 85, savings: 4200, projects: 6 },
  { month: "May", efficiency: 84, savings: 4100, projects: 5 },
  { month: "Jun", efficiency: 87, savings: 4800, projects: 7 },
  { month: "Jul", efficiency: 89, savings: 5200, projects: 8 },
];

// Energy saving opportunities
const savingOpportunities = [
  {
    category: "Lighting",
    potential: "40%",
    savings: "$18,500/yr",
    payback: "1.2 years",
    priority: "high",
    icon: "💡",
  },
  {
    category: "HVAC Optimization",
    potential: "25%",
    savings: "$24,000/yr",
    payback: "2.5 years",
    priority: "high",
    icon: "❄️",
  },
  {
    category: "Equipment Upgrade",
    potential: "35%",
    savings: "$32,000/yr",
    payback: "3.8 years",
    priority: "medium",
    icon: "⚙️",
  },
  {
    category: "Solar Installation",
    potential: "60%",
    savings: "$45,000/yr",
    payback: "4.2 years",
    priority: "medium",
    icon: "☀️",
  },
  {
    category: "Building Envelope",
    potential: "15%",
    savings: "$8,500/yr",
    payback: "5.0 years",
    priority: "low",
    icon: "🏢",
  },
];

// Efficiency by system
const systemEfficiency = [
  { system: "HVAC", current: 68, target: 85, color: "#3B82F6" },
  { system: "Lighting", current: 75, target: 90, color: "#10B981" },
  { system: "Compressed Air", current: 45, target: 75, color: "#F59E0B" },
  { system: "Pumping", current: 60, target: 80, color: "#8B5CF6" },
  { system: "Process Heat", current: 52, target: 70, color: "#EF4444" },
];

// Sustainability metrics
const sustainabilityMetrics = [
  { metric: "Renewable Energy", value: 42, target: 60, unit: "%" },
  { metric: "Water Efficiency", value: 78, target: 85, unit: "%" },
  { metric: "Waste Reduction", value: 65, target: 80, unit: "%" },
  { metric: "Carbon Neutral", value: 35, target: 100, unit: "%" },
];

// Performance benchmarks
const benchmarks = [
  { benchmark: "Energy Star", score: 92, industry: 78, status: "exceeds" },
  {
    benchmark: "LEED Certification",
    score: 85,
    industry: 70,
    status: "exceeds",
  },
  { benchmark: "ISO 50001", score: 88, industry: 72, status: "exceeds" },
  { benchmark: "Net Zero", score: 42, industry: 25, status: "meets" },
];

// Custom tooltip
const EfficiencyTooltip = ({ active, payload, label }) => {
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
            <span className="font-medium text-white">
              {entry.value} {entry.unit || "%"}
            </span>
          </div>
        ))}
        {payload[0]?.payload?.savings && (
          <div className="pt-2 border-t border-gray-700 mt-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Monthly Savings:</span>
              <span className="text-emerald-300">
                ${payload[0]?.payload?.savings}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default function EnergyEfficiency() {
  const [timeRange, setTimeRange] = useState("monthly");
  const [optimizationMode, setOptimizationMode] = useState("auto");
  const [targetEfficiency, setTargetEfficiency] = useState([90]);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header with Sustainability Theme */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-6 md:p-8 shadow-2xl">
        {/* Animated leaves background */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <div className="absolute top-8 right-8 w-16 h-16 bg-emerald-300 rounded-full" />
          <div className="absolute top-16 right-24 w-12 h-12 bg-green-300 rounded-full" />
          <div className="absolute top-32 right-16 w-8 h-8 bg-teal-300 rounded-full" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Energy Efficiency Intelligence
              </h1>
              <p className="text-emerald-100 text-lg max-w-2xl">
                Optimize performance, reduce waste, and achieve sustainability
                goals
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-emerald-100 text-sm">Efficiency Score</div>
                <div className="text-white font-bold text-xl">87%</div>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Certify
              </Button>
            </div>
          </div>

          {/* Efficiency Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {efficiencyMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors"
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
                      metric.trend === "up"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-300 border-blue-500/30"
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
        {/* Left Column - Performance Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Efficiency Trends */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl">
                    Efficiency Improvement Journey
                  </CardTitle>
                  <CardDescription>
                    Monthly efficiency gains and cost savings
                  </CardDescription>
                </div>
                <Select defaultValue="monthly" onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Time frame" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart
                  data={improvementsTimeline}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E5E7EB"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
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
                      value: "Efficiency (%)",
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
                      value: "Savings ($)",
                      angle: 90,
                      position: "insideRight",
                      offset: -10,
                    }}
                  />
                  <Tooltip content={<EfficiencyTooltip />} />
                  <Legend />
                  <Bar
                    yAxisId="right"
                    dataKey="savings"
                    fill="#10B981"
                    name="Monthly Savings ($)"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="efficiency"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    name="Efficiency (%)"
                    dot={{ r: 5, strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="projects"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Active Projects"
                    dot={{ r: 4 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>

              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-700">+9%</div>
                  <div className="text-sm text-emerald-600">
                    Efficiency Gain
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">
                    $28,200
                  </div>
                  <div className="text-sm text-blue-600">Total Savings</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">8</div>
                  <div className="text-sm text-purple-600">Active Projects</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Saving Opportunities */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="text-xl">
                Energy Saving Opportunities
              </CardTitle>
              <CardDescription>
                Prioritized efficiency improvement projects
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {savingOpportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white transition-all duration-200 border"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{opportunity.icon}</div>
                      <div>
                        <div className="font-semibold">
                          {opportunity.category}
                        </div>
                        <div className="text-sm text-gray-500">
                          Potential: {opportunity.potential} savings • Payback:{" "}
                          {opportunity.payback}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-emerald-600 text-lg">
                        {opportunity.savings}
                      </div>
                      <Badge
                        className={
                          opportunity.priority === "high"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : opportunity.priority === "medium"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                        }
                      >
                        {opportunity.priority} priority
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-emerald-800">
                      Total Opportunity
                    </h4>
                    <p className="text-sm text-emerald-600">
                      Implement all high-priority projects
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl text-emerald-600">
                      $128,000/yr
                    </div>
                    <div className="text-sm text-emerald-600">
                      Annual savings potential
                    </div>
                  </div>
                </div>
                <Progress value={65} className="h-2 mt-3 bg-emerald-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
                </Progress>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Efficiency Controls */}
        <div className="space-y-6">
          {/* System Efficiency Radar */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardTitle className="text-xl">
                System Efficiency Scores
              </CardTitle>
              <CardDescription>
                Performance across major systems
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="20%"
                    outerRadius="90%"
                    data={systemEfficiency}
                    startAngle={180}
                    endAngle={0}
                  >
                    <RadialBar
                      minAngle={15}
                      background
                      clockWise
                      dataKey="current"
                      name="Current Efficiency"
                    />
                    <Tooltip />
                    <Legend />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3 mt-6">
                {systemEfficiency.map((system, index) => {
                  const gap = system.target - system.current;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: system.color }}
                        />
                        <span className="font-medium">{system.system}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{system.current}%</div>
                        <div className="text-xs text-gray-500">
                          {gap > 0 ? `+${gap}% to target` : "Target achieved"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Efficiency Optimization */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">Efficiency Optimization</CardTitle>
              <CardDescription>
                Configure automated efficiency controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-semibold">Smart Optimization</Label>
                    <p className="text-sm text-gray-500">
                      AI-powered efficiency improvements
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold">Target Efficiency</Label>
                    <span className="font-semibold text-blue-600">
                      {targetEfficiency[0]}%
                    </span>
                  </div>
                  <Slider
                    value={targetEfficiency}
                    onValueChange={setTargetEfficiency}
                    min={70}
                    max={95}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Minimum</span>
                    <span>Optimal</span>
                    <span>Maximum</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Optimization Mode</Label>
                  <Select
                    defaultValue="auto"
                    onValueChange={setOptimizationMode}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aggressive">
                        Aggressive Savings
                      </SelectItem>
                      <SelectItem value="balanced">
                        Balanced Approach
                      </SelectItem>
                      <SelectItem value="conservative">Conservative</SelectItem>
                      <SelectItem value="auto">Auto (Recommended)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Apply Optimization
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Building Performance */}
      <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
          <CardTitle className="text-xl">
            Building Performance Ratings
          </CardTitle>
          <CardDescription>
            Efficiency scores across all facilities
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={buildingEfficiency}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="building" stroke="#6B7280" />
                  <YAxis
                    stroke="#6B7280"
                    domain={[0, 100]}
                    label={{
                      value: "Efficiency Score (%)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="score"
                    fill="#8B5CF6"
                    name="Efficiency Score"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-purple-600 font-medium">
                    Top Performer
                  </div>
                  <div className="text-2xl font-bold text-purple-800 mt-1">
                    Main Office
                  </div>
                  <div className="text-sm text-purple-600">Score: 92%</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
                  <div className="text-sm text-amber-600 font-medium">
                    Most Improved
                  </div>
                  <div className="text-2xl font-bold text-amber-800 mt-1">
                    Warehouse
                  </div>
                  <div className="text-sm text-amber-600">
                    +15% this quarter
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {buildingEfficiency.slice(0, 3).map((building, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="font-medium">{building.building}</div>
                    <div className="flex items-center space-x-4">
                      <Badge
                        className={
                          building.rating === "Excellent"
                            ? "bg-emerald-100 text-emerald-800"
                            : building.rating === "Good"
                            ? "bg-blue-100 text-blue-800"
                            : building.rating === "Average"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-red-100 text-red-800"
                        }
                      >
                        {building.rating}
                      </Badge>
                      <div className="text-right">
                        <div className="font-semibold">{building.score}%</div>
                        <div className="text-xs text-gray-500">
                          {building.improvement}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sustainability & Benchmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sustainability Metrics */}
        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-xl">Sustainability Metrics</CardTitle>
            <CardDescription>
              Progress towards environmental goals
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {sustainabilityMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{metric.metric}</span>
                    <span className="font-semibold">
                      {metric.value}
                      {metric.unit}
                    </span>
                  </div>
                  <Progress
                    value={(metric.value / metric.target) * 100}
                    className="h-3"
                    indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-500"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Current: {metric.value}
                      {metric.unit}
                    </span>
                    <span className="text-gray-500">
                      Target: {metric.target}
                      {metric.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-teal-800">
                    Sustainability Rating
                  </h4>
                  <p className="text-sm text-teal-600">
                    Based on current metrics
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-3xl text-teal-600">B+</div>
                  <div className="text-sm text-teal-600">Good Progress</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Industry Benchmarks */}
        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-gray-900 to-blue-900">
            <div className="text-white">
              <CardTitle className="text-xl">Industry Benchmarks</CardTitle>
              <CardDescription className="text-gray-300">
                Performance compared to standards
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {benchmarks.map((benchmark, index) => {
                const difference = benchmark.score - benchmark.industry;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-200 border"
                  >
                    <div>
                      <div className="font-semibold">{benchmark.benchmark}</div>
                      <div className="text-sm text-gray-500">
                        Industry Avg: {benchmark.industry}%
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold ${
                          benchmark.status === "exceeds"
                            ? "text-emerald-600"
                            : benchmark.status === "meets"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      >
                        {benchmark.score}%
                      </div>
                      <Badge
                        className={
                          benchmark.status === "exceeds"
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                            : benchmark.status === "meets"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                        }
                      >
                        {difference > 0 ? `+${difference}%` : `${difference}%`}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Certification Status
                  </h4>
                  <p className="text-sm text-gray-600">
                    3 certifications achieved
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Badge className="bg-emerald-100 text-emerald-800">
                    Energy Star
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">LEED Gold</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations & Actions */}
      <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
        <CardHeader>
          <CardTitle className="text-blue-800">
            Intelligent Recommendations
          </CardTitle>
          <CardDescription className="text-blue-600">
            AI-powered suggestions for immediate improvements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="font-semibold text-gray-900 mb-2">Quick Wins</h4>
              <p className="text-sm text-gray-600 mb-4">
                Low-cost, high-impact improvements
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                  Optimize thermostat settings
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                  Install motion sensors
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                  Seal air leaks
                </li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Implement
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">⚙️</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Equipment Upgrades
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Strategic equipment improvements
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                  LED lighting retrofit
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                  High-efficiency HVAC
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                  Smart building controls
                </li>
              </ul>
              <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700">
                View Projects
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🌱</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Sustainability Goals
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Long-term environmental initiatives
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                  Solar panel installation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                  EV charging stations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                  Water recycling system
                </li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full text-center">
            <p className="text-sm text-gray-600">
              Estimated annual savings from all recommendations:{" "}
              <span className="font-bold text-emerald-600">$156,000</span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
