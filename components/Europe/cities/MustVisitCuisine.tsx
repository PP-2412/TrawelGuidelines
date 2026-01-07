'use client'

import { Camera, UtensilsCrossed } from 'lucide-react'
import { Attraction, CuisineItem } from './cityDetailsData'

interface MustVisitCuisineProps {
  cityName: string
  mustVisit: Attraction[]
  localCuisine: CuisineItem[]
}

export default function MustVisitCuisine({ cityName, mustVisit, localCuisine }: MustVisitCuisineProps) {
  return (
    <section className="py-16 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Must Visit Column */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-[#d19457] mb-3">
                <Camera className="w-5 h-5" />
                <span className="font-sans text-sm font-medium uppercase tracking-wider">Attractions</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#12103d]">
                Must Visit in {cityName}
              </h2>
            </div>

            {/* Attractions List */}
            <div className="space-y-4">
              {mustVisit.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                >
                  {/* Image */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-[#12103d] mb-1 group-hover:text-[#d19457] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[#12103d]/60 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local Cuisine Column */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-[#d19457] mb-3">
                <UtensilsCrossed className="w-5 h-5" />
                <span className="font-sans text-sm font-medium uppercase tracking-wider">Food & Drink</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#12103d]">
                Local Cuisine
              </h2>
            </div>

            {/* Cuisine List */}
            <div className="space-y-4">
              {localCuisine.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                >
                  {/* Image */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-[#12103d] mb-1 group-hover:text-[#d19457] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[#12103d]/60 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
