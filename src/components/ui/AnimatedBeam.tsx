import React from "react";

interface AnimatedBeamProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  fromX,
  fromY,
  toX,
  toY,
}) => {
  const path = `M ${fromX} ${fromY} L ${toX} ${toY}`;

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
    >
      {/* Glow path */}
      <path
        d={path}
        stroke="url(#beamGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="6 10"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="100"
          to="0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      <defs>
        <linearGradient id="beamGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
};
