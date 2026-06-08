"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Particles() {
  const particles = [
  { x: 100, y: 100, duration: 4 },
  { x: 300, y: 200, duration: 5 },
  { x: 500, y: 150, duration: 6 },
  { x: 700, y: 300, duration: 4 },
];

  return (
    <>
     {particles.map((particle, i) => (
  <motion.div
    key={i}
    className="absolute h-2 w-2 rounded-full bg-white/30"
    initial={{ x: particle.x, y: particle.y }}
    animate={{ y: [particle.y, particle.y - 50, particle.y] }}
    transition={{
      duration: particle.duration,
      repeat: Infinity,
    }}
  />
))}
    </>
  );
}