import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Bed, Bath, Square, ArrowLeft, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'
import gsap from 'gsap'
import { housePlans, getPlanById } from '../data/housePlans'

export default function HousePlanDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const contentRef = useRef<HTMLDivElement>(null)

  const plan = getPlanById(id || '')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!contentRef.current || !plan) return
    const ctx = gsap.context(() => {
      const els = contentRef.current?.querySelectorAll('.detail-animate')
      els?.forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, delay: i * 0.08, ease: 'power2.out',
        })
      })
    }, contentRef)
    return () => ctx.revert()
  }, [plan])

  if (!plan) {
    return (
      <main className="min-h-screen bg-grey-bg flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-h2 text-navy mb-4">Plan Not Found</h2>
          <p className="text-body text-grey-dark mb-8">The house plan you are looking for does not exist.</p>
          <button onClick={() => navigate('/house-plans')} className="btn-primary">
            View All Plans
          </button>
        </div>
      </main>
    )
  }

  const currentIndex = housePlans.findIndex((p) => p.id === plan.id)
  const prevPlan = currentIndex > 0 ? housePlans[currentIndex - 1] : null
  const nextPlan = currentIndex < housePlans.length - 1 ? housePlans[currentIndex + 1] : null

  return (
    <main ref={contentRef}>
      {/* Custom Hero */}
      <section className="relative pt-32 pb-12 bg-navy text-white overflow-hidden">
        {plan.image && (
          <div className="absolute inset-0">
            <img src={plan.image} alt={plan.name} className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
          </div>
        )}
        <div className="container-immopro relative z-10">
          <button
            onClick={() => navigate('/house-plans')}
            className="detail-animate flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            style={{ opacity: 0 }}
          >
            <ArrowLeft size={18} />
            <span className="text-body">Back to All Plans</span>
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="detail-animate bg-cyan text-white text-body-sm uppercase px-3 py-1 rounded-md font-medium" style={{ opacity: 0 }}>
              {plan.category}
            </span>
            <span className="detail-animate bg-white/10 text-white/80 text-body-sm px-3 py-1 rounded-md" style={{ opacity: 0 }}>
              Plan {plan.planCode}
            </span>
          </div>

          <h1 className="detail-animate text-h1 text-white uppercase font-display mb-2" style={{ opacity: 0 }}>
            {plan.name}
          </h1>
          <p className="detail-animate text-body-lg text-white/70" style={{ opacity: 0 }}>
            {plan.tagline}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-grey-bg to-transparent" />
      </section>

      {/* Content */}
      <section className="py-section bg-grey-bg">
        <div className="container-immopro">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
            {/* Left Column */}
            <div>
              {/* Image */}
              <div className="detail-animate rounded-[2rem] overflow-hidden mb-8" style={{ opacity: 0 }}>
                <img src={plan.image} alt={plan.name} className="w-full aspect-[16/10] object-cover" />
              </div>

              {/* Description */}
              <h3 className="detail-animate text-h3 text-navy uppercase font-display mb-4" style={{ opacity: 0 }}>
                About This Plan
              </h3>
              <p className="detail-animate text-body-lg text-grey-dark mb-8" style={{ opacity: 0 }}>
                {plan.description}
              </p>

              {/* Floor Plan */}
              <h3 className="detail-animate text-h3 text-navy uppercase font-display mb-4" style={{ opacity: 0 }}>
                Floor Plan Layout
              </h3>
              <p className="detail-animate text-body text-grey-dark mb-6" style={{ opacity: 0 }}>
                {plan.floorPlanDescription}
              </p>

              {/* Room List */}
              <div className="detail-animate bg-white rounded-[1.5rem] overflow-hidden" style={{ opacity: 0 }}>
                <div className="grid grid-cols-2 divide-x divide-y divide-grey-light">
                  {plan.rooms.map((room, i) => (
                    <div key={i} className="p-4 flex justify-between items-center">
                      <span className="text-body text-navy font-medium">{room.name}</span>
                      <span className="text-body-sm text-grey-medium">{room.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Quick Specs */}
              <div className="detail-animate bg-navy rounded-[2rem] p-8 text-white mb-6" style={{ opacity: 0 }}>
                <p className="text-body-sm text-white/50 uppercase tracking-wider mb-6">Quick Specifications</p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {plan.beds > 0 && (
                    <div className="text-center">
                      <Bed size={28} className="text-cyan mx-auto mb-2" />
                      <p className="text-h4 font-display">{plan.beds}</p>
                      <p className="text-body-sm text-white/60">Beds</p>
                    </div>
                  )}
                  <div className="text-center">
                    <Bath size={28} className="text-cyan mx-auto mb-2" />
                    <p className="text-h4 font-display">{plan.baths}</p>
                    <p className="text-body-sm text-white/60">Baths</p>
                  </div>
                  <div className="text-center">
                    <Square size={28} className="text-cyan mx-auto mb-2" />
                    <p className="text-h4 font-display">{plan.area}</p>
                    <p className="text-body-sm text-white/60">m&sup2;</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-body-sm text-white/50 mb-1">Starting Price</p>
                  <p className="text-h3 text-cyan font-display">UGX {plan.price}</p>
                </div>
              </div>

              {/* Features */}
              <div className="detail-animate bg-white rounded-[2rem] p-8 mb-6" style={{ opacity: 0 }}>
                <h4 className="text-h5 text-navy uppercase font-display mb-6">Key Features</h4>
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-body text-grey-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquire CTA */}
              <div className="detail-animate bg-cyan rounded-[2rem] p-8 text-white" style={{ opacity: 0 }}>
                <h4 className="text-h5 text-white uppercase font-display mb-3">
                  Interested in This Plan?
                </h4>
                <p className="text-body text-white/80 mb-6">
                  Contact our team to discuss pricing, customization options, and timelines.
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
      <section className="py-8 bg-white border-t border-grey-light">
        <div className="container-immopro flex justify-between items-center">
          {prevPlan ? (
            <button
              onClick={() => navigate(`/house-plans/${prevPlan.id}`)}
              className="flex items-center gap-3 text-grey-dark hover:text-navy transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <p className="text-body-sm text-grey-medium">Previous</p>
                <p className="text-body font-medium">{prevPlan.name} — {prevPlan.planCode}</p>
              </div>
            </button>
          ) : <div />}
          {nextPlan ? (
            <button
              onClick={() => navigate(`/house-plans/${nextPlan.id}`)}
              className="flex items-center gap-3 text-grey-dark hover:text-navy transition-colors group"
            >
              <div className="text-right">
                <p className="text-body-sm text-grey-medium">Next</p>
                <p className="text-body font-medium">{nextPlan.name} — {nextPlan.planCode}</p>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : <div />}
        </div>
      </section>
    </main>
  )
}
