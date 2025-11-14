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

const TechStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [shuffledTech, setShuffledTech] = useState([]);

  useEffect(() => {
    const shuffled = [...techStack].sort(() => Math.random() - 0.5);
    setShuffledTech(shuffled);
  }, []);

  const getIcon = (techName) => {
    const iconMap = {
      Flutter: SiFlutter,
      HTML5: SiHtml5,
      CSS3: SiCss3,
      JavaScript: SiJavascript,
      Bootstrap: SiBootstrap,
      'Tailwind CSS': SiTailwindcss,
      PHP: SiPhp,
      Laravel: SiLaravel,
      Flask: SiFlask,
      'Next.js': SiNextdotjs,
      MySQL: SiMysql,
      Firebase: SiFirebase,
      MongoDB: SiMongodb,
      Oracle: SiOracle,
      'Node.js': SiNodedotjs,
      'Express.js': SiExpress,
      'Java Spring Boot': SiSpringboot,
      'React.js': SiReact,
      'GitHub Actions': SiGithubactions,
      Vercel: SiVercel,
      Figma: SiFigma,
      Golang: SiGo,
      Docker: SiDocker,
      Jest: SiJest,
      AWS: SiAmazonwebservices,
      Git: SiGit,
      'Adobe XD': SiAdobexd,
      Netlify: SiNetlify,
      n8n: Zap,
      'REST API': Code2,
      UML: Code2,
      cPanel: Cloud,
      Render: Cloud,
      'CodeIgniter 3': SiPhp,
    };
    return iconMap[techName] || Code2;
  };

  const getGlowColor = (level) => {
    switch (level) {
      case 'expert': return 'shadow-blue-400/50';
      case 'advanced': return 'shadow-purple-400/50';
      case 'intermediate': return 'shadow-cyan-400/50';
      case 'basic': return 'shadow-slate-400/40';
      default: return 'shadow-slate-400/30';
    }
  };

  const getColorByLevel = (level) => {
    switch (level) {
      case 'expert': return 'text-blue-400';
      case 'advanced': return 'text-purple-400';
      case 'intermediate': return 'text-cyan-400';
      case 'basic': return 'text-slate-400';
      default: return 'text-slate-400';
    }
  };

  const duplicatedTech = [...shuffledTech, ...shuffledTech];

  return (
    <section id="tech" className="section overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="section-title text-center mb-8">
            <h2 className="text-3xl font-bold">
              Tech <span className="text-indigo-500">Stack</span>
            </h2>
            <p className="text-lg text-gray-300 mt-2">
              Technologies and tools I use
            </p>
          </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden py-8">
            {/* Gradient edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: [0, -(shuffledTech.length * 180)] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 100, ease: 'linear' } }}
              className="flex gap-6"
            >
              {duplicatedTech.map((tech, index) => {
                const Icon = getIcon(tech.name);
                const glowClass = getGlowColor(tech.level);
                const colorClass = getColorByLevel(tech.level);

                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className={`flex flex-col justify-between items-center min-w-[120px] h-[125px] p-4 rounded-xl ${glowClass} shadow-lg flex-shrink-0`}
                  >
                    <div className={`text-5xl ${colorClass}`}>
                      <Icon />
                    </div>
                    <div className="mt-2 text-center font-normal text-white text-sm">
                      {tech.name}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {[
              { label: 'Expert', color: 'bg-blue-400' },
              { label: 'Advanced', color: 'bg-purple-400' },
              { label: 'Intermediate', color: 'bg-cyan-400' },
              { label: 'Basic', color: 'bg-slate-400' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-white text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;