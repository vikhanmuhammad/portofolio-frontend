// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar">
        <ul class="navbar-list">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
