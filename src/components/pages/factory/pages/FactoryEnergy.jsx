import React, { useState, useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Battery,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Cpu,
  DollarSign,
  Download,
  Eye,
  Factory,
  Filter,
  Flame,
  HardDrive,
  Home,
  Layers,
  LineChart,
  Package,
  Play,
  Power,
  RefreshCw,
  Settings,
  Shield,
  Sliders,
  Sun,
  Thermometer,
  TrendingDown,
  TrendingUp,
  Users,
  Wifi,
  Wind,
  Zap,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Cloud,
  CloudRain,
  Droplets,
  FileText,
  FilterX,
  Globe,
  Leaf,
  Lightbulb,
  Moon,
  Plus,
  Target,
  ThermometerSun,
  Trash2,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Volume2,
  XCircle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
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
  Scatter,
  ReferenceLine,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

// Components
const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  color,
  trend,
  subtitle,
  unit,
}) => (
  <div className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-xs font-medium text-gray-600 mb-1">{title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-xl font-bold text-gray-900">{value}</h3>
            {unit && <span className="text-sm text-gray-500">{unit}</span>}
          </div>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div
          className={`p-2 rounded-lg ${color.bg} group-hover:scale-110 transition-transform`}
        >
          <Icon className={`h-5 w-5 ${color.text}`} />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        {trend === "up" ? (
          <TrendingUp className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <TrendingDown className="h-3.5 w-3.5 text-red-500" />
        )}
        <span
          className={`text-xs font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}
        >
          {change}
        </span>
        <span className="text-gray-500 text-xs ml-auto">vs yesterday</span>
      </div>
    </div>
  </div>
);

const EnergySourceCard = ({
  name,
  type,
  consumption,
  percentage,
  cost,
  efficiency,
  status,
}) => {
  const getTypeColor = (type) => {
    switch (type) {
      case "electricity":
        return { bg: "bg-blue-100", text: "text-blue-700", icon: Zap };
      case "gas":
        return { bg: "bg-orange-100", text: "text-orange-700", icon: Flame };
      case "solar":
        return { bg: "bg-amber-100", text: "text-amber-700", icon: Sun };
      case "wind":
        return { bg: "bg-cyan-100", text: "text-cyan-700", icon: Wind };
      case "water":
        return { bg: "bg-sky-100", text: "text-sky-700", icon: Droplets };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700", icon: Power };
    }
  };

  const colors = getTypeColor(type);
  const Icon = colors.icon;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors.bg}`}>
            <Icon className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs font-medium ${colors.text}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
              <span className="text-xs text-gray-500">•</span>
              <span
                className={`text-xs font-medium ${
                  status === "optimal"
                    ? "text-green-600"
                    : status === "warning"
                      ? "text-amber-600"
                      : "text-red-600"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{consumption}</div>
          <div className="text-xs text-gray-500">Consumption</div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Usage</span>
          <span className="font-medium text-gray-900">
            {percentage}% of total
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              status === "optimal"
                ? "bg-green-500"
                : status === "warning"
                  ? "bg-amber-500"
                  : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-2">
          <DollarSign className="h-3.5 w-3.5 text-gray-500" />
          <div>
            <div className="text-gray-600">Cost</div>
            <div className="font-medium text-gray-900">${cost}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="h-3.5 w-3.5 text-gray-500" />
          <div>
            <div className="text-gray-600">Efficiency</div>
            <div className="font-medium text-gray-900">{efficiency}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm mb-1"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-600">{entry.name}:</span>
            </div>
            <span className="font-semibold text-gray-900">
              {entry.value}
              {entry.dataKey === "consumption"
                ? " MW"
                : entry.dataKey === "cost"
                  ? "$"
                  : ""}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Data
const energyConsumptionData = [
  { time: "00:00", consumption: 1.2, cost: 120, peak: false },
  { time: "04:00", consumption: 1.8, cost: 180, peak: false },
  { time: "08:00", consumption: 2.5, cost: 250, peak: true },
  { time: "12:00", consumption: 2.8, cost: 280, peak: true },
  { time: "16:00", consumption: 2.4, cost: 240, peak: false },
  { time: "20:00", consumption: 1.6, cost: 160, peak: false },
];

const energySources = [
  {
    name: "Grid Electricity",
    type: "electricity",
    consumption: "1.45MW",
    percentage: 65,
    cost: 1450,
    efficiency: 88,
    status: "optimal",
  },
  {
    name: "Solar Panels",
    type: "solar",
    consumption: "0.85MW",
    percentage: 25,
    cost: 0,
    efficiency: 92,
    status: "optimal",
  },
  {
    name: "Natural Gas",
    type: "gas",
    consumption: "0.35MW",
    percentage: 8,
    cost: 420,
    efficiency: 75,
    status: "warning",
  },
  {
    name: "Wind Turbines",
    type: "wind",
    consumption: "0.18MW",
    percentage: 4,
    cost: 0,
    efficiency: 85,
    status: "optimal",
  },
  {
    name: "Water Heating",
    type: "water",
    consumption: "0.12MW",
    percentage: 3,
    cost: 150,
    efficiency: 68,
    status: "warning",
  },
];

const equipmentEnergyData = [
  {
    equipment: "CNC Machines",
    consumption: 0.85,
    percentage: 32,
    cost: 850,
    efficiency: 78,
  },
  {
    equipment: "Assembly Lines",
    consumption: 0.65,
    percentage: 25,
    cost: 650,
    efficiency: 85,
  },
  {
    equipment: "HVAC System",
    consumption: 0.45,
    percentage: 17,
    cost: 450,
    efficiency: 65,
  },
  {
    equipment: "Lighting",
    consumption: 0.28,
    percentage: 11,
    cost: 280,
    efficiency: 92,
  },
  {
    equipment: "Pumps & Compressors",
    consumption: 0.22,
    percentage: 8,
    cost: 220,
    efficiency: 72,
  },
  {
    equipment: "Office Equipment",
    consumption: 0.15,
    percentage: 6,
    cost: 150,
    efficiency: 88,
  },
];

const carbonData = [
  { month: "Jan", carbon: 42.5, target: 40, offset: 8.2 },
  { month: "Feb", carbon: 38.2, target: 38, offset: 9.5 },
  { month: "Mar", carbon: 35.8, target: 36, offset: 10.8 },
  { month: "Apr", carbon: 32.1, target: 34, offset: 12.3 },
  { month: "May", carbon: 29.4, target: 32, offset: 14.2 },
  { month: "Jun", carbon: 26.8, target: 30, offset: 16.5 },
];

const peakDemandTimes = [
  { hour: "08:00 - 09:00", demand: 2.8, cost: 280, efficiency: 72 },
  { hour: "12:00 - 13:00", demand: 2.6, cost: 260, efficiency: 75 },
  { hour: "16:00 - 17:00", demand: 2.4, cost: 240, efficiency: 78 },
  { hour: "09:00 - 10:00", demand: 2.3, cost: 230, efficiency: 80 },
  { hour: "14:00 - 15:00", demand: 2.2, cost: 220, efficiency: 82 },
];

const FactoryEnergy = () => {
  const [time, setTime] = useState(new Date());
  const [timeRange, setTimeRange] = useState("day");
  const [selectedSource, setSelectedSource] = useState(null);
  const [autoOptimization, setAutoOptimization] = useState(true);
  const [peakShavingEnabled, setPeakShavingEnabled] = useState(true);
  const [solarForecast, setSolarForecast] = useState(85);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const statCards = [
    {
      title: "Total Consumption",
      value: "2.85",
      change: "-3.2%",
      icon: Zap,
      color: { bg: "bg-blue-100", text: "text-blue-600" },
      trend: "down",
      subtitle: "Current load",
      unit: "MW",
    },
    {
      title: "Daily Cost",
      value: "$2,450",
      change: "-5.8%",
      icon: DollarSign,
      color: { bg: "bg-green-100", text: "text-green-600" },
      trend: "down",
      subtitle: "Today's expenditure",
    },
    {
      title: "Renewable Energy",
      value: "32%",
      change: "+8.5%",
      icon: Sun,
      color: { bg: "bg-amber-100", text: "text-amber-600" },
      trend: "up",
      subtitle: "Of total consumption",
    },
    {
      title: "Carbon Emissions",
      value: "26.8t",
      change: "-12.3%",
      icon: Cloud,
      color: { bg: "bg-gray-100", text: "text-gray-600" },
      trend: "down",
      subtitle: "This month",
    },
    {
      title: "Energy Efficiency",
      value: "84%",
      change: "+2.1%",
      icon: Activity,
      color: { bg: "bg-emerald-100", text: "text-emerald-600" },
      trend: "up",
      subtitle: "Overall score",
    },
    {
      title: "Peak Demand",
      value: "2.8MW",
      change: "-1.2%",
      icon: TrendingUpIcon,
      color: { bg: "bg-purple-100", text: "text-purple-600" },
      trend: "down",
      subtitle: "Today's peak",
    },
  ];

  const totalConsumption = energySources.reduce((sum, source) => {
    const value = parseFloat(source.consumption);
    return sum + (isNaN(value) ? 0 : value);
  }, 0);

  const totalCost = energySources.reduce((sum, source) => sum + source.cost, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Energy Management
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Monitor, optimize, and reduce energy consumption
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {time.toLocaleDateString()}
              </div>
            </div>
            <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {statCards.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Energy Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Real-time Consumption */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Real-time Energy Consumption
              </h3>
              <p className="text-sm text-gray-600">
                Hourly usage and cost analysis
              </p>
            </div>
            <select
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={energyConsumptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" fontSize={11} stroke="#666" />
                <YAxis yAxisId="left" fontSize={11} stroke="#666" />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  fontSize={11}
                  stroke="#666"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  yAxisId="left"
                  dataKey="consumption"
                  name="Consumption (MW)"
                  fill="#3b82f6"
                  radius={[2, 2, 0, 0]}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="cost"
                  name="Cost ($)"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Energy Sources Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Energy Sources
              </h3>
              <p className="text-sm text-gray-600">
                Consumption by source type
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">
                {totalConsumption.toFixed(2)} MW
              </div>
              <div className="text-xs text-gray-600">Total consumption</div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={energySources}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {energySources.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.type === "electricity"
                          ? "#3b82f6"
                          : entry.type === "solar"
                            ? "#f59e0b"
                            : entry.type === "gas"
                              ? "#f97316"
                              : entry.type === "wind"
                                ? "#06b6d4"
                                : "#0ea5e9"
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Energy Sources & Equipment Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Energy Sources Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Energy Sources
                </h3>
                <p className="text-sm text-gray-600">
                  Detailed breakdown by source
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-lg hover:bg-blue-200 transition-colors">
                  <Filter className="inline-block h-4 w-4 mr-1" />
                  Filter
                </button>
                <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                  <RefreshCw className="inline-block h-4 w-4 mr-1" />
                  Refresh
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {energySources.map((source, index) => (
                <EnergySourceCard
                  key={index}
                  {...source}
                  onClick={() => setSelectedSource(source)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Energy Usage */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Equipment Energy Usage
            </h3>
            <div className="space-y-3">
              {equipmentEnergyData.map((equipment, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-gray-500" />
                      <span className="font-medium text-gray-900">
                        {equipment.equipment}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {equipment.consumption} MW
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: `${equipment.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Cost: ${equipment.cost}</span>
                    <span>Eff: {equipment.efficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Peak Demand Times */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUpIcon className="h-5 w-5 text-purple-500" />
              <h3 className="text-lg font-bold text-gray-900">
                Peak Demand Times
              </h3>
            </div>

            <div className="space-y-3">
              {peakDemandTimes.map((peak, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900">
                      {peak.hour}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {peak.demand} MW
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Cost: ${peak.cost}</span>
                    <span>Efficiency: {peak.efficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carbon & Sustainability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Carbon Emissions Tracking */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Carbon Emissions
              </h3>
              <p className="text-sm text-gray-600">
                Monthly emissions vs target
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">26.8 tons</div>
              <div className="text-xs text-green-600">-12.3% vs target</div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={carbonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Area
                  type="monotone"
                  dataKey="carbon"
                  name="Carbon Emissions (tons)"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.2}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  name="Target"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sustainability Metrics */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Sustainability Metrics
              </h3>
              <p className="text-sm text-gray-600">Environmental performance</p>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-green-600">
                Grade: A
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-gray-900">
                  Solar Generation
                </span>
              </div>
              <div className="text-lg font-bold text-gray-900">0.85 MW</div>
              <div className="text-xs text-gray-600">Today's production</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div
                  className="h-1.5 rounded-full bg-amber-500"
                  style={{ width: `${solarForecast}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Forecast: {solarForecast}%
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Wind className="h-4 w-4 text-cyan-500" />
                <span className="text-sm font-medium text-gray-900">
                  Wind Power
                </span>
              </div>
              <div className="text-lg font-bold text-gray-900">0.18 MW</div>
              <div className="text-xs text-gray-600">Current output</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div
                  className="h-1.5 rounded-full bg-cyan-500"
                  style={{ width: "72%" }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">Capacity: 72%</div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium text-gray-900">
                  Carbon Offset
                </span>
              </div>
              <div className="text-lg font-bold text-gray-900">16.5t</div>
              <div className="text-xs text-gray-600">This month</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div
                  className="h-1.5 rounded-full bg-emerald-500"
                  style={{ width: "82%" }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: 82%</div>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Battery className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-900">
                  Energy Storage
                </span>
              </div>
              <div className="text-lg font-bold text-gray-900">65%</div>
              <div className="text-xs text-gray-600">Battery level</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div
                  className="h-1.5 rounded-full bg-purple-500"
                  style={{ width: "65%" }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">2.1 MW capacity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Optimization Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Energy Optimization Controls
            </h3>
            <p className="text-sm text-gray-600">
              Automated energy management settings
            </p>
          </div>
          <div
            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
              autoOptimization
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Auto-optimization: {autoOptimization ? "ON" : "OFF"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">Peak Shaving</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={peakShavingEnabled}
                  onChange={() => setPeakShavingEnabled(!peakShavingEnabled)}
                  className="sr-only"
                  id="peak-shaving"
                />
                <label
                  htmlFor="peak-shaving"
                  className={`block w-10 h-6 rounded-full cursor-pointer ${
                    peakShavingEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      peakShavingEnabled ? "left-5" : "left-1"
                    }`}
                  />
                </label>
              </div>
            </div>
            <p className="text-xs text-gray-600">
              Reduce consumption during peak hours
            </p>
          </div>

          <div className="p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">Load Shifting</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-xs text-gray-600">
              Schedule non-critical operations off-peak
            </p>
          </div>

          <div className="p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">
                Renewable Priority
              </span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-xs text-gray-600">Use renewable sources first</p>
          </div>

          <div className="p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">Smart Lighting</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-xs text-gray-600">
              Auto-adjust based on occupancy
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              <Sliders className="inline-block h-4 w-4 mr-2" />
              Optimize Now
            </button>
            <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
              <Download className="inline-block h-4 w-4 mr-2" />
              Export Report
            </button>
            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              <Plus className="inline-block h-4 w-4 mr-2" />
              Add Renewable Source
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                Energy efficiency: 84% (Target: 85%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">Daily savings: $158</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-md transition-shadow text-sm font-medium">
              <Leaf className="inline-block h-4 w-4 mr-2" />
              Sustainability Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryEnergy;
