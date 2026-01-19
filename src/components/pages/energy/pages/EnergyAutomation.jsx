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
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
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
import { format } from "date-fns";

// Automation rules
const automationRules = [
  {
    id: "RULE-001",
    name: "Peak Shaving",
    description: "Reduce load during peak hours",
    status: "active",
    trigger: "Time-based (4-8 PM)",
    actions: ["Reduce HVAC by 20%", "Switch to battery"],
    savings: 15,
    priority: "high",
    category: "load-management",
  },
  {
    id: "RULE-002",
    name: "Solar Optimization",
    description: "Maximize solar consumption",
    status: "active",
    trigger: "Solar Production > 80%",
    actions: ["Charge battery", "Activate water heater"],
    savings: 12,
    priority: "high",
    category: "generation",
  },
  {
    id: "RULE-003",
    name: "Night Mode",
    description: "Energy saving during night",
    status: "active",
    trigger: "10 PM - 6 AM",
    actions: ["Dim lights", "Reduce standby power"],
    savings: 8,
    priority: "medium",
    category: "conservation",
  },
  {
    id: "RULE-004",
    name: "Generator Auto-start",
    description: "Auto-start backup during outage",
    status: "inactive",
    trigger: "Grid failure detected",
    actions: ["Start generator", "Transfer load"],
    savings: 0,
    priority: "critical",
    category: "backup",
  },
  {
    id: "RULE-005",
    name: "Demand Response",
    description: "Participate in grid programs",
    status: "active",
    trigger: "Grid request",
    actions: ["Shed non-critical loads"],
    savings: 18,
    priority: "medium",
    category: "grid-services",
  },
  {
    id: "RULE-006",
    name: "Temperature Control",
    description: "Smart HVAC optimization",
    status: "active",
    trigger: "Temp variance > 2°C",
    actions: ["Adjust setpoints", "Optimize airflow"],
    savings: 10,
    priority: "medium",
    category: "hvac",
  },
];

// Scheduled automations
const scheduledTasks = [
  {
    id: "SCH-001",
    name: "Morning Warm-up",
    time: "06:30 AM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    actions: ["Turn on HVAC", "Heat water", "Coffee machine"],
    status: "scheduled",
  },
  {
    id: "SCH-002",
    name: "Lunch Break",
    time: "12:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    actions: ["Dim office lights", "Reduce HVAC"],
    status: "active",
  },
  {
    id: "SCH-003",
    name: "Evening Shutdown",
    time: "08:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    actions: ["Turn off non-essential", "Activate security", "Set night temp"],
    status: "scheduled",
  },
  {
    id: "SCH-004",
    name: "Weekend Mode",
    time: "All day",
    days: ["Sat", "Sun"],
    actions: ["Reduce overall consumption", "Optimize for solar"],
    status: "active",
  },
  {
    id: "SCH-005",
    name: "Battery Charge",
    time: "02:00 AM",
    days: ["Daily"],
    actions: ["Charge from grid (off-peak)", "Prepare for day"],
    status: "scheduled",
  },
];

// Optimization data
const optimizationData = [
  { hour: "00:00", current: 45, optimized: 35, potential: 22 },
  { hour: "04:00", current: 40, optimized: 30, potential: 25 },
  { hour: "08:00", current: 120, optimized: 95, potential: 21 },
  { hour: "12:00", current: 180, optimized: 140, potential: 22 },
  { hour: "16:00", current: 210, optimized: 160, potential: 24 },
  { hour: "20:00", current: 160, optimized: 120, potential: 25 },
];

// Energy savings by category
const savingsByCategory = [
  { category: "HVAC", savings: 35, color: "#3B82F6" },
  { category: "Lighting", savings: 25, color: "#10B981" },
  { category: "Equipment", savings: 20, color: "#F59E0B" },
  { category: "Water Heating", savings: 15, color: "#EF4444" },
  { category: "Other", savings: 5, color: "#8B5CF6" },
];

// Automation history
const automationHistory = [
  {
    time: "10 min ago",
    rule: "Peak Shaving",
    action: "Reduced HVAC load",
    result: "15 kWh saved",
    status: "success",
  },
  {
    time: "45 min ago",
    rule: "Solar Optimization",
    action: "Battery charging",
    result: "12 kWh stored",
    status: "success",
  },
  {
    time: "2 hours ago",
    rule: "Night Mode",
    action: "Dimmed lights",
    result: "8 kWh saved",
    status: "success",
  },
  {
    time: "5 hours ago",
    rule: "Demand Response",
    action: "Load shedding",
    result: "Grid request fulfilled",
    status: "success",
  },
  {
    time: "Yesterday",
    rule: "Temperature Control",
    action: "Setpoint adjustment",
    result: "10 kWh saved",
    status: "success",
  },
  {
    time: "2 days ago",
    rule: "Generator Test",
    action: "Auto-start test",
    result: "System ready",
    status: "info",
  },
];

// Device groups
const deviceGroups = [
  { name: "HVAC System", devices: 8, automation: 85, status: "optimized" },
  { name: "Lighting", devices: 42, automation: 90, status: "optimized" },
  { name: "Office Equipment", devices: 24, automation: 65, status: "partial" },
  { name: "Water Systems", devices: 6, automation: 75, status: "optimized" },
  { name: "Security", devices: 12, automation: 40, status: "basic" },
  { name: "Entertainment", devices: 8, automation: 30, status: "basic" },
];

// Status badge component
const AutomationStatusBadge = ({ status }) => {
  const config = {
    active: { color: "bg-emerald-100 text-emerald-800", label: "Active" },
    inactive: { color: "bg-gray-100 text-gray-800", label: "Inactive" },
    scheduled: { color: "bg-blue-100 text-blue-800", label: "Scheduled" },
    success: { color: "bg-emerald-100 text-emerald-800", label: "Success" },
    info: { color: "bg-blue-100 text-blue-800", label: "Info" },
    warning: { color: "bg-amber-100 text-amber-800", label: "Warning" },
    optimized: { color: "bg-emerald-100 text-emerald-800", label: "Optimized" },
    partial: { color: "bg-amber-100 text-amber-800", label: "Partial" },
    basic: { color: "bg-gray-100 text-gray-800", label: "Basic" },
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
    critical: { color: "bg-red-100 text-red-800", label: "Critical" },
    high: { color: "bg-orange-100 text-orange-800", label: "High" },
    medium: { color: "bg-blue-100 text-blue-800", label: "Medium" },
    low: { color: "bg-gray-100 text-gray-800", label: "Low" },
  };

  return (
    <Badge className={`${config[priority]?.color} border-0`}>
      {config[priority]?.label}
    </Badge>
  );
};

export default function EnergyAutomation() {
  const [selectedTab, setSelectedTab] = useState("rules");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [learningMode, setLearningMode] = useState(true);
  const [optimizationLevel, setOptimizationLevel] = useState([75]);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-950 via-green-700 to-green-500 p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Energy Automation & Optimization
              </h1>
              <p className="text-blue-100 text-lg max-w-2xl">
                Smart scheduling, automated rules, and AI-powered energy
                optimization
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-blue-100 text-sm">Monthly Savings</div>
                <div className="text-white font-bold text-xl">$1,850</div>
              </div>
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                New Automation
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100 text-sm font-medium">
                  Active Rules
                </span>
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">18</div>
              <div className="flex items-center">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  +3
                </Badge>
                <span className="text-blue-200 text-sm ml-2">this month</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100 text-sm font-medium">
                  Energy Savings
                </span>
                <span className="text-2xl">💰</span>
              </div>
              <div className="text-2xl font-bold text-emerald-300 mb-1">
                24%
              </div>
              <div className="flex items-center">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  +5%
                </Badge>
                <span className="text-blue-200 text-sm ml-2">
                  vs last month
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100 text-sm font-medium">
                  Auto-executed
                </span>
                <span className="text-2xl">🤖</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">1,248</div>
              <div className="flex items-center">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  98%
                </Badge>
                <span className="text-blue-200 text-sm ml-2">success rate</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100 text-sm font-medium">
                  CO₂ Reduced
                </span>
                <span className="text-2xl">🌱</span>
              </div>
              <div className="text-2xl font-bold text-emerald-300 mb-1">
                3.2t
              </div>
              <div className="flex items-center">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  -15%
                </Badge>
                <span className="text-blue-200 text-sm ml-2">
                  carbon footprint
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full md:w-auto grid-cols-3 md:flex gap-2">
          <TabsTrigger
            value="rules"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
          >
            Automation Rules
          </TabsTrigger>
          <TabsTrigger
            value="scheduling"
            className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700"
          >
            Scheduling
          </TabsTrigger>
          <TabsTrigger
            value="optimization"
            className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-700"
          >
            Optimization
          </TabsTrigger>
        </TabsList>

        {/* Automation Rules Tab */}
        <TabsContent value="rules" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Rules List */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                    <div>
                      <CardTitle className="text-xl">
                        Automation Rules
                      </CardTitle>
                      <CardDescription>
                        Configure smart energy management rules
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Filter by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Rules</SelectItem>
                          <SelectItem value="active">Active Only</SelectItem>
                          <SelectItem value="inactive">
                            Inactive Only
                          </SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button size="sm">
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
                        New Rule
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px] pr-4">
                    <div className="space-y-4">
                      {automationRules.map((rule) => (
                        <div
                          key={rule.id}
                          className={`p-4 rounded-xl border transition-all duration-200 ${
                            rule.status === "active"
                              ? "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 hover:from-emerald-100 hover:to-green-100"
                              : "bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200 hover:from-gray-100 hover:to-slate-100"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-start space-x-3">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                  rule.status === "active"
                                    ? "bg-emerald-100 text-emerald-600"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {rule.category === "load-management"
                                  ? "⚡"
                                  : rule.category === "generation"
                                  ? "☀️"
                                  : rule.category === "conservation"
                                  ? "🌙"
                                  : rule.category === "backup"
                                  ? "🛡️"
                                  : "🔧"}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-semibold text-gray-900">
                                    {rule.name}
                                  </h3>
                                  <PriorityBadge priority={rule.priority} />
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                  {rule.description}
                                </p>
                                <div className="flex items-center space-x-4 mt-2">
                                  <span className="text-xs text-gray-500">
                                    <span className="font-medium">
                                      Trigger:
                                    </span>{" "}
                                    {rule.trigger}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    <span className="font-medium">
                                      Savings:
                                    </span>{" "}
                                    {rule.savings}%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <AutomationStatusBadge status={rule.status} />
                              <div className="text-sm text-gray-500 mt-1">
                                ID: {rule.id}
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-4">
                            <div className="flex flex-wrap gap-2">
                              {rule.actions.map((action, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {action}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex space-x-2">
                              <Switch
                                checked={rule.status === "active"}
                                onCheckedChange={(checked) =>
                                  console.log(`Rule ${rule.id}: ${checked}`)
                                }
                              />
                              <Button size="sm" variant="outline">
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Automation History */}
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Automation History</CardTitle>
                  <CardDescription>
                    Recent rule executions and results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {automationHistory.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              item.status === "success"
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {item.status === "success" ? "✓" : "ℹ️"}
                          </div>
                          <div>
                            <div className="font-medium">{item.rule}</div>
                            <div className="text-sm text-gray-500">
                              {item.action}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">
                            {item.result}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Rules Configuration */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">
                    New Rule Configuration
                  </CardTitle>
                  <CardDescription>
                    Create custom automation rules
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Rule Name</Label>
                    <Input placeholder="e.g., Weekend Energy Saver" />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      placeholder="Describe what this rule does..."
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Trigger Condition</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trigger" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="time">Time-based</SelectItem>
                        <SelectItem value="energy">Energy Threshold</SelectItem>
                        <SelectItem value="weather">
                          Weather Condition
                        </SelectItem>
                        <SelectItem value="price">Energy Price</SelectItem>
                        <SelectItem value="manual">Manual Trigger</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Actions</Label>
                    <Textarea
                      placeholder="What actions should be taken? (one per line)"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Save Rule
                  </Button>
                </CardFooter>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                  <CardDescription>Common automation tasks</CardDescription>
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    Run Manual Optimization
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Test All Rules
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Export Rules
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Schedule Maintenance
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Scheduling Tab */}
        <TabsContent value="scheduling" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Schedule Calendar */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Automation Schedule</CardTitle>
                  <CardDescription>
                    Manage time-based automation tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-lg border shadow-sm"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        <h3 className="font-semibold text-lg mb-2">
                          Schedule for {format(selectedDate, "MMMM d, yyyy")}
                        </h3>
                        <div className="space-y-3">
                          {scheduledTasks.map((task) => (
                            <div
                              key={task.id}
                              className="p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium">{task.name}</div>
                                  <div className="text-sm text-gray-500">
                                    {task.time}
                                  </div>
                                </div>
                                <AutomationStatusBadge status={task.status} />
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {task.actions.slice(0, 2).map((action, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {action}
                                  </Badge>
                                ))}
                                {task.actions.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{task.actions.length - 2} more
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                                <span>Days:</span>
                                <div className="flex space-x-1">
                                  {task.days.map((day, idx) => (
                                    <span
                                      key={idx}
                                      className="bg-gray-100 px-2 py-1 rounded text-xs"
                                    >
                                      {day}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Device Groups */}
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Device Groups</CardTitle>
                  <CardDescription>
                    Automation coverage by device category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deviceGroups.map((group, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-xl border hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              group.status === "optimized"
                                ? "bg-emerald-100"
                                : group.status === "partial"
                                ? "bg-amber-100"
                                : "bg-gray-100"
                            }`}
                          >
                            <span className="text-2xl">
                              {group.name.includes("HVAC")
                                ? "❄️"
                                : group.name.includes("Lighting")
                                ? "💡"
                                : group.name.includes("Office")
                                ? "💻"
                                : group.name.includes("Water")
                                ? "💧"
                                : group.name.includes("Security")
                                ? "🔒"
                                : "🎮"}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">{group.name}</div>
                            <div className="text-sm text-gray-500">
                              {group.devices} devices
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  group.status === "optimized"
                                    ? "bg-emerald-500"
                                    : group.status === "partial"
                                    ? "bg-amber-500"
                                    : "bg-gray-400"
                                }`}
                                style={{ width: `${group.automation}%` }}
                              />
                            </div>
                            <span className="font-semibold">
                              {group.automation}%
                            </span>
                          </div>
                          <AutomationStatusBadge status={group.status} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Schedule Configuration */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">New Schedule</CardTitle>
                  <CardDescription>
                    Create time-based automation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Schedule Name</Label>
                    <Input placeholder="e.g., Morning Routine" />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input type="time" />
                  </div>
                  <div className="space-y-2">
                    <Label>Repeat</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekdays">
                          Weekdays (Mon-Fri)
                        </SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Target Devices</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select device group" />
                      </SelectTrigger>
                      <SelectContent>
                        {deviceGroups.map((group) => (
                          <SelectItem
                            key={group.name}
                            value={group.name.toLowerCase()}
                          >
                            {group.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Actions</Label>
                    <Textarea
                      placeholder="What should happen? (e.g., Turn on lights, Adjust temperature)"
                      rows={3}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                    Save Schedule
                  </Button>
                </CardFooter>
              </Card>

              {/* Automation Settings */}
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">Automation Settings</CardTitle>
                  <CardDescription>
                    Configure automation behavior
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="font-semibold">Auto-optimize</Label>
                      <p className="text-sm text-gray-500">
                        AI-powered optimization
                      </p>
                    </div>
                    <Switch
                      checked={autoOptimize}
                      onCheckedChange={setAutoOptimize}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="font-semibold">Learning Mode</Label>
                      <p className="text-sm text-gray-500">
                        Improve based on patterns
                      </p>
                    </div>
                    <Switch
                      checked={learningMode}
                      onCheckedChange={setLearningMode}
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label className="font-semibold">
                        Optimization Level
                      </Label>
                      <span className="font-semibold text-blue-600">
                        {optimizationLevel[0]}%
                      </span>
                    </div>
                    <Slider
                      value={optimizationLevel}
                      onValueChange={setOptimizationLevel}
                      min={0}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Minimal</span>
                      <span>Balanced</span>
                      <span>Aggressive</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Optimization Tab */}
        <TabsContent value="optimization" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Optimization Charts */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Energy Optimization Analysis
                  </CardTitle>
                  <CardDescription>
                    Current vs optimized consumption patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={optimizationData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="hour" stroke="#6B7280" />
                        <YAxis
                          stroke="#6B7280"
                          label={{
                            value: "Energy (kWh)",
                            angle: -90,
                            position: "insideLeft",
                          }}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="current"
                          name="Current Consumption"
                          stroke="#3B82F6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="optimized"
                          name="Optimized"
                          stroke="#10B981"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ r: 4 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="potential"
                          name="Potential Savings"
                          stroke="#F59E0B"
                          strokeWidth={2}
                          strokeDasharray="3 3"
                          dot={{ r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="text-2xl font-bold text-blue-700">
                        180 kWh
                      </div>
                      <div className="text-sm text-blue-600">Current Peak</div>
                      <div className="text-xs text-blue-500">4-8 PM</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <div className="text-2xl font-bold text-emerald-700">
                        140 kWh
                      </div>
                      <div className="text-sm text-emerald-600">
                        Optimized Peak
                      </div>
                      <div className="text-xs text-emerald-500">
                        22% reduction
                      </div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="text-2xl font-bold text-amber-700">
                        $45/day
                      </div>
                      <div className="text-sm text-amber-600">
                        Potential Savings
                      </div>
                      <div className="text-xs text-amber-500">$1,350/month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Savings Breakdown */}
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Savings Breakdown</CardTitle>
                  <CardDescription>Energy savings by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={savingsByCategory}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="savings"
                          >
                            {savingsByCategory.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value) => [
                              `${value}% savings`,
                              "Percentage",
                            ]}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-4">
                      {savingsByCategory.map((item, index) => (
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
                            <span className="font-bold">{item.savings}%</span>
                            <div className="text-sm text-gray-500">
                              ${Math.round(1850 * (item.savings / 100))}/month
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Optimization Recommendations */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">AI Recommendations</CardTitle>
                  <CardDescription>
                    Smart optimization suggestions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        ⚡
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          Peak Shaving
                        </h4>
                        <p className="text-sm text-blue-600 mt-1">
                          Shift 15% of peak load to off-peak hours
                        </p>
                        <div className="mt-2 text-xs text-blue-500">
                          Potential savings: $280/month
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        ☀️
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-800">
                          Solar Utilization
                        </h4>
                        <p className="text-sm text-emerald-600 mt-1">
                          Increase solar self-consumption by 20%
                        </p>
                        <div className="mt-2 text-xs text-emerald-500">
                          Potential savings: $180/month
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                        🔧
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-800">
                          HVAC Optimization
                        </h4>
                        <p className="text-sm text-amber-600 mt-1">
                          Adjust setpoints based on occupancy
                        </p>
                        <div className="mt-2 text-xs text-amber-500">
                          Potential savings: $320/month
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                        💡
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800">
                          Lighting Schedule
                        </h4>
                        <p className="text-sm text-purple-600 mt-1">
                          Automate lighting based on natural light
                        </p>
                        <div className="mt-2 text-xs text-purple-500">
                          Potential savings: $150/month
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    Apply Recommendations
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Summary Panel */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-sm border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Automation Summary
            </h3>
            <p className="text-gray-600">
              Intelligent energy management delivering consistent savings and
              efficiency
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Analytics Report
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Run Optimization
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Automation Coverage</div>
            <div className="text-2xl font-bold text-blue-600">78%</div>
            <div className="text-xs text-gray-500">
              Of total energy consumption
            </div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">ROI Period</div>
            <div className="text-2xl font-bold text-emerald-600">8 months</div>
            <div className="text-xs text-gray-500">Investment payback time</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Rules Executed</div>
            <div className="text-2xl font-bold text-purple-600">1.2k</div>
            <div className="text-xs text-gray-500">This month</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Carbon Avoided</div>
            <div className="text-2xl font-bold text-emerald-600">3.5t</div>
            <div className="text-xs text-gray-500">Equivalent to 85 trees</div>
          </div>
        </div>
      </div>
    </div>
  );
}
