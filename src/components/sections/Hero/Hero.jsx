export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 size-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 size-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold leading-[1] tracking-tight text-white mb-8">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital</span> Narratives.
          </h1>
          <div className="space-y-6 max-w-2xl">
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Hi, I'm Vishnu Vardhan. I don't just write code; I build <span className="text-white font-medium italic underline decoration-primary/40 underline-offset-4">seamless bridges</span> between complex logic and human-centric design.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Second-year B.Tech CSE (AI & ML) student with a strong foundation in MERN stack and full-stack web development. Experienced in building responsive applications using React, Node.js, Express, MongoDB, Prisma ORM, and MySQL, with a strong problem-solving mindset. Passionate about learning, collaboration, and applying technology to real-world problems.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 mt-10">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-primary/40 flex items-center gap-3"
            >
              See My Projects <span className="material-symbols-outlined">south</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="glass-card hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all text-white border-white/20"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-blue-600/20">
              <div className="text-center">
                <div className="size-32 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-7xl text-white">person</span>
                </div>
                <p className="text-white text-2xl font-bold">Vishnu Vardhan</p>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-sm font-bold text-primary mb-1">Based in Pune, India</p>
              <p className="text-2xl font-extrabold text-white">Engineering Excellence</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-10 glass-card p-4 rounded-2xl shadow-2xl z-30 border border-white/20 animate-bounce">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Current Status</p>
                <p className="text-sm font-bold text-white">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
