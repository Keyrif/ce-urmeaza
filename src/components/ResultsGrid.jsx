import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import React from "react";

const ResultCard = React.memo(function ResultCard({ f, darkMode, neumorphicShadow, neumorphicPressedShadow, setSelectedUniversity }) {
  return (
    <motion.div
      key={f.name}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedUniversity(f);
      }}
      className={`p-6 rounded-3xl cursor-pointer overflow-hidden transition-transform ${
        darkMode ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-900"
      }`}
      style={{ boxShadow: neumorphicShadow, willChange: "transform" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97, boxShadow: neumorphicPressedShadow }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <h2 className="font-bold text-xl relative z-10">{f.name}</h2>
      <div className="flex flex-wrap gap-2 mt-4">
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
            darkMode ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-900"
          }`}
          style={{ boxShadow: neumorphicShadow }}
        >
          📍 {f.location}
        </div>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
            darkMode ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-900"
          }`}
          style={{ boxShadow: neumorphicShadow }}
        >
          🎓 {f.university}
        </div>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
            darkMode ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-900"
          }`}
          style={{ boxShadow: neumorphicShadow }}
        >
          💰 {f.salary.min} - {f.salary.max} RON
        </div>
      </div>
    </motion.div>
  );
});

function ResultsGrid({ results, setSelectedUniversity, darkMode, searched }) {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  const totalPages = useMemo(() => Math.ceil(results.length / resultsPerPage), [results]);
  const currentResults = useMemo(() => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    return results.slice(startIndex, startIndex + resultsPerPage);
  }, [results, currentPage]);

  const neumorphicShadow = darkMode
    ? "6px 6px 12px #272c35, -6px -6px 12px #455061"
    : "8px 8px 16px #b6bdc9, -8px -8px 16px #ffffff";

  const neumorphicPressedShadow = darkMode
    ? "inset 6px 6px 12px #272c35, inset -6px -6px 12px #455061"
    : "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff";

  useEffect(() => {
    setCurrentPage(1);
  }, [results, searched]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const maxPagesToShow = 6;
  let startPage, endPage;

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  const pagesToDisplay = useMemo(
    () => Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i),
    [startPage, endPage]
  );

  if (!searched || !results || results.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl p-4 z-10"
      >
        {currentResults.map((f) => (
          <ResultCard
            key={f.name}
            f={f}
            darkMode={darkMode}
            neumorphicShadow={neumorphicShadow}
            neumorphicPressedShadow={neumorphicPressedShadow}
            setSelectedUniversity={setSelectedUniversity}
          />
        ))}
      </motion.div>

      {totalPages > 1 && (
        <div className="flex gap-2 mt-8 flex-wrap justify-center">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`w-12 h-12 flex items-center justify-center rounded-3xl transition-transform ${
              darkMode ? "bg-slate-700 text-cyan-400" : "bg-gray-100 text-gray-800"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ boxShadow: neumorphicShadow }}
          >
            «
          </button>

          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className={`w-12 h-12 flex items-center justify-center rounded-3xl transition-transform ${
              darkMode ? "bg-slate-700 text-cyan-400" : "bg-gray-100 text-gray-800"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ boxShadow: neumorphicShadow }}
          >
            ‹
          </button>

          {pagesToDisplay.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`w-12 h-12 flex items-center justify-center rounded-3xl transition-transform ${
                currentPage === pageNumber
                  ? darkMode
                    ? "bg-cyan-600 text-white"
                    : "bg-cyan-500 text-white"
                  : darkMode
                  ? "bg-slate-700 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              style={{ boxShadow: currentPage === pageNumber ? "none" : neumorphicShadow, willChange: "transform" }}
            >
              {pageNumber}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`w-12 h-12 flex items-center justify-center rounded-3xl transition-transform ${
              darkMode ? "bg-slate-700 text-cyan-400" : "bg-gray-100 text-gray-800"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ boxShadow: neumorphicShadow }}
          >
            ›
          </button>

          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className={`w-12 h-12 flex items-center justify-center rounded-3xl transition-transform ${
              darkMode ? "bg-slate-700 text-cyan-400" : "bg-gray-100 text-gray-800"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ boxShadow: neumorphicShadow }}
          >
            »
          </button>
        </div>
      )}
    </div>
  );
}

export default ResultsGrid;