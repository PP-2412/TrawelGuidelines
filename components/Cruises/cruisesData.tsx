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
  region: 'mediterranean' | 'caribbean' | 'alaska' | 'asia' | 'northern-europe' | 'river'
  route: string[]
  highlights: string[]
  included: string[]
  cabinTypes: string[]
  departurePort: string
  tag?: string
  tagColor?: string
}

export const cruises: Cruise[] = [
  // Mediterranean Cruises
  {
    id: 'cr-1',
    name: 'Mediterranean Odyssey',
    tagline: 'Barcelona to Rome',
    description: 'Sail the stunning Mediterranean coastline visiting iconic ports from Barcelona\'s vibrant streets to Rome\'s ancient wonders. Experience the best of Southern Europe from the comfort of a luxury cruise ship.',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80'
    ],
    duration: '10 Days',
    price: 2899,
    rating: 4.8,
    shipName: 'MSC Seascape',
    cruiseLine: 'MSC Cruises',
    region: 'mediterranean',
    route: ['Barcelona', 'Marseille', 'Genoa', 'Naples', 'Rome (Civitavecchia)'],
    highlights: ['La Sagrada Familia', 'French Riviera', 'Pompeii excursion', 'Vatican tour'],
    included: ['All meals onboard', 'Entertainment', 'Port taxes', 'Select excursions', 'Spa access'],
    cabinTypes: ['Interior', 'Ocean View', 'Balcony', 'Suite'],
    departurePort: 'Barcelona',
    tag: 'Best Value',
    tagColor: 'bg-[#d19457] text-white'
  },
  {
    id: 'cr-2',
    name: 'Greek Isles Paradise',
    tagline: 'Island Hopping Cruise',
    description: 'Explore the magical Greek islands on this enchanting cruise. From the white-washed villages of Santorini to the ancient ruins of Rhodes, discover Greece\'s island treasures.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80'
    ],
    duration: '8 Days',
    price: 2299,
    rating: 4.9,
    shipName: 'Celestyal Journey',
    cruiseLine: 'Celestyal Cruises',
    region: 'mediterranean',
    route: ['Athens (Piraeus)', 'Mykonos', 'Santorini', 'Rhodes', 'Crete', 'Athens'],
    highlights: ['Santorini sunset', 'Mykonos nightlife', 'Rhodes Old Town', 'Knossos Palace'],
    included: ['All-inclusive drinks', 'Shore excursions', 'Gratuities', 'WiFi', 'Specialty dining'],
    cabinTypes: ['Interior', 'Ocean View', 'Balcony', 'Junior Suite'],
    departurePort: 'Athens',
    tag: 'Most Popular',
    tagColor: 'bg-[#12103d] text-white'
  },
  {
    id: 'cr-3',
    name: 'Adriatic Dreams',
    tagline: 'Croatia & Montenegro',
    description: 'Sail the crystal-clear waters of the Adriatic visiting the stunning coastlines of Croatia and Montenegro. Discover medieval walled cities, hidden coves, and world-class wineries.',
    image: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555990793-da11153b2473?w=800&q=80',
      'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80',
      'https://images.unsplash.com/photo-1565184420826-fb06a0e83fce?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80'
    ],
    duration: '8 Days',
    price: 2699,
    rating: 4.8,
    shipName: 'Katarina Line',
    cruiseLine: 'Small Ship Explorer',
    region: 'mediterranean',
    route: ['Dubrovnik', 'Korčula', 'Hvar', 'Split', 'Kotor', 'Dubrovnik'],
    highlights: ['Dubrovnik walls walk', 'Hvar nightlife', 'Diocletian\'s Palace', 'Bay of Kotor'],
    included: ['Daily breakfast', 'Captain\'s dinner', 'Water sports equipment', 'Bikes', 'Local guides'],
    cabinTypes: ['Lower Deck', 'Main Deck', 'Upper Deck', 'Premium'],
    departurePort: 'Dubrovnik',
    tag: 'Small Ship',
    tagColor: 'bg-[#43124a] text-white'
  },
  // Caribbean Cruises
  {
    id: 'cr-4',
    name: 'Caribbean Paradise',
    tagline: 'Eastern Caribbean Adventure',
    description: 'Experience the ultimate tropical getaway with pristine beaches, crystal-clear waters, and vibrant island cultures. From the Dutch charm of St. Maarten to the lush beauty of St. Lucia.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80'
    ],
    duration: '7 Days',
    price: 1899,
    rating: 4.7,
    shipName: 'Oasis of the Seas',
    cruiseLine: 'Royal Caribbean',
    region: 'caribbean',
    route: ['Fort Lauderdale', 'Nassau', 'St. Thomas', 'St. Maarten', 'Fort Lauderdale'],
    highlights: ['Private island beach day', 'Snorkeling', 'Zip-lining', 'Duty-free shopping'],
    included: ['All meals', 'Entertainment', 'Pools & water slides', 'Fitness center', 'Kids clubs'],
    cabinTypes: ['Interior', 'Ocean View', 'Balcony', 'Suite', 'Royal Suite'],
    departurePort: 'Fort Lauderdale',
    tag: 'Family Favorite',
    tagColor: 'bg-[#44618b] text-white'
  },
  {
    id: 'cr-5',
    name: 'Western Caribbean Explorer',
    tagline: 'Mexico & Belize',
    description: 'Discover ancient Mayan ruins, swim in cenotes, and relax on white-sand beaches. This cruise combines history, adventure, and relaxation in the stunning Western Caribbean.',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
      'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80',
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80'
    ],
    duration: '7 Days',
    price: 1699,
    rating: 4.6,
    shipName: 'Carnival Vista',
    cruiseLine: 'Carnival Cruise Line',
    region: 'caribbean',
    route: ['Miami', 'Cozumel', 'Belize City', 'Roatán', 'Costa Maya', 'Miami'],
    highlights: ['Chichen Itza tour', 'Cave tubing', 'Beach relaxation', 'Mayan ruins'],
    included: ['All meals', 'Entertainment', 'Water park', 'Comedy shows', 'Poolside activities'],
    cabinTypes: ['Interior', 'Ocean View', 'Balcony', 'Suite'],
    departurePort: 'Miami'
  },
  // Alaska Cruises
  {
    id: 'cr-6',
    name: 'Alaska Glacier Discovery',
    tagline: 'Inside Passage Adventure',
    description: 'Witness the raw beauty of Alaska with towering glaciers, abundant wildlife, and charming coastal towns. An unforgettable journey through America\'s last frontier.',
    image: 'https://images.unsplash.com/photo-1531176175280-33e3e08a4da2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1531176175280-33e3e08a4da2?w=800&q=80',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80',
      'https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&q=80',
      'https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=800&q=80'
    ],
    duration: '7 Days',
    price: 2499,
    rating: 4.9,
    shipName: 'Norwegian Bliss',
    cruiseLine: 'Norwegian Cruise Line',
    region: 'alaska',
    route: ['Seattle', 'Juneau', 'Skagway', 'Glacier Bay', 'Ketchikan', 'Victoria', 'Seattle'],
    highlights: ['Glacier viewing', 'Whale watching', 'Dog sledding', 'Gold Rush history'],
    included: ['All meals', 'Entertainment', 'Glacier Bay fees', 'Observation lounges', 'Enrichment programs'],
    cabinTypes: ['Interior', 'Ocean View', 'Balcony', 'Mini-Suite', 'Haven Suite'],
    departurePort: 'Seattle',
    tag: 'Bucket List',
    tagColor: 'bg-[#8550a2] text-white'
  },
  // Northern Europe
  {
    id: 'cr-7',
    name: 'Norwegian Fjords Explorer',
    tagline: 'Nature\'s Masterpiece',
    description: 'Witness the breathtaking beauty of Norway\'s fjords on this spectacular voyage. Sail past towering cliffs, cascading waterfalls, and charming fishing villages.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=800&q=80',
      'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    ],
    duration: '12 Days',
    price: 3999,
    rating: 4.9,
    shipName: 'MS Roald Amundsen',
    cruiseLine: 'Hurtigruten',
    region: 'northern-europe',
    route: ['Bergen', 'Geirangerfjord', 'Ålesund', 'Trondheim', 'Lofoten', 'Tromsø'],
    highlights: ['Geirangerfjord', 'Northern Lights', 'Midnight Sun', 'Viking history'],
    included: ['Expedition team', 'Zodiac excursions', 'Lectures', 'Cold weather gear', 'All meals'],
    cabinTypes: ['Polar Inside', 'Polar Outside', 'Arctic Superior', 'Expedition Suite'],
    departurePort: 'Bergen',
    tag: 'Expedition',
    tagColor: 'bg-[#44618b] text-white'
  },
  {
    id: 'cr-8',
    name: 'Baltic Capitals',
    tagline: 'Northern Europe\'s Gems',
    description: 'Discover the enchanting capitals of the Baltic Sea on this cultural voyage. From the fairy-tale spires of Copenhagen to the imperial grandeur of St. Petersburg.',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80',
      'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80',
      'https://images.unsplash.com/photo-1556610961-2fecc5927173?w=800&q=80',
      'https://images.unsplash.com/photo-1548834925-e48f8a27ae1f?w=800&q=80'
    ],
    duration: '11 Days',
    price: 3499,
    rating: 4.7,
    shipName: 'Viking Sky',
    cruiseLine: 'Viking Ocean Cruises',
    region: 'northern-europe',
    route: ['Copenhagen', 'Stockholm', 'Helsinki', 'St. Petersburg', 'Tallinn', 'Copenhagen'],
    highlights: ['Hermitage Museum', 'Peterhof Palace', 'Gamla Stan', 'Tivoli Gardens'],
    included: ['Shore excursions', 'WiFi', 'Specialty dining', 'Beer & wine with meals', 'Self-service laundry'],
    cabinTypes: ['Veranda', 'Deluxe Veranda', 'Penthouse Veranda', 'Explorer Suite'],
    departurePort: 'Copenhagen',
    tag: 'Cultural',
    tagColor: 'bg-[#c77e36] text-white'
  },
  // Asia
  {
    id: 'cr-9',
    name: 'Southeast Asia Explorer',
    tagline: 'Vietnam & Thailand',
    description: 'Discover the exotic beauty of Southeast Asia with ancient temples, floating markets, and pristine beaches. Experience the unique cultures and cuisines of this fascinating region.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80',
      'https://images.unsplash.com/photo-1540329957110-b87b06f5e2d9?w=800&q=80'
    ],
    duration: '14 Days',
    price: 3299,
    rating: 4.8,
    shipName: 'Celebrity Millennium',
    cruiseLine: 'Celebrity Cruises',
    region: 'asia',
    route: ['Singapore', 'Ko Samui', 'Bangkok', 'Ho Chi Minh City', 'Nha Trang', 'Hong Kong'],
    highlights: ['Ha Long Bay', 'Grand Palace', 'Cu Chi Tunnels', 'Floating markets'],
    included: ['All meals', 'Entertainment', 'WiFi', 'Specialty restaurants', 'Butler service (suites)'],
    cabinTypes: ['Interior', 'Ocean View', 'Balcony', 'Sky Suite', 'Penthouse Suite'],
    departurePort: 'Singapore',
    tag: 'Exotic',
    tagColor: 'bg-[#d19457] text-white'
  },
  // River Cruises
  {
    id: 'cr-10',
    name: 'Romantic Rhine',
    tagline: 'Castles & Vineyards',
    description: 'Cruise through the heart of Europe along the legendary Rhine River. Pass fairytale castles, terraced vineyards, and charming villages on this quintessential river cruise experience.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
      'https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=800&q=80',
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80'
    ],
    duration: '8 Days',
    price: 2799,
    rating: 4.9,
    shipName: 'AmaKristina',
    cruiseLine: 'AmaWaterways',
    region: 'river',
    route: ['Amsterdam', 'Cologne', 'Koblenz', 'Rüdesheim', 'Strasbourg', 'Basel'],
    highlights: ['Rhine Gorge castles', 'Wine tasting', 'Cologne Cathedral', 'Black Forest'],
    included: ['All meals', 'Wine & beer', 'Guided excursions', 'Bikes', 'WiFi'],
    cabinTypes: ['Standard', 'French Balcony', 'Balcony', 'Suite'],
    departurePort: 'Amsterdam',
    tag: 'River Cruise',
    tagColor: 'bg-[#12103d] text-white'
  },
  {
    id: 'cr-11',
    name: 'Danube Waltz',
    tagline: 'Vienna to Budapest',
    description: 'Explore Central Europe\'s most beautiful cities along the legendary Danube River. From imperial Vienna to artistic Budapest, experience the grandeur of the Austro-Hungarian Empire.',
    image: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=800&q=80',
      'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80',
      'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&q=80'
    ],
    duration: '8 Days',
    price: 2599,
    rating: 4.8,
    shipName: 'Viking Longship',
    cruiseLine: 'Viking River Cruises',
    region: 'river',
    route: ['Budapest', 'Vienna', 'Dürnstein', 'Melk', 'Passau', 'Budapest'],
    highlights: ['Schönbrunn Palace', 'Thermal baths', 'Wachau Valley wines', 'Melk Abbey'],
    included: ['All meals', 'Wine & beer', 'Shore excursions', 'WiFi', 'Cultural performances'],
    cabinTypes: ['Standard', 'French Balcony', 'Veranda', 'Explorer Suite'],
    departurePort: 'Budapest',
    tag: 'Classic',
    tagColor: 'bg-[#8550a2] text-white'
  },
  {
    id: 'cr-12',
    name: 'British Isles Discovery',
    tagline: 'UK & Ireland Circumnavigation',
    description: 'Sail around the British Isles discovering ancient castles, rugged coastlines, and charming villages. From the Scottish Highlands to the Irish countryside.',
    image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80',
      'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80'
    ],
    duration: '14 Days',
    price: 4299,
    rating: 4.6,
    shipName: 'Queen Victoria',
    cruiseLine: 'Cunard',
    region: 'northern-europe',
    route: ['Southampton', 'Dublin', 'Belfast', 'Glasgow', 'Edinburgh', 'Orkney', 'Liverpool', 'Southampton'],
    highlights: ['Edinburgh Castle', 'Giant\'s Causeway', 'Ring of Kerry', 'Whisky distillery'],
    included: ['White Star service', 'Afternoon tea', 'Gala evenings', 'Cunard Insights talks', 'WiFi'],
    cabinTypes: ['Inside', 'Oceanview', 'Balcony', 'Princess Grill Suite', 'Queens Grill Suite'],
    departurePort: 'Southampton'
  },
]

export const getRegionLabel = (region: Cruise['region']): string => {
  const labels: Record<Cruise['region'], string> = {
    'mediterranean': 'Mediterranean',
    'caribbean': 'Caribbean',
    'alaska': 'Alaska',
    'asia': 'Asia',
    'northern-europe': 'Northern Europe',
    'river': 'River Cruise'
  }
  return labels[region]
}
