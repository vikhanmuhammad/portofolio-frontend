import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Users, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const highlights = [
    { icon: Code2, label: 'Clean Code', value: '5+ Years' },
    { icon: Zap, label: 'Fast Delivery', value: '50+ Projects' },
    { icon: Users, label: 'Team Player', value: 'Collaborative' },
    { icon: Award, label: 'Quality First', value: 'Excellence' }
  ];

  return (
    <section
      id="about"
      className="section overflow-x-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="section-title">
            <h2>About <span className="accent">Me</span></h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>Get to know more about my journey and what drives me</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            {/* Profile with Glow */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center relative"
            >
              <div className="relative">
                {/* Glow */}
                <div
                  className="absolute -inset-2 rounded-full opacity-20 blur-2xl animate-glow max-w-full"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-purple))'
                  }}
                />
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-48 md:w-72 aspect-square rounded-full object-cover border-4 border-[var(--accent-primary)] relative z-10"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3
                className="text-2xl md:text-4xl font-bold mb-6"
                style={{ color: 'var(--accent-primary)' }}
              >
                {personalInfo.title}
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: 'var(--text-primary)' }}
              >
                {personalInfo.bio}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-5 hover:border-[var(--accent-primary)] hover:-translate-y-1 transition-all"
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center bg-[var(--accent-bg)] rounded-lg"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                          {item.label}
                        </div>
                        <div className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Glow keyframes */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
