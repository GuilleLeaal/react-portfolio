import { motion } from 'framer-motion';
import imagenCV from '../assets/imagenCV.jpeg';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 bg-animated-gradient">

      {/* Texto animado desde la izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="md:w-1/2 flex flex-col justify-center items-center text-center px-8 md:px-20 space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hello! I'm <span className="text-cyan-400">Guillermo Leal</span>
        </h1>
        <p className="text-lg max-w-xl text-gray-300">
          I'm a <span className="text-cyan-400 font-semibold">Software Developer</span> with a strong passion for technology and continuous learning.
          <br />I am currently looking for <span className="text-cyan-400 font-semibold">new opportunities</span> to keep growing professionally.
          <br />In this portfolio, I showcase some of my <span className="text-cyan-400 font-semibold">projects</span>, technical skills, and a bit more about myself.
        </p>
        <a
          href="#projects"
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition duration-300"
        >
          View Projects
        </a>
      </motion.div>

      {/* Imagen animada desde la derecha */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
      >
        {/* Hover con animación */}
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(6, 182, 212, 0.8)' }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-[300px] sm:w-[400px] md:w-[550px] h-[300px] sm:h-[400px] md:h-[550px] rounded-full border-4 border-cyan-500 shadow-xl overflow-hidden flex items-center justify-center bg-black max-w-full"
        >
          <img
            src={imagenCV}
            alt="Foto de Guillermo Leal"
            className="h-full object-cover"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}
