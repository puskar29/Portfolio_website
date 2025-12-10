import React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
     <nav className="w-full fixed top-0 left-0 z-20 px-10 py-5 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <h1 className="bar text-4xl font-semibold flex items-center gap-2">
        <span className="bg-gradient-to-r from-green-400 via-cyan-300 to-purple-700 bg-clip-text text-transparent">Kanung</span>
      </h1>

      {/* Links */}
      <ul className="hidden md:flex gap-10 text-gray-300 text-sm">
        <a href="#home" className="hover:text-white cursor-pointer">Home</a>
        <a href="#about" className="hover:text-white cursor-pointer">About</a>
        <a href="#projects" className="hover:text-white cursor-pointer">Projects</a>
        <a href="#contact" className="hover:text-white cursor-pointer">Contact</a>
      </ul>
    </nav>
  );
};

export default Navbar;
