// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import DesignGallerySection from "@/components/sections/DesignGallerySection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FaqSection";
import FinalCTASection from "@/components/sections/FinalCallSection";
import RevealSection from "@/components/layout/RevealSection";
import Header from "@/components/layout/Header";
import BottomNameSection from "@/components/sections/BottomNameSection";

export default function Page() {
  return (
  
  <div className="page-root relative">

    {/* Header flottant qui apparaît au scroll */}
    <Header />

    {/* Contenu principal */}
    <main
      className="
        relative z-10
        max-w-5xl mx-auto
        px-6 sm:px-8 lg:px-10
        pt-24
        space-y-8 sm:space-y-20
      "
    >

      <RevealSection id="hero">
        <HeroSection />
      </RevealSection>

      <RevealSection id="gallery">
        <DesignGallerySection />
      </RevealSection>

      <RevealSection id="pricing">
        <PricingSection />
      </RevealSection>

      <RevealSection id="faq">
        <FAQSection />
      </RevealSection>

      <RevealSection id="contact">
        <FinalCTASection />
      </RevealSection>

    </main>

    <BottomNameSection />

  </div>
  );
}