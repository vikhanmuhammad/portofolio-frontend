// src/components/Experience.jsx
import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import expbg from '../assets/images/expbg.jpg';

import experiences from '../data/experience'; // 👉 ambil data hardcode

const Experience = () => {
  return (
    <section id="experience" className="mt-64 px-4">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="md:ml-40" />
        <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">EXPERIENCE</h7>
      </div>
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src={expbg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-[300px] object-cover z-0 hidden md:block"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-wrap justify-center mt-32 gap-6">
          {experiences.length === 0 ? (
            <p>No experience available</p>
          ) : (
            <ul className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-6">
              {experiences.map((exp) => (
                <li
                  key={exp._id}
                  className="group w-full max-w-[700px] h-auto p-4 flex flex-col justify-center items-center text-center mt-4 border border-gray-700 rounded-lg cursor-pointer"
                >
                  {/* Always visible */}
                  <div>
                    <p className="font-inknut text-gold text-3xl">{exp.position}</p>
                    <h3 className="font-semibold font-instrument text-grey mt-3">
                      {exp.startYear} - {exp.endYear}
                      <p className="text-gray-500">{exp.status}</p>
                    </h3>
                  </div>

                  {/* Hidden, show on hover */}
                  <div className="mt-6 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[400px] transition-all duration-500 ease-in-out">
                    <p className="text-white font-instrument font-bold">{exp.organization}</p>
                    <p className="font-instrument text-grey text-xl mt-2">{exp.description}</p>
                    <a href="#downloadCV" className="block w-full mt-6 flex justify-center">
                      <div className="outline outline-2 outline-white bg-white text-darkblue font-bold px-12 py-2 flex justify-center items-center gap-4 hover:bg-darkblue hover:text-white transition">
                        <p>EVIDENCE</p>
                        <FontAwesomeIcon icon={faCaretRight} />
                      </div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;