import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <div className="mt-0 pt-0 bg-darkblue min-h-screen">
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
