import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { Contact, HomeIcon, Sparkles, User, Workflow } from "lucide-react";
import { FaUpwork } from "react-icons/fa6";

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // lock scroll when mobile menu open
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleScrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = `#${id}`;
  };

  const handleViewProjects = () => handleScrollTo("projects");
  const handleGetInTouch = () => handleScrollTo("contact");

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6 mb-16 pt-14 md:pt-7"
    >
      {/* mobile header (right-side menu button) - visible only on small screens */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 h-14 bg-[rgba(2,6,10,0.7)] backdrop-blur-sm border-b border-white/6">
          <div className="flex items-center gap-2">
            <h1 className="bar text-4xl font-semibold flex items-center gap-2">
        <span className="bg-gradient-to-r from-green-400 pt-2 via-cyan-300 to-purple-700 bg-clip-text text-transparent">Kanung</span>
      </h1>
          </div>

          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="text-white text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* sliding menu from right */}
        <nav
          className={`mobile-menu-overlay md:hidden ${mobileOpen ? "open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <ul className="flex flex-col divide-y divide-white/6 text-sm cursor-pointer">
            <li>
              <button
                className="w-full text-left px-6 py-4 cursor-pointer hover:text-[#d7cccc] text-white flex items-center gap-3"
                onClick={() => handleScrollTo("home")}
              >
              <HomeIcon size={13}/>  Home
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-6 py-5 cursor-pointer hover:text-[#d7cccc] text-white flex items-center gap-3"
                onClick={() => handleScrollTo("about")}
              >
                <User size={13} />About
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-6 py-5 cursor-pointer hover:text-[#d7cccc] text-white flex items-center gap-3"
                onClick={() => handleScrollTo("projects")}
              >
                <Workflow size={13}/>Projects
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-6 py-5 cursor-pointer hover:text-[#d7cccc] text-white flex items-center gap-3"
                onClick={() => handleScrollTo("contact")}
              >
                <Contact size={13} />Contact
              </button>
            </li>
            <li className="pt-4 px-6 pb-6">
              <a className="text-gray-300 flex justify-center gap-2 items-center cursor-pointer hover:text-[#c5bebe] mb-3" href="https://github.com/puskar29" target="_blank" rel="noreferrer"><FaGithub size={13}/>GitHub</a>
              <a className="text-gray-300 flex justify-center gap-2 items-center cursor-pointer hover:text-[#c5bebe]" href="https://www.linkedin.com/in/puskar-thapa-magar-0a5b09365/" target="_blank" rel="noreferrer"><FaLinkedin size={13} />LinkedIn</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ---- LARGE GLOW BACKGROUND ---- */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[1000px] max-w-[90vw] h-[1000px] max-h-[90vw] bg-gradient-to-br from-green-400/40 via-teal-400/20 to-purple-500/40 rounded-full blur-[200px] opacity-80 pointer-events-none"
        aria-hidden="true"
      />

      {/* ---- TEXT CONTENT ---- */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Badge */}
        <p className="text-gray-300 bg-white/5 px-4 py-1 rounded-full inline-flex items-center gap-2 text-sm md:text-base mb-6 border border-white/10">
          <Sparkles size={16} className="text-teal-300 " />
          <span>Available for opportunities</span>
        </p>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-8xl font-extrabold text-white leading-tight flex flex-col items-center"
          style={{ fontFamily: "'Space Grotesk', 'JetBrains Mono', sans-serif" }}
        >
          <span className="text-center mb-2">Hi, I'm</span>
          <span
            className="whitespace-nowrap bg-gradient-to-r from-green-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', 'JetBrains Mono', sans-serif" }}
          >
            Puskar Thapa Magar
          </span>
        </h1>

        <h2 className="text-sm md:text-2xl lg:text-3xl text-gray-300 mt-4">
          Self-Learner & <span className="text-purple-300">Aspiring Software Developer</span>
        </h2>

        <p className="text-base text-sm md:text-lg text-gray-400 mt-5 leading-relaxed">
          A self-taught learner actively building my skills and knowledge on the journey toward a career in software development. Exploring, practicing, and growing through hands-on projects and study.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 text-sm md:text-base">
            <FaHtml5 className="text-xl md:text-2xl" /> HTML
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 text-sm md:text-base">
            <FaCss3Alt className="text-xl md:text-2xl" /> CSS
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 text-sm md:text-base">
            <SiJavascript className="text-xl md:text-2xl" /> JavaScript
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 text-sm md:text-base">
            <FaReact className="text-xl md:text-2xl" /> React
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 text-sm md:text-base">
            <SiTailwindcss className="text-xl md:text-2xl" /> Tailwindcss
          </span>
        </div>

        {/* Buttons - responsive: full width on small, fixed widths on md+ */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 w-full max-w-2xl mx-auto px-4">
          <button
            type="button"
            className="btn"
            onClick={handleViewProjects}>
            <strong>View My Projects</strong>
          </button>
          
          <button
            type="button"
            className="btn"
            onClick={handleGetInTouch}>
            <strong>Get In Touch</strong>
          </button>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-gray-400 text-2xl md:text-3xl">
          <a href="https://github.com/puskar29" target="_blank" className="hover:text-white"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/puskar-thapa-magar-0a5b09365/" target="_blank" className="hover:text-white"><FaLinkedin /></a>
          <a href="https://wa.me/qr/POOXU44U37S6I1" target="_blank" className="hover:text-white"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="mouse-indicator-home " aria-hidden="true">
        <div className="wheel" />
      </div>
    </section>
  );
};

export default Home;