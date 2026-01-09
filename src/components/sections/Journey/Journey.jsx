export default function Journey({ scrollToSection }) {
  return (
    <>
      {/* Journey Timeline */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-xl">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">The Evolution</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">A Story of Continuous Growth</h3>
              <p className="text-slate-400 text-lg">From curiosity to mastery. Every milestone marks a shift in perspective and capability.</p>
            </div>
            <div className="mt-8 md:mt-0 flex gap-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <span className="size-2 rounded-full bg-primary"></span> 2021 - Present
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full relative z-10">
            {[
              { year: '2021 • Genesis', title: 'Initial Coding Spark', desc: 'Discovered the power of web technologies. Built my first static landing pages and fell in love with the immediate feedback loop of CSS and HTML.', badge: 'Problem Solving', icon: 'psychology' },
              { year: '2023 • Level Up', title: 'Full-Stack Mastery', desc: 'Bridged the gap between client and server. Mastered React, Node.js, and complex state management. Delivered production-ready applications like Contact Manager and CGPA Analyzer.', badge: 'System Architecture', icon: 'hub', highlight: true },
              { year: '2025 • Future Proof', title: 'AI/ML Integration', desc: 'Pursuing B.Tech in AI & ML, exploring how artificial intelligence can enhance user interfaces and developer productivity. Building intelligent applications.', badge: 'AI Integration', icon: 'memory' }
            ].map((milestone, index) => (
              <div key={index} className={`relative ${index === 1 ? 'md:mt-32' : ''} pt-12`}>
                <div className={`absolute -top-4 ${index === 0 ? 'left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0' : index === 1 ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2 md:right-0 md:translate-x-1/2 md:left-auto'}`}>
                  <div className="size-8 rounded-full bg-primary border-4 border-slate-900 shadow-[0_0_20px_rgba(15,109,240,0.5)] z-20"></div>
                </div>
                <div className={`glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-500 ${milestone.highlight ? 'border-primary/20 bg-primary/5' : ''}`}>
                  <div className="text-primary font-black text-xs tracking-widest uppercase mb-4">{milestone.year}</div>
                  <h4 className="text-2xl font-bold text-white mb-4">{milestone.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{milestone.desc}</p>
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold bg-white/5 w-fit px-3 py-1.5 rounded-lg">
                    <span className="material-symbols-outlined text-sm">{milestone.icon}</span> {milestone.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="glass-card p-12 rounded-[3rem] border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div className="absolute -right-20 top-0 size-80 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">Ready to see these <br /> skills in action?</h3>
            <p className="text-slate-400 text-lg mb-8">Browse through my selection of hand-crafted projects.</p>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all flex items-center gap-3 mx-auto md:mx-0"
            >
              View Projects <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
          <div className="hidden lg:block relative z-10 translate-x-10 translate-y-10">
            <div className="flex gap-4">
              <div className="size-48 bg-slate-800 rounded-3xl rotate-12 border border-white/10"></div>
              <div className="size-48 bg-slate-700 rounded-3xl rotate-12 -translate-y-12 border border-white/10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
