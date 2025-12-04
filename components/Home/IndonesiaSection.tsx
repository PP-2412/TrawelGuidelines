'use client'

import { TreePalm } from 'lucide-react'
import DestinationCarousel, { DestinationItem } from './DestinationCarousel'

const packages: DestinationItem[] = [
  { id: 'create', title: 'Create Your Own', subtitle: '', duration: '', price: 0, image: '', isCustom: true },
  { id: 'bali-escape', title: 'Bali Escape', subtitle: 'Ubud • Seminyak • Nusa Dua', duration: '7 Nights', price: 1599, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80' },
  { id: 'bali-adventure', title: 'Bali Adventure', subtitle: 'Ubud • Canggu • Uluwatu', duration: '8 Nights', price: 1799, image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80' },
  { id: 'komodo', title: 'Komodo Expedition', subtitle: 'Labuan Bajo • Komodo Island', duration: '5 Nights', price: 1999, image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80' },
  { id: 'java', title: 'Java Cultural Tour', subtitle: 'Jakarta • Yogyakarta • Borobudur', duration: '6 Nights', price: 1399, image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80' },
  { id: 'gili', title: 'Gili Islands Getaway', subtitle: 'Bali • Gili Trawangan • Lombok', duration: '8 Nights', price: 1699, image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&q=80' },
  { id: 'luxury-bali', title: 'Luxury Bali Villa', subtitle: 'Private Villa Experience', duration: '6 Nights', price: 2499, image: 'https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80' },
  { id: 'view-more', title: 'View More', subtitle: '', duration: '', price: 0, image: '', isViewMore: true },
]

export default function IndonesiaSection() {
  return (
    <section id="indonesia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#43124a] to-[#8550a2] flex items-center justify-center shadow-lg">
                <TreePalm className="w-6 h-6 text-white" />
              </div>
              <span className="font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457]">Destination</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-2">
              Explore <span className="font-accent text-[#d19457]">Indonesia</span>
            </h2>
            <p className="font-sans text-[#44618b] max-w-lg">From Bali&apos;s rice terraces to Komodo dragons, discover island paradise</p>
          </div>
          <a href="#indonesia" className="font-sans text-sm font-medium text-[#d19457] hover:text-[#12103d] transition-colors mt-4 md:mt-0 inline-flex items-center gap-1">
            View All →
          </a>
        </div>
        <DestinationCarousel items={packages} sectionHref="#indonesia" />
      </div>
    </section>
  )
}
