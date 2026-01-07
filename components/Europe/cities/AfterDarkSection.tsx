'use client'

import { useRef, useState, useEffect } from 'react'
import { Moon, ChevronLeft, ChevronRight } from 'lucide-react'
import { NightlifeSpot } from './cityDetailsData'

interface AfterDarkSectionProps {
  cityName: string
  spots: NightlifeSpot[]
}

export default function AfterDarkSection({ cityName, spots }: AfterDarkSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        ref.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      })
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#12103d] via-[#230c33] to-[#43124a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#d19457] mb-3">
              <Moon className="w-5 h-5" />
              <span className="font-sans text-sm font-medium uppercase tracking-wider">Nightlife</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-2">
              After Dark in {cityName}
            </h2>
            <p className="text-white/60 font-sans max-w-xl">
              Experience the city&apos;s vibrant nightlife scene, from rooftop bars to legendary clubs
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center transition-all ${
                canScrollLeft 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-white/30 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center transition-all ${
                canScrollRight 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-white/30 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {spots.map((spot, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-64 md:w-72 snap-start group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden mb-4">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${spot.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/80 via-transparent to-transparent" />
                
                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#d19457] text-white text-xs font-medium">
                    {spot.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-white mb-1 group-hover:text-[#d19457] transition-colors">
                {spot.name}
              </h3>
              <p className="text-white/60 font-sans text-sm line-clamp-2">
                {spot.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="flex md:hidden justify-center mt-4">
          <p className="text-white/40 text-sm">
            Swipe to explore →
          </p>
        </div>
      </div>
    </section>
  )
}
