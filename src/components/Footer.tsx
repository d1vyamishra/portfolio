import { MouseEvent } from "react";
import { Github, Linkedin, Twitter, Instagram, ChevronUp } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function Footer() {
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
        return Github;
    }
  };

  const handleScrollTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/60 dark:bg-slate-950 border-t border-slate-200/10 dark:border-slate-800/80 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-6">
        
        <a
          href="#home"
          onClick={handleScrollTop}
          className="font-mono text-2xl lg:text-3xl font-extrabold text-purple-400 hover:text-purple-300 transition-colors tracking-tight focus:outline-none"
        >
          &lt;Divya /&gt;
        </a>

        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-sans tracking-wide">
          Designed & Built with passion by{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {personalInfo.name}
          </span>
        </p>

        <div className="flex items-center gap-4 py-2">
          {socialLinks.map((social) => {
            const IconComponent = getSocialIcon(social.name);
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Follow on ${social.name}`}
                className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-400 text-slate-400 hover:text-purple-400 hover:scale-105 transition-all rounded-full flex items-center justify-center shadow-sm"
              >
                <IconComponent size={15} />
              </a>
            );
          })}
        </div>

        <button
          onClick={handleScrollTop}
          title="Return to webpage top"
          className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-400 text-slate-500 hover:text-purple-400 w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-sm shadow-black/5 hover:-translate-y-0.5"
        >
          <ChevronUp size={18} />
        </button>

        <p className="text-xs text-slate-400 dark:text-slate-500 font-mono pt-4 select-none">
          © {currentYear} {personalInfo.name}. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
