'use client'

import { useState } from 'react'
import { Plus, Minus, X, MapPin, Search } from 'lucide-react'
import { CitySelection } from './EuropeBuilder'

const availableCities = [
  { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', coordinates: { x: 240, y: 280 } },
  { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', coordinates: { x: 420, y: 380 } },
  { id: 'barcelona', city: 'Barcelona', country: 'Spain', countryCode: 'ES', coordinates: { x: 180, y: 340 } },
  { id: 'amsterdam', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', coordinates: { x: 290, y: 200 } },
  { id: 'london', city: 'London', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 210, y: 220 } },
  { id: 'prague', city: 'Prague', country: 'Czech Republic', countryCode: 'CZ', coordinates: { x: 440, y: 240 } },
  { id: 'vienna', city: 'Vienna', country: 'Austria', countryCode: 'AT', coordinates: { x: 450, y: 280 } },
  { id: 'berlin', city: 'Berlin', country: 'Germany', countryCode: 'DE', coordinates: { x: 410, y: 200 } },
  { id: 'zurich', city: 'Zurich', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 360, y: 290 } },
  { id: 'venice', city: 'Venice', country: 'Italy', countryCode: 'IT', coordinates: { x: 420, y: 310 } },
  { id: 'florence', city: 'Florence', country: 'Italy', countryCode: 'IT', coordinates: { x: 400, y: 350 } },
  { id: 'madrid', city: 'Madrid', country: 'Spain', countryCode: 'ES', coordinates: { x: 120, y: 380 } },
  { id: 'lisbon', city: 'Lisbon', country: 'Portugal', countryCode: 'PT', coordinates: { x: 40, y: 385 } },
  { id: 'brussels', city: 'Brussels', country: 'Belgium', countryCode: 'BE', coordinates: { x: 280, y: 220 } },
  { id: 'munich', city: 'Munich', country: 'Germany', countryCode: 'DE', coordinates: { x: 400, y: 280 } },
  { id: 'santorini', city: 'Santorini', country: 'Greece', countryCode: 'GR', coordinates: { x: 570, y: 450 } },
  { id: 'athens', city: 'Athens', country: 'Greece', countryCode: 'GR', coordinates: { x: 560, y: 430 } },
  { id: 'dubrovnik', city: 'Dubrovnik', country: 'Croatia', countryCode: 'HR', coordinates: { x: 465, y: 390 } },
  { id: 'interlaken', city: 'Interlaken', country: 'Switzerland', countryCode: 'CH', coordinates: { x: 350, y: 300 } },
  { id: 'nice', city: 'Nice', country: 'France', countryCode: 'FR', coordinates: { x: 310, y: 330 } },
  { id: 'edinburgh', city: 'Edinburgh', country: 'United Kingdom', countryCode: 'GB', coordinates: { x: 210, y: 130 } },
  { id: 'dublin', city: 'Dublin', country: 'Ireland', countryCode: 'IE', coordinates: { x: 135, y: 210 } },
  { id: 'copenhagen', city: 'Copenhagen', country: 'Denmark', countryCode: 'DK', coordinates: { x: 370, y: 195 } },
  { id: 'stockholm', city: 'Stockholm', country: 'Sweden', countryCode: 'SE', coordinates: { x: 415, y: 170 } },
  { id: 'oslo', city: 'Oslo', country: 'Norway', countryCode: 'NO', coordinates: { x: 355, y: 120 } },
]

type Props = {
  selectedCities: CitySelection[]
  setSelectedCities: React.Dispatch<React.SetStateAction<CitySelection[]>>
}

export default function CitySelector({ selectedCities, setSelectedCities }: Props) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCities = availableCities.filter(
    city =>
      !selectedCities.find(s => s.id === city.id) &&
      (city.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.country.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const addCity = (city: typeof availableCities[0]) => {
    setSelectedCities(prev => [...prev, { ...city, nights: 2 }])
    setSearchQuery('')
  }

  const removeCity = (cityId: string) => {
    setSelectedCities(prev => prev.filter(c => c.id !== cityId))
  }

  const updateNights = (cityId: string, delta: number) => {
    setSelectedCities(prev =>
      prev.map(c =>
        c.id === cityId ? { ...c, nights: Math.max(1, Math.min(10, c.nights + delta)) } : c
      )
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-6 py-4">
        <h2 className="font-display text-xl text-white flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Your Travel Itinerary
        </h2>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#44618b]" />
          <input
            type="text"
            placeholder="Search cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#f5f5f5] border border-gray-200 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#12103d]/20 focus:border-[#12103d]"
          />
        </div>

        {/* City Suggestions */}
        {searchQuery && (
          <div className="mt-2 max-h-48 overflow-y-auto">
            {filteredCities.length > 0 ? (
              filteredCities.slice(0, 5).map(city => (
                <button
                  key={city.id}
                  onClick={() => addCity(city)}
                  className="w-full flex items-center gap-3 px-3 py-2 hover:bg-[#f5f5f5] rounded-lg transition-colors text-left"
                >
                  <span className="text-xs font-sans font-medium text-[#44618b] w-6">{city.countryCode}</span>
                  <span className="font-sans text-sm text-[#12103d]">{city.city}</span>
                  <span className="font-sans text-xs text-[#44618b]">({city.country})</span>
                  <Plus className="w-4 h-4 text-[#12103d] ml-auto" />
                </button>
              ))
            ) : (
              <p className="font-sans text-sm text-[#44618b] px-3 py-2">No cities found</p>
            )}
          </div>
        )}
      </div>

      {/* Selected Cities Table */}
      {selectedCities.length > 0 ? (
        <div>
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gradient-to-r from-[#12103d]/10 to-[#43124a]/10 border-b border-gray-200">
            <div className="col-span-5 font-sans text-xs font-semibold text-[#12103d] uppercase tracking-wider">City</div>
            <div className="col-span-4 font-sans text-xs font-semibold text-[#12103d] uppercase tracking-wider text-center">Nights</div>
            <div className="col-span-3 font-sans text-xs font-semibold text-[#12103d] uppercase tracking-wider text-center">Action</div>
          </div>

          {/* City Rows */}
          {selectedCities.map((city, index) => (
            <div
              key={city.id}
              className={`grid grid-cols-12 gap-4 px-6 py-4 items-center ${
                index !== selectedCities.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="col-span-5 flex items-center gap-2">
                <span className="text-xs font-sans font-medium text-[#44618b]">{city.countryCode}</span>
                <span className="font-display text-lg text-[#12103d]">{city.city}</span>
              </div>
              <div className="col-span-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => updateNights(city.id, -1)}
                  className="w-8 h-8 rounded-full bg-gray-200 text-[#12103d] flex items-center justify-center hover:bg-[#12103d] hover:text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-lg font-semibold text-[#12103d] w-8 text-center">{city.nights}</span>
                <button
                  onClick={() => updateNights(city.id, 1)}
                  className="w-8 h-8 rounded-full bg-[#12103d] text-white flex items-center justify-center hover:bg-[#43124a] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="col-span-3 flex justify-center">
                <button
                  onClick={() => removeCity(city.id)}
                  className="px-4 py-1.5 bg-[#d19457] text-white font-sans text-xs font-medium rounded-full hover:bg-[#c77e36] transition-colors"
                >
                  × Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-6 py-12 text-center">
          <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="font-sans text-[#44618b] text-sm">Search and add cities to build your itinerary</p>
        </div>
      )}
    </div>
  )
}
