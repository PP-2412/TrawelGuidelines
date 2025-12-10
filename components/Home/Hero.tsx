'use client'

import { useState, useEffect } from 'react'

const heroSlides = [
  {
    title: 'Discover Your Next',
    highlight: 'Adventure',
    subtitle: 'From European escapes to Asian wonders and luxury cruises worldwide',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&q=80',
  },
  {
    title: 'Explore the Beauty of',
    highlight: 'Europe',
    subtitle: 'Historic cities, breathtaking landscapes, and timeless culture',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80',
  },
  {
    title: 'Paradise Awaits in',
    highlight: 'Asia',
    subtitle: 'Pristine beaches, ancient temples, and vibrant cultures',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80',
  },
  {
    title: 'Set Sail on',
    highlight: 'Luxury Cruises',
    subtitle: 'World-class amenities across the seven seas',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${s.image})` }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12103d]/70 via-[#12103d]/50 to-[#12103d]/80" />

      {/* Decorative - Hidden on mobile for performance */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#d19457] opacity-10 rounded-full blur-[80px] sm:blur-[100px] hidden sm:block" />
      <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#8550a2] opacity-15 rounded-full blur-[100px] sm:blur-[120px] hidden sm:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center pt-20 sm:pt-24">
        <span className="inline-block font-sans text-[10px] sm:text-xs font-medium tracking-[3px] sm:tracking-[4px] uppercase text-[#d19457] mb-3 sm:mb-4">
          Your Trusted Travel Partner
        </span>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 sm:mb-6 leading-tight">
          <span className="block">{slide.title}</span>
          <span className="block font-accent text-[#d19457] mt-1 sm:mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            {slide.highlight}
          </span>
        </h1>

        <p className="font-sans text-sm sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
          {slide.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <a
            href="#favourite-trips"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-xs font-bold tracking-[1.5px] sm:tracking-[2px] uppercase px-6 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 touch-target"
          >
            Explore Destinations
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-sans text-xs font-bold tracking-[1.5px] sm:tracking-[2px] uppercase px-6 sm:px-10 py-3.5 sm:py-4 rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 touch-target"
          >
            Plan Your Trip
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-16">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 touch-target flex items-center justify-center ${
                index === currentSlide ? 'w-8 sm:w-10 bg-[#d19457]' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-[10px] text-white/50 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
