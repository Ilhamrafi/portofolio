import React from "react";

const techs = [
  "PYTHON", "TENSORFLOW", "PYTORCH", "NEXT.JS", "TYPESCRIPT", 
  "AWS Cloud", "DOCKER", "OPENCV", "GENERATIVE AI", 
  "LLM Integration", "MYSQL", "FFMPEG"
];

export default function TechMarquee() {
  // Duplikasi array agar looping terlihat mulus (seamless) di layar lebar
  const duplicatedTechs = [...techs, ...techs, ...techs, ...techs];

  return (
    <div className="relative w-full overflow-hidden bg-black/80 backdrop-blur-sm py-6 border-y border-white/10 z-20">
      
      {/* Container Teks Berjalan */}
      <div className="flex select-none gap-12 animate-marquee-reverse whitespace-nowrap">
        {duplicatedTechs.map((tech, index) => (
          <div key={index} className="flex items-center gap-12">
            
            {/* Nama Tech */}
            <span className="text-2xl md:text-4xl font-bold text-white tracking-tighter uppercase opacity-80 hover:opacity-100 hover:text-[#F1FFB2] transition-colors duration-300">
              {tech}
            </span>
            
            {/* Separator Icon */}
            <span className="text-xl md:text-2xl text-[#F1FFB2]">
              ✦
            </span>
            
          </div>
        ))}
      </div>
      
      {/* Gradient Fade di Kiri & Kanan (agar teks menghilang halus di pinggir) */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
    </div>
  );
}