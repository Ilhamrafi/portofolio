"use client";

import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Socials from '@/components/navigation/Socials';
import ChatWidget from '@/components/widgets/ChatWidget';
import { blogPosts } from '@/lib/data/blogs';
import type { BlogPost } from '@/lib/types';

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
          
          {/* Breadcrumb Navigation */}
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' }
            ]}
            currentPage={post.title}
          />

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
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
