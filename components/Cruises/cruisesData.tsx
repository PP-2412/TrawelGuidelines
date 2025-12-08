export type CruiseCategory = 'all' | 'mediterranean' | 'caribbean' | 'alaska' | 'asia' | 'northern-europe' | 'river'

export interface Cruise {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  images: string[]
  duration: string
  nights: number
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
  destinations: string[]
  features: string[]
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

export const cruises: Cruise[] = [
  {
    id: 'disney-cruise',
    name: 'Disney Cruise Line',
    tagline: 'Singapore - Asia Pacific',
    description: 'Experience magical family adventures aboard Disney\'s premium cruise ships, featuring world-class entertainment, character experiences, and exceptional dining across Asia Pacific.',
    image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
    ],
    duration: '7 Nights',
    nights: 7,
    price: 899,
    rating: 5,
    shipName: 'Disney Dream',
    cruiseLine: 'Disney Cruise Line',
    region: 'asia',
    route: ['Singapore', 'Port Klang (Kuala Lumpur)', 'Penang', 'Phuket', 'Singapore'],
    destinations: ['Singapore', 'Malaysia', 'Thailand'],
    highlights: ['Character Meet & Greets', 'Broadway-style Shows', 'Kids Clubs by Age', 'Adult-Only Areas'],
    included: ['All Meals', 'Entertainment', 'Kids Activities', 'Soft Drinks'],
    cabinTypes: ['Inside Cabin', 'Oceanview', 'Verandah', 'Concierge Suite'],
    features: ['Character dining', 'Broadway shows', 'Kids clubs', 'Adult-only areas'],
    departurePort: 'Singapore',
    tag: 'Family Favourite',
    tagColor: 'bg-[#12103d] text-white'
  },
  {
    id: 'royal-caribbean',
    name: 'Royal Caribbean',
    tagline: 'Caribbean Adventures',
    description: 'Sail the turquoise waters of the Caribbean with innovative ships featuring rock climbing, surf simulators, and spectacular entertainment.',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80',
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
    ],
    duration: '7 Nights',
    nights: 7,
    price: 699,
    rating: 5,
    shipName: 'Oasis of the Seas',
    cruiseLine: 'Royal Caribbean',
    region: 'caribbean',
    route: ['Miami', 'Cozumel', 'Roatan', 'Costa Maya', 'Miami'],
    destinations: ['USA', 'Mexico', 'Honduras'],
    highlights: ['Zip Line at Sea', 'FlowRider Surf Simulator', 'Rock Climbing Wall', 'Ice Skating'],
    included: ['All Meals', 'Pool Deck Activities', 'Entertainment', 'Fitness Center'],
    cabinTypes: ['Interior', 'Ocean View', 'Balcony', 'Suite'],
    features: ['Rock climbing', 'Surf simulator', 'Ice skating', 'Zip line'],
    departurePort: 'Miami',
    tag: 'Most Popular',
    tagColor: 'bg-[#d19457] text-white'
  },
  {
    id: 'norwegian-cruise',
    name: 'Norwegian Cruise Line',
    tagline: 'Alaska & Europe',
    description: 'Freestyle cruising with no set dining times or dress codes. Explore glaciers, fjords, and historic European ports.',
    image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80',
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
    ],
    duration: '5 Nights',
    nights: 5,
    price: 599,
    rating: 4.5,
    shipName: 'Norwegian Bliss',
    cruiseLine: 'Norwegian Cruise Line',
    region: 'alaska',
    route: ['Seattle', 'Juneau', 'Skagway', 'Glacier Bay', 'Ketchikan', 'Seattle'],
    destinations: ['USA', 'Alaska'],
    highlights: ['Glacier Viewing', 'Wildlife Spotting', 'Go-Kart Track', 'Observation Lounge'],
    included: ['Freestyle Dining', 'Entertainment', 'Pool & Hot Tubs', 'Fitness Center'],
    cabinTypes: ['Inside', 'Oceanview', 'Balcony', 'Haven Suite'],
    features: ['Freestyle dining', 'Go-kart track', 'Observation lounge', 'Multiple restaurants'],
    departurePort: 'Seattle',
    tag: 'Best Value',
    tagColor: 'bg-[#44618b] text-white'
  },
  {
    id: 'celebrity-cruises',
    name: 'Celebrity Cruises',
    tagline: 'Mediterranean Luxury',
    description: 'Modern luxury cruising through the Mediterranean with exceptional service, gourmet dining, and stunning ship design.',
    image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80',
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80',
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80'
    ],
    duration: '10 Nights',
    nights: 10,
    price: 899,
    rating: 5,
    shipName: 'Celebrity Edge',
    cruiseLine: 'Celebrity Cruises',
    region: 'mediterranean',
    route: ['Barcelona', 'Cannes', 'Florence/Pisa', 'Rome', 'Naples', 'Barcelona'],
    destinations: ['Spain', 'France', 'Italy'],
    highlights: ['Magic Carpet Platform', 'Eden Restaurant', 'Rooftop Garden', 'Canyon Ranch Spa'],
    included: ['Premium Dining', 'Wi-Fi', 'Entertainment', 'Gratuities'],
    cabinTypes: ['Inside', 'Oceanview', 'Infinite Veranda', 'Suite'],
    features: ['Magic carpet platform', 'Eden restaurant', 'Rooftop garden', 'Premium dining'],
    departurePort: 'Barcelona',
    tag: 'Premium',
    tagColor: 'bg-[#8550a2] text-white'
  },
  {
    id: 'cordelia-cruises',
    name: 'Cordelia Cruises',
    tagline: 'India\'s Premium Line',
    description: 'Experience India\'s first premium cruise line with domestic sailings featuring entertainment, dining, and coastal exploration.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80',
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80'
    ],
    duration: '3 Nights',
    nights: 3,
    price: 299,
    rating: 4.5,
    shipName: 'Cordelia Empress',
    cruiseLine: 'Cordelia Cruises',
    region: 'asia',
    route: ['Mumbai', 'Goa', 'Mumbai'],
    destinations: ['Mumbai', 'Goa'],
    highlights: ['Indian Cuisine', 'Bollywood Nights', 'Casino', 'Beach Club'],
    included: ['All Meals', 'Entertainment', 'Live Shows', 'Pool Access'],
    cabinTypes: ['Inside Cabin', 'Ocean View', 'Balcony', 'Suite'],
    features: ['Indian cuisine', 'Bollywood entertainment', 'Casino', 'Beach club'],
    departurePort: 'Mumbai',
    tag: 'Indian',
    tagColor: 'bg-[#c77e36] text-white'
  }
]

export const getRegionLabel = (region: string): string => {
  const category = categories.find(c => c.id === region)
  return category?.name || region
}
