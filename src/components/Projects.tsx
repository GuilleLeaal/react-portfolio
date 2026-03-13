import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IoClose, IoOpenOutline, IoLogoGithub } from "react-icons/io5";

import tercerProyecto from "../assets/MoneyFlow.png";
import proyectoFinal from "../assets/ProyectoCalypso.png";
import vittaGroupImg from "../assets/VittaGroup.jpg";
// Si todavía no tenés imagen para VittaGroup, comentá el import de arriba
// y sacá `image: vittaGroupImg` del objeto.
// Mi Ritmo lo dejo sin screenshot por ahora, estilo backend/engineering.

type Badge = "Featured" | "Production" | "Engineering";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  tags: string[];
  badge?: Badge;
  highlights: string[];
  live?: string;
  repo?: string;
};

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const projects: Project[] = useMemo(
    () => [
      {
        title: "MoneyFlow",
        subtitle: "Full-Stack Personal Finance System",
        description:
          "Full-stack financial tracking app featuring authentication, dashboard analytics, and structured data management.",
        image: tercerProyecto,
        tags: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
        badge: "Featured",
        highlights: [
          "JWT authentication + protected routes",
          "Analytics dashboard with dynamic charts",
          "Frontend + backend validation",
          "REST API with Express and modular structure",
          "Consistent MongoDB schema design",
          "Full dark mode UI system",
        ],
        repo: "https://github.com/GuilleLeaal/moneyflow-app",
      },
            {
        title: "VittaGroup",
        subtitle: "Production Real Estate Website with CMS",
        description:
          "Premium real estate minisite built with Next.js and Sanity CMS, featuring dynamic property pages, structured content, and SEO-focused architecture.",
        image: vittaGroupImg,
        tags: ["Next.js", "Tailwind", "Sanity CMS", "SEO", "App Router"],
        badge: "Production",
        highlights: [
          "Dynamic property pages with slug-based routing",
          "Sanity CMS integration for manageable listings content",
          "SEO metadata + sitemap + structured page architecture",
          "Responsive premium UI adapted for real estate presentation",
          "Catalog + listing detail flow with reusable components",
          "Production-ready deployment structure and domain setup",
        ],
        live: "https://vittagroup.uy",
      },
      {
        title: "Calypso Eventos",
        subtitle: "Production Landing Page (Client Project)",
        description:
          "Real client project focused on conversion, performance, and SEO. Fully deployed with custom domain and premium UX.",
        image: proyectoFinal,
        tags: ["React", "Vite", "Tailwind", "Framer Motion"],
        badge: "Production",
        highlights: [
          "Production deployment + custom domain",
          "SEO setup: meta + OG + sitemap + Search Console",
          "Responsive layout strategy (mobile/desktop)",
          "Animation system built with Framer Motion",
          "Performance-oriented asset handling",
        ],
        live: "https://calypsoeventos.com.uy",
      },
      {
        title: "Perseo Trainers",
        subtitle: "Backend Architecture — Fitness Management API",
        description:
          "Modular backend system built with NestJS + Prisma + PostgreSQL, designed for scalability, ownership rules, and clean patterns.",
        tags: ["NestJS", "Prisma", "PostgreSQL", "JWT", "REST API"],
        badge: "Engineering",
        highlights: [
          "NestJS modular architecture (controllers/services/guards)",
          "JWT auth with guards + resource ownership validation",
          "Soft delete pattern (active=false) across entities",
          "Relational modeling with PostgreSQL via Prisma",
          "DTO validation with pipes for consistent inputs",
          "Trainer-scoped endpoints with strong authorization",
        ],
        // repo: "https://github.com/tuusuario/perseo-trainers",
      },
      {
        title: "Mi Ritmo",
        subtitle: "Behavioral Analytics & Energy Planning Backend",
        description:
          "Backend-first product designed to model personal energy, friction, sleep, activity impact, and planning insights through structured analytics endpoints.",
        tags: [
          "NestJS",
          "PostgreSQL",
          "Prisma",
          "Analytics",
          "Prediction",
        ],
        badge: "Engineering",
        highlights: [
          "Custom domain modeling for sleep, activity, energy, and friction",
          "Analytics endpoints such as heatmaps, scoring, and weekly insights",
          "Prediction-oriented backend logic beyond standard CRUD flows",
          "Strict DTO validation and hardened API structure",
          "Consistent confidence scoring and planner preview logic",
          "Product-thinking architecture built around real behavioral use cases",
        ],
        // repo: "https://github.com/tuusuario/mi-ritmo",
      },
    ],
    []
  );

  const [selected, setSelected] = useState<Project | null>(null);

  const { featured, engineering } = useMemo(() => {
    const feat: Project[] = [];
    const eng: Project[] = [];

    for (const p of projects) {
      if (p.badge === "Engineering") eng.push(p);
      else feat.push(p);
    }

    return { featured: feat, engineering: eng };
  }, [projects]);

  useEffect(() => {
    if (!selected) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setSelected(null);
      }

      if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;

        const focusables = Array.from(
          root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter(
          (el) =>
            !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
        );

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      lastActiveRef.current?.focus?.();
    };
  }, [selected]);

  const badgeStyles = (badge?: Badge) => {
    switch (badge) {
      case "Featured":
        return "bg-cyan-400/12 text-cyan-200 border-cyan-300/25";
      case "Production":
        return "bg-emerald-400/12 text-emerald-200 border-emerald-300/25";
      case "Engineering":
        return "bg-violet-400/12 text-violet-200 border-violet-300/25";
      default:
        return "bg-white/[0.06] text-white/70 border-white/10";
    }
  };

  const SectionTitle = ({ title, desc }: { title: string; desc: string }) => (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
        {desc}
      </p>
    </motion.div>
  );

  const ProjectCard = ({ p, idx }: { p: Project; idx: number }) => {
    const hasImage = Boolean(p.image);

    return (
      <motion.article
        key={`${p.title}-${idx}`}
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: clamp01(idx * 0.06) }}
        viewport={{ once: true }}
        className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.06]"
      >
        <div className="flex justify-between items-start mb-3 gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-white truncate">
              {p.title}
            </h3>
            {p.subtitle && (
              <p className="text-sm text-white/50 mt-1 line-clamp-2">
                {p.subtitle}
              </p>
            )}
          </div>

          {p.badge && (
            <span
              className={`shrink-0 text-xs px-3 py-1 rounded-full border ${badgeStyles(
                p.badge
              )}`}
            >
              {p.badge}
            </span>
          )}
        </div>

        <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
          {p.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-2">
          <button
            onClick={() => setSelected(p)}
            className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black/20 hover:bg-black/30 transition"
            aria-label={`Open details for ${p.title}`}
          >
            {hasImage ? (
              <img
                src={p.image}
                alt={`Preview of ${p.title}`}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="h-56 w-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/0">
                <div className="text-center px-6">
                  <p className="text-white/85 font-medium">
                    Backend / Architecture
                  </p>
                  <p className="text-white/55 text-sm mt-1">
                    No screenshots yet — view technical details
                  </p>
                </div>
              </div>
            )}
          </button>

          {(p.live || p.repo) && (
            <div className="flex flex-wrap gap-2">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.08] transition"
                  aria-label={`Open live site for ${p.title}`}
                >
                  <IoOpenOutline />
                  Live
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.08] transition"
                  aria-label={`Open repository for ${p.title}`}
                >
                  <IoLogoGithub />
                  Repo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>
    );
  };

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-[#0b0b14] to-[#07070d] py-24 scroll-mt-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <SectionTitle
          title="Projects"
          desc="Selected work optimized for technical interviews: shipped production work, complete product builds, and backend architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((p, idx) => (
            <ProjectCard key={`${p.title}-${idx}`} p={p} idx={idx} />
          ))}
        </div>

        {engineering.length > 0 && (
          <div className="mt-16">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold text-white">
                Engineering & Backend
              </h3>
              <p className="mt-2 text-sm text-white/60 max-w-2xl">
                Work where the value is architecture, data modeling,
                authorization, analytics, and implementation patterns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engineering.map((p, idx) => (
                <ProjectCard key={`${p.title}-eng-${idx}`} p={p} idx={idx} />
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6"
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            onClick={() => setSelected(null)}
            role="presentation"
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={`Project details: ${selected.title}`}
              className="relative max-w-5xl w-full bg-[#0b0b14] border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.55)] max-h-[88vh] flex flex-col"
              initial={
                prefersReducedMotion
                  ? undefined
                  : { scale: 0.98, y: 10, opacity: 0 }
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : { scale: 1, y: 0, opacity: 1 }
              }
              exit={
                prefersReducedMotion
                  ? undefined
                  : { scale: 0.99, y: 8, opacity: 0 }
              }
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:bg-black/80 transition focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label="Close dialog"
              >
                <IoClose size={22} />
              </button>

              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full max-h-[420px] object-cover"
                />
              ) : (
                <div className="w-full h-[260px] sm:h-[320px] bg-gradient-to-br from-white/8 via-white/5 to-white/0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <p className="text-white/90 text-lg font-semibold">
                      {selected.title}
                    </p>
                    <p className="text-white/55 text-sm mt-2">
                      Backend / Architecture — no screenshots yet
                    </p>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 overflow-auto">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-white/45">
                      Project Details
                    </p>

                    <div className="mt-2 flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                        {selected.title}
                      </h3>
                      {selected.badge && (
                        <span
                          className={`text-xs px-3 py-1 rounded-full border ${badgeStyles(
                            selected.badge
                          )}`}
                        >
                          {selected.badge}
                        </span>
                      )}
                    </div>

                    {selected.subtitle && (
                      <p className="mt-1 text-sm sm:text-base text-white/55">
                        {selected.subtitle}
                      </p>
                    )}
                  </div>

                  {(selected.live || selected.repo) && (
                    <div className="flex gap-2 flex-wrap">
                      {selected.live && (
                        <a
                          href={selected.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/85 hover:bg-white/[0.08] transition"
                        >
                          <IoOpenOutline />
                          Live
                        </a>
                      )}
                      {selected.repo && (
                        <a
                          href={selected.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/85 hover:bg-white/[0.08] transition"
                        >
                          <IoLogoGithub />
                          Repo
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="mt-5 text-white/70 text-sm leading-relaxed">
                  {selected.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="text-white/90 font-semibold">Highlights</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {selected.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 text-xs text-white/45">
                  Tip: press <span className="text-white/70">ESC</span> to
                  close.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}