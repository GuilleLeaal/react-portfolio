import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import '../index.css';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center p-6 
                 bg-gray-800/70 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700"
    >
      <h1 className="text-2xl font-bold text-teal-400">Portafolio - Guillermo Leal</h1>
      
      <div className="space-x-4 flex items-center">
        <a
          href="#projects"
          className="px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 
                     hover:scale-105 transition duration-300"
        >
          Proyectos
        </a>
        <a
          href="#skills"
          className="px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 
                     hover:scale-105 transition duration-300"
        >
          Habilidades
        </a>
        <a
          href="#about"
          className="px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 
                     hover:scale-105 transition duration-300"
        >
          Sobre mí
        </a>
        <a
          href="#contact"
          className="px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 
                     hover:scale-105 transition duration-300"
        >
          Contacto
        </a>

        {/* Botón de descargar CV con icono */}
        <a
          href="/GuillermoLealCV.pdf"
          download
          className="ml-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-md 
                     flex items-center gap-2 hover:scale-105 transition duration-300"
        >
          <FiDownload className="text-xl" /> Descargar CV
        </a>
      </div>
    </motion.nav>
  );
}
