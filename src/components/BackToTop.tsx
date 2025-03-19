import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Muestra el botón después de scrollear 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full 
                   shadow-lg transition duration-300 hover:scale-110 z-50"
      >
        <FiArrowUp size={24} />
      </button>
    )
  );
}
