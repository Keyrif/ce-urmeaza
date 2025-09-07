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
        transition: { duration: 0.2 }
    }
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
        whileTap={{ scale: 1 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 0 3px rgba(34, 211, 238, 0.4), 0 10px 15px -3px rgba(34, 211, 238, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }}
        whileFocus={{
          scale: 1,
          boxShadow: "0 0 0 5px rgba(34, 211, 238, 0.5), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          transition: {
            duration: 0.2,
            ease: "linear"
          }
        }}
        className={`rounded-full border-transparent text-center mt-6 duration-600 shadow-lg focus:outline-none ${
          darkMode
            ? "bg-slate-800 text-white placeholder-slate-400"
            : "bg-gray-200 text-black placeholder-gray-500"
        } ${
          searched
            ? "w-60 py-2 text-base"
            : "w-[40vw] sm:w-[30vw] md:w-[25vw] py-3 sm:py-4 text-lg"
        }`}
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
              className={`px-6 py-3 rounded-full font-semibold shadow-lg duration-300 focus:outline-none ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-white border-2 border-cyan-700 hover:border-cyan-600 active:border-4 hover:shadow-xl hover:shadow-xl hover:shadow-cyan-800/30"
                  : "bg-white hover:bg-gray-200 text-gray-900 border-2 border-cyan-500 hover:border-cyan-400 active:border-4 hover:shadow-xl hover:shadow-xl hover:shadow-cyan-400/30"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={showAllFaculties}
            >
              AFIȘEAZĂ TOATE FACULTĂȚILE
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full font-semibold shadow-lg duration-300 focus:outline-none ${
                darkMode
                  ? "bg-cyan-700 hover:bg-cyan-600 text-white border-2 border-white hover:border-white active:border-4 hover:shadow-xl hover:shadow-xl hover:shadow-cyan-800/30"
                  : "bg-cyan-500 hover:bg-cyan-400 text-white border-black hover:border-black active:border-4 hover:shadow-xl hover:shadow-xl hover:shadow-cyan-400/50"
              }`}
              whileHover={{ scale: 1.03 }}
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