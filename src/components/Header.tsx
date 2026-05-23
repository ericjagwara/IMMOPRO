import { useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  scrolled: boolean
  menuOpen: boolean
  onMenuToggle: () => void
  onEnquire: () => void
}

export default function Header({ scrolled, menuOpen, onMenuToggle, onEnquire }: HeaderProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (!isHomePage) return

    const checkBackground = () => {
      const servicesSection = document.getElementById('services')
      const testimonialsSection = document.getElementById('testimonials')
      if (!servicesSection && !testimonialsSection) return
    }

    window.addEventListener('scroll', checkBackground, { passive: true })
    return () => window.removeEventListener('scroll', checkBackground)
  }, [menuOpen, isHomePage])

  const useLight = scrolled || !isHomePage
  const textColor = useLight ? 'text-navy' : 'text-white'
  const borderColor = useLight ? 'border-navy' : 'border-white'

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        useLight ? 'bg-white/95 backdrop-blur-md shadow-header' : 'bg-transparent'
      }`}
      style={{ height: '7.6rem' }}
    >
      <div className="container-immopro h-full flex items-center justify-between">
        {/* Menu Toggle */}
        <button
          onClick={onMenuToggle}
          className={`flex items-center gap-2 text-body-sm uppercase font-medium tracking-wider transition-opacity duration-300 hover:opacity-70 ${textColor}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="hidden md:inline">{menuOpen ? 'Close' : 'Menu'}</span>
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={useLight ? '/images/logo-primary.jpg' : '/images/logo-white.png'}
              alt="Immopro Ltd"
              className="h-[3.2rem] object-contain transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+256701234567"
            className={`transition-colors duration-300 ${textColor} hover:text-cyan`}
          >
            <Phone size={20} />
          </a>
          <button
            onClick={onEnquire}
            className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 text-body-sm uppercase font-medium tracking-wide border rounded-[20px] transition-all duration-500 ${borderColor} ${
              useLight
                ? 'bg-transparent text-navy hover:bg-navy hover:text-white'
                : 'bg-transparent text-white hover:bg-white hover:text-navy'
            }`}
          >
            Enquire
          </button>
        </div>
      </div>
    </header>
  )
}
