import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from '/src/assets/universitycardlogo.png';
function InfoCard({ title, icon, children, darkMode }) {
  const neumorphicShadow = darkMode
    ? "6px 6px 12px #272c35, -6px -6px 12px #455061"
    : "6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff";

  const neumorphicPressedShadow = darkMode
    ? "inset 6px 6px 12px #272c35, inset -6px -6px 12px #455061"
    : "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff";

  return (
    <motion.div
      className={`p-6 rounded-2xl mt-4 w-full ${
        darkMode ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-900"
      }`}
      style={{ boxShadow: neumorphicShadow }}
    >
      <div className="flex items-center mb-2">
        <motion.span
          className={`p-2 rounded-full mr-3 ${
            darkMode ? "bg-slate-700" : "bg-gray-100"
          }`}
          style={{ boxShadow: neumorphicShadow }}
        >
          {icon}
        </motion.span>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      {children}
    </motion.div>
  );
}

function UniversityCard({ selectedUniversity, setSelectedUniversity, darkMode }) {
  if (!selectedUniversity) return null;
  
  const neumorphicShadow = darkMode
    ? "6px 6px 12px #272c35, -6px -6px 12px #455061"
    : "6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff";

  const neumorphicPressedShadow = darkMode
    ? "inset 6px 6px 12px #272c35, inset -6px -6px 12px #455061"
    : "inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff";

  return (
    <AnimatePresence>
      {selectedUniversity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 px-4 py-10" 
          onClick={(e) =>
            e.target === e.currentTarget && setSelectedUniversity(null)
          }
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded-3xl max-w-3xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh] ${
              darkMode ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-900"
            }`}
            style={{ boxShadow: neumorphicShadow }}
          >
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setTimeout(() => setSelectedUniversity(null), 150);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8, boxShadow: neumorphicPressedShadow }}
              className={`absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-colors text-xl focus:outline-none border-transparent hover:border-transparent active:border-transparent ${
                darkMode
                  ? "bg-slate-700 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
              style={{ boxShadow: neumorphicShadow }}
            >
              ✕
            </motion.button>

            <div className="flex flex-col items-center mb-6 text-center">
              <motion.span
                className={`p-4 rounded-full mb-4 ${
                  darkMode ? "bg-slate-700" : "bg-gray-100"
                }`}
                style={{ boxShadow: neumorphicShadow }}
              >
              <img src={logo} width={80} height={80} />
              </motion.span>
              <h2 className="text-3xl font-bold">{selectedUniversity.name}</h2>
            </div>

            <div className="flex flex-col gap-4">
              <InfoCard
                title="În cadrul:"
                darkMode={darkMode}
                icon={
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
                    className="lucide lucide-map-pin mr-1"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
              >
                <p>{selectedUniversity.university}</p>
              </InfoCard>

              <InfoCard
                title="Durata studiilor:"
                darkMode={darkMode}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                }
              >
                <p>{selectedUniversity.details.duration} ani</p>
              </InfoCard>

              <InfoCard
                title="Ce studiezi:"
                darkMode={darkMode}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-open"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                }
              >
                <p>{selectedUniversity.details.study}</p>
              </InfoCard>

              {selectedUniversity.details.jobs && (
                <InfoCard
                  title="Salarii medii per job:"
                  darkMode={darkMode}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-banknote"
                    >
                      <rect width="20" height="12" x="2" y="6" rx="2" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M6 12h.01M18 12h.01" />
                    </svg>
                  }
                >
                  {selectedUniversity.details.jobs.map((job) => (
                    <div
                      key={job.name}
                      className={`mt-2 p-3 rounded-lg ${
                        darkMode ? "bg-slate-700" : "bg-gray-100"
                      }`}
                      style={{ boxShadow: neumorphicPressedShadow }}
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
  );
}

export default UniversityCard;