import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Users, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const cardRef = useRef(null);
  
  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);

  const highlights = [
    { icon: Users, label: 'Team Player', value: 'Collaborative', color: 'rgba(6, 182, 212, 0.1)' },
    { icon: Award, label: 'Quality First', value: 'Excellence', color: 'rgba(59, 130, 246, 0.1)' }
  ];
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="section overflow-x-hidden"
      style={{ background: 'var(--bg-primary)', position: 'relative' }}
    >
      {/* Floating background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0
        }}
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          {...fadeInUp}
          animate={inView ? fadeInUp.animate : fadeInUp.initial}
        >
          {/* Section Title */}
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About <span className="accent">Me</span>
            </motion.h2>
            <motion.p 
              className="body-lg" 
              style={{ maxWidth: '600px', margin: '0 auto' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get to know more about my journey and what drives me
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            {/* Profile with 3D Tilt and Glow */}
            <motion.div
              {...fadeInLeft}
              animate={inView ? fadeInLeft.animate : fadeInLeft.initial}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center relative"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Glow Rings */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: '-20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-purple))',
                    opacity: 0.3,
                    filter: 'blur(30px)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
                
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: '-10px',
                    borderRadius: '50%',
                    border: '2px solid rgba(59, 130, 246, 0.2)',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
                
                <motion.img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-48 md:w-72 aspect-square rounded-full object-cover border-4 border-[var(--accent-primary)] relative z-10"
                  whileHover={{
                    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)'
                  }}
                />
                
                {/* Floating icons */}
                {[Code2, Zap, Award].map((Icon, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: `${20 + i * 30}%`,
                      right: i % 2 === 0 ? '-10%' : 'auto',
                      left: i % 2 !== 0 ? '-10%' : 'auto',
                      background: 'var(--bg-secondary)',
                      borderRadius: '12px',
                      padding: '12px',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: 'easeInOut'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon size={20} color="var(--accent-primary)" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* About Text */}
            <motion.div
              {...fadeInRight}
              animate={inView ? fadeInRight.animate : fadeInRight.initial}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h3
                className="text-2xl md:text-4xl font-bold mb-6"
                style={{ color: 'var(--accent-primary)' }}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {personalInfo.title}
              </motion.h3>
              
              <motion.p
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {personalInfo.bio}
              </motion.p>

              {/* Highlights with 3D hover effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                      }}
                      className="flex items-center gap-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-5 transition-all cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}, var(--bg-secondary))`,
                      }}
                    >
                      <motion.div
                        className="w-12 h-12 flex items-center justify-center bg-[var(--accent-bg)] rounded-lg"
                        style={{ color: 'var(--accent-primary)' }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <div>
                        <div className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                          {item.label}
                        </div>
                        <motion.div 
                          className="text-base font-semibold" 
                          style={{ color: 'var(--text-primary)' }}
                          whileHover={{ color: 'var(--accent-primary)' }}
                        >
                          {item.value}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;