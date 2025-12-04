'use client'

import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react'

const favouriteTrips = [
  {
    id: 'classic-europe',
    title: 'Classic Europe',
    subtitle: 'Paris • Amsterdam • Rome',
    duration: '10 Nights',
    rating: 4.9,
    price: 2499,
    tag: 'Most Popular',
    tagColor: 'bg-[#d19457] text-white',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    href: '#europe',
  },
  {
    id: 'thai-paradise',
    title: 'Thailand Paradise',
    subtitle: 'Bangkok • Phuket • Krabi',
    duration: '8 Nights',
    rating: 4.8,
    price: 1299,
    tag: 'Best Seller',
    tagColor: 'bg-[#43124a] text-white',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    href: '#thailand',
  },
  {
    id: 'maldives-luxury',
    title: 'Maldives Luxury',
    subtitle: 'Water Villas • Private Beach',
    duration: '5 Nights',
    rating: 5.0,
    price: 3499,
    tag: 'Honeymoon Special',
    tagColor: 'bg-[#8550a2] text-white',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    href: '#maldives',
  },
  {
    id: 'mediterranean-cruise',
    title: 'Mediterranean Cruise',
    subtitle: 'Barcelona • Nice • Rome',
    duration: '7 Nights',
    rating: 4.9,
    price: 1899,
    tag: 'New',
    tagColor: 'bg-[#12103d] text-white',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    href: '#cruises',
  },
  {
    id: 'bali-escape',
    title: 'Bali Escape',
    subtitle: 'Ubud • Seminyak • Nusa Dua',
    duration: '7 Nights',
    rating: 4.8,
    price: 1599,
    tag: 'Trending',
    tagColor: 'bg-[#44618b] text-white',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    href: '#indonesia',
  },
]

export default function FavouriteTrips() {
  return (
    <section id="favourite-trips" className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457] mb-4">
            Handpicked for You
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-4">
            Favourite <span className="font-accent text-[#d19457]">Trips</span>
          </h2>
          <p className="font-sans text-[#44618b] max-w-xl mx-auto">
            Our most loved travel experiences, curated by experts and adored by thousands
          </p>
        </div>

        {/* Top Row - 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favouriteTrips.slice(0, 3).map((trip) => (
            <a
              key={trip.id}
              href={trip.href}
              className="group destination-card bg-white rounded-3xl overflow-hidden shadow-lg border border-[#12103d]/5"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="destination-image absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url(${trip.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-sans font-semibold rounded-full ${trip.tagColor}`}>
                  {trip.tag}
                </span>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="font-sans text-xs text-[#44618b]">From</span>
                  <span className="font-display text-xl font-bold text-[#12103d] ml-1">${trip.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 fill-[#d19457] text-[#d19457]" />
                  <span className="font-sans text-sm font-semibold text-[#12103d]">{trip.rating}</span>
                  <span className="text-[#44618b]/30">•</span>
                  <Calendar className="w-4 h-4 text-[#44618b]" />
                  <span className="font-sans text-sm text-[#44618b]">{trip.duration}</span>
                </div>
                <h3 className="font-display text-2xl text-[#12103d] mb-1 group-hover:text-[#43124a] transition-colors">
                  {trip.title}
                </h3>
                <div className="flex items-center gap-1 text-[#44618b]">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans text-sm">{trip.subtitle}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-[#12103d]/5 flex items-center justify-between">
                  <span className="font-sans text-xs text-[#44618b]">View Details</span>
                  <ArrowRight className="w-4 h-4 text-[#d19457] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {favouriteTrips.slice(3).map((trip) => (
            <a
              key={trip.id}
              href={trip.href}
              className="group destination-card bg-white rounded-3xl overflow-hidden shadow-lg border border-[#12103d]/5"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="destination-image absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url(${trip.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-sans font-semibold rounded-full ${trip.tagColor}`}>
                  {trip.tag}
                </span>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="font-sans text-xs text-[#44618b]">From</span>
                  <span className="font-display text-xl font-bold text-[#12103d] ml-1">${trip.price}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 fill-[#d19457] text-[#d19457]" />
                  <span className="font-sans text-sm font-semibold text-[#12103d]">{trip.rating}</span>
                  <span className="text-[#44618b]/30">•</span>
                  <Calendar className="w-4 h-4 text-[#44618b]" />
                  <span className="font-sans text-sm text-[#44618b]">{trip.duration}</span>
                </div>
                <h3 className="font-display text-2xl text-[#12103d] mb-1 group-hover:text-[#43124a] transition-colors">
                  {trip.title}
                </h3>
                <div className="flex items-center gap-1 text-[#44618b]">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans text-sm">{trip.subtitle}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-[#12103d]/5 flex items-center justify-between">
                  <span className="font-sans text-xs text-[#44618b]">View Details</span>
                  <ArrowRight className="w-4 h-4 text-[#d19457] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
