import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

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

          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: window.innerWidth > 768 ? '50%' : '24px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--border-primary)',
              transform: window.innerWidth > 768 ? 'translateX(-50%)' : 'none'
            }}></div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{
                  position: 'relative',
                  marginBottom: index < education.length - 1 ? '80px' : '0',
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                  gap: '48px',
                  alignItems: 'center'
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: window.innerWidth > 768 ? '50%' : '24px',
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
                  gridColumn: window.innerWidth > 768 ? (index % 2 === 0 ? '1' : '2') : '1',
                  textAlign: window.innerWidth > 768 ? (index % 2 === 0 ? 'right' : 'left') : 'left',
                  paddingLeft: window.innerWidth <= 768 ? '64px' : '0'
                }}>
                  <div className="card" style={{
                    textAlign: 'left',
                    cursor: 'default'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      background: 'var(--accent-bg)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <GraduationCap size={28} color="var(--accent-primary)" />
                    </div>

                    <h3 className="h3" style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>{edu.degree}</h3>
                    <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '12px' }}>{edu.university}</div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    <div style={{ 
                      display: 'inline-block',
                      background: 'var(--bg-tertiary)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--accent-primary)',
                      marginBottom: '16px'
                    }}>
                      GPA: {edu.gpa}
                    </div>

                    <div style={{ marginTop: '16px' }}>
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '8px',
                          color: 'var(--text-secondary)',
                          fontSize: '14px'
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