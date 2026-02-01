import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import GWeb from "./components/GWeb";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Navbar />
      <BackToTop />
      <Hero />
      <GWeb />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
