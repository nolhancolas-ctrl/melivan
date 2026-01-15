"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function RevealSection({
  id,
  children,
  className = "",
}: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}