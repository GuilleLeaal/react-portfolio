import { FiCode, FiDatabase, FiLayers, FiTool } from "react-icons/fi";
import { useLanguage } from "../i18n";

export default function Skills() {
  const { t } = useLanguage();
  const groups = [
    {
      icon: FiCode,
      title: "Frontend & mobile",
      subtitle: t(
        "Aplicaciones web y móviles.",
        "Web and mobile applications.",
      ),
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "React Native / Expo",
        "HTML / CSS",
      ],
    },
    {
      icon: FiLayers,
      title: "Backend & APIs",
      subtitle: t(
        "Servicios, integraciones y autenticación.",
        "Services, integrations and authentication.",
      ),
      items: [
        "C# / .NET",
        "ASP.NET Core",
        "Node.js",
        "NestJS",
        "Express",
        "APIs REST",
        "JWT",
        "Python / Java",
      ],
    },
    {
      icon: FiDatabase,
      title: t("Datos & arquitectura", "Data & architecture"),
      subtitle: t(
        "Bases de datos, ORMs y arquitectura.",
        "Databases, ORMs and architecture.",
      ),
      items: [
        "SQL Server",
        "PostgreSQL",
        "MongoDB",
        "Entity Framework Core",
        "Prisma",
        "Clean Architecture",
        "CQRS",
        "Supabase",
      ],
    },
    {
      icon: FiTool,
      title: t("Herramientas", "Tools"),
      subtitle: t(
        "Control de versiones, CMS y diseño.",
        "Version control, CMS and design.",
      ),
      items: [
        "Git / GitHub",
        "Sanity CMS",
        "NetSuite",
        "WPF",
        "SEO",
        "UX / UI",
        "Agile",
        "Shopify / Figma",
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="skills-section section"
      aria-labelledby="skills-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>03 /</span> {t("HERRAMIENTAS DE TRABAJO", "MY TOOLKIT")}
            </p>
            <h2 id="skills-title">{t("Tecnologías", "Technologies")}</h2>
          </div>
          <p>
            {t(
              "Trabajo principalmente con React, TypeScript y .NET. También desarrollo proyectos con Node.js y NestJS, y uso SQL Server, PostgreSQL y MongoDB.",
              "I mainly work with React, TypeScript and .NET. I also develop projects with Node.js and NestJS, and use SQL Server, PostgreSQL and MongoDB.",
            )}
          </p>
        </div>
        <div className="skills-grid">
          {groups.map((group, index) => (
            <article key={group.title} className="skill-group">
              <div className="skill-top">
                <group.icon aria-hidden="true" />
                <span className="mono">/ 0{index + 1}</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
