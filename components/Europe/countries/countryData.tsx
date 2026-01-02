// Country-specific data for European country pages
import { europeCities, citySeasonalData, Season } from '../europeData'

export interface ThingToDo {
  title: string
  description: string
  image: string
  icon?: string
}

export interface CountryData {
  id: string
  name: string
  tagline: string
  heroImage: string
  description: string
  thingsToDo: ThingToDo[]
}

// Get cities for a specific country
export const getCitiesByCountry = (country: string) => {
  // Handle "England" mapping to "United Kingdom"
  const countryMapping: Record<string, string[]> = {
    'Italy': ['Italy'],
    'France': ['France'],
    'Germany': ['Germany'],
    'England': ['United Kingdom'],
  }
  
  const countriesToMatch = countryMapping[country] || [country]
  return europeCities.filter(city => countriesToMatch.includes(city.country))
}

// Get best seasons for a city
export const getBestSeasons = (cityId: string): Season[] => {
  const seasonalData = citySeasonalData[cityId]
  if (!seasonalData) return ['spring', 'summer', 'autumn', 'winter']
  
  const bestSeasons: Season[] = []
  const seasons: Season[] = ['spring', 'summer', 'autumn', 'winter']
  
  seasons.forEach(season => {
    const data = seasonalData[season]
    if (data && (data.compatibility === 'ideal' || data.compatibility === 'good')) {
      bestSeasons.push(season)
    }
  })
  
  return bestSeasons.length > 0 ? bestSeasons : ['spring', 'summer', 'autumn', 'winter']
}

// Get season display info
export const getSeasonDisplay = (season: Season): { name: string; icon: string } => {
  const seasonInfo: Record<Season, { name: string; icon: string }> = {
    spring: { name: 'Spring', icon: '🌸' },
    summer: { name: 'Summer', icon: '☀️' },
    autumn: { name: 'Autumn', icon: '🍂' },
    winter: { name: 'Winter', icon: '❄️' },
  }
  return seasonInfo[season]
}

// Country-specific data
export const countryData: Record<string, CountryData> = {
  italy: {
    id: 'italy',
    name: 'Italy',
    tagline: 'Where History Meets La Dolce Vita',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80',
    description: 'Italy is a land where ancient ruins stand alongside Renaissance masterpieces, where every meal is a celebration, and where the art of living beautifully has been perfected over millennia. From the romantic canals of Venice to the sun-drenched Amalfi Coast, Italy offers an unparalleled journey through history, art, cuisine, and natural beauty.',
    thingsToDo: [
      {
        title: 'Colosseum',
        description: 'Walk where gladiators once fought in ancient Rome',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
      },
      {
        title: 'Gondola in Venice',
        description: 'Glide through the romantic canals of the floating city',
        image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80',
      },
      {
        title: 'Uffizi Gallery',
        description: 'Marvel at Botticelli and Renaissance masterpieces',
        image: 'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=800&q=80',
      },
      {
        title: 'Amalfi Drive',
        description: 'Experience the world\'s most scenic coastal road',
        image: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80',
      },
      {
        title: 'Vatican City',
        description: 'Witness Michelangelo\'s Sistine Chapel ceiling',
        image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80',
      },
      {
        title: 'Tuscan Wine Tasting',
        description: 'Sip Chianti in rolling vineyard hills',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
      },
    ],
  },
  france: {
    id: 'france',
    name: 'France',
    tagline: 'Art, Romance & Joie de Vivre',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80',
    description: 'France captivates with its perfect blend of world-class art, exquisite cuisine, and timeless elegance. From the iconic Eiffel Tower to the sun-kissed French Riviera, every corner of France tells a story of beauty, culture, and the celebrated French art of living well.',
    thingsToDo: [
      {
        title: 'Eiffel Tower',
        description: 'Ascend the iconic symbol of Paris',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      },
      {
        title: 'Louvre Museum',
        description: 'See the Mona Lisa and 35,000 artworks',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
      },
      {
        title: 'French Riviera',
        description: 'Bask in Mediterranean glamour',
        image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80',
      },
      {
        title: 'Palace of Versailles',
        description: 'Explore royal opulence and gardens',
        image: 'https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80',
      },
      {
        title: 'Montmartre',
        description: 'Wander the artistic heart of Paris',
        image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80',
      },
      {
        title: 'Côte d\'Azur Beaches',
        description: 'Relax on pristine Mediterranean shores',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
      },
    ],
  },
  germany: {
    id: 'germany',
    name: 'Germany',
    tagline: 'Castles, Culture & Gemütlichkeit',
    heroImage: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1600&q=80',
    description: 'Germany seamlessly blends fairy-tale castles with cutting-edge cities, rich history with vibrant modernity. From the beer gardens of Bavaria to the creative energy of Berlin, Germany offers travelers a journey through centuries of culture, innovation, and warm hospitality.',
    thingsToDo: [
      {
        title: 'Neuschwanstein Castle',
        description: 'Visit the fairy-tale castle that inspired Disney',
        image: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=800&q=80',
      },
      {
        title: 'Brandenburg Gate',
        description: 'Stand at Berlin\'s symbol of unity',
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
      },
      {
        title: 'Oktoberfest',
        description: 'Experience the world\'s largest beer festival',
        image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80',
      },
      {
        title: 'Berlin Wall',
        description: 'Explore powerful Cold War history',
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
      },
      {
        title: 'Marienplatz',
        description: 'Watch the famous Glockenspiel in Munich',
        image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80',
      },
      {
        title: 'Rhine Valley',
        description: 'Cruise past vineyards and castles',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
      },
    ],
  },
  england: {
    id: 'england',
    name: 'England',
    tagline: 'Royal Heritage & Timeless Traditions',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80',
    description: 'England enchants with its blend of royal pageantry, literary heritage, and vibrant modern culture. From the historic Tower of London to the cutting-edge galleries of the South Bank, England offers a captivating journey through centuries of history, innovation, and quintessentially British charm.',
    thingsToDo: [
      {
        title: 'Tower of London',
        description: 'See the Crown Jewels and 1000 years of history',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      },
      {
        title: 'Buckingham Palace',
        description: 'Watch the Changing of the Guard',
        image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80',
      },
      {
        title: 'Big Ben & Westminster',
        description: 'Admire iconic Gothic architecture',
        image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80',
      },
      {
        title: 'British Museum',
        description: 'Explore world treasures for free',
        image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&q=80',
      },
      {
        title: 'West End Shows',
        description: 'Experience world-class theatre',
        image: 'https://images.unsplash.com/photo-1563293958-8bfe16b29c16?w=800&q=80',
      },
      {
        title: 'Afternoon Tea',
        description: 'Indulge in a quintessential tradition',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
      },
    ],
  },
}

// Get country data by ID
export const getCountryData = (countryId: string): CountryData | undefined => {
  return countryData[countryId.toLowerCase()]
}
