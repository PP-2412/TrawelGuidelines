'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Anchor, Star, ArrowRight, Ship } from 'lucide-react'

const cruises = [
  { id: 'disney-cruise', name: 'Disney Cruise Line', tagline: 'Singapore - Asia Pacific', rating: 5, price: 899, nights: 7, tag: 'Family Favourite', tagColor: 'bg-[#12103d] text-white', image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80' },
  { id: 'royal-caribbean', name: 'Royal Caribbean', tagline: 'Caribbean Adventures', rating: 5, price: 699, nights: 7, tag: 'Most Popular', tagColor: 'bg-[#d19457] text-white', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80' },
  { id: 'norwegian-cruise', name: 'Norwegian Cruise', tagline: 'Alaska & Europe', rating: 4.5, price: 599, nights: 5, tag: 'Best Value', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80' },
  { id: 'celebrity-cruises', name: 'Celebrity Cruises', tagline: 'Mediterranean Luxury', rating: 5, price: 899, nights: 10, tag: 'Premium', tagColor: 'bg-[#8550a2] text-white', image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80' },
  { id: 'cordelia-cruises', name: 'Cordelia Cruises', tagline: "India's Premium Line", rating: 4.5, price: 299, nights: 3, tag: 'Indian', tagColor: 'bg-[#c77e36] text-white', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80' },
]

export default function CruisesSection() {
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
      scrollRef.current.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' })
    }
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-[#d19457] text-[#d19457]" />)
    }
    return stars
  }

  return (
    <section id="cruises" className="py-24 bg-gradient-to-b from-[#12103d] to-[#230c33]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Anchor className="w-6 h-6 text-[#d19457]" />
              </div>
              <span className="font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457]">Set Sail</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-2">
              Luxury <span className="font-accent text-[#d19457]">Cruises</span>
            </h2>
            <p className="font-sans text-white/70 max-w-lg">
              Experience the ultimate luxury on the high seas with our handpicked cruise partners
            </p>
          </div>
          <a href="/cruises" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#d19457] hover:text-white transition-colors mt-4 md:mt-0">
            View All Cruises <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all hover:scale-110 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <ChevronLeft className="w-6 h-6 text-[#12103d]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all hover:scale-110 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <ChevronRight className="w-6 h-6 text-[#12103d]" />
          </button>

          <div ref={scrollRef} className="carousel-container flex gap-6 overflow-x-auto pb-4">
            {cruises.map((cruise) => (
              <a key={cruise.id} href={`/cruises?cruise=${cruise.id}`} className="flex-shrink-0 w-[340px] group">
                <div className="h-[400px] rounded-3xl overflow-hidden bg-white shadow-lg destination-card">
                  <div className="relative h-52 overflow-hidden">
                    <div className="destination-image absolute inset-0 bg-cover bg-center transition-transform duration-700" style={{ backgroundImage: `url(${cruise.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                    <span className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-sans font-semibold rounded-full ${cruise.tagColor}`}>{cruise.tag}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-0.5">{renderStars(cruise.rating)}</div>
                      <span className="font-sans text-xs text-[#44618b]">({cruise.rating})</span>
                    </div>
                    <h3 className="font-display text-xl text-[#12103d] mb-1 group-hover:text-[#43124a] transition-colors">{cruise.name}</h3>
                    <p className="font-sans text-sm text-[#d19457] mb-2">{cruise.tagline}</p>
                    <p className="font-sans text-sm text-[#44618b]">{cruise.nights} Nights</p>
                    <div className="mt-4 pt-4 border-t border-[#12103d]/5 flex items-center justify-between">
                      <div>
                        <span className="font-sans text-xs text-[#44618b]">From </span>
                        <span className="font-display text-xl font-bold text-[#12103d]">${cruise.price}</span>
                        <span className="font-sans text-xs text-[#44618b]">/person</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#d19457] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* View More */}
            <a href="/cruises" className="flex-shrink-0 w-[340px] group">
              <div className="h-[400px] rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/20 p-8 flex flex-col items-center justify-center hover:border-[#d19457] transition-colors">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#d19457]/20 transition-colors">
                  <Ship className="w-8 h-8 text-white group-hover:text-[#d19457] transition-colors" />
                </div>
                <h3 className="font-display text-2xl text-white mb-2">View More</h3>
                <p className="font-sans text-sm text-white/60 text-center">Explore all cruise options</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
