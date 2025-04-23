import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav >
      <div className="md:hidden flex">
        <button 
          className="text-white font-bold text-lg hover:text-gold mt-6 "
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>

      <div className={`mt-0 ${isOpen ? 'flex flex-col items-center space-y-4' : 'hidden'} md:flex md:flex-row md:justify-center`}>
        <ul className="mt-6 flex flex-col md:flex-row md:space-x-48 font-instrument font-bold text-sm md:text-lg items-center">
          <li><a href="#about" className="text-white hover:text-gold transition">ABOUT</a></li>
          <li><a href="#education" className="text-white hover:text-gold transition">EDUCATION</a></li>
          <li><a href="#experience" className="text-white hover:text-gold transition">EXPERIENCE</a></li>
          <li><a href="#footer" className="text-white hover:text-gold transition">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
