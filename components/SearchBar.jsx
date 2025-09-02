import { motion, AnimatePresence } from "framer-motion";

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

const Search = () => {
  if (searchText.trim() === "") {
    setResults(universities);
    setSearched(true);
    return;
  }
  setSearched(true);
  inputRef.current?.blur();
  const search = searchText.toLowerCase();
  const filtered = universities.filter((f) => {
    if (f.name.toLowerCase().includes(search)) return true;
    if (f.location.toLowerCase().includes(search)) return true;
      for (let k of f.keywords) {
        if (k.toLowerCase().includes(search)) return true;
      }
      return false;
    });
    setResults(filtered);
};

const SearchBarReset = () => {
    if (searched) {
      setSearched(false);
        inputRef.current?.focus();
    }
};

const showAllFaculties = () => {
  setSearched(true);
  setSearchText("");
  setResults(universities);
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
      className={`rounded-full border text-center mt-6 transition-all duration-700 shadow-lg focus:shadow-xl ${
        darkMode
        ? "bg-slate-800 text-white placeholder-slate-400 border-slate-600 outline outline-1 outline-black focus:outline-cyan-400"
        : "bg-gray-200 text-black placeholder-gray-500 border-gray-300 outline outline-1 outline-black focus:outline-cyan-400"
      } ${searched ? "w-60 py-2 text-base" : "w-[40vw] sm:w-[30vw] md:w-[25vw] py-3 sm:py-4 text-lg"}`}
  />
  <AnimatePresence>
    {!searched && !showQuiz && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 mt-12"
      >
      <motion.button
        className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ${
          darkMode 
          ? "bg-slate-800 hover:bg-slate-700 text-white" 
          : "bg-white hover:bg-gray-200 text-gray-900"
        }`}
        onClick={showAllFaculties}
  >
    AFISEAZA TOATE FACULTATILE
  </motion.button>
    <motion.button
      className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ${ 
        darkMode 
        ? "bg-cyan-700 hover:bg-cyan-600 text-white"
        : "bg-cyan-500 hover:bg-cyan-400 text-white"
      }`}
      onClick={startQuiz}
    >
      DESCOPERA FACULTATEA PERFECTA
    </motion.button>
  </motion.div>
    )}
  </AnimatePresence>
  </>
  );
}

export default SearchBar;