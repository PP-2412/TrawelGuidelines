'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Anchor, Star, MapPin, Calendar, Ship, X, Check } from 'lucide-react'

const allCruises = [
  // Family Cruises
  { id: 'disney-cruise', name: 'Disney Cruise Line', tagline: 'Singapore - Asia Pacific', category: 'family', rating: 5, price: 899, nights: 7, tag: 'Family Favourite', tagColor: 'bg-[#12103d] text-white', image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80', departurePort: 'Singapore', destinations: ['Singapore', 'Malaysia', 'Thailand'], features: ['Kids Club', 'Character Dining', 'Water Park', 'Broadway Shows'] },
  { id: 'disney-caribbean', name: 'Disney Caribbean Magic', tagline: 'Bahamas & Caribbean Islands', category: 'family', rating: 5, price: 1299, nights: 7, tag: 'Kids Love It', tagColor: 'bg-[#8550a2] text-white', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', departurePort: 'Miami', destinations: ['Nassau', 'Castaway Cay', 'Cozumel'], features: ['Private Island', 'Aqua Duck', 'Bibbidi Bobbidi', 'Fireworks at Sea'] },
  
  // Popular Cruises
  { id: 'royal-caribbean', name: 'Royal Caribbean', tagline: 'Caribbean Adventures', category: 'popular', rating: 5, price: 699, nights: 7, tag: 'Most Popular', tagColor: 'bg-[#d19457] text-white', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80', departurePort: 'Miami', destinations: ['Caribbean', 'Bahamas', 'Mexico'], features: ['Rock Climbing', 'Surf Simulator', '20+ Restaurants', 'Broadway Shows'] },
  { id: 'royal-mediterranean', name: 'Royal Mediterranean', tagline: 'European Coastal Beauty', category: 'popular', rating: 5, price: 1199, nights: 10, tag: 'Top Rated', tagColor: 'bg-[#d19457] text-white', image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80', departurePort: 'Barcelona', destinations: ['Barcelona', 'Rome', 'Naples', 'Marseille'], features: ['Fine Dining', 'Spa & Wellness', 'Casino', 'Live Entertainment'] },
  
  // Budget Cruises
  { id: 'norwegian-cruise', name: 'Norwegian Cruise Line', tagline: 'Alaska & Europe', category: 'budget', rating: 4.5, price: 599, nights: 5, tag: 'Best Value', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80', departurePort: 'Seattle', destinations: ['Alaska', 'Juneau', 'Ketchikan'], features: ['Freestyle Dining', 'Go-Karts', 'Laser Tag', 'Water Slides'] },
  { id: 'cordelia-cruises', name: 'Cordelia Cruises', tagline: "India's Premium Line", category: 'budget', rating: 4.5, price: 299, nights: 3, tag: 'Indian', tagColor: 'bg-[#c77e36] text-white', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', departurePort: 'Mumbai', destinations: ['Mumbai', 'Goa', 'Lakshadweep'], features: ['Indian Cuisine', 'Live Casino', 'Pool Parties', 'Bollywood Nights'] },
  { id: 'cordelia-south', name: 'Cordelia South India', tagline: 'Chennai to Vizag', category: 'budget', rating: 4.5, price: 349, nights: 4, tag: 'New Route', tagColor: 'bg-[#c77e36] text-white', image: 'https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80', departurePort: 'Chennai', destinations: ['Chennai', 'Vizag', 'Puducherry'], features: ['South Indian Food', 'Cultural Shows', 'Spa', 'Kids Zone'] },
  
  // Premium/Luxury Cruises
  { id: 'celebrity-cruises', name: 'Celebrity Cruises', tagline: 'Mediterranean Luxury', category: 'luxury', rating: 5, price: 899, nights: 10, tag: 'Premium', tagColor: 'bg-[#8550a2] text-white', image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80', departurePort: 'Barcelona', destinations: ['Mediterranean', 'Greek Islands', 'Turkey'], features: ['Rooftop Garden', 'Michelin Dining', 'Art Collection', 'Infinite Veranda'] },
  { id: 'celebrity-alaska', name: 'Celebrity Alaska', tagline: 'Glacier Discovery', category: 'luxury', rating: 5, price: 1499, nights: 7, tag: 'Scenic', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', departurePort: 'Vancouver', destinations: ['Vancouver', 'Juneau', 'Skagway', 'Glacier Bay'], features: ['Glacier Viewing', 'Wildlife Tours', 'Spa Retreat', 'Fine Dining'] },
  { id: 'genting-dream', name: 'Genting Dream', tagline: 'Asian Luxury Cruising', category: 'luxury', rating: 4.5, price: 799, nights: 5, tag: 'Luxury', tagColor: 'bg-[#d19457] text-[#12103d]', image: 'https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80', departurePort: 'Singapore', destinations: ['Singapore', 'Vietnam', 'Thailand'], features: ['Crystal Spa', 'Zodiac Casino', 'Palace Suites', '35+ Restaurants'] },
  { id: 'regent-seven', name: 'Regent Seven Seas', tagline: 'Ultra-Luxury All-Inclusive', category: 'luxury', rating: 5, price: 2999, nights: 12, tag: 'Ultra Luxury', tagColor: 'bg-[#230c33] text-white', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80', departurePort: 'Monte Carlo', destinations: ['Monaco', 'Portofino', 'Amalfi', 'Santorini'], features: ['All-Suite Ship', 'Butler Service', 'Unlimited Shore Excursions', 'Premium Beverages'] },
  
  // Adventure Cruises
  { id: 'hurtigruten', name: 'Hurtigruten Expedition', tagline: 'Arctic & Antarctic Explorer', category: 'adventure', rating: 4.5, price: 3499, nights: 14, tag: 'Expedition', tagColor: 'bg-[#12103d] text-white', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', departurePort: 'Ushuaia', destinations: ['Antarctica', 'South Georgia', 'Falkland Islands'], features: ['Expedition Team', 'Zodiac Landings', 'Science Center', 'Northern Lights'] },
  { id: 'viking-expedition', name: 'Viking Expedition', tagline: 'Norwegian Fjords', category: 'adventure', rating: 5, price: 1899, nights: 8, tag: 'Scenic', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80', departurePort: 'Bergen', destinations: ['Bergen', 'Geiranger', 'Ålesund', 'Tromsø'], features: ['Nordic Spa', 'Expedition Lectures', 'Kayaking', 'Hiking Tours'] },
  
  // River Cruises
  { id: 'viking-river', name: 'Viking River Cruise', tagline: 'Danube & Rhine Rivers', category: 'river', rating: 5, price: 2199, nights: 10, tag: 'River Cruise', tagColor: 'bg-[#43124a] text-white', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80', departurePort: 'Amsterdam', destinations: ['Amsterdam', 'Cologne', 'Vienna', 'Budapest'], features: ['All-Inclusive', 'Shore Excursions', 'Wine Tasting', 'Cultural Immersion'] },
  { id: 'ama-mekong', name: 'AmaWaterways Mekong', tagline: 'Vietnam & Cambodia', category: 'river', rating: 5, price: 2499, nights: 7, tag: 'Exotic', tagColor: 'bg-[#c77e36] text-white', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', departurePort: 'Ho Chi Minh City', destinations: ['Saigon', 'Phnom Penh', 'Siem Reap'], features: ['Temple Tours', 'Local Markets', 'Cooking Classes', 'Silk Villages'] },
  
  // Honeymoon/Romance
  { id: 'seabourn-romance', name: 'Seabourn Ovation', tagline: 'Intimate Luxury Romance', category: 'romance', rating: 5, price: 3299, nights: 10, tag: 'Honeymoon', tagColor: 'bg-[#8550a2] text-white', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80', departurePort: 'Venice', destinations: ['Venice', 'Dubrovnik', 'Kotor', 'Corfu'], features: ['Couples Spa', 'Private Dining', 'Champagne Service', 'Veranda Suites'] },
  { id: 'paul-gauguin', name: 'Paul Gauguin Cruises', tagline: 'Tahiti & French Polynesia', category: 'romance', rating: 5, price: 4499, nights: 7, tag: 'Paradise', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', departurePort: 'Papeete', destinations: ['Tahiti', 'Bora Bora', 'Moorea', 'Taha\'a'], features: ['Overwater Bungalow Experience', 'Private Beach', 'Water Sports Marina', 'Polynesian Spa'] },
]

const categories = [
  { id: 'all', name: 'All Cruises' },
  { id: 'popular', name: 'Popular' },
  { id: 'family', name: 'Family' },
  { id: 'luxury', name: 'Luxury' },
  { id: 'budget', name: 'Budget Friendly' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'river', name: 'River Cruises' },
  { id: 'romance', name: 'Honeymoon' },
]

function CruisesContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCruise, setSelectedCruise] = useState<typeof allCruises[0] | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  useEffect(() => {
    const cruiseId = searchParams.get('cruise')
    if (cruiseId) {
      const cruise = allCruises.find(c => c.id === cruiseId)
      if (cruise) {
        setSelectedCruise(cruise)
        setSelectedCategory(cruise.category)
      }
    }
  }, [searchParams])

  const filteredCruises = selectedCategory === 'all' 
    ? allCruises 
    : allCruises.filter(c => c.category === selectedCategory)

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

  return (
    <>
      <section className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-[#f5f5f5] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center shadow-lg">
                <Anchor className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-[#12103d] mb-4">
              Luxury <span className="font-accent text-[#d19457]">Cruises</span>
            </h1>
            <p className="font-sans text-[#44618b] max-w-2xl mx-auto">
              Set sail on unforgettable journeys across the world&apos;s most beautiful waters
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-[#12103d] text-white shadow-lg'
                    : 'bg-white text-[#44618b] border border-[#12103d]/10 hover:border-[#d19457] hover:text-[#d19457]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cruise List */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCruises.map((cruise) => (
                  <div
                    key={cruise.id}
                    onClick={() => setSelectedCruise(cruise)}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedCruise?.id === cruise.id 
                        ? 'border-[#12103d] ring-4 ring-[#12103d]/10' 
                        : 'border-transparent hover:border-[#d19457]/50'
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                        style={{ backgroundImage: `url(${cruise.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                      <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-sans font-semibold rounded-full ${cruise.tagColor}`}>
                        {cruise.tag}
                      </span>
                      {selectedCruise?.id === cruise.id && (
                        <div className="absolute top-3 right-3 w-8 h-8 bg-[#12103d] rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-2">
                        {renderStars(cruise.rating)}
                        <span className="font-sans text-xs text-[#44618b] ml-1">({cruise.rating})</span>
                      </div>
                      <h3 className="font-display text-lg text-[#12103d] mb-1">{cruise.name}</h3>
                      <p className="font-sans text-sm text-[#d19457] mb-3">{cruise.tagline}</p>
                      
                      <div className="flex items-center gap-4 text-[#44618b] text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {cruise.nights}N
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {cruise.departurePort}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[#12103d]/5">
                        <div>
                          <span className="font-sans text-xs text-[#44618b]">From </span>
                          <span className="font-display text-xl font-bold text-[#12103d]">${cruise.price}</span>
                        </div>
                        <span className="text-[#d19457] font-sans text-sm font-medium">View →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cruise Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 overflow-hidden sticky top-28">
                {selectedCruise ? (
                  <>
                    <div className="relative h-48">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${selectedCruise.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12103d] to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className={`inline-block px-3 py-1 text-xs font-sans font-semibold rounded-full ${selectedCruise.tagColor} mb-2`}>
                          {selectedCruise.tag}
                        </span>
                        <h2 className="font-display text-2xl text-white">{selectedCruise.name}</h2>
                        <p className="font-sans text-sm text-white/80">{selectedCruise.tagline}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-0.5">{renderStars(selectedCruise.rating)}</div>
                        <span className="font-sans text-sm text-[#44618b]">({selectedCruise.rating})</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-[#f5f5f5] rounded-xl p-3">
                          <Calendar className="w-5 h-5 text-[#43124a] mb-1" />
                          <p className="font-sans text-xs text-[#44618b]">Duration</p>
                          <p className="font-sans text-sm font-semibold text-[#12103d]">{selectedCruise.nights} Nights</p>
                        </div>
                        <div className="bg-[#f5f5f5] rounded-xl p-3">
                          <Ship className="w-5 h-5 text-[#43124a] mb-1" />
                          <p className="font-sans text-xs text-[#44618b]">Departure</p>
                          <p className="font-sans text-sm font-semibold text-[#12103d]">{selectedCruise.departurePort}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-2">Destinations</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCruise.destinations.map((dest, idx) => (
                            <span key={idx} className="px-3 py-1 bg-[#12103d]/5 rounded-full font-sans text-xs text-[#12103d]">
                              {dest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-2">Highlights</h4>
                        <div className="space-y-2">
                          {selectedCruise.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-[#d19457]" />
                              <span className="font-sans text-sm text-[#44618b]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#12103d]/5 to-[#43124a]/5 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-sans text-sm text-[#44618b]">Starting from</span>
                          <div>
                            <span className="font-display text-3xl font-bold text-[#d19457]">${selectedCruise.price}</span>
                            <span className="font-sans text-sm text-[#44618b]">/person</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => setShowBookingModal(true)}
                        className="w-full bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                      >
                        Book This Cruise
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="p-12 text-center">
                    <Ship className="w-16 h-16 text-[#12103d]/20 mx-auto mb-4" />
                    <h3 className="font-display text-xl text-[#12103d] mb-2">Select a Cruise</h3>
                    <p className="font-sans text-sm text-[#44618b]">Click on any cruise to see details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedCruise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#12103d] to-[#43124a] px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold text-white">Book Your Cruise</h2>
                <p className="font-sans text-sm text-white/70">{selectedCruise.name}</p>
              </div>
              <button
                onClick={() => setShowBookingModal(false)}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="font-sans text-sm text-[#44618b] mb-1 block">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="font-sans text-sm text-[#44618b] mb-1 block">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="font-sans text-sm text-[#44618b] mb-1 block">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50" placeholder="Enter your phone" />
                </div>
                <div>
                  <label className="font-sans text-sm text-[#44618b] mb-1 block">Number of Guests</label>
                  <select className="w-full px-4 py-3 border border-[#12103d]/10 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#d19457]/50">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#f5f5f5] rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-[#44618b]">Estimated Total</span>
                  <span className="font-display text-2xl font-bold text-[#12103d]">${selectedCruise.price * 2}</span>
                </div>
                <p className="font-sans text-xs text-[#44618b] mt-1">For 2 guests • Final price after consultation</p>
              </div>

              <button className="w-full bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                Request Quote
              </button>
              <p className="font-sans text-xs text-[#44618b] text-center mt-4">
                Our cruise specialist will contact you within 24 hours
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function CruisesPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<div className="pt-28 pb-20 min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
        <CruisesContent />
      </Suspense>
      <Footer />
    </main>
  )
}
