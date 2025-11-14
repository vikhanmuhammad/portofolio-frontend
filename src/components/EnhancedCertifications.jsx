import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Hash, ExternalLink, Sparkles, Cloud, Users, TrendingUp, Brain, Smartphone, Shield } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import gsap from 'gsap';

const EnhancedCertifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const getIconComponent = (iconName) => {
    const icons = {
      cloud: Cloud,
      users: Users,
      chart: TrendingUp,
      brain: Brain,
      mobile: Smartphone,
      shield: Shield,
    };
    return icons[iconName] || Award;
  };

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="section"
      style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Animated background elements */}
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
          y
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Licenses & <span className="accent">Certifications</span>
            </motion.h2>
            <motion.p
              className="body-lg"
              style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={20} color="var(--accent-primary)" />
              </motion.span>
              Professional certifications and achievements
            </motion.p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const cardRef = useRef(null);
              const Icon = getIconComponent(cert.icon);

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

              return (
                <motion.div
                  key={cert.id}
                  ref={cardRef}
                  onMouseEnter={() => setHoveredCard(cert.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'var(--bg-primary)',
                    borderRadius: '20px',
                    padding: '32px',
                    border: `2px solid ${hoveredCard === cert.id ? cert.color : 'var(--border-subtle)'}`,
                    position: 'relative',
                    overflow: 'hidden',
                    opacity: 0,
                    cursor: 'pointer',
                    boxShadow: hoveredCard === cert.id ? `0 25px 60px ${cert.color}40` : '0 4px 16px var(--shadow-sm)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Animated gradient bar */}
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
                      boxShadow: hoveredCard === cert.id ? [
                        `0 0 20px ${cert.color}`,
                        `0 0 40px ${cert.color}`,
                        `0 0 20px ${cert.color}`
                      ] : `0 0 8px ${cert.color}`
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Badge/Icon */}
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
                      border: `2px solid ${cert.color}30`
                    }}
                    animate={{
                      rotate: hoveredCard === cert.id ? 360 : 0,
                      scale: hoveredCard === cert.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={36} style={{ color: cert.color }} />
                  </motion.div>

                  {/* Certificate Name */}
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      color: 'var(--text-primary)',
                      lineHeight: '1.4'
                    }}
                  >
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <div
                    className="text-base font-semibold mb-3"
                    style={{ color: cert.color }}
                  >
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
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <Hash size={14} />
                      <span>{cert.credentialId}</span>
                    </motion.div>
                  )}

                  {/* Description */}
                  <p
                    className="text-sm mb-4"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.7'
                    }}
                  >
                    {cert.description}
                  </p>

                  {/* View Certificate Button (Animated) */}
                  <motion.button
  onClick={() => window.open(cert.link, "_blank")}
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
    transition: 'all 0.3s ease'
  }}
>
  <ExternalLink size={16} />
  View Certificate
</motion.button>


                  {/* Floating particles on hover */}
                  {hoveredCard === cert.id && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          style={{
                            position: 'absolute',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: cert.color,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            pointerEvents: 'none'
                          }}
                          animate={{
                            y: [-10, -30],
                            opacity: [1, 0],
                            scale: [1, 0.5]
                          }}
                          transition={{
                            duration: 1 + Math.random(),
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              marginTop: '64px',
              textAlign: 'center',
              padding: '32px',
              background: 'var(--bg-primary)',
              borderRadius: '20px',
              border: '2px solid var(--border-subtle)'
            }}
          >
            <div className="flex flex-wrap justify-center gap-12">
              <div>
                <motion.div
                  style={{
                    fontSize: '48px',
                    fontWeight: '800',
                    color: 'var(--accent-primary)',
                    marginBottom: '8px'
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {certifications.length}
                </motion.div>
                <div style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '600' }}>
                  Total Certifications
                </div>
              </div>
              <div>
                <motion.div
                  style={{
                    fontSize: '48px',
                    fontWeight: '800',
                    color: 'var(--accent-purple)',
                    marginBottom: '8px'
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.3
                  }}
                >
                  {certifications.filter(c => c.credentialId).length}
                </motion.div>
                <div style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '600' }}>
                  With Credentials
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCertifications;