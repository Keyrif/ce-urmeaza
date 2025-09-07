import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import universities from '/src/data/universities'; 
import quizQuestions from '/src/data/quizQuestions'; 

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
          onClick={(e) => e.target === e.currentTarget && closeQuiz()}
        >
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-3xl max-w-3xl w-full mx-4 relative shadow-2xl overflow-y-auto max-h-[90vh] ${
              darkMode 
              ? "bg-slate-900 text-white" 
              : "bg-white text-gray-900"
            }`}
          >
            <motion.button
              onClick={(e) => {
                e.stopPropagation(); 
                setTimeout(() => onClose(), 100); 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale:0.8 }}
              className={`absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-colors text-xl ${
                darkMode
                ? "bg-slate-700 text-white hover:bg-slate-600"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              ✕
            </motion.button>

            {quizResult ? (
              <>
                <h2 className="text-3xl font-bold mb-4">Recomandare</h2>
                <p className="text-xl font-semibold mb-4">{quizResult.name}</p>
                <p>{quizResult.details.study}</p>
                <motion.button
                  onClick={() => {
                    setSelectedUniversity(quizResult);
                    onClose();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className={`mt-6 px-6 py-3 rounded-full font-semibold shadow-lg duration-300 ${
                    darkMode
                    ? "bg-cyan-700 hover:bg-cyan-600 text-white"
                    : "bg-cyan-500 hover:bg-cyan-400 text-white"
                  }`}
                >
                  Vezi detalii
                </motion.button>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {currentQuestion.questionText}
                </h3>

                {currentQuestion.type === "multiple-choice" ? (
                  <div className="flex flex-col gap-4">
                    {currentQuestion.options.map((option, index) => (
                      <motion.button
                        key={`${currentQuestionIndex}-${index}`} 
                        onClick={(e) => {
                          e.stopPropagation();
                          setTimeout(() => quizAnswer(option.scores), 100)
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-4 rounded-xl shadow-md font-medium text-lg duration-300 text-center focus:outline-none ${
                          darkMode
                            ? "bg-slate-800 border-transparent hover:border-2 active:border-4 hover:border-cyan-700 active:border-cyan-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-700/50 text-white"
                            : "bg-gray-100 border-transparent hover:border-2 active:border-4 hover:border-cyan-400 active:border-cyan-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/30 text-gray-900"
                        }`}
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
                      onChange={(e) => setSalaryRange(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-cyan-400 dark:bg-cyan-600"
                      style={{
                        "--tw-shadow":
                          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
                      }}
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
                      onClick={calculateResult}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      className={`px-6 py-3 rounded-full font-semibold shadow-lg mt-4 duration-300 ${
                        darkMode
                          ? "bg-cyan-700 hover:bg-cyan-600 text-white"
                          : "bg-cyan-500 hover:bg-cyan-400 text-white"
                      }`}
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