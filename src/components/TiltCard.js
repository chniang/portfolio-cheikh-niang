import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Subtle 3D tilt following the cursor — transform-only, no layout thrashing.
function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
