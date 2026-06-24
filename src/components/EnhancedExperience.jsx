import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolioData';

const expAccents = ['#FF9BB3', '#7FD89A', '#86C5FF', '#FFB347'];

const EnhancedExperience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="section-title">
            <span className="section-kicker">{'// work.log'}</span>
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              Work <span className="accent">Experience</span>
            </motion.h2>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: isMobile ? '7px' : '7px',
                top: '8px',
                bottom: '8px',
                width: '2px',
                background: 'repeating-linear-gradient(to bottom, var(--divider) 0, var(--divider) 6px, transparent 6px, transparent 12px)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {experience.map((exp, index) => {
                const accent = expAccents[index % expAccents.length];
                return (
                  <motion.div
                    key={exp.id}
                    initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
                    animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ position: 'relative', paddingLeft: '36px' }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: accent,
                        border: '3px solid var(--bg-secondary)',
                        boxShadow: `0 0 0 2px ${accent}40`,
                      }}
                    />

                    <motion.div
                      whileHover={!isMobile ? { y: -4 } : {}}
                      style={{
                        background: 'var(--bg-primary)',
                        borderRadius: '14px',
                        padding: isMobile ? '20px' : '24px 28px',
                        border: '1px solid var(--border-subtle)',
                        borderLeft: `3px solid ${accent}`,
                      }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px', marginBottom: '6px' }}>
                        <h3 style={{ fontSize: isMobile ? '16px' : '19px', fontWeight: '700', color: 'var(--text-primary)' }}>
                          {exp.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '20px',
                            background: `${accent}1f`, color: accent, border: `1px solid ${accent}40`,
                            whiteSpace: 'nowrap', height: 'fit-content',
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <div style={{ fontSize: '14px', fontWeight: '600', color: accent, marginBottom: '10px' }}>
                        {exp.company}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                        <MapPin size={13} /> {exp.location}
                        <span style={{ marginLeft: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Calendar size={13} /> {exp.period}
                        </span>
                      </div>

                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: exp.achievements?.length ? '12px' : 0, fontSize: '13px' }}>
                        {exp.description}
                      </p>

                      {exp.achievements?.length > 0 && (
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                              <span style={{ color: accent, flexShrink: 0 }}>▸</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.technologies?.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="chip" style={{ fontSize: '11px' }}>{tech}</span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedExperience;
