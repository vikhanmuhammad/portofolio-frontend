// src/components/About.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_BASE;

const About = () => {
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
    <section id="about">
      <div>
        <img src="/assets/images/profile.jpg" alt="Foto Profil" className="w-64 h-40" />
      </div>

      <div>
        <h4>{profile.name}</h4>
        <h6>{profile.bio}</h6>     
      </div>

      <div>
        <p>SKILLS : </p>
        <img src="/assets/images/laravel.jpg" alt="Logo Laravel" className="w-64 h-40" />
        <img src="/assets/images/flutter.jpg" alt="Logo Flutter" className="w-64 h-40" />
        <img src="/assets/images/python.jpg" alt="Logo Python" className="w-64 h-40" />
        <img src="/assets/images/ci3.jpg" alt="Logo CI3" className="w-64 h-40" />
        <img src="/assets/images/figma.jpg" alt="Logo Figma" className="w-64 h-40" />
        <img src="/assets/images/springboot.jpg" alt="Logo SpringBoot" className="w-64 h-40" />
        <img src="/assets/images/bootstrap.jpg" alt="Logo Bootstrap" className="w-64 h-40" />
        <img src="/assets/images/tailwind.jpg" alt="Logo Tailwind" className="w-64 h-40" />
        <img src="/assets/images/nodejs.jpg" alt="Logo Node JS" className="w-64 h-40" />
        <img src="/assets/images/reactjs.jpg" alt="Logo React JS" className="w-64 h-40" />
      </div>

      <div>
        <a href="#goToProjects">Go to Projects</a>
        <a href="#downloadCV">Download CV</a>
      </div>
    </section>
  );
};

export default About;
