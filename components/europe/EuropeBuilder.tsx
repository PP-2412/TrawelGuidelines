'use client'

import { useState } from 'react'
import { Sparkles, Package } from 'lucide-react'
import CitySelector from './CitySelector'
import PreMadePackages from './PreMadePackages'
import EuropeMap from './EuropeMap'
import Itinerary from './Itinerary'

export type CitySelection = {
  id: string
  city: string
  country: string
  countryCode: string
  nights: number
  coordinates: { x: number; y: number }
}

export default function EuropeBuilder() {
  const [mode, setMode] = useState<'custom' | 'premade'>('custom')
  const [selectedCities, setSelectedCities] = useState<CitySelection[]>([])
  const [showItinerary, setShowItinerary] = useState(false)

  const handleGenerateItinerary = () => {
    if (selectedCities.length > 0) {
      setShowItinerary(true)
    }
  }

  const handleCloseItinerary = () => {
    setShowItinerary(false)
  }

  return (
    <section className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl text-[#12103d] mb-4">
            Plan Your <span className="font-accent text-[#d19457]">Europe</span> Trip
          </h1>
          <p className="font-sans text-[#44618b] tracking-wider max-w-2xl mx-auto">
            Build your dream European adventure - choose from our curated packages or create your own custom itinerary
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1.5 shadow-lg border border-gray-200 inline-flex">
            <button
              onClick={() => { setMode('custom'); setSelectedCities([]); setShowItinerary(false); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                mode === 'custom'
                  ? 'bg-[#12103d] text-white shadow-md'
                  : 'text-[#44618b] hover:text-[#12103d]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Create Your Own
            </button>
            <button
              onClick={() => { setMode('premade'); setSelectedCities([]); setShowItinerary(false); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                mode === 'premade'
                  ? 'bg-[#12103d] text-white shadow-md'
                  : 'text-[#44618b] hover:text-[#12103d]'
              }`}
            >
              <Package className="w-4 h-4" />
              Pre-made Packages
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Selection */}
          <div>
            {mode === 'custom' ? (
              <CitySelector 
                selectedCities={selectedCities} 
                setSelectedCities={setSelectedCities} 
              />
            ) : (
              <PreMadePackages 
                selectedCities={selectedCities}
                setSelectedCities={setSelectedCities} 
              />
            )}
          </div>

          {/* Right Side - Map */}
          <div>
            <EuropeMap selectedCities={selectedCities} />
          </div>
        </div>

        {/* Generate Button */}
        {selectedCities.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={handleGenerateItinerary}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#12103d] to-[#43124a] text-white font-sans text-sm font-semibold tracking-wider uppercase px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Generate Itinerary
            </button>
            <p className="font-sans text-xs text-[#44618b] mt-3">
              {selectedCities.length} {selectedCities.length === 1 ? 'city' : 'cities'} selected • {selectedCities.reduce((acc, c) => acc + c.nights, 0)} nights total
            </p>
          </div>
        )}
      </div>

      {/* Itinerary Modal */}
      {showItinerary && (
        <Itinerary 
          selectedCities={selectedCities} 
          onClose={handleCloseItinerary} 
        />
      )}
    </section>
  )
}
