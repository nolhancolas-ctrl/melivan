"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const NAME = "Melivan";
const letters = NAME.split("");

// Stagger des lettres
const containerVariants = {
  rest: {
    transition: { staggerChildren: 0 },
  },
  hover: {
    transition: { staggerChildren: 0.04 },
  },
};

// Animation de chaque lettre (onde + glow)
const letterVariants = {
  rest: {
    y: 0,
    scale: 1,
    rotate: 0,
    color: "#020617",
    textShadow: "0 0 0 rgba(148,163,184,0)",
  },
  hover: (i: number) => {
    const center = (letters.length - 1) / 2;
    const distance = Math.abs(i - center);

    return {
      y: -10 - distance * 2, // plus haut vers le centre
      scale: 1.05 + distance * 0.02,
      rotate: (i - center) * 2.2,
      color: "#020617",
      textShadow: "0 0 24px rgba(148,163,184,0.95)",
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 18,
      },
    };
  },
};

const WAVE_COUNT = 5;

export default function MelivanTitle() {
  const [waveId, setWaveId] = useState(0);

  const triggerWave = () => {
    setWaveId((prev) => prev + 1); // force un nouveau cycle d’onde à chaque hover
  };

  return (
    <motion.div
      className="relative inline-block cursor-default"
      initial="rest"
      animate="rest"
      whileHover="hover"
      onMouseEnter={triggerWave}
    >
      {/* Ondes de choc imposantes derrière le texte */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
{Array.from({ length: WAVE_COUNT }).map((_, i) => (
  <motion.span
    key={`${waveId}-${i}`}
    initial={{ scale: 0.4, opacity: 0.9 }}
    animate={{ scale: 2 + i * 0.45, opacity: 0 }}
    transition={{
      duration: 1.4 + i * 0.35,
      ease: "easeOut",
    }}
    className="absolute rounded-full blur-xl"
    style={{
      width: 280,
      height: 280,
      background:
        "radial-gradient(circle, rgba(148,163,184,1), rgba(148,163,184,0.15) 55%, transparent 80%)",
      boxShadow: "0 0 40px rgba(148,163,184,0.9)",
    }}
  />
))}
      </div>

      {/* Lettres "Melivan" animées en vague */}
      <motion.span
        variants={containerVariants}
        className="relative inline-flex gap-1 sm:gap-1.5 px-4 py-2"
      >
        {letters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letterVariants}
            custom={index}
            className="
              inline-block
              text-4xl sm:text-5xl md:text-6xl
              font-semibold tracking-tight text-slate-900
            "
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
}