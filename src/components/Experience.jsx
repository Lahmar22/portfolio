import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { language } = useLanguage();

  const experiences = [
    {
      period: "May 2026 - Jun 2026",
      periodFr: "Mai 2026 - Juin 2026",
      role: "Artificial Intelligence Developer",
      roleFr: "Développeur en intelligence artificielle",
      company: "Tython",
      location: "Casablanca",
      type: "Internship",
      typeFr: "Stage",
      summary:
        "Development of a multi-tenant SaaS platform integrating AI/LLM capabilities.",
      summaryFr:
        "Développement d'une plateforme SaaS multi-tenant intégrant des capacités IA/LLM.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Docker",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-20 -left-48 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-48 w-96 h-96 bg-cyan-800/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-2">
            {language === "fr" ? "Parcours professionnel" : "Professional Journey"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {language === "fr" ? "Mon " : "My "}
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {language === "fr" ? "expérience" : "Experience"}
            </span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="space-y-6">
          {experiences.map((item) => (
            <article
              key={item.company + item.period}
              className="relative bg-gray-900/70 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-linear-to-b from-purple-500 to-cyan-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-linear-to-r from-purple-600 to-cyan-600">
                      {language === "fr" ? item.periodFr : item.period}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                      {language === "fr" ? item.typeFr : item.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {language === "fr" ? item.roleFr : item.role}
                  </h3>
                  <p className="text-purple-300 font-medium mt-2">
                    {item.company}
                    <span className="text-gray-500"> · </span>
                    <span className="text-gray-400">{item.location}</span>
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mt-5">
                {language === "fr" ? item.summaryFr : item.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full text-sm text-gray-300 bg-gray-800 border border-white/5"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
