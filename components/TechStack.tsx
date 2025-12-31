import React from 'react';

const icons = [
  { name: "Python", color: "bg-blue-500/10 text-blue-400 border-blue-500/20", label: "PY" },
  { name: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", label: "RC" },
  { name: "Next.js", color: "bg-white/10 text-white border-white/20", label: "NX" },
  { name: "AWS", color: "bg-orange-500/10 text-orange-400 border-orange-500/20", label: "AWS" },
  { name: "Docker", color: "bg-blue-600/10 text-blue-500 border-blue-600/20", label: "DK" },
  { name: "TensorFlow", color: "bg-yellow-600/10 text-yellow-500 border-yellow-600/20", label: "TF" },
];

export default function TechStack() {
  return (
    <div className="w-full h-full flex items-end justify-center pb-4 pointer-events-none select-none overflow-hidden">
      {/* Container Flex Horizontal */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 relative z-0 px-4">
        {icons.map((tech, i) => (
          <div 
            key={i}
            className={`
              flex flex-col items-center justify-center 
              w-14 h-14 md:w-16 md:h-16 rounded-xl 
              backdrop-blur-md border 
              ${tech.color} shadow-lg
              animate-float
            `}
            style={{
              // Delay berbeda tiap item agar gelombangnya cantik
              animationDelay: `${i * 0.2}s`, 
              animationDuration: '3s'
            }}
          >
            <span className="font-bold text-base md:text-lg tracking-tighter">{tech.label}</span>
            {/* Label nama kecil di bawah */}
            <span className="hidden md:block text-[8px] uppercase mt-1 opacity-70 tracking-widest">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}