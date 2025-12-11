import { FaFolderOpen } from "react-icons/fa";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Workflow } from "lucide-react";

const projects = [
    {
        "title": "Fashion Mobile E-commerce",
        "desc": "A mobile-first responsive fashion e-commerce website with modern UI, optimized for all devices. Features product showcases, shopping cart, and smooth navigation.",
        "tech": ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design"],
        "github": "https://github.com/puskar29/ecommerce-website",
        "live": "https://puskar29.github.io/ecommerce-website/"
    },
    {
        "title": "WeatherNow - Live Weather App",
        "desc": "A real-time weather application that provides accurate weather forecasts, temperature, humidity, and wind speed data using weather API integration.",
        "tech": ["HTML", "CSS", "JavaScript", "Weather API"],
        "github": "https://github.com/puskar29/my-weather-app",
        "live": "https://puskar29.github.io/my-weather-app/"
    },
    {
        title: "Currency Converter",
        desc: "A simple and responsive currency converter built with HTML, CSS, and JavaScript, featuring clean UI and instant currency conversions.",
        tech: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/puskar29/currency-converter",
        live: "https://puskar29.github.io/currency-converter/",
    },
    {
        title: "Eclara E-commerce Website",
        desc: "A modern and responsive e-commerce website built with HTML and Tailwind CSS, featuring clean layouts, smooth UI elements, and a fully responsive shopping experience.",
        tech: ["HTML", "TailwindCSS"],
        github: "https://github.com/puskar29/cara-ecommerce-website-responsive",
        live: "https://puskar29.github.io/cara-ecommerce-website-responsive/",
    },
    {
        "title": "Tic Tac Toe Game",
        "desc": "An interactive Tic Tac Toe game built with vanilla JavaScript featuring player vs player mode, score tracking, and responsive design.",
        "tech": ["HTML", "CSS", "JavaScript"],
        "github": "https://github.com/puskar29/tic-tac-toe",
        "live": "https://puskar29.github.io/tic-tac-toe/"
    },
    {
        "title": "TaskFlow - To-Do List App",
        "desc": "A productivity-focused to-do list application with task management features including add, edit, delete, mark complete, and local storage persistence.",
        "tech": ["HTML", "CSS", "JavaScript"],
        "github": "https://github.com/puskar29/to-do-list-app",
        "live": "https://puskar29.github.io/to-do-list-app/"
    }
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full min-h-screen bg-black text-white px-6 md:px-20 py-5 relative"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center">
                <div className="w-[600px] h-[600px] bg-green-500/10 blur-[200px] rounded-full"></div>
            </div>

            <div className="mb-8 flex flex-col items-center text-center">
                <span className="px-4 py-1 text-sm border border-white/20 rounded-full inline-flex items-center gap-2 mb-4">
                    <span className="text-cyan-300"> <Workflow size={16} /></span>
                    <span className="text-gray-200">My Work</span>
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    Featured{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Here are some projects I’ve built. Each one taught me something new and
                    helped me grow as a developer.
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-16 relative z-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#111111] border border-white/5 p-4 rounded-lg hover:border-white/20 transition group"
                    >
                        {/* HEADER ICON + ACTIONS */}
                        <div className="flex justify-between items-center">
                            <div className="w-9 h-9 flex items-center justify-center bg-green-400/10 text-green-400 rounded-md">
                                <FaFolderOpen size={20} />
                            </div>

                            <div className="flex gap-4 text-gray-400">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiGithub className="hover:text-white transition" size={20} />
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiExternalLink className="hover:text-white transition" size={20} />
                                </a>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <h3 className="text-base font-semibold mt-4">{project.title}</h3>
                        <p className="text-gray-400 mt-2 text-xs leading-relaxed">
                            {project.desc}
                        </p>

                        {/* TAGS */}
                        <div className="flex gap-2 mt-4 flex-wrap">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 text-[10px] bg-white/5 rounded-md border border-white/8"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* LIVE VIEW BUTTON */}
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block px-3 py-1.5 text-xs text-white border border-white/10 rounded-md hover:bg-white/10 transition"
                        >
                            Live View
                        </a>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-10">
                <a href="https://github.com/puskar29?tab=repositories"  target="_blank" className="btn2 ![width:17rem] cursor-pointer">
                    <strong>View All Projects in Github</strong>
                    <div id="container-stars">
                        <div id="stars" />
                    </div>

                    <div id="glow">
                        <div className="circle" />
                        <div className="circle" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Projects;
