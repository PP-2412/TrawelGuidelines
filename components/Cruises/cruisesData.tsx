// Cruise data types and constants

export type CruiseCategory = 'all' | 'popular' | 'family' | 'luxury' | 'budget' | 'adventure' | 'river' | 'romance'

export interface Cruise {
  id: string
  name: string
  tagline: string
  category: Exclude<CruiseCategory, 'all'>
  rating: number
  price: number
  nights: number
  tag: string
  tagColor: string
  image: string
  departurePort: string
  destinations: string[]
  features: string[]
}

export const allCruises: Cruise[] = [
  // Family Cruises
  { id: 'disney-cruise', name: 'Disney Cruise Line', tagline: 'Singapore - Asia Pacific', category: 'family', rating: 5, price: 899, nights: 7, tag: 'Family Favourite', tagColor: 'bg-[#12103d] text-white', image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80', departurePort: 'Singapore', destinations: ['Singapore', 'Malaysia', 'Thailand'], features: ['Kids Club', 'Character Dining', 'Water Park', 'Broadway Shows'] },
  { id: 'disney-caribbean', name: 'Disney Caribbean Magic', tagline: 'Bahamas & Caribbean Islands', category: 'family', rating: 5, price: 1299, nights: 7, tag: 'Kids Love It', tagColor: 'bg-[#8550a2] text-white', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', departurePort: 'Miami', destinations: ['Nassau', 'Castaway Cay', 'Cozumel'], features: ['Private Island', 'Aqua Duck', 'Bibbidi Bobbidi', 'Fireworks at Sea'] },
  
  // Popular Cruises
  { id: 'royal-caribbean', name: 'Royal Caribbean', tagline: 'Caribbean Adventures', category: 'popular', rating: 5, price: 699, nights: 7, tag: 'Most Popular', tagColor: 'bg-[#d19457] text-white', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80', departurePort: 'Miami', destinations: ['Caribbean', 'Bahamas', 'Mexico'], features: ['Rock Climbing', 'Surf Simulator', '20+ Restaurants', 'Broadway Shows'] },
  { id: 'royal-mediterranean', name: 'Royal Mediterranean', tagline: 'European Coastal Beauty', category: 'popular', rating: 5, price: 1199, nights: 10, tag: 'Top Rated', tagColor: 'bg-[#d19457] text-white', image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80', departurePort: 'Barcelona', destinations: ['Barcelona', 'Rome', 'Naples', 'Marseille'], features: ['Fine Dining', 'Spa & Wellness', 'Casino', 'Live Entertainment'] },
  
  // Budget Cruises
  { id: 'norwegian-cruise', name: 'Norwegian Cruise Line', tagline: 'Alaska & Europe', category: 'budget', rating: 4.5, price: 599, nights: 5, tag: 'Best Value', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80', departurePort: 'Seattle', destinations: ['Alaska', 'Juneau', 'Ketchikan'], features: ['Freestyle Dining', 'Go-Karts', 'Laser Tag', 'Water Slides'] },
  { id: 'cordelia-cruises', name: 'Cordelia Cruises', tagline: "India's Premium Line", category: 'budget', rating: 4.5, price: 299, nights: 3, tag: 'Indian', tagColor: 'bg-[#c77e36] text-white', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', departurePort: 'Mumbai', destinations: ['Mumbai', 'Goa', 'Lakshadweep'], features: ['Indian Cuisine', 'Live Casino', 'Pool Parties', 'Bollywood Nights'] },
  { id: 'cordelia-south', name: 'Cordelia South India', tagline: 'Chennai to Vizag', category: 'budget', rating: 4.5, price: 349, nights: 4, tag: 'New Route', tagColor: 'bg-[#c77e36] text-white', image: 'https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80', departurePort: 'Chennai', destinations: ['Chennai', 'Vizag', 'Puducherry'], features: ['South Indian Food', 'Cultural Shows', 'Spa', 'Kids Zone'] },
  
  // Premium/Luxury Cruises
  { id: 'celebrity-cruises', name: 'Celebrity Cruises', tagline: 'Mediterranean Luxury', category: 'luxury', rating: 5, price: 899, nights: 10, tag: 'Premium', tagColor: 'bg-[#8550a2] text-white', image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80', departurePort: 'Barcelona', destinations: ['Mediterranean', 'Greek Islands', 'Turkey'], features: ['Rooftop Garden', 'Michelin Dining', 'Art Collection', 'Infinite Veranda'] },
  { id: 'celebrity-alaska', name: 'Celebrity Alaska', tagline: 'Glacier Discovery', category: 'luxury', rating: 5, price: 1499, nights: 7, tag: 'Scenic', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', departurePort: 'Vancouver', destinations: ['Vancouver', 'Juneau', 'Skagway', 'Glacier Bay'], features: ['Glacier Viewing', 'Wildlife Tours', 'Spa Retreat', 'Fine Dining'] },
  { id: 'genting-dream', name: 'Genting Dream', tagline: 'Asian Luxury Cruising', category: 'luxury', rating: 4.5, price: 799, nights: 5, tag: 'Luxury', tagColor: 'bg-[#d19457] text-[#12103d]', image: 'https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80', departurePort: 'Singapore', destinations: ['Singapore', 'Vietnam', 'Thailand'], features: ['Crystal Spa', 'Zodiac Casino', 'Palace Suites', '35+ Restaurants'] },
  { id: 'regent-seven', name: 'Regent Seven Seas', tagline: 'Ultra-Luxury All-Inclusive', category: 'luxury', rating: 5, price: 2999, nights: 12, tag: 'Ultra Luxury', tagColor: 'bg-[#230c33] text-white', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80', departurePort: 'Monte Carlo', destinations: ['Monaco', 'Portofino', 'Amalfi', 'Santorini'], features: ['All-Suite Ship', 'Butler Service', 'Unlimited Shore Excursions', 'Premium Beverages'] },
  
  // Adventure Cruises
  { id: 'hurtigruten', name: 'Hurtigruten Expedition', tagline: 'Arctic & Antarctic Explorer', category: 'adventure', rating: 4.5, price: 3499, nights: 14, tag: 'Expedition', tagColor: 'bg-[#12103d] text-white', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', departurePort: 'Ushuaia', destinations: ['Antarctica', 'South Georgia', 'Falkland Islands'], features: ['Expedition Team', 'Zodiac Landings', 'Science Center', 'Northern Lights'] },
  { id: 'viking-expedition', name: 'Viking Expedition', tagline: 'Norwegian Fjords', category: 'adventure', rating: 5, price: 1899, nights: 8, tag: 'Scenic', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80', departurePort: 'Bergen', destinations: ['Bergen', 'Geiranger', 'Ålesund', 'Tromsø'], features: ['Nordic Spa', 'Expedition Lectures', 'Kayaking', 'Hiking Tours'] },
  
  // River Cruises
  { id: 'viking-river', name: 'Viking River Cruise', tagline: 'Danube & Rhine Rivers', category: 'river', rating: 5, price: 2199, nights: 10, tag: 'River Cruise', tagColor: 'bg-[#43124a] text-white', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80', departurePort: 'Amsterdam', destinations: ['Amsterdam', 'Cologne', 'Vienna', 'Budapest'], features: ['All-Inclusive', 'Shore Excursions', 'Wine Tasting', 'Cultural Immersion'] },
  { id: 'ama-mekong', name: 'AmaWaterways Mekong', tagline: 'Vietnam & Cambodia', category: 'river', rating: 5, price: 2499, nights: 7, tag: 'Exotic', tagColor: 'bg-[#c77e36] text-white', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', departurePort: 'Ho Chi Minh City', destinations: ['Saigon', 'Phnom Penh', 'Siem Reap'], features: ['Temple Tours', 'Local Markets', 'Cooking Classes', 'Silk Villages'] },
  
  // Honeymoon/Romance
  { id: 'seabourn-romance', name: 'Seabourn Ovation', tagline: 'Intimate Luxury Romance', category: 'romance', rating: 5, price: 3299, nights: 10, tag: 'Honeymoon', tagColor: 'bg-[#8550a2] text-white', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80', departurePort: 'Venice', destinations: ['Venice', 'Dubrovnik', 'Kotor', 'Corfu'], features: ['Couples Spa', 'Private Dining', 'Champagne Service', 'Veranda Suites'] },
  { id: 'paul-gauguin', name: 'Paul Gauguin Cruises', tagline: 'Tahiti & French Polynesia', category: 'romance', rating: 5, price: 4499, nights: 7, tag: 'Paradise', tagColor: 'bg-[#44618b] text-white', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', departurePort: 'Papeete', destinations: ['Tahiti', 'Bora Bora', 'Moorea', 'Taha\'a'], features: ['Overwater Bungalow Experience', 'Private Beach', 'Water Sports Marina', 'Polynesian Spa'] },
]

export interface Category {
  id: CruiseCategory
  name: string
}

export const categories: Category[] = [
  { id: 'all', name: 'All Cruises' },
  { id: 'popular', name: 'Popular' },
  { id: 'family', name: 'Family' },
  { id: 'luxury', name: 'Luxury' },
  { id: 'budget', name: 'Budget Friendly' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'river', name: 'River Cruises' },
  { id: 'romance', name: 'Honeymoon' },
]
