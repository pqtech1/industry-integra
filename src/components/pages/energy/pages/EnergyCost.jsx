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
} from "recharts";

// Mock data for cost analysis
const dailyCostData = [
  { hour: "00:00", cost: 65, rate: 0.12, demand: 450 },
  { hour: "02:00", cost: 62, rate: 0.12, demand: 420 },
  { hour: "04:00", cost: 58, rate: 0.12, demand: 380 },
  { hour: "06:00", cost: 75, rate: 0.15, demand: 520 },
  { hour: "08:00", cost: 112, rate: 0.18, demand: 680 },
  { hour: "10:00", cost: 148, rate: 0.2, demand: 820 },
  { hour: "12:00", cost: 190, rate: 0.22, demand: 950 },
  { hour: "14:00", cost: 216, rate: 0.25, demand: 920 },
  { hour: "16:00", cost: 245, rate: 0.28, demand: 980 },
  { hour: "18:00", cost: 180, rate: 0.22, demand: 850 },
  { hour: "20:00", cost: 126, rate: 0.18, demand: 720 },
  { hour: "22:00", cost: 82, rate: 0.15, demand: 580 },
];

const monthlyCostData = [
  { month: "Jan", actual: 58000, budget: 55000, forecast: 59000 },
  { month: "Feb", actual: 55000, budget: 54000, forecast: 56000 },
  { month: "Mar", actual: 59000, budget: 56000, forecast: 61000 },
  { month: "Apr", actual: 57000, budget: 55000, forecast: 59000 },
  { month: "May", actual: 61000, budget: 58000, forecast: 63000 },
  { month: "Jun", actual: 58500, budget: 57000, forecast: 60500 },
  { month: "Jul", actual: 62000, budget: 59000, forecast: 64000 },
  { month: "Aug", actual: 60500, budget: 58000, forecast: 62500 },
];

const costBreakdown = [
  {
    category: "Energy Charge",
    amount: 42500,
    percentage: 72,
    color: "#3B82F6",
  },
  {
    category: "Demand Charge",
    amount: 12500,
    percentage: 21,
    color: "#10B981",
  },
  { category: "Service Fee", amount: 2500, percentage: 4, color: "#8B5CF6" },
  {
    category: "Renewable Credits",
    amount: 1500,
    percentage: 3,
    color: "#F59E0B",
  },
];

const rateComparison = [
  { provider: "Current Plan", rate: 0.18, fixed: 250, total: 58500 },
  { provider: "Competitor A", rate: 0.16, fixed: 300, total: 52500 },
  { provider: "Competitor B", rate: 0.19, fixed: 200, total: 59500 },
  { provider: "Green Plan", rate: 0.2, fixed: 150, total: 62000 },
  { provider: "Flex Plan", rate: 0.14, fixed: 400, total: 48000 },
];

const peakCostAnalysis = [
  { day: "Monday", peakCost: 2450, duration: "4h", savings: 420 },
  { day: "Tuesday", peakCost: 2620, duration: "5h", savings: 380 },
  { day: "Wednesday", peakCost: 2380, duration: "3h", savings: 520 },
  { day: "Thursday", peakCost: 2810, duration: "6h", savings: 310 },
  { day: "Friday", peakCost: 2550, duration: "4h", savings: 450 },
];

const predictiveForecast = [
  { month: "Jul", predicted: 64000, lower: 61000, upper: 67000 },
  { month: "Aug", predicted: 62500, lower: 59500, upper: 65500 },
  { month: "Sep", predicted: 60500, lower: 57500, upper: 63500 },
  { month: "Oct", predicted: 59000, lower: 56000, upper: 62000 },
  { month: "Nov", predicted: 61500, lower: 58500, upper: 64500 },
  { month: "Dec", predicted: 63000, lower: 60000, upper: 66000 },
];

const costStats = [
  {
    title: "Monthly Cost",
    value: "$58,500",
    change: "+3.2%",
    description: "vs last month",
    color: "text-blue-600",
    icon: "💰",
    trend: "up",
  },
  {
    title: "Cost per kWh",
    value: "$0.18",
    change: "-2.5%",
    description: "vs industry avg",
    color: "text-emerald-600",
    icon: "⚡",
    trend: "down",
  },
  {
    title: "Budget Variance",
    value: "+$1,500",
    change: "+2.6%",
    description: "over budget",
    color: "text-amber-600",
    icon: "📊",
    trend: "up",
  },
  {
    title: "Savings Potential",
    value: "$8,200",
    change: "15%",
    description: "annual opportunity",
    color: "text-purple-600",
    icon: "🎯",
    trend: "target",
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/95 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-2xl min-w-[200px]">
        <p className="text-white font-semibold text-sm mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm mb-1"
          >
            <div className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-300">{entry.name}</span>
            </div>
            <span className="font-medium text-white">
              ${entry.value?.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const RateComparisonTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/95 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-2xl">
        <p className="text-white font-semibold text-sm mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-300">Rate:</span>
            <span className="text-white">${payload[0]?.value}/kWh</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Fixed Fee:</span>
            <span className="text-white">${payload[1]?.value}/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Total Cost:</span>
            <span className="text-white font-semibold">
              ${payload[2]?.value?.toLocaleString()}/month
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function EnergyCost() {
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [forecastPeriod, setForecastPeriod] = useState("6months");
  const [ratePlan, setRatePlan] = useState("current");

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header with Gradient Background */}
      <div className="relative overflow-hidden rounded-2xl bg-black p-6 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Energy Cost Analytics
              </h1>
              <p className="text-blue-100 text-lg max-w-2xl">
                Advanced cost optimization and predictive analytics for
                intelligent energy spending
              </p>
            </div>
            <div className="flex space-x-3">
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
                Generate Report
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Optimize
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {costStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
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
                  <span
                    className={`text-sm font-semibold ${
                      stat.trend === "up"
                        ? "text-red-300"
                        : stat.trend === "down"
                        ? "text-emerald-300"
                        : "text-purple-300"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-blue-200 text-sm ml-2">
                    {stat.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cost Trends Chart */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl">
                    Cost Trends & Forecast
                  </CardTitle>
                  <CardDescription>
                    Actual vs budget with predictive analytics
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Select defaultValue="monthly" onValueChange={setTimeFrame}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Time frame" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="daily">Daily View</SelectItem>
                      <SelectItem value="weekly">Weekly View</SelectItem>
                      <SelectItem value="monthly">Monthly View</SelectItem>
                      <SelectItem value="quarterly">Quarterly View</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart
                  data={monthlyCostData}
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
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <ReferenceLine
                    y={60000}
                    stroke="#EF4444"
                    strokeDasharray="3 3"
                    label={{
                      value: "Budget Limit",
                      position: "insideTopRight",
                    }}
                  />
                  <Bar
                    dataKey="actual"
                    fill="#3B82F6"
                    name="Actual Cost"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                  <Line
                    type="monotone"
                    dataKey="budget"
                    stroke="#10B981"
                    strokeWidth={3}
                    name="Budget"
                    dot={{ r: 5, strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Forecast"
                    dot={{ r: 4, strokeWidth: 2 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t">
              <div className="w-full grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-gray-900">$58.5K</div>
                  <div className="text-gray-500">Current Month</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-emerald-600">$56.5K</div>
                  <div className="text-gray-500">Monthly Budget</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-purple-600">+2.8%</div>
                  <div className="text-gray-500">Variance</div>
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Peak Cost Analysis */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="text-xl">Peak Cost Analysis</CardTitle>
              <CardDescription>
                Identify and optimize high-cost periods
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {peakCostAnalysis.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-200 border"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <span className="font-bold text-amber-600">
                          ${day.peakCost / 1000}k
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{day.day}</div>
                        <div className="text-sm text-gray-500">
                          Peak duration: {day.duration}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-emerald-600">
                        Save ${day.savings}
                      </div>
                      <div className="text-sm text-gray-500">
                        Potential savings
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      Weekly Peak Shaving Opportunity
                    </h4>
                    <p className="text-sm text-blue-600">
                      Shift 30% of peak load to off-peak hours
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl text-emerald-600">
                      $2,080
                    </div>
                    <div className="text-sm text-emerald-600">
                      Weekly savings
                    </div>
                  </div>
                </div>
                <Progress value={65} className="h-2 mt-3 bg-blue-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
                </Progress>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Cost Breakdown */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="text-xl">Cost Breakdown</CardTitle>
              <CardDescription>
                Monthly expenditure distribution
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={costBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="amount"
                    >
                      {costBreakdown.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [
                        `$${value.toLocaleString()}`,
                        "Amount",
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3 mt-6">
                {costBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{item.percentage}%</div>
                      <div className="text-sm text-gray-500">
                        ${item.amount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rate Plan Comparison */}
          <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
              <CardTitle className="text-xl">Rate Plan Comparison</CardTitle>
              <CardDescription>Find the optimal pricing plan</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={rateComparison}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="provider" stroke="#6B7280" />
                  <YAxis
                    stroke="#6B7280"
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip content={<RateComparisonTooltip />} />
                  <Bar
                    dataKey="total"
                    fill="#10B981"
                    name="Total Monthly Cost"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div>
                    <span className="font-semibold">Selected Plan:</span>
                    <span className="ml-2 text-blue-600">Current Plan</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    Current
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div>
                    <span className="font-semibold">Optimal Plan:</span>
                    <span className="ml-2 text-emerald-600">Flex Plan</span>
                  </div>
                  <div className="font-bold text-emerald-600">
                    Save $10,500/year
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                Switch to Optimal Plan
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Predictive Analytics */}
      <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <CardTitle className="text-xl">
                Predictive Cost Analytics
              </CardTitle>
              <CardDescription className="text-gray-300">
                AI-powered forecasting for future energy costs
              </CardDescription>
            </div>
            <Select defaultValue="6months" onValueChange={setForecastPeriod}>
              <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Forecast Period" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="3months">Next 3 Months</SelectItem>
                <SelectItem value="6months">Next 6 Months</SelectItem>
                <SelectItem value="12months">Next 12 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={predictiveForecast}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis
                    stroke="#9CA3AF"
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="colorPredicted"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRange" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="upper"
                    stroke="#8B5CF6"
                    fill="url(#colorRange)"
                    strokeWidth={0}
                  />
                  <Area
                    type="monotone"
                    dataKey="lower"
                    stroke="#8B5CF6"
                    fill="#1F2937"
                    strokeWidth={0}
                  />
                  <Area
                    type="monotone"
                    dataKey="predicted"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    fill="url(#colorPredicted)"
                    name="Predicted Cost"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                  <div className="text-sm text-blue-600 font-medium">
                    Predicted Savings
                  </div>
                  <div className="text-2xl font-bold text-blue-800 mt-1">
                    $12,800
                  </div>
                  <div className="text-sm text-blue-600">
                    Next 6 months with optimizations
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
                  <div className="text-sm text-emerald-600 font-medium">
                    Confidence Level
                  </div>
                  <div className="text-2xl font-bold text-emerald-800 mt-1">
                    92%
                  </div>
                  <div className="text-sm text-emerald-600">
                    Forecast accuracy
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Recommended Actions
                </h4>
                {[
                  {
                    action: "Negotiate rate with provider",
                    impact: "Save $3,200/month",
                    priority: "high",
                  },
                  {
                    action: "Implement peak shaving",
                    impact: "Reduce 25% peak costs",
                    priority: "medium",
                  },
                  {
                    action: "Install solar panels",
                    impact: "Save $1,500/month",
                    priority: "low",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <div className="font-medium">{item.action}</div>
                      <div className="text-sm text-gray-500">{item.impact}</div>
                    </div>
                    <Badge
                      className={
                        item.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : item.priority === "medium"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {item.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Panel */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-xl border-0 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader>
            <CardTitle className="text-blue-800">Cost Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="font-semibold text-blue-700">
                  Smart Load Shifting
                </Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label className="font-semibold text-blue-700">
                  Demand Response
                </Label>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <Label className="font-semibold text-blue-700">
                  Auto-Negotiation
                </Label>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Apply Changes
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-xl border-0 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardHeader>
            <CardTitle className="text-emerald-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start bg-white"
              >
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Download Detailed Report
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-white"
              >
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule Cost Review
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-white"
              >
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Setup Alerts & Notifications
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-0 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader>
            <CardTitle className="text-purple-800">
              Performance Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-purple-700">
                  Cost Efficiency
                </span>
                <span className="font-bold text-purple-800">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-purple-200">
                <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600" />
              </Progress>

              <div className="flex justify-between items-center">
                <span className="font-medium text-purple-700">
                  Budget Adherence
                </span>
                <span className="font-bold text-purple-800">92%</span>
              </div>
              <Progress value={92} className="h-2 bg-purple-200">
                <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600" />
              </Progress>

              <div className="flex justify-between items-center">
                <span className="font-medium text-purple-700">
                  Savings Rate
                </span>
                <span className="font-bold text-purple-800">15%</span>
              </div>
              <Progress value={15} className="h-2 bg-purple-200">
                <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600" />
              </Progress>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
