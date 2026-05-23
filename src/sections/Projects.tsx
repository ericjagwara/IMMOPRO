import { useEffect, useRef } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    image: '/images/project-aurora.jpg',
    label: 'Residential',
    title: 'The Aurora',
    location: 'Kampala, Uganda',
    description:
      'A landmark residential development featuring 48 luxury apartments with panoramic city views, rooftop gardens, and world-class amenities.',
  },
  {
    image: '/images/project-meridian.jpg',
    label: 'Commercial',
    title: 'Meridian Business Park',
    location: 'Entebbe Road, Uganda',
    description:
      'A state-of-the-art business park designed for forward-thinking enterprises, offering flexible office spaces and premium facilities.',
  },
  {
    image: '/images/project-enclave.jpg',
    label: 'Mixed-Use',
    title: 'The Enclave',
    location: 'Jinja, Uganda',
    description:
      'An integrated mixed-use community combining residential luxury with retail convenience, creating a self-contained neighborhood.',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header animation
      const headerEls = headerRef.current?.querySelectorAll('.project-header-animate')
      headerEls?.forEach((el, i) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' }
        })
      })

      // Project rows animation
      const rows = sectionRef.current?.querySelectorAll('.project-row')
      rows?.forEach((row, i) => {
        const img = row.querySelector('.project-img')
        const content = row.querySelector('.project-content')

        gsap.fromTo(img, { x: i % 2 === 0 ? -60 : 60, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: row, start: 'top 75%', toggleActions: 'play none none none' }
        })

        gsap.fromTo(content, { x: i % 2 === 0 ? 60 : -60, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: row, start: 'top 75%', toggleActions: 'play none none none' }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-section bg-white">
      <div className="container-immopro">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-20">
          <div>
            <p className="project-header-animate text-cyan uppercase tracking-[0.3em] text-body-sm font-medium mb-4">
              Portfolio
            </p>
            <h2 className="project-header-animate text-h2 text-navy uppercase font-display">
              Featured Projects
            </h2>
          </div>
          <p className="project-header-animate text-body-lg text-grey-dark max-w-[40ch]">
            Explore our latest developments across Uganda. Each project reflects our commitment to quality and innovation.
          </p>
        </div>

        {/* Project Rows */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className={`project-row grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center ${
                  !isEven ? 'lg:grid-cols-[45%_55%]' : ''
                }`}
              >
                {/* Image */}
                <div className={`project-img ${!isEven ? 'lg:order-2' : ''}`} style={{ opacity: 0 }}>
                  <div className="relative group overflow-hidden rounded-[2rem]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500" />
                    {/* Label badge */}
                    <span className="absolute top-6 left-6 bg-cyan text-white text-body-sm uppercase px-4 py-2 rounded-lg font-medium">
                      {project.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`project-content ${!isEven ? 'lg:order-1' : ''}`} style={{ opacity: 0 }}>
                  <div className="flex items-center gap-2 text-body-sm text-grey-medium mb-3">
                    <MapPin size={16} className="text-cyan" />
                    {project.location}
                  </div>
                  <h3 className="text-h3 text-navy font-display mb-4">{project.title}</h3>
                  <p className="text-body-lg text-grey-dark mb-8 max-w-[45ch]">{project.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-cyan transition-all duration-500 group"
                  >
                    View Project
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
