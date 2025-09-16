import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import '../index.css';

const roles = [
  "Software Engineer",
  "Backend Developer",
  "Frontend Developer",
  "Quality Assurance"
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // ganti teks setiap 2.5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center mt-40 md:mt-36 space-y-12 lg:space-y-0 lg:space-x-12">
      <div className="text-center">
        <h2 className="font-inknut font-bold text-grey text-[32px] md:text-[64px]">Hey, I'm</h2>
        <h1 className="font-inknut font-bold text-gold text-[32px] md:text-[64px]">Vikhan Muharram</h1>

        {/* Bagian animasi role */}
        <div className="flex justify-center items-center mt-6">
          <h3 className="me-2 font-instrument text-grey text-[20px] md:text-[24px]">A</h3>
          <h3
            key={index} // penting biar animasi re-trigger
            className="font-instrument font-bold text-white text-[20px] md:text-[24px] transition-opacity duration-700 ease-in-out opacity-100"
          >
            {roles[index]}
          </h3>
        </div>

        <h2 className="font-instrument mt-12 lg:mt-3 text-grey text-[20px]">
          Building intelligent applications on a foundation of solid architecture, driven by deep user analysis and engineering principles.
        </h2>

        <div className="flex justify-center items-center flex-wrap gap-6 mt-12">
          <a
            href="#projects"
            className="outline outline-2 outline-gold text-gold text-bold py-2 px-12 hover:bg-gold hover:text-darkblue transition"
          >
            <div className="flex items-center gap-4">
              <p>Go to Projects</p>
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
          </a>
          <a
            href="https://www.canva.com/design/DAGSBx5qt-A/6J6CDwhKRZ-aUKF9HNoCyg/edit?utm_content=DAGSBx5qt-A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="outline outline-2 outline-gold bg-gold text-darkblue text-bold py-2 px-12 hover:bg-darkblue hover:text-gold transition"
          >
            <div className="flex items-center gap-4">
              <p>Download CV</p>
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
