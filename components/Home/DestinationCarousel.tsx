'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Calendar, ArrowRight, Sparkles, Building2, Compass } from 'lucide-react'

export type DestinationItem = {
  id: string
  title: string
  subtitle: string
  duration: string
  price: number
  image: string
  isCustom?: boolean
  isViewMore?: boolean
  itemType?: 'tour' | 'resort'
  itemId?: string
  tag?: string
  tagColor?: string
  priceLabel?: string
}

type Props = {
  items: DestinationItem[]
  sectionHref: string
  countrySlug?: string
  customHref?: string
}

export default function DestinationCarousel({ items, sectionHref, countrySlug, customHref }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 5)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
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
      // Scroll by card width on mobile, more on desktop
      const cardWidth = window.innerWidth < 640 ? 280 : 360
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const getItemHref = (item: DestinationItem) => {
    if (item.isCustom) return customHref || sectionHref
    if (item.isViewMore) return sectionHref
    if (countrySlug && item.itemType && item.itemId) {
      const section = item.itemType === 'tour' ? 'tours' : 'resorts'
      return `/${countrySlug}?${item.itemType}=${item.itemId}#${section}`
    }
    return sectionHref
  }

  return (
    <div className="relative">
      {/* Navigation - Hidden on mobile, shown on desktop */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-[#12103d]/10 items-center justify-center transition-all hover:scale-110 hidden md:flex ${
          canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#12103d]" />
      </button>

      <button
        onClick={() => scroll('right')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-[#12103d]/10 items-center justify-center transition-all hover:scale-110 hidden md:flex ${
          canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#12103d]" />
      </button>

      {/* Carousel */}
      <div 
        ref={scrollRef} 
        className="carousel-container flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {items.map((item) => (
          <a 
            key={item.id} 
            href={getItemHref(item)} 
            className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] group"
          >
            {item.isCustom ? (
              <div className="h-[360px] sm:h-[400px] md:h-[420px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#12103d] to-[#43124a] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#d19457] opacity-10 rounded-full blur-2xl sm:blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#8550a2] opacity-10 rounded-full blur-2xl sm:blur-3xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#d19457]" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-2 sm:mb-3">Create Your Own</h3>
                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                    Build a personalized itinerary tailored to your preferences and dreams
                  </p>
                </div>
                <div className="relative z-10 inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-medium text-[#d19457] group-hover:gap-3 transition-all">
                  Start Planning <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ) : item.isViewMore ? (
              <div className="h-[360px] sm:h-[400px] md:h-[420px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#f5f5f5] to-white border-2 border-dashed border-[#12103d]/20 p-6 sm:p-8 flex flex-col items-center justify-center hover:border-[#d19457] transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#12103d]/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#d19457]/10 transition-colors">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-[#12103d] mb-2">View More</h3>
                <p className="font-sans text-xs sm:text-sm text-[#44618b] text-center">Explore all tours & resorts</p>
              </div>
            ) : (
              <div className="h-[360px] sm:h-[400px] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-lg border border-[#12103d]/5 destination-card">
                <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden">
                  <div
                    className="destination-image absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                  {/* Tag badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 sm:gap-2 max-w-[80%]">
                    {item.tag && (
                      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-sans font-semibold rounded-full ${item.tagColor || 'bg-[#d19457] text-white'}`}>
                        {item.tag}
                      </span>
                    )}
                    {item.itemType && (
                      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-sans font-semibold rounded-full flex items-center gap-1 ${
                        item.itemType === 'tour' ? 'bg-[#12103d] text-white' : 'bg-[#8550a2] text-white'
                      }`}>
                        {item.itemType === 'tour' ? <Compass className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> : <Building2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                        <span className="hidden sm:inline">{item.itemType === 'tour' ? 'Tour' : 'Resort'}</span>
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-1.5 sm:py-2">
                    <span className="font-sans text-[10px] sm:text-xs text-[#44618b]">From</span>
                    <span className="font-display text-base sm:text-xl font-bold text-[#12103d] ml-1">
                      {item.priceLabel === '/night' ? `₹${item.price >= 1000 ? (item.price/1000).toFixed(0) + 'K' : item.price}` : `$${item.price}`}
                    </span>
                    <span className="font-sans text-[10px] sm:text-xs text-[#44618b]">{item.priceLabel || '/person'}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="font-display text-base sm:text-lg md:text-xl text-[#12103d] mb-1.5 sm:mb-2 group-hover:text-[#43124a] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#44618b] mb-2 sm:mb-3">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm line-clamp-1">{item.subtitle}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#44618b]">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm">{item.duration}</span>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#12103d]/5 flex items-center justify-between">
                    <span className="font-sans text-[10px] sm:text-xs text-[#44618b]">View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d19457] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Mobile scroll indicators */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        <div className={`h-1 rounded-full transition-all ${canScrollLeft ? 'w-6 bg-[#d19457]' : 'w-3 bg-[#12103d]/20'}`} />
        <div className={`h-1 rounded-full transition-all ${canScrollRight ? 'w-6 bg-[#d19457]' : 'w-3 bg-[#12103d]/20'}`} />
      </div>
    </div>
  )
}
