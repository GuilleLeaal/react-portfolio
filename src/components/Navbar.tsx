import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../i18n";
import { profile } from "../data";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const links = [
    { id: "projects", label: t("Proyectos", "Work") },
    { id: "about", label: t("Sobre mí", "About") },
    { id: "skills", label: "Stack" },
    { id: "gweb", label: "GWeb" },
    { id: "contact", label: t("Contacto", "Contact") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        !menu.current?.contains(event.target as Node) &&
        !toggle.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 980px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t("Saltar al contenido", "Skip to content")}
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a
            href="#hero"
            className="brand"
            aria-label={t("Guillermo Leal · Inicio", "Guillermo Leal · Home")}
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark">
              g<span>l</span>.
            </span>
            <span className="brand-name">
              Guillermo Leal<span>FULLSTACK DEVELOPER</span>
            </span>
          </a>
          <nav
            className="desktop-nav"
            aria-label={t("Navegación principal", "Main navigation")}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div
              className="language-switch"
              aria-label={t("Idioma", "Language")}
              role="group"
            >
              {(["es", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  lang={lang}
                  aria-label={lang === "es" ? "Español" : "English"}
                  aria-pressed={language === lang}
                  onClick={() => setLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a href={profile.cv} download className="header-cv">
              CV <FiArrowUpRight aria-hidden="true" />
            </a>
            <button
              className="menu-toggle icon-button"
              ref={toggle}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={
                open
                  ? t("Cerrar menú", "Close menu")
                  : t("Abrir menú", "Open menu")
              }
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <div
          ref={menu}
          id="mobile-navigation"
          className="mobile-nav"
          hidden={!open}
        >
          <nav aria-label={t("Navegación móvil", "Mobile navigation")}>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "location" : undefined}
              >
                {link.label}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
