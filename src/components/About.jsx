// src/components/About.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

import fotoProfil from '../assets/images/profile.jpg';
import laravel from '../assets/images/laravel.png';
import flutter from '../assets/images/flutter.png';
import python from '../assets/images/python.png';
import ci3 from '../assets/images/ci3.png';
import figma from '../assets/images/figma.png';
import springboot from '../assets/images/springboot.png';
import bootstrap from '../assets/images/bootstrap.png';
import tailwind from '../assets/images/tailwind.png';
import nodejs from '../assets/images/nodejs.png';
import reactjs from '../assets/images/reactjs.png';

import profile from '../data/profile'; // 👉 ambil data dari file

const About = () => {
  return (
    <section id="about" className="mt-64 px-4">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="md:ml-40" />
        <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">ABOUT</h7>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-28 space-y-12 lg:space-y-0 lg:space-x-16 md:mx-48">
        <div className="flex justify-center">
          <img src={fotoProfil} alt="Foto Profil" className="w-[200px] md:w-[1000px] md:h-[325px]" />
        </div>

        <div className="flex flex-col">
          <div>
            <h4 className="font-inknut text-[28px] lg:text-[36px] text-white">{profile.name}</h4>
            <h6 className="font-instrument mt-3 text-grey text-[14px] lg:text-[16px]">{profile.bio}</h6>
          </div>

          <div>
            <p className="font-instrument text-[16px] font-semibold text-gold mt-6">SKILLS:</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <img src={laravel} alt="Logo Laravel" className="h-[45px]" />
              <img src={flutter} alt="Logo Flutter" className="h-[45px]" />
              <img src={python} alt="Logo Python" className="h-[45px]" />
              <img src={ci3} alt="Logo CI3" className="h-[45px]" />
              <img src={springboot} alt="Logo SpringBoot" className="h-[45px]" />
              <img src={bootstrap} alt="Logo Bootstrap" className="h-[45px]" />
              <img src={figma} alt="Logo Figma" className="h-[45px]" />
              <img src={tailwind} alt="Logo Tailwind" className="h-[45px]" />
              <img src={nodejs} alt="Logo Node JS" className="h-[45px]" />
              <img src={reactjs} alt="Logo React JS" className="h-[45px]" />
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-12">
            <a href="#projects" className="outline outline-2 outline-gold text-gold text-bold py-2 px-12 hover:bg-gold hover:text-darkblue transition">
              <div className="flex items-center gap-4">
                <p>Go to Projects</p>
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
            </a>
            <a href="https://www.canva.com/design/DAGSBx5qt-A/6J6CDwhKRZ-aUKF9HNoCyg/edit?utm_content=DAGSBx5qt-A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" className="outline outline-2 outline-gold bg-gold text-darkblue text-bold py-2 px-12 hover:bg-darkblue hover:text-gold transition">
              <div className="flex items-center gap-4">
                <p>Download CV</p>
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;