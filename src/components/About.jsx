import avatarImg from "../assets/image.jpeg";
import cv from "../assets/lahmarcv.pdf";
import { useLanguage } from "../context/LanguageContext";

const stats = [
  { value: "Full-Stack", label: "& AI Development" },
  { value: "30+", label: "Projects Done" },
  { value: "AI", label: "& Generative AI" },
  { value: "2025", label: "Current Training" },
];

export default function About() {
  const { language } = useLanguage();
  const displayStats = language === "fr"
    ? [
        { value: "Full-Stack", label: "& Développement IA" },
        { value: "30+", label: "Projets réalisés" },
        { value: "IA", label: "& IA générative" },
        { value: "2025", label: "Formation actuelle" },
      ]
    : stats;
  return (
    <section id="about" className="py-16 bg-gray-950 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-2">{language === "fr" ? "Qui suis-je" : "Who I Am"}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {language === "fr" ? "À " : "About "}<span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{language === "fr" ? "propos" : "Me"}</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="relative shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-cyan-600 rounded-2xl rotate-6 opacity-30" />
              <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-cyan-600 rounded-2xl rotate-3 opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <img src={avatarImg} alt="About Zakariae Lahmar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 py-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === "fr" ? "Développeur Full-Stack & IA basé au " : "Full-Stack & AI Developer based in "}<span className="text-purple-400">Maroc 🇲🇦</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              {language === "fr"
                ? "Je suis développeur Full-Stack et Intelligence Artificielle au Maroc. Je conçois des applications web complètes et intègre des fonctionnalités intelligentes comme des modèles de Machine Learning et des agents basés sur les LLM."
                : "I'm a Full-Stack and Artificial Intelligence Developer from Morocco. I design complete web applications and integrate intelligent features such as Machine Learning models and LLM-powered agents."}
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              {language === "fr"
                ? "Je maîtrise React et Angular côté frontend, Node.js, Express, Laravel et Java côté backend, ainsi que PostgreSQL, MongoDB, MySQL et Supabase pour les données. En IA, je travaille avec Python, Scikit-learn, Pandas, NumPy, NLP, le prompt engineering et les API REST."
                : "My experience covers React and Angular on the frontend, Node.js, Express, Laravel and Java on the backend, and PostgreSQL, MongoDB, MySQL and Supabase for data. On the AI side, I work with Python, Scikit-learn, Pandas, NumPy, NLP, prompt engineering and REST APIs for AI/LLM integration."}
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { label: language === "fr" ? "Nom" : "Name", value: "Lahmar Zakariae" },
                { label: "Email", value: "zakariaelahmar24@gmail.com" },
                { label: language === "fr" ? "Localisation" : "Location", value: language === "fr" ? "Maroc" : "Morocco" },
                { label: language === "fr" ? "Disponibilité" : "Availability", value: language === "fr" ? "Disponible" : "Open to Work" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 bg-gray-900/50 p-4 rounded-xl border border-gray-800"
                >
                  <span className="text-purple-400 font-semibold text-sm">
                    {item.label}:
                  </span>

                  <span className="text-gray-300 text-sm break-all">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={cv} download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {language === "fr" ? "Télécharger le CV" : "Download CV"}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {displayStats.map((s) => (
            <div
              key={s.label}
              className="bg-gray-900/60 border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500/40 hover:bg-gray-900/80 transition-all duration-300 group"
            >
              <p className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {s.value}
              </p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
