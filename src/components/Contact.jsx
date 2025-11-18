import React, { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [saved, setSaved] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem("portfolio-feedback") || "[]");
      setSaved(s);
    } catch {
      setSaved([]);
    }
  }, []);

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill all fields.");
      return;
    }
    const entry = { ...form, date: new Date().toISOString() };
    const next = [entry, ...saved].slice(0, 50);
    try {
      localStorage.setItem("portfolio-feedback", JSON.stringify(next));
      setSaved(next);
      setForm({ name: "", email: "", message: "" });
      setStatus("Thanks! Your feedback was saved locally.");
    } catch {
      setStatus("Unable to save — check browser storage.");
    }
  }

  function clearStorage() {
    try {
      localStorage.removeItem("portfolio-feedback");
      setSaved([]);
      setStatus("Storage cleared successfully.");
    } catch {
      setStatus("Could not clear storage — check your browser settings.");
    }
  }

  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-soft-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-transparent"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-transparent"
            placeholder="you@example.com"
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm font-medium mb-1">Feedback</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-transparent"
            placeholder="Type your message..."
          />
        </div>

        <div className="md:col-span-2 flex items-center gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-accent-500 text-white rounded-md shadow-sm"
          >
            Send Feedback
          </button>

          <button
            type="button"
            onClick={clearStorage}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm"
          >
            Clear Saved Feedback
          </button>

          <div className="text-sm text-slate-500 dark:text-slate-400">{status}</div>
        </div>
      </form>

      <hr className="my-4 border-slate-200 dark:border-slate-700" />

      <h3 className="font-semibold mb-2">Previous feedback (local)</h3>
      <div className="space-y-3">
        {saved.length === 0 && <div className="text-slate-500">No feedback yet.</div>}
        {saved.map((f, i) => (
          <div
            key={i}
            className="p-3 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center justify-between">
              <strong>{f.name}</strong>
              <span className="text-xs text-slate-400">{new Date(f.date).toLocaleString()}</span>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{f.message}</p>
            <div className="text-xs text-slate-400 mt-2">{f.email}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
