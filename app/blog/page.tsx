"use client";

import { useState } from 'react';
import { Coffee, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navigation/Navbar';
import ChatWidget from '@/components/widgets/ChatWidget';
import StatusBadge from '@/components/ui/StatusBadge';
import TalkButton from '@/components/ui/TalkButton';
import Footer from '@/components/layout/Footer';

export default function BlogPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans selection:bg-white/20">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 w-full py-24 md:py-32 min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="space-y-6 mb-16 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto md:mx-0 w-fit"
            >
              <StatusBadge label="Blog & Insights" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand">
                  Coming Soon
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
                Thoughts, insights, dan cerita tentang teknologi, development, dan apapun yang ada di pikiran saya sedang dalam proses penulisan.
              </p>
            </motion.div>
          </div>

          {/* COMING SOON CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto md:mx-0 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shrink-0">
                <Coffee className="w-10 h-10 md:w-12 md:h-12 text-brand" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Brewing something special
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Saya sedang menyiapkan artikel yang membahas seputar dunia teknologi, AI, dan tips produktivitas. Pantau terus agar tidak ketinggalan!
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                    <Sparkles className="w-3.5 h-3.5 text-brand" />
                    <span>Tutorials</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                    <Sparkles className="w-3.5 h-3.5 text-brand" />
                    <span>Insights</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                    <Sparkles className="w-3.5 h-3.5 text-brand" />
                    <span>Career</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand">
                Want to discuss something?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Ada ide atau ingin berdiskusi tentang topik yang saya tulis? Mari kita berbincang!
            </p>
            <TalkButton onClick={openChat} />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* Chat Widget */}
      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpen={() => setIsChatOpen(true)}
      />

    </main>
  );
}
