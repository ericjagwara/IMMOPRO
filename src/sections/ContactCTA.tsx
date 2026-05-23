import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ContactCTAProps {
  onEnquire: () => void
}

export default function ContactCTA({ onEnquire }: ContactCTAProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll('.cta-animate')
      els?.forEach((el, i) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-section bg-cyan text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/10" />

      <div className="container-immopro max-w-[80rem] text-center relative z-10">
        <p className="cta-animate text-white/80 uppercase tracking-[0.3em] text-body-sm font-medium mb-4" style={{ opacity: 0 }}>
          Start Your Journey
        </p>
        <h2 className="cta-animate text-h2 text-white uppercase font-display mb-6" style={{ opacity: 0 }}>
          Ready to Build<br />Your Dream?
        </h2>
        <p className="cta-animate text-body-lg text-white/80 max-w-[55ch] mx-auto mb-10" style={{ opacity: 0 }}>
          Let&apos;s discuss your vision. Our team is ready to guide you from concept to completion.
        </p>
        <div className="cta-animate flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <button
            onClick={onEnquire}
            className="group flex items-center gap-3 bg-white text-cyan px-10 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-navy hover:text-white transition-all duration-500"
          >
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:+256701234567"
            className="flex items-center gap-3 border border-white/40 text-white px-10 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-white hover:text-cyan transition-all duration-500"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
