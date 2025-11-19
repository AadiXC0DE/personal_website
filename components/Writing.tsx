import React from 'react';
import { motion } from 'framer-motion';
import { WRITINGS } from '../constants';

const Writing: React.FC = () => {
  return (
    <section id="writing" className="py-20 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-zinc-900 mb-12">Writings</h2>
      
      <div className="space-y-2">
        {WRITINGS.map((post, index) => (
          <motion.a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block py-6 border-b border-zinc-100 hover:bg-zinc-50 transition-colors -mx-4 px-4 rounded-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono shrink-0">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <p className="text-sm text-zinc-500 max-w-2xl mb-3">
              {post.description}
            </p>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Writing;