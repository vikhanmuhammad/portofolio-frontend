import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--divider)' }}>
      <div
        className="container"
        style={{
          padding: '20px 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          color: 'var(--text-faint)',
        }}
      >
        <span>{`// crafted with ♥ & lots of ☕ — ${personalInfo.name} © ${year}`}</span>
        <span style={{ color: 'var(--code-comment)' }}>return &lt;Portfolio /&gt;;</span>
      </div>
    </footer>
  );
};

export default Footer;
