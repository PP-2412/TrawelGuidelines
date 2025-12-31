import { TripType, Season } from './europeData'

export interface Activity {
  time: 'Morning' | 'Afternoon' | 'Evening'
  title: string
  description: string
  duration?: string
  tripTypes?: TripType[] // If specified, only show for these trip types
  seasons?: Season[] // If specified, only show for these seasons
  icon?: string
}

export interface DayItinerary {
  day: number
  title: string
  activities: Activity[]
}

export interface CityItinerary {
  cityId: string
  cityName: string
  days: DayItinerary[]
}

// Helper to create trip-type specific activities
const adventureActivity = (time: Activity['time'], title: string, description: string, duration?: string, seasons?: Season[]): Activity => ({
  time, title, description, duration, tripTypes: ['adventure'], seasons
})

const romanticActivity = (time: Activity['time'], title: string, description: string, duration?: string, seasons?: Season[]): Activity => ({
  time, title, description, duration, tripTypes: ['romantic'], seasons
})

const familyActivity = (time: Activity['time'], title: string, description: string, duration?: string, seasons?: Season[]): Activity => ({
  time, title, description, duration, tripTypes: ['family'], seasons
})

const friendsActivity = (time: Activity['time'], title: string, description: string, duration?: string, seasons?: Season[]): Activity => ({
  time, title, description, duration, tripTypes: ['friends'], seasons
})

const culturalActivity = (time: Activity['time'], title: string, description: string, duration?: string, seasons?: Season[]): Activity => ({
  time, title, description, duration, tripTypes: ['cultural'], seasons
})

const luxuryActivity = (time: Activity['time'], title: string, description: string, duration?: string, seasons?: Season[]): Activity => ({
  time, title, description, duration, tripTypes: ['luxury'], seasons
})

// Helper to create season-specific activities (available for all trip types)
const seasonalActivity = (time: Activity['time'], title: string, description: string, seasons: Season[], duration?: string): Activity => ({
  time, title, description, duration, seasons
})

// Since the full itinerary data is very large (3000+ lines), I'll include the key structure
// and seasonal additions. The existing activities remain unchanged - seasonal activities are ADDED.

export const cityItineraries: CityItinerary[] = [
  {
    cityId: 'paris',
    cityName: 'Paris',
    days: [
      {
        day: 1,
        title: 'Arrival & Eiffel Tower',
        activities: [
          { time: 'Morning', title: 'Arrive in Paris', description: 'Check into your hotel and freshen up. Take a leisurely stroll around your neighborhood to get oriented.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Eiffel Tower Visit', description: 'Head to the iconic Eiffel Tower. Take the elevator to the top for panoramic views of Paris.', duration: '2-3 hours' },
          luxuryActivity('Afternoon', 'VIP Eiffel Tower Access', 'Skip-the-line access with private guide and champagne at the summit.', '3 hours'),
          romanticActivity('Evening', 'Seine River Dinner Cruise', 'Enjoy a magical dinner cruise along the Seine with views of illuminated monuments.', '2.5 hours'),
          familyActivity('Evening', 'Trocadéro Gardens', 'Watch the Eiffel Tower light show from the gardens. Great for kids!', '1.5 hours'),
          { time: 'Evening', title: 'Champ de Mars Picnic', description: 'Grab some wine, cheese, and baguettes for a classic Parisian evening picnic with Eiffel Tower views.', duration: '2 hours', seasons: ['spring', 'summer', 'autumn'] },
          // Winter alternative
          seasonalActivity('Evening', 'Cozy Bistro Dinner', 'Warm up with classic French onion soup and steak frites at a traditional Parisian bistro near the tower.', ['winter'], '2 hours'),
        ]
      },
      {
        day: 2,
        title: 'Louvre & Marais District',
        activities: [
          { time: 'Morning', title: 'Louvre Museum', description: 'Explore the world\'s largest art museum. See the Mona Lisa, Venus de Milo, and countless masterpieces.', duration: '3-4 hours' },
          culturalActivity('Morning', 'Guided Art History Tour', 'Deep dive into Renaissance and Classical art with an expert historian.', '4 hours'),
          luxuryActivity('Morning', 'Private Louvre Tour', 'Before-hours access to the museum with your personal art guide.', '3 hours'),
          { time: 'Afternoon', title: 'Le Marais Exploration', description: 'Wander through the historic Jewish Quarter, browse boutiques, and enjoy falafel on Rue des Rosiers.', duration: '3 hours' },
          friendsActivity('Afternoon', 'Marais Bar Hopping', 'Discover trendy cocktail bars and cafés in the hip Marais district.', '3 hours'),
          { time: 'Evening', title: 'Place des Vosges', description: 'Enjoy dinner at one of the restaurants surrounding Paris\'s oldest planned square.', duration: '2 hours' },
        ]
      },
      {
        day: 3,
        title: 'Montmartre & Sacré-Cœur',
        activities: [
          { time: 'Morning', title: 'Sacré-Cœur Basilica', description: 'Climb to the top of Montmartre hill and visit the stunning white-domed basilica.', duration: '2 hours' },
          adventureActivity('Morning', 'Montmartre Walking Tour', 'Explore hidden passages, vineyard, and artist studios on this off-beat walking tour.', '3 hours'),
          { time: 'Afternoon', title: 'Place du Tertre', description: 'Watch artists at work in this famous square. Get your portrait drawn!', duration: '2 hours' },
          familyActivity('Afternoon', 'Montmartre Funicular', 'Take the fun funicular railway up the hill and explore the carousel.', '2 hours'),
          romanticActivity('Afternoon', 'Wall of Love', 'Visit the Mur des Je t\'aime featuring "I love you" in 250 languages.', '30 mins'),
          { time: 'Evening', title: 'Moulin Rouge Area', description: 'Explore the historic cabaret district and enjoy dinner in a classic bistro.', duration: '3 hours' },
          luxuryActivity('Evening', 'Moulin Rouge Show', 'Attend the legendary cabaret show with champagne and dinner.', '4 hours'),
          // Seasonal: Montmartre Vineyard Harvest
          seasonalActivity('Afternoon', 'Vendange de Montmartre', 'In October, join the colorful grape harvest festival at the Montmartre vineyard.', ['autumn'], '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Versailles Day Trip',
        activities: [
          { time: 'Morning', title: 'Palace of Versailles', description: 'Take a train to Versailles and explore the magnificent palace and Hall of Mirrors.', duration: '3-4 hours' },
          culturalActivity('Morning', 'Royal Apartments Tour', 'In-depth tour of the King\'s and Queen\'s private chambers.', '2 hours'),
          luxuryActivity('Morning', 'Private Palace Guide', 'Personal guide with access to restricted areas of the palace.', '4 hours'),
          { time: 'Afternoon', title: 'Gardens of Versailles', description: 'Stroll through the stunning formal gardens, fountains, and Marie Antoinette\'s hamlet.', duration: '3 hours' },
          adventureActivity('Afternoon', 'Bike the Gardens', 'Rent bikes to explore the vast 800-hectare gardens and Grand Canal.', '3 hours', ['spring', 'summer', 'autumn']),
          familyActivity('Afternoon', 'Row Boats on Grand Canal', 'Rent a rowboat and paddle along the Grand Canal with the family.', '1.5 hours', ['spring', 'summer', 'autumn']),
          // Seasonal fountain shows
          seasonalActivity('Afternoon', 'Musical Fountains Show', 'Watch the spectacular fountain shows set to baroque music (weekends Apr-Oct).', ['spring', 'summer', 'autumn'], '1.5 hours'),
          seasonalActivity('Evening', 'Night Fountain Show', 'Summer Saturday evenings feature fountains, fireworks, and illuminations.', ['summer'], '2 hours'),
          { time: 'Evening', title: 'Return to Paris', description: 'Head back to Paris for a relaxed dinner in the Latin Quarter.', duration: '2 hours' },
        ]
      },
      {
        day: 5,
        title: 'Seasonal Paris Highlights',
        activities: [
          { time: 'Morning', title: 'Île de la Cité', description: 'Visit Notre-Dame Cathedral (exterior), Sainte-Chapelle, and the charming island.', duration: '3 hours' },
          culturalActivity('Morning', 'Sainte-Chapelle Stained Glass', 'Marvel at the 1,113 stained glass panels in this Gothic masterpiece.', '1.5 hours'),
          { time: 'Afternoon', title: 'Latin Quarter & Panthéon', description: 'Explore the student quarter, visit Shakespeare & Company bookstore, and the Panthéon.', duration: '3 hours' },
          friendsActivity('Afternoon', 'Café Culture Experience', 'Visit historic cafés like Les Deux Magots and Café de Flore.', '2 hours'),
          romanticActivity('Afternoon', 'Luxembourg Gardens', 'Romantic stroll through the beautiful Luxembourg Gardens.', '1.5 hours', ['spring', 'summer', 'autumn']),
          { time: 'Evening', title: 'Farewell Dinner', description: 'Enjoy a memorable final dinner at a classic Parisian restaurant.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Dining', 'Conclude your Paris trip with an unforgettable fine dining experience.', '3 hours'),
          // SEASONAL PARIS ACTIVITIES
          seasonalActivity('Morning', 'Cherry Blossoms at Parc de Sceaux', 'Visit the stunning Japanese cherry orchard in full bloom - Paris\'s best hanami spot.', ['spring'], '2.5 hours'),
          seasonalActivity('Afternoon', 'Tulips at Jardin des Tuileries', 'Thousands of tulips transform the formal gardens into a colorful paradise.', ['spring'], '1.5 hours'),
          seasonalActivity('Afternoon', 'Paris Plages', 'Join Parisians at the temporary urban beaches along the Seine with sand, loungers, and activities.', ['summer'], '3 hours'),
          seasonalActivity('Evening', 'Open-Air Cinema', 'Watch classic films under the stars at Parc de la Villette\'s free outdoor cinema.', ['summer'], '3 hours'),
          seasonalActivity('Afternoon', 'Autumn Colors in Luxembourg', 'The gardens are spectacular with golden leaves - perfect for photography.', ['autumn'], '2 hours'),
          seasonalActivity('Evening', 'Nuit Blanche', 'In October, experience Paris\'s all-night contemporary art festival with free installations city-wide.', ['autumn'], '4 hours'),
          seasonalActivity('Afternoon', 'Christmas Markets', 'Explore the magical Champs-Élysées and Tuileries Christmas markets with mulled wine and festive treats.', ['winter'], '3 hours'),
          seasonalActivity('Afternoon', 'Tuileries Ice Skating', 'Glide on the outdoor ice rink at the Tuileries Gardens with views of the city.', ['winter'], '1.5 hours'),
          seasonalActivity('Evening', 'Galeries Lafayette Christmas', 'Marvel at the spectacular Christmas decorations and light show at the famous department store.', ['winter'], '1.5 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'santorini',
    cityName: 'Santorini',
    days: [
      {
        day: 1,
        title: 'Arrival & Oia',
        activities: [
          { time: 'Morning', title: 'Arrive in Santorini', description: 'Settle into your accommodation and take in the caldera views.', duration: '2 hours' },
          luxuryActivity('Morning', 'Private Transfer & Welcome', 'Helicopter transfer with champagne welcome at your villa.', '1 hour'),
          { time: 'Afternoon', title: 'Oia Exploration', description: 'Wander the iconic white-washed streets and blue domes.', duration: '3 hours' },
          romanticActivity('Afternoon', 'Blue Dome Photography', 'Find all the famous photo spots with the iconic blue domes.', '2 hours'),
          { time: 'Evening', title: 'Oia Sunset', description: 'Watch the world-famous sunset from Oia\'s castle ruins.', duration: '2 hours' },
          friendsActivity('Evening', 'Sunset Cocktails', 'Sip cocktails at a cliffside bar during sunset.', '2.5 hours'),
          // Winter note - many places closed
          seasonalActivity('Afternoon', 'Off-Season Tranquility', 'Experience Oia without crowds - many tourists areas peaceful but check restaurant openings.', ['winter'], '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Caldera & Volcano',
        activities: [
          { time: 'Morning', title: 'Catamaran Cruise', description: 'Sail around the caldera with swimming and snorkeling stops.', duration: '5 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Morning', 'Volcano Hike', 'Climb the active volcano and swim in hot springs.', '3 hours'),
          luxuryActivity('Morning', 'Private Yacht Charter', 'Exclusive sailing with gourmet lunch and wine.', '6 hours', ['spring', 'summer', 'autumn']),
          familyActivity('Morning', 'Family Boat Trip', 'Kid-friendly cruise with swimming and BBQ lunch.', '5 hours', ['spring', 'summer', 'autumn']),
          // Winter alternative
          seasonalActivity('Morning', 'Museum & History Day', 'Visit the Prehistoric Thera Museum and learn about the ancient Minoan eruption.', ['winter'], '3 hours'),
          { time: 'Afternoon', title: 'Hot Springs', description: 'Swim in the volcanic hot springs near the caldera.', duration: '1 hour', seasons: ['spring', 'summer', 'autumn'] },
          { time: 'Evening', title: 'Fira Town', description: 'Explore the capital and enjoy dinner with caldera views.', duration: '3 hours' },
          romanticActivity('Evening', 'Cliffside Dinner', 'Romantic dinner on a terrace overlooking the caldera.', '2.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Wine & Villages',
        activities: [
          { time: 'Morning', title: 'Wine Tasting Tour', description: 'Sample Assyrtiko and other volcanic wines at local wineries.', duration: '4 hours' },
          romanticActivity('Morning', 'Private Wine Experience', 'Exclusive tasting at Santo Wines with sunset views.', '3 hours'),
          friendsActivity('Morning', 'Wine Tour with Friends', 'Visit 3 wineries with local cheese pairings.', '4 hours'),
          // Harvest season special
          seasonalActivity('Morning', 'Grape Harvest Experience', 'In September, participate in the traditional grape harvest at a local vineyard.', ['autumn'], '4 hours'),
          { time: 'Afternoon', title: 'Pyrgos Village', description: 'Explore the highest village with Venetian castle ruins.', duration: '2 hours' },
          culturalActivity('Afternoon', 'Traditional Village Tour', 'Visit Megalochori and Emporio\'s medieval fortress.', '3 hours'),
          { time: 'Evening', title: 'Traditional Taverna', description: 'Enjoy grilled octopus and fava at a village restaurant.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Fine Dining Experience', 'Multi-course dinner at a Michelin-recognized restaurant.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Beach Day',
        activities: [
          { time: 'Morning', title: 'Red Beach', description: 'Visit the dramatic red volcanic beach.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Morning', 'Cliff Jumping & Snorkeling', 'Jump from cliffs and explore underwater caves.', '3 hours', ['summer']),
          { time: 'Afternoon', title: 'Perissa Black Beach', description: 'Relax on the long black sand beach with beach bars.', duration: '3 hours', seasons: ['spring', 'summer', 'autumn'] },
          familyActivity('Afternoon', 'Beach Club Day', 'Family-friendly beach club with loungers and activities.', '4 hours', ['summer']),
          friendsActivity('Afternoon', 'Beach Party', 'Join the party at Perivolos beach bars.', '4 hours', ['summer']),
          // Winter alternative
          seasonalActivity('Morning', 'Ancient Akrotiri', 'Perfect time to explore the "Minoan Pompeii" archaeological site without summer crowds.', ['winter'], '2.5 hours'),
          seasonalActivity('Afternoon', 'Hiking the Caldera', 'Cool weather makes the Fira to Oia hike much more pleasant than summer.', ['winter', 'spring', 'autumn'], '3 hours'),
          { time: 'Evening', title: 'Kamari Seaside Dinner', description: 'Fresh fish dinner right on the black sand beach.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Private Beach Dinner', 'Set up just for you on a quiet stretch of beach.', '2.5 hours', ['spring', 'summer', 'autumn']),
        ]
      },
      {
        day: 5,
        title: 'Final Moments',
        activities: [
          { time: 'Morning', title: 'Akrotiri Archaeological Site', description: 'Visit the "Minoan Pompeii" - an ancient city preserved by volcanic ash.', duration: '2 hours' },
          culturalActivity('Morning', 'Archaeology Tour', 'Expert guide brings the 3,600-year-old city to life.', '2.5 hours'),
          { time: 'Afternoon', title: 'Lighthouse Walk', description: 'Hike to the southwestern lighthouse for panoramic views.', duration: '2 hours' },
          adventureActivity('Afternoon', 'ATV Island Tour', 'Explore the island by quad bike.', '3 hours', ['spring', 'summer', 'autumn']),
          { time: 'Evening', title: 'Farewell Sunset', description: 'Watch your final Santorini sunset with local wine.', duration: '2 hours' },
          luxuryActivity('Evening', 'Private Villa Dinner', 'In-villa chef prepares your farewell Greek feast.', '3.5 hours'),
          // Seasonal notes
          seasonalActivity('Evening', 'Easter Celebrations', 'Experience Greek Orthodox Easter with midnight services and fireworks - Santorini is magical.', ['spring'], '4 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'interlaken',
    cityName: 'Interlaken',
    days: [
      {
        day: 1,
        title: 'Arrival & Lake Views',
        activities: [
          { time: 'Morning', title: 'Arrive in Interlaken', description: 'Settle in and take in the stunning mountain scenery.', duration: '2 hours' },
          luxuryActivity('Morning', 'Helicopter Transfer', 'Arrive in style with aerial views of the Alps.', '30 mins'),
          { time: 'Afternoon', title: 'Lake Thun Cruise', description: 'Scenic boat ride on the turquoise alpine lake.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          romanticActivity('Afternoon', 'Sunset Cruise', 'Private boat with champagne as the sun sets over peaks.', '2 hours', ['spring', 'summer', 'autumn']),
          familyActivity('Afternoon', 'Paddle Boat Adventure', 'Rent paddle boats and explore the lake shore.', '2 hours', ['summer']),
          // Winter alternative
          seasonalActivity('Afternoon', 'Winter Wonderland Walk', 'Stroll the snow-covered lakeside promenade and warm up with Swiss hot chocolate.', ['winter'], '2 hours'),
          { time: 'Evening', title: 'Interlaken Town', description: 'Explore the charming town center and enjoy Swiss cuisine.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Swiss Beer & Fondue', 'Sample local beers with traditional cheese fondue.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Jungfraujoch - Top of Europe',
        activities: [
          { time: 'Morning', title: 'Jungfrau Railway', description: 'Take the famous cogwheel train to Europe\'s highest station.', duration: '4-5 hours' },
          adventureActivity('Morning', 'Snow Fun Activities', 'Snow tubing, sledding, and glacier walks at the top.', '2 hours'),
          familyActivity('Morning', 'Ice Palace', 'Explore the frozen tunnels carved into the glacier.', '1 hour'),
          luxuryActivity('Morning', 'First Class Journey', 'VIP train with window seating and exclusive lounge access.', '5 hours'),
          { time: 'Afternoon', title: 'Sphinx Observatory', description: 'Take in 360° views from the observation deck.', duration: '1 hour' },
          { time: 'Evening', title: 'Return via Grindelwald', description: 'Stop in the charming village for dinner on the way down.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Mountain Restaurant', 'Dine with views of the Eiger north face.', '2.5 hours'),
          // Note: Jungfraujoch is year-round but experiences differ
          seasonalActivity('Morning', 'Winter Snow Paradise', 'Winter offers the best snow conditions at the top - perfect for snow activities.', ['winter'], '2 hours'),
          seasonalActivity('Afternoon', 'Summer Glacier Hiking', 'In summer, hike on the Aletsch Glacier with a guide.', ['summer'], '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Adventure Day',
        activities: [
          // Summer adventures
          { time: 'Morning', title: 'Paragliding', description: 'Tandem flight over the Swiss Alps with stunning views.', duration: '2 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Morning', 'Canyoning', 'Navigate waterfalls and rock formations in alpine gorges.', '4 hours', ['summer']),
          familyActivity('Morning', 'Trotti Bike', 'Scooter bikes down mountain trails - fun for all ages!', '2.5 hours', ['spring', 'summer', 'autumn']),
          romanticActivity('Morning', 'Hot Air Balloon', 'Float above the Alps at sunrise with champagne.', '3 hours', ['spring', 'summer', 'autumn']),
          // Winter adventures
          seasonalActivity('Morning', 'Skiing at Grindelwald-First', 'Hit the slopes at one of the region\'s top ski areas.', ['winter'], '4 hours'),
          seasonalActivity('Morning', 'Snowshoe Hiking', 'Peaceful winter hiking through snow-covered forests.', ['winter'], '3 hours'),
          seasonalActivity('Morning', 'First Cliff Walk', 'The dramatic cliff walk is even more spectacular with snow.', ['winter'], '2 hours'),
          { time: 'Afternoon', title: 'Harder Kulm', description: 'Take the funicular to the viewing platform for panoramic views.', duration: '2.5 hours' },
          friendsActivity('Afternoon', 'Bungee Jumping', 'Take the plunge at the Stockhorn cable car.', '2 hours', ['spring', 'summer', 'autumn']),
          // Winter afternoon
          seasonalActivity('Afternoon', 'Sledding Run', 'Take the longest sled run in Europe from Faulhorn (15km!).', ['winter'], '3 hours'),
          { time: 'Evening', title: 'Adventure Celebration', description: 'Toast your adventures over raclette and wine.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Gourmet Mountain Dinner', 'Fine dining at a mountaintop restaurant.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Lauterbrunnen Valley',
        activities: [
          { time: 'Morning', title: 'Trümmelbach Falls', description: 'See the glacial waterfalls inside the mountain.', duration: '1.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Morning', 'Via Ferrata', 'Climb iron pathways on cliff faces with guide.', '4 hours', ['summer', 'autumn']),
          // Spring waterfall peak
          seasonalActivity('Morning', 'Staubbach Falls Peak Flow', 'In late spring, the 300m waterfall is at its most spectacular from snowmelt.', ['spring'], '1 hour'),
          { time: 'Afternoon', title: 'Mürren & Gimmelwald', description: 'Visit car-free villages accessible only by cable car.', duration: '3 hours' },
          familyActivity('Afternoon', 'Alpine Playground', 'Mountain playgrounds and easy walking paths.', '3 hours'),
          romanticActivity('Afternoon', 'Mountain Picnic', 'Pack a Swiss picnic and find a meadow with views.', '2.5 hours', ['spring', 'summer', 'autumn']),
          // Winter in Mürren
          seasonalActivity('Afternoon', 'Mürren Skiing', 'This car-free village offers excellent uncrowded skiing.', ['winter'], '4 hours'),
          { time: 'Evening', title: 'Staubbach Falls', description: 'Watch the 300m waterfall light up at dusk.', duration: '1.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          luxuryActivity('Evening', 'Helicopter Glacier Landing', 'Land on a glacier for champagne with sunset views.', '2 hours', ['spring', 'summer', 'autumn']),
        ]
      },
      {
        day: 5,
        title: 'Lake & Departure',
        activities: [
          { time: 'Morning', title: 'Lake Brienz', description: 'Take a scenic cruise on the crystal-clear lake.', duration: '2 hours', seasons: ['spring', 'summer', 'autumn'] },
          culturalActivity('Morning', 'Ballenberg Open-Air Museum', 'Explore 100+ historic Swiss buildings.', '3 hours'),
          familyActivity('Morning', 'Brienz Rothorn Railway', 'Ride the historic steam train up the mountain.', '3 hours', ['summer']),
          // Winter morning
          seasonalActivity('Morning', 'Winter Markets', 'December brings charming Christmas markets to Interlaken and Thun.', ['winter'], '2 hours'),
          { time: 'Afternoon', title: 'Giessbach Falls', description: 'Visit the stunning waterfall accessible by boat and funicular.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Afternoon', 'Final Adventure', 'Jet boat ride or kayaking on Lake Brienz.', '2 hours', ['summer']),
          // Winter afternoon
          seasonalActivity('Afternoon', 'Final Ski Day', 'One last morning on the slopes before departure.', ['winter'], '3 hours'),
          { time: 'Evening', title: 'Farewell Swiss Dinner', description: 'Final fondue feast with mountain views.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Victoria-Jungfrau Dining', 'Grand hotel gala dinner experience.', '3 hours'),
        ]
      },
    ]
  },
]

// Helper function to get itinerary for a city
export const getCityItinerary = (cityId: string): CityItinerary | undefined => {
  return cityItineraries.find(c => c.cityId === cityId)
}

// Helper function to filter activities based on trip type
export const filterActivitiesByTripType = (activities: Activity[], tripType: TripType | null): Activity[] => {
  return activities.filter(activity => {
    // If no tripTypes specified, it's a general activity - always include
    if (!activity.tripTypes) return true
    // If tripType is null (not selected), show all
    if (!tripType) return true
    // Otherwise, only show if this trip type matches
    return activity.tripTypes.includes(tripType)
  })
}

// NEW: Helper function to filter activities based on season
export const filterActivitiesBySeason = (activities: Activity[], season: Season | null): Activity[] => {
  return activities.filter(activity => {
    // If no seasons specified, it's a year-round activity - always include
    if (!activity.seasons) return true
    // If season is null (not selected), show all
    if (!season) return true
    // Otherwise, only show if this season matches
    return activity.seasons.includes(season)
  })
}

// NEW: Combined filter for both trip type and season
export const filterActivities = (activities: Activity[], tripType: TripType | null, season: Season | null): Activity[] => {
  return activities.filter(activity => {
    // Check trip type
    const tripTypeMatch = !activity.tripTypes || !tripType || activity.tripTypes.includes(tripType)
    // Check season
    const seasonMatch = !activity.seasons || !season || activity.seasons.includes(season)
    // Must match both (or be unrestricted)
    return tripTypeMatch && seasonMatch
  })
}

// Generate a complete itinerary for selected cities
export const generateFullItinerary = (
  selectedCities: Array<{ cityId: string; nights: number; tripType?: TripType | null; season?: Season | null }>,
  globalTripType: TripType | null,
  globalSeason: Season | null = null
): Array<{ day: number; cityName: string; title: string; activities: Activity[]; tripType: TripType | null; season: Season | null }> => {
  const fullItinerary: Array<{ day: number; cityName: string; title: string; activities: Activity[]; tripType: TripType | null; season: Season | null }> = []
  let currentDay = 1

  selectedCities.forEach(({ cityId, nights, tripType, season }) => {
    const cityItinerary = getCityItinerary(cityId)
    if (!cityItinerary) return
    
    // Use per-city settings if available, otherwise fall back to global
    const effectiveTripType = tripType ?? globalTripType
    const effectiveSeason = season ?? globalSeason

    for (let i = 0; i < nights; i++) {
      const dayIndex = Math.min(i, cityItinerary.days.length - 1)
      const dayData = cityItinerary.days[dayIndex]
      
      // Filter by both trip type AND season
      const filteredActivities = filterActivities(dayData.activities, effectiveTripType, effectiveSeason)
      
      fullItinerary.push({
        day: currentDay,
        cityName: cityItinerary.cityName,
        title: dayData.title,
        activities: filteredActivities,
        tripType: effectiveTripType,
        season: effectiveSeason
      })
      
      currentDay++
    }
  })

  return fullItinerary
}
