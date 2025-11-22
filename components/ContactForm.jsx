"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_pcgxcow",
        "template_q6et97g",
        formData,
        "MiJhHTCU3UdEeKh_H"
      )
      .then(
        () => {
          setSent(true);
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-md mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-pink-400/20 transition-shadow"
    >
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-blue-400 mb-4">
        Contact Me...
      </h2>

      {sent ? (
        <p className="text-green-300 text-lg text-center">
          Message sent successfully! ✨
        </p>
      ) : (
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-semibold shadow-lg shadow-pink-400/30 hover:shadow-blue-400/30 transition"
          >
            Send ✈️
          </motion.button>
        </form>
      )}

      <div className="absolute -inset-0.5 bg-linear-to-r from-pink-400/30 via-purple-400/30 to-blue-400/30 rounded-3xl blur-xl -z-10"></div>
    </motion.div>
  );
}
