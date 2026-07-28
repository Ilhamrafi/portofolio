"use client";

import { use, useState } from 'react';
import { ArrowLeft, Calendar, Check, Clock, Share2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Footer from '@/components/layout/Footer';
import MarkdownContent from '@/components/ui/MarkdownContent';
import { useChatWidget } from '@/components/widgets/ChatWidgetProvider';
import { blogPosts } from '@/lib/data/blogs';

// Not yet linked from /blog (list is still "Coming Soon") — wire up once real articles are ready.
export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { openChat } = useChatWidget();
  const [shared, setShared] = useState(false);

  const post = blogPosts.find(p => p.slug === slug);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post?.title, url });
      } catch {
        // user cancelled the native share sheet
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  if (!post) {
    return (
      <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link href="/blog" className="text-brand hover:underline">
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
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
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
              <span className="px-4 py-2 rounded-full bg-brand text-black text-sm font-medium">
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
                {new Date(post.date).toLocaleDateString('en-US', {
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
            className="mb-12"
          >
            <MarkdownContent content={post.content} />
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
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-brand/50 transition-all cursor-pointer"
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
              <button
                onClick={handleShare}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label={shared ? 'Link copied' : 'Share this article'}
              >
                {shared ? <Check className="w-5 h-5 text-brand" /> : <Share2 className="w-5 h-5" />}
              </button>
            </div>
            <button
              onClick={openChat}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-brand text-black font-semibold rounded-full hover:bg-brand-dark transition-all active:scale-95"
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
            className="mt-16"
          >
            <h3 className="text-3xl font-bold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.slug !== slug && p.tags.some(tag => post.tags.includes(tag)))
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="group cursor-pointer h-full flex flex-col rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand transition-all p-6">
                        <div className="mb-4 inline-block">
                          <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium">
                            {relatedPost.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-4 flex-grow">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {relatedPost.readTime} min
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>

            {blogPosts.filter(p => p.slug !== slug && p.tags.some(tag => post.tags.includes(tag))).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-6">Tidak ada artikel terkait saat ini.</p>
              </div>
            )}
          </motion.div>
        </div>
      </article>

      {/* FOOTER */}
      <Footer className="mt-12" />

    </main>
  );
}
