import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Project";
import favicon from "./assets/portfolio-icon.png";

const App = () => {
  useEffect(() => {
    document.title = "Puskar Thapa Magar | Portfolio";
    const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = favicon;
    document.head.appendChild(link);
  }, []);

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
