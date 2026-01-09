import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // 🔍 DEBUG: Check what data we're sending
    console.log('📋 Sending Data:', formData)
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' })
      setIsSubmitting(false)
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' })
      setIsSubmitting(false)
      return
    }
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.fullName,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setSubmitStatus({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' })
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Connect.</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">I'm currently looking for opportunities and would love to hear about your team. Whether you have a question or just want to say hi, my inbox is always open!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-white font-semibold mb-2">Full Name</label>
                <input type="text" id="full-name" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" required/>
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@example.com" required/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" required>
                  <option value="">Select a topic</option>
                  <option value="job">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="question">Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Tell me about your project or just say hello..." required></textarea>
              </div>
              {submitStatus && (
                <div className={`p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}>
                  <p className="text-sm font-semibold">{submitStatus.message}</p>
                </div>
              )}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span> Sending...
                  </>
                ) : (
                  <>
                    Send Message <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Directory */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-xl font-bold text-white mb-6">Social Directory</h4>
              <div className="space-y-4">
                <a href="https://github.com/VISHNU7KASIREDDY" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-900/30 rounded-xl border border-white/5 hover:border-primary/40 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-white">code</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">GitHub</p>
                      <p className="text-slate-500 text-sm">VISHNU7KASIREDDY</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">arrow_outward</span>
                </a>
                <a href="https://www.linkedin.com/in/vishnu-k-86810a334" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-900/30 rounded-xl border border-white/5 hover:border-primary/40 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-white">work</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">LinkedIn</p>
                      <p className="text-slate-500 text-sm">vishnu-k-86810a334</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">arrow_outward</span>
                </a>
                <a href="mailto:vishnukasireddy28@gmail.com" className="flex items-center justify-between p-4 bg-slate-900/30 rounded-xl border border-white/5 hover:border-primary/40 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-white">mail</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Email</p>
                      <p className="text-slate-500 text-sm">vishnukasireddy28@gmail.com</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">location_on</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Based In</p>
                  <p className="text-slate-400">Pune, India</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm">Open to remote & relocation opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
