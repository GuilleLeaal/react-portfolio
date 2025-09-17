'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const softSkills = [
  { title: 'Proactivity', description: 'I take initiative and tackle tasks with enthusiasm and independence.' },
  { title: 'Responsibility', description: 'I meet deadlines and deliver high-quality results consistently.' },
  { title: 'Teamwork', description: 'I enjoy working collaboratively and value shared success.' },
  { title: 'Fast Learning', description: 'I adapt quickly to new tools and technologies.' },
  { title: 'Adaptability', description: 'I thrive in dynamic environments and welcome challenges.' },
];

function FlipCard({ title, description }: { title: string; description: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-40 h-40 sm:w-48 sm:h-48 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''
          }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full flex items-center justify-center bg-white/10 border border-white/20 rounded-xl text-white text-base sm:text-xl font-bold backface-hidden shadow-md backdrop-blur-md">
          {title}
        </div>
        {/* Back */}
        <div className="absolute w-full h-full flex items-center justify-center bg-teal-600/80 border border-white/10 rounded-xl text-white text-xs sm:text-sm p-4 backface-hidden rotate-y-180 shadow-md backdrop-blur-sm">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-800 to-gray-950 scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-14 text-teal-400"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 sm:px-10 py-10 bg-white/5 border border-white/20 rounded-3xl backdrop-blur-md 
                   shadow-xl text-center text-lg text-gray-300 space-y-6"
      >
        <p>
          I am an <span className="text-teal-400 font-semibold">Information Technology Analyst graduate</span> from ORT Uruguay University – School of Engineering.
          Throughout my studies, I completed all academic semesters and elective courses, gaining solid knowledge in
          <span className="text-teal-400 font-semibold">JavaScript, C#, Java, SQL, React</span>, and other technologies.
        </p>

        <p>
          I also gained hands-on experience working as a backend developer using <span className="text-teal-400 font-semibold">JavaScript and NetSuite</span>,
          which strengthened my backend skills while maintaining my interest in frontend and other areas of IT.
        </p>

        <p>
          I consider myself a <span className="text-teal-400 font-semibold">proactive and responsible professional with a strong ability to learn and adapt</span>.
          I enjoy working in teams, contributing ideas, and taking on new challenges that drive my professional and personal growth.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 px-6">
        {softSkills.map((skill, idx) => (
          <FlipCard key={idx} title={skill.title} description={skill.description} />
        ))}
      </div>
    </section>
  );
}
