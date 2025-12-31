import { TripType, Season } from './europeData'

export interface Activity {
  time: 'Morning' | 'Afternoon' | 'Evening'
  title: string
  description: string
  duration?: string
  tripTypes?: TripType[]
  seasons?: Season[]
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

const seasonalActivity = (time: Activity['time'], title: string, description: string, seasons: Season[], duration?: string): Activity => ({
  time, title, description, duration, seasons
})

export const cityItineraries: CityItinerary[] = [
  // PARIS
  {
    cityId: 'paris',
    cityName: 'Paris',
    days: [
      {
        day: 1,
        title: 'Arrival & Eiffel Tower',
        activities: [
          { time: 'Morning', title: 'Arrive in Paris', description: 'Check into your hotel and freshen up. Take a leisurely stroll around your neighborhood.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Eiffel Tower Visit', description: 'Head to the iconic Eiffel Tower. Take the elevator to the top for panoramic views.', duration: '2-3 hours' },
          luxuryActivity('Afternoon', 'VIP Eiffel Tower Access', 'Skip-the-line access with private guide and champagne at the summit.', '3 hours'),
          romanticActivity('Evening', 'Seine River Dinner Cruise', 'Enjoy a magical dinner cruise along the Seine with views of illuminated monuments.', '2.5 hours'),
          familyActivity('Evening', 'Trocadéro Gardens', 'Watch the Eiffel Tower light show from the gardens. Great for kids!', '1.5 hours'),
          { time: 'Evening', title: 'Champ de Mars Picnic', description: 'Wine, cheese, and baguettes for a classic Parisian evening picnic.', duration: '2 hours', seasons: ['spring', 'summer', 'autumn'] },
          seasonalActivity('Evening', 'Cozy Bistro Dinner', 'Classic French onion soup and steak frites at a traditional bistro.', ['winter'], '2 hours'),
        ]
      },
      {
        day: 2,
        title: 'Louvre & Marais District',
        activities: [
          { time: 'Morning', title: 'Louvre Museum', description: 'Explore the world\'s largest art museum. See the Mona Lisa, Venus de Milo.', duration: '3-4 hours' },
          culturalActivity('Morning', 'Guided Art History Tour', 'Deep dive into Renaissance and Classical art with an expert historian.', '4 hours'),
          luxuryActivity('Morning', 'Private Louvre Tour', 'Before-hours access to the museum with your personal art guide.', '3 hours'),
          { time: 'Afternoon', title: 'Le Marais Exploration', description: 'Wander through the historic Jewish Quarter, browse boutiques.', duration: '3 hours' },
          friendsActivity('Afternoon', 'Marais Bar Hopping', 'Discover trendy cocktail bars and cafés in the hip Marais district.', '3 hours'),
          { time: 'Evening', title: 'Place des Vosges', description: 'Dinner at restaurants surrounding Paris\'s oldest planned square.', duration: '2 hours' },
        ]
      },
      {
        day: 3,
        title: 'Montmartre & Sacré-Cœur',
        activities: [
          { time: 'Morning', title: 'Sacré-Cœur Basilica', description: 'Climb to the top of Montmartre hill and visit the stunning white-domed basilica.', duration: '2 hours' },
          adventureActivity('Morning', 'Montmartre Walking Tour', 'Explore hidden passages, vineyard, and artist studios.', '3 hours'),
          { time: 'Afternoon', title: 'Place du Tertre', description: 'Watch artists at work in this famous square. Get your portrait drawn!', duration: '2 hours' },
          familyActivity('Afternoon', 'Montmartre Funicular', 'Take the fun funicular railway up the hill.', '2 hours'),
          romanticActivity('Afternoon', 'Wall of Love', 'Visit the Mur des Je t\'aime featuring "I love you" in 250 languages.', '30 mins'),
          { time: 'Evening', title: 'Moulin Rouge Area', description: 'Explore the historic cabaret district and enjoy dinner in a classic bistro.', duration: '3 hours' },
          luxuryActivity('Evening', 'Moulin Rouge Show', 'Attend the legendary cabaret show with champagne and dinner.', '4 hours'),
          seasonalActivity('Afternoon', 'Vendange de Montmartre', 'In October, join the grape harvest festival.', ['autumn'], '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Versailles Day Trip',
        activities: [
          { time: 'Morning', title: 'Palace of Versailles', description: 'Take a train to Versailles and explore the magnificent palace.', duration: '3-4 hours' },
          culturalActivity('Morning', 'Royal Apartments Tour', 'In-depth tour of the King\'s and Queen\'s private chambers.', '2 hours'),
          luxuryActivity('Morning', 'Private Palace Guide', 'Personal guide with access to restricted areas.', '4 hours'),
          { time: 'Afternoon', title: 'Gardens of Versailles', description: 'Stroll through the stunning formal gardens and fountains.', duration: '3 hours' },
          adventureActivity('Afternoon', 'Bike the Gardens', 'Rent bikes to explore the vast 800-hectare gardens.', '3 hours', ['spring', 'summer', 'autumn']),
          familyActivity('Afternoon', 'Row Boats on Grand Canal', 'Rent a rowboat and paddle along the Grand Canal.', '1.5 hours', ['spring', 'summer', 'autumn']),
          seasonalActivity('Afternoon', 'Musical Fountains Show', 'Spectacular fountain shows set to baroque music.', ['spring', 'summer', 'autumn'], '1.5 hours'),
          { time: 'Evening', title: 'Return to Paris', description: 'Head back to Paris for a relaxed dinner in the Latin Quarter.', duration: '2 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Paris Day',
        activities: [
          { time: 'Morning', title: 'Île de la Cité', description: 'Visit Notre-Dame (exterior), Sainte-Chapelle, and the charming island.', duration: '3 hours' },
          culturalActivity('Morning', 'Sainte-Chapelle Stained Glass', 'Marvel at the 1,113 stained glass panels.', '1.5 hours'),
          { time: 'Afternoon', title: 'Latin Quarter & Panthéon', description: 'Explore the student quarter, visit Shakespeare & Company bookstore.', duration: '3 hours' },
          friendsActivity('Afternoon', 'Café Culture Experience', 'Visit historic cafés like Les Deux Magots.', '2 hours'),
          romanticActivity('Afternoon', 'Luxembourg Gardens', 'Romantic stroll through the beautiful gardens.', '1.5 hours', ['spring', 'summer', 'autumn']),
          { time: 'Evening', title: 'Farewell Dinner', description: 'Memorable final dinner at a classic Parisian restaurant.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Dining', 'Conclude with an unforgettable fine dining experience.', '3 hours'),
          seasonalActivity('Afternoon', 'Christmas Markets', 'Magical Champs-Élysées and Tuileries Christmas markets.', ['winter'], '3 hours'),
          seasonalActivity('Morning', 'Cherry Blossoms at Parc de Sceaux', 'Japanese cherry orchard in full bloom.', ['spring'], '2.5 hours'),
        ]
      },
    ]
  },
  // ROME
  {
    cityId: 'rome',
    cityName: 'Rome',
    days: [
      {
        day: 1,
        title: 'Arrival & Ancient Rome',
        activities: [
          { time: 'Morning', title: 'Arrive in Rome', description: 'Check into your hotel near the historic center.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Colosseum', description: 'Visit the iconic amphitheater where gladiators once fought.', duration: '2-3 hours' },
          luxuryActivity('Afternoon', 'Private Colosseum Tour', 'Access underground chambers and arena floor.', '3 hours'),
          familyActivity('Afternoon', 'Gladiator Experience', 'Kids can learn gladiator moves at a school.', '2 hours'),
          { time: 'Evening', title: 'Roman Forum at Sunset', description: 'Walk through the heart of ancient Rome.', duration: '1.5 hours' },
          romanticActivity('Evening', 'Rooftop Aperitivo', 'Sip Aperol spritz with Roman Forum views.', '2 hours'),
          seasonalActivity('Evening', 'Summer Night Opening', 'Colosseum nighttime visits in summer.', ['summer'], '2 hours'),
        ]
      },
      {
        day: 2,
        title: 'Vatican City',
        activities: [
          { time: 'Morning', title: 'Vatican Museums & Sistine Chapel', description: 'Marvel at Michelangelo\'s ceiling. Arrive early!', duration: '3-4 hours' },
          culturalActivity('Morning', 'Expert Vatican Guide', 'Art historian leads through highlights.', '4 hours'),
          luxuryActivity('Morning', 'VIP Early Entry', 'Enter before general public.', '4 hours'),
          { time: 'Afternoon', title: 'St. Peter\'s Basilica', description: 'World\'s largest church, see Michelangelo\'s Pietà.', duration: '2-3 hours' },
          adventureActivity('Afternoon', 'Dome Climb', 'Climb 551 steps to the top of St. Peter\'s dome.', '1.5 hours'),
          { time: 'Evening', title: 'Trastevere Dinner', description: 'Cross the Tiber to Rome\'s most charming neighborhood.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Trastevere Bar Crawl', 'Discover local bars and live music.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Baroque Rome & Fountains',
        activities: [
          { time: 'Morning', title: 'Trevi Fountain', description: 'Toss a coin to ensure your return to Rome. Visit early!', duration: '45 mins' },
          romanticActivity('Morning', 'Sunrise at Trevi', 'Experience the fountain at dawn.', '1 hour'),
          { time: 'Morning', title: 'Pantheon', description: 'The best-preserved ancient Roman building.', duration: '1 hour' },
          culturalActivity('Morning', 'Ancient Architecture Tour', 'Understand Roman engineering genius.', '2.5 hours'),
          { time: 'Afternoon', title: 'Piazza Navona', description: 'Admire Bernini\'s fountains in a beautiful square.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Spanish Steps', description: 'Climb the famous steps and explore designer shopping.', duration: '1.5 hours' },
          luxuryActivity('Afternoon', 'Designer Shopping Tour', 'Personal shopper through Via Condotti.', '3 hours'),
          { time: 'Evening', title: 'Campo de\' Fiori', description: 'Enjoy dinner in this lively square.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Hidden Rome & Food',
        activities: [
          { time: 'Morning', title: 'Borghese Gallery', description: 'See Bernini sculptures and Caravaggio paintings.', duration: '2 hours' },
          { time: 'Morning', title: 'Villa Borghese Gardens', description: 'Rent a rowboat on the lake or explore the park.', duration: '1.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          familyActivity('Morning', 'Villa Borghese Zoo', 'Bioparco di Roma is fun for kids.', '2.5 hours'),
          { time: 'Afternoon', title: 'Testaccio Food Tour', description: 'Explore Rome\'s foodie neighborhood.', duration: '3 hours' },
          adventureActivity('Afternoon', 'Street Food by Vespa', 'Tour Rome\'s best food spots on a Vespa.', '3.5 hours'),
          friendsActivity('Afternoon', 'Wine & Food Pairing', 'Italian wines paired with Roman specialties.', '3 hours'),
          { time: 'Evening', title: 'Trastevere Evening', description: 'Return to Trastevere for dinner.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Private Cooking Class', 'Learn fresh pasta with a Roman chef.', '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Day Trip or Final Explorations',
        activities: [
          { time: 'Morning', title: 'Appian Way', description: 'Explore the ancient Roman road with catacombs and ruins.', duration: '3 hours' },
          adventureActivity('Morning', 'Bike the Appian Way', 'Cycle the ancient cobblestones past aqueducts.', '4 hours'),
          culturalActivity('Morning', 'Catacombs Tour', 'Descend into ancient Christian burial tunnels.', '2 hours'),
          { time: 'Afternoon', title: 'Ostia Antica', description: 'Visit the remarkably preserved ancient Roman port city.', duration: '4 hours' },
          familyActivity('Afternoon', 'Ostia Beach Day', 'Combine ruins with a beach visit.', '5 hours', ['summer']),
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final cacio e pepe and tiramisu.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Finale', 'World-class Italian fine dining.', '3 hours'),
          seasonalActivity('Afternoon', 'Christmas in Rome', 'Nativity scenes and Christmas markets.', ['winter'], '3 hours'),
        ]
      },
    ]
  },
  // BARCELONA
  {
    cityId: 'barcelona',
    cityName: 'Barcelona',
    days: [
      {
        day: 1,
        title: 'Arrival & Gothic Quarter',
        activities: [
          { time: 'Morning', title: 'Arrive in Barcelona', description: 'Check into your hotel and enjoy a café con leche.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Gothic Quarter', description: 'Wander medieval streets, visit the Cathedral.', duration: '3 hours' },
          culturalActivity('Afternoon', 'Roman Barcelona Tour', 'Discover ancient Roman ruins beneath the Gothic Quarter.', '2.5 hours'),
          { time: 'Evening', title: 'La Rambla', description: 'Stroll down Barcelona\'s famous boulevard.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Tapas Dinner', description: 'First tapas experience - patatas bravas, jamón, croquetas.', duration: '2 hours' },
          friendsActivity('Evening', 'El Born Bar Scene', 'Discover craft cocktail bars.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Gaudí Masterpieces',
        activities: [
          { time: 'Morning', title: 'Sagrada Familia', description: 'Visit Gaudí\'s unfinished masterpiece. Book in advance!', duration: '2-3 hours' },
          luxuryActivity('Morning', 'Private Gaudí Expert Tour', 'Architecture specialist reveals hidden symbolism.', '3 hours'),
          { time: 'Afternoon', title: 'Park Güell', description: 'Explore Gaudí\'s whimsical park with mosaic sculptures.', duration: '2 hours' },
          familyActivity('Afternoon', 'Park Güell Treasure Hunt', 'Kids search for hidden details.', '2.5 hours'),
          { time: 'Afternoon', title: 'Casa Batlló or Casa Milà', description: 'Visit Gaudí\'s residential masterpieces.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Gràcia Neighborhood', description: 'Dine in the bohemian district.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Rooftop Dinner', 'Dine with illuminated Sagrada Familia views.', '2.5 hours'),
          seasonalActivity('Evening', 'Festa Major de Gràcia', 'August street decorations competition.', ['summer'], '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Beach & Barceloneta',
        activities: [
          { time: 'Morning', title: 'Barceloneta Beach', description: 'Relax on Barcelona\'s most famous beach.', duration: '3 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Morning', 'Paddleboard or Kayak', 'Paddle along the coastline.', '2 hours', ['spring', 'summer', 'autumn']),
          familyActivity('Morning', 'Barcelona Aquarium', 'Walk through the underwater tunnel.', '2.5 hours'),
          seasonalActivity('Morning', 'Winter Art Walk', 'Explore MACBA and CCCB museums instead.', ['winter'], '3 hours'),
          { time: 'Afternoon', title: 'La Boqueria Market', description: 'Browse the famous market\'s colorful stalls.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Barceloneta Seafood', description: 'Fresh grilled fish and sangria at beachfront.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Sunset Yacht Charter', 'Private sailing with champagne.', '3 hours', ['spring', 'summer', 'autumn']),
        ]
      },
      {
        day: 4,
        title: 'Montjuïc & Art',
        activities: [
          { time: 'Morning', title: 'Montjuïc Castle', description: 'Take the cable car up to the historic fortress.', duration: '2 hours' },
          adventureActivity('Morning', 'Montjuïc Hiking', 'Hike up through gardens.', '2.5 hours'),
          { time: 'Afternoon', title: 'Fundació Joan Miró', description: 'Explore Barcelona\'s surrealist master.', duration: '2 hours' },
          culturalActivity('Afternoon', 'MNAC (National Art Museum)', 'Romanesque frescoes and Catalan modernisme.', '2.5 hours'),
          familyActivity('Afternoon', 'Poble Espanyol', 'Open-air museum recreating Spanish villages.', '2.5 hours'),
          { time: 'Evening', title: 'Magic Fountain Show', description: 'Light, music, and water show at Font Màgica.', duration: '1 hour', seasons: ['spring', 'summer', 'autumn'] },
          romanticActivity('Evening', 'Dinner at Tibidabo', 'Mountaintop restaurant with city views.', '3 hours'),
          seasonalActivity('Evening', 'Sant Joan Festival', 'June 23rd - biggest party with bonfires and fireworks.', ['summer'], '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Day Trip or Final Explorations',
        activities: [
          { time: 'Morning', title: 'Montserrat Day Trip', description: 'Visit the sacred mountain monastery.', duration: '5-6 hours' },
          adventureActivity('Morning', 'Montserrat Hiking', 'Hike the Sant Joan trail.', '4 hours'),
          romanticActivity('Morning', 'Wine Country Trip', 'Visit Penedès wine region for cava tastings.', '5 hours'),
          culturalActivity('Morning', 'Figueres & Dalí Museum', 'Day trip to Dalí\'s surrealist museum.', '6 hours'),
          familyActivity('Morning', 'PortAventura Theme Park', 'Spain\'s largest theme park.', '8 hours', ['spring', 'summer', 'autumn']),
          { time: 'Afternoon', title: 'Final Shopping', description: 'Browse Passeig de Gràcia boutiques.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Farewell Flamenco', description: 'Authentic flamenco show and dinner.', duration: '3 hours' },
          luxuryActivity('Evening', 'Starred Restaurant Finale', 'Catalan creativity at a Michelin restaurant.', '3 hours'),
          seasonalActivity('Afternoon', 'La Mercè Festival', 'September - biggest festival with human towers.', ['autumn'], '4 hours'),
        ]
      },
    ]
  },
  // AMSTERDAM
  {
    cityId: 'amsterdam',
    cityName: 'Amsterdam',
    days: [
      {
        day: 1,
        title: 'Arrival & Canal District',
        activities: [
          { time: 'Morning', title: 'Arrive in Amsterdam', description: 'Check into your canal-side hotel.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Canal Belt Walk', description: 'Explore the UNESCO-listed canal ring.', duration: '2.5 hours' },
          romanticActivity('Afternoon', 'Canal Cruise', 'Glide through the canals on a private boat.', '1.5 hours'),
          { time: 'Evening', title: 'Jordaan Neighborhood', description: 'Explore charming galleries, boutiques, and brown cafés.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Brown Café Crawl', 'Sample Dutch beers in traditional pubs.', '3 hours'),
          luxuryActivity('Evening', 'Private Dining Cruise', 'Michelin-quality dinner on illuminated canals.', '3 hours'),
          seasonalActivity('Afternoon', 'Tulip Season Canals', 'Spring brings tulip boxes on canal houses.', ['spring'], '2 hours'),
        ]
      },
      {
        day: 2,
        title: 'Museums & Culture',
        activities: [
          { time: 'Morning', title: 'Rijksmuseum', description: 'See Rembrandt\'s Night Watch and Vermeer masterpieces.', duration: '3 hours' },
          culturalActivity('Morning', 'Dutch Golden Age Tour', 'Expert guide brings 17th-century art to life.', '3.5 hours'),
          luxuryActivity('Morning', 'Private Museum Tour', 'Before-hours access with art historian.', '3 hours'),
          { time: 'Afternoon', title: 'Van Gogh Museum', description: 'World\'s largest Van Gogh collection.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'NEMO Science Museum', 'Interactive science experiments for kids.', '3 hours'),
          { time: 'Evening', title: 'Leidseplein', description: 'Dinner and nightlife in entertainment square.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Concert at Concertgebouw', 'World-class acoustics for classical music.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'History & Local Life',
        activities: [
          { time: 'Morning', title: 'Anne Frank House', description: 'Visit the moving hiding place. Book months ahead!', duration: '1.5 hours' },
          culturalActivity('Morning', 'Jewish Heritage Walk', 'Amsterdam\'s Jewish history including Portuguese Synagogue.', '3 hours'),
          { time: 'Afternoon', title: 'Albert Cuyp Market', description: 'Amsterdam\'s largest street market.', duration: '2 hours' },
          { time: 'Afternoon', title: 'De Pijp Neighborhood', description: 'Trendy multicultural area with great food.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Beer Tasting Tour', 'Sample craft beers at local breweries.', '3 hours'),
          adventureActivity('Afternoon', 'Bike Like a Local', 'Rent bikes and cycle to hidden spots.', '3 hours'),
          { time: 'Evening', title: 'Indonesian Rijsttafel', description: 'Dutch-Indonesian feast with dozens of dishes.', duration: '2.5 hours' },
          seasonalActivity('Morning', 'King\'s Day (April 27)', 'Biggest street party in Europe.', ['spring'], '6 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip',
        activities: [
          { time: 'Morning', title: 'Zaanse Schans', description: 'Visit working windmills and wooden shoe workshops.', duration: '4 hours' },
          familyActivity('Morning', 'Windmill Visit', 'Tour inside a working windmill.', '1 hour'),
          { time: 'Afternoon', title: 'Keukenhof Gardens', description: 'World\'s largest flower garden with millions of tulips.', duration: '4 hours', seasons: ['spring'] },
          romanticActivity('Afternoon', 'Tulip Farm Visit', 'Cycle through endless colorful tulip fields.', '4 hours', ['spring']),
          adventureActivity('Afternoon', 'Giethoorn Boat Trip', 'Explore the "Venice of the North".', '6 hours'),
          seasonalActivity('Afternoon', 'Beach Day at Zandvoort', 'Take the train to the beach town.', ['summer'], '5 hours'),
          seasonalActivity('Afternoon', 'Skating on Canals', 'In rare cold winters, skate on frozen canals.', ['winter'], '3 hours'),
          { time: 'Evening', title: 'Return to Amsterdam', description: 'Dinner in the Nine Streets shopping district.', duration: '2.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Explorations',
        activities: [
          { time: 'Morning', title: 'Stedelijk Museum', description: 'Modern art from Mondrian to Warhol.', duration: '2 hours' },
          adventureActivity('Morning', 'A\'DAM Lookout Swing', 'Europe\'s highest swing over the edge.', '1.5 hours'),
          { time: 'Morning', title: 'NDSM Wharf', description: 'Creative industrial area with street art.', duration: '2 hours' },
          familyActivity('Morning', 'Artis Zoo', 'One of Europe\'s oldest zoos.', '3 hours'),
          { time: 'Afternoon', title: 'Final Canal Walk', description: 'Revisit favorite canals.', duration: '2 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Dutch dinner with herring and bitterballen.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Night Canal Cruise', 'See the UNESCO bridges illuminated.', '2 hours'),
          seasonalActivity('Evening', 'Amsterdam Light Festival', 'November-January light art installations.', ['winter'], '2 hours'),
        ]
      },
    ]
  },
  // LONDON
  {
    cityId: 'london',
    cityName: 'London',
    days: [
      {
        day: 1,
        title: 'Arrival & Royal London',
        activities: [
          { time: 'Morning', title: 'Arrive in London', description: 'Check into your hotel and enjoy English breakfast.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Buckingham Palace', description: 'Watch the Changing of the Guard (check schedule).', duration: '2 hours' },
          luxuryActivity('Afternoon', 'Royal State Rooms', 'Tour inside Buckingham Palace (summer only).', '2.5 hours', ['summer']),
          { time: 'Afternoon', title: 'Westminster', description: 'See Big Ben, Westminster Abbey, Houses of Parliament.', duration: '2 hours' },
          culturalActivity('Afternoon', 'Westminster Abbey Tour', 'Explore 1,000 years of royal history.', '1.5 hours'),
          { time: 'Evening', title: 'South Bank Walk', description: 'Stroll along the Thames past London Eye.', duration: '2 hours' },
          romanticActivity('Evening', 'Thames Dinner Cruise', 'Dine on the river with illuminated views.', '2.5 hours'),
          familyActivity('Evening', 'London Eye', 'Sunset ride for panoramic views.', '1 hour'),
        ]
      },
      {
        day: 2,
        title: 'British Museum & History',
        activities: [
          { time: 'Morning', title: 'British Museum', description: 'World treasures from Rosetta Stone to Elgin Marbles. Free!', duration: '3 hours' },
          culturalActivity('Morning', 'Egyptian Collection Tour', 'Deep dive into mummies with an Egyptologist.', '2.5 hours'),
          { time: 'Afternoon', title: 'Covent Garden', description: 'Watch street performers and browse unique shops.', duration: '2 hours' },
          familyActivity('Afternoon', 'London Transport Museum', 'Climb aboard vintage buses and trains.', '2 hours'),
          friendsActivity('Afternoon', 'Soho Exploration', 'Eclectic bars, record shops, global cuisines.', '2.5 hours'),
          { time: 'Evening', title: 'West End Show', description: 'World-class musical or play.', duration: '3 hours' },
          luxuryActivity('Evening', 'Pre-Theatre Dinner', 'Fine dining near the theatre.', '2 hours'),
          romanticActivity('Evening', 'Cocktails at The Shard', 'Drinks at Europe\'s tallest building.', '2 hours'),
        ]
      },
      {
        day: 3,
        title: 'Tower & East London',
        activities: [
          { time: 'Morning', title: 'Tower of London', description: 'See the Crown Jewels and hear Yeoman Warder tales.', duration: '3 hours' },
          culturalActivity('Morning', 'Beefeater Tour', 'Famous guards bring history to life.', '1.5 hours'),
          luxuryActivity('Morning', 'Private Opening', 'Access before crowds with VIP guide.', '3 hours'),
          { time: 'Afternoon', title: 'Tower Bridge', description: 'Walk across the glass floor.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Borough Market', description: 'Sample artisan foods at London\'s best market.', duration: '2 hours' },
          adventureActivity('Afternoon', 'East End Street Art Tour', 'Discover Banksy in Shoreditch.', '2.5 hours'),
          friendsActivity('Afternoon', 'Shoreditch Bar Hopping', 'Craft cocktail scene in London\'s coolest area.', '3 hours'),
          { time: 'Evening', title: 'Brick Lane', description: 'Choose from countless curry houses.', duration: '2 hours' },
        ]
      },
      {
        day: 4,
        title: 'Museums & Parks',
        activities: [
          { time: 'Morning', title: 'Natural History Museum', description: 'See dinosaurs and stunning Victorian architecture. Free!', duration: '2.5 hours' },
          familyActivity('Morning', 'Science Museum', 'Interactive exhibits and IMAX theatre.', '3 hours'),
          { time: 'Afternoon', title: 'Hyde Park', description: 'Row boats on the Serpentine, visit Kensington Palace.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          romanticActivity('Afternoon', 'Afternoon Tea', 'Classic high tea at Claridge\'s or The Ritz.', '2 hours'),
          adventureActivity('Afternoon', 'Kensington Cycling', 'Rent bikes and explore royal parks.', '2.5 hours'),
          seasonalActivity('Afternoon', 'Winter Wonderland', 'Massive Christmas fair in Hyde Park.', ['winter'], '4 hours'),
          { time: 'Evening', title: 'Notting Hill', description: 'Colorful houses and great restaurants.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Private Chef Dinner', 'In-home fine dining in historic townhouse.', '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Day Trip or Neighborhoods',
        activities: [
          { time: 'Morning', title: 'Stonehenge Day Trip', description: 'Visit the mysterious prehistoric monument.', duration: '6 hours' },
          culturalActivity('Morning', 'Bath & Stonehenge', 'Combine Stonehenge with Georgian Bath.', '8 hours'),
          familyActivity('Morning', 'Harry Potter Studios', 'Behind-the-scenes at actual film sets. Book ahead!', '6 hours'),
          adventureActivity('Morning', 'Windsor Castle', 'Explore the Queen\'s weekend home.', '4 hours'),
          { time: 'Afternoon', title: 'Camden Market', description: 'Eclectic stalls and international street food.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Classic British fare at a traditional pub.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Finale', 'End at a celebrated restaurant.', '3 hours'),
          seasonalActivity('Evening', 'Christmas Lights', 'December displays on Oxford and Regent Streets.', ['winter'], '2 hours'),
        ]
      },
    ]
  },
  // PRAGUE
  {
    cityId: 'prague',
    cityName: 'Prague',
    days: [
      {
        day: 1,
        title: 'Arrival & Old Town',
        activities: [
          { time: 'Morning', title: 'Arrive in Prague', description: 'Check into your hotel and enjoy Czech coffee and cake.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Old Town Square', description: 'Watch the Astronomical Clock chime.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Jewish Quarter', description: 'Visit historic synagogues and Old Jewish Cemetery.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Traditional Czech Dinner', description: 'Try svíčková and fresh Czech beer.', duration: '2 hours' },
          friendsActivity('Evening', 'Beer Hall Experience', 'Sample Czech pilsners at traditional halls.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Prague Castle District',
        activities: [
          { time: 'Morning', title: 'Prague Castle', description: 'Explore the world\'s largest ancient castle complex.', duration: '3-4 hours' },
          { time: 'Morning', title: 'St. Vitus Cathedral', description: 'Marvel at the Gothic masterpiece.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Golden Lane', description: 'Stroll the colorful medieval street.', duration: '45 mins' },
          romanticActivity('Afternoon', 'Wallenstein Garden', 'Baroque gardens with free-roaming peacocks.', '1 hour', ['spring', 'summer', 'autumn']),
          { time: 'Evening', title: 'Riverside Dinner', description: 'Dine with views of Charles Bridge.', duration: '2.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'Charles Bridge & River',
        activities: [
          { time: 'Morning', title: 'Charles Bridge at Dawn', description: 'Experience the Gothic bridge without crowds.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Petřín Hill', description: 'Ride the funicular to gardens and mini Eiffel Tower.', duration: '2 hours' },
          familyActivity('Morning', 'Mirror Maze', 'Kids love this funhouse on Petřín.', '45 mins'),
          { time: 'Afternoon', title: 'Vltava River Cruise', description: 'See Prague from the water.', duration: '2 hours' },
          { time: 'Evening', title: 'Opera or Concert', description: 'Classical music at the Estates Theatre.', duration: '3 hours' },
          seasonalActivity('Evening', 'Christmas Markets', 'Magical markets at Old Town Square.', ['winter'], '2.5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Beyond the Center',
        activities: [
          { time: 'Morning', title: 'Vyšehrad Fortress', description: 'Ancient fortress with great views.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Vinohrady Neighborhood', description: 'Trendy area with art nouveau buildings.', duration: '2.5 hours' },
          friendsActivity('Afternoon', 'Craft Beer Tour', 'Sample Czech craft beers.', '3 hours'),
          { time: 'Evening', title: 'Žižkov', description: 'Bohemian neighborhood with quirky bars.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Beer Garden Season', 'Summer outdoor beer gardens.', ['summer'], '3 hours'),
        ]
      },
      {
        day: 5,
        title: 'Day Trip or Final Explorations',
        activities: [
          { time: 'Morning', title: 'Kutná Hora Day Trip', description: 'Visit the Bone Church and Gothic cathedral.', duration: '5 hours' },
          culturalActivity('Morning', 'Karlštejn Castle', 'Fairy-tale Gothic castle.', '5 hours'),
          adventureActivity('Morning', 'Bohemian Switzerland', 'Hike to stunning rock formations.', '8 hours'),
          { time: 'Afternoon', title: 'Mucha Museum', description: 'Art Nouveau master\'s works.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final Czech feast with duck, dumplings, and beer.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Easter Markets', 'Spring brings colorful Easter markets.', ['spring'], '2 hours'),
        ]
      },
    ]
  },
  // VIENNA
  {
    cityId: 'vienna',
    cityName: 'Vienna',
    days: [
      {
        day: 1,
        title: 'Arrival & Imperial Vienna',
        activities: [
          { time: 'Morning', title: 'Arrive in Vienna', description: 'Check in and enjoy Sachertorte.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Schönbrunn Palace', description: 'Tour the Habsburg summer residence.', duration: '3-4 hours' },
          familyActivity('Afternoon', 'Maze & Zoo', 'Hedge maze and world\'s oldest zoo.', '3 hours'),
          { time: 'Evening', title: 'Naschmarkt', description: 'Vienna\'s famous market for dinner.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Wine Tavern (Heuriger)', 'Sample local wines at traditional tavern.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Art & Culture',
        activities: [
          { time: 'Morning', title: 'Kunsthistorisches Museum', description: 'World-class art collection.', duration: '3 hours' },
          { time: 'Afternoon', title: 'Belvedere Palace', description: 'See Klimt\'s "The Kiss".', duration: '2.5 hours' },
          romanticActivity('Afternoon', 'Klimt & Schiele Tour', 'Explore Vienna\'s modernist artists.', '3 hours'),
          { time: 'Evening', title: 'Vienna State Opera', description: 'World-class opera or standing room tickets.', '3.5 hours' },
          seasonalActivity('Evening', 'Ball Season', 'Winter brings Vienna\'s famous balls.', ['winter'], '5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Historic Center',
        activities: [
          { time: 'Morning', title: 'St. Stephen\'s Cathedral', description: 'Climb the tower for city views.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Hofburg Palace', description: 'Imperial winter residence and Sisi Museum.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Spanish Riding School', description: 'Famous Lipizzaner horses perform.', duration: '2 hours' },
          { time: 'Evening', title: 'Traditional Viennese Dinner', description: 'Wiener Schnitzel and apple strudel.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Music & Local Life',
        activities: [
          { time: 'Morning', title: 'Haus der Musik', description: 'Interactive sound museum.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Prater Park', description: 'Ride the historic Ferris wheel.', duration: '2.5 hours' },
          romanticActivity('Afternoon', 'Ferris Wheel at Sunset', 'Golden hour views over Vienna.', '1 hour'),
          { time: 'Evening', title: 'Spittelberg Quarter', description: 'Charming neighborhood with boutiques.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Christmas Markets', 'Vienna\'s magical markets.', ['winter'], '3 hours'),
        ]
      },
      {
        day: 5,
        title: 'Day Trip or Farewell',
        activities: [
          { time: 'Morning', title: 'Wachau Valley Day Trip', description: 'Cruise the Danube past vineyards.', duration: '6 hours' },
          romanticActivity('Morning', 'Wine Tasting Cruise', 'Sample Grüner Veltliner on the river.', '7 hours'),
          adventureActivity('Morning', 'Danube Cycling', 'Bike along the scenic valley.', '6 hours', ['spring', 'summer', 'autumn']),
          { time: 'Evening', title: 'Farewell Coffeehouse', description: 'End at legendary Café Central.', duration: '2 hours' },
          luxuryActivity('Evening', 'Private Concert', 'Chamber music in a historic palace.', '3 hours'),
          seasonalActivity('Evening', 'Summer Night Concert', 'Free open-air Vienna Philharmonic at Schönbrunn.', ['summer'], '2.5 hours'),
        ]
      },
    ]
  },
  // FLORENCE
  {
    cityId: 'florence',
    cityName: 'Florence',
    days: [
      {
        day: 1,
        title: 'Arrival & Duomo',
        activities: [
          { time: 'Morning', title: 'Arrive in Florence', description: 'Check in and grab espresso and cornetto.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Duomo Complex', description: 'Marvel at the iconic cathedral dome.', duration: '3 hours' },
          adventureActivity('Afternoon', 'Climb the Dome', 'Ascend 463 steps for up-close views.', '1.5 hours'),
          { time: 'Evening', title: 'Piazza della Signoria', description: 'Admire outdoor sculptures and have aperitivo.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Tuscan Dinner', description: 'Bistecca alla fiorentina and chianti.', duration: '2.5 hours' },
        ]
      },
      {
        day: 2,
        title: 'Uffizi & Renaissance Art',
        activities: [
          { time: 'Morning', title: 'Uffizi Gallery', description: 'See Botticelli\'s Birth of Venus.', duration: '3-4 hours' },
          luxuryActivity('Morning', 'Private Uffizi Tour', 'Skip-the-line with art historian.', '4 hours'),
          { time: 'Afternoon', title: 'Ponte Vecchio', description: 'Stroll the iconic medieval bridge.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Pitti Palace', description: 'Grand Medici palace and Boboli Gardens.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Santo Spirito', description: 'Authentic neighborhood away from tourists.', duration: '2.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'Michelangelo & Views',
        activities: [
          { time: 'Morning', title: 'Accademia Gallery', description: 'See Michelangelo\'s David.', duration: '2 hours' },
          { time: 'Morning', title: 'San Lorenzo', description: 'Visit the Medici Chapels.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Piazzale Michelangelo', description: 'Panoramic city views.', duration: '1.5 hours' },
          romanticActivity('Afternoon', 'Sunset at Piazzale', 'Watch the sun set over Florence.', '2 hours'),
          { time: 'Evening', title: 'Dinner at Piazzale', description: 'Dine at the restaurants near the viewpoint.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Tuscany Day Trip',
        activities: [
          { time: 'Morning', title: 'Chianti Wine Region', description: 'Visit wineries and medieval villages.', duration: '6 hours' },
          romanticActivity('Morning', 'Couples Wine Tour', 'Private tasting with lunch in a castle.', '6 hours'),
          culturalActivity('Morning', 'Siena Day Trip', 'Explore the medieval rival city.', '5 hours'),
          adventureActivity('Morning', 'Vespa Tour', 'Explore Tuscan countryside on vintage Vespas.', '6 hours'),
          { time: 'Evening', title: 'Trattoria Dinner', description: 'Handmade pasta at neighborhood trattoria.', duration: '2.5 hours' },
          seasonalActivity('Morning', 'Truffle Hunting', 'Autumn truffle season - join a hunt!', ['autumn'], '5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Final Florentine Moments',
        activities: [
          { time: 'Morning', title: 'Central Market', description: 'Browse the historic food market.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Santa Croce', description: 'Tombs of Michelangelo and Galileo.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Final Gelato Quest', description: 'Compare the city\'s best gelaterias.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final feast of Florentine specialties.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Arno Riverside', 'Evening stroll as lights reflect on water.', '1.5 hours'),
        ]
      },
    ]
  },
  // VENICE
  {
    cityId: 'venice',
    cityName: 'Venice',
    days: [
      {
        day: 1,
        title: 'Arrival & St. Mark\'s',
        activities: [
          { time: 'Morning', title: 'Arrive in Venice', description: 'Take the vaporetto through the Grand Canal.', duration: '1-2 hours' },
          luxuryActivity('Morning', 'Water Taxi Arrival', 'Private boat transfer to your hotel.', '45 mins'),
          { time: 'Afternoon', title: 'St. Mark\'s Square', description: 'Experience Venice\'s magnificent main piazza.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Doge\'s Palace', description: 'Tour the Gothic palace and Bridge of Sighs.', duration: '2 hours' },
          { time: 'Evening', title: 'Bacaro Crawl', description: 'Hop between bars for cicchetti and wine.', duration: '2.5 hours' },
          seasonalActivity('Evening', 'Carnival Mask Shopping', 'February shops display elaborate masks.', ['winter'], '1.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Grand Canal & Islands',
        activities: [
          { time: 'Morning', title: 'Grand Canal Vaporetto', description: 'Take Line 1 slowly down the Grand Canal.', duration: '1 hour' },
          romanticActivity('Morning', 'Private Gondola Ride', 'Glide through quiet back canals.', '45 mins'),
          { time: 'Afternoon', title: 'Murano Island', description: 'Watch glass-blowing demonstrations.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Burano Island', description: 'Explore the colorful fishing village.', duration: '2 hours' },
          { time: 'Evening', title: 'Return to Venice', description: 'Waterside dining in the main islands.', duration: '2.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'Hidden Venice',
        activities: [
          { time: 'Morning', title: 'Dorsoduro Quarter', description: 'Explore the quieter artistic neighborhood.', duration: '2.5 hours' },
          { time: 'Morning', title: 'Peggy Guggenheim Collection', description: 'Modern art in Grand Canal palazzo.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Kayak Venice', 'Paddle through canals for unique perspective.', '2 hours'),
          { time: 'Afternoon', title: 'San Polo & Santa Croce', description: 'Get lost in narrow streets.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Campo Santa Margherita', description: 'Join students and locals in this lively square.', duration: '2.5 hours' },
          seasonalActivity('Morning', 'Venice Carnival', 'February brings elaborate costumes.', ['winter'], '5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Art & Architecture',
        activities: [
          { time: 'Morning', title: 'Scuola Grande di San Rocco', description: 'Tintoretto\'s spectacular ceiling paintings.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Frari Basilica', description: 'Titian\'s masterpiece in a Gothic church.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Jewish Ghetto', description: 'Explore the world\'s first ghetto.', duration: '2 hours' },
          { time: 'Evening', title: 'Cannaregio Dinner', description: 'Dine in this authentic neighborhood.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Opera at La Fenice', 'World-class opera in legendary theatre.', '3.5 hours'),
          seasonalActivity('Evening', 'Redentore Festival', 'July fireworks and floating bridges.', ['summer'], '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Final Venetian Moments',
        activities: [
          { time: 'Morning', title: 'Lido Island', description: 'Escape to the beach island.', duration: '3 hours', seasons: ['summer'] },
          culturalActivity('Morning', 'Torcello Island', 'Venice\'s original island with Byzantine mosaics.', '3 hours'),
          { time: 'Afternoon', title: 'Final Wandering', description: 'Get lost one more time in the labyrinth.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Farewell Seafood', description: 'Final feast of frutti di mare.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Film Festival', 'September brings celebrities to Lido.', ['autumn'], '4 hours'),
        ]
      },
    ]
  },
  // SANTORINI
  {
    cityId: 'santorini',
    cityName: 'Santorini',
    days: [
      {
        day: 1,
        title: 'Arrival & Oia',
        activities: [
          { time: 'Morning', title: 'Arrive in Santorini', description: 'Settle in and take in the caldera views.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Oia Exploration', description: 'Wander the iconic white-washed streets.', duration: '3 hours' },
          { time: 'Evening', title: 'Oia Sunset', description: 'Watch the world-famous sunset from the castle ruins.', duration: '2 hours' },
          friendsActivity('Evening', 'Sunset Cocktails', 'Sip cocktails at a cliffside bar.', '2.5 hours'),
          seasonalActivity('Afternoon', 'Off-Season Tranquility', 'Experience Oia without crowds.', ['winter'], '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Caldera & Volcano',
        activities: [
          { time: 'Morning', title: 'Catamaran Cruise', description: 'Sail around the caldera with swimming stops.', duration: '5 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Morning', 'Volcano Hike', 'Climb the active volcano and swim in hot springs.', '3 hours'),
          seasonalActivity('Morning', 'Museum & History Day', 'Visit Prehistoric Thera Museum.', ['winter'], '3 hours'),
          { time: 'Afternoon', title: 'Hot Springs', description: 'Swim in the volcanic hot springs.', duration: '1 hour', seasons: ['spring', 'summer', 'autumn'] },
          { time: 'Evening', title: 'Fira Town', description: 'Explore the capital with caldera views.', duration: '3 hours' },
          romanticActivity('Evening', 'Cliffside Dinner', 'Romantic dinner overlooking the caldera.', '2.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Wine & Villages',
        activities: [
          { time: 'Morning', title: 'Wine Tasting Tour', description: 'Sample Assyrtiko and volcanic wines.', duration: '4 hours' },
          seasonalActivity('Morning', 'Grape Harvest Experience', 'September grape harvest at local vineyard.', ['autumn'], '4 hours'),
          { time: 'Afternoon', title: 'Pyrgos Village', description: 'Explore the highest village with castle ruins.', duration: '2 hours' },
          { time: 'Evening', title: 'Traditional Taverna', description: 'Grilled octopus and fava at a village restaurant.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Beach Day',
        activities: [
          { time: 'Morning', title: 'Red Beach', description: 'Visit the dramatic red volcanic beach.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          { time: 'Afternoon', title: 'Perissa Black Beach', description: 'Relax on the long black sand beach.', duration: '3 hours', seasons: ['spring', 'summer', 'autumn'] },
          seasonalActivity('Morning', 'Ancient Akrotiri', 'Explore "Minoan Pompeii" without summer crowds.', ['winter'], '2.5 hours'),
          seasonalActivity('Afternoon', 'Hiking the Caldera', 'Cool weather makes Fira to Oia hike pleasant.', ['winter', 'spring', 'autumn'], '3 hours'),
          { time: 'Evening', title: 'Kamari Seaside Dinner', description: 'Fresh fish on the black sand beach.', duration: '2.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Moments',
        activities: [
          { time: 'Morning', title: 'Akrotiri Archaeological Site', description: 'Ancient city preserved by volcanic ash.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Lighthouse Walk', description: 'Hike to the southwestern lighthouse.', duration: '2 hours' },
          { time: 'Evening', title: 'Farewell Sunset', description: 'Watch your final Santorini sunset.', duration: '2 hours' },
          seasonalActivity('Evening', 'Easter Celebrations', 'Greek Orthodox Easter with midnight services.', ['spring'], '4 hours'),
        ]
      },
    ]
  },
  // ATHENS
  {
    cityId: 'athens',
    cityName: 'Athens',
    days: [
      {
        day: 1,
        title: 'Arrival & Acropolis',
        activities: [
          { time: 'Morning', title: 'Arrive in Athens', description: 'Check into your hotel near the historic center.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Acropolis', description: 'Visit the Parthenon and ancient temples.', duration: '3 hours' },
          culturalActivity('Afternoon', 'Expert Archaeology Tour', 'Classics professor brings ancient Athens to life.', '3.5 hours'),
          seasonalActivity('Afternoon', 'Early Morning Visit', 'In summer, beat the heat by arriving at opening.', ['summer'], '2.5 hours'),
          { time: 'Evening', title: 'Plaka District', description: 'Stroll the charming neighborhood.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Rooftop Acropolis View', 'Dinner with illuminated Parthenon views.', '2.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Ancient Agora & Museums',
        activities: [
          { time: 'Morning', title: 'Ancient Agora', description: 'Walk through the ancient marketplace.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Acropolis Museum', description: 'World-class museum with Parthenon views.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'National Archaeological Museum', description: 'Greece\'s premier ancient artifacts.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Monastiraki', description: 'Explore the flea market area and street food.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Psiri Bar Hopping', 'Athens\' vibrant nightlife.', '3.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Modern Athens',
        activities: [
          { time: 'Morning', title: 'Syntagma Square', description: 'Watch the changing of the guard.', duration: '1 hour' },
          adventureActivity('Morning', 'Lycabettus Hill Climb', 'Hike to the highest point in Athens.', '2 hours'),
          { time: 'Afternoon', title: 'Central Market', description: 'Experience the bustling Varvakios market.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Street Art Tour', description: 'Discover Athens\' vibrant street art in Exarchia.', duration: '2 hours' },
          { time: 'Evening', title: 'Koukaki Neighborhood', description: 'Trendy restaurants in up-and-coming area.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Beach Day at Vouliagmeni', 'Athens Riviera beach escape.', ['summer'], '5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip',
        activities: [
          { time: 'Morning', title: 'Delphi Day Trip', description: 'Visit the ancient oracle.', duration: '8 hours' },
          adventureActivity('Morning', 'Cape Sounion', 'Temple of Poseidon on dramatic cliffs.', '5 hours'),
          romanticActivity('Morning', 'Hydra Island', 'Car-free island for a romantic escape.', '8 hours'),
          familyActivity('Morning', 'Aegina Island', 'Easy island trip with beaches and pistachios.', '6 hours'),
          { time: 'Evening', title: 'Seaside Dinner', description: 'Fresh fish at Mikrolimano harbor.', duration: '2.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Explorations',
        activities: [
          { time: 'Morning', title: 'Benaki Museum', description: 'Greek art from ancient to modern times.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Kolonaki', description: 'Upscale neighborhood with boutiques.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Stavros Niarchos Center', description: 'Modern cultural center with parks.', duration: '2 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final Greek feast with meze and ouzo.', duration: '2.5 hours' },
          seasonalActivity('Evening', 'Athens Festival', 'Summer open-air performances at ancient Odeon.', ['summer'], '3 hours'),
        ]
      },
    ]
  },
  // MUNICH
  {
    cityId: 'munich',
    cityName: 'Munich',
    days: [
      {
        day: 1,
        title: 'Arrival & Marienplatz',
        activities: [
          { time: 'Morning', title: 'Arrive in Munich', description: 'Check in and grab a pretzel and weisswurst.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Marienplatz', description: 'Watch the Glockenspiel show.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Viktualienmarkt', description: 'Browse Munich\'s famous outdoor market.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Beer Hall Experience', description: 'Join the festivities at Hofbräuhaus.', duration: '3 hours' },
          friendsActivity('Evening', 'Beer Hall Crawl', 'Sample different beer halls.', '4 hours'),
        ]
      },
      {
        day: 2,
        title: 'Museums & Culture',
        activities: [
          { time: 'Morning', title: 'Deutsches Museum', description: 'One of the world\'s largest science museums.', duration: '3 hours' },
          familyActivity('Morning', 'Kids\' Kingdom', 'Interactive science exhibits for children.', '3 hours'),
          { time: 'Afternoon', title: 'Alte Pinakothek', description: 'Old Masters from Dürer to Rubens.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Schwabing', description: 'Bohemian neighborhood with great restaurants.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Opera at Nationaltheater', 'World-class Bavarian State Opera.', '3.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Royal Bavaria',
        activities: [
          { time: 'Morning', title: 'Nymphenburg Palace', description: 'Baroque summer residence with gardens.', duration: '3 hours' },
          { time: 'Afternoon', title: 'Munich Residenz', description: 'Former royal palace with treasury.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Beer Garden Evening', description: 'Join locals under chestnut trees.', duration: '3 hours', seasons: ['spring', 'summer', 'autumn'] },
          seasonalActivity('Evening', 'Christmas Markets', 'Magical markets at Marienplatz.', ['winter'], '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip',
        activities: [
          { time: 'Morning', title: 'Neuschwanstein Castle', description: 'The fairy-tale castle that inspired Disney.', duration: '8 hours' },
          adventureActivity('Morning', 'Zugspitze', 'Germany\'s highest mountain with cable car.', '8 hours'),
          familyActivity('Morning', 'Legoland Germany', 'Theme park about 90 minutes away.', '8 hours'),
          { time: 'Evening', title: 'Bavarian Feast', description: 'Schweinebraten, knödel, and beer.', duration: '2.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Munich Moments',
        activities: [
          { time: 'Morning', title: 'English Garden', description: 'One of the world\'s largest urban parks.', duration: '2.5 hours' },
          adventureActivity('Morning', 'Surfing at Eisbach', 'Watch urban river surfing.', '1.5 hours'),
          { time: 'Afternoon', title: 'BMW World', description: 'Free exhibition center.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Olympiapark', description: 'Site of the 1972 Olympics.', duration: '2 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final Bavarian feast.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Oktoberfest', 'September-October brings world\'s biggest beer festival!', ['autumn'], '6 hours'),
        ]
      },
    ]
  },
  // BERLIN
  {
    cityId: 'berlin',
    cityName: 'Berlin',
    days: [
      {
        day: 1,
        title: 'Arrival & Historic Center',
        activities: [
          { time: 'Morning', title: 'Arrive in Berlin', description: 'Check in and grab a currywurst.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Brandenburg Gate', description: 'Berlin\'s iconic symbol of unity.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Reichstag Building', description: 'Tour parliament and climb the glass dome.', duration: '2 hours' },
          { time: 'Evening', title: 'Memorial to the Murdered Jews', description: 'Powerful Holocaust memorial.', duration: '1 hour' },
          { time: 'Evening', title: 'Unter den Linden', description: 'Stroll Berlin\'s grand boulevard.', duration: '2.5 hours' },
        ]
      },
      {
        day: 2,
        title: 'Cold War History',
        activities: [
          { time: 'Morning', title: 'East Side Gallery', description: 'Walk along the longest remaining Berlin Wall stretch.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Checkpoint Charlie', description: 'Famous crossing point and museum.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Berlin Wall Tour', 'Understand the divided city with a historian.', '3.5 hours'),
          { time: 'Afternoon', title: 'DDR Museum', description: 'Interactive museum about life in East Germany.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Topography of Terror', description: 'Documentation center on Nazi terror.', duration: '2 hours' },
          { time: 'Evening', title: 'Kreuzberg', description: 'Explore multicultural neighborhood\'s food scene.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Kreuzberg Bar Scene', 'Dive bars and craft cocktails.', '4 hours'),
        ]
      },
      {
        day: 3,
        title: 'Museum Island & Culture',
        activities: [
          { time: 'Morning', title: 'Pergamon Museum', description: 'See the Ishtar Gate (check renovation status).', duration: '3 hours' },
          { time: 'Afternoon', title: 'Berlin Cathedral', description: 'Climb the dome for views.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Nikolaiviertel', description: 'Berlin\'s reconstructed medieval quarter.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Opera or Philharmonic', description: 'World-class performances.', duration: '3 hours' },
          romanticActivity('Evening', 'Gendarmenmarkt', 'Beautiful square with fine dining.', '2.5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Alternative Berlin',
        activities: [
          { time: 'Morning', title: 'Street Art Tour', description: 'Discover Berlin\'s vibrant urban art.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Mauerpark', description: 'Sunday flea market and outdoor karaoke.', duration: '3 hours', seasons: ['spring', 'summer', 'autumn'] },
          { time: 'Afternoon', title: 'Prenzlauer Berg', description: 'Trendy neighborhood with boutiques.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Club Scene', description: 'Berlin\'s legendary nightlife.', duration: 'All night' },
          seasonalActivity('Evening', 'Festival of Lights', 'October light projections.', ['autumn'], '3 hours'),
        ]
      },
      {
        day: 5,
        title: 'Parks & Farewell',
        activities: [
          { time: 'Morning', title: 'Tiergarten', description: 'Berlin\'s central park with Victory Column.', duration: '2 hours' },
          culturalActivity('Morning', 'Potsdam Day Trip', 'Frederick the Great\'s Sanssouci Palace.', '5 hours'),
          familyActivity('Morning', 'Berlin Zoo', 'One of the world\'s most famous zoos.', '3 hours'),
          { time: 'Afternoon', title: 'KaDeWe Department Store', description: 'Famous store with incredible food hall.', duration: '2 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Modern German cuisine.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Christmas Markets', 'Charming markets throughout the city.', ['winter'], '3 hours'),
        ]
      },
    ]
  },
  // ZURICH
  {
    cityId: 'zurich',
    cityName: 'Zurich',
    days: [
      {
        day: 1,
        title: 'Arrival & Old Town',
        activities: [
          { time: 'Morning', title: 'Arrive in Zurich', description: 'Check in and enjoy Swiss coffee.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Altstadt (Old Town)', description: 'Wander cobblestoned streets with guild houses.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Lindenhof', description: 'Hilltop park for views over the river.', duration: '45 mins' },
          { time: 'Evening', title: 'Niederdorf', description: 'Explore the lively nightlife quarter.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Bar Hopping', 'Zurich\'s excellent cocktail scene.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Lake & Mountains',
        activities: [
          { time: 'Morning', title: 'Lake Zurich Cruise', description: 'Scenic boat ride on the alpine lake.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Uetliberg Mountain', description: 'Take the train to Zurich\'s local mountain.', duration: '3 hours' },
          adventureActivity('Afternoon', 'Uetliberg Hiking', 'Hike the ridge trail with Alpine views.', '3.5 hours'),
          { time: 'Evening', title: 'Lakeside Dinner', description: 'Dine overlooking the lake.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Lake Swimming', 'Join locals at the Seebäder.', ['summer'], '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Art & Chocolate',
        activities: [
          { time: 'Morning', title: 'Kunsthaus Zurich', description: 'Switzerland\'s premier art museum.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Lindt Home of Chocolate', description: 'Massive chocolate museum with world\'s largest fountain.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'Chocolate Workshop', 'Make your own Swiss chocolates.', '2.5 hours'),
          { time: 'Afternoon', title: 'Zurich West', description: 'Trendy former industrial district.', duration: '2 hours' },
          { time: 'Evening', title: 'Im Viadukt', description: 'Dine in converted railway viaduct arches.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Day Trip Options',
        activities: [
          { time: 'Morning', title: 'Lucerne Day Trip', description: 'Visit charming lakeside city and Chapel Bridge.', duration: '6 hours' },
          adventureActivity('Morning', 'Mount Pilatus', 'Take the world\'s steepest cogwheel railway.', '7 hours'),
          romanticActivity('Morning', 'Rhine Falls', 'Europe\'s largest waterfall.', '5 hours'),
          { time: 'Evening', title: 'Farewell Fondue', description: 'Classic Swiss cheese fondue.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Christmas Markets', 'Zurich\'s spectacular train station market.', ['winter'], '2 hours'),
        ]
      },
      {
        day: 5,
        title: 'Final Explorations',
        activities: [
          { time: 'Morning', title: 'Grossmünster', description: 'Climb the tower of this Romanesque cathedral.', duration: '1 hour' },
          { time: 'Morning', title: 'Fraumünster', description: 'See Chagall\'s stunning stained glass.', duration: '45 mins' },
          { time: 'Afternoon', title: 'Swiss Souvenir Shopping', description: 'Watches, chocolate, and Swiss army knives.', duration: '2 hours' },
          { time: 'Evening', title: 'Final Lake Walk', description: 'Evening stroll before departure.', duration: '1.5 hours' },
        ]
      },
    ]
  },
  // INTERLAKEN
  {
    cityId: 'interlaken',
    cityName: 'Interlaken',
    days: [
      {
        day: 1,
        title: 'Arrival & Lake Views',
        activities: [
          { time: 'Morning', title: 'Arrive in Interlaken', description: 'Settle in and take in the stunning scenery.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Lake Thun Cruise', description: 'Scenic boat ride on turquoise alpine lake.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          romanticActivity('Afternoon', 'Sunset Cruise', 'Private boat with champagne.', '2 hours', ['spring', 'summer', 'autumn']),
          seasonalActivity('Afternoon', 'Winter Wonderland Walk', 'Snow-covered lakeside promenade.', ['winter'], '2 hours'),
          { time: 'Evening', title: 'Interlaken Town', description: 'Explore charming town center.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Swiss Beer & Fondue', 'Sample local beers with cheese fondue.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Jungfraujoch - Top of Europe',
        activities: [
          { time: 'Morning', title: 'Jungfrau Railway', description: 'Take the famous cogwheel train to Europe\'s highest station.', duration: '4-5 hours' },
          adventureActivity('Morning', 'Snow Fun Activities', 'Snow tubing, sledding, and glacier walks.', '2 hours'),
          familyActivity('Morning', 'Ice Palace', 'Explore frozen tunnels in the glacier.', '1 hour'),
          { time: 'Afternoon', title: 'Sphinx Observatory', description: 'Take in 360° views from the observation deck.', duration: '1 hour' },
          { time: 'Evening', title: 'Return via Grindelwald', description: 'Stop in the charming village for dinner.', duration: '2.5 hours' },
          seasonalActivity('Morning', 'Winter Snow Paradise', 'Best snow conditions at the top.', ['winter'], '2 hours'),
          seasonalActivity('Afternoon', 'Summer Glacier Hiking', 'Hike on the Aletsch Glacier with a guide.', ['summer'], '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Adventure Day',
        activities: [
          { time: 'Morning', title: 'Paragliding', description: 'Tandem flight over the Swiss Alps.', duration: '2 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Morning', 'Canyoning', 'Navigate waterfalls in alpine gorges.', '4 hours', ['summer']),
          seasonalActivity('Morning', 'Skiing at Grindelwald-First', 'Hit the slopes at top ski areas.', ['winter'], '4 hours'),
          seasonalActivity('Morning', 'Snowshoe Hiking', 'Winter hiking through snow-covered forests.', ['winter'], '3 hours'),
          { time: 'Afternoon', title: 'Harder Kulm', description: 'Take the funicular for panoramic views.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Sledding Run', 'Take the longest sled run in Europe (15km!).', ['winter'], '3 hours'),
          { time: 'Evening', title: 'Adventure Celebration', description: 'Toast your adventures over raclette.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Lauterbrunnen Valley',
        activities: [
          { time: 'Morning', title: 'Trümmelbach Falls', description: 'See the glacial waterfalls inside the mountain.', duration: '1.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          adventureActivity('Morning', 'Via Ferrata', 'Climb iron pathways on cliff faces.', '4 hours', ['summer', 'autumn']),
          seasonalActivity('Morning', 'Staubbach Falls Peak Flow', 'Late spring waterfall at its most spectacular.', ['spring'], '1 hour'),
          { time: 'Afternoon', title: 'Mürren & Gimmelwald', description: 'Visit car-free villages by cable car.', duration: '3 hours' },
          romanticActivity('Afternoon', 'Mountain Picnic', 'Swiss picnic in a meadow with views.', '2.5 hours', ['spring', 'summer', 'autumn']),
          seasonalActivity('Afternoon', 'Mürren Skiing', 'Excellent uncrowded skiing.', ['winter'], '4 hours'),
          { time: 'Evening', title: 'Staubbach Falls', description: 'Watch the 300m waterfall light up at dusk.', duration: '1.5 hours', seasons: ['spring', 'summer', 'autumn'] },
        ]
      },
      {
        day: 5,
        title: 'Lake & Departure',
        activities: [
          { time: 'Morning', title: 'Lake Brienz', description: 'Take a scenic cruise on crystal-clear lake.', duration: '2 hours', seasons: ['spring', 'summer', 'autumn'] },
          culturalActivity('Morning', 'Ballenberg Open-Air Museum', 'Explore 100+ historic Swiss buildings.', '3 hours'),
          seasonalActivity('Morning', 'Winter Markets', 'December Christmas markets in Interlaken and Thun.', ['winter'], '2 hours'),
          { time: 'Afternoon', title: 'Giessbach Falls', description: 'Visit stunning waterfall by boat and funicular.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          seasonalActivity('Afternoon', 'Final Ski Day', 'One last morning on the slopes.', ['winter'], '3 hours'),
          { time: 'Evening', title: 'Farewell Swiss Dinner', description: 'Final fondue feast with mountain views.', duration: '2.5 hours' },
        ]
      },
    ]
  },
  // LISBON
  {
    cityId: 'lisbon',
    cityName: 'Lisbon',
    days: [
      {
        day: 1,
        title: 'Arrival & Alfama',
        activities: [
          { time: 'Morning', title: 'Arrive in Lisbon', description: 'Check in and enjoy a pastel de nata.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Alfama District', description: 'Wander the narrow streets of the oldest neighborhood.', duration: '3 hours' },
          { time: 'Afternoon', title: 'Castelo de São Jorge', description: 'Explore the Moorish castle with panoramic views.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Fado Evening', description: 'Experience Portugal\'s soulful music in Alfama.', duration: '3 hours' },
          romanticActivity('Evening', 'Traditional Fado House', 'Intimate candlelit performance.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Belém & Monuments',
        activities: [
          { time: 'Morning', title: 'Belém Tower', description: 'Visit the iconic tower that guarded the harbor.', duration: '1 hour' },
          { time: 'Morning', title: 'Jerónimos Monastery', description: 'Stunning Manueline architecture.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Pastéis de Belém', description: 'Original custard tart bakery since 1837.', duration: '45 mins' },
          familyActivity('Afternoon', 'Oceanarium', 'One of Europe\'s best aquariums.', '2.5 hours'),
          { time: 'Evening', title: 'LX Factory', description: 'Trendy creative hub with restaurants.', duration: '2.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'Tram 28 & Neighborhoods',
        activities: [
          { time: 'Morning', title: 'Tram 28 Route', description: 'Ride the iconic yellow tram.', duration: '1 hour' },
          { time: 'Morning', title: 'Chiado & Bairro Alto', description: 'Explore elegant squares and street art.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Santa Justa Elevator', description: 'Historic iron elevator for city views.', duration: '45 mins' },
          adventureActivity('Afternoon', 'Street Art Tour', description: 'Discover Lisbon\'s incredible urban art.', '2.5 hours'),
          { time: 'Evening', title: 'Bairro Alto', description: 'Bar hopping in the nightlife district.', duration: '3 hours' },
          seasonalActivity('Evening', 'Santos Populares', 'June festivals with sardines and dancing.', ['summer'], '4 hours'),
        ]
      },
      {
        day: 4,
        title: 'Sintra Day Trip',
        activities: [
          { time: 'Morning', title: 'Pena Palace', description: 'Colorful Romantic palace on hilltop.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Quinta da Regaleira', description: 'Mysterious gardens with initiatic well.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Sintra Hiking', 'Hike through the misty forest.', '3 hours'),
          { time: 'Evening', title: 'Return to Lisbon', description: 'Dinner in Lisbon.', duration: '2 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Lisbon Moments',
        activities: [
          { time: 'Morning', title: 'Time Out Market', description: 'Taste the best of Portuguese cuisine.', duration: '2 hours' },
          adventureActivity('Morning', 'Bike along the River', 'Cycle from Cais do Sodré to Belém.', '2.5 hours'),
          { time: 'Afternoon', title: 'Miradouros', description: 'Visit Lisbon\'s famous viewpoints.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Bacalhau and vinho verde.', duration: '2.5 hours' },
        ]
      },
    ]
  },
  // DUBLIN
  {
    cityId: 'dublin',
    cityName: 'Dublin',
    days: [
      {
        day: 1,
        title: 'Arrival & Temple Bar',
        activities: [
          { time: 'Morning', title: 'Arrive in Dublin', description: 'Check in and grab coffee on Grafton Street.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Trinity College', description: 'Visit the Long Room Library and Book of Kells.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Grafton Street', description: 'Stroll Dublin\'s main shopping street.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Temple Bar', description: 'Explore the famous cobblestone quarter.', duration: '3 hours' },
          friendsActivity('Evening', 'Temple Bar Pub Crawl', 'Hit the famous pubs with live music.', '4 hours'),
        ]
      },
      {
        day: 2,
        title: 'Guinness & History',
        activities: [
          { time: 'Morning', title: 'Guinness Storehouse', description: 'Learn to pour the perfect pint.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Kilmainham Gaol', description: 'Powerful prison museum of Irish independence.', duration: '1.5 hours' },
          familyActivity('Afternoon', 'Dublin Zoo', 'One of the world\'s oldest zoos.', '3 hours'),
          { time: 'Evening', title: 'Traditional Music Pub', description: 'Find a session of live traditional music.', duration: '3 hours' },
        ]
      },
      {
        day: 3,
        title: 'Georgian Dublin & Culture',
        activities: [
          { time: 'Morning', title: 'National Museum', description: 'Bronze Age gold and medieval treasures. Free!', duration: '2 hours' },
          { time: 'Morning', title: 'St. Stephen\'s Green', description: 'Stroll through the Victorian park.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Little Museum of Dublin', description: 'Charming collection of Dublin history.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Merrion Row', description: 'Upscale restaurants and classic pubs.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'St. Patrick\'s Festival', 'March brings parades and festivities.', ['spring'], '5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip',
        activities: [
          { time: 'Morning', title: 'Cliffs of Moher', description: 'Ireland\'s most spectacular natural wonder.', duration: '10 hours' },
          adventureActivity('Morning', 'Wicklow Mountains', 'Hike to Glendalough\'s ancient monastery.', '6 hours'),
          romanticActivity('Morning', 'Howth Coastal Walk', 'Sea cliffs and seafood lunch.', '5 hours'),
          { time: 'Evening', title: 'Return to Dublin', description: 'Rest and casual dinner.', duration: '2 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Dublin Moments',
        activities: [
          { time: 'Morning', title: 'Jameson Distillery', description: 'Irish whiskey history and tasting.', duration: '2 hours' },
          { time: 'Morning', title: 'Phoenix Park', description: 'One of Europe\'s largest urban parks.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Final Shopping', description: 'Irish woolens, books, and souvenirs.', duration: '2 hours' },
          { time: 'Evening', title: 'Farewell Irish Feast', description: 'Final pub dinner with music.', duration: '3 hours' },
        ]
      },
    ]
  },
  // EDINBURGH
  {
    cityId: 'edinburgh',
    cityName: 'Edinburgh',
    days: [
      {
        day: 1,
        title: 'Arrival & Royal Mile',
        activities: [
          { time: 'Morning', title: 'Arrive in Edinburgh', description: 'Check in and admire the dramatic skyline.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Edinburgh Castle', description: 'Scotland\'s most famous castle.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Royal Mile', description: 'Walk down from the castle through Old Town.', duration: '2 hours' },
          { time: 'Evening', title: 'Grassmarket', description: 'Historic square with pubs.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Whisky Pub Crawl', 'Sample Scottish malts.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Old Town Depths',
        activities: [
          { time: 'Morning', title: 'Palace of Holyroodhouse', description: 'The Queen\'s Scottish residence.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Arthur\'s Seat', description: 'Hike the ancient volcano for views.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'Dynamic Earth', 'Interactive science museum.', '2.5 hours'),
          { time: 'Afternoon', title: 'Real Mary King\'s Close', description: 'Underground streets beneath the city.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Ghost Tour', description: 'Spooky walking tour through haunted sites.', duration: '1.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'New Town & Culture',
        activities: [
          { time: 'Morning', title: 'Scottish National Gallery', description: 'Scottish masters and European paintings. Free!', duration: '2 hours' },
          { time: 'Morning', title: 'Calton Hill', description: 'Climb for views and monuments.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Scotch Whisky Experience', description: 'Learn about Scotland\'s national drink.', duration: '2 hours' },
          familyActivity('Afternoon', 'Camera Obscura', 'Optical illusions and rooftop views.', '2 hours'),
          { time: 'Evening', title: 'Stockbridge', description: 'Charming village neighborhood for dinner.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Day Trip',
        activities: [
          { time: 'Morning', title: 'Scottish Highlands', description: 'Day tour through stunning scenery.', duration: '10 hours' },
          adventureActivity('Morning', 'Loch Ness & Glencoe', 'Dramatic landscapes and monster hunting.', '12 hours'),
          romanticActivity('Morning', 'St Andrews', 'Beautiful university town and golf history.', '6 hours'),
          { time: 'Evening', title: 'Scottish Dinner', description: 'Haggis, neeps, and tatties.', duration: '2.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Edinburgh Moments',
        activities: [
          { time: 'Morning', title: 'Dean Village', description: 'Picturesque former milling village.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Royal Yacht Britannia', description: 'Tour the Queen\'s former yacht.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Victoria Street', description: 'Colorful street (Harry Potter inspiration!).', duration: '1 hour' },
          { time: 'Evening', title: 'Farewell Ceilidh', description: 'Traditional Scottish dance evening.', duration: '3 hours' },
          seasonalActivity('Evening', 'Edinburgh Festival', 'August brings world\'s largest arts festival.', ['summer'], '5 hours'),
          seasonalActivity('Evening', 'Hogmanay', 'New Year\'s celebration!', ['winter'], '6 hours'),
        ]
      },
    ]
  },
  // BUDAPEST
  {
    cityId: 'budapest',
    cityName: 'Budapest',
    days: [
      {
        day: 1,
        title: 'Arrival & Pest',
        activities: [
          { time: 'Morning', title: 'Arrive in Budapest', description: 'Check in and explore the neighborhood.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Hungarian Parliament', description: 'Tour the stunning Gothic Revival building.', duration: '2 hours' },
          { time: 'Evening', title: 'Danube Promenade', description: 'Walk along the river past Shoes on the Danube memorial.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Jewish Quarter', description: 'Discover the ruin bars and nightlife.', duration: '3 hours' },
          friendsActivity('Evening', 'Ruin Bar Crawl', 'Famous ruin bars including Szimpla Kert.', '4 hours'),
        ]
      },
      {
        day: 2,
        title: 'Buda Castle District',
        activities: [
          { time: 'Morning', title: 'Buda Castle', description: 'Take the funicular up to the historic castle district.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Fisherman\'s Bastion', description: 'Fairy-tale towers with panoramic views.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Matthias Church', description: 'Beautiful church with colorful roof tiles.', duration: '1 hour' },
          { time: 'Evening', title: 'Gellért Hill', description: 'Climb for sunset views over the city.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Tabán Dinner', description: 'Traditional Hungarian restaurants.', duration: '2.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'Thermal Baths',
        activities: [
          { time: 'Morning', title: 'Széchenyi Thermal Baths', description: 'Soak in Europe\'s largest thermal bath complex.', duration: '3 hours' },
          { time: 'Afternoon', title: 'Heroes\' Square', description: 'Iconic square with millennium monument.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Museum of Fine Arts', description: 'European masters in a grand building.', duration: '2 hours' },
          { time: 'Evening', title: 'Andrássy Avenue', description: 'Budapest\'s grand boulevard.', duration: '2.5 hours' },
          seasonalActivity('Afternoon', 'Christmas Market', 'Magical markets at Vörösmarty Square.', ['winter'], '2.5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Local Life & Markets',
        activities: [
          { time: 'Morning', title: 'Great Market Hall', description: 'Browse Hungary\'s largest market for paprika.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Dohány Street Synagogue', description: 'Second-largest synagogue in the world.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Gellért Baths', description: 'Art Nouveau thermal baths.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Danube Night Cruise', description: 'See the illuminated Parliament.', duration: '1.5 hours' },
          romanticActivity('Evening', 'Dinner Cruise', 'Romantic dining on the river.', '2.5 hours'),
          seasonalActivity('Evening', 'Sziget Festival', 'August brings Europe\'s best music festival.', ['summer'], '8 hours'),
        ]
      },
      {
        day: 5,
        title: 'Final Explorations',
        activities: [
          { time: 'Morning', title: 'House of Terror', description: 'Museum of fascist and communist oppression.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Margaret Island', description: 'Relax in the park, rent bikes or golf carts.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Final Souvenirs', description: 'Paprika, Tokaji wine, and Hungarian crafts.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Farewell Hungarian Feast', description: 'Goulash, duck, and Hungarian wines.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Night Walk on Chain Bridge', 'Final views of illuminated Budapest.', '1 hour'),
        ]
      },
    ]
  },
  // COPENHAGEN
  {
    cityId: 'copenhagen',
    cityName: 'Copenhagen',
    days: [
      {
        day: 1,
        title: 'Arrival & Nyhavn',
        activities: [
          { time: 'Morning', title: 'Arrive in Copenhagen', description: 'Check in and enjoy Danish pastries.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Nyhavn', description: 'Stroll along the colorful harbor.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Canal Boat Tour', description: 'See the city from the water.', duration: '1 hour' },
          { time: 'Evening', title: 'Nyhavn Dinner', description: 'Fresh Danish seafood by the colorful houses.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Copenhagen Bars', 'Craft cocktails and Danish microbrews.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Royal Copenhagen',
        activities: [
          { time: 'Morning', title: 'Little Mermaid', description: 'Visit the iconic harbor statue.', duration: '45 mins' },
          { time: 'Morning', title: 'Rosenborg Castle', description: 'Crown jewels and royal history.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Amalienborg Palace', description: 'Watch the changing of the guard.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Christiansborg Palace', description: 'Government buildings with royal reception rooms.', duration: '2 hours' },
          { time: 'Evening', title: 'Strøget', description: 'Europe\'s longest pedestrian street.', duration: '2.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'Tivoli & Design',
        activities: [
          { time: 'Morning', title: 'Tivoli Gardens', description: 'World\'s second-oldest amusement park.', duration: '3-4 hours' },
          familyActivity('Morning', 'Tivoli Rides', 'Classic amusement park fun.', '4 hours'),
          seasonalActivity('Morning', 'Tivoli at Christmas', 'December transforms Tivoli.', ['winter'], '4 hours'),
          { time: 'Afternoon', title: 'Designmuseum Danmark', description: 'Danish design from chairs to fashion.', duration: '2 hours' },
          { time: 'Evening', title: 'Vesterbro', description: 'Hip neighborhood with great restaurants.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Freetown & Day Trip',
        activities: [
          { time: 'Morning', title: 'Christiania', description: 'Explore the famous freetown.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Louisiana Museum', description: 'World-class modern art by the sea.', duration: '3 hours' },
          romanticActivity('Afternoon', 'Dyrehaven', 'Royal deer park with romantic paths.', '3 hours'),
          { time: 'Evening', title: 'Return & Dinner', description: 'Final evening in Copenhagen.', duration: '2.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Copenhagen Moments',
        activities: [
          { time: 'Morning', title: 'Torvehallerne Market', description: 'Gourmet food market with smørrebrød.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Botanical Gardens', description: 'Beautiful gardens with Palm House.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Final Hygge', description: 'Experience Danish coziness in a café.', duration: '2 hours' },
          { time: 'Evening', title: 'Farewell Smørrebrød', description: 'Traditional open sandwiches and aquavit.', duration: '2.5 hours' },
        ]
      },
    ]
  },
  // STOCKHOLM
  {
    cityId: 'stockholm',
    cityName: 'Stockholm',
    days: [
      {
        day: 1,
        title: 'Arrival & Gamla Stan',
        activities: [
          { time: 'Morning', title: 'Arrive in Stockholm', description: 'Check in and enjoy Swedish fika.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Gamla Stan', description: 'Wander the medieval old town.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Royal Palace', description: 'Watch the changing of the guard.', duration: '2 hours' },
          { time: 'Evening', title: 'Gamla Stan Dinner', description: 'Swedish cuisine in a historic cellar.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Candlelit Cellar', 'Romantic dinner in medieval vault.', '2.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Museums & Djurgården',
        activities: [
          { time: 'Morning', title: 'Vasa Museum', description: 'See the 17th-century warship that sank and was recovered.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'ABBA The Museum', description: 'Interactive museum celebrating Sweden\'s pop legends.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Skansen', description: 'Open-air museum with historic buildings and Nordic animals.', duration: '3 hours' },
          { time: 'Evening', title: 'Djurgården Walk', description: 'Evening stroll through the green island.', duration: '1.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'Modern Stockholm',
        activities: [
          { time: 'Morning', title: 'City Hall', description: 'Tour the Nobel Prize banquet hall.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Fotografiska', description: 'World-class photography museum.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Södermalm', description: 'Trendy neighborhood with vintage shops.', duration: '2.5 hours' },
          { time: 'Evening', title: 'SoFo Dining', description: 'Trendy restaurants south of Folkungagatan.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Monteliusvägen Sunset', 'Stunning city views from cliff walk.', '1.5 hours'),
          seasonalActivity('Evening', 'Midsummer', 'June brings Sweden\'s biggest celebration.', ['summer'], '6 hours'),
        ]
      },
      {
        day: 4,
        title: 'Archipelago Day Trip',
        activities: [
          { time: 'Morning', title: 'Stockholm Archipelago', description: 'Ferry to one of 30,000 islands.', duration: '6-8 hours' },
          adventureActivity('Morning', 'Kayaking Tour', 'Paddle through the islands.', '6 hours', ['summer']),
          romanticActivity('Morning', 'Fjäderholmarna', 'Closest island for romantic escape.', '4 hours'),
          { time: 'Evening', title: 'Return to Stockholm', description: 'Evening ferry back to the city.', duration: '2 hours' },
          seasonalActivity('Morning', 'Winter Archipelago', 'Frozen sea walking and cozy restaurants.', ['winter'], '5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Final Stockholm Moments',
        activities: [
          { time: 'Morning', title: 'Moderna Museet', description: 'Modern art on Skeppsholmen.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Östermalms Saluhall', description: 'Historic food hall for Swedish delicacies.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Final Shopping', description: 'Swedish design, fashion, and souvenirs.', duration: '2 hours' },
          { time: 'Evening', title: 'Farewell Swedish Feast', description: 'Meatballs, herring, and aquavit.', duration: '2.5 hours' },
          seasonalActivity('Evening', 'Nobel Week', 'December brings Nobel Prize ceremonies.', ['winter'], '3 hours'),
        ]
      },
    ]
  },
  // NICE
  {
    cityId: 'nice',
    cityName: 'Nice',
    days: [
      {
        day: 1,
        title: 'Arrival & Promenade',
        activities: [
          { time: 'Morning', title: 'Arrive in Nice', description: 'Check into your hotel on the Promenade.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Promenade des Anglais', description: 'Stroll the famous seafront boulevard.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Beach Time', description: 'Relax on the pebbly beach and swim.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          luxuryActivity('Afternoon', 'Private Beach Club', 'Loungers and service at Ruhl Plage.', '3 hours', ['summer']),
          { time: 'Evening', title: 'Old Nice (Vieux Nice)', description: 'Wander baroque streets and enjoy Niçoise cuisine.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Rooftop Aperitivo', 'Sunset drinks overlooking the bay.', '2 hours'),
        ]
      },
      {
        day: 2,
        title: 'Old Nice & Markets',
        activities: [
          { time: 'Morning', title: 'Cours Saleya Market', description: 'Famous flower market and Provençal produce.', duration: '2 hours' },
          { time: 'Morning', title: 'Castle Hill', description: 'Climb for panoramic views of the bay.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Matisse Museum', description: 'Works by the artist who loved the Riviera.', duration: '1.5 hours' },
          culturalActivity('Afternoon', 'Art of Nice Tour', 'Matisse and Chagall museums with guide.', '4 hours'),
          { time: 'Evening', title: 'Socca Dinner', description: 'Try Nice\'s famous chickpea pancake.', duration: '2 hours' },
          seasonalActivity('Morning', 'Nice Carnival', 'February brings colorful parades.', ['winter'], '4 hours'),
        ]
      },
      {
        day: 3,
        title: 'Day Trip Options',
        activities: [
          { time: 'Morning', title: 'Monaco Day Trip', description: 'Visit the glamorous principality.', duration: '5-6 hours' },
          luxuryActivity('Morning', 'Monaco Grand Prix Route', 'Drive the famous F1 circuit.', '2 hours'),
          romanticActivity('Morning', 'Èze Village', 'Perched medieval village with perfume factory.', '4 hours'),
          adventureActivity('Morning', 'Gorges du Verdon', 'Europe\'s Grand Canyon for kayaking.', '8 hours', ['spring', 'summer', 'autumn']),
          culturalActivity('Morning', 'Saint-Paul-de-Vence', 'Artists\' village with galleries.', '4 hours'),
          { time: 'Evening', title: 'Return to Nice', description: 'Evening on the Promenade.', duration: '2 hours' },
        ]
      },
      {
        day: 4,
        title: 'Cannes & Antibes',
        activities: [
          { time: 'Morning', title: 'Cannes', description: 'Walk La Croisette and see Palais des Festivals.', duration: '3 hours' },
          luxuryActivity('Morning', 'Cannes Beach Club', 'Glamorous beach experience.', '4 hours', ['summer']),
          { time: 'Afternoon', title: 'Antibes', description: 'Charming old town and Picasso Museum.', duration: '3 hours' },
          adventureActivity('Afternoon', 'Cap d\'Antibes Hike', 'Coastal path with stunning views.', '3 hours'),
          { time: 'Evening', title: 'Return to Nice', description: 'Final evening in the city.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Villefranche-sur-Mer', 'Romantic dinner in the colorful port.', '3 hours'),
        ]
      },
      {
        day: 5,
        title: 'Final Riviera Moments',
        activities: [
          { time: 'Morning', title: 'Chagall Museum', description: 'Biblical message paintings.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Russian Orthodox Cathedral', description: 'Stunning church with ornate domes.', duration: '45 mins' },
          { time: 'Afternoon', title: 'Final Beach Time', description: 'Last swim in the Mediterranean.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          { time: 'Evening', title: 'Farewell Niçoise', description: 'Salade Niçoise, pissaladière, and rosé.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Grand Hotel Dinner', 'Farewell dinner at a palace hotel.', '3 hours'),
        ]
      },
    ]
  },
  // SEVILLE
  {
    cityId: 'seville',
    cityName: 'Seville',
    days: [
      {
        day: 1,
        title: 'Arrival & Alcázar',
        activities: [
          { time: 'Morning', title: 'Arrive in Seville', description: 'Check in and escape the heat with a coffee.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Real Alcázar', description: 'Stunning Moorish palace with beautiful gardens.', duration: '2.5 hours' },
          culturalActivity('Afternoon', 'Mudéjar Architecture Tour', 'Islamic-Christian fusion in Seville.', '3 hours'),
          { time: 'Evening', title: 'Barrio Santa Cruz', description: 'Wander the atmospheric Jewish Quarter.', duration: '2 hours' },
          { time: 'Evening', title: 'Tapas Dinner', description: 'Hop between bars for authentic Sevillian tapas.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Tapas Crawl', 'Local guide shows hidden bars.', '3.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Cathedral & Flamenco',
        activities: [
          { time: 'Morning', title: 'Seville Cathedral & Giralda', description: 'World\'s largest Gothic cathedral.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Plaza de España', description: 'Stunning 1929 Exhibition plaza.', duration: '1.5 hours' },
          familyActivity('Afternoon', 'Rowboat on the Canal', 'Paddle around the beautiful plaza.', '1 hour'),
          { time: 'Afternoon', title: 'María Luisa Park', description: 'Escape the heat in the beautiful gardens.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Flamenco Show', description: 'Authentic flamenco in an intimate tablao.', duration: '2 hours' },
          romanticActivity('Evening', 'Private Flamenco', 'Exclusive show with dinner.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Triana & River',
        activities: [
          { time: 'Morning', title: 'Triana', description: 'Cross the bridge to this traditional neighborhood.', duration: '2.5 hours' },
          { time: 'Morning', title: 'Triana Market', description: 'Fresh produce and ceramics.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Ceramics Workshop', 'Learn traditional Triana tile painting.', '3 hours'),
          { time: 'Afternoon', title: 'Metropol Parasol', description: 'Modern wooden structure with rooftop views.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Alameda de Hércules', description: 'Trendy plaza with bars and restaurants.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Rooftop Sunset', 'Cocktails with cathedral views.', '2 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip',
        activities: [
          { time: 'Morning', title: 'Córdoba Day Trip', description: 'Visit the stunning Mezquita.', duration: '7 hours' },
          culturalActivity('Morning', 'Córdoba Expert Tour', 'Moorish Spain\'s former capital.', '8 hours'),
          adventureActivity('Morning', 'Ronda', 'Dramatic clifftop town with famous bridge.', '7 hours'),
          romanticActivity('Morning', 'White Villages', 'Explore pueblos blancos in the hills.', '6 hours'),
          { time: 'Evening', title: 'Return to Seville', description: 'Evening tapas in the city.', duration: '2.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Seville Moments',
        activities: [
          { time: 'Morning', title: 'Archivo de Indias', description: 'Documents from Spain\'s New World exploration.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Final Barrio Stroll', description: 'Revisit favorite spots in Santa Cruz.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Shopping', description: 'Ceramics, fans, and sherry.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Farewell Feast', description: 'Final tapas and fino sherry.', duration: '2.5 hours' },
          seasonalActivity('Morning', 'Semana Santa', 'Holy Week processions - unforgettable.', ['spring'], '4 hours'),
          seasonalActivity('Afternoon', 'Feria de Abril', 'April Fair - flamenco dresses.', ['spring'], '5 hours'),
        ]
      },
    ]
  },
  // DUBROVNIK
  {
    cityId: 'dubrovnik',
    cityName: 'Dubrovnik',
    days: [
      {
        day: 1,
        title: 'Arrival & Old Town',
        activities: [
          { time: 'Morning', title: 'Arrive in Dubrovnik', description: 'Check in and marvel at the setting.', duration: '2-3 hours' },
          { time: 'Afternoon', title: 'Old Town Exploration', description: 'Enter through Pile Gate and explore the Stradun.', duration: '2.5 hours' },
          culturalActivity('Afternoon', 'Old Town Walking Tour', 'History from Ragusa to modern times.', '2.5 hours'),
          { time: 'Evening', title: 'City Walls Walk', description: 'Walk the famous walls as the sun sets.', duration: '2 hours' },
          romanticActivity('Evening', 'Sunset Walls Walk', 'Time it for golden hour.', '2 hours'),
          { time: 'Evening', title: 'Old Town Dinner', description: 'Fresh seafood in a historic restaurant.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Cliffside Fine Dining', 'Michelin-quality with sea views.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Game of Thrones & Views',
        activities: [
          { time: 'Morning', title: 'Lovrijenac Fortress', description: 'The "Red Keep" with stunning views.', duration: '1 hour' },
          culturalActivity('Morning', 'Game of Thrones Tour', 'Visit all the King\'s Landing locations.', '3 hours'),
          { time: 'Morning', title: 'Rector\'s Palace', description: 'Beautiful Gothic-Renaissance palace.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Cable Car', description: 'Ride up Mount Srđ for panoramic views.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Hike Mount Srđ', 'Hike up instead of taking the cable car.', '2.5 hours'),
          { time: 'Evening', title: 'Buža Bar', description: 'Hidden cliff bar with swimming and drinks.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          friendsActivity('Evening', 'Cliff Bar Sunset', 'Drinks on the rocks outside the walls.', '3 hours', ['spring', 'summer', 'autumn']),
        ]
      },
      {
        day: 3,
        title: 'Islands & Sea',
        activities: [
          { time: 'Morning', title: 'Lokrum Island', description: 'Short ferry to peaceful island with botanical garden.', duration: '4 hours', seasons: ['spring', 'summer', 'autumn'] },
          romanticActivity('Morning', 'Lokrum Escape', 'Romantic island exploration and swimming.', '4 hours', ['spring', 'summer', 'autumn']),
          adventureActivity('Morning', 'Kayak Around Walls', 'Sea kayaking along the city walls.', '3 hours', ['spring', 'summer', 'autumn']),
          { time: 'Afternoon', title: 'Elafiti Islands Cruise', description: 'Sail to nearby islands for swimming.', duration: '5 hours', seasons: ['spring', 'summer', 'autumn'] },
          luxuryActivity('Afternoon', 'Private Yacht Charter', 'Cruise the islands in style.', '6 hours', ['spring', 'summer', 'autumn']),
          seasonalActivity('Morning', 'Winter Walking', 'Explore old town without the crowds.', ['winter'], '3 hours'),
          { time: 'Evening', title: 'Old Port Dinner', description: 'Fresh catch in the historic harbor.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Day Trip',
        activities: [
          { time: 'Morning', title: 'Montenegro Day Trip', description: 'Visit Kotor\'s bay and old town.', duration: '10 hours' },
          adventureActivity('Morning', 'Kotor Walls Climb', 'Climb the fortress walls for views.', '3 hours'),
          romanticActivity('Morning', 'Pelješac Wine Tour', 'Wine tasting on the nearby peninsula.', '6 hours'),
          culturalActivity('Morning', 'Mostar Day Trip', 'Famous bridge and Ottoman history in Bosnia.', '10 hours'),
          familyActivity('Morning', 'Cavtat', 'Charming nearby town with beaches.', '4 hours'),
          { time: 'Evening', title: 'Return to Dubrovnik', description: 'Evening in old town.', duration: '2 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Dubrovnik Moments',
        activities: [
          { time: 'Morning', title: 'Dominican Monastery', description: 'Peaceful cloister and museum.', duration: '1 hour' },
          { time: 'Morning', title: 'Franciscan Monastery', description: 'Ancient pharmacy and beautiful cloister.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Final Beach Time', description: 'One last swim in the Adriatic.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          { time: 'Afternoon', title: 'Souvenir Shopping', description: 'Coral jewelry and Croatian goods.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final Croatian feast in old town.', duration: '2.5 hours' },
          seasonalActivity('Evening', 'Dubrovnik Summer Festival', 'July-August brings drama and music.', ['summer'], '3 hours'),
        ]
      },
    ]
  },
  // AMALFI COAST
  {
    cityId: 'amalfi',
    cityName: 'Amalfi Coast',
    days: [
      {
        day: 1,
        title: 'Arrival & Positano',
        activities: [
          { time: 'Morning', title: 'Arrive on Amalfi Coast', description: 'Scenic drive or ferry along the dramatic coastline.', duration: '2-3 hours' },
          luxuryActivity('Morning', 'Private Transfer', 'Luxury car service from Naples or Rome.', '3 hours'),
          { time: 'Afternoon', title: 'Positano Exploration', description: 'Wander the colorful vertical village.', duration: '3 hours' },
          romanticActivity('Afternoon', 'Positano Photo Walk', 'Capture the iconic colorful houses.', '2.5 hours'),
          { time: 'Afternoon', title: 'Spiaggia Grande', description: 'Main beach with dramatic views.', duration: '2 hours', seasons: ['spring', 'summer', 'autumn'] },
          { time: 'Evening', title: 'Cliffside Dinner', description: 'Fresh seafood with dramatic coast views.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Le Sirenuse Terrace', 'Cocktails at the legendary hotel.', '2 hours'),
        ]
      },
      {
        day: 2,
        title: 'Amalfi Town & Ravello',
        activities: [
          { time: 'Morning', title: 'Amalfi Town', description: 'Visit the magnificent cathedral and paper museum.', duration: '2.5 hours' },
          { time: 'Morning', title: 'Amalfi Cathedral', description: 'Stunning Arab-Norman cathedral.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Ravello', description: 'Hilltop town with beautiful villas and gardens.', duration: '3 hours' },
          romanticActivity('Afternoon', 'Villa Rufolo Gardens', 'Romantic gardens with coastal panoramas.', '2 hours'),
          culturalActivity('Afternoon', 'Villa Cimbrone', 'Terrace of Infinity with stunning views.', '1.5 hours'),
          { time: 'Evening', title: 'Ravello Dinner', description: 'Elegant dining in the clifftop town.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Ravello Festival', 'Summer concerts in the gardens.', '3 hours', ['summer']),
        ]
      },
      {
        day: 3,
        title: 'Hiking & Nature',
        activities: [
          { time: 'Morning', title: 'Path of the Gods', description: 'Legendary coastal hike with stunning views.', duration: '4 hours', seasons: ['spring', 'autumn'] },
          adventureActivity('Morning', 'Full Trail Hike', 'Complete Path of the Gods from Bomerano to Positano.', '5 hours', ['spring', 'autumn']),
          seasonalActivity('Morning', 'Summer Boat Tour', 'In summer heat, take a boat tour instead.', ['summer'], '4 hours'),
          { time: 'Afternoon', title: 'Boat Tour', description: 'See the coast from the water, visit grottos.', duration: '3 hours' },
          luxuryActivity('Afternoon', 'Private Boat Charter', 'Your own gozzo with captain and lunch.', '5 hours', ['spring', 'summer', 'autumn']),
          familyActivity('Afternoon', 'Emerald Grotto', 'Visit the beautiful sea cave.', '2 hours'),
          { time: 'Evening', title: 'Seaside Dinner', description: 'Fresh catch at a waterfront restaurant.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Capri Day Trip',
        activities: [
          { time: 'Morning', title: 'Ferry to Capri', description: 'Cross to the glamorous island.', duration: '1 hour' },
          { time: 'Morning', title: 'Blue Grotto', description: 'Famous sea cave with electric blue waters.', duration: '2 hours' },
          luxuryActivity('Morning', 'Private Blue Grotto', 'Beat the crowds with early private tour.', '2.5 hours'),
          { time: 'Afternoon', title: 'Capri Town', description: 'Designer shopping and people watching.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Anacapri & Villa San Michele', description: 'Quieter upper town with stunning villa.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Monte Solaro', 'Chair lift to the highest point.', '2 hours'),
          romanticActivity('Afternoon', 'Faraglioni Boat Tour', 'Sail past the iconic rock formations.', '2 hours'),
          { time: 'Evening', title: 'Return to Amalfi', description: 'Sunset ferry back to the coast.', duration: '1.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Final Coast Moments',
        activities: [
          { time: 'Morning', title: 'Lemon Tour', description: 'Visit lemon groves and taste limoncello.', duration: '2 hours' },
          familyActivity('Morning', 'Ceramic Workshop', 'Paint traditional Vietri ceramics.', '2 hours'),
          { time: 'Morning', title: 'Atrani', description: 'Tiny fishing village often missed by tourists.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Final Beach Time', description: 'One last swim in the Mediterranean.', duration: '2.5 hours', seasons: ['spring', 'summer', 'autumn'] },
          { time: 'Afternoon', title: 'Shopping', description: 'Ceramics, limoncello, and sandals.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final feast of fresh pasta and seafood.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Finale', 'Don Alfonso or other starred restaurants.', '3.5 hours'),
          romanticActivity('Evening', 'Sunset from the Terrace', 'Watch your last Amalfi sunset.', '1.5 hours'),
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
    if (!activity.tripTypes) return true
    if (!tripType) return true
    return activity.tripTypes.includes(tripType)
  })
}

// Helper function to filter activities based on season
export const filterActivitiesBySeason = (activities: Activity[], season: Season | null): Activity[] => {
  return activities.filter(activity => {
    if (!activity.seasons) return true
    if (!season) return true
    return activity.seasons.includes(season)
  })
}

// Combined filter for both trip type and season
export const filterActivities = (activities: Activity[], tripType: TripType | null, season: Season | null): Activity[] => {
  return activities.filter(activity => {
    const tripTypeMatch = !activity.tripTypes || !tripType || activity.tripTypes.includes(tripType)
    const seasonMatch = !activity.seasons || !season || activity.seasons.includes(season)
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
    
    const effectiveTripType = tripType ?? globalTripType
    const effectiveSeason = season ?? globalSeason

    for (let i = 0; i < nights; i++) {
      const dayIndex = Math.min(i, cityItinerary.days.length - 1)
      const dayData = cityItinerary.days[dayIndex]
      
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
