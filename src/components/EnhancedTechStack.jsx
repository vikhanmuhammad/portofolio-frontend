import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../data/portfolioData';
import {
  SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiPhp, SiLaravel,
  SiFlask, SiNextdotjs, SiMysql, SiFirebase, SiMongodb, SiOracle, SiNodedotjs,
  SiExpress, SiSpringboot, SiReact, SiGithubactions, SiVercel, SiFigma,
  SiGo, SiDocker, SiJest, SiAmazonwebservices, SiFlutter, SiGit, SiAdobexd, SiNetlify
} from 'react-icons/si';
import { Code2, Cloud, Zap } from 'lucide-react';

const levelColors = {
  expert:       { dot: '#60a5fa', label: 'Expert' },
  advanced:     { dot: '#a78bfa', label: 'Advanced' },
  intermediate: { dot: '#34d399', label: 'Intermediate' },
  basic:        { dot: '#94a3b8', label: 'Basic' },
};

const iconMap = {
  Flutter: SiFlutter, HTML5: SiHtml5, CSS3: SiCss3, JavaScript: SiJavascript,
  Bootstrap: SiBootstrap, 'Tailwind CSS': SiTailwindcss, PHP: SiPhp,
  Laravel: SiLaravel, Flask: SiFlask, 'Next.js': SiNextdotjs, MySQL: SiMysql,
  Firebase: SiFirebase, MongoDB: SiMongodb, Oracle: SiOracle, 'Node.js': SiNodedotjs,
  'Express.js': SiExpress, 'Java Spring Boot': SiSpringboot, 'React.js': SiReact,
  'GitHub Actions': SiGithubactions, Vercel: SiVercel, Figma: SiFigma,
  Golang: SiGo, Docker: SiDocker, Jest: SiJest, AWS: SiAmazonwebservices,
  Git: SiGit, 'Adobe XD': SiAdobexd, Netlify: SiNetlify, n8n: Zap,
  'REST API': Code2, UML: Code2, cPanel: Cloud, Render: Cloud,
  'CodeIgniter 3': SiPhp,
};

const EnhancedTechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Triplicate so the -33.333% translateX loops seamlessly
  const tripled = [...techStack, ...techStack, ...techStack];

  return (
    <section
      id="tech"
      className="section"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {/* Title */}
          <div className="section-title">
            <motion.h2
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              Tech <span className="accent">Stack</span>
            </motion.h2>
            <motion.p
              className="body-lg"
              style={{ maxWidth: '560px', margin: '0 auto' }}
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={isMobile ? { opacity: 1 } : inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              Technologies and tools I work with
            </motion.p>
          </div>

          {/* Carousel wrapper — hover/touch pauses via CSS class */}
          <div
            className="tech-carousel-wrapper"
            style={{ position: 'relative', overflow: 'hidden', padding: '8px 0' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {/* Fade edges */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
              background: 'linear-gradient(to right, var(--bg-secondary), transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
              background: 'linear-gradient(to left, var(--bg-secondary), transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />

            <div
              className={`tech-carousel-track${paused ? ' paused' : ''}`}
              style={{ gap: '10px', animationDuration: isMobile ? '140s' : '60s' }}
            >
              {tripled.map((tech, index) => {
                const Icon = iconMap[tech.name] || Code2;
                const color = levelColors[tech.level] || levelColors.basic;

                return (
                  <div
                    key={`${tech.name}-${index}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      padding: isMobile ? '12px 10px' : '14px 12px',
                      background: 'var(--bg-primary)',
                      borderRadius: '10px',
                      border: '1px solid var(--border-subtle)',
                      width: isMobile ? '76px' : '92px',
                      flexShrink: 0,
                      cursor: 'default',
                      userSelect: 'none',
                    }}
                  >
                    {/* Level dot */}
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: color.dot, alignSelf: 'flex-end', flexShrink: 0,
                    }} />
                    <Icon style={{ fontSize: isMobile ? '26px' : '30px', color: color.dot }} />
                    <span style={{
                      fontSize: '11px', color: 'var(--text-muted)',
                      textAlign: 'center', lineHeight: 1.3, wordBreak: 'break-word',
                    }}>
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: isMobile ? '16px' : '32px', marginTop: '32px', flexWrap: 'wrap',
          }}>
            {Object.entries(levelColors).map(([key, val]) => (
              <div key={key} style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                fontSize: '13px', color: 'var(--text-muted)',
              }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: val.dot, flexShrink: 0,
                }} />
                {val.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTechStack;
