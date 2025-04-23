// src/components/Education.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import edubg from '../assets/images/edubg.jpg';
import logoTelkom from '../assets/images/logoTelkom.png';
import tult from '../assets/images/tult.jpeg';
const BASE_URL = process.env.REACT_APP_API_BASE;

const Education = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/profile/`)
      .then(res => {
        setProfile(res.data[0]);
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
      });
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <section id="education" className="mt-64">
      <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="ml-40"/>
      <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">EDUCATION</h7>
      <div className="relative w-full">
        {/* Background Image (di belakang) */}
        <img
          src={edubg}
          alt="Background"
          className="absolute ml-64 w-[800px] mt-16 z-0"
        />

        {/* Konten lain (di atas background) */}
        <div className="relative z-10 flex flex-wrap justify-center mt-0 gap-24">
          <div className="flex-col items-center justify-center text-center content-center ml-32">
            <img src={logoTelkom} alt="Logo Telkom" className="w-[68px] mx-auto" />
            <h4 className="text-white mt-10 font-inknut text-[36px]">{profile.college}</h4>
            <p className="font-instrument mt-6 text-[16px] font-bold text-grey">{profile.bachelor}</p>
            <p className="font-instrument mt-2 text-[16px] text-grey">{profile.startYear} - {profile.endYear}</p>
          </div>
          <div>
            <img src={tult} alt="TULT" className="w-[341px] ml-16 mt-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
