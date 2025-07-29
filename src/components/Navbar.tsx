'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    'px-4 py-2 rounded-lg text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:scale-105 transition duration-300';

  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About me' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-800/70 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700"
    >
      <div className="flex justify-between items-center px-6 py-4">
        <motion.h1
          whileHover={{ scale: 1.05, color: '#2dd4bf' }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold text-teal-400 cursor-default"
        >
          Portfolio - Guillermo Leal
        </motion.h1>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="space-x-4 hidden md:flex items-center">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a
            href="/CVGuillermoLeal.pdf"
            download
            className="ml-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-md flex items-center gap-2 hover:scale-105 transition duration-300"
          >
            <FiDownload className="text-xl" /> Download CV
          </a>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center bg-gray-800/90 px-4 py-6 space-y-4 md:hidden"
            role="menu"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg transition hover:text-teal-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/CVGuillermoLeal.pdf"
              download
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-md flex items-center gap-2"
            >
              <FiDownload className="text-xl" /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
