import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cpu, Globe, Palette, Rocket, Twitter, MessageCircle } from 'lucide-react';

const StatCard = ({ title, value, desc }: { title: string; value: string; desc: string }) => (
  <div className="p-6 bg-white rounded-3xl border border-zinc-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:border-zinc-200 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-center">
    <h3 className="text-zinc-500 text-sm font-medium mb-1">{title}</h3>
    <div className="text-4xl font-bold text-zinc-900 mb-2 tracking-tight">{value}</div>
    <p className="text-zinc-400 text-xs font-medium">{desc}</p>
  </div>
);

const SkillTag = ({ icon: Icon, label, color }: { icon: any; label: string; color: string }) => (
  <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-50 border border-zinc-100 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default group">
    <div className={`p-1 rounded-md ${color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
      <Icon size={12} className={color.replace('bg-', 'text-')} />
    </div>
    <span className="text-xs text-zinc-700 font-medium">{label}</span>
  </div>
);

const GitHubGrid = () => {
  const weeks = 30;
  const days = 7;
  
  return (
    <div className="flex gap-1 justify-end">
      {Array.from({ length: weeks }).map((_, i) => (
        <div key={i} className="flex flex-col gap-1">
          {Array.from({ length: days }).map((_, j) => {
             const val = Math.random();
             let color = 'bg-zinc-800';
             if (val > 0.75) color = 'bg-emerald-500';
             else if (val > 0.65) color = 'bg-emerald-700';
             else if (val > 0.3) color = 'bg-emerald-900';
             
             return (
               <div key={j} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] ${color} transition-all hover:opacity-80`} />
             )
          })}
        </div>
      ))}
    </div>
  );
};

const SocialProofCard = () => (
  <a href="https://x.com/AadiChowdhury7" target="_blank" rel="noreferrer" className="block p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2rem] text-white relative overflow-hidden group hover:scale-[1.02] transition-transform h-full">
    <div className="absolute top-0 right-0 p-4 opacity-20">
      <Twitter size={100} />
    </div>
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-full">
          <MessageCircle size={16} />
        </div>
        <span className="font-medium text-blue-100 text-sm">Build in Public</span>
      </div>
      <p className="text-base font-medium leading-relaxed mb-2">
        "Sharing my journey of building impactful software. Follow along."
      </p>
      <div className="flex items-center gap-2 text-xs font-semibold bg-white/10 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
        <span>@AadiChowdhury7</span>
      </div>
    </div>
  </a>
);

const BentoGrid: React.FC = () => {
  return (
    <section id="about" className="py-10 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Bio - Large Card */}
        <div className="md:col-span-2 p-6 sm:p-8 bg-white rounded-[2rem] border border-zinc-200 shadow-sm relative overflow-hidden group flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-zinc-50 to-transparent rounded-bl-[100%] -z-0 transition-transform group-hover:scale-110" />
          
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Palette className="text-purple-500" size={20} />
              Engineering + Design
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6 text-sm sm:text-base max-w-lg">
              I bridge the gap between engineering and design. My work focuses on performance, accessibility, and creating "magical" interactions.
            </p>
            <div className="flex flex-wrap gap-2">
               <SkillTag icon={Layout} label="React/Next.js" color="bg-blue-500" />
               <SkillTag icon={Terminal} label="TypeScript" color="bg-sky-500" />
               <SkillTag icon={Code2} label="Tailwind" color="bg-cyan-500" />
               <SkillTag icon={Cpu} label="Node.js" color="bg-green-500" />
               <SkillTag icon={Globe} label="Three.js" color="bg-indigo-500" />
               <SkillTag icon={Rocket} label="LLMs" color="bg-orange-500" />
            </div>
          </div>
        </div>

        {/* Stats & Social Column */}
        <div className="grid grid-rows-2 gap-4">
          <StatCard title="Experience" value="3+ Years" desc="Building & Shipping Software" />
          <SocialProofCard />
        </div>

        {/* GitHub Card */}
        <div className="md:col-span-3 p-8 bg-zinc-950 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative shadow-2xl shadow-zinc-900/20 border border-zinc-800">
          <div className="z-10 max-w-md">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
               <Code2 size={18} />
               <span className="text-sm font-mono font-medium">git commit -m "impact"</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Open Source Contributor</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Active on GitHub with contributions to various repositories. 
              Building tools that help other developers.
            </p>
             <a 
              href="https://github.com/AadiXC0DE" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-200 transition-colors text-sm"
            >
              View GitHub
            </a>
          </div>
          <div className="scale-100 opacity-100">
             <GitHubGrid />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BentoGrid;