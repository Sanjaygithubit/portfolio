/*
 Tanglish:
 One-page website navbar
 click panna section ku smooth ah scroll aagum
*/

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-r
        from-indigo-600/30
        via-purple-600/30
        to-pink-600/30
        backdrop-blur-xl
        border-b border-white/10
      "
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Sanji.dev
        </h1>

        {/* Menu – One Page Scroll Links */}
        <div className="flex gap-6 font-medium">
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

      </nav>
    </header>
  );
}
