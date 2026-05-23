import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MenuOverlay from './components/MenuOverlay'
import EnquiryModal from './components/EnquiryModal'
import HomePage from './pages/HomePage'
import OurStoryPage from './pages/OurStoryPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import HousePlansPage from './pages/HousePlansPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen || modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen, modalOpen])

  return (
    <div className="relative">
      <ScrollToTop />
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onEnquire={() => setModalOpen(true)}
      />
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <Routes>
        <Route path="/" element={<HomePage onEnquire={() => setModalOpen(true)} />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/services" element={<ServicesPage onEnquire={() => setModalOpen(true)} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/house-plans" element={<HousePlansPage onEnquire={() => setModalOpen(true)} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
