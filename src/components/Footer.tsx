import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/our-story' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'House Plans', path: '/house-plans' },
  { label: 'Contact', path: '/contact' },
]

const quickLinks = ['Privacy Policy', 'Terms of Service']

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = footerRef.current?.querySelectorAll('.footer-animate')
          els?.forEach((el, i) => {
            setTimeout(() => {
              ;(el as HTMLElement).style.opacity = '1'
            }, i * 100)
          })
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-navy text-white pt-20 pb-8">
      <div className="container-immopro">
        {/* Tier 1 */}
        <div className="footer-animate flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10 opacity-0 transition-opacity duration-500">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/images/logo-primary.jpg"
              alt="Immopro"
              className="h-12 object-contain brightness-0 invert"
            />
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-body-sm uppercase font-medium text-grey-medium hover:text-white transition-colors duration-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-grey-medium hover:text-white transition-colors duration-500">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Tier 2 */}
        <div className="footer-animate grid grid-cols-1 md:grid-cols-3 gap-10 py-12 opacity-0 transition-opacity duration-500 delay-100">
          <div className="space-y-2">
            <p className="text-body text-grey-medium">Kampala, Uganda</p>
            <p className="text-body text-grey-medium">+256 701 234 567</p>
            <a href="mailto:info@immopro.ug" className="text-body text-cyan hover:underline">
              info@immopro.ug
            </a>
          </div>
          <div>
            <h6 className="text-h6 uppercase text-grey-medium mb-4">Office Hours</h6>
            <p className="text-body text-grey-medium">Mon – Fri: 8:00 AM – 6:00 PM</p>
            <p className="text-body text-grey-medium">Saturday: 9:00 AM – 2:00 PM</p>
          </div>
          <div>
            <h6 className="text-h6 uppercase text-grey-medium mb-4">Quick Links</h6>
            {quickLinks.map((link) => (
              <a key={link} href="#" className="block text-body text-grey-medium hover:text-white transition-colors duration-300">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Tier 3 */}
        <div className="footer-animate flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 opacity-0 transition-opacity duration-500 delay-200">
          <p className="text-body-sm text-grey-medium">&copy; 2025 Immopro Limited. All rights reserved.</p>
          <p className="text-body-sm italic text-grey-medium">Whatever It Takes.</p>
        </div>
      </div>
    </footer>
  )
}
