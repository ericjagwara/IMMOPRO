import { useEffect, useRef, useState } from 'react'
import { Quote } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote:
      'Immopro made our dream of owning a family home a reality. Their flexible payment plan and transparent process gave us confidence every step of the way.',
    name: 'Sarah & David Okello',
    detail: 'Homeowners, The Aurora',
    avatar: '/images/avatar-sarah.jpg',
  },
  {
    quote:
      'As a diaspora investor, I needed a team I could trust. Immopro handled everything from land acquisition to construction, keeping me informed throughout.',
    name: 'James Mugabi',
    detail: 'Investor, United Kingdom',
    avatar: '/images/avatar-james.jpg',
  },
  {
    quote:
      'The quality of construction and attention to detail exceeded our expectations. Immopro delivered on every promise.',
    name: 'Dr. Patricia Nansubuga',
    detail: 'Homeowner, The Enclave',
    avatar: '/images/avatar-patricia.jpg',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const timerRef = useRef<number | undefined>(undefined)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timerRef.current)
  }, [isVisible])

  const goToSlide = (index: number) => {
    setActive(index)
    clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
  }

  // Header animation
  useEffect(() => {
    if (!headerRef.current || !sectionRef.current) return
    const ctx = gsap.context(() => {
      const els = headerRef.current?.querySelectorAll('.testimonial-header')
      els?.forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-section bg-navy text-white relative overflow-hidden">
      {/* Decorative quote */}
      <Quote size={200} className="absolute top-20 left-20 text-white/5" />

      <div className="container-immopro max-w-[80rem] relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="testimonial-header text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4" style={{ opacity: 0 }}>
            Testimonials
          </p>
          <h2 className="testimonial-header text-h2 text-white uppercase font-display" style={{ opacity: 0 }}>
            Client Stories
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[350px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-700 ${
                i === active ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 z-0'
              }`}
            >
              <blockquote className="text-body-lg lg:text-h4 text-white/90 italic font-accent max-w-[65ch] mb-12 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-cyan"
                />
                <div className="text-left">
                  <p className="text-h5 text-white font-display">{t.name}</p>
                  <p className="text-body text-cyan/70">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-3 rounded-full transition-all duration-500 ${
                i === active
                  ? 'bg-cyan w-10'
                  : 'bg-white/30 w-3 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
