import React, { useRef } from 'react';

// Wraps children in a card whose background glow follows the cursor.
// Pure CSS custom-property update on mousemove — no blur-heavy compositing.
function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}

export default SpotlightCard;
