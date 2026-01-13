"use client";

import { X, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

export interface ProjectDetail {
  id: number;
  title: string;
  categories: string[];
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  clientBackground?: string;
  projectOverview?: string;
  solution?: string[];
  result?: string;
  screenshots?: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl">
        
        {/* Header with Close Button */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-[#0f0f0f]/95 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F1FFB2]">
            Project Overview
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div>
          
          {/* Navigation Title - Only if screenshots exist */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="px-6 md:px-8 pt-6 pb-4">
              <h3 className="text-xl font-semibold text-white">Navigation</h3>
            </div>
          )}
          
          {/* Project Image/Screenshots Section - FULL WIDTH, ABSOLUTELY NO PADDING */}
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="w-full">
              {project.screenshots.map((screenshot, idx) => (
                <div key={idx} className="w-full">
                  <img 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto block"
              />
            </div>
          )}
          
          {/* All Other Content with Padding */}
          <div className="px-6 md:px-8 py-8 space-y-8">

          {/* Client Background */}
          {project.clientBackground && (
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Client Background</h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {project.clientBackground}
              </p>
            </div>
          )}

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {project.projectOverview || project.description}
            </p>
          </div>

          {/* Solution */}
          {project.solution && project.solution.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Solution</h3>
              <ul className="space-y-2">
                {project.solution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F1FFB2] flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Result */}
          {project.result && (
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Result</h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {project.result}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white hover:bg-white/15 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#F1FFB2]/10 border border-[#F1FFB2]/30 text-sm font-medium text-[#F1FFB2]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#F1FFB2] hover:bg-[#F1FFB2]/90 text-black font-medium rounded-full transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium rounded-full transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}
