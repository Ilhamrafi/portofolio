import type { Metadata } from "next";
// 1. Import localFont
import localFont from "next/font/local"; 
import { Geist_Mono } from "next/font/google";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

// 2. Konfigurasi General Sans (Font Utama)
const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  weight: "200 700", // Range weight untuk variable font
});

// 3. Konfigurasi Geist Mono (Font Coding/Teknis - pakai Google Font)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilhamrafi",
  description: "AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning 
        className={`${generalSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content"
          className="fixed top-0 left-0 z-[100] px-4 py-2 bg-[#F1FFB2] text-black font-medium rounded-br-lg opacity-0 focus:opacity-100 transition-opacity duration-200"
          aria-label="Skip to main content"
        >
          Skip to content
        </a>
        <div id="main-content">
          {children}
        </div>

        {/* Back to Top Button - Global */}
        <BackToTop />
      </body>
    </html>
  );
}