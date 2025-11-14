import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { engineeringSkills, skillCategories } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const EnhancedEngineeringSkills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['expert', 'advanced', 'intermediate', 'basic'];

  const handleCardHover = (category, isHovering) => {
    setHoveredCard(isHovering ? category : null);
  };

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      {/* Animated background */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="container">
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
              Engineering <span className="accent">Skills</span>
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
              Categorized by experience level and real-world application
            </motion.p>
          </div>

          {/* Interactive Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categoryData = skillCategories[category];
              const skillCount = categoryData.skills.length;
              const isExpanded = expandedCategory === category;
              const isHovered = hoveredCard === category;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => handleCardHover(category, true)}
                  onMouseLeave={() => handleCardHover(category, false)}
                  onClick={() => setExpandedCategory(isExpanded ? null : category)}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: `2px solid ${isHovered ? categoryData.color : 'var(--border-subtle)'}`,
                    borderRadius: '20px',
                    padding: '32px',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isHovered ? `0 20px 60px ${categoryData.color}40` : '0 4px 16px var(--shadow-sm)',
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Animated top bar */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: categoryData.color,
                    }}
                    animate={{
                      boxShadow: isHovered ? [
                        `0 0 20px ${categoryData.color}`,
                        `0 0 40px ${categoryData.color}`,
                        `0 0 20px ${categoryData.color}`
                      ] : `0 0 10px ${categoryData.color}`
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Skill count with animation */}
                  <motion.div
                    style={{
                      fontSize: '48px',
                      fontWeight: '800',
                      marginBottom: '16px',
                      textAlign: 'center',
                      color: categoryData.color,
                      textShadow: isHovered ? `0 0 30px ${categoryData.color}` : 'none',
                      transition: 'text-shadow 0.3s ease'
                    }}
                    animate={isHovered ? {
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {skillCount}
                  </motion.div>

                  {/* Category label */}
                  <h3 className="text-center text-lg font-bold uppercase mb-3" style={{ color: 'var(--text-primary)' }}>
                    {categoryData.label}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                    {categoryData.description}
                  </p>

                  {/* Expand icon */}
                  <div className="flex justify-center mt-4">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: categoryData.color }}
                    >
                      {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </motion.div>
                  </div>

                  {/* Expanded skills for mobile */}
                  {isMobile && (
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6"
                        >
                          <div className="grid grid-cols-1 gap-2">
                            {categoryData.skills.map((skill, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  padding: '12px',
                                  borderRadius: '12px',
                                  background: 'var(--bg-primary)',
                                  border: '1px solid var(--border-subtle)'
                                }}
                              >
                                <motion.div
                                  style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: categoryData.color,
                                  }}
                                  animate={{
                                    boxShadow: [
                                      `0 0 8px ${categoryData.color}`,
                                      `0 0 16px ${categoryData.color}`,
                                      `0 0 8px ${categoryData.color}`
                                    ]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{skill}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Expanded skills for desktop */}
          {!isMobile && (
            <AnimatePresence>
              {expandedCategory && (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginTop: '48px' }}
                >
                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: '24px',
                      padding: '40px',
                      border: `2px solid ${skillCategories[expandedCategory].color}`,
                      boxShadow: `0 20px 60px ${skillCategories[expandedCategory].color}40`
                    }}
                  >
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: skillCategories[expandedCategory].color,
                        marginBottom: '32px',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: skillCategories[expandedCategory].color,
                          boxShadow: `0 0 20px ${skillCategories[expandedCategory].color}`
                        }}
                      />
                      {skillCategories[expandedCategory].label} Skills
                    </motion.h3>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '16px',
                      }}
                    >
                      {skillCategories[expandedCategory].skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: `0 8px 24px ${skillCategories[expandedCategory].color}40`
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 20px',
                            background: 'var(--bg-primary)',
                            borderRadius: '12px',
                            border: '1px solid var(--border-subtle)',
                            cursor: 'pointer'
                          }}
                        >
                          <motion.div
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              background: skillCategories[expandedCategory].color,
                            }}
                            animate={{
                              boxShadow: [
                                `0 0 10px ${skillCategories[expandedCategory].color}`,
                                `0 0 20px ${skillCategories[expandedCategory].color}`,
                                `0 0 10px ${skillCategories[expandedCategory].color}`
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                          />
                          <span style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-secondary)' }}>
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedEngineeringSkills;