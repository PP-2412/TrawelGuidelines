'use client'

import { Flower2 } from 'lucide-react'
import DestinationCarousel, { DestinationItem } from './DestinationCarousel'
import { vietnamData } from '@/components/Destinations/destinationsData'

// Create mixed items from tours and resorts
const createMixedItems = (): DestinationItem[] => {
  const items: DestinationItem[] = [
    { id: 'create', title: 'Create Your Own', subtitle: '', duration: '', price: 0, image: '', isCustom: true },
  ]

  // Add 3 tours
  vietnamData.tours.slice(0, 3).forEach(tour => {
    items.push({
      id: `tour-${tour.id}`,
      title: tour.name,
      subtitle: tour.description.slice(0, 50) + '...',
      duration: tour.duration,
      price: tour.price,
      image: tour.image,
      itemType: 'tour',
      itemId: tour.id,
      tag: tour.category.charAt(0).toUpperCase() + tour.category.slice(1),
      tagColor: 'bg-[#d19457] text-white',
      priceLabel: '/person',
    })
  })

  // Add 3 resorts
  vietnamData.resorts.slice(0, 3).forEach(resort => {
    items.push({
      id: `resort-${resort.id}`,
      title: resort.name,
      subtitle: resort.location,
      duration: resort.tag || 'Available Now',
      price: resort.pricePerNight,
      image: resort.image,
      itemType: 'resort',
      itemId: resort.id,
      tag: resort.budgetRange === '100+' ? 'Luxury' : resort.budgetRange === '50-100' ? 'Premium' : resort.budgetRange === '25-50' ? 'Mid-Range' : 'Budget',
      tagColor: resort.budgetRange === '100+' ? 'bg-[#12103d] text-white' : resort.budgetRange === '50-100' ? 'bg-[#d19457] text-white' : resort.budgetRange === '25-50' ? 'bg-[#8550a2] text-white' : 'bg-[#44618b] text-white',
      priceLabel: '/night',
    })
  })

  items.push({ id: 'view-more', title: 'View More', subtitle: '', duration: '', price: 0, image: '', isViewMore: true })

  return items
}

const packages = createMixedItems()

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
          <a href="/vietnam" className="font-sans text-sm font-medium text-[#d19457] hover:text-[#12103d] transition-colors mt-4 md:mt-0 inline-flex items-center gap-1">
            View All →
          </a>
        </div>
        <DestinationCarousel items={packages} sectionHref="/vietnam" countrySlug="vietnam" />
      </div>
    </section>
  )
}
