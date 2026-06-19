import { motion } from "motion/react";
import { Layout, Server, Wrench, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "layout":
        return Layout;
      case "server":
        return Server;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xl text-purple-400 font-bold">02.</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-mono flex items-center gap-2 tracking-tight">
            <span className="text-purple-400">&lt;</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Technical Skills</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/20 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => {
            const IconComponent = getCategoryIcon(cat.icon);
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl dark:shadow-slate-950/20 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-8 pb-3 border-b border-slate-100 dark:border-slate-800/50">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center text-purple-500 dark:text-purple-400">
                      <IconComponent size={20} className="stroke-[1.75]" />
                    </div>
                    <h3 className="font-mono text-base lg:text-lg font-bold text-slate-800 dark:text-slate-100 dark:group-hover:text-purple-300">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-semibold tracking-wide">
                          <span className="text-slate-700 dark:text-slate-300 font-display">
                            {skill.name}
                          </span>
                          <span className="text-purple-500 dark:text-purple-400 font-mono">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="h-2.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200/50 dark:border-slate-800/80 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full animate-[shimmer_2s_infinite] pointer-events-none" />
                          
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.4)]"
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Cpu size={12} className="text-slate-400 animate-pulse" />
                    <span>Active stack</span>
                  </div>
                  <span>Compiled successfully</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
