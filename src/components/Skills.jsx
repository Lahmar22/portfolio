import { useState, useEffect, useRef } from "react";
import { FaLaravel, FaNodeJs, FaGitAlt, FaFigma, FaReact, FaJava, FaJs  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript, SiPhp, SiPostgresql } from "react-icons/si";
import { GrMysql, GrDocker } from "react-icons/gr";

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "JavaScript (ES6+)", level: 88, color: "from-yellow-400 to-orange-500" },
      { name: "TailwindCSS", level: 92, color: "from-teal-400 to-cyan-500" },
      { name: "HTML / CSS", level: 95, color: "from-orange-400 to-red-500" },
      { name: "TypeScript", level: 75, color: "from-blue-500 to-indigo-500" },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 82, color: "from-green-500 to-emerald-500" },
      { name: "Laravel / PHP", level: 78, color: "from-red-400 to-rose-500" },
      { name: "REST APIs", level: 88, color: "from-purple-500 to-violet-500" },
      { name: "MySQL / PostgreSQL", level: 80, color: "from-blue-400 to-sky-500" },
      { name: "MongoDB", level: 72, color: "from-green-400 to-lime-500" },
      { name: "PHP", level: 78, color: "from-indigo-500 to-purple-500" },
      { name: "PostgreSQL", level: 80, color: "from-sky-500 to-blue-500" },
      { name: "JEE", level: 72, color: "from-orange-500 to-red-500" },
    ],
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 90, color: "from-gray-400 to-slate-500" },
      { name: "Docker", level: 68, color: "from-blue-400 to-cyan-500" },
      { name: "Vite / Webpack", level: 82, color: "from-purple-400 to-pink-500" },
      { name: "Figma", level: 70, color: "from-pink-400 to-rose-500" },
      { name: "Linux / Bash", level: 75, color: "from-yellow-500 to-amber-500" },
    ],
  },
];

const techIcons = [
  { name: "Java", emoji: <FaJava className="text-red-500" /> },
  { name: "React", emoji: <FaReact className="text-blue-500" /> },
  { name: "Node.js", emoji: <FaNodeJs className="text-green-500" /> },
  { name: "Laravel", emoji: <FaLaravel className="text-red-500" /> },
  { name: "TailwindCSS", emoji: <RiTailwindCssFill className="text-cyan-500" /> },
  { name: "MongoDB", emoji: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", emoji: <GrMysql className="text-blue-500" /> },
  { name: "Docker", emoji: <GrDocker className="text-blue-500" /> },
  { name: "Git", emoji: <FaGitAlt className="text-red-500" /> },
  { name: "TypeScript", emoji: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", emoji: <FaJs className="text-yellow-500" /> },
  { name: "Figma", emoji: <FaFigma className="text-pink-500" /> },
  { name: "REST API", emoji: <FaJs className="text-orange-400" /> },
  { name: "PHP", emoji: <SiPhp className="text-indigo-500" /> },
  { name: "PostgreSQL", emoji: <SiPostgresql className="text-sky-500" /> },
  { name: "JEE", emoji: <FaJava className="text-orange-600" /> },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-bold text-purple-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-linear-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-cyan-800/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Tech cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {techIcons.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 bg-gray-800/60 border border-white/5 rounded-full px-4 py-2 hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300 group cursor-default"
            >
              <span className="text-lg">{t.emoji}</span>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">{t.name}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === i
                  ? "bg-linear-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-white/5"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="max-w-2xl mx-auto bg-gray-800/40 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
          {skillCategories[activeTab].skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
