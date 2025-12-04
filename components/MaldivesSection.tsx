'use client'

import { Waves } from 'lucide-react'
import DestinationCarousel, { DestinationItem } from './DestinationCarousel'

const packages: DestinationItem[] = [
  { id: 'create', title: 'Create Your Own', subtitle: '', duration: '', price: 0, image: '', isCustom: true },
  { id: 'water-villa', title: 'Luxury Water Villa', subtitle: 'Overwater Bungalow Experience', duration: '5 Nights', price: 3499, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80' },
  { id: 'honeymoon', title: 'Honeymoon Paradise', subtitle: 'Private Beach & Spa', duration: '6 Nights', price: 4299, image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80' },
  { id: 'diving', title: 'Diving Adventure', subtitle: 'Underwater Discovery', duration: '7 Nights', price: 3199, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80' },
  { id: 'all-inclusive', title: 'All-Inclusive Bliss', subtitle: 'Premium Resort Stay', duration: '5 Nights', price: 3899, image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80' },
  { id: 'family', title: 'Family Beach Villa', subtitle: 'Kid-Friendly Resort', duration: '6 Nights', price: 3599, image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80' },
  { id: 'budget', title: 'Budget Paradise', subtitle: 'Local Island Stay', duration: '5 Nights', price: 1499, image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80' },
  { id: 'view-more', title: 'View More', subtitle: '', duration: '', price: 0, image: '', isViewMore: true },
]

export default function MaldivesSection() {
  return (
    <section id="maldives" className="py-24 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#44618b] to-[#12103d] flex items-center justify-center shadow-lg">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <span className="font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457]">Destination</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-2">
              Paradise in <span className="font-accent text-[#d19457]">Maldives</span>
            </h2>
            <p className="font-sans text-[#44618b] max-w-lg">Crystal clear waters, overwater villas, and the ultimate tropical escape</p>
          </div>
          <p className="font-sans text-sm text-[#44618b] mt-4 md:mt-0"><span className="text-[#12103d] font-semibold">8</span> packages available</p>
        </div>
        <DestinationCarousel items={packages} sectionHref="#maldives" />
      </div>
    </section>
  )
}
