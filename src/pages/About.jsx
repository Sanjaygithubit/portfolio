import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";

/*
 Tanglish:
 About Me page
 Premium animated cards
 Colourful + professional UI
*/

export default function About() {
  return (
    <section className="min-h-screen px-6 pt-32 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My journey, skills, and educational background as a full stack
            designer & developer.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="
              bg-gradient-to-br from-indigo-600/20 to-purple-600/20
              p-8 rounded-2xl
              border border-indigo-400/30
              shadow-lg hover:shadow-indigo-500/30
              transition
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Personal Biography
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Tanglish:
              Na oru passionate Full Stack Designer & Developer.
              Creative UI design um strong backend logic um
              combine panni real-world problems solve
              panna applications build pannren.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="
              bg-gradient-to-br from-pink-600/20 to-rose-600/20
              p-8 rounded-2xl
              border border-pink-400/30
              shadow-lg hover:shadow-pink-500/30
              transition
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-400">
              Skills & Expertise
            </h3>
            <ul className="text-gray-200 space-y-2">
              <li>React, JavaScript, HTML, CSS</li>
              <li>Tailwind CSS – responsive UI</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB (CRUD)</li>
              <li>UI/UX Design – Figma</li>
            </ul>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="
              bg-gradient-to-br from-emerald-600/20 to-teal-600/20
              p-8 rounded-2xl
              border border-emerald-400/30
              shadow-lg hover:shadow-emerald-500/30
              transition
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">
              Educational Background
            </h3>
            <p className="text-gray-200 leading-relaxed">
              I am currently pursuing my education and simultaneously
              learning full stack development.
              I continuously improve my skills by building
              real-time projects alongside my studies.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
