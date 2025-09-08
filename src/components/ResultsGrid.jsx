import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Componenta principala pentru afisarea rezultatelor in grid
function ResultsGrid({ results, setSelectedUniversity, darkMode, searched }) {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 9;
  const totalPages = Math.ceil(results.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentResults = results.slice(startIndex, startIndex + resultsPerPage);

  // Definirea stilurilor pentru neumorphism, adaptate pentru modul intunecat si luminos
  const neumorphicShadow = darkMode
    ? "6px 6px 12px #272c35, -6px -6px 12px #455061"
    : "8px 8px 16px #b6bdc9, -8px -8px 16px #ffffff";

  const neumorphicPressedShadow = darkMode
    ? "inset 6px 6px 12px #272c35, inset -6px -6px 12px #455061"
    : "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff";

  // Sincronizeaza pagina cu rezultatele noi sau cautarile noi
  useEffect(() => {
    setCurrentPage(1);
  }, [results, searched]);

  // Se deplaseaza la inceputul paginii la schimbarea paginii
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Nu afiseaza nimic pana cand nu se face o cautare valida
  if (!searched || !results || results.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl p-4 z-10"
        >
          {currentResults.map((f) => (
            <motion.div
              key={f.name}
              onClick={(e) => {
                e.stopPropagation();
                setTimeout(() => setSelectedUniversity(f), 150);
              }}
              className={`p-6 rounded-3xl cursor-pointer overflow-hidden transition-colors ${
                darkMode
                  ? "bg-slate-700 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
              style={{ boxShadow: neumorphicShadow }}
              whileHover={{
                scale: 1.05,
                boxShadow: darkMode
                  ? "10px 10px 20px #272c35, -10px -10px 20px #455061"
                  : "12px 12px 24px #b6bdc9, -12px -12px 24px #ffffff",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: neumorphicPressedShadow,
              }}
              transition={{
                duration: 0.2,
                type: "linear",
              }}
            >
              <h2 className="font-bold text-xl relative z-10">
                {f.name}
              </h2>

              <div className="flex flex-wrap gap-2 mt-4">
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                    darkMode
                      ? "bg-cyan-600 text-white"
                      : "bg-cyan-500 text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {f.location}
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                    darkMode
                      ? "bg-cyan-600 text-white"
                      : "bg-cyan-500 text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                  {f.university}
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                    darkMode
                      ? "bg-cyan-600 text-white"
                      : "bg-cyan-500 text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-1"
                  >
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                  Salarii: {f.salary.min} - {f.salary.max} RON
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <div className="flex gap-2 mt-8 flex-wrap justify-center">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setTimeout(() => setCurrentPage(Math.max(currentPage - 1, 1)), 150);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, boxShadow: neumorphicPressedShadow }}
            disabled={currentPage === 1}
            className={`w-12 h-12 flex items-center justify-center rounded-3xl transition-colors duration-300 ${
              darkMode ? "bg-slate-800 text-cyan-400" : "bg-gray-100 text-gray-800"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ boxShadow: neumorphicShadow }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
            </svg>
          </motion.button>

          {Array.from({ length: totalPages }, (_, i) => (
            <motion.button
              key={i + 1}
              onClick={(e) => {
                e.stopPropagation();
                setTimeout(() => setCurrentPage(i + 1), 150);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9, boxShadow: neumorphicPressedShadow }}
              className={`w-12 h-12 flex items-center justify-center rounded-3xl transition-colors duration-300 ${
                currentPage === i + 1
                  ? darkMode
                    ? "bg-cyan-600 text-white"
                    : "bg-cyan-500 text-white"
                  : darkMode
                  ? "bg-slate-800 text-white"
                  : "bg-gray-100 text-gray-800"
              } `}
              style={{ boxShadow: currentPage === i + 1 ? 'none' : neumorphicShadow }}
            >
              {i + 1}
            </motion.button>
          ))}

          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setTimeout(() => setCurrentPage(Math.min(currentPage + 1, totalPages)), 150);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, boxShadow: neumorphicPressedShadow }}
            disabled={currentPage === totalPages}
            className={`w-12 h-12 flex items-center justify-center rounded-3xl transition-colors duration-300 ${
              darkMode ? "bg-slate-800 text-cyan-400" : "bg-gray-100 text-gray-800"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ boxShadow: neumorphicShadow }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default ResultsGrid;
