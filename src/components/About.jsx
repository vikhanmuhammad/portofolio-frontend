import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, skillCategories } from '../data/portfolioData';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tags = skillCategories.expert.skills.slice(0, 6);

  return (
    <section
      id="about"
      className="section"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 50 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <span className="section-kicker">{'// about_me'}</span>
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About <span className="accent">Me</span>
            </motion.h2>
          </div>

          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="term-window"
            style={{ maxWidth: '780px', margin: '0 auto' }}
          >
            <div className="term-header">
              <span className="term-dot" style={{ background: 'var(--tl-red)' }} />
              <span className="term-dot" style={{ background: 'var(--tl-yellow)' }} />
              <span className="term-dot" style={{ background: 'var(--tl-green)' }} />
              <span className="term-title">readme.md</span>
            </div>
            <div className="term-body" style={{ fontSize: '14px' }}>
              <div style={{ color: 'var(--code-prop)', marginBottom: '14px' }}># {personalInfo.title}</div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                {personalInfo.bio}
              </p>
              <div style={{ color: 'var(--code-comment)', marginBottom: '12px' }}>{'// currently working with'}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
