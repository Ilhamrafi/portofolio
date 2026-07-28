"use client";

import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Show button ketika scroll lebih dari 400px
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.2 }}
      className="fixed z-30 p-3 bg-brand text-black rounded-full hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-black shadow-lg hover:shadow-xl sm:bottom-8 sm:right-8 bottom-24 right-4"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
