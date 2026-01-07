'use client'

import { MapPin, Calendar, Star } from 'lucide-react'
import { EuropeCity, Season } from '../europeData'
import { getBestSeasons, getSeasonDisplay } from './countryData'

interface CityCardProps {
  city: EuropeCity
  index: number
  countrySlug: string
}

// Map city IDs to URL slugs
const getCitySlug = (cityId: string): string => {
  const slugMap: Record<string, string> = {
    'amalfi-coast': 'amalfi',
  }
  return slugMap[cityId] || cityId
}

// Map country names to URL slugs
const getCountrySlugFromName = (countryName: string): string => {
  const countryMap: Record<string, string> = {
    'Italy': 'italy',
    'France': 'france',
    'Germany': 'germany',
    'United Kingdom': 'england',
  }
  return countryMap[countryName] || countryName.toLowerCase()
}

export default function CityCard({ city, index, countrySlug }: CityCardProps) {
  const bestSeasons = getBestSeasons(city.id)
  const isEven = index % 2 === 0
  const citySlug = getCitySlug(city.id)
  // Use provided countrySlug, or derive from city.country if not provided
  const finalCountrySlug = countrySlug || getCountrySlugFromName(city.country)

  return (
    <div 
      className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''} bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      {/* Image Section */}
      <div className="relative w-full lg:w-2/5 h-64 lg:h-auto lg:min-h-[320px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${city.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#12103d]/30 to-transparent" />
        
        {/* Country Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#12103d] text-xs font-medium">
            <MapPin className="w-3 h-3" />
            {city.country}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
        {/* City Name & Description */}
        <h3 className="font-display text-2xl lg:text-3xl text-[#12103d] mb-2">
          {city.name}
        </h3>
        <p className="text-[#d19457] font-sans text-sm font-medium mb-3">
          {city.description}
        </p>
        
        {/* Suggested Stay */}
        <p className="text-[#12103d]/70 font-sans text-sm mb-4">
          Suggested stay: <span className="font-medium text-[#12103d]">{city.suggestedNights} nights</span>
          <span className="text-[#12103d]/50 ml-1">({city.minNights}-{city.maxNights} nights)</span>
        </p>

        {/* Highlights */}
        <div className="mb-5">
          <h4 className="text-[#12103d] font-sans text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-[#d19457]" />
            Highlights
          </h4>
          <div className="flex flex-wrap gap-2">
            {city.highlights.map((highlight, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 bg-[#f8f7f4] rounded-full text-[#12103d] text-sm font-sans"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Best Seasons */}
        <div>
          <h4 className="text-[#12103d] font-sans text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#d19457]" />
            Best Time to Visit
          </h4>
          <div className="flex flex-wrap gap-2">
            {bestSeasons.map((season) => {
              const seasonInfo = getSeasonDisplay(season)
              return (
                <span 
                  key={season}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#12103d]/5 rounded-full text-[#12103d] text-sm font-sans"
                >
                  <span>{seasonInfo.icon}</span>
                  {seasonInfo.name}
                </span>
              )
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <a 
            href={`/europe/${finalCountrySlug}/${citySlug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#12103d] text-white rounded-full text-sm font-medium hover:bg-[#43124a] transition-colors"
          >
            Explore {city.name}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
