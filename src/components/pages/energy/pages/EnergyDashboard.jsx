import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  RadialBarChart,
  RadialBar,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

// Mock data for energy consumption
const energyConsumptionData = [
  { hour: "00:00", consumption: 420, solar: 0, grid: 420 },
  { hour: "04:00", consumption: 380, solar: 0, grid: 380 },
  { hour: "08:00", consumption: 650, solar: 120, grid: 530 },
  { hour: "12:00", consumption: 850, solar: 450, grid: 400 },
  { hour: "16:00", consumption: 920, solar: 280, grid: 640 },
  { hour: "20:00", consumption: 780, solar: 0, grid: 780 },
  { hour: "24:00", consumption: 450, solar: 0, grid: 450 },
];

// Building energy usage
const buildingEnergyData = [
  { name: "HVAC", value: 42, color: "#0088FE" },
  { name: "Lighting", value: 25, color: "#00C49F" },
  { name: "Equipment", value: 18, color: "#FFBB28" },
  { name: "Server Room", value: 10, color: "#FF8042" },
  { name: "Other", value: 5, color: "#8884D8" },
];

// Energy sources distribution
const energySourcesData = [
  { name: "Solar", value: 35, color: "#FBBF24" },
  { name: "Wind", value: 25, color: "#60A5FA" },
  { name: "Grid", value: 40, color: "#A78BFA" },
];

// Carbon footprint tracking
const carbonFootprintData = [
  { month: "Jan", co2: 420, target: 400 },
  { month: "Feb", co2: 380, target: 380 },
  { month: "Mar", co2: 350, target: 360 },
  { month: "Apr", co2: 320, target: 340 },
  { month: "May", co2: 300, target: 320 },
  { month: "Jun", co2: 280, target: 300 },
];

// Equipment status
const equipmentStatus = [
  {
    id: "HVAC-01",
    name: "Central AC Unit",
    status: "optimal",
    load: "65%",
    lastMaintenance: "15 days ago",
  },
  {
    id: "SOL-01",
    name: "Solar Inverter",
    status: "optimal",
    load: "42%",
    lastMaintenance: "30 days ago",
  },
  {
    id: "BAT-01",
    name: "Battery Storage",
    status: "warning",
    load: "85%",
    lastMaintenance: "45 days ago",
  },
  {
    id: "GRID-01",
    name: "Grid Controller",
    status: "optimal",
    load: "38%",
    lastMaintenance: "60 days ago",
  },
  {
    id: "LGT-01",
    name: "Lighting System",
    status: "critical",
    load: "92%",
    lastMaintenance: "90 days ago",
  },
];

// Real-time alerts
const alerts = [
  {
    id: 1,
    type: "warning",
    message: "Battery storage at 85% capacity",
    time: "10 min ago",
  },
  {
    id: 2,
    type: "info",
    message: "Solar generation exceeding consumption",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "success",
    message: "Peak demand avoided successfully",
    time: "2 hours ago",
  },
  {
    id: 4,
    type: "critical",
    message: "Lighting system overload detected",
    time: "5 hours ago",
  },
];

// Energy savings stats
const savingsStats = [
  {
    title: "Energy Saved Today",
    value: "1,240 kWh",
    change: "+12%",
    description: "vs yesterday",
    icon: "⚡",
  },
  {
    title: "Carbon Reduced",
    value: "890 kg",
    change: "-8%",
    description: "CO2 emissions",
    icon: "🌿",
  },
  {
    title: "Cost Savings",
    value: "$245.50",
    change: "+15%",
    description: "daily average",
    icon: "💰",
  },
  {
    title: "Renewable Usage",
    value: "62%",
    change: "+5%",
    description: "of total energy",
    icon: "☀️",
  },
];

// Peak hours data
const peakHoursData = [
  { hour: 8, consumption: 650, cost: 85 },
  { hour: 9, consumption: 720, cost: 95 },
  { hour: 10, consumption: 810, cost: 105 },
  { hour: 11, consumption: 920, cost: 120 },
  { hour: 12, consumption: 980, cost: 130 },
  { hour: 13, consumption: 920, cost: 120 },
  { hour: 14, consumption: 880, cost: 115 },
  { hour: 15, consumption: 850, cost: 110 },
  { hour: 16, consumption: 920, cost: 120 },
  { hour: 17, consumption: 950, cost: 125 },
  { hour: 18, consumption: 910, cost: 118 },
  { hour: 19, consumption: 850, cost: 110 },
];

export default function EnergyAutomationDashboard() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Energy Automation Dashboard
          </h2>
          <p className="text-muted-foreground mt-2">
            Real-time monitoring and optimization of energy consumption across
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Run Optimization
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {savingsStats.map((stat, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 shadow-lg border-0"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600">
                {stat.title}
              </CardTitle>
              <span className="text-2xl">{stat.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
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

      {/* Main Charts Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Energy Consumption Chart */}
        <Card className="lg:col-span-2 shadow-xl border-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-white">
              Real-time Energy Consumption
            </CardTitle>
            <CardDescription className="text-gray-300">
              24-hour monitoring with solar generation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={energyConsumptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey="hour" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="consumption"
                  stroke="#3B82F6"
                  fill="url(#colorConsumption)"
                  fillOpacity={0.8}
                  name="Total Consumption"
                />
                <Area
                  type="monotone"
                  dataKey="solar"
                  stroke="#10B981"
                  fill="url(#colorSolar)"
                  fillOpacity={0.8}
                  name="Solar Generation"
                />
                <defs>
                  <linearGradient
                    id="colorConsumption"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter className="border-t border-gray-700">
            <div className="w-full flex justify-between text-sm text-gray-300">
              <span>Peak: 920 kW at 16:00</span>
              <span className="text-emerald-400">
                Solar Covered: 32% of peak
              </span>
            </div>
          </CardFooter>
        </Card>

        {/* Energy Distribution */}
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle>Energy Distribution</CardTitle>
            <CardDescription>Renewable vs Grid Power</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={energySourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {energySourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-4 w-full">
              {energySourcesData.map((source, index) => (
                <div key={index} className="text-center">
                  <div
                    className="font-semibold"
                    style={{ color: source.color }}
                  >
                    {source.name}
                  </div>
                  <div className="text-2xl font-bold">{source.value}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Carbon Footprint */}
        <Card className="lg:col-span-2 shadow-xl border-0">
          <CardHeader>
            <CardTitle>Carbon Footprint Reduction</CardTitle>
            <CardDescription>Monthly CO2 emissions vs targets</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={carbonFootprintData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  label={{
                    value: "kg CO2",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="co2"
                  stroke="#EF4444"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  name="Actual CO2"
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#10B981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target CO2"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Equipment Status */}
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle>Equipment Status</CardTitle>
            <CardDescription>System health monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {equipmentStatus.map((equipment) => (
                <div
                  key={equipment.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-semibold">{equipment.name}</div>
                    <div className="text-sm text-gray-500">
                      {equipment.id} • Load: {equipment.load}
                    </div>
                  </div>
                  <Badge
                    className={
                      equipment.status === "optimal"
                        ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                        : equipment.status === "warning"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {equipment.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Overall System Health</span>
                <span className="font-semibold">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lower Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Peak Hours Analysis */}
        <Card className="lg:col-span-2 shadow-xl border-0">
          <CardHeader>
            <CardTitle>Peak Hours Analysis</CardTitle>
            <CardDescription>
              Consumption vs Cost during peak hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart>
                <CartesianGrid />
                <XAxis
                  type="number"
                  dataKey="hour"
                  name="Hour"
                  unit=":00"
                  domain={[8, 19]}
                />
                <YAxis
                  type="number"
                  dataKey="consumption"
                  name="Consumption"
                  unit="kW"
                />
                <ZAxis
                  type="number"
                  dataKey="cost"
                  range={[60, 400]}
                  name="Cost"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter
                  name="Peak Hours"
                  data={peakHoursData}
                  fill="#8B5CF6"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Real-time Alerts */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white">
          <CardHeader>
            <CardTitle>Real-time Alerts</CardTitle>
            <CardDescription>Active system notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                >
                  <div
                    className={`rounded-full p-2 ${
                      alert.type === "critical"
                        ? "bg-red-100 text-red-600"
                        : alert.type === "warning"
                        ? "bg-yellow-100 text-yellow-600"
                        : alert.type === "success"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {alert.type === "critical"
                      ? "⚠️"
                      : alert.type === "warning"
                      ? "🔔"
                      : alert.type === "success"
                      ? "✅"
                      : "ℹ️"}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Alerts
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Building Energy Usage */}
      <Card className="shadow-xl border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Building Energy Usage Breakdown</CardTitle>
              <CardDescription>
                Detailed consumption by category
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                Day
              </Button>
              <Button size="sm" variant="outline">
                Week
              </Button>
              <Button size="sm">Month</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 ">
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <RadialBarChart
                  innerRadius="20%"
                  outerRadius="90%"
                  data={buildingEnergyData}
                  startAngle={180}
                  endAngle={0}
                  className="bg-green-500 rounded-md"
                >
                  <RadialBar minAngle={15} background dataKey="value" />
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
              {buildingEnergyData.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{category.name}</span>
                    <span className="font-bold">{category.value}%</span>
                  </div>
                  <Progress
                    value={category.value}
                    className="h-2"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <div
                      style={{
                        backgroundColor: category.color,
                        width: `${category.value}%`,
                      }}
                      className="h-full rounded-full"
                    />
                  </Progress>
                  <div className="text-xs text-gray-500">
                    Estimated consumption: {Math.round(category.value * 25)} kW
                    • ${Math.round(category.value * 15.5)}/day
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
          <div className="text-sm opacity-90">Current Power Draw</div>
          <div className="text-2xl font-bold mt-1">642 kW</div>
          <div className="text-sm opacity-90 mt-2">↓ 12% from peak</div>
        </div>
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-white shadow-lg">
          <div className="text-sm opacity-90">Battery Storage</div>
          <div className="text-2xl font-bold mt-1">65%</div>
          <div className="text-sm opacity-90 mt-2">4.2 hrs backup</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
          <div className="text-sm opacity-90">Grid Stability</div>
          <div className="text-2xl font-bold mt-1">98.2%</div>
          <div className="text-sm opacity-90 mt-2">Optimal</div>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-4 text-white shadow-lg">
          <div className="text-sm opacity-90">Today's Efficiency</div>
          <div className="text-2xl font-bold mt-1">92%</div>
          <div className="text-sm opacity-90 mt-2">↑ 3% target met</div>
        </div>
      </div>
    </div>
  );
}
