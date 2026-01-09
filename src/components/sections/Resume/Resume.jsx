export default function Resume() {
  return (
    <section id="resume" className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Professional Journey</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Resume</h3>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pb-8 border-b border-white/10">
            <h4 className="text-3xl font-extrabold text-white mb-2">Kasireddy Vishnu Vardhan Reddy</h4>
            <p className="text-primary font-bold mb-4">Full-Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <a href="tel:+916309321021" className="hover:text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">call</span> +91 6309321021
              </a>
              <a href="mailto:vishnukasireddy28@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">mail</span> vishnukasireddy28@gmail.com
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h5 className="text-2xl font-bold text-white">Education</h5>
            </div>
            <div className="ml-13 space-y-4">
              <div className="bg-slate-900/30 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h6 className="text-lg font-bold text-white">B.Tech in AI & ML</h6>
                    <p className="text-slate-400 text-sm">Newton School of Technology</p>
                  </div>
                  <span className="text-primary text-sm font-bold">2021 - 2025</span>
                </div>
                <p className="text-slate-500 text-sm">Grade: 8.79/10</p>
              </div>
              <div className="bg-slate-900/30 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h6 className="text-lg font-bold text-white">Intermediate (Class XII)</h6>
                    <p className="text-slate-400 text-sm">Jawahar Navodaya Vidyalaya, Kadapa</p>
                  </div>
                  <span className="text-primary text-sm font-bold">2021 - 2023</span>
                </div>
                <p className="text-slate-500 text-sm">Grade: 87.6%</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h5 className="text-2xl font-bold text-white">Certifications</h5>
            </div>
            <div className="ml-13">
              <div className="bg-slate-900/30 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h6 className="text-lg font-bold text-white">Fundamentals of AI Deeplearning</h6>
                    <p className="text-slate-400 text-sm">Comprehensive course on AI concepts and applications</p>
                  </div>
                  <span className="text-primary text-sm font-bold">January 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center pt-8 border-t border-white/10">
            <a
              href="/resume.pdf"
              download="Kasireddy_Vishnu_Vardhan_Reddy_Resume.pdf"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-primary/40 flex items-center gap-3 mx-auto w-fit"
            >
              <span className="material-symbols-outlined">download</span> Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
