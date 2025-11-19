import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { ChevronDown, ChevronUp, CheckCircle2, Trophy, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { ExperienceItem, SubRole } from '../types';

const SubRoleCard: React.FC<{ sub: SubRole }> = ({ sub }) => (
  <div className="group relative pl-6 border-l-2 border-zinc-100 hover:border-zinc-300 transition-colors duration-300 pb-8 last:pb-0">
    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-200 rounded-full group-hover:bg-zinc-400 transition-colors" />
    
    <div className="flex flex-col sm:flex-row gap-4 items-start">
        {sub.logoUrl && (
            <div className="w-10 h-10 rounded-lg border border-zinc-100 bg-white p-1 shrink-0 flex items-center justify-center shadow-sm mt-1">
                <img src={sub.logoUrl} alt={sub.title} className="w-full h-full object-contain" />
            </div>
        )}
        <div className="flex-1">
             <h4 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                {sub.title}
                <ArrowRight size={14} className="text-zinc-400" />
                <span className="text-zinc-600 font-medium">{sub.role}</span>
            </h4>
            <p className="text-sm text-zinc-700 mt-2 mb-3 leading-relaxed max-w-2xl font-medium">
                {sub.description}
            </p>
            <div className="flex flex-wrap gap-2">
            {sub.stack?.map((s) => (
                <span key={s} className="text-[10px] font-bold text-zinc-500 bg-zinc-50 border border-zinc-200 px-2 py-1 rounded-md">
                {s}
                </span>
            ))}
            </div>
        </div>
    </div>
  </div>
);

const ExperienceCard: React.FC<{ exp: ExperienceItem; index: number }> = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="group relative pl-8 sm:pl-12 pb-16 last:pb-0">
      {/* Timeline Line */}
      <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-0 w-[2px] bg-zinc-100 group-last:hidden" />
      
      {/* Timeline Dot */}
      <div className="absolute left-0 sm:left-1 top-2 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white border-4 border-zinc-50 shadow-sm z-10 flex items-center justify-center text-zinc-400">
        <Briefcase size={14} />
      </div>

      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl border border-zinc-200 bg-white p-2 shrink-0 flex items-center justify-center overflow-hidden">
                {exp.logoUrl ? (
                    <img src={exp.logoUrl} alt={exp.company} className="w-full h-full object-contain" />
                ) : (
                    <Building2 className="text-zinc-400" size={24} />
                )}
            </div>
            <div>
                <h3 className="text-xl font-bold text-zinc-900">{exp.company}</h3>
                <div className="flex items-center gap-2 text-sm text-zinc-500 font-bold mt-1">
                    <span>{exp.role}</span>
                    <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <span>{exp.location}</span>
                </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 pl-[4.5rem] sm:pl-0">
             {exp.company.includes("Symmulate") && (
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-100 flex items-center gap-1">
                  <Trophy size={12} /> Acquired
                </span>
             )}
             <span className="text-sm font-mono text-zinc-600 font-medium bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-200 whitespace-nowrap">
              {exp.period}
            </span>
          </div>
        </div>
        
        {/* Main Description if Exists */}
        {exp.description && (
          <div className="text-zinc-700 text-base font-medium leading-relaxed mb-6 max-w-3xl pl-4 border-l-2 border-zinc-200 italic">
            {exp.description}
          </div>
        )}

        {/* Tech Stack */}
        {exp.techStack && (
          <div className="flex flex-wrap gap-2 mb-6 pl-2">
            {exp.techStack.map((tech) => (
              <span key={tech} className="text-xs font-bold text-zinc-600 bg-white border border-zinc-200 px-3 py-1 rounded-full shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Highlights (Bullet points) */}
        {exp.highlights && (
          <ul className="mb-8 space-y-3 bg-zinc-50/50 p-6 rounded-2xl border border-zinc-100">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-700 text-sm font-medium leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Sub Roles Container */}
        {exp.subRoles && (
          <div className="mt-8">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 mb-6 text-xs font-bold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-wider ml-2"
            >
              {isExpanded ? 'Collapse Projects' : 'View Key Projects'}
              <div className="p-1 bg-zinc-100 rounded-full">
                 {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden pl-2"
                >
                  <div className="pl-4">
                    {exp.subRoles.map((sub, idx) => (
                      <SubRoleCard key={idx} sub={sub} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-3 sm:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-16">
           <h2 className="text-4xl font-bold text-zinc-900">Experience</h2>
           <div className="h-px flex-1 bg-zinc-200"></div>
        </div>
        
        <div className="mt-8">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;