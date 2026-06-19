import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ChartPie, MessageSquare, CheckSquare, Share2, Github, ExternalLink, LayoutGrid } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend" | "backend">("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return ShoppingBag;
      case "ChartPie":
        return ChartPie;
      case "MessageSquare":
        return MessageSquare;
      case "CheckSquare":
        return CheckSquare;
      case "Share2":
        return Share2;
      default:
        return LayoutGrid;
    }
  };

  const filteredProjects = projects.filter((proj) => {
    if (filter === "all") return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xl text-purple-400 font-bold">04.</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-mono flex items-center gap-2 tracking-tight">
            <span className="text-purple-400">&lt;</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-display">Featured Projects</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/20 to-transparent ml-4" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-100 dark:bg-slate-900/60 p-2 rounded-2xl w-fit mx-auto border border-slate-200 dark:border-slate-800">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/10"
                  : "text-slate-500 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const IconComponent = getProjectIcon(project.icon);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden hover:border-purple-400/40 shadow-sm hover:shadow-2xl dark:shadow-slate-950/20 flex flex-col justify-between group"
                >
                  <div className="h-52 bg-slate-100 dark:bg-slate-950 flex items-center justify-center relative select-none overflow-hidden pr-2">
                    <IconComponent size={60} className="text-purple-500 dark:text-purple-400/30 stroke-[1] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />

                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="absolute inset-0 bg-slate-950/75 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Repository Code"
                          className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg cursor-pointer"
                        >
                          <Github size={20} className="text-slate-900" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Launch Live Application"
                          className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg cursor-pointer"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2 text-left">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase font-bold tracking-wider text-purple-500 dark:text-purple-400 bg-purple-500/5 dark:bg-purple-400/5 border border-purple-500/10 p-1 px-2.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-mono text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans mt-1">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/40">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-400 hover:text-purple-400 transition-colors"
                      >
                        <Github size={13} />
                        Code
                      </a>
                      <span className="text-slate-300 dark:text-slate-750 font-mono text-xs select-none">|</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
