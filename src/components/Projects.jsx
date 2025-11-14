import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="section"
      style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Animated background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }}
        animate={!isMobile ? {
          y: [0, 50, 0],
          x: [0, 30, 0],
        } : {}}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          animate={isMobile ? { opacity: 1, y: 0 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <motion.h2
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              animate={isMobile ? { opacity: 1, y: 0 } : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Featured <span className="accent">Projects</span>
            </motion.h2>
            <motion.p
              className="body-lg"
              style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={20} color="var(--accent-primary)" />
              </motion.span>
              Showcasing my best work and technical expertise
            </motion.p>
          </div>

          <div className="grid grid-2" style={{ gap: '32px' }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} inView={!isMobile ? inView : true} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
