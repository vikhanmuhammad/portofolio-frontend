// src/components/Experience.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css'
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
    <section id="experience">
      {experienceList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {experienceList.map((exp) => (
            <li key={exp._id}>
              <h3>{exp.position} <span>({exp.status})</span></h3>
              <p>{exp.organization}</p>
              <p>{exp.startYear} - {exp.endYear}</p>
              <p>{exp.description}</p>
              <a href="#evidence">Evidence</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Experience;
