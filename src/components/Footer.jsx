// src/components/Footer.jsx
import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <section id="footer">
      <div>
        <p>CONTACT</p>
        <img src="/assets/images/ig.jpg" alt="Instagram" className="w-64 h-40" />
        <img src="/assets/images/WA.jpg" alt="WhatsApp" className="w-64 h-40" />
        <img src="/assets/images/mail.jpg" alt="Mail" className="w-64 h-40" />
        <img src="/assets/images/link.jpg" alt="LinkenIn" className="w-64 h-40" />
      </div>

      <div>
        <img src="/assets/images/bgLogo.jpg" alt="BG Logo" className="w-64 h-40" />
        <img src="/assets/images/logoVM.jpg" alt="Logo VM" className="w-64 h-40" />
      </div>

      <div>
        <p>About / Education / Experience / Contact</p>
        <p>2025 COPYRIGHT  |  MUHAMMAD VIKHAN MUHARRAM  |  ALL RIGHTS RESERVED </p>
      </div>
    </section>
  );
};

export default Footer;
