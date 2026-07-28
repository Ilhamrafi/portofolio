"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { ProjectDetail } from '@/lib/types';

interface ProjectCardProps {
  project: ProjectDetail;
  onClick: () => void;
  /** "compact" is used for the smaller featured grid on the home page. */
  variant?: 'compact' | 'full';
}

export default function ProjectCard({ project, onClick, variant = 'full' }: ProjectCardProps) {
  const hasImage = project.image && !project.image.includes('/api/placeholder');
  const compact = variant === 'compact';

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden bg-white/5 border border-white/10 hover:border-[#F1FFB2]/50 transition-all duration-500 cursor-pointer flex flex-col ${
        compact ? 'rounded-xl sm:rounded-2xl' : 'rounded-2xl'
      }`}
    >
      {/* IMAGE CONTAINER */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent flex-shrink-0 ${
          compact ? 'h-48 sm:h-56 md:h-72' : 'h-64 md:h-72'
        }`}
      >
        {hasImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
            <div className="text-center">
              <div className={compact ? 'text-5xl sm:text-6xl mb-2' : 'text-6xl mb-2'}>📁</div>
              <span className={compact ? 'text-gray-500 text-xs sm:text-sm' : 'text-gray-500 text-sm'}>
                {project.categories[0]}
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* CONTENT */}
      <div className={`flex-1 flex flex-col ${compact ? 'p-4 sm:p-6 space-y-3 sm:space-y-4' : 'p-6 space-y-4'}`}>
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat, idx) => (
            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <span className="text-xs font-medium text-white/70 uppercase tracking-widest">{cat}</span>
            </span>
          ))}
        </div>

        <h3
          className={`font-bold group-hover:text-[#F1FFB2] transition-colors duration-300 ${
            compact ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl md:text-2xl'
          }`}
        >
          {project.title}
        </h3>

        <div className="flex items-end justify-between flex-1 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <div aria-label={`View ${project.title}`}>
            <ArrowRight
              size={24}
              className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-white/70 group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
