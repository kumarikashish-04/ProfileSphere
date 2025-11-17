import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create clean body text with line breaks
    const bodyText = `Name: ${form.name}
Email: ${form.email}

${form.message}`;

    const mailtoLink = `mailto:kashish87897231@gmail.com?subject=${encodeURIComponent(
      `Message from ${form.name}`
    )}&body=${encodeURIComponent(bodyText)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Close modalo
    setModalOpen(false);
  };

  return (
    <section className="min-h-screen grid md:grid-cols-2 gap-12 items-center px-6 py-16 
                        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* LEFT */}
      <div className="space-y-6">
        <h1 className="text-7xl font-extrabold leading-tight drop-shadow-2xl">
          Welcome to <span className="text-indigo-400">ProfileSphere</span>
        </h1>

        <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
          I'm <span className="font-semibold text-indigo-300">Kashish</span> — a Frontend Developer 
          passionate about crafting fast, clean and elegant user experiences using 
          <span className="text-indigo-400 font-semibold"> React</span> & 
          <span className="text-indigo-400 font-semibold"> Tailwind CSS</span>.
        </p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => navigate("/projects")}
            className="px-7 py-3 bg-indigo-600 text-white rounded-2xl shadow-xl text-lg
                       hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="px-7 py-3 border border-indigo-400 rounded-2xl text-indigo-300 text-lg
                       hover:bg-indigo-500/20 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT - Profile Image */}
      <div className="flex justify-center">
        <div className="w-80 h-80 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-indigo-300 
                        shadow-[0_0_40px_10px_rgba(99,102,241,0.4)] hover:scale-[1.03] transition-all duration-300">
          <img
            src="/profile.jpg"
            alt="Kashish profile"
            className="w-full h-full object-cover rounded-full border-[10px] border-slate-900 shadow-xl"
          />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-xl p-8 w-96 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {/* <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              /> */}
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="px-3 py-2 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
