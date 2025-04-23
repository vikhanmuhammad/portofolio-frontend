import React from 'react'; 
import '../index.css';

const Navbar = () => { 
  return ( 
    <div className="flex justify-center"> {/* Centering navbar */}
        <ul className="flex space-x-48 mt-10 font-instrument font-bold"> {/* Horizontal layout with spacing between items */}
            <li><a href="#about" className="text-lg text-white">ABOUT</a></li>
            <li><a href="#education" className="text-lg text-white">EDUCATION</a></li>
            <li><a href="#experience" className="text-lg text-white">EXPERIENCE</a></li>
            <li><a href="#footer" className="text-lg text-white">CONTACT</a></li>
        </ul> 
    </div>
  ); 
};

export default Navbar;
