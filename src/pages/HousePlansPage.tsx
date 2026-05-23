import { useState, useMemo } from 'react'
import { Bed, Bath, Square, ArrowRight, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { housePlans } from '../data/housePlans'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface HousePlansPageProps {
  onEnquire: () => void
}

export default function HousePlansPage({ onEnquire }: HousePlansPageProps) {
  const [bedsFilter, setBedsFilter] = useState('Any')
  const [bathsFilter, setBathsFilter] = useState('Any')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [sortBy, setSortBy] = useState('Name')
  const heroRef = useScrollAnimation(0.1)
  const navigate = useNavigate()

  const allCategories = ['All', ...Array.from(new Set(housePlans.map((p) => p.category)))]

  const filteredPlans = useMemo(() => {
    let plans = [...housePlans]

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
        plans.sort((a, b) => a.priceNum - b.priceNum)
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
            <a href="#/" className="text-cyan hover:underline">Home</a> / House Plans
          </p>
          <h1 className="animate-on-scroll text-h1 text-navy uppercase font-display" style={{ transitionDelay: '100ms' }}>
            House Plans
          </h1>
          <p className="animate-on-scroll text-body-lg text-grey-dark max-w-[60ch] mt-4" style={{ transitionDelay: '200ms' }}>
            Discover our collection of thoughtfully designed homes and commercial buildings, each with a unique Plan ID for easy reference.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[7.6rem] z-50 bg-white border-b border-grey-light py-4">
        <div className="container-immopro flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-body-sm uppercase text-grey-medium">Beds</span>
              <select value={bedsFilter} onChange={(e) => setBedsFilter(e.target.value)} className="h-10 px-4 border border-grey-light rounded-[10px] text-body bg-white focus:border-cyan focus:outline-none">
                <option>Any</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-body-sm uppercase text-grey-medium">Baths</span>
              <select value={bathsFilter} onChange={(e) => setBathsFilter(e.target.value)} className="h-10 px-4 border border-grey-light rounded-[10px] text-body bg-white focus:border-cyan focus:outline-none">
                <option>Any</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-body-sm uppercase text-grey-medium">Type</span>
              <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="h-10 px-4 border border-grey-light rounded-[10px] text-body bg-white focus:border-cyan focus:outline-none">
                {allCategories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-body-sm text-grey-medium hidden sm:inline">
              Showing {filteredPlans.length} plans
            </span>
            <div className="flex items-center gap-2">
              <span className="text-body-sm uppercase text-grey-medium">Sort</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="h-10 px-4 border border-grey-light rounded-[10px] text-body bg-white focus:border-cyan focus:outline-none">
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
              <button onClick={clearFilters} className="text-cyan hover:underline">Clear All Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredPlans.map((plan, i) => (
                <div
                  key={plan.id}
                  className="group bg-grey-offwhite rounded-[17px] shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${i * 80}ms` }}
                  onClick={() => navigate(`/house-plans/${plan.id}`)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={plan.image}
                      alt={`${plan.name} — ${plan.planCode}`}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-navy text-white text-body-sm uppercase px-3 py-1 rounded-md font-medium">
                      {plan.category}
                    </span>
                    <span className="absolute top-4 right-4 bg-cyan text-white text-body-sm px-3 py-1 rounded-md font-medium">
                      {plan.planCode}
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-h4 text-navy uppercase font-display mb-1">{plan.name}</h4>
                    <p className="text-body-sm text-cyan font-medium mb-3">{plan.planCode}</p>
                    <div className="flex gap-4 mb-4 text-body-sm text-grey-medium">
                      {plan.beds > 0 && (
                        <span className="flex items-center gap-1">
                          <Bed size={16} /> {plan.beds}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Bath size={16} /> {plan.baths}
                      </span>
                      <span className="flex items-center gap-1">
                        <Square size={16} /> {plan.area}m&sup2;
                      </span>
                    </div>
                    <div className="border-t border-grey-light pt-4 flex items-center justify-between">
                      <p className="text-h5 text-cyan">From UGX {plan.price}</p>
                      <ArrowRight size={18} className="text-grey-medium group-hover:text-cyan group-hover:translate-x-1 transition-all" />
                    </div>
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
                Can&apos;t Find Your Perfect Plan?
              </h3>
              <p className="text-body-lg text-grey-medium max-w-[50ch]">
                Our architects can design a custom home tailored to your exact needs, budget, and lifestyle. Let&apos;s create something unique together.
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
