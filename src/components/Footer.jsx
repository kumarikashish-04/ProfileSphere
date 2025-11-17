import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMailchimp, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 py-10 border-t border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h3 className="text-xl font-semibold mb-4">
          Connect With Me
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/kashish-kumari-633b73298/"
            className="text-indigo-600 dark:text-indigo-300 text-3xl hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/kumarikashish-04"
            className="text-indigo-600 dark:text-indigo-300 text-3xl hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://gmail.com"
            className="text-indigo-600 dark:text-indigo-300 text-3xl hover:scale-110 transition"
          >
            <FaMailBulk />
          </a>

          
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} ProfileSphere by Kashish — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
