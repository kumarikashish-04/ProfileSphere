import React, { useState, useEffect, useRef } from "react";

/**
 * Projects.jsx
 * - Centered card slider
 * - Arrows perfectly aligned with card center
 * - Dots below card
 * - Autoplay + keyboard navigation
 * - Fixed heights to avoid layout jumps
 */

const projects = [
  {
    title: "Weather Vista",
    desc:
      "Lightweight weather app built with plain HTML, CSS and vanilla JavaScript plus Tailwind utilities. Search by city, shows current conditions, hourly forecast and icons — frontend-only.",
    tech: "HTML • CSS • JavaScript • Tailwind",
    href: "https://weather1vista.netlify.app/",
    github: "https://github.com/kumarikashish-04/WeatherVista",
    img: "/screenshots/weather.png"
  },
 {
  title: "Violence Reduction Dashboard",
  desc:
    "Interactive analytics dashboard built using Excel, Power Pivot, and slicers to analyze violence-related datasets sourced from data.gov. Includes dynamic charts, demographic breakdowns, crime trends, and drill-down insights. Designed to help identify high-risk zones and support data-driven decision making.",
  tech: "Excel • Power Pivot • Data Modeling • Slicers • Pivot Charts • ETL",
  href: "https://www.linkedin.com/feed/update/urn:li:activity:7316732967005888512/",
  github:"https://github.com/kumarikashish-04/INT-217-PROJECT",
  img: "/screenshots/dashboard.png"
},

  {
    title: "Password Generator",
    desc:
      "Generates secure passwords with configurable length and character sets (upper/lower, numbers, symbols). Copy-to-clipboard & strength meter included (vanilla JS).",
    tech: "HTML • CSS • JavaScript • Tailwind",
    href: "https://password04gen.netlify.app/",
    github:"https://github.com/kumarikashish-04/PasswordGenerator",
    img: "/screenshots/passgen.png"
  },
  {
  title: "Student Record Management",
desc:
  "Java Swing & AWT–based desktop CRUD application where all student records are managed using core DSA structures. Implemented ArrayList/LinkedList–based storage, custom search, insert, delete, update operations, and sorting — all handled in-memory without file handling.",
tech: "Java • Swing • AWT • DSA • Arrays • Stack • Queue",
href: "https://www.linkedin.com/feed/update/urn:li:activity:7361648203198328832/",
github:"https://github.com/kumarikashish-04/Student-record-system",
img: "/screenshots/studentrecord.png"

  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const length = projects.length;

  // Autoplay every 8 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % length);
    }, 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [index, length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        clearTimeout(timeoutRef.current);
        setIndex((i) => (i + 1) % length);
      } else if (e.key === "ArrowLeft") {
        clearTimeout(timeoutRef.current);
        setIndex((i) => (i - 1 + length) % length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [length]);

  const goPrev = () => {
    clearTimeout(timeoutRef.current);
    setIndex((i) => (i - 1 + length) % length);
  };

  const goNext = () => {
    clearTimeout(timeoutRef.current);
    setIndex((i) => (i + 1) % length);
  };

  return (
    <section className="py-20 flex flex-col items-center justify-center min-h-screen" data-section="projects">
      <div className="w-full max-w-5xl px-4 flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-2 md:gap-0">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Selected front-end projects — HTML / CSS / JS + Tailwind
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative w-full flex flex-col items-center justify-center" style={{ minHeight: 540 }}>
          {/* Card + Arrows Wrapper */}
          <div className="relative w-full flex items-center justify-center" style={{ maxWidth: 920, minHeight: 540 }}>
            {/* Card Stage */}
            <div className="relative w-full h-full flex items-center justify-center overflow-visible">
              {projects.map((p, i) => {
                const active = i === index;
                return (
                  <article
                    key={p.title}
                    aria-hidden={!active}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      w-full md:w-[82%] lg:w-[72%] p-6 rounded-2xl
                      bg-gradient-to-br from-white/5 to-white/10 dark:from-slate-800 dark:to-slate-900
                      shadow-2xl transform transition-all duration-500
                      ${active ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10 pointer-events-none"}`}
                    style={{ minHeight: 380 }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 h-full">
                      {/* Image */}
                      <div className="w-full md:w-64 h-40 md:h-52 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 flex-shrink-0">
                        {p.img ? (
                          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-sm text-slate-500">
                            Screenshot
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
                          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {p.desc}
                          </p>

                          <div className="mt-4 flex items-center gap-3 flex-wrap">
                            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium dark:bg-indigo-900/40 dark:text-indigo-200">
                              {p.tech}
                            </span>
                            <span className="text-xs text-slate-400">• Frontend-only</span>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold shadow hover:bg-indigo-700 transition"
                          >
                            Live Demo
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </a>

                          <a
  href={p.github}
  target="_blank"
  rel="noreferrer"
  className="px-4 py-2 border rounded-full text-sm border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
>
  GitHub
</a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Left Arrow */}
            <button
              aria-label="Previous project"
              onClick={goPrev}
              className="absolute left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800/65 text-white shadow-lg flex items-center justify-center hover:scale-105 transition"
              style={{ backdropFilter: "blur(6px)" }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 14.707a1 1 0 01-1.414 0L6.586 10l4.707-4.707a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              aria-label="Next project"
              onClick={goNext}
              className="absolute right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800/65 text-white shadow-lg flex items-center justify-center hover:scale-105 transition"
              style={{ backdropFilter: "blur(6px)" }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707A1 1 0 118.707 5.293L13.414 10l-4.707 4.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-4 pb-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  clearTimeout(timeoutRef.current);
                  setIndex(i);
                }}
                aria-label={`Go to project ${i + 1}`}
                className={`w-3.5 h-3.5 rounded-full transition ${i === index ? "bg-indigo-600 scale-110" : "bg-slate-300 dark:bg-slate-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
