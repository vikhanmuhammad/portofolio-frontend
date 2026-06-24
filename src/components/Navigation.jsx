import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'about.me', href: '#about' },
  { name: 'edu.json', href: '#education' },
  { name: 'skills/', href: '#skills' },
  { name: 'stack.ts', href: '#tech' },
  { name: 'work.log', href: '#experience' },
  { name: 'certs.pem', href: '#certifications' },
  { name: 'projects/', href: '#projects' },
  { name: 'contact.sh', href: '#contact' },
];

const Navigation = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const username = personalInfo.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
          backdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid var(--divider)' : 'none',
          transition: 'all 0.3s ease',
          padding: '14px 0',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
            {/* Traffic lights + path */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}
            >
              <span style={{ display: 'flex', gap: '6px' }}>
                <span className="term-dot" style={{ background: 'var(--tl-red)', width: '9px', height: '9px' }} />
                <span className="term-dot" style={{ background: 'var(--tl-yellow)', width: '9px', height: '9px' }} />
                <span className="term-dot" style={{ background: 'var(--tl-green)', width: '9px', height: '9px' }} />
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                }}
              >
                ~/{username}
              </span>
            </a>

            {/* Desktop nav */}
            {!isMobile && (
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      fontWeight: '500',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      transition: 'color 0.2s ease, background 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-primary)';
                      e.currentTarget.style.background = 'var(--accent-bg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {item.name}
                  </a>
                ))}

                <span className="status-pill" style={{ marginLeft: '8px', padding: '5px 12px', fontSize: '11px' }}>
                  <span className="status-dot" />
                  available
                </span>

                <button
                  className="theme-toggle"
                  onClick={toggleTheme}
                  title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  style={{ marginLeft: '8px' }}
                >
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                  {theme === 'dark' ? 'light' : 'dark'}
                </button>
              </div>
            )}

            {/* Mobile: theme toggle + hamburger */}
            {isMobile && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button className="theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-primary)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.background = 'var(--accent-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-primary)';
                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                  }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '64px',
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '300px',
              background: 'var(--nav-bg-mobile)',
              backdropFilter: 'blur(12px)',
              borderLeft: '1px solid var(--divider)',
              zIndex: 999,
              padding: '28px 20px',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '15px',
                    fontWeight: '500',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-primary)';
                    e.currentTarget.style.background = 'var(--accent-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {item.name}
                </motion.a>
              ))}

              <span className="status-pill" style={{ marginTop: '16px', alignSelf: 'flex-start' }}>
                <span className="status-dot" />
                available
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.4)',
              zIndex: 998,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
