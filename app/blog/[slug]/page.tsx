"use client";

import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import ChatWidget from '@/components/ChatWidget';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  image: string;
  tags: string[];
}

// Sample blog data - In production, fetch from API or database
const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'getting-started-with-ai',
    title: 'Getting Started with AI: A Beginner\'s Guide',
    excerpt: 'Pelajari dasar-dasar artificial intelligence, konsep fundamental, dan bagaimana AI mengubah dunia teknologi modern.',
    content: `
# Getting Started with AI: A Beginner's Guide

Artificial Intelligence (AI) telah menjadi salah satu teknologi paling transformatif di era modern ini. Dari rekomendasi produk di e-commerce hingga autonomous vehicles, AI ada di mana-mana. Tapi apa sebenarnya AI itu?

## Apa Itu Artificial Intelligence?

AI adalah cabang dari ilmu komputer yang fokus pada penciptaan mesin atau software yang dapat melakukan tugas-tugas yang biasanya memerlukan kecerdasan manusia. Ini termasuk learning, reasoning, dan self-correction.

## Konsep Fundamental AI

Ada beberapa konsep dasar yang perlu Anda pahami:

1. **Machine Learning** - Subset dari AI di mana sistem belajar dari data
2. **Deep Learning** - Penggunaan neural networks dengan banyak layer
3. **Natural Language Processing** - Kemampuan untuk memahami bahasa manusia
4. **Computer Vision** - Kemampuan untuk menganalisis dan memahami gambar

## Aplikasi AI di Dunia Nyata

- Healthcare: Diagnosis penyakit lebih akurat
- Finance: Fraud detection dan prediksi pasar
- Transportation: Autonomous vehicles dan route optimization
- Retail: Personalized recommendations

## Kesimpulan

AI bukan lagi teknologi masa depan, tapi masa kini. Dengan memahami dasar-dasarnya, Anda siap untuk memasuki era baru teknologi.
    `,
    category: 'AI',
    date: '2024-01-15',
    readTime: 8,
    author: 'Ilhamrafi',
    image: '/api/placeholder/600/300',
    tags: ['AI', 'Machine Learning', 'Technology']
  },
  {
    id: 2,
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript: Advanced Patterns',
    excerpt: 'Eksplorasi advanced patterns dalam TypeScript termasuk generics, decorators, dan type system yang powerful.',
    content: `
# Mastering TypeScript: Advanced Patterns

TypeScript telah menjadi bahasa pilihan untuk development JavaScript modern. Mari kita explore beberapa advanced patterns yang akan membuat kode Anda lebih powerful dan maintainable.

## Generics

Generics memungkinkan Anda membuat komponen yang reusable dengan type safety.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## Decorators

Decorators adalah fitur powerful untuk mengubah behavior dari class atau method.

\`\`\`typescript
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}
\`\`\`

## Type System yang Powerful

TypeScript's type system adalah salah satu yang paling sophisticated di industri.

## Best Practices

1. Gunakan strict mode
2. Avoid 'any' type
3. Leverage union dan intersection types
4. Gunakan type guards

Dengan menguasai patterns ini, Anda akan menulis TypeScript code yang lebih profesional dan aman.
    `,
    category: 'Development',
    date: '2024-01-12',
    readTime: 12,
    author: 'Ilhamrafi',
    image: '/api/placeholder/600/300',
    tags: ['TypeScript', 'JavaScript', 'Web Development']
  },
  {
    id: 3,
    slug: 'productivity-tips-for-developers',
    title: 'Productivity Tips for Developers',
    excerpt: 'Strategi dan tools yang saya gunakan untuk meningkatkan produktivitas dan fokus dalam coding sehari-hari.',
    content: `
# Productivity Tips for Developers

Produktivitas bukan hanya tentang bekerja lebih keras, tapi tentang bekerja lebih smart. Berikut adalah tips yang telah terbukti meningkatkan produktivitas saya sebagai developer.

## 1. Time Blocking

Alokasikan waktu tertentu untuk task tertentu dan hindari multitasking.

## 2. Use the Right Tools

- **IDE**: VS Code dengan extensions yang tepat
- **Terminal**: Zsh dengan Oh My Zsh untuk productivity
- **Automation**: Git hooks untuk enforce standards

## 3. Minimize Distractions

- Disable notifications saat coding
- Gunakan pomodoro technique (25 min focus, 5 min break)
- Dedicated workspace untuk work

## 4. Continuous Learning

- Dedicate 30 minutes daily untuk learning
- Follow tech blogs dan podcasts
- Experiment dengan new technologies

## 5. Code Review Yourself

Sebelum submit PR, review kode Anda sendiri terlebih dahulu.

## Kesimpulan

Produktivitas adalah habit yang bisa dipelajari dan ditingkatkan dengan konsistensi.
    `,
    category: 'Lifestyle',
    date: '2024-01-10',
    readTime: 6,
    author: 'Ilhamrafi',
    image: '/api/placeholder/600/300',
    tags: ['Productivity', 'Tips', 'Career']
  },
];

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Handle both sync and async params
  const slug = typeof params === 'object' && 'slug' in params ? params.slug : '';
  const post = blogPosts.find(p => p.slug === slug);

  const openChat = () => {
    setIsChatOpen(true);
  };

  if (!post) {
    return (
      <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link href="/blog" className="text-[#F1FFB2] hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans selection:bg-white/20">
      
      {/* NAVBAR */}
      <Navbar />

      {/* ARTICLE CONTENT */}
      <article className="relative z-10 w-full py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-6"
          >
            {/* Category */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-[#F1FFB2] text-black text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 text-gray-400 text-sm pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 pt-4">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} minutes read
              </div>
              <div className="flex-1">By {post.author}</div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 h-96"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
              <div className="text-8xl">📝</div>
            </div>
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none mb-12"
          >
            <div className="text-gray-300 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const match = paragraph.match(/^#+/);
                  const level = match ? match[0].length : 1;
                  const text = paragraph.replace(/^#+\s/, '');
                  const headingClass = level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl';
                  return (
                    <h2 key={index} className={`${headingClass} font-bold text-white mt-6 mb-4`}>
                      {text}
                    </h2>
                  );
                }
                if (paragraph.startsWith('```')) {
                  return (
                    <pre key={index} className="bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-[#F1FFB2]">{paragraph.replace(/```/g, '')}</code>
                    </pre>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 pl-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace(/^-\s/, '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-[#F1FFB2]/50 transition-all cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Share & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-400">Share:</span>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Share on Twitter">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={openChat}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#F1FFB2] text-black font-semibold rounded-full hover:bg-[#C6F10E] transition-all active:scale-95"
            >
              Discuss This
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Related Articles or CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Want to read more?</h3>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-[#F1FFB2] font-medium"
            >
              Back to All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="relative z-10 w-full bg-black border-t border-white/10 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ilhamrafi. All rights reserved.
            </div>
            <Socials />
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpen={() => setIsChatOpen(true)}
      />

    </main>
  );
}
