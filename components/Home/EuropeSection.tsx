'use client'

import { Mountain } from 'lucide-react'
import DestinationCarousel, { DestinationItem } from './DestinationCarousel'

const europePackages: DestinationItem[] = [
  { id: 'create-own', title: 'Create Your Own', subtitle: '', duration: '', price: 0, image: '', isCustom: true },
  { id: 'classic-europe', title: 'Classic Europe', subtitle: 'Paris • Amsterdam • Rome', duration: '10 Nights', price: 2499, image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80' },
  { id: 'romantic-escape', title: 'Romantic Escape', subtitle: 'Paris • Venice • Santorini', duration: '8 Nights', price: 2899, image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80' },
  { id: 'mediterranean', title: 'Mediterranean Magic', subtitle: 'Barcelona • Nice • Florence', duration: '9 Nights', price: 2299, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { id: 'central-europe', title: 'Central Europe', subtitle: 'Berlin • Prague • Vienna', duration: '7 Nights', price: 1899, image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80' },
  { id: 'iberian', title: 'Iberian Adventure', subtitle: 'Lisbon • Madrid • Barcelona', duration: '9 Nights', price: 2199, image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80' },
  { id: 'nordic', title: 'Nordic Wonders', subtitle: 'Copenhagen • Stockholm • Oslo', duration: '8 Nights', price: 2699, image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80' },
  { id: 'greek-islands', title: 'Greek Islands', subtitle: 'Athens • Mykonos • Santorini', duration: '7 Nights', price: 1999, image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80' },
  { id: 'view-more', title: 'View More', subtitle: '', duration: '', price: 0, image: '', isViewMore: true },
]

export default function EuropeSection() {
  return (
    <section id="europe" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#12103d] to-[#43124a] flex items-center justify-center shadow-lg">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457]">Destination</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-2">
              Explore <span className="font-accent text-[#d19457]">Europe</span>
            </h2>
            <p className="font-sans text-[#44618b] max-w-lg">
              From historic cities to stunning coastlines, discover the charm of the Old Continent
            </p>
          </div>
          <a href="#europe" className="font-sans text-sm font-medium text-[#d19457] hover:text-[#12103d] transition-colors mt-4 md:mt-0 inline-flex items-center gap-1">
            View All →
          </a>
        </div>
        <DestinationCarousel items={europePackages} sectionHref="#europe" />
      </div>
    </section>
  )
}
