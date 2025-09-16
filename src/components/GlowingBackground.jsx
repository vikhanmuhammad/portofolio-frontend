// src/components/GlowingBackground.jsx
import React, { useState, useEffect } from 'react';

const GlowingBackground = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [/*windowSize,*/ setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Update ukuran window agar gradient selalu full page
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {//
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(23, 34, 99, 0.2), transparent 15%),
          radial-gradient(circle at ${mousePos.x / 2}px ${mousePos.y / 2}px, rgba(0, 255, 255, 0.15), transparent 20%),
          #0A0F2D
        `,
        transition: 'background 0.15s ease-out',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default GlowingBackground;
