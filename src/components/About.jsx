import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Users, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const highlights = [
    { icon: Code2, label: 'Clean Code', value: '5+ Years' },
    { icon: Zap, label: 'Fast Delivery', value: '50+ Projects' },
    { icon: Users, label: 'Team Player', value: 'Collaborative' },
    { icon: Award, label: 'Quality First', value: 'Excellence' }
  ];

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
            <h2>About <span className="accent">Me</span></h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>Get to know more about my journey and what drives me</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1.5fr' : '1fr', gap: '48px', alignItems: 'center' }}>
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
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--accent-primary)',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="h1" style={{ marginBottom: '24px', color: 'var(--accent-primary)' }}>{personalInfo.title}</h3>
              <p className="body-lg" style={{ marginBottom: '32px', lineHeight: '1.8' }}>
                {personalInfo.bio}
              </p>

              <div className="grid grid-2" style={{ gap: '16px' }}>
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
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--accent-bg)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)'
                      }}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>{item.label}</div>
                        <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>{item.value}</div>
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