// components/sections/FinalCallSection.tsx
"use client";
import { motion } from "framer-motion";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export default function FinalCallSection() {
  return (
    <section
      id="book-call"
      aria-labelledby="final-call-title"
      className="mt-24 mb-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          relative overflow-hidden
          rounded-3xl border border-slate-200/80
          bg-white/80 backdrop-blur-sm
          shadow-lg
          px-6 sm:px-8 md:px-10
          py-8 sm:py-10
          text-center
        "
      >
        {/* léger halo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,255,0.2),transparent_55%),radial-gradient(circle_at_bottom,rgba(248,250,252,0.9),transparent_55%)]" />

        <div className="relative space-y-4 max-w-xl mx-auto">
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-slate-500">
            Next step
          </p>
          <h2
            id="final-call-title"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900"
          >
            Have a project in mind?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Send a few lines about your product, timeline and what you&apos;d like to
            create. We&apos;ll figure out the right format and scope together.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href="mailto:hello@melivan.dev?subject=Project%20inquiry%20from%20website"
              className="
                inline-flex items-center justify-center gap-2
                rounded-full bg-slate-900 text-white
                px-6 sm:px-7 py-3
                text-sm font-medium
                hover:bg-slate-800 transition
              "
            >
              <span>Book a call</span>
              <PhoneIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}