import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCancel() {
    setForm({ name: "", email: "", message: "" });
    setStatus(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        "https://portfolio-backend-1-2e2c.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="contact-section">
      <motion.div
        className="container contact-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Contact</h2>
        <p className="muted">
          Have a project? Send a message and I'll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="input"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            className="input"
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            className="textarea"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>

            <button
              type="button"
              className="btn btn-outline"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>

          {status === "success" && (
            <p style={{ color: "green", marginTop: 10 }}>
              Message sent — thank you!
            </p>
          )}

          {status === "error" && (
            <p style={{ color: "red", marginTop: 10 }}>
              Failed to send message. Try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
