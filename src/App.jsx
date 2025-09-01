import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredFaculties, setFilteredFaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const inputRef = useRef(null);

  const faculties = [
    { name: 'Facultatea de Informatică', location: 'București', keywords: ['itist', 'calculator', 'it', 'programare', 'programator', 'soft', 'tehnologie', 'informatică', 'corpo'] },
    { name: 'Facultatea de Medicină', location: 'Cluj-Napoca', keywords: ['medicina', 'doctor'] }
  ];

  const removeDiacritics = (text) => text.normalize("NFD").replace(/[̀-ͯ]/g, "");
  const isCloseMatch = (str1, str2) => {
    const s1 = removeDiacritics(str1.toLowerCase());
    const s2 = removeDiacritics(str2.toLowerCase());
    return s2.includes(s1) || s1.includes(s2);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setHasSearched(true);
      const normalized = removeDiacritics(searchTerm.toLowerCase());
      const results = faculties.filter(f => {
        const isKeywordMatch = f.keywords?.some(k => isCloseMatch(normalized, k.toLowerCase()));
        return removeDiacritics(f.name.toLowerCase()).includes(normalized) ||
               removeDiacritics(f.location.toLowerCase()).includes(normalized) ||
               isKeywordMatch;
      });
      setFilteredFaculties(results);
    }
  };

  return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"} min-h-screen w-screen flex flex-col items-center transition-all duration-700`}> 
      <motion.div layout 
        className={`font-extrabold text-center transition-all duration-700 ${hasSearched ? "text-4xl mt-4" : "text-6xl mt-[30vh]"}`}>
        CE URMEAZĂa?
      </motion.div>

      <motion.input
        ref={inputRef}
        layout
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSearch()}
        placeholder="Caută..."
        className={`p-5 rounded-full border border-slate-700 focus:outline-none focus:border-cyan-400 shadow-xl transition-all duration-700 ease-in-out text-center ${hasSearched ? "w-64 text-base mt-4" : "w-96 text-lg mt-12"} ${darkMode ? "bg-slate-800/50 placeholder-slate-400" : "bg-slate-200/50 placeholder-slate-600 text-slate-950"}`}
      />

      {hasSearched && (
        <div className="mt-12 p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
          {filteredFaculties.map(fac => (
            <div key={fac.name} onClick={() => setSelectedFaculty(fac)} className={`cursor-pointer p-6 rounded-2xl border shadow-md hover:shadow-xl transition ${darkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
              <h2 className="font-bold text-xl">{fac.name}</h2>
              <p className="text-sm opacity-80">{fac.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
