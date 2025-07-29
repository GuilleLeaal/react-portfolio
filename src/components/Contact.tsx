'use client';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 scroll-mt-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-14 text-white-400"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto px-6 py-12 backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl shadow-xl text-center text-gray-300"
      >
        <p className="text-lg mb-10">
          Want to work with me?{' '}
          <span className="text-teal-400 font-semibold">
            I'm open to new opportunities!
          </span>{' '}
          Feel free to reach out and let's talk.
        </p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:lealguille.09@gmail.com"
          className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full shadow-lg transition-transform duration-300 mb-10 font-semibold tracking-wide"
        >
          📧 Send me an email
        </motion.a>

        <div className="flex justify-center gap-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/guillermo-leal-b4659329b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-white shadow-md transition-all duration-300"
          >
            <FaLinkedin className="text-blue-400 text-2xl" /> LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/GuilleLeaal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-white shadow-md transition-all duration-300"
          >
            <FaGithub className="text-gray-300 text-2xl" /> GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
