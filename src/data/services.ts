export interface Service {
  id: string
  icon: string
  title: string
  shortDesc: string
  fullDesc: string
  whatWeOffer: string[]
  process: { step: string; title: string; desc: string }[]
  whyChoose: string[]
  image: string
  ctaText: string
}

export const services: Service[] = [
  {
    id: 'land-acquisition',
    icon: 'MapPin',
    title: 'Land Acquisition',
    shortDesc: 'Secure prime land with proper documentation and due diligence.',
    fullDesc:
      'Finding and securing the right piece of land is the foundation of every successful property project. At Immopro, we guide you through the entire land acquisition process — from identifying suitable parcels to verifying titles, conducting due diligence, and completing legal transfers. We protect your investment by ensuring every plot is properly vetted before you commit.',
    whatWeOffer: [
      'Land Survey & Mapping — Professional surveying to confirm boundaries and plot size',
      'Title Verification — Comprehensive checks at the land registry to confirm ownership',
      'Due Diligence — Investigation of encumbrances, disputes, and zoning restrictions',
      'Price Negotiation — Expert negotiation to secure the best possible price',
      'Legal Documentation — Preparation and review of all purchase agreements',
      'Transfer Assistance — End-to-end support through the title transfer process',
    ],
    process: [
      { step: '01', title: 'Briefing', desc: 'We understand your land requirements, budget, and preferred location.' },
      { step: '02', title: 'Search', desc: 'We identify available parcels that match your criteria.' },
      { step: '03', title: 'Verification', desc: 'Full title search and due diligence on shortlisted plots.' },
      { step: '04', title: 'Negotiation', desc: 'We negotiate the best terms on your behalf.' },
      { step: '05', title: 'Transfer', desc: 'Complete legal support through purchase and title transfer.' },
    ],
    whyChoose: [
      'Over 100 successful land transactions completed',
      'Access to verified land listings across Uganda',
      'Legal team ensures zero title disputes',
      'Transparent pricing with no hidden fees',
      'Diaspora clients supported remotely',
    ],
    image: '/images/project-enclave.jpg',
    ctaText: 'Start Your Land Search',
  },
  {
    id: 'construction',
    icon: 'HardHat',
    title: 'Construction',
    shortDesc: 'End-to-end construction management from foundation to finish.',
    fullDesc:
      'Our construction services deliver quality homes and buildings on time and within budget. From the initial groundbreaking to the final coat of paint, our experienced project managers oversee every detail. We work with trusted suppliers and skilled craftsmen to ensure your project meets the highest standards of quality and durability.',
    whatWeOffer: [
      'Project Management — Dedicated managers overseeing every phase of construction',
      'Architectural Design — Custom designs or adaptation of existing house plans',
      'Quality Control — Regular inspections and material testing at every stage',
      'Timeline Tracking — Clear schedules with milestone-based progress updates',
      'Material Sourcing — Direct procurement from trusted suppliers at competitive rates',
      'Final Handover — Thorough inspection, snagging, and documentation transfer',
    ],
    process: [
      { step: '01', title: 'Design', desc: 'Finalize architectural plans and obtain permits.' },
      { step: '02', title: 'Foundation', desc: 'Site preparation, excavation, and foundation laying.' },
      { step: '03', title: 'Structure', desc: 'Wall construction, roofing, and structural work.' },
      { step: '04', title: 'Finishing', desc: 'Electrical, plumbing, plastering, and interior finishes.' },
      { step: '05', title: 'Handover', desc: 'Final inspection, snagging, and project delivery.' },
    ],
    whyChoose: [
      '50+ construction projects delivered successfully',
      'Milestone-based payment system for transparency',
      'Regular site visits and photo updates',
      'Quality materials sourced directly from manufacturers',
      '10-year structural warranty on all builds',
    ],
    image: '/images/plan-villa.jpg',
    ctaText: 'Start Your Construction Project',
  },
  {
    id: 'renovation',
    icon: 'Home',
    title: 'Renovation',
    shortDesc: 'Transform existing properties into modern, functional spaces.',
    fullDesc:
      'Breathe new life into your existing property with our comprehensive renovation services. Whether you need a cosmetic refresh or a complete structural overhaul, our team will reimagine your space to meet modern standards of comfort, style, and functionality. We maximize the value of your investment while minimizing disruption to your daily life.',
    whatWeOffer: [
      'Design Upgrade — Modern redesign of interiors and exteriors',
      'Structural Work — Foundation repairs, wall modifications, and extensions',
      'Modern Finishes — Contemporary flooring, tiling, painting, and fixtures',
      'Value Addition — Strategic improvements that maximize resale value',
      'Space Optimization — Reconfiguration of layouts for better flow',
      'Project Supervision — Daily oversight to ensure quality and timeline adherence',
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'Site visit and evaluation of the existing property.' },
      { step: '02', title: 'Design', desc: 'Creation of renovation plans and material selection.' },
      { step: '03', title: 'Execution', desc: 'Systematic renovation work with regular updates.' },
      { step: '04', title: 'Finishing', desc: 'Final touches, fixture installation, and cleanup.' },
      { step: '05', title: 'Reveal', desc: 'Walkthrough and handover of your transformed space.' },
    ],
    whyChoose: [
      'Cost-effective alternative to new construction',
      'Experienced in both residential and commercial renovations',
      'Minimal disruption to occupants',
      'Modern design expertise for contemporary appeal',
      'Project completion within agreed timelines',
    ],
    image: '/images/plan-estate.jpg',
    ctaText: 'Transform Your Property',
  },
  {
    id: 'property-management',
    icon: 'PenTool',
    title: 'Property Management',
    shortDesc: 'Comprehensive management to protect and grow your investment.',
    fullDesc:
      'Protect and maximize the value of your property investment with our professional management services. We handle every aspect of property management — from finding and screening tenants to collecting rent, coordinating maintenance, and providing detailed financial reports. Enjoy the benefits of property ownership without the day-to-day hassles.',
    whatWeOffer: [
      'Tenant Screening — Thorough background and credit checks on all applicants',
      'Rent Collection — Timely collection and transparent accounting',
      'Maintenance & Repairs — 24/7 coordination of all property maintenance',
      'Financial Reporting — Monthly and annual income/expense reports',
      'Legal Compliance — Ensuring all tenancy agreements meet legal standards',
      'Property Marketing — Professional listing and tenant attraction strategies',
    ],
    process: [
      { step: '01', title: 'Onboarding', desc: 'Property inspection and management agreement setup.' },
      { step: '02', title: 'Marketing', desc: 'Professional photography and listing of the property.' },
      { step: '03', title: 'Tenant Placement', desc: 'Screening, selection, and lease agreement signing.' },
      { step: '04', title: 'Management', desc: 'Ongoing rent collection, maintenance, and reporting.' },
      { step: '05', title: 'Renewal', desc: 'Lease renewal negotiations or tenant replacement.' },
    ],
    whyChoose: [
      'Average 98% occupancy rate across managed properties',
      'Zero rent arrears policy with strict enforcement',
      '24/7 emergency maintenance response',
      'Detailed monthly financial reports',
      'Legal protection for property owners',
    ],
    image: '/images/project-aurora.jpg',
    ctaText: 'Manage My Property',
  },
  {
    id: 'project-planning',
    icon: 'ClipboardList',
    title: 'Project Planning',
    shortDesc: 'Expert guidance from concept to completion.',
    fullDesc:
      'Every successful project starts with a solid plan. Our project planning service helps you define your vision, understand the feasibility, create realistic budgets, and develop actionable timelines. Whether you are a first-time developer or an experienced investor, our planning expertise ensures your project starts on the right foot.',
    whatWeOffer: [
      'Feasibility Study — Assessment of site, market, and financial viability',
      'Budget Planning — Detailed cost estimates and cash flow projections',
      'Design Consultation — Guidance on architectural and interior design choices',
      'Permit Acquisition — Handling of all building permits and regulatory approvals',
      'Timeline Development — Realistic project schedules with key milestones',
      'Risk Assessment — Identification and mitigation of potential challenges',
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and constraints.' },
      { step: '02', title: 'Research', desc: 'Site analysis, market research, and feasibility assessment.' },
      { step: '03', title: 'Planning', desc: 'Budget creation, timeline development, and permit applications.' },
      { step: '04', title: 'Design', desc: 'Architectural plans and material selection.' },
      { step: '05', title: 'Launch', desc: 'Project kickoff with all approvals in place.' },
    ],
    whyChoose: [
      'Save time and money with expert upfront planning',
      'Avoid costly mistakes and regulatory issues',
      'Realistic budgets that keep projects on track',
      'Access to our network of architects and engineers',
      'Proven planning framework for any project size',
    ],
    image: '/images/project-meridian.jpg',
    ctaText: 'Plan Your Project',
  },
  {
    id: 'flexible-payments',
    icon: 'Banknote',
    title: 'Flexible Payments',
    shortDesc: 'Payment plans designed around your earning cycle.',
    fullDesc:
      'We believe everyone deserves a home, regardless of their current financial situation. Our flexible payment plans break down the cost of your property into manageable installments that align with your income. Whether you are building gradually or need a structured plan, we create a payment schedule that works for you — no large upfront deposits required.',
    whatWeOffer: [
      'Custom Payment Plans — Tailored to your income and financial capacity',
      'Milestone-Based Payments — Pay only as construction progresses',
      'Diaspora-Friendly Options — Wire transfers, mobile money, and escrow services',
      'No Hidden Costs — Transparent pricing with all fees disclosed upfront',
      'Financial Counseling — Guidance on budgeting and saving for your project',
      'Flexible Terms — Adjust payment schedules as your circumstances change',
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'Review of your financial situation and goals.' },
      { step: '02', title: 'Proposal', desc: 'Custom payment plan tailored to your budget.' },
      { step: '03', title: 'Agreement', desc: 'Clear terms and schedule documentation.' },
      { step: '04', title: 'Build', desc: 'Construction begins with your payment plan in motion.' },
      { step: '05', title: 'Own', desc: 'Receive your keys upon final payment — your home is yours.' },
    ],
    whyChoose: [
      'No large upfront deposit required',
      'Payment schedules matched to your income cycle',
      'Clear, transparent terms with no hidden fees',
      'Special packages for diaspora clients',
      'Track progress and payments online',
    ],
    image: '/images/story-family.jpg',
    ctaText: 'Discuss Payment Options',
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
