import { useEffect, useRef } from 'react'
import { CheckCircle, Target, Eye, Heart, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  'Founded in 2023 in Kampala, Uganda',
  'Client-funded, transparent process',
  'Flexible payment plans tailored to you',
  'Diaspora-friendly services',
  'Quality-assured construction',
  'End-to-end project management',
]

const values = [
  { icon: Heart, title: 'Integrity', desc: 'We operate with complete transparency, ensuring every transaction and process is clear and honest.' },
  { icon: Target, title: 'Excellence', desc: 'We pursue the highest standards in design, construction, and client service on every project.' },
  { icon: Eye, title: 'Vision', desc: 'We see potential where others see obstacles, turning challenges into opportunities for growth.' },
]

export default function OurStoryPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll('.story-animate')
      els?.forEach((el, i) => {
        gsap.fromTo(el, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={sectionRef}>
      <PageHero
        title="Our Story"
        subtitle="Born from a passion to make homeownership accessible to every hardworking Ugandan, Immopro has grown into a trusted partner for property development."
        breadcrumb="Our Story"
        bgImage="/images/hero-main.jpg"
      />

      {/* Founding Story */}
      <section className="py-section bg-grey-bg">
        <div className="container-immopro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="story-animate relative" style={{ opacity: 0 }}>
              <div className="rounded-[2rem] overflow-hidden">
                <img src="/images/story-family.jpg" alt="Our journey" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cyan text-white p-8 rounded-[2rem]">
                <p className="text-h3 font-display">2023</p>
                <p className="text-body-sm">Founded in Kampala</p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-cyan rounded-[2rem] -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="story-animate text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4" style={{ opacity: 0 }}>
                Our Journey
              </p>
              <h2 className="story-animate text-h2 text-navy uppercase font-display mb-6" style={{ opacity: 0 }}>
                Building Dreams,<br />One Home at a Time
              </h2>
              <div className="story-animate space-y-4 text-body-lg text-grey-dark" style={{ opacity: 0 }}>
                <p>
                  Immopro Limited was founded in 2023 with a simple yet powerful mission: to make 
                  homeownership in Uganda accessible, transparent, and affordable for everyone.
                </p>
                <p>
                  We saw too many families struggle with rigid payment structures, hidden costs, 
                  and unfulfilled promises from developers. That&apos;s why we built Immopro on the 
                  principles of trust, flexibility, and quality — walking with our clients every 
                  step of their property journey.
                </p>
                <p>
                  From a small team with a big vision, we&apos;ve grown into a full-service property 
                  development company serving clients locally and in the diaspora, delivering 
                  homes that families are proud to call their own.
                </p>
              </div>

              <div className="story-animate grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-8" style={{ opacity: 0 }}>
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-cyan flex-shrink-0" />
                    <span className="text-body text-grey-dark">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/#services"
                className="story-animate inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-cyan transition-all duration-500 group"
                style={{ opacity: 0 }}
              >
                Explore Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-section bg-white">
        <div className="container-immopro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="story-animate bg-navy rounded-[2rem] p-12 relative overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/10 rounded-full" />
              <Target size={48} className="text-cyan mb-6" />
              <h3 className="text-h3 text-white uppercase font-display mb-4">Our Mission</h3>
              <p className="text-body-lg text-white/70 leading-relaxed">
                To make homeownership in Uganda accessible to every hardworking individual and family 
                through flexible payment plans, transparent processes, and quality construction that 
                stands the test of time.
              </p>
            </div>

            {/* Vision */}
            <div className="story-animate bg-cyan rounded-[2rem] p-12 relative overflow-hidden" style={{ opacity: 0 }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              <Eye size={48} className="text-white mb-6" />
              <h3 className="text-h3 text-white uppercase font-display mb-4">Our Vision</h3>
              <p className="text-body-lg text-white/80 leading-relaxed">
                To become Uganda&apos;s most trusted property development partner, known for delivering 
                exceptional value, innovative designs, and homes that create lasting legacies for 
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section bg-grey-bg">
        <div className="container-immopro">
          <div className="text-center mb-16">
            <p className="story-animate text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4" style={{ opacity: 0 }}>
              What We Stand For
            </p>
            <h2 className="story-animate text-h2 text-navy uppercase font-display" style={{ opacity: 0 }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="story-animate bg-white rounded-[2rem] p-10 text-center hover:shadow-card-hover transition-all duration-300"
                style={{ opacity: 0 }}
              >
                <value.icon size={48} className="text-cyan mx-auto mb-6" />
                <h4 className="text-h4 text-navy uppercase font-display mb-4">{value.title}</h4>
                <p className="text-body text-grey-dark">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan/10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan/10 rounded-full" />
        <div className="container-immopro text-center relative z-10">
          <h2 className="story-animate text-h2 text-white uppercase font-display mb-6" style={{ opacity: 0 }}>
            Be Part of Our Story
          </h2>
          <p className="story-animate text-body-lg text-white/70 max-w-[55ch] mx-auto mb-10" style={{ opacity: 0 }}>
            Whether you&apos;re building your first home or investing in property, 
            we&apos;re here to make it happen — whatever it takes.
          </p>
          <div className="story-animate flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
            <a
              href="/house-plans"
              className="group flex items-center gap-3 bg-cyan text-white px-10 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-white hover:text-navy transition-all duration-500"
            >
              Browse House Plans
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-3 border border-white/40 text-white px-10 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-white hover:text-navy transition-all duration-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
