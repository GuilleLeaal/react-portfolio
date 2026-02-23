'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative overflow-hidden border-t border-white/10 bg-[#07070d] px-6 py-10"
      aria-label="Footer"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] bottom-[-240px] h-[520px] w-[520px] rounded-full bg-cyan-500/8 blur-[190px]" />
        <div className="absolute right-[-200px] top-[-280px] h-[520px] w-[520px] rounded-full bg-teal-400/6 blur-[200px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        {/* Name + status */}
        <div>
          <div className="text-sm font-semibold text-white">Guillermo Leal</div>
          <div className="mt-1 text-xs text-white/55">
            Full-Stack Developer · Open to new opportunities
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:lealguille.09@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            aria-label="Send an email"
          >
            <FiMail className="text-base" />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/guillermo-leal-b4659329b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            aria-label="Open LinkedIn profile"
          >
            <FaLinkedin className="text-base" />
            LinkedIn
          </a>

          <a
            href="https://github.com/GuilleLeaal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            aria-label="Open GitHub profile"
          >
            <FaGithub className="text-base" />
            GitHub
          </a>

          <a
            href="/CV_GuillermoLeal.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            aria-label="Download CV"
          >
            <FiDownload className="text-base" />
            CV
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright */}
        <p className="text-xs text-white/45">
          © {year} <span className="text-white/70 font-semibold">Guillermo Leal</span>. All rights reserved.
        </p>

        <p className="text-[11px] text-white/35">
          Built with React · Tailwind · Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}