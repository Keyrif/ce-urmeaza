import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import universities from '/src/data/universities';
import quizQuestions from '/src/data/quizQuestions';
import SearchBar from '/src/components/SearchBar';
import ThemeToggleButton from '/src/components/ThemeToggleButton';
import UniversityCard from "/src/components/UniversityCard";
import QuizButton from "/src/components/QuizButton";
import Footer from "/src/components/Footer";

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

  useEffect(() => {
    if (!searched && !showQuiz) {
      const text1 = "INFORMAȚII DESPRE FACULTĂȚI ȘI JOBURI";
      const text2 = "GĂSEȘTE-ȚI FACULTATEA PERFECTĂ";
      let textToType = text1;
      let isTyping = true;
      let i = 0;
      let interval;
      let timeout;

      const type = () => {
        interval = setInterval(() => {
          if (isTyping) {
            setDisplayedSubtitle(textToType.slice(0, i));
            i++;
            if (i > textToType.length) {
              clearInterval(interval);
              timeout = setTimeout(erase, 3000);
            }
          }
        }, 50);
      };

      const erase = () => {
        isTyping = false;
        let j = textToType.length;
        interval = setInterval(() => {
          setDisplayedSubtitle(textToType.slice(0, j));
          j--;
          if (j < 0) {
            clearInterval(interval);
            textToType = textToType === text1 ? text2 : text1;
            i = 0;
            isTyping = true;
            timeout = setTimeout(type, 50);
          }
        }, 25);
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

      <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <div className={`flex-grow flex flex-col items-center transition-all duration-300 ${
        !searched ? 'justify-center' : 'pt-16'}`}>

        <motion.div
          layout
          className="flex flex-col items-center"
        >
          <motion.h1
            layout
            onClick={logoClick}
            className={`cursor-pointer font-extrabold transition-all duration-300 text-center whitespace-nowrap ${
              searched ? "text-3xl sm:text-4xl" : "text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw]"
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

        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl p-4 z-10"
          >
            {results.map((f) => (
              <motion.div
                key={f.name}
                onClick={() => setSelectedUniversity(f)}
                className={`relative p-6 rounded-2xl border cursor-pointer overflow-hidden transition-all shadow-lg hover:shadow-2xl ${
                  darkMode
                  ? "bg-slate-800 border-slate-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 -m-[2px] rounded-2xl pointer-events-none"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    border: "2px solid #22d3ee",
                    boxShadow: "0 0 10px rgba(34, 211, 238, 0.7)",
                  }}
                />
                <h2 className="font-bold text-xl relative z-10">{f.name}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                    darkMode 
                    ? "bg-cyan-600 text-white" 
                    : "bg-cyan-500 text-white"}`}>
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
                      className="lucide lucide-map-pin-icon lucide-map-pin mr-1"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                      <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {f.location}
                  </div> 
                  <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                    darkMode 
                    ? "bg-cyan-600 text-white" 
                    : "bg-cyan-500 text-white"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-graduation-cap-icon lucide-graduation-cap"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
                      <path d="M22 10v6"/>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
                    </svg>
                  {f.university} 
                  </div> 
                  <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                    darkMode 
                    ? "bg-cyan-600 text-white" 
                    : "bg-cyan-500 text-white"}`}>
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
                      className="lucide lucide-banknote-icon lucide-banknote mr-1"
                    >
                      <rect width="20" height="12" x="2" y="6" rx="2"/>
                      <circle cx="12" cy="12" r="2"/>
                      <path d="M6 12h.01M18 12h.01"/>
                    </svg>
                    Salarii: {f.salary.min} - {f.salary.max} RON
                  </div>
                </div>
              </motion.div>
            ))} 
          </motion.div>
        )}
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

      <Footer darkMode={darkMode}/>

    </div>
  );
}

export default App;