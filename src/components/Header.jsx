import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-6
                        bg-white/95 dark:bg-slate-900/95 backdrop-blur-md
                        border border-white/20 dark:border-slate-800 rounded-2xl
                        px-6 py-4 shadow-lg">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-300
                            flex items-center justify-center text-white text-2xl font-extrabold shadow-xl">
              PS
            </div>

            <div>
              <div className="text-2xl font-extrabold leading-none text-indigo-600">ProfileSphere</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 -mt-1">Kashish</div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-lg">
            <NavLink to="/" end className={({isActive}) => 
              `px-4 py-2 rounded-md transition ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
              Home
            </NavLink>

            <NavLink to="/about" className={({isActive}) => 
              `px-4 py-2 rounded-md transition ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
              About
            </NavLink>

            <NavLink to="/projects" className={({isActive}) => 
              `px-4 py-2 rounded-md transition ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
              Projects
            </NavLink>

            <NavLink to="/contact" className={({isActive}) => 
              `px-4 py-2 rounded-md transition ${isActive ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <select
              onChange={(e) => { window.location.href = e.target.value; }}
              className="px-3 py-2 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              defaultValue="/"
            >
              <option value="/">Home</option>
              <option value="/about">About</option>
              <option value="/projects">Projects</option>
              <option value="/contact">Contact</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
