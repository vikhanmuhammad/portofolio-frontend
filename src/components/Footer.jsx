import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, url: personalInfo.socials.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.socials.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: personalInfo.socials.twitter, label: 'Twitter' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '60px',
        paddingBottom: '40px',
        marginTop: '120px'
      }}
    >
      <div className="container">
        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: windowWidth > 768 ? '2fr 1fr 1fr 1fr' : '1fr',
            gap: windowWidth > 768 ? '64px' : '32px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Section */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--accent-primary)', marginBottom: '16px' }}>
              {personalInfo.name}
            </h3>
            <p style={{ marginBottom: '24px', lineHeight: '1.7', maxWidth: '300px' }}>
              {personalInfo.title} passionate about building innovative solutions and creating exceptional digital experiences.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-primary)';
                      e.currentTarget.style.color = 'var(--bg-primary)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-tertiary)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.slice(0, 3).map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '20px' }}>
              More
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.slice(3, 6).map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '20px' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', wordBreak: 'break-all' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                >
                  {personalInfo.email}
                </a>
              </li>
              <li style={{ marginBottom: '12px', color: 'var(--text-muted)', fontSize: '14px' }}>{personalInfo.phone}</li>
              <li style={{ marginBottom: '12px', color: 'var(--text-muted)', fontSize: '14px' }}>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            © {currentYear} {personalInfo.name}. Made with <Heart size={16} color="var(--accent-primary)" fill="var(--accent-primary)" /> and lots of coffee
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '14px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')} onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')} onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
