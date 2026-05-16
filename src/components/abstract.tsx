import {motion} from "framer-motion";
import type {ReactNode, CSSProperties} from "react";

// decorative elements

export function JaggedSlash({
    className = "",
    color = "var(--electric)",
    rotate = 0,
}: {
    className?: string;
    color?: string;
    rotate?: number;
}) {
    return (
        <svg
        viewBox="0 0 200 200"
        className={className}
        style={{transform: `rotate(${rotate}deg)`}}
        >
            <path
            d="M30 10 L160 30 L120 80 L180 100 L100 120 L150 180 L60 150 L40 190 L20 130 L0 90 L40 70 L10 40 Z"
            fill={color}>
            </path>
        </svg>
    )
}

export function StarBurst({
  className = "",
  color = "var(--electric)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path
        d="M50 0 L58 30 L88 12 L72 42 L100 50 L72 58 L88 88 L58 72 L50 100 L42 72 L12 88 L28 58 L0 50 L28 42 L12 12 L42 28 Z"
        fill={color}
      />
    </svg>
  );
}

export function InkSplatter({
  className = "",
  color = "var(--electric)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path
        d="M100 20 C140 10 170 30 180 70 C195 90 185 130 160 145 C170 175 140 195 110 180 C90 200 50 195 35 165 C10 160 0 125 20 100 C5 70 25 35 60 35 C75 15 90 15 100 20 Z"
        fill={color}
      />
    </svg>
  );
}

// layout

/** A jagged, P5-style content panel. */
export function JaggedPanel({
  children,
  className = "",
  variant = "ink",
  skew = -2,
  style,
}: {
  children: ReactNode;
  className?: string;
  variant?: "ink" | "electric" | "bone";
  skew?: number;
  style?: CSSProperties;
}) {
  const bg =
    variant === "electric"
      ? "bg-electric text-ink"
      : variant === "bone"
        ? "bg-bone text-ink"
        : "bg-card text-bone";
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `skewX(${skew}deg)`, ...style }}
    >
      <div className={`jagged-clip ${bg} relative overflow-hidden`}>
        <div style={{ transform: `skewX(${-skew}deg)` }} className="p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Slanted ribbon with rough edges */
export function Ribbon({
  children,
  className = "",
  color = "electric",
  skew = -8,
}: {
  children: ReactNode;
  className?: string;
  color?: "electric" | "bone" | "ink";
  skew?: number;
}) {
  const bg =
    color === "electric"
      ? "bg-electric text-ink"
      : color === "bone"
        ? "bg-bone text-ink"
        : "bg-ink text-bone";
  return (
    <div
      className={`inline-block ${className}`}
      style={{ transform: `skewX(${skew}deg)` }}
    >
      <div className={`${bg} ribbon-clip px-6 py-2`}>
        <div style={{ transform: `skewX(${-skew}deg)` }}>{children}</div>
      </div>
    </div>
  );
}

/** Big P5-style display heading: condensed bold italic */
export function SplashTitle({
  children,
  className = "",
  color = "bone",
}: {
  children: ReactNode;
  className?: string;
  color?: "bone" | "electric" | "ink";
}) {
  const c =
    color === "electric"
      ? "text-electric"
      : color === "ink"
        ? "text-ink"
        : "text-bone";
  return (
    <h2
      className={`font-display italic ${c} leading-[0.85] tracking-tight ${className}`}
      style={{ transform: "skewX(-8deg)" }}
    >
      {children}
    </h2>
  );
}

/** Diagonal stripe background (red/blue ribbons crossing) */
export function DiagonalStripes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <motion.div
        initial={{ x: "-110%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[20%] -left-20 right-0 h-24 gradient-electric opacity-30 ribbon-clip"
        style={{ transform: "rotate(-6deg)" }}
      />
      <motion.div
        initial={{ x: "110%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="absolute top-[60%] -right-20 left-0 h-16 bg-electric opacity-20 ribbon-clip-r"
        style={{ transform: "rotate(4deg)" }}
      />
    </div>
  );
}