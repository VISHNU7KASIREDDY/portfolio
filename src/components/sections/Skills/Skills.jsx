import { useEffect } from 'react'

export default function Skills() {
  useEffect(() => {
    // Animate skill bars on mount
    const skillBars = document.querySelectorAll('.skill-bar-fill')
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width')
      setTimeout(() => {
        bar.style.width = width
      }, 100)
    })
  }, [])

  return (
    <section id="skills" className="py-32 relative bg-slate-950/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Technical Proficiency</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Engineering Stack</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">A deep-dive into my specialized technical expertise, quantified by hands-on project experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Languages */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined text-2xl">code</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Core Languages</h4>
                <p className="text-slate-500 text-sm">Foundation & Logic</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">TypeScript</span>
                  <span className="text-primary font-bold">80%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" data-width="80%" style={{width: 0}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Python</span>
                  <span className="text-primary font-bold">90%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" data-width="90%" style={{width: 0}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">JavaScript</span>
                  <span className="text-primary font-bold">85%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" data-width="85%" style={{width: 0}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend Architecture */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <span className="material-symbols-outlined text-2xl">web</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Frontend Architecture</h4>
                <p className="text-slate-500 text-sm">UI/UX Development</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">React / Next.js</span>
                  <span className="text-purple-400 font-bold">90%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" data-width="90%" style={{width: 0}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Tailwind CSS</span>
                  <span className="text-purple-400 font-bold">98%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" data-width="98%" style={{width: 0}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">HTML / CSS</span>
                  <span className="text-purple-400 font-bold">95%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" data-width="95%" style={{width: 0}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined text-2xl">dns</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Backend & APIs</h4>
                <p className="text-slate-500 text-sm">Server-Side Integration</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Node.js / Express</span>
                  <span className="text-emerald-400 font-bold">88%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" data-width="88%" style={{width: 0}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">REST APIs</span>
                  <span className="text-emerald-400 font-bold">85%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" data-width="85%" style={{width: 0}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Prisma ORM</span>
                  <span className="text-emerald-400 font-bold">90%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" data-width="90%" style={{width: 0}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <span className="material-symbols-outlined text-2xl">database</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Data Management</h4>
                <p className="text-slate-500 text-sm">Database & Organization</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">PostgreSQL</span>
                  <span className="text-amber-400 font-bold">82%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" data-width="82%" style={{width: 0}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">MongoDB</span>
                  <span className="text-amber-400 font-bold">78%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" data-width="78%" style={{width: 0}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">MySQL</span>
                  <span className="text-amber-400 font-bold">80%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" data-width="80%" style={{width: 0}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
