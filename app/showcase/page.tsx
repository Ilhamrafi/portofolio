"use client";

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kora Pet Shop",
    category: "Web Design",
    description: "Modern pet shop website dengan interface yang user-friendly untuk memudahkan pelanggan mencari dan membeli produk perawatan hewan peliharaan.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    category: "Full Stack",
    description: "Chatbot berbasis AI yang dapat memahami konteks dan memberikan respons yang relevan untuk berbagai pertanyaan pengguna.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Node.js", "OpenAI API"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    category: "Frontend",
    description: "Dashboard interaktif untuk visualisasi data dan analytics real-time dengan performa tinggi dan responsif.",
    image: "/api/placeholder/400/300",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Platform e-commerce lengkap dengan fitur payment gateway, inventory management, dan customer dashboard.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Mobile",
    description: "Aplikasi media sosial dengan fitur posting, komentar, like, dan real-time notifications untuk user engagement.",
    image: "/api/placeholder/400/300",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Task Management System",
    category: "Full Stack",
    description: "Sistem manajemen tugas yang membantu tim berkolaborasi dengan fitur tracking, scheduling, dan progress monitoring.",
    image: "/api/placeholder/400/300",
    tags: ["Vue.js", "Django", "PostgreSQL"],
    link: "#",
    github: "#"
  },
];

export default function ShowcasePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans selection:bg-white/20">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 w-full py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1FFB2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F10E]"></span>
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase">
                My Portfolio
              </span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                  All Showcase
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Explore the complete collection of projects I've created, spanning web design, full-stack development, mobile apps, and innovative AI solutions.
              </p>
            </div>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#F1FFB2]/50 transition-all duration-500 cursor-pointer"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">📁</div>
                      <span className="text-gray-500 text-sm">{project.category}</span>
                    </div>
                  </div>
                  
                  {/* OVERLAY GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4">
                  {/* CATEGORY BADGE */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    <span className="text-xs font-medium text-white/70 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#F1FFB2] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 pt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 text-sm font-medium"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink size={16} />
                        Visit
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#F1FFB2]/10 hover:bg-[#F1FFB2]/20 border border-[#F1FFB2]/30 rounded-lg transition-all duration-300 text-sm font-medium text-[#F1FFB2]"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 w-full bg-gradient-to-b from-[#0a0a0a] to-black py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                Interested in collaborating?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's work together to bring your ideas to life. Feel free to reach out!
            </p>
            <div className="pt-6">
              <a
                href="https://www.linkedin.com/in/ilhamrafi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-full border border-white/10 hover:border-[#F1FFB2]/50 hover:text-[#F1FFB2] transition-all duration-300 active:scale-95"
                aria-label="Connect on LinkedIn"
              >
                Get in Touch
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

    </main>
  );
}
