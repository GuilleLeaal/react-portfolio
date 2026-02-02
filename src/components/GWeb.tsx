import { motion } from "framer-motion";
import { FaInstagram, FaRocket, FaPalette } from "react-icons/fa";
import gwebLogo from "../assets/gweb-logo.svg";

export default function GWeb() {
  return (
    <section
      id="gweb"
      className="relative py-24 bg-gradient-to-b from-[#1a1a2e] via-gray-900 to-gray-900 scroll-mt-28 overflow-hidden"
    >
      {/* Glow verde sutil */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-emerald-500 opacity-10 rounded-full blur-[180px]" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex justify-center mb-6 z-10"
      >
        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.25)]">
          <img
            src={gwebLogo}
            alt="GWeb logo"
            className="w-16 h-16 opacity-95"
          />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative text-4xl font-extrabold text-center mb-4 text-emerald-400 tracking-wide z-10"
      >
        GWeb <span className="text-gray-400 font-semibold">— Web Venture</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative text-center text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed z-10"
      >
        GWeb is a personal web venture I created to design and build high-impact
        websites for small businesses and entrepreneurs.  
        The project reflects my approach to product thinking, visual clarity and
        conversion-oriented structure.
      </motion.p>

      {/* Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 z-10">
        {[
          {
            icon: <FaPalette />,
            title: "Design decisions with intention",
            text: "Every visual choice is deliberate, focusing on hierarchy, readability and trust rather than decoration.",
          },
          {
            icon: <FaRocket />,
            title: "Conversion-oriented structure",
            text: "Pages are structured to guide users naturally toward action, avoiding friction and unnecessary complexity.",
          },
          {
            icon: <FaInstagram />,
            title: "Simple acquisition strategy",
            text: "The project prioritizes direct and accessible communication channels instead of complex funnels.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:-translate-y-1 transition-transform"
          >
            <div className="text-emerald-400 text-3xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center mt-16 gap-3 z-10"
      >
        <a
          href="https://instagram.com/gweb.oficial"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
        >
          <FaInstagram />
          View project on Instagram
        </a>
        <span className="text-xs text-gray-400">
          Personal venture
        </span>
      </motion.div>
    </section>
  );
}
