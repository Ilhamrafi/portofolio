"use client";

import { ArrowRight } from 'lucide-react';

interface TalkButtonProps {
  onClick: () => void;
  className?: string;
}

export default function TalkButton({ onClick, className = '' }: TalkButtonProps) {
  return (
    <button
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className={`group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-[#1a1a1a] text-white text-lg font-medium rounded-full border border-white/10 transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden hover:border-white/30 focus:outline-none ${className}`}
      aria-label="Open chat with AI assistant"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>
      <span className="relative z-10">Let&apos;s Talk</span>
      <div className="relative z-10 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
        <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
      </div>
    </button>
  );
}
