'use client'

import { useState, useEffect } from 'react'
import { Star, Clock, MapPin, Check, Users, Heart, Gem, Compass, Sparkles, Leaf, X, ChevronDown } from 'lucide-react'
import { Tour, TourCategory, tourCategories, filterToursByCategory } from './destinationsData'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  adventure: Compass,
  family: Users,
  couple: Heart,
  luxury: Gem,
  cultural: Sparkles,
  wellness: Leaf,
}

interface ToursSectionProps {
  tours: Tour[]
  countryName: string
  initialTourId?: string | null
}

export default function ToursSection({ tours, countryName, initialTourId }: ToursSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<TourCategory>('all')
  const [expandedTourId, setExpandedTourId] = useState<string | null>(null)

  // Auto-expand tour from URL param
  useEffect(() => {
    if (initialTourId) {
      const tour = tours.find(t => t.id === initialTourId)
      if (tour) {
        setExpandedTourId(tour.id)
        setSelectedCategory(tour.category)
        // Scroll to the tour after a short delay
        setTimeout(() => {
          const element = document.getElementById(`tour-${tour.id}`)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, 100)
      }
    }
  }, [initialTourId, tours])

  const filteredTours = filterToursByCategory(tours, selectedCategory)

  const toggleTour = (tourId: string) => {
    setExpandedTourId(expandedTourId === tourId ? null : tourId)
  }

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

  const getCategoryIcon = (category: string) => {
    const Icon = categoryIcons[category] || Compass
    return <Icon className="w-4 h-4" />
  }

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457] mb-4">
            Curated Experiences
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            {countryName} <span className="font-accent text-[#d19457]">Tours</span>
          </h2>
          <p className="font-sans text-[#44618b] max-w-xl mx-auto">
            Handpicked experiences for every type of traveler
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tourCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-[#12103d] text-white shadow-lg'
                  : 'bg-white text-[#44618b] border border-[#12103d]/10 hover:border-[#d19457] hover:text-[#d19457]'
              }`}
            >
              {cat.id !== 'all' && getCategoryIcon(cat.id)}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => {
            const isExpanded = expandedTourId === tour.id
            
            return (
              <div
                key={tour.id}
                id={`tour-${tour.id}`}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all duration-500 ${
                  isExpanded
                    ? 'md:col-span-2 lg:col-span-3 border-[#12103d]'
                    : 'border-transparent hover:border-[#d19457]/50 hover:shadow-xl'
                }`}
              >
                {isExpanded ? (
                  /* Expanded View */
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left - Image */}
                    <div className="relative h-64 md:h-full min-h-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${tour.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-sans font-semibold rounded-full bg-[#d19457] text-white capitalize">
                        {tour.category}
                      </span>
                      <button
                        onClick={() => toggleTour(tour.id)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                      >
                        <X className="w-5 h-5 text-[#12103d]" />
                      </button>
                    </div>

                    {/* Right - Details */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-0.5">{renderStars(tour.rating)}</div>
                        <span className="font-sans text-sm text-[#44618b]">({tour.rating})</span>
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl text-[#12103d] mb-2">{tour.name}</h3>
                      <p className="font-sans text-[#44618b] mb-6">{tour.description}</p>

                      <div className="flex items-center gap-4 mb-6 text-[#44618b]">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-[#43124a]" />
                          <span className="font-sans text-sm">{tour.duration}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-3">Highlights</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {tour.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-[#d19457] flex-shrink-0" />
                              <span className="font-sans text-sm text-[#44618b]">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-[#12103d]/10">
                        <div>
                          <span className="font-sans text-sm text-[#44618b]">Starting from</span>
                          <div>
                            <span className="font-display text-3xl font-bold text-[#d19457]">${tour.price}</span>
                            <span className="font-sans text-sm text-[#44618b]">/person</span>
                          </div>
                        </div>
                        <a
                          href="#contact"
                          className="bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Collapsed View */
                  <div 
                    className="cursor-pointer"
                    onClick={() => toggleTour(tour.id)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                        style={{ backgroundImage: `url(${tour.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-sans font-semibold rounded-full bg-[#d19457] text-white capitalize">
                        {tour.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-2">
                        {renderStars(tour.rating)}
                        <span className="font-sans text-xs text-[#44618b] ml-1">({tour.rating})</span>
                      </div>
                      <h3 className="font-display text-lg text-[#12103d] mb-2">{tour.name}</h3>
                      <p className="font-sans text-sm text-[#44618b] mb-3 line-clamp-2">{tour.description}</p>

                      <div className="flex items-center gap-4 text-[#44618b] text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {tour.duration}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[#12103d]/5">
                        <div>
                          <span className="font-sans text-xs text-[#44618b]">From </span>
                          <span className="font-display text-xl font-bold text-[#12103d]">${tour.price}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#d19457] font-sans text-sm font-medium">
                          View Details
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <p className="font-sans text-[#44618b]">No tours found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
