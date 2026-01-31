import { useEffect, useRef } from "react";
import {
  Cpu,
  Network,
  Database,
  BarChart3,
  Zap,
  Shield,
  RefreshCw,
  Link2,
  GitBranch,
} from "lucide-react";

const systems = [
  // LEFT — DATA SOURCES
  {
    side: "left",
    position: "top",
    title: "Machines & PLCs",
    description: "Live production signals & counters",
    icon: <Cpu className="h-5 w-5 lg:h-6 lg:w-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    side: "left",
    position: "middle",
    title: "IoT Sensors",
    description: "Environmental & condition data",
    icon: <Network className="h-5 w-5 lg:h-6 lg:w-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    side: "left",
    position: "bottom",
    title: "ERP / MES Systems",
    description: "Enterprise & legacy integrations",
    icon: <Database className="h-5 w-5 lg:h-6 lg:w-6" />,
    color: "from-purple-500 to-pink-500",
  },

  // RIGHT — INTELLIGENCE OUTPUTS
  {
    side: "right",
    position: "top",
    title: "Predictive Insights",
    description: "AI-driven forecasts & trends",
    icon: <BarChart3 className="h-5 w-5 lg:h-6 lg:w-6" />,
    color: "from-orange-500 to-amber-500",
  },
  {
    side: "right",
    position: "middle",
    title: "Smart Alerts",
    description: "Real-time anomalies & events",
    icon: <Zap className="h-5 w-5 lg:h-6 lg:w-6" />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    side: "right",
    position: "bottom",
    title: "Decision Dashboards",
    description: "Unified KPIs & executive views",
    icon: <Shield className="h-5 w-5 lg:h-6 lg:w-6" />,
    color: "from-red-500 to-rose-500",
  },
];

export default function PlatformIntegration() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const leftX = canvas.width * 0.23;
      const rightX = canvas.width * 0.77;

      // Only animate connections on medium+ screens
      if (window.innerWidth >= 768) {
        systems.forEach((s, i) => {
          const startX = s.side === "left" ? leftX : rightX;
          const startY =
            s.position === "top"
              ? cy - 150
              : s.position === "middle"
                ? cy
                : cy + 150;

          const progress = (Math.sin(t + i) + 1) / 2;
          const x = startX + (cx - startX) * progress;
          const y = startY + (cy - startY) * progress;

          const gradient = ctx.createLinearGradient(startX, startY, cx, cy);
          gradient.addColorStop(0, "rgba(34,197,94,0)");
          gradient.addColorStop(0.6, "rgba(34,197,94,0.45)");
          gradient.addColorStop(1, "rgba(34,197,94,0.9)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(cx, cy);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#22c55e";
          ctx.fill();
        });
      }

      t += 0.02;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="mb-5">One Platform. One Source of Truth.</h2>
          <p className="text-gray-600">
            INTEGRA 360 connects machines, systems, and intelligence into a
            single industrial brain.
          </p>
        </div>

        {/* Visualization */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-6xl h-[350px] sm:h-[400px] md:h-[580px] lg:h-[600px]"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 hidden md:block"
          />

          {/* LEFT SIDE - Hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 space-y-16 lg:space-y-20">
            {systems
              .filter((s) => s.side === "left")
              .map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[10rem_auto] lg:grid-cols-[14rem_auto] gap-3 lg:gap-4 items-center"
                >
                  <div className="text-right">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {s.title}
                    </h4>
                    <p className="text-sm text-gray-600">{s.description}</p>
                  </div>
                  <div
                    className={`p-3 lg:p-4 rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg flex-shrink-0`}
                  >
                    {s.icon}
                  </div>
                </div>
              ))}
          </div>

          {/* CENTER - Desktop only, pixel perfect positioning */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-green-400 blur-3xl opacity-30 rounded-3xl animate-pulse" />

              {/* Main card */}
              <div className="relative bg-white border border-green-200 rounded-3xl shadow-2xl p-8 lg:p-10 w-[260px] lg:w-[280px] text-center">
                <img
                  src="logo.png"
                  alt="INTEGRA 360"
                  className="w-28 lg:w-32 mx-auto mb-4"
                />
                <p className="font-bold">
                  Industry <span className="text-green-600">INTEGRA</span> 360
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-center items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-green-600 animate-spin flex-shrink-0" />
                    <span>Real-time Processing</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Link2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Bi-directional Data Flow</span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <GitBranch className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Scalable Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 space-y-16 lg:space-y-20">
            {systems
              .filter((s) => s.side === "right")
              .map((s, i) => (
                <div key={i} className="flex items-center gap-3 lg:gap-4">
                  <div
                    className={`p-3 lg:p-4 rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg flex-shrink-0`}
                  >
                    {s.icon}
                  </div>
                  <div className="w-40 lg:w-48">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {s.title}
                    </h4>
                    <p className="text-sm text-gray-600">{s.description}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* MOBILE VIEW - Data Sources & Outputs only */}
          <div className="md:hidden absolute inset-0 flex flex-col justify-center items-center space-y-6">
            {/* Top row - Data Sources */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-sm px-4">
              {systems
                .filter((s) => s.side === "left")
                .map((s, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`p-2.5 sm:p-3 mx-auto mb-1.5 sm:mb-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg w-fit`}
                    >
                      {s.icon}
                    </div>
                    <h5 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5">
                      {s.title}
                    </h5>
                    <p className="text-[10px] sm:text-xs text-gray-600">
                      {s.description}
                    </p>
                  </div>
                ))}
            </div>

            {/* Bottom row - Outputs */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-sm px-4">
              {systems
                .filter((s) => s.side === "right")
                .map((s, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`p-2.5 sm:p-3 mx-auto mb-1.5 sm:mb-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg w-fit`}
                    >
                      {s.icon}
                    </div>
                    <h5 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5">
                      {s.title}
                    </h5>
                    <p className="text-[10px] sm:text-xs text-gray-600">
                      {s.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Mobile description */}
        <div className="md:hidden text-center mt-6">
          <p className="text-sm text-gray-600">
            All systems connect through INTEGRA 360 for unified intelligence
          </p>
        </div>
      </div>
    </section>
  );
}
