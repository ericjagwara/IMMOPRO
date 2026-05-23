import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  'Founded in 2023 in Kampala, Uganda',
  'Client-funded, transparent process',
  'Flexible payment plans',
  'Diaspora-friendly services',
  'Quality-assured construction',
  'End-to-end project management',
]

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Image parallax
      gsap.fromTo(
        imageRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Content stagger
      const contentEls = contentRef.current?.querySelectorAll('.story-animate')
      contentEls?.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.2 + i * 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="story" ref={sectionRef} className="py-section bg-grey-bg">
      <div className="container-immopro">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="relative" style={{ opacity: 0 }}>
            <div className="relative rounded-[2rem] overflow-hidden">
              <img
                src="/images/story-family.jpg"
                alt="Happy family on their balcony"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 flex items-center justify-around">
                <div className="text-center">
                  <p className="text-h3 text-navy font-display">50+</p>
                  <p className="text-body-sm text-grey-dark">Projects</p>
                </div>
                <div className="w-px h-12 bg-grey-light" />
                <div className="text-center">
                  <p className="text-h3 text-navy font-display">200+</p>
                  <p className="text-body-sm text-grey-dark">Happy Clients</p>
                </div>
                <div className="w-px h-12 bg-grey-light" />
                <div className="text-center">
                  <p className="text-h3 text-navy font-display">8</p>
                  <p className="text-body-sm text-grey-dark">House Plans</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-cyan rounded-[2rem] -z-10" />
          </div>

          {/* Content Column */}
          <div ref={contentRef}>
            <p className="story-animate text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4">
              About Us
            </p>
            <h2 className="story-animate text-h2 text-navy uppercase font-display mb-6">
              Whatever<br />It Takes
            </h2>
            <p className="story-animate text-body-lg text-grey-dark mb-8 max-w-[50ch]">
              Immopro Limited is a premier property development company based in Uganda, 
              dedicated to transforming the real estate landscape with innovative, sustainable, 
              and community-focused projects.
            </p>

            {/* Highlights list */}
            <div className="story-animate grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-cyan flex-shrink-0" />
                  <span className="text-body text-grey-dark">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#/our-story"
              className="story-animate inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-cyan transition-all duration-500 group"
            >
              Discover Our Story
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
