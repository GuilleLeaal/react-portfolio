import { useState } from 'react';
import primerProyecto from '../assets/PrimerProyecto.png';
import segundoProyecto from '../assets/SegundoProyecto.png';
import tercerProyecto from '../assets/MoneyFlow.png';
import proyectoFinal from '../assets/ProyectoFinal.png';
import { IoClose } from 'react-icons/io5';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Project 1',
    description: 'This is the first project I created as part of an assignment from ORT Uruguay University. Although it is very basic, I thought it was good to show my beginnings.',
    imagen: primerProyecto,
    demo: 'https://primer-proyecto-tau.vercel.app',
    type: 'demo'
  },
  {
    title: 'Project 2',
    description: 'This was my first project fully focused on frontend development as part of an assignment from ORT Uruguay University. Although it is basic, as I mentioned before, I like to show my early work.',
    imagen: segundoProyecto,
    demo: 'https://dise-o-interfaz-basico.vercel.app',
    type: 'demo'
  },
  {
    title: 'Capstone Project',
    description: 'This project was the Capstone Project for the "Information Technology Analyst" degree at ORT University. The design was created according to the client’s preferences. An e-commerce platform was developed along with a management system. In this case, the demo is shown in a YouTube video.',
    imagen: proyectoFinal,
    demo: 'https://youtu.be/1CObgj2UHr8',
    type: 'video'
  },
  {
    title: 'Money Flow',
    description: 'This is the latest project I have completed. It is a personal finance tracking application built with React, TypeScript, Node.js, and MongoDB. The system allows users to register and log in securely, track income and expenses, view financial summaries on a dynamic dashboard, and generate detailed reports with filters and interactive charts.',
    imagen: tercerProyecto,
    demo: 'https://github.com/GuilleLeaal/moneyflow-app',
    type: 'github'
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 scroll-mt-28">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-cyan-400 tracking-wide">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">{project.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(project.imagen)}
            >
              <img
                src={project.imagen}
                alt={`Preview of ${project.title}`}
                className="w-full h-56 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 rounded-lg" />
            </div>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2 text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg transition-colors duration-300"
            >
              {project.type === 'github' && <>GitHub Repository <FaGithub /></>}
              {project.type === 'demo' && <>View Demo <FaExternalLinkAlt /></>}
              {project.type === 'video' && <>Watch Video <FaExternalLinkAlt /></>}
            </a>
          </div>
        ))}
      </div>

      {/* Modal para ampliar imagen */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-8 right-8 bg-black/60 rounded-full p-3 text-gray-300 hover:text-red-400 transition"
          >
            <IoClose size={30} />
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Full view"
              className="rounded-lg shadow-2xl max-h-full max-w-full"
            />
          </div>
        </div>
      )}
    </section>

  );
}
