import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';
import gsap from 'gsap';

/* -------------------------
   CARD COMPONENT FIX HOOKS
-------------------------- */
const EducationCard = ({ edu, index, inView, isMobile, lineLeft }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!isMobile && inView && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          delay: 0.3 + index * 0.2,
          ease: 'power3.out'
        }
      );
    } else if (isMobile && cardRef.current) {
      // Tampilkan langsung tanpa animasi di mobile
      gsap.set(cardRef.current, { opacity: 1, x: 0 });
    }
  }, [inView, index, isMobile]);

  return (
    <div
      ref={cardRef}
      style={{
        position: 'relative',
        marginBottom: index < education.length - 1 ? (isMobile ? '32px' : '48px') : '0',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '32px' : '48px',
        alignItems: 'center',
        opacity: 0
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
        <motion.div
          style={{
            width: '24px',
            height: '24px',
            background: 'var(--accent-primary)',
            borderRadius: '50%',
            border: '4px solid var(--bg-secondary)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)',
          }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(59, 130, 246, 1)',
              '0 0 20px rgba(59, 130, 246, 0.5)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
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
          style={{ textAlign: 'left', cursor: 'pointer' }}
          whileHover={{ 
            y: -10, 
            scale: 1.02,
            boxShadow: '0 30px 60px rgba(59, 130, 246, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            style={{
              width: '56px',
              height: '56px',
              background: 'var(--accent-bg)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap size={isMobile ? 28 : 32} color="var(--accent-primary)" />
          </motion.div>

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
                <motion.div 
                  style={{ 
                    width: '8px', 
                    height: '8px', 
                    background: 'var(--accent-primary)', 
                    borderRadius: '50%' 
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};


/* ------------------------
     MAIN COMPONENT
------------------------- */

const EnhancedEducation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sectionRef = useRef(null);

  const isMobileDevice = window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lineLeft = isMobile ? '24px' : '50%';
  const lineTransform = isMobile ? 'none' : 'translateX(-50%)';

  return (
    <section ref={sectionRef} id="education" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background gradient */}
      <motion.div
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: isMobileDevice ? 1 : opacity,
          scale: isMobileDevice ? 1 : scale
        }}
      />

      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobileDevice ? {} : { opacity: 0, y: 50 }}
          animate={isMobileDevice ? {} : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <motion.h2
              initial={isMobileDevice ? {} : { opacity: 0, y: 30 }}
              animate={isMobileDevice ? {} : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Education <span className="accent">Timeline</span>
            </motion.h2>

            <motion.p 
              className="body-lg" 
              style={{ maxWidth: '600px', margin: '0 auto' }}
              initial={isMobileDevice ? {} : { opacity: 0 }}
              animate={isMobileDevice ? {} : inView ? { opacity: 1 } : {}}
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
              initial={isMobileDevice ? {} : { scaleY: 0 }}
              animate={isMobileDevice ? {} : inView ? { scaleY: 1 } : {}}
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
