'use client';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaNodeJs, FaJava, FaPython,
  FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiFigma,
  SiMysql, SiMongodb, SiPostgresql,
  SiPrisma, SiNestjs, SiNextdotjs,
  SiExpress, SiShopify
} from 'react-icons/si';
import { MdGroups } from 'react-icons/md';

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: 'React', icon: <FaReact className="text-cyan-300" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-300" /> },
      { name: 'Framer Motion', icon: <span className="text-pink-400 text-sm">FM</span> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
      { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
      { name: 'Express', icon: <SiExpress className="text-white" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-teal-200" /> },
      { name: 'JWT Auth', icon: <span className="text-cyan-300 text-sm">JWT</span> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'SQL', icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'Shopify', icon: <SiShopify className="text-green-400" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
      { name: 'SCRUM', icon: <MdGroups className="text-yellow-300" /> },
    ],
  },
];

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-[#07070d] to-[#0b0b14] scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Technical Stack
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Modern technologies used to build scalable web applications and digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-6">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/30 border border-white/10 
                               text-white/80 text-sm font-medium transition hover:bg-white/[0.06]"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}