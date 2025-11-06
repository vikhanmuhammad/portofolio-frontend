import React from "react";
import "./App.css";
import "./styles/portfolio.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import EngineeringSkills from "./components/EngineeringSkills";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <EngineeringSkills />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;