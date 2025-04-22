import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
