import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <h2>Work <span className="accent">Experience</span></h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>My professional journey and achievements</p>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto', marginTop: '32px' }}>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card"
                style={{
                  marginBottom: isMobile ? '24px' : '32px',
                  cursor: 'default'
                }}
              >
                <div style={{
                  display: 'flex',
                  gap: isMobile ? '16px' : '24px',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>
                  <div style={{
                    width: isMobile ? '60px' : '80px',
                    height: isMobile ? '60px' : '80px',
                    background: 'var(--accent-bg)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Briefcase size={isMobile ? 28 : 36} color="var(--accent-primary)" />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: isMobile ? '12px' : '16px' }}>
                      <h3 className="h2" style={{
                        marginBottom: '8px',
                        color: 'var(--text-primary)',
                        fontSize: isMobile ? '16px' : '20px'
                      }}>{exp.title}</h3>
                      <div style={{
                        fontSize: isMobile ? '14px' : '18px',
                        fontWeight: '600',
                        color: 'var(--accent-primary)',
                        marginBottom: '8px'
                      }}>{exp.company}</div>

                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '12px',
                        fontSize: isMobile ? '12px' : '14px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                          <MapPin size={isMobile ? 14 : 16} />
                          <span>{exp.location}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                          <Calendar size={isMobile ? 14 : 16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="body-md" style={{ marginBottom: isMobile ? '12px' : '20px', lineHeight: '1.6', fontSize: isMobile ? '14px' : '16px' }}>{exp.description}</p>

                    <div style={{ marginBottom: isMobile ? '12px' : '20px' }}>
                      <h4 style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: 'var(--text-primary)'
                      }}>Key Achievements:</h4>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          marginBottom: '6px',
                          color: 'var(--text-secondary)',
                          fontSize: isMobile ? '12px' : '14px'
                        }}>
                          <ChevronRight size={isMobile ? 14 : 16} color="var(--accent-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} style={{
                          padding: isMobile ? '4px 10px' : '6px 14px',
                          background: 'var(--bg-tertiary)',
                          borderRadius: '8px',
                          fontSize: isMobile ? '12px' : '13px',
                          fontWeight: '500',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = 'var(--accent-primary)';
                          e.target.style.color = 'var(--accent-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = 'var(--border-subtle)';
                          e.target.style.color = 'var(--text-secondary)';
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;