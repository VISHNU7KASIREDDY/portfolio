import { useState, useEffect } from 'react'
import Hero from './components/sections/Hero/Hero'
import TechStack from './components/sections/TechStack/TechStack'
import Journey from './components/sections/Journey/Journey'
import Projects from './components/sections/Projects/Projects'
import Resume from './components/sections/Resume/Resume'
import Skills from './components/sections/Skills/Skills'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/sections/Footer/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'resume', 'skills', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-200 transition-colors duration-300 overflow-x-hidden">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-6">
        <nav className="flex items-center justify-between w-full max-w-[1200px] glass-card px-8 py-3 rounded-full border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="size-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-[22px]">code</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight hidden sm:block">VVR.dev</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['home', 'projects', 'resume', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-semibold transition-colors capitalize ${
                  activeSection === section ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="Kasireddy_Vishnu_Vardhan_Reddy_Resume.pdf"
              className="bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full text-xs font-bold transition-all border border-white/10"
            >
              RESUME
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Hero scrollToSection={scrollToSection} />
        <TechStack />
        <Journey scrollToSection={scrollToSection} />
        <Projects />
        <Resume />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
