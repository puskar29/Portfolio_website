import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/6 border border-white/8 text-sm text-gray-200">
    {children}
  </span>
);

const Stat = ({ value, label }) => (
  <div className="bg-white/4 border border-white/6 rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
    <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">{value}</p>
    <p className="text-sm text-gray-400 mt-1">{label}</p>
  </div>
);

const TechCard = ({ Icon, title, desc }) => (
  <div className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/6 hover:bg-white/6 transition">
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center bg-black/40">
      <Icon className="text-2xl md:text-3xl text-cyan-300" />
    </div>
    <div>
      <p className="text-base md:text-lg text-white font-medium">{title}</p>
      <p className="text-sm md:text-sm text-gray-400">{desc}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="w-full bg-black text-gray-300 min-h-screen pt-28 pb-20 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* LEFT: Intro card */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 border border-white/6 shadow-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">About Me</h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6 max-w-prose">
               I'm Puskar Thapa Magar — a BCA student and self-learner building my software development foundation through front-end web technologies. I focus on creating responsive, accessible interfaces while learning through practical project implementation. Currently developing my skills by shipping small projects and understanding core programming concepts, with no prior professional experience yet. Taking each step methodically on my path to becoming a software developer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4">
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
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat value="5+" label="Projects" />
              <Stat value="5+" label="Technologies" />
              <Stat value="200+" label="Hours" />
              <Stat value="Learning" label="Ongoing" />
            </div>
          </div>

          {/* RIGHT: Tech stack (larger, balanced cards) */}
          <aside className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 border border-white/6 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Tech Stack</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TechCard Icon={SiHtml5} title="HTML5" desc="Semantic markup" />
                <TechCard Icon={SiCss3} title="CSS3" desc="Layout & styles" />
                <TechCard Icon={SiTailwindcss} title="Tailwind CSS" desc="Utility-first styling" />
                <TechCard Icon={SiJavascript} title="JavaScript" desc="ES6+ & DOM" />
                <TechCard Icon={SiReact} title="React" desc="Components & hooks" />
              </div>
            </div>

            <div className="rounded-2xl p-5 md:p-6 bg-gradient-to-br from-neutral-900/50 to-transparent border border-white/6">
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