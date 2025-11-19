import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github, Image as ImageIcon, ChevronDown } from 'lucide-react';
import { Project } from '../types';

const StatusBadge: React.FC<{ status: Project['status'] }> = ({ status }) => {
  const styles = {
    'Featured': 'bg-amber-100 text-amber-700 border-amber-200',
    'In Production': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'AI-Powered': 'bg-purple-100 text-purple-700 border-purple-200',
    'Acquired': 'bg-blue-100 text-blue-700 border-blue-200',
    'Archived': 'bg-zinc-100 text-zinc-500 border-zinc-200',
    'Coming Soon': 'bg-pink-100 text-pink-700 border-pink-200',
    'In Development': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border ${styles[status]} z-10`}>
      {status}
    </span>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isArchived = project.status === 'Archived';

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group flex flex-col rounded-3xl border overflow-hidden transition-all duration-500 h-full ${
        isArchived 
          ? 'bg-zinc-50 border-zinc-100 opacity-80 hover:opacity-100' 
          : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/30 hover:-translate-y-2'
      }`}
    >
      {/* Image Area */}
      <div className="relative h-56 w-full bg-zinc-100 overflow-hidden">
         {project.imageUrl ? (
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
         ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-300">
                <ImageIcon size={32} />
            </div>
         )}
         <div className="absolute top-4 left-4">
            <StatusBadge status={project.status} />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
             <h3 className="text-xl font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                {project.title}
            </h3>
            {!isArchived && (
                <ArrowUpRight className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
            )}
        </div>
        
        <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-100">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-zinc-400 group-hover:text-zinc-600 bg-zinc-50 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const sortedProjects = [...PROJECTS].sort((a, b) => {
     const order = { 'Featured': 1, 'In Production': 2, 'AI-Powered': 3, 'Acquired': 4, 'In Development': 5, 'Coming Soon': 6, 'Archived': 7 };
     return order[a.status] - order[b.status];
  });

  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto bg-zinc-50/50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Selected Works</h2>
          <p className="text-zinc-500 max-w-xl text-lg">
             A collection of products I've shipped.
          </p>
        </div>
        <a href="https://github.com/AadiXC0DE" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
          <Github size={16} />
          All Repositories
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence>
            {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
            ))}
        </AnimatePresence>
      </div>
      
      {!showAll && (
        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full text-sm font-bold hover:bg-zinc-50 transition-all shadow-sm hover:shadow-md"
          >
             View All Projects
             <ChevronDown size={16} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;