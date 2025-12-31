"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
}

export default function RotatingText({
  texts,
  rotationInterval = 3000, // Ganti tiap 3 detik
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span className="inline-flex h-[1.2em] relative overflow-hidden align-top w-full md:w-auto">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: "100%", opacity: 0 }}   // Masuk dari bawah
          animate={{ y: "0%", opacity: 1 }}     // Posisi normal
          exit={{ y: "-100%", opacity: 0 }}     // Keluar ke atas
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 whitespace-nowrap font-semibold text-white/90"
        >
          {texts[index]}
        </motion.span>
        {/* Spacer invisible untuk menjaga lebar container agar tidak 'jumping' layoutnya */}
        <span className="invisible">{texts[index]}</span>
      </AnimatePresence>
    </span>
  );
}