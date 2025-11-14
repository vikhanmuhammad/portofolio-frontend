import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const ProjectCard = ({ project, index, inView }) => {
  const cardRef = useRef(null);
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        background: 'var(--bg-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer'
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3 }
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 1
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {project.featured && (
        <motion.div 
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--accent-primary)',
            color: 'var(--bg-primary)',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 2,
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)'
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.3 + index * 0.15,
            type: 'spring',
            stiffness: 200
          }}
        >
          <Star size={14} fill="currentColor" />
          Featured
        </motion.div>
      )}

      <motion.div 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          height: '260px', 
          background: 'var(--bg-tertiary)',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Shine effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transform: 'skewX(-20deg)',
          }}
          whileHover={{
            left: '150%',
            transition: { duration: 0.8, ease: 'easeInOut' }
          }}
        />
      </motion.div>

      <div style={{ padding: '32px', position: 'relative', zIndex: 2 }}>
        <motion.h3 
          className="h2" 
          style={{ 
            marginBottom: '12px', 
            fontSize: '24px',
            fontWeight: '700'
          }}
          whileHover={{ color: 'var(--accent-primary)' }}
        >
          {project.title}
        </motion.h3>
        
        <p className="body-md" style={{ marginBottom: '20px', lineHeight: '1.7' }}>
          {project.description}
        </p>

        {project.achievement && (
          <motion.div 
            style={{
              background: 'var(--accent-bg)',
              border: '1px solid var(--accent-primary)',
              borderRadius: '10px',
              padding: '14px',
              marginBottom: '20px',
              fontSize: '13px',
              color: 'var(--accent-primary)',
              fontWeight: '600'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.15 }}
          >
            🏆 {project.achievement}
          </motion.div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
          {project.technologies.map((tech, i) => (
            <motion.span 
              key={i} 
              style={{
                padding: '8px 16px',
                background: 'var(--bg-secondary)',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                color: 'var(--accent-purple)',
                border: '1px solid var(--border-subtle)'
              }}
              whileHover={{
                scale: 1.1,
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-primary)',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
  
  {project.github && (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '14px',
        background: 'var(--bg-secondary)',
        border: '2px solid var(--border-primary)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: '700',
      }}
      whileHover={{
        borderColor: 'var(--accent-primary)',
        color: 'var(--accent-primary)',
        background: 'var(--accent-bg)',
        scale: 1.02,
        boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)'
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Github size={20} />
      Code
    </motion.a>
  )}

  {project.live && (
    <motion.a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '14px',
        background: 'var(--accent-primary)',
        border: 'none',
        borderRadius: '12px',
        color: 'var(--bg-primary)',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: '700',
      }}
      whileHover={{
        background: 'var(--accent-hover)',
        scale: 1.02,
        boxShadow: '0 8px 30px rgba(59, 130, 246, 0.5)'
      }}
      whileTap={{ scale: 0.98 }}
    >
      <ExternalLink size={20} />
      Live Demo
    </motion.a>
  )}

</div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;