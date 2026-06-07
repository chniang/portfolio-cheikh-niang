import React from 'react';
import { motion } from 'framer-motion';

function AnimatedSection({ children, delay = 0, direction = 'up' }) {
  const variants = {
    up: { opacity: 0, y: 50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    zoom: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
