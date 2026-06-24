import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Hash, Cloud, Code2 } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';
import { certifications } from '../data/portfolioData';

const icons = {
  cloud: Cloud,
  code: Code2,
  google: SiGoogle,
};

const CertificationCard = ({ cert, index, inView, isMobile }) => {
  const Icon = icons[cert.icon] || Award;

  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 24 }}
      animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={!isMobile ? { y: -5 } : {}}
      style={{
        background: 'var(--bg-primary)',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        display: 'block',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cert.color}60`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: cert.color }} />

      <div
        style={{
          width: '56px', height: '56px', background: `${cert.color}15`, borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
          border: `1px solid ${cert.color}25`,
        }}
      >
        <Icon size={26} style={{ color: cert.color }} />
      </div>

      <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: '8px' }}>
        {cert.name}
      </h3>

      <div style={{ fontSize: '14px', fontWeight: '600', color: cert.color, marginBottom: '10px' }}>
        {cert.issuer}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', fontSize: '12px', color: 'var(--text-muted)' }}>
        <Calendar size={14} />
        <span>{cert.date}</span>
      </div>

      {cert.credentialId && (
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--bg-tertiary)',
            padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: '600',
            color: 'var(--text-muted)', marginBottom: '12px', border: '1px solid var(--border-subtle)',
          }}
        >
          <Hash size={12} />
          <span>{cert.credentialId}</span>
        </div>
      )}

      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '14px' }}>
        {cert.description}
      </p>

      <span style={{ fontSize: '13px', fontWeight: '700', color: cert.color }}>verify →</span>
    </motion.a>
  );
};

const EnhancedCertifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 50 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <span className="section-kicker">{'// certs.pem'}</span>
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Licenses & <span className="accent">Certifications</span>
            </motion.h2>
          </div>

          <div className="grid grid-3">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} inView={inView} isMobile={isMobile} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCertifications;
