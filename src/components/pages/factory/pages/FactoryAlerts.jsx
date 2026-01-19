import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  Bell,
  BellOff,
  Calendar,
  CheckCircle,
  Clock,
  Filter,
  HardDrive,
  Search,
  Settings,
  Sliders,
  Thermometer,
  Trash2,
  User,
  Wifi,
  XCircle,
  Zap,
  ChevronRight,
  Eye,
  Download,
  FilterX,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Volume2,
  VolumeX,
  Shield,
  AlertCircle,
  Info,
  HelpCircle,
  FileText,
  BellRing,
  Battery,
  Cpu,
  Package,
  Truck,
  BarChart3,
  Activity,
} from "lucide-react";

// Mock data for alerts
const initialAlerts = [
  {
    id: 1,
    title: "High Temperature Alert",
    description:
      "Machine #5 (CNC Router) temperature is 15°C above optimal range",
    machine: "CNC Router #5",
    location: "Production Line A",
    severity: "critical",
    type: "temperature",
    status: "active",
    timestamp: "2 minutes ago",
    acknowledged: false,
    sensorValue: "82°C",
    threshold: "67°C",
    sensorId: "TEMP_CNC_005",
  },
  {
    id: 2,
    title: "Low Production Speed",
    description: "Assembly Line B running at 65% of target speed",
    machine: "Assembly Line B",
    location: "Assembly Floor",
    severity: "warning",
    type: "performance",
    status: "active",
    timestamp: "15 minutes ago",
    acknowledged: true,
    sensorValue: "65%",
    threshold: "85%",
    sensorId: "SPEED_ASM_002",
  },
  {
    id: 3,
    title: "Network Connectivity Issue",
    description: "IoT Sensor network experiencing intermittent connectivity",
    machine: "Network Hub",
    location: "Control Room",
    severity: "medium",
    type: "network",
    status: "active",
    timestamp: "45 minutes ago",
    acknowledged: false,
    sensorValue: "78%",
    threshold: "95%",
    sensorId: "NET_IOT_001",
  },
  {
    id: 4,
    title: "Vibration Anomaly Detected",
    description: "Unusual vibration pattern detected in Robotic Arm #3",
    machine: "Robotic Arm #3",
    location: "Welding Station",
    severity: "high",
    type: "vibration",
    status: "resolved",
    timestamp: "2 hours ago",
    acknowledged: true,
    sensorValue: "4.2g",
    threshold: "2.5g",
    sensorId: "VIB_ROB_003",
  },
  {
    id: 5,
    title: "Quality Control Alert",
    description: "Batch QC-237 failed quality inspection",
    machine: "Quality Scanner #2",
    location: "Packaging Area",
    severity: "medium",
    type: "quality",
    status: "active",
    timestamp: "3 hours ago",
    acknowledged: true,
    sensorValue: "Failed",
    threshold: "Pass",
    sensorId: "QC_SCAN_002",
  },
  {
    id: 6,
    title: "Energy Consumption Spike",
    description: "Unexpected 25% increase in energy consumption",
    machine: "Main Power Grid",
    location: "Electrical Room",
    severity: "warning",
    type: "energy",
    status: "resolved",
    timestamp: "5 hours ago",
    acknowledged: true,
    sensorValue: "1.8MW",
    threshold: "1.4MW",
    sensorId: "PWR_GRID_001",
  },
  {
    id: 7,
    title: "Inventory Low Alert",
    description: "Raw material inventory below minimum threshold",
    machine: "Inventory System",
    location: "Warehouse",
    severity: "low",
    type: "inventory",
    status: "active",
    timestamp: "1 day ago",
    acknowledged: false,
    sensorValue: "15%",
    threshold: "25%",
    sensorId: "INV_RAW_001",
  },
  {
    id: 8,
    title: "Predictive Maintenance Due",
    description: "Scheduled maintenance for Conveyor Belt #7",
    machine: "Conveyor Belt #7",
    location: "Material Handling",
    severity: "info",
    type: "maintenance",
    status: "pending",
    timestamp: "1 day ago",
    acknowledged: true,
    sensorValue: "98%",
    threshold: "95%",
    sensorId: "MTN_CON_007",
  },
];

// Alert statistics
const alertStats = [
  {
    label: "Total Alerts",
    value: "48",
    change: "+12%",
    icon: BellRing,
    color: "bg-blue-100 text-blue-600",
  },
  {
    label: "Active Now",
    value: "5",
    change: "-3",
    icon: Activity,
    color: "bg-red-100 text-red-600",
  },
  {
    label: "Critical",
    value: "2",
    change: "+1",
    icon: AlertTriangle,
    color: "bg-amber-100 text-amber-600",
  },
  {
    label: "Avg Response Time",
    value: "4.2m",
    change: "-0.8m",
    icon: Clock,
    color: "bg-green-100 text-green-600",
  },
  {
    label: "Resolved Today",
    value: "18",
    change: "+5",
    icon: CheckCircle,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "Auto-Resolved",
    value: "67%",
    change: "+8%",
    icon: Shield,
    color: "bg-purple-100 text-purple-600",
  },
];

const FactoryAlerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [filter, setFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [selectedAlert, setSelectedAlert] = useState(null);

  // Filter alerts based on current filters
  const filteredAlerts = alerts.filter((alert) => {
    const matchesStatus = filter === "all" || alert.status === filter;
    const matchesSeverity =
      severityFilter === "all" || alert.severity === severityFilter;
    const matchesSearch =
      searchQuery === "" ||
      alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.machine.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSeverity && matchesSearch;
  });

  const getSeverityConfig = (severity) => {
    const config = {
      critical: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700",
        icon: AlertTriangle,
        badge: "bg-red-100 text-red-800",
      },
      high: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700",
        icon: AlertTriangle,
        badge: "bg-orange-100 text-orange-800",
      },
      medium: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
        icon: AlertCircle,
        badge: "bg-amber-100 text-amber-800",
      },
      warning: {
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        text: "text-yellow-700",
        icon: AlertCircle,
        badge: "bg-yellow-100 text-yellow-800",
      },
      low: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        icon: Info,
        badge: "bg-blue-100 text-blue-800",
      },
      info: {
        bg: "bg-gray-50",
        border: "border-gray-200",
        text: "text-gray-700",
        icon: Info,
        badge: "bg-gray-100 text-gray-800",
      },
    };
    return config[severity] || config.info;
  };

  const getTypeIcon = (type) => {
    const icons = {
      temperature: Thermometer,
      performance: BarChart3,
      network: Wifi,
      vibration: Activity,
      quality: Shield,
      energy: Zap,
      inventory: Package,
      maintenance: HardDrive,
    };
    return icons[type] || AlertCircle;
  };

  const acknowledgeAlert = (id) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, acknowledged: true } : alert,
      ),
    );
  };

  const resolveAlert = (id) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, status: "resolved" } : alert,
      ),
    );
  };

  const deleteAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  const getAlertCounts = () => {
    return {
      active: alerts.filter((a) => a.status === "active").length,
      critical: alerts.filter((a) => a.severity === "critical").length,
      unacknowledged: alerts.filter(
        (a) => !a.acknowledged && a.status === "active",
      ).length,
    };
  };

  const counts = getAlertCounts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Factory Alerts Center
              </h1>
              <p className="text-sm text-gray-600 mt-0.5">
                Real-time monitoring and management of factory alerts and
                notifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                notificationsEnabled
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {notificationsEnabled ? (
                <>
                  <Bell className="h-4 w-4" />
                  <span className="text-sm font-medium">Notifications ON</span>
                </>
              ) : (
                <>
                  <BellOff className="h-4 w-4" />
                  <span className="text-sm font-medium">Notifications OFF</span>
                </>
              )}
            </button>

            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-xl transition-shadow flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {alertStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${stat.color.split(" ")[0]}`}>
                  <Icon className={`h-5 w-5 ${stat.color.split(" ")[1]}`} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              </div>
              <div
                className={`text-xs font-medium mt-2 ${
                  stat.change.includes("+") || !stat.change.includes("-")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Alert List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg">
            {/* Header with filters */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Recent Alerts
                  </h2>
                  <p className="text-sm text-gray-600">
                    {filteredAlerts.length} alerts found •{" "}
                    {counts.unacknowledged} unacknowledged
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search alerts..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Status Filter */}
                  <select
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="resolved">Resolved</option>
                    <option value="pending">Pending</option>
                  </select>

                  {/* Severity Filter */}
                  <select
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={severityFilter}
                    onChange={(e) => setSeverityFilter(e.target.value)}
                  >
                    <option value="all">All Severity</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="warning">Warning</option>
                    <option value="low">Low</option>
                    <option value="info">Info</option>
                  </select>

                  <button
                    onClick={() => {
                      setFilter("all");
                      setSeverityFilter("all");
                      setSearchQuery("");
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-1"
                  >
                    <FilterX className="h-4 w-4" />
                    Clear
                  </button>
                </div>
              </div>
            </div>

            {/* Alerts List */}
            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
              {filteredAlerts.length === 0 ? (
                <div className="p-8 text-center">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No alerts found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your filters or search criteria
                  </p>
                </div>
              ) : (
                filteredAlerts.map((alert) => {
                  const severityConfig = getSeverityConfig(alert.severity);
                  const TypeIcon = getTypeIcon(alert.type);

                  return (
                    <div
                      key={alert.id}
                      className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer border-l-4 ${
                        alert.status === "active"
                          ? "border-l-red-500"
                          : alert.status === "resolved"
                            ? "border-l-green-500"
                            : "border-l-gray-500"
                      }`}
                      onClick={() => setSelectedAlert(alert)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-2 rounded-lg ${severityConfig.bg}`}
                          >
                            <TypeIcon
                              className={`h-5 w-5 ${severityConfig.text}`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-gray-900">
                                {alert.title}
                              </h3>
                              {!alert.acknowledged &&
                                alert.status === "active" && (
                                  <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                                    NEW
                                  </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {alert.description}
                            </p>

                            <div className="flex flex-wrap gap-3 text-xs">
                              <div className="flex items-center gap-1">
                                <Cpu className="h-3 w-3 text-gray-400" />
                                <span className="text-gray-700">
                                  {alert.machine}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Activity className="h-3 w-3 text-gray-400" />
                                <span className="text-gray-700">
                                  {alert.location}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-gray-400" />
                                <span className="text-gray-700">
                                  {alert.timestamp}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <div
                            className={`px-2 py-1 rounded-md text-xs font-medium ${severityConfig.badge}`}
                          >
                            {alert.severity.toUpperCase()}
                          </div>
                          <div className="text-xs text-gray-500">
                            ID: {alert.sensorId}
                          </div>
                        </div>
                      </div>

                      {/* Alert Actions */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <span>Value:</span>
                            <span className="font-semibold">
                              {alert.sensorValue}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Threshold:</span>
                            <span className="font-semibold">
                              {alert.threshold}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {alert.status === "active" && !alert.acknowledged && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                acknowledgeAlert(alert.id);
                              }}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg hover:bg-blue-200 transition-colors"
                            >
                              Acknowledge
                            </button>
                          )}

                          {alert.status === "active" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                resolveAlert(alert.id);
                              }}
                              className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-lg hover:bg-green-200 transition-colors"
                            >
                              Mark Resolved
                            </button>
                          )}

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteAlert(alert.id);
                            }}
                            className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Alert Details & Actions */}
        <div className="space-y-6">
          {/* Alert Details Panel */}
          {selectedAlert ? (
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Alert Details
                </h3>
                <button
                  onClick={() => setSelectedAlert(null)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XCircle className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 rounded-lg ${getSeverityConfig(selectedAlert.severity).bg}`}
                    >
                      {React.createElement(getTypeIcon(selectedAlert.type), {
                        className: `h-5 w-5 ${getSeverityConfig(selectedAlert.severity).text}`,
                      })}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {selectedAlert.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        ID: {selectedAlert.sensorId}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedAlert.status === "active"
                        ? "bg-red-100 text-red-800"
                        : selectedAlert.status === "resolved"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {selectedAlert.status.toUpperCase()}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{selectedAlert.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">
                      Machine
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                      <Cpu className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-900">
                        {selectedAlert.machine}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">
                      Location
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                      <Activity className="h-4 w-4 text-green-600" />
                      <span className="text-gray-900">
                        {selectedAlert.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">
                      Current Value
                    </div>
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <span className="text-lg font-bold text-gray-900">
                        {selectedAlert.sensorValue}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">
                      Threshold
                    </div>
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <span className="text-lg font-bold text-gray-900">
                        {selectedAlert.threshold}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Alert Timeline
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Alert Raised</span>
                      <span className="font-medium text-gray-900">
                        {selectedAlert.timestamp}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Acknowledged</span>
                      <span className="font-medium text-gray-900">
                        {selectedAlert.acknowledged ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Status</span>
                      <span
                        className={`font-medium ${
                          selectedAlert.status === "active"
                            ? "text-red-600"
                            : selectedAlert.status === "resolved"
                              ? "text-green-600"
                              : "text-gray-600"
                        }`}
                      >
                        {selectedAlert.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    <Eye className="inline-block h-4 w-4 mr-2" />
                    View Details
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                    <FileText className="inline-block h-4 w-4 mr-2" />
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-5">
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Select an Alert
                </h3>
                <p className="text-gray-600 text-sm">
                  Click on any alert in the list to view detailed information
                  and take action
                </p>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-gray-900">
                  Emergency Stop
                </span>
              </button>

              <button className="p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  Acknowledge All
                </span>
              </button>

              <button className="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Download className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">
                  Export Logs
                </span>
              </button>

              <button className="p-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors flex flex-col items-center justify-center gap-2">
                <Sliders className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-900">
                  Settings
                </span>
              </button>
            </div>
          </div>

          {/* Alert Statistics */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Alert Statistics
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Active Alerts</span>
                  <span className="font-medium text-gray-900">
                    {counts.active}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{
                      width: `${(counts.active / alerts.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Critical Alerts</span>
                  <span className="font-medium text-gray-900">
                    {counts.critical}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{
                      width: `${(counts.critical / alerts.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Unacknowledged</span>
                  <span className="font-medium text-gray-900">
                    {counts.unacknowledged}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${(counts.unacknowledged / alerts.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                System monitoring active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Last updated:{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm transition-colors ${
                autoRefresh
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <RefreshCw
                className={`h-4 w-4 ${autoRefresh ? "animate-spin" : ""}`}
              />
              Auto-refresh: {autoRefresh ? "ON" : "OFF"}
            </button>

            <button className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-xl transition-shadow text-sm font-medium">
              Generate Weekly Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryAlerts;
