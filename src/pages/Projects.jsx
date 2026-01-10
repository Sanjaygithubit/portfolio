import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";

/*
 Tanglish:
 Projects page
 Cards + image + links
 Portfolio assignment ku full satisfy pannum
*/

const projects = [
  {
    title: "E-commerce Platform",
    desc: "Developed a full-stack e-commerce website with product management, cart, wishlist, authentication, and order flow using the MERN stack.",
    image: "\Screenshot (114).png",
    live: "https://fashionxs.netlify.app/",
    code: "https://github.com/Sanjaygithubit/final-project-front.git",
  },
  {
    title: "Task Management App",
    desc: "Developed a task management web application to create, update, and track tasks efficiently using React with a responsive user interface.",
    image: "/Screenshot (115).png",
    live: "https://task-management-app-snowy-five.vercel.app/",
    code: "https://github.com/Sanjaygithubit/task-management-app.git",
  },
  {
    title: "Weather Report App",
    desc: "Developed a weather reporting web application using React to fetch and display real-time weather data with a responsive user interface.",
    image: "/Screenshot (116).png",
    live: "https://weather-report-app-xi.vercel.app/",
    code: "https://github.com/Sanjaygithubit/weather-report-app.git",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of projects that demonstrate my skills in design and full stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                bg-gradient-to-br from-white/10 to-white/5
                rounded-2xl overflow-hidden
                border border-white/10
                shadow-xl hover:shadow-indigo-500/30
                transition
              "
            >
              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {p.desc}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2 rounded-full
                      bg-gradient-to-r from-indigo-500 to-purple-600
                      text-white text-sm font-semibold
                      hover:from-indigo-400 hover:to-purple-500
                      transition
                    "
                  >
                    Live Demo
                  </a>

                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2 rounded-full
                      border border-white/20
                      text-sm font-semibold text-gray-200
                      hover:bg-white/10
                      transition
                    "
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
