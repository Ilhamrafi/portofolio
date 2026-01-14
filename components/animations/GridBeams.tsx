"use client";

import { useEffect, useState } from "react";

// Definisi tipe data
type Beam = {
  id: number;
  top: number;
  left: number;
  type: 'h'; // Tetap Horizontal Only
  delay: number;
  duration: number;
};

export default function GridBeams() {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const gridSize = 100; 
    const numBeams = 5; // Kurangi sedikit (misal 5) karena areanya sekarang lebih sempit
    
    const width = window.innerWidth;

    const newBeams: Beam[] = [];

    for (let i = 0; i < numBeams; i++) {
          newBeams.push({
            id: i,
            type: 'h',
            
            top: Math.floor(Math.random() * 2) * gridSize,
            
            left: Math.floor(Math.random() * (width / gridSize)) * gridSize,
            
            delay: (Math.random() * 20) - 10, 
            duration: 10 + Math.random() * 10,
          });
        }

    setBeams(newBeams);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beams.map((beam) => (
        <div
          key={beam.id}
          className="absolute bg-gradient-to-r from-transparent via-[#F1FFB2] to-transparent opacity-0 animate-beam-h"
          style={{
            top: `${beam.top}px`,
            left: `${beam.left}px`,
            width: '200px',
            height: '1px',
            animationDelay: `${beam.delay}s`,
            animationDuration: `${beam.duration}s`,
            boxShadow: '0 0 10px 1px rgba(241, 255, 178, 0.4)'
          }}
        />
      ))}
    </div>
  );
}
