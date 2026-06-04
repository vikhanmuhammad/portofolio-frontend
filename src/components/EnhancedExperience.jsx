import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolioData';

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
    <section
      id="experience"
      className="section"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {/* Section Title */}
          <div className="section-title">
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              Work <span className="accent">Experience</span>
            </motion.h2>
            <motion.p
              className="body-lg"
              style={{ maxWidth: '600px', margin: '0 auto' }}
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              My professional journey and key achievements
            </motion.p>
          </div>

          {/* Experience Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={!isMobile ? { y: -4 } : {}}
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  padding: isMobile ? '20px' : '28px 32px',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: '3px solid var(--accent-primary)',
                  position: 'relative',
                  transition: 'box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile)
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: '20px',
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      background: 'var(--accent-bg)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Briefcase size={24} color="var(--accent-primary)" />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: isMobile ? '17px' : '20px',
                        fontWeight: '700',
                        marginBottom: '4px',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {exp.role}
                    </h3>

                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        marginBottom: '10px',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {exp.company}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '16px',
                        marginBottom: '12px',
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        marginBottom: exp.achievements?.length ? '12px' : 0,
                        fontSize: '14px',
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements?.length > 0 && (
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                        }}
                      >
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              fontSize: '13px',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            <span
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                                marginTop: '7px',
                                flexShrink: 0,
                              }}
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
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

export default EnhancedExperience;
