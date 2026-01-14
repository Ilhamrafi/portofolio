"use client";

import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';
import Socials from '@/components/navigation/Socials';
import ChatWidget from '@/components/widgets/ChatWidget';
import { blogPosts } from '@/lib/data/blogs';
import type { BlogPost } from '@/lib/types';

const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

export default function BlogPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openChat = () => {
    setIsChatOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans selection:bg-white/20">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 w-full py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1FFB2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F10E]"></span>
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase">
                Blog & Insights
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                  My Blog
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Thoughts, insights, dan cerita tentang teknologi, development, dan apapun yang ada di pikiran saya.
              </p>
            </motion.div>
          </div>

          {/* SEARCH & FILTER */}
          <div className="space-y-6 mb-12">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:border-transparent transition-all"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-[#F1FFB2] text-black'
                      : 'bg-white/5 text-white border border-white/10 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* BLOG POSTS GRID */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#F1FFB2]/50 transition-all duration-500 cursor-pointer">
                      {/* Image */}
                      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                          <div className="text-6xl">📝</div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3 flex flex-col flex-1">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 w-fit">
                          <Tag className="w-4 h-4 text-[#F1FFB2]" />
                          <span className="text-xs font-medium text-[#F1FFB2] uppercase tracking-widest">
                            {post.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#F1FFB2] transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-400 border-t border-white/10">
                          <div className="flex items-center gap-2 pt-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('id-ID', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center gap-2 pt-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min read
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More Button */}
                        <div className="flex items-center gap-2 text-[#F1FFB2] font-medium group-hover:gap-3 transition-all duration-300 pt-2">
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            </div>
          )}

          {/* RESULT COUNT */}
          <div className="text-center mt-12 text-gray-400 text-sm">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 w-full py-20 px-6 md:px-12 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 md:p-16 transition-all duration-200"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                Want to discuss something?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Ada ide atau ingin berdiskusi tentang topik yang saya tulis? Mari kita berbincang!
            </p>
            <button
              onClick={openChat}
              onKeyDown={(e) => e.key === 'Enter' && openChat()}
              className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-[#1a1a1a] text-white text-lg font-medium rounded-full border border-white/10 transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden hover:border-white/30 focus:outline-none"
              aria-label="Open chat with AI assistant"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>
              <span className="relative z-10">Let's Talk</span>
              <div className="relative z-10 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 w-full bg-black border-t border-white/10 py-12">
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
