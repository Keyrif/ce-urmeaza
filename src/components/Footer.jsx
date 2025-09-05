function Footer({ darkMode }) {
  return (
    <footer
      className={`w-full py-6 mt-12 flex flex-col items-center justify-center gap-1 text-center transition-all duration-300 ${
        darkMode 
        ? "bg-slate-900 text-gray-200" 
        : "bg-gray-100 text-gray-900"
      }`}
    >
      <p className="font-semibold text-lg">© 2025 KEYRIF</p>
      <a className="text-sm opacity-80" href="https://github.com/keyrif/ce-urmeaza">
        Pagina Proiect Github
      </a>
      <a className="text-sm opacity-80" href="https://www.paylab.ro/">
        Sursa salarii
      </a>
      <p>v0.4</p>
    </footer>
  );
}

export default Footer;