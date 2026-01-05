"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Listener scroll yang efisien dengan Framer Motion
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const menuItems = [
    { name: 'Resume', href: '/resume' },
    { name: 'Showcase', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Me', href: '#contact', isButton: true },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-0 md:pt-4 pointer-events-none">
      <motion.nav
        layout
        variants={{
          top: {
            width: "100%",
            maxWidth: "100%", 
            y: 0,
            borderRadius: "0px",
            backgroundColor: "rgba(0, 0, 0, 0)", 
            borderBottom: "1px solid rgba(255, 255, 255, 0)",
            padding: "1.5rem 3rem" // Padding besar saat di atas
          },
          scroll: {
            width: "95%",         // Lebar 95% layar
            maxWidth: "1200px",   // Maksimal 1200px (agar tetap panjang & lega)
            y: 10,                // Turun sedikit (floating)
            borderRadius: "24px", // Sudut membulat modern
            backgroundColor: "rgba(10, 10, 10, 0.8)", // Efek kaca gelap
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)", 
            padding: "0.75rem 1.5rem" // Padding mengecil
          }
        }}
        initial="top"
        animate={isScrolled ? "scroll" : "top"}
        // Animasi Spring: 'stiffness' tinggi = responsif, 'damping' rendah = membal
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 1
        }}
        className="pointer-events-auto flex items-center justify-between backdrop-blur-xl"
        style={{ overflow: "hidden" }}
      >
        
        {/* === BAGIAN KIRI: FOTO & LOGO === */}
        <motion.div layout className="flex items-center gap-3 shrink-0">
            <Link href="/" className="group flex items-center gap-3">
                {/* Foto Profile: Mengecil saat scroll */}
                <motion.div 
                  layout
                  className="relative overflow-hidden rounded-full border border-white/10 group-hover:border-white/30 transition-colors"
                  animate={{ 
                    width: isScrolled ? 32 : 48, 
                    height: isScrolled ? 32 : 48 
                  }}
                >
                    <Image
                      src="/assets/Ilhamrafi.png"
                      alt="Ilham Rafiedhia"
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </motion.div>

                {/* Teks Logo */}
                <motion.div layout className="flex flex-col justify-center">
                    <motion.h1 
                        layout
                        className="font-sans font-medium text-white tracking-tight leading-none"
                        animate={{ fontSize: isScrolled ? "1rem" : "1.25rem" }}
                    >
                        Ilhamrafi<span className="text-[#F1FFB2]">.</span>
                    </motion.h1>
                </motion.div>
            </Link>
        </motion.div>

        {/* === BAGIAN KANAN: MENU ITEMS === */}
        <motion.div layout className="hidden md:flex items-center gap-8">
           {menuItems.map((item) => {
             
             // --- LOGIKA TOMBOL 'CONTACT ME' (GLOSSY EFFECT) ---
              if (item.isButton) {
               return (
                 <Link 
                   key={item.name} 
                   href={item.href}
                   className="relative group"
                 >
                    <motion.div
                        layout
                        className={`
                            relative overflow-hidden 
                            bg-[#1a1a1a] /* Background Gelap */
                            text-white   /* Teks Putih */
                            border border-white/10 /* Border tipis halus */
                            font-medium rounded-full flex items-center justify-center
                            
                            /* Hover States: Border jadi lebih terang & Background sedikit abu */
                            group-hover:border-white/30 
                            group-hover:bg-[#222]
                            
                            shadow-[0_0_10px_rgba(0,0,0,0.5)]
                            transition-all duration-300
                        `}
                        animate={{
                            padding: isScrolled ? "0.5rem 1.25rem" : "0.6rem 1.5rem",
                            fontSize: isScrolled ? "0.75rem" : "0.875rem"
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Shimmer / Glossy Animation Layer 
                            Kita gunakan kilatan putih transparan (via-white/10) 
                            agar terlihat elegan di background gelap.
                        */}
                        <motion.div
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                          initial={{ x: "-150%" }}
                          whileHover={{ x: "150%" }}
                          transition={{ 
                            duration: 1, 
                            ease: "easeInOut", 
                            repeat: Infinity, 
                            repeatDelay: 0.5 
                          }}
                        />

                        {/* Teks Tombol */}
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            {item.name}
                        </span>
                    </motion.div>
                 </Link>
               );
             }

             // --- LOGIKA MENU BIASA ---
             return (
               <Link 
                 key={item.name} 
                 href={item.href}
                 className="relative"
               >
                 <motion.span 
                    layout
                    className="font-sans font-medium tracking-tight text-gray-400 hover:text-[#F1FFB2] transition-colors duration-200"
                    animate={{ fontSize: isScrolled ? "0.875rem" : "1rem" }}
                 >
                   {item.name}
                 </motion.span>
               </Link>
             );
           })}
        </motion.div>

      </motion.nav>
    </div>
  );
}