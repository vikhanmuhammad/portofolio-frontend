import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const canvasRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        const colors = [
          `rgba(59, 130, 246, ${this.opacity})`,
          `rgba(139, 92, 246, ${this.opacity})`,
          `rgba(6, 182, 212, ${this.opacity})`
        ];
        const colorIndex = Math.floor(this.x % 3);
        ctx.fillStyle = colors[colorIndex];
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const opacity = 0.2 * (1 - distance / 150);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  // font size based on screen width
  const getHeadingSize = () => (windowWidth < 768 ? '2rem' : '3rem');
  const getSubHeadingSize = () => (windowWidth < 768 ? '1rem' : '1.5rem');

  return (
    <section
      className="hero-section"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '0 16px' }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div
            style={{
              display: 'inline-block',
              background: 'var(--accent-bg)',
              color: 'var(--accent-primary)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: windowWidth < 768 ? '12px' : '14px',
              fontWeight: '600',
              marginBottom: '20px'
            }}
          >
            Available for new opportunities
          </div>
        </motion.div>

        <motion.h1
          style={{ fontSize: getHeadingSize(), marginBottom: '16px', lineHeight: 1.2 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm <span style={{ color: 'var(--accent-primary)' }}>{personalInfo.name}</span>
        </motion.h1>

        <motion.h2
          style={{ fontSize: getSubHeadingSize(), color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '32px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {personalInfo.tagline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}
        >
          <button className="btn-primary" onClick={scrollToContact}>
            Contact Me <ArrowRight size={20} />
          </button>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="btn-secondary">
              <Github size={20} /> View GitHub
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Linkedin size={24} />
          </a>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Github size={24} />
          </a>
          <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
      >
        <div style={{ width: '20px', height: '36px', border: '2px solid var(--border-primary)', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
          <div style={{ width: '4px', height: '8px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
