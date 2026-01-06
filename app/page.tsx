"use client";

import { ArrowRight } from 'lucide-react';
// Import Components
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import RotatingText from '@/components/RotatingText';
import GridBeams from '@/components/GridBeams';
import Lanyard from '@/components/Lanyard';
import TechMarquee from '@/components/TechMarquee';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans selection:bg-white/20 relative">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <section className="relative z-10 w-full h-screen flex flex-col justify-center overflow-hidden">
        
        {/* === BACKGROUND GRID === */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 2px)
                `,
                backgroundSize: '100px 100px', 
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              }}
            />
            <GridBeams />
        </div>

        {/* KONTEN HERO */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 h-full pt-20 z-10">
          
          <div className="flex flex-col justify-center h-full relative pointer-events-auto">
              {/* Garis Vertikal Dekoratif */}
              <div className="absolute -left-6 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

              <div className="space-y-6 md:space-y-6">
                
                {/* 1. Badge Status */}
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1FFB2] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F10E]"></span>
                  </span>
                  <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase">
                      Available for Projects
                  </span>
                </div>

                {/* === 2. ROTATING INTRODUCTION === */}
                <div className="flex items-center gap-2 -mb-2 text-lg md:text-xl font-light text-white/90 h-[1.6em]">
                   <RotatingText 
                      texts={[
                        "Hi, I'm Ilhamrafi 👋",
                        "AI Engineer 🤖",
                        "Jakarta, Indonesia"
                      ]}
                      rotationInterval={4000} 
                   />
                </div>
                {/* ========================================================== */}

                {/* 3. JUDUL UTAMA (DENGAN GRADIENT TEXT) */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                   {/* Baris 1: Gradient Putih -> Lime */}
                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                     Solving Complexity,
                   </span>
                   <br />
                   {/* Baris 2: Gradient Abu-abu Terang -> Abu-abu Gelap (Fading Effect) */}
                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-700">
                     Automating Simplicity.
                   </span>
                </h1>
                
                {/* 4. Deskripsi */}
                <div className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed border-l-2 border-white/10 pl-4">
                  A passionate <span className="text-white font-semibold">AI Engineer</span> crafting intelligent systems and helping companies implement AI
                  {" "}
                  <RotatingText 
                    texts={[
                      "to drive scalable growth.",
                      "to automate complex workflows.",
                      "to make data-driven decisions.",
                      "to drive real business value."
                    ]} 
                  />
                </div>
                
                {/* 5. Tombol & Social Media */}
                <div className="flex flex-col gap-6 mt-2">
                  <button className="group relative flex items-center gap-3 pl-6 pr-2 py-2 bg-[#1a1a1a] text-white text-lg font-medium rounded-full border border-white/10 transition-all duration-300 active:scale-95 cursor-pointer w-fit overflow-hidden hover:border-white/30">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>
                    <span className="relative z-10">Let&apos;s Talk</span>
                    <div className="relative z-10 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                       <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                  </button>
                  <Socials />
                </div>
              </div>
          </div>

          {/* BAGIAN KANAN: LANYARD / FOTO */}
          <div className="hidden md:block relative w-full h-full">
              <Lanyard position={[1, 0, 10]} gravity={[0, -40, 0]} />
          </div>

        </div>
      </section>

      {/* 3. TECH STACK SEPARATOR */}
      <div className="relative z-20 bg-[#0a0a0a] py-16 overflow-hidden">
          <TechMarquee />
      </div>

      {/* 4. CONTENT SECTION (Showcase / Projects) */}
      <section id="projects" className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-screen">
         <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                Selected Showcase
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Here are some of the projects I&apos;ve worked on, ranging from AI implementations, Computer Vision systems, to complex web applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="group relative h-[400px] rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#F1FFB2]/50 transition-all duration-500 cursor-pointer">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-600 font-mono text-sm group-hover:text-[#F1FFB2] transition-colors">
                          Project {item} <br/> (Coming Soon)
                        </span>
                     </div>
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500" />
                  </div>
               ))}
            </div>
         </div>
      </section>

    </main>
  );
}