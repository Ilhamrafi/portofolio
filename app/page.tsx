// 1. IMPORT ICON DARI LUCIDE
import { ArrowRight } from 'lucide-react';

import Lanyard from '@/components/Lanyard';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import RotatingText from '@/components/RotatingText';
import GridBeams from '@/components/GridBeams';

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full bg-[#0a0a0a] overflow-hidden text-white font-sans selection:bg-white/20 relative">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. BACKGROUND AREA */}
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

      {/* 3. GRID KONTEN UTAMA */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 relative z-10 pt-20">
        
        {/* KOLOM A (Kiri): Identitas */}
        <div className="flex flex-col justify-center h-full relative pointer-events-auto">
            <div className="absolute -left-6 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1FFB2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F10E]"></span>
                </span>
                <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase">
                    Available for Projects
                </span>
              </div>

              {/* Headline */}
              <div>
                <h2 className="text-xl font-light text-gray-500 mb-1">Hi, I&apos;m</h2>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                  ILHAM <br /> RAFIEDHIA
                </h1>
              </div>

              {/* Deskripsi */}
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
              
              {/* === ACTION GROUP === */}
              {/* 1. POSISI: Diubah dari 'pt-2' menjadi '-mt-4' (margin top negatif).
                     Ini akan menarik elemen ke atas melawan spacing default parent-nya.
              */}
              <div className="flex flex-col gap-6 -mt-4">
                
                {/* 2. ANIMASI TOMBOL:
                     - relative overflow-hidden: Agar efek kilatan tidak keluar garis.
                     - Element <div> absolute inset-0: Ini adalah lapisan kilatan cahaya.
                     - translate-x-[-100%] -> translate-x-[100%]: Gerakan kilatan dari kiri ke kanan saat hover.
                */}
                <button className="group relative flex items-center gap-3 pl-6 pr-2 py-2 bg-[#1a1a1a] text-white text-lg font-medium rounded-full border border-white/10 transition-all duration-300 active:scale-95 cursor-pointer w-fit overflow-hidden hover:border-white/30">
                  
                  {/* Efek Kilatan (Shimmer) */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>

                  <span className="relative z-10">Let&apos;s Talk</span>
                  
                  {/* Lingkaran Panah */}
                  <div className="relative z-10 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                     <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </button>
                
                <Socials />
              </div>
            </div>
        </div>

        {/* KOLOM B (Kanan): Lanyard */}
        <div className="hidden md:block relative w-full h-full">
            <Lanyard position={[1, 0, 10]} gravity={[0, -40, 0]} />
        </div>

      </div>

    </main>
  );
}