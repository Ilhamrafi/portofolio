// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image'; 

export default function Navbar() {
  const menuItems = [
    { name: 'Resume', href: '/resume' },
    { name: 'Showcase', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Me', href: '#contact', isButton: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* Container utama */}
      <div className="flex h-24 w-full px-6 md:px-12 items-center justify-between pt-4"> 
        
        {/* === BAGIAN KIRI: FOTO & LOGO === */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="group flex items-center gap-3 relative">
            
            {/* CONTAINER FOTO */}
            <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300">
                <Image
                  src="/assets/Ilhamrafi.png"
                  alt="Ilham Rafiedhia"
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
            </div>

            {/* TEKS LOGO (DIGANTI JADI BIASA) */}
            {/* Menggunakan font-sans, tidak italic, ukuran pas */}
            <h1 className="font-sans text-lg md:text-xl font-medium text-white tracking-tight group-hover:opacity-80 transition duration-300">
              Ilhamrafi
              {/* Titik hijau tetap dipertahankan sebagai aksen kecil */}
              <span className="text-[#F1FFB2]">.</span>
            </h1>
          </Link>
        </div>

        {/* === BAGIAN KANAN: MENU ITEMS (Tetap sama) === */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
           {menuItems.map((item) => {
             if (item.isButton) {
               return (
                 <Link 
                   key={item.name} 
                   href={item.href}
                   className="group relative px-6 py-2.5 bg-[#1a1a1a] rounded-full border border-white/10 text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-[#252525] active:scale-95"
                 >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                    <span className="relative z-10">{item.name}</span>
                 </Link>
               );
             }

             return (
               <Link 
                 key={item.name} 
                 href={item.href}
                 className="text-base font-sans font-medium text-gray-400 hover:text-[#F1FFB2] transition-colors duration-200"
               >
                 {item.name}
               </Link>
             );
           })}
        </div>

      </div>
    </nav>
  );
}