import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { User, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function About() {
  const { personalInfo, stats } = PORTFOLIO_DATA;
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;
          stats.forEach((stat, idx) => {
            let start = 0;
            const end = stat.val;
            const duration = 1500;
            const intervalTime = Math.max(Math.floor(duration / end), 12);
            
            const timer = setInterval(() => {
              start += Math.ceil(end / 40);
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setAnimatedStats((prev) => {
                const updated = [...prev];
                updated[idx] = start;
                return updated;
              });
            }, intervalTime);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stats]);

  return (
    <section id="about" ref={sectionRef} className="py-20 border-t border-slate-200/5 dark:border-slate-800/20 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xl text-purple-400 font-bold">01.</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-mono flex items-center gap-2 tracking-tight">
            <span className="text-purple-400">&lt;</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/20 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
              <p>
                I am a results-driven Full Stack Developer with a deep passion for solving complex architectural 
                challenges. Over the years, I've honed my skills in modern JavaScript ecosystems, creating 
                seamless transitions between front-end aesthetics and back-end efficiency.
              </p>
              <p>
                My philosophy is simple: write code that is not just functional, but beautiful, performant, and 
                highly maintainable. When I'm not coding, I'm usually engineering side projects, reviewing open-source 
                packages, or trying out new technology frameworks.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-purple-500/40 p-5 rounded-2xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 block group"
                >
                  <span className="block font-mono text-3xl md:text-4xl font-extrabold text-purple-500 dark:text-purple-400 group-hover:scale-105 transition-transform duration-200">
                    {animatedStats[idx]}+
                  </span>
                  <span className="block text-xs md:text-sm font-semibold tracking-wide text-slate-400 dark:text-slate-500 font-sans mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full select-none font-mono text-sm leading-relaxed">
            
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-transparent blur-3xl rounded-full translate-x-8" />
            
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl w-full p-6 space-y-4 hover:shadow-2xl hover:border-purple-400/40 transition-all duration-300">
              
              <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100 dark:border-slate-805/50 border-slate-100 dark:border-slate-800/50">
                <div className="w-3 h-3 bg-rose-400 rounded-full" />
                <div className="w-3 h-3 bg-amber-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="ml-3 text-[11px] text-slate-400 tracking-wider">ClassDeveloper.ts</span>
              </div>

              <div className="space-y-1.5 select-all font-mono">
                <div>
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-cyan-400">Developer</span>&#123;
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">constructor</span>() &#123;
                </div>
                <div className="pl-8 text-cyan-400">
                  <span className="text-slate-400 dark:text-slate-200">this</span>.name ={" "}
                  <span className="text-amber-300">"Divya"</span>;
                </div>
                <div className="pl-8 text-cyan-400">
                  <span className="text-slate-400 dark:text-slate-200">this</span>.traits = [
                </div>
                <div className="pl-12">
                  {personalInfo.traits.map((trait, index) => (
                    <span key={trait} className="text-amber-305 text-amber-300 mr-2 after:content-[','] last:after:content-['']">
                      "{trait}"
                    </span>
                  ))}
                </div>
                <div className="pl-8">];</div>
                <div className="pl-4">&#125;</div>
                <div className="pl-4 text-purple-400">
                  isAvailable() &#123;
                </div>
                <div className="pl-8 text-green-400">
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-green-400">true;</span>
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
