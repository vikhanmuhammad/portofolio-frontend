import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';

const projGrads = [
  'linear-gradient(135deg, #FFE8CC, #FFB347)',
  'linear-gradient(135deg, #E3F2FF, #86C5FF)',
  'linear-gradient(135deg, #F0E8FF, #C3A8FF)',
  'linear-gradient(135deg, #E3FBF5, #5FD9C9)',
  'linear-gradient(135deg, #FFE3EC, #FF9BB3)',
];

const ProjectCard = ({ project, index, inView }) => {
  const gradient = projGrads[index % projGrads.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{
        background: 'var(--bg-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-primary)';
        e.currentTarget.style.boxShadow = '0 12px 40px var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {project.featured && (
        <div
          style={{
            position: 'absolute', top: '12px', right: '12px', background: 'var(--accent-primary)',
            color: 'var(--accent-contrast)', padding: '4px 12px', borderRadius: '6px', fontSize: '12px',
            fontWeight: '700', zIndex: 2, fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          ✓ featured
        </div>
      )}

      <div style={{ height: '220px', overflow: 'hidden', background: gradient }}>
        <motion.img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '19px', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {project.title}
        </h3>

        <p className="body-md" style={{ marginBottom: '16px', lineHeight: '1.7', fontSize: '13px' }}>
          {project.description}
        </p>

        {project.achievement && (
          <div
            style={{
              display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'var(--accent-bg)',
              border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '10px 14px',
              marginBottom: '16px', fontSize: '12px', color: 'var(--accent-primary)', fontWeight: '600',
            }}
          >
            <CheckCircle2 size={15} style={{ flexShrink: 0, marginTop: '1px' }} />
            {project.achievement}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {project.technologies.map((tech, i) => (
            <span key={i} className="chip" style={{ fontSize: '11px' }}>{tech}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                padding: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)',
                borderRadius: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px',
                fontWeight: '600', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--accent-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-primary)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              <Github size={15} /> source
            </a>
          )}
          {project.live && (
            <a
              href={project.live.trim()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                padding: '10px', background: 'var(--accent-primary)', border: 'none', borderRadius: '8px',
                color: 'var(--accent-contrast)', textDecoration: 'none', fontSize: '13px', fontWeight: '600',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent-primary)'; }}
            >
              <ExternalLink size={15} /> live demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
