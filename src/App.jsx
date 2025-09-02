import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hangerIcon from './favicon2.png'; 
function App() {
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
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
    if (!searched && !showQuiz) {
      const text1 = "INFORMAȚII DESPRE FACULTĂȚI ȘI JOBURI";
      const text2 = "iar CE URMEAZĂ?";
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

  const faculties = [
    {
      name: "Facultatea de Informatică",
      location: "București",
      keywords: ["itist", "calculator", "it", "programare", "informatică"],
      salary: { min: 6000, max: 12000 },
      details: {
        duration: 3,
        study: "Algoritmi, baze de date, programare, inteligență artificială.",
        jobs: [
          { name: "Programator", salary: "6000 - 9000 RON" },
          { name: "Inginer software", salary: "8000 - 12000 RON" },
        ],
      },
    },
    {
      name: "Facultatea de Medicină",
      location: "Cluj-Napoca",
      keywords: ["medicina", "doctor", "chirurgie"],
      salary: { min: 8000, max: 30000 },
      details: {
        duration: 6,
        study: "Anatomie, fiziologie, farmacologie, clinică medicală.",
        jobs: [
          { name: "Medic specialist", salary: "8000 - 20000 RON" },
          { name: "Chirurg", salary: "12000 - 30000 RON" },
        ],
      },
    },
    {
      name: "Facultatea de Drept",
      location: "Iași",
      keywords: ["drept", "avocat", "justiție", "lege"],
      salary: { min: 7000, max: 22000 },
      details: {
        duration: 4,
        study: "Drept civil, drept penal, drept administrativ, dreptul muncii.",
        jobs: [
          { name: "Avocat", salary: "7000 - 15000 RON" },
          { name: "Magistrat", salary: "9000 - 22000 RON" },
        ],
      },
    },
    {
      name: "Facultatea de Arhitectură",
      location: "Timișoara",
      keywords: ["arhitectură", "design", "urbanism", "clădiri"],
      salary: { min: 6000, max: 14000 },
      details: {
        duration: 6,
        study: "Proiectare, istoria arhitecturii, urbanism, structuri.",
        jobs: [
          { name: "Arhitect", salary: "7000 - 14000 RON" },
          { name: "Urbanist", salary: "6000 - 12000 RON" },
        ],
      },
    },
    {
      name: "Facultatea de Arte Plastice",
      location: "București",
      keywords: ["arte", "pictură", "sculptură", "grafică"],
      salary: { min: 2000, max: 5000 },
      details: {
        duration: 3,
        study: "Pictură, sculptură, grafică, design vestimentar.",
        jobs: [
          { name: "Artist", salary: "2000 - 4000 RON" },
          { name: "Designer", salary: "3500 - 5000 RON" },
        ],
      },
    },
  ];

  const quizQuestions = [
    {
      questionText: "Ce tip de activitate preferi?",
      type: "multiple-choice",
      options: [
        { text: "Rezolvarea de probleme logice și abstracte", scores: { "Facultatea de Informatică": 2, "Facultatea de Medicină": 0.5, "Facultatea de Drept": 0.5 } },
        { text: "Interacțiunea cu oamenii și munca în echipă", scores: { "Facultatea de Medicină": 1.5, "Facultatea de Drept": 1.5 } },
        { text: "Creația artistică și vizuală", scores: { "Facultatea de Arte Plastice": 2, "Facultatea de Arhitectură": 1.5 } },
        { text: "Studiul legilor și a regulilor", scores: { "Facultatea de Drept": 2, "Facultatea de Medicină": 0.5 } },
      ],
    },
    {
      questionText: "În ce domeniu ai vrea să lucrezi?",
      type: "multiple-choice",
      options: [
        { text: "Tehnologie și IT", scores: { "Facultatea de Informatică": 2 } },
        { text: "Sănătate și bunăstarea oamenilor", scores: { "Facultatea de Medicină": 2 } },
        { text: "Justiție și societate", scores: { "Facultatea de Drept": 2 } },
        { text: "Design și construcții", scores: { "Facultatea de Arhitectură": 2, "Facultatea de Arte Plastice": 1 } },
        { text: "Artă și cultură", scores: { "Facultatea de Arte Plastice": 2 } },
      ],
    },
    {
      questionText: "Ce materie îți place cel mai mult?",
      type: "multiple-choice",
      options: [
        { text: "Matematică / Fizică", scores: { "Facultatea de Informatică": 1.5, "Facultatea de Arhitectură": 1 } },
        { text: "Biologie / Chimie", scores: { "Facultatea de Medicină": 2 } },
        { text: "Istorie / Filosofie", scores: { "Facultatea de Drept": 1, "Facultatea de Arte Plastice": 0.5 } },
        { text: "Desen / Muzică", scores: { "Facultatea de Arte Plastice": 1.5, "Facultatea de Arhitectură": 1 } },
      ],
    },
    {
      questionText: "Ce salariu mediu lunar dorești?",
      type: "slider",
      min: 2500,
      max: 10000,
      step: 500,
    },
  ];

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

  const Search = () => {
    if (searchText.trim() === "") {
      setResults(faculties);
      setSearched(true);
      return;
    }
    setSearched(true);
    inputRef.current?.blur();
    const search = searchText.toLowerCase();
    const filtered = faculties.filter((f) => {
      if (f.name.toLowerCase().includes(search)) return true;
      if (f.location.toLowerCase().includes(search)) return true;
      for (let k of f.keywords) {
        if (k.toLowerCase().includes(search)) return true;
      }
      return false;
    });
    setResults(filtered);
  };

  const handleSearchClick = () => {
    if (searched) {
      setSearched(false);
      inputRef.current?.focus();
    }
  };

  const showAllFaculties = () => {
    setSearched(true);
    setSearchText("");
    setResults(faculties);
  };

  const InfoCard = ({ title, icon, children }) => (
    <div className={`p-6 rounded-2xl shadow-lg mt-4 w-full ${darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="flex items-center mb-2">
            <span className={`p-2 rounded-full mr-3 ${darkMode ? 'bg-slate-700' : 'bg-gray-300'}`}>
              {icon}
            </span>
            <h4 className="font-semibold text-lg">{title}</h4>
        </div>
        {children}
    </div>
  );

  const handleQuizAnswer = (scores) => {
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
    let bestFitByScore = null;
    let maxScore = -1;

    faculties.forEach(f => {
      const score = quizScores[f.name] || 0;
      if (score > maxScore) {
        maxScore = score;
        bestFitByScore = f;
      }
    });

    if (bestFitByScore && salaryRange > bestFitByScore.salary.max) {
      setQuizResult({
        name: "Atenție: Salariul dorit nu se aliniază cu interesele tale",
        details: {
          study: `Conform răspunsurilor tale, cea mai bună potrivire ar fi ${bestFitByScore.name}. Totuși, salariul maxim oferit în acest domeniu este de ${bestFitByScore.salary.max} RON, sub salariul de ${salaryRange} RON pe care îl dorești. Poți reconsidera fie salariul, fie facultatea.`,
        },
      });
    } else if (bestFitByScore) {
      setQuizResult(bestFitByScore);
    } else {
      setQuizResult({
        name: "Nu s-a găsit nicio recomandare",
        details: {
          study: "Nu s-a putut găsi o recomandare bazată pe răspunsurile tale. Te rog să încerci din nou."
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
      className={`min-h-screen w-screen flex flex-col transition-all duration-700 select-none ${
        darkMode ? "bg-[#0F172A] text-white" : "bg-[#F1F5F9] text-gray-900"
      }`}
    >
      <button
        className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-cyan-700 text-white' : 'bg-cyan-500 text-white'} shadow-lg hover:shadow-xl z-10`}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
        )}
      </button>

      <div className={`flex-grow flex flex-col items-center transition-all duration-700 ${!searched ? 'justify-center' : 'pt-16'}`}>
        <motion.div
            layout
            className="flex flex-col items-center"
        >
          <motion.h1
            layout
            onClick={logoClick}
            className={`cursor-pointer font-extrabold transition-all duration-700 text-center whitespace-nowrap ${
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
            className={`font-medium transition-all duration-700 ${
              searched ? "opacity-0" : "text-sm sm:text-lg mt-2 opacity-70"
            }`}
          >
            {displayedSubtitle}
          </motion.p>

          <motion.input
            layout
            ref={inputRef}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && Search()}
            onClick={handleSearchClick}
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
                onClick={() => setSelectedFaculty(f)}
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
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? "bg-cyan-600 text-white" : "bg-cyan-500 text-white"}`}>
                   {f.location}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? "bg-cyan-600 text-white" : "bg-cyan-500 text-white"}`}>
                    Salarii: {f.salary.min} - {f.salary.max} RON
                  </div>
                </div>
              </motion.div>
            ))} 
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
            onClick={(e) =>
              e.target === e.currentTarget && setSelectedFaculty(null)
            }
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-3xl max-w-3xl w-full mx-4 relative shadow-2xl overflow-y-auto max-h-[90vh] ${
                darkMode ? "bg-slate-900 text-white" : "bg-white text-gray-900"
              }`}
            >
              <button
                onClick={() => setSelectedFaculty(null)}
                className={`absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-colors text-xl ${darkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
              >
                ✕
              </button>
              <div className="flex flex-col items-center mb-6 text-center">
                  <span className={`p-4 rounded-full mb-4 ${darkMode ? 'bg-slate-800' : 'bg-gray-200'}`}>
                      <img src={hangerIcon} alt="Umeraș" className="w-12 h-12 text-cyan-500" />
                  </span>
                  <h2 className="text-3xl font-bold">{selectedFaculty.name}</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                  <InfoCard
                      title="1. Durata studiilor"
                      icon={
                        <svg xmlns="http://www.w3.org/24/24" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                      }
                  >
                      <p>{selectedFaculty.details.duration} ani</p>
                  </InfoCard>

                  <InfoCard
                      title="2. Ce studiezi"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                      }
                  >
                      <p>{selectedFaculty.details.study}</p>
                  </InfoCard>

                  {selectedFaculty.details.jobs && (
                      <InfoCard
                          title="3. Salarii medii pe job"
                          icon={
                            <svg xmlns="http://www.w3.org/24/24" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-dollar-sign">
                                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.56 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.56 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.57 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.56Z"/>
                                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4h-6"/>
                                <path d="M12 17v-1.5"/>
                                <path d="M12 7.5V7"/>
                            </svg>
                          }
                      >
                          {selectedFaculty.details.jobs.map((job) => (
                              <div
                                  key={job.name}
                                  className={`mt-2 p-3 rounded-lg shadow-inner ${
                                      darkMode ? "bg-slate-700" : "bg-gray-200"
                                  }`}
                              >
                                  <p>
                                      <b>{job.name}</b>
                                  </p>
                                  <p className="text-sm opacity-80">
                                      Salariu: {job.salary}
                                  </p>
                              </div>
                          ))}
                      </InfoCard>
                  )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQuiz && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
                onClick={(e) =>
                    e.target === e.currentTarget && closeQuiz()
                }
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className={`p-8 rounded-3xl max-w-3xl w-full mx-4 relative shadow-2xl overflow-y-auto max-h-[90vh] ${
                      darkMode ? "bg-slate-900 text-white" : "bg-white text-gray-900"
                    }`}
                >
                    <button
                        onClick={closeQuiz}
                        className={`absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-colors text-xl ${darkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
                    >
                        ✕
                    </button>
                    {quizResult ? (
                        <>
                            <h2 className="text-3xl font-bold mb-4">Recomandare pentru tine</h2>
                            <p className="text-xl font-semibold mb-4">
                                {quizResult.name}
                            </p>
                            <p>{quizResult.details.study}</p>
                            <button
                                onClick={() => {
                                    setSelectedFaculty(quizResult);
                                    closeQuiz();
                                }}
                                className={`mt-6 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ${
                                  darkMode
                                    ? "bg-cyan-700 hover:bg-cyan-600 text-white"
                                    : "bg-cyan-500 hover:bg-cyan-400 text-white"
                                }`}
                            >
                                Vezi detalii
                            </button>
                        </>
                    ) : (
                        <>
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                {currentQuestion.questionText}
                            </h3>
                            {currentQuestion.type === "multiple-choice" ? (
                                <div className="flex flex-col gap-4">
                                    {currentQuestion.options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuizAnswer(option.scores)}
                                            className={`px-6 py-4 rounded-xl shadow-md font-medium text-lg transition-all duration-300 text-center ${
                                                darkMode ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                                            }`}
                                        >
                                            {option.text}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-4">
                                    <input
                                        type="range"
                                        min={currentQuestion.min}
                                        max={currentQuestion.max}
                                        step={currentQuestion.step}
                                        value={salaryRange}
                                        onChange={(e) => setSalaryRange(Number(e.target.value))}
                                        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-cyan-400 dark:bg-cyan-600"
                                        style={{'--tw-shadow':'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}}
                                    />
                                    <div className="flex justify-between w-full text-sm mt-2">
                                        <span>2500 RON</span>
                                        <span className={`font-extrabold text-lg transition-all duration-300 ${darkMode ? 'text-cyan-600' : 'text-cyan-600'}`}>
                                            {salaryRange} RON
                                        </span>
                                        <span>10000 RON</span>
                                    </div>
                                    <button
                                        onClick={calculateResult}
                                        className={`px-6 py-3 rounded-full font-semibold shadow-lg mt-4 transition-all duration-300 ${
                                          darkMode ? "bg-cyan-700 hover:bg-cyan-600 text-white" : "bg-cyan-500 hover:bg-cyan-400 text-white"
                                        }`}
                                    >
                                        Vezi rezultatul
                                    </button>
                                </div>
                            )}
                            <p className="text-sm text-center mt-4 opacity-50">
                                Întrebarea {currentQuestionIndex + 1} din {quizQuestions.length}
                            </p>
                        </>
                    )}
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

      <footer
        className={`w-full py-6 mt-12 flex flex-col items-center justify-center gap-1 text-center transition-all duration-500 ${
          darkMode ? "bg-slate-900 text-gray-200" : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="font-semibold text-lg">© 2025 KEYRIF</p>
        <p className="text-sm opacity-80">
          version 0.1b
        </p>
      </footer>
    </div>
  );
}

export default App;