import React, { useState, useEffect } from "react";
import {
  Users,
  Clock,
  TrendingUp,
  TrendingDown,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  Target,
  Award,
  Briefcase,
  Home,
  Phone,
  Mail,
  MapPin,
  Settings,
  Filter,
  Search,
  Plus,
  Download,
  RefreshCw,
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  UserPlus,
  UserCheck,
  UserX,
  Users as UsersIcon,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart,
  Shield,
  GraduationCap,
  Coffee,
  Wrench,
  Building,
  Globe,
  Smartphone,
  Headphones,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  FileText,
  Bell,
  Zap,
  Battery,
  Thermometer,
  Droplets,
  Wifi,
  Lock,
  Unlock,
  Clock as ClockIcon,
  DollarSign,
  Heart,
  Shield as ShieldIcon,
  Trophy,
  Flag,
  Compass,
  Navigation,
  Target as TargetIcon,
  Home as HomeIcon,
  Briefcase as BriefcaseIcon,
  Users as TeamIcon,
  User as UserIcon,
  UserCheck as UserCheckIcon,
  UserX as UserXIcon,
  Calendar as CalendarIcon,
  CheckCircle as CheckCircleIcon,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  Link,
  Copy,
  Share2,
  Printer,
  Upload,
  Edit2,
  Save,
  X,
  Menu,
  Grid,
  List,
  Maximize2,
  Minimize2,
  RotateCcw,
  MoreHorizontal,
  Star as StarIcon,
  Award as AwardIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Clock as ClockIcon2,
  Calendar as CalendarIcon2,
  Bell as BellIcon,
  Settings as SettingsIcon,
  Filter as FilterIcon,
  Search as SearchIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Printer as PrinterIcon,
  Share2 as ShareIcon,
  Edit as EditIcon,
  Trash2 as TrashIcon,
  Eye as EyeIcon,
  Plus as PlusIcon,
  Minus,
  ChevronLeft,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  MoreVertical as MoreVerticalIcon,
  LogOut,
  LogIn,
  User as UserIcon2,
  Key,
  Shield as ShieldIcon2,
 
  Mic,
  Headphones as HeadphonesIcon,
  Speaker,
  Volume2,
  Radio,
  Tv,
  Monitor,
  Smartphone as SmartphoneIcon,
  Tablet,
  Laptop,
  Cpu as CpuIcon,
  MemoryStick,
  HardDrive as HardDriveIcon,
  Database as DatabaseIcon,
  Cloud,
  Globe as GlobeIcon,
  Wifi as WifiIcon,
  Bluetooth,
  Zap as ZapIcon,
  Battery as BatteryIcon,
  Thermometer as ThermometerIcon,
  Droplets as DropletsIcon,
  Wind,
  Sun as SunIcon,

  Compass as CompassIcon,
  Flag as FlagIcon,
  Navigation as NavigationIcon,
  Target as TargetIcon2,
  Award as AwardIcon2,
  Trophy as TrophyIcon,
  Star as StarIcon2,
  Heart as HeartIcon,
  DollarSign as DollarIcon,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  TrendingUp as TrendingUpIcon2,
  TrendingDown as TrendingDownIcon2,
  BarChart as BarChartIcon,
  PieChart,
  LineChart as LineChartIcon,
  AreaChart,
 
  XCircle as XCircleIcon,
  CheckCircle as CheckCircleIcon2,
  AlertCircle as AlertCircleIcon2,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  X as XIcon,
  Check as CheckIcon,
  AlertTriangle as AlertTriangleIcon,
  AlertOctagon,
  AlertOctagon as AlertOctagonIcon,
  BellRing,
  BellOff as BellOffIcon,
  Megaphone,
  VolumeX,
  Volume1,
  Volume2 as Volume2Icon,
  Headphones as HeadphonesIcon2,
  Mic as MicIcon,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  Camera as CameraIcon,
  CameraOff,
  Phone as PhoneIcon,
  PhoneOff,
  PhoneMissed,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneForwarded,
  Voicemail,
  MessageCircle,
  MessageSquare as MessageSquareIcon,
  MessageSquareDashed,
  MessageSquarePlus,
  Send,
  Mail as MailIcon,
  Inbox,
  Archive,
  Bookmark,
  BookOpen,
  Book,
  File as FileIcon,
  FileText as FileTextIcon,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileCode,
  FileImage,
  FileAudio,
  FileVideo,
  FileSpreadsheet,
  FileArchive,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  DownloadCloud,
  UploadCloud,
  Save as SaveIcon,
  Clipboard,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  ClipboardX,
  Calendar as CalendarIcon3,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  Clock as ClockIcon3,
  Timer,
  StopCircle,
  PlayCircle,
  PauseCircle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Play,
  Pause,
  Repeat,
  Shuffle,
  Music as MusicIcon,
  Volume as VolumeIcon,
  Mic2,
  Headphones as HeadphonesIcon3,
  Radio as RadioIcon,
  Tv as TvIcon,
  Film,
  Camera as CameraIcon2,
  Image,
  Images,
  Film as FilmIcon,
  Video as VideoIcon2,


  
  Globe as GlobeIcon2,
  Map as MapIcon,
  Navigation as NavigationIcon2,
  Compass as CompassIcon2,
  Flag as FlagIcon2,
  Award as AwardIcon3,
  Trophy as TrophyIcon2,
  Star as StarIcon3,
  Heart as HeartIcon2,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  
  Code as CodeIcon,
  Cpu as CpuIcon2,
  HardDrive as HardDriveIcon2,
  Database as DatabaseIcon2,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Wifi as WifiIcon2,
  Bluetooth as BluetoothIcon,
  Battery as BatteryIcon2,
  Thermometer as ThermometerIcon2,
  Droplets as DropletsIcon2,
  Wind as WindIcon,
  Sun as SunIcon2,
  Cloud as CloudIcon2,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  CloudDrizzle as CloudDrizzleIcon,
  Umbrella as UmbrellaIcon,
  Flame as FlameIcon,

  Mountain as MountainIcon,
} from "lucide-react";
import {
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
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart as RechartsAreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Scatter,
  ReferenceLine,
} from "recharts";

// Components
const EmployeeCard = ({
  id,
  name,
  role,
  department,
  status,
  shift,
  hoursWorked,
  attendanceScore,
  performanceScore,
  skills,
  avatarColor,
  isActive,
  lastActive,
  phone,
  email,
  location,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return {
          bg: "bg-green-100",
          text: "text-green-800",
          dot: "bg-green-500",
        };
      case "on leave":
        return { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500" };
      case "off duty":
        return { bg: "bg-gray-100", text: "text-gray-800", dot: "bg-gray-500" };
      case "sick":
        return { bg: "bg-red-100", text: "text-red-800", dot: "bg-red-500" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-800", dot: "bg-gray-500" };
    }
  };

  const statusColors = getStatusColor(status);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${avatarColor}`}
          >
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${statusColors.dot}`} />
              <span className={`text-xs font-medium ${statusColors.text}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-lg">
          <MoreVertical className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Department</span>
          <span className="font-medium text-gray-900">{department}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Shift</span>
          <span className="font-medium text-gray-900">{shift}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Hours Worked</span>
          <span className="font-medium text-gray-900">{hoursWorked}h</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-3">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">
            {attendanceScore}%
          </div>
          <div className="text-xs text-gray-600">Attendance</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">
            {performanceScore}%
          </div>
          <div className="text-xs text-gray-600">Performance</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">{skills.length}</div>
          <div className="text-xs text-gray-600">Skills</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {skills.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
          >
            {skill}
          </span>
        ))}
        {skills.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            +{skills.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Clock className="h-3 w-3" />
          <span>{lastActive}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Phone className="h-4 w-4 text-gray-500" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Mail className="h-4 w-4 text-gray-500" />
          </button>
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({
  title,
  value,
  change,
  icon: Icon,
  color,
  trend,
  unit = "",
  subtitle,
}) => {
  const isPositive = change?.includes("+");

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-2xl font-bold text-gray-900">
              {value}
              {unit}
            </h3>
            {change && (
              <span
                className={`text-sm font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}
              >
                {change}
              </span>
            )}
          </div>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-lg ${color.bg}`}>
          <Icon className={`h-6 w-6 ${color.text}`} />
        </div>
      </div>
      {trend && (
        <div className="flex items-center gap-1.5">
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
          <span
            className={`text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}
          >
            {trend === "up" ? "Improving" : "Declining"}
          </span>
        </div>
      )}
    </div>
  );
};

const AttendanceChart = ({ data }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Attendance Trend</h3>
          <p className="text-sm text-gray-600">Weekly attendance rate</p>
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" stroke="#666" fontSize={12} />
            <YAxis
              stroke="#666"
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              formatter={(value) => [`${value}%`, "Attendance"]}
              labelStyle={{ color: "#374151" }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <ReferenceLine
              y={95}
              stroke="#ef4444"
              strokeDasharray="3 3"
              label={{
                value: "Target",
                position: "insideBottomRight",
                fill: "#ef4444",
              }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const DepartmentPerformance = ({ data }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Department Performance
          </h3>
          <p className="text-sm text-gray-600">Productivity by department</p>
        </div>
      </div>
      <div className="space-y-3">
        {data.map((dept, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">
                {dept.name}
              </span>
              <span className="text-sm font-medium text-gray-900">
                {dept.productivity}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  dept.productivity >= 90
                    ? "bg-green-500"
                    : dept.productivity >= 80
                      ? "bg-blue-500"
                      : dept.productivity >= 70
                        ? "bg-yellow-500"
                        : "bg-red-500"
                }`}
                style={{ width: `${dept.productivity}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>{dept.employees} employees</span>
              <span>{dept.attendance}% attendance</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShiftSchedule = ({ schedules }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Shift Schedule</h3>
          <p className="text-sm text-gray-600">This week's schedule</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 inline mr-1" />
          Add Shift
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 text-sm font-medium text-gray-600">
                Employee
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="text-center py-2 text-sm font-medium text-gray-600"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full ${schedule.avatarColor} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {schedule.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {schedule.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {schedule.role}
                      </div>
                    </div>
                  </div>
                </td>
                {schedule.shifts.map((shift, idx) => (
                  <td key={idx} className="text-center py-3">
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        shift === "Morning"
                          ? "bg-blue-100 text-blue-800"
                          : shift === "Afternoon"
                            ? "bg-green-100 text-green-800"
                            : shift === "Night"
                              ? "bg-purple-100 text-purple-800"
                              : shift === "Off"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-red-100 text-red-800"
                      }`}
                    >
                      {shift}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Data
const employees = [
  {
    id: 1,
    name: "John Smith",
    role: "Production Supervisor",
    department: "Manufacturing",
    status: "active",
    shift: "Morning (6AM-2PM)",
    hoursWorked: 168,
    attendanceScore: 98,
    performanceScore: 95,
    skills: ["Leadership", "Quality Control", "Safety", "Training"],
    avatarColor: "bg-blue-500",
    isActive: true,
    lastActive: "2 hours ago",
    phone: "+1 (555) 123-4567",
    email: "john.smith@factory.com",
    location: "Production Floor A",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Quality Inspector",
    department: "Quality Control",
    status: "active",
    shift: "Afternoon (2PM-10PM)",
    hoursWorked: 156,
    attendanceScore: 96,
    performanceScore: 92,
    skills: ["Inspection", "Documentation", "Analysis", "Standards"],
    avatarColor: "bg-green-500",
    isActive: true,
    lastActive: "Currently active",
    phone: "+1 (555) 234-5678",
    email: "sarah.j@factory.com",
    location: "QC Lab",
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Maintenance Technician",
    department: "Maintenance",
    status: "on leave",
    shift: "Night (10PM-6AM)",
    hoursWorked: 140,
    attendanceScore: 94,
    performanceScore: 88,
    skills: ["Electrical", "Mechanical", "Troubleshooting", "Preventive"],
    avatarColor: "bg-purple-500",
    isActive: false,
    lastActive: "1 day ago",
    phone: "+1 (555) 345-6789",
    email: "mike.chen@factory.com",
    location: "Maintenance Bay",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Warehouse Manager",
    department: "Logistics",
    status: "active",
    shift: "Morning (6AM-2PM)",
    hoursWorked: 172,
    attendanceScore: 99,
    performanceScore: 97,
    skills: ["Inventory", "Logistics", "Team Management", "Safety"],
    avatarColor: "bg-red-500",
    isActive: true,
    lastActive: "30 minutes ago",
    phone: "+1 (555) 456-7890",
    email: "emma.d@factory.com",
    location: "Warehouse B",
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Machine Operator",
    department: "Production",
    status: "sick",
    shift: "Afternoon (2PM-10PM)",
    hoursWorked: 152,
    attendanceScore: 91,
    performanceScore: 89,
    skills: ["CNC", "Lathe", "Milling", "Safety"],
    avatarColor: "bg-yellow-500",
    isActive: false,
    lastActive: "2 days ago",
    phone: "+1 (555) 567-8901",
    email: "robert.w@factory.com",
    location: "Machine Shop",
  },
  {
    id: 6,
    name: "Lisa Brown",
    role: "Safety Officer",
    department: "Safety",
    status: "active",
    shift: "Morning (6AM-2PM)",
    hoursWorked: 160,
    attendanceScore: 100,
    performanceScore: 96,
    skills: ["Safety Audits", "Training", "Compliance", "Emergency"],
    avatarColor: "bg-indigo-500",
    isActive: true,
    lastActive: "1 hour ago",
    phone: "+1 (555) 678-9012",
    email: "lisa.b@factory.com",
    location: "Safety Office",
  },
];

const attendanceData = [
  { day: "Mon", attendance: 94, target: 95 },
  { day: "Tue", attendance: 96, target: 95 },
  { day: "Wed", attendance: 97, target: 95 },
  { day: "Thu", attendance: 95, target: 95 },
  { day: "Fri", attendance: 93, target: 95 },
  { day: "Sat", attendance: 90, target: 95 },
  { day: "Sun", attendance: 88, target: 95 },
];

const departmentPerformance = [
  { name: "Production", productivity: 92, employees: 45, attendance: 94 },
  { name: "Quality Control", productivity: 96, employees: 12, attendance: 97 },
  { name: "Maintenance", productivity: 88, employees: 8, attendance: 92 },
  { name: "Logistics", productivity: 94, employees: 15, attendance: 95 },
  { name: "Safety", productivity: 98, employees: 5, attendance: 99 },
  { name: "Administration", productivity: 90, employees: 6, attendance: 96 },
];

const shiftSchedules = [
  {
    name: "John Smith",
    role: "Supervisor",
    avatarColor: "bg-blue-500",
    shifts: [
      "Morning",
      "Morning",
      "Morning",
      "Morning",
      "Morning",
      "Off",
      "Off",
    ],
  },
  {
    name: "Sarah Johnson",
    role: "Inspector",
    avatarColor: "bg-green-500",
    shifts: [
      "Afternoon",
      "Afternoon",
      "Afternoon",
      "Afternoon",
      "Afternoon",
      "Off",
      "Off",
    ],
  },
  {
    name: "Mike Chen",
    role: "Technician",
    avatarColor: "bg-purple-500",
    shifts: ["Night", "Night", "Night", "Off", "Night", "Night", "Off"],
  },
  {
    name: "Emma Davis",
    role: "Manager",
    avatarColor: "bg-red-500",
    shifts: [
      "Morning",
      "Morning",
      "Morning",
      "Morning",
      "Morning",
      "Off",
      "Off",
    ],
  },
];

const metrics = [
  {
    title: "Total Employees",
    value: "124",
    change: "+8",
    icon: Users,
    color: { bg: "bg-blue-100", text: "text-blue-600" },
    trend: "up",
    subtitle: "Active workforce",
  },
  {
    title: "Average Attendance",
    value: "96.4",
    change: "+1.2%",
    icon: UserCheck,
    color: { bg: "bg-green-100", text: "text-green-600" },
    trend: "up",
    unit: "%",
    subtitle: "This month",
  },
  {
    title: "Overtime Hours",
    value: "328",
    change: "-12%",
    icon: Clock,
    color: { bg: "bg-amber-100", text: "text-amber-600" },
    trend: "down",
    subtitle: "Weekly total",
  },
  {
    title: "Training Completion",
    value: "87",
    change: "+5%",
    icon: GraduationCap,
    color: { bg: "bg-purple-100", text: "text-purple-600" },
    trend: "up",
    unit: "%",
    subtitle: "Annual target: 90%",
  },
];

const FactoryWorkforce = () => {
  const [time, setTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      searchQuery === "" ||
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      departmentFilter === "all" || employee.department === departmentFilter;
    const matchesStatus =
      statusFilter === "all" || employee.status === statusFilter;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const departments = [...new Set(employees.map((e) => e.department))];
  const totalHours = employees.reduce((sum, emp) => sum + emp.hoursWorked, 0);
  const avgAttendance = (
    employees.reduce((sum, emp) => sum + emp.attendanceScore, 0) /
    employees.length
  ).toFixed(1);
  const avgPerformance = (
    employees.reduce((sum, emp) => sum + emp.performanceScore, 0) /
    employees.length
  ).toFixed(1);

  const handleAddEmployee = () => {
    alert("Add new employee functionality would open a form here");
  };

  const handleExportData = () => {
    alert("Export functionality would download workforce data");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Workforce Management
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Manage employees, schedules, and workforce analytics
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
            <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Workforce Overview & Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Attendance Chart */}
          <AttendanceChart data={attendanceData} />

          {/* Department Performance */}
          <DepartmentPerformance data={departmentPerformance} />
        </div>

        {/* Right Column - Quick Stats & Filters */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Total Hours Worked
                </span>
                <span className="font-bold text-gray-900">{totalHours}h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg Attendance</span>
                <span className="font-bold text-gray-900">
                  {avgAttendance}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg Performance</span>
                <span className="font-bold text-gray-900">
                  {avgPerformance}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active Now</span>
                <span className="font-bold text-green-600">4/6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">On Leave</span>
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Absent Today</span>
                <span className="font-bold text-red-600">1</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button
                onClick={handleAddEmployee}
                className="w-full p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors"
              >
                <UserPlus className="h-4 w-4 text-blue-600" />
                Add New Employee
              </button>
              <button
                onClick={handleExportData}
                className="w-full p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors"
              >
                <Download className="h-4 w-4 text-green-600" />
                Export Workforce Data
              </button>
              <button className="w-full p-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors">
                <Calendar className="h-4 w-4 text-purple-600" />
                Schedule Bulk Shift
              </button>
              <button className="w-full p-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors">
                <GraduationCap className="h-4 w-4 text-amber-600" />
                Assign Training
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Management Section */}
      <div className="mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Employee Management
              </h3>
              <p className="text-sm text-gray-600">
                Manage your workforce team
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="on leave">On Leave</option>
                <option value="off duty">Off Duty</option>
                <option value="sick">Sick</option>
              </select>

              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  className={`px-3 py-2 ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "bg-white"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  className={`px-3 py-2 ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "bg-white"}`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center gap-1">
                <Plus className="h-4 w-4" />
                Add Employee
              </button>
            </div>
          </div>

          {/* Employees Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEmployees.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  {...employee}
                  onClick={() => setSelectedEmployee(employee)}
                />
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Employee
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Department
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Shift
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Attendance
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Performance
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr
                      key={employee.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full ${employee.avatarColor} flex items-center justify-center text-white font-bold`}
                          >
                            {employee.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {employee.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {employee.role}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-900">
                          {employee.department}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            employee.status === "active"
                              ? "bg-green-100 text-green-800"
                              : employee.status === "on leave"
                                ? "bg-blue-100 text-blue-800"
                                : employee.status === "sick"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-900">
                          {employee.shift}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            {employee.attendanceScore}%
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${
                                employee.attendanceScore >= 95
                                  ? "bg-green-500"
                                  : employee.attendanceScore >= 90
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${employee.attendanceScore}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            {employee.performanceScore}%
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${
                                employee.performanceScore >= 90
                                  ? "bg-green-500"
                                  : employee.performanceScore >= 80
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${employee.performanceScore}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Eye className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Edit className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Trash2 className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Shift Schedule & Selected Employee Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Shift Schedule */}
        <ShiftSchedule schedules={shiftSchedules} />

        {/* Selected Employee Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Employee Details
              </h3>
              <p className="text-sm text-gray-600">Detailed information</p>
            </div>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              <Edit className="h-4 w-4 inline mr-1" />
              Edit Profile
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-16 h-16 rounded-full ${selectedEmployee.avatarColor} flex items-center justify-center text-white text-xl font-bold`}
              >
                {selectedEmployee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {selectedEmployee.name}
                </h4>
                <p className="text-sm text-gray-600">{selectedEmployee.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedEmployee.status === "active"
                        ? "bg-green-100 text-green-800"
                        : selectedEmployee.status === "on leave"
                          ? "bg-blue-100 text-blue-800"
                          : selectedEmployee.status === "sick"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {selectedEmployee.status}
                  </span>
                  <span className="text-xs text-gray-600">
                    {selectedEmployee.isActive
                      ? "Currently active"
                      : selectedEmployee.lastActive}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Department:</span>
                  <span className="font-medium text-gray-900">
                    {selectedEmployee.department}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Shift:</span>
                  <span className="font-medium text-gray-900">
                    {selectedEmployee.shift}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Hours Worked:</span>
                  <span className="font-medium text-gray-900">
                    {selectedEmployee.hoursWorked}h
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium text-gray-900">
                    {selectedEmployee.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">
                    {selectedEmployee.email}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium text-gray-900">
                    {selectedEmployee.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h5 className="font-medium text-gray-900 mb-2">
                Performance Metrics
              </h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {selectedEmployee.attendanceScore}%
                  </div>
                  <div className="text-sm text-gray-600">Attendance Score</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {selectedEmployee.performanceScore}%
                  </div>
                  <div className="text-sm text-gray-600">Performance Score</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h5 className="font-medium text-gray-900 mb-2">
                Skills & Certifications
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedEmployee.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events & Training */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Upcoming Training */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Upcoming Training
              </h3>
              <p className="text-sm text-gray-600">
                Scheduled training sessions
              </p>
            </div>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              <Plus className="h-4 w-4 inline mr-1" />
              Schedule Training
            </button>
          </div>
          <div className="space-y-3">
            {[
              {
                title: "Safety Refresher Course",
                date: "Tomorrow, 9:00 AM",
                attendees: 12,
                type: "Mandatory",
              },
              {
                title: "New Equipment Training",
                date: "Jan 25, 1:00 PM",
                attendees: 8,
                type: "Technical",
              },
              {
                title: "Leadership Workshop",
                date: "Feb 1, 10:00 AM",
                attendees: 6,
                type: "Management",
              },
              {
                title: "Quality Standards Update",
                date: "Feb 5, 2:00 PM",
                attendees: 15,
                type: "Compliance",
              },
            ].map((training, index) => (
              <div
                key={index}
                className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">
                    {training.title}
                  </h4>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      training.type === "Mandatory"
                        ? "bg-red-100 text-red-800"
                        : training.type === "Technical"
                          ? "bg-blue-100 text-blue-800"
                          : training.type === "Management"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-green-100 text-green-800"
                    }`}
                  >
                    {training.type}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{training.date}</span>
                  <span>{training.attendees} attendees</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Recent Activities
              </h3>
              <p className="text-sm text-gray-600">Latest workforce updates</p>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {[
              {
                action: "Clock in",
                employee: "John Smith",
                time: "5 minutes ago",
                type: "attendance",
              },
              {
                action: "Shift change approved",
                employee: "Sarah Johnson",
                time: "1 hour ago",
                type: "shift",
              },
              {
                action: "Leave request submitted",
                employee: "Mike Chen",
                time: "2 hours ago",
                type: "leave",
              },
              {
                action: "Training completed",
                employee: "Emma Davis",
                time: "3 hours ago",
                type: "training",
              },
              {
                action: "Performance review scheduled",
                employee: "Robert Wilson",
                time: "5 hours ago",
                type: "review",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg"
              >
                <div
                  className={`p-2 rounded-lg ${
                    activity.type === "attendance"
                      ? "bg-green-100"
                      : activity.type === "shift"
                        ? "bg-blue-100"
                        : activity.type === "leave"
                          ? "bg-amber-100"
                          : activity.type === "training"
                            ? "bg-purple-100"
                            : "bg-indigo-100"
                  }`}
                >
                  {activity.type === "attendance" ? (
                    <Clock className="h-4 w-4" />
                  ) : activity.type === "shift" ? (
                    <Users className="h-4 w-4" />
                  ) : activity.type === "leave" ? (
                    <Calendar className="h-4 w-4" />
                  ) : activity.type === "training" ? (
                    <GraduationCap className="h-4 w-4" />
                  ) : (
                    <Star className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </div>
                  <div className="text-xs text-gray-600">
                    by {activity.employee}
                  </div>
                </div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Last updated: {time.toLocaleTimeString()} | Total Employees:{" "}
            {employees.length} | Active:{" "}
            {employees.filter((e) => e.isActive).length}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <Download className="h-4 w-4" />
              Export Report
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <RefreshCw className="h-4 w-4" />
              Refresh Data
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <Printer className="h-4 w-4" />
              Print Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryWorkforce;
