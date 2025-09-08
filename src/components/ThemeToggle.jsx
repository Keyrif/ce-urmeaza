import { motion } from 'framer-motion';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {

  const neumorphicShadow = darkMode
    ? "6px 6px 12px #18283a, -6px -6px 16px #46556aff"
    : "6px 6px 12px #b8c0c9, -6px -6px 12px #ffffff";

  const neumorphicPressedShadow = darkMode
    ? "inset 6px 6px 12px #18283a, inset -6px -6px 12px #263a54"
    : "inset 6px 6px 12px #b8c0c9, inset -6px -6px 12px #ffffff";

  return (
    <motion.button
      className={`fixed top-4 right-4 p-2 rounded-full focus:outline-none border-transparent hover:border-transparent active:border-transparent ${
        darkMode 
        ? 'bg-slate-700 text-white'
        : 'bg-gray-200 text-gray-900'} z-50`}
      onClick={toggleDarkMode}
      style={{ boxShadow: neumorphicShadow }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ 
        scale: 0.8,
        boxShadow: neumorphicPressedShadow
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
