import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiDownload } from "react-icons/fi";
import { profile } from "../data";
import { useLanguage } from "../i18n";

export default function Contact() {
  const { t } = useLanguage();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };
  return (
    <section
      id="contact"
      className="contact-section section"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <p className="eyebrow">
          <span>05 /</span> {t("CONTACTO", "CONTACT")}
        </p>
        <div className="contact-heading">
          <h2 id="contact-title">{t("Contacto", "Contact")}</h2>
          <p>
            {t(
              "Podés escribirme por correo o LinkedIn para hablar de un proyecto o una propuesta laboral.",
              "You can reach me by email or LinkedIn about a project or a job opportunity.",
            )}
          </p>
        </div>
        <div className="contact-email">
          <a href={`mailto:${profile.email}`}>
            {profile.email}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            onClick={copyEmail}
            className="icon-button"
            aria-label={t("Copiar correo", "Copy email")}
          >
            {copyStatus === "copied" ? <FiCheck /> : <FiCopy />}
          </button>
        </div>
        <p className="copy-status" role="status">
          {copyStatus === "copied"
            ? t("Correo copiado.", "Email copied.")
            : copyStatus === "failed"
              ? t(
                  "No se pudo copiar. Podés seleccionar el correo o abrir tu aplicación de email.",
                  "Could not copy. You can select the address or open your email app.",
                )
              : "\u00a0"}
        </p>
        <div className="contact-bottom">
          <span className="mono">MONTEVIDEO, URUGUAY · UTC−3</span>
          <div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              LinkedIn
              <FiArrowUpRight />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub
              <FiArrowUpRight />
            </a>
            <a href={profile.cv} download className="text-link">
              {t("Descargar CV", "Download CV (ES)")}
              <FiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
