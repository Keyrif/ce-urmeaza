import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import universities from '/src/data/universities';
import quizQuestions from '/src/data/quizQuestions';
import ThemeToggleButton from '/src/components/ThemeToggleButton';
import UniversityCard from "/src/components/UniversityCard";
import QuizButton from "/src/components/QuizButton";
import Footer from "/src/components/Footer";
import TitleLogo from "/src/components/TitleLogo";
import ResultsGrid from "/src/components/ResultsGrid";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [glow, setGlow] = useState(false);
  const [darkMode, setDarkMode] = useState(null);
  const [ready, setReady] = useState(false);
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizScores, setQuizScores] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [salaryRange, setSalaryRange] = useState(5000);
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

      document.addEventListener('keydown', closeMenuEsc);

      return () => {
       document.removeEventListener('keydown', closeMenuEsc);
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

  const logoClick = () => {
    setGlow(true);
    setTimeout(() => {
      window.location.reload();
    }, 350);
  };

  const quizAnswer = (scores) => {
    const newScores = { ...quizScores };
    for (const faculty in scores) {
      newScores[faculty] = (newScores[faculty] || 0) + scores[faculty];
    }
    setQuizScores(newScores);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let bestFit = null;
    let maxScore = -1;

    universities.forEach(f => {
      const score = quizScores[f.name] || 0;
      if (score > maxScore) {
        maxScore = score;
        bestFit = f;
      }
    });

    if (bestFit && salaryRange > bestFit.salary.max) {
      setQuizResult({
        name: "Atenție: Salariul dorit este prea mare pentru interesele tale",
        details: {
          study: `Conform răspunsurilor tale, cea mai bună alegere ar fi ${bestFit.name}. Totuși, salariul maxim oferit în acest domeniu este de ${bestFit.salary.max} RON, sub salariul de ${salaryRange} RON pe care îl vrei. Poți reconsidera fie salariul, fie domeniul.`,
        },
      });
    } else if (bestFit) {
      setQuizResult(bestFit);
    } else {
      setQuizResult({
        name: "EROARE: Nu s-a găsit nicio recomandare!",
        details: {
          study: "EROARE: Nu s-a putut găsi o recomandare bazată pe răspunsurile tale."
        }
      });
    }
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setQuizScores({});
    setCurrentQuestionIndex(0);
    setQuizResult(null);
  };

  const closeQuiz = () => {
    setShowQuiz(false);
    setQuizResult(null);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div
      className={`min-h-screen w-screen flex flex-col transition-all duration-300 select-none ${
        darkMode ? "bg-[#0F172A] text-white" : "bg-[#F1F5F9] text-gray-900"
      }`}
    >

      <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className={`flex-grow flex flex-col items-center transition-all duration-300 ${
        !searched ? 'justify-center' : 'pt-16'}`}>

        <TitleLogo
          searched={searched}
          glow={glow}
          darkMode={darkMode}
          displayedSubtitle={displayedSubtitle}
          logoClick={logoClick}
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
      
      <QuizButton
        showQuiz={showQuiz}
        closeQuiz={closeQuiz}
        quizResult={quizResult}
        setSelectedUniversity={setSelectedUniversity}
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        quizQuestions={quizQuestions}
        quizAnswer={quizAnswer}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
        calculateResult={calculateResult}
        darkMode={darkMode}
      />

      <Footer darkMode={darkMode} />

    </div>
  );
}
export default App;