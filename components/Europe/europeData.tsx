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
  coordinates: { lat: number; lng: number }
  lat: number
  lng: number
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

// Helper Functions
export function getTripTypeLabel(type: TripType): string {
  const labels: Record<TripType, string> = {
    adventure: 'Adventure',
    romantic: 'Romantic',
    family: 'Family',
    friends: 'Friends',
    cultural: 'Cultural',
    luxury: 'Luxury',
  }
  return labels[type] || type
}

// Get city by ID
export function getCityById(cityId: string): EuropeCity | undefined {
  return europeCities.find(city => city.id === cityId)
}

// Calculate distance between two cities using Haversine formula
export function calculateDistance(city1Id: string, city2Id: string): number {
  const city1 = getCityById(city1Id)
  const city2 = getCityById(city2Id)
  
  if (!city1 || !city2) return 0

  const R = 6371 // Earth's radius in kilometers
  const dLat = (city2.lat - city1.lat) * Math.PI / 180
  const dLon = (city2.lng - city1.lng) * Math.PI / 180
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(city1.lat * Math.PI / 180) * Math.cos(city2.lat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c)
}

// European Cities Data with Coordinates
export const europeCities: EuropeCity[] = [
  { id: 'paris', name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', description: 'The City of Light', suggestedNights: 4, minNights: 2, maxNights: 7, highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame'], coordinates: { lat: 48.8566, lng: 2.3522 }, lat: 48.8566, lng: 2.3522 },
  { id: 'rome', name: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80', description: 'The Eternal City', suggestedNights: 4, minNights: 2, maxNights: 7, highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain'], coordinates: { lat: 41.9028, lng: 12.4964 }, lat: 41.9028, lng: 12.4964 },
  { id: 'barcelona', name: 'Barcelona', country: 'Spain', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80', description: 'Gaudí\'s Masterpiece', suggestedNights: 3, minNights: 2, maxNights: 6, highlights: ['Sagrada Familia', 'Park Güell', 'La Rambla'], coordinates: { lat: 41.3851, lng: 2.1734 }, lat: 41.3851, lng: 2.1734 },
  { id: 'amsterdam', name: 'Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80', description: 'Venice of the North', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Anne Frank House', 'Van Gogh Museum', 'Canal Cruise'], coordinates: { lat: 52.3676, lng: 4.9041 }, lat: 52.3676, lng: 4.9041 },
  { id: 'london', name: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', description: 'Royal Heritage', suggestedNights: 4, minNights: 3, maxNights: 7, highlights: ['Big Ben', 'Tower of London', 'Buckingham Palace'], coordinates: { lat: 51.5074, lng: -0.1278 }, lat: 51.5074, lng: -0.1278 },
  { id: 'prague', name: 'Prague', country: 'Czech Republic', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80', description: 'City of a Hundred Spires', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Charles Bridge', 'Prague Castle', 'Old Town Square'], coordinates: { lat: 50.0755, lng: 14.4378 }, lat: 50.0755, lng: 14.4378 },
  { id: 'vienna', name: 'Vienna', country: 'Austria', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80', description: 'Imperial Elegance', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Schönbrunn Palace', 'Vienna Opera', 'St. Stephen\'s Cathedral'], coordinates: { lat: 48.2082, lng: 16.3738 }, lat: 48.2082, lng: 16.3738 },
  { id: 'florence', name: 'Florence', country: 'Italy', image: 'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=800&q=80', description: 'Renaissance Heart', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Uffizi Gallery', 'Duomo', 'Ponte Vecchio'], coordinates: { lat: 43.7696, lng: 11.2558 }, lat: 43.7696, lng: 11.2558 },
  { id: 'venice', name: 'Venice', country: 'Italy', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80', description: 'Floating City', suggestedNights: 2, minNights: 1, maxNights: 4, highlights: ['St. Mark\'s Square', 'Gondola Ride', 'Rialto Bridge'], coordinates: { lat: 45.4408, lng: 12.3155 }, lat: 45.4408, lng: 12.3155 },
  { id: 'santorini', name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', description: 'Aegean Paradise', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Oia Sunset', 'Blue Domes', 'Volcanic Beaches'], coordinates: { lat: 36.3932, lng: 25.4615 }, lat: 36.3932, lng: 25.4615 },
  { id: 'athens', name: 'Athens', country: 'Greece', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80', description: 'Cradle of Civilization', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Acropolis', 'Parthenon', 'Plaka District'], coordinates: { lat: 37.9838, lng: 23.7275 }, lat: 37.9838, lng: 23.7275 },
  { id: 'munich', name: 'Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80', description: 'Bavarian Capital', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Marienplatz', 'Neuschwanstein', 'English Garden'], coordinates: { lat: 48.1351, lng: 11.5820 }, lat: 48.1351, lng: 11.5820 },
  { id: 'berlin', name: 'Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80', description: 'History & Culture', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Brandenburg Gate', 'Berlin Wall', 'Museum Island'], coordinates: { lat: 52.5200, lng: 13.4050 }, lat: 52.5200, lng: 13.4050 },
  { id: 'zurich', name: 'Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80', description: 'Alpine Elegance', suggestedNights: 2, minNights: 1, maxNights: 4, highlights: ['Lake Zurich', 'Old Town', 'Swiss Alps Day Trip'], coordinates: { lat: 47.3769, lng: 8.5417 }, lat: 47.3769, lng: 8.5417 },
  { id: 'interlaken', name: 'Interlaken', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80', description: 'Adventure Capital', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Jungfrau', 'Paragliding', 'Lake Thun'], coordinates: { lat: 46.6863, lng: 7.8632 }, lat: 46.6863, lng: 7.8632 },
  { id: 'lisbon', name: 'Lisbon', country: 'Portugal', image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80', description: 'City of Seven Hills', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Belém Tower', 'Alfama', 'Tram 28'], coordinates: { lat: 38.7223, lng: -9.1393 }, lat: 38.7223, lng: -9.1393 },
  { id: 'dublin', name: 'Dublin', country: 'Ireland', image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80', description: 'Celtic Charm', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Temple Bar', 'Guinness Storehouse', 'Trinity College'], coordinates: { lat: 53.3498, lng: -6.2603 }, lat: 53.3498, lng: -6.2603 },
  { id: 'edinburgh', name: 'Edinburgh', country: 'Scotland', image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80', description: 'Scottish Capital', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Edinburgh Castle', 'Royal Mile', 'Arthur\'s Seat'], coordinates: { lat: 55.9533, lng: -3.1883 }, lat: 55.9533, lng: -3.1883 },
  { id: 'budapest', name: 'Budapest', country: 'Hungary', image: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=800&q=80', description: 'Pearl of the Danube', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Parliament', 'Thermal Baths', 'Buda Castle'], coordinates: { lat: 47.4979, lng: 19.0402 }, lat: 47.4979, lng: 19.0402 },
  { id: 'copenhagen', name: 'Copenhagen', country: 'Denmark', image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80', description: 'Hygge Heaven', suggestedNights: 3, minNights: 2, maxNights: 4, highlights: ['Nyhavn', 'Tivoli Gardens', 'Little Mermaid'], coordinates: { lat: 55.6761, lng: 12.5683 }, lat: 55.6761, lng: 12.5683 },
  { id: 'stockholm', name: 'Stockholm', country: 'Sweden', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80', description: 'Venice of the North', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Gamla Stan', 'Vasa Museum', 'ABBA Museum'], coordinates: { lat: 59.3293, lng: 18.0686 }, lat: 59.3293, lng: 18.0686 },
  { id: 'nice', name: 'Nice', country: 'France', image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80', description: 'French Riviera Gem', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Promenade des Anglais', 'Old Nice', 'Monaco Day Trip'], coordinates: { lat: 43.7102, lng: 7.2620 }, lat: 43.7102, lng: 7.2620 },
  { id: 'seville', name: 'Seville', country: 'Spain', image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80', description: 'Flamenco Soul', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Alcázar', 'Plaza de España', 'Flamenco Show'], coordinates: { lat: 37.3891, lng: -5.9845 }, lat: 37.3891, lng: -5.9845 },
  { id: 'dubrovnik', name: 'Dubrovnik', country: 'Croatia', image: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80', description: 'Pearl of the Adriatic', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Old Town Walls', 'Game of Thrones Sites', 'Lokrum Island'], coordinates: { lat: 42.6507, lng: 18.0944 }, lat: 42.6507, lng: 18.0944 },
  { id: 'amalfi', name: 'Amalfi Coast', country: 'Italy', image: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80', description: 'Coastal Paradise', suggestedNights: 3, minNights: 2, maxNights: 5, highlights: ['Positano', 'Ravello', 'Boat Tours'], coordinates: { lat: 40.6340, lng: 14.6027 }, lat: 40.6340, lng: 14.6027 },
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
    description: 'Discover Italy\'s most romantic cities on this enchanting journey. Explore ancient ruins in Rome, Renaissance masterpieces in Florence, and the magical canals of Venice.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
      'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=800&q=80',
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&q=80'
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
    highlights: ['Vatican tour', 'Tuscan wine tasting', 'Gondola ride', 'Colosseum skip-the-line'],
    included: ['4-star hotels', 'Daily breakfast', 'Train transfers', 'Expert guides', 'Wine tasting'],
    tag: 'Most Popular',
    tagColor: 'bg-[#8550a2] text-white'
  },
  {
    id: 'eu-t3',
    name: 'Greek Island Hopping',
    tagline: 'Athens & Santorini',
    description: 'Experience the magic of Greece with ancient history in Athens and stunning sunsets in Santorini. This perfect duo offers culture, beaches, and unforgettable views.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80'
    ],
    duration: '8 Days',
    price: 2499,
    rating: 4.9,
    tripType: 'romantic',
    cities: [
      { cityId: 'athens', nights: 3 },
      { cityId: 'santorini', nights: 4 }
    ],
    highlights: ['Acropolis tour', 'Oia sunset', 'Catamaran cruise', 'Wine tasting'],
    included: ['Boutique hotels', 'Daily breakfast', 'Ferry transfers', 'Sunset cruise', 'Airport transfers'],
    tag: 'Honeymoon Favorite',
    tagColor: 'bg-[#d19457] text-white'
  },
  {
    id: 'eu-t4',
    name: 'Central Europe Explorer',
    tagline: 'Prague, Vienna & Budapest',
    description: 'Journey through the heart of Europe visiting three stunning capitals. Experience Gothic spires in Prague, imperial grandeur in Vienna, and thermal baths in Budapest.',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80',
      'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
      'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=800&q=80',
      'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&q=80'
    ],
    duration: '10 Days',
    price: 2699,
    rating: 4.7,
    tripType: 'cultural',
    cities: [
      { cityId: 'prague', nights: 3 },
      { cityId: 'vienna', nights: 3 },
      { cityId: 'budapest', nights: 3 }
    ],
    highlights: ['Prague Castle tour', 'Vienna Opera', 'Thermal bath experience', 'Danube river cruise'],
    included: ['4-star hotels', 'Daily breakfast', 'Train transfers', 'City tours', 'Opera tickets'],
  },
  {
    id: 'eu-t5',
    name: 'Swiss Alps Adventure',
    tagline: 'Zurich & Interlaken',
    description: 'Experience the breathtaking Swiss Alps with this adventure-packed itinerary. From scenic train rides to mountain hiking and paragliding opportunities.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
      'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80',
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ],
    duration: '7 Days',
    price: 3299,
    rating: 4.8,
    tripType: 'adventure',
    cities: [
      { cityId: 'zurich', nights: 2 },
      { cityId: 'interlaken', nights: 4 }
    ],
    highlights: ['Jungfrau railway', 'Paragliding option', 'Lake cruise', 'Swiss chocolate tour'],
    included: ['Mountain hotels', 'Swiss Travel Pass', 'Breakfast daily', 'Jungfrau ticket', 'Guide services'],
    tag: 'Adventure Pick',
    tagColor: 'bg-[#44618b] text-white'
  },
  {
    id: 'eu-t6',
    name: 'Spanish Splendor',
    tagline: 'Barcelona & Seville',
    description: 'From the artistic wonders of Barcelona to the passionate soul of Seville, experience Spain\'s vibrant culture, stunning architecture, and delicious cuisine.',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
      'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80',
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    ],
    duration: '8 Days',
    price: 2399,
    rating: 4.7,
    tripType: 'cultural',
    cities: [
      { cityId: 'barcelona', nights: 4 },
      { cityId: 'seville', nights: 3 }
    ],
    highlights: ['Sagrada Familia tour', 'Flamenco show', 'Tapas cooking class', 'Alcázar visit'],
    included: ['4-star hotels', 'Daily breakfast', 'High-speed train', 'City tours', 'Flamenco tickets'],
  },
  {
    id: 'eu-t7',
    name: 'Scandinavian Discovery',
    tagline: 'Copenhagen & Stockholm',
    description: 'Explore the best of Scandinavia with this Nordic adventure. Experience hygge in Copenhagen and maritime history in Stockholm.',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80',
      'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80',
      'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80',
      'https://images.unsplash.com/photo-1508424897381-4fd8755e4b7a?w=800&q=80'
    ],
    duration: '7 Days',
    price: 2799,
    rating: 4.6,
    tripType: 'cultural',
    cities: [
      { cityId: 'copenhagen', nights: 3 },
      { cityId: 'stockholm', nights: 3 }
    ],
    highlights: ['Tivoli Gardens', 'Vasa Museum', 'Nyhavn dinner', 'Gamla Stan walking tour'],
    included: ['Design hotels', 'Daily breakfast', 'Ferry/flight transfer', 'City cards', 'Museum passes'],
  },
  {
    id: 'eu-t8',
    name: 'Portuguese Paradise',
    tagline: 'Lisbon & Beyond',
    description: 'Discover the charm of Portugal with its historic neighborhoods, stunning coastline, and world-famous pastéis de nata. Includes a day trip to magical Sintra.',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80',
      'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80',
      'https://images.unsplash.com/photo-1513735492380-64e28c0e0a42?w=800&q=80'
    ],
    duration: '6 Days',
    price: 1899,
    rating: 4.8,
    tripType: 'cultural',
    cities: [
      { cityId: 'lisbon', nights: 5 }
    ],
    highlights: ['Tram 28 ride', 'Sintra day trip', 'Fado evening', 'Belém Tower visit'],
    included: ['Boutique hotel', 'Daily breakfast', 'Sintra tour', 'Fado dinner', 'Airport transfers'],
    tag: 'Great Value',
    tagColor: 'bg-[#12103d] text-white'
  },
  {
    id: 'eu-t9',
    name: 'British Isles Adventure',
    tagline: 'London, Edinburgh & Dublin',
    description: 'Experience the best of the British Isles from London\'s iconic landmarks to Edinburgh\'s medieval charm and Dublin\'s legendary pubs.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80',
      'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80',
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80'
    ],
    duration: '12 Days',
    price: 3699,
    rating: 4.7,
    tripType: 'cultural',
    cities: [
      { cityId: 'london', nights: 4 },
      { cityId: 'edinburgh', nights: 4 },
      { cityId: 'dublin', nights: 3 }
    ],
    highlights: ['Tower of London', 'Edinburgh Castle', 'Guinness Storehouse', 'Highlands day trip'],
    included: ['4-star hotels', 'Daily breakfast', 'Flights between cities', 'City tours', 'Castle tickets'],
  },
  {
    id: 'eu-t10',
    name: 'Mediterranean Gems',
    tagline: 'Nice, Amalfi & Dubrovnik',
    description: 'Cruise along the most beautiful coastlines of Europe. From the glamour of the French Riviera to the stunning Amalfi Coast and the pearl of the Adriatic.',
    image: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80',
      'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80',
      'https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80',
      'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80'
    ],
    duration: '12 Days',
    price: 4299,
    rating: 4.9,
    tripType: 'luxury',
    cities: [
      { cityId: 'nice', nights: 3 },
      { cityId: 'amalfi', nights: 4 },
      { cityId: 'dubrovnik', nights: 4 }
    ],
    highlights: ['Monaco day trip', 'Positano visit', 'City walls walk', 'Private boat tours'],
    included: ['5-star hotels', 'Daily breakfast', 'Flights', 'Private transfers', 'Boat excursions'],
    tag: 'Luxury Pick',
    tagColor: 'bg-[#c77e36] text-white'
  },
  {
    id: 'eu-t11',
    name: 'German Heritage',
    tagline: 'Munich & Berlin',
    description: 'Explore Germany\'s rich history and culture from Bavaria\'s fairy-tale castles to Berlin\'s compelling Cold War history and vibrant arts scene.',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
      'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80',
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
      'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=800&q=80'
    ],
    duration: '8 Days',
    price: 2599,
    rating: 4.6,
    tripType: 'cultural',
    cities: [
      { cityId: 'munich', nights: 4 },
      { cityId: 'berlin', nights: 3 }
    ],
    highlights: ['Neuschwanstein Castle', 'Berlin Wall tour', 'Beer hall experience', 'Museum Island'],
    included: ['4-star hotels', 'Daily breakfast', 'Train transfer', 'Castle tour', 'City guides'],
  },
  {
    id: 'eu-t12',
    name: 'Family Fun Europe',
    tagline: 'Paris, Amsterdam & London',
    description: 'A family-friendly adventure through Europe\'s most exciting capitals. Kid-approved activities, theme parks, and interactive museums make this perfect for all ages.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80'
    ],
    duration: '10 Days',
    price: 4199,
    rating: 4.8,
    tripType: 'family',
    cities: [
      { cityId: 'paris', nights: 3 },
      { cityId: 'amsterdam', nights: 3 },
      { cityId: 'london', nights: 3 }
    ],
    highlights: ['Disneyland Paris', 'NEMO Science Museum', 'Harry Potter Studio Tour', 'Canal bike ride'],
    included: ['Family rooms', 'Daily breakfast', 'Train transfers', 'Theme park tickets', 'Kid-friendly tours'],
    tag: 'Family Favorite',
    tagColor: 'bg-[#d19457] text-white'
  },
]
