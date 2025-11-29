'use client'

import { Check } from 'lucide-react'
import { CitySelection } from './EuropeBuilder'

const packages = [
  {
    id: 'classic-europe',
    name: 'Classic Europe',
    duration: '10 Nights',
    tag: 'Most Popular',
    cities: [
      { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', nights: 3, coordinates: { x: 240, y: 280 } },
      { id: 'amsterdam', city: 'Amsterdam', country: 'Netherlands', countryCode: 'NL', nights: 2, coordinates: { x: 290, y: 200 } },
      { id: 'brussels', city: 'Brussels', country: 'Belgium', countryCode: 'BE', nights: 1, coordinates: { x: 280, y: 220 } },
      { id: 'zurich', city: 'Zurich', country: 'Switzerland', countryCode: 'CH', nights: 2, coordinates: { x: 360, y: 290 } },
      { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 420, y: 380 } },
    ],
  },
  {
    id: 'romantic-escape',
    name: 'Romantic Escape',
    duration: '8 Nights',
    tag: 'Honeymoon Special',
    cities: [
      { id: 'paris', city: 'Paris', country: 'France', countryCode: 'FR', nights: 3, coordinates: { x: 240, y: 280 } },
      { id: 'venice', city: 'Venice', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 420, y: 310 } },
      { id: 'santorini', city: 'Santorini', country: 'Greece', countryCode: 'GR', nights: 3, coordinates: { x: 570, y: 450 } },
    ],
  },
  {
    id: 'mediterranean-magic',
    name: 'Mediterranean Magic',
    duration: '9 Nights',
    tag: 'Sun & Sea',
    cities: [
      { id: 'barcelona', city: 'Barcelona', country: 'Spain', countryCode: 'ES', nights: 3, coordinates: { x: 180, y: 340 } },
      { id: 'nice', city: 'Nice', country: 'France', countryCode: 'FR', nights: 2, coordinates: { x: 310, y: 330 } },
      { id: 'florence', city: 'Florence', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 400, y: 350 } },
      { id: 'rome', city: 'Rome', country: 'Italy', countryCode: 'IT', nights: 2, coordinates: { x: 420, y: 380 } },
    ],
  },
  {
    id: 'central-europe',
    name: 'Central Europe',
    duration: '7 Nights',
    tag: 'Culture & History',
    cities: [
      { id: 'berlin', city: 'Berlin', country: 'Germany', countryCode: 'DE', nights: 2, coordinates: { x: 410, y: 200 } },
      { id: 'prague', city: 'Prague', country: 'Czech Republic', countryCode: 'CZ', nights: 2, coordinates: { x: 440, y: 240 } },
      { id: 'vienna', city: 'Vienna', country: 'Austria', countryCode: 'AT', nights: 2, coordinates: { x: 450, y: 280 } },
      { id: 'munich', city: 'Munich', country: 'Germany', countryCode: 'DE', nights: 1, coordinates: { x: 400, y: 280 } },
    ],
  },
]

type Props = {
  selectedCities: CitySelection[]
  setSelectedCities: React.Dispatch<React.SetStateAction<CitySelection[]>>
}

export default function PreMadePackages({ selectedCities, setSelectedCities }: Props) {
  const selectedPackageId = packages.find(
    pkg => pkg.cities.length === selectedCities.length && 
    pkg.cities.every(c => selectedCities.find(s => s.id === c.id && s.nights === c.nights))
  )?.id

  const selectPackage = (pkg: typeof packages[0]) => {
    setSelectedCities(pkg.cities)
  }

  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl text-[#12103d] mb-6">
        Choose a Package
      </h2>
      
      {packages.map((pkg) => {
        const isSelected = selectedPackageId === pkg.id
        
        return (
          <div
            key={pkg.id}
            onClick={() => selectPackage(pkg)}
            className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              isSelected ? 'border-[#12103d] ring-4 ring-[#12103d]/10' : 'border-gray-200 hover:border-[#8550a2]'
            }`}
          >
            {/* Tag */}
            <span className={`absolute -top-3 left-4 px-3 py-1 text-xs font-sans font-semibold rounded-full ${
              isSelected ? 'bg-[#12103d] text-white' : 'bg-[#d19457] text-white'
            }`}>
              {pkg.tag}
            </span>

            {/* Selected Check */}
            {isSelected && (
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#12103d] rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}

            <div className="flex items-start justify-between mt-2">
              <div>
                <h3 className="font-display text-xl text-[#12103d]">{pkg.name}</h3>
                <p className="font-sans text-sm text-[#43124a] font-medium mt-1">{pkg.duration}</p>
              </div>
            </div>

            {/* Cities */}
            <div className="mt-4 flex flex-wrap gap-2">
              {pkg.cities.map((city) => (
                <span
                  key={city.id}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#f5f5f5] rounded-full font-sans text-xs text-[#12103d]"
                >
                  <span className="text-[10px] text-[#44618b]">{city.countryCode}</span>
                  {city.city}
                  <span className="text-[#43124a] font-semibold">({city.nights}N)</span>
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
