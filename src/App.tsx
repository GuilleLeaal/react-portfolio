import { useEffect, useState } from "react";
import { LanguageContext, type Language } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import GWeb from "./components/GWeb";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("portfolio-language") === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "es"
        ? "Guillermo Leal — Desarrollador Fullstack"
        : "Guillermo Leal — Fullstack Developer";
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Storage is optional. */
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <GWeb />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </LanguageContext.Provider>
  );
}
