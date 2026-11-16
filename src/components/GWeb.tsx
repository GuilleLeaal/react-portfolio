import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { useLanguage } from "../i18n";

export default function GWeb() {
  const { t } = useLanguage();
  const services = [
    {
      title: t("Sitios web", "Websites"),
      description: t(
        "Sitios institucionales y landing pages con diseño responsive, SEO y formularios de contacto.",
        "Business websites and landing pages with responsive design, SEO and contact forms.",
      ),
    },
    {
      title: t("Sistemas de gestión", "Management systems"),
      description: t(
        "Sistemas de reservas, inventarios y herramientas internas para la gestión del negocio.",
        "Booking systems, inventory management and internal business tools.",
      ),
    },
    {
      title: t("E-commerce y catálogos", "E-commerce and catalogs"),
      description: t(
        "Tiendas online y catálogos con administración de productos y contenido.",
        "Online stores and catalogs with product and content management.",
      ),
    },
  ];
  return (
    <section
      id="gweb"
      className="gweb-section section"
      aria-labelledby="gweb-title"
    >
      <div className="shell">
        <p className="eyebrow">
          <span>04 /</span> {t("MI ESTUDIO DIGITAL", "MY DIGITAL STUDIO")}
        </p>
        <div className="gweb-intro">
          <div>
            <div className="gweb-wordmark" aria-label="GWeb">
              gweb<span>↗</span>
            </div>
            <p className="mono">
              {t(
                "SITIOS WEB · E-COMMERCE · SISTEMAS",
                "WEBSITES · E-COMMERCE · SYSTEMS",
              )}
            </p>
          </div>
          <div>
            <h2 id="gweb-title">
              {t("Desarrollo web", "Web development")}
              <br />
              {t("para clientes", "for clients")}
            </h2>
            <p>
              {t(
                "Fundé GWeb en 2025. Desarrollo sitios web, e-commerce y sistemas de gestión para clientes. Me encargo del relevamiento, el diseño, el desarrollo y la publicación, con comunicación directa durante el proyecto.",
                "I founded GWeb in 2025. I develop websites, e-commerce and management systems for clients, handling requirements, design, development and deployment, with direct communication throughout the project.",
              )}
            </p>
            <div className="gweb-links">
              <a
                className="button button-dark"
                href="https://gweb.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Ver sitio de GWeb", "Visit GWeb")}
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/gweb.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <FaInstagram aria-hidden="true" /> Instagram{" "}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article key={service.title}>
              <span className="mono">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <FiArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
