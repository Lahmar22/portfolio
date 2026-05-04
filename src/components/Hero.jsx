import { useState, useEffect } from "react";
import avatarImg from "../assets/image.jpeg";

const roles = ["Full Stack Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-violet-900/10 rounded-full blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 pt-24 pb-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-purple-400 font-mono text-sm md:text-base mb-3 tracking-widest uppercase">
            👋 Hello, World! I'm
          </p>
          <h1 className="text-xl md:text-7xl font-extrabold text-white leading-tight mb-4">
            LAHMAR Zakariae
            <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack Web Developer
            </span>
          </h1>

          {/* Typing animation */}
          <div className="flex items-center gap-2 justify-center md:justify-start mb-6 h-8">
            <span className="text-gray-400 text-lg">&lt;</span>
            <span className="text-cyan-400 font-mono text-lg font-semibold min-w-62.5">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
            <span className="text-gray-400 text-lg">/&gt;</span>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
            Focused on crafting beautiful, performant web experiences. I turn ideas into elegant digital solutions using modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 rounded-full bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/30"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 rounded-full border border-purple-500/50 text-gray-300 font-semibold hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5 mt-8 justify-center md:justify-start">
            {[
              { icon: "github", href: "https://github.com/Lahmar22", label: "GitHub" },
              { icon: "linkedin", href: "https://www.linkedin.com/in/zakariae-lahmar", label: "LinkedIn" },
              
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                {s.icon === "github" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                )}
                {s.icon === "linkedin" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/40 animate-spin" style={{ animationDuration: "12s" }} />
            <div className="absolute inset-3 rounded-full border border-cyan-500/30 animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }} />
            {/* Glow */}
            <div className="absolute inset-4 rounded-full bg-linear-to-br from-purple-600/30 to-cyan-600/30 blur-xl" />
            {/* Image */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-500/30">
              <img src={avatarImg} alt="Safiy - Developer" className="w-full h-full object-cover" />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-3 -right-3 bg-gray-900 border border-purple-500/50 rounded-xl px-3 py-1.5 shadow-lg">
              <span className="text-xs font-semibold text-purple-400">1+ Years</span>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-gray-900 border border-cyan-500/50 rounded-xl px-3 py-1.5 shadow-lg">
              <span className="text-xs font-semibold text-cyan-400">30+ Projects</span>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
