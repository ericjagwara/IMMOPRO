import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb: string
  bgImage?: string
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,

  bgImage,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll('.page-hero-animate')
      els?.forEach((el, i) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: 0.1 + i * 0.15, ease: 'power2.out',
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative pt-40 pb-16 bg-navy text-white overflow-hidden"
    >
      {/* Background image if provided */}
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy" />
        </div>
      )}

      <div className="container-immopro relative z-10">
        <nav className="page-hero-animate text-body-sm text-white/60 mb-6" style={{ opacity: 0 }}>
          <Link to="/" className="text-cyan hover:underline">Home</Link>
          {' / '}
          <span className="text-white/60">{breadcrumb}</span>
        </nav>

        <h1
          className="page-hero-animate text-h1 text-white uppercase font-display mb-4"
          style={{ opacity: 0 }}
        >
          {title}
        </h1>
        <p
          className="page-hero-animate text-body-lg text-white/70 max-w-[60ch]"
          style={{ opacity: 0 }}
        >
          {subtitle}
        </p>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-grey-bg to-transparent" />
    </section>
  )
}
