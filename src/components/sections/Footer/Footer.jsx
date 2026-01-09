export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined">code</span>
              </div>
              <span className="text-xl font-black text-white">VVR.dev</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">Building high-performance web applications with a focus on user experience and clean architecture.</p>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-4 rounded-2xl flex items-center gap-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-tighter">Availability</p>
              <p className="text-sm font-bold text-white">Open for Opportunities</p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">© 2026 Vishnu Vardhan Portfolio • Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
