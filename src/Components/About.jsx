import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';
import {User} from 'lucide-react'

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/6 border border-white/8 text-xs text-gray-200">
    {children}
  </span>
);

const Stat = ({ value, label }) => (
  <div className="bg-white/4 border border-white/6 rounded-2xl p-3 text-center shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-0.5">
    <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">{value}</p>
    <p className="text-xs md:text-sm text-gray-400 mt-1">{label}</p>
  </div>
);

const TechCard = ({ Icon, title, desc }) => (
  <div className="flex items-center gap-3 p-2 md:p-3 rounded-xl bg-white/5 border border-white/6 hover:bg-white/6 transition">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-black/40">
      <Icon className="text-lg md:text-xl text-cyan-300" />
    </div>
    <div>
      <p className="text-sm md:text-base text-white font-medium">{title}</p>
      <p className="text-xs md:text-sm text-gray-400">{desc}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="w-full bg-black text-gray-300 min-h-full pt-1 pb-20 mt-16 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* centered badge + large hero heading */}
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="px-4 py-1 text-sm border border-white/20 rounded-full inline-flex items-center gap-2 mb-4">
            <span className="text-cyan-300"> <User size={16} /></span>
            <span className="text-gray-200">Get To Know Me</span>
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          <span className="bg-gradient-to-r from-green-400 via-cyan-300 to-purple-700 bg-clip-text text-transparent">About Me</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* LEFT: Intro card */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="rounded-3xl p-4 md:p-6 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 border border-white/6 shadow-xl">
              <h2 className="text-3xl md:text-4xl lg:text-2xl font-semibold mb-4">
                <span className="text-white">Hello! I&apos;m a passionate </span>
                <span className="bg-gradient-to-r from-green-400 via-cyan-300 to-purple-700 bg-clip-text text-transparent">
                  Software Developer
                </span>
              </h2>
              <p className="text-base md:text-sm text-gray-400 leading-relaxed mb-6 max-w-prose">
               I'm a BCA student and self-learner building my software development foundation through front-end web technologies. I focus on creating responsive, accessible interfaces while learning through practical project implementation. Currently developing my skills by shipping small projects and understanding core programming concepts, with no prior professional experience yet. Taking each step methodically on my path to becoming a software developer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4">
                {/* kept layout but tighter icon boxes */}
                 <div className="flex items-start gap-4">
                   <div className="p-3 rounded-lg bg-white/3 flex items-center justify-center">
                     <FaMapMarkerAlt className="text-cyan-300 text-xl md:text-2xl" />
                   </div>
                   <div>
                     <p className="text-sm md:text-sm text-gray-400">Location</p>
                     <p className="text-base md:text-lg text-white">Nepal</p>
                   </div>
                 </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/3 flex items-center justify-center">
                    <FaGraduationCap className="text-green-300 text-xl md:text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm md:text-sm text-gray-400">Education</p>
                    <p className="text-base md:text-lg text-white">BCA Student(TU)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/3 flex items-center justify-center">
                    <FaHeart className="text-pink-300 text-xl md:text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm md:text-sm text-gray-400">Passion</p>
                    <p className="text-base md:text-lg text-white">Software Developer</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-3">
                <Pill>Student</Pill>
                <Pill>Self‑Learner</Pill>
                <Pill>Practical Projects</Pill>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat value="5+" label="Projects" />
              <Stat value="5+" label="Technologies" />
              <Stat value="200+" label="Hours" />
              <Stat value="Learning" label="Ongoing" />
            </div>
          </div>

          {/* RIGHT: Tech stack (larger, balanced cards) */}
          <aside className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="rounded-3xl p-3 md:p-4 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 border border-white/6 shadow-xl">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Tech Stack</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <TechCard Icon={SiHtml5} title="HTML5" desc="Semantic markup" />
                <TechCard Icon={SiCss3} title="CSS3" desc="Layout & styles" />
                <TechCard Icon={SiTailwindcss} title="Tailwind CSS" desc="Utility-first styling" />
                <TechCard Icon={SiJavascript} title="JavaScript" desc="ES6+ & DOM" />
                <TechCard Icon={SiReact} title="React" desc="Components & hooks" />
              </div>
            </div>

            <div className="rounded-2xl p-3 md:p-4 bg-gradient-to-br from-neutral-900/50 to-transparent border border-white/6">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3">Notes & Fit</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">
                Beginner programmer starting with web development, building fundamental skills through hands-on projects. Learning step by step while gradually expanding technical knowledge toward broader software development.
              </p>

              <div>
                <h5 className="text-sm md:text-base font-medium text-white mb-2">Best suited for</h5>
                <ul className="text-sm md:text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>Learning and skill-building exercises</li>
                   <li>Basic web development projects</li> 
                   <li>Entry points into software development</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;