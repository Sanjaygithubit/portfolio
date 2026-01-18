import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";

/*
 Tanglish:
 Contact page
 Assignment la ketta ellam features um idhula irukku
*/

export default function Contact() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <div className="max-w-xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Contact Me
          </h2>
          <p className="text-gray-300">
            Feel free to reach out for collaboration or opportunities.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            space-y-4 mb-10
            bg-gradient-to-br from-white/10 to-white/5
            p-8 rounded-2xl
            border border-white/10
            shadow-xl
          "
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-500"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="
              w-full py-3 rounded-full
              bg-gradient-to-r from-indigo-500 to-purple-600
              hover:from-indigo-400 hover:to-purple-500
              font-semibold text-white
              transition
            "
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 mb-4">
            Connect with me
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sanjaydev018@gmail.com"
              className="text-gray-300 hover:text-white transition"
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/Sanji_Resume.pdf"
            download
            className="
              inline-block px-8 py-3 rounded-full
              border border-white/20
              hover:bg-white/10
              font-semibold
              transition
            "
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}
