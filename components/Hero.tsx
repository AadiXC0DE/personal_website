
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { SOCIALS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-12 pb-12 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Vibrant Aurora Background Gradients - Enhanced */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-[120px] -z-10 mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-emerald-500/10 via-teal-500/10 to-transparent rounded-full blur-[100px] -z-10 mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          {/* Availability Ticker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-600 text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide text-xs uppercase">Available for new projects</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 mb-6 font-sans leading-[1.1]">
            I bring ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
              to life.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed mb-8 font-light">
            Hi, I'm <span className="font-semibold text-zinc-900">Aaditya Chowdhury</span>. 
            Software Engineer & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Design Engineer</span>. I build fast MVPs, AI tools, and delightful UIs.
            <span className="block mt-4 text-zinc-500 text-base">
              From napkin sketch to shipped product. If you need something useful on the web, I can build it.
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://calendly.com/aadityaz2077/one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-medium hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/20 hover:shadow-2xl hover:shadow-zinc-900/30 hover:-translate-y-1"
            >
              Schedule a call
              <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm hover:shadow-md"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 transition-colors transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] transition-all duration-500">
                {/* Background Blob */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[3rem] rotate-6 opacity-20 blur-lg scale-95"></div>

                {/* Profile Image */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl shadow-zinc-200/50 rotate-3 hover:rotate-0 transition-all duration-500 group bg-zinc-50 z-10">
                    <img 
                        src="https://github.com/AadiXC0DE.png" 
                        alt="Aaditya Chowdhury" 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aaditya';
                        }}
                    />
                </div>

                {/* Floating Stat Card - 50+ Products (Static) */}
                <div 
                    className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 flex items-center gap-3 z-20"
                >
                    <div className="p-2.5 bg-zinc-900 text-white rounded-xl">
                        <Rocket size={20} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-zinc-900 leading-none">50+</p>
                        <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wide mt-0.5">Products Shipped</p>
                    </div>
                </div>

                {/* Role Badge */}
                 <div className="absolute top-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100 flex items-center gap-2.5 rotate-6 z-20">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 uppercase tracking-wider">Design Engineer</span>
               </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
