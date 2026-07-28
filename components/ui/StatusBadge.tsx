interface StatusBadgeProps {
  label: string;
  className?: string;
}

export default function StatusBadge({ label, className = '' }: StatusBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md w-fit ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1FFB2] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F10E]"></span>
      </span>
      <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase">
        {label}
      </span>
    </div>
  );
}
