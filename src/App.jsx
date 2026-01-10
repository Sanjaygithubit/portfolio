import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

/*
 Tanglish:
 Normal website structure
 Navbar top
 Footer bottom
*/


/*
 Tanglish:
 One page layout
 ellaa sections um same page la
*/

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Each section id use pannrom scroll ku */}
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
