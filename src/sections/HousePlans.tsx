import { useEffect, useRef } from 'react'
import { Bed, Bath, Square, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  { name: 'The Haven', beds: 3, baths: 2, area: 180, price: '150M', image: '/images/plan-haven.jpg', category: 'Single-Storey' },
  { name: 'The Legacy', beds: 4, baths: 3, area: 280, price: '280M', image: '/images/plan-legacy.jpg', category: 'Double-Storey' },
  { name: 'The Summit', beds: 5, baths: 4, area: 400, price: '450M', image: '/images/plan-summit.jpg', category: 'Villa' },
  { name: 'The Nest', beds: 2, baths: 1, area: 95, price: '95M', image: '/images/plan-nest.jpg', category: 'Compact' },
]

export default function HousePlans() {
  const sectionRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header
      const headerEls = sectionRef.current?.querySelectorAll('.plans-header')
      headerEls?.forEach((el, i) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' }
        })
      })

      // Cards stagger
      const cards = sectionRef.current?.querySelectorAll('.plan-card')
      cards?.forEach((card, i) => {
        gsap.fromTo(card, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: 0.3 + i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-section bg-white">
      <div className="container-immopro">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <p className="plans-header text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4" style={{ opacity: 0 }}>
              Browse Our Collection
            </p>
            <h2 className="plans-header text-h2 text-navy uppercase font-display" style={{ opacity: 0 }}>
              House Plans
            </h2>
          </div>
          <p className="plans-header text-body-lg text-grey-dark max-w-[45ch]" style={{ opacity: 0 }}>
            Discover our range of thoughtfully designed home layouts, crafted for modern living in Uganda.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="plan-card group bg-grey-offwhite rounded-[17px] shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ opacity: 0 }}
              onClick={() => navigate('/house-plans')}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-navy text-white text-body-sm uppercase px-3 py-1 rounded-md font-medium">
                  {plan.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-h4 text-navy uppercase font-display mb-3">{plan.name}</h4>
                <div className="flex gap-4 mb-4 text-body-sm text-grey-medium">
                  <span className="flex items-center gap-1">
                    <Bed size={16} /> {plan.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={16} /> {plan.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square size={16} /> {plan.area}m&sup2;
                  </span>
                </div>
                <div className="border-t border-grey-light pt-4 flex items-center justify-between">
                  <p className="text-h5 text-cyan">From UGX {plan.price}</p>
                  <ArrowRight size={18} className="text-grey-medium group-hover:text-cyan group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/house-plans')}
            className="inline-flex items-center gap-3 bg-navy text-white px-10 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-cyan transition-all duration-500 group"
          >
            View All House Plans
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
