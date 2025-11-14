import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Hash, ExternalLink, Sparkles, Cloud, Users, TrendingUp, Brain, Smartphone, Shield } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import gsap from 'gsap';

// ------------------------------
// CARD COMPONENT (FIXED)
// ------------------------------
const CertificationCard = ({ cert, index, inView, hoveredCard, setHoveredCard }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (inView && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, rotateY: -15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out'
        }
      );
    }
  }, [inView, index]);

  const icons = {
    cloud: Cloud,
    users: Users,
    chart: TrendingUp,
    brain: Brain,
    mobile: Smartphone,
    shield: Shield,
  };
  const Icon = icons[cert.icon] || Award;

  return (
    <motion.div
      ref={cardRef}
      key={cert.id}
      onMouseEnter={() => setHoveredCard(cert.id)}
      onMouseLeave={() => setHoveredCard(null)}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'var(--bg-primary)',
        borderRadius: '20px',
        padding: '32px',
        border: `2px solid ${
          hoveredCard === cert.id ? cert.color : 'var(--border-subtle)'
        }`,
        position: 'relative',
        overflow: 'hidden',
        opacity: 0,
        cursor: 'pointer',
        boxShadow:
          hoveredCard === cert.id
            ? `0 25px 60px ${cert.color}40`
            : '0 4px 16px var(--shadow-sm)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top bar */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: cert.color,
        }}
        animate={{
          boxShadow:
            hoveredCard === cert.id
              ? [
                  `0 0 20px ${cert.color}`,
                  `0 0 40px ${cert.color}`,
                  `0 0 20px ${cert.color}`,
                ]
              : `0 0 8px ${cert.color}`,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Icon */}
      <motion.div
        style={{
          width: '72px',
          height: '72px',
          background: `${cert.color}15`,
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          border: `2px solid ${cert.color}30`,
        }}
        animate={{
          rotate: hoveredCard === cert.id ? 360 : 0,
          scale: hoveredCard === cert.id ? 1.1 : 1,
        }}
        transition={{ duration: 0.6 }}
      >
        <Icon size={36} style={{ color: cert.color }} />
      </motion.div>

      {/* Name */}
      <h3
        className="text-lg font-bold mb-2"
        style={{ color: 'var(--text-primary)', lineHeight: '1.4' }}
      >
        {cert.name}
      </h3>

      {/* Issuer */}
      <div className="text-base font-semibold mb-3" style={{ color: cert.color }}>
        {cert.issuer}
      </div>

      {/* Date */}
      <div
        className="flex items-center gap-2 mb-3 text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        <Calendar size={16} />
        <span>{cert.date}</span>
      </div>

      {/* Credential ID */}
      {cert.credentialId && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 + index * 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-secondary)',
            padding: '8px 14px',
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--text-muted)',
            marginBottom: '16px',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <Hash size={14} />
          <span>{cert.credentialId}</span>
        </motion.div>
      )}

      {/* Description */}
      <p
        className="text-sm mb-4"
        style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
      >
        {cert.description}
      </p>

      {/* Button */}
      <motion.button
        onClick={() => window.open(cert.link, '_blank')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 18px',
          background: hoveredCard === cert.id ? cert.color : 'var(--bg-secondary)',
          border: `2px solid ${cert.color}`,
          borderRadius: '12px',
          color: hoveredCard === cert.id ? '#fff' : cert.color,
          fontSize: '14px',
          fontWeight: '700',
          cursor: 'pointer',
          width: '100%',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        <ExternalLink size={16} />
        View Certificate
      </motion.button>
    </motion.div>
  );
};

// ------------------------------
// MAIN COMPONENT
// ------------------------------
const EnhancedCertifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="section"
      style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          y,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="section-title text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Licenses & <span className="accent">Certifications</span>
            </motion.h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                cert={cert}
                index={index}
                inView={inView}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCertifications;
