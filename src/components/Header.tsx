import { useState, useEffect, MouseEvent } from "react";
import { Home, User, Code, Briefcase, Rocket, Mail, Sun, Moon, Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ activeSection, isDark, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Rocket },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg border-slate-200/10 dark:border-slate-800/80"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-1 font-mono text-lg lg:text-xl font-bold group select-none"
        >
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">&lt;</span>
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Divya
          </span>
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">/&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-slate-400 dark:text-slate-300 hover:text-purple-400 hover:bg-slate-150/10 dark:hover:bg-slate-800/40"
                }`}
              >
                <IconComponent size={15} />
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-400 hover:text-purple-400 dark:hover:text-purple-300 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(192,132,252,0.15)]"
          >
            {isDark ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-purple-400 hover:border-purple-400 transition-all cursor-pointer"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 dark:bg-slate-950 border-b border-slate-200/10 dark:border-slate-800/80 p-6 flex flex-col gap-2 shadow-2xl animate-fadeIn">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-150 ${
                  isActive
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-slate-300 hover:text-purple-400 dark:hover:text-purple-300 hover:bg-slate-800/40"
                }`}
              >
                <IconComponent size={18} />
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
