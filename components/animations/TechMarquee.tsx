"use client";

import React from "react";
import Image from "next/image";

// Update Tech Stack List
const techStack = [
  { name: "Python", src: "/assets/logo/python.png" },
  { name: "TensorFlow", src: "/assets/logo/Tensorflow.png" },
  { name: "PyTorch", src: "/assets/logo/pytorch.png" },
  { name: "Next.js", src: "/assets/logo/nextjs.png" },
  { name: "AWS", src: "/assets/logo/AWS.png" },
  { name: "Docker", src: "/assets/logo/Docker.png" },
  { name: "FastAPI", src: "/assets/logo/FastAPI.png" },
  { name: "Anaconda", src: "/assets/logo/anaconda.png" }, 
  { name: "HuggingFace", src: "/assets/logo/huggingface.png" },
  { name: "Jupyter", src: "/assets/logo/jupyter.png" },
  { name: "MySQL", src: "/assets/logo/MySQL.png" },
  { name: "Redis", src: "/assets/logo/Redis.png" },
  { name: "Celery", src: "/assets/logo/Celery.png" },
  { name: "Keras", src: "/assets/logo/Keras.jpg" },
  { name: "Streamlit", src: "/assets/logo/Streamlit.png" },
  { name: "Git", src: "/assets/logo/Git.png" },
  { name: "GitHub", src: "/assets/logo/github.png" },
];

export default function TechMarquee() {
  const duplicatedTechs = [...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a] py-10 border-y border-white/5 z-20">
      
      {/* Container Animasi */}
      <div className="flex w-max animate-marquee gap-6 md:gap-12 group hover:[animation-play-state:paused]">
        {duplicatedTechs.map((tech, index) => (
          
          <div 
            key={index} 
            className="relative flex flex-col items-center justify-center gap-2 px-2"
          >
            {/* Logo Container */}
            <div className="
              relative w-16 h-16 md:w-20 md:h-20 
              flex items-center justify-center 
              bg-white/5 
              backdrop-blur-sm 
              border border-white/10 
              rounded-2xl 
              transition-all duration-300
              hover:bg-white/10 hover:border-brand/50 hover:scale-110 hover:shadow-[0_0_15px_rgba(241,255,178,0.2)]
              cursor-pointer
              overflow-hidden
            ">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  unoptimized // Mencegah blur pada logo kecil
                  className={`
                    object-contain 
                    grayscale opacity-70 
                    transition-all duration-300 
                    group-hover:grayscale-0 group-hover:opacity-100
                    rounded-lg /* Menjaga sudut tetap rapi jika logo berbentuk kotak penuh */
                  `}
                />
              </div>
            </div>

            {/* Tooltip Name (Hanya muncul saat hover) */}
            <span className="text-[10px] md:text-xs font-mono text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute -bottom-6 whitespace-nowrap">
              {tech.name}
            </span>
            
          </div>
        ))}
      </div>

      {/* Gradient Fade */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
