import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Cpu,
  Download,
  Eye,
  Factory,
  Filter,
 
  Flame,
  HardDrive,
  Layers,
  LineChart,
  Package,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  Sliders,
  Target,
  Thermometer,
  TrendingDown,
  TrendingUp,
  Users,
  Wifi,
  Zap,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  FileText,
  FilterX,
  Info,
  List,
  Maximize2,
  Minimize2,
  Pause,
  PieChart,
  RotateCcw,
  Star,
  Timer,
  
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  XCircle,
  ShieldCheck,
  AlertCircle,
  FileWarning,
  Lock,
  Unlock,
  Battery,
  Cloud,
  Sun,
  Moon,
  Activity,
  AlertOctagon,
  Award,
  Camera,
  Compass,
  Database,
  Droplets,
  Flag,
  Gauge,
  Globe,
  Home,
  Map,
  Navigation,
  Power,
  Radio,
  Server,
  Smartphone,
  Speaker,
  Tag,
  Terminal,
  ThumbsUp,
  Trophy,
  Volume2,
  Wrench,
  X,
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
  PieChart as RechartsPieChart,
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
const SafetyCard = ({
  title,
  value,
  target,
  change,
  icon: Icon,
  color,
  trend,
  unit = "",
  subtitle,
  status,
}) => {
  const isPositive = change.includes("+");
  const isAtTarget = parseFloat(value) >= parseFloat(target);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-0.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
      <div className="bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1">{title}</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-xl font-bold text-gray-900">
                {value}
                {unit}
              </h3>
              <span className="text-xs text-gray-500">
                / {target}
                {unit} target
              </span>
            </div>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
            {status && (
              <div
                className={`mt-2 px-2 py-1 rounded-full text-xs font-medium inline-block ${
                  status === "excellent"
                    ? "bg-green-100 text-green-800"
                    : status === "good"
                      ? "bg-blue-100 text-blue-800"
                      : status === "warning"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                }`}
              >
                {status === "excellent"
                  ? "Excellent"
                  : status === "good"
                    ? "Good"
                    : status === "warning"
                      ? "Warning"
                      : "Critical"}
              </div>
            )}
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
          <span
            className={`text-xs ml-auto ${isAtTarget ? "text-green-600" : "text-red-600"}`}
          >
            {isAtTarget ? "✓ At target" : "✗ Below target"}
          </span>
        </div>
      </div>
    </div>
  );
};

const SafetyIncidentCard = ({
  id,
  type,
  location,
  severity,
  personsInvolved,
  time,
  status,
  action,
  reportedBy,
  onClick,
}) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" };
      case "high":
        return {
          bg: "bg-orange-100",
          text: "text-orange-700",
          dot: "bg-orange-500",
        };
      case "medium":
        return {
          bg: "bg-amber-100",
          text: "text-amber-700",
          dot: "bg-amber-500",
        };
      case "low":
        return { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700", dot: "bg-gray-500" };
    }
  };

  const colors = getSeverityColor(severity);

  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors.bg}`}>
            <AlertTriangle className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{type}</h4>
            <div className="flex items-center gap-2 mt-1">
              <div className={`h-2 w-2 rounded-full ${colors.dot}`} />
              <span className={`text-xs font-medium ${colors.text}`}>
                {severity.charAt(0).toUpperCase() + severity.slice(1)} Severity
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">{time}</div>
          <div className="text-xs text-gray-600">
            {personsInvolved} person(s)
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Map className="h-4 w-4 text-gray-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
          <Users className="h-4 w-4 text-gray-500" />
          <span>Reported by: {reportedBy}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div className="text-xs">
            <div
              className={`font-medium ${
                status === "resolved"
                  ? "text-green-600"
                  : status === "investigating"
                    ? "text-blue-600"
                    : status === "pending"
                      ? "text-amber-600"
                      : "text-red-600"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
            <div className="text-gray-500">Action: {action}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">ID: {id}</span>
            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SafetyGauge = ({ value, label, max = 100, size = "medium" }) => {
  const percentage = (value / max) * 100;

  const getColor = (val) => {
    if (val >= 95) return "text-green-500";
    if (val >= 85) return "text-blue-500";
    if (val >= 75) return "text-amber-500";
    return "text-red-500";
  };

  const getBarColor = (val) => {
    if (val >= 95) return "bg-green-500";
    if (val >= 85) return "bg-blue-500";
    if (val >= 75) return "bg-amber-500";
    return "bg-red-500";
  };

  const sizeClass = size === "large" ? "h-28 w-28" : "h-20 w-20";
  const textSize = size === "large" ? "text-2xl" : "text-xl";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className={`${textSize} font-bold text-gray-900 ${getColor(value)}`}
            >
              {value}%
            </div>
            <div className="text-xs text-gray-600">{label}</div>
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
            stroke="#f3f4f6"
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
            className={getColor(value)}
          />
        </svg>
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
              {entry.dataKey === "incidents" ? "" : "%"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const ComplianceChecklist = ({ completed, total }) => {
  const items = [
    { id: 1, name: "PPE Inspection", completed: true, department: "All Areas" },
    {
      id: 2,
      name: "Fire Extinguisher Check",
      completed: true,
      department: "Storage",
    },
    {
      id: 3,
      name: "Emergency Exit Clear",
      completed: true,
      department: "Assembly",
    },
    {
      id: 4,
      name: "Machine Guarding Check",
      completed: false,
      department: "Production",
    },
    {
      id: 5,
      name: "Chemical Storage Check",
      completed: true,
      department: "Lab",
    },
    {
      id: 6,
      name: "Electrical Panel Inspection",
      completed: true,
      department: "Electrical",
    },
    {
      id: 7,
      name: "First Aid Kit Restock",
      completed: true,
      department: "All Areas",
    },
    {
      id: 8,
      name: "Safety Training Verification",
      completed: true,
      department: "HR",
    },
    {
      id: 9,
      name: "Evacuation Route Check",
      completed: true,
      department: "Facilities",
    },
    {
      id: 10,
      name: "Hazard Communication",
      completed: true,
      department: "All Areas",
    },
    {
      id: 11,
      name: "Ladder Safety Check",
      completed: true,
      department: "Maintenance",
    },
    {
      id: 12,
      name: "Noise Level Monitoring",
      completed: true,
      department: "Production",
    },
    {
      id: 13,
      name: "Ventilation System Check",
      completed: false,
      department: "HVAC",
    },
    {
      id: 14,
      name: "Spill Kit Inspection",
      completed: true,
      department: "Storage",
    },
    {
      id: 15,
      name: "Lockout/Tagout Audit",
      completed: true,
      department: "Maintenance",
    },
    {
      id: 16,
      name: "Safety Signage Check",
      completed: true,
      department: "Facilities",
    },
    {
      id: 17,
      name: "Ergonomic Assessment",
      completed: true,
      department: "Production",
    },
    {
      id: 18,
      name: "Emergency Lighting Test",
      completed: true,
      department: "Electrical",
    },
    {
      id: 19,
      name: "Dust Collection Check",
      completed: true,
      department: "Woodshop",
    },
    {
      id: 20,
      name: "Safety Committee Meeting",
      completed: true,
      department: "Management",
    },
  ];

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                item.completed
                  ? "bg-green-100 border-green-300"
                  : "bg-red-100 border-red-300"
              }`}
            >
              {item.completed ? (
                <CheckCircle className="h-3 w-3 text-green-600" />
              ) : (
                <X className="h-3 w-3 text-red-600" />
              )}
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900">
                {item.name}
              </span>
              <span className="text-xs text-gray-500 ml-2">
                ({item.department})
              </span>
            </div>
          </div>
          <div className="text-xs">
            {item.completed ? (
              <span className="text-green-600 font-medium">Completed</span>
            ) : (
              <span className="text-amber-600 font-medium">Pending</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Data
const safetyData = [
  { month: "Jan", incidents: 8, nearMisses: 12, compliance: 88, training: 85 },
  { month: "Feb", incidents: 6, nearMisses: 10, compliance: 90, training: 88 },
  { month: "Mar", incidents: 4, nearMisses: 8, compliance: 92, training: 90 },
  { month: "Apr", incidents: 3, nearMisses: 6, compliance: 94, training: 92 },
  { month: "May", incidents: 2, nearMisses: 5, compliance: 96, training: 94 },
  { month: "Jun", incidents: 1, nearMisses: 4, compliance: 98, training: 96 },
];

const safetyIncidents = [
  {
    id: "SAFE-2024-001",
    type: "Slip and Fall",
    location: "Assembly Area A",
    severity: "medium",
    personsInvolved: 1,
    time: "2 hours ago",
    status: "investigating",
    action: "Area cordoned off",
    reportedBy: "John Safety",
  },
  {
    id: "SAFE-2024-002",
    type: "Chemical Spill",
    location: "Chemical Storage",
    severity: "critical",
    personsInvolved: 0,
    time: "1 day ago",
    status: "resolved",
    action: "Cleanup completed",
    reportedBy: "Sarah Hazard",
  },
  {
    id: "SAFE-2024-003",
    type: "Machine Guarding Issue",
    location: "CNC Machine #5",
    severity: "high",
    personsInvolved: 0,
    time: "2 days ago",
    status: "pending",
    action: "Machine shutdown",
    reportedBy: "Mike Engineer",
  },
  {
    id: "SAFE-2024-004",
    type: "Electrical Hazard",
    location: "Control Room B",
    severity: "high",
    personsInvolved: 0,
    time: "3 days ago",
    status: "investigating",
    action: "Area isolated",
    reportedBy: "Alex Electrician",
  },
  {
    id: "SAFE-2024-005",
    type: "Fire Alarm Activation",
    location: "Painting Booth",
    severity: "medium",
    personsInvolved: 12,
    time: "1 week ago",
    status: "resolved",
    action: "False alarm",
    reportedBy: "James Fire",
  },
  {
    id: "SAFE-2024-006",
    type: "PPE Violation",
    location: "Welding Station",
    severity: "low",
    personsInvolved: 2,
    time: "2 weeks ago",
    status: "resolved",
    action: "Training issued",
    reportedBy: "Emma Compliance",
  },
];

const hazardAnalysis = [
  {
    type: "Slip/Trip Hazards",
    count: 28,
    percentage: 32,
    severity: "medium",
    color: "#3b82f6",
  },
  {
    type: "Machine Hazards",
    count: 22,
    percentage: 25,
    severity: "high",
    color: "#ef4444",
  },
  {
    type: "Chemical Hazards",
    count: 18,
    percentage: 20,
    severity: "critical",
    color: "#f59e0b",
  },
  {
    type: "Electrical Hazards",
    count: 12,
    percentage: 14,
    severity: "high",
    color: "#8b5cf6",
  },
  {
    type: "Fire Hazards",
    count: 8,
    percentage: 9,
    severity: "medium",
    color: "#ec4899",
  },
];

const safetyCards = [
  {
    title: "Days Without Injury",
    value: "142",
    target: "100",
    change: "+42 days",
    icon: ShieldCheck,
    color: { bg: "bg-green-100", text: "text-green-600" },
    trend: "up",
    subtitle: "Current safety streak",
    status: "excellent",
  },
  {
    title: "Safety Compliance",
    value: "98.2",
    target: "95",
    change: "+3.2%",
    icon: Shield,
    color: { bg: "bg-blue-100", text: "text-blue-600" },
    trend: "up",
    unit: "%",
    subtitle: "Overall compliance rate",
    status: "excellent",
  },
  {
    title: "Incidents This Month",
    value: "3",
    target: "5",
    change: "-2",
    icon: AlertTriangle,
    color: { bg: "bg-amber-100", text: "text-amber-600" },
    trend: "down",
    subtitle: "Total safety incidents",
    status: "good",
  },
  {
    title: "Near Misses",
    value: "8",
    target: "10",
    change: "-2",
    icon: AlertCircle,
    color: { bg: "bg-red-100", text: "text-red-600" },
    trend: "down",
    subtitle: "Reported near misses",
    status: "good",
  },
  {
    title: "Safety Training",
    value: "96.5",
    target: "95",
    change: "+1.5%",
    icon: Users,
    color: { bg: "bg-purple-100", text: "text-purple-600" },
    trend: "up",
    unit: "%",
    subtitle: "Completion rate",
    status: "excellent",
  },
  {
    title: "Audit Score",
    value: "94.8",
    target: "90",
    change: "+4.8%",
    icon: FileText,
    color: { bg: "bg-emerald-100", text: "text-emerald-600" },
    trend: "up",
    unit: "%",
    subtitle: "Latest safety audit",
    status: "excellent",
  },
];

const FactorySafety = () => {
  const [time, setTime] = useState(new Date());
  const [timeRange, setTimeRange] = useState("month");
  const [filter, setFilter] = useState("all");
  const [selectedIncident, setSelectedIncident] = useState(safetyIncidents[0]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showAllCompliance, setShowAllCompliance] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredIncidents = safetyIncidents.filter((incident) => {
    const matchesSeverity = filter === "all" || incident.severity === filter;
    const matchesSearch =
      searchQuery === "" ||
      incident.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSeverity && matchesSearch;
  });

  const calculateTotalIncidents = () => {
    return safetyData.reduce((sum, month) => sum + month.incidents, 0);
  };

  const calculateAverageCompliance = () => {
    const totalCompliance = safetyData.reduce(
      (sum, month) => sum + month.compliance,
      0,
    );
    return (totalCompliance / safetyData.length).toFixed(1);
  };

  const totalIncidents = calculateTotalIncidents();
  const averageCompliance = calculateAverageCompliance();

  const handleEmergencyAlert = () => {
    setEmergencyMode(true);
    // In a real app, this would trigger an API call
    alert(
      "Emergency alert activated! Emergency response team has been notified.",
    );
  };

  const handleEvacuationAlarm = () => {
    // In a real app, this would trigger the evacuation system
    alert("Evacuation alarm activated! Please proceed to emergency exits.");
  };

  const handleMedicalEmergency = () => {
    // In a real app, this would notify medical staff
    alert("Medical emergency alert sent! First responders have been notified.");
  };

  const handleAllClear = () => {
    setEmergencyMode(false);
    // In a real app, this would clear emergency status
    alert("All clear signal sent! Emergency status cleared.");
  };

  const safetyObservations = [
    {
      id: 1,
      observation: "Safety glasses not worn in grinding area",
      category: "PPE",
      priority: "High",
      status: "Open",
      reportedBy: "Safety Officer",
      date: "2024-01-15",
    },
    {
      id: 2,
      observation: "Fire extinguisher obstructed",
      category: "Fire Safety",
      priority: "Medium",
      status: "Resolved",
      reportedBy: "Maintenance",
      date: "2024-01-14",
    },
    {
      id: 3,
      observation: "Chemical spill kit needs restocking",
      category: "Chemical Safety",
      priority: "High",
      status: "In Progress",
      reportedBy: "Lab Technician",
      date: "2024-01-13",
    },
    {
      id: 4,
      observation: "Machine guard removed",
      category: "Machine Safety",
      priority: "Critical",
      status: "Open",
      reportedBy: "Operator",
      date: "2024-01-12",
    },
    {
      id: 5,
      observation: "Emergency exit light not working",
      category: "Emergency Systems",
      priority: "Medium",
      status: "Resolved",
      reportedBy: "Facilities",
      date: "2024-01-11",
    },
  ];

  const departmentSafetyStats = [
    {
      department: "Production",
      incidents: 12,
      compliance: 96.5,
      training: 94.2,
      color: "#3b82f6",
    },
    {
      department: "Maintenance",
      incidents: 8,
      compliance: 92.8,
      training: 89.7,
      color: "#10b981",
    },
    {
      department: "Quality Control",
      incidents: 3,
      compliance: 98.2,
      training: 96.4,
      color: "#8b5cf6",
    },
    {
      department: "Warehouse",
      incidents: 15,
      compliance: 91.3,
      training: 87.9,
      color: "#f59e0b",
    },
    {
      department: "Administration",
      incidents: 1,
      compliance: 99.5,
      training: 98.1,
      color: "#ec4899",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header with Emergency Alert */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg">
              <ShieldAlert className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Safety Management
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Comprehensive safety monitoring and incident management
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

        {/* Emergency Alert Banner */}
        {emergencyMode && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 animate-pulse">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertOctagon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-red-800">
                    EMERGENCY ALERT ACTIVE
                  </h3>
                  <p className="text-sm text-red-700">
                    Chemical spill detected in Storage Area B. Evacuation in
                    progress.
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    Emergency Response Team: Deployed | Medical: On standby
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEmergencyMode(false)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Acknowledge
                </button>
                <button
                  onClick={handleAllClear}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  All Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Safety Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {safetyCards.map((card, index) => (
          <SafetyCard key={index} {...card} />
        ))}
      </div>

      {/* Safety Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Safety Performance Trend */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Safety Performance Trend
              </h3>
              <p className="text-sm text-gray-600">
                Monthly safety metrics overview
              </p>
            </div>
            <select
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="month">Last 6 Months</option>
              <option value="quarter">Last 4 Quarters</option>
              <option value="year">Last 3 Years</option>
            </select>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={safetyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" fontSize={11} stroke="#666" />
                <YAxis fontSize={11} stroke="#666" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar
                  dataKey="incidents"
                  name="Incidents"
                  fill="#ef4444"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="nearMisses"
                  name="Near Misses"
                  fill="#f59e0b"
                  radius={[2, 2, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="compliance"
                  name="Compliance %"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hazard Analysis */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Hazard Analysis
              </h3>
              <p className="text-sm text-gray-600">Breakdown by hazard type</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">88</div>
              <div className="text-xs text-gray-600">
                Total hazards identified
              </div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={hazardAnalysis}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, percentage }) => `${type}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {hazardAnalysis.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Safety Incidents & Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Safety Incidents Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Safety Incidents
                </h3>
                <p className="text-sm text-gray-600">
                  Recent safety incidents and reports
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search incidents..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Severity</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>

                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Report Incident
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredIncidents.map((incident) => (
                <SafetyIncidentCard
                  key={incident.id}
                  {...incident}
                  onClick={() => setSelectedIncident(incident)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selected Incident Details & Emergency */}
        <div className="space-y-6">
          {/* Selected Incident Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                Incident Details
              </h3>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <Maximize2 className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-3 rounded-lg ${
                    selectedIncident.severity === "critical"
                      ? "bg-red-100"
                      : selectedIncident.severity === "high"
                        ? "bg-orange-100"
                        : selectedIncident.severity === "medium"
                          ? "bg-amber-100"
                          : "bg-blue-100"
                  }`}
                >
                  <AlertTriangle
                    className={`h-6 w-6 ${
                      selectedIncident.severity === "critical"
                        ? "text-red-600"
                        : selectedIncident.severity === "high"
                          ? "text-orange-600"
                          : selectedIncident.severity === "medium"
                            ? "text-amber-600"
                            : "text-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {selectedIncident.type}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-sm font-medium ${
                        selectedIncident.severity === "critical"
                          ? "text-red-600"
                          : selectedIncident.severity === "high"
                            ? "text-orange-600"
                            : selectedIncident.severity === "medium"
                              ? "text-amber-600"
                              : "text-blue-600"
                      }`}
                    >
                      {selectedIncident.severity.charAt(0).toUpperCase() +
                        selectedIncident.severity.slice(1)}{" "}
                      Severity
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Location</span>
                  <span className="font-medium text-gray-900">
                    {selectedIncident.location}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Persons Involved
                  </span>
                  <span className="font-medium text-gray-900">
                    {selectedIncident.personsInvolved}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Time Reported</span>
                  <span className="font-medium text-gray-900">
                    {selectedIncident.time}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Reported By</span>
                  <span className="font-medium text-gray-900">
                    {selectedIncident.reportedBy}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status</span>
                  <span
                    className={`font-medium ${
                      selectedIncident.status === "resolved"
                        ? "text-green-600"
                        : selectedIncident.status === "investigating"
                          ? "text-blue-600"
                          : "text-amber-600"
                    }`}
                  >
                    {selectedIncident.status.charAt(0).toUpperCase() +
                      selectedIncident.status.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Action Taken</span>
                  <span className="font-medium text-gray-900">
                    {selectedIncident.action}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-medium transition-colors">
                    Assign Investigator
                  </button>
                  <button className="flex-1 px-4 py-2 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg text-sm font-medium transition-colors">
                    Mark Resolved
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Controls */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <AlertOctagon className="h-5 w-5 text-red-500" />
              <h3 className="text-lg font-bold text-gray-900">
                Emergency Controls
              </h3>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleEmergencyAlert}
                className="w-full p-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Bell className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-gray-900">
                  Emergency Alert
                </span>
              </button>

              <button
                onClick={handleEvacuationAlarm}
                className="w-full p-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Speaker className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-gray-900">
                  Evacuation Alarm
                </span>
              </button>

              <button
                onClick={handleMedicalEmergency}
                className="w-full p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <AlertOctagon className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">
                  Medical Emergency
                </span>
              </button>

              <button
                onClick={handleAllClear}
                className="w-full p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  All Clear
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Metrics & Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Safety Metrics */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Safety Performance Metrics
              </h3>
              <p className="text-sm text-gray-600">
                Key safety performance indicators
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <SafetyGauge value={98.2} label="Safety Compliance" size="large" />
            <SafetyGauge
              value={96.5}
              label="Training Completion"
              size="large"
            />
            <SafetyGauge value={94.8} label="Audit Score" size="large" />
            <SafetyGauge value={95.3} label="PPE Compliance" size="large" />
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">
              Safety Statistics
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Incidents This Year</span>
                <span className="font-medium text-gray-900">
                  {totalIncidents}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Average Compliance</span>
                <span className="font-medium text-gray-900">
                  {averageCompliance}%
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Safety Observations</span>
                <span className="font-medium text-gray-900">142 reported</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Near Miss Reports</span>
                <span className="font-medium text-gray-900">45 this month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Compliance */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Safety Compliance Checklist
              </h3>
              <p className="text-sm text-gray-600">
                Daily safety compliance verification
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-gray-900">
                23/25 Complete
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <ComplianceChecklist completed={23} total={25} />
          </div>

          <div className="pt-4 border-t border-gray-200 mt-4">
            <button
              onClick={() => setShowAllCompliance(!showAllCompliance)}
              className="w-full py-2 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-1"
            >
              {showAllCompliance ? "Show Less" : "View All Compliance Items"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showAllCompliance ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Additional Safety Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Safety Stats */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Department Safety Performance
              </h3>
              <p className="text-sm text-gray-600">
                Safety metrics by department
              </p>
            </div>
            <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Q4 2024</option>
              <option>Q3 2024</option>
              <option>Q2 2024</option>
            </select>
          </div>

          <div className="space-y-3">
            {departmentSafetyStats.map((dept, index) => (
              <div
                key={index}
                className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: dept.color }}
                    />
                    <span className="font-medium text-gray-900">
                      {dept.department}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {dept.incidents} incidents
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Compliance</span>
                    <span className="font-medium text-gray-900">
                      {dept.compliance}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Training</span>
                    <span className="font-medium text-gray-900">
                      {dept.training}%
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex gap-1">
                  <div
                    className="h-1 rounded-full bg-green-500"
                    style={{ width: `${dept.compliance}%` }}
                  />
                  <div
                    className="h-1 rounded-full bg-blue-500"
                    style={{ width: `${dept.training}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Observations */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Recent Safety Observations
              </h3>
              <p className="text-sm text-gray-600">
                Active safety observations and findings
              </p>
            </div>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              <Plus className="h-4 w-4 inline mr-1" />
              Add Observation
            </button>
          </div>

          <div className="space-y-3">
            {safetyObservations.map((obs) => (
              <div
                key={obs.id}
                className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {obs.observation}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                        {obs.category}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          obs.priority === "Critical"
                            ? "bg-red-100 text-red-700"
                            : obs.priority === "High"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {obs.priority} Priority
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      obs.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : obs.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {obs.status}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Reported by: {obs.reportedBy}</span>
                  <span>{obs.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Last updated: {time.toLocaleTimeString()} | System Status:{" "}
            <span className="text-green-600 font-medium">Operational</span>
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
              <FileText className="h-4 w-4" />
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorySafety;
