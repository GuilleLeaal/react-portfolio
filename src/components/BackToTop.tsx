import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLanguage } from "../i18n";

export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? (
    <a
      className="back-top icon-button"
      href="#hero"
      aria-label={t("Volver al inicio", "Back to top")}
    >
      <FiArrowUp />
    </a>
  ) : null;
}
