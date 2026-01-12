import type { Metadata } from "next";
// 1. Import localFont
import localFont from "next/font/local"; 
import { Geist_Mono } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}