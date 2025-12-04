import { Star, Calendar, Ship, Check } from 'lucide-react'
import { Cruise } from './cruisesData'

interface CruiseDetailsProps {
  cruise: Cruise | null
  onBookClick: () => void
}

export default function CruiseDetails({ cruise, onBookClick }: CruiseDetailsProps) {
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-[#d19457] text-[#d19457]" />)
    }
    if (rating % 1 !== 0) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-[#d19457]" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-[#d19457] text-[#d19457]" />
          </div>
        </div>
      )
    }
    return stars
  }

  if (!cruise) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 overflow-hidden sticky top-28">
        <div className="p-12 text-center">
          <Ship className="w-16 h-16 text-[#12103d]/20 mx-auto mb-4" />
          <h3 className="font-display text-xl text-[#12103d] mb-2">Select a Cruise</h3>
          <p className="font-sans text-sm text-[#44618b]">Click on any cruise to see details</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#12103d]/10 overflow-hidden sticky top-28">
      <div className="relative h-48">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cruise.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12103d] to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className={`inline-block px-3 py-1 text-xs font-sans font-semibold rounded-full ${cruise.tagColor} mb-2`}>
            {cruise.tag}
          </span>
          <h2 className="font-display text-2xl text-white">{cruise.name}</h2>
          <p className="font-sans text-sm text-white/80">{cruise.tagline}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">{renderStars(cruise.rating)}</div>
          <span className="font-sans text-sm text-[#44618b]">({cruise.rating})</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#f5f5f5] rounded-xl p-3">
            <Calendar className="w-5 h-5 text-[#43124a] mb-1" />
            <p className="font-sans text-xs text-[#44618b]">Duration</p>
            <p className="font-sans text-sm font-semibold text-[#12103d]">{cruise.nights} Nights</p>
          </div>
          <div className="bg-[#f5f5f5] rounded-xl p-3">
            <Ship className="w-5 h-5 text-[#43124a] mb-1" />
            <p className="font-sans text-xs text-[#44618b]">Departure</p>
            <p className="font-sans text-sm font-semibold text-[#12103d]">{cruise.departurePort}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-2">Destinations</h4>
          <div className="flex flex-wrap gap-2">
            {cruise.destinations.map((dest, idx) => (
              <span key={idx} className="px-3 py-1 bg-[#12103d]/5 rounded-full font-sans text-xs text-[#12103d]">
                {dest}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-sans text-xs text-[#44618b] uppercase tracking-wider mb-2">Highlights</h4>
          <div className="space-y-2">
            {cruise.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#d19457]" />
                <span className="font-sans text-sm text-[#44618b]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#12103d]/5 to-[#43124a]/5 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-sm text-[#44618b]">Starting from</span>
            <div>
              <span className="font-display text-3xl font-bold text-[#d19457]">${cruise.price}</span>
              <span className="font-sans text-sm text-[#44618b]">/person</span>
            </div>
          </div>
        </div>

        <button 
          onClick={onBookClick}
          className="w-full bg-gradient-to-r from-[#d19457] to-[#c77e36] text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          Book This Cruise
        </button>
      </div>
    </div>
  )
}
