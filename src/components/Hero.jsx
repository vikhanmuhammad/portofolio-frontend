import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { textReveal, magneticButton } from '../utils/animations';
import Interactive3DScene from './Interactive3DScene';
import { isMobileDevice, getParticleCount } from '../utils/deviceDetection';

const Hero = () => {
  const isMobile = isMobileDevice(); // ← ADD THIS
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = getParticleCount();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        const colors = [
          `rgba(59, 130, 246, ${this.opacity * (0.5 + Math.sin(this.pulse) * 0.5)})`,
          `rgba(139, 92, 246, ${this.opacity * (0.5 + Math.sin(this.pulse) * 0.5)})`,
          `rgba(6, 182, 212, ${this.opacity * (0.5 + Math.sin(this.pulse) * 0.5)})`
        ];

        const colorIndex = Math.floor(this.x % 3);
        ctx.fillStyle = colors[colorIndex];
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 15;
        ctx.shadowColor = colors[colorIndex];
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const opacity = 0.3 * (1 - distance / 150);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
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
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, windowWidth]);

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const getHeadingSize = () => (windowWidth < 768 ? '2.5rem' : '4rem');
  const getSubHeadingSize = () => (windowWidth < 768 ? '1.1rem' : '1.8rem');

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
        padding: '0 16px'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.6
        }}
      >
        <Interactive3DScene />
      </div>

      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.7
        }}
      />

      {/* Floating Orbs */}
      {!isMobile && (
        <>
          <motion.div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 2
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          <motion.div
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '15%',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 2
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, -25, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          />
        </>
      )}

      {/* 3D Tilt Wrapper */}
      <motion.div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          perspective: '1000px',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Badge */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(59, 130, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: 'var(--accent-primary)',
              padding: '8px 20px',
              borderRadius: '30px',
              fontSize: windowWidth < 768 ? '12px' : '14px',
              fontWeight: '600',
              marginBottom: '24px',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              <Sparkles size={16} />
            </motion.div>
            Available for new opportunities
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          style={{
            fontSize: getHeadingSize(),
            marginBottom: '20px',
            lineHeight: 1.2,
            fontWeight: '800',
            letterSpacing: '-0.02em'
          }}
          initial={isMobile ? false : textReveal.initial}
          animate={isMobile ? {} : textReveal.animate}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm{' '}
          <motion.span
            style={{
              color: 'var(--accent-primary)',
              display: 'inline-block'
            }}
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
            }}
          >
            {personalInfo.name}
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          style={{
            fontSize: getSubHeadingSize(),
            color: 'var(--text-secondary)',
            fontWeight: 400,
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {personalInfo.tagline}
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}
        >
          <motion.button
            className="btn-primary"
            onClick={scrollToContact}
            {...magneticButton}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)'
            }}
            style={{
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {!isMobile && (
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                }}
                animate={{ left: ['100%', '-100%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            )}

            Contact Me <ArrowRight size={20} />
          </motion.button>

          <motion.a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <motion.button
              className="btn-secondary"
              {...magneticButton}
              whileHover={{
                borderColor: 'var(--accent-primary)',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)'
              }}
            >
              <Github size={20} /> View GitHub
            </motion.button>
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={isMobile ? false : { opacity: 0 }}
          animate={isMobile ? {} : { opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          {[Linkedin, Github, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              href={
                index === 0
                  ? personalInfo.socials.linkedin
                  : index === 1
                  ? personalInfo.socials.github
                  : `mailto:${personalInfo.email}`
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                y: -5,
                color: 'var(--accent-primary)',
                filter:
                  'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'
              }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
                cursor: 'pointer'
              }}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator — disabled on mobile */}
      {!isMobile && (
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            cursor: 'pointer'
          }}
          onClick={() =>
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <motion.div
            style={{
              width: '24px',
              height: '40px',
              border: '2px solid var(--accent-primary)',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px',
              backdropFilter: 'blur(10px)',
              background: 'rgba(59, 130, 246, 0.05)'
            }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              style={{
                width: '4px',
                height: '10px',
                background: 'var(--accent-primary)',
                borderRadius: '2px',
                boxShadow:
                  '0 0 10px rgba(59, 130, 246, 0.8)'
              }}
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
