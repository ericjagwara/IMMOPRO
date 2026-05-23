import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import gsap from 'gsap'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!modalRef.current || !overlayRef.current || !contentRef.current) return

    if (isOpen) {
      const tl = gsap.timeline()
      tl.set(modalRef.current, { display: 'flex' })
      tl.to(modalRef.current, { opacity: 1, duration: 0.3 })
      tl.to(overlayRef.current, { opacity: 1, duration: 0.5 }, 0.2)
      tl.to(contentRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.4)
    } else {
      const tl = gsap.timeline()
      tl.to(contentRef.current, { opacity: 0, y: 50, duration: 0.4 })
      tl.to(overlayRef.current, { opacity: 0, duration: 0.4 }, 0.1)
      tl.to(modalRef.current, { opacity: 0, duration: 0.3 }, 0.2)
      tl.set(modalRef.current, { display: 'none' })
      setSubmitted(false)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[200] items-center justify-center"
      style={{ display: 'none', opacity: 0 }}
      onClick={(e) => {
        if (e.target === modalRef.current) onClose()
      }}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-navy/85"
        style={{ opacity: 0 }}
      />
      <div
        ref={contentRef}
        className="relative bg-white rounded-[2rem] p-8 lg:p-12 max-w-[60rem] w-[90%] max-h-[90vh] overflow-y-auto"
        style={{ opacity: 0, transform: 'translateY(50px)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-grey-dark hover:text-navy transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <h3 className="text-h3 text-navy mb-4">Thank You!</h3>
            <p className="text-body-lg text-grey-dark">
              Our team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h3 className="text-h3 text-navy mb-2">Get in Touch</h3>
              <p className="text-body text-grey-dark">
                Fill out the form below and our team will contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <select
                required
                className="w-full h-[5rem] px-6 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors bg-white"
              >
                <option value="">Select a Service</option>
                <option value="land">Land Acquisition</option>
                <option value="construction">Construction</option>
                <option value="renovation">Renovation</option>
                <option value="management">Property Management</option>
                <option value="planning">Project Planning</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                required
                className="w-full px-6 py-4 border border-grey-light rounded-[1rem] text-body focus:border-cyan focus:outline-none transition-colors resize-none"
              />
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1" />
                <span className="text-body-sm text-grey-dark">
                  I agree to the privacy policy and consent to being contacted regarding my enquiry.
                </span>
              </label>
              <button
                type="submit"
                className="w-full py-4 bg-navy text-white rounded-[20px] text-body uppercase font-medium tracking-wider hover:bg-cyan transition-colors duration-300"
              >
                Send Enquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
