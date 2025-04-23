// src/components/Banner.jsx
import React from 'react';
import '../index.css'
import logoVM from '../assets/images/logoVM.png';

const Banner = () => {
  return (
    <section className="flex justify-center space-x-12 mt-36">
      <div className="content-center">
        <h2 className="font-instrument font-semibold text-grey text-[24px]">SOFTWARE DEVELOPER</h2>
        <h1 className="mt-6 font-inknut font-bold text-white text-[48px]">VIKHAN MUHARRAM</h1>
        <h3 className="mt-6 font-instrument text-gold text-[24px]">Turning ideas into real-world apps</h3>
      </div>

      <div>
        <img src={logoVM} alt="Logo VM" className="w-700 h-467" />
      </div>
    </section>
  );
};

export default Banner;
