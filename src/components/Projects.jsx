import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import prjprvw from '../assets/images/prjprvw.jpg';
import Slider from 'react-slick';

const BASE_URL = process.env.REACT_APP_API_BASE;

// Custom arrow components
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronRight} className="text-gold text-3xl" />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronLeft} className="text-gold text-3xl" />
  </div>
);

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/projects/`)
      .then(res => setProjectsList(res.data))
      .catch(err => console.error('Error fetching projects data:', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => <div className="dot text-gold font-instrument font-bold">{i + 1}</div>,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section id="projects" className="container px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mt-10">
      {projectsList.length === 0 ? (
        <p className="text-white">Loading...</p>
      ) : (
        <Slider {...settings}>
          {projectsList.map((prj) => (
            <div key={prj._id} className="relative">
              <div className="flex flex-col ">
                <img
                  src={prjprvw}
                  alt="Preview"
                  className="w-full max-w-[650px] rounded-lg shadow-lg"
                />

                <p className="font-instrument text-gold text-xl mt-8 font-semibold">{prj.type}</p>
                <h1 className="font-inknut text-white text-3xl mt-4 font-bold">
                  {prj.title}: {prj.motto}
                </h1>
                <p className="font-instrument text-gold text-xl mt-4">As {prj.position}</p>
                <p className="font-instrument text-grey text-base mt-6 max-w-3xl">{prj.description}</p>

                <div className="mt-6">
                  <p className="font-instrument font-bold text-white">Technologies:</p>
                  <ul className="flex flex-col md:flex-wrap gap-1 md:gap-6 mt-2">
                    {prj.technologies.map((tech, idx) => (
                      <li key={idx} className="flex gap-2 text-left">
                        <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} />
                        <p className="font-instrument text-grey text-sm md:text-base">{tech}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="font-instrument font-bold text-gold">Try it:</p>
                  <ul className="flex flex-col md:flex-row gap-0 md:gap-6 mt-2">
                    {prj.link.map((url, idx) => (
                      <li key={idx} className="mb-4">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <div className="outline outline-2 outline-white bg-white text-darkblue font-bold px-3 py-1 text-sm md:px-5 md:py-2 md:text-base flex justify-center items-center gap-4 hover:bg-darkblue hover:text-white transition max-w-[200px] mx-auto">
                            <p className="truncate">Try Project</p>
                            <FontAwesomeIcon icon={faCaretRight} />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default Projects;
