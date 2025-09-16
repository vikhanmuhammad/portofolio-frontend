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
// import GlowingBackground from './components/GlowingBackground';
import './index.css';

function App() {
  return (
    //<GlowingBackground>
      <div className='bg-darkblue'>
        <Navbar />
        <div className="pt-10"> {/* padding atas agar konten tidak tertutup navbar */}
          <Banner />
          <About />
          <Education />
          <Experience />
          <div className="mt-72">
            <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFD43B" }} className="md:ml-40 ml-5" />
            <h7 className="text-white font-instrument ml-6 text-[14px] font-semibold">PROJECTS</h7>
          </div>
          <Projects />
          <Footer />
        </div>
      </div>
    //</GlowingBackground>
  );
}

export default App;
