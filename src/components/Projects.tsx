import { useState } from 'react';
import primerProyecto from '../assets/PrimerProyecto.png';
import segundoProyecto from '../assets/SegundoProyecto.png';
import tercerProyecto from '../assets/TercerProyecto.png';
import proyectoFinal from '../assets/ProyectoFinal.png';
import { IoClose } from 'react-icons/io5';

const projects = [
  { 
    title: 'Proyecto 1', 
    description: 'Este es el primer proyecto que realicé, bajo la consigna de la Facultad ORT Uruguay. Aunque es algo muy básico, me pareció bien mostrar mis inicios.', 
    imagen: primerProyecto,
    demo: 'https://primer-proyecto-tau.vercel.app'
  },
  { 
    title: 'Proyecto 2', 
    description: 'Fue mi primer trabajo completamente enfocado al frontend bajo la consigna de la Facultad ORT Uruguay. Si bien es algo básico, como dije anteriormente, me gusta mostrar mis inicios.', 
    imagen: segundoProyecto,
    demo: 'https://dise-o-interfaz-basico.vercel.app'
  },  
  { 
    title: 'Proyecto 3', 
    description: 'Primer proyecto en el que utilice React, mas que en el diseño, estaba enfocado en el aprendizaje de su uso funcional (Cambios visuales al momento de realizar un cambio). Se realizo un sistema para que una persona lleve registro de sus comidas, calorias, etc.. Como agregado tiene un mapa con todos los usuarios registrados en la api.', 
    imagen: tercerProyecto
  },  
  { 
    title: 'Proyecto Integrador', 
    description: 'Es el ultimo proyecto que realice hasta el momento. Es el Proyecto Integrador para la carrera "Analista en tecnologias de la informacion" de la universidad ORT". Diseño realizado segun el gusto del cliente con el que trabajamos. Se realizo un ecommerce junto a un sistema de gestion. En este caso la demo se mostrara en un video desde youtube.', 
    imagen: proyectoFinal,
    demo: 'https://youtu.be/1CObgj2UHr8'
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 scroll-mt-28">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Proyectos</h2>

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
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300"
              >
                Ver Demo
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
