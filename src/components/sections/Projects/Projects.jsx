export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-slate-950/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Featured Work</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Engineering Projects</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">A curated selection of applications focused on scalability, real-time data, and seamless user experiences.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Contact Manager Project */}
          <div className="project-card group">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-3xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors">Contact Manager</h4>
                    <p className="text-primary text-sm font-bold tracking-widest uppercase">Full-Stack Web App</p>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    A full-stack web application to manage contacts with CRUD operations. All the CRUD features are loaded with proper validation and error handling.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-primary/40">
                      <p className="text-white text-sm font-bold mb-1">Challenge</p>
                      <p className="text-slate-400 text-sm">Building a responsive application with real-time updates and proper state management across components.</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-emerald-500/40">
                      <p className="text-white text-sm font-bold mb-1">Solution</p>
                      <p className="text-slate-400 text-sm">Implemented using React for frontend, Node.js/Express for backend, and PostgreSQL for data persistence with Prisma ORM.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/20">React</span>
                    <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-bold border border-emerald-500/20">Node.js</span>
                    <span className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-bold border border-cyan-500/20">PostgreSQL</span>
                    <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 rounded-lg text-xs font-bold border border-purple-500/20">Prisma</span>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button onClick={() => window.open('https://github.com/VISHNU7KASIREDDY/Contact-Manager', '_blank')} className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">code</span> View Code
                    </button>
                    <button onClick={() => window.open('https://contact-manager-zeta-flax.vercel.app/', '_blank')} className="flex-1 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all border border-white/10 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">open_in_new</span> Live Demo
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 relative group/img">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-600/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all"></div>
                <div className="relative aspect-video bg-slate-900 rounded-2xl border border-white/10 overflow-hidden">
                  <img src="/contact-manager.png" alt="Contact Manager Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* CGPA Analyzer Project */}
          <div className="project-card group">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all"></div>
                <div className="relative aspect-video bg-slate-900 rounded-2xl border border-white/10 overflow-hidden">
                  <img src="/cgpa-analyzer.png" alt="CGPA Analyzer Application" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-3xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors">CGPA Analyzer</h4>
                    <p className="text-primary text-sm font-bold tracking-widest uppercase">Data Analysis Tool</p>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    A web application designed to calculate, analyze, and predict student academic performance with accuracy and consistency.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-primary/40">
                      <p className="text-white text-sm font-bold mb-1">Features</p>
                      <p className="text-slate-400 text-sm">Automatically calculates SGPA and CGPA with accuracy, visualizes grade trends, and predicts future performance.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/20">React</span>
                    <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-bold border border-emerald-500/20">Node.js</span>
                    <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 rounded-lg text-xs font-bold border border-purple-500/20">Express</span>
                    <span className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-bold border border-cyan-500/20">PostgreSQL</span>
                    <span className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-xs font-bold border border-indigo-500/20">Prisma</span>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button onClick={() => window.open('https://github.com/UnDC-NST/CGPA-Analyzer', '_blank')} className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">code</span> View Code
                    </button>
                    <button onClick={() => window.open('https://cgpa-test-pra-1.onrender.com/', '_blank')} className="flex-1 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all border border-white/10 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">open_in_new</span> Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cricket Score Tracker Project */}
          <div className="project-card group">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-3xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors">Cricket Score Tracker</h4>
                    <p className="text-primary text-sm font-bold tracking-widest uppercase">Real-Time Application</p>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    A dynamic application developed with React designed to allow users to track team scores, wickets, run rate, and match status with an interactive UI.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-primary/40">
                      <p className="text-white text-sm font-bold mb-1">Highlights</p>
                      <p className="text-slate-400 text-sm">Real-time score updates, interactive UI with smooth animations, and comprehensive match statistics.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/20">React</span>
                    <span className="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 rounded-lg text-xs font-bold border border-yellow-500/20">JavaScript</span>
                    <span className="px-3 py-1.5 bg-pink-500/10 text-pink-400 rounded-lg text-xs font-bold border border-pink-500/20">CSS</span>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button onClick={() => window.open('https://github.com/VISHNU7KASIREDDY/cricket-score-tracker', '_blank')} className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">code</span> View Code
                    </button>
                    <button onClick={() => window.open('https://cricket-score-tracker-zeta.vercel.app/', '_blank')} className="flex-1 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all border border-white/10 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">open_in_new</span> Live Demo
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 relative group/img">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all"></div>
                <div className="relative aspect-video bg-slate-900 rounded-2xl border border-white/10 overflow-hidden">
                  <img src="/cricket-tracker.png" alt="Cricket Score Tracker Application" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
