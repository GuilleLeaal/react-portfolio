import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCode, FiGitBranch, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects, type Category, type Project } from "../data";
import { useLanguage } from "../i18n";

function ProjectVisual({
  project,
  detail = false,
}: {
  project: Project;
  detail?: boolean;
}) {
  const { t } = useLanguage();
  if (project.image)
    return (
      <div className={`project-image visual-${project.id}`}>
        <div className="browser-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{project.name.toLowerCase().replace(/\s/g, "")}</span>
        </div>
        <img
          src={project.image}
          alt={t(`Captura de ${project.name}`, `Screenshot of ${project.name}`)}
          loading="lazy"
          width="1400"
          height={
            project.id === "calypso"
              ? 669
              : project.id === "moneyflow"
                ? 674
                : 670
          }
          className={detail ? "detail-image" : ""}
        />
      </div>
    );
  return (
    <div
      className={`project-illustration visual-${project.id}`}
      aria-hidden="true"
    >
      {project.id === "iconic" ? (
        <>
          <span className="visual-kicker">FREESTYLE / COMPETITION SYSTEM</span>
          <strong>
            iconic<span>free.</span>
          </strong>
          <div className="bracket">
            <span>
              01 ──┐
              <br />
              02 ──┤
            </span>
            <FiGitBranch />
            <span>
              ┌── 03
              <br />
              ┤── 04
            </span>
          </div>
          <span className="visual-foot">
            {t(
              "CLASIFICATORIAS · CRUCES · RESULTADOS",
              "QUALIFIERS · BRACKETS · RESULTS",
            )}
          </span>
        </>
      ) : project.id === "pallotti" ? (
        <>
          <div className="gallery-windows">
            <span>&lt;html&gt;</span>
            <span>
              {"{"} html / css {"}"}
            </span>
            <span>01 / 2026</span>
          </div>
          <strong>
            {t("Proyectos", "Student")}
            <br />
            <em>{t("finales", "projects")}</em>
          </strong>
          <span className="visual-foot">
            PALLOTTI · {t("PROYECTOS FINALES", "FINAL PROJECTS")} 2026
          </span>
        </>
      ) : (
        <>
          <span className="visual-kicker">
            {project.id === "perseo"
              ? "TRAINING / MANAGEMENT API"
              : "ENERGY / PLANNING / ANALYTICS"}
          </span>
          <FiCode className="visual-code" />
          <strong>
            {project.name}
            <span className="api-dot">.</span>
          </strong>
          <div className="api-flow">
            <span>API</span>
            <i />
            <span>DOMAIN</span>
            <i />
            <span>DATA</span>
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<Category>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const filters: { id: Category; label: string }[] = [
    { id: "all", label: t("Todos", "All work") },
    { id: "client", label: t("Clientes", "Clients") },
    { id: "product", label: t("Productos", "Products") },
    { id: "education", label: t("Educación", "Education") },
    { id: "backend", label: "Backend" },
  ];
  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);
  const projectCountLabel =
    visible.length === 1
      ? t("PROYECTO", "PROJECT")
      : t("PROYECTOS", "PROJECTS");
  const tagLabel = (tag: string) =>
    tag === "Educación" ? t("Educación", "Education") : tag;

  useEffect(() => {
    if (!selected) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section
      id="projects"
      className="projects-section section"
      aria-labelledby="projects-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>01 /</span> {t("TRABAJO SELECCIONADO", "SELECTED WORK")}
            </p>
            <h2 id="projects-title">{t("Proyectos", "Projects")}</h2>
          </div>
          <p>
            {t(
              "Estos son algunos de los proyectos en los que trabajé, tanto para clientes como por iniciativa propia.",
              "Here are some of the projects I’ve worked on, for clients and independently.",
            )}
          </p>
        </div>
        <div className="project-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label={t("Filtrar proyectos", "Filter projects")}
          >
            {filters.map((item) => (
              <button
                key={item.id}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="mono project-count" role="status" aria-live="polite">
            {String(visible.length).padStart(2, "0")} {projectCountLabel}
          </span>
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.id === "calypso" ? "project-featured" : ""}`}
            >
              <button
                className="project-preview"
                onClick={() => setSelected(project)}
                aria-label={t(
                  `Ver detalles de ${project.name}`,
                  `View ${project.name} details`,
                )}
              >
                <ProjectVisual project={project} />
                <span className="preview-open">
                  <FiArrowUpRight />
                </span>
              </button>
              <div className="project-content">
                <p className="project-discipline mono">
                  {project.discipline[language]}
                </p>
                <h3>
                  <button onClick={() => setSelected(project)}>
                    {project.name}
                    <FiArrowUpRight aria-hidden="true" />
                  </button>
                </h3>
                <p className="project-description">
                  {project.description[language]}
                </p>
                <ul
                  className="tags"
                  aria-label={t("Tecnologías", "Technologies")}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tagLabel(tag)}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <button
                    className="text-link"
                    onClick={() => setSelected(project)}
                  >
                    {t("Ver detalles", "View details")}
                    <FiArrowUpRight aria-hidden="true" />
                  </button>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      {t("Ver sitio", "Visit site")}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <a
          href="https://github.com/GuilleLeaal"
          target="_blank"
          rel="noopener noreferrer"
          className="all-code"
        >
          <FaGithub aria-hidden="true" />
          <span>
            {t("Ver más proyectos en GitHub", "View more projects on GitHub")}
          </span>
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-description"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
      >
        {selected && (
          <div className="dialog-surface">
            <button
              className="dialog-close icon-button"
              onClick={() => setSelected(null)}
              autoFocus
              aria-label={t("Cerrar proyecto", "Close project")}
            >
              <FiX />
            </button>
            <ProjectVisual project={selected} detail />
            <div className="dialog-content">
              <p className="eyebrow">{selected.discipline[language]}</p>
              <h2 id="project-dialog-title">{selected.name}</h2>
              <p id="project-dialog-description">
                {selected.description[language]}
              </p>
              <h3>
                {t("Funcionalidades y desarrollo", "Features and development")}
              </h3>
              <ul className="project-highlights">
                {selected.highlights.map((item) => (
                  <li key={item.es}>{item[language]}</li>
                ))}
              </ul>
              <ul className="tags">
                {selected.tags.map((tag) => (
                  <li key={tag}>{tagLabel(tag)}</li>
                ))}
              </ul>
              <div className="dialog-links">
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-dark"
                  >
                    {t("Visitar sitio", "Visit website")}
                    <FiArrowUpRight />
                  </a>
                )}
                {selected.repo && (
                  <a
                    href={selected.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    <FaGithub />
                    {t("Ver código", "View code")}
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
