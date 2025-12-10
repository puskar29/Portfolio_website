import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import BackgroundGrid from "./Components/BackgroundGrid";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Project";


const App = () => {
  return (
      <div className="bg-[#020b0f] min-h-screen text-white">
        <BackgroundGrid />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
  );
};

export default App;
