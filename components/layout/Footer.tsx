import Socials from '@/components/navigation/Socials';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`relative z-10 w-full bg-black border-t border-white/10 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ilhamrafi. All rights reserved.
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
