// app/layout.tsx
import "swiper/css";
import "swiper/css/effect-coverflow";
import type { Metadata } from "next";
import "./globals.css";
import GradientBackground from "@/components/layout/GradientBackground";

export const metadata: Metadata = {
  title: "Melivan – Motion designer",
  description: "Portfolio of Melivan, motion designer for brands and products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-transparent text-slate-900">
        {/* Fond dégradé animé (en arrière-plan) */}
        <GradientBackground />
        {/* Contenu du site au-dessus */}
        {children}
      </body>
    </html>
  );
}