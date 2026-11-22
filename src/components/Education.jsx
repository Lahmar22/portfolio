import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { language } = useLanguage();

  const education = [
    {
      period: "2025 - " + (language === "fr" ? "Présent" : "Present"),
      institution: "YouCode (UM6P)",
      location: "Safi",
      degree: "Artificial Intelligence & Development",
      degreeFr: "Intelligence artificielle & développement",
      accent: "from-purple-500 to-violet-500",
    },
    {
      period: "2021 - 2024",
      institution: "Université Moulay Ismaïl",
      location: "Meknès",
      degree: "DEUG in Computer Science",
      degreeFr: "DEUG en informatique",
      accent: "from-cyan-500 to-blue-500",
    },
    {
      period: "2020 - 2021",
      institution: "Lycée Sidi Ameur Elhadi",
      location: "Sidi Kacem",
      degree: "Baccalaureate - Physical Sciences, French Option",
      degreeFr: "Baccalauréat - Sciences physiques, option français",
      accent: "from-violet-500 to-cyan-500",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-96 h-96 bg-cyan-800/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-2">
            {language === "fr" ? "Mon parcours" : "My Journey"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {language === "fr" ? "Ma " : "My "}
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {language === "fr" ? "formation" : "Education"}
            </span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-2 bottom-2 w-px bg-linear-to-b from-purple-500 via-cyan-500 to-purple-500 md:-translate-x-1/2" />

          {education.map((item, index) => (
            <div
              key={item.period + item.institution}
              className={`relative flex mb-10 last:mb-0 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              <span className="absolute left-5 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-gray-950 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 z-10" />

              <article className="ml-12 md:ml-0 md:w-[43%] bg-gray-800/60 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold text-white mb-4 bg-linear-to-r ${item.accent}`}>
                  {item.period}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === "fr" ? item.degreeFr : item.degree}
                </h3>
                <p className="text-purple-300 font-medium">
                  {item.institution}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {item.location}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
