import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { isMobileDevice } from '../utils/deviceDetection';

const SmoothScroll = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable smooth scroll on mobile for better performance
    const mobile = isMobileDevice();
    setIsMobile(mobile);
    
    if (mobile) return; // Skip smooth scroll on mobile

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;