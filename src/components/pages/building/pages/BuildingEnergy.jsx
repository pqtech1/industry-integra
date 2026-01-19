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
import { Badge } from "@/components/ui/badge";
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
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Zap,
  Thermometer,
  Droplets,
  Sun,
  Wind,
  Leaf,
  Battery,
  Power,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Settings,
  BarChart3,
  Filter,
  Download,
  Plus,
  Eye,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  Calendar,
  MapPin,
  Wifi,
  Volume2,
  Lock,
  Unlock,
  Home,
  Smartphone,
  Cpu,
  Bell,
  History,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  DollarSign,
  BatteryCharging,
  Cloud,
  Target,
  PieChart as PieChartIcon,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell,
  ComposedChart,
} from "recharts";

// Energy metrics
const energyMetrics = [
  {
    title: "Total Consumption",
    value: "2,450 kWh",
    change: "-12%",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Peak Demand",
    value: "215 kW",
    change: "-8%",
    icon: Power,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Solar Generation",
    value: "850 kWh",
    change: "+15%",
    icon: Sun,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Energy Cost",
    value: "$1,850",
    change: "-18%",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Carbon Footprint",
    value: "1.2t CO₂",
    change: "-22%",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Efficiency Score",
    value: "87%",
    change: "+5%",
    icon: Target,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

// System energy consumption
const systemEnergy = [
  {
    system: "HVAC",
    consumption: 45,
    status: "high",
    efficiency: 78,
    icon: Thermometer,
  },
  {
    system: "Lighting",
    consumption: 25,
    status: "optimal",
    efficiency: 92,
    icon: Sun,
  },
  {
    system: "IT Equipment",
    consumption: 20,
    status: "optimal",
    efficiency: 88,
    icon: Cpu,
  },
  {
    system: "Elevators",
    consumption: 5,
    status: "warning",
    efficiency: 65,
    icon: ArrowUpRight,
  },
  {
    system: "Plumbing",
    consumption: 3,
    status: "optimal",
    efficiency: 85,
    icon: Droplets,
  },
  {
    system: "Other",
    consumption: 2,
    status: "optimal",
    efficiency: 90,
    icon: Settings,
  },
];

// Energy consumption data
const energyConsumption = [
  { time: "00:00", consumption: 35, solar: 0, grid: 35, cost: 4.2 },
  { time: "04:00", consumption: 30, solar: 0, grid: 30, cost: 3.6 },
  { time: "08:00", consumption: 120, solar: 45, grid: 75, cost: 14.4 },
  { time: "12:00", consumption: 180, solar: 120, grid: 60, cost: 21.6 },
  { time: "16:00", consumption: 210, solar: 85, grid: 125, cost: 25.2 },
  { time: "20:00", consumption: 160, solar: 15, grid: 145, cost: 19.2 },
  { time: "22:00", consumption: 80, solar: 0, grid: 80, cost: 9.6 },
];

// Energy sources distribution
const energySources = [
  {
    source: "Grid Power",
    percentage: 65,
    value: 1592,
    color: "#3b82f6",
    icon: Power,
  },
  {
    source: "Solar PV",
    percentage: 25,
    value: 612,
    color: "#f59e0b",
    icon: Sun,
  },
  {
    source: "Battery Storage",
    percentage: 8,
    value: 196,
    color: "#10b981",
    icon: BatteryCharging,
  },
  {
    source: "Generator",
    percentage: 2,
    value: 50,
    color: "#ef4444",
    icon: Zap,
  },
];

// Zone energy consumption
const zoneEnergy = [
  {
    zone: "Open Workspace",
    consumption: 420,
    occupancy: 92,
    efficiency: 85,
    status: "optimal",
  },
  {
    zone: "Meeting Rooms",
    consumption: 280,
    occupancy: 65,
    efficiency: 78,
    status: "good",
  },
  {
    zone: "Executive Floor",
    consumption: 380,
    occupancy: 78,
    efficiency: 82,
    status: "optimal",
  },
  {
    zone: "Cafeteria",
    consumption: 320,
    occupancy: 85,
    efficiency: 72,
    status: "warning",
  },
  {
    zone: "Server Room",
    consumption: 450,
    occupancy: 0,
    efficiency: 95,
    status: "critical",
  },
  {
    zone: "Parking Garage",
    consumption: 180,
    occupancy: 15,
    efficiency: 68,
    status: "fair",
  },
];

// Energy alerts
const energyAlerts = [
  {
    id: 1,
    type: "critical",
    title: "Peak Demand Exceeded",
    location: "Server Room",
    value: "245 kW",
    time: "15 min ago",
  },
  {
    id: 2,
    type: "warning",
    title: "Low Battery Storage",
    location: "Energy Storage",
    value: "18%",
    time: "30 min ago",
  },
  {
    id: 3,
    type: "info",
    title: "Solar Peak Generation",
    location: "Roof PV",
    value: "125 kW",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "warning",
    title: "High HVAC Consumption",
    location: "Floor 3",
    value: "55%",
    time: "2 hours ago",
  },
  {
    id: 5,
    type: "info",
    title: "Energy Saving Mode",
    location: "All Systems",
    value: "Activated",
    time: "3 hours ago",
  },
];

// Equipment energy usage
const equipmentUsage = [
  {
    equipment: "HVAC Unit #1",
    type: "HVAC",
    location: "Floor 3",
    power: 8.5,
    status: "active",
    efficiency: 78,
  },
  {
    equipment: "LED Panel Lights",
    type: "Lighting",
    location: "Open Workspace",
    power: 4.2,
    status: "active",
    efficiency: 92,
  },
  {
    equipment: "Server Rack",
    type: "IT",
    location: "Server Room",
    power: 12.8,
    status: "critical",
    efficiency: 88,
  },
  {
    equipment: "Water Heater",
    type: "Plumbing",
    location: "Floor 2",
    power: 5.5,
    status: "active",
    efficiency: 85,
  },
  {
    equipment: "Elevator #3",
    type: "Transport",
    location: "Main Shaft",
    power: 7.2,
    status: "warning",
    efficiency: 65,
  },
  {
    equipment: "Coffee Machine",
    type: "Kitchen",
    location: "Break Room",
    power: 1.5,
    status: "idle",
    efficiency: 45,
  },
];

// Energy cost analysis
const costAnalysis = [
  { day: "Mon", cost: 420, consumption: 2450, peak: 215 },
  { day: "Tue", cost: 380, consumption: 2380, peak: 205 },
  { day: "Wed", cost: 450, consumption: 2510, peak: 225 },
  { day: "Thu", cost: 395, consumption: 2320, peak: 195 },
  { day: "Fri", cost: 410, consumption: 2150, peak: 185 },
  { day: "Sat", cost: 220, consumption: 1850, peak: 120 },
  { day: "Sun", cost: 180, consumption: 1750, peak: 95 },
];

// Status badge component
const StatusBadge = ({ status }) => {
  const config = {
    optimal: {
      color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      label: "Optimal",
      Icon: CheckCircle2,
    },
    good: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Good",
      Icon: CheckCircle2,
    },
    warning: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Warning",
      Icon: AlertTriangle,
    },
    critical: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Critical",
      Icon: XCircle,
    },
    high: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "High",
      Icon: AlertCircle,
    },
    active: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Active",
      Icon: Activity,
    },
    idle: {
      color: "bg-gray-100 text-gray-800 hover:bg-gray-100",
      label: "Idle",
      Icon: Clock,
    },
    fair: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Fair",
      Icon: AlertTriangle,
    },
  };

  const badgeConfig = config[status] || config.good;
  const { Icon } = badgeConfig;

  return (
    <Badge
      variant="secondary"
      className={`${badgeConfig.color} gap-1.5 px-3 py-1`}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-medium">{badgeConfig.label}</span>
    </Badge>
  );
};

// Energy gauge component
const EnergyGauge = ({
  value,
  max = 100,
  label,
  unit = "kWh",
  size = "medium",
}) => {
  const percentage = (value / max) * 100;

  const getGaugeColor = (percent) => {
    if (percent <= 33) return "bg-emerald-500";
    if (percent <= 66) return "bg-blue-500";
    if (percent <= 85) return "bg-amber-500";
    return "bg-red-500";
  };

  const sizeClass = size === "large" ? "h-32 w-32" : "h-20 w-20";
  const textSize = size === "large" ? "text-3xl" : "text-xl";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`${textSize} font-bold text-gray-900`}>{value}</div>
            <div className="text-xs text-gray-600">{unit}</div>
          </div>
        </div>
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 283} 283`}
            className={getGaugeColor(percentage)}
          />
        </svg>
      </div>
      <div className="mt-2 text-center">
        <div className="text-sm font-medium text-gray-900">{label}</div>
        <div className="text-xs text-gray-500">
          {percentage.toFixed(0)}% of max
        </div>
      </div>
    </div>
  );
};

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100">
        <p className="text-gray-900 font-bold text-sm mb-3">{label}</p>
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
              <span className="text-gray-600 font-medium">{entry.name}</span>
            </div>
            <span className="font-bold text-gray-900">
              {entry.value} {entry.name === "cost" ? "$" : "kWh"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function BuildingEnergy() {
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [demandResponse, setDemandResponse] = useState(true);
  const [energyMode, setEnergyMode] = useState("balanced");
  const [peakShaving, setPeakShaving] = useState(true);
  const [solarPriority, setSolarPriority] = useState([75]);
  const [batteryReserve, setBatteryReserve] = useState([30]);
  const [selectedTimeRange, setSelectedTimeRange] = useState("today");

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            Building Energy Intelligence
          </h1>
          <p className="text-gray-600 mt-2">
            Real-time energy monitoring, analysis, and optimization
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-md transition-all">
            <Plus className="h-4 w-4" />
            New Energy Rule
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {energyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-white rounded-xl p-4 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-700">
                    {metric.title}
                  </span>
                  <div className={`p-1.5 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`h-4 w-4 ${metric.color}`} />
                  </div>
                </div>
                <div className={`text-xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={
                      metric.change.startsWith("+")
                        ? "text-emerald-600 border-emerald-200 bg-emerald-50"
                        : metric.change.startsWith("-")
                        ? "text-blue-600 border-blue-200 bg-blue-50"
                        : "text-gray-600 border-gray-200"
                    }
                  >
                    <span className="text-xs font-semibold">
                      {metric.change}
                    </span>
                  </Badge>
                  <span className="text-xs text-gray-500">vs yesterday</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Energy Overview & System Consumption */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Energy Overview */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Energy Overview
                </h2>
                <p className="text-gray-600 text-sm">
                  Real-time energy consumption and generation
                </p>
              </div>
              <Select
                value={selectedTimeRange}
                onValueChange={setSelectedTimeRange}
              >
                <SelectTrigger className="w-32 shadow-sm">
                  <SelectValue placeholder="Time range" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={energyConsumption}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="time" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="solar"
                    name="Solar Generation"
                    fill="url(#solarGradient)"
                    stroke="#f59e0b"
                    strokeWidth={2}
                  />
                  <Bar
                    dataKey="consumption"
                    name="Total Consumption"
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    type="monotone"
                    dataKey="cost"
                    name="Cost ($)"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <defs>
                    <linearGradient
                      id="solarGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="text-lg font-bold text-blue-700">2,450 kWh</div>
                <div className="text-xs text-blue-600">Total Today</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100 hover:border-amber-200 transition-colors">
                <div className="text-lg font-bold text-amber-700">850 kWh</div>
                <div className="text-xs text-amber-600">Solar Generated</div>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100 hover:border-emerald-200 transition-colors">
                <div className="text-lg font-bold text-emerald-700">$1,850</div>
                <div className="text-xs text-emerald-600">Monthly Cost</div>
              </div>
            </div>
          </div>
        </div>

        {/* System Energy Consumption */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            System Energy Consumption
          </h2>

          <div className="space-y-4">
            {systemEnergy.map((system, index) => {
              const Icon = system.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        system.status === "optimal"
                          ? "bg-emerald-100"
                          : system.status === "warning"
                          ? "bg-amber-100"
                          : "bg-red-100"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          system.status === "optimal"
                            ? "text-emerald-600"
                            : system.status === "warning"
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {system.system}
                      </div>
                      <div className="text-sm text-gray-500">
                        {system.consumption}% of total
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      {system.efficiency}%
                    </div>
                    <StatusBadge status={system.status} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-emerald-900">
                  Overall Efficiency
                </div>
                <div className="text-2xl font-bold text-emerald-900">87%</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-emerald-700">Above Target</div>
                <div className="text-xs text-emerald-600">+7% vs baseline</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Sources & Zone Consumption */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Energy Sources Distribution */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Energy Sources Distribution
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie
                    data={energySources}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="percentage"
                    label={(entry) => `${entry.percentage}%`}
                  >
                    {energySources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${props.payload.value} kWh (${value}%)`,
                      props.payload.source,
                    ]}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                      backgroundColor: "white",
                    }}
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {energySources.map((source, index) => {
                const Icon = source.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-white border border-gray-200">
                        <Icon className="h-4 w-4 text-gray-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        {source.source}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">
                        {source.percentage}%
                      </span>
                      <div className="text-xs text-gray-500">
                        {source.value} kWh
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Zone Energy Consumption */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Zone Energy Consumption
              </h2>
              <p className="text-gray-600 text-sm">
                Energy usage by building zones
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <Filter className="h-3.5 w-3.5" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {zoneEnergy.map((zone, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      zone.status === "optimal"
                        ? "bg-emerald-100"
                        : zone.status === "good"
                        ? "bg-blue-100"
                        : zone.status === "warning"
                        ? "bg-amber-100"
                        : "bg-red-100"
                    }`}
                  >
                    <MapPin
                      className={`h-5 w-5 ${
                        zone.status === "optimal"
                          ? "text-emerald-600"
                          : zone.status === "good"
                          ? "text-blue-600"
                          : zone.status === "warning"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{zone.zone}</div>
                    <div className="text-sm text-gray-500">
                      {zone.occupancy}% occupancy
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="font-bold text-gray-900">
                      {zone.consumption} kWh
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-20 bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${
                          zone.efficiency >= 85
                            ? "bg-emerald-500"
                            : zone.efficiency >= 75
                            ? "bg-blue-500"
                            : zone.efficiency >= 65
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${zone.efficiency}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">
                      {zone.efficiency}%
                    </span>
                  </div>
                  <StatusBadge status={zone.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Energy Control & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Energy Control Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Energy Control Panel
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-semibold text-gray-900">
                      Auto Optimization
                    </Label>
                    <p className="text-sm text-gray-500 mt-1">
                      Automatically optimize energy usage
                    </p>
                  </div>
                  <Switch
                    checked={autoOptimize}
                    onCheckedChange={setAutoOptimize}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-semibold text-gray-900">
                      Demand Response
                    </Label>
                    <p className="text-sm text-gray-500 mt-1">
                      Participate in grid programs
                    </p>
                  </div>
                  <Switch
                    checked={demandResponse}
                    onCheckedChange={setDemandResponse}
                    className="data-[state=checked]:bg-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-semibold text-gray-900">
                    Peak Shaving
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Reduce consumption during peak hours
                  </p>
                </div>
                <Switch
                  checked={peakShaving}
                  onCheckedChange={setPeakShaving}
                  className="data-[state=checked]:bg-amber-500"
                />
              </div>

              <Separator />

              <div>
                <Label className="font-semibold text-gray-900 mb-3 block">
                  Energy Mode
                </Label>
                <Select value={energyMode} onValueChange={setEnergyMode}>
                  <SelectTrigger className="w-full shadow-sm">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="economy" className="text-emerald-600">
                      Economy (Max Savings)
                    </SelectItem>
                    <SelectItem value="balanced">Balanced (Default)</SelectItem>
                    <SelectItem value="performance" className="text-blue-600">
                      Performance (Max Comfort)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Solar Priority
                    </Label>
                    <span className="font-bold text-amber-600">
                      {solarPriority[0]}%
                    </span>
                  </div>
                  <Slider
                    value={solarPriority}
                    onValueChange={setSolarPriority}
                    min={0}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Grid First</span>
                    <span>Balanced</span>
                    <span>Solar First</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold text-gray-900">
                      Battery Reserve
                    </Label>
                    <span className="font-bold text-emerald-600">
                      {batteryReserve[0]}%
                    </span>
                  </div>
                  <Slider
                    value={batteryReserve}
                    onValueChange={setBatteryReserve}
                    min={10}
                    max={80}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Minimal</span>
                    <span>Standard</span>
                    <span>High Reserve</span>
                  </div>
                </div>
              </div>

              <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all">
                Apply Energy Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Energy Alerts */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Energy Alerts</h2>
              <p className="text-gray-600 text-sm">
                Real-time energy notifications
              </p>
            </div>
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
              2 Active
            </Badge>
          </div>

          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {energyAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-xl border ${
                    alert.type === "critical"
                      ? "border-red-200 bg-red-50 hover:bg-red-100"
                      : alert.type === "warning"
                      ? "border-amber-200 bg-amber-50 hover:bg-amber-100"
                      : "border-blue-200 bg-blue-50 hover:bg-blue-100"
                  } transition-colors`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-1.5 rounded-full mt-0.5 ${
                          alert.type === "critical"
                            ? "bg-red-100"
                            : alert.type === "warning"
                            ? "bg-amber-100"
                            : "bg-blue-100"
                        }`}
                      >
                        <AlertCircle
                          className={`h-4 w-4 ${
                            alert.type === "critical"
                              ? "text-red-600"
                              : alert.type === "warning"
                              ? "text-amber-600"
                              : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {alert.title}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {alert.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        alert.type === "critical"
                          ? "border-red-200 text-red-700 bg-red-100"
                          : alert.type === "warning"
                          ? "border-amber-200 text-amber-700 bg-amber-100"
                          : "border-blue-200 text-blue-700 bg-blue-100"
                      }
                    >
                      {alert.value}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/50">
                    <div className="text-sm text-gray-500">
                      {alert.type === "critical"
                        ? "Critical Alert"
                        : alert.type === "warning"
                        ? "Warning"
                        : "Information"}
                    </div>
                    <div className="text-xs text-gray-500">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Cost Analysis & Equipment Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cost Analysis */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Weekly Cost Analysis
              </h2>
              <p className="text-gray-600 text-sm">
                Daily energy costs and consumption
              </p>
            </div>
            <Select defaultValue="week">
              <SelectTrigger className="w-32 shadow-sm">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={costAnalysis}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#666" fontSize={12} />
                <YAxis yAxisId="left" stroke="#666" fontSize={12} />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#666"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  yAxisId="left"
                  dataKey="consumption"
                  name="Consumption (kWh)"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="cost"
                  name="Cost ($)"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-sm font-semibold text-blue-700 mb-1">
                Weekly Total
              </div>
              <div className="text-lg font-bold text-blue-900">$2,455</div>
            </div>
            <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="text-sm font-semibold text-emerald-700 mb-1">
                Avg Daily
              </div>
              <div className="text-lg font-bold text-emerald-900">$351</div>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="text-sm font-semibold text-amber-700 mb-1">
                Peak Day
              </div>
              <div className="text-lg font-bold text-amber-900">$450</div>
            </div>
          </div>
        </div>

        {/* Equipment Energy Usage */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Equipment Energy Usage
              </h2>
              <p className="text-gray-600 text-sm">
                Top energy-consuming equipment
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <Eye className="h-3.5 w-3.5" />
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {equipmentUsage.map((equipment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      equipment.status === "active"
                        ? "bg-blue-100"
                        : equipment.status === "critical"
                        ? "bg-red-100"
                        : equipment.status === "warning"
                        ? "bg-amber-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <Zap
                      className={`h-5 w-5 ${
                        equipment.status === "active"
                          ? "text-blue-600"
                          : equipment.status === "critical"
                          ? "text-red-600"
                          : equipment.status === "warning"
                          ? "text-amber-600"
                          : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {equipment.equipment}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <span>{equipment.type}</span>
                      <span>•</span>
                      <MapPin className="h-3 w-3" />
                      <span>{equipment.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Power className="h-4 w-4 text-gray-500" />
                    <span className="font-bold text-gray-900">
                      {equipment.power} kW
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${
                          equipment.efficiency >= 85
                            ? "bg-emerald-500"
                            : equipment.efficiency >= 75
                            ? "bg-blue-500"
                            : equipment.efficiency >= 65
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${equipment.efficiency}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">
                      {equipment.efficiency}%
                    </span>
                    <StatusBadge status={equipment.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-blue-900">
                  Total Equipment Power
                </div>
                <div className="text-2xl font-bold text-blue-900">39.5 kW</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-700">Active Now</div>
                <div className="text-xs text-blue-600">4 of 6 equipment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Energy Saved</div>
              <div className="text-xl font-bold text-emerald-600">
                1,250 kWh
              </div>
            </div>
            <Leaf className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Cost Savings</div>
              <div className="text-xl font-bold text-blue-600">$1,850</div>
            </div>
            <DollarSign className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">CO₂ Reduced</div>
              <div className="text-xl font-bold text-green-600">2.8t</div>
            </div>
            <Cloud className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Peak Reduction</div>
              <div className="text-xl font-bold text-amber-600">-18%</div>
            </div>
            <TrendingDown className="h-8 w-8 text-amber-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
