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
  RadialBarChart,
  RadialBar,
} from "recharts";

// Mock data for energy consumption
const hourlyConsumptionData = [
  { hour: "00:00", consumption: 450, cost: 65, solar: 0, wind: 15 },
  { hour: "02:00", consumption: 420, cost: 62, solar: 0, wind: 18 },
  { hour: "04:00", consumption: 380, cost: 58, solar: 0, wind: 20 },
  { hour: "06:00", consumption: 520, cost: 75, solar: 45, wind: 25 },
  { hour: "08:00", consumption: 680, cost: 92, solar: 120, wind: 30 },
  { hour: "10:00", consumption: 820, cost: 112, solar: 280, wind: 35 },
  { hour: "12:00", consumption: 950, cost: 135, solar: 420, wind: 40 },
  { hour: "14:00", consumption: 920, cost: 128, solar: 380, wind: 45 },
  { hour: "16:00", consumption: 980, cost: 140, solar: 220, wind: 50 },
  { hour: "18:00", consumption: 850, cost: 118, solar: 40, wind: 55 },
  { hour: "20:00", consumption: 720, cost: 98, solar: 0, wind: 40 },
  { hour: "22:00", consumption: 580, cost: 82, solar: 0, wind: 25 },
];

const dailyConsumptionData = [
  { day: "Mon", consumption: 12500, cost: 1850, peak: 980 },
  { day: "Tue", consumption: 13200, cost: 1950, peak: 1020 },
  { day: "Wed", consumption: 12800, cost: 1900, peak: 990 },
  { day: "Thu", consumption: 14000, cost: 2100, peak: 1100 },
  { day: "Fri", consumption: 13500, cost: 2000, peak: 1050 },
  { day: "Sat", consumption: 11500, cost: 1700, peak: 920 },
  { day: "Sun", consumption: 10500, cost: 1550, peak: 850 },
];

const monthlyConsumptionData = [
  { month: "Jan", consumption: 385000, cost: 58000, efficiency: 78 },
  { month: "Feb", consumption: 365000, cost: 55000, efficiency: 82 },
  { month: "Mar", consumption: 395000, cost: 59000, efficiency: 79 },
  { month: "Apr", consumption: 380000, cost: 57000, efficiency: 85 },
  { month: "May", consumption: 410000, cost: 61000, efficiency: 81 },
  { month: "Jun", consumption: 390000, cost: 58500, efficiency: 88 },
];

const applianceBreakdown = [
  { name: "HVAC Systems", consumption: 42, cost: 850, color: "#0088FE" },
  { name: "Lighting", consumption: 25, cost: 500, color: "#00C49F" },
  { name: "Server Room", consumption: 18, cost: 360, color: "#FFBB28" },
  { name: "Production Line", consumption: 12, cost: 240, color: "#FF8042" },
  { name: "Office Equipment", consumption: 8, cost: 160, color: "#8884D8" },
];

const zoneConsumption = [
  {
    zone: "Zone A - Production",
    consumption: 4200,
    target: 3800,
    status: "exceeded",
  },
  {
    zone: "Zone B - Office",
    consumption: 2800,
    target: 3000,
    status: "optimal",
  },
  {
    zone: "Zone C - Warehouse",
    consumption: 3500,
    target: 3200,
    status: "exceeded",
  },
  { zone: "Zone D - Lab", consumption: 1900, target: 2200, status: "optimal" },
  {
    zone: "Zone E - Common",
    consumption: 1200,
    target: 1500,
    status: "optimal",
  },
];

const timeOfUseRates = [
  { period: "Off-Peak (00:00-06:00)", rate: 0.12, consumption: 18000 },
  { period: "Mid-Peak (06:00-14:00)", rate: 0.18, consumption: 42000 },
  { period: "On-Peak (14:00-20:00)", rate: 0.25, consumption: 38000 },
  { period: "Evening (20:00-00:00)", rate: 0.15, consumption: 15000 },
];

const energyStats = [
  {
    title: "Current Power",
    value: "642 kW",
    change: "-8%",
    description: "vs 1 hour ago",
    color: "text-blue-600",
  },
  {
    title: "Today's Usage",
    value: "12,450 kWh",
    change: "+5%",
    description: "vs yesterday",
    color: "text-emerald-600",
  },
  {
    title: "Cost Today",
    value: "$1,850",
    change: "+3%",
    description: "vs yesterday",
    color: "text-purple-600",
  },
  {
    title: "Carbon Footprint",
    value: "8.2 t",
    change: "-12%",
    description: "CO2 emissions",
    color: "text-amber-600",
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/95 backdrop-blur-sm p-4 rounded-lg border border-gray-700 shadow-xl">
        <p className="text-white font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value} {entry.unit || ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function EnergyConsumption() {
  const [timeRange, setTimeRange] = useState("day");
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [threshold, setThreshold] = useState([75]);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Energy Consumption Analytics
          </h2>
          <p className="text-muted-foreground mt-2">
            Detailed monitoring and analysis of energy usage patterns across all
            facilities
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0 shadow-lg">
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export Report
          </Button>
          <Button variant="outline" className="shadow-sm">
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {energyStats.map((stat, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 shadow-lg border-0"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600">
                {stat.title}
              </CardTitle>
              <div
                className={`p-2 rounded-full ${stat.color.replace(
                  "text-",
                  "bg-"
                )} bg-opacity-10`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-sm mt-2">
                <span
                  className={`font-semibold ${
                    stat.change.startsWith("+")
                      ? "text-emerald-600"
                      : "text-blue-600"
                  }`}
                >
                  {stat.change}
                </span>{" "}
                <span className="text-gray-500">{stat.description}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Consumption Chart */}
      <Card className="shadow-xl border-0">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
            <div>
              <CardTitle>Energy Consumption Patterns</CardTitle>
              <CardDescription>
                Detailed analysis of energy usage over time
              </CardDescription>
            </div>
            <Tabs
              defaultValue="day"
              className="w-[400px]"
              onValueChange={setTimeRange}
            >
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="day">Daily</TabsTrigger>
                <TabsTrigger value="week">Weekly</TabsTrigger>
                <TabsTrigger value="month">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={
                timeRange === "day"
                  ? hourlyConsumptionData
                  : timeRange === "week"
                  ? dailyConsumptionData
                  : monthlyConsumptionData
              }
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey={
                  timeRange === "day"
                    ? "hour"
                    : timeRange === "week"
                    ? "day"
                    : "month"
                }
                stroke="#6B7280"
              />
              <YAxis
                yAxisId="left"
                stroke="#6B7280"
                label={{
                  value: "Consumption (kWh)",
                  angle: -90,
                  position: "insideLeft",
                  offset: -10,
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#6B7280"
                label={{
                  value: "Cost ($)",
                  angle: 90,
                  position: "insideRight",
                  offset: -10,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="consumption"
                fill="#3B82F6"
                name="Consumption (kWh)"
                radius={[4, 4, 0, 0]}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="cost"
                stroke="#8B5CF6"
                strokeWidth={2}
                name="Cost ($)"
                dot={{ r: 4 }}
              />
              {timeRange === "day" && (
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="solar"
                  stroke="#10B981"
                  strokeWidth={2}
                  name="Solar Generation"
                  strokeDasharray="5 5"
                />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Detailed Analysis Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Appliance Breakdown */}
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle>Appliance Breakdown</CardTitle>
            <CardDescription>
              Energy consumption by equipment category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={applianceBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="consumption"
                  >
                    {applianceBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-6">
              {applianceBreakdown.map((appliance, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: appliance.color }}
                    />
                    <span className="text-sm font-medium">
                      {appliance.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      {appliance.consumption}%
                    </div>
                    <div className="text-xs text-gray-500">
                      ${appliance.cost}/day
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Zone-wise Consumption */}
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle>Zone-wise Consumption</CardTitle>
            <CardDescription>
              Energy usage across different facility zones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {zoneConsumption.map((zone, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm">{zone.zone}</span>
                    <Badge
                      variant={
                        zone.status === "optimal" ? "default" : "destructive"
                      }
                      className={
                        zone.status === "optimal"
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {zone.status === "optimal" ? "On Target" : "Exceeding"}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Actual: {zone.consumption.toLocaleString()} kWh</span>
                    <span>Target: {zone.target.toLocaleString()} kWh</span>
                  </div>
                  <Progress
                    value={(zone.consumption / zone.target) * 100}
                    className="h-2"
                    indicatorClassName={
                      zone.status === "optimal"
                        ? "bg-emerald-500"
                        : "bg-red-500"
                    }
                  />
                  <div className="text-xs text-gray-500">
                    {zone.status === "optimal"
                      ? "Within target range"
                      : `${(
                          ((zone.consumption - zone.target) / zone.target) *
                          100
                        ).toFixed(1)}% above target`}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Zone Details
            </Button>
          </CardFooter>
        </Card>

        {/* Control Panel */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white">
          <CardHeader>
            <CardTitle>Consumption Controls</CardTitle>
            <CardDescription>
              Manage energy optimization settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-optimize" className="font-semibold">
                    Auto-Optimization
                  </Label>
                  <p className="text-sm text-gray-500">
                    Automatically adjust systems for efficiency
                  </p>
                </div>
                <Switch
                  id="auto-optimize"
                  checked={autoOptimize}
                  onCheckedChange={setAutoOptimize}
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="font-semibold">Peak Load Threshold</Label>
                  <span className="font-semibold text-blue-600">
                    {threshold[0]}%
                  </span>
                </div>
                <Slider
                  value={threshold}
                  onValueChange={setThreshold}
                  max={100}
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
                <Label className="font-semibold">Scheduled Optimizations</Label>
                <div className="space-y-2">
                  {[
                    "Peak Shaving (14:00-18:00)",
                    "Night Mode (22:00-06:00)",
                    "Weekend Mode",
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm">{schedule}</span>
                      <Switch defaultChecked={index === 0} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700">
              Apply Optimizations
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Time-of-Use Analysis */}
      <Card className="shadow-xl border-0">
        <CardHeader>
          <CardTitle>Time-of-Use Rate Analysis</CardTitle>
          <CardDescription>
            Energy costs based on time-of-day pricing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <RadialBarChart
                  innerRadius="10%"
                  outerRadius="90%"
                  data={timeOfUseRates}
                  startAngle={180}
                  endAngle={-180}
                >
                  <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="consumption"
                  />
                  <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {timeOfUseRates.map((rate, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{rate.period}</h4>
                      <p className="text-sm text-gray-500">
                        Rate: ${rate.rate}/kWh
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        ${(rate.consumption * rate.rate).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {rate.consumption.toLocaleString()} kWh
                      </div>
                    </div>
                  </div>
                  <Progress
                    value={(rate.consumption / 113000) * 100}
                    className="h-2 mt-2"
                  />
                </div>
              ))}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-4 rounded-lg border border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">Potential Savings</h4>
                    <p className="text-sm text-gray-600">
                      Shift 20% of peak consumption to off-peak
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg text-emerald-600">
                      $1,250
                    </div>
                    <div className="text-sm text-emerald-600">
                      Monthly savings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
        <CardHeader>
          <CardTitle className="text-blue-800">
            Optimization Recommendations
          </CardTitle>
          <CardDescription className="text-blue-600">
            Based on your consumption patterns, here are suggested improvements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "HVAC Optimization",
                description: "Reduce temperature by 2°C during off-hours",
                impact: "Save 15% on HVAC costs",
                icon: "❄️",
              },
              {
                title: "Peak Shaving",
                description: "Shift production to off-peak hours",
                impact: "Reduce peak demand by 20%",
                icon: "📉",
              },
              {
                title: "LED Upgrade",
                description: "Replace fluorescent lights with LEDs",
                impact: "Save 40% on lighting energy",
                icon: "💡",
              },
            ].map((rec, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{rec.icon}</div>
                  <div>
                    <h4 className="font-semibold">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {rec.description}
                    </p>
                    <div className="mt-2">
                      <Badge
                        variant="outline"
                        className="bg-emerald-50 text-emerald-700 border-emerald-200"
                      >
                        {rec.impact}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
            Implement Recommendations
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
