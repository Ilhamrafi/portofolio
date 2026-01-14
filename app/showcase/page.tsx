"use client";

import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import Socials from '@/components/navigation/Socials';
import ChatWidget from '@/components/widgets/ChatWidget';
import ProjectModal from '@/components/widgets/ProjectModal';
import { projectsData } from '@/lib/data/projects';
import type { ProjectDetail } from '@/lib/types';

export default function ShowcasePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Get unique categories
  const categories = ['All', ...new Set(projectsData.flatMap(project => project.categories))];

  // Filter projects based on search query and category
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.categories.includes(selectedCategory);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.categories.some(cat => cat.toLowerCase().includes(searchLower)) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
    return matchesCategory && matchesSearch;
  });

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Reset to page 1 when search query changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white font-sans selection:bg-white/20">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 w-full py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F1FFB2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F10E]"></span>
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase">
                My Portfolio
              </span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                  All Showcase
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Explore the complete collection of projects I've created, spanning web apps, 
                mobile apps, and innovative AI solutions.
              </p>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by title, category, or technology..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:border-transparent transition-all"
            />
          </div>

          {/* CATEGORY FILTER */}
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-[#F1FFB2] text-black'
                    : 'bg-white/5 text-white border border-white/10 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECTS GRID */}
          {paginatedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {paginatedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#F1FFB2]/50 transition-all duration-500 cursor-pointer"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                  {project.image && !project.image.includes('/api/placeholder') ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">📁</div>
                        <span className="text-gray-500 text-sm">{project.categories[0]}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* OVERLAY GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4">
                  {/* CATEGORY BADGES */}
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20">
                        <span className="text-xs font-medium text-white/70 uppercase tracking-widest">
                          {cat}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#F1FFB2] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* TAGS & ARROW */}
                  <div className="flex items-end justify-between flex-1 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div aria-label={`View ${project.title}`}>
                      <ArrowRight size={24} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-white/70 group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found matching your search.</p>
            </div>
          )}

          {/* PAGINATION */}
          {paginatedProjects.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 rounded-full transition-all duration-300 text-sm font-medium"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-[#F1FFB2] text-black'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 rounded-full transition-all duration-300 text-sm font-medium"
              aria-label="Next page"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
          )}

          {/* PAGE INFO */}
          {paginatedProjects.length > 0 && (
          <p className="text-center text-gray-400 text-sm mt-4">
            Showing {paginatedProjects.length} of {filteredProjects.length} projects
          </p>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 w-full bg-gradient-to-b from-[#0a0a0a] to-black py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 md:p-16 transition-all duration-200 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#F1FFB2]">
                Interested in collaborating?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's work together to bring your ideas to life. Feel free to reach out!
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
          </div>
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

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </main>
  );
}
