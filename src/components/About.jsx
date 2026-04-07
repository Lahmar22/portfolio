import avatarImg from "../assets/image.jpeg";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "10+", label: "Happy Clients" },
  { value: "5+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl rotate-6 opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl rotate-3 opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <img src={avatarImg} alt="About Safiy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Full Stack Developer based in <span className="text-purple-400">Morocco 🇲🇦</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with over 3 years of experience building modern web applications. I specialize in creating seamless user experiences with clean, maintainable code.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My expertise spans from crafting pixel-perfect front-end interfaces with React to architecting robust back-end systems with Node.js and Laravel. I'm always eager to learn new technologies and tackle challenging problems.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Name", value: "Safiy" },
                { label: "Email", value: "safiy@example.com" },
                { label: "Location", value: "Morocco" },
                { label: "Availability", value: "Open to Work ✅" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-purple-400 font-semibold text-sm min-w-[80px]">{item.label}:</span>
                  <span className="text-gray-300 text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-gray-900/60 border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500/40 hover:bg-gray-900/80 transition-all duration-300 group"
            >
              <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
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
