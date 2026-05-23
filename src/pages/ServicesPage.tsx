import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, HardHat, Home, PenTool, ClipboardList, Banknote, ArrowRight, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { services } from '../data/services'

gsap.registerPlugin(ScrollTrigger)

const serviceIcons = [MapPin, HardHat, Home, PenTool, ClipboardList, Banknote]

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We discuss your vision, budget, and timeline to understand your needs.' },
  { step: '02', title: 'Planning', desc: 'Our team creates a detailed plan including designs, budgets, and schedules.' },
  { step: '03', title: 'Execution', desc: 'We implement the plan with regular updates and quality checks.' },
  { step: '04', title: 'Delivery', desc: 'Your completed project is handed over with full documentation.' },
]

interface ServicesPageProps {
  onEnquire: () => void
}

export default function ServicesPage({ onEnquire }: ServicesPageProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.service-animate')
      cards?.forEach((card, i) => {
        gsap.fromTo(card, { y: 80, opacity: 0 }, {
          opacity: 1, y: 0, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={sectionRef}>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive property development solutions tailored to your vision and budget. From land acquisition to construction management, we handle it all."
        breadcrumb="Services"
        bgImage="/images/project-aurora.jpg"
      />

      {/* Services Grid */}
      <section className="py-section bg-white">
        <div className="container-immopro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const ServiceIcon = serviceIcons[i]
              return (
                <div
                  key={service.id}
                  className="service-animate group bg-grey-offwhite rounded-[2rem] p-8 lg:p-10 hover:bg-navy transition-all duration-500 cursor-pointer"
                  style={{ opacity: 0 }}
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <div className="flex items-start gap-6">
                    <ServiceIcon
                      size={40}
                      className="text-cyan flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="text-h4 text-navy uppercase font-display mb-3 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-body text-grey-dark group-hover:text-white/70 transition-colors duration-300">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-section bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan/10 rounded-full" />
        <div className="container-immopro relative z-10">
          <div className="text-center mb-16">
            <p className="service-animate text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4" style={{ opacity: 0 }}>
              How We Work
            </p>
            <h2 className="service-animate text-h2 text-white uppercase font-display" style={{ opacity: 0 }}>
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={i} className="service-animate relative" style={{ opacity: 0 }}>
                <span className="text-h1 text-cyan/20 font-display mb-4 block">{item.step}</span>
                <h4 className="text-h4 text-white uppercase font-display mb-3">{item.title}</h4>
                <p className="text-body text-white/60">{item.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-[1px] bg-white/10" style={{ marginRight: '-2rem' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section bg-grey-bg">
        <div className="container-immopro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="service-animate text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4" style={{ opacity: 0 }}>
                Why Immopro
              </p>
              <h2 className="service-animate text-h2 text-navy uppercase font-display mb-6" style={{ opacity: 0 }}>
                Why Choose Us
              </h2>
              <div className="service-animate space-y-4" style={{ opacity: 0 }}>
                {[
                  'Transparent pricing with no hidden costs',
                  'Flexible payment plans tailored to your budget',
                  'Quality materials and expert craftsmanship',
                  'Dedicated project managers for every client',
                  'Regular progress updates and site visits',
                  'Diaspora-friendly communication and payments',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle size={20} className="text-cyan flex-shrink-0" />
                    <span className="text-body-lg text-grey-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="service-animate rounded-[2rem] overflow-hidden" style={{ opacity: 0 }}>
              <img src="/images/project-enclave.jpg" alt="Our work" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-cyan text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/10" />
        <div className="container-immopro text-center relative z-10">
          <h2 className="service-animate text-h2 text-white uppercase font-display mb-6" style={{ opacity: 0 }}>
            Ready to Start Your Project?
          </h2>
          <p className="service-animate text-body-lg text-white/80 max-w-[55ch] mx-auto mb-10" style={{ opacity: 0 }}>
            Let us discuss your vision. Our team is ready to guide you from concept to completion.
          </p>
          <button
            onClick={onEnquire}
            className="service-animate group flex items-center gap-3 bg-white text-cyan px-10 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-navy hover:text-white transition-all duration-500 mx-auto"
            style={{ opacity: 0 }}
          >
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  )
}
