import {motion} from "framer-motion";
import type {ReactNode, CSSProperties} from "react";

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