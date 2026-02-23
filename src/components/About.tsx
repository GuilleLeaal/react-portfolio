'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const softSkills = [
  { title: 'Proactivity', description: 'I take initiative, identify priorities, and move tasks forward with ownership.' },
  { title: 'Responsibility', description: 'I deliver reliably, communicate clearly, and protect quality under deadlines.' },
  { title: 'Teamwork', description: 'I collaborate well, share context, and align decisions with the team’s goals.' },
  { title: 'Fast Learning', description: 'I adapt quickly to new tools and domains and apply feedback immediately.' },
  { title: 'Adaptability', description: 'I’m comfortable in dynamic environments and enjoy solving ambiguous problems.' },
];

const highlights = [
  'ORT Uruguay — Information Technology Analyst (Engineering School)',
  'Backend experience in a NetSuite environment (JavaScript)',
  'Full-stack projects: finance tracking, e-commerce & management systems',
  'Strong focus on clean architecture, UX, and practical delivery',
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b0b14] to-[#07070d] py-24 scroll-mt-28"
      aria-label="About section"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-20 h-[520px] w-[520px] rounded-full bg-teal-400/8 blur-[170px]" />
        <div className="absolute right-[-180px] bottom-[-260px] h-[520px] w-[520px] rounded-full bg-cyan-500/8 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Title */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            About
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            My background, what I build, and how I work.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* Left: narrative */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-white">Profile</h3>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                I’m an <span className="text-teal-300 font-semibold">Information Technology Analyst</span> graduate from
                ORT Uruguay (Engineering School). I focus on building modern web applications with a balance of
                clean backend fundamentals and polished UI/UX.
              </p>

              <p>
                I’ve worked as a backend developer in a <span className="text-teal-300 font-semibold">NetSuite</span>{' '}
                environment using JavaScript, strengthening my experience with APIs, data handling and production-oriented
                workflows.
              </p>

              <p>
                Today, I build real projects through <span className="text-teal-300 font-semibold">GWeb</span>, ranging from
                high-impact websites to e-commerce setups and custom management systems — always aiming for maintainable,
                scalable and practical solutions.
              </p>
            </div>
          </motion.div>

          {/* Right: highlights + traits */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            {/* Highlights */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">Highlights</h3>

              <ul className="mt-4 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-white/70">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-teal-300" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft skills */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">How I work</h3>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {softSkills.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-white/[0.06]"
                  >
                    <div className="text-sm font-semibold text-teal-200">{s.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}