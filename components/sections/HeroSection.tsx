//components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";

const NAME = "Melivan";
const letters = NAME.split("");

// Variants pour le conteneur du nom (gère le stagger des lettres)
const containerVariants = {
  rest: {
    transition: {
      staggerChildren: 0,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

// Variants pour chaque lettre (utilise `custom` pour index)
const letterVariants = {
  rest: {
    y: 0,
    scale: 1,
    rotate: 0,
    color: "#020617", // slate-900
    textShadow: "0 0 0 rgba(148,163,184,0)", // pas de glow
  },
  hover: (i: number) => ({
    y: -6,
    scale: 1.08,
    rotate: (i - letters.length / 2) * 1.5, // léger éventail
    color: "#020617",
    textShadow: "0 0 18px rgba(148,163,184,0.9)", // glow gris bleuté
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  }),
};

// Onde de choc lumineuse derrière le texte
const glowVariants = {
  rest: {
    opacity: 0,
    scale: 0.8,
  },
  hover: {
    opacity: [0, 0.4, 0],
    scale: [0.9, 1.7, 2],
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="
        min-h-[70vh]
        flex items-center justify-center
      "
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Pretitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-slate-500 mb-4"
        >
          Motion design & creative direction
        </motion.p>

        {/* Titre avec animation au hover */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative inline-block cursor-default"
          >
            {/* Onde de choc / halo derrière le nom */}
            <motion.span
              variants={glowVariants}
              className="
                absolute inset-0
                -z-10
                rounded-full
                bg-radial from-slate-300/70 via-slate-200/0 to-transparent
                blur-3xl
              "
              style={{
                background:
                  "radial-gradient(circle at center, rgba(148,163,184,0.7), transparent 60%)",
              }}
            />

            {/* Lettres du nom */}
            <motion.span
              variants={containerVariants}
              className="
                relative inline-flex gap-1 sm:gap-1.5
                px-4 py-2
                rounded-full
              "
            >
              {letters.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={letterVariants}
                  custom={index}
                  className="
                    inline-block
                    text-4xl sm:text-5xl md:text-6xl
                    font-semibold tracking-tight
                  "
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>

          <span className="block mt-3 text-slate-500 text-lg sm:text-xl">
            Motion designer for bold, cinematic brands.
          </span>
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="
            text-sm sm:text-base text-slate-600
            leading-relaxed max-w-xl mx-auto mb-8
          "
        >
          I craft animated visuals, title sequences and product stories
          that feel sharp, modern and memorable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#gallery"
            className="
              inline-flex items-center justify-center
              rounded-full bg-slate-900 text-white
              px-5 sm:px-6 py-2.5
              text-sm font-medium
              hover:bg-slate-800 transition
            "
          >
            View work
          </a>
          <a
            href="#book-call"
            className="
              inline-flex items-center justify-center
              rounded-full border border-slate-300
              px-5 sm:px-6 py-2.5
              text-sm font-medium text-slate-800
              hover:bg-slate-100 transition
            "
          >
            Book a call
          </a>
        </motion.div>
      </div>
    </section>
  );
}