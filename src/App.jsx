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

    // --- Animation init ---
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initAnimations = () => {
      // Page load class (fade-in wrapper should target your main content container)
      document.body.classList.add("page-preload");
      requestAnimationFrame(() => {
        document.body.classList.add("page-loaded");
        document.body.classList.remove("page-preload");
      });

      if (prefersReduced) {
        // Make everything visible immediately
        document.querySelectorAll(".reveal, section, .card, .project-item, .tech-card, .hero, .profile-img").forEach((el) => {
          el.classList.add("in-view");
        });
        return;
      }

      // Staggered nav entrance
      const navLinks = Array.from(document.querySelectorAll("nav a, .site-nav a, .navbar a"));
      navLinks.forEach((a, i) => {
        a.style.transition = "opacity 440ms cubic-bezier(.2,.9,.2,1), transform 440ms cubic-bezier(.2,.9,.2,1)";
        a.style.transitionDelay = `${i * 80}ms`;
        a.classList.add("nav-appear");
      });

      // Hero subtle slide + profile scale
      const heroTargets = Array.from(document.querySelectorAll(".hero h1, .hero h2, .hero p, .hero .cta, .profile-img"));
      heroTargets.forEach((el, i) => {
        el.style.transition = "opacity 520ms cubic-bezier(.2,.9,.2,1), transform 520ms cubic-bezier(.2,.9,.2,1)";
        el.style.transitionDelay = `${120 + i * 70}ms`;
        el.classList.add("reveal");
      });

      // IntersectionObserver for reveal-on-scroll
      const revealSelector = "section, .card, .project-item, .tech-card, .about, .contact, .projects, .project";
      const revealEls = Array.from(document.querySelectorAll(revealSelector));
      revealEls.forEach((el) => el.classList.add("reveal"));

      const obs = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      revealEls.forEach((el) => obs.observe(el));

      // Parallax for elements with .parallax (small subtle movement)
      const parallaxEls = Array.from(document.querySelectorAll(".parallax"));
      const onScroll = () => {
        const y = window.scrollY;
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-parallax-speed")) || 0.06;
          el.style.transform = `translateY(${y * speed}px)`;
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      // Save cleanup references on window (plain JS)
      window.__appAnimCleanup = () => {
        obs.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    };

    initAnimations();

    // cleanup on unmount
    return () => {
      if (window.__appAnimCleanup) window.__appAnimCleanup();
    };
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
