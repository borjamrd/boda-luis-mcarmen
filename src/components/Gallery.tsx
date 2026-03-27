"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  "/pareja1.jpeg",
  "/pareja2.jpeg",
  "/pareja3.jpeg",
  "/pareja4.jpeg",
  "/pareja5.jpeg",
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  const showNext = useCallback(() => {
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % photos.length : null,
    );
  }, []);

  const showPrev = useCallback(() => {
    setSelectedImage((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null,
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-wedding-gold mb-4">
            Nosotros
          </h2>
          <p className="opacity-80 max-w-xl mx-auto">
            Algunos de nuestros momentos favoritos juntos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] max-w-5xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              layoutId={`gallery-image-${index}`}
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative rounded-xl overflow-hidden group shadow-sm border border-wedding-gold/10 cursor-pointer ${
                index === 0
                  ? "col-span-2 md:col-span-2 row-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <Image
                src={photo}
                alt={`Nuestra foto ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 md:left-6 z-50 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Anterior"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 md:right-6 z-50 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Siguiente"
            >
              <ChevronRight size={40} />
            </button>

            <div
              className="relative w-full h-full max-w-6xl max-h-[85vh] m-4 md:m-12 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={photos[selectedImage]}
                    alt={`Foto ampliada ${selectedImage + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
