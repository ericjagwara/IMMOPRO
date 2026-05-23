import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      )

      // Parallax on scroll
      gsap.to(overlayRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100svh] overflow-hidden bg-navy"
    >
      {/* Background Image with Parallax */}
      <div
        ref={overlayRef}
        className="absolute inset-0 w-full h-[120%]"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/images/hero-main.jpg"
          alt="Luxury property at sunset"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: 0 }}
      >
        {/* Tagline */}
        <p className="text-body-lg uppercase tracking-[0.3em] text-cyan mb-6 font-medium">
          Premium Property Development
        </p>

        {/* Main Headline */}
        <h1 className="text-[clamp(3.6rem,10vw,10rem)] font-display uppercase text-white leading-[0.95] tracking-tight mb-4">
          Whatever
          <br />
          <span className="text-cyan">It Takes</span>
        </h1>

        {/* Subtitle */}
        <p className="text-body-lg text-white/80 max-w-[55ch] mb-10 font-accent italic">
          Making homeownership possible for everyone. From concept to completion, 
          we walk with you every step of the way.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => navigate('/house-plans')}
            className="group flex items-center gap-3 bg-cyan text-white px-8 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-white hover:text-navy transition-all duration-500"
          >
            Explore House Plans
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-white hover:text-navy transition-all duration-500"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-body-sm uppercase tracking-wider">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 z-[5]"
        style={{ background: 'linear-gradient(to bottom, transparent, #F3F3F3)' }}
      />
    </section>
  )
}
