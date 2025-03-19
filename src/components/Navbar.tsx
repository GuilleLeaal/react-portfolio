import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import '../index.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-800/70 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700"
    >
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-teal-400">Portfolio - Guillermo Leal</h1>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} className="text-white" /> : <FiMenu size={28} className="text-white" />}
          </button>
        </div>

        <div className="space-x-4 hidden md:flex items-center">
          <a href="#projects" className="px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:scale-105 transition duration-300">Projects</a>
          <a href="#skills" className="px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:scale-105 transition duration-300">Skills</a>
          <a href="#about" className="px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:scale-105 transition duration-300">About me</a>
          <a href="#contact" className="px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:scale-105 transition duration-300">Contact</a>

          <a href="/GuillermoLealCV.pdf" download className="ml-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-md flex items-center gap-2 hover:scale-105 transition duration-300">
            <FiDownload className="text-xl" /> Download CV
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center bg-gray-800/90 p-4 space-y-4 md:hidden">
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white">Proyectos</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-white">Habilidades</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-white">Sobre mí</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white">Contacto</a>
          <a href="/GuillermoLealCV.pdf" download className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-md flex items-center gap-2">
            <FiDownload className="text-xl" /> Descargar CV
          </a>
        </div>
      )}
    </motion.nav>
  );
}
