import { motion } from "motion/react";
import { Building2, CheckCircle, Calendar, Briefcase } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 border-t border-slate-200/5 dark:border-slate-800/20 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xl text-purple-400 font-bold">03.</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-mono flex items-center gap-2 tracking-tight">
            <span className="text-purple-400">&lt;</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-display">Experience</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/20 to-transparent ml-4" />
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800/80 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-4 border-purple-400 dark:border-purple-400 shadow-[0_0_15px_#c084fc] group-hover:scale-110 transition-transform duration-200" />

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 rounded-2xl p-6 lg:p-8 hover:border-purple-400/40 hover:shadow-xl dark:shadow-slate-950/30 hover:scale-[1.01] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                  <div className="inline-flex items-center gap-1.5 font-mono text-sm text-purple-500 dark:text-purple-400 font-bold">
                    <Calendar size={14} />
                    <span>{exp.yearRange}</span>
                  </div>

                  {exp.isCurrent && (
                    <span className="self-start sm:self-center px-2.5 py-1 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 text-purple-500 dark:text-purple-400 text-[10px] uppercase font-bold tracking-widest rounded-full border border-purple-500/20">
                      Active Role
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 font-display">
                  {exp.title}
                </h3>

                <div className="flex items-center gap-1.5 text-purple-500 dark:text-purple-400 font-semibold text-sm sm:text-base mt-1.5 mb-4 select-none">
                  <Building2 size={16} />
                  <span>{exp.company}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-6 bg-slate-50 dark:bg-slate-950/40 p-4 sm:p-5 rounded-xl border border-slate-200/50 dark:border-slate-800/40">
                  {exp.achievements.map((ach) => (
                    <div key={ach} className="flex gap-3 text-slate-705 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      <CheckCircle size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] font-semibold text-purple-500 dark:text-purple-400 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-1.5 px-3 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
