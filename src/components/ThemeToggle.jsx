import { motion } from 'framer-motion';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {

  return (
    <motion.button
      className={`fixed top-4 right-4 p-2 rounded-full focus:outline-none ${
        darkMode 
        ? 'bg-cyan-700 text-white border-2 hover:border-white active:border-white focus:outline-none'
        : 'bg-cyan-500 text-white border-2 hover:border-black active:border-black focus:outline-none'} shadow-lg z-50`}
      onClick={toggleDarkMode}
      whileHover={{ 
        scale: 1.1,
        boxShadow: darkMode
          ? "0 0 20px 1px rgba(34, 211, 238, 0.7)"
          : "0 0 20px 2px rgba(34, 211, 238, 0.7)"
       }}
      whileTap={{ 
        scale: 0.8,
        boxShadow: darkMode
          ? "0 0 20px 1px rgba(34, 211, 238, 0.7)"
          : "0 0 20px 2px rgba(34, 211, 238, 0.7)"
      }}
      transition={{
        duration: 0.2,
        type: "linear"
      }}
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-sun">
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
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-sun">
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
      )}
    </motion.button>
  );
};

export default ThemeToggle;