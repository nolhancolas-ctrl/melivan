"use client";

import { motion } from "framer-motion";

type LogoMarkProps = {
  size?: number;
};

export default function LogoMark({ size = 40 }: LogoMarkProps) {
  return (
    <motion.div
      className="
        inline-flex items-center justify-center
        rounded-full
        shadow-[0_10px_30px_rgba(15,23,42,0.35)]
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        border border-slate-700/80
      "
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span
        className="
          text-xs font-semibold tracking-[0.25em]
          text-slate-100 uppercase
        "
      >
        M
      </span>
    </motion.div>
  );
}