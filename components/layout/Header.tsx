//components/layout/Header.tsx
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  // Hero en vue au début → header caché
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const visible = !isHeroInView;

  return (
    <header
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-40
        transition-all duration-500
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }
      `}
    >
      <div
        className="
          flex items-center justify-between gap-6
          rounded-full border border-slate-200/80
          bg-white/80 backdrop-blur-xl
          shadow-lg
          px-4 sm:px-5 py-2
          max-w-md
        "
      >
        {/* Logo / marque */}
        <a
          href="#hero"
          className="
            text-sm sm:text-base font-semibold tracking-tight
            text-slate-900
            hover:opacity-80 transition
          "
        >
          Melivan
        </a>

        {/* CTA Book a call */}
        <a
          href="#book-call"
          className="
            inline-flex items-center gap-2
            rounded-full bg-slate-900 text-white
            text-xs sm:text-sm font-medium
            px-3 sm:px-4 py-1.5
            whitespace-nowrap
            hover:bg-slate-800 transition
          "
        >
          <span>Book a call</span>
          <span className="text-[11px]" aria-hidden>
            ↗
          </span>
        </a>
      </div>
    </header>
  );
}