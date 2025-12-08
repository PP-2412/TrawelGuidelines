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

  // Reset image index when cruise changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [cruise])

  // Handle keyboard navigation
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group"
              >
                <ChevronLeft className="w-5 h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group"
              >
                <ChevronRight className="w-5 h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx) }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
          >
            <X className="w-5 h-5 text-[#12103d]" />
          </button>

          {/* Tag Badge */}
          {cruise.tag && (
            <span className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-sans font-semibold rounded-full ${cruise.tagColor || 'bg-[#d19457] text-white'}`}>
              {cruise.tag}
            </span>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <span className="absolute top-4 left-32 px-3 py-1.5 text-xs font-sans font-medium rounded-full bg-black/50 backdrop-blur-sm text-white">
              {currentImageIndex + 1} / {images.length}
            </span>
          )}

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">{renderStars(cruise.rating)}</div>
              <span className="font-sans text-sm text-white/80">({cruise.rating})</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white">{cruise.name}</h2>
            <p className="font-sans text-lg text-[#d19457]">{cruise.tagline}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
          <p className="font-sans text-[#44618b] text-lg mb-6">{cruise.description}</p>

          {/* Cruise Info */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#43124a]" />
              </div>
              <div>
                <p className="font-sans text-xs text-[#44618b]">Duration</p>
                <p className="font-sans text-sm font-semibold text-[#12103d]">{cruise.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <Ship className="w-5 h-5 text-[#43124a]" />
              </div>
              <div>
                <p className="font-sans text-xs text-[#44618b]">Ship</p>
                <p className="font-sans text-sm font-semibold text-[#12103d]">{cruise.shipName}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#43124a]" />
              </div>
              <div>
                <p className="font-sans text-xs text-[#44618b]">Departure</p>
                <p className="font-sans text-sm font-semibold text-[#12103d]">{cruise.departurePort}</p>
              </div>
            </div>
          </div>

          {/* Route */}
          <div className="mb-8">
            <h4 className="font-display text-xl text-[#12103d] mb-4">Destinations</h4>
            <div className="flex flex-wrap gap-3">
              {cruise.route.map((dest, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-[#f5f5f5] rounded-full">
                  <span className="w-6 h-6 rounded-full bg-[#12103d] text-white flex items-center justify-center font-sans text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="font-sans text-sm text-[#12103d]">{dest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h4 className="font-display text-xl text-[#12103d] mb-4">Cruise Highlights</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {cruise.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-xl">
                  <Check className="w-5 h-5 text-[#d19457] flex-shrink-0" />
                  <span className="font-sans text-sm text-[#44618b]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <h4 className="font-display text-xl text-[#12103d] mb-4">What&apos;s Included</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {cruise.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#d19457]/10 rounded-xl">
                  <Check className="w-5 h-5 text-[#d19457] flex-shrink-0" />
                  <span className="font-sans text-sm text-[#12103d]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cabin Types */}
          <div className="mb-8">
            <h4 className="font-display text-xl text-[#12103d] mb-4">Cabin Options</h4>
            <div className="flex flex-wrap gap-2">
              {cruise.cabinTypes.map((cabin, idx) => (
                <span key={idx} className="px-4 py-2 bg-white border border-[#12103d]/10 rounded-full font-sans text-sm text-[#44618b]">
                  {cabin}
                </span>
              ))}
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#12103d]/10">
            <div>
              <span className="font-sans text-sm text-[#44618b]">Starting from</span>
              <div>
                <span className="font-display text-4xl font-bold text-[#d19457]">${cruise.price}</span>
                <span className="font-sans text-sm text-[#44618b]">/person</span>
              </div>
            </div>
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              Book This Cruise
            </button>
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
  )
}
