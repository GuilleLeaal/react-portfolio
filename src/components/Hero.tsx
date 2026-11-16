import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../i18n";
import { profile } from "../data";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-topline mono">
        <span>
          <span className="status-dot" />{" "}
          {t("PORTFOLIO PERSONAL", "PERSONAL PORTFOLIO")}
        </span>
        <span>
          <FiMapPin aria-hidden="true" /> MONTEVIDEO, UY
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            {t("DESARROLLADOR FULLSTACK", "FULLSTACK DEVELOPER")}
          </p>
          <h1 id="hero-title">
            Guillermo
            <br />
            <em>Leal</em>
          </h1>
          <p className="hero-description">
            {t(
              "Soy desarrollador fullstack en STeP, fundador de GWeb y profesor de Ciencias de la Computación en el Colegio Pallotti. Trabajo con React, TypeScript, C#/.NET y Node.js.",
              "I’m a fullstack developer at STeP, founder of GWeb and Computer Science teacher at Colegio Pallotti. I work with React, TypeScript, C#/.NET and Node.js.",
            )}
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="button button-dark">
              {t("Ver proyectos", "View projects")}
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={profile.cv} download className="text-link">
              {t("Descargar CV", "Download CV (ES)")}{" "}
              <FiDownload aria-hidden="true" />
            </a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub{" "}
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn aria-hidden="true" /> LinkedIn{" "}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <span className="portrait-index mono">GL / 01</span>
          <div className="portrait-image">
            <img
              src={`${import.meta.env.BASE_URL}images/guillermo.webp`}
              width="800"
              height="800"
              alt={t("Guillermo Leal", "Portrait of Guillermo Leal")}
              fetchPriority="high"
            />
          </div>
          <div className="portrait-caption">
            <span>
              Guillermo Leal
              <small>
                {t(
                  "Desarrollo · Producto · Educación",
                  "Development · Product · Education",
                )}
              </small>
            </span>
            <span className="portrait-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="portrait-note mono">
            <span className="status-dot" />
            {t("ANALISTA EN TI · ORT URUGUAY", "IT ANALYST · ORT URUGUAY")}
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          {t("Actualmente en", "Currently at")} <strong>STeP</strong>
          <span>/</span>
          <strong>GWeb</strong>
          <span>/</span>
          <strong>Pallotti</strong>
        </p>
        <a href="#projects" className="mono">
          {t("PROYECTOS", "PROJECTS")}
          <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
