'use client'

import { Ship, MapPin, Calendar, Star, Anchor } from 'lucide-react'
import { CruiseSelection } from './CruiseBuilder'

type Props = {
  selectedCruise: CruiseSelection | null
}

export default function CruiseDetails({ selectedCruise }: Props) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)
    }
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-amber-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )
    }
    return stars
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden sticky top-28">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-6 py-4">
        <h2 className="font-display text-xl text-white flex items-center gap-2">
          <Ship className="w-5 h-5" />
          Cruise Details
        </h2>
        <p className="font-sans text-xs text-white/70 mt-1">
          {selectedCruise 
            ? 'Review your selection'
            : 'Select a cruise to see details'
          }
        </p>
      </div>

      {selectedCruise ? (
        <div className="p-6">
          {/* Cruise Image */}
          <div className="relative h-40 rounded-xl overflow-hidden mb-4">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedCruise.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-sans font-semibold rounded-full ${selectedCruise.tagColor}`}>
              {selectedCruise.tag}
            </span>
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="font-display text-lg text-white">{selectedCruise.name}</h3>
              <p className="font-sans text-xs text-white/80">{selectedCruise.tagline}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {renderStars(selectedCruise.rating)}
            </div>
            <span className="font-sans text-xs text-[#44618b]">({selectedCruise.rating} rating)</span>
          </div>

          {/* Details List */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-[#f5f5f5] rounded-xl">
              <MapPin className="w-5 h-5 text-[#43124a] flex-shrink-0" />
              <div>
                <p className="font-sans text-xs text-[#44618b] uppercase tracking-wider">Destinations</p>
                <p className="font-sans text-sm text-[#12103d] font-medium">{selectedCruise.destinations.join(' → ')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#f5f5f5] rounded-xl">
              <Calendar className="w-5 h-5 text-[#43124a] flex-shrink-0" />
              <div>
                <p className="font-sans text-xs text-[#44618b] uppercase tracking-wider">Duration</p>
                <p className="font-sans text-sm text-[#12103d] font-medium">{selectedCruise.nights} Nights / {selectedCruise.nights + 1} Days</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#f5f5f5] rounded-xl">
              <Anchor className="w-5 h-5 text-[#43124a] flex-shrink-0" />
              <div>
                <p className="font-sans text-xs text-[#44618b] uppercase tracking-wider">Departure Port</p>
                <p className="font-sans text-sm text-[#12103d] font-medium">{selectedCruise.departurePort}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-3">Highlights</p>
            <div className="space-y-2">
              {selectedCruise.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-base">{feature.icon}</span>
                  <span className="font-sans text-sm text-[#44618b]">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="mt-6 p-4 bg-gradient-to-r from-[#12103d]/10 to-[#43124a]/10 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-[#44618b]">Starting from</span>
              <div className="text-right">
                <span className="font-display text-2xl font-bold text-[#d19457]">${selectedCruise.price}</span>
                <span className="font-sans text-xs text-[#44618b]">/person</span>
              </div>
            </div>
            <p className="font-sans text-xs text-[#44618b] mt-2">* Price excludes taxes and port fees</p>
          </div>
        </div>
      ) : (
        <div className="px-6 py-16 text-center">
          <Ship className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="font-sans text-[#44618b] text-sm">Browse our cruise options and select one to see full details here</p>
        </div>
      )}
    </div>
  )
}
