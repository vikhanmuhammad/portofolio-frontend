import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import prjprvw from '../assets/images/prjprvw.jpg';
import Slider from 'react-slick'; // Import react-slick
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BASE_URL = process.env.REACT_APP_API_BASE;

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

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => {
      return <div className="dot py-4">{i + 1}</div>;
    },
    // prevArrow: (
    //   <div className="slick-prev">
    //     <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#FFD43B", fontSize: "40px" }} />
    //   </div>
    // ),
    // nextArrow: (
    //   <div className="slick-next">
    //     <FontAwesomeIcon icon={faChevronRight} style={{ color: "#FFD43B", fontSize: "40px" }} />
    //   </div>
    // ),
  };
  
  return (
    <section id="projects" className="mt-0 mx-48">
      {projectsList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Slider {...settings}>
          {projectsList.map((prj) => (
            <div key={prj._id} className="mt-10">
              <img src={prjprvw} alt="Preview" width="650" />
              <p className="font-instrument text-gold text-xl mt-8 font-semibold">{prj.type}</p>
              <h1 className="font-inknut text-white text-3xl mt-8 font-bold">
                {prj.title}: {prj.motto}
              </h1>
              <p className="font-instrument text-gold text-xl mt-8">As {prj.position}</p>
              <p className="font-instrument text-grey text-l mt-12 max-w-3xl">{prj.description}</p>
              <div>
                <p className="font-instrument font-bold text-white mt-6">Technologies:</p>
                <ul className="flex flex-wrap gap-6">
                  {prj.technologies.map((tech, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} />
                      <p className="font-instrument text-grey text-l mt-0">{tech}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-instrument font-bold text-gold mt-6">Try it:</p>
                <ul className="flex flex-wrap gap-6">
                  {prj.link.map((url, idx) => (
                    <li key={idx} className="mb-4">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full mt-6 flex justify-center"
                      >
                        <div className="outline outline-2 outline-white bg-white text-darkblue font-bold px-12 py-2 flex justify-center items-center gap-4 hover:bg-darkblue hover:text-white transition">
                          <p>{url}</p>
                          <FontAwesomeIcon icon={faCaretRight} />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default Projects;
