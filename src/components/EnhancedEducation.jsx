import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

/* -------------------------
   CARD COMPONENT FIX HOOKS
-------------------------- */
const EducationCard = ({ edu, index, inView, isMobile, lineLeft }) => {
  return (
    <motion.div
      initial={isMobile ? { opacity: 1 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.2 + index * 0.15 }}
      style={{
        position: 'relative',
        marginBottom: index < education.length - 1 ? (isMobile ? '32px' : '48px') : '0',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '32px' : '48px',
        alignItems: 'center',
      }}
    >
      {/* Timeline dot */}
      <motion.div 
        style={{
          position: 'absolute',
          left: lineLeft,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
        whileHover={{ scale: 1.5 }}
      >
        <div
          style={{
            width: '16px',
            height: '16px',
            background: 'var(--accent-primary)',
            borderRadius: '50%',
            border: '3px solid var(--bg-secondary)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div style={{
        gridColumn: isMobile ? '1' : index % 2 === 0 ? '1' : '2',
        textAlign: isMobile ? 'left' : index % 2 === 0 ? 'right' : 'left',
        paddingLeft: isMobile ? '64px' : '0'
      }}>
        <motion.div
          className="card"
          style={{ textAlign: 'left', cursor: 'default' }}
          whileHover={!isMobile ? { y: -4 } : {}}
          transition={{ duration: 0.2 }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              background: 'var(--accent-bg)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
            }}
          >
            <GraduationCap size={isMobile ? 24 : 28} color="var(--accent-primary)" />
          </div>

          <h3 className="h3" style={{ marginBottom: '8px', color: 'var(--text-primary)', fontSize: isMobile ? '16px' : '20px' }}>
            {edu.degree}
          </h3>
          <div style={{ fontSize: isMobile ? '14px' : '18px', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '12px' }}>
            {edu.university}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', fontSize: isMobile ? '12px' : '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
              <MapPin size={16} />
              <span>{edu.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
              <Calendar size={16} />
              <span>{edu.year}</span>
            </div>
          </div>

          <motion.div 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--bg-tertiary)',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '700',
              color: 'var(--accent-primary)',
              marginBottom: '16px',
              border: '1px solid var(--accent-primary)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Award size={16} />
            GPA: {edu.gpa}
          </motion.div>

          <div style={{ marginTop: '12px' }}>
            {edu.highlights.map((highlight, i) => (
              <motion.div 
                key={i} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                  color: 'var(--text-secondary)',
                  fontSize: isMobile ? '12px' : '14px'
                }}
                initial={isMobile ? {} : { opacity: 0, x: -20 }}
                animate={isMobile ? {} : inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    background: 'var(--accent-primary)',
                    borderRadius: '50%',
                    flexShrink: 0,
                    marginTop: '4px',
                  }}
                />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


/* ------------------------
     MAIN COMPONENT
------------------------- */

const EnhancedEducation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lineLeft = isMobile ? '24px' : '50%';
  const lineTransform = isMobile ? 'none' : 'translateX(-50%)';

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>

      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? {} : { opacity: 0, y: 50 }}
          animate={isMobile ? {} : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <motion.h2
              initial={isMobile ? {} : { opacity: 0, y: 30 }}
              animate={isMobile ? {} : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Education <span className="accent">Timeline</span>
            </motion.h2>

            <motion.p 
              className="body-lg" 
              style={{ maxWidth: '600px', margin: '0 auto' }}
              initial={isMobile ? {} : { opacity: 0 }}
              animate={isMobile ? {} : inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My academic journey and achievements
            </motion.p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', marginTop: '32px' }}>
            
            {/* Timeline line */}
            <motion.div 
              style={{
                position: 'absolute',
                left: lineLeft,
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, transparent, var(--accent-primary), transparent)',
                transform: lineTransform
              }}
              initial={isMobile ? {} : { scaleY: 0 }}
              animate={isMobile ? {} : inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Render Cards */}
            {education.map((edu, index) => (
              <EducationCard
                key={edu.id}
                edu={edu}
                index={index}
                inView={inView}
                isMobile={isMobile}
                lineLeft={lineLeft}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedEducation;
