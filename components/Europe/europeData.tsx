// Europe Cities and Tours Data

export interface EuropeCity {
  id: string
  name: string
  country: string
  image: string
  description: string
  minNights: number
  maxNights: number
  suggestedNights: number
  highlights: string[]
}

export interface EuropeTour {
  id: string
  name: string
  tagline: string
  duration: string
  price: number
  image: string
  rating: number
  tripType: 'adventure' | 'romantic' | 'family' | 'friends' | 'cultural' | 'luxury'
  cities: { cityId: string; nights: number }[]
  highlights: string[]
  tag?: string
  tagColor?: string
}

export const europeCities: EuropeCity[] = [
  // France
  { id: 'paris', name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', description: 'The City of Light with iconic landmarks and world-class art', minNights: 2, maxNights: 5, suggestedNights: 3, highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées'] },
  { id: 'nice', name: 'Nice', country: 'France', image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80', description: 'French Riviera gem with stunning Mediterranean coastline', minNights: 2, maxNights: 4, suggestedNights: 2, highlights: ['Promenade des Anglais', 'Old Town', 'Castle Hill', 'Beach clubs'] },
  { id: 'lyon', name: 'Lyon', country: 'France', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80', description: 'Gastronomic capital with Renaissance architecture', minNights: 1, maxNights: 3, suggestedNights: 2, highlights: ['Old Lyon', 'Basilica', 'Food halls', 'Traboules'] },
  
  // Italy
  { id: 'rome', name: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80', description: 'Eternal City with ancient ruins and Vatican treasures', minNights: 2, maxNights: 5, suggestedNights: 3, highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Roman Forum'] },
  { id: 'florence', name: 'Florence', country: 'Italy', image: 'https://images.unsplash.com/photo-1543429258-c5ca3f9106fc?w=800&q=80', description: 'Renaissance masterpiece with incredible art and architecture', minNights: 2, maxNights: 4, suggestedNights: 2, highlights: ['Uffizi Gallery', 'Duomo', 'Ponte Vecchio', 'Accademia'] },
  { id: 'venice', name: 'Venice', country: 'Italy', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80', description: 'Romantic canal city with unique charm', minNights: 2, maxNights: 4, suggestedNights: 2, highlights: ['Grand Canal', "St. Mark's Square", 'Rialto Bridge', 'Gondola rides'] },
  { id: 'amalfi', name: 'Amalfi Coast', country: 'Italy', image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=80', description: 'Stunning coastal cliffs and charming villages', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Positano', 'Ravello', 'Capri day trip', 'Coastal drives'] },
  { id: 'milan', name: 'Milan', country: 'Italy', image: 'https://images.unsplash.com/photo-1520440229-6469a149ac59?w=800&q=80', description: 'Fashion capital with Gothic architecture', minNights: 1, maxNights: 3, suggestedNights: 2, highlights: ['Duomo', 'Last Supper', 'Galleria', 'Fashion District'] },
  
  // Spain
  { id: 'barcelona', name: 'Barcelona', country: 'Spain', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80', description: 'Gaudí masterpieces and vibrant beach culture', minNights: 2, maxNights: 5, suggestedNights: 3, highlights: ['Sagrada Familia', 'Park Güell', 'La Rambla', 'Gothic Quarter'] },
  { id: 'madrid', name: 'Madrid', country: 'Spain', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80', description: 'Royal palaces and world-class museums', minNights: 2, maxNights: 4, suggestedNights: 2, highlights: ['Prado Museum', 'Royal Palace', 'Retiro Park', 'Plaza Mayor'] },
  { id: 'seville', name: 'Seville', country: 'Spain', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', description: 'Flamenco heartland with Moorish architecture', minNights: 2, maxNights: 3, suggestedNights: 2, highlights: ['Alcázar', 'Cathedral', 'Flamenco shows', 'Plaza de España'] },
  
  // Netherlands
  { id: 'amsterdam', name: 'Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80', description: 'Canal-lined streets and artistic heritage', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Anne Frank House', 'Van Gogh Museum', 'Canal cruise', 'Jordaan'] },
  
  // Germany
  { id: 'berlin', name: 'Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80', description: 'Historic capital with vibrant arts scene', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Brandenburg Gate', 'Berlin Wall', 'Museum Island', 'Reichstag'] },
  { id: 'munich', name: 'Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80', description: 'Bavarian charm with beer gardens and castles', minNights: 2, maxNights: 4, suggestedNights: 2, highlights: ['Marienplatz', 'Neuschwanstein', 'Beer halls', 'English Garden'] },
  
  // Austria
  { id: 'vienna', name: 'Vienna', country: 'Austria', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80', description: 'Imperial grandeur and classical music heritage', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Schönbrunn Palace', 'Opera House', 'Hofburg', 'Coffee houses'] },
  { id: 'salzburg', name: 'Salzburg', country: 'Austria', image: 'https://images.unsplash.com/photo-1595867817181-fe35bdc301e7?w=800&q=80', description: 'Mozart birthplace with Alpine backdrop', minNights: 1, maxNights: 3, suggestedNights: 2, highlights: ['Old Town', 'Fortress', 'Sound of Music tour', 'Mozart sites'] },
  
  // Czech Republic
  { id: 'prague', name: 'Prague', country: 'Czech Republic', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80', description: 'Fairy-tale architecture and bohemian spirit', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Charles Bridge', 'Old Town Square', 'Prague Castle', 'Astronomical Clock'] },
  
  // Hungary
  { id: 'budapest', name: 'Budapest', country: 'Hungary', image: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=800&q=80', description: 'Thermal baths and stunning Danube views', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Thermal baths', 'Parliament', 'Buda Castle', 'Ruin bars'] },
  
  // Greece
  { id: 'athens', name: 'Athens', country: 'Greece', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80', description: 'Ancient civilization meets modern vibrancy', minNights: 2, maxNights: 4, suggestedNights: 2, highlights: ['Acropolis', 'Plaka', 'Ancient Agora', 'National Museum'] },
  { id: 'santorini', name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80', description: 'Iconic white-washed villages and sunsets', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Oia sunset', 'Caldera views', 'Wine tasting', 'Black beaches'] },
  { id: 'mykonos', name: 'Mykonos', country: 'Greece', image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&q=80', description: 'Glamorous island with vibrant nightlife', minNights: 2, maxNights: 4, suggestedNights: 2, highlights: ['Windmills', 'Little Venice', 'Beach clubs', 'Old Town'] },
  
  // Portugal
  { id: 'lisbon', name: 'Lisbon', country: 'Portugal', image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80', description: 'Hilly charm with historic trams and pastéis', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Belém Tower', 'Alfama', 'Tram 28', 'Pastéis de Belém'] },
  { id: 'porto', name: 'Porto', country: 'Portugal', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80', description: 'Port wine cellars and colorful riverfront', minNights: 2, maxNights: 3, suggestedNights: 2, highlights: ['Ribeira', 'Port cellars', 'Livraria Lello', 'Dom Luís Bridge'] },
  
  // Switzerland
  { id: 'zurich', name: 'Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80', description: 'Lakeside elegance with Alpine views', minNights: 1, maxNights: 3, suggestedNights: 2, highlights: ['Old Town', 'Lake Zurich', 'Bahnhofstrasse', 'Art museums'] },
  { id: 'interlaken', name: 'Interlaken', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80', description: 'Adventure capital between two lakes', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Jungfraujoch', 'Paragliding', 'Lake Thun', 'Mountain trains'] },
  { id: 'lucerne', name: 'Lucerne', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&q=80', description: 'Medieval bridges and Mount Pilatus', minNights: 1, maxNights: 3, suggestedNights: 2, highlights: ['Chapel Bridge', 'Mount Pilatus', 'Old Town', 'Lake cruises'] },
  
  // UK
  { id: 'london', name: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', description: 'Royal heritage meets modern culture', minNights: 3, maxNights: 5, suggestedNights: 4, highlights: ['Big Ben', 'Tower of London', 'British Museum', 'West End'] },
  { id: 'edinburgh', name: 'Edinburgh', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1506377585622-bedcbb5f8c4d?w=800&q=80', description: 'Scottish castle city with dramatic landscapes', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Edinburgh Castle', 'Royal Mile', 'Arthur\'s Seat', 'Whisky tours'] },
  
  // Croatia
  { id: 'dubrovnik', name: 'Dubrovnik', country: 'Croatia', image: 'https://images.unsplash.com/photo-1555990538-1e6c0e0bb097?w=800&q=80', description: 'Pearl of the Adriatic with ancient walls', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['City Walls', 'Old Town', 'Lokrum Island', 'Cable car'] },
  { id: 'split', name: 'Split', country: 'Croatia', image: 'https://images.unsplash.com/photo-1558271736-cd043ef6c789?w=800&q=80', description: 'Roman palace and island gateway', minNights: 2, maxNights: 3, suggestedNights: 2, highlights: ['Diocletian\'s Palace', 'Riva promenade', 'Marjan Hill', 'Island hopping'] },
  
  // Scandinavia
  { id: 'copenhagen', name: 'Copenhagen', country: 'Denmark', image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80', description: 'Design capital with hygge culture', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Nyhavn', 'Tivoli Gardens', 'Little Mermaid', 'Christiania'] },
  { id: 'stockholm', name: 'Stockholm', country: 'Sweden', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80', description: 'Archipelago beauty across 14 islands', minNights: 2, maxNights: 4, suggestedNights: 3, highlights: ['Gamla Stan', 'Vasa Museum', 'ABBA Museum', 'Archipelago tours'] },
  { id: 'oslo', name: 'Oslo', country: 'Norway', image: 'https://images.unsplash.com/photo-1433757741270-ac2c64a91671?w=800&q=80', description: 'Fjord city with Viking heritage', minNights: 2, maxNights: 3, suggestedNights: 2, highlights: ['Viking Museum', 'Opera House', 'Vigeland Park', 'Fjord cruises'] },
]

export const europeTours: EuropeTour[] = [
  {
    id: 'classic-europe',
    name: 'Classic Europe',
    tagline: 'Paris • Amsterdam • Rome',
    duration: '10 Nights',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    rating: 4.9,
    tripType: 'cultural',
    cities: [
      { cityId: 'paris', nights: 3 },
      { cityId: 'amsterdam', nights: 3 },
      { cityId: 'rome', nights: 4 },
    ],
    highlights: ['Eiffel Tower', 'Canal cruise', 'Colosseum tour', 'Vatican visit'],
    tag: 'Most Popular',
    tagColor: 'bg-[#d19457] text-white',
  },
  {
    id: 'romantic-escape',
    name: 'Romantic Escape',
    tagline: 'Paris • Venice • Santorini',
    duration: '8 Nights',
    price: 2899,
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    rating: 5.0,
    tripType: 'romantic',
    cities: [
      { cityId: 'paris', nights: 3 },
      { cityId: 'venice', nights: 2 },
      { cityId: 'santorini', nights: 3 },
    ],
    highlights: ['Eiffel Tower dinner', 'Gondola ride', 'Sunset in Oia', 'Couples spa'],
    tag: 'Honeymoon Pick',
    tagColor: 'bg-[#8550a2] text-white',
  },
  {
    id: 'mediterranean-magic',
    name: 'Mediterranean Magic',
    tagline: 'Barcelona • Nice • Florence',
    duration: '9 Nights',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    rating: 4.8,
    tripType: 'adventure',
    cities: [
      { cityId: 'barcelona', nights: 3 },
      { cityId: 'nice', nights: 3 },
      { cityId: 'florence', nights: 3 },
    ],
    highlights: ['Sagrada Familia', 'French Riviera beaches', 'Tuscan wine tour', 'Uffizi Gallery'],
    tag: 'Best Seller',
    tagColor: 'bg-[#43124a] text-white',
  },
  {
    id: 'central-europe',
    name: 'Central Europe',
    tagline: 'Berlin • Prague • Vienna',
    duration: '7 Nights',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80',
    rating: 4.7,
    tripType: 'cultural',
    cities: [
      { cityId: 'berlin', nights: 2 },
      { cityId: 'prague', nights: 3 },
      { cityId: 'vienna', nights: 2 },
    ],
    highlights: ['Berlin Wall tour', 'Prague Castle', 'Vienna Opera', 'Coffee house culture'],
    tag: 'Great Value',
    tagColor: 'bg-[#44618b] text-white',
  },
  {
    id: 'iberian-adventure',
    name: 'Iberian Adventure',
    tagline: 'Lisbon • Madrid • Barcelona',
    duration: '9 Nights',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
    rating: 4.8,
    tripType: 'adventure',
    cities: [
      { cityId: 'lisbon', nights: 3 },
      { cityId: 'madrid', nights: 3 },
      { cityId: 'barcelona', nights: 3 },
    ],
    highlights: ['Tram 28 ride', 'Prado Museum', 'Tapas tour', 'Gaudí architecture'],
  },
  {
    id: 'nordic-wonders',
    name: 'Nordic Wonders',
    tagline: 'Copenhagen • Stockholm • Oslo',
    duration: '8 Nights',
    price: 2699,
    image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80',
    rating: 4.7,
    tripType: 'adventure',
    cities: [
      { cityId: 'copenhagen', nights: 3 },
      { cityId: 'stockholm', nights: 3 },
      { cityId: 'oslo', nights: 2 },
    ],
    highlights: ['Tivoli Gardens', 'Vasa Museum', 'Fjord cruise', 'Northern lights chance'],
  },
  {
    id: 'greek-islands',
    name: 'Greek Islands',
    tagline: 'Athens • Mykonos • Santorini',
    duration: '7 Nights',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
    rating: 4.9,
    tripType: 'romantic',
    cities: [
      { cityId: 'athens', nights: 2 },
      { cityId: 'mykonos', nights: 2 },
      { cityId: 'santorini', nights: 3 },
    ],
    highlights: ['Acropolis tour', 'Beach clubs', 'Caldera sunset', 'Wine tasting'],
    tag: 'Summer Favorite',
    tagColor: 'bg-[#d19457] text-white',
  },
  {
    id: 'swiss-alpine',
    name: 'Swiss Alpine Journey',
    tagline: 'Zurich • Interlaken • Lucerne',
    duration: '7 Nights',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
    rating: 4.9,
    tripType: 'adventure',
    cities: [
      { cityId: 'zurich', nights: 2 },
      { cityId: 'interlaken', nights: 3 },
      { cityId: 'lucerne', nights: 2 },
    ],
    highlights: ['Jungfraujoch', 'Paragliding', 'Mountain trains', 'Lake cruises'],
    tag: 'Adventure Pick',
    tagColor: 'bg-[#12103d] text-white',
  },
  {
    id: 'italian-grand',
    name: 'Italian Grand Tour',
    tagline: 'Rome • Florence • Venice • Amalfi',
    duration: '12 Nights',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
    rating: 5.0,
    tripType: 'luxury',
    cities: [
      { cityId: 'rome', nights: 3 },
      { cityId: 'florence', nights: 3 },
      { cityId: 'venice', nights: 3 },
      { cityId: 'amalfi', nights: 3 },
    ],
    highlights: ['Vatican private tour', 'Tuscan cooking class', 'Gondola ride', 'Capri day trip'],
    tag: 'Premium',
    tagColor: 'bg-[#8550a2] text-white',
  },
  {
    id: 'family-europe',
    name: 'Family Europe Fun',
    tagline: 'London • Paris • Amsterdam',
    duration: '10 Nights',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    rating: 4.8,
    tripType: 'family',
    cities: [
      { cityId: 'london', nights: 4 },
      { cityId: 'paris', nights: 3 },
      { cityId: 'amsterdam', nights: 3 },
    ],
    highlights: ['Harry Potter tour', 'Disneyland Paris', 'Canal bike tour', 'Kid-friendly museums'],
    tag: 'Family Favorite',
    tagColor: 'bg-[#c77e36] text-white',
  },
  {
    id: 'croatia-gems',
    name: 'Croatian Gems',
    tagline: 'Dubrovnik • Split • Zagreb',
    duration: '7 Nights',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1555990538-1e6c0e0bb097?w=800&q=80',
    rating: 4.7,
    tripType: 'adventure',
    cities: [
      { cityId: 'dubrovnik', nights: 3 },
      { cityId: 'split', nights: 2 },
    ],
    highlights: ['Game of Thrones tour', 'City walls walk', 'Island hopping', 'Plitvice Lakes'],
  },
  {
    id: 'friends-party',
    name: 'Euro Party Tour',
    tagline: 'Barcelona • Amsterdam • Berlin',
    duration: '9 Nights',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    rating: 4.6,
    tripType: 'friends',
    cities: [
      { cityId: 'barcelona', nights: 3 },
      { cityId: 'amsterdam', nights: 3 },
      { cityId: 'berlin', nights: 3 },
    ],
    highlights: ['Beach clubs', 'Nightlife tours', 'Pub crawls', 'Group activities'],
    tag: 'Friends Trip',
    tagColor: 'bg-[#43124a] text-white',
  },
]

export const getTripTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    adventure: 'Adventure',
    romantic: 'Romantic',
    family: 'Family Friendly',
    friends: 'Friend Trip',
    cultural: 'Cultural',
    luxury: 'Luxury',
  }
  return labels[type] || type
}

export const getCityById = (id: string): EuropeCity | undefined => {
  return europeCities.find(city => city.id === id)
}
