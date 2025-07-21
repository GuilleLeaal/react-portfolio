import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPython, FaBootstrap, 
  FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiFigma, SiMysql 
} from 'react-icons/si';
import { MdComputer, MdGroups} from 'react-icons/md';
import { GrDatabase } from "react-icons/gr";

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-300" /> },
    { name: 'C#', icon: <span className="text-purple-400 font-bold text-lg">C#</span> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-300" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'NetSuite', icon: <MdComputer className="text-gray-300" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'SCRUM', icon: <MdGroups className="text-yellow-300" /> }, 
    { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    { name: 'Big Data', icon: <GrDatabase className="text-white" /> },
    
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 scroll-mt-28">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="flex items-center justify-center gap-3 bg-gray-700 text-white px-4 py-4 rounded-full shadow-lg 
                       hover:scale-110 hover:bg-gray-600 transition transform duration-300 text-center"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
