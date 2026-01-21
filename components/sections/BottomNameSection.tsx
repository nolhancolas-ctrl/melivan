// components/sections/BottomNameSection.tsx
"use client";
import { motion } from "framer-motion";

export default function BottomNameSection() {
  return (
    <section
      aria-hidden
      className="
        relative
        h-[40vh]           /* Toujours 40% de la hauteur de l'écran */
        flex items-end     /* Texte plaqué en bas de la section */
      "
    >
      <div
        className="
          w-full max-w-5xl mx-auto
          px-6 sm:px-8 lg:px-10  /* même padding latéral que le reste du site */
        "
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            w-full
            text-center
            font-semibold uppercase
            leading-none
            mb-0                    /* 👈 supprime le margin-bottom défaut du <p> */
            /* énorme taille, environ 2x plus grande qu'avant */
            text-[clamp(10rem,25vh,20rem)]
            /* lettres très collées */
            tracking-[-0.08em]
            /* dégradé d'opacité 10% -> 70% (bas -> haut) */
            text-transparent
            bg-gradient-to-t from-white/0 to-white/90
            bg-clip-text
            /* léger effet 3D / ombre */
            drop-shadow-[0_18px_40px_rgba(15,23,42,0.7)]
            origin-bottom
            scale-y-150
            mb-0
          "
        >
          MELIVAN
        </motion.p>
      </div>
    </section>
  );
}