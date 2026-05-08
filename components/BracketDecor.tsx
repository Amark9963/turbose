"use client";

import { motion } from "framer-motion";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface BracketDecorProps {
  corner: Corner;
  inView: boolean;
  size?: number;
  delay?: number;
  opacity?: number;
  color?: string;
}

const paths: Record<Corner, string> = {
  "top-left":     "M80 1.5 L1.5 1.5 L1.5 80",
  "top-right":    "M0 1.5 L78.5 1.5 L78.5 80",
  "bottom-left":  "M80 78.5 L1.5 78.5 L1.5 0",
  "bottom-right": "M0 78.5 L78.5 78.5 L78.5 0",
};

const positions: Record<Corner, string> = {
  "top-left":     "top-6 left-6",
  "top-right":    "top-6 right-6",
  "bottom-left":  "bottom-6 left-6",
  "bottom-right": "bottom-6 right-6",
};

export default function BracketDecor({
  corner,
  inView,
  size = 64,
  delay = 0.3,
  opacity = 0.18,
  color = "#0D9488",
}: BracketDecorProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={`absolute ${positions[corner]} pointer-events-none`}
      style={{ opacity }}
      aria-hidden
    >
      <motion.path
        d={paths[corner]}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}