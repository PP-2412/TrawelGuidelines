'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ThingToDo {
  title: string
  description: string
  image: string
}

interface ThingsToDoSectionProps {
  countryName: string
  things: ThingToDo[]
}

export default function ThingsToDoSection({ countryName, things }: ThingsToDoSectionProps) {
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
      const scrollAmount = 320
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      })
    }
  }

  return (
    <section className="py-16 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[#12103d] mb-2">
              Things to Do in {countryName}
            </h2>
            <p className="text-[#12103d]/60 font-sans">
              Iconic experiences you can&apos;t miss
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border-2 border-[#12103d] flex items-center justify-center transition-all ${
                canScrollLeft 
                  ? 'text-[#12103d] hover:bg-[#12103d] hover:text-white' 
                  : 'text-[#12103d]/30 border-[#12103d]/30 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border-2 border-[#12103d] flex items-center justify-center transition-all ${
                canScrollRight 
                  ? 'text-[#12103d] hover:bg-[#12103d] hover:text-white' 
                  : 'text-[#12103d]/30 border-[#12103d]/30 cursor-not-allowed'
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
          {things.map((thing, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-72 md:w-80 snap-start group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden mb-4">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${thing.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 to-transparent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-[#12103d] mb-1 group-hover:text-[#d19457] transition-colors">
                {thing.title}
              </h3>
              <p className="text-[#12103d]/60 font-sans text-sm">
                {thing.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="flex md:hidden justify-center mt-4">
          <p className="text-[#12103d]/40 text-sm">
            Swipe to explore →
          </p>
        </div>
      </div>
    </section>
  )
}
