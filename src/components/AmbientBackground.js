import React from 'react';

// Fixed, ambient animated gradient blobs behind all pages.
// transform/opacity only (Tailwind `animate-blob`) — cheap on low-end GPUs.
function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="bg-blob w-[500px] h-[500px] bg-[#00D9FF] top-[-10%] left-[10%] animate-blob" />
      <div className="bg-blob w-[450px] h-[450px] bg-[#667EEA] top-[30%] right-[-5%] animate-blob-slow" />
      <div className="bg-blob w-[400px] h-[400px] bg-[#FF3DAE] bottom-[-10%] left-[25%] animate-blob" style={{ animationDelay: '4s' }} />
    </div>
  );
}

export default AmbientBackground;
