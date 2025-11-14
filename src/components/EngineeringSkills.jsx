import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          {/* Section title */}
          <div className="section-title text-center mb-8">
            <h2 className="text-3xl font-bold">
              Engineering <span className="accent">Skills</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Categorized by experience level and real-world application
            </p>
          </div>

          {/* Categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categoryData = skillCategories[category];
              const skillCount = categoryData.skills.length;
              const isExpanded = expandedCategory === category;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-[var(--bg-secondary)] border-2 border-[${categoryData.color}] rounded-xl p-6 cursor-pointer relative`}
                  whileHover={{ scale: 1.05, y: -8 }}
                  onClick={() => setExpandedCategory(isExpanded ? null : category)}
                  layout
                >
                  {/* Top color bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: categoryData.color,
                      boxShadow: `0 0 20px ${categoryData.color}`,
                    }}
                  />

                  {/* Category count */}
                  <div
                    className="text-4xl font-bold mb-2 text-center"
                    style={{
                      color: categoryData.color,
                      textShadow: `0 0 30px ${categoryData.color}`,
                    }}
                  >
                    {skillCount}
                  </div>

                  {/* Category label */}
                  <h3 className="text-center text-lg font-semibold uppercase mb-2 text-white">
                    {categoryData.label}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-sm text-gray-400 mb-2">
                    {categoryData.description}
                  </p>

                  {/* Expand icon */}
                  <div className="flex justify-center mt-2 text-white">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
                          className="mt-4"
                        >
                          <div className="grid grid-cols-1 gap-2">
                            {categoryData.skills.map((skill, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                className="flex items-center gap-2 p-2 rounded bg-[var(--bg-primary)] border border-gray-700"
                              >
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{
                                    background: categoryData.color,
                                    boxShadow: `0 0 8px ${categoryData.color}`,
                                  }}
                                />
                                <span className="text-sm text-gray-200">{skill}</span>
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
                  layout // <- kunci animasi smooth height
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden', marginTop: '32px' }}
                >
                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: '16px',
                      padding: '32px',
                      border: `2px solid ${skillCategories[expandedCategory].color}`,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: skillCategories[expandedCategory].color,
                        marginBottom: '24px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {skillCategories[expandedCategory].label} Skills
                    </h3>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
                        gap: '16px',
                      }}
                    >
                      {skillCategories[expandedCategory].skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          layout // <- ikut animasi height container
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: idx * 0.05 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 16px',
                            background: 'var(--bg-primary)',
                            borderRadius: '8px',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: skillCategories[expandedCategory].color,
                              boxShadow: `0 0 10px ${skillCategories[expandedCategory].color}`,
                            }}
                          />
                          <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
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

export default EngineeringSkills;