import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

const ResultCard = React.memo(
  function ResultCard({ f, darkMode, neumorphicShadow, neumorphicPressedShadow, setSelectedUniversity }) {
    return (
      <motion.div
        key={f.name}
        className={`p-6 rounded-3xl cursor-pointer overflow-hidden focus:outline-none ${
          darkMode 
          ? "bg-slate-700 text-white" 
          : "bg-[#eceff2] text-gray-900"
        }`}
        style={{ boxShadow: neumorphicShadow, willChange: "transform" }}
        onClick={(e) => {
          e.stopPropagation();
          setTimeout(() => setSelectedUniversity(f), 100);
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97, boxShadow: neumorphicPressedShadow }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <h2 className="font-bold text-xl relative z-10">{f.name}</h2>

        <div className="flex flex-wrap gap-2 mt-4">
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
              darkMode 
              ? "bg-slate-700 text-cyan-500" 
              : "bg-gray-100 text-cyan-600"
            }`}
            style={{ boxShadow: neumorphicShadow }}
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
              className="lucide lucide-map-pin mr-1"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {f.location}
          </div>

          <div
            className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
              darkMode 
              ? "bg-slate-700 text-cyan-500" 
              : "bg-gray-100 text-cyan-600"
            }`}
            style={{ boxShadow: neumorphicShadow }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              class="lucide lucide-school-icon lucide-school"
            >
              <path d="M14 21v-3a2 2 0 0 0-4 0v3"/>
              <path d="M18 5v16"/>
              <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/>
              <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/>
              <path d="M6 5v16"/>
              <circle cx="12" cy="9" r="2"/>
            </svg>
            {f.university}
          </div>

          <div
            className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
              darkMode 
              ? "bg-slate-700 text-cyan-500" 
              : "bg-gray-100 text-cyan-600"
            }`}
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
              className="lucide lucide-banknote"
            >
              <rect width="20" height="12" x="2" y="6" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
            {f.salary.min} - {f.salary.max} RON
          </div>
        </div>
      </motion.div>
    );
  }
);

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
    : "4px 6px 14px #b2b7bfff, -8px -8px 16px #ffffff";

  const neumorphicPressedShadow = darkMode
    ? "inset 6px 6px 12px #272c35, inset -6px -6px 12px #455061"
    : "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff";

  useEffect(() => {
    setCurrentPage(1);
  }, [results, searched]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const maxPagesToShow = 5;
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
    <div className="flex flex-col items-center w-full px-4 ">
      <motion.div
        key={currentPage}
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl px-6 z-10" 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
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
          <motion.button
            className={`w-12 h-12 flex items-center justify-center rounded-3xl focus:outline-none hover:border-transparent active:border-transparent ${
              darkMode 
              ? "bg-slate-700 text-white" 
              : "bg-gray-100 text-gray-800"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ boxShadow: neumorphicShadow }}
            onClick={(e) => {
              e.stopPropagation();
              setTimeout(() => setCurrentPage(1), 150);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, boxShadow: neumorphicPressedShadow }}
            transition={{
              duration: 0.2,
              ease: "linear"
            }}
            disabled={currentPage === 1}
          >
            «
          </motion.button>

          {pagesToDisplay.map((pageNumber) => (
            <motion.button
              key={pageNumber}
              className={`w-12 h-12 flex items-center justify-center rounded-3xl focus:outline-none hover:border-transparent active:border-transparent ${
                currentPage === pageNumber
                  ? darkMode
                    ? "bg-slate-700 text-cyan-400"
                    : "bg-gray-100 text-cyan-500"
                  : darkMode
                  ? "bg-slate-700 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              style={{ boxShadow: currentPage === pageNumber ? neumorphicPressedShadow : neumorphicShadow, willChange: "transform" }}
              onClick={(e) => {
                e.stopPropagation();
                setTimeout(() => setCurrentPage(pageNumber), 150);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, boxShadow: neumorphicPressedShadow }}
              transition={{
                duration: 0.2,
                ease: "linear"
              }}
            >
              {pageNumber}
            </motion.button>
          ))}

          <motion.button
            className={`w-12 h-12 flex items-center justify-center rounded-3xl focus:outline-none hover:border-transparent active:border-transparent ${
              darkMode 
              ? "bg-slate-700 text-white" 
              : "bg-gray-100 text-gray-800"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ boxShadow: neumorphicShadow }}
            onClick={(e) => {
              e.stopPropagation();
              setTimeout(() => setCurrentPage(totalPages), 150);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, boxShadow: neumorphicPressedShadow }}
            transition={{
              duration: 0.2,
              ease: "linear"
            }}
            disabled={currentPage === totalPages}
          >
            »
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default ResultsGrid;