import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const heroRef = useRef(null);
  const spotRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cursor spotlight — direct DOM update, zero re-renders
  useEffect(() => {
    const hero = heroRef.current;
    const spot = spotRef.current;
    if (!hero || !spot) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.left = `${x}px`;
      spot.style.top = `${y}px`;
      spot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      spot.style.opacity = '0';
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const headingSize =
    windowWidth < 360 ? '1.75rem' :
    windowWidth < 480 ? '2rem' :
    windowWidth < 768 ? '2.6rem' :
    '3.8rem';

  const subHeadingSize =
    windowWidth < 480 ? '0.95rem' :
    windowWidth < 768 ? '1.05rem' :
    '1.35rem';

  return (
    <section
      ref={heroRef}
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid */}
      <div className="hero-bg-grid" />

      {/* Cursor spotlight — follows mouse via direct DOM, no re-render */}
      <div
        ref={spotRef}
        style={{
          position: 'absolute',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, var(--hero-spot-color) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '40%',
          opacity: 0,
          transition: 'left 0.18s ease, top 0.18s ease, opacity 0.4s ease',
        }}
      />

      {/* Static top-center soft glow */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '360px',
          background:
            'radial-gradient(ellipse at center top, var(--hero-spot-color) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          textAlign: 'center',
          padding: windowWidth < 480 ? '100px 14px 60px' : '100px 24px 60px',
        }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '28px' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(34, 197, 94, 0.07)',
              border: '1px solid rgba(34, 197, 94, 0.22)',
              color: 'rgb(74, 222, 128)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: windowWidth < 480 ? '12px' : '13px',
              fontWeight: '500',
              letterSpacing: '0.01em',
            }}
          >
            <span className="status-dot" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            fontSize: headingSize,
            marginBottom: '16px',
            lineHeight: 1.15,
            fontWeight: '800',
            letterSpacing: '-0.02em',
          }}
        >
          Hi, I'm{' '}
          <span style={{ color: 'var(--accent-primary)' }}>
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{
            fontSize: subHeadingSize,
            color: 'var(--text-secondary)',
            fontWeight: 400,
            maxWidth: '580px',
            margin: '0 auto 40px',
            lineHeight: 1.65,
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          <button className="btn-primary" onClick={scrollToContact}>
            Contact Me <ArrowRight size={18} />
          </button>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button className="btn-secondary">
              <Github size={18} /> View GitHub
            </button>
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {[
            { Icon: Linkedin, href: personalInfo.socials.linkedin },
            { Icon: Github, href: personalInfo.socials.github },
            { Icon: Mail, href: `mailto:${personalInfo.email}` },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          zIndex: 1,
          opacity: 0.45,
        }}
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <div
          style={{
            width: '22px',
            height: '36px',
            border: '2px solid var(--border-primary)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '8px',
              background: 'var(--text-muted)',
              borderRadius: '2px',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
