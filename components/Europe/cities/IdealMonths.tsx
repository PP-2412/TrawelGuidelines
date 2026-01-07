'use client'

import { Calendar, Sun, Cloud, Snowflake, Leaf } from 'lucide-react'
import { Season, citySeasonalData, SeasonCompatibility } from '../europeData'

interface IdealMonthsProps {
  cityId: string
  cityName: string
}

const seasonConfig: Record<Season, { name: string; months: string; icon: React.ReactNode; color: string }> = {
  spring: { 
    name: 'Spring', 
    months: 'Mar - May', 
    icon: <Leaf className="w-5 h-5" />,
    color: 'bg-green-100 text-green-700 border-green-200'
  },
  summer: { 
    name: 'Summer', 
    months: 'Jun - Aug', 
    icon: <Sun className="w-5 h-5" />,
    color: 'bg-amber-100 text-amber-700 border-amber-200'
  },
  autumn: { 
    name: 'Autumn', 
    months: 'Sep - Nov', 
    icon: <Cloud className="w-5 h-5" />,
    color: 'bg-orange-100 text-orange-700 border-orange-200'
  },
  winter: { 
    name: 'Winter', 
    months: 'Dec - Feb', 
    icon: <Snowflake className="w-5 h-5" />,
    color: 'bg-blue-100 text-blue-700 border-blue-200'
  },
}

const compatibilityStyles: Record<SeasonCompatibility, { label: string; badge: string }> = {
  ideal: { label: 'Ideal', badge: 'bg-[#d19457] text-white' },
  good: { label: 'Good', badge: 'bg-[#12103d]/10 text-[#12103d]' },
  limited: { label: 'Limited', badge: 'bg-amber-100 text-amber-700' },
  'not-recommended': { label: 'Not Recommended', badge: 'bg-red-100 text-red-700' },
}

export default function IdealMonths({ cityId, cityName }: IdealMonthsProps) {
  const seasonalData = citySeasonalData[cityId]
  const seasons: Season[] = ['spring', 'summer', 'autumn', 'winter']

  if (!seasonalData) {
    return null
  }

  return (
    <section className="py-16 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[#d19457] mb-3">
            <Calendar className="w-5 h-5" />
            <span className="font-sans text-sm font-medium uppercase tracking-wider">Best Time to Visit</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-[#12103d]">
            When to Visit {cityName}
          </h2>
        </div>

        {/* Seasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {seasons.map((season) => {
            const config = seasonConfig[season]
            const data = seasonalData[season]
            const compatibility = data?.compatibility || 'good'
            const compatStyle = compatibilityStyles[compatibility]

            return (
              <div 
                key={season}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Season Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${config.color}`}>
                    {config.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${compatStyle.badge}`}>
                    {compatStyle.label}
                  </span>
                </div>

                {/* Season Info */}
                <h3 className="font-display text-xl text-[#12103d] mb-1">
                  {config.name}
                </h3>
                <p className="text-[#12103d]/50 text-sm mb-3">
                  {config.months}
                </p>

                {/* Highlight */}
                {data?.highlight && (
                  <p className="text-[#12103d]/70 text-sm mb-2">
                    ✨ {data.highlight}
                  </p>
                )}

                {/* Warning */}
                {data?.warning && (
                  <p className="text-amber-600 text-xs mt-2 p-2 bg-amber-50 rounded-lg">
                    ⚠️ {data.warning}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
