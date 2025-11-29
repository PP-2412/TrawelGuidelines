'use client'

import { Mountain, Anchor, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const bookingOptions = [
  {
    id: 'europe',
    icon: Mountain,
    title: 'Europe',
    description: 'Discover the charm of historic cities, breathtaking landscapes, and rich cultural heritage across the continent.',
    destinations: ['Paris', 'Rome', 'Barcelona', 'Santorini', 'Swiss Alps'],
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
  },
  {
    id: 'cruises',
    icon: Anchor,
    title: 'Cruises',
    description: 'Set sail on luxury vessels through the Mediterranean, Caribbean, and beyond with world-class amenities.',
    destinations: ['Mediterranean', 'Caribbean', 'Norwegian Fjords', 'Greek Islands'],
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
  },
]

export default function BookWithUs() {
  return (
    <section id="book-with-us" className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            Book With <span className="font-accent text-[#d19457]">Us</span>
          </h2>
          <p className="font-sans text-[#44618b] tracking-wider">
            Choose your <span className="text-[#d19457] font-medium">Dream</span> Destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bookingOptions.map((option) => (
            <div
              key={option.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${option.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/80 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-3xl text-white">
                    {option.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="font-sans text-sm text-[#44618b] leading-relaxed mb-4">
                  {option.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {option.destinations.map((dest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#f5f5f5] text-[#12103d] font-sans text-xs rounded-full"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
                <Link
                  href={option.id === 'europe' ? '/europe' : `/cruises`}
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#d19457] hover:text-[#c77e36] transition-colors group/btn"
                >
                  Explore {option.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
