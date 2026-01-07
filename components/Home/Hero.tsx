'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, MapPin, X, Plane, Ship, Mountain, Palmtree, Cherry, Waves, TreePalm, Flower2 } from 'lucide-react'

const destinations = [
  { name: 'Europe', type: 'continent', href: '/europe', icon: Mountain, description: 'Historic cities & stunning landscapes' },
  { name: 'Thailand', type: 'country', href: '/thailand', icon: Palmtree, description: 'Temples, beaches & warm hospitality' },
  { name: 'Maldives', type: 'country', href: '/maldives', icon: Waves, description: 'Crystal waters & overwater villas' },
  { name: 'Indonesia', type: 'country', href: '/indonesia', icon: TreePalm, description: 'Bali, Komodo & island paradise' },
  { name: 'Vietnam', type: 'country', href: '/vietnam', icon: Flower2, description: 'Ha Long Bay & ancient towns' },
  { name: 'Japan', type: 'country', href: '/japan', icon: Cherry, description: 'Tradition meets technology' },
  { name: 'Cruises', type: 'experience', href: '/cruises', icon: Ship, description: 'Luxury on the high seas' },
]

const textSlides = [
  { title: 'Discover Your Next', highlight: 'Adventure', subtitle: 'From European escapes to Asian wonders and luxury cruises worldwide' },
  { title: 'Explore the Beauty of', highlight: 'Europe', subtitle: 'Historic cities, breathtaking landscapes, and timeless culture' },
  { title: 'Paradise Awaits in', highlight: 'Asia', subtitle: 'Pristine beaches, ancient temples, and vibrant cultures' },
  { title: 'Set Sail on', highlight: 'Luxury Cruises', subtitle: 'World-class amenities across the seven seas' },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % textSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (searchQuery) {
      const filtered = destinations.filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredDestinations(filtered)
    } else {
      setFilteredDestinations(destinations)
    }
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = () => {
    setShowDropdown(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowDropdown(true)
    }
    if (e.key === 'Escape') {
      setShowDropdown(false)
    }
  }

  const slide = textSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&q=80"
        >
          {/* High-quality travel video - replace with your own video URL */}
          <source
            src="https://cdn.coverr.co/videos/coverr-flying-over-maldives-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12103d]/80 via-[#12103d]/60 to-[#12103d]/90" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d19457]/20 via-transparent to-[#8550a2]/20 animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d19457] opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8550a2] opacity-15 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center pt-24 sm:pt-28">
        {/* Search Bar */}
        <div ref={searchRef} className="relative max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className={`relative bg-white/10 backdrop-blur-xl rounded-full border transition-all duration-300 ${showDropdown ? 'border-[#d19457] bg-white/15 shadow-2xl shadow-[#d19457]/20' : 'border-white/20'}`}>
            <div className="flex items-center px-5 sm:px-6 py-3 sm:py-4">
              <button onClick={handleSearch} className="flex-shrink-0 hover:scale-110 transition-transform">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
              </button>
              <input
                type="text"
                placeholder="Search destinations, countries, or experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/50 font-sans text-sm sm:text-base px-3 sm:px-4"
              />
              {searchQuery && (
                <button onClick={() => { setSearchQuery(''); setShowDropdown(false); }} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                </button>
              )}
              <div className="hidden sm:block h-8 w-px bg-white/20 mx-3" />
              <button 
                onClick={handleSearch}
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-xs font-bold tracking-wider uppercase px-6 py-2.5 rounded-full hover:shadow-lg transition-all"
              >
                <Plane className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>

          {/* Search Dropdown */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50">
              {/* Header */}
              <div className="px-4 pt-4 pb-2 border-b border-[#12103d]/10">
                <p className="font-sans text-[10px] sm:text-xs font-medium tracking-wider uppercase text-[#44618b]">
                  {searchQuery ? 'Search Results' : 'Popular Destinations'}
                </p>
              </div>
              
              {/* Scrollable Results */}
              <div className="max-h-[240px] overflow-y-auto overscroll-contain custom-scrollbar">
                <div className="p-2 sm:p-3">
                  {filteredDestinations.length > 0 ? (
                    <div className="space-y-1">
                      {filteredDestinations.map((dest) => (
                        <a
                          key={dest.name}
                          href={dest.href}
                          className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl hover:bg-[#12103d]/5 transition-colors group"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <dest.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="flex-1 text-left min-w-0">
                            <h4 className="font-display text-base sm:text-lg text-[#12103d] group-hover:text-[#d19457] transition-colors truncate">
                              {dest.name}
                            </h4>
                            <p className="font-sans text-xs sm:text-sm text-[#44618b] truncate">{dest.description}</p>
                          </div>
                          <span className="px-2 sm:px-3 py-1 bg-[#12103d]/5 rounded-full font-sans text-[10px] sm:text-xs text-[#44618b] capitalize flex-shrink-0">
                            {dest.type}
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <MapPin className="w-10 h-10 text-[#44618b]/30 mx-auto mb-3" />
                      <p className="font-sans text-sm text-[#44618b]">No destinations found</p>
                      <p className="font-sans text-xs text-[#44618b]/60 mt-1">Try searching for a country or continent</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Footer */}
              <div className="border-t border-[#12103d]/10 px-4 py-3 bg-[#f5f5f5]/50">
                <p className="font-sans text-[10px] sm:text-xs text-[#44618b] text-center">
                  Click a destination to explore • Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-[#12103d]/10 font-mono text-[10px]">Esc</kbd> to close
                </p>
              </div>
            </div>
          )}
        </div>

        <span className="inline-block font-sans text-[10px] sm:text-xs font-medium tracking-[3px] sm:tracking-[4px] uppercase text-[#d19457] mb-3 sm:mb-4">
          Your Trusted Travel Partner
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-tight">
          <span className="block transition-opacity duration-500">{slide.title}</span>
          <span className="block font-accent text-[#d19457] mt-1 sm:mt-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl transition-opacity duration-500">
            {slide.highlight}
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 transition-opacity duration-500">
          {slide.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a
            href="#favourite-trips"
            className="w-full sm:w-auto inline-block bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-[10px] sm:text-xs font-bold tracking-[2px] uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Explore Destinations
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-block bg-white/10 backdrop-blur-sm text-white font-sans text-[10px] sm:text-xs font-bold tracking-[2px] uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
          >
            Plan Your Trip
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-12 sm:mt-16">
          {textSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 sm:w-10 bg-[#d19457]' : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 sm:w-7 sm:h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
