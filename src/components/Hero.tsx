"use client";

import { motion } from "framer-motion";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2600&auto=format&fit=crop')", // Wedding flowers/couple
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-white text-lg md:text-xl uppercase tracking-[0.2em] mb-4 font-light">
            ¡Nos Casamos!
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 font-medium"
        >
          Luis & <br className="md:hidden" /> Mª Carmen
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-white font-serif italic">
            20 de Noviembre de 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
