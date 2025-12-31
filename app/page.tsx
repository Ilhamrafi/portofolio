import Lanyard from '@/components/Lanyard';
import TechStack from '@/components/TechStack';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import RotatingText from '@/components/RotatingText'; // 1. IMPORT DISINI

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full bg-black overflow-hidden text-white font-sans selection:bg-white/20 relative">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* 3. GRID KONTEN UTAMA */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 relative z-10 pt-20">
        
        {/* KOLOM A (Kiri): Identitas */}
        <div className="flex flex-col justify-center h-full relative pointer-events-auto">
            {/* Dekorasi Garis Vertikal */}
            <div className="absolute -left-6 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1FFB2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F10E]"></span>
                </span>
                <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase">
                    GLAD YOU'RE HERE
                </span>
              </div>

              {/* Headline */}
              <div>
                <h2 className="text-xl font-light text-gray-500 mb-1">Hello, I&apos;m</h2>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                  ILHAM <br /> RAFIEDHIA
                </h1>
              </div>

              {/* Deskripsi DENGAN ROTATING TEXT */}
              <div className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed border-l-2 border-white/10 pl-4">
                A passionate <span className="text-white font-semibold">AI Engineer</span> crafting intelligent systems and helping companies implement AI <br className="hidden md:block"/>
                
                {/* 2. PASANG COMPONENT ROTATING DISINI */}
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
              <div className="flex flex-col gap-6 pt-4">
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition active:scale-95 cursor-pointer">
                    Showcase
                  </button>
                  <button className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition backdrop-blur-md cursor-pointer">
                    Contact
                  </button>
                </div>
                <Socials />
              </div>
            </div>
        </div>

        {/* KOLOM B (Kanan): Lanyard */}
        <div className="hidden md:block relative w-full h-full">
            <Lanyard position={[1, 0, 10]} gravity={[0, -40, 0]} />
        </div>

      </div>

      {/* 4. FOOTER: FLOATING TECH STACK */}
      <div className="relative z-20 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent flex items-end justify-center">
          <TechStack />
      </div>

    </main>
  );
}