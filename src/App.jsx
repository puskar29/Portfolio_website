import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Project";


const App = () => {
  return (
    <div className="bg-[#020b0f] min-h-screen text-white">
      <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />

      <Footer />
    </div>
  );
};

export default App;
