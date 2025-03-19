export default function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-900 border-t border-gray-700">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Guillermo Leal - All rights reserved
      </p>
      <p className="text-xs text-gray-500 mt-2 italic">Thank you for visiting my portfolio 🚀</p>
    </footer>
  );
}
