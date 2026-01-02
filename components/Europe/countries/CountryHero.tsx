'use client'

import { ChevronDown } from 'lucide-react'

interface CountryHeroProps {
  name: string
  tagline: string
  heroImage: string
}

export default function CountryHero({ name, tagline, heroImage }: CountryHeroProps) {
  const scrollToContent = () => {
    const element = document.getElementById('country-content')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#12103d]/60 via-[#12103d]/40 to-[#12103d]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-white/80 font-sans text-sm md:text-base tracking-[3px] uppercase mb-4">
          Explore
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
          {name}
        </h1>
        <p className="text-white/90 font-sans text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto">
          {tagline}
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
