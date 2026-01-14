"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'Showcase', href: '/showcase' },
    { name: 'Blog', href: '/blog' },
    { name: 'Connect on', href: 'https://www.linkedin.com/in/ilhamrafi/', isButton: true },
  ];

  // Function untuk check apakah link saat ini aktif
  const isActive = (href: string) => {
    if (href.startsWith('http')) return false; // External links tidak pernah active
    return pathname === href || pathname.startsWith(href + '/');
  };

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
            <Link 
              href="/" 
              className="group flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:ring-offset-2 focus:ring-offset-black transition-all"
              aria-label="Home - Ilhamrafi Portfolio"
            >
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

        {/* === HAMBURGER BUTTON (Mobile Only) === */}
        <motion.button
          layout
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#F1FFB2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] rounded-lg"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* === BAGIAN KANAN: MENU ITEMS (Desktop) === */}
        <motion.div layout className="hidden md:flex items-center gap-8">
           {menuItems.map((item) => {
             
             // --- LOGIKA TOMBOL 'CONNECT ON' (BEAM EFFECT) ---
              if (item.isButton) {
               return (
                 <div key={item.name} className="relative group">
                   {/* Animated border beam - always visible */}
                   <div className="absolute -inset-[3px] rounded-full overflow-hidden">
                     <div className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '3s' }}>
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" style={{
                         width: '50%',
                         height: '4px',
                         top: '50%',
                         left: '50%',
                         transformOrigin: '0 0',
                         filter: 'blur(3px)',
                         boxShadow: '0 0 30px 8px rgba(255, 255, 255, 0.9), 0 0 50px 15px rgba(255, 255, 255, 0.5)'
                       }}></div>
                     </div>
                   </div>
                   
                   <Link 
                     href={item.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="relative focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:ring-offset-2 focus:ring-offset-transparent rounded-full block" 
                     aria-label="Connect on LinkedIn"
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
                          {/* === SHIMMER EFFECT === */}
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0" />
                          
                          {/* Teks Tombol */}
                          <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                              Connect on
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                          </span>
                      </motion.div>
                   </Link>
                 </div>
               );
             }

             // --- LOGIKA MENU BIASA ---
             const active = isActive(item.href);
             return (
               <Link 
                 key={item.name} 
                 href={item.href}
                 className="relative rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:ring-offset-2 focus:ring-offset-black transition-all px-3 py-1.5 group"
                 aria-label={`Navigate to ${item.name}`}
               >
                 {/* Active background indicator */}
                 {active && (
                   <motion.div
                     layoutId="activeNavBg"
                     className="absolute inset-0 bg-[#F1FFB2]/10 rounded-lg -z-10 border border-[#F1FFB2]/30"
                     transition={{
                       type: "spring",
                       stiffness: 380,
                       damping: 30,
                     }}
                   />
                 )}
                 
                 <motion.span 
                    layout
                    className={`font-sans font-medium tracking-tight transition-colors duration-200 ${
                      active 
                        ? 'text-[#F1FFB2]' 
                        : 'text-gray-400 group-hover:text-[#F1FFB2]'
                    }`}
                    animate={{ fontSize: isScrolled ? "0.875rem" : "1rem" }}
                 >
                   {item.name}
                 </motion.span>
               </Link>
             );
           })}
        </motion.div>

      </motion.nav>

      {/* === MOBILE MENU DROPDOWN === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[80px] left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 pointer-events-auto"
          >
            <div className="flex flex-col p-6 gap-4 items-center">
              {menuItems.map((item) => {
                if (item.isButton) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full py-3 px-6 bg-[#1a1a1a] text-white font-medium rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:ring-offset-2 focus:ring-offset-black"
                    >
                      {item.name}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </Link>
                  );
                }
                
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full py-3 px-6 font-medium transition-all duration-200 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:ring-offset-2 focus:ring-offset-black ${
                      active
                        ? 'bg-[#F1FFB2]/10 text-[#F1FFB2] border border-[#F1FFB2]/30'
                        : 'text-gray-400 hover:text-[#F1FFB2] hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
