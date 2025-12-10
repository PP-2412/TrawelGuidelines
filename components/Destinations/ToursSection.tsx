'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, Clock, Check, Users, Heart, Gem, Compass, Sparkles, Leaf, X, ChevronLeft, ChevronRight } from 'lucide-react'
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
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedTour])

  useEffect(() => {
    if (initialTourId) {
      const tour = tours.find(t => t.id === initialTourId)
      if (tour) {
        setSelectedTour(tour)
        setSelectedCategory(tour.category)
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [initialTourId, tours])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTour(null)
      if (selectedTour && selectedTour.images) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex(prev => 
            prev === 0 ? selectedTour.images.length - 1 : prev - 1
          )
        }
        if (e.key === 'ArrowRight') {
          setCurrentImageIndex(prev => 
            prev === selectedTour.images.length - 1 ? 0 : prev + 1
          )
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedTour])

  useEffect(() => {
    if (selectedTour) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedTour])

  const filteredTours = filterToursByCategory(tours, selectedCategory)

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#d19457] text-[#d19457]" />)
    }
    if (rating % 1 !== 0) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d19457]" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#d19457] text-[#d19457]" />
          </div>
        </div>
      )
    }
    return stars
  }

  const getCategoryIcon = (category: string) => {
    const Icon = categoryIcons[category] || Compass
    return <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
  }

  // Scroll filter into view on mobile
  const scrollFilterIntoView = (category: TourCategory) => {
    setSelectedCategory(category)
    if (window.innerWidth < 768) {
      filterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  return (
    <section id="tours" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f5f5f5] to-white scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block font-sans text-[10px] sm:text-xs font-medium tracking-[3px] sm:tracking-[4px] uppercase text-[#d19457] mb-3 sm:mb-4">
            Curated Experiences
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#12103d] mb-3 sm:mb-4">
            {countryName} <span className="font-accent text-[#d19457]">Tours</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#44618b] max-w-xl mx-auto px-4 sm:px-0">
            Handpicked experiences for every type of traveler
          </p>
        </div>

        {/* Category Filter - Horizontally scrollable on mobile */}
        <div ref={filterRef} className="mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 sm:overflow-visible">
            {tourCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollFilterIntoView(cat.id)}
                className={`flex-shrink-0 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 touch-target ${
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
        </div>

        {/* Tours Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              onClick={() => setSelectedTour(tour)}
              className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedTour?.id === tour.id 
                  ? 'border-[#d19457] shadow-xl ring-2 ring-[#d19457]/20' 
                  : 'border-transparent hover:border-[#d19457]/50 hover:shadow-xl active:scale-[0.98]'
              }`}
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                <span className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-sans font-semibold rounded-full bg-[#d19457] text-white capitalize">
                  {tour.category}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
                  {renderStars(tour.rating)}
                  <span className="font-sans text-[10px] sm:text-xs text-[#44618b] ml-1">({tour.rating})</span>
                </div>
                <h3 className="font-display text-base sm:text-lg text-[#12103d] mb-1.5 sm:mb-2 line-clamp-1">{tour.name}</h3>
                <p className="font-sans text-xs sm:text-sm text-[#44618b] mb-2 sm:mb-3 line-clamp-2">{tour.description}</p>

                <div className="flex items-center gap-3 sm:gap-4 text-[#44618b] text-xs sm:text-sm mb-3 sm:mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {tour.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#12103d]/5">
                  <div>
                    <span className="font-sans text-[10px] sm:text-xs text-[#44618b]">From </span>
                    <span className="font-display text-lg sm:text-xl font-bold text-[#12103d]">${tour.price}</span>
                  </div>
                  <span className="text-[#d19457] font-sans text-xs sm:text-sm font-medium">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <p className="font-sans text-[#44618b]">No tours found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal Popup - Mobile optimized */}
      {selectedTour && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedTour(null)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image Carousel */}
            <div className="relative h-48 sm:h-64 md:h-80">
              <div className="relative w-full h-full overflow-hidden">
                {(selectedTour.images || [selectedTour.image]).map((img, idx) => (
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
              {selectedTour.images && selectedTour.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(prev => 
                        prev === 0 ? selectedTour.images.length - 1 : prev - 1
                      )
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group touch-target"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(prev => 
                        prev === selectedTour.images.length - 1 ? 0 : prev + 1
                      )
                    }}
                    className="absolute right-12 sm:right-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group touch-target"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {selectedTour.images && selectedTour.images.length > 1 && (
                <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-10">
                  {selectedTour.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(idx)
                      }}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? 'bg-white w-4 sm:w-6' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedTour(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 touch-target"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d]" />
              </button>

              {/* Category Badge */}
              <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-sans font-semibold rounded-full bg-[#d19457] text-white capitalize">
                {selectedTour.category}
              </span>

              {/* Image Counter */}
              {selectedTour.images && selectedTour.images.length > 1 && (
                <span className="absolute top-3 sm:top-4 left-24 sm:left-28 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-sans font-medium rounded-full bg-black/50 backdrop-blur-sm text-white">
                  {currentImageIndex + 1} / {selectedTour.images.length}
                </span>
              )}

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="flex items-center gap-0.5">{renderStars(selectedTour.rating)}</div>
                  <span className="font-sans text-xs sm:text-sm text-white/80">({selectedTour.rating})</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white line-clamp-2">{selectedTour.name}</h2>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[50vh] sm:max-h-[calc(90vh-20rem)]">
              <p className="font-sans text-sm sm:text-base md:text-lg text-[#44618b] mb-4 sm:mb-6">{selectedTour.description}</p>

              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 text-[#44618b]">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#43124a]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Duration</p>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-[#12103d]">{selectedTour.duration}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6 sm:mb-8">
                <h4 className="font-display text-lg sm:text-xl text-[#12103d] mb-3 sm:mb-4">Tour Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {selectedTour.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#f5f5f5] rounded-lg sm:rounded-xl">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#d19457] flex-shrink-0" />
                      <span className="font-sans text-xs sm:text-sm text-[#44618b]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-[#12103d]/10">
                <div className="text-center sm:text-left">
                  <span className="font-sans text-xs sm:text-sm text-[#44618b]">Starting from</span>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#d19457]">${selectedTour.price}</span>
                    <span className="font-sans text-xs sm:text-sm text-[#44618b]">/person</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedTour(null)}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-center touch-target"
                >
                  Book This Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
