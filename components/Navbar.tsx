import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderGit2, PenTool, Mail } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'experience', label: 'Work', icon: <Briefcase size={20} /> },
  { id: 'projects', label: 'Projects', icon: <FolderGit2 size={20} /> },
  { id: 'writing', label: 'Blog', icon: <PenTool size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-1 sm:gap-2 p-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-md shadow-lg shadow-zinc-200/50 ring-1 ring-zinc-900/5"
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative px-3 py-3 rounded-full transition-all duration-300 ease-out group ${
              activeTab === item.id ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-zinc-100 rounded-full -z-10 border border-zinc-200/50"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center">
              {item.icon}
              <span className="sr-only">{item.label}</span>
            </span>
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;