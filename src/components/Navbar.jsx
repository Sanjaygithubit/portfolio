import { useState } from "react";

/*
 Tanglish:
 Responsive one-page navbar
 Desktop la normal menu
 Mobile la hamburger menu
*/

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30
        backdrop-blur-xl border-b border-white/10
      "
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Sanji.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <a href="#home" className="text-gray-200 hover:text-pink-400 transition">
            Home
          </a>
          <a href="#about" className="text-gray-200 hover:text-pink-400 transition">
            About Me
          </a>
          <a href="#projects" className="text-gray-200 hover:text-pink-400 transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-200 hover:text-pink-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              // Close icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="
          md:hidden
          bg-black/60 backdrop-blur-xl
          border-t border-white/10
        ">
          <div className="flex flex-col items-center py-4 gap-4 font-medium">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-pink-400 transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-pink-400 transition"
            >
              About Me
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-pink-400 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-pink-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
