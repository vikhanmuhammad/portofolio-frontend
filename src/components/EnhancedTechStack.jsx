import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../data/portfolioData';
import {
  SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiPhp, SiLaravel,
  SiFlask, SiNextdotjs, SiMysql, SiFirebase, SiMongodb, SiOracle, SiNodedotjs,
  SiExpress, SiSpringboot, SiReact, SiGithubactions, SiVercel, SiFigma,
  SiGo, SiDocker, SiJest, SiAmazonwebservices, SiFlutter, SiGit, SiAdobexd, SiNetlify, SiAngular
} from 'react-icons/si';
import { Code2, Cloud, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const levelMeta = {
  expert: { label: 'Expert', color: '#86C5FF', pct: 100 },
  advanced: { label: 'Advanced', color: '#C3A8FF', pct: 82 },
  intermediate: { label: 'Intermediate', color: '#5FD9C9', pct: 62 },
  basic: { label: 'Basic', color: '#B0A79B', pct: 38 },
};

const iconMap = {
  Flutter: SiFlutter, HTML5: SiHtml5, CSS3: SiCss3, JavaScript: SiJavascript,
  Bootstrap: SiBootstrap, 'Tailwind CSS': SiTailwindcss, PHP: SiPhp,
  Laravel: SiLaravel, Flask: SiFlask, 'Next.js': SiNextdotjs, MySQL: SiMysql,
  Firebase: SiFirebase, MongoDB: SiMongodb, Oracle: SiOracle, 'Node.js': SiNodedotjs,
  'Express.js': SiExpress, 'Java Spring Boot': SiSpringboot, 'React.js': SiReact,
  'GitHub Actions': SiGithubactions, Vercel: SiVercel, Figma: SiFigma,
  Golang: SiGo, Docker: SiDocker, Jest: SiJest, AWS: SiAmazonwebservices,
  Git: SiGit, 'Adobe XD': SiAdobexd, Netlify: SiNetlify, n8n: Zap, Angular: SiAngular,
  'REST API': Code2, UML: Code2, cPanel: Cloud, Render: Cloud,
  'CodeIgniter 3': SiPhp,
};

const EnhancedTechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = techStack.length;
  const timerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const advance = useCallback((dir) => {
    setIndex((i) => (i + dir + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused || !inView) return;
    timerRef.current = setInterval(() => advance(1), 3200);
    return () => clearInterval(timerRef.current);
  }, [paused, inView, advance]);

  const active = techStack[index];
  const ActiveIcon = iconMap[active.name] || Code2;
  const meta = levelMeta[active.level] || levelMeta.basic;

  return (
    <section id="tech" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="section-title">
            <span className="section-kicker">{'// stack.ts'}</span>
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              Tech <span className="accent">Stack</span>
            </motion.h2>
          </div>

          {/* Carousel panel */}
          <div
            style={{
              background: `linear-gradient(135deg, var(--stack-surface-from), var(--stack-surface-to))`,
              border: '1px solid var(--stack-border)',
              borderRadius: '20px',
              padding: isMobile ? '28px 22px' : '40px',
              maxWidth: '780px',
              margin: '0 auto 32px',
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              <button
                onClick={() => advance(-1)}
                aria-label="Previous"
                style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  border: '1px solid var(--stack-border)', background: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={18} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  style={{ flex: 1, textAlign: 'center' }}
                >
                  <ActiveIcon style={{ fontSize: isMobile ? '40px' : '52px', color: meta.color, marginBottom: '12px' }} />
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: isMobile ? '20px' : '26px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {active.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px' }}>
                    {active.category}
                  </div>
                  <span
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600',
                      background: `${meta.color}1f`, color: meta.color, border: `1px solid ${meta.color}40`,
                    }}
                  >
                    {meta.label}
                  </span>

                  <div style={{ maxWidth: '320px', margin: '20px auto 0' }}>
                    <div style={{ height: '6px', background: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${meta.pct}%` }}
                        transition={{ duration: 0.6 }}
                        style={{ height: '100%', background: meta.color, borderRadius: '4px' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '14px', fontSize: '12px', color: 'var(--text-faint)', fontFamily: "'JetBrains Mono', monospace" }}>
                    {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => advance(1)}
                aria-label="Next"
                style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  border: '1px solid var(--stack-border)', background: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Chip strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {techStack.map((tech, i) => {
              const isActive = i === index;
              const tMeta = levelMeta[tech.level] || levelMeta.basic;
              return (
                <button
                  key={tech.name}
                  onClick={() => setIndex(i)}
                  className="chip"
                  style={{
                    cursor: 'pointer',
                    borderColor: isActive ? tMeta.color : 'var(--border-subtle)',
                    color: isActive ? tMeta.color : 'var(--text-muted)',
                    background: isActive ? `${tMeta.color}1f` : 'var(--bg-tertiary)',
                  }}
                >
                  {tech.name}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTechStack;
