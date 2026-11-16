import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { experience, profile } from "../data";
import { useLanguage } from "../i18n";

export default function About() {
  const { language, t } = useLanguage();
  return (
    <section
      id="about"
      className="about-section section shell"
      aria-labelledby="about-title"
    >
      <div className="about-intro">
        <div>
          <p className="eyebrow">
            <span>02 /</span> {t("SOBRE MÍ", "ABOUT ME")}
          </p>
          <h2 id="about-title">{t("Sobre mí", "About me")}</h2>
          <FiArrowDownRight className="about-arrow" aria-hidden="true" />
        </div>
        <div className="about-narrative">
          <p className="lead">
            {t(
              "Soy Analista en Tecnologías de la Información, egresado de la Universidad ORT Uruguay en 2025.",
              "I graduated from Universidad ORT Uruguay as an Information Technology Analyst in 2025.",
            )}
          </p>
          <p>
            {t(
              "Actualmente trabajo como desarrollador fullstack en STeP y desarrollo sitios y sistemas para clientes a través de GWeb. También doy clases de Ciencias de la Computación en el Colegio Pallotti.",
              "I currently work as a fullstack developer at STeP and develop websites and systems for clients through GWeb. I also teach Computer Science at Colegio Pallotti.",
            )}
          </p>
          <p>
            {t(
              "Tengo experiencia en sistemas de gestión, APIs, integraciones y bases de datos. Antes trabajé en desarrollo backend con JavaScript en el entorno NetSuite.",
              "Experience includes management systems, APIs, integrations and databases. I previously worked on backend development with JavaScript in the NetSuite environment.",
            )}
          </p>
          <div className="about-facts">
            <span>
              {t(
                "Basado en Montevideo, Uruguay",
                "Based in Montevideo, Uruguay",
              )}
            </span>
            <span>
              {t(
                "Inglés intermedio conversacional",
                "Intermediate conversational English",
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="experience-heading">
        <h3>{t("Experiencia", "Experience")}</h3>
        <a href={profile.cv} download className="text-link">
          {t("CV completo", "Full CV (ES)")}
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article key={item.company} className="experience-row">
            <div className="experience-date mono">
              <span
                className={`timeline-dot ${item.current ? "is-current" : ""}`}
              />
              {item.period[language]}
            </div>
            <div className="experience-main">
              <p className="experience-company">
                {item.company}
                <span className="mono">0{index + 1}</span>
              </p>
              <h4>{item.role[language]}</h4>
              <p>{item.description[language]}</p>
              <ul className="tags">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    {tag === "Docencia"
                      ? t("Docencia", "Teaching")
                      : tag === "Producto"
                        ? t("Producto", "Product")
                        : tag === "Integraciones"
                          ? t("Integraciones", "Integrations")
                          : tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="education-strip">
        <div>
          <span className="mono">2022 — 2025</span>
          <h3>
            {t(
              "Analista en Tecnologías de la Información",
              "Information Technology Analyst",
            )}
          </h3>
          <p>
            Universidad ORT Uruguay ·{" "}
            {t("Carrera finalizada", "Degree completed")}
          </p>
        </div>
        <div>
          <span className="mono">2019 — 2020</span>
          <h3>DESEM · Junior Achievement</h3>
          <p>
            {t(
              "Programa empresarial en Cutcsa. Reconocimientos en ventas, elevator pitch y producción.",
              "Business program at Cutcsa. Recognitions in sales, elevator pitch and production.",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
