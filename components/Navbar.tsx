import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export default function Navbar() {
  const menuItems = [
    { name: 'Resume', href: '/resume' },
    { name: 'Showcase', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'AI Chat', href: '/chat' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex h-24 w-full px-6 md:px-12 items-center justify-between"> 
        
        {/* === BAGIAN KIRI: LOGO === */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="group relative">
            <h1 className={`${playfair.className} text-4xl md:text-5xl text-white tracking-tight group-hover:opacity-80 transition duration-300`}>
              <span className="italic font-medium">ham</span>
              <span className="text-[#F1FFB2]">.</span>
            </h1>
          </Link>
        </div>

        {/* === BAGIAN KANAN: MENU ITEMS (Gaya Baru) === */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
           {menuItems.map((item) => (
             <Link 
               key={item.name} 
               href={item.href}
               // STYLE BARU:
               // 1. text-base: Ukuran lebih besar/normal
               // 2. font-medium: Ketebalan sedang
               // 3. text-gray-400: Warna default abu-abu
               // 4. hover:text-green-500: Berubah jadi hijau saat di-hover (bisa diganti warna lain)
               className="text-base font-sans font-medium text-gray-400 hover:text-[#F1FFB2] transition-colors duration-200"
             >
               {item.name}
             </Link>
           ))}
        </div>

      </div>
    </nav>
  );
}