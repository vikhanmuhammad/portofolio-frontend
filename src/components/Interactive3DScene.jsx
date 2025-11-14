import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Interactive3DScene = () => {
  const containerRef = useRef(null);
  const [spheres, setSpheres] = useState([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const sphereRefs = useRef([]);

  useEffect(() => {
    // Create interactive spheres
    const newSpheres = [
      { id: 1, x: 50, y: 50, size: 200, color: 'rgba(59, 130, 246, 0.3)', speed: 0.02 },
      { id: 2, x: 20, y: 70, size: 150, color: 'rgba(139, 92, 246, 0.25)', speed: 0.015 },
      { id: 3, x: 80, y: 30, size: 180, color: 'rgba(6, 182, 212, 0.28)', speed: 0.018 },
    ];
    setSpheres(newSpheres);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mousePosition.current = { x, y };

      // Animate spheres to follow mouse
      sphereRefs.current.forEach((sphere, index) => {
        if (sphere) {
          const speed = spheres[index]?.speed || 0.02;
          const targetX = x + (index - 1) * 10;
          const targetY = y + (index - 1) * 10;
          
          gsap.to(sphere, {
            x: `${targetX - 50}%`,
            y: `${targetY - 50}%`,
            duration: 2,
            ease: 'power2.out'
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [spheres]);

  return (
    <div 
      ref={containerRef}
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0,
        overflow: 'hidden'
      }}
    >
      {spheres.map((sphere, index) => (
        <motion.div
          key={sphere.id}
          ref={(el) => (sphereRefs.current[index] = el)}
          style={{
            position: 'absolute',
            left: `${sphere.x}%`,
            top: `${sphere.y}%`,
            width: `${sphere.size}px`,
            height: `${sphere.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${sphere.color.replace('0.3', '0.4')}, ${sphere.color})`,
            filter: 'blur(40px)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            willChange: 'transform',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Interactive mesh grid */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <defs>
          <radialGradient id="dotGradient">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) =>
          Array.from({ length: 20 }).map((_, j) => (
            <motion.circle
              key={`${i}-${j}`}
              cx={`${(i / 19) * 100}%`}
              cy={`${(j / 19) * 100}%`}
              r="2"
              fill="url(#dotGradient)"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                r: [2, 3, 2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (i + j) * 0.1,
              }}
            />
          ))
        )}
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.6)',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default Interactive3DScene;