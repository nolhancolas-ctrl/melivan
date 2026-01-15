// components/layout/GradientBackground.tsx
"use client";

export default function GradientBackground() {
  return (
    <div
      aria-hidden
      className="
        fixed inset-0 -z-50 overflow-hidden
        bg-[radial-gradient(circle_at_center,rgb(189, 198, 210),rgb(133, 150, 184))]
      "
    >
      {/* BLOBS GRIS PILOTÉS PAR CSS VARS */}
      <div className="blob blob-1 mix-blend-screen" />
      <div className="blob blob-2 mix-blend-screen" />
      <div className="blob blob-3 mix-blend-screen" />
    </div>
  );
}