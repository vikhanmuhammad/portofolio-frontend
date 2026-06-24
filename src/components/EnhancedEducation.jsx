import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

const EnhancedEducation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 50 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <span className="section-kicker">{'// edu.json'}</span>
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Education <span className="accent">Timeline</span>
            </motion.h2>
          </div>

          <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.1 }}
                whileHover={!isMobile ? { y: -4 } : {}}
                style={{
                  background: `linear-gradient(135deg, var(--edu-surface-from), var(--edu-surface-to))`,
                  border: '1px solid var(--edu-border)',
                  borderRadius: '20px',
                  padding: isMobile ? '28px 22px' : '40px',
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
                  gap: '28px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '34px', marginBottom: '14px' }}>🎓</div>
                  <h3 style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    {edu.degree}
                  </h3>
                  <div style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '14px' }}>
                    {edu.university}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '18px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={14} /> {edu.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} /> {edu.year}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {edu.highlights.map((highlight, i) => (
                      <span key={i} className="chip">{highlight}</span>
                    ))}
                  </div>
                </div>

                <div style={{ textAlign: isMobile ? 'left' : 'center', paddingLeft: isMobile ? 0 : '24px', borderLeft: isMobile ? 'none' : '1px solid var(--edu-border)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-faint)', marginBottom: '6px' }}>GPA</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: isMobile ? '32px' : '44px', fontWeight: '700', color: 'var(--accent-primary)' }}>
                    {edu.gpa}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedEducation;
