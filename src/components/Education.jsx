// src/components/Education.jsx
import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import edubg from '../assets/images/edubg.jpg';
import logoTelkom from '../assets/images/logoTelkom.png';
import tult from '../assets/images/tult.jpeg';

import profile from '../data/profile'; // 👉 ambil data dari file

const Education = () => {
  return (
    <section id="education" className="mt-64">
      <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="ml-5 md:ml-40"/>
      <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">EDUCATION</h7>
      <div className="relative w-full mt-32 md:mt-10">
        {/* Background Image (di belakang) */}
        <img
          src={edubg}
          alt="Background"
          className="absolute ml-64 w-[800px] mt-16 z-0 hidden lg:block"
        />

        {/* Konten lain (di atas background) */}
        <div className="relative z-10 flex flex-wrap justify-center mt-0 mx-10 md:mx-0 gap-0 md:gap-24">
          <div className="flex-col items-center justify-center text-center content-center lg:ml-32">
            <img src={logoTelkom} alt="Logo Telkom" className="w-10 lg:w-[68px] mx-auto" />
            <h4 className="text-white mt-10 font-inknut text-[24px] md:text-[36px]">{profile.college}</h4>
            <p className="font-instrument mt-6 text-[12px] md:text-[16px] font-bold text-grey">{profile.bachelor}</p>
            <p className="font-instrument mt-2 text-[12px] md:text-[16px] text-grey">{profile.startYear} - {profile.endYear}</p>
            <p className="font-instrument mt-6 text-[12px] md:text-[16px] font-bold text-grey">GPA : 3.86</p>
          </div>
          <div>
            <img src={tult} alt="TULT" className="w-50 lg:w-[341px] md:ml-16 md:mt-20 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;