import { useState } from 'react';
import primerProyecto from '../assets/PrimerProyecto.png';
import segundoProyecto from '../assets/SegundoProyecto.png';
import tercerProyecto from '../assets/MoneyFlow.png';
import proyectoFinal from '../assets/ProyectoFinal.png';
import { IoClose } from 'react-icons/io5';

const projects = [
  { 
    title: 'Project 1', 
    description: 'This is the first project I created as part of an assignment from ORT Uruguay University. Although it is very basic, I thought it was good to show my beginnings.', 
    imagen: primerProyecto,
    demo: 'https://primer-proyecto-tau.vercel.app'
  },
  { 
    title: 'Project 2', 
    description: 'This was my first project fully focused on frontend development as part of an assignment from ORT Uruguay University. Although it is basic, as I mentioned before, I like to show my early work.', 
    imagen: segundoProyecto,
    demo: 'https://dise-o-interfaz-basico.vercel.app'
  },    
  { 
    title: 'Capstone Project', 
    description: 'This project was the Capstone Project for the "Information Technology Analyst" degree at ORT University. The design was created according to the clients preferences. An e-commerce platform was developed along with a management system. In this case, the demo is shown in a YouTube video.', 
    imagen: proyectoFinal,
    demo: 'https://youtu.be/1CObgj2UHr8'
  },
  { 
    title: 'Money Flow', 
    description: 'This is the latest project I have completed. It is a personal finance tracking application built with React, TypeScript, Node.js, and MongoDB. The system allows users to register and log in securely, track income and expenses, view financial summaries on a dynamic dashboard, and generate detailed reports with filters and interactive charts. The design was fully customized to ensure an engaging and modern user experience, with support for dark mode and visual animations. At this stage, the project is available on GitHub.', 
    imagen: tercerProyecto,
    demo: 'https://github.com/GuilleLeaal/moneyflow-app'
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 scroll-mt-28">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg 
                       hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">{project.title}</h3>
            </a>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div 
              className="h-[200px] bg-gray-700/30 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => project.imagen && setSelectedImage(project.imagen)}
            >
              {project.imagen ? (
                <img 
                  src={project.imagen} 
                  alt="Imagen o Demo aquí" 
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                />
              ) : (
                <span className="text-gray-400 flex items-center justify-center h-full">Sin imagen</span>
              )}
            </div>

            {/* Botón de Demo */}
            {project.demo && project.title != "Money Flow" && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300"
              >
                View Demo
              </a>
            )}
            {project.demo && project.title == "Money Flow" && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300"
              >
                Git Hub Repository
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Modal con fade-in y botón de cerrar */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón de cerrar fuera de la imagen */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }} 
            className="absolute top-8 right-8 bg-black/60 rounded-full p-3 text-gray-300 hover:text-red-400 hover:bg-black transition-colors duration-300 z-50"
          >
            <IoClose size={30} />
          </button>

          <div className="relative">
            <img src={selectedImage} alt="Vista completa" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}
