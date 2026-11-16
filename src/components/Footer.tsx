import { FiArrowUp } from "react-icons/fi";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a href="#hero" className="footer-brand">
          gl.
        </a>
        <p>© {new Date().getFullYear()} Guillermo Leal</p>
        <p>{t("React · TypeScript · Vite", "React · TypeScript · Vite")}</p>
        <a href="#hero" className="text-link">
          {t("Volver arriba", "Back to top")}
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
