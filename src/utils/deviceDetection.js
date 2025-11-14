// Device detection utilities

export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
  
  export const isTouchDevice = () => {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  };
  
  export const isLowPowerDevice = () => {
    // Check if device is low power (mobile or has fewer cores)
    const cores = navigator.hardwareConcurrency || 4;
    return isMobileDevice() || cores < 4;
  };
  
  export const getParticleCount = () => {
    if (isMobileDevice()) return 30; // Reduce from 100 to 30
    return 100;
  };
  
  export const shouldUseReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };