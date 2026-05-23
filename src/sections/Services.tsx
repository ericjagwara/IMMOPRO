import { useEffect, useRef } from 'react'
import { MapPin, HardHat, Home, PenTool, ClipboardList, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: MapPin,
    title: 'Land Acquisition',
    description: 'We identify, verify, and secure prime land parcels with proper documentation and due diligence, ensuring your investment is protected from day one.',
    features: ['Land Survey', 'Title Verification', 'Due Diligence', 'Negotiation'],
  },
  {
    icon: HardHat,
    title: 'Construction',
    description: 'From foundation to finish, our expert team manages every phase of construction with precision, quality materials, and transparent progress reporting.',
    features: ['Project Management', 'Quality Control', 'Timeline Tracking', 'Handover'],
  },
  {
    icon: Home,
    title: 'Renovation',
    description: 'Transform existing properties into modern, functional spaces that meet contemporary standards and maximize value.',
    features: ['Design Upgrade', 'Structural Work', 'Modern Finishes', 'Value Addition'],
  },
  {
    icon: PenTool,
    title: 'Property Management',
    description: 'Comprehensive management services to protect your investment, handle tenant relations, and ensure optimal returns.',
    features: ['Tenant Screening', 'Rent Collection', 'Maintenance', 'Reporting'],
  },
  {
    icon: ClipboardList,
    title: 'Project Planning',
    description: 'Expert guidance from concept to completion, helping you define your dream project and create a realistic roadmap.',
    features: ['Feasibility Study', 'Budget Planning', 'Design Consultation', 'Permits'],
  },
  {
    icon: MapPin,
    title: 'Flexible Payments',
    description: 'Custom payment plans designed around your earning cycle, making homeownership accessible without needing a fortune upfront.',
    features: ['Custom Plans', 'Milestone Payments', 'Diaspora Friendly', 'No Hidden Costs'],
  },
]

export default function Services() {
  const headerRef = useScrollAnimation(0.1)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card')
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.1,
          }
        )
      })
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="py-section bg-navy text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-immopro relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="animate-on-scroll text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4">
            What We Do
          </p>
          <h2 className="animate-on-scroll text-h2 text-white uppercase font-display mb-6">
            Our Services
          </h2>
          <p className="animate-on-scroll text-body-lg text-white/70 max-w-[60ch] mx-auto">
            From land acquisition to construction management, we offer comprehensive 
            real estate solutions tailored to your vision and budget.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-cyan/30 transition-all duration-500"
              style={{ opacity: 0 }}
            >
              <service.icon
                size={40}
                className="text-cyan mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              <h4 className="text-h4 text-white font-display uppercase mb-4">
                {service.title}
              </h4>
              <p className="text-body text-white/60 mb-6">
                {service.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, j) => (
                  <span
                    key={j}
                    className="text-body-sm text-cyan/80 bg-cyan/10 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-cyan text-body-sm font-medium group/btn">
                <span className="relative">
                  Learn More
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan origin-left scale-x-100 group-hover/btn:scale-x-0 transition-transform duration-500" />
                </span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
