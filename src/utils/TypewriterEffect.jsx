import React, { useEffect } from 'react';
import { motion, useAnimate, stagger, useInView } from 'framer-motion';

export const TypewriterEffect = ({ text, className, cursorClassName }) => {
  // Split text into characters for individual animation
  const textArray = text.split('');
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        { opacity: 1, width: 'fit-content' },
        { delay: stagger(0.05), ease: 'easeInOut' }
      );
    }
  }, [isInView]);

  return (
    <div className={`inline ${className}`} ref={scope}>
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          className="opacity-0 text-black dark:text-white"
        >
          {char}
        </motion.span>
      ))}
      {/* Blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={`inline-block bg-blue-500 ${cursorClassName}`}
      />
    </div>
  );
};
