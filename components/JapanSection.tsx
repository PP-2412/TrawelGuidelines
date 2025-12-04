'use client'

import { Cherry } from 'lucide-react'
import DestinationCarousel, { DestinationItem } from './DestinationCarousel'

const packages: DestinationItem[] = [
  { id: 'create', title: 'Create Your Own', subtitle: '', duration: '', price: 0, image: '', isCustom: true },
  { id: 'highlights', title: 'Japan Highlights', subtitle: 'Tokyo • Kyoto • Osaka', duration: '10 Nights', price: 2999, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80' },
  { id: 'cherry', title: 'Cherry Blossom Tour', subtitle: 'Spring Season Special', duration: '8 Nights', price: 3499, image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80' },
  { id: 'temples', title: 'Ancient Temples', subtitle: 'Kyoto • Nara • Hiroshima', duration: '7 Nights', price: 2699, image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80' },
  { id: 'tokyo', title: 'Tokyo Explorer', subtitle: 'Modern Japan Experience', duration: '5 Nights', price: 1999, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80' },
  { id: 'fuji', title: 'Mount Fuji & Beyond', subtitle: 'Tokyo • Hakone • Mt. Fuji', duration: '6 Nights', price: 2399, image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80' },
  { id: 'food', title: 'Food & Culture', subtitle: 'Osaka • Kyoto Food Tour', duration: '7 Nights', price: 2799, image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80' },
  { id: 'view-more', title: 'View More', subtitle: '', duration: '', price: 0, image: '', isViewMore: true },
]

export default function JapanSection() {
  return (
    <section id="japan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8550a2] to-[#43124a] flex items-center justify-center shadow-lg">
                <Cherry className="w-6 h-6 text-white" />
              </div>
              <span className="font-sans text-xs font-medium tracking-[4px] uppercase text-[#d19457]">Destination</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#12103d] mb-2">
              Discover <span className="font-accent text-[#d19457]">Japan</span>
            </h2>
            <p className="font-sans text-[#44618b] max-w-lg">Ancient traditions meet cutting-edge technology in the Land of the Rising Sun</p>
          </div>
          <p className="font-sans text-sm text-[#44618b] mt-4 md:mt-0"><span className="text-[#12103d] font-semibold">8</span> packages available</p>
        </div>
        <DestinationCarousel items={packages} sectionHref="#japan" />
      </div>
    </section>
  )
}
