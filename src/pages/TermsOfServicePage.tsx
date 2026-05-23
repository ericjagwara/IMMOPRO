import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Scale, Building, CreditCard, Gavel, Phone, Mail } from 'lucide-react'

export default function TermsOfServicePage() {
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
            <span>Terms of Service</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <Scale size={40} className="text-cyan" />
            <h1 className="text-h1 text-white uppercase font-display">Terms of Service</h1>
          </div>
          <p className="text-body-lg text-white/70 max-w-[60ch]">
            These terms govern your use of our website and services. Please read them carefully before engaging with Immopro.
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
                    <FileText size={24} className="text-cyan" />
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-body text-grey-dark">
                    By accessing or using the Immopro Limited website and services, you agree to be bound by these 
                    Terms of Service. If you do not agree to these terms, please do not use our website or services. 
                    These terms apply to all visitors, users, and clients of Immopro Limited.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Building size={24} className="text-cyan" />
                    2. Our Services
                  </h2>
                  <p className="text-body text-grey-dark mb-3">
                    Immopro Limited provides property development services in Uganda, including but not limited to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Land acquisition and verification',
                      'Residential and commercial construction',
                      'Property renovation and upgrades',
                      'Property management services',
                      'Project planning and consulting',
                      'House plan sales and custom design',
                    ].map((item, i) => (
                      <li key={i} className="text-body text-grey-dark list-disc">{item}</li>
                    ))}
                  </ul>
                  <p className="text-body text-grey-dark mt-3">
                    All services are subject to separate service agreements which will be provided upon engagement.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <CreditCard size={24} className="text-cyan" />
                    3. Payments & Fees
                  </h2>
                  <p className="text-body text-grey-dark mb-3">
                    Payment terms for Immopro services are as follows:
                  </p>
                  <ul className="space-y-2 ml-6">
                    {[
                      'All prices quoted are in Ugandan Shillings (UGX) unless otherwise stated',
                      'A deposit is required before project commencement as outlined in your service agreement',
                      'Milestone-based payments may be arranged for construction projects',
                      'Late payments may incur additional fees and project delays',
                      'All fees are non-refundable unless otherwise agreed in writing',
                    ].map((item, i) => (
                      <li key={i} className="text-body text-grey-dark list-disc">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Scale size={24} className="text-cyan" />
                    4. Project Timelines
                  </h2>
                  <p className="text-body text-grey-dark">
                    Immopro commits to providing realistic project timelines during the planning phase. However, 
                    timelines may be affected by factors beyond our control, including but not limited to: 
                    weather conditions, material availability, permit approvals, and changes requested by the client. 
                    We will communicate any delays as soon as they arise and work to minimize their impact on your project.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Building size={24} className="text-cyan" />
                    5. Client Responsibilities
                  </h2>
                  <p className="text-body text-grey-dark mb-3">
                    As a client of Immopro, you agree to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Provide accurate and complete information for project planning',
                      'Make timely payments as agreed in your service contract',
                      'Respond to communications and approval requests promptly',
                      'Ensure clear site access for construction activities',
                      'Notify us of any concerns or issues as soon as they arise',
                    ].map((item, i) => (
                      <li key={i} className="text-body text-grey-dark list-disc">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4 flex items-center gap-3">
                    <Gavel size={24} className="text-cyan" />
                    6. Warranties
                  </h2>
                  <p className="text-body text-grey-dark">
                    Immopro Limited provides a 10-year structural warranty on all construction projects. 
                    This warranty covers defects in structural elements including foundations, load-bearing walls, 
                    roofing, and structural steelwork. The warranty does not cover damage caused by: 
                    natural disasters, client modifications, normal wear and tear, or failure to perform 
                    recommended maintenance. Non-structural elements are covered by a 1-year workmanship warranty.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4">
                    7. Intellectual Property
                  </h2>
                  <p className="text-body text-grey-dark">
                    All house plans, architectural drawings, designs, and content on this website are the 
                    intellectual property of Immopro Limited. Purchase of a house plan grants you a license 
                    to use that plan for a single construction project. Redistribution, resale, or modification 
                    of our house plans without written consent is strictly prohibited.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-body text-grey-dark">
                    Immopro Limited shall not be liable for any indirect, incidental, special, consequential, 
                    or punitive damages arising from your use of our services. Our total liability shall not 
                    exceed the total amount paid by you for the specific service giving rise to the claim. 
                    Nothing in these terms shall exclude or limit liability for death or personal injury 
                    caused by our negligence.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4">
                    9. Governing Law
                  </h2>
                  <p className="text-body text-grey-dark">
                    These Terms of Service are governed by and construed in accordance with the laws of the 
                    Republic of Uganda. Any disputes arising under these terms shall be subject to the 
                    exclusive jurisdiction of the courts of Uganda.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4">
                    10. Changes to Terms
                  </h2>
                  <p className="text-body text-grey-dark">
                    Immopro Limited reserves the right to modify these terms at any time. Changes will be 
                    effective immediately upon posting to the website. Your continued use of our services 
                    following any changes constitutes acceptance of the revised terms.
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-h3 text-navy uppercase font-display mb-4">
                    11. Contact Information
                  </h2>
                  <p className="text-body text-grey-dark mb-4">
                    For any questions about these Terms of Service, please contact us:
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
                  <Link to="/privacy-policy" className="block text-body text-white/70 hover:text-cyan transition-colors">
                    Privacy Policy
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
                <h4 className="text-h5 text-white uppercase font-display mb-3">Need Help?</h4>
                <p className="text-body text-white/80 mb-4">
                  Our team is ready to answer any questions about our services and terms.
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
