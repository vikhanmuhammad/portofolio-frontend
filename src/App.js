import React from "react";
import "./App.css";
import "./styles/portfolio.css";
import "./styles/themes.css";
import { ParallaxProvider } from 'react-scroll-parallax';
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/EnhancedEducation";
import EngineeringSkills from "./components/EnhancedEngineeringSkills";
import TechStack from "./components/EnhancedTechStack";
import Experience from "./components/EnhancedExperience";
import Certifications from "./components/EnhancedCertifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ParallaxProvider>
      <SmoothScroll>
        <CustomCursor />
        <div className="App">
          <Navigation />
          <Hero />
          <About />
          <Education />
          <EngineeringSkills />
          <TechStack />
          <Experience />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </SmoothScroll>
    </ParallaxProvider>
  );
}

export default App;