import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

function Header({
  searched,
  glow,
  darkMode,
  displayedSubtitle,
  logoClick,
  searchText,
  setSearchText,
  setSearched,
  inputRef,
  universities,
  setResults,
  startQuiz,
  showQuiz,
}) {
  return (
    <motion.div
      layout
      className="flex flex-col items-center"
    >
      <motion.h1
        layout
        onClick={logoClick}
        className={`cursor-pointer font-extrabold transition-all duration-300 text-center whitespace-nowrap ${
          searched 
          ? "text-3xl sm:text-4xl" 
          : "text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw]"
        } ${
            darkMode
            ? glow
            ? "drop-shadow-[0_0_20px_white]"
            : ""
            : "text-black " + (glow ? "drop-shadow-[0_0_20px_black]" : "")
        }`}
      >
        CE URMEAZĂ?
      </motion.h1>

      <motion.p
        layout
        className={`font-medium transition-all duration-300 ${
          searched ? "opacity-0" : "text-sm sm:text-lg mt-2 opacity-70"
        }`}
      >
        {displayedSubtitle}
      </motion.p>

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        searched={searched}
        setSearched={setSearched}
        inputRef={inputRef}
        universities={universities}
        setResults={setResults}
        startQuiz={startQuiz}
        showQuiz={showQuiz}
        darkMode={darkMode}
      />
    </motion.div>
  );
}

export default Header;
