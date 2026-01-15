//components/sections/FaqSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "What kind of motion work do you usually do?",
    answer:
      "I mostly work on product explainers, UI motion, launch films and short social pieces. If your project has a visual story to tell, we can probably shape it into a motion format.",
  },
  {
    id: 2,
    question: "How do we get started?",
    answer:
      "We start with a short call to understand your goals, audience and timelines. From there, I usually send a simple proposal with scope, budget and a rough schedule.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer:
      "For small loops, it can be a few days. For a full 30–60s product story, expect around 2–4 weeks depending on complexity, approvals and feedback speed.",
  },
  {
    id: 4,
    question: "Can you adapt to our existing brand guidelines?",
    answer:
      "Yes. I can work inside your existing visual system, or help extend it with motion rules, transitions and behaviors that feel consistent with your brand.",
  },
  {
    id: 5,
    question: "Do you also handle sound design?",
    answer:
      "For most projects I handle basic sound design and sync. For more complex soundscapes, I can collaborate with a dedicated sound designer.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" aria-labelledby="faq-title" className="mt-20">
      {/* Header */}
      <div className="space-y-3 mb-8 text-center">
        <p className="text-xs font-medium tracking-[0.22em] uppercase text-slate-500">
          FAQ
        </p>
        <h2
          id="faq-title"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          A few practical questions.
        </h2>
      </div>

      {/* Liste FAQ */}
      <div className="space-y-3">
        {FAQS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="
                rounded-2xl border border-slate-200/80 bg-white/80
                shadow-sm
                overflow-hidden
              "
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="
                  w-full flex items-center justify-between gap-4
                  px-4 sm:px-5 py-3 sm:py-4
                  text-left
                "
              >
                <span className="text-sm sm:text-base font-medium text-slate-900">
                  {item.question}
                </span>
                <span
                  className={`
                    flex h-6 w-6 items-center justify-center
                    rounded-full border border-slate-300
                    text-[11px] text-slate-700
                    transition-transform duration-200
                    ${isOpen ? "rotate-45" : ""}
                  `}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}