'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#07070d] to-[#0b0b14] py-24 scroll-mt-28"
      aria-label="Contact section"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-24 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-260px] h-[520px] w-[520px] rounded-full bg-teal-400/8 blur-[190px]" />
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
            Contact
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            If you’re hiring or want to collaborate, I’m open to new opportunities. Reach out and we’ll talk.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl shadow-[0_18px_80px_rgba(0,0,0,0.35)] sm:p-10"
        >
          {/* Primary CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:lealguille.09@gmail.com"
              className={[
                'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3',
                'text-sm font-semibold text-white',
                'bg-gradient-to-r from-cyan-600 to-teal-500',
                'shadow-[0_12px_40px_rgba(34,211,238,0.15)]',
                'transition hover:brightness-110 active:brightness-95',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20',
              ].join(' ')}
              aria-label="Send an email"
            >
              <FiMail className="text-lg" />
              Send an email
            </a>

            <a
              href="/CV_GuillermoLeal.pdf"
              download
              className={[
                'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3',
                'text-sm font-semibold text-white/90',
                'border border-white/12 bg-white/[0.04] hover:bg-white/[0.07] hover:text-white',
                'transition',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20',
              ].join(' ')}
              aria-label="Download CV"
            >
              <FiDownload className="text-lg" />
              Download CV
            </a>
          </div>

          {/* Social cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="https://www.linkedin.com/in/guillermo-leal-b4659329b/"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'group rounded-2xl border border-white/10 bg-black/20 p-5 text-left',
                'transition hover:bg-white/[0.06] hover:border-white/15',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60',
              ].join(' ')}
              aria-label="Open LinkedIn profile"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">LinkedIn</div>
                  <div className="text-xs text-white/55">Connect / message</div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Professional profile and experience overview.
              </p>
            </a>

            <a
              href="https://github.com/GuilleLeaal"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'group rounded-2xl border border-white/10 bg-black/20 p-5 text-left',
                'transition hover:bg-white/[0.06] hover:border-white/15',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60',
              ].join(' ')}
              aria-label="Open GitHub profile"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/85">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">GitHub</div>
                  <div className="text-xs text-white/55">Code & repositories</div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Projects, source code, and implementation details.
              </p>
            </a>
          </div>

          <p className="mt-6 text-xs text-white/45">
            Prefer email? I usually reply within 24–48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}