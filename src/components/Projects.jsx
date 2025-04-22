import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_BASE;
//CEKK

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/projects/`)
      .then(res => {
        setProjectsList(res.data);
      })
      .catch(err => {
        console.error('Error fetching projects data:', err);
      });
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectsList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="Projects-list">
          {projectsList.map((prj) => (
            <li key={prj._id}>
              <img src="/assets/images/prjprvw.jpg" alt="Preview" width="300" height="200" />
              <p>{prj.type}</p>
              <h1>{prj.title}: {prj.motto}</h1>
              <p>As {prj.position}</p>
              <p>{prj.description}</p>

              <div>
                <strong>Technologies:</strong>
                <ul>
                  {prj.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong>Links:</strong>
                <ul>
                  {prj.link.map((url, idx) => (
                    <li key={idx}>
                      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#coba">Try it!</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Projects;
