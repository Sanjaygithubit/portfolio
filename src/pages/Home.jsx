import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";

/*
 Tanglish:
 Hero section – website oda first impression
 Professional + premium look kudukka
*/

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center"
      >
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <img
            src="https://i.pravatar.cc/180"
            alt="Professional Avatar"
            className="
              w-44 h-44 rounded-full
              border-4 border-indigo-500
              shadow-2xl
            "
          />
        </div>

        {/* Welcome Message */}
        <p className="text-indigo-400 font-semibold tracking-wide mb-3">
          Welcome to my professional portfolio
        </p>

        {/* Main Heading */}
        <h1
          className="
            text-5xl md:text-6xl font-extrabold mb-6
            bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500
            bg-clip-text text-transparent
          "
        >
          Full Stack Designer & Developer
        </h1>

        {/* Brief Introduction */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          I specialize in designing elegant user interfaces and building
          scalable full stack web applications using modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-3 rounded-full
              bg-indigo-600 hover:bg-indigo-500
              font-semibold transition
            "
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-3 rounded-full
              border border-white/20
              hover:bg-white/10
              font-semibold transition
            "
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
