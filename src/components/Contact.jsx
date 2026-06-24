import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socials = [
    { icon: Github, url: personalInfo.socials.github, label: 'github' },
    { icon: Linkedin, url: personalInfo.socials.linkedin, label: 'linkedin' },
    { icon: Instagram, url: personalInfo.socials.twitter, label: 'instagram' },
  ];

  return (
    <section id="contact" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 50 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <span className="section-kicker">{'// contact.sh'}</span>
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Get In <span className="accent">Touch</span>
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
              <span className="term-title">bash — contact</span>
            </div>

            <div className="term-body" style={{ fontSize: '14px' }}>
              <div style={{ color: 'var(--text-faint)', marginBottom: '6px' }}>
                <span style={{ color: 'var(--accent-teal)' }}>$</span> whoami
              </div>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{personalInfo.name}</div>

              <h3
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: isMobile ? '22px' : '30px',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                  marginBottom: '14px',
                }}
              >
                Let's build something great together…
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                Have a project in mind or just want to talk shop? My inbox is always open — I'll get back to you as soon as I can.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '14px',
                  marginBottom: '24px',
                }}
              >
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px',
                    background: 'var(--bg-secondary)', border: '1px solid var(--code-border)', borderRadius: '10px',
                    textDecoration: 'none', transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--code-border)'; }}
                >
                  <Mail size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '13px', wordBreak: 'break-all' }}>{personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px',
                    background: 'var(--bg-secondary)', border: '1px solid var(--code-border)', borderRadius: '10px',
                    textDecoration: 'none', transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--code-border)'; }}
                >
                  <Phone size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{personalInfo.phone}</span>
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {socials.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip"
                    style={{ textDecoration: 'none' }}
                  >
                    <Icon size={14} /> {label}
                  </a>
                ))}
              </div>

              <div style={{ color: 'var(--text-faint)' }}>
                <span style={{ color: 'var(--accent-teal)' }}>$</span>{' '}
                <span style={{ animation: 'blink-caret 1s step-end infinite' }}>▍</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
