//components/sections/MelivanTitle.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTICLE_COUNT = 18;

type Particle = {
  id: number;
  angle: number;
  distance: number;
};

function createParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
    const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
    const jitter = (Math.random() - 0.5) * 0.4; // un peu de hasard
    return {
      id: i,
      angle: angle + jitter,
      distance: 60 + Math.random() * 40, // rayon max de l’onde
    };
  });
}

export default function MelivanTitle() {
  const [waveId, setWaveId] = useState(0);
  const [particles] = useState<Particle[]>(createParticles);

  const handleHoverStart = () => {
    // On change l’ID pour que Framer rejoue l’animation
    setWaveId((prev) => prev + 1);
  };

  return (
    <div
      className="
        relative inline-flex items-center justify-center
        cursor-default
      "
      onMouseEnter={handleHoverStart}
    >
      {/* Conteneur pour les effets */}
      <div className="relative">
        {/* Onde de choc */}
        <AnimatePresence initial={false}>
          <motion.div
            key={waveId} // force le re-render à chaque hover
            initial={{ scale: 0.3, opacity: 0.4 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              pointer-events-none
              absolute inset-0
              rounded-full
              blur-2xl
              bg-slate-300/60
              -z-10
            "
          />
        </AnimatePresence>

        {/* Particules */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            -z-10
          "
        >
          {particles.map((p) => {
            const x = Math.cos(p.angle) * p.distance;
            const y = Math.sin(p.angle) * p.distance * 0.6; // un peu écrasé verticalement
            return (
              <motion.span
                key={p.id + "-" + waveId}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                animate={{ x, y, opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="
                  absolute left-1/2 top-1/2
                  h-1.5 w-1.5
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full
                  bg-slate-400/80
                "
              />
            );
          })}
        </div>

        {/* Texte principal */}
        <motion.h1
          className="
            relative z-10
            text-4xl sm:text-5xl md:text-6xl
            font-bold tracking-tight text-slate-900
          "
          whileHover={{
            letterSpacing: "0.04em",
            scale: 1.03,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          Melivan
        </motion.h1>
      </div>
    </div>
  );
}