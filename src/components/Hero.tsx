import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
// @ts-ignore
import { loadSlim } from "tsparticles-slim";
import { FiDownload, FiArrowRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import imagenCV from "../assets/CVImagen.jpeg";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: false,
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        number: { value: 46, density: { enable: true, area: 900 } },
        color: { value: ["#22d3ee", "#34d399"] },
        shape: { type: "circle" },
        opacity: { value: 0.16, random: true },
        size: { value: { min: 1, max: 2 }, random: true },
        move: {
          enable: true,
          speed: 0.33,
          direction: "none",
          outModes: { default: "bounce" },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#22d3ee",
          opacity: 0.10,
          width: 1,
        },
      },
      detectRetina: true,
    }),
    []
  );

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.pushState) history.pushState(null, "", `#${id}`);
  };

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#07070d] via-[#0b0b14] to-[#07070d] text-white"
      aria-label="Hero"
    >
      {/* Particles (disabled if reduced motion) */}
      {!prefersReducedMotion && (
        <Particles
          className="absolute inset-0 z-0"
          init={particlesInit}
          options={particlesOptions as any}
        />
      )}

      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-48 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute -bottom-64 right-[-160px] h-[620px] w-[620px] rounded-full bg-teal-400/8 blur-[190px]" />
        <div className="absolute left-[-220px] top-16 h-[520px] w-[520px] rounded-full bg-emerald-400/7 blur-[190px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.10),transparent_45%),radial-gradient(circle_at_78%_35%,rgba(52,211,153,0.08),transparent_44%)]" />
        <div className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-20 md:flex-row md:gap-10 md:px-8 md:py-24">
        {/* Left */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-[58%]"
        >
          {/* Status row */}
          <div className="mb-7 flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.45)]" />
              Open to opportunities
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
              Backend-first mindset · UI polish
            </div>
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Guillermo <span className="text-cyan-300">Leal</span>
            <span className="mt-2 block text-white/90">
              Full-Stack Developer building scalable web products.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Production-oriented experience with <span className="text-teal-200 font-semibold">React + TypeScript</span> on
            the frontend and <span className="text-teal-200 font-semibold">Node/NestJS</span> on the backend.
            <br />
            Background in backend development within a <span className="text-teal-200 font-semibold">NetSuite</span>{" "}
            environment, now building real projects through <span className="text-teal-200 font-semibold">GWeb</span>{" "}
            (ecommerce, management systems, and custom apps).
          </p>

          {/* Stack chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "NestJS",
              "Prisma",
              "PostgreSQL",
              "MongoDB",
              "Tailwind",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/75"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollToId("projects")}
              className={[
                "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3",
                "text-sm font-semibold text-white",
                "bg-gradient-to-r from-cyan-600 to-teal-500",
                "shadow-[0_12px_40px_rgba(34,211,238,0.15)]",
                "transition hover:brightness-110 active:brightness-95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20",
              ].join(" ")}
            >
              Explore projects <FiArrowRight className="text-lg" />
            </button>

            <a
              href="/CV_GuillermoLeal.pdf"
              download
              className={[
                "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3",
                "text-sm font-semibold text-white/90",
                "border border-white/12 bg-white/[0.04]",
                "transition hover:bg-white/[0.07] hover:text-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20",
              ].join(" ")}
            >
              Download CV <FiDownload className="text-lg" />
            </a>

            <a
              href="mailto:lealguille.09@gmail.com"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3",
                "text-sm font-semibold text-white/90",
                "border border-white/12 bg-white/[0.04]",
                "transition hover:bg-white/[0.07] hover:text-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20",
              ].join(" ")}
            >
              Email <FiMail className="text-lg" />
            </a>
          </div>

          {/* Social row */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <a
              href="https://www.linkedin.com/in/guillermo-leal-b4659329b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/75 transition hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              aria-label="Open LinkedIn profile"
            >
              <FaLinkedin className="text-base text-blue-300" />
              LinkedIn
            </a>

            <a
              href="https://github.com/GuilleLeaal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/75 transition hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              aria-label="Open GitHub profile"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>

            <button
              type="button"
              onClick={() => scrollToId("gweb")}
              className="underline-offset-4 hover:text-white hover:underline"
            >
              GWeb studio
            </button>

            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="underline-offset-4 hover:text-white hover:underline"
            >
              Contact
            </button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
          className="mt-12 flex w-full justify-center md:mt-0 md:w-[42%]"
        >
          <div className="relative">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400/25 to-teal-300/20 blur-xl" />

            {/* Frame */}
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className={[
                "relative h-[280px] w-[280px] overflow-hidden rounded-[32px]",
                "border border-white/10 bg-white/[0.03]",
                "shadow-[0_20px_90px_rgba(0,0,0,0.55)]",
                "sm:h-[360px] sm:w-[360px]",
                "md:h-[420px] md:w-[420px]",
              ].join(" ")}
            >
              <img
                src={imagenCV}
                alt="Portrait of Guillermo Leal"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_42%),linear-gradient(to_top,rgba(0,0,0,0.35),transparent_55%)]" />

              {/* Corner badge */}
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/35 px-4 py-2 text-xs text-white/75 backdrop-blur-md">
                Montevideo · Open to remote / hybrid / on-site
              </div>
            </motion.div>

            {/* Mini metrics */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "Focus", v: "Full-stack" },
                { k: "Backend", v: "Nest/Node" },
                { k: "DB", v: "Postgres/Mongo" },
              ].map((m) => (
                <div
                  key={m.k}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-white/70"
                >
                  <div className="text-white/45">{m.k}</div>
                  <div className="mt-1 font-semibold text-white/80">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}