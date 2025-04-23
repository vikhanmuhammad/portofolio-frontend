// src/components/Experience.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import expbg from '../assets/images/expbg.jpg';
const BASE_URL = process.env.REACT_APP_API_BASE;

const Experience = () => {
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/experience/`)
      .then(res => {
        setExperienceList(res.data);
      })
      .catch(err => {
        console.error('Error fetching experience data:', err);
      });
  }, []);

  return (
    <section id="experience" className='mt-64'>
      <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="ml-40"/>
      <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">EXPERIENCE</h7>
      <div className="relative w-full">
        {/* Background Image (di belakang) */}
        <img
          src={expbg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-[300px] object-cover z-0 mt-0 outline outline-6 outline-blue"
        />

        {/* Konten lain (di atas background) */}
        <div className="relative z-10 flex flex-wrap justify-center mt-32 gap-24">
        {experienceList.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul className="flex flex-wrap justify-center items-center gap-6">
            {experienceList.map((exp) => (
              <li
                key={exp._id}
                className="w-[700px] h-[260px] p-4 flex flex-col justify-center items-center text-center mt-4"
              >
                {/* Konten yang selalu terlihat */}
                <div>
                  <p className="font-inknut text-gold text-3xl">{exp.position}</p>
                  <h3 className="font-semibold font-instrument text-grey mt-3">
                    {exp.startYear} - {exp.endYear}
                    <p className="text-gray-500">{exp.status}</p>
                  </h3>
                </div>

                <div className="mt-6">
                  <p className="text-white font-instrument font-bold">{exp.organization}</p>
                  <p className="font-instrument text-grey text-xl">{exp.description}</p>
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
          // <ul className="flex flex-wrap justify-center items-center gap-6">
          //   {experienceList.map((exp) => (
          //     <li
          //       key={exp._id}
          //       className="group w-[700px] h-[260px] p-4 flex flex-col justify-center items-center text-center hover:bg-darkblue hover:outline outline-6 outline-blue transition"
          //     >
          //       {/* Selalu terlihat */}
          //       <div>
          //         <p className="font-inknut text-gold text-3xl">{exp.position}</p>
          //         <h3 className="font-semibold font-instrument text-grey mt-3">
          //           {exp.startYear} - {exp.endYear}
          //           <p className="text-gray-500">{exp.status}</p>
          //         </h3>
          //       </div>

          //       {/* Disembunyikan dan hanya tampil saat hover */}
          //       <div className="hidden group-hover:block mt-2">
          //         <p className="text-white font-instrument font-bold">{exp.organization}</p>
          //         <p className="font-instrument text-grey">{exp.description}</p>
          //         <a href="#downloadCV" className="block w-full mt-3">
          //           <div className="outline outline-2 outline-white bg-white text-darkblue font-bold px-4 py-2 flex justify-center gap-4 hover:bg-darkblue hover:text-white transition">
          //             <p>EVIDENCE</p>
          //             <FontAwesomeIcon icon={faCaretRight} />
          //           </div>
          //         </a>
          //       </div>
          //     </li>
          //   ))}
          // </ul>
        )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
