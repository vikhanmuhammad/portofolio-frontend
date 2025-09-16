// src/components/About.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

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

import profile from '../data/profile';

const About = () => {
  const skills = [
    { src: laravel, name: 'Laravel' },
    { src: flutter, name: 'Flutter' },
    { src: python, name: 'Python' },
    { src: ci3, name: 'CI3' },
    { src: springboot, name: 'SpringBoot' },
    { src: bootstrap, name: 'Bootstrap' },
    { src: figma, name: 'Figma' },
    { src: tailwind, name: 'Tailwind' },
    { src: nodejs, name: 'Node JS' },
    { src: reactjs, name: 'React JS' },
  ];

  return (
    <section id="about" className="mt-64 px-4">
      {/* Header Section */}
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="md:ml-40" />
        <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">ABOUT</h7>
      </div>

      {/* 2 Kolom: Get to know me & My Skills */}
      <div className="flex flex-col lg:flex-row justify-center mt-28 md:mx-48 gap-10">
        {/* Kolom kiri: Get to know me */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h4 className="font-inknut text-[28px] lg:text-[36px] text-white">Get to know me!</h4>
          <h6 className="font-instrument mt-3 text-grey text-[14px] lg:text-[16px]">A Software Engineer with hands-on experience in user requirement analysis, software architecture
 design, and the development of web-based systems and machine learning applications. Skilled in building APIs,
 integrating ML models into applications, and collaborating across teams using Lean Startup and SCRUM approaches.
 Capable of bridging communication between technical and non-technical stakeholders. Actively engaged as a
 teaching assistant and in student organizations, demonstrating strong communication and leadership abilities.</h6>

          <div className="flex flex-wrap gap-6 mt-12">
            <a href="#footer" className="outline outline-2 outline-gold bg-gold text-darkblue text-bold py-2 px-12 hover:bg-darkblue hover:text-gold transition">
              <div className="flex items-center gap-4">
                <p>Contact</p>
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
            </a>
          </div>
        </div>

        {/* Kolom kanan: My Skills */}
        <div className="w-full lg:w-1/2 flex flex-col mt-6 lg:mt-0">
          <p className="font-inknut text-[28px] lg:text-[36px] text-white">My Skills</p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            {skills.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center bg-darkblue/50 p-4 rounded-lg shadow-md hover:scale-105 transition-transform w-[90px]"
              >
                <img src={tech.src} alt={tech.name} className="h-[45px] mb-2" />
                <p className="text-white font-instrument text-sm text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
