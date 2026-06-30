"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated PPA flow: Roof -> Solar generation -> Fixed-price supply -> Your saving.
 * Built as a single responsive SVG with animated "energy" dashes along the path.
 * Stacks vertically on mobile via the SVG viewBox + foreignObject-free layout:
 * we render two layouts (a stacked one for small screens, the flow for >= md).
 */

const NODES = [
  { key: "roof", title: "Your roof", sub: "Unused space, working" },
  { key: "gen", title: "Solar generation", sub: "Vega-owned PV array" },
  { key: "supply", title: "Fixed-price supply", sub: "Below grid, locked" },
  { key: "save", title: "Your saving", sub: "Banked every year" },
];

function NodeCard({
  index,
  title,
  sub,
  accent,
}: {
  index: number;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border p-4 ${
        accent
          ? "border-signal/60 bg-signal/10"
          : "border-slate-line bg-ink-800"
      }`}
    >
      <span
        className={`slat absolute -top-2 left-4 block h-3 w-2.5 ${
          accent ? "bg-signal" : "bg-silver/50"
        }`}
      />
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-silver-soft">
        Step {index + 1}
      </p>
      <p className="mt-1.5 text-base font-semibold text-paper">{title}</p>
      <p className="mt-0.5 text-sm text-silver">{sub}</p>
    </div>
  );
}

export function PpaFlowDiagram() {
  const reduce = useReducedMotion();

  return (
    <div className="rounded-2xl border border-slate-line bg-ink-700/40 p-5 sm:p-7">
      {/* Flow line (horizontal on lg, hidden on small) */}
      <div className="relative hidden lg:block">
        <svg viewBox="0 0 1000 60" className="w-full" preserveAspectRatio="none">
          <line
            x1="40" y1="30" x2="960" y2="30"
            stroke="#222C45" strokeWidth="2"
          />
          <motion.line
            x1="40" y1="30" x2="960" y2="30"
            stroke="#3D6EF5" strokeWidth="2"
            strokeDasharray="10 14"
            className={reduce ? "" : "animate-flow"}
            initial={false}
          />
          {[40, 347, 653, 960].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="30" r="9" fill="#0B0F1A" stroke="#222C45" strokeWidth="2" />
              <circle
                cx={x} cy="30" r="4"
                fill={i === 3 ? "#3D6EF5" : "#AEB6C4"}
                className={reduce ? "" : "animate-pulseDot"}
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            </g>
          ))}
        </svg>
        <div className="mt-5 grid grid-cols-4 gap-4">
          {NODES.map((n, i) => (
            <NodeCard key={n.key} index={i} title={n.title} sub={n.sub} accent={i === 3} />
          ))}
        </div>
      </div>

      {/* Vertical flow for small screens */}
      <div className="space-y-3 lg:hidden">
        {NODES.map((n, i) => (
          <div key={n.key} className="relative">
            <NodeCard index={i} title={n.title} sub={n.sub} accent={i === 3} />
            {i < NODES.length - 1 && (
              <div className="ml-6 flex h-6 items-center">
                <span className="block h-full w-px bg-slate-line" />
                <span
                  className={`-ml-1 block h-2 w-2 rounded-full ${reduce ? "" : "animate-pulseDot"} bg-signal`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
