import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-24 border-t border-zinc-100 bg-zinc-50/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">Let's build something meaningful.</h2>
          <p className="text-lg text-zinc-600 mb-8">
            Got a project in mind? I'm always open to discussing new ideas, 
            engineering challenges, or just chatting about the future of tech.
          </p>
          
          <a 
            href="mailto:aadityaz2077@gmail.com" 
            className="inline-block text-2xl sm:text-3xl font-mono font-semibold text-zinc-900 hover:text-zinc-600 border-b-2 border-zinc-900 hover:border-zinc-600 transition-colors mb-12"
          >
            aadityaz2077@gmail.com
          </a>

          <div className="flex justify-center gap-4 sm:gap-8 mb-16">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 transition-colors flex flex-col items-center gap-2 group"
              >
                <span className="p-3 bg-white border border-zinc-200 rounded-full shadow-sm group-hover:shadow-md transition-all">
                  {social.icon}
                </span>
                <span className="text-xs font-medium">{social.name}</span>
              </a>
            ))}
          </div>

          <footer className="text-xs text-zinc-400 pb-24">
            <p>&copy; {new Date().getFullYear()} Aaditya Chowdhury. All rights reserved.</p>
            <p className="mt-2">Designed & Engineered with precision.</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;