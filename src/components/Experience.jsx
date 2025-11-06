import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

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

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card"
                style={{
                  marginBottom: '32px',
                  cursor: 'default'
                }}
              >
                <div style={{ display: 'flex', gap: '24px', flexDirection: window.innerWidth > 768 ? 'row' : 'column' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--accent-bg)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Briefcase size={36} color="var(--accent-primary)" />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '16px' }}>
                      <h3 className="h2" style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>{exp.title}</h3>
                      <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '12px' }}>{exp.company}</div>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="body-md" style={{ marginBottom: '20px', lineHeight: '1.7' }}>{exp.description}</p>

                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>Key Achievements:</h4>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '8px',
                          color: 'var(--text-secondary)',
                          fontSize: '14px'
                        }}>
                          <ChevronRight size={16} color="var(--accent-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} style={{
                          padding: '6px 14px',
                          background: 'var(--bg-tertiary)',
                          borderRadius: '8px',
                          fontSize: '13px',
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