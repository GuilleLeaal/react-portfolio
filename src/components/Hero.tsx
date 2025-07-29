import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
// @ts-ignore
import { loadSlim } from 'tsparticles-slim';
import imagenCV from '../assets/CVImagen.jpeg';

export default function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f0f1c] to-[#1a1a2e] text-white">

      {/* Fondo de partículas más sutil */}
      <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: { value: '#00ffff' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.25,
              random: true,
              anim: {
                enable: false,
              },
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
            },
            links: {
              enable: true,
              distance: 130,
              color: '#00ffff',
              opacity: 0.2,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Círculo glow suave detrás del contenido */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500 opacity-10 rounded-full blur-[180px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-8 md:px-20">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="md:w-1/2 flex flex-col justify-center items-center text-center space-y-6"
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

        {/* Imagen con efecto glow */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
        >
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(6, 182, 212, 0.8)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-[300px] sm:w-[400px] md:w-[550px] h-[300px] sm:h-[400px] md:h-[550px] rounded-full border-4 border-cyan-500 shadow-xl overflow-hidden flex items-center justify-center bg-black max-w-full"
          >
            <img
              src={imagenCV}
              alt="Foto de Guillermo Leal"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
