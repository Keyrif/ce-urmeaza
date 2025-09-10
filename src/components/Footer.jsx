function Footer({ darkMode }) {
  return (
    <footer
      className={`w-full py-6 mt-12 flex flex-col items-center justify-center gap-1 text-center transition-all duration-300 ${
        darkMode 
        ? "bg-slate-700 text-gray-200" 
        : "bg-[#eceff2] text-gray-900"
      }`}
    >
      <p className="font-semibold text-lg">© 2025 KEYRIF</p>
      <a className="text-sm opacity-80" href="https://github.com/keyrif/ce-urmeaza">
        Pagina Proiect Github
      </a>
    </footer>
  );
}

export default Footer;
