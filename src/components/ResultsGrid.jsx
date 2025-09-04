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
              darkMode ? "bg-cyan-600 text-white" : "bg-cyan-500 text-white"
            }`}>
              {f.location}
            </div>

            <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
              darkMode ? "bg-cyan-600 text-white" : "bg-cyan-500 text-white"
            }`}>
              {f.university}
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
              darkMode ? "bg-cyan-600 text-white" : "bg-cyan-500 text-white"
            }`}>
              Salarii: {f.salary.min} - {f.salary.max} RON
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ResultsGrid;
