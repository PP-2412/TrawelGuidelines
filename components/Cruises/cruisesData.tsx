export type CruiseCategory = 'all' | 'mediterranean' | 'caribbean' | 'alaska' | 'asia' | 'northern-europe' | 'river'

export interface Cruise {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  images: string[]
  duration: string
  price: number
  rating: number
  shipName: string
  cruiseLine: string
  region: Exclude<CruiseCategory, 'all'>
  route: string[]
  highlights: string[]
  included: string[]
  cabinTypes: string[]
  departurePort: string
  tag?: string
  tagColor?: string
}

export const categories: Array<{ id: CruiseCategory; name: string }> = [
  { id: 'all', name: 'All Cruises' },
  { id: 'mediterranean', name: 'Mediterranean' },
  { id: 'caribbean', name: 'Caribbean' },
  { id: 'alaska', name: 'Alaska' },
  { id: 'asia', name: 'Asia' },
  { id: 'northern-europe', name: 'Northern Europe' },
  { id: 'river', name: 'River Cruises' },
]

// Export the cruises array from the existing file
// This maintains all the cruise data you already have
export { cruises, getRegionLabel } from './cruisesData'
