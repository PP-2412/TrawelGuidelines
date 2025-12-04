import { Star, Calendar, MapPin, Check } from 'lucide-react'
import { Cruise } from './cruisesData'

interface CruiseCardProps {
  cruise: Cruise
  isSelected: boolean
  onSelect: (cruise: Cruise) => void
}

export default function CruiseCard({ cruise, isSelected, onSelect }: CruiseCardProps) {
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

  return (
    <div
      onClick={() => onSelect(cruise)}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
        isSelected 
          ? 'border-[#12103d] ring-4 ring-[#12103d]/10' 
          : 'border-transparent hover:border-[#d19457]/50'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
          style={{ backgroundImage: `url(${cruise.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12103d]/60 via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-sans font-semibold rounded-full ${cruise.tagColor}`}>
          {cruise.tag}
        </span>
        {isSelected && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-[#12103d] rounded-full flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {renderStars(cruise.rating)}
          <span className="font-sans text-xs text-[#44618b] ml-1">({cruise.rating})</span>
        </div>
        <h3 className="font-display text-lg text-[#12103d] mb-1">{cruise.name}</h3>
        <p className="font-sans text-sm text-[#d19457] mb-3">{cruise.tagline}</p>
        
        <div className="flex items-center gap-4 text-[#44618b] text-sm mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {cruise.nights}N
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {cruise.departurePort}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#12103d]/5">
          <div>
            <span className="font-sans text-xs text-[#44618b]">From </span>
            <span className="font-display text-xl font-bold text-[#12103d]">${cruise.price}</span>
          </div>
          <span className="text-[#d19457] font-sans text-sm font-medium">View →</span>
        </div>
      </div>
    </div>
  )
}
