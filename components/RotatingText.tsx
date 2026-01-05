"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
}

export default function RotatingText({
  texts,
  rotationInterval = 3000,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span className="inline-flex h-[1.6em] relative overflow-hidden align-top w-full md:w-auto">
      {/* 1. ANIMASI TEXT (Absolute Position) */}
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 whitespace-nowrap font-semibold text-white/90"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
      
      {/* 2. SPACER/LAYOUT (Static & Invisible) */}
      <span className="invisible whitespace-nowrap font-semibold" aria-hidden="true">
        {texts[index]}
      </span>
    </span>
  );
}