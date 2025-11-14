import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { isTouchDevice } from '../utils/deviceDetection';

const MobileOptimizedCursor = () => {
  const [isTouch, setIsTouch] = useState(false);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if touch device and disable cursor
    if (isTouchDevice()) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      
      if (cursorDotRef.current) {
        gsap.to(cursorDotRef.current, {
          x: e.clientX - 4,
          y: e.clientY - 4,
          duration: 0,
        });
      }
    };
    
    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          duration: 0.3,
        });
      }
    };
    
    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('button, a').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('button, a').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Don't render cursor on touch devices
  if (isTouch) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          position: 'fixed',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid var(--accent-primary)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
        }}
      />
    </>
  );
};

export default MobileOptimizedCursor;