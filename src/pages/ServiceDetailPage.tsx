import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, HardHat, Home, PenTool, ClipboardList, Banknote, Phone, Mail } from 'lucide-react'
import gsap from 'gsap'
import { services, getServiceById } from '../data/services'

const iconMap: Record<string, React.ElementType> = {
  MapPin, HardHat, Home, PenTool, ClipboardList, Banknote
}

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const contentRef = useRef<HTMLDivElement>(null)

  const service = getServiceById(id || '')
  const ServiceIcon = service ? iconMap[service.icon] || Home : Home

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!contentRef.current || !service) return
    const ctx = gsap.context(() => {
      const els = contentRef.current?.querySelectorAll('.service-detail-animate')
      els?.forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, delay: i * 0.08, ease: 'power2.out',
        })
      })
    }, contentRef)
    return () => ctx.revert()
  }, [service])

  if (!service) {
    return (
      <main className="min-h-screen bg-grey-bg flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-h2 text-navy mb-4">Service Not Found</h2>
          <p className="text-body text-grey-dark mb-8">The service you are looking for does not exist.</p>
          <button onClick={() => navigate('/services')} className="btn-primary">
            View All Services
          </button>
        </div>
      </main>
    )
  }

  const currentIndex = services.findIndex((s) => s.id === service.id)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <main ref={contentRef}>
      {/* Custom Hero */}
      <section className="relative pt-32 pb-12 bg-navy text-white overflow-hidden">
        {service.image && (
          <div className="absolute inset-0">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
          </div>
        )}
        <div className="container-immopro relative z-10">
          <button
            onClick={() => navigate('/services')}
            className="service-detail-animate flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            style={{ opacity: 0 }}
          >
            <ArrowLeft size={18} />
            <span className="text-body">Back to All Services</span>
          </button>

          <div className="service-detail-animate flex items-center gap-4 mb-4" style={{ opacity: 0 }}>
            <ServiceIcon size={40} className="text-cyan" />
            <h1 className="text-h1 text-white uppercase font-display">{service.title}</h1>
          </div>
          <p className="service-detail-animate text-body-lg text-white/70 max-w-[60ch]" style={{ opacity: 0 }}>
            {service.shortDesc}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-section bg-white">
        <div className="container-immopro">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
            {/* Left Column */}
            <div>
              <h3 className="service-detail-animate text-h3 text-navy uppercase font-display mb-6" style={{ opacity: 0 }}>
                Overview
              </h3>
              <p className="service-detail-animate text-body-lg text-grey-dark mb-12" style={{ opacity: 0 }}>
                {service.fullDesc}
              </p>

              {/* Process */}
              <h3 className="service-detail-animate text-h3 text-navy uppercase font-display mb-6" style={{ opacity: 0 }}>
                Our Process
              </h3>
              <div className="space-y-4">
                {service.process.map((item, i) => (
                  <div key={i} className="service-detail-animate flex gap-4" style={{ opacity: 0 }}>
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center">
                      <span className="text-body text-cyan font-display font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h5 className="text-h5 text-navy font-display mb-1">{item.title}</h5>
                      <p className="text-body text-grey-dark">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* What We Offer */}
              <div className="service-detail-animate bg-grey-offwhite rounded-[2rem] p-8 mb-6" style={{ opacity: 0 }}>
                <h4 className="text-h4 text-navy uppercase font-display mb-6">What We Offer</h4>
                <div className="space-y-4">
                  {service.whatWeOffer.map((item, i) => {
                    const [title, desc] = item.split(' — ')
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-cyan flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-body text-navy font-medium">{title}</p>
                          {desc && <p className="text-body-sm text-grey-dark">{desc}</p>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="service-detail-animate bg-navy rounded-[2rem] p-8 text-white mb-6" style={{ opacity: 0 }}>
                <h4 className="text-h4 text-white uppercase font-display mb-6">Why Choose Us</h4>
                <div className="space-y-3">
                  {service.whyChoose.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-body text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="service-detail-animate bg-cyan rounded-[2rem] p-8 text-white" style={{ opacity: 0 }}>
                <h4 className="text-h5 text-white uppercase font-display mb-3">
                  Ready to Get Started?
                </h4>
                <p className="text-body text-white/80 mb-6">
                  Contact our team to discuss your project and how we can help.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+256701234567"
                    className="flex items-center gap-3 bg-white text-cyan px-6 py-3 rounded-[12px] text-body font-medium hover:bg-navy hover:text-white transition-all duration-300"
                  >
                    <Phone size={18} />
                    +256 701 234 567
                  </a>
                  <a
                    href="mailto:info@immopro.ug"
                    className="flex items-center gap-3 bg-white/10 text-white px-6 py-3 rounded-[12px] text-body font-medium hover:bg-white hover:text-cyan transition-all duration-300"
                  >
                    <Mail size={18} />
                    info@immopro.ug
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-grey-bg border-t border-grey-light">
        <div className="container-immopro flex justify-between items-center">
          {prevService ? (
            <button
              onClick={() => navigate(`/services/${prevService.id}`)}
              className="flex items-center gap-3 text-grey-dark hover:text-navy transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <p className="text-body-sm text-grey-medium">Previous Service</p>
                <p className="text-body font-medium">{prevService.title}</p>
              </div>
            </button>
          ) : <div />}
          {nextService ? (
            <button
              onClick={() => navigate(`/services/${nextService.id}`)}
              className="flex items-center gap-3 text-grey-dark hover:text-navy transition-colors group"
            >
              <div className="text-right">
                <p className="text-body-sm text-grey-medium">Next Service</p>
                <p className="text-body font-medium">{nextService.title}</p>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : <div />}
        </div>
      </section>
    </main>
  )
}
