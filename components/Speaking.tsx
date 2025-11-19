import React from 'react';
import { motion } from 'framer-motion';
import { SPEAKING } from '../constants';
import { Mic, Users } from 'lucide-react';

const Speaking: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center bg-zinc-900 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden relative">
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30"></div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex items-center gap-2 text-blue-400 mb-4 font-mono text-sm uppercase tracking-wider">
             <Mic size={16} />
             <span>Community & Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            Sharing knowledge <br /> with the next generation.
          </h2>
          
          <div className="space-y-8">
             {SPEAKING.map((item, idx) => (
                <div key={idx} className="border-l-2 border-zinc-700 pl-6">
                   <h3 className="text-xl font-bold text-white">{item.title}</h3>
                   <p className="text-zinc-400 text-sm mb-2">{item.role} • {item.date}</p>
                   <p className="text-zinc-300 mb-4 leading-relaxed">
                      {item.description}
                   </p>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                      <Users size={12} />
                      {item.stats}
                   </div>
                </div>
             ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative h-64 sm:h-96 rounded-2xl overflow-hidden group border border-zinc-700/50"
        >
           {/* Image Placeholder for Event/Speaking */}
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
             alt="Speaking Event" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
           />
           <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white font-bold text-lg">Elabs Session</p>
              <p className="text-zinc-400 text-sm">Teaching Frontend Fundamentals</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaking;
