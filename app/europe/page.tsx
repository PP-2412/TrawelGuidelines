'use client'

import { useState, useEffect, useMemo, Suspense, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { Mountain, Search, Plus, Minus, X, Sparkles, MapPin, Calendar, Star, Heart, Users, UserPlus, Compass, Gem, Send, Settings2, Map, Check, ChevronLeft, ChevronRight, ChevronDown, MapPinned, Maximize2, Minimize2 } from 'lucide-react'
import { europeCities, europeTours, EuropeCity, EuropeTour, getCityById, getTripTypeLabel } from '@/components/Europe/europeData'

// Dynamically import the map component to avoid SSR issues with Leaflet
const EuropeMap = dynamic(() => import('@/components/Europe/EuropeMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#f5f5f5] rounded-xl sm:rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#d19457] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="font-sans text-sm text-[#44618b]">Loading map...</p>
      </div>
    </div>
  )
})

type TabType = 'customise' | 'tours'
type TripType = 'adventure' | 'romantic' | 'family' | 'friends' | 'cultural' | 'luxury' | null

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

function EuropeContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tabParam = searchParams.get('tab')
  
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    if (tabParam === 'customise' || tabParam === 'customize') return 'customise'
    return 'tours'
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCities, setSelectedCities] = useState<SelectedCity[]>([])
  const [tripType, setTripType] = useState<TripType>(null)
  const [isTripStyleExpanded, setIsTripStyleExpanded] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMapExpanded, setIsMapExpanded] = useState(false)
  
  const [selectedTour, setSelectedTour] = useState<EuropeTour | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (tabParam === 'customise' || tabParam === 'customize') {
      setActiveTab('customise')
    } else if (tabParam === 'tours') {
      setActiveTab('tours')
    }
  }, [tabParam])

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    const newUrl = `/europe?tab=${tab}`
    router.push(newUrl, { scroll: false })
  }

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedTour])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMapExpanded) {
          setIsMapExpanded(false)
        } else {
          setSelectedTour(null)
        }
      }
      
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
  }, [selectedTour, isMapExpanded])

  useEffect(() => {
    if (selectedTour || isMapExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedTour, isMapExpanded])

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

  const totalNights = useMemo(() => {
    return selectedCities.reduce((sum, sc) => sum + sc.nights, 0)
  }, [selectedCities])

  const addCity = useCallback((city: EuropeCity) => {
    setSelectedCities(prev => {
      if (prev.some(sc => sc.city.id === city.id)) return prev
      return [...prev, { city, nights: city.suggestedNights }]
    })
    setSearchQuery('')
  }, [])

  const removeCity = useCallback((cityId: string) => {
    setSelectedCities(prev => prev.filter(sc => sc.city.id !== cityId))
  }, [])

  const toggleCity = useCallback((city: EuropeCity) => {
    setSelectedCities(prev => {
      const exists = prev.some(sc => sc.city.id === city.id)
      if (exists) {
        return prev.filter(sc => sc.city.id !== city.id)
      } else {
        return [...prev, { city, nights: city.suggestedNights }]
      }
    })
  }, [])

  const updateNights = (cityId: string, delta: number) => {
    setSelectedCities(prev => prev.map(sc => {
      if (sc.city.id === cityId) {
        const newNights = Math.max(sc.city.minNights, Math.min(sc.city.maxNights, sc.nights + delta))
        return { ...sc, nights: newNights }
      }
      return sc
    }))
  }

  const handleTripTypeSelect = (type: TripType) => {
    if (tripType === type) {
      setIsTripStyleExpanded(!isTripStyleExpanded)
    } else {
      setTripType(type)
      setIsTripStyleExpanded(false)
    }
  }

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
    setIsTripStyleExpanded(false)
    setSelectedTour(null)
    handleTabChange('customise')
    
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      const cityNames = selectedCities.map(sc => sc.city.name).join(', ')
      alert(`Thank you! Your custom ${totalNights}-night Europe trip to ${cityNames} has been submitted. Our travel experts will contact you within 24 hours!`)
    }, 1500)
  }

  const isFormComplete = selectedCities.length > 0 && tripType

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#d19457] text-[#d19457]" />)
    }
    return stars
  }

  const nextImage = (images: string[]) => {
    setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
  }

  const prevImage = (images: string[]) => {
    setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
  }

  const selectedTripTypeDetails = tripType ? travelTypes.find(t => t.id === tripType) : null

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12103d]/60 via-[#12103d]/40 to-[#12103d]/80" />
        
        <div className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#d19457] opacity-10 rounded-full blur-[80px] sm:blur-[100px] hidden sm:block" />
        <div className="absolute bottom-10 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#8550a2] opacity-10 rounded-full blur-[100px] sm:blur-[120px] hidden sm:block" />

        <div className="relative z-10 text-center px-4 sm:px-6 pt-16 sm:pt-20">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm mb-4 sm:mb-6">
            <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-[#d19457]" />
          </div>
          
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl text-white mb-3 sm:mb-4">
            Explore <span className="font-accent text-[#d19457]">Europe</span>
          </h1>
          
          <p className="font-sans text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase text-[#d19457] mb-3 sm:mb-4">
            From Historic Cities to Stunning Coastlines
          </p>
          
          <p className="font-sans text-sm sm:text-lg text-white/80 max-w-xs sm:max-w-2xl mx-auto">
            Build your dream European adventure or choose from our expertly curated tours
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-4 sm:py-8 bg-white sticky top-16 sm:top-20 z-40 border-b border-[#12103d]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-center gap-2 sm:gap-4">
            <button
              onClick={() => handleTabChange('tours')}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-sans text-[10px] sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 touch-target ${
                activeTab === 'tours'
                  ? 'bg-gradient-to-r from-[#12103d] to-[#43124a] text-white shadow-lg'
                  : 'bg-[#f5f5f5] text-[#44618b] hover:bg-[#12103d]/10'
              }`}
            >
              <Map className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Pre-Made</span> Tours
            </button>
            <button
              onClick={() => handleTabChange('customise')}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-sans text-[10px] sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 touch-target ${
                activeTab === 'customise'
                  ? 'bg-gradient-to-r from-[#12103d] to-[#43124a] text-white shadow-lg'
                  : 'bg-[#f5f5f5] text-[#44618b] hover:bg-[#12103d]/10'
              }`}
            >
              <Settings2 className="w-4 h-4 sm:w-5 sm:h-5" />
              Customise
            </button>
          </div>
        </div>
      </section>

      {/* Tours Tab */}
      {activeTab === 'tours' && (
        <section className="py-10 sm:py-16 bg-gradient-to-b from-[#f5f5f5] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block font-sans text-[10px] sm:text-xs font-medium tracking-[3px] sm:tracking-[4px] uppercase text-[#d19457] mb-3 sm:mb-4">
                Expertly Crafted
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#12103d] mb-3 sm:mb-4">
                Curated <span className="font-accent text-[#d19457]">Tours</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#44618b] max-w-xl mx-auto">
                Expertly designed itineraries for unforgettable European adventures
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {europeTours.map((tour) => (
                <div
                  key={tour.id}
                  onClick={() => setSelectedTour(tour)}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#d19457]/50 hover:shadow-xl cursor-pointer transition-all duration-300 active:scale-[0.98]"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                      style={{ backgroundImage: `url(${tour.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                    {tour.tag && (
                      <span className={`absolute top-2 sm:top-3 left-2 sm:left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-sans font-semibold rounded-full ${tour.tagColor}`}>
                        {tour.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
                      {renderStars(tour.rating)}
                      <span className="font-sans text-[10px] sm:text-xs text-[#44618b] ml-1">({tour.rating})</span>
                    </div>
                    <h3 className="font-display text-base sm:text-lg text-[#12103d] mb-1 line-clamp-1">{tour.name}</h3>
                    <p className="font-sans text-xs sm:text-sm text-[#d19457] mb-1.5 sm:mb-2 line-clamp-1">{tour.tagline}</p>
                    
                    <div className="flex items-center gap-3 sm:gap-4 text-[#44618b] text-xs sm:text-sm mb-3 sm:mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {tour.duration}
                      </span>
                      <span className="px-2 py-0.5 bg-[#f5f5f5] rounded-full text-[10px] sm:text-xs capitalize">
                        {getTripTypeLabel(tour.tripType)}
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
          </div>
        </section>
      )}

      {/* Customise Itinerary Tab */}
      {activeTab === 'customise' && (
        <section className="py-10 sm:py-16 bg-gradient-to-b from-[#f5f5f5] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#12103d] mb-3 sm:mb-4">
                Build Your <span className="font-accent text-[#d19457]">Dream Trip</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#44618b] max-w-xl mx-auto">
                Click cities on the map or search below to build your perfect itinerary
              </p>
            </div>

            {/* Interactive Map Section */}
            <div className="mb-6 sm:mb-8">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#12103d]/10 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#12103d] flex items-center justify-center">
                      <MapPinned className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl text-[#12103d]">Interactive Map</h3>
                      <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Click on cities to add them to your trip</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMapExpanded(true)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#f5f5f5] hover:bg-[#12103d]/10 transition-colors touch-target"
                  >
                    <Maximize2 className="w-4 h-4 text-[#44618b]" />
                    <span className="font-sans text-xs sm:text-sm text-[#44618b] hidden sm:inline">Expand</span>
                  </button>
                </div>
                
                <div className="h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                  <EuropeMap
                    cities={europeCities}
                    selectedCities={selectedCities}
                    onCityToggle={toggleCity}
                  />
                </div>

                {/* Map Legend */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-[#12103d]/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#44618b]" />
                    <span className="font-sans text-xs text-[#44618b]">Available cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#d19457]" />
                    <span className="font-sans text-xs text-[#44618b]">Selected cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-[#d19457]" />
                    <span className="font-sans text-xs text-[#44618b]">Your route</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Search Cities */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#12103d]/10 p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d19457] flex items-center justify-center">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl text-[#12103d]">Search & Add Cities</h3>
                      <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Or use the map above</p>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search cities (e.g., Paris, Rome...)"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 pl-10 sm:pl-12 border border-[#12103d]/10 rounded-lg sm:rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50 focus:border-[#d19457]"
                    />
                    <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#44618b]" />
                  </div>

                  {filteredCities.length > 0 && (
                    <div className="mt-4 border border-[#12103d]/10 rounded-lg sm:rounded-xl overflow-hidden">
                      {filteredCities.map((city) => (
                        <button
                          key={city.id}
                          onClick={() => addCity(city)}
                          className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-[#f5f5f5] active:bg-[#f5f5f5] transition-colors border-b border-[#12103d]/5 last:border-b-0 touch-target"
                        >
                          <div
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: `url(${city.image})` }}
                          />
                          <div className="flex-1 text-left">
                            <h4 className="font-display text-base sm:text-lg text-[#12103d]">{city.name}</h4>
                            <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">{city.country}</p>
                          </div>
                          <div className="flex items-center gap-2 text-[#d19457]">
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-sans text-xs sm:text-sm font-medium hidden sm:inline">Add</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {searchQuery === '' && selectedCities.length === 0 && (
                    <div className="mt-4 sm:mt-6">
                      <p className="font-sans text-[10px] sm:text-xs text-[#44618b] uppercase tracking-wider mb-2 sm:mb-3">Popular destinations</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {['paris', 'rome', 'barcelona', 'amsterdam', 'london', 'venice'].map((cityId) => {
                          const city = getCityById(cityId)
                          if (!city) return null
                          return (
                            <button
                              key={city.id}
                              onClick={() => addCity(city)}
                              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#f5f5f5] hover:bg-[#12103d]/10 active:bg-[#12103d]/10 transition-colors touch-target"
                            >
                              <span className="font-sans text-xs sm:text-sm text-[#12103d]">{city.name}</span>
                              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d19457]" />
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {selectedCities.length > 0 && (
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#12103d]/10 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#8550a2] flex items-center justify-center">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg sm:text-xl text-[#12103d]">Your Itinerary</h3>
                          <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Adjust nights per city</p>
                        </div>
                      </div>
                      <div className="bg-[#12103d] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        <span className="font-sans text-xs sm:text-sm font-semibold text-white">{totalNights} Nights</span>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {selectedCities.map((sc, index) => (
                        <div key={sc.city.id} className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-[#f5f5f5] rounded-lg sm:rounded-xl">
                          <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#d19457] text-white font-sans text-xs sm:text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div
                            className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-cover bg-center flex-shrink-0 hidden xs:block"
                            style={{ backgroundImage: `url(${sc.city.image})` }}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display text-sm sm:text-lg text-[#12103d] truncate">{sc.city.name}</h4>
                            <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">{sc.city.country}</p>
                          </div>
                          
                          <div className="flex items-center gap-1.5 sm:gap-3">
                            <button
                              onClick={() => updateNights(sc.city.id, -1)}
                              disabled={sc.nights <= sc.city.minNights}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#12103d]/10 flex items-center justify-center hover:bg-[#12103d]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed touch-target"
                            >
                              <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-[#12103d]" />
                            </button>
                            <div className="text-center min-w-[40px] sm:min-w-[60px]">
                              <span className="font-display text-lg sm:text-2xl text-[#d19457]">{sc.nights}</span>
                              <span className="font-sans text-[10px] sm:text-xs text-[#44618b] block">nights</span>
                            </div>
                            <button
                              onClick={() => updateNights(sc.city.id, 1)}
                              disabled={sc.nights >= sc.city.maxNights}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#12103d]/10 flex items-center justify-center hover:bg-[#12103d]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed touch-target"
                            >
                              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-[#12103d]" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeCity(sc.city.id)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition-colors touch-target flex-shrink-0"
                          >
                            <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-6">
                {/* Trip Style - Collapsible */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#12103d]/10 p-4 sm:p-6">
                  <div 
                    className={`flex items-center gap-3 ${tripType && !isTripStyleExpanded ? 'cursor-pointer' : ''} ${tripType ? 'mb-4 sm:mb-6' : 'mb-4 sm:mb-6'}`}
                    onClick={() => tripType && !isTripStyleExpanded && setIsTripStyleExpanded(true)}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#43124a] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg sm:text-xl text-[#12103d]">Trip Style</h3>
                      <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">What&apos;s your vibe?</p>
                    </div>
                    {tripType && !isTripStyleExpanded && (
                      <ChevronDown className="w-5 h-5 text-[#44618b]" />
                    )}
                  </div>

                  {tripType && !isTripStyleExpanded && selectedTripTypeDetails && (
                    <button
                      onClick={() => setIsTripStyleExpanded(true)}
                      className="w-full flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-[#d19457] bg-[#d19457]/10 transition-all duration-300 touch-target"
                    >
                      <selectedTripTypeDetails.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d19457]" />
                      <span className="font-sans text-sm sm:text-base text-[#12103d] font-semibold flex-1 text-left">
                        {selectedTripTypeDetails.name}
                      </span>
                      <span className="font-sans text-[10px] sm:text-xs text-[#44618b]">Tap to change</span>
                    </button>
                  )}

                  {(isTripStyleExpanded || !tripType) && (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {travelTypes.map((type) => {
                        const Icon = type.icon
                        return (
                          <button
                            key={type.id}
                            onClick={() => handleTripTypeSelect(type.id)}
                            className={`flex items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border-2 transition-all duration-300 touch-target ${
                              tripType === type.id
                                ? 'border-[#d19457] bg-[#d19457]/10'
                                : 'border-[#12103d]/10 hover:border-[#d19457]/50'
                            }`}
                          >
                            <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tripType === type.id ? 'text-[#d19457]' : 'text-[#44618b]'}`} />
                            <span className={`font-sans text-xs sm:text-sm ${tripType === type.id ? 'text-[#12103d] font-semibold' : 'text-[#44618b]'}`}>
                              {type.name}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={!isFormComplete || isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 sm:gap-3 py-3.5 sm:py-4 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 touch-target ${
                    isFormComplete
                      ? 'bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                      : 'bg-[#f5f5f5] text-[#44618b] cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Get Custom Quote
                    </>
                  )}
                </button>

                {!isFormComplete && (
                  <p className="font-sans text-[10px] sm:text-xs text-center text-[#44618b]">
                    Add cities and select trip style to continue
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expanded Map Modal */}
      {isMapExpanded && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsMapExpanded(false)}
        >
          <div 
            className="relative w-full max-w-6xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="font-sans text-sm font-medium text-[#12103d]">
                  {selectedCities.length} cities selected • {totalNights} nights
                </span>
              </div>
              <button
                onClick={() => setIsMapExpanded(false)}
                className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <X className="w-5 h-5 text-[#12103d]" />
              </button>
            </div>
            
            <EuropeMap
              cities={europeCities}
              selectedCities={selectedCities}
              onCityToggle={toggleCity}
              expanded
            />

            {/* Legend in expanded view */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#44618b]" />
                  <span className="font-sans text-xs text-[#44618b]">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#d19457]" />
                  <span className="font-sans text-xs text-[#44618b]">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-[#d19457]" />
                  <span className="font-sans text-xs text-[#44618b]">Route</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tour Modal */}
      {selectedTour && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedTour(null)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-64 md:h-80">
              <div className="relative w-full h-full overflow-hidden">
                {selectedTour.images.map((img, idx) => (
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
              
              {selectedTour.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(selectedTour.images) }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group touch-target"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(selectedTour.images) }}
                    className="absolute right-12 sm:right-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 group touch-target"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
                  </button>
                </>
              )}

              {selectedTour.images.length > 1 && (
                <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-10">
                  {selectedTour.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx) }}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'bg-white w-4 sm:w-6' : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
              
              <button
                onClick={() => setSelectedTour(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 touch-target"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#12103d]" />
              </button>

              {selectedTour.tag && (
                <span className={`absolute top-3 sm:top-4 left-3 sm:left-4 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-sans font-semibold rounded-full ${selectedTour.tagColor}`}>
                  {selectedTour.tag}
                </span>
              )}

              {selectedTour.images.length > 1 && (
                <span className="absolute top-3 sm:top-4 left-24 sm:left-32 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-sans font-medium rounded-full bg-black/50 backdrop-blur-sm text-white">
                  {currentImageIndex + 1} / {selectedTour.images.length}
                </span>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="flex items-center gap-0.5">{renderStars(selectedTour.rating)}</div>
                  <span className="font-sans text-xs sm:text-sm text-white/80">({selectedTour.rating})</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white line-clamp-2">{selectedTour.name}</h2>
                <p className="font-sans text-sm sm:text-lg text-[#d19457]">{selectedTour.tagline}</p>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[50vh] sm:max-h-[calc(90vh-20rem)]">
              <p className="font-sans text-sm sm:text-base md:text-lg text-[#44618b] mb-4 sm:mb-6">{selectedTour.description}</p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#43124a]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Duration</p>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-[#12103d]">{selectedTour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                    <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#43124a]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] sm:text-xs text-[#44618b]">Type</p>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-[#12103d]">{getTripTypeLabel(selectedTour.tripType)}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h4 className="font-display text-lg sm:text-xl text-[#12103d] mb-3 sm:mb-4">Cities Visited</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {selectedTour.cities.map((tc, idx) => {
                    const city = getCityById(tc.cityId)
                    if (!city) return null
                    return (
                      <div key={tc.cityId} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f5f5f5] rounded-full">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#12103d] text-white flex items-center justify-center font-sans text-[10px] sm:text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="font-sans text-xs sm:text-sm text-[#12103d]">{city.name}</span>
                        <span className="font-sans text-[10px] sm:text-xs text-[#44618b]">{tc.nights}N</span>
                      </div>
                    )
                  })}
                </div>
              </div>

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

              <div className="mb-6 sm:mb-8">
                <h4 className="font-display text-lg sm:text-xl text-[#12103d] mb-3 sm:mb-4">What&apos;s Included</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {selectedTour.included.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#d19457]/10 rounded-lg sm:rounded-xl">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#d19457] flex-shrink-0" />
                      <span className="font-sans text-xs sm:text-sm text-[#12103d]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-[#12103d]/10">
                <div className="text-center sm:text-left">
                  <span className="font-sans text-xs sm:text-sm text-[#44618b]">Starting from</span>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#d19457]">${selectedTour.price}</span>
                    <span className="font-sans text-xs sm:text-sm text-[#44618b]">/person</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => customiseFromTour(selectedTour)}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#12103d] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase px-4 sm:px-6 py-3.5 sm:py-4 rounded-full hover:bg-[#43124a] transition-all touch-target"
                  >
                    <Settings2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    Customise
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedTour(null)}
                    className="flex-1 sm:flex-none bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-center touch-target"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function EuropePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Suspense fallback={
        <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
          <p className="font-sans text-[#44618b]">Loading Europe experiences...</p>
        </div>
      }>
        <EuropeContent />
      </Suspense>
      <Footer />
    </main>
  )
}
