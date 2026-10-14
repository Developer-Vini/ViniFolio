import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/about";

const App = () => {
  return (
  <div className="w-full">
    <Navbar />
    <Hero />
    <About />
  </div>
  )
};

export default App;