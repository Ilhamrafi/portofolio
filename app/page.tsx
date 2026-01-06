"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
// Import Components
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import RotatingText from '@/components/RotatingText';
import GridBeams from '@/components/GridBeams';
import Lanyard from '@/components/Lanyard';
import TechMarquee from '@/components/TechMarquee';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

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
                <div className="flex items-center gap-2 text-lg md:text-xl font-light text-white/90 h-[1.6em] -mb-1">
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
                  <button 
                    onClick={openChat}
                    onKeyDown={(e) => e.key === 'Enter' && openChat()}
                    className="group relative flex items-center gap-3 pl-6 pr-2 py-2 bg-[#1a1a1a] text-white text-lg font-medium rounded-full border border-white/10 transition-all duration-300 active:scale-95 cursor-pointer w-fit overflow-hidden hover:border-white/30 focus:outline-none"
                    aria-label="Open chat with AI assistant"
                  >
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
          <div className="relative w-full h-full mt-8 md:mt-0">
              {/* Mobile: smaller centered version */}
              <div className="md:hidden flex justify-center items-center h-[300px]">
                <div className="relative w-[250px] h-[300px]">
                  <Lanyard position={[0, 0, 8]} gravity={[0, -30, 0]} />
                </div>
              </div>
              {/* Desktop: full version */}
              <div className="hidden md:block relative w-full h-full">
                <Lanyard position={[1, 0, 10]} gravity={[0, -40, 0]} />
              </div>
          </div>

        </div>
      </section>

      {/* 3. TECH STACK SEPARATOR */}
      <div className="relative z-20 bg-[#0a0a0a] py-16 overflow-hidden">
          <TechMarquee />
      </div>

      {/* 4. CONTENT SECTION (Showcase / Projects) */}
      <section id="projects" className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
         <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                Selected Showcase
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Here are some of the projects I&apos;ve worked on, spanning client work, team collaborations, and personal experiments.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
               {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item} 
                    className="group relative h-[280px] rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#F1FFB2]/50 transition-all duration-500 cursor-pointer focus-within:ring-2 focus-within:ring-[#F1FFB2] focus-within:ring-offset-2 focus-within:ring-offset-[#0a0a0a]"
                    tabIndex={0}
                    role="article"
                    aria-label={`Project ${item} - Coming Soon`}
                  >
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

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="relative z-10 w-full bg-gradient-to-b from-[#0a0a0a] to-black py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          
          {/* Main Heading */}
          <div className="space-y-6 mb-12">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                Let&apos;s design your vision.
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
                Get in touch Today!
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities and innovative ideas.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <div className="relative inline-block group">
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
              
              <a 
                href="https://www.linkedin.com/in/ilhamrafi/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 active:scale-95 text-lg focus:outline-none"
                aria-label="Connect with me on LinkedIn"
              >
                Hit me on
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-500">
            Based in Jakarta, Indonesia 🇮🇩
          </p>

        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="relative z-10 w-full bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ilhamrafi. All rights reserved.
            </div>
            <Socials />
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpen={() => setIsChatOpen(true)}
      />

    </main>
  );
}