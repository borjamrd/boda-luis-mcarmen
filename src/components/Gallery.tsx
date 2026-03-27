"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialPhotos = [
  "/pareja1.jpeg",
  "/pareja2.jpeg",
  // "/pareja3.jpeg",
  "/pareja4.jpeg",
  "/pareja5.jpeg",
  "/pareja6.jpeg",
];

export function Gallery() {
  const [displayPhotos, setDisplayPhotos] = useState(initialPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Auto-shuffle every 5 seconds
  useEffect(() => {
    // We only shuffle if the user is not currently viewing an image
    if (selectedPhoto !== null) return;

    const interval = setInterval(() => {
      setDisplayPhotos((prev) => {
        const newArray = [...prev];
        // Fisher-Yates shuffle
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedPhoto]);

  const closeLightbox = useCallback(() => setSelectedPhoto(null), []);

  const showNext = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = displayPhotos.indexOf(selectedPhoto);
    const nextIndex = (currentIndex + 1) % displayPhotos.length;
    setSelectedPhoto(displayPhotos[nextIndex]);
  }, [selectedPhoto, displayPhotos]);

  const showPrev = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = displayPhotos.indexOf(selectedPhoto);
    const prevIndex =
      (currentIndex - 1 + displayPhotos.length) % displayPhotos.length;
    setSelectedPhoto(displayPhotos[prevIndex]);
  }, [selectedPhoto, displayPhotos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedPhoto, closeLightbox, showNext, showPrev]);

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
          {displayPhotos.map((photo, index) => (
            <motion.div
              layout
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              key={photo}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative rounded-xl overflow-hidden group shadow-sm border border-wedding-gold/10 cursor-pointer ${
                index === 0
                  ? "col-span-2 md:col-span-2 row-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <Image
                src={photo}
                alt={`Nuestra foto`}
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
        {selectedPhoto && (
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
                  key={selectedPhoto}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={selectedPhoto}
                    alt={`Foto ampliada`}
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
