'use client'

import { useState, useEffect, useMemo } from 'react'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { Mountain, Search, Plus, Minus, X, Sparkles, MapPin, Calendar, Star, ArrowRight, Heart, Users, UserPlus, Compass, Gem, Send, Wallet, Coins, Settings2, Map, Check } from 'lucide-react'
import { europeCities, europeTours, EuropeCity, EuropeTour, getCityById, getTripTypeLabel } from '@/components/Europe/europeData'

type TabType = 'customise' | 'tours'
type TripType = 'adventure' | 'romantic' | 'family' | 'friends' | 'cultural' | 'luxury' | null
type BudgetType = 'budget' | 'comfort' | 'premium' | 'luxury' | null

interface SelectedCity {
  city: EuropeCity
  nights: number
}

const travelTypes = [
  { id: 'adventure' as const, name: 'Adventure', icon: Compass, color: 'from-[#44618b] to-[#12103d]' },
  { id: 'romantic' as const, name: 'Romantic', icon: Heart, color: 'from-[#8550a2] to-[#43124a]' },
  { id: 'family' as const, name: 'Family', icon: Users, color: 'from-[#d19457] to-[#c77e36]' },
  { id: 'friends' as const, name: 'Friends', icon: UserPlus, color: 'from-[#43124a] to-[#230c33]' },
  { id: 'cultural' as const, name: 'Cultural', icon: Mountain, color: 'from-[#12103d] to-[#44618b]' },
  { id: 'luxury' as const, name: 'Luxury', icon: Gem, color: 'from-[#c77e36] to-[#d19457]' },
]

const budgetOptions = [
  { id: 'budget' as const, name: 'Budget', range: '$1,000 - $2,000' },
  { id: 'comfort' as const, name: 'Comfort', range: '$2,000 - $3,500' },
  { id: 'premium' as const, name: 'Premium', range: '$3,500 - $5,000' },
  { id: 'luxury' as const, name: 'Luxury', range: '$5,000+' },
]

export default function EuropePage() {
  const [activeTab, setActiveTab] = useState<TabType>('tours')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCities, setSelectedCities] = useState<SelectedCity[]>([])
  const [tripType, setTripType] = useState<TripType>(null)
  const [budget, setBudget] = useState<BudgetType>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedTour, setSelectedTour] = useState<EuropeTour | null>(null)

  // Filter cities based on search
  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return europeCities
      .filter(city => 
        city.name.toLowerCase().includes(query) || 
        city.country.toLowerCase().includes(query)
      )
      .filter(city => !selectedCities.some(sc => sc.city.id === city.id))
      .slice(0, 6)
  }, [searchQuery, selectedCities])

  // Calculate total nights
  const totalNights = useMemo(() => {
    return selectedCities.reduce((sum, sc) => sum + sc.nights, 0)
  }, [selectedCities])

  // Add city to itinerary
  const addCity = (city: EuropeCity) => {
    setSelectedCities(prev => [...prev, { city, nights: city.suggestedNights }])
    setSearchQuery('')
  }

  // Remove city from itinerary
  const removeCity = (cityId: string) => {
    setSelectedCities(prev => prev.filter(sc => sc.city.id !== cityId))
  }

  // Update nights for a city
  const updateNights = (cityId: string, delta: number) => {
    setSelectedCities(prev => prev.map(sc => {
      if (sc.city.id === cityId) {
        const newNights = Math.max(sc.city.minNights, Math.min(sc.city.maxNights, sc.nights + delta))
        return { ...sc, nights: newNights }
      }
      return sc
    }))
  }

  // Customise from tour
  const customiseFromTour = (tour: EuropeTour) => {
    const cities: SelectedCity[] = tour.cities
      .map(tc => {
        const city = getCityById(tc.cityId)
        if (city) {
          return { city, nights: tc.nights }
        }
        return null
      })
      .filter((sc): sc is SelectedCity => sc !== null)
    
    setSelectedCities(cities)
    setTripType(tour.tripType)
    setActiveTab('customise')
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Submit custom itinerary
  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      const cityNames = selectedCities.map(sc => sc.city.name).join(', ')
      alert(`Thank you! Your custom ${totalNights}-night Europe trip to ${cityNames} has been submitted. Our travel experts will contact you within 24 hours!`)
    }, 1500)
  }

  const isFormComplete = selectedCities.length > 0 && tripType && budget

  // Render stars
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-[#d19457] text-[#d19457]" />)
    }
    return stars
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12103d]/60 via-[#12103d]/40 to-[#12103d]/80" />
        
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#d19457] opacity-10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8550a2] opacity-10 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center px-6 pt-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Mountain className="w-8 h-8 text-[#d19457]" />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl text-white mb-4">
            Explore <span className="font-accent text-[#d19457]">Europe</span>
          </h1>
          
          <p className="font-sans text-xs tracking-[4px] uppercase text-[#d19457] mb-4">
            From Historic Cities to Stunning Coastlines
          </p>
          
          <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto">
            Build your dream European adventure or choose from our expertly curated tours
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-[#12103d]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('customise')}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'customise'
                  ? 'bg-gradient-to-r from-[#12103d] to-[#43124a] text-white shadow-lg'
                  : 'bg-[#f5f5f5] text-[#44618b] hover:bg-[#12103d]/10'
              }`}
            >
              <Settings2 className="w-5 h-5" />
              Customise Itinerary
            </button>
            <button
              onClick={() => setActiveTab('tours')}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'tours'
                  ? 'bg-gradient-to-r from-[#12103d] to-[#43124a] text-white shadow-lg'
                  : 'bg-[#f5f5f5] text-[#44618b] hover:bg-[#12103d]/10'
              }`}
            >
              <Map className="w-5 h-5" />
              Pre-Made Tours
            </button>
          </div>
        </div>
      </section>

      {/* Customise Itinerary Tab */}
      {activeTab === 'customise' && (
        <section className="py-16 bg-gradient-to-b from-[#f5f5f5] to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
                Build Your <span className="font-accent text-[#d19457]">Dream Trip</span>
              </h2>
              <p className="font-sans text-[#44618b] max-w-xl mx-auto">
                Search cities, adjust your stay, and we&apos;ll create the perfect itinerary
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - City Search & Selection */}
              <div className="lg:col-span-2 space-y-8">
                {/* Search Cities */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#d19457] flex items-center justify-center">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[#12103d]">Search & Add Cities</h3>
                      <p className="font-sans text-xs text-[#44618b]">Find your destinations</p>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search cities (e.g., Paris, Rome, Barcelona...)"
                      className="w-full px-5 py-4 pl-12 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50 focus:border-[#d19457]"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#44618b]" />
                  </div>

                  {/* Search Results */}
                  {filteredCities.length > 0 && (
                    <div className="mt-4 border border-[#12103d]/10 rounded-xl overflow-hidden">
                      {filteredCities.map((city) => (
                        <button
                          key={city.id}
                          onClick={() => addCity(city)}
                          className="w-full flex items-center gap-4 p-4 hover:bg-[#f5f5f5] transition-colors border-b border-[#12103d]/5 last:border-b-0"
                        >
                          <div
                            className="w-16 h-16 rounded-xl bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: `url(${city.image})` }}
                          />
                          <div className="flex-1 text-left">
                            <h4 className="font-display text-lg text-[#12103d]">{city.name}</h4>
                            <p className="font-sans text-xs text-[#44618b]">{city.country}</p>
                          </div>
                          <div className="flex items-center gap-2 text-[#d19457]">
                            <Plus className="w-5 h-5" />
                            <span className="font-sans text-sm font-medium">Add</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Popular Cities Quick Add */}
                  {searchQuery === '' && selectedCities.length === 0 && (
                    <div className="mt-6">
                      <p className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-3">Popular destinations</p>
                      <div className="flex flex-wrap gap-2">
                        {['paris', 'rome', 'barcelona', 'amsterdam', 'london', 'venice'].map((cityId) => {
                          const city = getCityById(cityId)
                          if (!city) return null
                          return (
                            <button
                              key={city.id}
                              onClick={() => addCity(city)}
                              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f5] hover:bg-[#12103d]/10 transition-colors"
                            >
                              <span className="font-sans text-sm text-[#12103d]">{city.name}</span>
                              <Plus className="w-4 h-4 text-[#d19457]" />
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Selected Cities */}
                {selectedCities.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#8550a2] flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl text-[#12103d]">Your Itinerary</h3>
                          <p className="font-sans text-xs text-[#44618b]">Adjust nights per city</p>
                        </div>
                      </div>
                      <div className="bg-[#12103d] px-4 py-2 rounded-full">
                        <span className="font-sans text-sm font-semibold text-white">{totalNights} Nights Total</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {selectedCities.map((sc, index) => (
                        <div
                          key={sc.city.id}
                          className="flex items-center gap-4 p-4 bg-[#f5f5f5] rounded-xl"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#12103d] text-white font-sans text-sm font-bold">
                            {index + 1}
                          </div>
                          <div
                            className="w-16 h-16 rounded-xl bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: `url(${sc.city.image})` }}
                          />
                          <div className="flex-1">
                            <h4 className="font-display text-lg text-[#12103d]">{sc.city.name}</h4>
                            <p className="font-sans text-xs text-[#44618b]">{sc.city.country}</p>
                          </div>
                          
                          {/* Nights Adjuster */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateNights(sc.city.id, -1)}
                              disabled={sc.nights <= sc.city.minNights}
                              className="w-8 h-8 rounded-full bg-white border border-[#12103d]/10 flex items-center justify-center hover:bg-[#12103d]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <Minus className="w-4 h-4 text-[#12103d]" />
                            </button>
                            <div className="text-center min-w-[60px]">
                              <span className="font-display text-2xl text-[#d19457]">{sc.nights}</span>
                              <span className="font-sans text-xs text-[#44618b] block">nights</span>
                            </div>
                            <button
                              onClick={() => updateNights(sc.city.id, 1)}
                              disabled={sc.nights >= sc.city.maxNights}
                              className="w-8 h-8 rounded-full bg-white border border-[#12103d]/10 flex items-center justify-center hover:bg-[#12103d]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <Plus className="w-4 h-4 text-[#12103d]" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeCity(sc.city.id)}
                            className="w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors"
                          >
                            <X className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trip Type */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#44618b] flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[#12103d]">Type of Trip</h3>
                      <p className="font-sans text-xs text-[#44618b]">Choose your travel style</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {travelTypes.map((type) => {
                      const Icon = type.icon
                      const isSelected = tripType === type.id
                      return (
                        <button
                          key={type.id}
                          onClick={() => setTripType(type.id)}
                          className={`relative p-5 rounded-2xl border-2 transition-all duration-300 group ${
                            isSelected
                              ? 'border-[#d19457] bg-gradient-to-br ' + type.color
                              : 'border-[#12103d]/10 bg-white hover:border-[#d19457]/50 hover:bg-[#f5f5f5]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl mb-2 flex items-center justify-center transition-all ${
                            isSelected ? 'bg-white/20' : 'bg-[#f5f5f5] group-hover:bg-[#12103d]/10'
                          }`}>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#44618b]'}`} />
                          </div>
                          <h4 className={`font-sans text-sm font-medium ${isSelected ? 'text-white' : 'text-[#12103d]'}`}>
                            {type.name}
                          </h4>
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                              <Check className="w-4 h-4 text-[#12103d]" />
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#c77e36] flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[#12103d]">Budget Range</h3>
                      <p className="font-sans text-xs text-[#44618b]">Per person estimate</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {budgetOptions.map((opt) => {
                      const isSelected = budget === opt.id
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setBudget(opt.id)}
                          className={`relative p-5 rounded-2xl border-2 transition-all duration-300 ${
                            isSelected
                              ? 'border-[#d19457] bg-[#d19457]/10'
                              : 'border-[#12103d]/10 bg-white hover:border-[#d19457]/50 hover:bg-[#f5f5f5]'
                          }`}
                        >
                          <h4 className={`font-display text-lg mb-1 ${isSelected ? 'text-[#d19457]' : 'text-[#12103d]'}`}>
                            {opt.name}
                          </h4>
                          <p className={`font-sans text-xs ${isSelected ? 'text-[#12103d]' : 'text-[#44618b]'}`}>
                            {opt.range}
                          </p>
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#d19457] flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column - Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 overflow-hidden sticky top-44">
                  <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-6 py-5">
                    <h3 className="font-display text-xl text-white">Trip Summary</h3>
                    <p className="font-sans text-xs text-white/60">Your custom Europe adventure</p>
                  </div>

                  <div className="p-6">
                    {selectedCities.length > 0 ? (
                      <>
                        {/* Cities List */}
                        <div className="mb-6">
                          <p className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-3">Destinations</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedCities.map((sc) => (
                              <span
                                key={sc.city.id}
                                className="px-3 py-1.5 bg-[#f5f5f5] rounded-full font-sans text-xs text-[#12103d]"
                              >
                                {sc.city.name} ({sc.nights}N)
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between">
                            <span className="font-sans text-sm text-[#44618b]">Total Duration</span>
                            <span className="font-sans text-sm font-semibold text-[#12103d]">{totalNights} Nights</span>
                          </div>
                          {tripType && (
                            <div className="flex justify-between">
                              <span className="font-sans text-sm text-[#44618b]">Trip Type</span>
                              <span className="font-sans text-sm font-semibold text-[#12103d]">{getTripTypeLabel(tripType)}</span>
                            </div>
                          )}
                          {budget && (
                            <div className="flex justify-between">
                              <span className="font-sans text-sm text-[#44618b]">Budget</span>
                              <span className="font-sans text-sm font-semibold text-[#12103d] capitalize">{budget}</span>
                            </div>
                          )}
                        </div>

                        {/* Submit */}
                        <button
                          onClick={handleSubmit}
                          disabled={!isFormComplete || isSubmitting}
                          className={`w-full flex items-center justify-center gap-3 py-4 rounded-full font-sans text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                            isFormComplete
                              ? 'bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                              : 'bg-[#f5f5f5] text-[#44618b]/50 cursor-not-allowed'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Get Quote
                            </>
                          )}
                        </button>

                        {!isFormComplete && (
                          <p className="font-sans text-xs text-[#44618b] text-center mt-3">
                            {!tripType && !budget ? 'Select trip type & budget' : !tripType ? 'Select trip type' : 'Select budget'}
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <MapPin className="w-12 h-12 text-[#12103d]/20 mx-auto mb-4" />
                        <h4 className="font-display text-lg text-[#12103d] mb-2">Start Building</h4>
                        <p className="font-sans text-sm text-[#44618b]">Search and add cities to begin</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pre Tours Tab */}
      {activeTab === 'tours' && (
        <section className="py-16 bg-gradient-to-b from-[#f5f5f5] to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
                Curated <span className="font-accent text-[#d19457]">Tours</span>
              </h2>
              <p className="font-sans text-[#44618b] max-w-xl mx-auto">
                Expertly designed itineraries for unforgettable European adventures
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Tours Grid */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {europeTours.map((tour) => (
                    <div
                      key={tour.id}
                      onClick={() => setSelectedTour(tour)}
                      className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                        selectedTour?.id === tour.id
                          ? 'border-[#12103d] ring-4 ring-[#12103d]/10'
                          : 'border-transparent hover:border-[#d19457]/50'
                      }`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                          style={{ backgroundImage: `url(${tour.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                        {tour.tag && (
                          <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-sans font-semibold rounded-full ${tour.tagColor}`}>
                            {tour.tag}
                          </span>
                        )}
                        {selectedTour?.id === tour.id && (
                          <div className="absolute top-3 right-3 w-8 h-8 bg-[#12103d] rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(tour.rating)}
                          <span className="font-sans text-xs text-[#44618b] ml-1">({tour.rating})</span>
                        </div>
                        <h3 className="font-display text-lg text-[#12103d] mb-1">{tour.name}</h3>
                        <p className="font-sans text-sm text-[#d19457] mb-2">{tour.tagline}</p>
                        
                        <div className="flex items-center gap-4 text-[#44618b] text-sm mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {tour.duration}
                          </span>
                          <span className="px-2 py-0.5 bg-[#f5f5f5] rounded-full text-xs capitalize">
                            {getTripTypeLabel(tour.tripType)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#12103d]/5">
                          <div>
                            <span className="font-sans text-xs text-[#44618b]">From </span>
                            <span className="font-display text-xl font-bold text-[#12103d]">${tour.price}</span>
                          </div>
                          <span className="text-[#d19457] font-sans text-sm font-medium">View →</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour Details Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 overflow-hidden sticky top-44">
                  {selectedTour ? (
                    <>
                      <div className="relative h-48">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${selectedTour.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12103d] to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          {selectedTour.tag && (
                            <span className={`inline-block px-3 py-1 text-xs font-sans font-semibold rounded-full ${selectedTour.tagColor} mb-2`}>
                              {selectedTour.tag}
                            </span>
                          )}
                          <h2 className="font-display text-2xl text-white">{selectedTour.name}</h2>
                          <p className="font-sans text-sm text-white/80">{selectedTour.tagline}</p>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-0.5">{renderStars(selectedTour.rating)}</div>
                          <span className="font-sans text-sm text-[#44618b]">({selectedTour.rating})</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-[#f5f5f5] rounded-xl p-3">
                            <Calendar className="w-5 h-5 text-[#43124a] mb-1" />
                            <p className="font-sans text-xs text-[#44618b]">Duration</p>
                            <p className="font-sans text-sm font-semibold text-[#12103d]">{selectedTour.duration}</p>
                          </div>
                          <div className="bg-[#f5f5f5] rounded-xl p-3">
                            <Compass className="w-5 h-5 text-[#43124a] mb-1" />
                            <p className="font-sans text-xs text-[#44618b]">Type</p>
                            <p className="font-sans text-sm font-semibold text-[#12103d]">{getTripTypeLabel(selectedTour.tripType)}</p>
                          </div>
                        </div>

                        {/* Cities in Tour */}
                        <div className="mb-6">
                          <h4 className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-2">Cities</h4>
                          <div className="space-y-2">
                            {selectedTour.cities.map((tc, idx) => {
                              const city = getCityById(tc.cityId)
                              if (!city) return null
                              return (
                                <div key={tc.cityId} className="flex items-center gap-3">
                                  <span className="w-6 h-6 rounded-full bg-[#12103d] text-white flex items-center justify-center font-sans text-xs">
                                    {idx + 1}
                                  </span>
                                  <span className="font-sans text-sm text-[#12103d] flex-1">{city.name}</span>
                                  <span className="font-sans text-xs text-[#44618b]">{tc.nights}N</span>
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-2">Highlights</h4>
                          <div className="space-y-2">
                            {selectedTour.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#d19457]" />
                                <span className="font-sans text-sm text-[#44618b]">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="bg-gradient-to-r from-[#12103d]/5 to-[#43124a]/5 rounded-xl p-4 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-sm text-[#44618b]">Starting from</span>
                            <div>
                              <span className="font-display text-3xl font-bold text-[#d19457]">${selectedTour.price}</span>
                              <span className="font-sans text-sm text-[#44618b]">/person</span>
                            </div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3">
                          <a
                            href="#contact"
                            className="block w-full bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-center"
                          >
                            Book This Tour
                          </a>
                          <button
                            onClick={() => customiseFromTour(selectedTour)}
                            className="w-full flex items-center justify-center gap-2 bg-[#12103d] text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full hover:bg-[#43124a] transition-all"
                          >
                            <Settings2 className="w-5 h-5" />
                            Customise This Tour
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-12 text-center">
                      <Map className="w-16 h-16 text-[#12103d]/20 mx-auto mb-4" />
                      <h3 className="font-display text-xl text-[#12103d] mb-2">Select a Tour</h3>
                      <p className="font-sans text-sm text-[#44618b]">Click on any tour to see details</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
