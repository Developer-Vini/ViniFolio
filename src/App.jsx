import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  return (
  <div className="w-full">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </div>
  )
};

export default App;