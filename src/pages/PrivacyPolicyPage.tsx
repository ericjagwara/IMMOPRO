import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, FileText, Phone, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-grey-bg pt-32">
      {/* Hero */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan/10 rounded-full" />
        <div className="container-immopro relative z-10">
          <nav className="text-body-sm text-white/60 mb-4">
            <Link to="/" className="text-cyan hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <Shield size={40} className="text-cyan" />
            <h1 className="text-h1 text-white uppercase font-display">Privacy Policy</h1>
          </div>
          <p className="text-body-lg text-white/70 max-w-[60ch]">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-section">
        <div className="container-immopro max-w-[90rem]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-12">
              <p className="text-body text-grey-dark mb-8">
                Last updated: <strong>January 1, 2025</strong>
              </p>

              <div className="space-y-10">
                {/* Section 1 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Eye size={24} className="text-cyan" />
                    1. Information We Collect
                  </h2>
                  <p className="text-body text-grey-dark mb-3">
                    Immopro Limited collects personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Fill out our contact or enquiry forms',
                      'Request information about our services or properties',
                      'Sign up for our newsletter or updates',
                      'Engage our property development or management services',
                      'Contact us via phone, email, or in person',
                    ].map((item, i) => (
                      <li key={i} className="text-body text-grey-dark list-disc">{item}</li>
                    ))}
                  </ul>
                  <p className="text-body text-grey-dark mt-3">
                    This information may include your name, email address, phone number, physical address, 
                    identification documents, and financial information related to property transactions.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Lock size={24} className="text-cyan" />
                    2. How We Use Your Information
                  </h2>
                  <p className="text-body text-grey-dark mb-3">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="space-y-2 ml-6">
                    {[
                      'To respond to your enquiries and provide our services',
                      'To process property transactions and manage projects',
                      'To communicate updates about your project or property',
                      'To send relevant marketing communications (with your consent)',
                      'To comply with legal and regulatory requirements',
                      'To improve our services and customer experience',
                    ].map((item, i) => (
                      <li key={i} className="text-body text-grey-dark list-disc">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Shield size={24} className="text-cyan" />
                    3. Information Sharing
                  </h2>
                  <p className="text-body text-grey-dark">
                    Immopro Limited does not sell, trade, or rent your personal information to third parties. 
                    We may share your information only with trusted partners who assist us in operating our 
                    website, conducting our business, or servicing you — provided those parties agree to keep 
                    this information confidential. We may also release your information when required by law 
                    or to protect our rights, property, or safety.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Lock size={24} className="text-cyan" />
                    4. Data Security
                  </h2>
                  <p className="text-body text-grey-dark">
                    We implement a variety of security measures to maintain the safety of your personal 
                    information. Your personal information is contained behind secured networks and is only 
                    accessible by a limited number of persons who have special access rights and are required 
                    to keep the information confidential. All sensitive information is encrypted via Secure 
                    Socket Layer (SSL) technology.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <FileText size={24} className="text-cyan" />
                    5. Cookies
                  </h2>
                  <p className="text-body text-grey-dark">
                    Our website may use cookies to enhance your experience. Cookies are small files that a 
                    site or its service provider transfers to your computer&apos;s hard drive through your web 
                    browser (if you allow) that enables the site&apos;s systems to recognize your browser and 
                    capture and remember certain information. You can choose to have your computer warn you 
                    each time a cookie is being sent, or you can choose to turn off all cookies through your 
                    browser settings.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Eye size={24} className="text-cyan" />
                    6. Your Rights
                  </h2>
                  <p className="text-body text-grey-dark mb-3">
                    You have the right to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Access the personal information we hold about you',
                      'Request correction of inaccurate information',
                      'Request deletion of your personal information',
                      'Opt-out of marketing communications',
                      'Withdraw consent for data processing',
                    ].map((item, i) => (
                      <li key={i} className="text-body text-grey-dark list-disc">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4">
                    7. Changes to This Policy
                  </h2>
                  <p className="text-body text-grey-dark">
                    Immopro Limited reserves the right to update or change this Privacy Policy at any time. 
                    We will notify you of any changes by posting the new Privacy Policy on this page and 
                    updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy 
                    periodically for any changes.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4">
                    8. Contact Us
                  </h2>
                  <p className="text-body text-grey-dark mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+256701234567" className="flex items-center gap-3 bg-navy text-white px-6 py-3 rounded-[12px] text-body hover:bg-cyan transition-colors">
                      <Phone size={18} />
                      +256 701 234 567
                    </a>
                    <a href="mailto:info@immopro.ug" className="flex items-center gap-3 bg-grey-offwhite text-navy px-6 py-3 rounded-[12px] text-body hover:bg-cyan hover:text-white transition-colors">
                      <Mail size={18} />
                      info@immopro.ug
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy rounded-[2rem] p-8 text-white">
                <h4 className="text-h5 text-white uppercase font-display mb-4">Quick Links</h4>
                <nav className="space-y-3">
                  <Link to="/terms-of-service" className="block text-body text-white/70 hover:text-cyan transition-colors">
                    Terms of Service
                  </Link>
                  <Link to="/contact" className="block text-body text-white/70 hover:text-cyan transition-colors">
                    Contact Us
                  </Link>
                  <Link to="/our-story" className="block text-body text-white/70 hover:text-cyan transition-colors">
                    About Immopro
                  </Link>
                </nav>
              </div>

              <div className="bg-cyan rounded-[2rem] p-8 text-white">
                <h4 className="text-h5 text-white uppercase font-display mb-3">Questions?</h4>
                <p className="text-body text-white/80 mb-4">
                  If you have any questions about our privacy practices, feel free to reach out.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-cyan px-6 py-3 rounded-[12px] text-body font-medium hover:bg-navy hover:text-white transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
