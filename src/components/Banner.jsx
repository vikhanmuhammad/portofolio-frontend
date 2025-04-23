// src/components/Banner.jsx
import React from 'react';
import '../index.css';
import logoVM from '../assets/images/logoVM.png';

const Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center mt-12 md:mt-36 space-y-12 lg:space-y-0 lg:space-x-12">
      <div className="text-center lg:text-left">
        <h2 className="font-instrument font-semibold text-grey text-[20px] md:text-[24px]">SOFTWARE DEVELOPER</h2>
        <h1 className="mt-6 font-inknut font-bold text-white text-[32px] md:text-[48px]">VIKHAN MUHARRAM</h1>
        <h3 className="mt-6 font-instrument text-gold text-[20px] md:text-[24px]">Turning ideas into real-world apps</h3>
      </div>

      <div>
        <img src={logoVM} alt="Logo VM" className="w-[300px] h-auto md:w-[500px] lg:w-700 lg:h-467" />
      </div>
    </section>
  );
};

export default Banner;