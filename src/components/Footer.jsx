// src/components/Footer.jsx
import React from 'react';
import '../index.css'
import { Instagram, Mail, Linkedin, Phone } from 'lucide-react';
import logoVM from '../assets/images/logoVMbg.jpg';

const Footer = () => {
  return (
    <section id="footer" style={{ backgroundImage: `url("/assets/images/footertexture.jpg")` }}
    className="relative flex flex-wrap bg-cover bg-center bg-no-repeat outline outline-2 outline-blue justify-center mt-10">
      <div className="mt-10 mr-10">
        <p className="font-instrument text-white font-semibold text-lg">Contact</p>
        <div className="flex gap-4 items-center mt-6">
          <a href="https://www.instagram.com/vikhanmuharram" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-gold w-12 h-12 hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:muhammadvikhanmuharram@gmail.com">
            <Mail className="text-gold w-12 h-12 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/vikhan-muharram-a1787a148/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-gold w-12 h-12 hover:scale-110 transition-transform" />
          </a>
          <a href="https://wa.me/6281221003708">
            <Phone className="text-gold w-12 h-12 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      <div>
        <img src={logoVM} alt="Logo VM" className="w-[142px] mt-10 mb-10 outline outline-2 outline-blue" />
      </div>

      <div className="flex flex-wrap ml-10 items-center gap-6">
        <a href="#about" className="font-inknut text-3xl text-white hover:text-gold transition">About</a>
        <p className="font-inknut text-3xl text-blue font-bold">/</p>
        <a href="#education" className="font-inknut text-3xl text-white hover:text-gold transition">Education</a>
        <p className="font-inknut text-3xl text-blue font-bold">/</p>
        <a href="#experience" className="font-inknut text-3xl text-white hover:text-gold transition">Experience</a>
        <p className="font-inknut text-3xl text-blue font-bold">/</p>
        <a href="#footer" className="font-inknut text-3xl text-white hover:text-gold transition">Contact</a>
      </div>
    </section>
  );
};

export default Footer;
