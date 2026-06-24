import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, education, experience, techStack, certifications } from '../data/portfolioData';

const roles = [
  'Software Engineer',
  'Fullstack Developer',
  'System Analyst',
  'Mobile Developer (Flutter)',
  'AI Tinkerer',
];

const stats = [
  { value: education[0]?.gpa || '—', label: 'GPA' },
  { value: `${experience.length}`, label: 'Roles Held' },
  { value: `${techStack.length}+`, label: 'Tech & Tools' },
  { value: `${certifications.length}`, label: 'Certifications' },
];

const codeStack = ['Flutter', 'JavaScript', 'Laravel', 'Node.js', 'MySQL'];

const useTypewriter = (words, speed = 65, pause = 1500) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
};

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const heroRef = useRef(null);
  const typed = useTypewriter(roles);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 900;

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const headingSize =
    windowWidth < 360 ? '1.75rem' :
    windowWidth < 480 ? '2.1rem' :
    windowWidth < 768 ? '2.6rem' :
    '3.4rem';

  return (
    <section
      ref={heroRef}
      id="home"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'visible',
        zIndex: 1,
      }}
    >
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          padding: windowWidth < 480 ? '120px 14px 60px' : '120px 24px 60px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
            gap: isMobile ? '48px' : '56px',
            alignItems: 'center',
          }}
        >
          {/* Left: text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ marginBottom: '24px' }}
            >
              <span className="status-pill">
                🚀 hello_world.exe running...
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: headingSize,
                marginBottom: '14px',
                lineHeight: 1.15,
                fontWeight: '700',
              }}
            >
              {personalInfo.name}
              <span style={{ color: 'var(--accent-orange)' }}>.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: windowWidth < 480 ? '15px' : '18px',
                color: 'var(--accent-primary)',
                marginBottom: '20px',
                minHeight: '28px',
              }}
            >
              <span style={{ color: 'var(--text-faint)' }}>{'> '}</span>
              {typed}
              <span style={{ animation: 'blink-caret 1s step-end infinite' }}>▍</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              style={{
                fontSize: windowWidth < 480 ? '14px' : '16px',
                color: 'var(--text-secondary)',
                fontWeight: 400,
                maxWidth: '520px',
                marginBottom: '36px',
                lineHeight: 1.7,
              }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '36px',
              }}
            >
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                view_projects() <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" onClick={() => scrollTo('contact')}>
                get_in_touch()
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: 'flex', gap: '18px', alignItems: 'center' }}
            >
              {[
                { Icon: Github, href: personalInfo.socials.github },
                { Icon: Linkedin, href: personalInfo.socials.linkedin },
                { Icon: Mail, href: `mailto:${personalInfo.email}` },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: fake code editor window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: [24, 0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              y: { duration: 0.6, delay: 0.4, times: [0, 0.4, 0.7, 1] },
            }}
          >
            <motion.div
              animate={isMobile ? { opacity: 1 } : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="term-window"
            >
              <div className="term-header">
                <span className="term-dot" style={{ background: 'var(--tl-red)' }} />
                <span className="term-dot" style={{ background: 'var(--tl-yellow)' }} />
                <span className="term-dot" style={{ background: 'var(--tl-green)' }} />
                <span className="term-title">developer.js</span>
              </div>
              <div className="term-body">
                <div><span style={{ color: 'var(--code-key)' }}>const</span> <span style={{ color: 'var(--code-prop)' }}>developer</span> = {'{'}</div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--code-prop)' }}>name</span>:
                  <span style={{ color: 'var(--code-string)' }}> '{personalInfo.name}'</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--code-prop)' }}>role</span>:
                  <span style={{ color: 'var(--code-string)' }}> '{personalInfo.title}'</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--code-prop)' }}>based</span>:
                  <span style={{ color: 'var(--code-string)' }}> '{personalInfo.location}'</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--code-prop)' }}>stack</span>: [
                  {codeStack.map((s, i) => (
                    <span key={s}>
                      <span style={{ color: 'var(--code-string)' }}>'{s}'</span>
                      {i < codeStack.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  ],
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--code-prop)' }}>loves</span>:
                  <span style={{ color: 'var(--code-string)' }}> 'clean architecture & good coffee'</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--code-prop)' }}>coffee</span>:
                  <span style={{ color: 'var(--code-key)' }}> true</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: 'var(--code-prop)' }}>available</span>:
                  <span style={{ color: 'var(--code-key)' }}> true</span>,
                </div>
                <div>{'};'}</div>
                <div style={{ color: 'var(--code-comment)', marginTop: '10px' }}>{'// always shipping something'}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '20px',
            marginTop: isMobile ? '56px' : '80px',
            paddingTop: '32px',
            borderTop: '1px solid var(--divider)',
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: isMobile ? '24px' : '32px',
                  fontWeight: '700',
                  color: 'var(--accent-primary)',
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
