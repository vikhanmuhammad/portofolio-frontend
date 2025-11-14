import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experience } from '../data/portfolioData';
import gsap from 'gsap';

const EnhancedExperience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP animation for cards only on desktop
  useEffect(() => {
    if (!inView || isMobile) return;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, rotateX: -15 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, delay: index * 0.2, ease: 'power3.out' }
      );
    });
  }, [inView, isMobile]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section"
      style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Parallax background */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          y
        }}
      />

      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          animate={isMobile ? { opacity: 1, y: 0 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="section-title text-center mb-8">
            <motion.h2
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              animate={isMobile ? { opacity: 1, scale: 1 } : inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Work <span className="accent">Experience</span>
            </motion.h2>

            <motion.p
              className="body-lg"
              style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!isMobile && (
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles size={20} color="var(--accent-primary)" />
                </motion.span>
              )}
              My professional journey and key achievements
            </motion.p>
          </div>

          {/* EXPERIENCE CARDS */}
          <div className="grid grid-cols-1 gap-8" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                ref={(el) => (cardRefs.current[index] = el)}
                whileHover={!isMobile ? { y: -12, scale: 1.02, boxShadow: '0 30px 60px rgba(59, 130, 246, 0.3)' } : {}}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '2px solid var(--border-subtle)',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: isMobile ? 1 : 0,
                  cursor: 'pointer'
                }}
              >
                {/* Gradient top border */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-purple), var(--accent-cyan))',
                  }}
                  initial={isMobile ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={isMobile ? { scaleX: 1 } : { scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />

                <div className="flex flex-col md:flex-row gap-6">
                  {/* ICON */}
                  <motion.div
                    style={{
                      width: '64px',
                      height: '64px',
                      background: 'var(--accent-bg)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                    whileHover={!isMobile ? { rotate: 360, scale: 1.1 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase size={32} color="var(--accent-primary)" />
                  </motion.div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>

                    <div className="text-lg font-semibold mb-3" style={{ color: 'var(--accent-primary)' }}>
                      {exp.company}
                    </div>

                    {/* PERIOD + LOCATION */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      {exp.description}
                    </p>

                    {/* ACHIEVEMENTS */}
                    {exp.achievements?.length > 0 && (
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            animate={isMobile ? { opacity: 1, x: 0 } : inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.2 + idx * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <motion.div
                              style={{
                                width: '8px',
                                height: '8px',
                                background: 'var(--accent-primary)',
                                borderRadius: '50%',
                                marginTop: '8px',
                                flexShrink: 0
                              }}
                              animate={!isMobile ? {
                                scale: [1, 1.3, 1],
                                boxShadow: [
                                  '0 0 8px rgba(59, 130, 246, 0.5)',
                                  '0 0 16px rgba(59, 130, 246, 0.8)',
                                  '0 0 8px rgba(59, 130, 246, 0.5)'
                                ]
                              } : {}}
                              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                            />
                            <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
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
