'use client'

import { Palmtree } from 'lucide-react'
import DestinationCarousel, { DestinationItem } from './DestinationCarousel'

const packages: DestinationItem[] = [
  { id: 'create', title: 'Create Your Own', subtitle: '', duration: '', price: 0, image: '', isCustom: true },
  { id: 'paradise', title: 'Thailand Paradise', subtitle: 'Bangkok • Phuket • Krabi', duration: '8 Nights', price: 1299, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80' },
  { id: 'island', title: 'Island Hopping', subtitle: 'Phuket • Phi Phi • Koh Samui', duration: '10 Nights', price: 1599, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80' },
  { id: 'cultural', title: 'Cultural North', subtitle: 'Bangkok • Chiang Mai • Chiang Rai', duration: '7 Nights', price: 1199, image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80' },
  { id: 'beaches', title: 'Bangkok & Beaches', subtitle: 'Bangkok • Pattaya • Hua Hin', duration: '6 Nights', price: 999, image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80' },
  { id: 'luxury', title: 'Luxury Retreat', subtitle: 'Bangkok • Koh Samui Villa', duration: '7 Nights', price: 2299, image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80' },
  { id: 'adventure', title: 'Adventure Thailand', subtitle: 'Krabi • Khao Sok • Phuket', duration: '9 Nights', price: 1499, image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80' },
  { id: 'view-more', title: 'View More', subtitle: '', duration: '', price: 0, image: '', isViewMore: true },
]

export default function ThailandSection() {
  return (
    <section id="thailand" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d19457] to-[#c77e36] flex items-center justify-center shadow-lg">
                <Palmtree className="w-6 h-6 text-white" />
              </div>
              <span className="font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457]">Destination</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-2">
              Discover <span className="font-accent text-[#d19457]">Thailand</span>
            </h2>
            <p className="font-sans text-[#44618b] max-w-lg">Ancient temples, pristine beaches, and warm hospitality await</p>
          </div>
          <p className="font-sans text-sm text-[#44618b] mt-4 md:mt-0"><span className="text-[#12103d] font-semibold">8</span> packages available</p>
        </div>
        <DestinationCarousel items={packages} sectionHref="#thailand" />
      </div>
    </section>
  )
}
