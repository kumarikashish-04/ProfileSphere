import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
        <Header /> {/* Update Header to use <Link> or useNavigate() — no setPage prop needed */}
        
        <main className="max-w-6xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
