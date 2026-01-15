//components/sections/PricingSection.tsx
"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    id: 1,
    label: "Essentials",
    title: "Snappy launch pieces",
    price: "Starting from €800",
    description: "Short edits and loops to give your product a first motion presence.",
    bullets: [
      "15–30s social or product loops",
      "Basic sound sync & transitions",
      "1 main concept, 1 revision round",
    ],
    highlight: false,
  },
  {
    id: 2,
    label: "Core",
    title: "Signature product story",
    price: "Starting from €1,600",
    description:
      "A full narrative piece to explain your product or feature with a clear visual language.",
    bullets: [
      "30–60s main video",
      "Storyboarding & styleframes",
      "Advanced motion & typography",
    ],
    highlight: true,
  },
  {
    id: 3,
    label: "Partner",
    title: "Ongoing motion support",
    price: "Starting from €2,800 /mo",
    description:
      "A flexible retainer for teams who need recurring motion assets throughout the year.",
    bullets: [
      "Monthly batch of motion assets",
      "Prioritized requests & iterations",
      "Consistent visual system over time",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-3 mb-10 text-center"
      >
        <p className="text-xs font-medium tracking-[0.22em] uppercase text-slate-500">
          Pricing
        </p>
        <h2
          id="pricing-title"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          Three ways to work together.
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan, index) => (
          <motion.article
            key={plan.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: index * 0.06,
            }}
            className={`
              group relative flex flex-col
              rounded-3xl border
              px-5 py-6 md:px-6 md:py-7
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-2xl
              ${
                plan.highlight
                  ? "border-slate-900 bg-white"
                  : "border-slate-200/80 bg-white/70"
              }
            `}
          >
            {/* Halo */}
            <div
              className="
                pointer-events-none absolute inset-0 opacity-0
                group-hover:opacity-100 transition-opacity duration-400
                pricing-smoke-hover
              "
            />

            {/* Content */}
            <div className="relative flex-1 flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500">
                  {plan.label}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {plan.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">{plan.description}</p>
              </div>

              <p className="text-base sm:text-lg font-semibold text-slate-900 mt-1">
                {plan.price}
              </p>

              <ul className="mt-3 space-y-2">
                {plan.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="relative mt-5 flex flex-col items-center">
              <a
                href="#book-call"
                className={`
                  inline-flex items-center justify-center gap-2
                  rounded-full px-4 py-2
                  text-xs sm:text-sm font-medium
                  transition
                  ${
                    plan.highlight
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }
                `}
              >
                <span>Book a call</span>
                <span className="text-[11px]" aria-hidden>
                  ⚡
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}