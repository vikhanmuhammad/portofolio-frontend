import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../data/portfolioData';
import { 
  SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiPhp, SiLaravel, 
  SiFlask, SiNextdotjs, SiMysql, SiFirebase, SiMongodb, SiOracle, SiNodedotjs, 
  SiExpress, SiSpringboot, SiReact, SiGithubactions, SiVercel, SiFigma,
  SiGo, SiDocker, SiJest, SiAmazonwebservices, SiFlutter, SiGit, SiAdobexd, SiNetlify
} from 'react-icons/si';
import { Code2, Database, Cloud, Zap } from 'lucide-react';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [hoveredTech, setHoveredTech] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Map tech names to icons
  const getIcon = (techName) => {
    const iconMap = {
      'Flutter': SiFlutter,
      'HTML5': SiHtml5,
      'CSS3': SiCss3,
      'JavaScript': SiJavascript,
      'Bootstrap': SiBootstrap,
      'Tailwind CSS': SiTailwindcss,
      'PHP': SiPhp,
      'Laravel': SiLaravel,
      'Flask': SiFlask,
      'Next.js': SiNextdotjs,
      'MySQL': SiMysql,
      'Firebase': SiFirebase,
      'MongoDB': SiMongodb,
      'Oracle': SiOracle,
      'Node.js': SiNodedotjs,
      'Express.js': SiExpress,
      'Java Spring Boot': SiSpringboot,
      'React.js': SiReact,
      'GitHub Actions': SiGithubactions,
      'Vercel': SiVercel,
      'Figma': SiFigma,
      'Golang': SiGo,
      'Docker': SiDocker,
      'Jest': SiJest,
      'AWS': SiAmazonwebservices,
      'Git': SiGit,
      'Adobe XD': SiAdobexd,
      'Netlify': SiNetlify,
      'n8n': Zap,
      'REST API': Code2,
      'UML': Code2,
      'cPanel': Cloud,
      'Render': Cloud,
      'CodeIgniter 3': SiPhp
    };
    return iconMap[techName] || Code2;
  };

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'expert':
        return 'rgb(59, 130, 246)'; // blue
      case 'advanced':
        return 'rgb(139, 92, 246)'; // purple
      case 'intermediate':
        return 'rgb(6, 182, 212)'; // cyan
      case 'basic':
        return 'rgb(148, 163, 184)'; // slate
      default:
        return 'rgb(148, 163, 184)';
    }
  };

  const getProficiencyGlow = (level) => {
    switch (level) {
      case 'expert':
        return '0 0 30px rgba(59, 130, 246, 0.6)';
      case 'advanced':
        return '0 0 30px rgba(139, 92, 246, 0.6)';
      case 'intermediate':
        return '0 0 30px rgba(6, 182, 212, 0.6)';
      default:
        return '0 0 20px rgba(148, 163, 184, 0.3)';
    }
  };

  // Triple the array for seamless infinite scroll
  const duplicatedTech = [...techStack, ...techStack, ...techStack];

  return (
    <section id="tech" className="section" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <h2>Tech <span className="accent">Stack</span></h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Technologies and tools I master
            </p>
          </div>

          {/* Infinite Horizontal Carousel */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            padding: '40px 0'
          }}>
            {/* Gradient fade edges */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '150px',
              background: 'linear-gradient(90deg, var(--bg-secondary), transparent)',
              zIndex: 2,
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '150px',
              background: 'linear-gradient(270deg, var(--bg-secondary), transparent)',
              zIndex: 2,
              pointerEvents: 'none'
            }} />

            <motion.div
              animate={!isPaused ? {
                x: [0, -(techStack.length * 180)]
              } : {}}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear"
                }
              }}
              style={{ 
                display: 'flex', 
                gap: '60px',
                width: 'fit-content'
              }}
            >
              {duplicatedTech.map((tech, index) => {
                const Icon = getIcon(tech.name);
                const isHovered = hoveredTech === `${tech.name}-${index}`;
                
                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    onHoverStart={() => {
                      setHoveredTech(`${tech.name}-${index}`);
                      setIsPaused(true);
                    }}
                    onHoverEnd={() => {
                      setHoveredTech(null);
                      setIsPaused(false);
                    }}
                    whileHover={{ scale: 1.2, y: -10 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                      minWidth: '120px',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      animate={isHovered ? {
                        filter: `drop-shadow(${getProficiencyGlow(tech.level)})`
                      } : {}}
                      style={{
                        fontSize: '56px',
                        color: isHovered ? getProficiencyColor(tech.level) : 'var(--text-muted)',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      <Icon />
                    </motion.div>

                    {/* Name */}
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: isHovered ? getProficiencyColor(tech.level) : 'var(--text-secondary)',
                      textAlign: 'center',
                      transition: 'color 0.3s ease',
                      whiteSpace: 'nowrap'
                    }}>
                      {tech.name}
                    </div>

                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: '-60px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: `linear-gradient(135deg, ${getProficiencyColor(tech.level)}20, ${getProficiencyColor(tech.level)}40)`,
                            border: `2px solid ${getProficiencyColor(tech.level)}`,
                            borderRadius: '12px',
                            padding: '8px 16px',
                            whiteSpace: 'nowrap',
                            fontSize: '13px',
                            fontWeight: '700',
                            color: getProficiencyColor(tech.level),
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            boxShadow: getProficiencyGlow(tech.level),
                            zIndex: 10,
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          {tech.proficiency}
                          {/* Tooltip arrow */}
                          <div style={{
                            position: 'absolute',
                            bottom: '-8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 0,
                            height: 0,
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: `8px solid ${getProficiencyColor(tech.level)}`
                          }} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Legend */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            {[
              { label: 'Expert', color: 'rgb(59, 130, 246)' },
              { label: 'Advanced', color: 'rgb(139, 92, 246)' },
              { label: 'Intermediate', color: 'rgb(6, 182, 212)' },
              { label: 'Basic', color: 'rgb(148, 163, 184)' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: item.color,
                  boxShadow: `0 0 15px ${item.color}80`
                }} />
                <span style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  fontWeight: '500'
                }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;