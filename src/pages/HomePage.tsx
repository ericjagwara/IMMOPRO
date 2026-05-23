import { useEffect } from 'react'
import Hero from '../sections/Hero'
import OurStory from '../sections/OurStory'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import HousePlans from '../sections/HousePlans'
import Testimonials from '../sections/Testimonials'
import ContactCTA from '../sections/ContactCTA'

interface HomePageProps {
  onEnquire: () => void
}

export default function HomePage({ onEnquire }: HomePageProps) {
  useEffect(() => {
    // Handle hash scroll on mount
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    }
  }, [])

  return (
    <main>
      <Hero />
      <OurStory />
      <Services />
      <Projects />
      <HousePlans />
      <Testimonials />
      <ContactCTA onEnquire={onEnquire} />
    </main>
  )
}
