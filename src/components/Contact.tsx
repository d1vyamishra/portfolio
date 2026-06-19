import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, MapPin, Send, Check, AlertCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function Contact() {
  const { personalInfo } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/5 dark:border-slate-800/20 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xl text-purple-400 font-bold">05.</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-mono flex items-center gap-2 tracking-tight">
            <span className="text-purple-400">&lt;</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-display">Get In Touch</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/20 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 font-display">
                Let's Talk!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                I'm currently looking for new developer opportunities and open collaborations. 
                Whether you have an interesting job challenge, a technical question, or just want to connect, 
                feel free to shoot me a note!
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center text-purple-500 dark:text-purple-400 group-hover:scale-105 transition-transform">
                  <Mail size={18} className="stroke-[1.75]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
                    Email Me
                  </span>
                  <span className="font-mono font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 mt-1 hover:text-purple-400">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 flex items-center justify-center text-indigo-505 text-indigo-500 group-hover:scale-105 transition-transform animate-[pulse_2s_infinite]">
                  <MapPin size={18} className="stroke-[1.75]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
                    Location
                  </span>
                  <span className="font-sans font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 mt-1">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl dark:shadow-slate-950/20 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col text-left gap-1.5">
                  <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-purple-400 dark:focus:border-purple-400/80 px-4 py-3 rounded-xl text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col text-left gap-1.5">
                  <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-purple-400 dark:focus:border-purple-400/80 px-4 py-3 rounded-xl text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col text-left gap-1.5">
                <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-505 dark:text-slate-500">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  disabled={status === "submitting"}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-purple-400 dark:focus:border-purple-400/80 px-4 py-3 rounded-xl text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col text-left gap-1.5">
                <label className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-505 dark:text-slate-500">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you today?"
                  required
                  rows={5}
                  disabled={status === "submitting"}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-purple-400 dark:focus:border-purple-400/80 px-4 py-3 rounded-xl text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none transition-colors resize-y min-h-[120px]"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 p-4 bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/20 rounded-xl text-sm leading-relaxed text-left font-sans">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  <span>Please fill in all required field inputs (*).</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2.5 p-4 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 rounded-xl text-sm leading-relaxed text-left font-sans shadow-lg">
                  <Check size={18} className="flex-shrink-0 text-emerald-500" />
                  <span>Thank you! Your email dispatch was delivered successfully. Divya will follow up shortly!</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full py-4 text-center font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 select-none shadow-md transition-all duration-300 ${
                  status === "submitting"
                    ? "bg-purple-950/20 text-purple-400 dark:bg-slate-800/80 cursor-not-allowed border border-slate-700/50"
                    : status === "success"
                    ? "bg-emerald-500 text-white cursor-none"
                    : "bg-gradient-to-r from-purple-500 via-indigo-600 to-indigo-700 text-white hover:scale-[1.01] hover:shadow-[0_8px_20px_-5px_rgba(168,85,247,0.4)] cursor-pointer"
                }`}
              >
                {status === "submitting" ? (
                  <>
                    <span>Delivering Dispatch...</span>
                    <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                  </>
                ) : status === "success" ? (
                  <>
                    <span>Delivered Successfully</span>
                    <Check size={18} />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
