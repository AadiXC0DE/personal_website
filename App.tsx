
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Speaking from './components/Speaking';
import Writing from './components/Writing';
import Contact from './components/Contact';
import TweetEmbed from './components/TweetEmbed';
import { ArrowRight, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Subtle noise texture for premium feel */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-50 mix-blend-overlay"></div>
      
      <Navbar />
      
      <div className="flex flex-col w-full overflow-hidden">
        <Hero />
        <BentoGrid />
        
        <Experience />

        {/* Cool Moments - Zig-Zag Layout */}
        <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full py-16">
             <h3 className="text-3xl font-bold text-zinc-900 text-center mb-16 flex items-center justify-center gap-2">
             <Sparkles className="text-amber-400" fill="currentColor" size={24} />
             Cool Moments
           </h3>
           
            <div className="flex flex-col gap-24">
                
                {/* Moment 1: Hero Motocorp (Tweet Left, Text Right) */}
                <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
                   <div className="w-full md:w-1/2 flex justify-center">
                      <TweetEmbed id="1985641417490968576" size="medium" />
                   </div>
                   <div className="w-full md:w-1/2 space-y-6">
                      <div className="w-12 h-1 bg-red-500 rounded-full"></div>
                      <h4 className="text-3xl font-bold text-zinc-900">Building for EICMA Milan</h4>
                      <p className="text-zinc-600 text-lg leading-relaxed">
                        As a Lead Developer for Hero MotoCorp, I collaborated with world-class designers to build multiple apps showcased at the <span className="font-bold text-zinc-900">EICMA event in Milan</span>. We focused heavily on micro-interactions and fluid animations to create a premium experience for the global stage.
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-red-600 uppercase tracking-wider">
                         Lead Dev • Design Systems <ArrowRight size={14} />
                      </div>
                   </div>
                </div>

                {/* Moment 2: Animation Tips (Text Left, Tweet Right) */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-16">
                   <div className="w-full md:w-1/2 flex justify-center">
                      <TweetEmbed id="1990460849212043513" size="medium" />
                   </div>
                   <div className="w-full md:w-1/2 space-y-6">
                      <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                      <h4 className="text-3xl font-bold text-zinc-900">The Art of Animation</h4>
                      <p className="text-zinc-600 text-lg leading-relaxed">
                        I believe the difference between good and great UI lies in the details. I regularly share insights on choosing the right <span className="font-bold text-zinc-900">animation curves</span> and timing functions. Small tweaks to easing can transform a rigid interface into something that feels organic and alive.
                      </p>
                       <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider">
                         Community • Education <ArrowRight size={14} />
                      </div>
                   </div>
                </div>

            </div>
        </section>

        <Projects />
        <Speaking />
        <Writing />
        <Contact />
      </div>
    </main>
  );
};

export default App;
