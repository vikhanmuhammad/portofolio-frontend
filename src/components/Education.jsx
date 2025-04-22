// src/components/Education.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    <section id="education">
      <div>
        <img src="/assets/images/Background.jpg" alt="Background" className="w-64 h-40" />
        <img src="/assets/images/logoTelkom.jpg" alt="Logo Telkom" className="w-64 h-40" />
        <h4>{profile.college}</h4>
        <p>{profile.bachelor}</p>
        <o>{profile.startYear} - {profile.endYear}</o>
        <img src="/assets/images/tult.jpg" alt="TULT" className="w-64 h-40" />
      </div>
    </section>
  );
};

export default Education;
