import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { engineeringSkills, skillCategories } from '../data/portfolioData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const EngineeringSkills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = ['expert', 'advanced', 'intermediate', 'basic'];

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <h2>Engineering <span className="accent">Skills</span></h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>Categorized by experience level and real-world application</p>
          </div>

          {/* Category Statistics */}
          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '48px' }}>
            {categories.map((category, index) => {
              const categoryData = skillCategories[category];
              const skillCount = categoryData.skills.length;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: `2px solid ${categoryData.color}`,
                    borderRadius: '16px',
                    padding: '32px 24px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: categoryData.color,
                    boxShadow: `0 0 20px ${categoryData.color}`
                  }} />
                  
                  <div style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: categoryData.color,
                    marginBottom: '12px',
                    textShadow: `0 0 30px ${categoryData.color}`
                  }}>
                    {skillCount}
                  </div>
                  
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    textTransform: 'uppercase'
                  }}>
                    {categoryData.label}
                  </h3>
                  
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5'
                  }}>
                    {categoryData.description}
                  </p>
                  
                  <div style={{ marginTop: '16px', color: categoryData.color }}>
                    {expandedCategory === category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Category Details */}
          <AnimatePresence>
            {expandedCategory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  padding: '32px',
                  marginBottom: '32px',
                  border: `2px solid ${skillCategories[expandedCategory].color}`
                }}
              >
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: skillCategories[expandedCategory].color,
                  marginBottom: '24px',
                  textTransform: 'uppercase'
                }}>
                  {skillCategories[expandedCategory].label} Skills
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
                  gap: '16px'
                }}>
                  {skillCategories[expandedCategory].skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: 'var(--bg-primary)',
                        borderRadius: '8px',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: skillCategories[expandedCategory].color,
                        boxShadow: `0 0 10px ${skillCategories[expandedCategory].color}`
                      }} />
                      <span style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)'
                      }}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Bars for Top Skills */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              Top Skills Overview
            </h3>
            {engineeringSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ marginBottom: '32px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className="h3" style={{ fontSize: '18px', color: 'var(--text-primary)' }}>{skill.name}</span>
                  <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--accent-primary)' }}>{skill.level}%</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '12px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      background: skill.category === 'expert' 
                        ? 'var(--gradient-blue-purple)'
                        : skill.category === 'advanced'
                        ? 'var(--gradient-purple-cyan)'
                        : 'var(--gradient-blue-cyan)',
                      borderRadius: '6px',
                      position: 'relative',
                      boxShadow: skill.category === 'expert'
                        ? '0 0 20px rgba(59, 130, 246, 0.5)'
                        : skill.category === 'advanced'
                        ? '0 0 20px rgba(139, 92, 246, 0.5)'
                        : '0 0 20px rgba(6, 182, 212, 0.5)'
                    }}
                  >
                    <motion.div
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '50%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringSkills;