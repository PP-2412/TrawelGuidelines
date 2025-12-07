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
  // New fields for linking
  itemType?: 'tour' | 'resort'
  itemId?: string
  tag?: string
  tagColor?: string
  priceLabel?: string // e.g., "/person" or "/night"
}

type Props = {
  items: DestinationItem[]
  sectionHref: string
  countrySlug?: string // e.g., "thailand", "maldives"
  customHref?: string // separate href for "Create Your Own" cards
}

export default function DestinationCarousel({ items, sectionHref, countrySlug, customHref }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener('scroll', checkScroll)
      return () => ref.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Generate href for each item
  const getItemHref = (item: DestinationItem) => {
    // Use customHref for "Create Your Own" cards if provided
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
      {/* Navigation */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-xl border border-[#12103d]/10 flex items-center justify-center transition-all hover:scale-110 ${
          canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-[#12103d]" />
      </button>

      <button
        onClick={() => scroll('right')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-xl border border-[#12103d]/10 flex items-center justify-center transition-all hover:scale-110 ${
          canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronRight className="w-6 h-6 text-[#12103d]" />
      </button>

      {/* Carousel */}
      <div ref={scrollRef} className="carousel-container flex gap-6 overflow-x-auto pb-4">
        {items.map((item) => (
          <a key={item.id} href={getItemHref(item)} className="flex-shrink-0 w-[340px] group">
            {item.isCustom ? (
              <div className="h-[420px] rounded-3xl bg-gradient-to-br from-[#12103d] to-[#43124a] p-8 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#d19457] opacity-10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8550a2] opacity-10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-[#d19457]" />
                  </div>
                  <h3 className="font-display text-3xl text-white mb-3">Create Your Own</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    Build a personalized itinerary tailored to your preferences and dreams
                  </p>
                </div>
                <div className="relative z-10 inline-flex items-center gap-2 font-sans text-sm font-medium text-[#d19457] group-hover:gap-3 transition-all">
                  Start Planning <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ) : item.isViewMore ? (
              <div className="h-[420px] rounded-3xl bg-gradient-to-br from-[#f5f5f5] to-white border-2 border-dashed border-[#12103d]/20 p-8 flex flex-col items-center justify-center hover:border-[#d19457] transition-colors">
                <div className="w-20 h-20 rounded-full bg-[#12103d]/5 flex items-center justify-center mb-6 group-hover:bg-[#d19457]/10 transition-colors">
                  <ArrowRight className="w-8 h-8 text-[#12103d] group-hover:text-[#d19457] transition-colors" />
                </div>
                <h3 className="font-display text-2xl text-[#12103d] mb-2">View More</h3>
                <p className="font-sans text-sm text-[#44618b] text-center">Explore all tours & resorts</p>
              </div>
            ) : (
              <div className="h-[420px] rounded-3xl overflow-hidden bg-white shadow-lg border border-[#12103d]/5 destination-card">
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="destination-image absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                  {/* Tag badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.tag && (
                      <span className={`px-3 py-1 text-xs font-sans font-semibold rounded-full ${item.tagColor || 'bg-[#d19457] text-white'}`}>
                        {item.tag}
                      </span>
                    )}
                    {item.itemType && (
                      <span className={`px-3 py-1 text-xs font-sans font-semibold rounded-full flex items-center gap-1 ${
                        item.itemType === 'tour' ? 'bg-[#12103d] text-white' : 'bg-[#8550a2] text-white'
                      }`}>
                        {item.itemType === 'tour' ? <Compass className="w-3 h-3" /> : <Building2 className="w-3 h-3" />}
                        {item.itemType === 'tour' ? 'Tour' : 'Resort'}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                    <span className="font-sans text-xs text-[#44618b]">From</span>
                    <span className="font-display text-xl font-bold text-[#12103d] ml-1">
                      {item.priceLabel === '/night' ? `₹${item.price >= 1000 ? (item.price/1000).toFixed(0) + 'K' : item.price}` : `$${item.price}`}
                    </span>
                    <span className="font-sans text-xs text-[#44618b]">{item.priceLabel || '/person'}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[#12103d] mb-2 group-hover:text-[#43124a] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#44618b] mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="font-sans text-sm">{item.subtitle}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#44618b]">
                    <Calendar className="w-4 h-4" />
                    <span className="font-sans text-sm">{item.duration}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#12103d]/5 flex items-center justify-between">
                    <span className="font-sans text-xs text-[#44618b]">View Details</span>
                    <ArrowRight className="w-4 h-4 text-[#d19457] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
