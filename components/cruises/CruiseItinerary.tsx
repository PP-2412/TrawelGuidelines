'use client'

import { X, Calendar, Hotel, Ship, Ticket, Utensils, FileText, Lock, MapPin, Anchor, Star } from 'lucide-react'
import { CruiseSelection } from './CruiseBuilder'

type Props = {
  selectedCruise: CruiseSelection
  onClose: () => void
}

const budgetItems = [
  { icon: Ship, label: 'Cruise Fare', emoji: '🚢' },
  { icon: Hotel, label: 'Accommodation (Cabin)', emoji: '🛏️' },
  { icon: Utensils, label: 'Meals & Dining', emoji: '🍽️' },
  { icon: Ticket, label: 'Port Charges & Taxes', emoji: '🎫' },
  { icon: Calendar, label: 'Shore Excursions', emoji: '🏝️' },
  { icon: FileText, label: 'Travel Insurance', emoji: '📄' },
]

// Sample itinerary days
const generateItinerary = (cruise: CruiseSelection) => {
  const destinations = cruise.destinations
  const nights = cruise.nights
  const itinerary = []
  
  // Day 1 - Departure
  itinerary.push({
    day: 1,
    port: cruise.departurePort,
    arrival: '-',
    departure: '5:00 PM',
    description: `Board the ship and set sail from ${cruise.departurePort}`,
  })
  
  // Middle days
  const portsPerTrip = Math.min(destinations.length, nights - 1)
  for (let i = 0; i < nights - 1; i++) {
    const portIndex = i % portsPerTrip
    const isSeaDay = i >= portsPerTrip
    
    itinerary.push({
      day: i + 2,
      port: isSeaDay ? 'At Sea' : destinations[portIndex],
      arrival: isSeaDay ? '-' : '8:00 AM',
      departure: isSeaDay ? '-' : '6:00 PM',
      description: isSeaDay 
        ? 'Enjoy onboard activities, spa, and entertainment'
        : `Explore the beautiful ${destinations[portIndex]}`,
    })
  }
  
  // Last day - Return
  itinerary.push({
    day: nights + 1,
    port: cruise.departurePort,
    arrival: '7:00 AM',
    departure: '-',
    description: `Return to ${cruise.departurePort} and disembark`,
  })
  
  return itinerary
}

export default function CruiseItinerary({ selectedCruise, onClose }: Props) {
  const itinerary = generateItinerary(selectedCruise)

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)
    }
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative inline-block">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl text-white">{selectedCruise.name}</h2>
            <p className="font-sans text-sm text-white/70 mt-1">
              {selectedCruise.nights} nights • {selectedCruise.destinations.join(' → ')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
          {/* Cruise Overview */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-64 h-40 rounded-xl overflow-hidden flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedCruise.image})` }}
                />
                <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-sans font-semibold rounded-full ${selectedCruise.tagColor}`}>
                  {selectedCruise.tag}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-0.5">
                    {renderStars(selectedCruise.rating)}
                  </div>
                  <span className="font-sans text-xs text-[#44618b]">({selectedCruise.rating} rating)</span>
                </div>
                <p className="font-sans text-sm text-[#d19457] font-medium mb-3">{selectedCruise.tagline}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-[#43124a]" />
                    <span className="font-sans text-xs text-[#44618b]">Departs: {selectedCruise.departurePort}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#43124a]" />
                    <span className="font-sans text-xs text-[#44618b]">{selectedCruise.nights} Nights</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedCruise.features.map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-[#f5f5f5] rounded-full font-sans text-xs text-[#12103d]">
                      {feature.icon} {feature.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary Section */}
          <div className="p-8 border-b border-gray-200">
            <h3 className="font-display text-xl text-[#12103d] mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#43124a]" />
              Cruise Itinerary
            </h3>

            {/* Itinerary Table */}
            <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gradient-to-r from-[#12103d] to-[#43124a]">
                <div className="col-span-1 font-sans text-xs font-semibold text-white uppercase tracking-wider">Day</div>
                <div className="col-span-3 font-sans text-xs font-semibold text-white uppercase tracking-wider">Port</div>
                <div className="col-span-2 font-sans text-xs font-semibold text-white uppercase tracking-wider text-center">Arrival</div>
                <div className="col-span-2 font-sans text-xs font-semibold text-white uppercase tracking-wider text-center">Departure</div>
                <div className="col-span-4 font-sans text-xs font-semibold text-white uppercase tracking-wider">Activity</div>
              </div>

              {/* Itinerary Rows */}
              {itinerary.map((day, index) => (
                <div
                  key={day.day}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 items-center bg-white ${
                    index !== itinerary.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="col-span-1">
                    <span className="w-8 h-8 bg-[#12103d] text-white rounded-full text-xs flex items-center justify-center font-bold">
                      {day.day}
                    </span>
                  </div>
                  <div className="col-span-3">
                    <span className={`font-display text-base ${day.port === 'At Sea' ? 'text-[#43124a] italic' : 'text-[#12103d]'}`}>
                      {day.port === 'At Sea' ? '🌊 ' : ''}{day.port}
                    </span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-sans text-sm text-[#44618b]">{day.arrival}</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-sans text-sm text-[#44618b]">{day.departure}</span>
                  </div>
                  <div className="col-span-4">
                    <span className="font-sans text-xs text-[#44618b]">{day.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Section */}
          <div className="p-8">
            <h3 className="font-display text-xl text-[#12103d] mb-6 flex items-center gap-2">
              <span className="text-xl">💰</span>
              Cruise Budget Breakdown
              <span className="font-sans text-xs font-normal text-[#44618b] ml-2">(Per Person)</span>
            </h3>

            <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden border border-gray-200">
              {/* Budget Items */}
              {budgetItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-6 py-4 bg-white ${
                    index !== budgetItems.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="font-sans text-sm text-[#12103d]">{item.label}</span>
                  </div>
                  <span className="font-sans text-sm font-semibold text-[#44618b]">TBD</span>
                </div>
              ))}

              {/* Total Cost */}
              <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#12103d] to-[#43124a]">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-white" />
                  <span className="font-display text-lg text-white">Total Cruise Cost</span>
                </div>
                <div className="text-right">
                  <span className="font-sans text-sm text-white/70">From </span>
                  <span className="font-sans text-lg font-bold text-[#d19457]">${selectedCruise.price}</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="font-sans text-xs text-[#44618b] mt-4 text-center">
              * Final pricing will be provided after consultation with our cruise specialists
            </p>
          </div>

          {/* CTA */}
          <div className="p-8 pt-0">
            <button className="w-full bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              Request Detailed Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
