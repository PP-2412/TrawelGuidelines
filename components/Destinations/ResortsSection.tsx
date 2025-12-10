'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, MapPin, Check, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Resort, BudgetRange, budgetRanges, filterResortsByBudget } from './destinationsData'

interface ResortsSectionProps {
  resorts: Resort[]
  countryName: string
  initialResortId?: string | null
}

export default function ResortsSection({ resorts, countryName, initialResortId }: ResortsSectionProps) {
  const [selectedBudget, setSelectedBudget] = useState<BudgetRange>('all')
  const [selectedResort, setSelectedResort] = useState<Resort | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Reset image index when resort changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedResort])

  // Auto-select resort from URL param and scroll to section
  useEffect(() => {
    if (initialResortId) {
      const resort = resorts.find(r => r.id === initialResortId)
      if (resort) {
        setSelectedResort(resort)
        setSelectedBudget(resort.budgetRange)
        // Scroll to section after a brief delay to ensure DOM is ready
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [initialResortId, resorts])

  // Close modal on escape key, navigate images with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedResort(null)
      if (selectedResort && selectedResort.images) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex(prev => 
            prev === 0 ? selectedResort.images.length - 1 : prev - 1
          )
        }
        if (e.key === 'ArrowRight') {
          setCurrentImageIndex(prev => 
            prev === selectedResort.images.length - 1 ? 0 : prev + 1
          )
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedResort])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedResort) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedResort])

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
    <section id="resorts" ref={sectionRef} className="py-20 bg-white scroll-mt-24">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResorts.map((resort) => (
            <div
              key={resort.id}
              onClick={() => setSelectedResort(resort)}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedResort?.id === resort.id 
                  ? 'border-[#d19457] shadow-xl ring-2 ring-[#d19457]/20' 
                  : 'border-transparent hover:border-[#d19457]/50 hover:shadow-xl'
              }`}
            >
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
              </div>

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
                  <span className="text-[#d19457] font-sans text-sm font-medium">View Details →</span>
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

      {/* Modal Popup */}
      {selectedResort && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedResort(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            style={{ animation: 'modalIn 0.3s ease-out' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image Carousel */}
            <div className="relative h-64 md:h-80">
              {/* Image Carousel */}
              <div className="relative w-full h-full overflow-hidden">
                {(selectedResort.images || [selectedResort.image]).map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                      idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#12103d] via-[#12103d]/40 to-transparent" />
              
              {/* Navigation Arrows */}
              {selectedResort.images && selectedResort.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(prev => 
                        prev === 0 ? selectedResort.images.length - 1 : prev - 1
                      )
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(prev => 
                        prev === selectedResort.images.length - 1 ? 0 : prev + 1
                      )
                    }}
                    className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group"
                  >
                    <ChevronRight className="w-5 h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {selectedResort.images && selectedResort.images.length > 1 && (
                <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {selectedResort.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(idx)
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedResort(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
              >
                <X className="w-5 h-5 text-[#12103d]" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-4 py-1.5 text-xs font-sans font-semibold rounded-full ${getBudgetColor(selectedResort.budgetRange)}`}>
                  {getBudgetLabel(selectedResort.budgetRange)}
                </span>
                {selectedResort.tag && (
                  <span className="px-4 py-1.5 text-xs font-sans font-semibold rounded-full bg-white/90 text-[#12103d]">
                    {selectedResort.tag}
                  </span>
                )}
              </div>

              {/* Image Counter */}
              {selectedResort.images && selectedResort.images.length > 1 && (
                <span className="absolute top-16 left-4 px-3 py-1.5 text-xs font-sans font-medium rounded-full bg-black/50 backdrop-blur-sm text-white">
                  {currentImageIndex + 1} / {selectedResort.images.length}
                </span>
              )}

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-0.5">{renderStars(selectedResort.rating)}</div>
                  <span className="font-sans text-sm text-white/80">({selectedResort.rating})</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-white">{selectedResort.name}</h2>
                <div className="flex items-center gap-2 text-white/80 mt-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans text-sm">{selectedResort.location}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
              <p className="font-sans text-[#44618b] text-lg mb-6">{selectedResort.description}</p>

              {/* Amenities */}
              <div className="mb-8">
                <h4 className="font-display text-xl text-[#12103d] mb-4">Amenities</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedResort.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-xl">
                      <Check className="w-5 h-5 text-[#d19457] flex-shrink-0" />
                      <span className="font-sans text-sm text-[#44618b]">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#12103d]/10">
                <div>
                  <span className="font-sans text-sm text-[#44618b]">Per night</span>
                  <div>
                    <span className="font-display text-4xl font-bold text-[#d19457]">{formatPrice(selectedResort.pricePerNight)}</span>
                  </div>
                  <p className="font-sans text-xs text-[#44618b]">* Taxes extra</p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedResort(null)}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-center"
                >
                  Book This Resort
                </a>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes modalIn {
              from {
                opacity: 0;
                transform: scale(0.95) translateY(10px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </section>
  )
}
