'use client'

import { useState, useEffect } from 'react'
import { Star, MapPin, Check, Building2, Wifi, UtensilsCrossed, Car, Dumbbell, Waves, Sparkles } from 'lucide-react'
import { Resort, BudgetRange, budgetRanges, filterResortsByBudget } from './destinationsData'

interface ResortsSectionProps {
  resorts: Resort[]
  countryName: string
  initialResortId?: string | null
}

export default function ResortsSection({ resorts, countryName, initialResortId }: ResortsSectionProps) {
  const [selectedBudget, setSelectedBudget] = useState<BudgetRange>('all')
  const [selectedResort, setSelectedResort] = useState<Resort | null>(null)

  // Auto-select resort from URL param
  useEffect(() => {
    if (initialResortId) {
      const resort = resorts.find(r => r.id === initialResortId)
      if (resort) {
        setSelectedResort(resort)
        setSelectedBudget(resort.budgetRange)
      }
    }
  }, [initialResortId, resorts])

  const filteredResorts = filterResortsByBudget(resorts, selectedBudget)

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-[#d19457] text-[#d19457]" />)
    }
    if (rating % 1 !== 0) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-[#d19457]" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-[#d19457] text-[#d19457]" />
          </div>
        </div>
      )
    }
    return stars
  }

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(0)}K`
    }
    return `₹${price}`
  }

  const getBudgetLabel = (budget: string) => {
    switch (budget) {
      case '0-25': return 'Budget'
      case '25-50': return 'Mid-Range'
      case '50-100': return 'Premium'
      case '100+': return 'Luxury'
      default: return budget
    }
  }

  const getBudgetColor = (budget: string) => {
    switch (budget) {
      case '0-25': return 'bg-[#44618b] text-white'
      case '25-50': return 'bg-[#8550a2] text-white'
      case '50-100': return 'bg-[#d19457] text-white'
      case '100+': return 'bg-[#12103d] text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <section id="resorts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457] mb-4">
            Where To Stay
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            {countryName} <span className="font-accent text-[#d19457]">Resorts</span>
          </h2>
          <p className="font-sans text-[#44618b] max-w-xl mx-auto">
            From budget-friendly stays to ultra-luxury retreats
          </p>
        </div>

        {/* Budget Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {budgetRanges.map((budget) => (
            <button
              key={budget.id}
              onClick={() => setSelectedBudget(budget.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                selectedBudget === budget.id
                  ? 'bg-[#12103d] text-white shadow-lg'
                  : 'bg-white text-[#44618b] border border-[#12103d]/10 hover:border-[#d19457] hover:text-[#d19457]'
              }`}
            >
              {budget.name}
            </button>
          ))}
        </div>

        {/* Resorts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resort Cards */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResorts.map((resort) => (
                <div
                  key={resort.id}
                  onClick={() => setSelectedResort(resort)}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedResort?.id === resort.id
                      ? 'border-[#12103d] ring-4 ring-[#12103d]/10'
                      : 'border-transparent hover:border-[#d19457]/50'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                      style={{ backgroundImage: `url(${resort.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`px-3 py-1 text-xs font-sans font-semibold rounded-full ${getBudgetColor(resort.budgetRange)}`}>
                        {getBudgetLabel(resort.budgetRange)}
                      </span>
                      {resort.tag && (
                        <span className="px-3 py-1 text-xs font-sans font-semibold rounded-full bg-white/90 text-[#12103d]">
                          {resort.tag}
                        </span>
                      )}
                    </div>
                    {selectedResort?.id === resort.id && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-[#12103d] rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(resort.rating)}
                      <span className="font-sans text-xs text-[#44618b] ml-1">({resort.rating})</span>
                    </div>
                    <h3 className="font-display text-lg text-[#12103d] mb-1">{resort.name}</h3>
                    <div className="flex items-center gap-1 text-[#44618b] mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="font-sans text-sm">{resort.location}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#12103d]/5">
                      <div>
                        <span className="font-display text-xl font-bold text-[#12103d]">{formatPrice(resort.pricePerNight)}</span>
                        <span className="font-sans text-xs text-[#44618b]">/night</span>
                      </div>
                      <span className="text-[#d19457] font-sans text-sm font-medium">View →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredResorts.length === 0 && (
              <div className="text-center py-12">
                <p className="font-sans text-[#44618b]">No resorts found in this budget range.</p>
              </div>
            )}
          </div>

          {/* Resort Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 overflow-hidden sticky top-28">
              {selectedResort ? (
                <>
                  {/* Header Image */}
                  <div className="relative h-48">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${selectedResort.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12103d] to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 mb-2">
                        <span className={`inline-block px-3 py-1 text-xs font-sans font-semibold rounded-full ${getBudgetColor(selectedResort.budgetRange)}`}>
                          {getBudgetLabel(selectedResort.budgetRange)}
                        </span>
                        {selectedResort.tag && (
                          <span className="px-3 py-1 text-xs font-sans font-semibold rounded-full bg-white/90 text-[#12103d]">
                            {selectedResort.tag}
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-2xl text-white">{selectedResort.name}</h2>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-0.5">{renderStars(selectedResort.rating)}</div>
                      <span className="font-sans text-sm text-[#44618b]">({selectedResort.rating})</span>
                    </div>

                    <div className="flex items-center gap-2 text-[#44618b] mb-4">
                      <MapPin className="w-5 h-5 text-[#43124a]" />
                      <span className="font-sans text-sm">{selectedResort.location}</span>
                    </div>

                    <p className="font-sans text-sm text-[#44618b] mb-6">{selectedResort.description}</p>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-3">Amenities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedResort.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#d19457]" />
                            <span className="font-sans text-sm text-[#44618b]">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="bg-gradient-to-r from-[#12103d]/5 to-[#43124a]/5 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm text-[#44618b]">Per night</span>
                        <div>
                          <span className="font-display text-3xl font-bold text-[#d19457]">{formatPrice(selectedResort.pricePerNight)}</span>
                        </div>
                      </div>
                      <p className="font-sans text-xs text-[#44618b] mt-1">* Taxes extra</p>
                    </div>

                    <a
                      href="#contact"
                      className="block w-full bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-center"
                    >
                      Book This Resort
                    </a>
                  </div>
                </>
              ) : (
                <div className="p-12 text-center">
                  <Building2 className="w-16 h-16 text-[#12103d]/20 mx-auto mb-4" />
                  <h3 className="font-display text-xl text-[#12103d] mb-2">Select a Resort</h3>
                  <p className="font-sans text-sm text-[#44618b]">Click on any resort to see details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
