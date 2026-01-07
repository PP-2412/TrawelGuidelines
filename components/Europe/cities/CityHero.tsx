'use client'

import { ChevronDown, MapPin } from 'lucide-react'

interface CityHeroProps {
  name: string
  country: string
  description: string
  heroImage: string
}

export default function CityHero({ name, country, description, heroImage }: CityHeroProps) {
  const scrollToContent = () => {
    const element = document.getElementById('city-content')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#12103d]/50 via-[#12103d]/30 to-[#12103d]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Country Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
          <MapPin className="w-4 h-4" />
          {country}
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
          {name}
        </h1>
        <p className="text-white/90 font-sans text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
