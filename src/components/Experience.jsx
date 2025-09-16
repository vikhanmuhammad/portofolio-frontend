// src/components/Experience.jsx
import React, { useState } from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import experiences from '../data/experience';

const Experience = () => {
  const [showFull, setShowFull] = useState({});

  const toggleShow = (id) => {
    setShowFull((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="mt-64 px-4">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="md:ml-40" />
        <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">EXPERIENCE</h7>
      </div>

      <div className="relative w-full">
        <div className="relative z-10 flex flex-wrap justify-start mt-10 gap-6">
          {experiences.length === 0 ? (
            <p>No experience available</p>
          ) : (
            <ul className="flex flex-col gap-6 w-full">
              {experiences.map((exp) => (
                <li
                  key={exp._id}
                  className="w-full bg-bluelist lg:max-w-[75%] h-auto p-4 flex flex-col lg:flex-row items-start text-left px-10 py-10 border border-gray-700 rounded-lg gap-6 mx-auto"
                >
                  {/* Kolom Tahun */}
                  <div className="flex-shrink-0 lg:w-32">
                    <h3 className="font-semibold font-instrument text-grey">
                      {exp.startYear} - {exp.endYear}
                    </h3>
                  </div>

                  {/* Kolom Konten */}
                  <div className="flex flex-col items-start flex-1">
                    <p className="font-inknut text-gold text-3xl">{exp.position}</p>
                    <p className="font-semibold font-instrument text-gray-500 mt-2">{exp.status}</p>

                    <div className="mt-2">
                      <p className="text-white font-instrument font-bold">{exp.organization}</p>

                      {/* Description */}
                      <p
                        className={`font-instrument text-grey text-l mt-2 overflow-hidden line-clamp-3 md:line-clamp-none ${
                          showFull[exp._id] ? 'line-clamp-none' : ''
                        }`}
                      >
                        {exp.description}
                      </p>

                      {/* Tombol Show More / Less hanya tampil di mobile */}
                      <button
                        className="text-gold font-bold mt-1 md:hidden"
                        onClick={() => toggleShow(exp._id)}
                      >
                        {showFull[exp._id] ? 'Show Less' : 'Show More'}
                      </button>

                      {/* Technologies and Tools */}
                      <p className="font-semibold font-instrument text-gray-500 mt-4">Tools & Technolgies</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies && exp.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gold text-darkblue text-l font-semibold px-3 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
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
