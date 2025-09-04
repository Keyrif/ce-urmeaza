import { motion } from "framer-motion";

function ResultsGrid({ results, setSelectedUniversity, darkMode, searched }) {
  if (!searched) return null;

  return (
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
  );
}

export default ResultsGrid;
