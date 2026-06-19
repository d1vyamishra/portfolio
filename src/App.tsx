import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <Loader onLoaded={() => setIsLoaded(true)} />}

      <div className="min-h-screen font-sans bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden antialiased">
        
        <Header
          activeSection={activeSection}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
        />

        <main className="w-full relative">
          
          <div id="home-trigger">
            <Hero />
          </div>

          <div id="about-trigger">
            <About />
          </div>

          <div id="skills-trigger">
            <Skills />
          </div>

          <div id="experience-trigger">
            <Experience />
          </div>

          <div id="projects-trigger">
            <Projects />
          </div>

          <div id="contact-trigger">
            <Contact />
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
