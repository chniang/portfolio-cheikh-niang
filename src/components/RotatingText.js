import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Cycles through a list of role labels with a smooth vertical swap.
function RotatingText({ words, interval = 2400, className = '' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`inline-block relative ${className}`} style={{ minWidth: '1ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-block text-gradient bg-[length:300%_100%] animate-gradient-x"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default RotatingText;
