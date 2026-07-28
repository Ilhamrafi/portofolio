"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import ChatWidget from '@/components/widgets/ChatWidget';
import ProjectModal from '@/components/widgets/ProjectModal';
import ProjectCard from '@/components/widgets/ProjectCard';
import StatusBadge from '@/components/ui/StatusBadge';
import TalkButton from '@/components/ui/TalkButton';
import Footer from '@/components/layout/Footer';
import { projectsData } from '@/lib/data/projects';
import type { ProjectDetail } from '@/lib/types';

export default function ShowcasePage() {
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
            <StatusBadge label="My Portfolio" />
            
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
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
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
            <TalkButton onClick={openChat} />
          </div>
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

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </main>
  );
}
