import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // TODO: Integrate with email service backend
    // For now, just simulate sending
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <h2>Get In <span className="accent">Touch</span></h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>Have a project in mind? Let's work together!</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1.5fr' : '1fr', gap: '48px', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="h2" style={{ marginBottom: '24px' }}>Contact Information</h3>
              <p className="body-md" style={{ marginBottom: '32px', lineHeight: '1.7' }}>
                Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
              </p>

              <div style={{ marginBottom: '48px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--accent-bg)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={24} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>Email</div>
                    <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '16px' }}>{personalInfo.email}</a>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--accent-bg)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={24} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>Phone</div>
                    <div style={{ color: 'var(--text-primary)', fontSize: '16px' }}>{personalInfo.phone}</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--accent-bg)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={24} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>Location</div>
                    <div style={{ color: 'var(--text-primary)', fontSize: '16px' }}>{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-secondary)' }}>Follow Me</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { icon: Github, url: personalInfo.socials.github },
                    { icon: Linkedin, url: personalInfo.socials.linkedin },
                    { icon: Twitter, url: personalInfo.socials.twitter }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '48px',
                          height: '48px',
                          background: 'var(--bg-secondary)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-muted)',
                          transition: 'all 0.2s ease',
                          border: '1px solid var(--border-subtle)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--accent-primary)';
                          e.currentTarget.style.color = 'var(--bg-primary)';
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-secondary)';
                          e.currentTarget.style.color = 'var(--text-muted)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        }}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} style={{
                background: 'var(--bg-secondary)',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Tell me about your project..."
                    rows="6"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={formStatus === 'sending'}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: formStatus === 'sending' ? 0.7 : 1,
                    cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer'
                  }}
                >
                  {formStatus === 'sending' ? 'Sending...' : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      marginTop: '16px',
                      padding: '12px',
                      background: 'var(--accent-bg)',
                      border: '1px solid var(--accent-primary)',
                      borderRadius: '8px',
                      color: 'var(--accent-primary)',
                      textAlign: 'center',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;