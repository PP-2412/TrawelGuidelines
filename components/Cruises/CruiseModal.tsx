'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Star, Calendar, Ship, MapPin, Check } from 'lucide-react'
import { Cruise } from './cruisesData'

interface CruiseModalProps {
  cruise: Cruise
  onClose: () => void
  onBookClick: () => void
}

export default function CruiseModal({ cruise, onClose, onBookClick }: CruiseModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [cruise])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
      if (cruise.images && cruise.images.length > 1) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex(prev => 
            prev === 0 ? cruise.images.length - 1 : prev - 1
          )
        }
        if (e.key === 'ArrowRight') {
          setCurrentImageIndex(prev => 
            prev === cruise.images.length - 1 ? 0 : prev + 1
          )
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [cruise, onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

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

  const nextImage = () => {
    if (cruise.images && cruise.images.length > 1) {
      setCurrentImageIndex(prev => prev === cruise.images.length - 1 ? 0 : prev + 1)
    }
  }

  const prevImage = () => {
    if (cruise.images && cruise.images.length > 1) {
      setCurrentImageIndex(prev => prev === 0 ? cruise.images.length - 1 : prev - 1)
    }
  }

  const images = cruise.images || [cruise.image]

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image Carousel */}
        <div className="relative h-48 sm:h-64 md:h-80">
          <div className="relative w-full h-full overflow-hidden">
            {images.map((img, idx) => (
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
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group touch-target"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                className="absolute right-12 sm:right-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group touch-target"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx) }}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'bg-white w-4 sm:w-6' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 touch-target"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d]" />
          </button>

          {/* Tag Badge */}
          {cruise.tag && (
            <span className={`absolute top-3 sm:top-4 left-3 sm:left-4 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-sans font-semibold rounded-full ${cruise.tagColor || 'bg-[#d19457] text-white'}`}>
              {cruise.tag}
            </span>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <span className="absolute top-3 sm:top-4 left-24 sm:left-32 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-sans font-medium rounded-full bg-black/50 backdrop-blur-sm text-white">
              {currentImageIndex + 1} / {images.length}
            </span>
          )}

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className="flex items-center gap-0.5">{renderStars(cruise.rating)}</div>
              <span className="font-sans text-xs sm:text-sm text-white/80">({cruise.rating})</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white line-clamp-2">{cruise.name}</h2>
            <p className="font-sans text-sm sm:text-lg text-[#d19457]">{cruise.tagline}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[50vh] sm:max-h-[calc(90vh-20rem)]">
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#44618b] mb-4 sm:mb-6">{cruise.description}</p>

          {/* Cruise Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#43124a]" />
              </div>
              <div>
                <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Duration</p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#12103d]">{cruise.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-[#43124a]" />
              </div>
              <div>
                <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Ship</p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#12103d]">{cruise.shipName}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#43124a]" />
              </div>
              <div>
                <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Departure</p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#12103d]">{cruise.departurePort}</p>
              </div>
            </div>
          </div>

          {/* Route */}
          <div className="mb-6 sm:mb-8">
            <h4 className="font-display text-lg sm:text-xl text-[#12103d] mb-3 sm:mb-4">Destinations</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cruise.route.map((dest, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f5f5f5] rounded-full">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#12103d] text-white flex items-center justify-center font-sans text-[10px] sm:text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-[#12103d]">{dest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6 sm:mb-8">
            <h4 className="font-display text-lg sm:text-xl text-[#12103d] mb-3 sm:mb-4">Cruise Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {cruise.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#f5f5f5] rounded-lg sm:rounded-xl">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#d19457] flex-shrink-0" />
                  <span className="font-sans text-xs sm:text-sm text-[#44618b]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-6 sm:mb-8">
            <h4 className="font-display text-lg sm:text-xl text-[#12103d] mb-3 sm:mb-4">What&apos;s Included</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {cruise.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#d19457]/10 rounded-lg sm:rounded-xl">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#d19457] flex-shrink-0" />
                  <span className="font-sans text-xs sm:text-sm text-[#12103d]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cabin Types */}
          <div className="mb-6 sm:mb-8">
            <h4 className="font-display text-lg sm:text-xl text-[#12103d] mb-3 sm:mb-4">Cabin Options</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {cruise.cabinTypes.map((cabin, idx) => (
                <span key={idx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#12103d]/10 rounded-full font-sans text-xs sm:text-sm text-[#44618b]">
                  {cabin}
                </span>
              ))}
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-[#12103d]/10">
            <div className="text-center sm:text-left">
              <span className="font-sans text-xs sm:text-sm text-[#44618b]">Starting from</span>
              <div>
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#d19457]">${cruise.price}</span>
                <span className="font-sans text-xs sm:text-sm text-[#44618b]">/person</span>
              </div>
            </div>
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-center touch-target"
            >
              Book This Cruise
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
