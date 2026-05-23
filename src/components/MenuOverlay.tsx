import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/our-story' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'House Plans', path: '/house-plans' },
  { label: 'Contact', path: '/contact' },
]

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!overlayRef.current) return

    if (isOpen) {
      gsap.set(overlayRef.current, { visibility: 'visible' })
      gsap.to(overlayRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, delay: 0.3, duration: 0.6, ease: 'power2.out' }
        )
      }
    } else {
      if (linksRef.current) {
        gsap.to(linksRef.current.children, {
          opacity: 0,
          stagger: 0.05,
          duration: 0.3,
        })
      }
      gsap.to(overlayRef.current, {
        x: '-100%',
        duration: 0.4,
        delay: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: 'hidden' })
        },
      })
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleLinkClick = (path: string) => {
    onClose()
    setTimeout(() => {
      if (path === location.pathname) return
      navigate(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 600)
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99] bg-navy flex"
      style={{ transform: 'translateX(-100%)', visibility: isOpen ? 'visible' : 'hidden' }}
    >
      {/* Left Panel - Image */}
      <div className="hidden lg:block w-[40%] relative">
        <img
          src="/images/hero-main.jpg"
          alt="Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/30" />
      </div>

      {/* Right Panel - Links */}
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-start px-12 lg:px-24 relative">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white text-body-sm uppercase tracking-wider hover:opacity-70 transition-opacity z-10"
        >
          Close
        </button>

        <nav ref={linksRef} className="flex flex-col gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.path)}
              className="text-left font-accent italic text-white/50 hover:text-white transition-all duration-200 text-[4rem] lg:text-[7rem] leading-none group"
            >
              <span className="relative inline-block">
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
