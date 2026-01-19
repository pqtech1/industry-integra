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
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider"; // Added missing import
import {
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
} from "recharts";

// Alert metrics
const alertMetrics = [
  {
    title: "Active Alerts",
    value: "8",
    change: "-3",
    description: "vs yesterday",
    color: "text-red-600",
    icon: "🚨",
    severity: "high",
  },
  {
    title: "Critical Alerts",
    value: "2",
    change: "-1",
    description: "needs immediate action",
    color: "text-orange-600",
    icon: "⚠️",
    severity: "critical",
  },
  {
    title: "Avg Response Time",
    value: "15m",
    change: "-5m",
    description: "time to acknowledge",
    color: "text-emerald-600",
    icon: "⏱️",
    severity: "good",
  },
  {
    title: "Alert Resolution",
    value: "94%",
    change: "+3%",
    description: "successfully resolved",
    color: "text-blue-600",
    icon: "✅",
    severity: "excellent",
  },
];

// Real-time alerts
const activeAlerts = [
  {
    id: "ALT-001",
    type: "Critical",
    title: "Grid Voltage Sag",
    source: "Transformer T-1",
    time: "2 min ago",
    status: "active",
    priority: "P1",
    assigned: "John D.",
  },
  {
    id: "ALT-002",
    type: "Warning",
    title: "Battery Overheating",
    source: "ESS Unit-3",
    time: "15 min ago",
    status: "acknowledged",
    priority: "P2",
    assigned: "Sarah M.",
  },
  {
    id: "ALT-003",
    type: "Critical",
    title: "Generator Failure",
    source: "Backup Gen-2",
    time: "45 min ago",
    status: "active",
    priority: "P1",
    assigned: "Unassigned",
  },
  {
    id: "ALT-004",
    type: "Warning",
    title: "Solar Inverter Fault",
    source: "Solar Farm North",
    time: "1 hour ago",
    status: "acknowledged",
    priority: "P2",
    assigned: "Mike R.",
  },
  {
    id: "ALT-005",
    type: "Info",
    title: "High Energy Demand",
    source: "Main Building",
    time: "2 hours ago",
    status: "resolved",
    priority: "P3",
    assigned: "Auto-resolved",
  },
  {
    id: "ALT-006",
    type: "Warning",
    title: "Network Connectivity",
    source: "Monitoring System",
    time: "3 hours ago",
    status: "active",
    priority: "P2",
    assigned: "Unassigned",
  },
];

// Alert history
const alertHistory = [
  { date: "Mon", critical: 3, warning: 8, info: 12 },
  { date: "Tue", critical: 2, warning: 6, info: 10 },
  { date: "Wed", critical: 4, warning: 9, info: 15 },
  { date: "Thu", critical: 1, warning: 5, info: 8 },
  { date: "Fri", critical: 3, warning: 7, info: 11 },
  { date: "Sat", critical: 0, warning: 3, info: 5 },
  { date: "Sun", critical: 1, warning: 4, info: 7 },
];

// Alert sources
const alertSources = [
  { source: "Grid Systems", count: 24, percentage: 32, color: "#EF4444" },
  { source: "Solar Farm", count: 18, percentage: 24, color: "#F59E0B" },
  { source: "Battery Storage", count: 12, percentage: 16, color: "#3B82F6" },
  { source: "HVAC Systems", count: 10, percentage: 13, color: "#10B981" },
  { source: "Monitoring", count: 8, percentage: 11, color: "#8B5CF6" },
  { source: "Other", count: 4, percentage: 5, color: "#94A3B8" },
];

// Alert rules
const alertRules = [
  {
    rule: "Voltage Threshold",
    type: "Grid",
    threshold: "±10%",
    enabled: true,
    notifications: ["Email", "SMS"],
  },
  {
    rule: "Temperature Alert",
    type: "Equipment",
    threshold: ">85°C",
    enabled: true,
    notifications: ["Email", "Push"],
  },
  {
    rule: "Power Factor",
    type: "Quality",
    threshold: "<0.9",
    enabled: true,
    notifications: ["Email"],
  },
  {
    rule: "Generator Status",
    type: "Backup",
    threshold: "Offline >5min",
    enabled: false,
    notifications: ["SMS"],
  },
  {
    rule: "Energy Spike",
    type: "Consumption",
    threshold: "+50% in 15min",
    enabled: true,
    notifications: ["Email", "SMS", "Push"],
  },
];

// Response team
const responseTeam = [
  {
    name: "John Doe",
    role: "Grid Engineer",
    status: "available",
    alerts: 2,
    response: "12m",
  },
  {
    name: "Sarah Miller",
    role: "Solar Specialist",
    status: "busy",
    alerts: 1,
    response: "25m",
  },
  {
    name: "Mike Rogers",
    role: "HVAC Technician",
    status: "available",
    alerts: 0,
    response: "8m",
  },
  {
    name: "Emma Wilson",
    role: "System Admin",
    status: "offline",
    alerts: 0,
    response: "45m",
  },
  {
    name: "Alex Chen",
    role: "Quality Analyst",
    status: "available",
    alerts: 1,
    response: "18m",
  },
];

// Notification channels
const notificationChannels = [
  { channel: "Email", enabled: true, recipients: 5, delay: "Instant" },
  { channel: "SMS", enabled: true, recipients: 3, delay: "Instant" },
  {
    channel: "Push Notification",
    enabled: true,
    recipients: 8,
    delay: "Instant",
  },
  { channel: "Slack", enabled: false, recipients: 0, delay: "5 min" },
  { channel: "Teams", enabled: true, recipients: 4, delay: "2 min" },
];

// Custom tooltip
const AlertTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xl">
        <p className="text-gray-900 font-semibold text-sm mb-3">{label}</p>
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
              <span className="text-gray-600">{entry.name}</span>
            </div>
            <span className="font-medium text-gray-900">
              {entry.value} alerts
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Status badge component
const AlertStatusBadge = ({ status }) => {
  const config = {
    active: { color: "bg-red-100 text-red-800", label: "Active" },
    acknowledged: {
      color: "bg-amber-100 text-amber-800",
      label: "Acknowledged",
    },
    resolved: { color: "bg-emerald-100 text-emerald-800", label: "Resolved" },
  };

  return (
    <Badge className={`${config[status]?.color} border-0`}>
      {config[status]?.label}
    </Badge>
  );
};

// Priority badge component
const PriorityBadge = ({ priority }) => {
  const config = {
    P1: { color: "bg-red-100 text-red-800", label: "P1 - Critical" },
    P2: { color: "bg-amber-100 text-amber-800", label: "P2 - High" },
    P3: { color: "bg-blue-100 text-blue-800", label: "P3 - Medium" },
    P4: { color: "bg-gray-100 text-gray-800", label: "P4 - Low" },
  };

  return (
    <Badge className={`${config[priority]?.color} border-0`}>
      {config[priority]?.label}
    </Badge>
  );
};

export default function EnergyAlerts() {
  const [alertFilter, setAlertFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [autoAcknowledge, setAutoAcknowledge] = useState(false);
  const [escalationTime, setEscalationTime] = useState([30]);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Energy Alerts & Notifications
              </h1>
              <p className="text-red-100 text-lg max-w-2xl">
                Real-time alert monitoring, incident management, and
                notification configuration
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-red-100 text-sm">Active Incidents</div>
                <div className="text-white font-bold text-xl">8</div>
              </div>
              <Button className="bg-white text-red-600 hover:bg-red-50 shadow-lg font-semibold">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.338 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                New Alert
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {alertMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-100 text-sm font-medium">
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
                      metric.severity === "critical"
                        ? "bg-red-500/20 text-red-300 border-red-500/30"
                        : metric.severity === "high"
                        ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                        : metric.severity === "good"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                    }
                  >
                    {metric.change}
                  </Badge>
                  <span className="text-red-200 text-sm ml-2">
                    {metric.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Active Alerts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Alerts List */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl">Active Alerts</CardTitle>
                  <CardDescription>
                    Real-time alerts requiring attention
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Select value={alertFilter} onValueChange={setAlertFilter}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Alerts</SelectItem>
                      <SelectItem value="critical">Critical Only</SelectItem>
                      <SelectItem value="warning">Warnings Only</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={severityFilter}
                    onValueChange={setSeverityFilter}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="p1">P1 Only</SelectItem>
                      <SelectItem value="p2">P2 Only</SelectItem>
                      <SelectItem value="p3">P3 Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {activeAlerts.map((alert, index) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-xl border transition-all duration-200 ${
                        alert.status === "active"
                          ? "bg-gradient-to-r from-red-50 to-orange-50 border-red-200 hover:from-red-100 hover:to-orange-100"
                          : alert.status === "acknowledged"
                          ? "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 hover:from-amber-100 hover:to-yellow-100"
                          : "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 hover:from-emerald-100 hover:to-green-100"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              alert.type === "Critical"
                                ? "bg-red-100 text-red-600 animate-pulse"
                                : alert.type === "Warning"
                                ? "bg-amber-100 text-amber-600"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {alert.type === "Critical"
                              ? "🚨"
                              : alert.type === "Warning"
                              ? "⚠️"
                              : "ℹ️"}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {alert.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {alert.source} • {alert.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <PriorityBadge priority={alert.priority} />
                          <div className="text-sm text-gray-500 mt-1">
                            ID: {alert.id}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-4">
                          <AlertStatusBadge status={alert.status} />
                          <div className="text-sm">
                            <span className="text-gray-600">Assigned to:</span>
                            <span className="font-medium ml-1">
                              {alert.assigned}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Acknowledge
                          </Button>
                          <Button size="sm">Take Action</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="w-full flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Showing {activeAlerts.length} alerts • Last updated: Just now
                </div>
                <Button variant="outline" size="sm">
                  View All Alerts
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Alert Trends */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Alert Trends & Analysis</CardTitle>
              <CardDescription>
                Weekly alert patterns and sources
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                      data={alertHistory}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="date" stroke="#6B7280" />
                      <YAxis
                        stroke="#6B7280"
                        label={{
                          value: "Number of Alerts",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip content={<AlertTooltip />} />
                      <Legend />
                      <Bar
                        dataKey="critical"
                        fill="#EF4444"
                        name="Critical Alerts"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="warning"
                        fill="#F59E0B"
                        name="Warning Alerts"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="info"
                        fill="#3B82F6"
                        name="Info Alerts"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={alertSources}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="count"
                      >
                        {alertSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value} alerts`, "Count"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="text-2xl font-bold text-red-700">32%</div>
                  <div className="text-sm text-red-600">Grid Systems</div>
                  <div className="text-xs text-red-500">
                    Main source of alerts
                  </div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="text-2xl font-bold text-amber-700">-15%</div>
                  <div className="text-sm text-amber-600">Trend this week</div>
                  <div className="text-xs text-amber-500">Improving</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-700">94%</div>
                  <div className="text-sm text-emerald-600">
                    Resolution Rate
                  </div>
                  <div className="text-xs text-emerald-500">Above target</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Controls & Configuration */}
        <div className="space-y-6">
          {/* Alert Configuration */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Alert Configuration</CardTitle>
              <CardDescription>
                Configure alert rules and thresholds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-semibold">Auto Acknowledge</Label>
                    <p className="text-sm text-gray-500">
                      Auto-acknowledge non-critical alerts
                    </p>
                  </div>
                  <Switch
                    checked={autoAcknowledge}
                    onCheckedChange={setAutoAcknowledge}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold">Escalation Time</Label>
                    <span className="font-semibold text-blue-600">
                      {escalationTime[0]} min
                    </span>
                  </div>
                  <Slider
                    value={escalationTime}
                    onValueChange={setEscalationTime}
                    min={5}
                    max={120}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Immediate</span>
                    <span>Standard</span>
                    <span>Extended</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Default Priority</Label>
                  <Select defaultValue="p2">
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="p1">P1 - Critical</SelectItem>
                      <SelectItem value="p2">P2 - High</SelectItem>
                      <SelectItem value="p3">P3 - Medium</SelectItem>
                      <SelectItem value="p4">P4 - Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Maintenance Mode</Label>
                  <Select defaultValue="disabled">
                    <SelectTrigger>
                      <SelectValue placeholder="Maintenance status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disabled">Disabled</SelectItem>
                      <SelectItem value="enabled">
                        Enabled (Suppress alerts)
                      </SelectItem>
                      <SelectItem value="partial">
                        Partial (Reduce alerts)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Save Configuration
              </Button>
            </CardFooter>
          </Card>

          {/* Response Team */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Response Team Status</CardTitle>
              <CardDescription>On-call team availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {responseTeam.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          member.status === "available"
                            ? "bg-emerald-500"
                            : member.status === "busy"
                            ? "bg-amber-500"
                            : "bg-gray-400"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-500">
                          {member.role}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        {member.alerts} alerts
                      </div>
                      <div className="text-sm text-gray-500">
                        Avg: {member.response}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-blue-600">
                      Team Availability
                    </div>
                    <div className="text-xl font-bold text-blue-800">
                      3/5 Available
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800">60%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
              <CardDescription>Common alert management tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.338 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                Create Manual Alert
              </Button>
              <Button variant="outline" className="w-full justify-start">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01118 0z"
                  />
                </svg>
                Acknowledge All
              </Button>
              <Button variant="outline" className="w-full justify-start">
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
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                Export Alert Log
              </Button>
              <Button variant="outline" className="w-full justify-start">
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
                Configure Rules
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alert Rules */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Alert Rules & Triggers</CardTitle>
            <CardDescription>
              Configured alert rules and notification settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertRules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white transition-all duration-200 border"
                >
                  <div>
                    <div className="font-semibold">{rule.rule}</div>
                    <div className="text-sm text-gray-500">
                      Type: {rule.type} • Threshold: {rule.threshold}
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      {rule.notifications.map((notif, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {notif}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <Switch
                      checked={rule.enabled}
                      onCheckedChange={(checked) =>
                        console.log(`Rule ${rule.rule}: ${checked}`)
                      }
                    />
                    <div className="text-sm text-gray-500 mt-1">
                      {rule.enabled ? "Enabled" : "Disabled"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-purple-800">
                    New Alert Rule
                  </h4>
                  <p className="text-sm text-purple-600">
                    Configure custom thresholds
                  </p>
                </div>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  + Add Rule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Notification Channels</CardTitle>
            <CardDescription>
              Configure how alerts are delivered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notificationChannels.map((channel, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white transition-all duration-200 border"
                >
                  <div>
                    <div className="font-semibold">{channel.channel}</div>
                    <div className="text-sm text-gray-500">
                      {channel.recipients} recipients • Delay: {channel.delay}
                    </div>
                  </div>
                  <div className="text-right">
                    <Switch
                      checked={channel.enabled}
                      onCheckedChange={(checked) =>
                        console.log(`Channel ${channel.channel}: ${checked}`)
                      }
                    />
                    <div className="text-sm text-gray-500 mt-1">
                      {channel.enabled ? "Active" : "Inactive"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label className="font-semibold">Emergency Contact</Label>
                <Input placeholder="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Custom Message</Label>
                <Textarea
                  placeholder="Add custom notification message template..."
                  rows={2}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Panel */}
      <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-sm border border-red-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Alert Management Summary
            </h3>
            <p className="text-gray-600">
              Proactive monitoring and rapid response system for energy
              infrastructure
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
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
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              Export Report
            </Button>
            <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
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
              Test Alerts
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">
              MTTR (Mean Time to Resolve)
            </div>
            <div className="text-2xl font-bold text-emerald-600">45 min</div>
            <div className="text-xs text-gray-500">Below target of 60 min</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">False Positive Rate</div>
            <div className="text-2xl font-bold text-amber-600">8.5%</div>
            <div className="text-xs text-gray-500">Needs improvement</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">System Uptime</div>
            <div className="text-2xl font-bold text-blue-600">99.95%</div>
            <div className="text-xs text-gray-500">Exceeds SLA target</div>
          </div>
        </div>
      </div>
    </div>
  );
}
