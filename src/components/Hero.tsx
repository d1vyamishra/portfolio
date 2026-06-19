import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Instagram, ArrowRight, Code, Server, Terminal, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function Hero() {
  const { personalInfo, socialLinks } = PORTFOLIO_DATA;

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return Github;
      case "linkedin":
        return Linkedin;
      case "twitter":
        return Twitter;
      case "instagram":
        return Instagram;
      default:
        return Terminal;
    }
  };

  const codeSymbols = ["{", "}", "[", "]", "(", ")", "< />", "=>", "const", "&&", "||", "import"];

  const scrollSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(192,132,252,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(192,132,252,0.04)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-pulse" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {codeSymbols.map((symbol, idx) => (
          <motion.div
            key={idx}
            className="absolute font-mono text-purple-500/10 dark:text-purple-400/10 text-lg md:text-xl font-bold"
            style={{
              left: `${(idx * 8.5) + 5}%`,
              top: `${(idx * 7.5) + 12}%`,
            }}
            animate={{
              y: [0, -35, 0],
              rotate: [0, 180, 360],
              opacity: [0.08, 0.25, 0.08],
            }}
            transition={{
              duration: 8 + (idx % 4) * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 text-purple-400 font-mono text-sm tracking-widest uppercase font-semibold"
          >
            <Sparkles size={16} className="text-purple-400 animate-bounce" />
            <span>{personalInfo.greeting}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-mono leading-tight tracking-tight"
          >
            <span className="text-pink-400">const</span>{" "}
            <span className="text-purple-400 dark:text-purple-300">=</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent select-all hover:brightness-110 transition-all">
              {personalInfo.name}
            </span>
            <span className="text-purple-400 dark:text-purple-300">;</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 tracking-wide font-display"
          >
            <span className="text-slate-400 text-lg font-mono mr-2">//</span>
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={() => scrollSection("contact")}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-[0_10px_20px_-5px_rgba(168,85,247,0.4)] hover:scale-[1.03] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollSection("projects")}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-slate-300 dark:border-slate-800 hover:border-purple-400 text-slate-700 dark:text-slate-300 hover:text-purple-400 rounded-xl font-bold hover:bg-purple-400/5 hover:scale-[1.03] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Projects</span>
              <Code size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-6"
          >
            {socialLinks.map((social) => {
              const IconComp = getSocialIcon(social.name);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Follow on ${social.name}`}
                  className="w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-400 hover:text-purple-400 dark:hover:text-purple-300 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all hover:scale-110 hover:-rotate-6 shadow-sm shadow-black/5 hover:shadow-lg"
                >
                  <IconComp size={18} />
                </a>
              );
            })}
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center relative order-1 lg:order-2 h-[320px] lg:h-[420px] select-none">
          
          <div className="absolute w-[240px] md:w-[320px] h-[240px] md:h-[320px] rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[180px] sm:w-[260px] lg:w-[300px] h-[180px] sm:h-[260px] lg:h-[300px] border-4 border-purple-400 dark:border-purple-400/80 shadow-[0_0_50px_rgba(192,132,252,0.3)] select-none rounded-[35%_65%_55%_45%_/_40%_45%_55%_60%] animate-[morph_8s_ease-in-out_infinite] flex items-center justify-center overflow-hidden bg-slate-900"
          >
            <img
              src="https://pbs.twimg.com/profile_images/2067986380609990656/nX2G5_sQ_400x400.jpg"
              alt="Divya Prakash Mishra"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            className="absolute -top-4 -right-2 md:top-6 md:-right-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-md dark:shadow-slate-950/40 flex items-center gap-2 w-48 hover:border-purple-400 hover:scale-105 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/50 flex items-center justify-center text-cyan-500 group-hover:rotate-45 transition-transform duration-300">
              <Code size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-xs text-slate-800 dark:text-slate-100">React Architect</span>
              <span className="text-[10px] text-slate-400 font-semibold font-mono">Redux, Hooks, Next</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.75 }}
            className="absolute bottom-4 -right-4 md:bottom-12 md:-right-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-md dark:shadow-slate-950/40 flex items-center gap-2 w-48 hover:border-purple-400 hover:scale-105 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-200">
              <Server size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-xs text-slate-800 dark:text-slate-100">Node JS</span>
              <span className="text-[10px] text-slate-400 font-semibold font-mono">Express, SQL, Mongodb</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
            className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-md dark:shadow-slate-950/40 flex items-center gap-2 w-44 hover:border-purple-400 hover:scale-105 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-505 group-hover:-translate-y-0.5 transition-all">
              <Terminal size={18} className="text-violet-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-xs text-slate-800 dark:text-slate-100">TypeScript</span>
              <span className="text-[10px] text-slate-400 font-semibold font-mono">TypeSafe API, ES6+</span>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 select-none">
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-purple-400 rounded-full"
            animate={{
              y: [0, 14, 0],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
