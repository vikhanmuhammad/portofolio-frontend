import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { engineeringSkills, skillCategories } from '../data/portfolioData';

const categories = ['expert', 'advanced', 'intermediate', 'basic'];

const EnhancedEngineeringSkills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 50 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <span className="section-kicker">{'// skills/'}</span>
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Engineering <span className="accent">Skills</span>
            </motion.h2>
          </div>

          {/* Core competencies panel */}
          <div className="term-window" style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <div className="term-header">
              <span className="term-dot" style={{ background: 'var(--tl-red)' }} />
              <span className="term-dot" style={{ background: 'var(--tl-yellow)' }} />
              <span className="term-dot" style={{ background: 'var(--tl-green)' }} />
              <span className="term-title">core_competencies.sh</span>
            </div>
            <div className="term-body">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '20px 32px',
                }}
              >
                {engineeringSkills.map((skill, index) => {
                  const color = skillCategories[skill.category]?.color || 'var(--accent-primary)';
                  return (
                    <div key={skill.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                        <span style={{ color, fontWeight: '700' }}>{skill.level}%</span>
                      </div>
                      <div style={{ height: '6px', background: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 + index * 0.06, ease: 'easeOut' }}
                          style={{ height: '100%', background: color, borderRadius: '4px' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Category cards */}
          <div className="grid grid-4">
            {categories.map((category, index) => {
              const data = skillCategories[category];
              return (
                <motion.div
                  key={category}
                  initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={!isMobile ? { y: -4 } : {}}
                  className="card"
                  style={{ padding: '24px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: data.color, flexShrink: 0 }} />
                    <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                      {data.label}
                    </h3>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {data.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {data.skills.map((skill) => (
                      <span key={skill} className="chip" style={{ fontSize: '11px' }}>{skill}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedEngineeringSkills;
