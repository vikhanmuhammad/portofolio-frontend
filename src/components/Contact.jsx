import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate sending
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

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
    gap: isMobile ? '32px' : '48px',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: isMobile ? '0 16px' : '0',
    overflow: 'hidden' // <-- prevent overflow
  };

  return (
    <section
      id="contact"
      className="section overflow-x-hidden" // <-- prevent horizontal scroll
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title text-center mb-8">
            <h2>
              Get In <span className="accent">Touch</span>
            </h2>
            <p
              className="body-lg"
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: isMobile ? '0 16px' : '0',
                wordBreak: 'break-word' // <-- prevent long content overflow
              }}
            >
              Have a project in mind? Let's work together!
            </p>
          </div>

          <div style={containerStyle}>
            {/* Left contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3
                className="h2"
                style={{
                  marginBottom: '24px',
                  fontSize: isMobile ? '20px' : undefined
                }}
              >
                Contact Information
              </h3>
              <p
                className="body-md"
                style={{ marginBottom: '32px', lineHeight: '1.7' }}
              >
                Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
              </p>

              <div style={{ marginBottom: '48px' }}>
                {[
                  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: 'Phone', value: personalInfo.phone },
                  { icon: MapPin, label: 'Location', value: personalInfo.location }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '16px',
                        background: 'var(--bg-secondary)',
                        borderRadius: '12px',
                        marginBottom: '16px',
                        border: '1px solid var(--border-subtle)',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        overflowWrap: 'break-word' // <-- prevent horizontal overflow
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        e.currentTarget.style.transform = 'translateX(8px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          background: 'var(--accent-bg)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={24} color="var(--accent-primary)" />
                      </div>
                      <div style={{ wordBreak: 'break-word' }}>
                        <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            style={{
                              color: 'var(--text-primary)',
                              textDecoration: 'none',
                              fontSize: isMobile ? '14px' : '16px'
                            }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div style={{ color: 'var(--text-primary)', fontSize: isMobile ? '14px' : '16px' }}>{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social links */}
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-secondary)' }}>Follow Me</h4>
                <div style={{ display: 'flex', gap: '12px', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
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

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--bg-secondary)',
                  padding: isMobile ? '24px' : '40px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)',
                  overflowWrap: 'break-word' // <-- prevent horizontal overflow
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field break-words"
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
                    className="input-field break-words"
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
                    className="input-field break-words"
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
