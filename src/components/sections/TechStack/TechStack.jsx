export default function TechStack() {
  return (
    <section className="py-32 relative bg-slate-950/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">The Toolbelt</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Tech Stack Overview</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend */}
          <div className="tech-card group">
            <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">laptop_mac</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Frontend</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-blue-400">check_circle</span> React / Next.js
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-blue-400">check_circle</span> TypeScript
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-blue-400">check_circle</span> Tailwind CSS
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-blue-400">check_circle</span> HTML / CSS / JS
              </li>
            </ul>
          </div>
          
          {/* Backend */}
          <div className="tech-card group">
            <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">dns</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Backend</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-emerald-400">check_circle</span> Node.js / Express
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-emerald-400">check_circle</span> Python
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-emerald-400">check_circle</span> REST APIs
              </li>
            </ul>
          </div>
          
          {/* Databases */}
          <div className="tech-card group">
            <div className="size-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">database</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Databases</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-amber-400">check_circle</span> PostgreSQL
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-amber-400">check_circle</span> MongoDB
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-amber-400">check_circle</span> MySQL
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-amber-400">check_circle</span> Prisma ORM
              </li>
            </ul>
          </div>
          
          {/* Tools */}
          <div className="tech-card group">
            <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">handyman</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Tools</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-purple-400">check_circle</span> Git / GitHub
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-purple-400">check_circle</span> Figma
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="material-symbols-outlined text-lg text-purple-400">check_circle</span> Postman
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
