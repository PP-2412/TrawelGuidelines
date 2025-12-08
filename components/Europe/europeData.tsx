// Types
export type TripType = 'adventure' | 'romantic' | 'family' | 'friends' | 'cultural' | 'luxury'

export interface EuropeCity {
  id: string
  name: string
  country: string
  image: string
  description: string
  suggestedNights: number
  minNights: number
  maxNights: number
  highlights: string[]
}

export interface TourCity {
  cityId: string
  nights: number
}

export interface EuropeTour {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  images: string[]
  duration: string
  price: number
  rating: number
  tripType: TripType
  cities: TourCity[]
  highlights: string[]
  included: string[]
  tag?: string
  tagColor?: string
}

// European Cities Data
export const europeCities: EuropeCity[] = [
  { id: 'paris', name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', description: 'The City of Light', suggestedNights: 4, minNights: 2, maxNights: 7, highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame'] },
  { id: 'rome', name: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80', description: 'The Eternal City', suggestedNights: 4, minNights: 2, maxNights: 7, highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain'] },
  { id: 'barcelona', name: 'Barcelona', country: 'Spain', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80', description: 'Gaudí\'s Masterpiece', suggestedNights: 3, minNights: 2, maxNights: 6, highlights: ['Sagrada Familia', 'Park Güell', 'La Rambla'] },
  { id: 'amsterdam', name: 'Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80', description: 'Venice of the North', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Anne Frank House', 'Van Gogh Museum', 'Canal Cruise'] },
  { id: 'london', name: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', description: 'Royal Heritage', suggestedNights: 4, minNights: 3, maxNights: 7, highlights: ['Big Ben', 'Tower of London', 'Buckingham Palace'] },
  { id: 'prague', name: 'Prague', country: 'Czech Republic', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80', description: 'City of a Hundred Spires', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Charles Bridge', 'Prague Castle', 'Old Town Square'] },
  { id: 'vienna', name: 'Vienna', country: 'Austria', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80', description: 'Imperial Elegance', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Schönbrunn Palace', 'Vienna Opera', 'St. Stephen\'s Cathedral'] },
  { id: 'florence', name: 'Florence', country: 'Italy', image: 'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=800&q=80', description: 'Renaissance Heart', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Uffizi Gallery', 'Duomo', 'Ponte Vecchio'] },
  { id: 'venice', name: 'Venice', country: 'Italy', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80', description: 'Floating City', suggestedNights: 2, minNights: 1, maxNights: 4, highlights: ['St. Mark\'s Square', 'Gondola Ride', 'Rialto Bridge'] },
  { id: 'santorini', name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', description: 'Aegean Paradise', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Oia Sunset', 'Blue Domes', 'Volcanic Beaches'] },
  { id: 'athens', name: 'Athens', country: 'Greece', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80', description: 'Cradle of Civilization', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Acropolis', 'Parthenon', 'Plaka District'] },
  { id: 'munich', name: 'Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80', description: 'Bavarian Capital', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Marienplatz', 'Neuschwanstein', 'English Garden'] },
  { id: 'berlin', name: 'Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80', description: 'History & Culture', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Brandenburg Gate', 'Berlin Wall', 'Museum Island'] },
  { id: 'zurich', name: 'Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80', description: 'Alpine Elegance', suggestedNights: 2, minNights: 1, maxNights: 4, highlights: ['Lake Zurich', 'Old Town', 'Swiss Alps Day Trip'] },
  { id: 'interlaken', name: 'Interlaken', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80', description: 'Adventure Capital', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Jungfrau', 'Paragliding', 'Lake Thun'] },
  { id: 'lisbon', name: 'Lisbon', country: 'Portugal', image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80', description: 'City of Seven Hills', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Belém Tower', 'Alfama', 'Tram 28'] },
  { id: 'dublin', name: 'Dublin', country: 'Ireland', image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80', description: 'Celtic Charm', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Temple Bar', 'Guinness Storehouse', 'Trinity College'] },
  { id: 'edinburgh', name: 'Edinburgh', country: 'Scotland', image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80', description: 'Scottish Capital', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Edinburgh Castle', 'Royal Mile', 'Arthur\'s Seat'] },
  { id: 'budapest', name: 'Budapest', country: 'Hungary', image: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=800&q=80', description: 'Pearl of the Danube', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Parliament', 'Thermal Baths', 'Buda Castle'] },
  { id: 'copenhagen', name: 'Copenhagen', country: 'Denmark', image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80', description: 'Hygge Heaven', suggestedNights: 3, minNights: 2, maxNights: 4, highlights: ['Nyhavn', 'Tivoli Gardens', 'Little Mermaid'] },
  { id: 'stockholm', name: 'Stockholm', country: 'Sweden', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80', description: 'Venice of the North', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Gamla Stan', 'Vasa Museum', 'ABBA Museum'] },
  { id: 'nice', name: 'Nice', country: 'France', image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80', description: 'French Riviera Gem', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Promenade des Anglais', 'Old Nice', 'Monaco Day Trip'] },
  { id: 'seville', name: 'Seville', country: 'Spain', image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80', description: 'Flamenco Soul', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Alcázar', 'Plaza de España', 'Flamenco Show'] },
  { id: 'dubrovnik', name: 'Dubrovnik', country: 'Croatia', image: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80', description: 'Pearl of the Adriatic', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Old Town Walls', 'Game of Thrones Sites', 'Lokrum Island'] },
  { id: 'amalfi', name: 'Amalfi Coast', country: 'Italy', image: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80', description: 'Coastal Paradise', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Positano', 'Ravello', 'Boat Tours'] },
]

// Europe Tours Data
export const europeTours: EuropeTour[] = [
  {
    id: 'eu-t1',
    name: 'Classic Western Europe',
    tagline: 'Paris, Amsterdam & London',
    description: 'Experience the best of Western Europe with this classic itinerary covering three iconic capitals. From the romantic streets of Paris to the charming canals of Amsterdam and the royal heritage of London.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80'
    ],
    duration: '12 Days',
    price: 3499,
    rating: 4.9,
    tripType: 'cultural',
    cities: [
      { cityId: 'paris', nights: 4 },
      { cityId: 'amsterdam', nights: 3 },
      { cityId: 'london', nights: 4 }
    ],
    highlights: ['Eiffel Tower dinner', 'Canal cruise', 'Tower of London tour', 'Eurostar experience'],
    included: ['4-star hotels', 'Daily breakfast', 'Train transfers', 'City tours', 'Skip-the-line passes'],
    tag: 'Best Seller',
    tagColor: 'bg-[#d19457] text-white'
  },
  {
    id: 'eu-t2',
    name: 'Italian Romance',
    tagline: 'Rome, Florence & Venice',
    description: 'Discover Italy\'s most romantic cities on this enchanting journey. Explore ancient ruins in Rome, Renaissance art in Florence, and the magical canals of Venice.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
      'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=800&q=80',
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80',
      'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80'
    ],
    duration: '10 Days',
    price: 2999,
    rating: 4.8,
    tripType: 'romantic',
    cities: [
      { cityId: 'rome', nights: 4 },
      { cityId: 'florence', nights: 3 },
      { cityId: 'venice', nights: 2 }
    ],
    highlights: ['Vatican tour', 'Tuscan wine tasting', 'Gondola ride', 'Cooking class'],
    included: ['Boutique hotels', 'Daily breakfast', 'High-speed trains', 'Private guides', 'Wine experiences'],
    tag: 'Romantic',
    tagColor: 'bg-[#8550a2] text-white'
  },
  {
    id: 'eu-t3',
    name: 'Greek Island Hopper',
    tagline: 'Athens & Santorini',
    description: 'From ancient history to stunning sunsets, experience the best of Greece. Explore the Acropolis in Athens before island-hopping to the breathtaking cliffs of Santorini.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&q=80'
    ],
    duration: '8 Days',
    price: 2499,
    rating: 4.9,
    tripType: 'romantic',
    cities: [
      { cityId: 'athens', nights: 3 },
      { cityId: 'santorini', nights: 4 }
    ],
    highlights: ['Acropolis sunset tour', 'Oia sunset', 'Catamaran cruise', 'Wine tasting'],
    included: ['Cave hotels', 'Ferry transfers', 'Airport transfers', 'Guided tours', 'Sunset catamaran'],
    tag: 'Most Popular',
    tagColor: 'bg-[#12103d] text-white'
  },
  {
    id: 'eu-t4',
    name: 'Swiss Alps Adventure',
    tagline: 'Zurich & Interlaken',
    description: 'An adrenaline-packed adventure through Switzerland\'s most stunning landscapes. Experience world-class skiing, paragliding, and breathtaking mountain views.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
      'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80',
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ],
    duration: '7 Days',
    price: 3299,
    rating: 4.7,
    tripType: 'adventure',
    cities: [
      { cityId: 'zurich', nights: 2 },
      { cityId: 'interlaken', nights: 4 }
    ],
    highlights: ['Jungfrau railway', 'Paragliding', 'Lake cruise', 'Mountain hiking'],
    included: ['Alpine lodges', 'Swiss Travel Pass', 'Adventure activities', 'Mountain guides', 'Equipment rental'],
    tag: 'Adventure',
    tagColor: 'bg-[#44618b] text-white'
  },
  {
    id: 'eu-t5',
    name: 'Spanish Fiesta',
    tagline: 'Barcelona & Seville',
    description: 'Immerse yourself in Spain\'s vibrant culture, from Gaudí\'s masterpieces in Barcelona to the passionate flamenco of Seville. Tapas, wine, and endless sunshine await.',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
      'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80',
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    ],
    duration: '9 Days',
    price: 2299,
    rating: 4.8,
    tripType: 'cultural',
    cities: [
      { cityId: 'barcelona', nights: 4 },
      { cityId: 'seville', nights: 4 }
    ],
    highlights: ['Sagrada Familia tour', 'Flamenco show', 'Tapas crawl', 'Alcázar gardens'],
    included: ['Central hotels', 'High-speed train', 'Skip-the-line tickets', 'Food tours', 'Flamenco experience'],
    tag: 'Cultural',
    tagColor: 'bg-[#c77e36] text-white'
  },
  {
    id: 'eu-t6',
    name: 'Central European Gems',
    tagline: 'Prague, Vienna & Budapest',
    description: 'Journey through the heart of Europe visiting three magnificent capitals known for their imperial architecture, classical music, and thermal baths.',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80',
      'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
      'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=800&q=80',
      'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&q=80'
    ],
    duration: '11 Days',
    price: 2699,
    rating: 4.8,
    tripType: 'cultural',
    cities: [
      { cityId: 'prague', nights: 4 },
      { cityId: 'vienna', nights: 3 },
      { cityId: 'budapest', nights: 3 }
    ],
    highlights: ['Prague Castle', 'Vienna Opera', 'Thermal baths', 'Danube cruise'],
    included: ['Historic hotels', 'Train passes', 'Guided tours', 'Opera tickets', 'Spa experience'],
    tag: 'Value Pick',
    tagColor: 'bg-[#43124a] text-white'
  },
]

// Helper Functions
export const getCityById = (id: string): EuropeCity | undefined => {
  return europeCities.find(city => city.id === id)
}

export const getTripTypeLabel = (type: TripType): string => {
  const labels: Record<TripType, string> = {
    adventure: 'Adventure',
    romantic: 'Romantic',
    family: 'Family',
    friends: 'Friends',
    cultural: 'Cultural',
    luxury: 'Luxury'
  }
  return labels[type]
}
