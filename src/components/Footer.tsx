'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8 px-4 text-center bg-gradient-to-t from-gray-900 via-gray-950 to-transparent border-t border-gray-700 mt-20"
    >
      <hr className="border-gray-700 max-w-xs mx-auto mb-6 opacity-30" />

      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="font-medium text-white">Guillermo Leal</span> — All rights reserved.
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xs text-gray-500 mt-2 italic flex justify-center items-center gap-1"
      >
        Thank you for visiting my portfolio{' '}
        <motion.span
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          🚀
        </motion.span>
      </motion.p>
    </motion.footer>
  );
}
