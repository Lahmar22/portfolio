import { useState } from "react";
// import project1Img from "../assets/project1.png";
// import project2Img from "../assets/project2.png";

const projects = [
  {
    id: 1,
    title: "ShopFlow E-Commerce",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    description:
      "A full-featured e-commerce platform with product management, shopping cart, payment integration with Stripe, and real-time order tracking.",
    image: null,
    github: "https://github.com",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    category: "Frontend",
    tags: ["React", "TailwindCSS", "Chart.js", "REST API"],
    description:
      "A responsive analytics dashboard with interactive charts, KPI cards, and real-time data visualizations for business intelligence.",
    image: null,
    github: "https://github.com",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Manager App",
    category: "Full Stack",
    tags: ["React", "Laravel", "MySQL", "JWT"],
    description:
      "A collaborative task management application with drag-and-drop boards, team collaboration, deadlines, and priority management.",
    image: null,
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "La Cosmetica Platform",
    category: "Frontend",
    tags: ["React", "TailwindCSS", "API Integration"],
    description:
      "A cosmetics tracking and management frontend with product catalogs, employee dashboards, and inventory visualization.",
    image: null,
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "TaxiGo Booking System",
    category: "Full Stack",
    tags: ["React", "Node.js", "Socket.io", "Maps API"],
    description:
      "A ride-hailing platform with real-time driver tracking, dynamic pricing, booking management and driver/client dashboards.",
    image: null,
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "EVolt Charging Stations",
    category: "Full Stack",
    tags: ["React", "Laravel", "PostgreSQL", "TailwindCSS"],
    description:
      "Electric vehicle charging station management platform with booking, reservation management and admin statistics.",
    image: null,
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
];

const filters = ["All", "Full Stack", "Frontend"];

const gradients = [
  "from-purple-600/20 to-cyan-600/20",
  "from-pink-600/20 to-orange-600/20",
  "from-green-600/20 to-teal-600/20",
  "from-blue-600/20 to-indigo-600/20",
  "from-amber-600/20 to-red-600/20",
  "from-violet-600/20 to-purple-600/20",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-purple-800/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-2">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === f
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25"
                : "bg-gray-800/60 border border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-gray-900/60 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Image / Placeholder */}
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}>
                    <span className="text-6xl opacity-40">
                      {["💻", "📊", "✅", "💄", "🚕", "⚡"][i % 6]}
                    </span>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gray-950/80 flex items-center justify-center gap-4 transition-all duration-300 ${hovered === project.id ? "opacity-100" : "opacity-0"}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/Lahmar22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-purple-500/40 text-gray-300 font-semibold hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
