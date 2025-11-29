'use client'

import { useState } from 'react'
import { Sparkles, Package, Anchor } from 'lucide-react'
import CruiseSelector from './CruiseSelector'
import PreMadeCruisePackages from './PreMadeCruisePackages'
import CruiseDetails from './CruiseDetails'
import CruiseItinerary from './CruiseItinerary'

export type CruiseSelection = {
  id: string
  name: string
  tagline: string
  tag: string
  tagColor: string
  rating: number
  destinations: string[]
  features: { icon: string; text: string }[]
  price: number
  image: string
  nights: number
  departurePort: string
}

export default function CruiseBuilder() {
  const [mode, setMode] = useState<'browse' | 'packages'>('browse')
  const [selectedCruise, setSelectedCruise] = useState<CruiseSelection | null>(null)
  const [showItinerary, setShowItinerary] = useState(false)

  const handleGenerateItinerary = () => {
    if (selectedCruise) {
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
            Set Sail on Your <span className="font-accent text-[#d19457]">Dream Cruise</span>
          </h1>
          <p className="font-sans text-[#44618b] tracking-wider max-w-2xl mx-auto">
            Discover world-class cruise experiences - from family adventures to luxury voyages across the globe
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1.5 shadow-lg border border-gray-200 inline-flex">
            <button
              onClick={() => { setMode('browse'); setSelectedCruise(null); setShowItinerary(false); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                mode === 'browse'
                  ? 'bg-[#12103d] text-white shadow-md'
                  : 'text-[#44618b] hover:text-[#12103d]'
              }`}
            >
              <Anchor className="w-4 h-4" />
              Browse Cruises
            </button>
            <button
              onClick={() => { setMode('packages'); setSelectedCruise(null); setShowItinerary(false); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                mode === 'packages'
                  ? 'bg-[#12103d] text-white shadow-md'
                  : 'text-[#44618b] hover:text-[#12103d]'
              }`}
            >
              <Package className="w-4 h-4" />
              Cruise Packages
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Selection (wider) */}
          <div className="lg:col-span-3">
            {mode === 'browse' ? (
              <CruiseSelector 
                selectedCruise={selectedCruise} 
                setSelectedCruise={setSelectedCruise} 
              />
            ) : (
              <PreMadeCruisePackages 
                selectedCruise={selectedCruise}
                setSelectedCruise={setSelectedCruise} 
              />
            )}
          </div>

          {/* Right Side - Details */}
          <div className="lg:col-span-2">
            <CruiseDetails selectedCruise={selectedCruise} />
          </div>
        </div>

        {/* Generate Button */}
        {selectedCruise && (
          <div className="mt-12 text-center">
            <button
              onClick={handleGenerateItinerary}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#12103d] to-[#43124a] text-white font-sans text-sm font-semibold tracking-wider uppercase px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              View Cruise Details & Book
            </button>
            <p className="font-sans text-xs text-[#44618b] mt-3">
              {selectedCruise.name} • {selectedCruise.nights} nights • From ${selectedCruise.price}/person
            </p>
          </div>
        )}
      </div>

      {/* Itinerary Modal */}
      {showItinerary && selectedCruise && (
        <CruiseItinerary 
          selectedCruise={selectedCruise} 
          onClose={handleCloseItinerary} 
        />
      )}
    </section>
  )
}
