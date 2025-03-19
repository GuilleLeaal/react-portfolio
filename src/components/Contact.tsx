import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
<section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 scroll-mt-28">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Contacto</h2>

      <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 shadow-lg text-center text-gray-300">
        <p className="text-lg mb-8">
          ¿Querés trabajar conmigo? <span className="text-teal-400">¡Estoy abierto a nuevas oportunidades!</span> No dudes en escribirme y charlamos.
        </p>

        <a 
          href="mailto:guillermo.leal.9.9.02@gmail.com" 
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 mb-8"
        >
          Enviame un correo
        </a>

        <div className="flex justify-center gap-8">
          <a 
            href="https://www.linkedin.com/in/guillermo-leal-b4659329b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin className="text-blue-400 text-2xl" /> LinkedIn
          </a>

          <a 
            href="https://github.com/GuilleLeaal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <FaGithub className="text-gray-300 text-2xl" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
