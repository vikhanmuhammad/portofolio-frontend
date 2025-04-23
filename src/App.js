import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './index.css'

function App() {
  return (
    <div className="mt-0 pt-0 bg-darkblue min-h-screen">
      <Navbar />
      <Banner />
      <About />
      <Education />
      <Experience />
      <div className='mt-72'>

      <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="md:ml-40 ml-5"/>
      <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">PROJECTS</h7> 
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
