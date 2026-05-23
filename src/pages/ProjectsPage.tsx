import { useEffect, useRef, useState } from 'react'
import { MapPin, ArrowRight, Calendar, Building2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    image: '/images/project-aurora.jpg',
    label: 'Residential',
    title: 'The Aurora',
    location: 'Kampala, Uganda',
    description: 'A landmark residential development featuring 48 luxury apartments with panoramic city views, rooftop gardens, and world-class amenities. Designed for modern urban living with sustainability at its core.',
    specs: { units: '48 Apartments', status: 'Completed', year: '2024' },
  },
  {
    image: '/images/project-meridian.jpg',
    label: 'Commercial',
    title: 'Meridian Business Park',
    location: 'Entebbe Road, Uganda',
    description: 'A state-of-the-art business park designed for forward-thinking enterprises, offering flexible office spaces and premium facilities. The go-to destination for businesses seeking prestige and functionality.',
    specs: { units: '120 Offices', status: 'Completed', year: '2024' },
  },
  {
    image: '/images/project-enclave.jpg',
    label: 'Mixed-Use',
    title: 'The Enclave',
    location: 'Jinja, Uganda',
    description: 'An integrated mixed-use community combining residential luxury with retail convenience, creating a self-contained neighborhood. Live, work, and play — all within walking distance.',
    specs: { units: '80 Units', status: 'In Progress', year: '2025' },
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Mixed-Use']

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.label === activeCategory)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll('.project-animate')
      els?.forEach((el, i) => {
        gsap.fromTo(el, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [activeCategory])

  return (
    <main ref={sectionRef}>
      <PageHero
        title="Our Projects"
        subtitle="Explore our portfolio of residential, commercial, and mixed-use developments across Uganda. Each project reflects our commitment to quality, innovation, and client satisfaction."
        breadcrumb="Projects"
        bgImage="/images/project-enclave.jpg"
      />

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-grey-light">
        <div className="container-immopro flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-[20px] text-body uppercase font-medium tracking-wider transition-all duration-300 ${
                cat === activeCategory
                  ? 'bg-navy text-white'
                  : 'bg-grey-offwhite text-grey-dark hover:bg-navy hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-section bg-white">
        <div className="container-immopro">
          <div className="space-y-24">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={project.title}
                  className={`project-animate grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center ${
                    !isEven ? 'lg:grid-cols-[45%_55%]' : ''
                  }`}
                  style={{ opacity: 0 }}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative group overflow-hidden rounded-[2rem]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500" />
                      <span className="absolute top-6 left-6 bg-cyan text-white text-body-sm uppercase px-4 py-2 rounded-lg font-medium">
                        {project.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 text-body-sm text-grey-medium mb-3">
                      <MapPin size={16} className="text-cyan" />
                      {project.location}
                    </div>
                    <h3 className="text-h3 text-navy font-display mb-4">{project.title}</h3>
                    <p className="text-body-lg text-grey-dark mb-8 max-w-[45ch]">{project.description}</p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-6 mb-8">
                      <div className="flex items-center gap-2 text-body text-grey-dark">
                        <Building2 size={18} className="text-cyan" />
                        {project.specs.units}
                      </div>
                      <div className="flex items-center gap-2 text-body text-grey-dark">
                        <Calendar size={18} className="text-cyan" />
                        {project.specs.year}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-body-sm font-medium ${
                          project.specs.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {project.specs.status}
                        </span>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-cyan transition-all duration-500 group">
                      View Project Details
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-section bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan/10 rounded-full" />
        <div className="container-immopro relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '200+', label: 'Happy Clients' },
              { value: '6', label: 'Core Services' },
              { value: '3', label: 'Cities Covered' },
            ].map((stat, i) => (
              <div key={i} className="project-animate" style={{ opacity: 0 }}>
                <p className="text-h1 text-cyan font-display mb-2">{stat.value}</p>
                <p className="text-body text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-grey-bg">
        <div className="container-immopro text-center">
          <h2 className="project-animate text-h2 text-navy uppercase font-display mb-6" style={{ opacity: 0 }}>
            Have a Project in Mind?
          </h2>
          <p className="project-animate text-body-lg text-grey-dark max-w-[55ch] mx-auto mb-10" style={{ opacity: 0 }}>
            Whether it is residential, commercial, or mixed-use, we have the expertise to bring your vision to life.
          </p>
          <a
            href="/contact"
            className="project-animate group inline-flex items-center gap-3 bg-navy text-white px-10 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-cyan transition-all duration-500"
            style={{ opacity: 0 }}
          >
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  )
}
