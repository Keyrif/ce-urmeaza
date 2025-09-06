import { text } from "@fortawesome/fontawesome-svg-core";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function SearchBar({
  searchText,
  setSearchText,
  searched,
  setSearched,
  inputRef,
  universities,
  setResults,
  startQuiz,
  showQuiz,
  darkMode,
}) {
  const [numResults, setNumResults] = useState(0);
  //const textToShow = `AM GĂSIT ${numResults} DE FACULTĂȚI`;
  let textToShow;
  if (numResults === 1) {
    textToShow = "AM GĂSIT O FACULTATE";
  } else if (numResults > 1 && numResults < 20) {
    textToShow = `AM GĂSIT ${numResults} FACULTĂȚI`;
  } else {
    textToShow = `AM GĂSIT ${numResults} DE FACULTĂȚI`;
  }
  const characters = Array.from(textToShow);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.2 }
    }
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Search = () => {
    if (searchText.trim() === "") {
      setResults(universities);
      setSearched(true);
      setNumResults(universities.length);
      return;
    }

    setSearched(true);
    inputRef.current?.blur();

    const searchWords = searchText.toLowerCase().split(" ");

    const filtered = universities.filter((f) => {
      const haystack = [
        f.name.toLowerCase(),
        f.location.toLowerCase(),
        f.university?.toLowerCase() || "",
        ...f.keywords.map((k) => k.toLowerCase()),
      ];

      return searchWords.every((word) =>
        haystack.some((field) => field.includes(word))
      );
    });

    setResults(filtered);
    setNumResults(filtered.length);
  };

  const SearchBarReset = () => {
    if (searched) {
      setSearched(false);
      setSearchText("");
      setResults(universities);
      setNumResults(0);
      inputRef.current?.focus();
    }
  };

  const showAllFaculties = () => {
    setSearched(true);
    setSearchText("");
    setResults(universities);
    setNumResults(universities.length);
  };

  return (
    <>
      <motion.input
        layout
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && Search()}
        onClick={SearchBarReset}
        placeholder="Caută..."
        className={`rounded-full border text-center mt-6 transition-all duration-600 shadow-lg focus:shadow-xl ${
          darkMode
            ? "bg-slate-800 text-white placeholder-slate-400 border-slate-600 outline outline-1 outline-black focus:outline-cyan-400"
            : "bg-gray-200 text-black placeholder-gray-500 border-gray-300 outline outline-1 outline-black focus:outline-cyan-400"
        } ${
          searched
            ? "w-60 py-2 text-base"
            : "w-[40vw] sm:w-[30vw] md:w-[25vw] py-3 sm:py-4 text-lg"
        }`}
      />
      <AnimatePresence>
        {searched && numResults > 0 && (
          <motion.div
            key={numResults} 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`mt-4 text-lg font-semibold text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {characters.map((char, index) => (
              <motion.span key={index} variants={characterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>

        )}
      </AnimatePresence>
      <AnimatePresence>
        {!searched && !showQuiz && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <motion.button
              className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-white"
                  : "bg-white hover:bg-gray-200 text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showAllFaculties}
            >
              AFIȘEAZĂ TOATE FACULTĂȚILE
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ${
                darkMode
                  ? "bg-cyan-700 hover:bg-cyan-600 text-white"
                  : "bg-cyan-500 hover:bg-cyan-400 text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startQuiz}
            >
              DESCOPERĂ FACULTATEA PERFECTĂ
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SearchBar;