import { useState, useRef, useEffect } from "react";
import universities from '/src/data/universities';
import TitleLogo from "/src/components/TitleLogo";
import ThemeToggle from '/src/components/ThemeToggle';
import UniversityCard from "/src/components/UniversityCard";
import ResultsGrid from "/src/components/ResultsGrid";
import Quiz from "/src/components/Quiz";
import Footer from "/src/components/Footer";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [glow, setGlow] = useState(false);
  const [darkMode, setDarkMode] = useState(null);
  const [ready, setReady] = useState(false);
  const [displayedSubtitle] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    setDarkMode(savedMode === "true");
    setReady(true);
  }, []);

  useEffect(() => {
    if (selectedUniversity || showQuiz) {
      const closeMenuEsc = (event) => {
        if (event.key === 'Escape') {
          if (selectedUniversity) {
            setSelectedUniversity(null);
          }
          if (showQuiz) {
            closeQuiz();
          }
          }
      };

      if (selectedUniversity) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      
      document.addEventListener('keydown', closeMenuEsc);

      return () => {
       document.removeEventListener('keydown', closeMenuEsc);
           document.body.style.overflow = ''; 
      };
    }
  }, [selectedUniversity, showQuiz]);

  if (!ready) return null;

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  const closeQuiz = () => {
    setShowQuiz(false);
  };

  return (
    <div
      className={`min-h-screen w-screen flex flex-col transition-all duration-300 select-none ${
        darkMode ? "bg-[#334155] text-white" : "bg-[#eceff2] text-gray-900"
      }`}
    >

      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className={`flex-grow flex flex-col items-center transition-all duration-300 ${
        !searched ? 'justify-center' : 'pt-16'}`}>

        <TitleLogo
          searched={searched}
          glow={glow}
          darkMode={darkMode}
          displayedSubtitle={displayedSubtitle}
          setGlow={setGlow}
          searchText={searchText}
          setSearchText={setSearchText}
          setSearched={setSearched}
          inputRef={inputRef}
          universities={universities}
          setResults={setResults}
          startQuiz={startQuiz}
          showQuiz={showQuiz}
        />

        <ResultsGrid 
          results={results} 
          setSelectedUniversity={setSelectedUniversity} 
          darkMode={darkMode} 
          searched={searched}
        />
      </div>

      <UniversityCard
        selectedUniversity={selectedUniversity}
        setSelectedUniversity={setSelectedUniversity}
        darkMode={darkMode}
      />
      
      <Quiz
        showQuiz={showQuiz}
        onClose={closeQuiz}
        setSelectedUniversity={setSelectedUniversity}
        darkMode={darkMode}
      />

      <Footer darkMode={darkMode} />
    </div>
  );
}
export default App;