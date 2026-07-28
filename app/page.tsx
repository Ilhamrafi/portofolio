"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
// Import Components
import Navbar from '@/components/navigation/Navbar';
import Socials from '@/components/navigation/Socials';
import RotatingText from '@/components/animations/RotatingText';
import GridBeams from '@/components/animations/GridBeams';
import Lanyard from '@/components/animations/Lanyard';
import TechMarquee from '@/components/animations/TechMarquee';
import ChatWidget from '@/components/widgets/ChatWidget';
import ProjectModal from '@/components/widgets/ProjectModal';
import ProjectCard from '@/components/widgets/ProjectCard';
import StatusBadge from '@/components/ui/StatusBadge';
import TalkButton from '@/components/ui/TalkButton';
import BorderBeam from '@/components/ui/BorderBeam';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import Footer from '@/components/layout/Footer';
import { projectsData } from '@/lib/data/projects';
import type { ProjectDetail } from '@/lib/types';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get first 4 projects as featured
  const featuredProjects = projectsData.slice(0, 4);

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
      contactSection.scrollIntoView({ behavior: scrollBehavior as ScrollBehavior, block: 'start' });
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
          
          <div className="flex flex-col justify-center max-md:items-center h-full relative pointer-events-auto max-md:text-center">
              {/* Garis Vertikal Dekoratif */}
              <div className="absolute -left-6 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

              <div className="space-y-6 md:space-y-6 w-full">
                
                {/* 1. Badge Status */}
                <StatusBadge label="Available for Projects" className="max-md:mx-auto" />

                {/* === 2. ROTATING INTRODUCTION === */}
                <div className="flex items-center max-md:justify-center gap-2 text-lg md:text-xl font-light text-white/90 h-[1.6em] -mb-1">
                   <RotatingText 
                      texts={[
                        "Hi, I'm Ilhamrafi 👋",
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
                
                {/* 4. Deskripsi (UPDATED) */}
                <div className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed border-l-2 border-white/10 pl-4">
                  An <span className="text-white font-semibold">AI Engineer</span> transforming complex challenges into intelligent solutions designed
                  {" "}
                  <RotatingText 
                    texts={[
                      "to maximize efficiency.",
                      "to scale business growth.",
                      "to automate manual workflows.",
                      "to drive data-driven impact."
                    ]}
                    rotationInterval={4000}
                  />
                </div>
                
                {/* 5. Tombol & Social Media */}
                <div className="flex flex-col max-md:items-center gap-6 mt-2">
                  <TalkButton
                    onClick={openChat}
                    className="w-fit focus:ring-2 focus:ring-[#F1FFB2] focus:ring-offset-2 focus:ring-offset-black"
                  />
                  <div className="w-full flex max-md:justify-center">
                    <Socials />
                  </div>
                </div>
              </div>
          </div>

          {/* BAGIAN KANAN: LANYARD / FOTO (Desktop Only) */}
          <div className="hidden md:block relative w-full h-full">
            <Lanyard position={[1, 0, 10]} gravity={[0, -40, 0]} />
          </div>

        </div>
      </section>

      {/* 3. TECH STACK SEPARATOR */}
      <div className="relative z-20 bg-[#0a0a0a] py-12 overflow-hidden">
          <TechMarquee />
      </div>

      {/* 4. CONTENT SECTION (Showcase / Projects) */}
      <section id="projects" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-16">
         <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 md:gap-6">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-6 tracking-tighter">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                    Selected Showcase
                  </span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                  Here are some of the projects I&apos;ve worked on, spanning client work, team collaborations, and personal experiments.
                </p>
              </div>
              <a
                href="/showcase"
                className="group relative inline-flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#F1FFB2]/50 rounded-full transition-all duration-300 text-white font-medium text-sm md:text-base whitespace-nowrap"
                aria-label="View All projects"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
               {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                    variant="compact"
                  />
               ))}
            </div>
         </div>
      </section>

      {/* PROJECT MODAL */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

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
              <BorderBeam />
              <a
                href="https://www.linkedin.com/in/ilhamrafi/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 active:scale-95 text-lg focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Connect with me on LinkedIn"
              >
                Hit me on
                <LinkedInIcon size={24} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />

      {/* Chat Widget */}
      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpen={() => setIsChatOpen(true)}
      />

    </main>
  );
}