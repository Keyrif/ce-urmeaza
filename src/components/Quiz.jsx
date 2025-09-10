import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import universities from '/src/data/universities.js';
import quizQuestions from '/src/data/quizQuestions.js';

function Quiz ({
  showQuiz,
  onClose,
  setSelectedUniversity,
  darkMode
}) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizScores, setQuizScores] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [salaryRange, setSalaryRange] = useState(5000);
  
  const neumorphicShadow = darkMode
    ? "6px 6px 12px #2a3547, -6px -6px 12px #3c4d63"
    : "6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff";

  const neumorphicPressedShadow = darkMode
    ? "inset 6px 6px 12px #2a3547, inset -6px -6px 12px #3c4d63"
    : "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff";

  useEffect(() => {
    if (showQuiz) {
      quizReset();
    }
  }, [showQuiz]);
  
  const quizReset = () => {
    setQuizScores({});
    setCurrentQuestionIndex(0);
    setQuizResult(null);
    setSalaryRange(5000);
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

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <AnimatePresence>
      {showQuiz && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 p-3 pt-12 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`p-8 pt-16 rounded-3xl max-w-3xl w-full mx-4 relative shadow-2xl overflow-y-auto max-h-[90vh] ${
              darkMode 
              ? "bg-slate-700 text-white" 
              : "bg-[#eceff2] text-gray-900"
            }`}
            style={{ boxShadow: neumorphicShadow }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className={`absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-colors text-xl focus:outline-none border-transparent hover:border-transparent active:border-transparent ${
                darkMode
                ? "bg-slate-700 text-white active:text-cyan-600"
                : "bg-[#eceff2] text-gray-900 active:text-cyan-600"
              }`}
              style={{ boxShadow: neumorphicShadow }}
              onClick={(e) => {
                e.stopPropagation(); 
                setTimeout(() => onClose(), 100); 
              }}
              whileHover={{scale: 1.1 }}
              whileTap={{ scale:0.8, boxShadow: neumorphicPressedShadow }}
            >
              ✕
            </motion.button>
            
            {quizResult 
            ? (
              <>
                <h2 className="text-3xl font-bold mb-4">Recomandare</h2>
                <p className="text-xl font-semibold mb-4">{quizResult.name}</p>
                <p>{quizResult.details.study}</p>
                <motion.button
                  className={`mt-6 px-6 py-3 rounded-full font-semibold shadow-lg duration-300 focus:outline-none ${
                    darkMode
                    ? "bg-cyan-700 hover:bg-cyan-600 text-white border-transparent hover:border-white"
                    : "bg-cyan-500 hover:bg-cyan-400 text-white border-transparent hover:border-black"
                  }`}
                  onClick={() => {
                    setSelectedUniversity(quizResult);
                    onClose();
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 5px 1px rgba(34, 211, 238, 0.7)"
                  }}
                  whileTap={{ 
                    scale:0.9,
                    boxShadow: "0 0 10px 1px rgba(34, 211, 238, 0.7)"
                  }}
                >
                  Vezi detalii
                </motion.button>
              </>
            ) 
            : (
              <>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {currentQuestion.questionText}
                </h3>

                {currentQuestion.type === "multiple-choice" ? (
                  <div className="flex flex-col gap-4">
                    {currentQuestion.options.map((option, index) => (
                      <motion.button
                        key={`${currentQuestionIndex}-${index}`} 
                        className={`px-6 py-4 rounded-xl font-medium text-lg duration-300 text-center focus:outline-none hover:-translate-y-1 border-transparent hover:border-transparent active:border-transparent ${
                          darkMode
                          ? "bg-slate-700 text-white active:text-cyan-600"
                          : "bg-[#eceff2] text-gray-900 active:text-cyan-600"
                        }`}
                        style={{ boxShadow: neumorphicShadow }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTimeout(() => quizAnswer(option.scores), 100)
                        }}
                        whileHover={{
                          scale: 1.05
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          boxShadow: neumorphicPressedShadow 
                        }}
                      >
                        {option.text}
                      </motion.button>
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
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-cyan-400 dark:bg-cyan-600"
                      style={{
                        "--tw-shadow":
                          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
                      }}
                      onChange={(e) => setSalaryRange(Number(e.target.value))}
                    />
                    <div className="flex justify-between w-full text-sm mt-2">
                      <span>2500 RON</span>
                      <span
                        className={`font-extrabold text-lg transition-all duration-300 ${
                          darkMode ? "text-cyan-600" : "text-cyan-600"
                        }`}
                      >
                        {salaryRange} RON
                      </span>
                      <span>10000 RON</span>
                    </div>
                    <motion.button
                      className={`px-6 py-3 rounded-full font-semibold shadow-lg mt-4 duration-300 focus:outline-none ${
                        darkMode
                        ? "bg-cyan-700 hover:bg-cyan-600 text-white border-transparent hover:border-white"
                        : "bg-cyan-500 hover:bg-cyan-400 text-white border-transparent hover:border-black"
                      }`}
                      onClick={calculateResult}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 5px 1px rgba(34, 211, 238, 0.7)"
                      }}
                      whileTap={{ 
                        scale:0.9,
                        boxShadow: "0 0 10px 1px rgba(34, 211, 238, 0.7)"
                      }}
                    >
                      Vezi rezultatul
                    </motion.button>
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
  );
}

export default Quiz;
