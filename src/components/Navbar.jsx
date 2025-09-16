import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔒 Lock scroll ketika menu burger dibuka
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darkblue flex flex-col md:flex-row md:items-center md:justify-between lg:px-24 px-5 py-6 shadow-md">
      {/* Kiri - Logo / Nama */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h2 className="font-inknut text-white font-bold text-xl">Vikhan.</h2>

        {/* Tombol hamburger (hanya muncul di mobile) */}
        <button
          className="md:hidden text-white font-bold text-2xl hover:text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu Navbar */}
      <div
        className={`${
          isOpen
            ? 'flex flex-col items-end self-end space-y-4 mt-4'
            : 'hidden'
        } md:flex md:flex-row md:space-x-12 font-instrument font-bold text-sm md:text-lg`}
      >
        <a href="#about" className="font-instrument text-white hover:text-gold transition">About</a>
        <a href="#education" className="text-white hover:text-gold transition">Education</a>
        <a href="#experience" className="text-white hover:text-gold transition">Experience</a>
        <a href="#footer" className="text-white hover:text-gold transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
