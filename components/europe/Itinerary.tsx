'use client'

import { X, Calendar, Hotel, Train, Ticket, Plane, FileText, Lock, MapPin } from 'lucide-react'
import { CitySelection } from './EuropeBuilder'

type Props = {
  selectedCities: CitySelection[]
  onClose: () => void
}

const budgetItems = [
  { icon: Hotel, label: 'Accommodation', emoji: '🏨' },
  { icon: Train, label: 'Inter-city Transport', emoji: '🚃' },
  { icon: Ticket, label: 'City Pass & Airport', emoji: '🎫' },
  { icon: Calendar, label: 'Activities & Tours', emoji: '🎡' },
  { icon: Plane, label: 'International Flights', emoji: '✈️' },
  { icon: FileText, label: 'Visa & Insurance', emoji: '📄' },
]

export default function Itinerary({ selectedCities, onClose }: Props) {
  const totalNights = selectedCities.reduce((acc, c) => acc + c.nights, 0)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl text-white">Your Europe Itinerary</h2>
            <p className="font-sans text-sm text-white/70 mt-1">
              {selectedCities.length} cities • {totalNights} nights
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
          {/* Itinerary Section */}
          <div className="p-8 border-b border-gray-200">
            <h3 className="font-display text-xl text-[#12103d] mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#43124a]" />
              Your Travel Itinerary
            </h3>

            {/* Itinerary Table */}
            <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gradient-to-r from-[#12103d] to-[#43124a]">
                <div className="col-span-6 font-sans text-xs font-semibold text-white uppercase tracking-wider">City</div>
                <div className="col-span-3 font-sans text-xs font-semibold text-white uppercase tracking-wider text-center">Nights</div>
                <div className="col-span-3 font-sans text-xs font-semibold text-white uppercase tracking-wider text-center">Days</div>
              </div>

              {/* City Rows */}
              {selectedCities.map((city, index) => {
                const startDay = selectedCities.slice(0, index).reduce((acc, c) => acc + c.nights, 1)
                const endDay = startDay + city.nights - 1

                return (
                  <div
                    key={city.id}
                    className={`grid grid-cols-12 gap-4 px-6 py-4 items-center bg-white ${
                      index !== selectedCities.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="col-span-6 flex items-center gap-3">
                      <span className="w-6 h-6 bg-[#12103d] text-white rounded-full text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span className="text-xs font-sans font-medium text-[#44618b]">{city.countryCode}</span>
                      <span className="font-display text-lg text-[#12103d]">{city.city}</span>
                    </div>
                    <div className="col-span-3 text-center">
                      <span className="font-sans text-lg font-semibold text-[#12103d]">{city.nights}</span>
                    </div>
                    <div className="col-span-3 text-center">
                      <span className="font-sans text-sm text-[#44618b]">
                        Day {startDay}{endDay !== startDay ? ` - ${endDay}` : ''}
                      </span>
                    </div>
                  </div>
                )
              })}

              {/* Total Row */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gradient-to-r from-[#12103d]/10 to-[#43124a]/10 border-t-2 border-[#12103d]">
                <div className="col-span-6 font-display text-lg text-[#12103d]">Total Trip</div>
                <div className="col-span-3 text-center">
                  <span className="font-sans text-lg font-bold text-[#12103d]">{totalNights} Nights</span>
                </div>
                <div className="col-span-3 text-center">
                  <span className="font-sans text-sm font-medium text-[#12103d]">{totalNights + 1} Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Section */}
          <div className="p-8">
            <h3 className="font-display text-xl text-[#12103d] mb-6 flex items-center gap-2">
              <span className="text-xl">💰</span>
              Trip Budget Breakdown
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
                  <span className="font-display text-lg text-white">Total Trip Cost</span>
                </div>
                <span className="font-sans text-lg font-bold text-[#d19457]">TBD</span>
              </div>
            </div>

            {/* Note */}
            <p className="font-sans text-xs text-[#44618b] mt-4 text-center">
              * Final pricing will be provided after consultation with our travel experts
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
