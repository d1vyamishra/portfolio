import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onLoaded: () => void;
}

export default function Loader({ onLoaded }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 12) + 3;
      if (count >= 100) {
        count = 100;
        setPercent(100);
        clearInterval(interval);
        
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => {
            onLoaded();
          }, 400);
        }, 800);
      } else {
        setPercent(count);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-[10000] p-4 text-slate-100"
        >
          <div className="max-w-md w-full text-center space-y-8">
            <div className="font-mono text-left bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-2xl space-y-2">
              <div className="text-purple-400">
                <span className="text-pink-400">const</span> developerProfile = &#123;
              </div>
              <div className="pl-4 text-cyan-400">
                name: <span className="text-amber-300">"Divya Prakash Mishra"</span>,
              </div>
              <div className="pl-4 text-cyan-400">
                role: <span className="text-amber-300">"Full Stack Architect"</span>,
              </div>
              <div className="pl-4 text-cyan-400">
                status: <span className="text-green-400">"Compiling Portfolio..."</span>
              </div>
              <div className="text-purple-400">&#125;;</div>
            </div>

            <div className="space-y-4">
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 border-4 border-slate-800 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-purple-400 border-r-cyan-400 rounded-full animate-spin" />
              </div>

              <div className="w-48 bg-slate-800 h-1.5 rounded-full mx-auto overflow-hidden border border-slate-700">
                <motion.div
                  className="bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400 h-full shadow-[0_0_10px_#c084fc]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>

              <div className="font-mono text-purple-400 text-sm font-semibold tracking-wider">
                {percent}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
