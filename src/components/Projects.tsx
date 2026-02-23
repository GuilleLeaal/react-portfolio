import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import primerProyecto from "../assets/PrimerProyecto.png";
import segundoProyecto from "../assets/SegundoProyecto.png";
import tercerProyecto from "../assets/MoneyFlow.png";
import proyectoFinal from "../assets/ProyectoFinal.png";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];
  badge?: "Featured" | "Capstone" | "Early work";
};

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const projects: Project[] = useMemo(
    () => [
      {
        title: "MoneyFlow",
        subtitle: "Personal finance tracking system",
        description:
          "Full-stack financial tracking application with authentication, dashboard analytics and structured data management.",
        image: tercerProyecto,
        tags: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
        badge: "Featured",
      },
      {
        title: "Capstone Project",
        subtitle: "E-commerce + management system",
        description:
          "Final degree project including a complete e-commerce platform and internal management system, aligned to client specifications.",
        image: proyectoFinal,
        tags: ["Full-stack", "E-commerce", "Management System"],
        badge: "Capstone",
      },
      {
        title: "Project 2",
        subtitle: "Frontend assignment (ORT)",
        description:
          "Early frontend-focused project demonstrating UI fundamentals and structured layout.",
        image: segundoProyecto,
        tags: ["HTML", "CSS", "JavaScript"],
        badge: "Early work",
      },
      {
        title: "Project 1",
        subtitle: "First university assignment",
        description:
          "Initial academic project included to demonstrate progression and learning curve.",
        image: primerProyecto,
        tags: ["HTML", "CSS", "JavaScript"],
        badge: "Early work",
      },
    ],
    []
  );

  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const badgeStyles = (badge?: Project["badge"]) => {
    switch (badge) {
      case "Featured":
        return "bg-cyan-400/12 text-cyan-200 border-cyan-300/25";
      case "Capstone":
        return "bg-emerald-400/12 text-emerald-200 border-emerald-300/25";
      default:
        return "bg-white/[0.06] text-white/70 border-white/10";
    }
  };

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-[#0b0b14] to-[#07070d] py-24 scroll-mt-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Projects
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Selected work showcasing progression from academic foundations to structured full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="text-sm text-white/50 mt-1">
                      {p.subtitle}
                    </p>
                  )}
                </div>
                {p.badge && (
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${badgeStyles(
                      p.badge
                    )}`}
                  >
                    {p.badge}
                  </span>
                )}
              </div>

              <p className="text-sm text-white/70 leading-relaxed">
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

              <button
                onClick={() => setSelected(p)}
                className="mt-5 w-full rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={p.image}
                  alt={`Preview of ${p.title}`}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#0b0b14] border border-white/10 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white"
              >
                <IoClose size={22} />
              </button>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {selected.title}
                </h3>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}