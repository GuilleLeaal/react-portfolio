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
          ¡Hola! Soy <span className="text-cyan-400">Guillermo Leal</span>
        </h1>
        <p className="text-lg max-w-xl text-gray-300">
          Soy <span className="text-cyan-400 font-semibold">Desarrollador Junior</span> con una gran pasión por la tecnología y el aprendizaje constante. 
          <br />Actualmente busco <span className="text-cyan-400 font-semibold">nuevas oportunidades</span> para seguir creciendo profesionalmente.
          <br />En este portafolio te muestro algunos de mis <span className="text-cyan-400 font-semibold">proyectos</span>, habilidades técnicas y un poco más sobre mí.
        </p>
        <a
          href="#projects"
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition duration-300"
        >
          Ver proyectos
        </a>
      </motion.div>

      {/* Imagen animada desde la derecha */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="w-[550px] h-[550px] rounded-full border-4 border-cyan-500 shadow-xl overflow-hidden flex items-center justify-center bg-black">
          <img
            src={imagenCV}
            alt="Foto de Guillermo Leal"
            className="w-mid h-full object-cover"
          />
        </div>
      </motion.div>

    </section>
  );
}
