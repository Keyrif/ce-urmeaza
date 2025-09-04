import { motion, AnimatePresence } from "framer-motion";

function QuizButton ({
  showQuiz,
  closeQuiz,
  quizResult,
  setSelectedUniversity,
  currentQuestion,
  currentQuestionIndex,
  quizQuestions,
  quizAnswer,
  salaryRange,
  setSalaryRange,
  calculateResult,
  darkMode
}) {
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
            <button
              onClick={closeQuiz}
              className={`absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-colors text-xl ${
                darkMode
                ? "bg-slate-700 text-white hover:bg-slate-600"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              ✕
            </button>

            {quizResult ? (
              <>
                <h2 className="text-3xl font-bold mb-4">Recomandare</h2>
                <p className="text-xl font-semibold mb-4">{quizResult.name}</p>
                <p>{quizResult.details.study}</p>
                <button
                  onClick={() => {
                    setSelectedUniversity(quizResult);
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
                        onClick={() => quizAnswer(option.scores)}
                        className={`px-6 py-4 rounded-xl shadow-md font-medium text-lg transition-all duration-300 text-center ${
                          darkMode
                            ? "bg-slate-800 hover:bg-cyan-700 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
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
                    <button
                      onClick={calculateResult}
                      className={`px-6 py-3 rounded-full font-semibold shadow-lg mt-4 transition-all duration-300 ${
                        darkMode
                          ? "bg-cyan-700 hover:bg-cyan-600 text-white"
                          : "bg-cyan-500 hover:bg-cyan-400 text-white"
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
  );
}

export default QuizButton;