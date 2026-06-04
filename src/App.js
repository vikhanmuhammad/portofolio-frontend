import { useState, useEffect } from "react";
import "./App.css";
import "./styles/portfolio.css";
import "./styles/themes.css";
import "./styles/performance.css";
import { ParallaxProvider } from 'react-scroll-parallax';
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/MobileOptimizedCursor";
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
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    document.body.classList.add('theme-transitioning');
    setTheme(t => t === 'dark' ? 'light' : 'dark');
    setTimeout(() => document.body.classList.remove('theme-transitioning'), 300);
  };

  return (
    <ParallaxProvider>
      <SmoothScroll>
        <CustomCursor />
        <div className="App">
          <Navigation theme={theme} toggleTheme={toggleTheme} />
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
