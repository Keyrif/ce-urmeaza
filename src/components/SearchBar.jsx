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

  // neumorphism test commit
  const neumorphicShadow = darkMode
    ? "6px 6px 12px #0f172a, -6px -6px 12px #202b3f, 0 0 10px 1px #06b6d4"
    : "6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff";

  const neumorphicPressedShadow = darkMode
    ? "inset 6px 6px 12px #0f172a, inset -6px -6px 12px #202b3f"
    : "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff";

  let textToShow;
  if (numResults < 200 && searchText.trim().length < 3) {
    textToShow = "O CĂUTARE TREBUIE SĂ AIBĂ MINIM 3 CARACTERE";
  } else if (numResults === 0) {
    textToShow = "NU AM GĂSIT FACULTĂȚI";
  } else if (numResults === 1) {
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
      transition: { duration: 0.2 },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Search = () => {
    inputRef.current?.blur();
    if (searchText.trim() === "") {
      setResults(universities);
      setSearched(true);
      setNumResults(universities.length);
      return;
    }

    if (searchText.trim().length < 3) {
      setResults([]);
      setSearched(true);
      setNumResults(0);
      return;
    }

    setSearched(true);

    const searchWords = searchText.toLowerCase().split(" ");

    const filtered = universities.filter((f) => {
      const searchArray = [
        f.name.toLowerCase(),
        f.location.toLowerCase(),
        f.university?.toLowerCase() || "",
        ...f.keywords.map((k) => k.toLowerCase()),
      ];

      return searchWords.every((word) =>
        searchArray.some((field) => field.includes(word))
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
        className={`rounded-full border-none focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-center mt-6 transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 text-white placeholder-slate-400"
            : "bg-gray-100 text-black placeholder-gray-500"
        } ${
          searched
            ? "w-60 py-2 text-base"
            : "w-[40vw] sm:w-[30vw] md:w-[25vw] py-3 sm:py-4 text-lg"
        }`}
        style={{ boxShadow: neumorphicShadow }}
        whileTap={{ scale: 0.95, boxShadow: neumorphicPressedShadow }}
      />
      <AnimatePresence>
        {searched && (
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
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 focus:outline-none ${
                darkMode 
                ? "bg-slate-900 text-white border-transparent hover:border-transparent" 
                : "bg-gray-100 text-gray-900 border-transparent hover:border-transparent"
              }`}
              style={{ boxShadow: neumorphicShadow }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95, boxShadow: neumorphicPressedShadow }}
              onClick={showAllFaculties}
            >
              AFIȘEAZĂ TOATE FACULTĂȚILE
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 focus:outline-none ${
                darkMode 
                ? "bg-cyan-600 text-white" 
                : "bg-cyan-500 text-white"
              }`}
              style={{ boxShadow: neumorphicShadow }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95, boxShadow: neumorphicPressedShadow }}
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
