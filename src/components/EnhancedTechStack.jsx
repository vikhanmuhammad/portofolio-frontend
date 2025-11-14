import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../data/portfolioData';
import {
  SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiPhp, SiLaravel,
  SiFlask, SiNextdotjs, SiMysql, SiFirebase, SiMongodb, SiOracle, SiNodedotjs,
  SiExpress, SiSpringboot, SiReact, SiGithubactions, SiVercel, SiFigma,
  SiGo, SiDocker, SiJest, SiAmazonwebservices, SiFlutter, SiGit, SiAdobexd, SiNetlify
} from 'react-icons/si';
import { Code2, Cloud, Zap, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const EnhancedTechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [shuffledTech, setShuffledTech] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const shuffled = [...techStack].sort(() => Math.random() - 0.5);
    setShuffledTech(shuffled);
  }, []);

  const getIcon = (techName) => {
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
    return iconMap[techName] || Code2;
  };

  const getColorByLevel = (level) => {
    const colors = {
      expert: { text: 'text-blue-400', glow: 'rgba(59, 130, 246, 0.4)' },
      advanced: { text: 'text-purple-400', glow: 'rgba(139, 92, 246, 0.4)' },
      intermediate: { text: 'text-cyan-400', glow: 'rgba(6, 182, 212, 0.4)' },
      basic: { text: 'text-slate-400', glow: 'rgba(148, 163, 184, 0.4)' }
    };
    return colors[level] || colors.basic;
  };

  const duplicatedTech = [...shuffledTech, ...shuffledTech, ...shuffledTech];

  return (
    <section ref={sectionRef} id="tech" className="section overflow-hidden" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      {/* Animated background */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          y
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title text-center mb-8">
            <motion.h2 
              className="text-3xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Tech <span className="text-indigo-500">Stack</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mt-2 flex items-center justify-center gap-2"
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
              Technologies and tools I use
            </motion.p>
          </div>

          {/* Interactive 3D Carousel */}
          <div className="relative w-full overflow-hidden py-8">
            {/* Gradient edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: [0, -(shuffledTech.length * 180)] }}
              transition={{ 
                x: { 
                  repeat: Infinity, 
                  repeatType: 'loop', 
                  duration: 80, 
                  ease: 'linear' 
                } 
              }}
              className="flex gap-6"
              whileHover={{ animationPlayState: 'paused' }}
            >
              {duplicatedTech.map((tech, index) => {
                const Icon = getIcon(tech.name);
                const colors = getColorByLevel(tech.level);

                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className={`flex flex-col justify-between items-center min-w-[140px] h-[150px] p-6 rounded-2xl shadow-lg flex-shrink-0 cursor-pointer`}
                    style={{
                      background: 'var(--bg-primary)',
                      border: `2px solid ${hoveredIndex === index ? colors.glow : 'var(--border-subtle)'}`,
                      boxShadow: hoveredIndex === index ? `0 20px 60px ${colors.glow}` : '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ 
                      y: -15,
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: (index % 10) * 0.05 }}
                  >
                    <motion.div 
                      className={`text-6xl ${colors.text}`}
                      animate={hoveredIndex === index ? { 
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.2, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon />
                    </motion.div>
                    <motion.div 
                      className="mt-3 text-center font-semibold text-white text-sm"
                      animate={hoveredIndex === index ? { 
                        color: colors.glow,
                        scale: 1.05
                      } : {}}
                    >
                      {tech.name}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Legend with animations */}
          <div className="flex justify-center gap-8 mt-12 flex-wrap">
            {[
              { label: 'Expert', color: 'bg-blue-400', glow: '0 0 20px rgba(59, 130, 246, 0.6)' },
              { label: 'Advanced', color: 'bg-purple-400', glow: '0 0 20px rgba(139, 92, 246, 0.6)' },
              { label: 'Intermediate', color: 'bg-cyan-400', glow: '0 0 20px rgba(6, 182, 212, 0.6)' },
              { label: 'Basic', color: 'bg-slate-400', glow: '0 0 20px rgba(148, 163, 184, 0.6)' },
            ].map((item, index) => (
              <motion.div 
                key={item.label} 
                className="flex items-center gap-3 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className={`w-4 h-4 rounded-full ${item.color}`}
                  animate={{
                    boxShadow: [item.glow, '0 0 10px transparent', item.glow],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <span className="text-white text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTechStack;