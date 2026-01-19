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
  Home,
  Building,
  MapPin,
  Users,
  Target,
  TrendingUp,
  TrendingDown,
  Eye,
  BarChart3,
  Download,
  Plus,
  ChevronRight,
  Activity,
  Bell,
  History,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  DollarSign,
  Zap,
  Thermometer,
  Wifi,
  Lock,
  Unlock,
  Timer,
  CalendarDays,
  RotateCcw,
  PowerOff,
  Maximize2,
  Minimize2,
  Volume2,
  ChevronUp,
  ChevronDown,
  Filter,
  Search,
  Settings,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download as DownloadIcon,
  Upload,
  Share,
  MessageSquare,
  Phone,
  Mail,
  Heart,
  Star,
  ThumbsUp,
  Award,
  Trophy,
  Shield,
  ShieldAlert,
  Battery,
  Cloud,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Layers,
  Grid,
  Layout,
  Grid3x3,
  Square,
  Circle,
  Hexagon,
  Pentagon,
  Octagon,
  Cross,
  PlusCircle,
  MinusCircle,
  XCircle as XCircleIcon,
  CheckCircle,
  ScatterChart,
  
  Cpu,
  HardDrive,
  Server,
  Database,
  Network,
  Wifi as WifiIcon,
  Bluetooth,
  Radio,
  Satellite,
  Map,
  Globe,
  Compass,
  Navigation,
  Map as MapIcon,
  Grid as GridIcon,
  Layers as LayersIcon,
  Box,


 
  Mail as MailIcon,

  MessageSquare as MessageSquareIcon,

  Phone as PhoneIcon,
 
  Volume2 as Volume2Icon,
 
  StopCircle as StopCircleIcon,

  Grid as GridIcon2,
  Columns,
  Rows,
  Layout as LayoutIcon,
  
  Square as SquareIcon,
  Circle as CircleIcon,
  
  Octagon as OctagonIcon,
  Hexagon as HexagonIcon,
  Pentagon as PentagonIcon,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  Award as AwardIcon,
  Trophy as TrophyIcon,
 
  MapPin as MapPinIcon,
  Navigation as NavigationIcon,
  Compass as CompassIcon,
  Globe as GlobeIcon,
  Map as MapIcon2,
  Layers as LayersIcon2,
  Grid as GridIcon3,
  Layout as LayoutIcon2,
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
  AreaChart as RechartsAreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell,
  ComposedChart,
  ScatterChart as RechartsScatter,
  Scatter,
  Treemap as RechartsTreemap,
} from "recharts";

// Space Utilization Metrics
const spaceMetrics = [
  {
    title: "Total Space",
    value: "85,000 sqft",
    change: "+0%",
    icon: Building,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Utilization Rate",
    value: "72%",
    change: "+8%",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Active Desks",
    value: "285/400",
    change: "+12%",
    icon: Users,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Meeting Rooms",
    value: "18/25",
    change: "+5%",
    icon: Home,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Cost per Sqft",
    value: "$45",
    change: "-3%",
    icon: DollarSign,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Space Efficiency",
    value: "88%",
    change: "+4%",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

// Space Types Utilization
const spaceTypes = [
  {
    type: "Workstations",
    area: 35000,
    utilized: 28500,
    utilization: 81,
    efficiency: 92,
    status: "optimal",
  },
  {
    type: "Meeting Rooms",
    area: 8000,
    utilized: 5760,
    utilization: 72,
    efficiency: 85,
    status: "good",
  },
  {
    type: "Collaboration",
    area: 6000,
    utilized: 4200,
    utilization: 70,
    efficiency: 88,
    status: "good",
  },
  {
    type: "Support Spaces",
    area: 12000,
    utilized: 8400,
    utilization: 70,
    efficiency: 82,
    status: "warning",
  },
  {
    type: "Circulation",
    area: 18000,
    utilized: 9000,
    utilization: 50,
    efficiency: 75,
    status: "fair",
  },
  {
    type: "Storage",
    area: 6000,
    utilized: 4200,
    utilization: 70,
    efficiency: 90,
    status: "optimal",
  },
];

// Zone Utilization
const zoneUtilization = [
  {
    zone: "Executive Floor",
    area: 10000,
    utilized: 8500,
    utilization: 85,
    occupancy: 85,
    status: "optimal",
  },
  {
    zone: "Open Workspace",
    area: 25000,
    utilized: 23000,
    utilization: 92,
    occupancy: 92,
    status: "optimal",
  },
  {
    zone: "Meeting Hub",
    area: 8000,
    utilized: 5760,
    utilization: 72,
    occupancy: 65,
    status: "good",
  },
  {
    zone: "Cafeteria",
    area: 6000,
    utilized: 5100,
    utilization: 85,
    occupancy: 85,
    status: "warning",
  },
  {
    zone: "Lobby & Reception",
    area: 4000,
    utilized: 2800,
    utilization: 70,
    occupancy: 45,
    status: "good",
  },
  {
    zone: "Parking Garage",
    area: 30000,
    utilized: 4500,
    utilization: 15,
    occupancy: 15,
    status: "poor",
  },
];

// Space Allocation
const spaceAllocation = [
  { category: "Work Areas", percentage: 41, area: 35000, color: "#3b82f6" },
  { category: "Meeting Spaces", percentage: 9, area: 8000, color: "#8b5cf6" },
  { category: "Collaboration", percentage: 7, area: 6000, color: "#10b981" },
  { category: "Support", percentage: 14, area: 12000, color: "#f59e0b" },
  { category: "Circulation", percentage: 21, area: 18000, color: "#ef4444" },
  { category: "Storage", percentage: 8, area: 6000, color: "#6366f1" },
];

// Utilization Trends
const utilizationTrends = [
  { month: "Jan", utilization: 65, occupancy: 60, efficiency: 82 },
  { month: "Feb", utilization: 68, occupancy: 63, efficiency: 84 },
  { month: "Mar", utilization: 72, occupancy: 68, efficiency: 86 },
  { month: "Apr", utilization: 70, occupancy: 65, efficiency: 85 },
  { month: "May", utilization: 75, occupancy: 72, efficiency: 87 },
  { month: "Jun", utilization: 78, occupancy: 75, efficiency: 88 },
  { month: "Jul", utilization: 72, occupancy: 68, efficiency: 86 },
  { month: "Aug", utilization: 76, occupancy: 73, efficiency: 88 },
];

// Space Alerts
const spaceAlerts = [
  {
    id: 1,
    type: "warning",
    title: "High Utilization Zone",
    location: "Open Workspace",
    value: "92%",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "info",
    title: "Space Optimization Opportunity",
    location: "Parking Garage",
    value: "15% utilized",
    time: "1 day ago",
  },
  {
    id: 3,
    type: "warning",
    title: "Low Meeting Room Usage",
    location: "Meeting Rooms",
    value: "65% occupied",
    time: "2 days ago",
  },
  {
    id: 4,
    type: "info",
    title: "Space Re-allocation Complete",
    location: "Floor 3",
    value: "Completed",
    time: "3 days ago",
  },
  {
    id: 5,
    type: "warning",
    title: "High Circulation Area",
    location: "Main Corridor",
    value: "45% traffic",
    time: "5 days ago",
  },
];

// Desk Occupancy
const deskOccupancy = [
  {
    floor: "Floor 3",
    total: 120,
    occupied: 108,
    available: 12,
    utilization: 90,
  },
  {
    floor: "Floor 2",
    total: 100,
    occupied: 85,
    available: 15,
    utilization: 85,
  },
  { floor: "Floor 1", total: 80, occupied: 60, available: 20, utilization: 75 },
  {
    floor: "Executive",
    total: 40,
    occupied: 32,
    available: 8,
    utilization: 80,
  },
  { floor: "Ground", total: 60, occupied: 42, available: 18, utilization: 70 },
];

// Meeting Room Usage
const meetingRoomUsage = [
  {
    room: "Conference A",
    capacity: 12,
    bookings: 8,
    utilization: 67,
    avgDuration: "45 min",
  },
  {
    room: "Conference B",
    capacity: 8,
    bookings: 6,
    utilization: 75,
    avgDuration: "60 min",
  },
  {
    room: "Board Room",
    capacity: 20,
    bookings: 4,
    utilization: 20,
    avgDuration: "90 min",
  },
  {
    room: "Focus Room 1",
    capacity: 4,
    bookings: 10,
    utilization: 250,
    avgDuration: "30 min",
  },
  {
    room: "Focus Room 2",
    capacity: 4,
    bookings: 8,
    utilization: 200,
    avgDuration: "40 min",
  },
  {
    room: "Team Room",
    capacity: 15,
    bookings: 6,
    utilization: 40,
    avgDuration: "75 min",
  },
];

// Status Badge Component
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
    poor: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Poor",
      Icon: XCircle,
    },
    fair: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Fair",
      Icon: AlertTriangle,
    },
    critical: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Critical",
      Icon: XCircle,
    },
  };

  const badgeConfig = config[status] || config.good;
  const { Icon } = badgeConfig;

  return (
    <Badge
      variant="secondary"
      className={`${badgeConfig.color} gap-1.5 px-3 py-1 cursor-pointer`}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-medium">{badgeConfig.label}</span>
    </Badge>
  );
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 cursor-pointer">
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
              {entry.value}{" "}
              {entry.name === "utilization" ||
              entry.name === "occupancy" ||
              entry.name === "efficiency"
                ? "%"
                : ""}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Space Allocation Tooltip
const SpaceTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 cursor-pointer">
        <p className="text-gray-900 font-bold text-sm mb-3">{data.category}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Percentage</span>
            <span className="font-bold text-gray-900">{data.percentage}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Area</span>
            <span className="font-bold text-gray-900">
              {data.area.toLocaleString()} sqft
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function BuildingSpaceUtilization() {
  const [autoOptimization, setAutoOptimization] = useState(true);
  const [spacePlanning, setSpacePlanning] = useState(true);
  const [realTimeTracking, setRealTimeTracking] = useState(true);
  const [targetUtilization, setTargetUtilization] = useState([75]);
  const [selectedView, setSelectedView] = useState("overview");
  const [timeRange, setTimeRange] = useState("month");
  const [selectedZone, setSelectedZone] = useState("all");

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            Building Space Utilization
          </h1>
          <p className="text-gray-600 mt-2">
            Optimize space allocation and maximize building efficiency
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <DownloadIcon className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="gap-2 shadow-sm bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 hover:shadow-md transition-all cursor-pointer">
            <Plus className="h-4 w-4" />
            Plan New Space
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {spaceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
                        ? "text-emerald-600 border-emerald-200 bg-emerald-50 cursor-pointer"
                        : metric.change.startsWith("-")
                        ? "text-blue-600 border-blue-200 bg-blue-50 cursor-pointer"
                        : "text-gray-600 border-gray-200 cursor-pointer"
                    }
                  >
                    <span className="text-xs font-semibold">
                      {metric.change}
                    </span>
                  </Badge>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Space Overview & Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Space Utilization Overview */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Space Utilization Trends
                </h2>
                <p className="text-gray-600 text-sm">
                  Monthly utilization and efficiency metrics
                </p>
              </div>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32 shadow-sm cursor-pointer">
                  <SelectValue placeholder="Time range" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={utilizationTrends}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="utilization"
                    name="Utilization %"
                    fill="#8b5cf6"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    type="monotone"
                    dataKey="occupancy"
                    name="Occupancy %"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="efficiency"
                    name="Efficiency %"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-violet-50 rounded-xl border border-violet-100 cursor-pointer">
                <div className="text-lg font-bold text-violet-700">72%</div>
                <div className="text-xs text-violet-600">
                  Current Utilization
                </div>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100 cursor-pointer">
                <div className="text-lg font-bold text-emerald-700">88%</div>
                <div className="text-xs text-emerald-600">Space Efficiency</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100 cursor-pointer">
                <div className="text-lg font-bold text-blue-700">68%</div>
                <div className="text-xs text-blue-600">Avg Occupancy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Space Allocation */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Space Allocation
              </h2>
              <p className="text-gray-600 text-sm">
                Building space distribution
              </p>
            </div>
            <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 cursor-pointer">
              85,000 sqft
            </Badge>
          </div>

          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPie>
                <Pie
                  data={spaceAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="percentage"
                  label={(entry) => `${entry.percentage}%`}
                >
                  {spaceAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<SpaceTooltip />} />
              </RechartsPie>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3 mt-6">
            {spaceAllocation.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {item.category}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-gray-900">
                    {item.percentage}%
                  </span>
                  <div className="text-xs text-gray-500">
                    {item.area.toLocaleString()} sqft
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zone Utilization & Space Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Zone Utilization */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Zone Utilization
              </h2>
              <p className="text-gray-600 text-sm">
                Space usage by building zones
              </p>
            </div>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger className="w-40 shadow-sm cursor-pointer">
                <SelectValue placeholder="Filter zones" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">All Zones</SelectItem>
                <SelectItem value="office">Office Areas</SelectItem>
                <SelectItem value="common">Common Areas</SelectItem>
                <SelectItem value="parking">Parking Areas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {zoneUtilization.map((zone, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
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
                      {zone.area.toLocaleString()} sqft
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-violet-500" />
                      <span className="font-bold text-gray-900">
                        {zone.utilization}%
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Utilization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Occupancy</div>
                    <div className="font-bold text-gray-900">
                      {zone.occupancy}%
                    </div>
                  </div>
                  <StatusBadge status={zone.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space Types Analysis */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Space Types Analysis
              </h2>
              <p className="text-gray-600 text-sm">
                Efficiency by space category
              </p>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 cursor-pointer">
              88% Avg Eff
            </Badge>
          </div>

          <div className="space-y-4">
            {spaceTypes.map((space, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      space.status === "optimal"
                        ? "bg-emerald-100"
                        : space.status === "good"
                        ? "bg-blue-100"
                        : space.status === "warning"
                        ? "bg-amber-100"
                        : "bg-red-100"
                    }`}
                  >
                    {space.type === "Workstations" ? (
                      <Layers
                        className={`h-5 w-5 ${
                          space.status === "optimal"
                            ? "text-emerald-600"
                            : space.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    ) : space.type === "Meeting Rooms" ? (
                      <Home
                        className={`h-5 w-5 ${
                          space.status === "optimal"
                            ? "text-emerald-600"
                            : space.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    ) : space.type === "Collaboration" ? (
                      <Users
                        className={`h-5 w-5 ${
                          space.status === "optimal"
                            ? "text-emerald-600"
                            : space.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    ) : (
                      <Box
                        className={`h-5 w-5 ${
                          space.status === "optimal"
                            ? "text-emerald-600"
                            : space.status === "good"
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {space.type}
                    </div>
                    <div className="text-sm text-gray-500">
                      {space.area.toLocaleString()} sqft
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Utilization</div>
                      <div
                        className={`font-bold ${
                          space.utilization >= 80
                            ? "text-emerald-600"
                            : space.utilization >= 60
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      >
                        {space.utilization}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Efficiency</div>
                      <div
                        className={`font-bold ${
                          space.efficiency >= 85
                            ? "text-emerald-600"
                            : space.efficiency >= 75
                            ? "text-blue-600"
                            : "text-amber-600"
                        }`}
                      >
                        {space.efficiency}%
                      </div>
                    </div>
                    <StatusBadge status={space.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desk Occupancy & Meeting Room Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Desk Occupancy */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Desk Occupancy
              </h2>
              <p className="text-gray-600 text-sm">
                Workstation utilization by floor
              </p>
            </div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 cursor-pointer">
              285 Active
            </Badge>
          </div>

          <div className="space-y-4">
            {deskOccupancy.map((floor, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">
                      {floor.floor}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      {floor.occupied}/{floor.total} desks
                    </span>
                    <span
                      className={`font-bold ${
                        floor.utilization >= 85
                          ? "text-emerald-600"
                          : floor.utilization >= 70
                          ? "text-blue-600"
                          : "text-amber-600"
                      }`}
                    >
                      {floor.utilization}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      floor.utilization >= 85
                        ? "bg-emerald-500"
                        : floor.utilization >= 70
                        ? "bg-blue-500"
                        : "bg-amber-500"
                    }`}
                    style={{ width: `${floor.utilization}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{floor.available} available</span>
                  <span>{floor.utilization}% utilized</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting Room Usage */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Meeting Room Usage
              </h2>
              <p className="text-gray-600 text-sm">
                Meeting space utilization analytics
              </p>
            </div>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 cursor-pointer">
              18 Active
            </Badge>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Room</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Utilization</TableHead>
                <TableHead>Avg Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {meetingRoomUsage.map((room, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-purple-500" />
                      {room.room}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-gray-100">
                      {room.capacity} seats
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{room.bookings} today</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            room.utilization >= 150
                              ? "bg-emerald-500"
                              : room.utilization >= 100
                              ? "bg-blue-500"
                              : room.utilization >= 50
                              ? "bg-amber-500"
                              : "bg-red-500"
                          }`}
                          style={{
                            width: `${Math.min(room.utilization, 100)}%`,
                          }}
                        />
                      </div>
                      <span
                        className={`font-bold text-xs ${
                          room.utilization >= 150
                            ? "text-emerald-600"
                            : room.utilization >= 100
                            ? "text-blue-600"
                            : room.utilization >= 50
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {room.utilization}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-600">
                      {room.avgDuration}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Space Alerts & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Space Alerts */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Space Alerts</h2>
              <p className="text-gray-600 text-sm">
                Recent notifications and alerts
              </p>
            </div>
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 cursor-pointer">
              3 Active
            </Badge>
          </div>

          <div className="space-y-4">
            {spaceAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div
                  className={`p-2 rounded-full ${
                    alert.type === "warning"
                      ? "bg-amber-100"
                      : alert.type === "info"
                      ? "bg-blue-100"
                      : alert.type === "success"
                      ? "bg-emerald-100"
                      : "bg-red-100"
                  }`}
                >
                  {alert.type === "warning" ? (
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  ) : alert.type === "info" ? (
                    <Bell className="h-5 w-5 text-blue-600" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {alert.title}
                      </h4>
                      <p className="text-sm text-gray-600">{alert.location}</p>
                    </div>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={
                        alert.type === "warning"
                          ? "border-amber-200 text-amber-700"
                          : alert.type === "info"
                          ? "border-blue-200 text-blue-700"
                          : "border-emerald-200 text-emerald-700"
                      }
                    >
                      {alert.value}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2 text-xs"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space Optimization Controls */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Optimization Controls
              </h2>
              <p className="text-gray-600 text-sm">
                Manage space optimization settings
              </p>
            </div>
            <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 cursor-pointer">
              Active
            </Badge>
          </div>

          <div className="space-y-6">
            {/* Target Utilization */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label
                  htmlFor="target-utilization"
                  className="text-sm font-medium"
                >
                  Target Utilization Rate
                </Label>
                <span className="text-lg font-bold text-violet-700">
                  {targetUtilization}%
                </span>
              </div>
              <Slider
                id="target-utilization"
                min={50}
                max={95}
                step={5}
                value={targetUtilization}
                onValueChange={setTargetUtilization}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>50% (Underutilized)</span>
                <span>75% (Optimal)</span>
                <span>95% (Overutilized)</span>
              </div>
            </div>

            <Separator />

            {/* Automation Controls */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Automation Settings</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-100">
                      <Zap className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <Label
                        htmlFor="auto-optimization"
                        className="font-medium"
                      >
                        Auto Space Optimization
                      </Label>
                      <p className="text-xs text-gray-500">
                        Automatically reallocate underutilized spaces
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="auto-optimization"
                    checked={autoOptimization}
                    onCheckedChange={setAutoOptimization}
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <CalendarDays className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <Label htmlFor="space-planning" className="font-medium">
                        Smart Space Planning
                      </Label>
                      <p className="text-xs text-gray-500">
                        Predictive space allocation based on usage patterns
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="space-planning"
                    checked={spacePlanning}
                    onCheckedChange={setSpacePlanning}
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100">
                      <Activity className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <Label
                        htmlFor="real-time-tracking"
                        className="font-medium"
                      >
                        Real-time Tracking
                      </Label>
                      <p className="text-xs text-gray-500">
                        Live occupancy and utilization monitoring
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="real-time-tracking"
                    checked={realTimeTracking}
                    onCheckedChange={setRealTimeTracking}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1 cursor-pointer">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Defaults
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 cursor-pointer">
                <CheckCircle className="h-4 w-4 mr-2" />
                Apply Changes
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            className="h-24 flex-col gap-3 p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-blue-100">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium">Reallocate Space</span>
          </Button>

          <Button
            variant="outline"
            className="h-24 flex-col gap-3 p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-emerald-100">
              <BarChart3 className="h-5 w-5 text-emerald-600" />
            </div>
            <span className="text-sm font-medium">Generate Report</span>
          </Button>

          <Button
            variant="outline"
            className="h-24 flex-col gap-3 p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <span className="text-sm font-medium">View Alerts</span>
          </Button>

          <Button
            variant="outline"
            className="h-24 flex-col gap-3 p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-purple-100">
              <Settings className="h-5 w-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium">Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
