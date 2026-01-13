"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ChatWidget from '@/components/ChatWidget';
import CountUp from '@/components/CountUp';
import Socials from '@/components/Socials';
import { MapPin, ArrowRight, Download, Brain, Database, Rocket } from 'lucide-react';

export default function ResumePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans selection:bg-white/20">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION - MODIFIED LAYOUT (BENTO GRID) */}
      <section className="relative z-10 w-full pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h2 className="text-lg md:text-xl font-light text-white/60">About Me</h2>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                MY SUMMARY
              </span>
            </h1>
          </motion.div>

          {/* BENTO GRID LAYOUT */}
          {/* Grid Container Utama */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 1. INTRO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-8 order-1 bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center h-full min-h-[250px] transition-all duration-200"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                Hi, I&apos;m Ilhamrafi 👋
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I was born and raised in Balikpapan. I'm currently working as an AI Engineer in Jakarta, Indonesia, focusing on building 
                intelligent systems, solving complex problems with AI models, and creating impactful AI solutions.
              </p>
            </motion.div>

            {/* GROUP 2: RIGHT COLUMN (Profile Image) */}
            {/* Image spans vertically to match the height of Intro + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-4 lg:row-span-2 order-2 relative min-h-[500px] lg:min-h-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] transition-all duration-200 cursor-pointer"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Profile Image with Grayscale Hover */}
              <div 
                className="relative w-full h-full transition-all duration-300"
                style={{
                  filter: isImageHovered ? "grayscale(0%)" : "grayscale(100%)"
                }}
              >
                <Image
                  src="/assets/ilham-bg.jpg"
                  alt="Ilham Rafiedhia"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Download CV Button - Always visible with subtle glow animation */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex items-center justify-center pointer-events-auto">
                <a 
                  href="https://drive.google.com/file/d/196fQ86NBS9vBEDPMbDzmqFqCtiKbSiNh/view?usp=sharing" 
                  download 
                  className="relative flex items-center gap-2 px-6 py-3 bg-[#F1FFB2]/70 text-black font-semibold rounded-full hover:bg-[#F1FFB2] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F1FFB2]/30 animate-pulse"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </motion.div>

            {/* 2. STATS: PROJECTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-4 order-3 bg-[#111] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center min-h-[200px] transition-all duration-200"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">
                <CountUp to={10} duration={0.5} className="inline-block" />+
              </div>
              <div className="text-gray-400 text-lg leading-tight">
                Completed<br />Projects
              </div>
            </motion.div>

            {/* 3. STATS: YEARS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:col-span-4 order-4 bg-[#111] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center min-h-[200px] transition-all duration-200"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2 text-white">
                <CountUp to={2} duration={0.5} className="inline-block" />+
              </div>
              <div className="text-gray-400 text-lg leading-tight">
                Years as<br />AI Engineer
              </div>
            </motion.div>

            {/* GROUP 3: BOTTOM ROW */}
            {/* This group remains in the main grid but sits below groups 1 & 2 */}

            {/* 4. SERVICES TEXT (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="lg:col-span-8 order-5 bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-10 flex items-center min-h-[200px] transition-all duration-200"
            >
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Helping Startups, Corporations, and small businesses with AI solutions 
                that include AI models, intelligent automation systems, 
                data pipelines, and AI-powered products.
              </p>
            </motion.div>

            {/* 5. LOCATION (Small) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="lg:col-span-4 order-6 bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[200px] transition-all duration-200"
            >
               <div className="flex items-start justify-between">
                  <div>
                     <h4 className="text-xl font-semibold mb-1 text-white">Based in</h4>
                     <p className="text-gray-300 text-lg">Jakarta, Indonesia</p>
                     <p className="text-gray-300 text-base mt-1.5">GMT +7</p>
                  </div>
                  <MapPin className="w-8 h-8 text-[#F1FFB2] flex-shrink-0 mt-1" />
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative z-10 w-full py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-lg md:text-xl font-light text-white/60">Experience</h2>
          </motion.div>

          <div className="space-y-6">
            
            {/* Experience Item 1 - Freelance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#F1FFB2]/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">Freelance AI/ML Engineer</h3>
                  <p className="text-[#F1FFB2] font-medium">Independent Contractor</p>
                </div>
                <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">Present</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Delivered custom AI/ML solutions for diverse clients across multiple industries, including computer vision systems for object detection and tracking, 
                predictive analytics models for business forecasting, and natural language processing applications. Specialized in end-to-end project delivery 
                from requirement gathering and model development to deployment and optimization, ensuring scalable and production-ready AI solutions that drive 
                measurable business impact.
              </p>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#F1FFB2]/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">AI & Computer Vision Engineer</h3>
                  <p className="text-[#F1FFB2] font-medium">PT Bengawan Tirta Rekayasa</p>
                </div>
                <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">2024 - Present</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Developed computer vision system for real-time waste detection on river surfaces, built water flow detection application 
                (LSPIV method) for flood early warning system, and created real-time monitoring dashboard integrating waste detection, 
                water-level, and flow-speed data to support decision-making in river management and flood risk mitigation.
              </p>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#F1FFB2]/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">Machine Learning Cohort</h3>
                  <p className="text-[#F1FFB2] font-medium">Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka</p>
                </div>
                <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">2024</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Developed Sweetify app - a sugar intake tracking application for health management, contributed to ML curriculum development 
                through Instructor-Led Training materials, and completed multiple specializations including TensorFlow, Deep Learning, 
                Data Science, and Google certifications.
              </p>
            </motion.div>

            {/* Experience Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#F1FFB2]/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">Assistant Lecturer</h3>
                  <p className="text-[#F1FFB2] font-medium">Universitas Teknologi Yogyakarta (part-time)</p>
                </div>
                <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">2023 - 2024</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Taught courses including Coding, Machine Learning, IT Applications, Object-Oriented Programming (Python), 
                Algorithms & Data Structures (Java), and Database Systems. Provided hands-on guidance applying theoretical knowledge 
                to practical scenarios and collaborated with lecturers to develop learning materials, assignments, 
                and lab exercises to strengthen student understanding.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative z-10 w-full py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-lg md:text-xl font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">What I Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* What I Do Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F1FFB2]/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-[#F1FFB2]" />
                <h3 className="text-xl font-semibold text-white text-center">AI Development</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-center">
                Designing and developing predictive models using state-of-the-art algorithms to solve complex business problems and drive meaningful impact.
              </p>
            </motion.div>

            {/* What I Do Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F1FFB2]/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#F1FFB2]" />
                <h3 className="text-xl font-semibold text-white text-center">Data Engineering</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-center">
                Managing efficient and large-scale data pipelines to ensure AI models receive high-quality data input for optimal performance.
              </p>
            </motion.div>

            {/* What I Do Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F1FFB2]/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-[#F1FFB2]" />
                <h3 className="text-xl font-semibold text-white text-center">MLOps & Deployment</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-center">
                Integrating AI models into production environments, ensuring stable performance, and conducting regular model monitoring for reliability.
              </p>
            </motion.div>

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
                Let&apos;s Work Together
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? 
              I&apos;m always open to discussing new opportunities.
            </p>
            <button
              onClick={openChat}
              onKeyDown={(e) => e.key === 'Enter' && openChat()}
              className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-[#1a1a1a] text-white text-lg font-medium rounded-full border border-white/10 transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden hover:border-white/30 focus:outline-none"
              aria-label="Open chat with AI assistant"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>
              <span className="relative z-10">Let&apos;s Talk</span>
              <div className="relative z-10 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onOpen={() => setIsChatOpen(true)}
      />

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

    </main>
  );
}