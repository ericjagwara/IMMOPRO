import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowRight, Send } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+256 701 234 567', href: 'tel:+256701234567' },
  { icon: Mail, label: 'Email', value: 'info@immopro.ug', href: 'mailto:info@immopro.ug' },
  { icon: MapPin, label: 'Address', value: 'Kampala, Uganda', href: '#' },
]

const officeHours = [
  { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll('.contact-animate')
      els?.forEach((el, i) => {
        gsap.fromTo(el, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main ref={sectionRef}>
      <PageHero
        title="Contact Us"
        subtitle="Ready to start your property journey? Get in touch with our team and let's discuss how we can help turn your vision into reality."
        breadcrumb="Contact"
        bgImage="/images/hero-img-3.jpg"
      />

      {/* Contact Grid */}
      <section className="py-section bg-grey-bg">
        <div className="container-immopro">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
            {/* Left Column - Info */}
            <div>
              <div className="contact-animate" style={{ opacity: 0 }}>
                <p className="text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4">
                  Get in Touch
                </p>
                <h2 className="text-h2 text-navy uppercase font-display mb-6">
                  Let&apos;s Talk
                </h2>
                <p className="text-body-lg text-grey-dark mb-8">
                  Whether you have questions about our services, want to discuss a project, 
                  or just want to say hello, we would love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="contact-animate flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-card transition-all duration-300 group"
                    style={{ opacity: 0 }}
                  >
                    <item.icon size={24} className="text-cyan group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-body-sm text-grey-medium">{item.label}</p>
                      <p className="text-body text-navy font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="contact-animate bg-white rounded-[2rem] p-6 mb-8" style={{ opacity: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-cyan" />
                  <h4 className="text-h5 text-navy uppercase font-display">Office Hours</h4>
                </div>
                <div className="space-y-2">
                  {officeHours.map((item, i) => (
                    <div key={i} className="flex justify-between text-body">
                      <span className="text-grey-dark">{item.day}</span>
                      <span className={item.hours === 'Closed' ? 'text-error' : 'text-navy font-medium'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-animate" style={{ opacity: 0 }}>
                <p className="text-body-sm text-grey-medium mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center hover:bg-cyan transition-colors duration-300"
                      aria-label={item.label}
                    >
                      <item.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="contact-animate bg-white rounded-[2rem] p-8 lg:p-12" style={{ opacity: 0 }}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-cyan" />
                  </div>
                  <h3 className="text-h3 text-navy mb-4">Thank You!</h3>
                  <p className="text-body-lg text-grey-dark">
                    We have received your message and our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-h3 text-navy font-display mb-2">Send a Message</h3>
                  <p className="text-body text-grey-dark mb-8">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors"
                      />
                    </div>
                    <select
                      required
                      className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a Service</option>
                      <option value="land">Land Acquisition</option>
                      <option value="construction">Construction</option>
                      <option value="renovation">Renovation</option>
                      <option value="management">Property Management</option>
                      <option value="planning">Project Planning</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="w-full px-6 py-4 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors resize-none"
                    />
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-1" />
                      <span className="text-body-sm text-grey-dark">
                        I agree to the privacy policy and consent to being contacted regarding my enquiry.
                      </span>
                    </label>
                    <button
                      type="submit"
                      className="w-full py-4 bg-navy text-white rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-cyan transition-colors duration-500 flex items-center justify-center gap-3 group"
                    >
                      Send Message
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="contact-animate relative h-[400px] bg-grey-light overflow-hidden" style={{ opacity: 0 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-cyan mx-auto mb-4" />
            <p className="text-h4 text-navy font-display">Kampala, Uganda</p>
            <p className="text-body text-grey-dark">Visit our office during business hours</p>
          </div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </section>
    </main>
  )
}
