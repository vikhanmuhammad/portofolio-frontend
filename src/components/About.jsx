import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Users, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const highlights = [
    { icon: Code2, label: 'Clean Code', value: '5+ Years' },
    { icon: Zap, label: 'Fast Delivery', value: '50+ Projects' },
    { icon: Users, label: 'Team Player', value: 'Collaborative' },
    { icon: Award, label: 'Quality First', value: 'Excellence' }
  ];

  const imgSize = isMobile ? '200px' : '300px';
  const iconSize = isMobile ? 20 : 24;
  const cardPadding = isMobile ? '12px' : '20px';
  const gapSize = isMobile ? '12px' : '16px';
  const fontLabel = isMobile ? '12px' : '14px';
  const fontValue = isMobile ? '14px' : '16px';

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <h2 style={{ fontSize: isMobile ? '28px' : '36px' }}>About <span className="accent">Me</span></h2>
            <p style={{ fontSize: isMobile ? '14px' : '16px', maxWidth: isMobile ? '90%' : '600px', margin: '0 auto' }}>
              Get to know more about my journey and what drives me
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
              gap: isMobile ? '32px' : '48px',
              alignItems: 'center',
              marginTop: '32px'
            }}
          >
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: 'fit-content' }}>
                <div style={{
                  position: 'absolute',
                  inset: '-8px',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-purple))',
                  borderRadius: '50%',
                  opacity: 0.2,
                  filter: 'blur(20px)',
                  animation: 'glow 3s ease-in-out infinite'
                }}></div>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  style={{
                    width: imgSize,
                    height: imgSize,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--accent-primary)',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 style={{ fontSize: isMobile ? '20px' : '24px', marginBottom: '16px', color: 'var(--accent-primary)' }}>
                {personalInfo.title}
              </h3>
              <p style={{ fontSize: isMobile ? '14px' : '16px', marginBottom: '24px', lineHeight: '1.6' }}>
                {personalInfo.bio}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: gapSize }}>
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: cardPadding,
                        display: 'flex',
                        alignItems: 'center',
                        gap: gapSize,
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--accent-bg)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)'
                      }}>
                        <Icon size={iconSize} />
                      </div>
                      <div>
                        <div style={{ fontSize: fontLabel, color: 'var(--text-muted)', marginBottom: '2px' }}>{item.label}</div>
                        <div style={{ fontSize: fontValue, fontWeight: '600', color: 'var(--text-primary)' }}>{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
