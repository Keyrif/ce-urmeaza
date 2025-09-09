import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

function TitleLogo({
  searched,
  glow,
  darkMode,
  setGlow,
  searchText,
  setSearchText,
  setSearched,
  inputRef,
  universities,
  setResults,
  startQuiz,
  showQuiz,
}) {
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const logoClick = () => {
    setGlow(true);
    setTimeout(() => {
      window.location.reload();
    }, 350);
  };
  
  useEffect(() => {
    if (!searched && !showQuiz) {
      const text = "INFORMAȚII DESPRE FACULTĂȚI ȘI JOBURI";
      let textToType = text;
      let isTyping = true;
      let i = 0;
      let interval;
      let timeout;

      const type = () => {
        interval = setInterval(() => {
          if (isTyping) {
            setDisplayedSubtitle(textToType.slice(0, i));
            i++;
          }
        }, 50);
      };

      type();

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    } else {
      setDisplayedSubtitle("INFORMAȚII DESPRE FACULTĂȚI ȘI JOBURI");
    }
  }, [searched, showQuiz]);
  
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
            : "text-black " + (glow 
              ? "drop-shadow-[0_0_20px_black]" 
              : "")
        }`}
      >
        CE URMEAZĂ?
      </motion.h1>

      <motion.p
        layout
        className={`font-medium transition-all duration-300 ${
          searched 
          ? "opacity-0" 
          : "text-sm sm:text-lg mt-2 opacity-70"
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

export default TitleLogo;
