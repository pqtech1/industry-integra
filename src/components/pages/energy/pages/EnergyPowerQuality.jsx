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
import { Slider } from "@/components/ui/slider";
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
  ComposedChart,
  ScatterChart,
  Scatter,
  ZAxis,
  ReferenceLine,
  ReferenceArea,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Power quality metrics
const qualityMetrics = [
  {
    title: "Power Factor",
    value: "0.92",
    change: "+0.03",
    description: "lagging",
    color: "text-emerald-600",
    icon: "⚡",
    status: "good",
  },
  {
    title: "Voltage THD",
    value: "2.8%",
    change: "-0.5%",
    description: "total harmonic distortion",
    color: "text-blue-600",
    icon: "📊",
    status: "good",
  },
  {
    title: "Frequency",
    value: "59.98 Hz",
    change: "-0.02 Hz",
    description: "grid frequency",
    color: "text-purple-600",
    icon: "📈",
    status: "warning",
  },
  {
    title: "Voltage Unbalance",
    value: "1.2%",
    change: "+0.3%",
    description: "phase imbalance",
    color: "text-amber-600",
    icon: "⚖️",
    status: "warning",
  },
];

// Real-time voltage monitoring
const voltageData = [
  { time: "00:00", phaseA: 238, phaseB: 239, phaseC: 237, target: 240 },
  { time: "02:00", phaseA: 237, phaseB: 238, phaseC: 236, target: 240 },
  { time: "04:00", phaseA: 239, phaseB: 239, phaseC: 238, target: 240 },
  { time: "06:00", phaseA: 241, phaseB: 242, phaseC: 240, target: 240 },
  { time: "08:00", phaseA: 239, phaseB: 240, phaseC: 238, target: 240 },
  { time: "10:00", phaseA: 237, phaseB: 238, phaseC: 236, target: 240 },
  { time: "12:00", phaseA: 236, phaseB: 237, phaseC: 235, target: 240 },
  { time: "14:00", phaseA: 235, phaseB: 236, phaseC: 234, target: 240 },
  { time: "16:00", phaseA: 234, phaseB: 235, phaseC: 233, target: 240 },
  { time: "18:00", phaseA: 236, phaseB: 237, phaseC: 235, target: 240 },
  { time: "20:00", phaseA: 238, phaseB: 239, phaseC: 237, target: 240 },
  { time: "22:00", phaseA: 239, phaseB: 240, phaseC: 238, target: 240 },
];

// Harmonic analysis
const harmonicData = [
  { harmonic: "3rd", magnitude: 2.8, limit: 4.0, impact: "Medium" },
  { harmonic: "5th", magnitude: 1.5, limit: 4.0, impact: "Low" },
  { harmonic: "7th", magnitude: 1.2, limit: 4.0, impact: "Low" },
  { harmonic: "9th", magnitude: 0.8, limit: 1.5, impact: "Low" },
  { harmonic: "11th", magnitude: 0.6, limit: 1.5, impact: "Low" },
  { harmonic: "13th", magnitude: 0.4, limit: 1.5, impact: "Low" },
  { harmonic: "15th", magnitude: 0.3, limit: 0.5, impact: "High" },
];

// Power factor trend
const powerFactorData = [
  { time: "00:00", pf: 0.85, reactive: 120 },
  { time: "02:00", pf: 0.82, reactive: 135 },
  { time: "04:00", pf: 0.8, reactive: 150 },
  { time: "06:00", pf: 0.78, reactive: 165 },
  { time: "08:00", pf: 0.75, reactive: 180 },
  { time: "10:00", pf: 0.72, reactive: 195 },
  { time: "12:00", pf: 0.7, reactive: 210 },
  { time: "14:00", pf: 0.88, reactive: 90 },
  { time: "16:00", pf: 0.9, reactive: 75 },
  { time: "18:00", pf: 0.92, reactive: 60 },
  { time: "20:00", pf: 0.94, reactive: 45 },
  { time: "22:00", pf: 0.95, reactive: 30 },
];

// Transients and disturbances
const disturbanceEvents = [
  {
    time: "09:15",
    type: "Voltage Sag",
    duration: "0.2s",
    magnitude: "15%",
    equipment: "Motor-3",
  },
  {
    time: "11:30",
    type: "Harmonic Spike",
    duration: "1.5s",
    magnitude: "8%",
    equipment: "UPS-1",
  },
  {
    time: "14:45",
    type: "Frequency Dip",
    duration: "0.5s",
    magnitude: "0.5 Hz",
    equipment: "Grid",
  },
  {
    time: "16:20",
    type: "Voltage Swell",
    duration: "0.1s",
    magnitude: "12%",
    equipment: "Transformer",
  },
];

// Phase analysis
const phaseAnalysis = [
  {
    parameter: "Voltage",
    phaseA: 238,
    phaseB: 239,
    phaseC: 237,
    balance: 98.5,
  },
  {
    parameter: "Current",
    phaseA: 145,
    phaseB: 142,
    phaseC: 148,
    balance: 96.8,
  },
  {
    parameter: "Power",
    phaseA: 34.5,
    phaseB: 33.8,
    phaseC: 35.2,
    balance: 97.2,
  },
  { parameter: "THD", phaseA: 2.8, phaseB: 2.5, phaseC: 3.1, balance: 88.7 },
];

// Power quality events
const qualityEvents = [
  {
    event: "Low Power Factor",
    count: 8,
    severity: "Medium",
    last: "2 hours ago",
  },
  {
    event: "Voltage Unbalance",
    count: 3,
    severity: "Low",
    last: "5 hours ago",
  },
  {
    event: "Harmonic Distortion",
    count: 12,
    severity: "High",
    last: "30 min ago",
  },
  {
    event: "Frequency Deviation",
    count: 2,
    severity: "Critical",
    last: "1 hour ago",
  },
];

// Custom tooltip
const QualityTooltip = ({ active, payload, label }) => {
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
              {entry.value} {entry.unit || ""}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Severity badge
const SeverityBadge = ({ severity }) => {
  const config = {
    critical: { color: "bg-red-100 text-red-800", label: "Critical" },
    high: { color: "bg-orange-100 text-orange-800", label: "High" },
    medium: { color: "bg-amber-100 text-amber-800", label: "Medium" },
    low: { color: "bg-blue-100 text-blue-800", label: "Low" },
    good: { color: "bg-emerald-100 text-emerald-800", label: "Good" },
  };

  return (
    <Badge className={`${config[severity]?.color} border-0`}>
      {config[severity]?.label}
    </Badge>
  );
};

export default function EnergyPowerQuality() {
  const [timeRange, setTimeRange] = useState("hourly");
  const [viewMode, setViewMode] = useState("voltage");
  const [pfTarget, setPfTarget] = useState([0.95]);
  const [autoCorrection, setAutoCorrection] = useState(true);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-black p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Power Quality Intelligence
              </h1>
              <p className="text-purple-100 text-lg max-w-2xl">
                Monitor voltage stability, harmonic distortion, power factor,
                and grid reliability
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="text-purple-100 text-sm">Overall PQ Index</div>
                <div className="text-white font-bold text-xl">92.5%</div>
              </div>
              <Button className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg font-semibold">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Run Diagnostics
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {qualityMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-100 text-sm font-medium">
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
                      metric.status === "good"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : metric.status === "warning"
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                        : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                    }
                  >
                    {metric.change}
                  </Badge>
                  <span className="text-purple-200 text-sm ml-2">
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
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Voltage Monitoring */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl">
                    Three-Phase Voltage Monitoring
                  </CardTitle>
                  <CardDescription>
                    Real-time voltage stability and phase balance
                  </CardDescription>
                </div>
                <Tabs
                  defaultValue="hourly"
                  className="w-[300px]"
                  onValueChange={setTimeRange}
                >
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="hourly">Hourly</TabsTrigger>
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart
                  data={voltageData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <defs>
                    <linearGradient
                      id="colorPhaseA"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorPhaseB"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorPhaseC"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="time"
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#6B7280"
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: "Voltage (V)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10,
                    }}
                  />
                  <Tooltip content={<QualityTooltip />} />
                  <Legend />

                  {/* Voltage limits */}
                  <ReferenceLine
                    y={230}
                    stroke="#EF4444"
                    strokeDasharray="3 3"
                    label={{ value: "Min", position: "insideBottomLeft" }}
                  />
                  <ReferenceLine
                    y={250}
                    stroke="#EF4444"
                    strokeDasharray="3 3"
                    label={{ value: "Max", position: "insideTopLeft" }}
                  />
                  <ReferenceLine
                    y={240}
                    stroke="#10B981"
                    strokeDasharray="3 3"
                    label={{ value: "Target", position: "insideTopRight" }}
                  />

                  {/* Safe zone */}
                  <ReferenceArea
                    y1={230}
                    y2={250}
                    fill="#D1FAE5"
                    fillOpacity={0.1}
                  />

                  <Area
                    type="monotone"
                    dataKey="phaseA"
                    stroke="#3B82F6"
                    fill="url(#colorPhaseA)"
                    name="Phase A"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="phaseB"
                    stroke="#10B981"
                    fill="url(#colorPhaseB)"
                    name="Phase B"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="phaseC"
                    stroke="#8B5CF6"
                    fill="url(#colorPhaseC)"
                    name="Phase C"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#6B7280"
                    strokeWidth={1}
                    strokeDasharray="5 5"
                    name="Target Voltage"
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>

              {/* Voltage Summary */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">98.5%</div>
                  <div className="text-sm text-blue-600">Phase Balance</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-700">
                    238 V
                  </div>
                  <div className="text-sm text-emerald-600">
                    Average Voltage
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">
                    ±2.5%
                  </div>
                  <div className="text-sm text-purple-600">
                    Voltage Variation
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Harmonic Analysis */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">
                Harmonic Distortion Analysis
              </CardTitle>
              <CardDescription>
                Total Harmonic Distortion (THD) by harmonic order
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                      data={harmonicData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="harmonic" stroke="#6B7280" />
                      <YAxis
                        stroke="#6B7280"
                        label={{
                          value: "Magnitude (%)",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip />
                      <Bar
                        dataKey="magnitude"
                        fill="#8B5CF6"
                        name="Harmonic Magnitude"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="limit"
                        fill="#E5E7EB"
                        name="IEC Limit"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {harmonicData.map((harmonic, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">
                          {harmonic.harmonic} Harmonic
                        </span>
                        <span className="font-semibold">
                          {harmonic.magnitude}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          Limit: {harmonic.limit}%
                        </span>
                        <span className="text-gray-500">
                          Impact: {harmonic.impact}
                        </span>
                      </div>
                      <Progress
                        value={(harmonic.magnitude / harmonic.limit) * 100}
                        className="h-2"
                        indicatorClassName={
                          harmonic.magnitude / harmonic.limit > 0.9
                            ? "bg-red-500"
                            : harmonic.magnitude / harmonic.limit > 0.7
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-purple-800">
                      Total Voltage THD
                    </h4>
                    <p className="text-sm text-purple-600">
                      Current: 2.8% | Limit: 5.0%
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl text-emerald-600">
                      44%
                    </div>
                    <div className="text-sm text-emerald-600">Below limit</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Controls & Analysis */}
        <div className="space-y-6">
          {/* Power Factor Correction */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Power Factor Correction</CardTitle>
              <CardDescription>
                Manage reactive power and improve efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">
                    0.92
                  </div>
                  <div className="text-sm text-gray-600">
                    Current Power Factor
                  </div>
                  <Progress
                    value={92}
                    className="h-3 mt-2"
                    indicatorClassName="bg-emerald-500"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="font-semibold">PF Target</Label>
                    <span className="font-semibold text-emerald-600">
                      {pfTarget[0]}
                    </span>
                  </div>
                  <Slider
                    value={pfTarget}
                    onValueChange={setPfTarget}
                    min={0.8}
                    max={1.0}
                    step={0.01}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Lagging</span>
                    <span>Unity</span>
                    <span>Leading</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="font-semibold">Auto Correction</Label>
                      <p className="text-sm text-gray-500">
                        Automatically manage capacitor banks
                      </p>
                    </div>
                    <Switch
                      checked={autoCorrection}
                      onCheckedChange={setAutoCorrection}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-semibold">Reactive Power</Label>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current: 120 kVAR</span>
                      <span className="text-emerald-600">Target: 75 kVAR</span>
                    </div>
                    <Progress
                      value={62}
                      className="h-2"
                      indicatorClassName="bg-blue-500"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                Optimize Power Factor
              </Button>
            </CardFooter>
          </Card>

          {/* Power Quality Events */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Quality Events & Alerts</CardTitle>
              <CardDescription>
                Recent power quality disturbances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {disturbanceEvents.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">{event.type}</div>
                        <div className="text-sm text-gray-500">
                          {event.time} • {event.duration}
                        </div>
                      </div>
                      <SeverityBadge
                        severity={
                          event.type.includes("Sag") ||
                          event.type.includes("Dip")
                            ? "medium"
                            : event.type.includes("Spike") ||
                              event.type.includes("Swell")
                            ? "high"
                            : "low"
                        }
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        Magnitude: {event.magnitude}
                      </span>
                      <span className="font-medium text-blue-600">
                        Affected: {event.equipment}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-red-800">Active Alert</h4>
                    <p className="text-sm text-red-600">
                      Frequency deviation detected
                    </p>
                  </div>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Investigate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase Balance */}
          <Card className="shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Phase Balance Analysis</CardTitle>
              <CardDescription>Three-phase system symmetry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {phaseAnalysis.map((phase, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{phase.parameter}</span>
                      <span className="font-semibold">{phase.balance}%</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-medium text-blue-700">
                          A: {phase.phaseA}
                        </div>
                      </div>
                      <div className="text-center p-2 bg-emerald-50 rounded">
                        <div className="font-medium text-emerald-700">
                          B: {phase.phaseB}
                        </div>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="font-medium text-purple-700">
                          C: {phase.phaseC}
                        </div>
                      </div>
                    </div>
                    <Progress
                      value={phase.balance}
                      className="h-2"
                      indicatorClassName={
                        phase.balance > 98
                          ? "bg-emerald-500"
                          : phase.balance > 95
                          ? "bg-amber-500"
                          : "bg-red-500"
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Power Factor Trend */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">
              Power Factor Trend Analysis
            </CardTitle>
            <CardDescription>
              Daily power factor variations with reactive power
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart
                    data={powerFactorData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="time" stroke="#6B7280" />
                    <YAxis
                      yAxisId="left"
                      stroke="#6B7280"
                      label={{
                        value: "Power Factor",
                        angle: -90,
                        position: "insideLeft",
                      }}
                      domain={[0.7, 1.0]}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#6B7280"
                      label={{
                        value: "Reactive Power (kVAR)",
                        angle: 90,
                        position: "insideRight",
                      }}
                    />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine
                      y={0.9}
                      stroke="#10B981"
                      strokeDasharray="3 3"
                      label={{ value: "Target", position: "insideTopRight" }}
                      yAxisId="left"
                    />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="pf"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.1}
                      name="Power Factor"
                      strokeWidth={2}
                    />
                    <Bar
                      yAxisId="right"
                      dataKey="reactive"
                      fill="#8B5CF6"
                      name="Reactive Power"
                      radius={[4, 4, 0, 0]}
                      barSize={20}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="text-sm text-blue-600 font-medium">
                      Lowest PF
                    </div>
                    <div className="text-2xl font-bold text-blue-800 mt-1">
                      0.70
                    </div>
                    <div className="text-sm text-blue-600">At 12:00 PM</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
                    <div className="text-sm text-emerald-600 font-medium">
                      Highest PF
                    </div>
                    <div className="text-2xl font-bold text-emerald-800 mt-1">
                      0.95
                    </div>
                    <div className="text-sm text-emerald-600">At 10:00 PM</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    PF Improvement Opportunities
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">
                        Add capacitor banks (Morning peak)
                      </span>
                      <Badge className="bg-emerald-100 text-emerald-800">
                        Save $1,200/mo
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">
                        Optimize motor operation schedules
                      </span>
                      <Badge className="bg-blue-100 text-blue-800">
                        Save $850/mo
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm">
                        Install automatic PF correction
                      </span>
                      <Badge className="bg-purple-100 text-purple-800">
                        ROI: 1.5 years
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Statistics */}
        <Card className="shadow-xl border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Power Quality Statistics</CardTitle>
            <CardDescription>
              Monthly quality metrics and compliance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-4xl font-bold text-blue-800 mb-2">
                    92.5%
                  </div>
                  <div className="text-sm font-medium text-blue-700">
                    Overall PQ Index
                  </div>
                  <div className="text-xs text-blue-600 mt-1">
                    IEEE 1159 compliant
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-800 mb-2">
                    99.2%
                  </div>
                  <div className="text-sm font-medium text-emerald-700">
                    Uptime
                  </div>
                  <div className="text-xs text-emerald-600 mt-1">
                    No major outages
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Event Statistics
                </h4>
                {qualityEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium">{event.event}</div>
                      <div className="text-sm text-gray-500">
                        Count: {event.count} | Last: {event.last}
                      </div>
                    </div>
                    <SeverityBadge severity={event.severity} />
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      Compliance Status
                    </h4>
                    <p className="text-sm text-blue-600">
                      Meeting IEEE 1159 standards
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl text-emerald-600">
                      A+
                    </div>
                    <div className="text-sm text-emerald-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Panel */}
      <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl shadow-sm border border-purple-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Power Quality Optimization
            </h3>
            <p className="text-gray-600">
              Implement harmonic filters, voltage regulators, and power
              conditioning solutions
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
              Generate Report
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
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
              Optimize Now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Harmonic Reduction</div>
            <div className="text-2xl font-bold text-emerald-600">45%</div>
            <div className="text-xs text-gray-500">With active filters</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Energy Savings</div>
            <div className="text-2xl font-bold text-blue-600">$3,500</div>
            <div className="text-xs text-gray-500">
              Monthly with PF correction
            </div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border">
            <div className="text-sm text-gray-600">Equipment Life</div>
            <div className="text-2xl font-bold text-purple-600">+25%</div>
            <div className="text-xs text-gray-500">
              Extended with clean power
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
