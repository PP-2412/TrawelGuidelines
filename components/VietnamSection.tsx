'use client'

import { Flower2 } from 'lucide-react'
import DestinationCarousel, { DestinationItem } from './DestinationCarousel'

const packages: DestinationItem[] = [
  { id: 'create', title: 'Create Your Own', subtitle: '', duration: '', price: 0, image: '', isCustom: true },
  { id: 'highlights', title: 'Vietnam Highlights', subtitle: 'Hanoi • Ha Long Bay • Hoi An', duration: '10 Nights', price: 1699, image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80' },
  { id: 'halong', title: 'Ha Long Bay Cruise', subtitle: 'Luxury Junk Boat Experience', duration: '4 Nights', price: 899, image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80' },
  { id: 'saigon', title: 'Saigon & Mekong', subtitle: 'Ho Chi Minh • Mekong Delta', duration: '5 Nights', price: 1099, image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80' },
  { id: 'north-south', title: 'North to South', subtitle: 'Complete Vietnam Journey', duration: '14 Nights', price: 2299, image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80' },
  { id: 'hoi-an', title: 'Hoi An & Da Nang', subtitle: 'Ancient Town & Beach', duration: '6 Nights', price: 1199, image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80' },
  { id: 'sapa', title: 'Sapa Trekking', subtitle: 'Mountain Villages & Rice Terraces', duration: '5 Nights', price: 999, image: 'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=800&q=80' },
  { id: 'view-more', title: 'View More', subtitle: '', duration: '', price: 0, image: '', isViewMore: true },
]

export default function VietnamSection() {
  return (
    <section id="vietnam" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c77e36] to-[#d19457] flex items-center justify-center shadow-lg">
                <Flower2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457]">Destination</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-2">
              Experience <span className="font-accent text-[#d19457]">Vietnam</span>
            </h2>
            <p className="font-sans text-[#44618b] max-w-lg">Ha Long Bay wonders, ancient towns, and incredible street food</p>
          </div>
          <p className="font-sans text-sm text-[#44618b] mt-4 md:mt-0"><span className="text-[#12103d] font-semibold">8</span> packages available</p>
        </div>
        <DestinationCarousel items={packages} sectionHref="#vietnam" />
      </div>
    </section>
  )
}
