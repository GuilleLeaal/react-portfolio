'use client';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPython, FaBootstrap,
  FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiFigma, SiMysql
} from 'react-icons/si';
import { MdComputer, MdGroups } from 'react-icons/md';
import { GrDatabase } from "react-icons/gr";

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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 scroll-mt-28">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-white-400 tracking-wide">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col items-center justify-center gap-2 p-6 bg-white/5 border border-white/10 
                       rounded-2xl backdrop-blur-md text-white transition-all duration-300 shadow-lg 
                       hover:shadow-teal-400/30 hover:scale-105"
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-sm font-medium tracking-wide">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
