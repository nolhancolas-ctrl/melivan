//components/sections/DesignGalleryClient.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper/modules";

export type DesignImage = {
  src: string;
  alt: string;
};

type DesignGalleryClientProps = {
  images: DesignImage[];
};

export default function DesignGalleryClient({ images }: DesignGalleryClientProps) {
  const [activeImage, setActiveImage] = useState<DesignImage | null>(null);

  const t = {
    kicker: "Design gallery",
    title: "Selected design explorations",
    close: "Close",
  };

  // index de l'image active
  const currentIndex = activeImage
    ? images.findIndex((img) => img.src === activeImage.src)
    : -1;

  const handlePrev = (e?: any) => {
    if (e) e.stopPropagation();
    if (!images.length || currentIndex === -1) return;
    const idx = (currentIndex - 1 + images.length) % images.length;
    setActiveImage(images[idx]);
  };

  const handleNext = (e?: any) => {
    if (e) e.stopPropagation();
    if (!images.length || currentIndex === -1) return;
    const idx = (currentIndex + 1) % images.length;
    setActiveImage(images[idx]);
  };

  // Fermeture / navigation au clavier (Esc, ←, →)
  useEffect(() => {
    if (!activeImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage, currentIndex, images.length]);

  return (
    <section aria-labelledby="design-title" className="relative mt-16">
      {/* Header */}
      <div className="space-y-4 text-center mb-10">
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          {t.kicker}
        </p>
        <h2
          id="design-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          {t.title}
        </h2>
      </div>

      {/* Carousel coverflow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          className="w-full max-w-6xl" // un peu plus large
          whileHover={{ scale: 0.95, y: 8 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {/* Mask pour fade d’opacité aux bords */}
          <div className="style-carousel-mask">
            <Swiper
              modules={[EffectCoverflow, Mousewheel, Autoplay]}
              effect="coverflow"
              centeredSlides
              loop
              grabCursor
              mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
              autoplay={{
                delay: 2600,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1.3, spaceBetween: 0 },
                640: { slidesPerView: 2.3, spaceBetween: 0 },
                1024: { slidesPerView: 3.5, spaceBetween: 0 },
                1280: { slidesPerView: 5, spaceBetween: 0 }, // 👈 5 visibles sur grands écrans
              }}
              className="style-coverflow-swiper"
            >
              {images.map((img) => (
                <SwiperSlide key={img.src}>
                  <div className="flex items-stretch justify-center py-6">
                    <button
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className="
                        relative
                        w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px]
                        rounded-3xl overflow-hidden
                        border border-white/40
                        bg-slate-900
                        flex cursor-zoom-in
                        focus:outline-none focus:ring-2 focus:ring-white/60
                        focus:ring-offset-2 focus:ring-offset-slate-900
                      "
                    >
                      {/* Wrapper 16:9 */}
                      <div
                        className="relative w-full group"
                        style={{ aspectRatio: "3 / 4" }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw"
                        />
                        {/* overlay subtil */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                      </div>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox plein écran */}
      {activeImage && (
        <div
          className="
            fixed inset-0 z-[60]
            bg-slate-900/40 backdrop-blur-[2px]
            flex items-center justify-center
            px-4
          "
          onClick={() => setActiveImage(null)} // fond cliquable
        >
          <div
            className="
              relative max-w-4xl w-full max-h-[90vh]
              rounded-[28px] overflow-hidden
              shadow-2xl
            "
          >
            {/* Bouton de fermeture */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(null);
              }}
              className="
                absolute top-3 right-3 z-20
                inline-flex items-center justify-center
                h-8 w-8 rounded-full
                bg-black/70 text-white
                border border-white/30
                text-xs font-medium
                hover:bg-black/90 transition
              "
              aria-label={t.close}
            >
              ✕
            </button>

            {/* Flèche gauche */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="
                  absolute left-3 top-1/2 -translate-y-1/2 z-20
                  inline-flex items-center justify-center
                  h-9 w-9 rounded-full
                  bg-black/60 text-white
                  border border-white/30
                  text-lg
                  hover:bg-black/80 transition
                "
              >
                ‹
              </button>
            )}

            {/* Flèche droite */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2 z-20
                  inline-flex items-center justify-center
                  h-9 w-9 rounded-full
                  bg-black/60 text-white
                  border border-white/30
                  text-lg
                  hover:bg-black/80 transition
                "
              >
                ›
              </button>
            )}

            {/* Image en grand */}
            <div
              className="relative w-full h-[70vh] sm:h-[80vh] bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}