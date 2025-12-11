import { FaHtml5, FaCss3Alt, FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import {Sparkles} from 'lucide-react'

const Home = () => {
  // scroll to #projects when "View My Projects" is clicked
  const handleViewProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#projects';
    }
  };

  // scroll to #contact when "Get In Touch" is clicked
  const handleGetInTouch = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-7 px-6 mb-16">
      {/* ---- LARGE GLOW BACKGROUND ---- */}
      <div
        className="absolute w-[1000px] h-[1000px] bg-gradient-to-br
        from-green-400/40 via-teal-400/20 to-purple-500/40 text-center
        rounded-full blur-[200px] opacity-80"
      />

      {/* ---- TEXT CONTENT ---- */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Badge */}
        <p className="text-gray-300 bg-white/5 px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm md:text-base mb-6 border border-white/10">
          <Sparkles size={16} className="text-teal-300 " />
          <span>Available for opportunities</span>
        </p>

        {/* Title - larger, custom font, keep name on same line */}
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

        {/* Paragraph */}
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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <button type="button" className="btn ![width:13rem]" onClick={handleViewProjects}>
            <strong>View My Projects</strong>
            <div id="container-stars">
              <div id="stars" />
            </div>

            <div id="glow">
              <div className="circle" />
              <div className="circle" />
            </div>
          </button>

          <button type="button" className="btn2 cursor-pointer ![width:10rem]" onClick={handleGetInTouch}>
            <strong>Get In Touch</strong>
            <div id="container-stars">
              <div id="stars" />
            </div>

            <div id="glow">
              <div className="circle" />
              <div className="circle" />
            </div>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-gray-400 text-2xl md:text-3xl">
          <a href="#" className="hover:text-white"><FaGithub /></a>
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
        </div>
      </div>

      {/* Mouse Scroll Indicator - scoped to Home only */}
      <div className="mouse-indicator-home" aria-hidden="true">
        <div className="wheel" />
      </div>
    </section>
  );
};

export default Home;