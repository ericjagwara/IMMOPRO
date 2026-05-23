import { useState, useMemo } from 'react'
import { Bed, Bath, Square, ArrowRight, Search } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface HousePlansPageProps {
  onEnquire: () => void
}

const allPlans = [
  { name: 'The Haven', beds: 3, baths: 2, area: 180, category: 'Single-Storey', price: 150, priceDisplay: '150M', image: '/images/plan-haven.jpg' },
  { name: 'The Legacy', beds: 4, baths: 3, area: 280, category: 'Double-Storey', price: 280, priceDisplay: '280M', image: '/images/plan-legacy.jpg' },
  { name: 'The Summit', beds: 5, baths: 4, area: 400, category: 'Villa', price: 450, priceDisplay: '450M', image: '/images/plan-summit.jpg' },
  { name: 'The Nest', beds: 2, baths: 1, area: 95, category: 'Single-Storey', price: 95, priceDisplay: '95M', image: '/images/plan-nest.jpg' },
  { name: 'The Villa', beds: 4, baths: 3, area: 320, category: 'Villa', price: 350, priceDisplay: '350M', image: '/images/plan-villa.jpg' },
  { name: 'The Urban', beds: 3, baths: 2, area: 150, category: 'Townhouse', price: 180, priceDisplay: '180M', image: '/images/plan-urban.jpg' },
  { name: 'The Estate', beds: 6, baths: 5, area: 550, category: 'Estate', price: 650, priceDisplay: '650M', image: '/images/plan-estate.jpg' },
  { name: 'The Studio', beds: 1, baths: 1, area: 55, category: 'Studio', price: 65, priceDisplay: '65M', image: '/images/plan-studio.jpg' },
]

export default function HousePlansPage({ onEnquire }: HousePlansPageProps) {
  const [bedsFilter, setBedsFilter] = useState('Any')
  const [bathsFilter, setBathsFilter] = useState('Any')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [sortBy, setSortBy] = useState('Name')
  const heroRef = useScrollAnimation(0.1)

  const filteredPlans = useMemo(() => {
    let plans = [...allPlans]

    if (bedsFilter !== 'Any') {
      const minBeds = parseInt(bedsFilter)
      plans = plans.filter((p) => p.beds >= minBeds)
    }
    if (bathsFilter !== 'Any') {
      const minBaths = parseInt(bathsFilter)
      plans = plans.filter((p) => p.baths >= minBaths)
    }
    if (categoryFilter !== 'All') {
      plans = plans.filter((p) => p.category === categoryFilter)
    }

    switch (sortBy) {
      case 'Size':
        plans.sort((a, b) => a.area - b.area)
        break
      case 'Price':
        plans.sort((a, b) => a.price - b.price)
        break
      case 'Bedrooms':
        plans.sort((a, b) => a.beds - b.beds)
        break
      default:
        plans.sort((a, b) => a.name.localeCompare(b.name))
    }

    return plans
  }, [bedsFilter, bathsFilter, categoryFilter, sortBy])

  const clearFilters = () => {
    setBedsFilter('Any')
    setBathsFilter('Any')
    setCategoryFilter('All')
    setSortBy('Name')
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="pt-40 pb-16 bg-grey-bg">
        <div ref={heroRef} className="container-immopro">
          <p className="animate-on-scroll text-body-sm text-grey-medium mb-4">
            <a href="/" className="text-cyan hover:underline">Home</a> / House Plans
          </p>
          <h1 className="animate-on-scroll text-h1 text-navy uppercase font-display" style={{ transitionDelay: '100ms' }}>
            House Plans
          </h1>
          <p className="animate-on-scroll text-body-lg text-grey-dark max-w-[60ch] mt-4" style={{ transitionDelay: '200ms' }}>
            Discover our collection of thoughtfully designed homes, crafted for modern living in Uganda.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[7.6rem] z-50 bg-white border-b border-grey-light py-4">
        <div className="container-immopro flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Bedrooms */}
            <div className="flex items-center gap-2">
              <span className="text-body-sm uppercase text-grey-medium">Beds</span>
              <select
                value={bedsFilter}
                onChange={(e) => setBedsFilter(e.target.value)}
                className="h-10 px-4 border border-grey-light rounded-[10px] text-body bg-white focus:border-cyan focus:outline-none"
              >
                <option>Any</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            {/* Bathrooms */}
            <div className="flex items-center gap-2">
              <span className="text-body-sm uppercase text-grey-medium">Baths</span>
              <select
                value={bathsFilter}
                onChange={(e) => setBathsFilter(e.target.value)}
                className="h-10 px-4 border border-grey-light rounded-[10px] text-body bg-white focus:border-cyan focus:outline-none"
              >
                <option>Any</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="text-body-sm uppercase text-grey-medium">Type</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="h-10 px-4 border border-grey-light rounded-[10px] text-body bg-white focus:border-cyan focus:outline-none"
              >
                <option>All</option>
                <option>Single-Storey</option>
                <option>Double-Storey</option>
                <option>Townhouse</option>
                <option>Villa</option>
                <option>Estate</option>
                <option>Studio</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-body-sm text-grey-medium hidden sm:inline">
              Showing {filteredPlans.length} plans
            </span>
            <div className="flex items-center gap-2">
              <span className="text-body-sm uppercase text-grey-medium">Sort</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 px-4 border border-grey-light rounded-[10px] text-body bg-white focus:border-cyan focus:outline-none"
              >
                <option>Name</option>
                <option>Size</option>
                <option>Price</option>
                <option>Bedrooms</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-12 pb-32">
        <div className="container-immopro">
          {filteredPlans.length === 0 ? (
            <div className="text-center py-20">
              <Search size={48} className="mx-auto text-grey-medium mb-4" />
              <h4 className="text-h4 text-grey-medium mb-2">No plans match your filters.</h4>
              <p className="text-body text-grey-medium mb-6">Try adjusting your filter criteria.</p>
              <button onClick={clearFilters} className="text-cyan hover:underline">
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredPlans.map((plan, i) => (
                <div
                  key={plan.name}
                  className="group bg-grey-offwhite rounded-[17px] shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-navy text-white text-body-sm uppercase px-4 py-1 rounded-md">
                      {plan.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-h4 text-navy uppercase font-display">{plan.name}</h4>
                    <div className="flex gap-4 mt-3 text-body-sm text-grey-medium">
                      <span className="flex items-center gap-1">
                        <Bed size={16} /> {plan.beds}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={16} /> {plan.baths}
                      </span>
                      <span className="flex items-center gap-1">
                        <Square size={16} /> {plan.area}m&sup2;
                      </span>
                    </div>
                    <div className="border-t border-grey-light my-4" />
                    <p className="text-h5 text-cyan">From UGX {plan.priceDisplay}</p>
                    <button className="mt-3 inline-flex items-center gap-1 text-navy text-body-sm font-medium group/btn">
                      <span className="text-link">View Details</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy text-white py-20">
        <div className="container-immopro">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">
            <div>
              <h3 className="text-h3 text-white font-display mb-4">
                Can't Find Your Perfect Plan?
              </h3>
              <p className="text-body-lg text-grey-medium max-w-[50ch]">
                Our architects can design a custom home tailored to your exact needs, budget, and lifestyle. Let's create something unique together.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={onEnquire}
                className="btn-primary !bg-cyan !border-cyan !text-white hover:!bg-cyan-light"
              >
                Request Custom Design
              </button>
              <p className="text-body-sm text-grey-medium">
                Or call us: <a href="tel:+256701234567" className="text-white hover:underline">+256 701 234 567</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
