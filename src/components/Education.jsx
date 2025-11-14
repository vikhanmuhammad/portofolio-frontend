import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lineLeft = isMobile ? '24px' : '50%';
  const lineTransform = isMobile ? 'none' : 'translateX(-50%)';
  const cardPadding = isMobile ? '16px' : '0';
  const textAlign = isMobile ? 'left' : undefined;
  const gap = isMobile ? '32px' : '48px';

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <h2>Education <span className="accent">Timeline</span></h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>My academic journey and achievements</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', marginTop: '32px' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: lineLeft,
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--border-primary)',
              transform: lineTransform
            }}></div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: isMobile ? 0 : index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{
                  position: 'relative',
                  marginBottom: index < education.length - 1 ? gap : '0',
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: gap,
                  alignItems: 'center'
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: lineLeft,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '20px',
                  height: '20px',
                  background: 'var(--accent-primary)',
                  borderRadius: '50%',
                  border: '4px solid var(--bg-secondary)',
                  zIndex: 1,
                  boxShadow: '0 0 20px rgba(218, 255, 1, 0.5)'
                }}></div>

                <div style={{
                  gridColumn: isMobile ? '1' : index % 2 === 0 ? '1' : '2',
                  textAlign: isMobile ? 'left' : index % 2 === 0 ? 'right' : 'left',
                  paddingLeft: isMobile ? '64px' : cardPadding
                }}>
                  <div className="card" style={{ textAlign: 'left', cursor: 'default' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--accent-bg)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}>
                      <GraduationCap size={isMobile ? 24 : 28} color="var(--accent-primary)" />
                    </div>

                    <h3 className="h3" style={{ marginBottom: '8px', color: 'var(--text-primary)', fontSize: isMobile ? '16px' : '18px' }}>{edu.degree}</h3>
                    <div style={{ fontSize: isMobile ? '14px' : '18px', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '8px' }}>{edu.university}</div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px', fontSize: isMobile ? '12px' : '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                        <Calendar size={14} />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    <div style={{ 
                      display: 'inline-block',
                      background: 'var(--bg-tertiary)',
                      padding: '4px 8px',
                      borderRadius: '8px',
                      fontSize: isMobile ? '12px' : '14px',
                      fontWeight: '600',
                      color: 'var(--accent-primary)',
                      marginBottom: '12px'
                    }}>
                      GPA: {edu.gpa}
                    </div>

                    <div style={{ marginTop: '8px' }}>
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginBottom: '6px',
                          color: 'var(--text-secondary)',
                          fontSize: isMobile ? '12px' : '14px'
                        }}>
                          <div style={{ width: '6px', height: '6px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
                          <span>{highlight}</span>
                        </div>
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

export default Education;