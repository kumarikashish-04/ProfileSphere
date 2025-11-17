import React from "react";

const InfoTile = ({ title, children, icon }) => (
  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-soft-lg">
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-300 text-white text-xl font-bold">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        {children}
      </div>
    </div>
  </div>
);

export default function About() {
  return (
    <section className="space-y-8" data-section="about">
      <h2 className="text-3xl font-bold">About Me</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* ⭐ EDUCATION — FULL DETAILS */}
        <InfoTile title="Education" icon="🎓">
          <div
            className="p-4 rounded-xl 
      bg-gradient-to-br from-violet-50 to-violet-100
      dark:from-slate-700 dark:to-slate-800 shadow-lg"
          >
            <ul className="space-y-3">
              {/* B.Tech */}
              <li className="font-medium">
                B.Tech — Lovely Professional University (2023–2027)
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-300">
                • Major: Computer Science Engineering <br />• Current CGPA:{" "}
                <strong>8.34 / 10</strong>
              </li>

              {/* Class 12 */}
              <li className="font-medium pt-1">
                Higher Secondary — Adarsh Vidya Mandir (CBSE)
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-300">
                • Percentage: <strong>88.6%</strong> <br />• Passed:{" "}
                <strong>2022</strong>
              </li>

              {/* Class 10 */}
              <li className="font-medium pt-1">
                Secondary — Adarsh Vidya Mandir (CBSE)
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-300">
                • Percentage: <strong>88%</strong> <br />• Passed:{" "}
                <strong>2020</strong>
              </li>
            </ul>
          </div>
        </InfoTile>
        {/* ⭐ TECHNICAL SKILLS — TOP, VERTICAL, BEAUTIFUL */}
        <InfoTile title="Technical Skills" icon="💻">
          <div
            className="p-4 rounded-xl 
      bg-gradient-to-br from-indigo-50 to-indigo-100 
      dark:from-slate-700 dark:to-slate-800 shadow-lg"
          >
            <ul className="space-y-3 text-sm text-slate-800 dark:text-slate-200">
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>HTML5 & CSS3</li>
              <li>Node.js (Basics)</li>
              <li>MongoDB (Basics)</li>
              <li>Data Structures & Algorithms</li>
              <li>Git / GitHub</li>
            </ul>
          </div>
        </InfoTile>

        {/* ⭐ SOFT SKILLS — EXPANDED LIST */}
        <InfoTile title="Soft Skills" icon="🤝">
          <div
            className="p-4 rounded-xl 
      bg-gradient-to-br from-pink-50 to-rose-100 
      dark:from-slate-700 dark:to-slate-800 shadow-lg"
          >
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li className="font-medium">Problem Solving</li>
              <li className="font-medium">Teamwork & Communication</li>
              <li className="font-medium">Time Management</li>
              <li className="font-medium">Critical Thinking</li>
              <li className="font-medium">Adaptability</li>
              <li className="font-medium">Leadership</li>
              <li className="font-medium">Creativity & Innovation</li>
              <li className="font-medium">Attention to Detail</li>
            </ul>
          </div>
        </InfoTile>
      </div>

      {/* Vertical center block style: larger bio */}
      <div className="bg-gradient-to-r from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-2xl">
        <div className="md:flex md:items-center md:gap-8">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl">
              <img
                src="/profile.jpg"
                alt="Kashish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-bold">Hello — I'm Kashish Kumari</h3>
            <p className="mt-3 text-slate-700 dark:text-slate-300 text-lg max-w-2xl">
              I build responsive and accessible front-end applications. I enjoy
              turning complex problems into simple, beautiful and intuitive
              designs. Currently focused on React, Tailwind and data-driven
              dashboards.
            </p>

            <div className="mt-4 flex gap-3">
              <a
                className="px-4 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
                href="#projects"
              >
                See Projects
              </a>

              <a
                className="px-4 py-2 border rounded-full text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-slate-700 transition"
                href="/KashishCV_F.pdf"
                download
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
