"use client";

import { useEffect, useState } from "react";

// 원형 게이지 — 마운트 시 0 → value로 차오르는 애니메이션 (받는 재미)
export default function Gauge({
  value,
  size = 180,
  stroke = 14,
  label,
  sub,
  centerTop,
}: {
  value: number; // 0~100
  size?: number;
  stroke?: number;
  label?: string;
  sub?: string;
  centerTop?: string;
}) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setV(Math.max(0, Math.min(100, value))), 120);
    return () => clearTimeout(t);
  }, [value]);

  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (v / 100) * c;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="gauge-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2dd4a7" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#gauge-g)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute text-center">
        {centerTop && <div className="text-[11px] text-sub">{centerTop}</div>}
        <div className="text-3xl font-extrabold grad tabular-nums">{Math.round(v)}%</div>
        {label && <div className="mt-0.5 text-xs font-semibold">{label}</div>}
        {sub && <div className="text-[10px] text-sub">{sub}</div>}
      </div>
    </div>
  );
}

// 가로 진행 바 — 차오르는 애니메이션
export function ProgressBar({ value, height = 10 }: { value: number; height?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setV(Math.max(0, Math.min(100, value))), 120);
    return () => clearTimeout(t);
  }, [value]);
  return (
    <div className="w-full overflow-hidden rounded-full bg-line" style={{ height }}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8]"
        style={{ width: `${v}%`, transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)" }}
      />
    </div>
  );
}
